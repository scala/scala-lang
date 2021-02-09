---
layout: blog-detail
post-type: blog
by: Eugene Yokota, Julien Richard-Foy
title: Improving the Scala Library Ecosystem
---

One of the things that makes Scala powerful and fun to use is its library ecosystem — spanning across the Maven ecosystem for JVM, and npm for Scala.js. We can use libraries to do operations like download files from the web, or we can use it to adopt different programming paradigms. The library ecosystem allows us to write more useful programs with less effort.

However, the library ecosystem is not without problems. A library that you pulled could depend on other libraries, and the transitive dependencies could cause version conflicts. Here's a quick example of a Scala project that uses Akka HTTP, a Postgres database, and JSON. Its build declares two library dependencies, `akka-http-circe` and `doobie-postgres-circe`:

~~~ scala
libraryDependencies ++= Seq(
  "de.heikoseeberger" %% "akka-http-circe"       % "1.26.0",
  "org.tpolecat"      %% "doobie-postgres-circe" % "0.10.0"
)
~~~

Note that both libraries use Circe for working with JSON.

sbt loads the project build, the project compiles successfully, but when you try to run it, you may get a `NoSuchMethodError` exception at run-time!

What happens here is that one of the transitive dependencies of `akka-http-circe` depends on `circe-core` version 0.11.1, and another transitive dependency of `doobie-postgres-circe` depends on `circe-core` version 0.13.0. Here's an excerpt of the output of sbt’s `dependencyTree` task:

~~~ text
[info]   +-de.heikoseeberger:akka-http-circe_2.12:1.26.0 [S]
[info]   | +-io.circe:circe-core_2.12:0.11.1 (evicted by: 0.13.0)
[info]   |     
[info]   +-org.tpolecat:doobie-postgres-circe_2.12:0.10.0 [S]
[info]     +-io.circe:circe-core_2.12:0.13.0 [S]
~~~

Unfortunately, these two versions of Circe are not binary compatible. Such version conflicts are common in a dependency graph of any practical size. The problem is that we carefully program our code using a statically checked type system, but when it comes to production code we accept swapping out the JAR file with something that our dependency resolver like Coursier and Apache Ivy selected on a whim.

The Scala Center, Alexandre Archambault (author of Coursier), and Eugene Yokota have been working on a solution to improve this situation so that we can be confident about creating libraries, and using them.

In the next section, we will explain the mechanism that was in place so far in sbt to address this issue, and we will discuss its limits. Then, we will introduce a new solution, which concerns both library authors, and library users.

## Eviction warnings

Actually this is not the first time We have thought of this issue. In 2014, we added [eviction warning][1] feature to sbt 0.13.6. When you have two candidate versions 0.11.1 and 0.13.0, and when it picks 0.13.0, 0.11.1 is said to be "evicted".

~~~ text
sbt:killer-app> evicted
[warn] Found version conflict(s) in library dependencies; some are suspected to be binary incompatible:
[warn]  * io.circe:circe-core_2.12:0.13.0 is selected over 0.11.1
[warn]      +- org.tpolecat:doobie-postgres-circe_2.12:0.10.0     (depends on 0.13.0)
[warn]      +- de.heikoseeberger:akka-http-circe_2.12:1.26.0      (depends on 0.11.1)
[success] Total time: 1 s, completed Feb 1, 2021, 2:59:56 PM
~~~

Here, we see that sbt successfully detected the conflict for circe-core.

This was a step in the right direction, but it did not work well in reality because we had no way to tell whether two versions of a library would be binary compatible or not. In 2014 what we did was guess that a Java library would adopt [Semantic Versioning][2], and a Scala library would adopt [PVP][3]. (Apparently, the versioning scheme “epoch.major.minor” has a name, and it is Haskell Package Versioning Policy, or PVP for short).

Unfortunately, the reality was different and while some Scala libraries use PVP (e.g., Play framework, the standard library, …), some others do use Semantic Versioning (e.g., `scala-collection-compat`, `cats`, …). This makes eviction warnings less reliable since many of these warnings are false positive, and, in practice, [they are ignored by developers][7].

## Early SemVer and sbt-version-policy

If you're maintaining a library, the first thing you could do to help is picking a version scheme. Our recommendation for libraries going forward is adopting **Early Semver** as described in the documentation page [Binary Compatibility for Library Authors][4]. Please read the linked post by Jacob Wang for more details on binary compatibility and source compatibility.

Given a version number `major.minor.patch`, you MUST increment the:

1. `major` version if backward **binary compatibility** is broken,
2. `minor` version if backward **source compatibility** is broken, and
3. `patch` version to signal neither binary nor source incompatibility.

- When the `major` version is `0`, a minor version increment MAY contain **both source and binary breakages**, but a patch version increment MUST remain **binary compatible**.

We call this Early SemVer, because according to the [Semantic Versioning Spec][2] there are no guarantees between any versions when the major version is `0`. In the Scala library ecosystem, though, we often start guaranteeing binary compatibility for `0.y.z` like sbt 0.13 and Scala.js 0.6.

Unfortunately, it is not an easy task to know whether a change on public API broke source or binary compatibility. The Scala Center contracted Alexandre Archambault to create [sbt-version-policy][5]. This plugin helps library authors to self-check a version scheme. To use this, add the following to your `project/plugins.sbt`:

~~~ scala
addSbtPlugin("ch.epfl.scala" % "sbt-version-policy" % "1.0.0-RC5")
~~~

And declare your compatibility intention regarding the next release, in your `build.sbt`:

~~~
// The next release must be binary and source compatible with the previous release (it will be a patch release)
ThisBuild / versionPolicyIntention := Compatibility.BinaryAndSourceCompatible
~~~

This plugin provides a task called `versionPolicyCheck`, which you can call in the CI (continuous integration) server. The task performs an automatic binary compatibility check.

~~~ text
> versionPolicyCheck
~~~

We think Early SemVer gives better flexibility to both library authors and library users since it gives more information about what would be in minor upgrades (we often call this feature release) vs patch. For example, sbt 1 ships bug fixes as 1.3.x patch releases without going through RC cycle, so bug fixes are released quickly.

During the minor upgrade (feature release), we aggressively add new features, while maintaining binary compatibility for the plugin ecosystem. These only come out once a year, and it goes through the RC cycle.

## versionScheme, libraryDependencySchemes, and sbt 1.5.0

As mentioned earlier, sbt contains a built-in eviction warning feature, but there are too many false positives right now because it needs to guess.

Since sbt 1.4.0, there is a new setting `versionScheme`, which can be used by library authors as follows in `build.sbt`:

~~~ scala
ThisBuild / versionScheme := Some("early-semver")
~~~

sbt 1.4.0 includes this information into `pom.xml` and `ivy.xml` as a property. In addition, sbt uses the information to take the guessing out of eviction warning when this information is available.

In sbt 1.5.0, eviction warnings will be replaced with [eviction errors][8]. Since we can now reliably detect whether two dependencies with different versions are compatible, or if they conflict, the build will fail if an incompatibility is detected in your dependencies.

It might take a few years for the `versionScheme` information to become prevalent in the ecosystem, but once it happens the eviction warning could become more accurate. In the meantime, as a user of libraries you can manually configure the versioning scheme used by your libraries by using a new setting, `libraryDependencySchemes`. For instance, here is how we can tell sbt that Circe’s artifacts follow the Early SemVer scheme:

~~~ scala
ThisBuild / libraryDependencySchemes += "io.circe" %% "circe-*" % "early-semver"
~~~

## Summary

If you are a library author, check out [sbt-version-policy][5] to enforce the recommended versioning scheme. Or, at least declare the versioning scheme you use with the `versionScheme` key. If you are a library user, keep in mind that starting from sbt 1.5.0 you should configure your `libraryDependencySchemes` to get accurate eviction errors.

[1]: https://github.com/sbt/sbt/pull/147
[2]: https://semver.org/
[3]: https://pvp.haskell.org/
[4]: https://docs.scala-lang.org/overviews/core/binary-compatibility-for-library-authors.html#versioning-scheme---communicating-compatibility-breakages
[5]: https://github.com/scalacenter/sbt-version-policy
[7]: https://github.com/sbt/sbt/issues/5976
[8]: https://github.com/sbt/sbt/pull/6221
