---
layout: news
post-type: announcement
title: "Scala 2.11.0-M5 is now available!"
---
The [fofth development milestone](https://github.com/scala/scala/releases/v2.11.0-M5) of Scala 2.11 is now available for [download](/download/2.11.0-M5.html)!

It brings the following [goodness](https://github.com/scala/scala/issues?direction=desc&labels=reviewed&milestone=20&page=1&sort=comments&state=closed):

  - Pattern matcher: extractors became name-based thanks to @paulp (#2848)
  - @adriaanm continues his modularization effort: [scala.xml](https://github.com/scala/scala-xml) and [scala.util.parsing](https://github.com/scala/scala-parser-combinators) live in separate repositories now (#2855)
  - more bits of experimental backend based on ASM by @magarciaEPFL (#2711)
  - improvements to stacktrace printing in REPL by @som-snytt and @qerub (#2877 and #2824)
  - clarification of Scala license (#2881)

We're working on an [overview of the Scala 2.11 release](http://docs.scala-lang.org/scala/2.11/) -- [PRs](https://github.com/scala/scala/blob/gh-pages/2.11/index.markdown) welcome!

# License clarification
Scala was released with slightly modified variant of 3-clause BSD license. The fact that this is not exactly 3-clause BSD license was causing problems for people adopting Scala because they would have to go through legal process that approves a new license in their organization.

We've clarified the situation but switching to standard wording of 3-clause BSD license. The intent and meaning of the license hasn't change because previous version was just reworded version of 3-clause BSD license.

# Known issues
Scala compiler artifact (due to scaladoc) depends on previous version (2.11.0-M4) of `scala-xml` and `scala-parser-combinators` modules. If you depend on `scala-compiler` (e.g. your are a macro writer) then you need to use extra care when upgrading to M5. See [scala-partest#3](https://github.com/scala/scala-partest/pull/3) which discusses the problem in depth and offers a work-around for sbt-based builds.

# Regressions
We'd [love to hear](https://issues.scala-lang.org/) about any regressions since 2.10.3 or 2.11.0-M4. Before doing so, please search for existing bugs and/or consult with the [scala-user](https://groups.google.com/forum/#!forum/scala-user) mailing list to be sure it is a genuine problem.

When reporting a bug, please set the 'Affects Version' field to 2.11.0-M5 and add the `regression` label where appropriate.

# Scala IDE Lithium (4.0) for Eclipse
Please point your Eclipse 4.2/4.3 at http://download.scala-ide.org/sdk/e38/scala211/dev/site/ to update to the latest version that includes this milestone!
For more info, please see [the getting started guide](http://scala-ide.org/docs/user/gettingstarted.html).

# Binary compatibility
Note that this release is not binary compatible with the 2.10.x series, so you will need to obtain a fresh build of your dependencies against this version.
