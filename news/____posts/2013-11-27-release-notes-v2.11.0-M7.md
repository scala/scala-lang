---
layout: news
post-type: announcement
title: "Scala 2.11.0-M7 is now available!"
---
The [seventh development milestone](https://github.com/scala/scala/releases/v2.11.0-M7) of Scala 2.11 is now available for [download](/download/2.11.0-M7.html)!

It brings the following [goodness](https://github.com/scala/scala/issues?milestone=25&page=1&state=closed):

- delambdafication (compiling closures Java 8-style, as close as you can get on Java 6) by @jamesiry
- blackbox/whitebox macro distinction by @xeno-by,
- collection deprecation and mutable LongMap/AnyRefMap by @ichoran,
- several IDE improvements by @dotta (positions for default args, docs on how to hack the compiler in the IDE) and @skyluc (completion for imports)
- for loop support in quasiquotes by @densh
- [Experimental Single Abstract Method support](https://github.com/scala/scala/pull/3037)

Full details can be found on [GitHub](https://github.com/scala/scala/releases/v2.11.0-M7).

We're working on an [overview of the Scala 2.11 release](http://docs.scala-lang.org/scala/2.11/) -- [PRs](https://github.com/scala/scala/blob/gh-pages/2.11/index.markdown) welcome!

## Known issues
Scala compiler artifact (due to scaladoc) depends on the previous version (2.11.0-M6) of `scala-xml` and `scala-parser-combinators` modules.
If you depend on `scala-compiler` (e.g., because you're developing a macro), you should take care to exclude these `_2.11.0-M6` dependencies,
and provide the `_2.11.0-M7` ones instead. This will be fixed in M8, which will be released before the end of the year.


    def excludeM6Modules(m: ModuleID) = (m
      exclude("org.scala-lang.modules", "scala-parser-combinators_2.11.0-M6")
      exclude("org.scala-lang.modules", "scala-xml_2.11.0-M6")
    )

    // include these settings in your project:
    libraryDependencies += excludeM6Modules("org.scala-lang" % "scala-compiler" % scalaVersion.value),
    libraryDependencies += "org.scala-lang.modules" %% "scala-xml" % "1.0.0-RC7",
    libraryDependencies += "org.scala-lang.modules" %% "scala-parser-combinators" % "1.0.0-RC5",

## Regressions
We'd [love to hear](https://issues.scala-lang.org/) about any regressions since 2.10.3 or 2.11.0-M6. Before doing so, please search for existing bugs and/or consult with the [scala-user](https://groups.google.com/forum/#!forum/scala-user) mailing list to be sure it is a genuine problem.

When reporting a bug, please set the 'Affects Version' field to 2.11.0-M7 and add the `regression` label where appropriate.

## Scala IDE Lithium (4.0) for Eclipse
Please point your Eclipse 4.2/4.3 at http://scala-ide.org/ to update to the latest version that includes this milestone!
For more info, please see [the getting started guide](http://scala-ide.org/docs/user/gettingstarted.html).

## Binary compatibility
Note that this release is not binary compatible with the 2.10.x series, so you will need to obtain a fresh build of your dependencies against this version.
