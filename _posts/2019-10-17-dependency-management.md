---
layout: blog-detail
post-type: blog
by: Alexandre Archambault, Sébastien Doeraene
title: "Better management of transitive dependencies and conflicts"
---

Early in 2019, the Scala Center advisory board accepted [a proposal from Spotify](https://github.com/scalacenter/advisoryboard/blob/master/proposals/020-sbt-transitive-dependencies-conflicts.md), whose goal is to improve the handling of conflicts in dependency management in sbt.

The work we've been doing may interest you if:

* You've run into trouble with version conflicts between dependencies and didn't know what to do or where to look for advice.
* You want more control on how version conflicts are resolved in your build.
* You want automated asisstance with deciding whether a version upgrade might break something in your project.

At the time we started this project, Ivy was still used by default to resolve libraries in sbt, but efforts were in progress to use coursier instead, so we focused on the latter as a vehicle for improvements.
Since then, coursier support in sbt [became official](https://github.com/sbt/sbt/pull/4614), and ships by default in sbt 1.3.0.
Besides having a simpler model than the one used before in sbt or in Ivy, coursier has the advantage of being usable from the command line, and can benefit other users of the coursier API.

For the third point about static analysis, we found [the missinglink tool](https://github.com/spotify/missinglink) for Maven, originating from Spotify themselves.
This tool can analyze the classpath of a Maven project, and detect ahead of time (at "link" time) whether binary incompatibilities can be encountered at run-time.
The only issue was that it was not usable from sbt, rendering it useless for a large subset of Scala users.
We built and released [an sbt plugin for missinglink](https://github.com/scalacenter/sbt-missinglink) to address this hole.

## Version ordering and reconciliation

While most people have a simple intuition about library resolution (a newer version of a library gets picked over an older version), the details of how versions are compared and reconciled are quite complicated.
We contributed [a dedicated documentation page](https://get-coursier.io/docs/other-version-handling) on the coursier website to help users understand how resolution works in the not-so-trivial cases.
In order to improve the experience of upgrading from sbt 1.2.x and Ivy-based resolution, we [tweaked resolution in coursier 2.0.0-RC3-4](https://github.com/coursier/coursier/pull/1348) with the help of Eugene Yokota to be more in line with Ivy, the former sbt behavior, and the [semantic versioning specification](https://semver.org).
The documentation page should be updated accordingly soon.

On top of that, Eugene Yokota recently wrote [a blog post](http://eed3si9n.com/dependency-resolver-semantics) comparing how versions are compared and reconciled in both Ivy and coursier.

## Strict conflict manager

By default, both Ivy and coursier tolerate that the dependency graph contains two different versions of a library, in which case they pick a winner.
Sometimes, we want more control, and do not want any conflict resolution to happen.
Instead, we would like an error to be reported if there are two different versions of a library.
A *strict* conflict manager does precisely that, and we added one to coursier.
Instructions follow for enabling the strict conflict manager 1) in an sbt build, and 2) from the coursier command line.

### sbt

From sbt, enable the strict conflict manager either through the original `conflictManager` key, like

```scala
conflictManager := ConflictManager.strict
```

or enable it in a possibly more fine-grained way if [sbt-coursier](https://get-coursier.io/docs/sbt-coursier) is around with

```scala
versionReconciliation += "*" % "*" % "strict"
```

(Note that to use sbt-coursier from an sbt 1.3.x project, the [coursier-based sbt launcher](https://github.com/coursier/sbt-launcher) is required.
Get it via its [custom sbt-extras launcher](https://github.com/coursier/sbt-extras/blob/master/sbt) or generate and run a launcher via coursier with `coursier bootstrap sbt-launcher && ./sbt`.)

`update` will then succeed only if the strict checks pass.
If they don't, either force the versions of faulty dependencies with `dependencyOverrides`, like

```scala
dependencyOverrides += "org.typelevel" % "cats-core_2.12" % "1.5.0"
```

or adjust their version reconciliation, like

```scala
versionReconciliation ++= Seq(
  "org.typelevel" %% "cats-core" % "relaxed", // "semver" reconciliation is also available
  "*" % "*" % "strict"
)
```

A number of version reconciliation types are available:

* `"strict"` requires all dependees to depend on the exact selected version (if they depend on an interval, the selected version only needs to be contained in it)
* `"semver"` only requires all dependees to depend on the same major version as the selected version (if they depend on an interval, the selected version only needs to be contained in it too)
* `"default"` is the default version reconciliation in coursier, enabled in the coursier CLI or with the sbt-coursier plugin.
  It is described in more detail [in this page](https://get-coursier.io/docs/other-version-handling.html#reconciliation).
* `"relaxed"` does not trigger any conflict.
  It is the default in the coursier support of sbt 1.3.x, which allows for better compatibility with former sbt versions.
  It ignores the lowest versions and version intervals, until they can be reconciled with the same algorithm as `"default"`.

Since reconciliation strategies can be set per artifact, or per organization, it becomes much easier to declaratively tell sbt, for example, that some project adheres to SemVer, and that it is fine to resolve dependencies on that specific project according to SemVer, but not others.

### CLI

From the command line, we can use the new strict conflict manager of coursier with:

```bash
$ coursier resolve --strict \
    org.typelevel:cats-effect_2.12:2.0.0 \
    org.typelevel:cats-core_2.12:1.5.0
Resolution error: Unsatisfied rule Strict(*:*): Found evicted dependencies:

org.typelevel:cats-core_2.12:2.0.0 (1.5.0 wanted)
└─ org.typelevel:cats-core_2.12:1.5.0
```

To ignore some strict checks, one can exclude the faulty dependency with

```bash
$ coursier resolve \
    --strict-exclude 'org.typelevel:cats-core*' \
    org.typelevel:cats-effect_2.12:2.0.0 \
    org.typelevel:cats-core_2.12:1.5.0
org.scala-lang:scala-library:2.12.9:default
org.typelevel:cats-core_2.12:2.0.0:default
org.typelevel:cats-effect_2.12:2.0.0:default
org.typelevel:cats-kernel_2.12:2.0.0:default
org.typelevel:cats-macros_2.12:2.0.0:default
```

(passing `--strict-exclude` automatically enables `--strict`), or only include a subset of the dependencies in the strict checks, like

```bash
$ coursier resolve \
    --strict-include 'org.scala-lang:*' \
    org.typelevel:cats-effect_2.12:2.0.0 \
    org.typelevel:cats-core_2.12:1.5.0
org.scala-lang:scala-library:2.12.9:default
org.typelevel:cats-core_2.12:2.0.0:default
org.typelevel:cats-effect_2.12:2.0.0:default
org.typelevel:cats-kernel_2.12:2.0.0:default
org.typelevel:cats-macros_2.12:2.0.0:default
```

Alternatively, forcing the version of the faulty dependency makes the strict checks ignore it:

```bash
$ coursier resolve \
    --strict \
    --strict-exclude 'org.scala-lang:*' \
    --force-version org.typelevel:cats-core_2.12:1.5.0 \
    org.typelevel:cats-effect_2.12:2.0.0 \
    org.typelevel:cats-core_2.12:1.5.0
org.scala-lang:scala-library:2.12.9:default
org.scala-lang:scala-reflect:2.12.6:default
org.typelevel:cats-core_2.12:1.5.0:default
org.typelevel:cats-effect_2.12:2.0.0:default
org.typelevel:cats-kernel_2.12:1.5.0:default
org.typelevel:cats-macros_2.12:1.5.0:default
org.typelevel:machinist_2.12:0.6.6:default
```

## Static analysis checks

To leverage the power of the static analysis offered by [missinglink library](https://github.com/spotify/missinglink) in sbt projects, we have developed [sbt-missinglink](https://github.com/scalacenter/sbt-missinglink).
The readme explains how to use it, but the basics are simple.

First, add the following line in `project/plugins.sbt`:

```scala
addSbtPlugin("ch.epfl.scala" % "sbt-missinglink" % "0.1.0")
```

then simply run the following task for the project you want to test:

```
> theProject/missinglinkCheck
```

This will check that the transitive dependencies of your project do not exhibit any binary compatibility conflict, assuming that the methods of your `Compile` configuration (in `src/main/`) are all called.
You can add that task to your CI script, for example.

If the checks succeed, you have a guarantee that no `LinkageError` can happen at run-time, unless run-time reflection is involved, making static analysis impossible.

The plugin is very simple at the moment, and will be extended to support more features of `missinglink`, in particular the ability to add exclusions to the checks performed.
If `missinglink` itself proves insufficient for the needs of Scala developers, we may also contribute improvements to it in the future.

## Conclusion

We have seen a few new ways you can improve the management of your transitive dependencies.
In particular, we have introduced:

* *reconciliation* strategies, which let you declaratively specify the compatibility guarantees of individual libraries, allowing coursier to do a better, safer job at conflict resolution, and
* `sbt-missinglink`, an sbt plugin to easily check *ahead of time* that your resolved transitive dependencies are actually binary compatible.
