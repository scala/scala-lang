---
layout: news
post-type: announcement
title: "Scala 2.11.0-M4 is now available!"
---
The [fourth development milestone](https://github.com/scala/scala/releases/v2.11.0-M4) of Scala 2.11 is now available for [download](/download/2.11.0-M4.html)!

It brings the following [goodness](https://github.com/scala/scala/issues?direction=desc&labels=reviewed&milestone=18&page=1&sort=comments&state=closed):

- initial version of a new experimental back-end based on ASM by [@magarciaEPFL](https://github.com/magarciaEPFL) ([[#2620](https://github.com/scala/scala/pull/2620)](https://github.com/scala/scala/pull/2620))
- [quasiquotes](http://docs.scala-lang.org/overviews/macros/quasiquotes.html) by [@densh](https://github.com/densh) ([#2714](https://github.com/scala/scala/pull/2714))
- a more modular standard library: scala.xml and scala.util.parsing now come in separate jars ([#2704](https://github.com/scala/scala/pull/2704))
  - we now also use a bog-standard [jline 2.11](https://github.com/jline/jline2/tree/jline-2.11)
- [@soc](https://github.com/soc) implemented deprecation of the confusing octal literals ([#2343](https://github.com/scala/scala/pull/2343))
- [@JamesIry](https://github.com/JamesIry) and [@gkossakowski](https://github.com/gkossakowski) reduced scalac's memory retention ([#2605](https://github.com/scala/scala/pull/2605))
- a Semmle-driven cleanup of the compiler's code base by [@lexspoon](https://github.com/lexspoon) ([#2693](https://github.com/scala/scala/pull/2693))
- [@paulp](https://github.com/paulp) thwarted dangerous implicits in [#2625](https://github.com/scala/scala/pull/2625) (SI-6899)
- other [bug fixes](https://issues.scala-lang.org/secure/IssueNavigator.jspa?reset=true&jqlQuery=project+%3D+SI+AND+resolution+%3D+fixed+AND+fixVersion+%3D+%22Scala+2.11.0-M4%22+ORDER+BY+key+ASC%2C+priority+DESC)
- a growing number of contributions -- thank you!

We're working on an [overview of the Scala 2.11 release](http://docs.scala-lang.org/scala/2.11/) -- [PRs](https://github.com/scala/scala/blob/gh-pages/2.11/index.markdown) welcome!

### Coming up
For the [next milestone](https://github.com/scala/scala/issues?milestone=20&state=open), slated for mid August, we're working on:

- optimizations for the experimental back-end ([#2711](https://github.com/scala/scala/pull/2711) and others)
- a new translation for closures that lifts a closure body to a method
- [support for SAM target typing](https://github.com/adriaanm/scala/tree/sammy)
- more modules

### Regressions
We'd [love to hear](https://issues.scala-lang.org/) about any regressions since 2.10.2 or 2.11.0-M3. Before doing so, please search for existing bugs and/or consult with the [scala-user](https://groups.google.com/forum/#!forum/scala-user) mailing list to be sure it is a genuine problem.

When reporting a bug, please set the 'Affects Version' field to 2.11.0-M4 and add the `regression` label where appropriate.

### Scala IDE Lithium (4.0) for Eclipse
Please point your Eclipse 4.2/4.3 at http://download.scala-ide.org/sdk/e38/scala211/dev/site/ to update to the latest version that includes this milestone!
For more info, please see [the getting started guide](http://scala-ide.org/docs/user/gettingstarted.html).

### Binary compatibility
Note that this release is not binary compatible with the 2.10.x series, so you will need to obtain a fresh build of your dependencies against this version. 

[@cunei](https://github.com/cunei) is working on [a tool](http://typesafehub.github.io/distributed-build/0.6.0/index.html) to solve this problem. The current version already builds [akka, genjavadoc, sbinary, sbt, sbt-full-library, sbt-republish, scala, scala-arm, scala-stm, scalabuff, scalacheck, scalatest, scalaz, shapeless, specs2, sperformance, zeromq-scala-binding, zinc](https://jenkins-dbuild.typesafe.com:8499/job/Community8/1/consoleFull).
