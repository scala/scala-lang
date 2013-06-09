---
layout: news
post-type: announcement
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

* [for Eclipse 3.7 (Indigo)](http://download.scala-ide.org/ecosystem/e37/scala211/dev/site/)

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

    * scala-actors is now deprecated; we advise users to follow the steps in the [Actors Migration Guide](http://docs.scala-lang.org/overviews/core/actors-migration-guide.html) to port to Akka Actors, which have been included in
      the distribution since 2.10.0.

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



#### Commits and the issues they fixed since v2.11.0-M1

Issue(s) | Commit | Message
--- | --- | ---
[https://issues.scala-lang.org/browse/SI-6446](SI-6446), [https://issues.scala-lang.org/browse/SI-7494](SI-7494) | [https://github.com/scala/scala/commit/4ab66d1](4ab66d1) | <notextile>SI-7494 Tests for status quo</notextile>
[https://issues.scala-lang.org/browse/SI-7494](SI-7494) | [https://github.com/scala/scala/commit/e0bd62c](e0bd62c) | <notextile>SI-7494 Each plugin must only be instantiated once.</notextile>
[https://issues.scala-lang.org/browse/SI-7427](SI-7427) | [https://github.com/scala/scala/commit/3fb3175](3fb3175) | <notextile>SI-7427 stop crashing under -Ydebug.</notextile>
[https://issues.scala-lang.org/browse/SI-7201](SI-7201) | [https://github.com/scala/scala/commit/08c7293](08c7293) | <notextile>SI-7201 scaladoc url in scala-(library,actors,swing,reflect) pom</notextile>
[https://issues.scala-lang.org/browse/SI-6424](SI-6424) | [https://github.com/scala/scala/commit/12a130d](12a130d) | <notextile>SI-6424 Scaladoc: Use mapNodes.get(_) to avoid NoSuchElementException</notextile>
[https://issues.scala-lang.org/browse/SI-6548](SI-6548), [https://issues.scala-lang.org/browse/SI-7359](SI-7359) | [https://github.com/scala/scala/commit/7f9feba](7f9feba) | <notextile>[backport #1727] SI-7359 cyclic nested java class</notextile>
[https://issues.scala-lang.org/browse/SI-7486](SI-7486) | [https://github.com/scala/scala/commit/dd33e28](dd33e28) | <notextile>SI-7486 regression in implicit resolution.</notextile>
[https://issues.scala-lang.org/browse/SI-7492](SI-7492) | [https://github.com/scala/scala/commit/b11324a](b11324a) | <notextile>SI-7492 Remove -Ystruct-dispatch and associated code</notextile>
[https://issues.scala-lang.org/browse/SI-5459](SI-5459), [https://issues.scala-lang.org/browse/SI-1786](SI-1786) | [https://github.com/scala/scala/commit/e28c3ed](e28c3ed) | <notextile>SI-1786 incorporate defined bounds in inference</notextile>
[https://issues.scala-lang.org/browse/SI-7484](SI-7484) | [https://github.com/scala/scala/commit/9db9df7](9db9df7) | <notextile>SI-7484 Indentation and whitespace fixes</notextile>
[https://issues.scala-lang.org/browse/SI-7484](SI-7484) | [https://github.com/scala/scala/commit/cba29e6](cba29e6) | <notextile>SI-7484 Add @SupressWarning(rawtypes/unchecked)</notextile>
[https://issues.scala-lang.org/browse/SI-6488](SI-6488) | [https://github.com/scala/scala/commit/538aa22](538aa22) | <notextile>SI-6488 Interrupt i/o threads on process destroy</notextile>
[https://issues.scala-lang.org/browse/SI-7464](SI-7464) | [https://github.com/scala/scala/commit/5e71539](5e71539) | <notextile>SI-7464 allows FieldMirror.set to update vals</notextile>
[https://issues.scala-lang.org/browse/SI-5886](SI-5886) | [https://github.com/scala/scala/commit/e9c3f87](e9c3f87) | <notextile>SI-5886 Remove check for packed type conformance.</notextile>
[https://issues.scala-lang.org/browse/SI-6555](SI-6555) | [https://github.com/scala/scala/commit/963c4a7](963c4a7) | <notextile>Actual SI-6555 fix, Scaladoc filter works WITH keyboard shortcuts too</notextile>
[https://issues.scala-lang.org/browse/SI-7383](SI-7383) | [https://github.com/scala/scala/commit/b32d294](b32d294) | <notextile>SI-7383 - Call ExecutionContext.prepare in Future.apply to allow for capturing local context like ThreadLocals and then re-establishing them prior to execution, as per intention of EC.prepare</notextile>
[https://issues.scala-lang.org/browse/SI-7438](SI-7438), [https://issues.scala-lang.org/browse/SI-7442](SI-7442) | [https://github.com/scala/scala/commit/77437ff](77437ff) | <notextile>SI-7442 Update bundled Fork/Join pool (JSR166y)</notextile>
[https://issues.scala-lang.org/browse/SI-7166](SI-7166) | [https://github.com/scala/scala/commit/3edde27](3edde27) | <notextile>[nomaster] SI-7166 catches DivergentImplicit in c.inferImplicitXXX</notextile>
[https://issues.scala-lang.org/browse/SI-7047](SI-7047) | [https://github.com/scala/scala/commit/b4da864](b4da864) | <notextile>[nomaster] SI-7047 fixes silent for c.inferImplicitXXX</notextile>
[https://issues.scala-lang.org/browse/SI-7291](SI-7291), [https://issues.scala-lang.org/browse/SI-7291](SI-7291), [https://issues.scala-lang.org/browse/SI-7291](SI-7291), [https://issues.scala-lang.org/browse/SI-7291](SI-7291) | [https://github.com/scala/scala/commit/fdead2b](fdead2b) | <notextile>[nomaster] SI-7291: No exception throwing for diverging implicit expansion</notextile>
[https://issues.scala-lang.org/browse/SI-7167](SI-7167) | [https://github.com/scala/scala/commit/8168f11](8168f11) | <notextile>[nomaster] SI-7167 implicit macros decide what is divergence</notextile>
[https://issues.scala-lang.org/browse/SI-5923](SI-5923) | [https://github.com/scala/scala/commit/90ac5c4](90ac5c4) | <notextile>[nomaster] SI-5923 instantiates targs in deferred macro applications</notextile>
[https://issues.scala-lang.org/browse/SI-5923](SI-5923), [https://issues.scala-lang.org/browse/SI-5353](SI-5353), [https://issues.scala-lang.org/browse/SI-5923](SI-5923), [https://issues.scala-lang.org/browse/SI-5923](SI-5923), [https://issues.scala-lang.org/browse/SI-5353](SI-5353), [https://issues.scala-lang.org/browse/SI-7453](SI-7453), [https://issues.scala-lang.org/browse/SI-5923](SI-5923), [https://issues.scala-lang.org/browse/SI-5353](SI-5353), [https://issues.scala-lang.org/browse/SI-3859](SI-3859), [https://issues.scala-lang.org/browse/SI-5353](SI-5353), [https://issues.scala-lang.org/browse/SI-5353](SI-5353) | [https://github.com/scala/scala/commit/0c6927b](0c6927b) | <notextile>[nomaster] temporarily breaks SI-5353</notextile>
[https://issues.scala-lang.org/browse/SI-7465](SI-7465) | [https://github.com/scala/scala/commit/a3d03ab](a3d03ab) | <notextile>fixes a crash in ReflectionUtils.systemProperties</notextile>
[https://issues.scala-lang.org/browse/SI-5734](SI-5734) | [https://github.com/scala/scala/commit/8325729](8325729) | <notextile>SI-5734 Allow setting of socket timeout for remote actors</notextile>
[https://issues.scala-lang.org/browse/SI-7398](SI-7398) | [https://github.com/scala/scala/commit/b2c67b3](b2c67b3) | <notextile>SI-7398 Add support for java8 default methods</notextile>
[https://issues.scala-lang.org/browse/SI-7271](SI-7271), [https://issues.scala-lang.org/browse/SI-7325](SI-7325) | [https://github.com/scala/scala/commit/cb1a427](cb1a427) | <notextile>SI-7325 cleans up corner cases of percent handling in StringContext.f</notextile>
[https://issues.scala-lang.org/browse/SI-7271](SI-7271) | [https://github.com/scala/scala/commit/a8edefc](a8edefc) | <notextile>SI-7271 fixes positions of string interpolation parts</notextile>
[https://issues.scala-lang.org/browse/SI-7426](SI-7426) | [https://github.com/scala/scala/commit/df3cae7](df3cae7) | <notextile>SI-7426 Crash in pickler.</notextile>
[https://issues.scala-lang.org/browse/SI-5634](SI-5634) | [https://github.com/scala/scala/commit/3abdaf4](3abdaf4) | <notextile>SI-5634 eliminate overly verbose error message</notextile>
[https://issues.scala-lang.org/browse/SI-7441](SI-7441) | [https://github.com/scala/scala/commit/e86832d](e86832d) | <notextile>SI-7441 Don't ramble on about inapplicable implicits.</notextile>
[https://issues.scala-lang.org/browse/SI-7385](SI-7385) | [https://github.com/scala/scala/commit/d0a1f5b](d0a1f5b) | <notextile>SI-7385 crash in erroneous code</notextile>
[https://issues.scala-lang.org/browse/SI-6091](SI-6091) | [https://github.com/scala/scala/commit/62cdd7f](62cdd7f) | <notextile>SI-6091 overeager warning for reference equality</notextile>
[https://issues.scala-lang.org/browse/SI-6771](SI-6771) | [https://github.com/scala/scala/commit/3009916](3009916) | <notextile>SI-6771 Alias awareness for checkableType in match analysis.</notextile>
[https://issues.scala-lang.org/browse/SI-7469](SI-7469) | [https://github.com/scala/scala/commit/e36bb0b](e36bb0b) | <notextile>Revert &quot;SI-7469 Remove @deprecated MurmurHash elements&quot;</notextile>
[https://issues.scala-lang.org/browse/SI-7482](SI-7482) | [https://github.com/scala/scala/commit/37884ec](37884ec) | <notextile>SI-7482 Don't cook raw types after erasure.</notextile>
[https://issues.scala-lang.org/browse/SI-6815](SI-6815), [https://issues.scala-lang.org/browse/SI-6815](SI-6815) | [https://github.com/scala/scala/commit/fada1ef](fada1ef) | <notextile>SI-6815 untangle isStable and hasVolatileType</notextile>
[https://issues.scala-lang.org/browse/SI-6406](SI-6406), [https://issues.scala-lang.org/browse/SI-6406](SI-6406) | [https://github.com/scala/scala/commit/135cfa8](135cfa8) | <notextile>SI-6406 Restore deprecated API</notextile>
[https://issues.scala-lang.org/browse/SI-3943](SI-3943) | [https://github.com/scala/scala/commit/0c7c521](0c7c521) | <notextile>SI-3943 Test case for already-fixed Java interop bug</notextile>
[https://issues.scala-lang.org/browse/SI-7469](SI-7469) | [https://github.com/scala/scala/commit/ae43506](ae43506) | <notextile>SI-7469 Remove @deprecated scala.util.logging</notextile>
[https://issues.scala-lang.org/browse/SI-7476](SI-7476) | [https://github.com/scala/scala/commit/4478560](4478560) | <notextile>SI-7476 Add documentation to GenericTraversableTemplate</notextile>
[https://issues.scala-lang.org/browse/SI-7469](SI-7469) | [https://github.com/scala/scala/commit/ac990c1](ac990c1) | <notextile>SI-7469 Make @deprecated elems in scala.concurrent private[scala]</notextile>
[https://issues.scala-lang.org/browse/SI-7469](SI-7469) | [https://github.com/scala/scala/commit/e544786](e544786) | <notextile>SI-7469 Remove deprecated elements in s.u.parsing.combinator</notextile>
[https://issues.scala-lang.org/browse/SI-7469](SI-7469) | [https://github.com/scala/scala/commit/7e9c21f](7e9c21f) | <notextile>SI-7469 Remove @deprecated MurmurHash elements</notextile>
[https://issues.scala-lang.org/browse/SI-7047](SI-7047) | [https://github.com/scala/scala/commit/b153880](b153880) | <notextile>SI-7047 fixes silent for c.inferImplicitXXX</notextile>
[https://issues.scala-lang.org/browse/SI-7167](SI-7167) | [https://github.com/scala/scala/commit/c539ae2](c539ae2) | <notextile>SI-7167 implicit macros decide what is divergence</notextile>
[https://issues.scala-lang.org/browse/SI-5923](SI-5923), [https://issues.scala-lang.org/browse/SI-5923](SI-5923) | [https://github.com/scala/scala/commit/adef4b5](adef4b5) | <notextile>SI-5923 instantiates targs in deferred macro applications</notextile>
[https://issues.scala-lang.org/browse/SI-6039](SI-6039) | [https://github.com/scala/scala/commit/b0758f5](b0758f5) | <notextile>SI-6039 Harden against irrelevant filesystem details</notextile>
[https://issues.scala-lang.org/browse/SI-7469](SI-7469) | [https://github.com/scala/scala/commit/0ee9204](0ee9204) | <notextile>SI-7469 Remove @deprecated scala.util.parsing.ast</notextile>
[https://issues.scala-lang.org/browse/SI-6149](SI-6149) | [https://github.com/scala/scala/commit/15df9e9](15df9e9) | <notextile>Limit unnecessary calls to Type#toString.</notextile>
[https://issues.scala-lang.org/browse/SI-7432](SI-7432) | [https://github.com/scala/scala/commit/6890f38](6890f38) | <notextile>SI-7432 add testcases</notextile>
[https://issues.scala-lang.org/browse/SI-7432](SI-7432) | [https://github.com/scala/scala/commit/357c2df](357c2df) | <notextile>SI-7432 Range.min should throw NoSuchElementException on empty range</notextile>
[https://issues.scala-lang.org/browse/SI-6863](SI-6863), [https://issues.scala-lang.org/browse/SI-6863](SI-6863), [https://issues.scala-lang.org/browse/SI-6863](SI-6863) | [https://github.com/scala/scala/commit/265fc6b](265fc6b) | <notextile>SI-6863 root cause fixed using factory of scala.runtime.*Ref</notextile>
[https://issues.scala-lang.org/browse/SI-6532](SI-6532) | [https://github.com/scala/scala/commit/17f8101](17f8101) | <notextile>SI-6532 emit debug info in compiled java.</notextile>
[https://issues.scala-lang.org/browse/SI-7369](SI-7369) | [https://github.com/scala/scala/commit/6271396](6271396) | <notextile>SI-7369 Avoid spurious unreachable warnings in patterns</notextile>
[https://issues.scala-lang.org/browse/SI-7367](SI-7367) | [https://github.com/scala/scala/commit/184cac8](184cac8) | <notextile>SI-7367 scaladoc crash on constructing the model for annotations.</notextile>
[https://issues.scala-lang.org/browse/SI-6943](SI-6943) | [https://github.com/scala/scala/commit/8448beb](8448beb) | <notextile>SI-6943 warn on value class miscomparison.</notextile>
[https://issues.scala-lang.org/browse/SI-6675](SI-6675), [https://issues.scala-lang.org/browse/SI-6675](SI-6675) | [https://github.com/scala/scala/commit/c1327dc](c1327dc) | <notextile>SI-6675 Avoid spurious warning about pattern bind arity.</notextile>
[https://issues.scala-lang.org/browse/SI-7355](SI-7355) | [https://github.com/scala/scala/commit/0d2c7e9](0d2c7e9) | <notextile>SI-7355 Handle spaces in paths in Windows batch files.</notextile>
[https://issues.scala-lang.org/browse/SI-7330](SI-7330) | [https://github.com/scala/scala/commit/e7aadd0](e7aadd0) | <notextile>SI-7330 better error when pattern isn't a value</notextile>
[https://issues.scala-lang.org/browse/SI-7200](SI-7200) | [https://github.com/scala/scala/commit/8703e00](8703e00) | <notextile>SI-7200 Test case for fixed type inference error.</notextile>
[https://issues.scala-lang.org/browse/SI-7362](SI-7362) | [https://github.com/scala/scala/commit/e6af9bc](e6af9bc) | <notextile>SI-7362, crash in presentation compiler.</notextile>
[https://issues.scala-lang.org/browse/SI-7409](SI-7409) | [https://github.com/scala/scala/commit/6227837](6227837) | <notextile>SI-7409 Par-Test: A crash is not a DNC for neg tests</notextile>
[https://issues.scala-lang.org/browse/SI-7349](SI-7349) | [https://github.com/scala/scala/commit/bf44669](bf44669) | <notextile>SI-7349 Partest supports test-interface</notextile>
[https://issues.scala-lang.org/browse/SI-7358](SI-7358) | [https://github.com/scala/scala/commit/e4f62c0](e4f62c0) | <notextile>SI-7358 Partest fails on scalacheck failure</notextile>
[https://issues.scala-lang.org/browse/SI-7422](SI-7422) | [https://github.com/scala/scala/commit/d516f38](d516f38) | <notextile>SI-7422 GenASM populates and clears its maps within a Run</notextile>
[https://issues.scala-lang.org/browse/SI-7291](SI-7291) | [https://github.com/scala/scala/commit/7158142](7158142) | <notextile>SI-7291: Remove error kinds.</notextile>
[https://issues.scala-lang.org/browse/SI-7291](SI-7291), [https://issues.scala-lang.org/browse/SI-7291](SI-7291) | [https://github.com/scala/scala/commit/accaa31](accaa31) | <notextile>SI-7291: No exception throwing for diverging implicit expansion</notextile>
[https://issues.scala-lang.org/browse/SI-7429](SI-7429) | [https://github.com/scala/scala/commit/f59be7a](f59be7a) | <notextile>SI-7429 Fix checkinit build failure in Contexts</notextile>
[https://issues.scala-lang.org/browse/SI-6784](SI-6784) | [https://github.com/scala/scala/commit/2e5c7b9](2e5c7b9) | <notextile>SI-6784 Localize feature imports in scala.swing.</notextile>
[https://issues.scala-lang.org/browse/SI-7421](SI-7421) | [https://github.com/scala/scala/commit/8f08151](8f08151) | <notextile>SI-7421 remove unneeded extra-attachement in maven deploy</notextile>
[https://issues.scala-lang.org/browse/SI-7403](SI-7403) | [https://github.com/scala/scala/commit/bdae05f](bdae05f) | <notextile>SI-7403 Stream extends Serializable</notextile>
[https://issues.scala-lang.org/browse/SI-4365](SI-4365) | [https://github.com/scala/scala/commit/7b4e450](7b4e450) | <notextile>SI-4365 nondeterministic failure in asSeenFrom</notextile>
[https://issues.scala-lang.org/browse/SI-7345](SI-7345) | [https://github.com/scala/scala/commit/648784c](648784c) | <notextile>SI-7345 Address review comments.</notextile>
[https://issues.scala-lang.org/browse/SI-7345](SI-7345) | [https://github.com/scala/scala/commit/c598e76](c598e76) | <notextile>SI-7345 Improved Context.toString</notextile>
[https://issues.scala-lang.org/browse/SI-7345](SI-7345) | [https://github.com/scala/scala/commit/85af192](85af192) | <notextile>SI-7345 Eliminate the `depth` var.</notextile>
[https://issues.scala-lang.org/browse/SI-7345](SI-7345) | [https://github.com/scala/scala/commit/2304a78](2304a78) | <notextile>SI-7345 Drive by refactoring of pattern matching for `arg: _*`.</notextile>
[https://issues.scala-lang.org/browse/SI-7345](SI-7345) | [https://github.com/scala/scala/commit/e112db6](e112db6) | <notextile>SI-7345 Factor out method to clear and restore undetparams.</notextile>
[https://issues.scala-lang.org/browse/SI-7345](SI-7345) | [https://github.com/scala/scala/commit/0ce81c8](0ce81c8) | <notextile>SI-7345 Remove unneeded warning.</notextile>
[https://issues.scala-lang.org/browse/SI-7345](SI-7345) | [https://github.com/scala/scala/commit/ec33ad0](ec33ad0) | <notextile>SI-7345 Doc and TODO comments around Context.</notextile>
[https://issues.scala-lang.org/browse/SI-7345](SI-7345) | [https://github.com/scala/scala/commit/dbd8457](dbd8457) | <notextile>SI-7345 Produce Context#imports from the context chain</notextile>
[https://issues.scala-lang.org/browse/SI-7345](SI-7345) | [https://github.com/scala/scala/commit/78e7eba](78e7eba) | <notextile>SI-7345 Refactor manual iteration to use foreach.</notextile>
[https://issues.scala-lang.org/browse/SI-7345](SI-7345) | [https://github.com/scala/scala/commit/7ce4de4](7ce4de4) | <notextile>SI-7345 Move `inSilentMode` from Infer to Context.</notextile>
[https://issues.scala-lang.org/browse/SI-7345](SI-7345) | [https://github.com/scala/scala/commit/bba9d3d](bba9d3d) | <notextile>SI-7345 remove unused methods.</notextile>
[https://issues.scala-lang.org/browse/SI-7319](SI-7319), [https://issues.scala-lang.org/browse/SI-7345](SI-7345) | [https://github.com/scala/scala/commit/510ebec](510ebec) | <notextile>SI-7345 Prefer using a throwaway silent context over buffer flushing.</notextile>
[https://issues.scala-lang.org/browse/SI-7345](SI-7345) | [https://github.com/scala/scala/commit/ec5eaee](ec5eaee) | <notextile>SI-7345 More refactoring and documentation in Contexts</notextile>
[https://issues.scala-lang.org/browse/SI-7345](SI-7345) | [https://github.com/scala/scala/commit/190aea9](190aea9) | <notextile>SI-7345 Exploit named/default args   - Collapse overloads of `rootContext`   - make `atOwner` more concise</notextile>
[https://issues.scala-lang.org/browse/SI-7345](SI-7345) | [https://github.com/scala/scala/commit/c9f5ab0](c9f5ab0) | <notextile>SI-7345 Encapsulate warning and error buffers in ReportBuffer.</notextile>
[https://issues.scala-lang.org/browse/SI-7345](SI-7345) | [https://github.com/scala/scala/commit/ff5dde1](ff5dde1) | <notextile>SI-7345 Add Context#isLocal, akin to Symbol#isLocal</notextile>
[https://issues.scala-lang.org/browse/SI-7345](SI-7345) | [https://github.com/scala/scala/commit/b1cb004](b1cb004) | <notextile>SI-7345 Use combinator to find next enclosing non-template.</notextile>
[https://issues.scala-lang.org/browse/SI-7345](SI-7345) | [https://github.com/scala/scala/commit/281b850](281b850) | <notextile>SI-7345 Remove comment that appears obsolete.</notextile>
[https://issues.scala-lang.org/browse/SI-7345](SI-7345) | [https://github.com/scala/scala/commit/f2c351c](f2c351c) | <notextile>SI-7345 Rationalize overloads of Context#make</notextile>
[https://issues.scala-lang.org/browse/SI-7345](SI-7345) | [https://github.com/scala/scala/commit/e658b63](e658b63) | <notextile>SI-7345 Represent the boolean modes in Context in ContextMode.</notextile>
[https://issues.scala-lang.org/browse/SI-7402](SI-7402) | [https://github.com/scala/scala/commit/372965b](372965b) | <notextile>SI-7402 List extends Serializable</notextile>
[https://issues.scala-lang.org/browse/SI-6898](SI-6898) | [https://github.com/scala/scala/commit/6f47caf](6f47caf) | <notextile>SI-6898 Document AnyVal box and unbox implemention by BoxesRunTime</notextile>
[https://issues.scala-lang.org/browse/SI-7408](SI-7408) | [https://github.com/scala/scala/commit/5c6d62a](5c6d62a) | <notextile>SI-7408 Fix test by sorting results of getDeclaredClasses</notextile>
[https://issues.scala-lang.org/browse/SI-7376](SI-7376) | [https://github.com/scala/scala/commit/12a18ee](12a18ee) | <notextile>SI-7376 Bad doc variable error is positioned at the variable.</notextile>
[https://issues.scala-lang.org/browse/SI-7376](SI-7376) | [https://github.com/scala/scala/commit/fecc7e0](fecc7e0) | <notextile>SI-7376 Additional trivial Scaladoc format corrections</notextile>
[https://issues.scala-lang.org/browse/SI-7376](SI-7376) | [https://github.com/scala/scala/commit/3f0a90b](3f0a90b) | <notextile>SI-7376 Unmoored doc has correct position</notextile>
[https://issues.scala-lang.org/browse/SI-7376](SI-7376) | [https://github.com/scala/scala/commit/0fde95e](0fde95e) | <notextile>SI-7376 Scaladoc warns when discarding local doc comments with API tags</notextile>
[https://issues.scala-lang.org/browse/SI-7080](SI-7080) | [https://github.com/scala/scala/commit/e8c85a3](e8c85a3) | <notextile>SI-7080 improve boundary value checking for BitSet</notextile>
[https://issues.scala-lang.org/browse/SI-7324](SI-7324) | [https://github.com/scala/scala/commit/5cc2eb8](5cc2eb8) | <notextile>SI-7324 jvm not cool with 255+ parameters</notextile>
[https://issues.scala-lang.org/browse/SI-7337](SI-7337) | [https://github.com/scala/scala/commit/f93c4c9](f93c4c9) | <notextile>SI-7337 Error out on missing -d directory.</notextile>
[https://issues.scala-lang.org/browse/SI-7319](SI-7319), [https://issues.scala-lang.org/browse/SI-7319](SI-7319) | [https://github.com/scala/scala/commit/578ef1f](578ef1f) | <notextile>SI-7319 Remove unused method.</notextile>
[https://issues.scala-lang.org/browse/SI-7377](SI-7377) | [https://github.com/scala/scala/commit/962f88e](962f88e) | <notextile>SI-7377 Remove special treatment of `stableFun()` in patterns.</notextile>
[https://issues.scala-lang.org/browse/SI-7388](SI-7388) | [https://github.com/scala/scala/commit/3e27fec](3e27fec) | <notextile>SI-7388 Be more robust against cycles in error symbol creation.</notextile>
[https://issues.scala-lang.org/browse/SI-7377](SI-7377) | [https://github.com/scala/scala/commit/15e9ef8](15e9ef8) | <notextile>SI-7377 Fix retypechecking of patterns on case companion alias</notextile>
[https://issues.scala-lang.org/browse/SI-7319](SI-7319), [https://issues.scala-lang.org/browse/SI-7319](SI-7319) | [https://github.com/scala/scala/commit/ef04619](ef04619) | <notextile>SI-7319 Clear error buffer during Typer reset.</notextile>
[https://issues.scala-lang.org/browse/SI-7329](SI-7329) | [https://github.com/scala/scala/commit/aa6723c](aa6723c) | <notextile>SI-7329 duplicate default getters for specialized parameters.</notextile>
[https://issues.scala-lang.org/browse/SI-7314](SI-7314) | [https://github.com/scala/scala/commit/01edd04](01edd04) | <notextile>SI-7314 Partest locates tools.jar and javac</notextile>
[https://issues.scala-lang.org/browse/SI-7312](SI-7312), [https://issues.scala-lang.org/browse/SI-7315](SI-7315) | [https://github.com/scala/scala/commit/660c8fd](660c8fd) | <notextile>SI-7315 Test @deprecatedInheritance / @specialized interplay</notextile>
[https://issues.scala-lang.org/browse/SI-7312](SI-7312) | [https://github.com/scala/scala/commit/54d11fe](54d11fe) | <notextile>SI-7312 @deprecatedInheritance now ignores same-file subclasses</notextile>
[https://issues.scala-lang.org/browse/SI-7335](SI-7335) | [https://github.com/scala/scala/commit/6690455](6690455) | <notextile>SI-7335 Remove special case for import of Predef._ in Predef.scala</notextile>
[https://issues.scala-lang.org/browse/SI-7335](SI-7335) | [https://github.com/scala/scala/commit/b0fceeb](b0fceeb) | <notextile>SI-7335 Sharpen up comment about implicit prioritization.</notextile>
[https://issues.scala-lang.org/browse/SI-7335](SI-7335) | [https://github.com/scala/scala/commit/ae69de4](ae69de4) | <notextile>SI-7335 Add logging for a now-impossible* case in Symbol#exists.</notextile>
[https://issues.scala-lang.org/browse/SI-7335](SI-7335) | [https://github.com/scala/scala/commit/9d7f811](9d7f811) | <notextile>SI-7335 Don't import Predef._ in Predef.scala</notextile>
[https://issues.scala-lang.org/browse/SI-7335](SI-7335) | [https://github.com/scala/scala/commit/d43f5ce](d43f5ce) | <notextile>SI-7335 Mandate that parents of Predef must be defined in Predef.scala</notextile>
[https://issues.scala-lang.org/browse/SI-6286](SI-6286) | [https://github.com/scala/scala/commit/67c2d6d](67c2d6d) | <notextile>SI-6286 IllegalArgumentException handling specialized method.</notextile>
[https://issues.scala-lang.org/browse/SI-7360](SI-7360) | [https://github.com/scala/scala/commit/23dd325](23dd325) | <notextile>SI-7360 Don't let a follow-up TypeError obscure the original error.</notextile>
[https://issues.scala-lang.org/browse/SI-6387](SI-6387) | [https://github.com/scala/scala/commit/2885eb0](2885eb0) | <notextile>Revert &quot;SI-6387 Clones accessor before name expansion&quot;</notextile>
[https://issues.scala-lang.org/browse/SI-6386](SI-6386) | [https://github.com/scala/scala/commit/7250312](7250312) | <notextile>SI-6386 typed existential type tree's original now have tpe set</notextile>
[https://issues.scala-lang.org/browse/SI-7289](SI-7289) | [https://github.com/scala/scala/commit/6a61e17](6a61e17) | <notextile>SI-7289 Less strict type application for TypeVar.</notextile>
[https://issues.scala-lang.org/browse/SI-6937](SI-6937) | [https://github.com/scala/scala/commit/34a6fa9](34a6fa9) | <notextile>SI-6937 core type tags are no longer referentially unique</notextile>
[https://issues.scala-lang.org/browse/SI-7321](SI-7321) | [https://github.com/scala/scala/commit/0affa94](0affa94) | <notextile>SI-7321 Memory leak in specialize on multiple compiler runs.</notextile>
[https://issues.scala-lang.org/browse/SI-6900](SI-6900) | [https://github.com/scala/scala/commit/c2534bf](c2534bf) | <notextile>SI-6900 Fix tailrec for dependent method types</notextile>
[https://issues.scala-lang.org/browse/SI-6135](SI-6135) | [https://github.com/scala/scala/commit/d7545ec](d7545ec) | <notextile>Simplify interplay between Uncurry Info- and Tree-Transformers</notextile>
[https://issues.scala-lang.org/browse/SI-7316](SI-7316) | [https://github.com/scala/scala/commit/61308be](61308be) | <notextile>Take the N^2 out of the compiler's TreeSet.</notextile>
[https://issues.scala-lang.org/browse/SI-7147](SI-7147) | [https://github.com/scala/scala/commit/d21f90c](d21f90c) | <notextile>SI-7147 Diagnostic for unexplained assertion in presentation compiler.</notextile>
[https://issues.scala-lang.org/browse/SI-6793](SI-6793) | [https://github.com/scala/scala/commit/ca9c8ef](ca9c8ef) | <notextile>SI-6793 Don't use super param accessors if inaccessible.</notextile>
[https://issues.scala-lang.org/browse/SI-6715](SI-6715) | [https://github.com/scala/scala/commit/5f9bc05](5f9bc05) | <notextile>SI-6715 Shouldn't return &quot;&quot; from TermNames.originalName</notextile>
[https://issues.scala-lang.org/browse/SI-6715](SI-6715) | [https://github.com/scala/scala/commit/8e83703](8e83703) | <notextile>Backport #2289's TermNames.unexpandedName as TermNames.originalName</notextile>
[https://issues.scala-lang.org/browse/SI-7300](SI-7300) | [https://github.com/scala/scala/commit/dfdbfa7](dfdbfa7) | <notextile>SI-7300 single line comment in multi line comment</notextile>
[https://issues.scala-lang.org/browse/SI-6289](SI-6289) | [https://github.com/scala/scala/commit/0d95443](0d95443) | <notextile>SI-6289 Paulptest demonstrating javac errors</notextile>
[https://issues.scala-lang.org/browse/SI-6289](SI-6289) | [https://github.com/scala/scala/commit/c6ce617](c6ce617) | <notextile>SI-6289 Partest in technicolor and showing javac errors</notextile>
[https://issues.scala-lang.org/browse/SI-7110](SI-7110) | [https://github.com/scala/scala/commit/530f4a5](530f4a5) | <notextile>SI-7110 Warn about naked try without catch/finally</notextile>
[https://issues.scala-lang.org/browse/SI-7237](SI-7237) | [https://github.com/scala/scala/commit/29a9c64](29a9c64) | <notextile>SI-7237 Always choose ForkJoinTaskSupport</notextile>
[https://issues.scala-lang.org/browse/SI-7261](SI-7261) | [https://github.com/scala/scala/commit/22944e4](22944e4) | <notextile>SI-7261 Implicit conversion of BooleanSetting to Boolean and BooleanFlag</notextile>
[https://issues.scala-lang.org/browse/SI-7261](SI-7261) | [https://github.com/scala/scala/commit/e073975](e073975) | <notextile>SI-7261 Implicit conversion of BooleanSetting to Boolean and BooleanFlag</notextile>
[https://issues.scala-lang.org/browse/SI-6168](SI-6168) | [https://github.com/scala/scala/commit/edee27f](edee27f) | <notextile>SI-6168 Retain prefix when parsing types in JVM signatures</notextile>
[https://issues.scala-lang.org/browse/SI-6146](SI-6146), [https://issues.scala-lang.org/browse/SI-7285](SI-7285) | [https://github.com/scala/scala/commit/dd89b00](dd89b00) | <notextile>SI-7285 Fix match analysis with nested objects.</notextile>
[https://issues.scala-lang.org/browse/SI-6124](SI-6124), [https://issues.scala-lang.org/browse/SI-7285](SI-7285) | [https://github.com/scala/scala/commit/499962d](499962d) | <notextile>Expand test for SI-6124 to demonstrate cause of SI-7285.</notextile>
[https://issues.scala-lang.org/browse/SI-7290](SI-7290) | [https://github.com/scala/scala/commit/c3ad5af](c3ad5af) | <notextile>SI-7290 Minor cleanups driven by review comments.</notextile>
[https://issues.scala-lang.org/browse/SI-7290](SI-7290) | [https://github.com/scala/scala/commit/2e0be83](2e0be83) | <notextile>SI-7290 Discard duplicates in switchable alternative patterns.</notextile>
[https://issues.scala-lang.org/browse/SI-6387](SI-6387) | [https://github.com/scala/scala/commit/4e10b2c](4e10b2c) | <notextile>SI-6387 Clones accessor before name expansion</notextile>
[https://issues.scala-lang.org/browse/SI-7237](SI-7237) | [https://github.com/scala/scala/commit/67b8de7](67b8de7) | <notextile>[backport] SI-7237 Always choose ForkJoinTaskSupport</notextile>
[https://issues.scala-lang.org/browse/SI-7246](SI-7246) | [https://github.com/scala/scala/commit/cd9e03a](cd9e03a) | <notextile>SI-7246 Make $outer pointer elision Java aware</notextile>
[https://issues.scala-lang.org/browse/SI-7299](SI-7299) | [https://github.com/scala/scala/commit/b95ca32](b95ca32) | <notextile>SI-7299 Improve error message for eta-expanding 23+ param method</notextile>
[https://issues.scala-lang.org/browse/SI-6580](SI-6580), [https://issues.scala-lang.org/browse/SI-6580](SI-6580) | [https://github.com/scala/scala/commit/b4344e1](b4344e1) | <notextile>SI-6580 Scaladoc: Should not close void elements</notextile>
[https://issues.scala-lang.org/browse/SI-6022](SI-6022), [https://issues.scala-lang.org/browse/SI-6210](SI-6210) | [https://github.com/scala/scala/commit/47fc00d](47fc00d) | <notextile>SI-6210 Test case for already-fixed pattern matcher bug</notextile>
[https://issues.scala-lang.org/browse/SI-7013](SI-7013) | [https://github.com/scala/scala/commit/df29290](df29290) | <notextile>SI-7013 Scaladoc: Fix StackOverflowError</notextile>
[https://issues.scala-lang.org/browse/SI-7253](SI-7253) | [https://github.com/scala/scala/commit/6f4a594](6f4a594) | <notextile>SI-7253: update comments and naming</notextile>
[https://issues.scala-lang.org/browse/SI-7253](SI-7253) | [https://github.com/scala/scala/commit/386a5bd](386a5bd) | <notextile>SI-7253: respect binary compatibility constraints</notextile>
[https://issues.scala-lang.org/browse/SI-5699](SI-5699) | [https://github.com/scala/scala/commit/50ee635](50ee635) | <notextile>SI-5699 correct java parser for annotation defs.</notextile>
[https://issues.scala-lang.org/browse/SI-3994](SI-3994), [https://issues.scala-lang.org/browse/SI-7242](SI-7242) | [https://github.com/scala/scala/commit/2b5fde7](2b5fde7) | <notextile>SI-7242 Fix crash when inner object mixes in its companion</notextile>
[https://issues.scala-lang.org/browse/SI-7258](SI-7258) | [https://github.com/scala/scala/commit/ef85a10](ef85a10) | <notextile>SI-7258 Don't assume order of reflection values in t6223</notextile>
[https://issues.scala-lang.org/browse/SI-3120](SI-3120), [https://issues.scala-lang.org/browse/SI-3120](SI-3120), [https://issues.scala-lang.org/browse/SI-7259](SI-7259) | [https://github.com/scala/scala/commit/f046853](f046853) | <notextile>SI-7259 Fix detection of Java defined Selects</notextile>
[https://issues.scala-lang.org/browse/SI-1247](SI-1247), [https://issues.scala-lang.org/browse/SI-7249](SI-7249) | [https://github.com/scala/scala/commit/552b623](552b623) | <notextile>SI-7249 Reign in overzealous Function0 optimization.</notextile>
[https://issues.scala-lang.org/browse/SI-5464](SI-5464), [https://issues.scala-lang.org/browse/SI-7176](SI-7176), [https://issues.scala-lang.org/browse/SI-6921](SI-6921), [https://issues.scala-lang.org/browse/SI-7239](SI-7239) | [https://github.com/scala/scala/commit/174334b](174334b) | <notextile>SI-6921 SI-7239 Tread lightly during exploratory typing</notextile>
[https://issues.scala-lang.org/browse/SI-7232](SI-7232) | [https://github.com/scala/scala/commit/6e79370](6e79370) | <notextile>SI-7232 Fix Java import vs defn. binding precendence</notextile>
[https://issues.scala-lang.org/browse/SI-7232](SI-7232) | [https://github.com/scala/scala/commit/8383b65](8383b65) | <notextile>SI-7232 Fix Java import vs defn. binding precendence</notextile>
[https://issues.scala-lang.org/browse/SI-3120](SI-3120), [https://issues.scala-lang.org/browse/SI-3120](SI-3120), [https://issues.scala-lang.org/browse/SI-7259](SI-7259) | [https://github.com/scala/scala/commit/7d03dcc](7d03dcc) | <notextile>SI-7259 Fix detection of Java defined Selects</notextile>
[https://issues.scala-lang.org/browse/SI-7296](SI-7296) | [https://github.com/scala/scala/commit/844cef6](844cef6) | <notextile>SI-7296 Remove arity limit for case classes</notextile>
[https://issues.scala-lang.org/browse/SI-7296](SI-7296) | [https://github.com/scala/scala/commit/ad79d74](ad79d74) | <notextile>SI-7296 Avoid crash with nested 23-param case class</notextile>
[https://issues.scala-lang.org/browse/SI-7251](SI-7251), [https://issues.scala-lang.org/browse/SI-7251](SI-7251) | [https://github.com/scala/scala/commit/395e90a](395e90a) | <notextile>SI-7251, compiler crash with $.</notextile>
[https://issues.scala-lang.org/browse/SI-7240](SI-7240) | [https://github.com/scala/scala/commit/a4fb773](a4fb773) | <notextile>SI-7240 fixes language feature lookup</notextile>
[https://issues.scala-lang.org/browse/SI-7233](SI-7233) | [https://github.com/scala/scala/commit/41e3b89](41e3b89) | <notextile>SI-7233 Account for aliased imports in Erasure</notextile>
[https://issues.scala-lang.org/browse/SI-7233](SI-7233) | [https://github.com/scala/scala/commit/33b499c](33b499c) | <notextile>SI-7233 Account for aliased imports in eta expansion.</notextile>
[https://issues.scala-lang.org/browse/SI-6725](SI-6725) | [https://github.com/scala/scala/commit/9bc17e7](9bc17e7) | <notextile>SI-6725 `f` interpolator now supports %n tokens</notextile>
[https://issues.scala-lang.org/browse/SI-7132](SI-7132) | [https://github.com/scala/scala/commit/eb365f9](eb365f9) | <notextile>SI-7132 - don't discard Unit type in interpreter</notextile>
[https://issues.scala-lang.org/browse/SI-7233](SI-7233), [https://issues.scala-lang.org/browse/SI-7302](SI-7302) | [https://github.com/scala/scala/commit/2b4cd6c](2b4cd6c) | <notextile>SI-7302 importing from Any.</notextile>
[https://issues.scala-lang.org/browse/SI-7186](SI-7186) | [https://github.com/scala/scala/commit/ccf886c](ccf886c) | <notextile>SI-7186 Slim down some TypeRefs by 8 bytes.</notextile>
[https://issues.scala-lang.org/browse/SI-7294](SI-7294) | [https://github.com/scala/scala/commit/4af9ff5](4af9ff5) | <notextile>SI-7294 Deprecate inheritance from TupleN.</notextile>
[https://issues.scala-lang.org/browse/SI-7294](SI-7294) | [https://github.com/scala/scala/commit/8d537a1](8d537a1) | <notextile>SI-7294 Treat TupleN as final under -Xfuture</notextile>
[https://issues.scala-lang.org/browse/SI-5717](SI-5717) | [https://github.com/scala/scala/commit/cc485a9](cc485a9) | <notextile>SI-5717 error when bytecode cannot be written</notextile>
[https://issues.scala-lang.org/browse/SI-7003](SI-7003), [https://issues.scala-lang.org/browse/SI-7003](SI-7003), [https://issues.scala-lang.org/browse/SI-7003](SI-7003), [https://issues.scala-lang.org/browse/SI-6123](SI-6123) | [https://github.com/scala/scala/commit/4bb8988](4bb8988) | <notextile>Add positive and negative testcases for SI-6123 (-explaintypes)</notextile>
[https://issues.scala-lang.org/browse/SI-6123](SI-6123) | [https://github.com/scala/scala/commit/ec6548f](ec6548f) | <notextile>SI-6123: -explaintypes should not explain errors which won't be reported</notextile>
[https://issues.scala-lang.org/browse/SI-7102](SI-7102) | [https://github.com/scala/scala/commit/1b3a379](1b3a379) | <notextile>SI-7102 Specialize isEmpty for bitsets</notextile>
[https://issues.scala-lang.org/browse/SI-7236](SI-7236) | [https://github.com/scala/scala/commit/67ed8c8](67ed8c8) | <notextile>SI-7236 Deprecate ThreadPoolTaskSupport and friends</notextile>
[https://issues.scala-lang.org/browse/SI-5513](SI-5513) | [https://github.com/scala/scala/commit/38a1515](38a1515) | <notextile>SI-5513: add inplace set-theoretic operations for mutable bitsets.</notextile>
[https://issues.scala-lang.org/browse/SI-7247](SI-7247) | [https://github.com/scala/scala/commit/3fe7b8c](3fe7b8c) | <notextile>SI-7247, deprecated NotNull.</notextile>
[https://issues.scala-lang.org/browse/SI-7228](SI-7228) | [https://github.com/scala/scala/commit/2fa2db7](2fa2db7) | <notextile>SI-7228, bug in weak subtyping.</notextile>
[https://issues.scala-lang.org/browse/SI-7328](SI-7328) | [https://github.com/scala/scala/commit/745c36a](745c36a) | <notextile>SI-7328 Bail out of names/defaults if args are error typed</notextile>
[https://issues.scala-lang.org/browse/SI-7234](SI-7234) | [https://github.com/scala/scala/commit/83c9c76](83c9c76) | <notextile>SI-7234 Make named args play nice with dep. method types</notextile>
[https://issues.scala-lang.org/browse/SI-5710](SI-5710) | [https://github.com/scala/scala/commit/f742aa3](f742aa3) | <notextile>SI-5710 has fixed itself</notextile>
[https://issues.scala-lang.org/browse/SI-7235](SI-7235), [https://issues.scala-lang.org/browse/SI-7235](SI-7235), [https://issues.scala-lang.org/browse/SI-7235](SI-7235) | [https://github.com/scala/scala/commit/3ae2653](3ae2653) | <notextile>reifier is now aware of SI-7235</notextile>
[https://issues.scala-lang.org/browse/SI-7226](SI-7226) | [https://github.com/scala/scala/commit/7e52fb9](7e52fb9) | <notextile>SI-7226 Fix inference regression caused by TypeVar equality.</notextile>
[https://issues.scala-lang.org/browse/SI-7224](SI-7224) | [https://github.com/scala/scala/commit/292435f](292435f) | <notextile>Fix SI-7224.</notextile>
[https://issues.scala-lang.org/browse/SI-6608](SI-6608), [https://issues.scala-lang.org/browse/SI-6601](SI-6601) | [https://github.com/scala/scala/commit/34faa0d](34faa0d) | <notextile>SI-6601 Close access loophole for value class constructors</notextile>
[https://issues.scala-lang.org/browse/SI-874](SI-874) | [https://github.com/scala/scala/commit/3a30af1](3a30af1) | <notextile>SI-874 actual JSR-223 implementation</notextile>
[https://issues.scala-lang.org/browse/SI-874](SI-874) | [https://github.com/scala/scala/commit/3e8f8dd](3e8f8dd) | <notextile>SI-874 reflect.io improvements</notextile>
[https://issues.scala-lang.org/browse/SI-7244](SI-7244) | [https://github.com/scala/scala/commit/a67b626](a67b626) | <notextile>Close after slurping (fixes SI-7244)</notextile>
[https://issues.scala-lang.org/browse/SI-7006](SI-7006) | [https://github.com/scala/scala/commit/9f6b7bc](9f6b7bc) | <notextile>SI-7006 Fix the unreachable test</notextile>
[https://issues.scala-lang.org/browse/SI-7231](SI-7231) | [https://github.com/scala/scala/commit/fd21898](fd21898) | <notextile>SI-7231 Fix assertion when adapting Null type to Array type</notextile>
[https://issues.scala-lang.org/browse/SI-7006](SI-7006) | [https://github.com/scala/scala/commit/04eac5c](04eac5c) | <notextile>SI-7006 Cleanup from code review</notextile>
[https://issues.scala-lang.org/browse/SI-7006](SI-7006) | [https://github.com/scala/scala/commit/b50a0d8](b50a0d8) | <notextile>SI-7006 Prevent unreachable blocks in GenICode</notextile>
[https://issues.scala-lang.org/browse/SI-7109](SI-7109), [https://issues.scala-lang.org/browse/SI-7153](SI-7153) | [https://github.com/scala/scala/commit/53c499b](53c499b) | <notextile>SI-7109 SI-7153 Generalize the API to get docComments: allow to force docTrees for given fragments. Don't type-check when forcing doc comments, but rather  do it directly. Test the new functionality as well as better tests for the old one.</notextile>
[https://issues.scala-lang.org/browse/SI-7183](SI-7183) | [https://github.com/scala/scala/commit/2cf6c5d](2cf6c5d) | <notextile>[port] SI-7183 Disable unreachability for withFilter matches.</notextile>
[https://issues.scala-lang.org/browse/SI-7215](SI-7215) | [https://github.com/scala/scala/commit/ad69835](ad69835) | <notextile>SI-7215 Fix transpose of an empty Array[Array[T]].</notextile>
[https://issues.scala-lang.org/browse/SI-7190](SI-7190) | [https://github.com/scala/scala/commit/1117be8](1117be8) | <notextile>SI-7190 macros no longer give rise to bridges</notextile>
[https://issues.scala-lang.org/browse/SI-5954](SI-5954), [https://issues.scala-lang.org/browse/SI-7195](SI-7195) | [https://github.com/scala/scala/commit/09130d5](09130d5) | <notextile>[nomaster] SI-7195 minor version mustn't introduce warnings</notextile>
[https://issues.scala-lang.org/browse/SI-6902](SI-6902), [https://issues.scala-lang.org/browse/SI-7183](SI-7183) | [https://github.com/scala/scala/commit/0303e64](0303e64) | <notextile>SI-7183 Disable unreachability for withFilter matches.</notextile>
[https://issues.scala-lang.org/browse/SI-7214](SI-7214) | [https://github.com/scala/scala/commit/acd74ca](acd74ca) | <notextile>SI-7214 outer check based on dealiased pattern type.</notextile>
[https://issues.scala-lang.org/browse/SI-7126](SI-7126), [https://issues.scala-lang.org/browse/SI-7126](SI-7126) | [https://github.com/scala/scala/commit/204b2b4](204b2b4) | <notextile>SI-7126 Eliminate a source of malformed types.</notextile>
[https://issues.scala-lang.org/browse/SI-7126](SI-7126), [https://issues.scala-lang.org/browse/SI-7126](SI-7126) | [https://github.com/scala/scala/commit/696dcdf](696dcdf) | <notextile>SI-7126 Account for the alias types that don't dealias.</notextile>
[https://issues.scala-lang.org/browse/SI-7185](SI-7185) | [https://github.com/scala/scala/commit/387fbf4](387fbf4) | <notextile>SI-7185 Avoid NPE in TreeInfo.isExprSafeToInline</notextile>
[https://issues.scala-lang.org/browse/SI-7045](SI-7045), [https://issues.scala-lang.org/browse/SI-6240](SI-6240) | [https://github.com/scala/scala/commit/0420b2d](0420b2d) | <notextile>Revert SI-6240 synchronization for runtime reflection</notextile>
[https://issues.scala-lang.org/browse/SI-6191](SI-6191) | [https://github.com/scala/scala/commit/c46bc25](c46bc25) | <notextile>Tone down a soft-warning to only show under -Ydebug.</notextile>
[https://issues.scala-lang.org/browse/SI-7045](SI-7045) | [https://github.com/scala/scala/commit/07bcb61](07bcb61) | <notextile>SI-7045 reflection now auto-initializes selfType</notextile>
[https://issues.scala-lang.org/browse/SI-6758](SI-6758) | [https://github.com/scala/scala/commit/1666f6e](1666f6e) | <notextile>Since the problem in SI-6758 is fixed, it's ok to move checking for unused imports to Analyzer. This allows the check to be used in the IDE.</notextile>
[https://issues.scala-lang.org/browse/SI-7132](SI-7132) | [https://github.com/scala/scala/commit/1b9c2f5](1b9c2f5) | <notextile>SI-7132 - don't discard Unit type in interpreter</notextile>
[https://issues.scala-lang.org/browse/SI-6816](SI-6816) | [https://github.com/scala/scala/commit/3b07135](3b07135) | <notextile>SI-6816 Deprecate -Yeta-expand-keeps-star</notextile>
[https://issues.scala-lang.org/browse/SI-6161](SI-6161) | [https://github.com/scala/scala/commit/b457b6c](b457b6c) | <notextile>Refactors AsSeenFromMap to expose extension point.</notextile>
[https://issues.scala-lang.org/browse/SI-7112](SI-7112) | [https://github.com/scala/scala/commit/1976d9f](1976d9f) | <notextile>fixes the test for SI-7112</notextile>
[https://issues.scala-lang.org/browse/SI-7180](SI-7180) | [https://github.com/scala/scala/commit/de1f749](de1f749) | <notextile>SI-7180 Fix regression in implicit scope of HK type alias.</notextile>
[https://issues.scala-lang.org/browse/SI-5975](SI-5975), [https://issues.scala-lang.org/browse/SI-6576](SI-6576) | [https://github.com/scala/scala/commit/19649d4](19649d4) | <notextile>SI-6576 Workaround / diagnostic for IDE NPE.</notextile>
[https://issues.scala-lang.org/browse/SI-7146](SI-7146) | [https://github.com/scala/scala/commit/bb067d3](bb067d3) | <notextile>SI-7146 - Fixing checkinit bug in ExecutionContextImpl and adding test</notextile>
[https://issues.scala-lang.org/browse/SI-7128](SI-7128) | [https://github.com/scala/scala/commit/348ff4b](348ff4b) | <notextile>SI-7128 Fix regression in copyToArray for empty arrays</notextile>
[https://issues.scala-lang.org/browse/SI-7107](SI-7107) | [https://github.com/scala/scala/commit/4f1bfec](4f1bfec) | <notextile>Fix SI-7107: scala now thinks every exception is polymorphic</notextile>
[https://issues.scala-lang.org/browse/SI-7074](SI-7074) | [https://github.com/scala/scala/commit/8187deb](8187deb) | <notextile>SI-7074 Fix xml attribute sorting</notextile>
[https://issues.scala-lang.org/browse/SI-7112](SI-7112) | [https://github.com/scala/scala/commit/89be691](89be691) | <notextile>fixes the test for SI-7112</notextile>
[https://issues.scala-lang.org/browse/SI-6548](SI-6548), [https://issues.scala-lang.org/browse/SI-6548](SI-6548) | [https://github.com/scala/scala/commit/85b63b8](85b63b8) | <notextile>[nomaster] Revert &quot;SI-6548 reflection now correctly enters jinners&quot;</notextile>
[https://issues.scala-lang.org/browse/SI-4664](SI-4664), [https://issues.scala-lang.org/browse/SI-4664](SI-4664) | [https://github.com/scala/scala/commit/8b4af71](8b4af71) | <notextile>[nomaster] Revert &quot;SI-4664 Make scala.util.Random Serializable&quot;</notextile>
[https://issues.scala-lang.org/browse/SI-6521](SI-6521) | [https://github.com/scala/scala/commit/f9550c6](f9550c6) | <notextile>[nomaster] Revert &quot;Fixes SI-6521, overrides Range#head to be faster&quot;</notextile>
[https://issues.scala-lang.org/browse/SI-7159](SI-7159) | [https://github.com/scala/scala/commit/bfd7863](bfd7863) | <notextile>SI-7159 Distinguish between assignability and sub typing in TypeKinds</notextile>
[https://issues.scala-lang.org/browse/SI-7159](SI-7159) | [https://github.com/scala/scala/commit/4124a09](4124a09) | <notextile>SI-7159 Remove erroneous INT &lt;:&lt; LONG in TypeKinds</notextile>
[https://issues.scala-lang.org/browse/SI-107](SI-107), [https://issues.scala-lang.org/browse/SI-7159](SI-7159) | [https://github.com/scala/scala/commit/04b147e](04b147e) | <notextile>SI-7159 Prepare to remove erroneous INT &lt;:&lt; LONG in TypeKinds</notextile>
[https://issues.scala-lang.org/browse/SI-7159](SI-7159) | [https://github.com/scala/scala/commit/208d6ad](208d6ad) | <notextile>SI-7159 Remove unreachable cases in GenICode#adapt</notextile>
[https://issues.scala-lang.org/browse/SI-7181](SI-7181) | [https://github.com/scala/scala/commit/5f3cd86](5f3cd86) | <notextile>SI-7181 Eliminate unnecessary duplication of finally blocks</notextile>
[https://issues.scala-lang.org/browse/SI-7181](SI-7181) | [https://github.com/scala/scala/commit/28a7161](28a7161) | <notextile>SI-7181 Prepare to remove duplicated finally blocks</notextile>
[https://issues.scala-lang.org/browse/SI-7006](SI-7006) | [https://github.com/scala/scala/commit/4f2d784](4f2d784) | <notextile>SI-7006 Simplify jump-only block destination determination</notextile>
[https://issues.scala-lang.org/browse/SI-7006](SI-7006) | [https://github.com/scala/scala/commit/e9f6511](e9f6511) | <notextile>SI-7006 Eliminate unreachable blocks</notextile>
[https://issues.scala-lang.org/browse/SI-7006](SI-7006) | [https://github.com/scala/scala/commit/0d2e19c](0d2e19c) | <notextile>SI-7006 Recognize more jump only blocks</notextile>
[https://issues.scala-lang.org/browse/SI-7006](SI-7006), [https://issues.scala-lang.org/browse/SI-7006](SI-7006) | [https://github.com/scala/scala/commit/022c57f](022c57f) | <notextile>SI-7006 Improve jump-elision code in GenASM</notextile>
[https://issues.scala-lang.org/browse/SI-7112](SI-7112) | [https://github.com/scala/scala/commit/0ecba21](0ecba21) | <notextile>fixes the test for SI-7112</notextile>
[https://issues.scala-lang.org/browse/SI-7120](SI-7120) | [https://github.com/scala/scala/commit/c11cf0b](c11cf0b) | <notextile>SI-7120 Erasure must honor typeref prefixes</notextile>
[https://issues.scala-lang.org/browse/SI-7172](SI-7172), [https://issues.scala-lang.org/browse/SI-7171](SI-7171) | [https://github.com/scala/scala/commit/3d5758c](3d5758c) | <notextile>SI-7171 Consider prefix when assessing type finality.</notextile>
[https://issues.scala-lang.org/browse/SI-7015](SI-7015) | [https://github.com/scala/scala/commit/62fcd3d](62fcd3d) | <notextile>SI-7015 Cleanup from review of null duplication</notextile>
[https://issues.scala-lang.org/browse/SI-7159](SI-7159), [https://issues.scala-lang.org/browse/SI-7015](SI-7015) | [https://github.com/scala/scala/commit/1b6661b](1b6661b) | <notextile>SI-7015 Removes redundant aconst_null; pop; aconst_null creation</notextile>
[https://issues.scala-lang.org/browse/SI-6807](SI-6807) | [https://github.com/scala/scala/commit/8a2cebe](8a2cebe) | <notextile>SI-6807 Deprecating the Actors library.</notextile>
[https://issues.scala-lang.org/browse/SI-7164](SI-7164) | [https://github.com/scala/scala/commit/68f62d7](68f62d7) | <notextile>SI-7164 - Removing NotImplementedError as Fatal from s.u.c.NonFatal</notextile>
[https://issues.scala-lang.org/browse/SI-7130](SI-7130) | [https://github.com/scala/scala/commit/c8ab5b3](c8ab5b3) | <notextile>Fix SI-7130: Memory leaked caused by Statistics</notextile>
[https://issues.scala-lang.org/browse/SI-7143](SI-7143) | [https://github.com/scala/scala/commit/4df9e20](4df9e20) | <notextile>SI-7143 Fix scanner docComment: docBuffer and docPos are initialized in different places and as a result can get out of sync and as a result the invariant that docComment has a position is broken.</notextile>
[https://issues.scala-lang.org/browse/SI-7134](SI-7134) | [https://github.com/scala/scala/commit/fd68fe6](fd68fe6) | <notextile>SI-7134: don't require doc.Settings in base api of scaladoc.</notextile>
[https://issues.scala-lang.org/browse/SI-5063](SI-5063) | [https://github.com/scala/scala/commit/c10b7b6](c10b7b6) | <notextile>unit test ide-t1000567 exercises SI-5063, aka #1000567.</notextile>
[https://issues.scala-lang.org/browse/SI-5920](SI-5920), [https://issues.scala-lang.org/browse/SI-5744](SI-5744) | [https://github.com/scala/scala/commit/9d5d55b](9d5d55b) | <notextile>SI-5744 evidence params are now SYNTHETIC</notextile>
[https://issues.scala-lang.org/browse/SI-2296](SI-2296), [https://issues.scala-lang.org/browse/SI-7091](SI-7091) | [https://github.com/scala/scala/commit/6a7d793](6a7d793) | <notextile>SI-7091 Don't try to put a protected accessor in a package.</notextile>
[https://issues.scala-lang.org/browse/SI-7091](SI-7091) | [https://github.com/scala/scala/commit/2e8ede5](2e8ede5) | <notextile>SI-7091 Add a diagnostic for the &quot;no acc def buf&quot; error.</notextile>
[https://issues.scala-lang.org/browse/SI-6642](SI-6642) | [https://github.com/scala/scala/commit/07ba1f8](07ba1f8) | <notextile>SI-6642 Code cleanup from review of iteratorFrom</notextile>
[https://issues.scala-lang.org/browse/SI-6642](SI-6642) | [https://github.com/scala/scala/commit/3903779](3903779) | <notextile>SI-6642 Refactor mutable.TreeSet to use RedBlackTree instead of AVL</notextile>
[https://issues.scala-lang.org/browse/SI-6642](SI-6642) | [https://github.com/scala/scala/commit/62bc99d](62bc99d) | <notextile>SI-6642 Adds iteratorFrom, keysIteratorFrom, and valuesIteratorFrom</notextile>
[https://issues.scala-lang.org/browse/SI-6642](SI-6642) | [https://github.com/scala/scala/commit/a0b1db4](a0b1db4) | <notextile>SI-6642 Code cleanup on RedBlackTree#TreeIterator</notextile>
[https://issues.scala-lang.org/browse/SI-6514](SI-6514) | [https://github.com/scala/scala/commit/673cc83](673cc83) | <notextile>SI-6514 Avoid spurious dead code warnings</notextile>
[https://issues.scala-lang.org/browse/SI-6225](SI-6225) | [https://github.com/scala/scala/commit/451cab9](451cab9) | <notextile>SI-6225 Fix import of inherited package object implicits</notextile>
[https://issues.scala-lang.org/browse/SI-6935](SI-6935) | [https://github.com/scala/scala/commit/c049d66](c049d66) | <notextile>SI-6935 Added readResolve in BoxedUnit When deserializing Unit, it would return an instance of Object, but not a Scala Unit. By adding readResolve, the deserialization of Unit will work.</notextile>
[https://issues.scala-lang.org/browse/SI-6370](SI-6370) | [https://github.com/scala/scala/commit/7b425bf](7b425bf) | <notextile>SI-6370 changed ListMap apply0 method to produce correct error message when a key is not found Current implementation of apply0 relies on tail method to iterate over all keys. When the list gets to its end, tail produces an 'empty map' message in its exception, which is thrown by ListMap. This change checks if the collection is empty before calling tail and provides a more appropriate key not found message.</notextile>
[https://issues.scala-lang.org/browse/SI-6158](SI-6158) | [https://github.com/scala/scala/commit/6424907](6424907) | <notextile>SI-6158 Restore compile error output under partest --show-log</notextile>
[https://issues.scala-lang.org/browse/SI-6355](SI-6355) | [https://github.com/scala/scala/commit/c26cc53](c26cc53) | <notextile>SI-6355, weakend implementation restriction on applyDynamic.</notextile>
[https://issues.scala-lang.org/browse/SI-4793](SI-4793) | [https://github.com/scala/scala/commit/c26a8db](c26a8db) | <notextile>Maintenance of Predef.</notextile>
[https://issues.scala-lang.org/browse/SI-7082](SI-7082), [https://issues.scala-lang.org/browse/SI-7083](SI-7083), [https://issues.scala-lang.org/browse/SI-6591](SI-6591) | [https://github.com/scala/scala/commit/09ef873](09ef873) | <notextile>SI-6591 Reify and path-dependent types</notextile>
[https://issues.scala-lang.org/browse/SI-5675](SI-5675) | [https://github.com/scala/scala/commit/e0068b9](e0068b9) | <notextile>SI-5675 Discard duplicate feature warnings at a position</notextile>
[https://issues.scala-lang.org/browse/SI-7096](SI-7096) | [https://github.com/scala/scala/commit/5258b63](5258b63) | <notextile>SI-7096 SubstSymMap copies trees before modifying their symbols</notextile>
[https://issues.scala-lang.org/browse/SI-6478](SI-6478) | [https://github.com/scala/scala/commit/6052e19](6052e19) | <notextile>[backport] SI-6478 Fixing JavaTokenParser ident</notextile>
[https://issues.scala-lang.org/browse/SI-5824](SI-5824) | [https://github.com/scala/scala/commit/96b0eff](96b0eff) | <notextile>SI-5824 Fix crashes in reify with _*</notextile>
[https://issues.scala-lang.org/browse/SI-5374](SI-5374), [https://issues.scala-lang.org/browse/SI-6961](SI-6961) | [https://github.com/scala/scala/commit/fa3b804](fa3b804) | <notextile>SI-6961 no structural sharing in list serialization</notextile>
[https://issues.scala-lang.org/browse/SI-6187](SI-6187) | [https://github.com/scala/scala/commit/dfbaaa1](dfbaaa1) | <notextile>SI-6187 Make partial functions re-typable</notextile>
[https://issues.scala-lang.org/browse/SI-6146](SI-6146) | [https://github.com/scala/scala/commit/55c9b9c](55c9b9c) | <notextile>SI-6146 More accurate prefixes for sealed subtypes.</notextile>
[https://issues.scala-lang.org/browse/SI-5954](SI-5954), [https://issues.scala-lang.org/browse/SI-7070](SI-7070) | [https://github.com/scala/scala/commit/1426fec](1426fec) | <notextile>SI-7070 Turn restriction on companions in pkg objs into warning</notextile>
[https://issues.scala-lang.org/browse/SI-5082](SI-5082) | [https://github.com/scala/scala/commit/a0ee6e9](a0ee6e9) | <notextile>SI-5082 Cycle avoidance between case companions</notextile>
[https://issues.scala-lang.org/browse/SI-7100](SI-7100) | [https://github.com/scala/scala/commit/a53e150](a53e150) | <notextile>SI-7100 Fixed infinite recursion in duplicators</notextile>
[https://issues.scala-lang.org/browse/SI-6113](SI-6113) | [https://github.com/scala/scala/commit/0d68a87](0d68a87) | <notextile>SI-6113 typeOf now works for type lambdas</notextile>
[https://issues.scala-lang.org/browse/SI-7026](SI-7026), [https://issues.scala-lang.org/browse/SI-7026](SI-7026) | [https://github.com/scala/scala/commit/79e774f](79e774f) | <notextile>SI-7026: parseTree should never return a typed one</notextile>
[https://issues.scala-lang.org/browse/SI-6666](SI-6666) | [https://github.com/scala/scala/commit/81fa831](81fa831) | <notextile>Class symbols can't be contravariant.</notextile>
[https://issues.scala-lang.org/browse/SI-6666](SI-6666) | [https://github.com/scala/scala/commit/275b341](275b341) | <notextile>SI-6666 Catch VerifyErrors in the making in early defs.</notextile>
[https://issues.scala-lang.org/browse/SI-6666](SI-6666) | [https://github.com/scala/scala/commit/4c34280](4c34280) | <notextile>Add a test case from the comments of SI-6666.</notextile>
[https://issues.scala-lang.org/browse/SI-6259](SI-6259), [https://issues.scala-lang.org/browse/SI-6506](SI-6506), [https://issues.scala-lang.org/browse/SI-6957](SI-6957), [https://issues.scala-lang.org/browse/SI-6666](SI-6666) | [https://github.com/scala/scala/commit/fd61254](fd61254) | <notextile>SI-6666 Account for nesting in setting INCONSTRUCTOR</notextile>
[https://issues.scala-lang.org/browse/SI-2806](SI-2806), [https://issues.scala-lang.org/browse/SI-6888](SI-6888) | [https://github.com/scala/scala/commit/b579a42](b579a42) | <notextile>SI-6888 Loosen criteria for $outer search.</notextile>
[https://issues.scala-lang.org/browse/SI-7071](SI-7071), [https://issues.scala-lang.org/browse/SI-7072](SI-7072) | [https://github.com/scala/scala/commit/b43ae58](b43ae58) | <notextile>introduces an exhaustive java-to-scala test</notextile>
[https://issues.scala-lang.org/browse/SI-6989](SI-6989) | [https://github.com/scala/scala/commit/02ed5fb](02ed5fb) | <notextile>SI-6989 privateWithin is now populated in reflect</notextile>
[https://issues.scala-lang.org/browse/SI-5017](SI-5017) | [https://github.com/scala/scala/commit/015ff51](015ff51) | <notextile>[nomaster] Revert &quot;SI-5017 Poor performance of :+ operator on Arrays&quot;</notextile>
[https://issues.scala-lang.org/browse/SI-6150](SI-6150), [https://issues.scala-lang.org/browse/SI-6773](SI-6773), [https://issues.scala-lang.org/browse/SI-6150](SI-6150) | [https://github.com/scala/scala/commit/87d52db](87d52db) | <notextile>[nomaster] SI-6773 Makes the SI-6150 changes binary compatible with 2.10</notextile>
[https://issues.scala-lang.org/browse/SI-7060](SI-7060) | [https://github.com/scala/scala/commit/e5c0e59](e5c0e59) | <notextile>SI-7060 More conservative dead code elim marking</notextile>
[https://issues.scala-lang.org/browse/SI-7039](SI-7039) | [https://github.com/scala/scala/commit/8ae0e2a](8ae0e2a) | <notextile>SI-7039 unapplySeq result type independent of subpattern count</notextile>
[https://issues.scala-lang.org/browse/SI-5833](SI-5833) | [https://github.com/scala/scala/commit/0574172](0574172) | <notextile>SI-5833 Fixes tail-of-Nil problem in RefinedType#normalizeImpl</notextile>
[https://issues.scala-lang.org/browse/SI-6667](SI-6667) | [https://github.com/scala/scala/commit/b67f8e5](b67f8e5) | <notextile>[nomerge] SI-6667 Demote a new ambiguity error to a lint warning.</notextile>
[https://issues.scala-lang.org/browse/SI-6017](SI-6017) | [https://github.com/scala/scala/commit/0e8d8c7](0e8d8c7) | <notextile>SI-6017 Scaladoc: Show all letters without dangling links</notextile>
[https://issues.scala-lang.org/browse/SI-6017](SI-6017) | [https://github.com/scala/scala/commit/3f0bce9](3f0bce9) | <notextile>SI-6017 Generate Scaladoc's index links in Scala side</notextile>
[https://issues.scala-lang.org/browse/SI-6578](SI-6578) | [https://github.com/scala/scala/commit/a6137d1](a6137d1) | <notextile>Fix SI-6578. Deprecated `askType` because of possible race conditions in type checker.</notextile>
[https://issues.scala-lang.org/browse/SI-7008](SI-7008) | [https://github.com/scala/scala/commit/f1701f7](f1701f7) | <notextile>SI-7008 @throws annotations are now populated in reflect</notextile>
[https://issues.scala-lang.org/browse/SI-7033](SI-7033) | [https://github.com/scala/scala/commit/3af838c](3af838c) | <notextile>SI-7033 Be symful when creating factory methods.</notextile>
[https://issues.scala-lang.org/browse/SI-6422](SI-6422) | [https://github.com/scala/scala/commit/bc01614](bc01614) | <notextile>Revert &quot;SI-6422: add missing Fractional and Integral alias in scala package&quot;</notextile>
[https://issues.scala-lang.org/browse/SI-5313](SI-5313) | [https://github.com/scala/scala/commit/4fda83f](4fda83f) | <notextile>SI-5313 Minor code cleanup for store clobbering</notextile>
[https://issues.scala-lang.org/browse/SI-5313](SI-5313) | [https://github.com/scala/scala/commit/c7d489e](c7d489e) | <notextile>SI-5313 Test clobbers on the back edge of a loop</notextile>
[https://issues.scala-lang.org/browse/SI-5313](SI-5313) | [https://github.com/scala/scala/commit/9b4fa83](9b4fa83) | <notextile>SI-5313 Eliminate more stores by replacing clobbers with null stores</notextile>
[https://issues.scala-lang.org/browse/SI-5313](SI-5313) | [https://github.com/scala/scala/commit/eab2884](eab2884) | <notextile>SI-5313 Do not eliminate stores that potentially wipe referenes</notextile>
[https://issues.scala-lang.org/browse/SI-7046](SI-7046) | [https://github.com/scala/scala/commit/2403d1d](2403d1d) | <notextile>SI-7046 reflection now auto-initializes knownDirectSubclasses</notextile>
[https://issues.scala-lang.org/browse/SI-6482](SI-6482), [https://issues.scala-lang.org/browse/SI-7022](SI-7022) | [https://github.com/scala/scala/commit/374c912](374c912) | <notextile>SI-7022 Additional test case for value class w. bounds</notextile>
[https://issues.scala-lang.org/browse/SI-6482](SI-6482), [https://issues.scala-lang.org/browse/SI-6482](SI-6482) | [https://github.com/scala/scala/commit/4ed8836](4ed8836) | <notextile>[backport] SI-6482, lost bounds in extension methods.</notextile>
[https://issues.scala-lang.org/browse/SI-6941](SI-6941) | [https://github.com/scala/scala/commit/b2117cf](b2117cf) | <notextile>SI-6941 tests</notextile>
[https://issues.scala-lang.org/browse/SI-6686](SI-6686) | [https://github.com/scala/scala/commit/b92396b](b92396b) | <notextile>SI-6686 drop valdef unused in flatMapCond's block</notextile>
[https://issues.scala-lang.org/browse/SI-5158](SI-5158), [https://issues.scala-lang.org/browse/SI-6941](SI-6941) | [https://github.com/scala/scala/commit/494ba94](494ba94) | <notextile>don't store subpats bound to underscore</notextile>
[https://issues.scala-lang.org/browse/SI-4976](SI-4976) | [https://github.com/scala/scala/commit/d71f59e](d71f59e) | <notextile>SI-4976 Scaladoc: Add a source link to package objects</notextile>
[https://issues.scala-lang.org/browse/SI-7029](SI-7029) | [https://github.com/scala/scala/commit/5275bae](5275bae) | <notextile>SI-7029 - Make test more robust</notextile>
[https://issues.scala-lang.org/browse/SI-7029](SI-7029) | [https://github.com/scala/scala/commit/3f78bee](3f78bee) | <notextile>SI-7029 - Makes sure that uncaught exceptions are propagated to the UEH for the global ExecutionContext</notextile>
[https://issues.scala-lang.org/browse/SI-6539](SI-6539) | [https://github.com/scala/scala/commit/2989258](2989258) | <notextile>SI-6539 moves @compileTimeOnly away from scala-reflect</notextile>
[https://issues.scala-lang.org/browse/SI-5151](SI-5151) | [https://github.com/scala/scala/commit/8bd03e0](8bd03e0) | <notextile>SI-5151 - Add firstKey and lastKey to LongMap.</notextile>
[https://issues.scala-lang.org/browse/SI-6773](SI-6773) | [https://github.com/scala/scala/commit/108a1f7](108a1f7) | <notextile>SI-6773 Changes IndexSeqFactory to be &quot;since 2.11&quot;</notextile>
[https://issues.scala-lang.org/browse/SI-5543](SI-5543), [https://issues.scala-lang.org/browse/SI-1803](SI-1803) | [https://github.com/scala/scala/commit/b74c33e](b74c33e) | <notextile>SI-1803, plus documentation and cleanups in Namers, mainly in typeSig</notextile>
[https://issues.scala-lang.org/browse/SI-6812](SI-6812) | [https://github.com/scala/scala/commit/941c569](941c569) | <notextile>SI-6812 scaladoc can opt out of expanding macros</notextile>
[https://issues.scala-lang.org/browse/SI-6206](SI-6206), [https://issues.scala-lang.org/browse/SI-6206](SI-6206) | [https://github.com/scala/scala/commit/11ac963](11ac963) | <notextile>[backport] Fix for SI-6206, inconsistency with apply.</notextile>
[https://issues.scala-lang.org/browse/SI-6601](SI-6601) | [https://github.com/scala/scala/commit/5a2828c](5a2828c) | <notextile>A test case to guide the eventual fix for SI-6601.</notextile>
[https://issues.scala-lang.org/browse/SI-6601](SI-6601) | [https://github.com/scala/scala/commit/172f3f6](172f3f6) | <notextile>Revert &quot;SI-6601 Publicise derived value contstructor after pickler&quot;</notextile>
[https://issues.scala-lang.org/browse/SI-2818](SI-2818) | [https://github.com/scala/scala/commit/6db4db9](6db4db9) | <notextile>SI-2818 Make List.foldRight always do a reverse/foldLeft flip</notextile>
[https://issues.scala-lang.org/browse/SI-2968](SI-2968), [https://issues.scala-lang.org/browse/SI-2968](SI-2968) | [https://github.com/scala/scala/commit/8350cd9](8350cd9) | <notextile>[backport] SI-2968 Fix brace healing for `^case (class&#124;object) {`</notextile>
[https://issues.scala-lang.org/browse/SI-6963](SI-6963) | [https://github.com/scala/scala/commit/1de399d](1de399d) | <notextile>SI-6963 Add version to -Xmigration</notextile>
[https://issues.scala-lang.org/browse/SI-3353](SI-3353), [https://issues.scala-lang.org/browse/SI-3353](SI-3353) | [https://github.com/scala/scala/commit/1049435](1049435) | <notextile>SI-3353 don't extract &lt;unapply-selector&gt; into named-arg local val</notextile>
[https://issues.scala-lang.org/browse/SI-6017](SI-6017) | [https://github.com/scala/scala/commit/831bffd](831bffd) | <notextile>SI-6017 Scaladoc's Index should be case-sensitive</notextile>
[https://issues.scala-lang.org/browse/SI-6853](SI-6853) | [https://github.com/scala/scala/commit/e36327a](e36327a) | <notextile>SI-6853 changed private method remove to be tail recursive. Operations += and -= on mutable.ListMap rely on the private method remove to perform. This methods was implemented using recursion, but it was not tail recursive. When the ListMap got too big the += caused a StackOverflowError.</notextile>
[https://issues.scala-lang.org/browse/SI-6595](SI-6595) | [https://github.com/scala/scala/commit/ff92610](ff92610) | <notextile>SI-6595, lost modifiers in early defs.</notextile>
[https://issues.scala-lang.org/browse/SI-6584](SI-6584) | [https://github.com/scala/scala/commit/98534b2](98534b2) | <notextile>SI-6584, Stream#distinct uses too much memory.</notextile>
[https://issues.scala-lang.org/browse/SI-6426](SI-6426) | [https://github.com/scala/scala/commit/d2316df](d2316df) | <notextile>SI-6426, importable _.</notextile>
[https://issues.scala-lang.org/browse/SI-6072](SI-6072) | [https://github.com/scala/scala/commit/05882eb](05882eb) | <notextile>SI-6072, crasher with overloaded eq.</notextile>
[https://issues.scala-lang.org/browse/SI-5604](SI-5604) | [https://github.com/scala/scala/commit/d4437aa](d4437aa) | <notextile>SI-5604, selections on package objects.</notextile>
[https://issues.scala-lang.org/browse/SI-5859](SI-5859) | [https://github.com/scala/scala/commit/e156cd1](e156cd1) | <notextile>SI-5859, inapplicable varargs.</notextile>
[https://issues.scala-lang.org/browse/SI-5353](SI-5353) | [https://github.com/scala/scala/commit/f3f1e50](f3f1e50) | <notextile>SI-5353, imperfect error message.</notextile>
[https://issues.scala-lang.org/browse/SI-5130](SI-5130) | [https://github.com/scala/scala/commit/77ec4ef](77ec4ef) | <notextile>SI-5130, precision disappearing from refinement.</notextile>
[https://issues.scala-lang.org/browse/SI-4729](SI-4729) | [https://github.com/scala/scala/commit/faca7ec](faca7ec) | <notextile>SI-4729, overriding java varargs in scala.</notextile>
[https://issues.scala-lang.org/browse/SI-2418](SI-2418), [https://issues.scala-lang.org/browse/SI-2418](SI-2418) | [https://github.com/scala/scala/commit/0990890](0990890) | <notextile>SI-2418, remove restriction on final vars.</notextile>
[https://issues.scala-lang.org/browse/SI-6572](SI-6572) | [https://github.com/scala/scala/commit/16eaefb](16eaefb) | <notextile>SI-6572 Test case, originally fixed in a3680be.</notextile>
[https://issues.scala-lang.org/browse/SI-6301](SI-6301), [https://issues.scala-lang.org/browse/SI-6301](SI-6301), [https://issues.scala-lang.org/browse/SI-6301](SI-6301), [https://issues.scala-lang.org/browse/SI-6572](SI-6572) | [https://github.com/scala/scala/commit/0679da5](0679da5) | <notextile>[backport] SI-6301 / SI-6572 specialization regressions</notextile>
[https://issues.scala-lang.org/browse/SI-5378](SI-5378) | [https://github.com/scala/scala/commit/f6d90a8](f6d90a8) | <notextile>[backport] SI-5378, unsoundness with type bounds in refinements.</notextile>
[https://issues.scala-lang.org/browse/SI-4714](SI-4714) | [https://github.com/scala/scala/commit/5f85fe5](5f85fe5) | <notextile>SI-4714 Initialize history while initializing the REPL's reader</notextile>
[https://issues.scala-lang.org/browse/SI-2418](SI-2418), [https://issues.scala-lang.org/browse/SI-2418](SI-2418) | [https://github.com/scala/scala/commit/243cede](243cede) | <notextile>[backport] Removed restriction on final vars, SI-2418.</notextile>
[https://issues.scala-lang.org/browse/SI-7009](SI-7009), [https://issues.scala-lang.org/browse/SI-7009](SI-7009) | [https://github.com/scala/scala/commit/fefe6cc](fefe6cc) | <notextile>SI-7009: `@throws` annotation synthesized incorrectly</notextile>
[https://issues.scala-lang.org/browse/SI-7009](SI-7009) | [https://github.com/scala/scala/commit/e22d801](e22d801) | <notextile>Test case for SI-7009.</notextile>
[https://issues.scala-lang.org/browse/SI-1336](SI-1336), [https://issues.scala-lang.org/browse/SI-5589](SI-5589), [https://issues.scala-lang.org/browse/SI-4574](SI-4574), [https://issues.scala-lang.org/browse/SI-6968](SI-6968), [https://issues.scala-lang.org/browse/SI-6968](SI-6968) | [https://github.com/scala/scala/commit/a87d409](a87d409) | <notextile>SI-6968 Simple Tuple patterns aren't irrefutable</notextile>
[https://issues.scala-lang.org/browse/SI-6669](SI-6669) | [https://github.com/scala/scala/commit/166fd02](166fd02) | <notextile>SI-6669 Add . to the default scalap classpath</notextile>
[https://issues.scala-lang.org/browse/SI-6728](SI-6728) | [https://github.com/scala/scala/commit/80a814d](80a814d) | <notextile>SI-6728 Fixes crash in parser on incomplete for expression</notextile>
[https://issues.scala-lang.org/browse/SI-7035](SI-7035) | [https://github.com/scala/scala/commit/9afae59](9afae59) | <notextile>SI-7035 Centralize case field accessor sorting.</notextile>
[https://issues.scala-lang.org/browse/SI-6726](SI-6726) | [https://github.com/scala/scala/commit/6357c8d](6357c8d) | <notextile>SI-6726 Further optimization of pattern analysis</notextile>
[https://issues.scala-lang.org/browse/SI-6726](SI-6726), [https://issues.scala-lang.org/browse/SI-6726](SI-6726) | [https://github.com/scala/scala/commit/14d8c22](14d8c22) | <notextile>SI-6726 Hash consing for Pattern matching Sym-s</notextile>
[https://issues.scala-lang.org/browse/SI-6726](SI-6726) | [https://github.com/scala/scala/commit/32c0a2e](32c0a2e) | <notextile>SI-6726 Add benchmark used for testing pattern matcher.</notextile>
[https://issues.scala-lang.org/browse/SI-6154](SI-6154) | [https://github.com/scala/scala/commit/d3f3394](d3f3394) | <notextile>[backport] Fix for SI-6154, VerifyError originating in uncurry.</notextile>
[https://issues.scala-lang.org/browse/SI-6516](SI-6516) | [https://github.com/scala/scala/commit/6f86583](6f86583) | <notextile>SI-6516, macros comparing types with == instead of =:=.</notextile>
[https://issues.scala-lang.org/browse/SI-6551](SI-6551) | [https://github.com/scala/scala/commit/cfaa3b5](cfaa3b5) | <notextile>SI-6551 Expand test case into uncomfortable areas.</notextile>
[https://issues.scala-lang.org/browse/SI-6651](SI-6651) | [https://github.com/scala/scala/commit/45ccdc5](45ccdc5) | <notextile>SI-6651 Substitute `this` in extension method sigs</notextile>
[https://issues.scala-lang.org/browse/SI-6987](SI-6987) | [https://github.com/scala/scala/commit/bffe776](bffe776) | <notextile>[backport] Disabled SI-6987.</notextile>
[https://issues.scala-lang.org/browse/SI-6258](SI-6258), [https://issues.scala-lang.org/browse/SI-6258](SI-6258), [https://issues.scala-lang.org/browse/SI-3577](SI-3577), [https://issues.scala-lang.org/browse/SI-3577](SI-3577) | [https://github.com/scala/scala/commit/b8da00e](b8da00e) | <notextile>[backport] SI-3577 BoundedWildcardType handling</notextile>
[https://issues.scala-lang.org/browse/SI-5459](SI-5459) | [https://github.com/scala/scala/commit/6d669f3](6d669f3) | <notextile>Pending test for SI-5459.</notextile>
[https://issues.scala-lang.org/browse/SI-6939](SI-6939) | [https://github.com/scala/scala/commit/b6f898f](b6f898f) | <notextile>SI-6939 Fix namespace binding (xmlns) not overriding outer binding</notextile>
[https://issues.scala-lang.org/browse/SI-6811](SI-6811) | [https://github.com/scala/scala/commit/aa199b8](aa199b8) | <notextile>Revert &quot;SI-6811 Misc. removals in util, testing, io, ...&quot;</notextile>
[https://issues.scala-lang.org/browse/SI-6891](SI-6891) | [https://github.com/scala/scala/commit/7babdab](7babdab) | <notextile>SI-6891 Fix value class + tailrec crasher.</notextile>
[https://issues.scala-lang.org/browse/SI-6981](SI-6981) | [https://github.com/scala/scala/commit/cff0934](cff0934) | <notextile>Ill-scoped reference checking in TreeCheckers</notextile>
[https://issues.scala-lang.org/browse/SI-4602](SI-4602) | [https://github.com/scala/scala/commit/3cbb002](3cbb002) | <notextile>SI-4602 Disable unreliable test of fsc path absolutization</notextile>
[https://issues.scala-lang.org/browse/SI-4602](SI-4602), [https://issues.scala-lang.org/browse/SI-4602](SI-4602) | [https://github.com/scala/scala/commit/952e1bf](952e1bf) | <notextile>SI-4602 Make fsc absolutize source file names</notextile>
[https://issues.scala-lang.org/browse/SI-4733](SI-4733), [https://issues.scala-lang.org/browse/SI-4733](SI-4733) | [https://github.com/scala/scala/commit/e0cf651](e0cf651) | <notextile>SI-4733 - fsc no longer creates a single temp directory for all users.</notextile>
[https://issues.scala-lang.org/browse/SI-6863](SI-6863) | [https://github.com/scala/scala/commit/0b52a51](0b52a51) | <notextile>SI-6863 Fix verify error in captured var inited from expr with try/catch</notextile>
[https://issues.scala-lang.org/browse/SI-6932](SI-6932) | [https://github.com/scala/scala/commit/262d7ec](262d7ec) | <notextile>SI-6932 Remove Batchable trait plus minor clean-ups</notextile>
[https://issues.scala-lang.org/browse/SI-6932](SI-6932) | [https://github.com/scala/scala/commit/08a74e5](08a74e5) | <notextile> Fix SI-6932 by enabling linearization of callback execution for the internal execution context of Future</notextile>
[https://issues.scala-lang.org/browse/SI-6443](SI-6443) | [https://github.com/scala/scala/commit/11329c3](11329c3) | <notextile>SI-6443 Expand test coverage with varargs, by-name.</notextile>
[https://issues.scala-lang.org/browse/SI-6443](SI-6443) | [https://github.com/scala/scala/commit/493197f](493197f) | <notextile>SI-6443 Widen dependent param types in uncurry</notextile>
[https://issues.scala-lang.org/browse/SI-7018](SI-7018) | [https://github.com/scala/scala/commit/a72aa94](a72aa94) | <notextile>SI-7018 Fix memory leak in Attachments.</notextile>
[https://issues.scala-lang.org/browse/SI-6556](SI-6556), [https://issues.scala-lang.org/browse/SI-6648](SI-6648), [https://issues.scala-lang.org/browse/SI-6556](SI-6556) | [https://github.com/scala/scala/commit/982633a](982633a) | <notextile>SI-6556 Remove unneeded workaround in erasure.</notextile>
[https://issues.scala-lang.org/browse/SI-5304](SI-5304) | [https://github.com/scala/scala/commit/2580a51](2580a51) | <notextile>Laying groundwork for a followup ticket.</notextile>
[https://issues.scala-lang.org/browse/SI-4859](SI-4859) | [https://github.com/scala/scala/commit/412ad57](412ad57) | <notextile>SI-4859 Retain MODULE_LOAD in dead code elim.</notextile>
[https://issues.scala-lang.org/browse/SI-4859](SI-4859) | [https://github.com/scala/scala/commit/f21b1ce](f21b1ce) | <notextile>SI-4859 Don't elide qualifiers when selecting nested modules.</notextile>
[https://issues.scala-lang.org/browse/SI-4859](SI-4859) | [https://github.com/scala/scala/commit/61f2936](61f2936) | <notextile>SI-4859 Don't rewrite CC().CC2() to new CC2</notextile>
[https://issues.scala-lang.org/browse/SI-6083](SI-6083) | [https://github.com/scala/scala/commit/76bb23d](76bb23d) | <notextile>SI-6083, misleading annotation error message.</notextile>
[https://issues.scala-lang.org/browse/SI-5182](SI-5182) | [https://github.com/scala/scala/commit/801eab5](801eab5) | <notextile>SI-5182, no position on annotation error.</notextile>
[https://issues.scala-lang.org/browse/SI-2577](SI-2577), [https://issues.scala-lang.org/browse/SI-6860](SI-6860) | [https://github.com/scala/scala/commit/832fc9a](832fc9a) | <notextile>SI-2577, SI-6860: annotation type inference.</notextile>
[https://issues.scala-lang.org/browse/SI-6987](SI-6987) | [https://github.com/scala/scala/commit/53d5df5](53d5df5) | <notextile>Disabled SI-6987.</notextile>
[https://issues.scala-lang.org/browse/SI-7011](SI-7011) | [https://github.com/scala/scala/commit/d592216](d592216) | <notextile>SI-7011 Fix finding constructor type in captured var definitions</notextile>
[https://issues.scala-lang.org/browse/SI-6231](SI-6231) | [https://github.com/scala/scala/commit/f6168b8](f6168b8) | <notextile>SI-6231 Report unsupported free var capture by a trait.</notextile>
[https://issues.scala-lang.org/browse/SI-6987](SI-6987) | [https://github.com/scala/scala/commit/1dab5bf](1dab5bf) | <notextile>SI-6987 Tests fsc verbose output</notextile>
[https://issues.scala-lang.org/browse/SI-6987](SI-6987) | [https://github.com/scala/scala/commit/e12a5b8](e12a5b8) | <notextile>SI-6987 Fixes fsc compile server verbose output</notextile>
[https://issues.scala-lang.org/browse/SI-6997](SI-6997), [https://issues.scala-lang.org/browse/SI-6666](SI-6666) | [https://github.com/scala/scala/commit/1a7de43](1a7de43) | <notextile>SI-6666 Restrict hidden `this` access in self/super calls.</notextile>
[https://issues.scala-lang.org/browse/SI-6011](SI-6011), [https://issues.scala-lang.org/browse/SI-6902](SI-6902) | [https://github.com/scala/scala/commit/cbd0205](cbd0205) | <notextile>SI-6902 Check unreachability under @unchecked</notextile>
[https://issues.scala-lang.org/browse/SI-6952](SI-6952) | [https://github.com/scala/scala/commit/8a74b7b](8a74b7b) | <notextile>Closes SI-6952: add correct error positions for Dynamic feature check.</notextile>
[https://issues.scala-lang.org/browse/SI-6969](SI-6969) | [https://github.com/scala/scala/commit/0d01cc1](0d01cc1) | <notextile>SI-6969, mishandling of SoftReferences in method cache.</notextile>
[https://issues.scala-lang.org/browse/SI-6976](SI-6976) | [https://github.com/scala/scala/commit/d9d6494](d9d6494) | <notextile>SI-6976 Fix value class separate compilation crasher.</notextile>
[https://issues.scala-lang.org/browse/SI-6637](SI-6637), [https://issues.scala-lang.org/browse/SI-6637](SI-6637) | [https://github.com/scala/scala/commit/4dceb22](4dceb22) | <notextile>[backport] Fix SI-6637 (misoptimization in erasure)</notextile>
[https://issues.scala-lang.org/browse/SI-6611](SI-6611), [https://issues.scala-lang.org/browse/SI-6247](SI-6247), [https://issues.scala-lang.org/browse/SI-6611](SI-6611), [https://issues.scala-lang.org/browse/SI-6247](SI-6247) | [https://github.com/scala/scala/commit/ba411c4](ba411c4) | <notextile>[backport] Fix unsafe array opt. / opt. primitive Array(...)</notextile>
[https://issues.scala-lang.org/browse/SI-6567](SI-6567), [https://issues.scala-lang.org/browse/SI-6567](SI-6567) | [https://github.com/scala/scala/commit/96ed055](96ed055) | <notextile>[backport] SI-6567 Warning for Option(implicitView(foo))</notextile>
[https://issues.scala-lang.org/browse/SI-6439](SI-6439) | [https://github.com/scala/scala/commit/3486d47](3486d47) | <notextile>SI-6439 Avoid spurious REPL warnings about companionship</notextile>
[https://issues.scala-lang.org/browse/SI-6923](SI-6923), [https://issues.scala-lang.org/browse/SI-6994](SI-6994) | [https://github.com/scala/scala/commit/52a5328](52a5328) | <notextile>Addressing warnings.</notextile>
[https://issues.scala-lang.org/browse/SI-6994](SI-6994) | [https://github.com/scala/scala/commit/8f49884](8f49884) | <notextile>SI-6994 Avoid spurious promiscuous catch warning</notextile>
[https://issues.scala-lang.org/browse/SI-6434](SI-6434) | [https://github.com/scala/scala/commit/8297843](8297843) | <notextile>SI-6434 Pretty print function types with by name arg as (=&gt; A) =&gt; B</notextile>
[https://issues.scala-lang.org/browse/SI-6942](SI-6942) | [https://github.com/scala/scala/commit/f539781](f539781) | <notextile>SI-6942 more efficient unreachability analysis</notextile>
[https://issues.scala-lang.org/browse/SI-5568](SI-5568) | [https://github.com/scala/scala/commit/c606559](c606559) | <notextile>SI-5568 Comment improvements for getClass on primitive intersection.</notextile>
[https://issues.scala-lang.org/browse/SI-5568](SI-5568) | [https://github.com/scala/scala/commit/765386f](765386f) | <notextile>SI-5568 Fixes verify error from getClass on refinement of value type</notextile>
[https://issues.scala-lang.org/browse/SI-6608](SI-6608), [https://issues.scala-lang.org/browse/SI-6601](SI-6601) | [https://github.com/scala/scala/commit/b07228a](b07228a) | <notextile>SI-6601 Publicise derived value contstructor after pickler</notextile>
[https://issues.scala-lang.org/browse/SI-6923](SI-6923) | [https://github.com/scala/scala/commit/66fe64f](66fe64f) | <notextile>SI-6923 Context now buffers warnings as well as errors</notextile>
[https://issues.scala-lang.org/browse/SI-6956](SI-6956) | [https://github.com/scala/scala/commit/a6b34b6](a6b34b6) | <notextile>SI-6956 determine switchability by type, not tree</notextile>
[https://issues.scala-lang.org/browse/SI-5824](SI-5824) | [https://github.com/scala/scala/commit/950e938](950e938) | <notextile>Revert &quot;SI-5824 Fix crashes in reify with _*&quot;</notextile>
[https://issues.scala-lang.org/browse/SI-5824](SI-5824) | [https://github.com/scala/scala/commit/0a25ee3](0a25ee3) | <notextile>SI-5824 Fix crashes in reify with _*</notextile>
[https://issues.scala-lang.org/browse/SI-6811](SI-6811) | [https://github.com/scala/scala/commit/a9c374b](a9c374b) | <notextile>SI-6811 Move scala.util.{automata,regexp} ... ... to scala.xml.dtd.impl and make it private[dtd]</notextile>
[https://issues.scala-lang.org/browse/SI-6811](SI-6811) | [https://github.com/scala/scala/commit/a386291](a386291) | <notextile>SI-6811 Remove scala.xml.include.sax.Main</notextile>
[https://issues.scala-lang.org/browse/SI-6811](SI-6811) | [https://github.com/scala/scala/commit/98d3368](98d3368) | <notextile>SI-6811 Remove scala.ScalaObject</notextile>
[https://issues.scala-lang.org/browse/SI-6811](SI-6811) | [https://github.com/scala/scala/commit/684f549](684f549) | <notextile>SI-6811 Remove the scala.annotation.target package</notextile>
[https://issues.scala-lang.org/browse/SI-6811](SI-6811) | [https://github.com/scala/scala/commit/f931833](f931833) | <notextile>SI-6811 Misc. removals in util, testing, io, ...</notextile>
[https://issues.scala-lang.org/browse/SI-6811](SI-6811) | [https://github.com/scala/scala/commit/be5554f](be5554f) | <notextile>SI-6811 Remove deprecated elements in scala.collection</notextile>
[https://issues.scala-lang.org/browse/SI-6811](SI-6811) | [https://github.com/scala/scala/commit/67d7e26](67d7e26) | <notextile>SI-6811 Remove parts of scala.concurrent not needed by scala.actors</notextile>
[https://issues.scala-lang.org/browse/SI-6811](SI-6811) | [https://github.com/scala/scala/commit/b13bf26](b13bf26) | <notextile>SI-6811 Remove the scala.util.grammar package</notextile>
[https://issues.scala-lang.org/browse/SI-6811](SI-6811) | [https://github.com/scala/scala/commit/c2903d6](c2903d6) | <notextile>SI-6811 Remove scala.collection.mutable.ConcurrentMap</notextile>
[https://issues.scala-lang.org/browse/SI-6811](SI-6811) | [https://github.com/scala/scala/commit/ed52ea0](ed52ea0) | <notextile>SI-6811 Remove primitive widenings and /:\</notextile>
[https://issues.scala-lang.org/browse/SI-6811](SI-6811) | [https://github.com/scala/scala/commit/2ee8568](2ee8568) | <notextile>SI-6811 Remove deprecated constructors</notextile>
[https://issues.scala-lang.org/browse/SI-6811](SI-6811) | [https://github.com/scala/scala/commit/167fc0a](167fc0a) | <notextile>SI-6811 Remove usages of scala.annotation.cloneable</notextile>
[https://issues.scala-lang.org/browse/SI-6811](SI-6811) | [https://github.com/scala/scala/commit/4805b97](4805b97) | <notextile>SI-6811 Remove scala.annotation.serializable</notextile>
[https://issues.scala-lang.org/browse/SI-6979](SI-6979) | [https://github.com/scala/scala/commit/decc9a9](decc9a9) | <notextile>SI-6979 Small optimization in lub</notextile>
[https://issues.scala-lang.org/browse/SI-6479](SI-6479) | [https://github.com/scala/scala/commit/9cc61f3](9cc61f3) | <notextile>SI-6479 Don't lift try exprs in label arguments.</notextile>
[https://issues.scala-lang.org/browse/SI-6963](SI-6963) | [https://github.com/scala/scala/commit/0c2e884](0c2e884) | <notextile>SI-6963 Deprecates -Xmigration switch</notextile>
[https://issues.scala-lang.org/browse/SI-6675](SI-6675) | [https://github.com/scala/scala/commit/78019b2](78019b2) | <notextile>SI-6675 Test new warning under -Xoldpatmat.</notextile>
[https://issues.scala-lang.org/browse/SI-6675](SI-6675) | [https://github.com/scala/scala/commit/692372c](692372c) | <notextile>SI-6675 -Xlint arity enforcement for extractors</notextile>
[https://issues.scala-lang.org/browse/SI-6955](SI-6955) | [https://github.com/scala/scala/commit/8475807](8475807) | <notextile>SI-6955 switch emission no longer foiled by type alias</notextile>
[https://issues.scala-lang.org/browse/SI-6082](SI-6082) | [https://github.com/scala/scala/commit/39352fe](39352fe) | <notextile>SI-6082 Conditionally expand @ann(x) to @ann(value = x)</notextile>
[https://issues.scala-lang.org/browse/SI-5440](SI-5440) | [https://github.com/scala/scala/commit/4aba0fe](4aba0fe) | <notextile>SI-5440 Test case for exhaustiveness check</notextile>
[https://issues.scala-lang.org/browse/SI-5340](SI-5340) | [https://github.com/scala/scala/commit/1212af4](1212af4) | <notextile>SI-5340 Change println to log</notextile>
[https://issues.scala-lang.org/browse/SI-6925](SI-6925) | [https://github.com/scala/scala/commit/b1cea21](b1cea21) | <notextile>SI-6925 use concrete type in applyOrElse's match's selector</notextile>
[https://issues.scala-lang.org/browse/SI-5189](SI-5189) | [https://github.com/scala/scala/commit/8fb19b1](8fb19b1) | <notextile>SI-5189 detect unsoundness when inferring type of match</notextile>
[https://issues.scala-lang.org/browse/SI-6555](SI-6555) | [https://github.com/scala/scala/commit/38404e8](38404e8) | <notextile>SI-6555 Scaladoc's class filter shouldn't drop the last character</notextile>
[https://issues.scala-lang.org/browse/SI-6930](SI-6930) | [https://github.com/scala/scala/commit/0f237e9](0f237e9) | <notextile>SI-6930 adds documentation to reduceLeft in TraversableOnce</notextile>
[https://issues.scala-lang.org/browse/SI-6905](SI-6905) | [https://github.com/scala/scala/commit/57ae1f3](57ae1f3) | <notextile>SI-6905 - Switch to sneakyThrows instead of Unsafe.throwException as per new jsr166y to avoid issues with Android</notextile>
[https://issues.scala-lang.org/browse/SI-6126](SI-6126) | [https://github.com/scala/scala/commit/25c7364](25c7364) | <notextile>SI-6126 Test case for varargs of tagged primitives.</notextile>
[https://issues.scala-lang.org/browse/SI-6946](SI-6946), [https://issues.scala-lang.org/browse/SI-6924](SI-6924) | [https://github.com/scala/scala/commit/79a722f](79a722f) | <notextile>SI-6946, SI-6924 Greatly improves IsTraversableLike docs</notextile>
[https://issues.scala-lang.org/browse/SI-5954](SI-5954) | [https://github.com/scala/scala/commit/3ef487e](3ef487e) | <notextile>SI-5954 Implementation restriction preventing companions in package objs</notextile>
[https://issues.scala-lang.org/browse/SI-6521](SI-6521) | [https://github.com/scala/scala/commit/a557a97](a557a97) | <notextile>Fixes SI-6521, overrides Range#head to be faster</notextile>
[https://issues.scala-lang.org/browse/SI-5553](SI-5553), [https://issues.scala-lang.org/browse/SI-6912](SI-6912) | [https://github.com/scala/scala/commit/7a23562](7a23562) | <notextile>SI-6912 Avoid a typer cycle in overload resolution.</notextile>
[https://issues.scala-lang.org/browse/SI-6846](SI-6846), [https://issues.scala-lang.org/browse/SI-6846](SI-6846) | [https://github.com/scala/scala/commit/e5da30b](e5da30b) | <notextile>Backport of SI-6846.</notextile>
[https://issues.scala-lang.org/browse/SI-6928](SI-6928) | [https://github.com/scala/scala/commit/c58647f](c58647f) | <notextile>SI-6928, VerifyError with self reference to super.</notextile>
[https://issues.scala-lang.org/browse/SI-6641](SI-6641) | [https://github.com/scala/scala/commit/557caa3](557caa3) | <notextile>SI-6641 Deprecate SwingWorker</notextile>
[https://issues.scala-lang.org/browse/SI-6803](SI-6803) | [https://github.com/scala/scala/commit/103a478](103a478) | <notextile>SI-6803: do not use java.net.URI, even more so incorrectly.</notextile>
[https://issues.scala-lang.org/browse/SI-6894](SI-6894) | [https://github.com/scala/scala/commit/3bb8745](3bb8745) | <notextile>Fixes and features for javap (fixing SI-6894)</notextile>
[https://issues.scala-lang.org/browse/SI-6955](SI-6955) | [https://github.com/scala/scala/commit/38958f4](38958f4) | <notextile>SI-6955 switch emission no longer foiled by type alias</notextile>
[https://issues.scala-lang.org/browse/SI-6964](SI-6964) | [https://github.com/scala/scala/commit/b61a64d](b61a64d) | <notextile>SI-6964 Remove build managers, both simple and refined.</notextile>
[https://issues.scala-lang.org/browse/SI-6375](SI-6375) | [https://github.com/scala/scala/commit/61f70e4](61f70e4) | <notextile>SI-6375, warn on lost annotation.</notextile>
[https://issues.scala-lang.org/browse/SI-5189](SI-5189) | [https://github.com/scala/scala/commit/bd4bffa](bd4bffa) | <notextile>SI-5189 detect unsoundness when inferring type of match</notextile>
[https://issues.scala-lang.org/browse/SI-6966](SI-6966) | [https://github.com/scala/scala/commit/58bfa19](58bfa19) | <notextile>SI-6966 Fix regression in implicit resolution</notextile>
[https://issues.scala-lang.org/browse/SI-5923](SI-5923) | [https://github.com/scala/scala/commit/fe60284](fe60284) | <notextile>SI-5923 adapt macros when they are deferred</notextile>
[https://issues.scala-lang.org/browse/SI-5903](SI-5903) | [https://github.com/scala/scala/commit/66acf36](66acf36) | <notextile>SI-5903 extractor macros do work</notextile>
[https://issues.scala-lang.org/browse/SI-6440](SI-6440), [https://issues.scala-lang.org/browse/SI-6641](SI-6641) | [https://github.com/scala/scala/commit/c45491c](c45491c) | <notextile>SI-6641 Cull scala.swing.SwingWorker</notextile>
[https://issues.scala-lang.org/browse/SI-5378](SI-5378) | [https://github.com/scala/scala/commit/31f073c](31f073c) | <notextile>SI-5378, unsoundness with type bounds in refinements.</notextile>
[https://issues.scala-lang.org/browse/SI-6566](SI-6566) | [https://github.com/scala/scala/commit/a419799](a419799) | <notextile>SI-6566, unsoundness with alias variance.</notextile>
[https://issues.scala-lang.org/browse/SI-6894](SI-6894) | [https://github.com/scala/scala/commit/942f078](942f078) | <notextile>Repl javap decodes various synthetic names for us (fixing SI-6894)</notextile>
[https://issues.scala-lang.org/browse/SI-6915](SI-6915) | [https://github.com/scala/scala/commit/77c8751](77c8751) | <notextile>SI-6915 Updates copyright properties to 2002-2013</notextile>
[https://issues.scala-lang.org/browse/SI-6897](SI-6897) | [https://github.com/scala/scala/commit/3405294](3405294) | <notextile>SI-6897, lubs and varargs star.</notextile>
[https://issues.scala-lang.org/browse/SI-6896](SI-6896) | [https://github.com/scala/scala/commit/a6ce037](a6ce037) | <notextile>SI-6896, spurious warning with overloaded main.</notextile>
[https://issues.scala-lang.org/browse/SI-6911](SI-6911) | [https://github.com/scala/scala/commit/eeb6ee6](eeb6ee6) | <notextile>SI-6911, regression in generated case class equality.</notextile>
[https://issues.scala-lang.org/browse/SI-6827](SI-6827) | [https://github.com/scala/scala/commit/92cf0e3](92cf0e3) | <notextile>Fix Iterator#copyToArray (fixes SI-6827).</notextile>
[https://issues.scala-lang.org/browse/SI-5017](SI-5017) | [https://github.com/scala/scala/commit/02b2da6](02b2da6) | <notextile>SI-5017 Poor performance of :+ operator on Arrays</notextile>
[https://issues.scala-lang.org/browse/SI-6194](SI-6194) | [https://github.com/scala/scala/commit/ac61e34](ac61e34) | <notextile>SI-6194, repl crash.</notextile>
[https://issues.scala-lang.org/browse/SI-6746](SI-6746) | [https://github.com/scala/scala/commit/e5f16ac](e5f16ac) | <notextile>SI-6746 Fixes MANIFEST.MF package entry (s.r.makro -&gt; s.r.macros)</notextile>
[https://issues.scala-lang.org/browse/SI-6415](SI-6415) | [https://github.com/scala/scala/commit/24a033b](24a033b) | <notextile>SI-6415, overly eager evaluation in Stream.</notextile>
[https://issues.scala-lang.org/browse/SI-6829](SI-6829), [https://issues.scala-lang.org/browse/SI-6788](SI-6788) | [https://github.com/scala/scala/commit/231d59d](231d59d) | <notextile>SI-6829, SI-6788, NPEs during erroneous compilation.</notextile>
[https://issues.scala-lang.org/browse/SI-6338](SI-6338) | [https://github.com/scala/scala/commit/3a6f3ae](3a6f3ae) | <notextile>SI-6338 fixes the unchecked warning in quick.comp</notextile>




#### Complete commit list!

sha | Title
---: | ---
[https://github.com/scala/scala/commit/4ab66d1](4ab66d1) | <notextile>SI-7494 Tests for status quo</notextile>
[https://github.com/scala/scala/commit/e0bd62c](e0bd62c) | <notextile>SI-7494 Each plugin must only be instantiated once.</notextile>
[https://github.com/scala/scala/commit/b6757e1](b6757e1) | <notextile>An attempt to make tests deterministic.</notextile>
[https://github.com/scala/scala/commit/3fb3175](3fb3175) | <notextile>SI-7427 stop crashing under -Ydebug.</notextile>
[https://github.com/scala/scala/commit/08c7293](08c7293) | <notextile>SI-7201 scaladoc url in scala-(library,actors,swing,reflect) pom</notextile>
[https://github.com/scala/scala/commit/12a130d](12a130d) | <notextile>SI-6424 Scaladoc: Use mapNodes.get(_) to avoid NoSuchElementException</notextile>
[https://github.com/scala/scala/commit/f628565](f628565) | <notextile>Prevent slash duplication.</notextile>
[https://github.com/scala/scala/commit/7f9feba](7f9feba) | <notextile>[backport #1727] SI-7359 cyclic nested java class</notextile>
[https://github.com/scala/scala/commit/dd33e28](dd33e28) | <notextile>SI-7486 regression in implicit resolution.</notextile>
[https://github.com/scala/scala/commit/6114038](6114038) | <notextile>[nomaster] unbreaks test.bc</notextile>
[https://github.com/scala/scala/commit/b11324a](b11324a) | <notextile>SI-7492 Remove -Ystruct-dispatch and associated code</notextile>
[https://github.com/scala/scala/commit/b4751a6](b4751a6) | <notextile>No bounds-driven inference for the named.</notextile>
[https://github.com/scala/scala/commit/e28c3ed](e28c3ed) | <notextile>SI-1786 incorporate defined bounds in inference</notextile>
[https://github.com/scala/scala/commit/0bece25](0bece25) | <notextile>ScriptEngine.eval() forwards Error instead of new ScriptException</notextile>
[https://github.com/scala/scala/commit/44a46f8](44a46f8) | <notextile>Deprecate parameter names in scala.concurrent</notextile>
[https://github.com/scala/scala/commit/9db9df7](9db9df7) | <notextile>SI-7484 Indentation and whitespace fixes</notextile>
[https://github.com/scala/scala/commit/cba29e6](cba29e6) | <notextile>SI-7484 Add @SupressWarning(rawtypes/unchecked)</notextile>
[https://github.com/scala/scala/commit/538aa22](538aa22) | <notextile>SI-6488 Interrupt i/o threads on process destroy</notextile>
[https://github.com/scala/scala/commit/5e71539](5e71539) | <notextile>SI-7464 allows FieldMirror.set to update vals</notextile>
[https://github.com/scala/scala/commit/bc10715](bc10715) | <notextile>easy way of writing not implemented macros</notextile>
[https://github.com/scala/scala/commit/b08c135](b08c135) | <notextile>Fix for unreachable code warning.</notextile>
[https://github.com/scala/scala/commit/e9c3f87](e9c3f87) | <notextile>SI-5886 Remove check for packed type conformance.</notextile>
[https://github.com/scala/scala/commit/963c4a7](963c4a7) | <notextile>Actual SI-6555 fix, Scaladoc filter works WITH keyboard shortcuts too</notextile>
[https://github.com/scala/scala/commit/b32d294](b32d294) | <notextile>SI-7383 - Call ExecutionContext.prepare in Future.apply to allow for capturing local context like ThreadLocals and then re-establishing them prior to execution, as per intention of EC.prepare</notextile>
[https://github.com/scala/scala/commit/77437ff](77437ff) | <notextile>SI-7442 Update bundled Fork/Join pool (JSR166y)</notextile>
[https://github.com/scala/scala/commit/4e64a27](4e64a27) | <notextile>[nomaster] removes duplication in inferImplicitValue</notextile>
[https://github.com/scala/scala/commit/3edde27](3edde27) | <notextile>[nomaster] SI-7166 catches DivergentImplicit in c.inferImplicitXXX</notextile>
[https://github.com/scala/scala/commit/b4da864](b4da864) | <notextile>[nomaster] SI-7047 fixes silent for c.inferImplicitXXX</notextile>
[https://github.com/scala/scala/commit/fdead2b](fdead2b) | <notextile>[nomaster] SI-7291: No exception throwing for diverging implicit expansion</notextile>
[https://github.com/scala/scala/commit/8168f11](8168f11) | <notextile>[nomaster] SI-7167 implicit macros decide what is divergence</notextile>
[https://github.com/scala/scala/commit/bb73b96](bb73b96) | <notextile>[nomaster] macroExpandAll is now triggered in all invocations of typed</notextile>
[https://github.com/scala/scala/commit/90ac5c4](90ac5c4) | <notextile>[nomaster] SI-5923 instantiates targs in deferred macro applications</notextile>
[https://github.com/scala/scala/commit/0c6927b](0c6927b) | <notextile>[nomaster] temporarily breaks SI-5353</notextile>
[https://github.com/scala/scala/commit/7562499](7562499) | <notextile>Scaladoc: fixing small typo in PartialFunction.scala</notextile>
[https://github.com/scala/scala/commit/5751ddd](5751ddd) | <notextile>pull request feedback</notextile>
[https://github.com/scala/scala/commit/75a3b88](75a3b88) | <notextile>replaces inferBootClasspath with a simple lookup at sun.boot.class.path</notextile>
[https://github.com/scala/scala/commit/35c0145](35c0145) | <notextile>removes the traces of always on debug diagnostics</notextile>
[https://github.com/scala/scala/commit/a3d03ab](a3d03ab) | <notextile>fixes a crash in ReflectionUtils.systemProperties</notextile>
[https://github.com/scala/scala/commit/f1040ea](f1040ea) | <notextile>fixes a checkfile breakage in 2.10.x</notextile>
[https://github.com/scala/scala/commit/8325729](8325729) | <notextile>SI-5734 Allow setting of socket timeout for remote actors</notextile>
[https://github.com/scala/scala/commit/b2c67b3](b2c67b3) | <notextile>SI-7398 Add support for java8 default methods</notextile>
[https://github.com/scala/scala/commit/fbb1363](fbb1363) | <notextile>Refactor DirectTest so java can be tested.</notextile>
[https://github.com/scala/scala/commit/25f49cb](25f49cb) | <notextile>literal() now assigns a position to the tree it produces</notextile>
[https://github.com/scala/scala/commit/cb1a427](cb1a427) | <notextile>SI-7325 cleans up corner cases of percent handling in StringContext.f</notextile>
[https://github.com/scala/scala/commit/a8edefc](a8edefc) | <notextile>SI-7271 fixes positions of string interpolation parts</notextile>
[https://github.com/scala/scala/commit/df3cae7](df3cae7) | <notextile>SI-7426 Crash in pickler.</notextile>
[https://github.com/scala/scala/commit/3abdaf4](3abdaf4) | <notextile>SI-5634 eliminate overly verbose error message</notextile>
[https://github.com/scala/scala/commit/e86832d](e86832d) | <notextile>SI-7441 Don't ramble on about inapplicable implicits.</notextile>
[https://github.com/scala/scala/commit/d0a1f5b](d0a1f5b) | <notextile>SI-7385 crash in erroneous code</notextile>
[https://github.com/scala/scala/commit/62cdd7f](62cdd7f) | <notextile>SI-6091 overeager warning for reference equality</notextile>
[https://github.com/scala/scala/commit/3009916](3009916) | <notextile>SI-6771 Alias awareness for checkableType in match analysis.</notextile>
[https://github.com/scala/scala/commit/e85df24](e85df24) | <notextile>Read-eval-print : the script engine does not need print so make it lazy</notextile>
[https://github.com/scala/scala/commit/1d1492f](1d1492f) | <notextile>Add :kind command to REPL</notextile>
[https://github.com/scala/scala/commit/37707cd](37707cd) | <notextile>Unprivatize methods in SyncVar.</notextile>
[https://github.com/scala/scala/commit/e36bb0b](e36bb0b) | <notextile>Revert &quot;SI-7469 Remove @deprecated MurmurHash elements&quot;</notextile>
[https://github.com/scala/scala/commit/37884ec](37884ec) | <notextile>SI-7482 Don't cook raw types after erasure.</notextile>
[https://github.com/scala/scala/commit/add19e6](add19e6) | <notextile>No longer cache all subclass templates.</notextile>
[https://github.com/scala/scala/commit/005a08d](005a08d) | <notextile>Remove self types check suppression usage from scaladoc.</notextile>
[https://github.com/scala/scala/commit/c88f733](c88f733) | <notextile>Improve code style in the Scaladoc implementation.</notextile>
[https://github.com/scala/scala/commit/9a43611](9a43611) | <notextile>remove unused methods: checkStable, isStableExceptVolatile</notextile>
[https://github.com/scala/scala/commit/fada1ef](fada1ef) | <notextile>SI-6815 untangle isStable and hasVolatileType</notextile>
[https://github.com/scala/scala/commit/97d5179](97d5179) | <notextile>make treeInfo more globally visible</notextile>
[https://github.com/scala/scala/commit/135cfa8](135cfa8) | <notextile>SI-6406 Restore deprecated API</notextile>
[https://github.com/scala/scala/commit/0c7c521](0c7c521) | <notextile>SI-3943 Test case for already-fixed Java interop bug</notextile>
[https://github.com/scala/scala/commit/ae43506](ae43506) | <notextile>SI-7469 Remove @deprecated scala.util.logging</notextile>
[https://github.com/scala/scala/commit/4478560](4478560) | <notextile>SI-7476 Add documentation to GenericTraversableTemplate</notextile>
[https://github.com/scala/scala/commit/80f1fa5](80f1fa5) | <notextile>Fix formatting for couple of docs in the compiler</notextile>
[https://github.com/scala/scala/commit/ac990c1](ac990c1) | <notextile>SI-7469 Make @deprecated elems in scala.concurrent private[scala]</notextile>
[https://github.com/scala/scala/commit/e544786](e544786) | <notextile>SI-7469 Remove deprecated elements in s.u.parsing.combinator</notextile>
[https://github.com/scala/scala/commit/7e9c21f](7e9c21f) | <notextile>SI-7469 Remove @deprecated MurmurHash elements</notextile>
[https://github.com/scala/scala/commit/966f51c](966f51c) | <notextile>removes duplication in inferImplicitValue</notextile>
[https://github.com/scala/scala/commit/b153880](b153880) | <notextile>SI-7047 fixes silent for c.inferImplicitXXX</notextile>
[https://github.com/scala/scala/commit/c539ae2](c539ae2) | <notextile>SI-7167 implicit macros decide what is divergence</notextile>
[https://github.com/scala/scala/commit/a35b6bc](a35b6bc) | <notextile>macroExpandAll is now triggered in all invocations of typed</notextile>
[https://github.com/scala/scala/commit/adef4b5](adef4b5) | <notextile>SI-5923 instantiates targs in deferred macro applications</notextile>
[https://github.com/scala/scala/commit/b0758f5](b0758f5) | <notextile>SI-6039 Harden against irrelevant filesystem details</notextile>
[https://github.com/scala/scala/commit/6486f9f](6486f9f) | <notextile>fix typo in comment</notextile>
[https://github.com/scala/scala/commit/abc314a](abc314a) | <notextile>AbstractFile.getDirectory does not return null when outDir is &quot;.&quot;</notextile>
[https://github.com/scala/scala/commit/0ee9204](0ee9204) | <notextile>SI-7469 Remove @deprecated scala.util.parsing.ast</notextile>
[https://github.com/scala/scala/commit/15df9e9](15df9e9) | <notextile>Limit unnecessary calls to Type#toString.</notextile>
[https://github.com/scala/scala/commit/6890f38](6890f38) | <notextile>SI-7432 add testcases</notextile>
[https://github.com/scala/scala/commit/357c2df](357c2df) | <notextile>SI-7432 Range.min should throw NoSuchElementException on empty range</notextile>
[https://github.com/scala/scala/commit/9e25797](9e25797) | <notextile>Par-Test includes log in transcript of failed exec</notextile>
[https://github.com/scala/scala/commit/89ced24](89ced24) | <notextile>Boil out some duplicated parser logic.</notextile>
[https://github.com/scala/scala/commit/c1286ab](c1286ab) | <notextile>Flesh out copyMemberDef methods with copyModuleDef.</notextile>
[https://github.com/scala/scala/commit/fb5eb8d](fb5eb8d) | <notextile>indentation typo</notextile>
[https://github.com/scala/scala/commit/265fc6b](265fc6b) | <notextile>SI-6863 root cause fixed using factory of scala.runtime.*Ref</notextile>
[https://github.com/scala/scala/commit/c31e44f](c31e44f) | <notextile>Partest can --show-diff again after incremental report.</notextile>
[https://github.com/scala/scala/commit/a86c7a1](a86c7a1) | <notextile>Hardening against nulls for deserialization.</notextile>
[https://github.com/scala/scala/commit/80ac7d0](80ac7d0) | <notextile>Absolutized paths involving the scala package.</notextile>
[https://github.com/scala/scala/commit/1ce4ecd](1ce4ecd) | <notextile>Rewrite TailCalls for performance and immutability.</notextile>
[https://github.com/scala/scala/commit/83c059d](83c059d) | <notextile>use relative symlink in distpack</notextile>
[https://github.com/scala/scala/commit/17f8101](17f8101) | <notextile>SI-6532 emit debug info in compiled java.</notextile>
[https://github.com/scala/scala/commit/d3aa9a7](d3aa9a7) | <notextile>Warn on selection of vals from DelayedInit subclasses.</notextile>
[https://github.com/scala/scala/commit/6271396](6271396) | <notextile>SI-7369 Avoid spurious unreachable warnings in patterns</notextile>
[https://github.com/scala/scala/commit/184cac8](184cac8) | <notextile>SI-7367 scaladoc crash on constructing the model for annotations.</notextile>
[https://github.com/scala/scala/commit/b40749f](b40749f) | <notextile>Corrects link in README.rst</notextile>
[https://github.com/scala/scala/commit/19a61e5](19a61e5) | <notextile>Update links to old website, in preparation for launch.</notextile>
[https://github.com/scala/scala/commit/8448beb](8448beb) | <notextile>SI-6943 warn on value class miscomparison.</notextile>
[https://github.com/scala/scala/commit/c1327dc](c1327dc) | <notextile>SI-6675 Avoid spurious warning about pattern bind arity.</notextile>
[https://github.com/scala/scala/commit/0d2c7e9](0d2c7e9) | <notextile>SI-7355 Handle spaces in paths in Windows batch files.</notextile>
[https://github.com/scala/scala/commit/9d98b6d](9d98b6d) | <notextile>Interactive scaladoc: mark new typer run when done.</notextile>
[https://github.com/scala/scala/commit/e7aadd0](e7aadd0) | <notextile>SI-7330 better error when pattern isn't a value</notextile>
[https://github.com/scala/scala/commit/8556ca0](8556ca0) | <notextile>Quiet down overloaded implicit warning.</notextile>
[https://github.com/scala/scala/commit/8703e00](8703e00) | <notextile>SI-7200 Test case for fixed type inference error.</notextile>
[https://github.com/scala/scala/commit/12dd8c0](12dd8c0) | <notextile>More useful checkfile output in interactive tests.</notextile>
[https://github.com/scala/scala/commit/e6af9bc](e6af9bc) | <notextile>SI-7362, crash in presentation compiler.</notextile>
[https://github.com/scala/scala/commit/6227837](6227837) | <notextile>SI-7409 Par-Test: A crash is not a DNC for neg tests</notextile>
[https://github.com/scala/scala/commit/0c6bcc9](0c6bcc9) | <notextile>Partest has an optionable wait period.</notextile>
[https://github.com/scala/scala/commit/bf44669](bf44669) | <notextile>SI-7349 Partest supports test-interface</notextile>
[https://github.com/scala/scala/commit/b47ca5b](b47ca5b) | <notextile>Update ScalaCheck to 1.10.1.</notextile>
[https://github.com/scala/scala/commit/b4d54be](b4d54be) | <notextile>Partest testnum field width is sensitive to total tests</notextile>
[https://github.com/scala/scala/commit/e4f62c0](e4f62c0) | <notextile>SI-7358 Partest fails on scalacheck failure</notextile>
[https://github.com/scala/scala/commit/c905b95](c905b95) | <notextile>no need to manually clear perRunCaches in GenASM</notextile>
[https://github.com/scala/scala/commit/176a1ba](176a1ba) | <notextile>maps in GenASM guaranteed mem-leak-free by perRunCaches</notextile>
[https://github.com/scala/scala/commit/d516f38](d516f38) | <notextile>SI-7422 GenASM populates and clears its maps within a Run</notextile>
[https://github.com/scala/scala/commit/7158142](7158142) | <notextile>SI-7291: Remove error kinds.</notextile>
[https://github.com/scala/scala/commit/accaa31](accaa31) | <notextile>SI-7291: No exception throwing for diverging implicit expansion</notextile>
[https://github.com/scala/scala/commit/1931f45](1931f45) | <notextile>BytecodeWriters.BytecodeWriter doesn't need to fiddle with Symbol</notextile>
[https://github.com/scala/scala/commit/38f426d](38f426d) | <notextile>compiler flag -Ygen-asmp to emit .asmp textual files for bytecode</notextile>
[https://github.com/scala/scala/commit/d419227](d419227) | <notextile>Route -explaintypes through reporter.</notextile>
[https://github.com/scala/scala/commit/f59be7a](f59be7a) | <notextile>SI-7429 Fix checkinit build failure in Contexts</notextile>
[https://github.com/scala/scala/commit/5a8329a](5a8329a) | <notextile>Address a deprecation warnings in scala-swing.</notextile>
[https://github.com/scala/scala/commit/2e5c7b9](2e5c7b9) | <notextile>SI-6784 Localize feature imports in scala.swing.</notextile>
[https://github.com/scala/scala/commit/71eaf6d](71eaf6d) | <notextile>Updated jline and rebuilt.</notextile>
[https://github.com/scala/scala/commit/c4d0fd9](c4d0fd9) | <notextile>-Yshow-member-pos, print the positions of members.</notextile>
[https://github.com/scala/scala/commit/a61c9c4](a61c9c4) | <notextile>Documented lateMETHOD flag.</notextile>
[https://github.com/scala/scala/commit/8c77915](8c77915) | <notextile>Call method rather than duplicating method.</notextile>
[https://github.com/scala/scala/commit/e9011f5](e9011f5) | <notextile>deprecation cycle for definitions.NPEConstructor</notextile>
[https://github.com/scala/scala/commit/fc8387f](fc8387f) | <notextile>improved naming of variables in constructors phase</notextile>
[https://github.com/scala/scala/commit/b4fbb7b](b4fbb7b) | <notextile>translation for DelayedInit keeps more code in original class</notextile>
[https://github.com/scala/scala/commit/7211432](7211432) | <notextile>avoids multiple evals of isSubClass DelayedInitClass</notextile>
[https://github.com/scala/scala/commit/8dc0c3d](8dc0c3d) | <notextile>for null outer pointer, NPE via throw null</notextile>
[https://github.com/scala/scala/commit/4ca6eb8](4ca6eb8) | <notextile>Created utility function for dropping by-name-ness.</notextile>
[https://github.com/scala/scala/commit/2dc28a2](2dc28a2) | <notextile>role played by magic constant in ScalaSigBytes</notextile>
[https://github.com/scala/scala/commit/0b6a592](0b6a592) | <notextile>another GenJVM remnant that goes away</notextile>
[https://github.com/scala/scala/commit/af0184d](af0184d) | <notextile>removing remnants from the GenJVM era</notextile>
[https://github.com/scala/scala/commit/449da43](449da43) | <notextile>static methods may have local variables too, some day</notextile>
[https://github.com/scala/scala/commit/8f08151](8f08151) | <notextile>SI-7421 remove unneeded extra-attachement in maven deploy</notextile>
[https://github.com/scala/scala/commit/bdae05f](bdae05f) | <notextile>SI-7403 Stream extends Serializable</notextile>
[https://github.com/scala/scala/commit/7b4e450](7b4e450) | <notextile>SI-4365 nondeterministic failure in asSeenFrom</notextile>
[https://github.com/scala/scala/commit/b50e6b4](b50e6b4) | <notextile>check added instruction to ASM MethodNode</notextile>
[https://github.com/scala/scala/commit/35209fc](35209fc) | <notextile>Minor overhaul of lub-producing typer methods.</notextile>
[https://github.com/scala/scala/commit/9a3bd6c](9a3bd6c) | <notextile>Simplify some checks in Refchecks.</notextile>
[https://github.com/scala/scala/commit/cf93e02](cf93e02) | <notextile>Added ensureFullyDefined.</notextile>
[https://github.com/scala/scala/commit/fe8280c](fe8280c) | <notextile>Added orElse to Type.</notextile>
[https://github.com/scala/scala/commit/648784c](648784c) | <notextile>SI-7345 Address review comments.</notextile>
[https://github.com/scala/scala/commit/c598e76](c598e76) | <notextile>SI-7345 Improved Context.toString</notextile>
[https://github.com/scala/scala/commit/85af192](85af192) | <notextile>SI-7345 Eliminate the `depth` var.</notextile>
[https://github.com/scala/scala/commit/2304a78](2304a78) | <notextile>SI-7345 Drive by refactoring of pattern matching for `arg: _*`.</notextile>
[https://github.com/scala/scala/commit/e112db6](e112db6) | <notextile>SI-7345 Factor out method to clear and restore undetparams.</notextile>
[https://github.com/scala/scala/commit/0ce81c8](0ce81c8) | <notextile>SI-7345 Remove unneeded warning.</notextile>
[https://github.com/scala/scala/commit/ec33ad0](ec33ad0) | <notextile>SI-7345 Doc and TODO comments around Context.</notextile>
[https://github.com/scala/scala/commit/dbd8457](dbd8457) | <notextile>SI-7345 Produce Context#imports from the context chain</notextile>
[https://github.com/scala/scala/commit/78e7eba](78e7eba) | <notextile>SI-7345 Refactor manual iteration to use foreach.</notextile>
[https://github.com/scala/scala/commit/7ce4de4](7ce4de4) | <notextile>SI-7345 Move `inSilentMode` from Infer to Context.</notextile>
[https://github.com/scala/scala/commit/bba9d3d](bba9d3d) | <notextile>SI-7345 remove unused methods.</notextile>
[https://github.com/scala/scala/commit/510ebec](510ebec) | <notextile>SI-7345 Prefer using a throwaway silent context over buffer flushing.</notextile>
[https://github.com/scala/scala/commit/ec5eaee](ec5eaee) | <notextile>SI-7345 More refactoring and documentation in Contexts</notextile>
[https://github.com/scala/scala/commit/190aea9](190aea9) | <notextile>SI-7345 Exploit named/default args   - Collapse overloads of `rootContext`   - make `atOwner` more concise</notextile>
[https://github.com/scala/scala/commit/c9f5ab0](c9f5ab0) | <notextile>SI-7345 Encapsulate warning and error buffers in ReportBuffer.</notextile>
[https://github.com/scala/scala/commit/ff5dde1](ff5dde1) | <notextile>SI-7345 Add Context#isLocal, akin to Symbol#isLocal</notextile>
[https://github.com/scala/scala/commit/b1cb004](b1cb004) | <notextile>SI-7345 Use combinator to find next enclosing non-template.</notextile>
[https://github.com/scala/scala/commit/281b850](281b850) | <notextile>SI-7345 Remove comment that appears obsolete.</notextile>
[https://github.com/scala/scala/commit/f2c351c](f2c351c) | <notextile>SI-7345 Rationalize overloads of Context#make</notextile>
[https://github.com/scala/scala/commit/e658b63](e658b63) | <notextile>SI-7345 Represent the boolean modes in Context in ContextMode.</notextile>
[https://github.com/scala/scala/commit/372965b](372965b) | <notextile>SI-7402 List extends Serializable</notextile>
[https://github.com/scala/scala/commit/4c715eb](4c715eb) | <notextile>Par-Test allows redefinition of srcDir by Ant</notextile>
[https://github.com/scala/scala/commit/d49d36f](d49d36f) | <notextile>Disabled failing bitset test.</notextile>
[https://github.com/scala/scala/commit/cdffcf8](cdffcf8) | <notextile>Eliminated the accumulated feature warnings.</notextile>
[https://github.com/scala/scala/commit/1da48a4](1da48a4) | <notextile>Eliminate a pile of -Xlint warnings.</notextile>
[https://github.com/scala/scala/commit/0f1a004](0f1a004) | <notextile>Taught -Xlint about @implicitNotFound.</notextile>
[https://github.com/scala/scala/commit/d02ccc3](d02ccc3) | <notextile>Fix unchecked warning.</notextile>
[https://github.com/scala/scala/commit/6f47caf](6f47caf) | <notextile>SI-6898 Document AnyVal box and unbox implemention by BoxesRunTime</notextile>
[https://github.com/scala/scala/commit/240fa30](240fa30) | <notextile>Reverting changes to AnyVals generated classes in 9a82fc0</notextile>
[https://github.com/scala/scala/commit/c29405d](c29405d) | <notextile>Simplify type bounds.</notextile>
[https://github.com/scala/scala/commit/5c6d62a](5c6d62a) | <notextile>SI-7408 Fix test by sorting results of getDeclaredClasses</notextile>
[https://github.com/scala/scala/commit/12a18ee](12a18ee) | <notextile>SI-7376 Bad doc variable error is positioned at the variable.</notextile>
[https://github.com/scala/scala/commit/fecc7e0](fecc7e0) | <notextile>SI-7376 Additional trivial Scaladoc format corrections</notextile>
[https://github.com/scala/scala/commit/3f0a90b](3f0a90b) | <notextile>SI-7376 Unmoored doc has correct position</notextile>
[https://github.com/scala/scala/commit/0fde95e](0fde95e) | <notextile>SI-7376 Scaladoc warns when discarding local doc comments with API tags</notextile>
[https://github.com/scala/scala/commit/e8c85a3](e8c85a3) | <notextile>SI-7080 improve boundary value checking for BitSet</notextile>
[https://github.com/scala/scala/commit/47b626e](47b626e) | <notextile>Change unrecognized scaladoc comments to C-style</notextile>
[https://github.com/scala/scala/commit/5cc2eb8](5cc2eb8) | <notextile>SI-7324 jvm not cool with 255+ parameters</notextile>
[https://github.com/scala/scala/commit/c58b0ab](c58b0ab) | <notextile>Fixed BigDecimal documentation for primitive conversion methods.</notextile>
[https://github.com/scala/scala/commit/f93c4c9](f93c4c9) | <notextile>SI-7337 Error out on missing -d directory.</notextile>
[https://github.com/scala/scala/commit/578ef1f](578ef1f) | <notextile>SI-7319 Remove unused method.</notextile>
[https://github.com/scala/scala/commit/962f88e](962f88e) | <notextile>SI-7377 Remove special treatment of `stableFun()` in patterns.</notextile>
[https://github.com/scala/scala/commit/351d5ec](351d5ec) | <notextile>Absolute path in error message.</notextile>
[https://github.com/scala/scala/commit/3e27fec](3e27fec) | <notextile>SI-7388 Be more robust against cycles in error symbol creation.</notextile>
[https://github.com/scala/scala/commit/15e9ef8](15e9ef8) | <notextile>SI-7377 Fix retypechecking of patterns on case companion alias</notextile>
[https://github.com/scala/scala/commit/ef04619](ef04619) | <notextile>SI-7319 Clear error buffer during Typer reset.</notextile>
[https://github.com/scala/scala/commit/aa6723c](aa6723c) | <notextile>SI-7329 duplicate default getters for specialized parameters.</notextile>
[https://github.com/scala/scala/commit/e1af973](e1af973) | <notextile>Remove scaladoc deprecated option.</notextile>
[https://github.com/scala/scala/commit/01edd04](01edd04) | <notextile>SI-7314 Partest locates tools.jar and javac</notextile>
[https://github.com/scala/scala/commit/4e2459e](4e2459e) | <notextile>Reifier -&gt; AST Node test.</notextile>
[https://github.com/scala/scala/commit/660c8fd](660c8fd) | <notextile>SI-7315 Test @deprecatedInheritance / @specialized interplay</notextile>
[https://github.com/scala/scala/commit/54d11fe](54d11fe) | <notextile>SI-7312 @deprecatedInheritance now ignores same-file subclasses</notextile>
[https://github.com/scala/scala/commit/6690455](6690455) | <notextile>SI-7335 Remove special case for import of Predef._ in Predef.scala</notextile>
[https://github.com/scala/scala/commit/b0fceeb](b0fceeb) | <notextile>SI-7335 Sharpen up comment about implicit prioritization.</notextile>
[https://github.com/scala/scala/commit/ae69de4](ae69de4) | <notextile>SI-7335 Add logging for a now-impossible* case in Symbol#exists.</notextile>
[https://github.com/scala/scala/commit/9d7f811](9d7f811) | <notextile>SI-7335 Don't import Predef._ in Predef.scala</notextile>
[https://github.com/scala/scala/commit/d43f5ce](d43f5ce) | <notextile>SI-7335 Mandate that parents of Predef must be defined in Predef.scala</notextile>
[https://github.com/scala/scala/commit/67c2d6d](67c2d6d) | <notextile>SI-6286 IllegalArgumentException handling specialized method.</notextile>
[https://github.com/scala/scala/commit/23dd325](23dd325) | <notextile>SI-7360 Don't let a follow-up TypeError obscure the original error.</notextile>
[https://github.com/scala/scala/commit/2885eb0](2885eb0) | <notextile>Revert &quot;SI-6387 Clones accessor before name expansion&quot;</notextile>
[https://github.com/scala/scala/commit/7250312](7250312) | <notextile>SI-6386 typed existential type tree's original now have tpe set</notextile>
[https://github.com/scala/scala/commit/6a61e17](6a61e17) | <notextile>SI-7289 Less strict type application for TypeVar.</notextile>
[https://github.com/scala/scala/commit/34a6fa9](34a6fa9) | <notextile>SI-6937 core type tags are no longer referentially unique</notextile>
[https://github.com/scala/scala/commit/7072acb](7072acb) | <notextile>Optimization: avoid call to exists in PlainFile#iterator</notextile>
[https://github.com/scala/scala/commit/246eceb](246eceb) | <notextile>Optimization: avoid isDirectory call in DirectoryClassPath traversal</notextile>
[https://github.com/scala/scala/commit/0cb6324](0cb6324) | <notextile>Add counters to File#{exists, isFile, isDirectory}.</notextile>
[https://github.com/scala/scala/commit/f986d6d](f986d6d) | <notextile>Reduce visibility of implicit class tags.</notextile>
[https://github.com/scala/scala/commit/dc3fa0a](dc3fa0a) | <notextile>if starr.use.released fetch Scala ${starr.version} for STARR</notextile>
[https://github.com/scala/scala/commit/3fe2e86](3fe2e86) | <notextile>assume build.release when maven.version.suffix is set</notextile>
[https://github.com/scala/scala/commit/7184bd3](7184bd3) | <notextile>make quick.done depend on quick.bin again</notextile>
[https://github.com/scala/scala/commit/0affa94](0affa94) | <notextile>SI-7321 Memory leak in specialize on multiple compiler runs.</notextile>
[https://github.com/scala/scala/commit/c2534bf](c2534bf) | <notextile>SI-6900 Fix tailrec for dependent method types</notextile>
[https://github.com/scala/scala/commit/d7545ec](d7545ec) | <notextile>Simplify interplay between Uncurry Info- and Tree-Transformers</notextile>
[https://github.com/scala/scala/commit/3ac185b](3ac185b) | <notextile>Refactor existential related code out of types.</notextile>
[https://github.com/scala/scala/commit/f7c9adc](f7c9adc) | <notextile>Add a cautionary comment to TreeSymSubstitutor.</notextile>
[https://github.com/scala/scala/commit/61308be](61308be) | <notextile>Take the N^2 out of the compiler's TreeSet.</notextile>
[https://github.com/scala/scala/commit/d21f90c](d21f90c) | <notextile>SI-7147 Diagnostic for unexplained assertion in presentation compiler.</notextile>
[https://github.com/scala/scala/commit/ca9c8ef](ca9c8ef) | <notextile>SI-6793 Don't use super param accessors if inaccessible.</notextile>
[https://github.com/scala/scala/commit/5f9bc05](5f9bc05) | <notextile>SI-6715 Shouldn't return &quot;&quot; from TermNames.originalName</notextile>
[https://github.com/scala/scala/commit/8e83703](8e83703) | <notextile>Backport #2289's TermNames.unexpandedName as TermNames.originalName</notextile>
[https://github.com/scala/scala/commit/da90207](da90207) | <notextile>Correct sorting example for Ordering in scaladoc</notextile>
[https://github.com/scala/scala/commit/684e874](684e874) | <notextile>Transcendent rewrite of isSameType.</notextile>
[https://github.com/scala/scala/commit/6bde11e](6bde11e) | <notextile>Centrally unify module class representations.</notextile>
[https://github.com/scala/scala/commit/ca2a09d](ca2a09d) | <notextile>Optimization/logic improvement in Scopes.</notextile>
[https://github.com/scala/scala/commit/497b0cb](497b0cb) | <notextile>Add float version of the double NaN tests</notextile>
[https://github.com/scala/scala/commit/dfdbfa7](dfdbfa7) | <notextile>SI-7300 single line comment in multi line comment</notextile>
[https://github.com/scala/scala/commit/0d95443](0d95443) | <notextile>SI-6289 Paulptest demonstrating javac errors</notextile>
[https://github.com/scala/scala/commit/c6ce617](c6ce617) | <notextile>SI-6289 Partest in technicolor and showing javac errors</notextile>
[https://github.com/scala/scala/commit/6591acb](6591acb) | <notextile>comments to address reviewer feedback</notextile>
[https://github.com/scala/scala/commit/92a1785](92a1785) | <notextile>formatting</notextile>
[https://github.com/scala/scala/commit/7c0e8f0](7c0e8f0) | <notextile>Preliminary support for zinc.</notextile>
[https://github.com/scala/scala/commit/ceeb40c](ceeb40c) | <notextile>Regularity for build.xml: 1 output dir / project</notextile>
[https://github.com/scala/scala/commit/5dca660](5dca660) | <notextile>get rid of args element in staged-scalac</notextile>
[https://github.com/scala/scala/commit/fa053a6](fa053a6) | <notextile>doc fix for Types.baseClasses to match spec definition of Linearization 5.1.2</notextile>
[https://github.com/scala/scala/commit/530f4a5](530f4a5) | <notextile>SI-7110 Warn about naked try without catch/finally</notextile>
[https://github.com/scala/scala/commit/da7e175](da7e175) | <notextile>Add () to side-effecting u1/u2/u4.</notextile>
[https://github.com/scala/scala/commit/f657c37](f657c37) | <notextile>Reduce duplication in JavaMirrors.</notextile>
[https://github.com/scala/scala/commit/8c78d4b](8c78d4b) | <notextile>Brought some structure to the classfileparser.</notextile>
[https://github.com/scala/scala/commit/71c14e4](71c14e4) | <notextile>Cleaning up error handling.</notextile>
[https://github.com/scala/scala/commit/13bb4e5](13bb4e5) | <notextile>Fleshing out comments on JavaAccFlags.</notextile>
[https://github.com/scala/scala/commit/15bc39a](15bc39a) | <notextile>Abstract over java.lang.reflect.{ Method, Constructor }.</notextile>
[https://github.com/scala/scala/commit/14aaa70](14aaa70) | <notextile>Value class to represent jvm flags.</notextile>
[https://github.com/scala/scala/commit/7168743](7168743) | <notextile>Added ensureAccessible to reflection library.</notextile>
[https://github.com/scala/scala/commit/29a9c64](29a9c64) | <notextile>SI-7237 Always choose ForkJoinTaskSupport</notextile>
[https://github.com/scala/scala/commit/22944e4](22944e4) | <notextile>SI-7261 Implicit conversion of BooleanSetting to Boolean and BooleanFlag</notextile>
[https://github.com/scala/scala/commit/e073975](e073975) | <notextile>SI-7261 Implicit conversion of BooleanSetting to Boolean and BooleanFlag</notextile>
[https://github.com/scala/scala/commit/edee27f](edee27f) | <notextile>SI-6168 Retain prefix when parsing types in JVM signatures</notextile>
[https://github.com/scala/scala/commit/0cc9496](0cc9496) | <notextile>Scaladoc: Load scripts at the bottom, and with a defer attribute</notextile>
[https://github.com/scala/scala/commit/024cdd4](024cdd4) | <notextile>Strip version suffix from diffutils.</notextile>
[https://github.com/scala/scala/commit/ba21f36](ba21f36) | <notextile>Use java-diff-utils for diffing in partest.</notextile>
[https://github.com/scala/scala/commit/3ec36bb](3ec36bb) | <notextile>Clean up pack targets. Better dependency tracking.</notextile>
[https://github.com/scala/scala/commit/dc5326c](dc5326c) | <notextile>ant clean only zaps the quick stage</notextile>
[https://github.com/scala/scala/commit/c2da1c5](c2da1c5) | <notextile>Run test.scaladoc before test.suite. Fail fast.</notextile>
[https://github.com/scala/scala/commit/c5511de](c5511de) | <notextile>Let continuations library sources determine docs.lib's actuality</notextile>
[https://github.com/scala/scala/commit/88b7a72](88b7a72) | <notextile>Preparation for faster PR validation</notextile>
[https://github.com/scala/scala/commit/ac1a0f0](ac1a0f0) | <notextile>Remove duplication in java builds of fjbg/asm/forkjoin</notextile>
[https://github.com/scala/scala/commit/d85c3f1](d85c3f1) | <notextile>Formatting. Introduce {asm,forkjoin,fjbg}-classes props.</notextile>
[https://github.com/scala/scala/commit/3bb1af9](3bb1af9) | <notextile>remove unused ant targets: test.ant, test.classload, test.positions</notextile>
[https://github.com/scala/scala/commit/86bea6a](86bea6a) | <notextile>run test.bc as part of tests on 2.10.x</notextile>
[https://github.com/scala/scala/commit/6620758](6620758) | <notextile>restored dependency of pack.done on quick.bin</notextile>
[https://github.com/scala/scala/commit/dd89b00](dd89b00) | <notextile>SI-7285 Fix match analysis with nested objects.</notextile>
[https://github.com/scala/scala/commit/499962d](499962d) | <notextile>Expand test for SI-6124 to demonstrate cause of SI-7285.</notextile>
[https://github.com/scala/scala/commit/c3ad5af](c3ad5af) | <notextile>SI-7290 Minor cleanups driven by review comments.</notextile>
[https://github.com/scala/scala/commit/2e0be83](2e0be83) | <notextile>SI-7290 Discard duplicates in switchable alternative patterns.</notextile>
[https://github.com/scala/scala/commit/4e10b2c](4e10b2c) | <notextile>SI-6387 Clones accessor before name expansion</notextile>
[https://github.com/scala/scala/commit/67b8de7](67b8de7) | <notextile>[backport] SI-7237 Always choose ForkJoinTaskSupport</notextile>
[https://github.com/scala/scala/commit/cd9e03a](cd9e03a) | <notextile>SI-7246 Make $outer pointer elision Java aware</notextile>
[https://github.com/scala/scala/commit/b95ca32](b95ca32) | <notextile>SI-7299 Improve error message for eta-expanding 23+ param method</notextile>
[https://github.com/scala/scala/commit/df61e04](df61e04) | <notextile>Fix typos in build.xml</notextile>
[https://github.com/scala/scala/commit/b7cbda7](b7cbda7) | <notextile>Log when invokedynamic instruction is encountered</notextile>
[https://github.com/scala/scala/commit/e78896f](e78896f) | <notextile>Read version 51 (JDK 7) class files.</notextile>
[https://github.com/scala/scala/commit/b4344e1](b4344e1) | <notextile>SI-6580 Scaladoc: Should not close void elements</notextile>
[https://github.com/scala/scala/commit/47fc00d](47fc00d) | <notextile>SI-6210 Test case for already-fixed pattern matcher bug</notextile>
[https://github.com/scala/scala/commit/df29290](df29290) | <notextile>SI-7013 Scaladoc: Fix StackOverflowError</notextile>
[https://github.com/scala/scala/commit/6f4a594](6f4a594) | <notextile>SI-7253: update comments and naming</notextile>
[https://github.com/scala/scala/commit/b0560c5](b0560c5) | <notextile>Remove fragile code, made redundant by previous commit</notextile>
[https://github.com/scala/scala/commit/386a5bd](386a5bd) | <notextile>SI-7253: respect binary compatibility constraints</notextile>
[https://github.com/scala/scala/commit/50ee635](50ee635) | <notextile>SI-5699 correct java parser for annotation defs.</notextile>
[https://github.com/scala/scala/commit/99bdebb](99bdebb) | <notextile>removes duplication in FreeDef extractors</notextile>
[https://github.com/scala/scala/commit/2b5fde7](2b5fde7) | <notextile>SI-7242 Fix crash when inner object mixes in its companion</notextile>
[https://github.com/scala/scala/commit/5db04eb](5db04eb) | <notextile>an amazing discovery made by Iulian</notextile>
[https://github.com/scala/scala/commit/fc46281](fc46281) | <notextile>fixes the craziness in JavaUniverse.log</notextile>
[https://github.com/scala/scala/commit/ef85a10](ef85a10) | <notextile>SI-7258 Don't assume order of reflection values in t6223</notextile>
[https://github.com/scala/scala/commit/f046853](f046853) | <notextile>SI-7259 Fix detection of Java defined Selects</notextile>
[https://github.com/scala/scala/commit/e90efd6](e90efd6) | <notextile>Reduce duplication and increase verbosity in MiMa execution.</notextile>
[https://github.com/scala/scala/commit/552b623](552b623) | <notextile>SI-7249 Reign in overzealous Function0 optimization.</notextile>
[https://github.com/scala/scala/commit/174334b](174334b) | <notextile>SI-6921 SI-7239 Tread lightly during exploratory typing</notextile>
[https://github.com/scala/scala/commit/6e79370](6e79370) | <notextile>SI-7232 Fix Java import vs defn. binding precendence</notextile>
[https://github.com/scala/scala/commit/8383b65](8383b65) | <notextile>SI-7232 Fix Java import vs defn. binding precendence</notextile>
[https://github.com/scala/scala/commit/7d03dcc](7d03dcc) | <notextile>SI-7259 Fix detection of Java defined Selects</notextile>
[https://github.com/scala/scala/commit/844cef6](844cef6) | <notextile>SI-7296 Remove arity limit for case classes</notextile>
[https://github.com/scala/scala/commit/ad79d74](ad79d74) | <notextile>SI-7296 Avoid crash with nested 23-param case class</notextile>
[https://github.com/scala/scala/commit/74de4ba](74de4ba) | <notextile>Improve testing interactive experience.</notextile>
[https://github.com/scala/scala/commit/395e90a](395e90a) | <notextile>SI-7251, compiler crash with $.</notextile>
[https://github.com/scala/scala/commit/a4fb773](a4fb773) | <notextile>SI-7240 fixes language feature lookup</notextile>
[https://github.com/scala/scala/commit/41e3b89](41e3b89) | <notextile>SI-7233 Account for aliased imports in Erasure</notextile>
[https://github.com/scala/scala/commit/33b499c](33b499c) | <notextile>SI-7233 Account for aliased imports in eta expansion.</notextile>
[https://github.com/scala/scala/commit/9bc17e7](9bc17e7) | <notextile>SI-6725 `f` interpolator now supports %n tokens</notextile>
[https://github.com/scala/scala/commit/eb365f9](eb365f9) | <notextile>SI-7132 - don't discard Unit type in interpreter</notextile>
[https://github.com/scala/scala/commit/2b4cd6c](2b4cd6c) | <notextile>SI-7302 importing from Any.</notextile>
[https://github.com/scala/scala/commit/e3ddb2d](e3ddb2d) | <notextile>Iterator.++ no longer blows the stack.</notextile>
[https://github.com/scala/scala/commit/ccf886c](ccf886c) | <notextile>SI-7186 Slim down some TypeRefs by 8 bytes.</notextile>
[https://github.com/scala/scala/commit/98daf03](98daf03) | <notextile>Overhauled local/getter/setter name logic.</notextile>
[https://github.com/scala/scala/commit/07cd90c](07cd90c) | <notextile>An IntelliJ Module for the recently modularized REPL.</notextile>
[https://github.com/scala/scala/commit/fbecd5d](fbecd5d) | <notextile>Allow getting STARR via maven, also: locker.skip</notextile>
[https://github.com/scala/scala/commit/7d2c1f3](7d2c1f3) | <notextile>Use stage/project for taskname instead of scalacfork</notextile>
[https://github.com/scala/scala/commit/e3b5e0b](e3b5e0b) | <notextile>Sanity for build.xml: exscriptus&amp;positus delendus est.</notextile>
[https://github.com/scala/scala/commit/da8d7c2](da8d7c2) | <notextile>Cleanup obsolete options in CodeGen.</notextile>
[https://github.com/scala/scala/commit/4af9ff5](4af9ff5) | <notextile>SI-7294 Deprecate inheritance from TupleN.</notextile>
[https://github.com/scala/scala/commit/8d537a1](8d537a1) | <notextile>SI-7294 Treat TupleN as final under -Xfuture</notextile>
[https://github.com/scala/scala/commit/2ba065f](2ba065f) | <notextile>Doc -&gt; C-style comments for local symbols to avoid &quot;discarding unmoored doc comment&quot; warning when building distribution for scala itself.</notextile>
[https://github.com/scala/scala/commit/6c48941](6c48941) | <notextile>The script engine is given a better binding mechanism and reflexive access</notextile>
[https://github.com/scala/scala/commit/6ec6f69](6ec6f69) | <notextile>Bypass determination of protection domain when resource is not in a jar</notextile>
[https://github.com/scala/scala/commit/cc485a9](cc485a9) | <notextile>SI-5717 error when bytecode cannot be written</notextile>
[https://github.com/scala/scala/commit/4bb8988](4bb8988) | <notextile>Add positive and negative testcases for SI-6123 (-explaintypes)</notextile>
[https://github.com/scala/scala/commit/ec6548f](ec6548f) | <notextile>SI-6123: -explaintypes should not explain errors which won't be reported</notextile>
[https://github.com/scala/scala/commit/1b3a379](1b3a379) | <notextile>SI-7102 Specialize isEmpty for bitsets</notextile>
[https://github.com/scala/scala/commit/645634a](645634a) | <notextile>Removed dead src directory.</notextile>
[https://github.com/scala/scala/commit/fc5e558](fc5e558) | <notextile>Eliminate a bunch of -Xlint warnings.</notextile>
[https://github.com/scala/scala/commit/9fed30c](9fed30c) | <notextile>Warn about forgotten string interpolators.</notextile>
[https://github.com/scala/scala/commit/437d619](437d619) | <notextile>removed a redundant var in JavaWriter.flagsToStr</notextile>
[https://github.com/scala/scala/commit/67ed8c8](67ed8c8) | <notextile>SI-7236 Deprecate ThreadPoolTaskSupport and friends</notextile>
[https://github.com/scala/scala/commit/38a1515](38a1515) | <notextile>SI-5513: add inplace set-theoretic operations for mutable bitsets.</notextile>
[https://github.com/scala/scala/commit/57d728c](57d728c) | <notextile>Optimize rebalance method by using null optimized list implementation.</notextile>
[https://github.com/scala/scala/commit/4f17806](4f17806) | <notextile>Eliminated containsNull.</notextile>
[https://github.com/scala/scala/commit/a063bb0](a063bb0) | <notextile>Completely remove isNotNull/notNull.</notextile>
[https://github.com/scala/scala/commit/3fe7b8c](3fe7b8c) | <notextile>SI-7247, deprecated NotNull.</notextile>
[https://github.com/scala/scala/commit/a4c3388](a4c3388) | <notextile>Remove -Xcheck-null setting.</notextile>
[https://github.com/scala/scala/commit/2655a99](2655a99) | <notextile>Removed -Ynotnull setting.</notextile>
[https://github.com/scala/scala/commit/3a17ff0](3a17ff0) | <notextile>Cleanup of constant optimization</notextile>
[https://github.com/scala/scala/commit/69109c0](69109c0) | <notextile>Analyze constants to remove unnecessary branches</notextile>
[https://github.com/scala/scala/commit/81a4f4d](81a4f4d) | <notextile>Restore sketchy dependency to quick.bin.</notextile>
[https://github.com/scala/scala/commit/6ef63e4](6ef63e4) | <notextile>Fix it-never-happened performance regression.</notextile>
[https://github.com/scala/scala/commit/9c5ea96](9c5ea96) | <notextile>Moved some numeric subtyping logic closer to center.</notextile>
[https://github.com/scala/scala/commit/cb02c96](cb02c96) | <notextile>Simplified the widening logic.</notextile>
[https://github.com/scala/scala/commit/2fa2db7](2fa2db7) | <notextile>SI-7228, bug in weak subtyping.</notextile>
[https://github.com/scala/scala/commit/745c36a](745c36a) | <notextile>SI-7328 Bail out of names/defaults if args are error typed</notextile>
[https://github.com/scala/scala/commit/83c9c76](83c9c76) | <notextile>SI-7234 Make named args play nice with dep. method types</notextile>
[https://github.com/scala/scala/commit/f742aa3](f742aa3) | <notextile>SI-5710 has fixed itself</notextile>
[https://github.com/scala/scala/commit/3ae2653](3ae2653) | <notextile>reifier is now aware of SI-7235</notextile>
[https://github.com/scala/scala/commit/7e52fb9](7e52fb9) | <notextile>SI-7226 Fix inference regression caused by TypeVar equality.</notextile>
[https://github.com/scala/scala/commit/292435f](292435f) | <notextile>Fix SI-7224.</notextile>
[https://github.com/scala/scala/commit/cab4762](cab4762) | <notextile>Update sbt.latest.version to sbt's latest version.</notextile>
[https://github.com/scala/scala/commit/34faa0d](34faa0d) | <notextile>SI-6601 Close access loophole for value class constructors</notextile>
[https://github.com/scala/scala/commit/089cad8](089cad8) | <notextile>Warn about locally identifiable init order issues.</notextile>
[https://github.com/scala/scala/commit/e39e001](e39e001) | <notextile>update eclipse projects (partest, repl &amp; scaladoc)</notextile>
[https://github.com/scala/scala/commit/3a30af1](3a30af1) | <notextile>SI-874 actual JSR-223 implementation</notextile>
[https://github.com/scala/scala/commit/3e8f8dd](3e8f8dd) | <notextile>SI-874 reflect.io improvements</notextile>
[https://github.com/scala/scala/commit/f691997](f691997) | <notextile>Add eclipse projects for interactive, scaladoc.</notextile>
[https://github.com/scala/scala/commit/1291da3](1291da3) | <notextile>IntellIiJ module definitions for scaladoc, interactive and continuations-*.</notextile>
[https://github.com/scala/scala/commit/a67b626](a67b626) | <notextile>Close after slurping (fixes SI-7244)</notextile>
[https://github.com/scala/scala/commit/fdf2533](fdf2533) | <notextile>a typo corrected</notextile>
[https://github.com/scala/scala/commit/48cc8b4](48cc8b4) | <notextile>Modularized the repl.</notextile>
[https://github.com/scala/scala/commit/e3b36c7](e3b36c7) | <notextile>Carve up Types.scala</notextile>
[https://github.com/scala/scala/commit/523eb34](523eb34) | <notextile>Deprecated custom ant task 'Same'.</notextile>
[https://github.com/scala/scala/commit/2352814](2352814) | <notextile>Eliminated all forInteractive/forScaladoc uses.</notextile>
[https://github.com/scala/scala/commit/e01c7ef](e01c7ef) | <notextile>Moved interactive code into src/interactive.</notextile>
[https://github.com/scala/scala/commit/3d5c675](3d5c675) | <notextile>Moved scaladoc code into src/scaladoc.</notextile>
[https://github.com/scala/scala/commit/9604770](9604770) | <notextile>Give interactive tests their own target.</notextile>
[https://github.com/scala/scala/commit/2fd8e72](2fd8e72) | <notextile>Give partest its own classpath in build.xml.</notextile>
[https://github.com/scala/scala/commit/1dd88d9](1dd88d9) | <notextile>Teach partest the magic of abstraction.</notextile>
[https://github.com/scala/scala/commit/e83defa](e83defa) | <notextile>Moved interactive sources into separate directory.</notextile>
[https://github.com/scala/scala/commit/c6ca941](c6ca941) | <notextile>Moved scaladoc sources into separate directory.</notextile>
[https://github.com/scala/scala/commit/9094822](9094822) | <notextile>Enabling commit for interactive/scaladoc modules.</notextile>
[https://github.com/scala/scala/commit/960f984](960f984) | <notextile>Bring some sanity to the stability test.</notextile>
[https://github.com/scala/scala/commit/9f6b7bc](9f6b7bc) | <notextile>SI-7006 Fix the unreachable test</notextile>
[https://github.com/scala/scala/commit/fd21898](fd21898) | <notextile>SI-7231 Fix assertion when adapting Null type to Array type</notextile>
[https://github.com/scala/scala/commit/04eac5c](04eac5c) | <notextile>SI-7006 Cleanup from code review</notextile>
[https://github.com/scala/scala/commit/b50a0d8](b50a0d8) | <notextile>SI-7006 Prevent unreachable blocks in GenICode</notextile>
[https://github.com/scala/scala/commit/53c499b](53c499b) | <notextile>SI-7109 SI-7153 Generalize the API to get docComments: allow to force docTrees for given fragments. Don't type-check when forcing doc comments, but rather  do it directly. Test the new functionality as well as better tests for the old one.</notextile>
[https://github.com/scala/scala/commit/2cf6c5d](2cf6c5d) | <notextile>[port] SI-7183 Disable unreachability for withFilter matches.</notextile>
[https://github.com/scala/scala/commit/5b7cfe3](5b7cfe3) | <notextile>better names for components of MatchTranslator</notextile>
[https://github.com/scala/scala/commit/0a3219b](0a3219b) | <notextile>move sat solving to separate file</notextile>
[https://github.com/scala/scala/commit/ad69835](ad69835) | <notextile>SI-7215 Fix transpose of an empty Array[Array[T]].</notextile>
[https://github.com/scala/scala/commit/1117be8](1117be8) | <notextile>SI-7190 macros no longer give rise to bridges</notextile>
[https://github.com/scala/scala/commit/b775d8f](b775d8f) | <notextile>test.done again checks bin compat (using mima 0.1.5)</notextile>
[https://github.com/scala/scala/commit/09130d5](09130d5) | <notextile>[nomaster] SI-7195 minor version mustn't introduce warnings</notextile>
[https://github.com/scala/scala/commit/0303e64](0303e64) | <notextile>SI-7183 Disable unreachability for withFilter matches.</notextile>
[https://github.com/scala/scala/commit/acd74ca](acd74ca) | <notextile>SI-7214 outer check based on dealiased pattern type.</notextile>
[https://github.com/scala/scala/commit/204b2b4](204b2b4) | <notextile>SI-7126 Eliminate a source of malformed types.</notextile>
[https://github.com/scala/scala/commit/696dcdf](696dcdf) | <notextile>SI-7126 Account for the alias types that don't dealias.</notextile>
[https://github.com/scala/scala/commit/387fbf4](387fbf4) | <notextile>SI-7185 Avoid NPE in TreeInfo.isExprSafeToInline</notextile>
[https://github.com/scala/scala/commit/ebaa34e](ebaa34e) | <notextile>simplify dependencies between patmat components, remove self types</notextile>
[https://github.com/scala/scala/commit/0420b2d](0420b2d) | <notextile>Revert SI-6240 synchronization for runtime reflection</notextile>
[https://github.com/scala/scala/commit/c46bc25](c46bc25) | <notextile>Tone down a soft-warning to only show under -Ydebug.</notextile>
[https://github.com/scala/scala/commit/387b259](387b259) | <notextile>runtime reflection: death from thousand threads</notextile>
[https://github.com/scala/scala/commit/73d079f](73d079f) | <notextile>removes the assertion in missingHook</notextile>
[https://github.com/scala/scala/commit/f4dd56c](f4dd56c) | <notextile>synchronizes names</notextile>
[https://github.com/scala/scala/commit/dd148de](dd148de) | <notextile>synchronizes pendingVolatiles</notextile>
[https://github.com/scala/scala/commit/4cbb935](4cbb935) | <notextile>synchronizes toolboxes</notextile>
[https://github.com/scala/scala/commit/07bcb61](07bcb61) | <notextile>SI-7045 reflection now auto-initializes selfType</notextile>
[https://github.com/scala/scala/commit/bebd62d](bebd62d) | <notextile>optimizes Scala reflection GIL</notextile>
[https://github.com/scala/scala/commit/735634f](735634f) | <notextile>initializes lazy vals and inner objects in advance</notextile>
[https://github.com/scala/scala/commit/5b37cfb](5b37cfb) | <notextile>introduces GIL to Scala reflection</notextile>
[https://github.com/scala/scala/commit/981da8e](981da8e) | <notextile>cleans up initialization of runtime reflection</notextile>
[https://github.com/scala/scala/commit/b2c2493](b2c2493) | <notextile>reflection no longer uses atPhase and friends</notextile>
[https://github.com/scala/scala/commit/a9dca51](a9dca51) | <notextile>synchronizes symbols</notextile>
[https://github.com/scala/scala/commit/0262941](0262941) | <notextile>removes the crazy extraneous log</notextile>
[https://github.com/scala/scala/commit/21d5d38](21d5d38) | <notextile>moves Symbol#SymbolKind to Symbols</notextile>
[https://github.com/scala/scala/commit/3f0224c](3f0224c) | <notextile>Add option to disable optimization</notextile>
[https://github.com/scala/scala/commit/c8fbba0](c8fbba0) | <notextile>Check named-args-for-clarity incur no extra bytecode</notextile>
[https://github.com/scala/scala/commit/9179c88](9179c88) | <notextile>Name boolean arguments in src/library.</notextile>
[https://github.com/scala/scala/commit/a8d60a6](a8d60a6) | <notextile>Name boolean arguments in src/reflect.</notextile>
[https://github.com/scala/scala/commit/fff0f50](fff0f50) | <notextile>Name boolean arguments in src/compiler.</notextile>
[https://github.com/scala/scala/commit/6898c9f](6898c9f) | <notextile>Eliminated separate RangePositions trait.</notextile>
[https://github.com/scala/scala/commit/dc1cd96](dc1cd96) | <notextile>Disentangled RangePositions from interactive.</notextile>
[https://github.com/scala/scala/commit/e3b7b5f](e3b7b5f) | <notextile>Require firstKey and lastKey on IntMap to be tail recursive.</notextile>
[https://github.com/scala/scala/commit/9a82fc0](9a82fc0) | <notextile>Remove unused symbols and imports from the library.</notextile>
[https://github.com/scala/scala/commit/1666f6e](1666f6e) | <notextile>Since the problem in SI-6758 is fixed, it's ok to move checking for unused imports to Analyzer. This allows the check to be used in the IDE.</notextile>
[https://github.com/scala/scala/commit/1b9c2f5](1b9c2f5) | <notextile>SI-7132 - don't discard Unit type in interpreter</notextile>
[https://github.com/scala/scala/commit/3b07135](3b07135) | <notextile>SI-6816 Deprecate -Yeta-expand-keeps-star</notextile>
[https://github.com/scala/scala/commit/7edeb24](7edeb24) | <notextile>Cleanup in isHKSubType0.</notextile>
[https://github.com/scala/scala/commit/c10df64](c10df64) | <notextile>Add some logging to sinful typevar methods.</notextile>
[https://github.com/scala/scala/commit/305a987](305a987) | <notextile>Added methods debuglogResult and devWarningResult.</notextile>
[https://github.com/scala/scala/commit/1bde987](1bde987) | <notextile>Always at least log devWarnings.</notextile>
[https://github.com/scala/scala/commit/c048669](c048669) | <notextile>Renamed type param to be consistent with convention.</notextile>
[https://github.com/scala/scala/commit/6f5e525](6f5e525) | <notextile>Establishes what's up with widening in asSeenFrom.</notextile>
[https://github.com/scala/scala/commit/e1ab60e](e1ab60e) | <notextile>Simplified correspondingTypeArgument based on reviewer feedback.</notextile>
[https://github.com/scala/scala/commit/b457b6c](b457b6c) | <notextile>Refactors AsSeenFromMap to expose extension point.</notextile>
[https://github.com/scala/scala/commit/1976d9f](1976d9f) | <notextile>fixes the test for SI-7112</notextile>
[https://github.com/scala/scala/commit/de1f749](de1f749) | <notextile>SI-7180 Fix regression in implicit scope of HK type alias.</notextile>
[https://github.com/scala/scala/commit/26be206](26be206) | <notextile>Additional test case for Lukas' fix to annotated originals.</notextile>
[https://github.com/scala/scala/commit/dafebd0](dafebd0) | <notextile>Fix typing idempotency bug with Annotated trees</notextile>
[https://github.com/scala/scala/commit/19649d4](19649d4) | <notextile>SI-6576 Workaround / diagnostic for IDE NPE.</notextile>
[https://github.com/scala/scala/commit/bb067d3](bb067d3) | <notextile>SI-7146 - Fixing checkinit bug in ExecutionContextImpl and adding test</notextile>
[https://github.com/scala/scala/commit/348ff4b](348ff4b) | <notextile>SI-7128 Fix regression in copyToArray for empty arrays</notextile>
[https://github.com/scala/scala/commit/3e7db2d](3e7db2d) | <notextile>adds some comments to resetAttrs</notextile>
[https://github.com/scala/scala/commit/e2a17d9](e2a17d9) | <notextile>resetAttrs now always erases This.tpe</notextile>
[https://github.com/scala/scala/commit/4f1bfec](4f1bfec) | <notextile>Fix SI-7107: scala now thinks every exception is polymorphic</notextile>
[https://github.com/scala/scala/commit/8187deb](8187deb) | <notextile>SI-7074 Fix xml attribute sorting</notextile>
[https://github.com/scala/scala/commit/89be691](89be691) | <notextile>fixes the test for SI-7112</notextile>
[https://github.com/scala/scala/commit/d49532f](d49532f) | <notextile>check scala-swing for binary compatibility</notextile>
[https://github.com/scala/scala/commit/dad8796](dad8796) | <notextile>[nomaster] Revert &quot;Added a Swing ColorChooser wrapper&quot;</notextile>
[https://github.com/scala/scala/commit/b4f277a](b4f277a) | <notextile>[nomaster] Revert &quot;Added a Swing PopupMenu wrapper&quot;</notextile>
[https://github.com/scala/scala/commit/85b63b8](85b63b8) | <notextile>[nomaster] Revert &quot;SI-6548 reflection now correctly enters jinners&quot;</notextile>
[https://github.com/scala/scala/commit/2f9b708](2f9b708) | <notextile>[nomaster] inline importPrivateWithinFromJavaFlags into SymbolTable</notextile>
[https://github.com/scala/scala/commit/ddfe3a0](ddfe3a0) | <notextile>[nomaster] Revert &quot;cosmetic renamings in runtime reflection&quot;</notextile>
[https://github.com/scala/scala/commit/9194b37](9194b37) | <notextile>[nomaster] refactor AdaptedForkJoinTask, uncaughtExceptionHandler</notextile>
[https://github.com/scala/scala/commit/56cbf23](56cbf23) | <notextile>[nomaster] can't add new class BatchingExecutor</notextile>
[https://github.com/scala/scala/commit/549a1fe](549a1fe) | <notextile>[nomaster] bring back SerializeStart from fa3b8040eb</notextile>
[https://github.com/scala/scala/commit/5d487f1](5d487f1) | <notextile>[nomaster] duplicate tailImpl as a private method</notextile>
[https://github.com/scala/scala/commit/8b4af71](8b4af71) | <notextile>[nomaster] Revert &quot;SI-4664 Make scala.util.Random Serializable&quot;</notextile>
[https://github.com/scala/scala/commit/f9550c6](f9550c6) | <notextile>[nomaster] Revert &quot;Fixes SI-6521, overrides Range#head to be faster&quot;</notextile>
[https://github.com/scala/scala/commit/af0da51](af0da51) | <notextile>[nomaster] run mima both ways, filter out failures</notextile>
[https://github.com/scala/scala/commit/bfd7863](bfd7863) | <notextile>SI-7159 Distinguish between assignability and sub typing in TypeKinds</notextile>
[https://github.com/scala/scala/commit/4124a09](4124a09) | <notextile>SI-7159 Remove erroneous INT &lt;:&lt; LONG in TypeKinds</notextile>
[https://github.com/scala/scala/commit/04b147e](04b147e) | <notextile>SI-7159 Prepare to remove erroneous INT &lt;:&lt; LONG in TypeKinds</notextile>
[https://github.com/scala/scala/commit/208d6ad](208d6ad) | <notextile>SI-7159 Remove unreachable cases in GenICode#adapt</notextile>
[https://github.com/scala/scala/commit/910e5a0](910e5a0) | <notextile>Reconcile definitions of stability.</notextile>
[https://github.com/scala/scala/commit/3e0fbc0](3e0fbc0) | <notextile>relax time constraint in duration-tck.scala (for Windows VMs)</notextile>
[https://github.com/scala/scala/commit/5f3cd86](5f3cd86) | <notextile>SI-7181 Eliminate unnecessary duplication of finally blocks</notextile>
[https://github.com/scala/scala/commit/28a7161](28a7161) | <notextile>SI-7181 Prepare to remove duplicated finally blocks</notextile>
[https://github.com/scala/scala/commit/4f2d784](4f2d784) | <notextile>SI-7006 Simplify jump-only block destination determination</notextile>
[https://github.com/scala/scala/commit/e9f6511](e9f6511) | <notextile>SI-7006 Eliminate unreachable blocks</notextile>
[https://github.com/scala/scala/commit/0d2e19c](0d2e19c) | <notextile>SI-7006 Recognize more jump only blocks</notextile>
[https://github.com/scala/scala/commit/022c57f](022c57f) | <notextile>SI-7006 Improve jump-elision code in GenASM</notextile>
[https://github.com/scala/scala/commit/d6527d5](d6527d5) | <notextile>Address some Scaladocrot</notextile>
[https://github.com/scala/scala/commit/6d94b35](6d94b35) | <notextile>Modernize legacy backquotes in comments.</notextile>
[https://github.com/scala/scala/commit/256e468](256e468) | <notextile>Remove redundant explicit returns.</notextile>
[https://github.com/scala/scala/commit/bc99770](bc99770) | <notextile>Don't wrap an array just to get its length.</notextile>
[https://github.com/scala/scala/commit/ee03302](ee03302) | <notextile>Remove redundant 'val' from case class params.</notextile>
[https://github.com/scala/scala/commit/54065a7](54065a7) | <notextile>Fix two malformed format strings.</notextile>
[https://github.com/scala/scala/commit/41703df](41703df) | <notextile>More explicit empty paren lists in method calls.</notextile>
[https://github.com/scala/scala/commit/6e450ed](6e450ed) | <notextile>Reorder to avoid code appearing like a forward reference.</notextile>
[https://github.com/scala/scala/commit/8cdf3b3](8cdf3b3) | <notextile>Banish needless semicolons.</notextile>
[https://github.com/scala/scala/commit/e7ab2f4](e7ab2f4) | <notextile>Be explicit about empty param list calls.</notextile>
[https://github.com/scala/scala/commit/d1b16c4](d1b16c4) | <notextile>Don't override empty-paren methods as paren-less.</notextile>
[https://github.com/scala/scala/commit/0ecba21](0ecba21) | <notextile>fixes the test for SI-7112</notextile>
[https://github.com/scala/scala/commit/c11cf0b](c11cf0b) | <notextile>SI-7120 Erasure must honor typeref prefixes</notextile>
[https://github.com/scala/scala/commit/3d5758c](3d5758c) | <notextile>SI-7171 Consider prefix when assessing type finality.</notextile>
[https://github.com/scala/scala/commit/18a2ba2](18a2ba2) | <notextile>please ant with filenames, add comments</notextile>
[https://github.com/scala/scala/commit/6a7078c](6a7078c) | <notextile>remove unused imports</notextile>
[https://github.com/scala/scala/commit/b20e288](b20e288) | <notextile>Fixed error in reflection API docs about linearization order on method baseClasses</notextile>
[https://github.com/scala/scala/commit/d2a36ab](d2a36ab) | <notextile>Shadowed Implict typo (fixes no issue)</notextile>
[https://github.com/scala/scala/commit/62fcd3d](62fcd3d) | <notextile>SI-7015 Cleanup from review of null duplication</notextile>
[https://github.com/scala/scala/commit/1b6661b](1b6661b) | <notextile>SI-7015 Removes redundant aconst_null; pop; aconst_null creation</notextile>
[https://github.com/scala/scala/commit/7fdc873](7fdc873) | <notextile>[refactor] move some logic-related code</notextile>
[https://github.com/scala/scala/commit/c930a85](c930a85) | <notextile>[refactor] better name for symbolicCase</notextile>
[https://github.com/scala/scala/commit/76fc728](76fc728) | <notextile>[refactor] make hash-consing more robust</notextile>
[https://github.com/scala/scala/commit/712a921](712a921) | <notextile>drop Cond in favor of Prop</notextile>
[https://github.com/scala/scala/commit/1b47248](1b47248) | <notextile>[refactor] prepare migration from Cond to Prop</notextile>
[https://github.com/scala/scala/commit/647a760](647a760) | <notextile>[refactor] type analysis consolidation</notextile>
[https://github.com/scala/scala/commit/e14846b](e14846b) | <notextile>[refactor] move PatternMatching.scala to transform.patmat</notextile>
[https://github.com/scala/scala/commit/f5ed914](f5ed914) | <notextile>re-align 2.10.x's pattern matcher with master's</notextile>
[https://github.com/scala/scala/commit/8a2cebe](8a2cebe) | <notextile>SI-6807 Deprecating the Actors library.</notextile>
[https://github.com/scala/scala/commit/68f62d7](68f62d7) | <notextile>SI-7164 - Removing NotImplementedError as Fatal from s.u.c.NonFatal</notextile>
[https://github.com/scala/scala/commit/39249d5](39249d5) | <notextile>bump build number to 2.10.2</notextile>
[https://github.com/scala/scala/commit/3c22436](3c22436) | <notextile>Additional test case for Lukas' fix to annotated originals.</notextile>
[https://github.com/scala/scala/commit/8206e26](8206e26) | <notextile>Fix typing idempotency bug with Annotated trees</notextile>
[https://github.com/scala/scala/commit/c8ab5b3](c8ab5b3) | <notextile>Fix SI-7130: Memory leaked caused by Statistics</notextile>
[https://github.com/scala/scala/commit/4df9e20](4df9e20) | <notextile>SI-7143 Fix scanner docComment: docBuffer and docPos are initialized in different places and as a result can get out of sync and as a result the invariant that docComment has a position is broken.</notextile>
[https://github.com/scala/scala/commit/fd68fe6](fd68fe6) | <notextile>SI-7134: don't require doc.Settings in base api of scaladoc.</notextile>
[https://github.com/scala/scala/commit/c10b7b6](c10b7b6) | <notextile>unit test ide-t1000567 exercises SI-5063, aka #1000567.</notextile>
[https://github.com/scala/scala/commit/5379eba](5379eba) | <notextile>Removing disabled, unneeded futures tests</notextile>
[https://github.com/scala/scala/commit/9f25a2a](9f25a2a) | <notextile>make Future scaladoc examples up-to-date and compilable</notextile>
[https://github.com/scala/scala/commit/9d5d55b](9d5d55b) | <notextile>SI-5744 evidence params are now SYNTHETIC</notextile>
[https://github.com/scala/scala/commit/6a7d793](6a7d793) | <notextile>SI-7091 Don't try to put a protected accessor in a package.</notextile>
[https://github.com/scala/scala/commit/2e8ede5](2e8ede5) | <notextile>SI-7091 Add a diagnostic for the &quot;no acc def buf&quot; error.</notextile>
[https://github.com/scala/scala/commit/0eff6cd](0eff6cd) | <notextile>Fix and optimization in overriding logic.</notextile>
[https://github.com/scala/scala/commit/6879451](6879451) | <notextile>Extracted abstract implicit vals from Types.</notextile>
[https://github.com/scala/scala/commit/d8ba6af](d8ba6af) | <notextile>Boxing cleanup: erasure, post-erasure, value classes.</notextile>
[https://github.com/scala/scala/commit/07ba1f8](07ba1f8) | <notextile>SI-6642 Code cleanup from review of iteratorFrom</notextile>
[https://github.com/scala/scala/commit/3903779](3903779) | <notextile>SI-6642 Refactor mutable.TreeSet to use RedBlackTree instead of AVL</notextile>
[https://github.com/scala/scala/commit/62bc99d](62bc99d) | <notextile>SI-6642 Adds iteratorFrom, keysIteratorFrom, and valuesIteratorFrom</notextile>
[https://github.com/scala/scala/commit/a0b1db4](a0b1db4) | <notextile>SI-6642 Code cleanup on RedBlackTree#TreeIterator</notextile>
[https://github.com/scala/scala/commit/de2410b](de2410b) | <notextile>silences t6323a</notextile>
[https://github.com/scala/scala/commit/673cc83](673cc83) | <notextile>SI-6514 Avoid spurious dead code warnings</notextile>
[https://github.com/scala/scala/commit/ef6095a](ef6095a) | <notextile>Tolerate symbol sharing between accessor/field.</notextile>
[https://github.com/scala/scala/commit/451cab9](451cab9) | <notextile>SI-6225 Fix import of inherited package object implicits</notextile>
[https://github.com/scala/scala/commit/c049d66](c049d66) | <notextile>SI-6935 Added readResolve in BoxedUnit When deserializing Unit, it would return an instance of Object, but not a Scala Unit. By adding readResolve, the deserialization of Unit will work.</notextile>
[https://github.com/scala/scala/commit/7b425bf](7b425bf) | <notextile>SI-6370 changed ListMap apply0 method to produce correct error message when a key is not found Current implementation of apply0 relies on tail method to iterate over all keys. When the list gets to its end, tail produces an 'empty map' message in its exception, which is thrown by ListMap. This change checks if the collection is empty before calling tail and provides a more appropriate key not found message.</notextile>
[https://github.com/scala/scala/commit/6424907](6424907) | <notextile>SI-6158 Restore compile error output under partest --show-log</notextile>
[https://github.com/scala/scala/commit/37824d3](37824d3) | <notextile>Update src/library/scala/sys/process/package.scala</notextile>
[https://github.com/scala/scala/commit/c26cc53](c26cc53) | <notextile>SI-6355, weakend implementation restriction on applyDynamic.</notextile>
[https://github.com/scala/scala/commit/c26a8db](c26a8db) | <notextile>Maintenance of Predef.</notextile>
[https://github.com/scala/scala/commit/42744d7](42744d7) | <notextile>Application is deprecated. Replaced with App</notextile>
[https://github.com/scala/scala/commit/8eadc6d](8eadc6d) | <notextile>Update src/library/scala/sys/process/ProcessBuilder.scala</notextile>
[https://github.com/scala/scala/commit/13caa49](13caa49) | <notextile>Fix for paramaccessor alias regression.</notextile>
[https://github.com/scala/scala/commit/22341e7](22341e7) | <notextile>Expanded bytecode testing code.</notextile>
[https://github.com/scala/scala/commit/57c0e63](57c0e63) | <notextile>accommodates pull request feedback</notextile>
[https://github.com/scala/scala/commit/ce867c7](ce867c7) | <notextile>term and type reftrees are now reified uniformly</notextile>
[https://github.com/scala/scala/commit/09ef873](09ef873) | <notextile>SI-6591 Reify and path-dependent types</notextile>
[https://github.com/scala/scala/commit/e0068b9](e0068b9) | <notextile>SI-5675 Discard duplicate feature warnings at a position</notextile>
[https://github.com/scala/scala/commit/5258b63](5258b63) | <notextile>SI-7096 SubstSymMap copies trees before modifying their symbols</notextile>
[https://github.com/scala/scala/commit/6052e19](6052e19) | <notextile>[backport] SI-6478 Fixing JavaTokenParser ident</notextile>
[https://github.com/scala/scala/commit/96b0eff](96b0eff) | <notextile>SI-5824 Fix crashes in reify with _*</notextile>
[https://github.com/scala/scala/commit/fa3b804](fa3b804) | <notextile>SI-6961 no structural sharing in list serialization</notextile>
[https://github.com/scala/scala/commit/dfbaaa1](dfbaaa1) | <notextile>SI-6187 Make partial functions re-typable</notextile>
[https://github.com/scala/scala/commit/55c9b9c](55c9b9c) | <notextile>SI-6146 More accurate prefixes for sealed subtypes.</notextile>
[https://github.com/scala/scala/commit/1426fec](1426fec) | <notextile>SI-7070 Turn restriction on companions in pkg objs into warning</notextile>
[https://github.com/scala/scala/commit/a0ee6e9](a0ee6e9) | <notextile>SI-5082 Cycle avoidance between case companions</notextile>
[https://github.com/scala/scala/commit/a53e150](a53e150) | <notextile>SI-7100 Fixed infinite recursion in duplicators</notextile>
[https://github.com/scala/scala/commit/0d68a87](0d68a87) | <notextile>SI-6113 typeOf now works for type lambdas</notextile>
[https://github.com/scala/scala/commit/79e774f](79e774f) | <notextile>SI-7026: parseTree should never return a typed one</notextile>
[https://github.com/scala/scala/commit/f784fbf](f784fbf) | <notextile>Add a request to presentation compiler to fetch doc comment information. Refactor scaladoc base functionality to allow it to be mixed in with Global in the IDE.</notextile>
[https://github.com/scala/scala/commit/81fa831](81fa831) | <notextile>Class symbols can't be contravariant.</notextile>
[https://github.com/scala/scala/commit/275b341](275b341) | <notextile>SI-6666 Catch VerifyErrors in the making in early defs.</notextile>
[https://github.com/scala/scala/commit/66fa1f2](66fa1f2) | <notextile>Broader checks for poisonous this references.</notextile>
[https://github.com/scala/scala/commit/4c34280](4c34280) | <notextile>Add a test case from the comments of SI-6666.</notextile>
[https://github.com/scala/scala/commit/fd61254](fd61254) | <notextile>SI-6666 Account for nesting in setting INCONSTRUCTOR</notextile>
[https://github.com/scala/scala/commit/ee24807](ee24807) | <notextile>Move a test from pos to run to highlight bytecode deficiencies.</notextile>
[https://github.com/scala/scala/commit/b579a42](b579a42) | <notextile>SI-6888 Loosen criteria for $outer search.</notextile>
[https://github.com/scala/scala/commit/b43ae58](b43ae58) | <notextile>introduces an exhaustive java-to-scala test</notextile>
[https://github.com/scala/scala/commit/02ed5fb](02ed5fb) | <notextile>SI-6989 privateWithin is now populated in reflect</notextile>
[https://github.com/scala/scala/commit/1f838ed](1f838ed) | <notextile>[nomaster] verifies compat with 2.10.0</notextile>
[https://github.com/scala/scala/commit/c9a0e36](c9a0e36) | <notextile>[nomaster] Revert &quot;refactors handling of parent types&quot;</notextile>
[https://github.com/scala/scala/commit/570f4a4](570f4a4) | <notextile>[nomaster] Revert &quot;introduces global.pendingSuperCall&quot;</notextile>
[https://github.com/scala/scala/commit/c720531](c720531) | <notextile>[nomaster] Revert &quot;DummyTree =&gt; CannotHaveAttrs&quot;</notextile>
[https://github.com/scala/scala/commit/4d7982b](4d7982b) | <notextile>[nomaster] Revert &quot;more ListOfNil =&gt; Nil&quot;</notextile>
[https://github.com/scala/scala/commit/4ef2a49](4ef2a49) | <notextile>[nomaster] Revert &quot;s/SuperCallArgs/SuperArgs/&quot;</notextile>
[https://github.com/scala/scala/commit/0e0c851](0e0c851) | <notextile>[nomaster] revives BuildUtils.emptyValDef</notextile>
[https://github.com/scala/scala/commit/1093ce0](1093ce0) | <notextile>[nomaster] removes Tree.canHaveAttrs</notextile>
[https://github.com/scala/scala/commit/7bf0ecc](7bf0ecc) | <notextile>[nomaster] doesn't touch NonemptyAttachments</notextile>
[https://github.com/scala/scala/commit/015ff51](015ff51) | <notextile>[nomaster] Revert &quot;SI-5017 Poor performance of :+ operator on Arrays&quot;</notextile>
[https://github.com/scala/scala/commit/87d52db](87d52db) | <notextile>[nomaster] SI-6773 Makes the SI-6150 changes binary compatible with 2.10</notextile>
[https://github.com/scala/scala/commit/e5c0e59](e5c0e59) | <notextile>SI-7060 More conservative dead code elim marking</notextile>
[https://github.com/scala/scala/commit/8ae0e2a](8ae0e2a) | <notextile>SI-7039 unapplySeq result type independent of subpattern count</notextile>
[https://github.com/scala/scala/commit/0574172](0574172) | <notextile>SI-5833 Fixes tail-of-Nil problem in RefinedType#normalizeImpl</notextile>
[https://github.com/scala/scala/commit/b67f8e5](b67f8e5) | <notextile>[nomerge] SI-6667 Demote a new ambiguity error to a lint warning.</notextile>
[https://github.com/scala/scala/commit/0e8d8c7](0e8d8c7) | <notextile>SI-6017 Scaladoc: Show all letters without dangling links</notextile>
[https://github.com/scala/scala/commit/3f0bce9](3f0bce9) | <notextile>SI-6017 Generate Scaladoc's index links in Scala side</notextile>
[https://github.com/scala/scala/commit/a6137d1](a6137d1) | <notextile>Fix SI-6578. Deprecated `askType` because of possible race conditions in type checker.</notextile>
[https://github.com/scala/scala/commit/02dd4c9](02dd4c9) | <notextile>reflecting @throws defined in Scala code</notextile>
[https://github.com/scala/scala/commit/0bcdf71](0bcdf71) | <notextile>pullrequest feedback</notextile>
[https://github.com/scala/scala/commit/adf50a3](adf50a3) | <notextile>evicts javac-artifacts.jar</notextile>
[https://github.com/scala/scala/commit/f1701f7](f1701f7) | <notextile>SI-7008 @throws annotations are now populated in reflect</notextile>
[https://github.com/scala/scala/commit/3af838c](3af838c) | <notextile>SI-7033 Be symful when creating factory methods.</notextile>
[https://github.com/scala/scala/commit/bc01614](bc01614) | <notextile>Revert &quot;SI-6422: add missing Fractional and Integral alias in scala package&quot;</notextile>
[https://github.com/scala/scala/commit/4fda83f](4fda83f) | <notextile>SI-5313 Minor code cleanup for store clobbering</notextile>
[https://github.com/scala/scala/commit/c7d489e](c7d489e) | <notextile>SI-5313 Test clobbers on the back edge of a loop</notextile>
[https://github.com/scala/scala/commit/9b4fa83](9b4fa83) | <notextile>SI-5313 Eliminate more stores by replacing clobbers with null stores</notextile>
[https://github.com/scala/scala/commit/eab2884](eab2884) | <notextile>SI-5313 Do not eliminate stores that potentially wipe referenes</notextile>
[https://github.com/scala/scala/commit/2403d1d](2403d1d) | <notextile>SI-7046 reflection now auto-initializes knownDirectSubclasses</notextile>
[https://github.com/scala/scala/commit/374c912](374c912) | <notextile>SI-7022 Additional test case for value class w. bounds</notextile>
[https://github.com/scala/scala/commit/4ed8836](4ed8836) | <notextile>[backport] SI-6482, lost bounds in extension methods.</notextile>
[https://github.com/scala/scala/commit/b2117cf](b2117cf) | <notextile>SI-6941 tests</notextile>
[https://github.com/scala/scala/commit/b92396b](b92396b) | <notextile>SI-6686 drop valdef unused in flatMapCond's block</notextile>
[https://github.com/scala/scala/commit/b47bb0f](b47bb0f) | <notextile>no type test if static type &lt;:&lt; primitive value class</notextile>
[https://github.com/scala/scala/commit/494ba94](494ba94) | <notextile>don't store subpats bound to underscore</notextile>
[https://github.com/scala/scala/commit/71ea3e8](71ea3e8) | <notextile>no null check for type-tested unapply arg</notextile>
[https://github.com/scala/scala/commit/62b37dd](62b37dd) | <notextile>refactor: prepare null check redundancy analysis</notextile>
[https://github.com/scala/scala/commit/415becd](415becd) | <notextile>support testing bytecode similarity in ByteCodeTest</notextile>
[https://github.com/scala/scala/commit/a07555f](a07555f) | <notextile>bytecode diffing support in ByteCodeTest</notextile>
[https://github.com/scala/scala/commit/d71f59e](d71f59e) | <notextile>SI-4976 Scaladoc: Add a source link to package objects</notextile>
[https://github.com/scala/scala/commit/5275bae](5275bae) | <notextile>SI-7029 - Make test more robust</notextile>
[https://github.com/scala/scala/commit/3f78bee](3f78bee) | <notextile>SI-7029 - Makes sure that uncaught exceptions are propagated to the UEH for the global ExecutionContext</notextile>
[https://github.com/scala/scala/commit/2989258](2989258) | <notextile>SI-6539 moves @compileTimeOnly away from scala-reflect</notextile>
[https://github.com/scala/scala/commit/8bd03e0](8bd03e0) | <notextile>SI-5151 - Add firstKey and lastKey to LongMap.</notextile>
[https://github.com/scala/scala/commit/108a1f7](108a1f7) | <notextile>SI-6773 Changes IndexSeqFactory to be &quot;since 2.11&quot;</notextile>
[https://github.com/scala/scala/commit/f3cdf14](f3cdf14) | <notextile>Fix context for type checking early initializers</notextile>
[https://github.com/scala/scala/commit/7e836f8](7e836f8) | <notextile>Analyzer Plugins</notextile>
[https://github.com/scala/scala/commit/b74c33e](b74c33e) | <notextile>SI-1803, plus documentation and cleanups in Namers, mainly in typeSig</notextile>
[https://github.com/scala/scala/commit/a06d31f](a06d31f) | <notextile>Keep annotations when computing lubs</notextile>
[https://github.com/scala/scala/commit/6697c28](6697c28) | <notextile>Allow for Function treess with refined types in UnCurry.</notextile>
[https://github.com/scala/scala/commit/59918ee](59918ee) | <notextile>case module toString is synthetic</notextile>
[https://github.com/scala/scala/commit/91c9c42](91c9c42) | <notextile>replace symbols correctly when subtyping dependent types</notextile>
[https://github.com/scala/scala/commit/71fb0b8](71fb0b8) | <notextile>Removed -Ymacro-no-expand.</notextile>
[https://github.com/scala/scala/commit/e3d9a08](e3d9a08) | <notextile>Cleaning up after brutal merge of 2.10.x into master.</notextile>
[https://github.com/scala/scala/commit/941c569](941c569) | <notextile>SI-6812 scaladoc can opt out of expanding macros</notextile>
[https://github.com/scala/scala/commit/11ac963](11ac963) | <notextile>[backport] Fix for SI-6206, inconsistency with apply.</notextile>
[https://github.com/scala/scala/commit/5a2828c](5a2828c) | <notextile>A test case to guide the eventual fix for SI-6601.</notextile>
[https://github.com/scala/scala/commit/172f3f6](172f3f6) | <notextile>Revert &quot;SI-6601 Publicise derived value contstructor after pickler&quot;</notextile>
[https://github.com/scala/scala/commit/6db4db9](6db4db9) | <notextile>SI-2818 Make List.foldRight always do a reverse/foldLeft flip</notextile>
[https://github.com/scala/scala/commit/8350cd9](8350cd9) | <notextile>[backport] SI-2968 Fix brace healing for `^case (class&#124;object) {`</notextile>
[https://github.com/scala/scala/commit/1de399d](1de399d) | <notextile>SI-6963 Add version to -Xmigration</notextile>
[https://github.com/scala/scala/commit/1049435](1049435) | <notextile>SI-3353 don't extract &lt;unapply-selector&gt; into named-arg local val</notextile>
[https://github.com/scala/scala/commit/485d815](485d815) | <notextile>There is no &quot;letters&quot; method in this branch</notextile>
[https://github.com/scala/scala/commit/033b6c1](033b6c1) | <notextile>Forgot to cherry-pick the .check file</notextile>
[https://github.com/scala/scala/commit/831bffd](831bffd) | <notextile>SI-6017 Scaladoc's Index should be case-sensitive</notextile>
[https://github.com/scala/scala/commit/e36327a](e36327a) | <notextile>SI-6853 changed private method remove to be tail recursive. Operations += and -= on mutable.ListMap rely on the private method remove to perform. This methods was implemented using recursion, but it was not tail recursive. When the ListMap got too big the += caused a StackOverflowError.</notextile>
[https://github.com/scala/scala/commit/ff92610](ff92610) | <notextile>SI-6595, lost modifiers in early defs.</notextile>
[https://github.com/scala/scala/commit/98534b2](98534b2) | <notextile>SI-6584, Stream#distinct uses too much memory.</notextile>
[https://github.com/scala/scala/commit/d2316df](d2316df) | <notextile>SI-6426, importable _.</notextile>
[https://github.com/scala/scala/commit/05882eb](05882eb) | <notextile>SI-6072, crasher with overloaded eq.</notextile>
[https://github.com/scala/scala/commit/d4437aa](d4437aa) | <notextile>SI-5604, selections on package objects.</notextile>
[https://github.com/scala/scala/commit/e156cd1](e156cd1) | <notextile>SI-5859, inapplicable varargs.</notextile>
[https://github.com/scala/scala/commit/f3f1e50](f3f1e50) | <notextile>SI-5353, imperfect error message.</notextile>
[https://github.com/scala/scala/commit/77ec4ef](77ec4ef) | <notextile>SI-5130, precision disappearing from refinement.</notextile>
[https://github.com/scala/scala/commit/faca7ec](faca7ec) | <notextile>SI-4729, overriding java varargs in scala.</notextile>
[https://github.com/scala/scala/commit/0990890](0990890) | <notextile>SI-2418, remove restriction on final vars.</notextile>
[https://github.com/scala/scala/commit/16eaefb](16eaefb) | <notextile>SI-6572 Test case, originally fixed in a3680be.</notextile>
[https://github.com/scala/scala/commit/0679da5](0679da5) | <notextile>[backport] SI-6301 / SI-6572 specialization regressions</notextile>
[https://github.com/scala/scala/commit/f6d90a8](f6d90a8) | <notextile>[backport] SI-5378, unsoundness with type bounds in refinements.</notextile>
[https://github.com/scala/scala/commit/5f85fe5](5f85fe5) | <notextile>SI-4714 Initialize history while initializing the REPL's reader</notextile>
[https://github.com/scala/scala/commit/243cede](243cede) | <notextile>[backport] Removed restriction on final vars, SI-2418.</notextile>
[https://github.com/scala/scala/commit/4b39be4](4b39be4) | <notextile>changes the flags to not depend on partest</notextile>
[https://github.com/scala/scala/commit/ced7411](ced7411) | <notextile>the scanner is now less eager about deprecations</notextile>
[https://github.com/scala/scala/commit/1ab7d1c](1ab7d1c) | <notextile>evicts eponymous packages and objects from tests</notextile>
[https://github.com/scala/scala/commit/fefe6cc](fefe6cc) | <notextile>SI-7009: `@throws` annotation synthesized incorrectly</notextile>
[https://github.com/scala/scala/commit/e22d801](e22d801) | <notextile>Test case for SI-7009.</notextile>
[https://github.com/scala/scala/commit/a87d409](a87d409) | <notextile>SI-6968 Simple Tuple patterns aren't irrefutable</notextile>
[https://github.com/scala/scala/commit/166fd02](166fd02) | <notextile>SI-6669 Add . to the default scalap classpath</notextile>
[https://github.com/scala/scala/commit/80a814d](80a814d) | <notextile>SI-6728 Fixes crash in parser on incomplete for expression</notextile>
[https://github.com/scala/scala/commit/8610d7e](8610d7e) | <notextile>Add Bytecode test (ASM-based) to partest.</notextile>
[https://github.com/scala/scala/commit/9afae59](9afae59) | <notextile>SI-7035 Centralize case field accessor sorting.</notextile>
[https://github.com/scala/scala/commit/eba079b](eba079b) | <notextile>Optimization in AsSeenFromMap.</notextile>
[https://github.com/scala/scala/commit/f72354c](f72354c) | <notextile>Remove gratuitous var</notextile>
[https://github.com/scala/scala/commit/6357c8d](6357c8d) | <notextile>SI-6726 Further optimization of pattern analysis</notextile>
[https://github.com/scala/scala/commit/14d8c22](14d8c22) | <notextile>SI-6726 Hash consing for Pattern matching Sym-s</notextile>
[https://github.com/scala/scala/commit/32c0a2e](32c0a2e) | <notextile>SI-6726 Add benchmark used for testing pattern matcher.</notextile>
[https://github.com/scala/scala/commit/d3f3394](d3f3394) | <notextile>[backport] Fix for SI-6154, VerifyError originating in uncurry.</notextile>
[https://github.com/scala/scala/commit/6f86583](6f86583) | <notextile>SI-6516, macros comparing types with == instead of =:=.</notextile>
[https://github.com/scala/scala/commit/cfaa3b5](cfaa3b5) | <notextile>SI-6551 Expand test case into uncomfortable areas.</notextile>
[https://github.com/scala/scala/commit/45ccdc5](45ccdc5) | <notextile>SI-6651 Substitute `this` in extension method sigs</notextile>
[https://github.com/scala/scala/commit/bffe776](bffe776) | <notextile>[backport] Disabled SI-6987.</notextile>
[https://github.com/scala/scala/commit/b8da00e](b8da00e) | <notextile>[backport] SI-3577 BoundedWildcardType handling</notextile>
[https://github.com/scala/scala/commit/fd6fe4e](fd6fe4e) | <notextile>Fix access to empty package from the repl.</notextile>
[https://github.com/scala/scala/commit/d2965f8](d2965f8) | <notextile>Overhaul of tools/partest-ack.</notextile>
[https://github.com/scala/scala/commit/c8293b7](c8293b7) | <notextile>Expanded the comment on Type#normalize.</notextile>
[https://github.com/scala/scala/commit/039b1cb](039b1cb) | <notextile>Changes many calls to normalize to dealiasWiden.</notextile>
[https://github.com/scala/scala/commit/0388a7c](0388a7c) | <notextile>Renames normalize to normalizeModifiers.</notextile>
[https://github.com/scala/scala/commit/6d669f3](6d669f3) | <notextile>Pending test for SI-5459.</notextile>
[https://github.com/scala/scala/commit/b6f898f](b6f898f) | <notextile>SI-6939 Fix namespace binding (xmlns) not overriding outer binding</notextile>
[https://github.com/scala/scala/commit/aa199b8](aa199b8) | <notextile>Revert &quot;SI-6811 Misc. removals in util, testing, io, ...&quot;</notextile>
[https://github.com/scala/scala/commit/7babdab](7babdab) | <notextile>SI-6891 Fix value class + tailrec crasher.</notextile>
[https://github.com/scala/scala/commit/cff0934](cff0934) | <notextile>Ill-scoped reference checking in TreeCheckers</notextile>
[https://github.com/scala/scala/commit/05ad682](05ad682) | <notextile>Make value classes TreeCheckers friendly</notextile>
[https://github.com/scala/scala/commit/3cbb002](3cbb002) | <notextile>SI-4602 Disable unreliable test of fsc path absolutization</notextile>
[https://github.com/scala/scala/commit/952e1bf](952e1bf) | <notextile>SI-4602 Make fsc absolutize source file names</notextile>
[https://github.com/scala/scala/commit/e0cf651](e0cf651) | <notextile>SI-4733 - fsc no longer creates a single temp directory for all users.</notextile>
[https://github.com/scala/scala/commit/0b52a51](0b52a51) | <notextile>SI-6863 Fix verify error in captured var inited from expr with try/catch</notextile>
[https://github.com/scala/scala/commit/262d7ec](262d7ec) | <notextile>SI-6932 Remove Batchable trait plus minor clean-ups</notextile>
[https://github.com/scala/scala/commit/08a74e5](08a74e5) | <notextile> Fix SI-6932 by enabling linearization of callback execution for the internal execution context of Future</notextile>
[https://github.com/scala/scala/commit/11329c3](11329c3) | <notextile>SI-6443 Expand test coverage with varargs, by-name.</notextile>
[https://github.com/scala/scala/commit/493197f](493197f) | <notextile>SI-6443 Widen dependent param types in uncurry</notextile>
[https://github.com/scala/scala/commit/62111a4](62111a4) | <notextile>Update a checkfile from a recent fix.</notextile>
[https://github.com/scala/scala/commit/a72aa94](a72aa94) | <notextile>SI-7018 Fix memory leak in Attachments.</notextile>
[https://github.com/scala/scala/commit/7c45aa5](7c45aa5) | <notextile>Bumped partest MaxPermSize to 128m.</notextile>
[https://github.com/scala/scala/commit/982633a](982633a) | <notextile>SI-6556 Remove unneeded workaround in erasure.</notextile>
[https://github.com/scala/scala/commit/373b001](373b001) | <notextile>Fixed typo in ProcessBuilder scaladoc.</notextile>
[https://github.com/scala/scala/commit/2580a51](2580a51) | <notextile>Laying groundwork for a followup ticket.</notextile>
[https://github.com/scala/scala/commit/412ad57](412ad57) | <notextile>SI-4859 Retain MODULE_LOAD in dead code elim.</notextile>
[https://github.com/scala/scala/commit/f21b1ce](f21b1ce) | <notextile>SI-4859 Don't elide qualifiers when selecting nested modules.</notextile>
[https://github.com/scala/scala/commit/eb4b065](eb4b065) | <notextile>Wider use of isTopLevel</notextile>
[https://github.com/scala/scala/commit/3813d75](3813d75) | <notextile>Introduce a new Symbol test: isTopLevel.</notextile>
[https://github.com/scala/scala/commit/61f2936](61f2936) | <notextile>SI-4859 Don't rewrite CC().CC2() to new CC2</notextile>
[https://github.com/scala/scala/commit/f01e001](f01e001) | <notextile>Make sure typed isn't called with an erroneous tree.</notextile>
[https://github.com/scala/scala/commit/3623432](3623432) | <notextile>Put back a method which sbt is using.</notextile>
[https://github.com/scala/scala/commit/e8d4b11](e8d4b11) | <notextile>A very interesting checkfile update.</notextile>
[https://github.com/scala/scala/commit/a8fe829](a8fe829) | <notextile>Add PolyType to Infer#normalize.</notextile>
[https://github.com/scala/scala/commit/46e8ece](46e8ece) | <notextile>Cleaning up dummy applied types and friends.</notextile>
[https://github.com/scala/scala/commit/901ac16](901ac16) | <notextile>Removing superfluous method parameters.</notextile>
[https://github.com/scala/scala/commit/5878099](5878099) | <notextile>Renamed methods to be less ambiguous in intent.</notextile>
[https://github.com/scala/scala/commit/e626ecd](e626ecd) | <notextile>Added test for untested nested annotation restriction.</notextile>
[https://github.com/scala/scala/commit/76bb23d](76bb23d) | <notextile>SI-6083, misleading annotation error message.</notextile>
[https://github.com/scala/scala/commit/801eab5](801eab5) | <notextile>SI-5182, no position on annotation error.</notextile>
[https://github.com/scala/scala/commit/832fc9a](832fc9a) | <notextile>SI-2577, SI-6860: annotation type inference.</notextile>
[https://github.com/scala/scala/commit/53d5df5](53d5df5) | <notextile>Disabled SI-6987.</notextile>
[https://github.com/scala/scala/commit/d592216](d592216) | <notextile>SI-7011 Fix finding constructor type in captured var definitions</notextile>
[https://github.com/scala/scala/commit/f6168b8](f6168b8) | <notextile>SI-6231 Report unsupported free var capture by a trait.</notextile>
[https://github.com/scala/scala/commit/1dab5bf](1dab5bf) | <notextile>SI-6987 Tests fsc verbose output</notextile>
[https://github.com/scala/scala/commit/e12a5b8](e12a5b8) | <notextile>SI-6987 Fixes fsc compile server verbose output</notextile>
[https://github.com/scala/scala/commit/1a7de43](1a7de43) | <notextile>SI-6666 Restrict hidden `this` access in self/super calls.</notextile>
[https://github.com/scala/scala/commit/cbd0205](cbd0205) | <notextile>SI-6902 Check unreachability under @unchecked</notextile>
[https://github.com/scala/scala/commit/8a74b7b](8a74b7b) | <notextile>Closes SI-6952: add correct error positions for Dynamic feature check.</notextile>
[https://github.com/scala/scala/commit/0d01cc1](0d01cc1) | <notextile>SI-6969, mishandling of SoftReferences in method cache.</notextile>
[https://github.com/scala/scala/commit/d9d6494](d9d6494) | <notextile>SI-6976 Fix value class separate compilation crasher.</notextile>
[https://github.com/scala/scala/commit/a9bbfec](a9bbfec) | <notextile>Do not recompute stack frames when instrumenting bytecode.</notextile>
[https://github.com/scala/scala/commit/b2776b4](b2776b4) | <notextile>Set `canRetransform` flag to `false` in instrumentation.</notextile>
[https://github.com/scala/scala/commit/0a967e1](0a967e1) | <notextile>Correct whitespace in `ASMTransformer.java`.</notextile>
[https://github.com/scala/scala/commit/f2e45fc](f2e45fc) | <notextile>Fix class loader issues in instrumentation tests.</notextile>
[https://github.com/scala/scala/commit/d972336](d972336) | <notextile>Use the same default scalac options in all three partest frontends</notextile>
[https://github.com/scala/scala/commit/4dceb22](4dceb22) | <notextile>[backport] Fix SI-6637 (misoptimization in erasure)</notextile>
[https://github.com/scala/scala/commit/ba411c4](ba411c4) | <notextile>[backport] Fix unsafe array opt. / opt. primitive Array(...)</notextile>
[https://github.com/scala/scala/commit/96ed055](96ed055) | <notextile>[backport] SI-6567 Warning for Option(implicitView(foo))</notextile>
[https://github.com/scala/scala/commit/3486d47](3486d47) | <notextile>SI-6439 Avoid spurious REPL warnings about companionship</notextile>
[https://github.com/scala/scala/commit/52a5328](52a5328) | <notextile>Addressing warnings.</notextile>
[https://github.com/scala/scala/commit/8f49884](8f49884) | <notextile>SI-6994 Avoid spurious promiscuous catch warning</notextile>
[https://github.com/scala/scala/commit/873aecc](873aecc) | <notextile>Fix broken build.</notextile>
[https://github.com/scala/scala/commit/8297843](8297843) | <notextile>SI-6434 Pretty print function types with by name arg as (=&gt; A) =&gt; B</notextile>
[https://github.com/scala/scala/commit/277f0fe](277f0fe) | <notextile>Removed class files.</notextile>
[https://github.com/scala/scala/commit/964776f](964776f) | <notextile>use ArrayBuffer instead of Array to build Formulae</notextile>
[https://github.com/scala/scala/commit/f539781](f539781) | <notextile>SI-6942 more efficient unreachability analysis</notextile>
[https://github.com/scala/scala/commit/c606559](c606559) | <notextile>SI-5568 Comment improvements for getClass on primitive intersection.</notextile>
[https://github.com/scala/scala/commit/765386f](765386f) | <notextile>SI-5568 Fixes verify error from getClass on refinement of value type</notextile>
[https://github.com/scala/scala/commit/b07228a](b07228a) | <notextile>SI-6601 Publicise derived value contstructor after pickler</notextile>
[https://github.com/scala/scala/commit/66fe64f](66fe64f) | <notextile>SI-6923 Context now buffers warnings as well as errors</notextile>
[https://github.com/scala/scala/commit/ce56316](ce56316) | <notextile>use Constant::isIntRange even if it's NIH</notextile>
[https://github.com/scala/scala/commit/a6b34b6](a6b34b6) | <notextile>SI-6956 determine switchability by type, not tree</notextile>
[https://github.com/scala/scala/commit/950e938](950e938) | <notextile>Revert &quot;SI-5824 Fix crashes in reify with _*&quot;</notextile>
[https://github.com/scala/scala/commit/0a25ee3](0a25ee3) | <notextile>SI-5824 Fix crashes in reify with _*</notextile>
[https://github.com/scala/scala/commit/8f1d4a5](8f1d4a5) | <notextile>Grammatical fix</notextile>
[https://github.com/scala/scala/commit/8d4402d](8d4402d) | <notextile>Remove the term &quot;pimp&quot; from the repository</notextile>
[https://github.com/scala/scala/commit/20d7a17](20d7a17) | <notextile>align partest script with ant</notextile>
[https://github.com/scala/scala/commit/a01e535](a01e535) | <notextile>Fix some typos</notextile>
[https://github.com/scala/scala/commit/76b92ef](76b92ef) | <notextile>Modifies &quot;maybeRewrap&quot; to focus more on the maybe.</notextile>
[https://github.com/scala/scala/commit/a9c374b](a9c374b) | <notextile>SI-6811 Move scala.util.{automata,regexp} ... ... to scala.xml.dtd.impl and make it private[dtd]</notextile>
[https://github.com/scala/scala/commit/a386291](a386291) | <notextile>SI-6811 Remove scala.xml.include.sax.Main</notextile>
[https://github.com/scala/scala/commit/98d3368](98d3368) | <notextile>SI-6811 Remove scala.ScalaObject</notextile>
[https://github.com/scala/scala/commit/684f549](684f549) | <notextile>SI-6811 Remove the scala.annotation.target package</notextile>
[https://github.com/scala/scala/commit/f931833](f931833) | <notextile>SI-6811 Misc. removals in util, testing, io, ...</notextile>
[https://github.com/scala/scala/commit/be5554f](be5554f) | <notextile>SI-6811 Remove deprecated elements in scala.collection</notextile>
[https://github.com/scala/scala/commit/67d7e26](67d7e26) | <notextile>SI-6811 Remove parts of scala.concurrent not needed by scala.actors</notextile>
[https://github.com/scala/scala/commit/b13bf26](b13bf26) | <notextile>SI-6811 Remove the scala.util.grammar package</notextile>
[https://github.com/scala/scala/commit/c2903d6](c2903d6) | <notextile>SI-6811 Remove scala.collection.mutable.ConcurrentMap</notextile>
[https://github.com/scala/scala/commit/ed52ea0](ed52ea0) | <notextile>SI-6811 Remove primitive widenings and /:\</notextile>
[https://github.com/scala/scala/commit/2ee8568](2ee8568) | <notextile>SI-6811 Remove deprecated constructors</notextile>
[https://github.com/scala/scala/commit/167fc0a](167fc0a) | <notextile>SI-6811 Remove usages of scala.annotation.cloneable</notextile>
[https://github.com/scala/scala/commit/4805b97](4805b97) | <notextile>SI-6811 Remove scala.annotation.serializable</notextile>
[https://github.com/scala/scala/commit/decc9a9](decc9a9) | <notextile>SI-6979 Small optimization in lub</notextile>
[https://github.com/scala/scala/commit/5d59fb9](5d59fb9) | <notextile>Disable MIMA in master.</notextile>
[https://github.com/scala/scala/commit/9cc61f3](9cc61f3) | <notextile>SI-6479 Don't lift try exprs in label arguments.</notextile>
[https://github.com/scala/scala/commit/0c2e884](0c2e884) | <notextile>SI-6963 Deprecates -Xmigration switch</notextile>
[https://github.com/scala/scala/commit/78019b2](78019b2) | <notextile>SI-6675 Test new warning under -Xoldpatmat.</notextile>
[https://github.com/scala/scala/commit/692372c](692372c) | <notextile>SI-6675 -Xlint arity enforcement for extractors</notextile>
[https://github.com/scala/scala/commit/8475807](8475807) | <notextile>SI-6955 switch emission no longer foiled by type alias</notextile>
[https://github.com/scala/scala/commit/39352fe](39352fe) | <notextile>SI-6082 Conditionally expand @ann(x) to @ann(value = x)</notextile>
[https://github.com/scala/scala/commit/4aba0fe](4aba0fe) | <notextile>SI-5440 Test case for exhaustiveness check</notextile>
[https://github.com/scala/scala/commit/1212af4](1212af4) | <notextile>SI-5340 Change println to log</notextile>
[https://github.com/scala/scala/commit/51f574a](51f574a) | <notextile>clean up synthesizePartialFunction</notextile>
[https://github.com/scala/scala/commit/e314ff1](e314ff1) | <notextile>rework partial function synthesis</notextile>
[https://github.com/scala/scala/commit/b1cea21](b1cea21) | <notextile>SI-6925 use concrete type in applyOrElse's match's selector</notextile>
[https://github.com/scala/scala/commit/8fb19b1](8fb19b1) | <notextile>SI-5189 detect unsoundness when inferring type of match</notextile>
[https://github.com/scala/scala/commit/38404e8](38404e8) | <notextile>SI-6555 Scaladoc's class filter shouldn't drop the last character</notextile>
[https://github.com/scala/scala/commit/0f237e9](0f237e9) | <notextile>SI-6930 adds documentation to reduceLeft in TraversableOnce</notextile>
[https://github.com/scala/scala/commit/57ae1f3](57ae1f3) | <notextile>SI-6905 - Switch to sneakyThrows instead of Unsafe.throwException as per new jsr166y to avoid issues with Android</notextile>
[https://github.com/scala/scala/commit/25c7364](25c7364) | <notextile>SI-6126 Test case for varargs of tagged primitives.</notextile>
[https://github.com/scala/scala/commit/79a722f](79a722f) | <notextile>SI-6946, SI-6924 Greatly improves IsTraversableLike docs</notextile>
[https://github.com/scala/scala/commit/3ef487e](3ef487e) | <notextile>SI-5954 Implementation restriction preventing companions in package objs</notextile>
[https://github.com/scala/scala/commit/a557a97](a557a97) | <notextile>Fixes SI-6521, overrides Range#head to be faster</notextile>
[https://github.com/scala/scala/commit/7a23562](7a23562) | <notextile>SI-6912 Avoid a typer cycle in overload resolution.</notextile>
[https://github.com/scala/scala/commit/e5da30b](e5da30b) | <notextile>Backport of SI-6846.</notextile>
[https://github.com/scala/scala/commit/c58647f](c58647f) | <notextile>SI-6928, VerifyError with self reference to super.</notextile>
[https://github.com/scala/scala/commit/557caa3](557caa3) | <notextile>SI-6641 Deprecate SwingWorker</notextile>
[https://github.com/scala/scala/commit/103a478](103a478) | <notextile>SI-6803: do not use java.net.URI, even more so incorrectly.</notextile>
[https://github.com/scala/scala/commit/aedec19](aedec19) | <notextile>Granted scaladoc its own Global.</notextile>
[https://github.com/scala/scala/commit/f7490d5](f7490d5) | <notextile>Restore pending repl-javap tests that now succeed under java 6.</notextile>
[https://github.com/scala/scala/commit/3bb8745](3bb8745) | <notextile>Fixes and features for javap (fixing SI-6894)</notextile>
[https://github.com/scala/scala/commit/38958f4](38958f4) | <notextile>SI-6955 switch emission no longer foiled by type alias</notextile>
[https://github.com/scala/scala/commit/b61a64d](b61a64d) | <notextile>SI-6964 Remove build managers, both simple and refined.</notextile>
[https://github.com/scala/scala/commit/f98ccad](f98ccad) | <notextile>Tweaked meta-annotation error based on feedback.</notextile>
[https://github.com/scala/scala/commit/61f70e4](61f70e4) | <notextile>SI-6375, warn on lost annotation.</notextile>
[https://github.com/scala/scala/commit/ebdc0ff](ebdc0ff) | <notextile>Cleaned up meta-annotations.</notextile>
[https://github.com/scala/scala/commit/fdca508](fdca508) | <notextile>remove hack for old patmat unnecessary in 2.11</notextile>
[https://github.com/scala/scala/commit/bd4bffa](bd4bffa) | <notextile>SI-5189 detect unsoundness when inferring type of match</notextile>
[https://github.com/scala/scala/commit/58bfa19](58bfa19) | <notextile>SI-6966 Fix regression in implicit resolution</notextile>
[https://github.com/scala/scala/commit/76aab73](76aab73) | <notextile>Fix dependant =&gt; dependent</notextile>
[https://github.com/scala/scala/commit/78bc17b](78bc17b) | <notextile>Remove EqualsPatternClass.</notextile>
[https://github.com/scala/scala/commit/143cd7a](143cd7a) | <notextile>macroExpandAll is now triggered by typed</notextile>
[https://github.com/scala/scala/commit/fe60284](fe60284) | <notextile>SI-5923 adapt macros when they are deferred</notextile>
[https://github.com/scala/scala/commit/30e2e3a](30e2e3a) | <notextile>generalizes macroExpand</notextile>
[https://github.com/scala/scala/commit/94de3c8](94de3c8) | <notextile>typedPrimaryConstrBody now returns supercall</notextile>
[https://github.com/scala/scala/commit/3d397aa](3d397aa) | <notextile>more precise errors for macros</notextile>
[https://github.com/scala/scala/commit/055b07e](055b07e) | <notextile>parentTypes =&gt; typedParentTypes</notextile>
[https://github.com/scala/scala/commit/baef456](baef456) | <notextile>changes isTermMacro checks to something more universal</notextile>
[https://github.com/scala/scala/commit/1077c92](1077c92) | <notextile>fixes printing of AppliedTypeTree</notextile>
[https://github.com/scala/scala/commit/5660b7a](5660b7a) | <notextile>adds Trees.replace(Tree, Tree)</notextile>
[https://github.com/scala/scala/commit/7550799](7550799) | <notextile>makes macro override error more consistent</notextile>
[https://github.com/scala/scala/commit/fa4531e](fa4531e) | <notextile>refactors handling of macros in repl</notextile>
[https://github.com/scala/scala/commit/66acf36](66acf36) | <notextile>SI-5903 extractor macros do work</notextile>
[https://github.com/scala/scala/commit/d17e3fc](d17e3fc) | <notextile>adds c.macroRole</notextile>
[https://github.com/scala/scala/commit/0bfb798](0bfb798) | <notextile>sbt-git-plugin has moved.</notextile>
[https://github.com/scala/scala/commit/c45491c](c45491c) | <notextile>SI-6641 Cull scala.swing.SwingWorker</notextile>
[https://github.com/scala/scala/commit/198d522](198d522) | <notextile>Made &quot;mode&quot; into a value class.</notextile>
[https://github.com/scala/scala/commit/481772d](481772d) | <notextile>Moved repl javap tests into pending.</notextile>
[https://github.com/scala/scala/commit/03caf40](03caf40) | <notextile>Renamed isTrackingVariance to trackVariance.</notextile>
[https://github.com/scala/scala/commit/31f073c](31f073c) | <notextile>SI-5378, unsoundness with type bounds in refinements.</notextile>
[https://github.com/scala/scala/commit/a419799](a419799) | <notextile>SI-6566, unsoundness with alias variance.</notextile>
[https://github.com/scala/scala/commit/567df8e](567df8e) | <notextile>Boosted test coverage.</notextile>
[https://github.com/scala/scala/commit/5d66c12](5d66c12) | <notextile>Handle variance exclusions in a less ad hoc manner.</notextile>
[https://github.com/scala/scala/commit/fb98b70](fb98b70) | <notextile>Eliminated redundant validateVariance.</notextile>
[https://github.com/scala/scala/commit/85571f6](85571f6) | <notextile>Sweeping up in Variances.</notextile>
[https://github.com/scala/scala/commit/a65dbd7](a65dbd7) | <notextile>Move isFinalType logic to Symbol.</notextile>
[https://github.com/scala/scala/commit/0693592](0693592) | <notextile>Move escaping local logic into VarianceValidator.</notextile>
[https://github.com/scala/scala/commit/882f8e6](882f8e6) | <notextile>Eliminated VariantTypeMap.</notextile>
[https://github.com/scala/scala/commit/9be6d05](9be6d05) | <notextile>Functionalization of Variance code.</notextile>
[https://github.com/scala/scala/commit/57aa63b](57aa63b) | <notextile>Moved VariantTypeMap into Variances.</notextile>
[https://github.com/scala/scala/commit/91d8584](91d8584) | <notextile>Moved Variances into SymbolTable.</notextile>
[https://github.com/scala/scala/commit/36ec5ff](36ec5ff) | <notextile>Relocated redundant variance checking code.</notextile>
[https://github.com/scala/scala/commit/ea93654](ea93654) | <notextile>Incorporated Variance value class in Variances.</notextile>
[https://github.com/scala/scala/commit/996ee33](996ee33) | <notextile>Created value class Variance.</notextile>
[https://github.com/scala/scala/commit/942f078](942f078) | <notextile>Repl javap decodes various synthetic names for us (fixing SI-6894)</notextile>
[https://github.com/scala/scala/commit/77c8751](77c8751) | <notextile>SI-6915 Updates copyright properties to 2002-2013</notextile>
[https://github.com/scala/scala/commit/2ceec33](2ceec33) | <notextile>avoid reflect overhead of certain array instantiations</notextile>
[https://github.com/scala/scala/commit/f76432a](f76432a) | <notextile>proper elementClass for WrappedArray</notextile>
[https://github.com/scala/scala/commit/3405294](3405294) | <notextile>SI-6897, lubs and varargs star.</notextile>
[https://github.com/scala/scala/commit/a6ce037](a6ce037) | <notextile>SI-6896, spurious warning with overloaded main.</notextile>
[https://github.com/scala/scala/commit/eeb6ee6](eeb6ee6) | <notextile>SI-6911, regression in generated case class equality.</notextile>
[https://github.com/scala/scala/commit/92cf0e3](92cf0e3) | <notextile>Fix Iterator#copyToArray (fixes SI-6827).</notextile>
[https://github.com/scala/scala/commit/02b2da6](02b2da6) | <notextile>SI-5017 Poor performance of :+ operator on Arrays</notextile>
[https://github.com/scala/scala/commit/ac61e34](ac61e34) | <notextile>SI-6194, repl crash.</notextile>
[https://github.com/scala/scala/commit/9575ee9](9575ee9) | <notextile>Remove -deprecation from partest default options.</notextile>
[https://github.com/scala/scala/commit/e5f16ac](e5f16ac) | <notextile>SI-6746 Fixes MANIFEST.MF package entry (s.r.makro -&gt; s.r.macros)</notextile>
[https://github.com/scala/scala/commit/9d1e22b](9d1e22b) | <notextile>Stream.zip naturalsEx example does not compile =&gt; remove extra zip call</notextile>
[https://github.com/scala/scala/commit/1364381](1364381) | <notextile>LinearSeq lengthCompare without an iterator.</notextile>
[https://github.com/scala/scala/commit/24a033b](24a033b) | <notextile>SI-6415, overly eager evaluation in Stream.</notextile>
[https://github.com/scala/scala/commit/231d59d](231d59d) | <notextile>SI-6829, SI-6788, NPEs during erroneous compilation.</notextile>
[https://github.com/scala/scala/commit/4423c59](4423c59) | <notextile>Remove stray debugging output line.</notextile>
[https://github.com/scala/scala/commit/3a6f3ae](3a6f3ae) | <notextile>SI-6338 fixes the unchecked warning in quick.comp</notextile>


      