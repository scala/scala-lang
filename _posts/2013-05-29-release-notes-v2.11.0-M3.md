---

category: announcement
title: "Scala 2.11.0-M3 is now available!"
---
We are pleased to announce the next milestone release of Scala 2.11.0!

This is a pre-release software. You can see our plans for upcoming Scala releases
on our [Roadmap](https://issues.scala-lang.org/browse/SI#selectedTab=com.atlassian.jira.plugin.system.project%3Aroadmap-panel). For production use, we recommend the latest stable release, 2.10.1.

The Scala team and contributors [fixed 108 issues](https://issues.scala-lang.org/secure/IssueNavigator.jspa?reset=true&jqlQuery=project+%3D+SI+AND+%28fixVersion+%3D+%22Scala+2.11.0-M1%22+OR+fixVersion+%3D+%22Scala+2.11.0-M2%22+OR+fixVersion+%3D+%22Scala+2.11.0-M3%22%29+AND+status+%3D+closed+ORDER+BY+priority+DESC), in addition to [those fixed in the upcoming 2.10.2](https://issues.scala-lang.org/secure/IssueNavigator.jspa?reset=true&jqlQuery=project+%3D+SI+AND+%28fixVersion+%3D+%22Scala+2.10.2-RC1%22%29+AND+status+%3D+closed+ORDER+BY+priority+DESC), which are also included in this release.

Please give 2.11.0-M3 a spin! This release is *not* binary compatible with the 2.10.x series, so you will need to obtain builds of your dependencies. Once we start the release candidates, we will coordinate with the open source community to release these simultaneously, but for these milestones we are not asking library authors to go to that trouble.

We'd love to hear about any regressions since 2.10.1. You can file bugs in [JIRA](https://issues.scala-lang.org/secure/CreateIssue.jspa?pid=10005&issuetype=1). Before doing so, please search for existing bugs and/or consult with the [scala-user](https://groups.google.com/forum/?fromgroups#!forum/scala-user) mailing list to be sure it is a geniune problem. Please set the 'Affects Version' field to 2.11.0-M3 and add the tag `regression`.

In particular, be aware that the complete fix for [SI-7486](https://issues.scala-lang.org/browse/SI-7486)
is not included in this milestone. If you encounter this, the workaround is to annotate the return type
of implicit members (which is a good practice, in any case.)

We are also aware of an issue with macros and named arguments [SI-7516](https://issues.scala-lang.org/browse/SI-7516).
This will be fixed in the next milestone.

<!--break-->

### Scala IDE for Eclipse
The Scala IDE with Scala 2.11.0-M3 built right in is available through one of the following update-sites:

* for Eclipse 3.7 (Indigo)

Have a look at the [getting started guide](http://scala-ide.org/docs/user/gettingstarted.html) for more info.

### New features in the 2.11 series
This release contains all of the bug fixes and improvements made in the 2.10 series, as well as:

* Modularization

    * The compiler has been internally modularized, to separate the presentation compiler, scaladoc
      and the REPL. In this release, all of these modules are still packaged in scala-compiler.jar.
      We plan to ship them in separate JARs as of the next milestone. Similar work is planned in the standard
      library.
* Slimming down

    * The experimental .NET backend has been removed from the compiler.

    * In Scala 2.10.0, new implementations of the Pattern Matcher and the Bytecode Emitter
      were shipped. We have now removed the old implementations.

    * scala-actors is now deprecated;

    * Search and destroy mission for ~5000 chunks of dead code. [#1648](https://github.com/scala/scala/pull/1648/files)
* Language

    * Case classes with > 22 parameters are now supported [SI-7296](https://issues.scala-lang.org/browse/SI-7296)

    * Infer bounds of existential types [SI-1786](https://issues.scala-lang.org/browse/SI-1786)
* REPL

    * The bytecode decompiler command, :javap, now works with Java 7 [SI-4936](https://issues.scala-lang.org/browse/SI-4936) and has sprouted new options [SI-6894](https://issues.scala-lang.org/browse/SI-6894) (Thanks, [Andrew Marki](https://github.com/som-snytt)!)

    * Added command :kind to help to tell ground types from type constructors. [#2340](https://github.com/scala/scala/pull/2340) (Thanks, [George Leontiev](https://github.com/folone) and [Eugene Yokota](https://github.com/eed3si9n)!)

    * The interpreter can now be embedded as a JSR-166 Scripting Engine [SI-874](https://issues.scala-lang.org/browse/SI-874). (Thanks, [Raphael Jolly](https://github.com/rjolly)!)
* Performance

    * Branch elimination through constant analysis [#2214](https://github.com/scala/scala/pull/2214)

    * Improve performance of reflection [SI-6638](https://issues.scala-lang.org/browse/SI-6638)
* Warnings

    * Warn about unused private / local terms and types, and unused imports, under `-Xlint`. This will even tell you
      when a local `var` could be a `val`. (We might move these warnings to a separate command line option before
      the final release, your feedback is welcome here.)



#### A big thank you to all the contributors!

\# | Author
---: | ---
194 | <notextile>Jason Zaugg</notextile>
181 | <notextile>Paul Phillips</notextile>
90 | <notextile>Eugene Burmako</notextile>
88 | <notextile>Adriaan Moors</notextile>
52 | <notextile>James Iry</notextile>
31 | <notextile>Simon Ochsenreither</notextile>
28 | <notextile>Som Snytt</notextile>
24 | <notextile>Eugene Vigdorchik</notextile>
17 | <notextile>Miguel Garcia</notextile>
13 | <notextile>Kato Kazuyoshi</notextile>
11 | <notextile>Lukas Rytz</notextile>
10 | <notextile>Grzegorz Kossakowski</notextile>
7 | <notextile>Raphael Jolly</notextile>
7 | <notextile>Viktor Klang</notextile>
6 | <notextile>Heather Miller</notextile>
6 | <notextile>Paolo Giarrusso</notextile>
3 | <notextile>Heejong Lee</notextile>
3 | <notextile>Fran&radic;&szlig;ois Garillot</notextile>
3 | <notextile>Vinicius Miana</notextile>
3 | <notextile>Hubert Plociniczak</notextile>
3 | <notextile>Philipp Haller</notextile>
3 | <notextile>Nada Amin</notextile>
2 | <notextile>Szabolcs Berecz</notextile>
2 | <notextile>Vlad Ureche</notextile>
2 | <notextile>Uladzimir Abramchuk</notextile>
2 | <notextile>Iulian Dragos</notextile>
2 | <notextile>Volkan Yaz&fnof;&plusmn;c&fnof;&plusmn;</notextile>
2 | <notextile>Eugene Yokota</notextile>
2 | <notextile>Michael Thorpe</notextile>
2 | <notextile>Jean-Remi Desjardins</notextile>
2 | <notextile>Evgeny Kotelnikov</notextile>
2 | <notextile>Dan Hopkins</notextile>
2 | <notextile>Andrew Phillips</notextile>
2 | <notextile>Dan Rosen</notextile>
1 | <notextile>David Hall</notextile>
1 | <notextile>ybr</notextile>
1 | <notextile>secwall</notextile>
1 | <notextile>Erik Osheim</notextile>
1 | <notextile>Lee Mighdoll</notextile>
1 | <notextile>Julio Santos</notextile>
1 | <notextile>Robert Nix</notextile>
1 | <notextile>Vojin Jovanovic</notextile>
1 | <notextile>Simon Schaefer</notextile>
1 | <notextile>Eugene Platonov</notextile>
1 | <notextile>Samy Dindane</notextile>
1 | <notextile>James Roper</notextile>
1 | <notextile>srinivasreddy</notextile>
1 | <notextile>Alden Torres</notextile>
1 | <notextile>Bjorn Regnell</notextile>
1 | <notextile>Sagie Davidovich</notextile>
1 | <notextile>Martin McNulty</notextile>
1 | <notextile>Dmitry Bushev</notextile>
1 | <notextile>Robert Ladst&radic;&sect;tter</notextile>
1 | <notextile>Gyuhang Shim</notextile>
1 | <notextile>Juha Heljoranta</notextile>
1 | <notextile>Igor Moreno</notextile>
1 | <notextile>Daniel C. Sobral</notextile>
1 | <notextile>Aleksandar Prokopec</notextile>
1 | <notextile>Mads Hartmann Jensen</notextile>
1 | <notextile>Roland Kuhn</notextile>
1 | <notextile>Brian McKenna</notextile>
1 | <notextile>Cody Mello</notextile>
