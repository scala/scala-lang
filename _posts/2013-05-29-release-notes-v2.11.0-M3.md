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
[SI-6446](https://issues.scala-lang.org/browse/SI-6446), [SI-7494](https://issues.scala-lang.org/browse/SI-7494) | [4ab66d1](https://github.com/scala/scala/commit/4ab66d1) | <notextile>SI-7494 Tests for status quo</notextile>
[SI-7494](https://issues.scala-lang.org/browse/SI-7494) | [e0bd62c](https://github.com/scala/scala/commit/e0bd62c) | <notextile>SI-7494 Each plugin must only be instantiated once.</notextile>
[SI-7427](https://issues.scala-lang.org/browse/SI-7427) | [3fb3175](https://github.com/scala/scala/commit/3fb3175) | <notextile>SI-7427 stop crashing under -Ydebug.</notextile>
[SI-7201](https://issues.scala-lang.org/browse/SI-7201) | [08c7293](https://github.com/scala/scala/commit/08c7293) | <notextile>SI-7201 scaladoc url in scala-(library,actors,swing,reflect) pom</notextile>
[SI-6424](https://issues.scala-lang.org/browse/SI-6424) | [12a130d](https://github.com/scala/scala/commit/12a130d) | <notextile>SI-6424 Scaladoc: Use mapNodes.get(_) to avoid NoSuchElementException</notextile>
[SI-6548](https://issues.scala-lang.org/browse/SI-6548), [SI-7359](https://issues.scala-lang.org/browse/SI-7359) | [7f9feba](https://github.com/scala/scala/commit/7f9feba) | <notextile>[backport #1727] SI-7359 cyclic nested java class</notextile>
[SI-7486](https://issues.scala-lang.org/browse/SI-7486) | [dd33e28](https://github.com/scala/scala/commit/dd33e28) | <notextile>SI-7486 regression in implicit resolution.</notextile>
[SI-7492](https://issues.scala-lang.org/browse/SI-7492) | [b11324a](https://github.com/scala/scala/commit/b11324a) | <notextile>SI-7492 Remove -Ystruct-dispatch and associated code</notextile>
[SI-5459](https://issues.scala-lang.org/browse/SI-5459), [SI-1786](https://issues.scala-lang.org/browse/SI-1786) | [e28c3ed](https://github.com/scala/scala/commit/e28c3ed) | <notextile>SI-1786 incorporate defined bounds in inference</notextile>
[SI-7484](https://issues.scala-lang.org/browse/SI-7484) | [9db9df7](https://github.com/scala/scala/commit/9db9df7) | <notextile>SI-7484 Indentation and whitespace fixes</notextile>
[SI-7484](https://issues.scala-lang.org/browse/SI-7484) | [cba29e6](https://github.com/scala/scala/commit/cba29e6) | <notextile>SI-7484 Add @SupressWarning(rawtypes/unchecked)</notextile>
[SI-6488](https://issues.scala-lang.org/browse/SI-6488) | [538aa22](https://github.com/scala/scala/commit/538aa22) | <notextile>SI-6488 Interrupt i/o threads on process destroy</notextile>
[SI-7464](https://issues.scala-lang.org/browse/SI-7464) | [5e71539](https://github.com/scala/scala/commit/5e71539) | <notextile>SI-7464 allows FieldMirror.set to update vals</notextile>
[SI-5886](https://issues.scala-lang.org/browse/SI-5886) | [e9c3f87](https://github.com/scala/scala/commit/e9c3f87) | <notextile>SI-5886 Remove check for packed type conformance.</notextile>
[SI-6555](https://issues.scala-lang.org/browse/SI-6555) | [963c4a7](https://github.com/scala/scala/commit/963c4a7) | <notextile>Actual SI-6555 fix, Scaladoc filter works WITH keyboard shortcuts too</notextile>
[SI-7383](https://issues.scala-lang.org/browse/SI-7383) | [b32d294](https://github.com/scala/scala/commit/b32d294) | <notextile>SI-7383 - Call ExecutionContext.prepare in Future.apply to allow for capturing local context like ThreadLocals and then re-establishing them prior to execution, as per intention of EC.prepare</notextile>
[SI-7438](https://issues.scala-lang.org/browse/SI-7438), [SI-7442](https://issues.scala-lang.org/browse/SI-7442) | [77437ff](https://github.com/scala/scala/commit/77437ff) | <notextile>SI-7442 Update bundled Fork/Join pool (JSR166y)</notextile>
[SI-7166](https://issues.scala-lang.org/browse/SI-7166) | [3edde27](https://github.com/scala/scala/commit/3edde27) | <notextile>[nomaster] SI-7166 catches DivergentImplicit in c.inferImplicitXXX</notextile>
[SI-7047](https://issues.scala-lang.org/browse/SI-7047) | [b4da864](https://github.com/scala/scala/commit/b4da864) | <notextile>[nomaster] SI-7047 fixes silent for c.inferImplicitXXX</notextile>
[SI-7291](https://issues.scala-lang.org/browse/SI-7291), [SI-7291](https://issues.scala-lang.org/browse/SI-7291), [SI-7291](https://issues.scala-lang.org/browse/SI-7291), [SI-7291](https://issues.scala-lang.org/browse/SI-7291) | [fdead2b](https://github.com/scala/scala/commit/fdead2b) | <notextile>[nomaster] SI-7291: No exception throwing for diverging implicit expansion</notextile>
[SI-7167](https://issues.scala-lang.org/browse/SI-7167) | [8168f11](https://github.com/scala/scala/commit/8168f11) | <notextile>[nomaster] SI-7167 implicit macros decide what is divergence</notextile>
[SI-5923](https://issues.scala-lang.org/browse/SI-5923) | [90ac5c4](https://github.com/scala/scala/commit/90ac5c4) | <notextile>[nomaster] SI-5923 instantiates targs in deferred macro applications</notextile>
[SI-5923](https://issues.scala-lang.org/browse/SI-5923), [SI-5353](https://issues.scala-lang.org/browse/SI-5353), [SI-5923](https://issues.scala-lang.org/browse/SI-5923), [SI-5923](https://issues.scala-lang.org/browse/SI-5923), [SI-5353](https://issues.scala-lang.org/browse/SI-5353), [SI-7453](https://issues.scala-lang.org/browse/SI-7453), [SI-5923](https://issues.scala-lang.org/browse/SI-5923), [SI-5353](https://issues.scala-lang.org/browse/SI-5353), [SI-3859](https://issues.scala-lang.org/browse/SI-3859), [SI-5353](https://issues.scala-lang.org/browse/SI-5353), [SI-5353](https://issues.scala-lang.org/browse/SI-5353) | [0c6927b](https://github.com/scala/scala/commit/0c6927b) | <notextile>[nomaster] temporarily breaks SI-5353</notextile>
[SI-7465](https://issues.scala-lang.org/browse/SI-7465) | [a3d03ab](https://github.com/scala/scala/commit/a3d03ab) | <notextile>fixes a crash in ReflectionUtils.systemProperties</notextile>
[SI-5734](https://issues.scala-lang.org/browse/SI-5734) | [8325729](https://github.com/scala/scala/commit/8325729) | <notextile>SI-5734 Allow setting of socket timeout for remote actors</notextile>
[SI-7398](https://issues.scala-lang.org/browse/SI-7398) | [b2c67b3](https://github.com/scala/scala/commit/b2c67b3) | <notextile>SI-7398 Add support for java8 default methods</notextile>
[SI-7271](https://issues.scala-lang.org/browse/SI-7271), [SI-7325](https://issues.scala-lang.org/browse/SI-7325) | [cb1a427](https://github.com/scala/scala/commit/cb1a427) | <notextile>SI-7325 cleans up corner cases of percent handling in StringContext.f</notextile>
[SI-7271](https://issues.scala-lang.org/browse/SI-7271) | [a8edefc](https://github.com/scala/scala/commit/a8edefc) | <notextile>SI-7271 fixes positions of string interpolation parts</notextile>
[SI-7426](https://issues.scala-lang.org/browse/SI-7426) | [df3cae7](https://github.com/scala/scala/commit/df3cae7) | <notextile>SI-7426 Crash in pickler.</notextile>
[SI-5634](https://issues.scala-lang.org/browse/SI-5634) | [3abdaf4](https://github.com/scala/scala/commit/3abdaf4) | <notextile>SI-5634 eliminate overly verbose error message</notextile>
[SI-7441](https://issues.scala-lang.org/browse/SI-7441) | [e86832d](https://github.com/scala/scala/commit/e86832d) | <notextile>SI-7441 Don't ramble on about inapplicable implicits.</notextile>
[SI-7385](https://issues.scala-lang.org/browse/SI-7385) | [d0a1f5b](https://github.com/scala/scala/commit/d0a1f5b) | <notextile>SI-7385 crash in erroneous code</notextile>
[SI-6091](https://issues.scala-lang.org/browse/SI-6091) | [62cdd7f](https://github.com/scala/scala/commit/62cdd7f) | <notextile>SI-6091 overeager warning for reference equality</notextile>
[SI-6771](https://issues.scala-lang.org/browse/SI-6771) | [3009916](https://github.com/scala/scala/commit/3009916) | <notextile>SI-6771 Alias awareness for checkableType in match analysis.</notextile>
[SI-7469](https://issues.scala-lang.org/browse/SI-7469) | [e36bb0b](https://github.com/scala/scala/commit/e36bb0b) | <notextile>Revert &quot;SI-7469 Remove @deprecated MurmurHash elements&quot;</notextile>
[SI-7482](https://issues.scala-lang.org/browse/SI-7482) | [37884ec](https://github.com/scala/scala/commit/37884ec) | <notextile>SI-7482 Don't cook raw types after erasure.</notextile>
[SI-6815](https://issues.scala-lang.org/browse/SI-6815), [SI-6815](https://issues.scala-lang.org/browse/SI-6815) | [fada1ef](https://github.com/scala/scala/commit/fada1ef) | <notextile>SI-6815 untangle isStable and hasVolatileType</notextile>
[SI-6406](https://issues.scala-lang.org/browse/SI-6406), [SI-6406](https://issues.scala-lang.org/browse/SI-6406) | [135cfa8](https://github.com/scala/scala/commit/135cfa8) | <notextile>SI-6406 Restore deprecated API</notextile>
[SI-3943](https://issues.scala-lang.org/browse/SI-3943) | [0c7c521](https://github.com/scala/scala/commit/0c7c521) | <notextile>SI-3943 Test case for already-fixed Java interop bug</notextile>
[SI-7469](https://issues.scala-lang.org/browse/SI-7469) | [ae43506](https://github.com/scala/scala/commit/ae43506) | <notextile>SI-7469 Remove @deprecated scala.util.logging</notextile>
[SI-7476](https://issues.scala-lang.org/browse/SI-7476) | [4478560](https://github.com/scala/scala/commit/4478560) | <notextile>SI-7476 Add documentation to GenericTraversableTemplate</notextile>
[SI-7469](https://issues.scala-lang.org/browse/SI-7469) | [ac990c1](https://github.com/scala/scala/commit/ac990c1) | <notextile>SI-7469 Make @deprecated elems in scala.concurrent private[scala]</notextile>
[SI-7469](https://issues.scala-lang.org/browse/SI-7469) | [e544786](https://github.com/scala/scala/commit/e544786) | <notextile>SI-7469 Remove deprecated elements in s.u.parsing.combinator</notextile>
[SI-7469](https://issues.scala-lang.org/browse/SI-7469) | [7e9c21f](https://github.com/scala/scala/commit/7e9c21f) | <notextile>SI-7469 Remove @deprecated MurmurHash elements</notextile>
[SI-7047](https://issues.scala-lang.org/browse/SI-7047) | [b153880](https://github.com/scala/scala/commit/b153880) | <notextile>SI-7047 fixes silent for c.inferImplicitXXX</notextile>
[SI-7167](https://issues.scala-lang.org/browse/SI-7167) | [c539ae2](https://github.com/scala/scala/commit/c539ae2) | <notextile>SI-7167 implicit macros decide what is divergence</notextile>
[SI-5923](https://issues.scala-lang.org/browse/SI-5923), [SI-5923](https://issues.scala-lang.org/browse/SI-5923) | [adef4b5](https://github.com/scala/scala/commit/adef4b5) | <notextile>SI-5923 instantiates targs in deferred macro applications</notextile>
[SI-6039](https://issues.scala-lang.org/browse/SI-6039) | [b0758f5](https://github.com/scala/scala/commit/b0758f5) | <notextile>SI-6039 Harden against irrelevant filesystem details</notextile>
[SI-7469](https://issues.scala-lang.org/browse/SI-7469) | [0ee9204](https://github.com/scala/scala/commit/0ee9204) | <notextile>SI-7469 Remove @deprecated scala.util.parsing.ast</notextile>
[SI-6149](https://issues.scala-lang.org/browse/SI-6149) | [15df9e9](https://github.com/scala/scala/commit/15df9e9) | <notextile>Limit unnecessary calls to Type#toString.</notextile>
[SI-7432](https://issues.scala-lang.org/browse/SI-7432) | [6890f38](https://github.com/scala/scala/commit/6890f38) | <notextile>SI-7432 add testcases</notextile>
[SI-7432](https://issues.scala-lang.org/browse/SI-7432) | [357c2df](https://github.com/scala/scala/commit/357c2df) | <notextile>SI-7432 Range.min should throw NoSuchElementException on empty range</notextile>
[SI-6863](https://issues.scala-lang.org/browse/SI-6863), [SI-6863](https://issues.scala-lang.org/browse/SI-6863), [SI-6863](https://issues.scala-lang.org/browse/SI-6863) | [265fc6b](https://github.com/scala/scala/commit/265fc6b) | <notextile>SI-6863 root cause fixed using factory of scala.runtime.*Ref</notextile>
[SI-6532](https://issues.scala-lang.org/browse/SI-6532) | [17f8101](https://github.com/scala/scala/commit/17f8101) | <notextile>SI-6532 emit debug info in compiled java.</notextile>
[SI-7369](https://issues.scala-lang.org/browse/SI-7369) | [6271396](https://github.com/scala/scala/commit/6271396) | <notextile>SI-7369 Avoid spurious unreachable warnings in patterns</notextile>
[SI-7367](https://issues.scala-lang.org/browse/SI-7367) | [184cac8](https://github.com/scala/scala/commit/184cac8) | <notextile>SI-7367 scaladoc crash on constructing the model for annotations.</notextile>
[SI-6943](https://issues.scala-lang.org/browse/SI-6943) | [8448beb](https://github.com/scala/scala/commit/8448beb) | <notextile>SI-6943 warn on value class miscomparison.</notextile>
[SI-6675](https://issues.scala-lang.org/browse/SI-6675), [SI-6675](https://issues.scala-lang.org/browse/SI-6675) | [c1327dc](https://github.com/scala/scala/commit/c1327dc) | <notextile>SI-6675 Avoid spurious warning about pattern bind arity.</notextile>
[SI-7355](https://issues.scala-lang.org/browse/SI-7355) | [0d2c7e9](https://github.com/scala/scala/commit/0d2c7e9) | <notextile>SI-7355 Handle spaces in paths in Windows batch files.</notextile>
[SI-7330](https://issues.scala-lang.org/browse/SI-7330) | [e7aadd0](https://github.com/scala/scala/commit/e7aadd0) | <notextile>SI-7330 better error when pattern isn't a value</notextile>
[SI-7200](https://issues.scala-lang.org/browse/SI-7200) | [8703e00](https://github.com/scala/scala/commit/8703e00) | <notextile>SI-7200 Test case for fixed type inference error.</notextile>
[SI-7362](https://issues.scala-lang.org/browse/SI-7362) | [e6af9bc](https://github.com/scala/scala/commit/e6af9bc) | <notextile>SI-7362, crash in presentation compiler.</notextile>
[SI-7409](https://issues.scala-lang.org/browse/SI-7409) | [6227837](https://github.com/scala/scala/commit/6227837) | <notextile>SI-7409 Par-Test: A crash is not a DNC for neg tests</notextile>
[SI-7349](https://issues.scala-lang.org/browse/SI-7349) | [bf44669](https://github.com/scala/scala/commit/bf44669) | <notextile>SI-7349 Partest supports test-interface</notextile>
[SI-7358](https://issues.scala-lang.org/browse/SI-7358) | [e4f62c0](https://github.com/scala/scala/commit/e4f62c0) | <notextile>SI-7358 Partest fails on scalacheck failure</notextile>
[SI-7422](https://issues.scala-lang.org/browse/SI-7422) | [d516f38](https://github.com/scala/scala/commit/d516f38) | <notextile>SI-7422 GenASM populates and clears its maps within a Run</notextile>
[SI-7291](https://issues.scala-lang.org/browse/SI-7291) | [7158142](https://github.com/scala/scala/commit/7158142) | <notextile>SI-7291: Remove error kinds.</notextile>
[SI-7291](https://issues.scala-lang.org/browse/SI-7291), [SI-7291](https://issues.scala-lang.org/browse/SI-7291) | [accaa31](https://github.com/scala/scala/commit/accaa31) | <notextile>SI-7291: No exception throwing for diverging implicit expansion</notextile>
[SI-7429](https://issues.scala-lang.org/browse/SI-7429) | [f59be7a](https://github.com/scala/scala/commit/f59be7a) | <notextile>SI-7429 Fix checkinit build failure in Contexts</notextile>
[SI-6784](https://issues.scala-lang.org/browse/SI-6784) | [2e5c7b9](https://github.com/scala/scala/commit/2e5c7b9) | <notextile>SI-6784 Localize feature imports in scala.swing.</notextile>
[SI-7421](https://issues.scala-lang.org/browse/SI-7421) | [8f08151](https://github.com/scala/scala/commit/8f08151) | <notextile>SI-7421 remove unneeded extra-attachement in maven deploy</notextile>
[SI-7403](https://issues.scala-lang.org/browse/SI-7403) | [bdae05f](https://github.com/scala/scala/commit/bdae05f) | <notextile>SI-7403 Stream extends Serializable</notextile>
[SI-4365](https://issues.scala-lang.org/browse/SI-4365) | [7b4e450](https://github.com/scala/scala/commit/7b4e450) | <notextile>SI-4365 nondeterministic failure in asSeenFrom</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [648784c](https://github.com/scala/scala/commit/648784c) | <notextile>SI-7345 Address review comments.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [c598e76](https://github.com/scala/scala/commit/c598e76) | <notextile>SI-7345 Improved Context.toString</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [85af192](https://github.com/scala/scala/commit/85af192) | <notextile>SI-7345 Eliminate the `depth` var.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [2304a78](https://github.com/scala/scala/commit/2304a78) | <notextile>SI-7345 Drive by refactoring of pattern matching for `arg: _*`.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [e112db6](https://github.com/scala/scala/commit/e112db6) | <notextile>SI-7345 Factor out method to clear and restore undetparams.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [0ce81c8](https://github.com/scala/scala/commit/0ce81c8) | <notextile>SI-7345 Remove unneeded warning.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [ec33ad0](https://github.com/scala/scala/commit/ec33ad0) | <notextile>SI-7345 Doc and TODO comments around Context.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [dbd8457](https://github.com/scala/scala/commit/dbd8457) | <notextile>SI-7345 Produce Context#imports from the context chain</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [78e7eba](https://github.com/scala/scala/commit/78e7eba) | <notextile>SI-7345 Refactor manual iteration to use foreach.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [7ce4de4](https://github.com/scala/scala/commit/7ce4de4) | <notextile>SI-7345 Move `inSilentMode` from Infer to Context.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [bba9d3d](https://github.com/scala/scala/commit/bba9d3d) | <notextile>SI-7345 remove unused methods.</notextile>
[SI-7319](https://issues.scala-lang.org/browse/SI-7319), [SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [510ebec](https://github.com/scala/scala/commit/510ebec) | <notextile>SI-7345 Prefer using a throwaway silent context over buffer flushing.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [ec5eaee](https://github.com/scala/scala/commit/ec5eaee) | <notextile>SI-7345 More refactoring and documentation in Contexts</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [190aea9](https://github.com/scala/scala/commit/190aea9) | <notextile>SI-7345 Exploit named/default args   - Collapse overloads of `rootContext`   - make `atOwner` more concise</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [c9f5ab0](https://github.com/scala/scala/commit/c9f5ab0) | <notextile>SI-7345 Encapsulate warning and error buffers in ReportBuffer.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [ff5dde1](https://github.com/scala/scala/commit/ff5dde1) | <notextile>SI-7345 Add Context#isLocal, akin to Symbol#isLocal</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [b1cb004](https://github.com/scala/scala/commit/b1cb004) | <notextile>SI-7345 Use combinator to find next enclosing non-template.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [281b850](https://github.com/scala/scala/commit/281b850) | <notextile>SI-7345 Remove comment that appears obsolete.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [f2c351c](https://github.com/scala/scala/commit/f2c351c) | <notextile>SI-7345 Rationalize overloads of Context#make</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [e658b63](https://github.com/scala/scala/commit/e658b63) | <notextile>SI-7345 Represent the boolean modes in Context in ContextMode.</notextile>
[SI-7402](https://issues.scala-lang.org/browse/SI-7402) | [372965b](https://github.com/scala/scala/commit/372965b) | <notextile>SI-7402 List extends Serializable</notextile>
[SI-6898](https://issues.scala-lang.org/browse/SI-6898) | [6f47caf](https://github.com/scala/scala/commit/6f47caf) | <notextile>SI-6898 Document AnyVal box and unbox implemention by BoxesRunTime</notextile>
[SI-7408](https://issues.scala-lang.org/browse/SI-7408) | [5c6d62a](https://github.com/scala/scala/commit/5c6d62a) | <notextile>SI-7408 Fix test by sorting results of getDeclaredClasses</notextile>
[SI-7376](https://issues.scala-lang.org/browse/SI-7376) | [12a18ee](https://github.com/scala/scala/commit/12a18ee) | <notextile>SI-7376 Bad doc variable error is positioned at the variable.</notextile>
[SI-7376](https://issues.scala-lang.org/browse/SI-7376) | [fecc7e0](https://github.com/scala/scala/commit/fecc7e0) | <notextile>SI-7376 Additional trivial Scaladoc format corrections</notextile>
[SI-7376](https://issues.scala-lang.org/browse/SI-7376) | [3f0a90b](https://github.com/scala/scala/commit/3f0a90b) | <notextile>SI-7376 Unmoored doc has correct position</notextile>
[SI-7376](https://issues.scala-lang.org/browse/SI-7376) | [0fde95e](https://github.com/scala/scala/commit/0fde95e) | <notextile>SI-7376 Scaladoc warns when discarding local doc comments with API tags</notextile>
[SI-7080](https://issues.scala-lang.org/browse/SI-7080) | [e8c85a3](https://github.com/scala/scala/commit/e8c85a3) | <notextile>SI-7080 improve boundary value checking for BitSet</notextile>
[SI-7324](https://issues.scala-lang.org/browse/SI-7324) | [5cc2eb8](https://github.com/scala/scala/commit/5cc2eb8) | <notextile>SI-7324 jvm not cool with 255+ parameters</notextile>
[SI-7337](https://issues.scala-lang.org/browse/SI-7337) | [f93c4c9](https://github.com/scala/scala/commit/f93c4c9) | <notextile>SI-7337 Error out on missing -d directory.</notextile>
[SI-7319](https://issues.scala-lang.org/browse/SI-7319), [SI-7319](https://issues.scala-lang.org/browse/SI-7319) | [578ef1f](https://github.com/scala/scala/commit/578ef1f) | <notextile>SI-7319 Remove unused method.</notextile>
[SI-7377](https://issues.scala-lang.org/browse/SI-7377) | [962f88e](https://github.com/scala/scala/commit/962f88e) | <notextile>SI-7377 Remove special treatment of `stableFun()` in patterns.</notextile>
[SI-7388](https://issues.scala-lang.org/browse/SI-7388) | [3e27fec](https://github.com/scala/scala/commit/3e27fec) | <notextile>SI-7388 Be more robust against cycles in error symbol creation.</notextile>
[SI-7377](https://issues.scala-lang.org/browse/SI-7377) | [15e9ef8](https://github.com/scala/scala/commit/15e9ef8) | <notextile>SI-7377 Fix retypechecking of patterns on case companion alias</notextile>
[SI-7319](https://issues.scala-lang.org/browse/SI-7319), [SI-7319](https://issues.scala-lang.org/browse/SI-7319) | [ef04619](https://github.com/scala/scala/commit/ef04619) | <notextile>SI-7319 Clear error buffer during Typer reset.</notextile>
[SI-7329](https://issues.scala-lang.org/browse/SI-7329) | [aa6723c](https://github.com/scala/scala/commit/aa6723c) | <notextile>SI-7329 duplicate default getters for specialized parameters.</notextile>
[SI-7314](https://issues.scala-lang.org/browse/SI-7314) | [01edd04](https://github.com/scala/scala/commit/01edd04) | <notextile>SI-7314 Partest locates tools.jar and javac</notextile>
[SI-7312](https://issues.scala-lang.org/browse/SI-7312), [SI-7315](https://issues.scala-lang.org/browse/SI-7315) | 660c8fd | <notextile>SI-7315 Test @deprecatedInheritance / @specialized interplay</notextile>
[SI-7312](https://issues.scala-lang.org/browse/SI-7312) | [54d11fe](https://github.com/scala/scala/commit/54d11fe) | <notextile>SI-7312 @deprecatedInheritance now ignores same-file subclasses</notextile>
[SI-7335](https://issues.scala-lang.org/browse/SI-7335) | [6690455](https://github.com/scala/scala/commit/6690455) | <notextile>SI-7335 Remove special case for import of Predef._ in Predef.scala</notextile>
[SI-7335](https://issues.scala-lang.org/browse/SI-7335) | [b0fceeb](https://github.com/scala/scala/commit/b0fceeb) | <notextile>SI-7335 Sharpen up comment about implicit prioritization.</notextile>
[SI-7335](https://issues.scala-lang.org/browse/SI-7335) | [ae69de4](https://github.com/scala/scala/commit/ae69de4) | <notextile>SI-7335 Add logging for a now-impossible* case in Symbol#exists.</notextile>
[SI-7335](https://issues.scala-lang.org/browse/SI-7335) | [9d7f811](https://github.com/scala/scala/commit/9d7f811) | <notextile>SI-7335 Don't import Predef._ in Predef.scala</notextile>
[SI-7335](https://issues.scala-lang.org/browse/SI-7335) | [d43f5ce](https://github.com/scala/scala/commit/d43f5ce) | <notextile>SI-7335 Mandate that parents of Predef must be defined in Predef.scala</notextile>
[SI-6286](https://issues.scala-lang.org/browse/SI-6286) | [67c2d6d](https://github.com/scala/scala/commit/67c2d6d) | <notextile>SI-6286 IllegalArgumentException handling specialized method.</notextile>
[SI-7360](https://issues.scala-lang.org/browse/SI-7360) | [23dd325](https://github.com/scala/scala/commit/23dd325) | <notextile>SI-7360 Don't let a follow-up TypeError obscure the original error.</notextile>
[SI-6387](https://issues.scala-lang.org/browse/SI-6387) | [2885eb0](https://github.com/scala/scala/commit/2885eb0) | <notextile>Revert &quot;SI-6387 Clones accessor before name expansion&quot;</notextile>
[SI-6386](https://issues.scala-lang.org/browse/SI-6386) | [7250312](https://github.com/scala/scala/commit/7250312) | <notextile>SI-6386 typed existential type tree's original now have tpe set</notextile>
[SI-7289](https://issues.scala-lang.org/browse/SI-7289) | [6a61e17](https://github.com/scala/scala/commit/6a61e17) | <notextile>SI-7289 Less strict type application for TypeVar.</notextile>
[SI-6937](https://issues.scala-lang.org/browse/SI-6937) | [34a6fa9](https://github.com/scala/scala/commit/34a6fa9) | <notextile>SI-6937 core type tags are no longer referentially unique</notextile>
[SI-7321](https://issues.scala-lang.org/browse/SI-7321) | [0affa94](https://github.com/scala/scala/commit/0affa94) | <notextile>SI-7321 Memory leak in specialize on multiple compiler runs.</notextile>
[SI-6900](https://issues.scala-lang.org/browse/SI-6900) | [c2534bf](https://github.com/scala/scala/commit/c2534bf) | <notextile>SI-6900 Fix tailrec for dependent method types</notextile>
[SI-6135](https://issues.scala-lang.org/browse/SI-6135) | [d7545ec](https://github.com/scala/scala/commit/d7545ec) | <notextile>Simplify interplay between Uncurry Info- and Tree-Transformers</notextile>
[SI-7316](https://issues.scala-lang.org/browse/SI-7316) | [61308be](https://github.com/scala/scala/commit/61308be) | <notextile>Take the N^2 out of the compiler's TreeSet.</notextile>
[SI-7147](https://issues.scala-lang.org/browse/SI-7147) | [d21f90c](https://github.com/scala/scala/commit/d21f90c) | <notextile>SI-7147 Diagnostic for unexplained assertion in presentation compiler.</notextile>
[SI-6793](https://issues.scala-lang.org/browse/SI-6793) | [ca9c8ef](https://github.com/scala/scala/commit/ca9c8ef) | <notextile>SI-6793 Don't use super param accessors if inaccessible.</notextile>
[SI-6715](https://issues.scala-lang.org/browse/SI-6715) | [5f9bc05](https://github.com/scala/scala/commit/5f9bc05) | <notextile>SI-6715 Shouldn't return &quot;&quot; from TermNames.originalName</notextile>
[SI-6715](https://issues.scala-lang.org/browse/SI-6715) | [8e83703](https://github.com/scala/scala/commit/8e83703) | <notextile>Backport #2289's TermNames.unexpandedName as TermNames.originalName</notextile>
[SI-7300](https://issues.scala-lang.org/browse/SI-7300) | [dfdbfa7](https://github.com/scala/scala/commit/dfdbfa7) | <notextile>SI-7300 single line comment in multi line comment</notextile>
[SI-6289](https://issues.scala-lang.org/browse/SI-6289) | [0d95443](https://github.com/scala/scala/commit/0d95443) | <notextile>SI-6289 Paulptest demonstrating javac errors</notextile>
[SI-6289](https://issues.scala-lang.org/browse/SI-6289) | [c6ce617](https://github.com/scala/scala/commit/c6ce617) | <notextile>SI-6289 Partest in technicolor and showing javac errors</notextile>
[SI-7110](https://issues.scala-lang.org/browse/SI-7110) | [530f4a5](https://github.com/scala/scala/commit/530f4a5) | <notextile>SI-7110 Warn about naked try without catch/finally</notextile>
[SI-7237](https://issues.scala-lang.org/browse/SI-7237) | [29a9c64](https://github.com/scala/scala/commit/29a9c64) | <notextile>SI-7237 Always choose ForkJoinTaskSupport</notextile>
[SI-7261](https://issues.scala-lang.org/browse/SI-7261) | [22944e4](https://github.com/scala/scala/commit/22944e4) | <notextile>SI-7261 Implicit conversion of BooleanSetting to Boolean and BooleanFlag</notextile>
[SI-7261](https://issues.scala-lang.org/browse/SI-7261) | [e073975](https://github.com/scala/scala/commit/e073975) | <notextile>SI-7261 Implicit conversion of BooleanSetting to Boolean and BooleanFlag</notextile>
[SI-6168](https://issues.scala-lang.org/browse/SI-6168) | [edee27f](https://github.com/scala/scala/commit/edee27f) | <notextile>SI-6168 Retain prefix when parsing types in JVM signatures</notextile>
[SI-6146](https://issues.scala-lang.org/browse/SI-6146), [SI-7285](https://issues.scala-lang.org/browse/SI-7285) | [dd89b00](https://github.com/scala/scala/commit/dd89b00) | <notextile>SI-7285 Fix match analysis with nested objects.</notextile>
[SI-6124](https://issues.scala-lang.org/browse/SI-6124), [SI-7285](https://issues.scala-lang.org/browse/SI-7285) | [499962d](https://github.com/scala/scala/commit/499962d) | <notextile>Expand test for SI-6124 to demonstrate cause of SI-7285.</notextile>
[SI-7290](https://issues.scala-lang.org/browse/SI-7290) | [c3ad5af](https://github.com/scala/scala/commit/c3ad5af) | <notextile>SI-7290 Minor cleanups driven by review comments.</notextile>
[SI-7290](https://issues.scala-lang.org/browse/SI-7290) | [2e0be83](https://github.com/scala/scala/commit/2e0be83) | <notextile>SI-7290 Discard duplicates in switchable alternative patterns.</notextile>
[SI-6387](https://issues.scala-lang.org/browse/SI-6387) | [4e10b2c](https://github.com/scala/scala/commit/4e10b2c) | <notextile>SI-6387 Clones accessor before name expansion</notextile>
[SI-7237](https://issues.scala-lang.org/browse/SI-7237) | [67b8de7](https://github.com/scala/scala/commit/67b8de7) | <notextile>[backport] SI-7237 Always choose ForkJoinTaskSupport</notextile>
[SI-7246](https://issues.scala-lang.org/browse/SI-7246) | [cd9e03a](https://github.com/scala/scala/commit/cd9e03a) | <notextile>SI-7246 Make $outer pointer elision Java aware</notextile>
[SI-7299](https://issues.scala-lang.org/browse/SI-7299) | [b95ca32](https://github.com/scala/scala/commit/b95ca32) | <notextile>SI-7299 Improve error message for eta-expanding 23+ param method</notextile>
[SI-6580](https://issues.scala-lang.org/browse/SI-6580), [SI-6580](https://issues.scala-lang.org/browse/SI-6580) | [b4344e1](https://github.com/scala/scala/commit/b4344e1) | <notextile>SI-6580 Scaladoc: Should not close void elements</notextile>
[SI-6022](https://issues.scala-lang.org/browse/SI-6022), [SI-6210](https://issues.scala-lang.org/browse/SI-6210) | [47fc00d](https://github.com/scala/scala/commit/47fc00d) | <notextile>SI-6210 Test case for already-fixed pattern matcher bug</notextile>
[SI-7013](https://issues.scala-lang.org/browse/SI-7013) | [df29290](https://github.com/scala/scala/commit/df29290) | <notextile>SI-7013 Scaladoc: Fix StackOverflowError</notextile>
[SI-7253](https://issues.scala-lang.org/browse/SI-7253) | [6f4a594](https://github.com/scala/scala/commit/6f4a594) | <notextile>SI-7253: update comments and naming</notextile>
[SI-7253](https://issues.scala-lang.org/browse/SI-7253) | [386a5bd](https://github.com/scala/scala/commit/386a5bd) | <notextile>SI-7253: respect binary compatibility constraints</notextile>
[SI-5699](https://issues.scala-lang.org/browse/SI-5699) | [50ee635](https://github.com/scala/scala/commit/50ee635) | <notextile>SI-5699 correct java parser for annotation defs.</notextile>
[SI-3994](https://issues.scala-lang.org/browse/SI-3994), [SI-7242](https://issues.scala-lang.org/browse/SI-7242) | [2b5fde7](https://github.com/scala/scala/commit/2b5fde7) | <notextile>SI-7242 Fix crash when inner object mixes in its companion</notextile>
[SI-7258](https://issues.scala-lang.org/browse/SI-7258) | [ef85a10](https://github.com/scala/scala/commit/ef85a10) | <notextile>SI-7258 Don't assume order of reflection values in t6223</notextile>
[SI-3120](https://issues.scala-lang.org/browse/SI-3120), [SI-3120](https://issues.scala-lang.org/browse/SI-3120), [SI-7259](https://issues.scala-lang.org/browse/SI-7259) | [f046853](https://github.com/scala/scala/commit/f046853) | <notextile>SI-7259 Fix detection of Java defined Selects</notextile>
[SI-1247](https://issues.scala-lang.org/browse/SI-1247), [SI-7249](https://issues.scala-lang.org/browse/SI-7249) | [552b623](https://github.com/scala/scala/commit/552b623) | <notextile>SI-7249 Reign in overzealous Function0 optimization.</notextile>
[SI-5464](https://issues.scala-lang.org/browse/SI-5464), [SI-7176](https://issues.scala-lang.org/browse/SI-7176), [SI-6921](https://issues.scala-lang.org/browse/SI-6921), [SI-7239](https://issues.scala-lang.org/browse/SI-7239) | [174334b](https://github.com/scala/scala/commit/174334b) | <notextile>SI-6921 SI-7239 Tread lightly during exploratory typing</notextile>
[SI-7232](https://issues.scala-lang.org/browse/SI-7232) | [6e79370](https://github.com/scala/scala/commit/6e79370) | <notextile>SI-7232 Fix Java import vs defn. binding precendence</notextile>
[SI-7232](https://issues.scala-lang.org/browse/SI-7232) | [8383b65](https://github.com/scala/scala/commit/8383b65) | <notextile>SI-7232 Fix Java import vs defn. binding precendence</notextile>
[SI-3120](https://issues.scala-lang.org/browse/SI-3120), [SI-3120](https://issues.scala-lang.org/browse/SI-3120), [SI-7259](https://issues.scala-lang.org/browse/SI-7259) | [7d03dcc](https://github.com/scala/scala/commit/7d03dcc) | <notextile>SI-7259 Fix detection of Java defined Selects</notextile>
[SI-7296](https://issues.scala-lang.org/browse/SI-7296) | [844cef6](https://github.com/scala/scala/commit/844cef6) | <notextile>SI-7296 Remove arity limit for case classes</notextile>
[SI-7296](https://issues.scala-lang.org/browse/SI-7296) | [ad79d74](https://github.com/scala/scala/commit/ad79d74) | <notextile>SI-7296 Avoid crash with nested 23-param case class</notextile>
[SI-7251](https://issues.scala-lang.org/browse/SI-7251), [SI-7251](https://issues.scala-lang.org/browse/SI-7251) | [395e90a](https://github.com/scala/scala/commit/395e90a) | <notextile>SI-7251, compiler crash with $.</notextile>
[SI-7240](https://issues.scala-lang.org/browse/SI-7240) | [a4fb773](https://github.com/scala/scala/commit/a4fb773) | <notextile>SI-7240 fixes language feature lookup</notextile>
[SI-7233](https://issues.scala-lang.org/browse/SI-7233) | [41e3b89](https://github.com/scala/scala/commit/41e3b89) | <notextile>SI-7233 Account for aliased imports in Erasure</notextile>
[SI-7233](https://issues.scala-lang.org/browse/SI-7233) | [33b499c](https://github.com/scala/scala/commit/33b499c) | <notextile>SI-7233 Account for aliased imports in eta expansion.</notextile>
[SI-6725](https://issues.scala-lang.org/browse/SI-6725) | [9bc17e7](https://github.com/scala/scala/commit/9bc17e7) | <notextile>SI-6725 `f` interpolator now supports %n tokens</notextile>
[SI-7132](https://issues.scala-lang.org/browse/SI-7132) | [eb365f9](https://github.com/scala/scala/commit/eb365f9) | <notextile>SI-7132 - don't discard Unit type in interpreter</notextile>
[SI-7233](https://issues.scala-lang.org/browse/SI-7233), [SI-7302](https://issues.scala-lang.org/browse/SI-7302) | [2b4cd6c](https://github.com/scala/scala/commit/2b4cd6c) | <notextile>SI-7302 importing from Any.</notextile>
[SI-7186](https://issues.scala-lang.org/browse/SI-7186) | [ccf886c](https://github.com/scala/scala/commit/ccf886c) | <notextile>SI-7186 Slim down some TypeRefs by 8 bytes.</notextile>
[SI-7294](https://issues.scala-lang.org/browse/SI-7294) | [4af9ff5](https://github.com/scala/scala/commit/4af9ff5) | <notextile>SI-7294 Deprecate inheritance from TupleN.</notextile>
[SI-7294](https://issues.scala-lang.org/browse/SI-7294) | [8d537a1](https://github.com/scala/scala/commit/8d537a1) | <notextile>SI-7294 Treat TupleN as final under -Xfuture</notextile>
[SI-5717](https://issues.scala-lang.org/browse/SI-5717) | [cc485a9](https://github.com/scala/scala/commit/cc485a9) | <notextile>SI-5717 error when bytecode cannot be written</notextile>
[SI-7003](https://issues.scala-lang.org/browse/SI-7003), [SI-7003](https://issues.scala-lang.org/browse/SI-7003), [SI-7003](https://issues.scala-lang.org/browse/SI-7003), [SI-6123](https://issues.scala-lang.org/browse/SI-6123) | [4bb8988](https://github.com/scala/scala/commit/4bb8988) | <notextile>Add positive and negative testcases for SI-6123 (-explaintypes)</notextile>
[SI-6123](https://issues.scala-lang.org/browse/SI-6123) | [ec6548f](https://github.com/scala/scala/commit/ec6548f) | <notextile>SI-6123: -explaintypes should not explain errors which won't be reported</notextile>
[SI-7102](https://issues.scala-lang.org/browse/SI-7102) | [1b3a379](https://github.com/scala/scala/commit/1b3a379) | <notextile>SI-7102 Specialize isEmpty for bitsets</notextile>
[SI-7236](https://issues.scala-lang.org/browse/SI-7236) | [67ed8c8](https://github.com/scala/scala/commit/67ed8c8) | <notextile>SI-7236 Deprecate ThreadPoolTaskSupport and friends</notextile>
[SI-5513](https://issues.scala-lang.org/browse/SI-5513) | [38a1515](https://github.com/scala/scala/commit/38a1515) | <notextile>SI-5513: add inplace set-theoretic operations for mutable bitsets.</notextile>
[SI-7247](https://issues.scala-lang.org/browse/SI-7247) | [3fe7b8c](https://github.com/scala/scala/commit/3fe7b8c) | <notextile>SI-7247, deprecated NotNull.</notextile>
[SI-7228](https://issues.scala-lang.org/browse/SI-7228) | [2fa2db7](https://github.com/scala/scala/commit/2fa2db7) | <notextile>SI-7228, bug in weak subtyping.</notextile>
[SI-7328](https://issues.scala-lang.org/browse/SI-7328) | [745c36a](https://github.com/scala/scala/commit/745c36a) | <notextile>SI-7328 Bail out of names/defaults if args are error typed</notextile>
[SI-7234](https://issues.scala-lang.org/browse/SI-7234) | [83c9c76](https://github.com/scala/scala/commit/83c9c76) | <notextile>SI-7234 Make named args play nice with dep. method types</notextile>
[SI-5710](https://issues.scala-lang.org/browse/SI-5710) | [f742aa3](https://github.com/scala/scala/commit/f742aa3) | <notextile>SI-5710 has fixed itself</notextile>
[SI-7235](https://issues.scala-lang.org/browse/SI-7235), [SI-7235](https://issues.scala-lang.org/browse/SI-7235), [SI-7235](https://issues.scala-lang.org/browse/SI-7235) | [3ae2653](https://github.com/scala/scala/commit/3ae2653) | <notextile>reifier is now aware of SI-7235</notextile>
[SI-7226](https://issues.scala-lang.org/browse/SI-7226) | [7e52fb9](https://github.com/scala/scala/commit/7e52fb9) | <notextile>SI-7226 Fix inference regression caused by TypeVar equality.</notextile>
[SI-7224](https://issues.scala-lang.org/browse/SI-7224) | [292435f](https://github.com/scala/scala/commit/292435f) | <notextile>Fix SI-7224.</notextile>
[SI-6608](https://issues.scala-lang.org/browse/SI-6608), [SI-6601](https://issues.scala-lang.org/browse/SI-6601) | [34faa0d](https://github.com/scala/scala/commit/34faa0d) | <notextile>SI-6601 Close access loophole for value class constructors</notextile>
[SI-874](https://issues.scala-lang.org/browse/SI-874) | [3a30af1](https://github.com/scala/scala/commit/3a30af1) | <notextile>SI-874 actual JSR-223 implementation</notextile>
[SI-874](https://issues.scala-lang.org/browse/SI-874) | [3e8f8dd](https://github.com/scala/scala/commit/3e8f8dd) | <notextile>SI-874 reflect.io improvements</notextile>
[SI-7244](https://issues.scala-lang.org/browse/SI-7244) | [a67b626](https://github.com/scala/scala/commit/a67b626) | <notextile>Close after slurping (fixes SI-7244)</notextile>
[SI-7006](https://issues.scala-lang.org/browse/SI-7006) | [9f6b7bc](https://github.com/scala/scala/commit/9f6b7bc) | <notextile>SI-7006 Fix the unreachable test</notextile>
[SI-7231](https://issues.scala-lang.org/browse/SI-7231) | [fd21898](https://github.com/scala/scala/commit/fd21898) | <notextile>SI-7231 Fix assertion when adapting Null type to Array type</notextile>
[SI-7006](https://issues.scala-lang.org/browse/SI-7006) | [04eac5c](https://github.com/scala/scala/commit/04eac5c) | <notextile>SI-7006 Cleanup from code review</notextile>
[SI-7006](https://issues.scala-lang.org/browse/SI-7006) | [b50a0d8](https://github.com/scala/scala/commit/b50a0d8) | <notextile>SI-7006 Prevent unreachable blocks in GenICode</notextile>
[SI-7109](https://issues.scala-lang.org/browse/SI-7109), [SI-7153](https://issues.scala-lang.org/browse/SI-7153) | [53c499b](https://github.com/scala/scala/commit/53c499b) | <notextile>SI-7109 SI-7153 Generalize the API to get docComments: allow to force docTrees for given fragments. Don't type-check when forcing doc comments, but rather  do it directly. Test the new functionality as well as better tests for the old one.</notextile>
[SI-7183](https://issues.scala-lang.org/browse/SI-7183) | [2cf6c5d](https://github.com/scala/scala/commit/2cf6c5d) | <notextile>[port] SI-7183 Disable unreachability for withFilter matches.</notextile>
[SI-7215](https://issues.scala-lang.org/browse/SI-7215) | [ad69835](https://github.com/scala/scala/commit/ad69835) | <notextile>SI-7215 Fix transpose of an empty Array[Array[T]].</notextile>
[SI-7190](https://issues.scala-lang.org/browse/SI-7190) | [1117be8](https://github.com/scala/scala/commit/1117be8) | <notextile>SI-7190 macros no longer give rise to bridges</notextile>
[SI-5954](https://issues.scala-lang.org/browse/SI-5954), [SI-7195](https://issues.scala-lang.org/browse/SI-7195) | [09130d5](https://github.com/scala/scala/commit/09130d5) | <notextile>[nomaster] SI-7195 minor version mustn't introduce warnings</notextile>
[SI-6902](https://issues.scala-lang.org/browse/SI-6902), [SI-7183](https://issues.scala-lang.org/browse/SI-7183) | [0303e64](https://github.com/scala/scala/commit/0303e64) | <notextile>SI-7183 Disable unreachability for withFilter matches.</notextile>
[SI-7214](https://issues.scala-lang.org/browse/SI-7214) | [acd74ca](https://github.com/scala/scala/commit/acd74ca) | <notextile>SI-7214 outer check based on dealiased pattern type.</notextile>
[SI-7126](https://issues.scala-lang.org/browse/SI-7126), [SI-7126](https://issues.scala-lang.org/browse/SI-7126) | [204b2b4](https://github.com/scala/scala/commit/204b2b4) | <notextile>SI-7126 Eliminate a source of malformed types.</notextile>
[SI-7126](https://issues.scala-lang.org/browse/SI-7126), [SI-7126](https://issues.scala-lang.org/browse/SI-7126) | [696dcdf](https://github.com/scala/scala/commit/696dcdf) | <notextile>SI-7126 Account for the alias types that don't dealias.</notextile>
[SI-7185](https://issues.scala-lang.org/browse/SI-7185) | [387fbf4](https://github.com/scala/scala/commit/387fbf4) | <notextile>SI-7185 Avoid NPE in TreeInfo.isExprSafeToInline</notextile>
[SI-7045](https://issues.scala-lang.org/browse/SI-7045), [SI-6240](https://issues.scala-lang.org/browse/SI-6240) | [0420b2d](https://github.com/scala/scala/commit/0420b2d) | <notextile>Revert SI-6240 synchronization for runtime reflection</notextile>
[SI-6191](https://issues.scala-lang.org/browse/SI-6191) | [c46bc25](https://github.com/scala/scala/commit/c46bc25) | <notextile>Tone down a soft-warning to only show under -Ydebug.</notextile>
[SI-7045](https://issues.scala-lang.org/browse/SI-7045) | [07bcb61](https://github.com/scala/scala/commit/07bcb61) | <notextile>SI-7045 reflection now auto-initializes selfType</notextile>
[SI-6758](https://issues.scala-lang.org/browse/SI-6758) | [1666f6e](https://github.com/scala/scala/commit/1666f6e) | <notextile>Since the problem in SI-6758 is fixed, it's ok to move checking for unused imports to Analyzer. This allows the check to be used in the IDE.</notextile>
[SI-7132](https://issues.scala-lang.org/browse/SI-7132) | [1b9c2f5](https://github.com/scala/scala/commit/1b9c2f5) | <notextile>SI-7132 - don't discard Unit type in interpreter</notextile>
[SI-6816](https://issues.scala-lang.org/browse/SI-6816) | [3b07135](https://github.com/scala/scala/commit/3b07135) | <notextile>SI-6816 Deprecate -Yeta-expand-keeps-star</notextile>
[SI-6161](https://issues.scala-lang.org/browse/SI-6161) | [b457b6c](https://github.com/scala/scala/commit/b457b6c) | <notextile>Refactors AsSeenFromMap to expose extension point.</notextile>
[SI-7112](https://issues.scala-lang.org/browse/SI-7112) | [1976d9f](https://github.com/scala/scala/commit/1976d9f) | <notextile>fixes the test for SI-7112</notextile>
[SI-7180](https://issues.scala-lang.org/browse/SI-7180) | [de1f749](https://github.com/scala/scala/commit/de1f749) | <notextile>SI-7180 Fix regression in implicit scope of HK type alias.</notextile>
[SI-5975](https://issues.scala-lang.org/browse/SI-5975), [SI-6576](https://issues.scala-lang.org/browse/SI-6576) | [19649d4](https://github.com/scala/scala/commit/19649d4) | <notextile>SI-6576 Workaround / diagnostic for IDE NPE.</notextile>
[SI-7146](https://issues.scala-lang.org/browse/SI-7146) | [bb067d3](https://github.com/scala/scala/commit/bb067d3) | <notextile>SI-7146 - Fixing checkinit bug in ExecutionContextImpl and adding test</notextile>
[SI-7128](https://issues.scala-lang.org/browse/SI-7128) | [348ff4b](https://github.com/scala/scala/commit/348ff4b) | <notextile>SI-7128 Fix regression in copyToArray for empty arrays</notextile>
[SI-7107](https://issues.scala-lang.org/browse/SI-7107) | [4f1bfec](https://github.com/scala/scala/commit/4f1bfec) | <notextile>Fix SI-7107: scala now thinks every exception is polymorphic</notextile>
[SI-7074](https://issues.scala-lang.org/browse/SI-7074) | [8187deb](https://github.com/scala/scala/commit/8187deb) | <notextile>SI-7074 Fix xml attribute sorting</notextile>
[SI-7112](https://issues.scala-lang.org/browse/SI-7112) | [89be691](https://github.com/scala/scala/commit/89be691) | <notextile>fixes the test for SI-7112</notextile>
[SI-6548](https://issues.scala-lang.org/browse/SI-6548), [SI-6548](https://issues.scala-lang.org/browse/SI-6548) | [85b63b8](https://github.com/scala/scala/commit/85b63b8) | <notextile>[nomaster] Revert &quot;SI-6548 reflection now correctly enters jinners&quot;</notextile>
[SI-4664](https://issues.scala-lang.org/browse/SI-4664), [SI-4664](https://issues.scala-lang.org/browse/SI-4664) | [8b4af71](https://github.com/scala/scala/commit/8b4af71) | <notextile>[nomaster] Revert &quot;SI-4664 Make scala.util.Random Serializable&quot;</notextile>
[SI-6521](https://issues.scala-lang.org/browse/SI-6521) | [f9550c6](https://github.com/scala/scala/commit/f9550c6) | <notextile>[nomaster] Revert &quot;Fixes SI-6521, overrides Range#head to be faster&quot;</notextile>
[SI-7159](https://issues.scala-lang.org/browse/SI-7159) | [bfd7863](https://github.com/scala/scala/commit/bfd7863) | <notextile>SI-7159 Distinguish between assignability and sub typing in TypeKinds</notextile>
[SI-7159](https://issues.scala-lang.org/browse/SI-7159) | [4124a09](https://github.com/scala/scala/commit/4124a09) | <notextile>SI-7159 Remove erroneous INT &lt;:&lt; LONG in TypeKinds</notextile>
[SI-107](https://issues.scala-lang.org/browse/SI-107), [SI-7159](https://issues.scala-lang.org/browse/SI-7159) | [04b147e](https://github.com/scala/scala/commit/04b147e) | <notextile>SI-7159 Prepare to remove erroneous INT &lt;:&lt; LONG in TypeKinds</notextile>
[SI-7159](https://issues.scala-lang.org/browse/SI-7159) | [208d6ad](https://github.com/scala/scala/commit/208d6ad) | <notextile>SI-7159 Remove unreachable cases in GenICode#adapt</notextile>
[SI-7181](https://issues.scala-lang.org/browse/SI-7181) | [5f3cd86](https://github.com/scala/scala/commit/5f3cd86) | <notextile>SI-7181 Eliminate unnecessary duplication of finally blocks</notextile>
[SI-7181](https://issues.scala-lang.org/browse/SI-7181) | [28a7161](https://github.com/scala/scala/commit/28a7161) | <notextile>SI-7181 Prepare to remove duplicated finally blocks</notextile>
[SI-7006](https://issues.scala-lang.org/browse/SI-7006) | [4f2d784](https://github.com/scala/scala/commit/4f2d784) | <notextile>SI-7006 Simplify jump-only block destination determination</notextile>
[SI-7006](https://issues.scala-lang.org/browse/SI-7006) | [e9f6511](https://github.com/scala/scala/commit/e9f6511) | <notextile>SI-7006 Eliminate unreachable blocks</notextile>
[SI-7006](https://issues.scala-lang.org/browse/SI-7006) | [0d2e19c](https://github.com/scala/scala/commit/0d2e19c) | <notextile>SI-7006 Recognize more jump only blocks</notextile>
[SI-7006](https://issues.scala-lang.org/browse/SI-7006), [SI-7006](https://issues.scala-lang.org/browse/SI-7006) | [022c57f](https://github.com/scala/scala/commit/022c57f) | <notextile>SI-7006 Improve jump-elision code in GenASM</notextile>
[SI-7112](https://issues.scala-lang.org/browse/SI-7112) | [0ecba21](https://github.com/scala/scala/commit/0ecba21) | <notextile>fixes the test for SI-7112</notextile>
[SI-7120](https://issues.scala-lang.org/browse/SI-7120) | [c11cf0b](https://github.com/scala/scala/commit/c11cf0b) | <notextile>SI-7120 Erasure must honor typeref prefixes</notextile>
[SI-7172](https://issues.scala-lang.org/browse/SI-7172), [SI-7171](https://issues.scala-lang.org/browse/SI-7171) | [3d5758c](https://github.com/scala/scala/commit/3d5758c) | <notextile>SI-7171 Consider prefix when assessing type finality.</notextile>
[SI-7015](https://issues.scala-lang.org/browse/SI-7015) | [62fcd3d](https://github.com/scala/scala/commit/62fcd3d) | <notextile>SI-7015 Cleanup from review of null duplication</notextile>
[SI-7159](https://issues.scala-lang.org/browse/SI-7159), [SI-7015](https://issues.scala-lang.org/browse/SI-7015) | [1b6661b](https://github.com/scala/scala/commit/1b6661b) | <notextile>SI-7015 Removes redundant aconst_null; pop; aconst_null creation</notextile>
[SI-6807](https://issues.scala-lang.org/browse/SI-6807) | [8a2cebe](https://github.com/scala/scala/commit/8a2cebe) | <notextile>SI-6807 Deprecating the Actors library.</notextile>
[SI-7164](https://issues.scala-lang.org/browse/SI-7164) | [68f62d7](https://github.com/scala/scala/commit/68f62d7) | <notextile>SI-7164 - Removing NotImplementedError as Fatal from s.u.c.NonFatal</notextile>
[SI-7130](https://issues.scala-lang.org/browse/SI-7130) | [c8ab5b3](https://github.com/scala/scala/commit/c8ab5b3) | <notextile>Fix SI-7130: Memory leaked caused by Statistics</notextile>
[SI-7143](https://issues.scala-lang.org/browse/SI-7143) | [4df9e20](https://github.com/scala/scala/commit/4df9e20) | <notextile>SI-7143 Fix scanner docComment: docBuffer and docPos are initialized in different places and as a result can get out of sync and as a result the invariant that docComment has a position is broken.</notextile>
[SI-7134](https://issues.scala-lang.org/browse/SI-7134) | [fd68fe6](https://github.com/scala/scala/commit/fd68fe6) | <notextile>SI-7134: don't require doc.Settings in base api of scaladoc.</notextile>
[SI-5063](https://issues.scala-lang.org/browse/SI-5063) | [c10b7b6](https://github.com/scala/scala/commit/c10b7b6) | <notextile>unit test ide-t1000567 exercises SI-5063, aka #1000567.</notextile>
[SI-5920](https://issues.scala-lang.org/browse/SI-5920), [SI-5744](https://issues.scala-lang.org/browse/SI-5744) | [9d5d55b](https://github.com/scala/scala/commit/9d5d55b) | <notextile>SI-5744 evidence params are now SYNTHETIC</notextile>
[SI-2296](https://issues.scala-lang.org/browse/SI-2296), [SI-7091](https://issues.scala-lang.org/browse/SI-7091) | [6a7d793](https://github.com/scala/scala/commit/6a7d793) | <notextile>SI-7091 Don't try to put a protected accessor in a package.</notextile>
[SI-7091](https://issues.scala-lang.org/browse/SI-7091) | [2e8ede5](https://github.com/scala/scala/commit/2e8ede5) | <notextile>SI-7091 Add a diagnostic for the &quot;no acc def buf&quot; error.</notextile>
[SI-6642](https://issues.scala-lang.org/browse/SI-6642) | [07ba1f8](https://github.com/scala/scala/commit/07ba1f8) | <notextile>SI-6642 Code cleanup from review of iteratorFrom</notextile>
[SI-6642](https://issues.scala-lang.org/browse/SI-6642) | [3903779](https://github.com/scala/scala/commit/3903779) | <notextile>SI-6642 Refactor mutable.TreeSet to use RedBlackTree instead of AVL</notextile>
[SI-6642](https://issues.scala-lang.org/browse/SI-6642) | [62bc99d](https://github.com/scala/scala/commit/62bc99d) | <notextile>SI-6642 Adds iteratorFrom, keysIteratorFrom, and valuesIteratorFrom</notextile>
[SI-6642](https://issues.scala-lang.org/browse/SI-6642) | [a0b1db4](https://github.com/scala/scala/commit/a0b1db4) | <notextile>SI-6642 Code cleanup on RedBlackTree#TreeIterator</notextile>
[SI-6514](https://issues.scala-lang.org/browse/SI-6514) | [673cc83](https://github.com/scala/scala/commit/673cc83) | <notextile>SI-6514 Avoid spurious dead code warnings</notextile>
[SI-6225](https://issues.scala-lang.org/browse/SI-6225) | [451cab9](https://github.com/scala/scala/commit/451cab9) | <notextile>SI-6225 Fix import of inherited package object implicits</notextile>
[SI-6935](https://issues.scala-lang.org/browse/SI-6935) | [c049d66](https://github.com/scala/scala/commit/c049d66) | <notextile>SI-6935 Added readResolve in BoxedUnit When deserializing Unit, it would return an instance of Object, but not a Scala Unit. By adding readResolve, the deserialization of Unit will work.</notextile>
[SI-6370](https://issues.scala-lang.org/browse/SI-6370) | [7b425bf](https://github.com/scala/scala/commit/7b425bf) | <notextile>SI-6370 changed ListMap apply0 method to produce correct error message when a key is not found Current implementation of apply0 relies on tail method to iterate over all keys. When the list gets to its end, tail produces an 'empty map' message in its exception, which is thrown by ListMap. This change checks if the collection is empty before calling tail and provides a more appropriate key not found message.</notextile>
[SI-6158](https://issues.scala-lang.org/browse/SI-6158) | [6424907](https://github.com/scala/scala/commit/6424907) | <notextile>SI-6158 Restore compile error output under partest --show-log</notextile>
[SI-6355](https://issues.scala-lang.org/browse/SI-6355) | [c26cc53](https://github.com/scala/scala/commit/c26cc53) | <notextile>SI-6355, weakend implementation restriction on applyDynamic.</notextile>
[SI-4793](https://issues.scala-lang.org/browse/SI-4793) | [c26a8db](https://github.com/scala/scala/commit/c26a8db) | <notextile>Maintenance of Predef.</notextile>
[SI-7082](https://issues.scala-lang.org/browse/SI-7082), [SI-7083](https://issues.scala-lang.org/browse/SI-7083), [SI-6591](https://issues.scala-lang.org/browse/SI-6591) | [09ef873](https://github.com/scala/scala/commit/09ef873) | <notextile>SI-6591 Reify and path-dependent types</notextile>
[SI-5675](https://issues.scala-lang.org/browse/SI-5675) | [e0068b9](https://github.com/scala/scala/commit/e0068b9) | <notextile>SI-5675 Discard duplicate feature warnings at a position</notextile>
[SI-7096](https://issues.scala-lang.org/browse/SI-7096) | [5258b63](https://github.com/scala/scala/commit/5258b63) | <notextile>SI-7096 SubstSymMap copies trees before modifying their symbols</notextile>
[SI-6478](https://issues.scala-lang.org/browse/SI-6478) | [6052e19](https://github.com/scala/scala/commit/6052e19) | <notextile>[backport] SI-6478 Fixing JavaTokenParser ident</notextile>
[SI-5824](https://issues.scala-lang.org/browse/SI-5824) | [96b0eff](https://github.com/scala/scala/commit/96b0eff) | <notextile>SI-5824 Fix crashes in reify with _*</notextile>
[SI-5374](https://issues.scala-lang.org/browse/SI-5374), [SI-6961](https://issues.scala-lang.org/browse/SI-6961) | [fa3b804](https://github.com/scala/scala/commit/fa3b804) | <notextile>SI-6961 no structural sharing in list serialization</notextile>
[SI-6187](https://issues.scala-lang.org/browse/SI-6187) | [dfbaaa1](https://github.com/scala/scala/commit/dfbaaa1) | <notextile>SI-6187 Make partial functions re-typable</notextile>
[SI-6146](https://issues.scala-lang.org/browse/SI-6146) | [55c9b9c](https://github.com/scala/scala/commit/55c9b9c) | <notextile>SI-6146 More accurate prefixes for sealed subtypes.</notextile>
[SI-5954](https://issues.scala-lang.org/browse/SI-5954), [SI-7070](https://issues.scala-lang.org/browse/SI-7070) | [1426fec](https://github.com/scala/scala/commit/1426fec) | <notextile>SI-7070 Turn restriction on companions in pkg objs into warning</notextile>
[SI-5082](https://issues.scala-lang.org/browse/SI-5082) | [a0ee6e9](https://github.com/scala/scala/commit/a0ee6e9) | <notextile>SI-5082 Cycle avoidance between case companions</notextile>
[SI-7100](https://issues.scala-lang.org/browse/SI-7100) | [a53e150](https://github.com/scala/scala/commit/a53e150) | <notextile>SI-7100 Fixed infinite recursion in duplicators</notextile>
[SI-6113](https://issues.scala-lang.org/browse/SI-6113) | [0d68a87](https://github.com/scala/scala/commit/0d68a87) | <notextile>SI-6113 typeOf now works for type lambdas</notextile>
[SI-7026](https://issues.scala-lang.org/browse/SI-7026), [SI-7026](https://issues.scala-lang.org/browse/SI-7026) | [79e774f](https://github.com/scala/scala/commit/79e774f) | <notextile>SI-7026: parseTree should never return a typed one</notextile>
[SI-6666](https://issues.scala-lang.org/browse/SI-6666) | [81fa831](https://github.com/scala/scala/commit/81fa831) | <notextile>Class symbols can't be contravariant.</notextile>
[SI-6666](https://issues.scala-lang.org/browse/SI-6666) | [275b341](https://github.com/scala/scala/commit/275b341) | <notextile>SI-6666 Catch VerifyErrors in the making in early defs.</notextile>
[SI-6666](https://issues.scala-lang.org/browse/SI-6666) | [4c34280](https://github.com/scala/scala/commit/4c34280) | <notextile>Add a test case from the comments of SI-6666.</notextile>
[SI-6259](https://issues.scala-lang.org/browse/SI-6259), [SI-6506](https://issues.scala-lang.org/browse/SI-6506), [SI-6957](https://issues.scala-lang.org/browse/SI-6957), [SI-6666](https://issues.scala-lang.org/browse/SI-6666) | [fd61254](https://github.com/scala/scala/commit/fd61254) | <notextile>SI-6666 Account for nesting in setting INCONSTRUCTOR</notextile>
[SI-2806](https://issues.scala-lang.org/browse/SI-2806), [SI-6888](https://issues.scala-lang.org/browse/SI-6888) | [b579a42](https://github.com/scala/scala/commit/b579a42) | <notextile>SI-6888 Loosen criteria for $outer search.</notextile>
[SI-7071](https://issues.scala-lang.org/browse/SI-7071), [SI-7072](https://issues.scala-lang.org/browse/SI-7072) | [b43ae58](https://github.com/scala/scala/commit/b43ae58) | <notextile>introduces an exhaustive java-to-scala test</notextile>
[SI-6989](https://issues.scala-lang.org/browse/SI-6989) | [02ed5fb](https://github.com/scala/scala/commit/02ed5fb) | <notextile>SI-6989 privateWithin is now populated in reflect</notextile>
[SI-5017](https://issues.scala-lang.org/browse/SI-5017) | [015ff51](https://github.com/scala/scala/commit/015ff51) | <notextile>[nomaster] Revert &quot;SI-5017 Poor performance of :+ operator on Arrays&quot;</notextile>
[SI-6150](https://issues.scala-lang.org/browse/SI-6150), [SI-6773](https://issues.scala-lang.org/browse/SI-6773), [SI-6150](https://issues.scala-lang.org/browse/SI-6150) | [87d52db](https://github.com/scala/scala/commit/87d52db) | <notextile>[nomaster] SI-6773 Makes the SI-6150 changes binary compatible with 2.10</notextile>
[SI-7060](https://issues.scala-lang.org/browse/SI-7060) | [e5c0e59](https://github.com/scala/scala/commit/e5c0e59) | <notextile>SI-7060 More conservative dead code elim marking</notextile>
[SI-7039](https://issues.scala-lang.org/browse/SI-7039) | [8ae0e2a](https://github.com/scala/scala/commit/8ae0e2a) | <notextile>SI-7039 unapplySeq result type independent of subpattern count</notextile>
[SI-5833](https://issues.scala-lang.org/browse/SI-5833) | [0574172](https://github.com/scala/scala/commit/0574172) | <notextile>SI-5833 Fixes tail-of-Nil problem in RefinedType#normalizeImpl</notextile>
[SI-6667](https://issues.scala-lang.org/browse/SI-6667) | [b67f8e5](https://github.com/scala/scala/commit/b67f8e5) | <notextile>[nomerge] SI-6667 Demote a new ambiguity error to a lint warning.</notextile>
[SI-6017](https://issues.scala-lang.org/browse/SI-6017) | [0e8d8c7](https://github.com/scala/scala/commit/0e8d8c7) | <notextile>SI-6017 Scaladoc: Show all letters without dangling links</notextile>
[SI-6017](https://issues.scala-lang.org/browse/SI-6017) | [3f0bce9](https://github.com/scala/scala/commit/3f0bce9) | <notextile>SI-6017 Generate Scaladoc's index links in Scala side</notextile>
[SI-6578](https://issues.scala-lang.org/browse/SI-6578) | [a6137d1](https://github.com/scala/scala/commit/a6137d1) | <notextile>Fix SI-6578. Deprecated `askType` because of possible race conditions in type checker.</notextile>
[SI-7008](https://issues.scala-lang.org/browse/SI-7008) | [f1701f7](https://github.com/scala/scala/commit/f1701f7) | <notextile>SI-7008 @throws annotations are now populated in reflect</notextile>
[SI-7033](https://issues.scala-lang.org/browse/SI-7033) | [3af838c](https://github.com/scala/scala/commit/3af838c) | <notextile>SI-7033 Be symful when creating factory methods.</notextile>
[SI-6422](https://issues.scala-lang.org/browse/SI-6422) | [bc01614](https://github.com/scala/scala/commit/bc01614) | <notextile>Revert &quot;SI-6422: add missing Fractional and Integral alias in scala package&quot;</notextile>
[SI-5313](https://issues.scala-lang.org/browse/SI-5313) | [4fda83f](https://github.com/scala/scala/commit/4fda83f) | <notextile>SI-5313 Minor code cleanup for store clobbering</notextile>
[SI-5313](https://issues.scala-lang.org/browse/SI-5313) | [c7d489e](https://github.com/scala/scala/commit/c7d489e) | <notextile>SI-5313 Test clobbers on the back edge of a loop</notextile>
[SI-5313](https://issues.scala-lang.org/browse/SI-5313) | [9b4fa83](https://github.com/scala/scala/commit/9b4fa83) | <notextile>SI-5313 Eliminate more stores by replacing clobbers with null stores</notextile>
[SI-5313](https://issues.scala-lang.org/browse/SI-5313) | [eab2884](https://github.com/scala/scala/commit/eab2884) | <notextile>SI-5313 Do not eliminate stores that potentially wipe referenes</notextile>
[SI-7046](https://issues.scala-lang.org/browse/SI-7046) | [2403d1d](https://github.com/scala/scala/commit/2403d1d) | <notextile>SI-7046 reflection now auto-initializes knownDirectSubclasses</notextile>
[SI-6482](https://issues.scala-lang.org/browse/SI-6482), [SI-7022](https://issues.scala-lang.org/browse/SI-7022) | [374c912](https://github.com/scala/scala/commit/374c912) | <notextile>SI-7022 Additional test case for value class w. bounds</notextile>
[SI-6482](https://issues.scala-lang.org/browse/SI-6482), [SI-6482](https://issues.scala-lang.org/browse/SI-6482) | [4ed8836](https://github.com/scala/scala/commit/4ed8836) | <notextile>[backport] SI-6482, lost bounds in extension methods.</notextile>
[SI-6941](https://issues.scala-lang.org/browse/SI-6941) | [b2117cf](https://github.com/scala/scala/commit/b2117cf) | <notextile>SI-6941 tests</notextile>
[SI-6686](https://issues.scala-lang.org/browse/SI-6686) | [b92396b](https://github.com/scala/scala/commit/b92396b) | <notextile>SI-6686 drop valdef unused in flatMapCond's block</notextile>
[SI-5158](https://issues.scala-lang.org/browse/SI-5158), [SI-6941](https://issues.scala-lang.org/browse/SI-6941) | [494ba94](https://github.com/scala/scala/commit/494ba94) | <notextile>don't store subpats bound to underscore</notextile>
[SI-4976](https://issues.scala-lang.org/browse/SI-4976) | [d71f59e](https://github.com/scala/scala/commit/d71f59e) | <notextile>SI-4976 Scaladoc: Add a source link to package objects</notextile>
[SI-7029](https://issues.scala-lang.org/browse/SI-7029) | [5275bae](https://github.com/scala/scala/commit/5275bae) | <notextile>SI-7029 - Make test more robust</notextile>
[SI-7029](https://issues.scala-lang.org/browse/SI-7029) | [3f78bee](https://github.com/scala/scala/commit/3f78bee) | <notextile>SI-7029 - Makes sure that uncaught exceptions are propagated to the UEH for the global ExecutionContext</notextile>
[SI-6539](https://issues.scala-lang.org/browse/SI-6539) | [2989258](https://github.com/scala/scala/commit/2989258) | <notextile>SI-6539 moves @compileTimeOnly away from scala-reflect</notextile>
[SI-5151](https://issues.scala-lang.org/browse/SI-5151) | [8bd03e0](https://github.com/scala/scala/commit/8bd03e0) | <notextile>SI-5151 - Add firstKey and lastKey to LongMap.</notextile>
[SI-6773](https://issues.scala-lang.org/browse/SI-6773) | [108a1f7](https://github.com/scala/scala/commit/108a1f7) | <notextile>SI-6773 Changes IndexSeqFactory to be &quot;since 2.11&quot;</notextile>
[SI-5543](https://issues.scala-lang.org/browse/SI-5543), [SI-1803](https://issues.scala-lang.org/browse/SI-1803) | [b74c33e](https://github.com/scala/scala/commit/b74c33e) | <notextile>SI-1803, plus documentation and cleanups in Namers, mainly in typeSig</notextile>
[SI-6812](https://issues.scala-lang.org/browse/SI-6812) | [941c569](https://github.com/scala/scala/commit/941c569) | <notextile>SI-6812 scaladoc can opt out of expanding macros</notextile>
[SI-6206](https://issues.scala-lang.org/browse/SI-6206), [SI-6206](https://issues.scala-lang.org/browse/SI-6206) | [11ac963](https://github.com/scala/scala/commit/11ac963) | <notextile>[backport] Fix for SI-6206, inconsistency with apply.</notextile>
[SI-6601](https://issues.scala-lang.org/browse/SI-6601) | [5a2828c](https://github.com/scala/scala/commit/5a2828c) | <notextile>A test case to guide the eventual fix for SI-6601.</notextile>
[SI-6601](https://issues.scala-lang.org/browse/SI-6601) | [172f3f6](https://github.com/scala/scala/commit/172f3f6) | <notextile>Revert &quot;SI-6601 Publicise derived value contstructor after pickler&quot;</notextile>
[SI-2818](https://issues.scala-lang.org/browse/SI-2818) | [6db4db9](https://github.com/scala/scala/commit/6db4db9) | <notextile>SI-2818 Make List.foldRight always do a reverse/foldLeft flip</notextile>
[SI-2968](https://issues.scala-lang.org/browse/SI-2968), [SI-2968](https://issues.scala-lang.org/browse/SI-2968) | [8350cd9](https://github.com/scala/scala/commit/8350cd9) | <notextile>[backport] SI-2968 Fix brace healing for `^case (class&#124;object) {`</notextile>
[SI-6963](https://issues.scala-lang.org/browse/SI-6963) | [1de399d](https://github.com/scala/scala/commit/1de399d) | <notextile>SI-6963 Add version to -Xmigration</notextile>
[SI-3353](https://issues.scala-lang.org/browse/SI-3353), [SI-3353](https://issues.scala-lang.org/browse/SI-3353) | [1049435](https://github.com/scala/scala/commit/1049435) | <notextile>SI-3353 don't extract &lt;unapply-selector&gt; into named-arg local val</notextile>
[SI-6017](https://issues.scala-lang.org/browse/SI-6017) | [831bffd](https://github.com/scala/scala/commit/831bffd) | <notextile>SI-6017 Scaladoc's Index should be case-sensitive</notextile>
[SI-6853](https://issues.scala-lang.org/browse/SI-6853) | [e36327a](https://github.com/scala/scala/commit/e36327a) | <notextile>SI-6853 changed private method remove to be tail recursive. Operations += and -= on mutable.ListMap rely on the private method remove to perform. This methods was implemented using recursion, but it was not tail recursive. When the ListMap got too big the += caused a StackOverflowError.</notextile>
[SI-6595](https://issues.scala-lang.org/browse/SI-6595) | [ff92610](https://github.com/scala/scala/commit/ff92610) | <notextile>SI-6595, lost modifiers in early defs.</notextile>
[SI-6584](https://issues.scala-lang.org/browse/SI-6584) | [98534b2](https://github.com/scala/scala/commit/98534b2) | <notextile>SI-6584, Stream#distinct uses too much memory.</notextile>
[SI-6426](https://issues.scala-lang.org/browse/SI-6426) | [d2316df](https://github.com/scala/scala/commit/d2316df) | <notextile>SI-6426, importable _.</notextile>
[SI-6072](https://issues.scala-lang.org/browse/SI-6072) | [05882eb](https://github.com/scala/scala/commit/05882eb) | <notextile>SI-6072, crasher with overloaded eq.</notextile>
[SI-5604](https://issues.scala-lang.org/browse/SI-5604) | [d4437aa](https://github.com/scala/scala/commit/d4437aa) | <notextile>SI-5604, selections on package objects.</notextile>
[SI-5859](https://issues.scala-lang.org/browse/SI-5859) | [e156cd1](https://github.com/scala/scala/commit/e156cd1) | <notextile>SI-5859, inapplicable varargs.</notextile>
[SI-5353](https://issues.scala-lang.org/browse/SI-5353) | [f3f1e50](https://github.com/scala/scala/commit/f3f1e50) | <notextile>SI-5353, imperfect error message.</notextile>
[SI-5130](https://issues.scala-lang.org/browse/SI-5130) | [77ec4ef](https://github.com/scala/scala/commit/77ec4ef) | <notextile>SI-5130, precision disappearing from refinement.</notextile>
[SI-4729](https://issues.scala-lang.org/browse/SI-4729) | [faca7ec](https://github.com/scala/scala/commit/faca7ec) | <notextile>SI-4729, overriding java varargs in scala.</notextile>
[SI-2418](https://issues.scala-lang.org/browse/SI-2418), [SI-2418](https://issues.scala-lang.org/browse/SI-2418) | [0990890](https://github.com/scala/scala/commit/0990890) | <notextile>SI-2418, remove restriction on final vars.</notextile>
[SI-6572](https://issues.scala-lang.org/browse/SI-6572) | [16eaefb](https://github.com/scala/scala/commit/16eaefb) | <notextile>SI-6572 Test case, originally fixed in a3680be.</notextile>
[SI-6301](https://issues.scala-lang.org/browse/SI-6301), [SI-6301](https://issues.scala-lang.org/browse/SI-6301), [SI-6301](https://issues.scala-lang.org/browse/SI-6301), [SI-6572](https://issues.scala-lang.org/browse/SI-6572) | [0679da5](https://github.com/scala/scala/commit/0679da5) | <notextile>[backport] SI-6301 / SI-6572 specialization regressions</notextile>
[SI-5378](https://issues.scala-lang.org/browse/SI-5378) | [f6d90a8](https://github.com/scala/scala/commit/f6d90a8) | <notextile>[backport] SI-5378, unsoundness with type bounds in refinements.</notextile>
[SI-4714](https://issues.scala-lang.org/browse/SI-4714) | [5f85fe5](https://github.com/scala/scala/commit/5f85fe5) | <notextile>SI-4714 Initialize history while initializing the REPL's reader</notextile>
[SI-2418](https://issues.scala-lang.org/browse/SI-2418), [SI-2418](https://issues.scala-lang.org/browse/SI-2418) | [243cede](https://github.com/scala/scala/commit/243cede) | <notextile>[backport] Removed restriction on final vars, SI-2418.</notextile>
[SI-7009](https://issues.scala-lang.org/browse/SI-7009), [SI-7009](https://issues.scala-lang.org/browse/SI-7009) | [fefe6cc](https://github.com/scala/scala/commit/fefe6cc) | <notextile>SI-7009: `@throws` annotation synthesized incorrectly</notextile>
[SI-7009](https://issues.scala-lang.org/browse/SI-7009) | [e22d801](https://github.com/scala/scala/commit/e22d801) | <notextile>Test case for SI-7009.</notextile>
[SI-1336](https://issues.scala-lang.org/browse/SI-1336), [SI-5589](https://issues.scala-lang.org/browse/SI-5589), [SI-4574](https://issues.scala-lang.org/browse/SI-4574), [SI-6968](https://issues.scala-lang.org/browse/SI-6968), [SI-6968](https://issues.scala-lang.org/browse/SI-6968) | [a87d409](https://github.com/scala/scala/commit/a87d409) | <notextile>SI-6968 Simple Tuple patterns aren't irrefutable</notextile>
[SI-6669](https://issues.scala-lang.org/browse/SI-6669) | [166fd02](https://github.com/scala/scala/commit/166fd02) | <notextile>SI-6669 Add . to the default scalap classpath</notextile>
[SI-6728](https://issues.scala-lang.org/browse/SI-6728) | [80a814d](https://github.com/scala/scala/commit/80a814d) | <notextile>SI-6728 Fixes crash in parser on incomplete for expression</notextile>
[SI-7035](https://issues.scala-lang.org/browse/SI-7035) | [9afae59](https://github.com/scala/scala/commit/9afae59) | <notextile>SI-7035 Centralize case field accessor sorting.</notextile>
[SI-6726](https://issues.scala-lang.org/browse/SI-6726) | [6357c8d](https://github.com/scala/scala/commit/6357c8d) | <notextile>SI-6726 Further optimization of pattern analysis</notextile>
[SI-6726](https://issues.scala-lang.org/browse/SI-6726), [SI-6726](https://issues.scala-lang.org/browse/SI-6726) | [14d8c22](https://github.com/scala/scala/commit/14d8c22) | <notextile>SI-6726 Hash consing for Pattern matching Sym-s</notextile>
[SI-6726](https://issues.scala-lang.org/browse/SI-6726) | [32c0a2e](https://github.com/scala/scala/commit/32c0a2e) | <notextile>SI-6726 Add benchmark used for testing pattern matcher.</notextile>
[SI-6154](https://issues.scala-lang.org/browse/SI-6154) | [d3f3394](https://github.com/scala/scala/commit/d3f3394) | <notextile>[backport] Fix for SI-6154, VerifyError originating in uncurry.</notextile>
[SI-6516](https://issues.scala-lang.org/browse/SI-6516) | [6f86583](https://github.com/scala/scala/commit/6f86583) | <notextile>SI-6516, macros comparing types with == instead of =:=.</notextile>
[SI-6551](https://issues.scala-lang.org/browse/SI-6551) | [cfaa3b5](https://github.com/scala/scala/commit/cfaa3b5) | <notextile>SI-6551 Expand test case into uncomfortable areas.</notextile>
[SI-6651](https://issues.scala-lang.org/browse/SI-6651) | [45ccdc5](https://github.com/scala/scala/commit/45ccdc5) | <notextile>SI-6651 Substitute `this` in extension method sigs</notextile>
[SI-6987](https://issues.scala-lang.org/browse/SI-6987) | [bffe776](https://github.com/scala/scala/commit/bffe776) | <notextile>[backport] Disabled SI-6987.</notextile>
[SI-6258](https://issues.scala-lang.org/browse/SI-6258), [SI-6258](https://issues.scala-lang.org/browse/SI-6258), [SI-3577](https://issues.scala-lang.org/browse/SI-3577), [SI-3577](https://issues.scala-lang.org/browse/SI-3577) | [b8da00e](https://github.com/scala/scala/commit/b8da00e) | <notextile>[backport] SI-3577 BoundedWildcardType handling</notextile>
[SI-5459](https://issues.scala-lang.org/browse/SI-5459) | [6d669f3](https://github.com/scala/scala/commit/6d669f3) | <notextile>Pending test for SI-5459.</notextile>
[SI-6939](https://issues.scala-lang.org/browse/SI-6939) | [b6f898f](https://github.com/scala/scala/commit/b6f898f) | <notextile>SI-6939 Fix namespace binding (xmlns) not overriding outer binding</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [aa199b8](https://github.com/scala/scala/commit/aa199b8) | <notextile>Revert &quot;SI-6811 Misc. removals in util, testing, io, ...&quot;</notextile>
[SI-6891](https://issues.scala-lang.org/browse/SI-6891) | [7babdab](https://github.com/scala/scala/commit/7babdab) | <notextile>SI-6891 Fix value class + tailrec crasher.</notextile>
[SI-6981](https://issues.scala-lang.org/browse/SI-6981) | [cff0934](https://github.com/scala/scala/commit/cff0934) | <notextile>Ill-scoped reference checking in TreeCheckers</notextile>
[SI-4602](https://issues.scala-lang.org/browse/SI-4602) | [3cbb002](https://github.com/scala/scala/commit/3cbb002) | <notextile>SI-4602 Disable unreliable test of fsc path absolutization</notextile>
[SI-4602](https://issues.scala-lang.org/browse/SI-4602), [SI-4602](https://issues.scala-lang.org/browse/SI-4602) | [952e1bf](https://github.com/scala/scala/commit/952e1bf) | <notextile>SI-4602 Make fsc absolutize source file names</notextile>
[SI-4733](https://issues.scala-lang.org/browse/SI-4733), [SI-4733](https://issues.scala-lang.org/browse/SI-4733) | [e0cf651](https://github.com/scala/scala/commit/e0cf651) | <notextile>SI-4733 - fsc no longer creates a single temp directory for all users.</notextile>
[SI-6863](https://issues.scala-lang.org/browse/SI-6863) | [0b52a51](https://github.com/scala/scala/commit/0b52a51) | <notextile>SI-6863 Fix verify error in captured var inited from expr with try/catch</notextile>
[SI-6932](https://issues.scala-lang.org/browse/SI-6932) | [262d7ec](https://github.com/scala/scala/commit/262d7ec) | <notextile>SI-6932 Remove Batchable trait plus minor clean-ups</notextile>
[SI-6932](https://issues.scala-lang.org/browse/SI-6932) | [08a74e5](https://github.com/scala/scala/commit/08a74e5) | <notextile> Fix SI-6932 by enabling linearization of callback execution for the internal execution context of Future</notextile>
[SI-6443](https://issues.scala-lang.org/browse/SI-6443) | [11329c3](https://github.com/scala/scala/commit/11329c3) | <notextile>SI-6443 Expand test coverage with varargs, by-name.</notextile>
[SI-6443](https://issues.scala-lang.org/browse/SI-6443) | [493197f](https://github.com/scala/scala/commit/493197f) | <notextile>SI-6443 Widen dependent param types in uncurry</notextile>
[SI-7018](https://issues.scala-lang.org/browse/SI-7018) | [a72aa94](https://github.com/scala/scala/commit/a72aa94) | <notextile>SI-7018 Fix memory leak in Attachments.</notextile>
[SI-6556](https://issues.scala-lang.org/browse/SI-6556), [SI-6648](https://issues.scala-lang.org/browse/SI-6648), [SI-6556](https://issues.scala-lang.org/browse/SI-6556) | [982633a](https://github.com/scala/scala/commit/982633a) | <notextile>SI-6556 Remove unneeded workaround in erasure.</notextile>
[SI-5304](https://issues.scala-lang.org/browse/SI-5304) | [2580a51](https://github.com/scala/scala/commit/2580a51) | <notextile>Laying groundwork for a followup ticket.</notextile>
[SI-4859](https://issues.scala-lang.org/browse/SI-4859) | [412ad57](https://github.com/scala/scala/commit/412ad57) | <notextile>SI-4859 Retain MODULE_LOAD in dead code elim.</notextile>
[SI-4859](https://issues.scala-lang.org/browse/SI-4859) | [f21b1ce](https://github.com/scala/scala/commit/f21b1ce) | <notextile>SI-4859 Don't elide qualifiers when selecting nested modules.</notextile>
[SI-4859](https://issues.scala-lang.org/browse/SI-4859) | [61f2936](https://github.com/scala/scala/commit/61f2936) | <notextile>SI-4859 Don't rewrite CC().CC2() to new CC2</notextile>
[SI-6083](https://issues.scala-lang.org/browse/SI-6083) | [76bb23d](https://github.com/scala/scala/commit/76bb23d) | <notextile>SI-6083, misleading annotation error message.</notextile>
[SI-5182](https://issues.scala-lang.org/browse/SI-5182) | [801eab5](https://github.com/scala/scala/commit/801eab5) | <notextile>SI-5182, no position on annotation error.</notextile>
[SI-2577](https://issues.scala-lang.org/browse/SI-2577), [SI-6860](https://issues.scala-lang.org/browse/SI-6860) | [832fc9a](https://github.com/scala/scala/commit/832fc9a) | <notextile>SI-2577, SI-6860: annotation type inference.</notextile>
[SI-6987](https://issues.scala-lang.org/browse/SI-6987) | [53d5df5](https://github.com/scala/scala/commit/53d5df5) | <notextile>Disabled SI-6987.</notextile>
[SI-7011](https://issues.scala-lang.org/browse/SI-7011) | [d592216](https://github.com/scala/scala/commit/d592216) | <notextile>SI-7011 Fix finding constructor type in captured var definitions</notextile>
[SI-6231](https://issues.scala-lang.org/browse/SI-6231) | [f6168b8](https://github.com/scala/scala/commit/f6168b8) | <notextile>SI-6231 Report unsupported free var capture by a trait.</notextile>
[SI-6987](https://issues.scala-lang.org/browse/SI-6987) | [1dab5bf](https://github.com/scala/scala/commit/1dab5bf) | <notextile>SI-6987 Tests fsc verbose output</notextile>
[SI-6987](https://issues.scala-lang.org/browse/SI-6987) | [e12a5b8](https://github.com/scala/scala/commit/e12a5b8) | <notextile>SI-6987 Fixes fsc compile server verbose output</notextile>
[SI-6997](https://issues.scala-lang.org/browse/SI-6997), [SI-6666](https://issues.scala-lang.org/browse/SI-6666) | [1a7de43](https://github.com/scala/scala/commit/1a7de43) | <notextile>SI-6666 Restrict hidden `this` access in self/super calls.</notextile>
[SI-6011](https://issues.scala-lang.org/browse/SI-6011), [SI-6902](https://issues.scala-lang.org/browse/SI-6902) | [cbd0205](https://github.com/scala/scala/commit/cbd0205) | <notextile>SI-6902 Check unreachability under @unchecked</notextile>
[SI-6952](https://issues.scala-lang.org/browse/SI-6952) | [8a74b7b](https://github.com/scala/scala/commit/8a74b7b) | <notextile>Closes SI-6952: add correct error positions for Dynamic feature check.</notextile>
[SI-6969](https://issues.scala-lang.org/browse/SI-6969) | [0d01cc1](https://github.com/scala/scala/commit/0d01cc1) | <notextile>SI-6969, mishandling of SoftReferences in method cache.</notextile>
[SI-6976](https://issues.scala-lang.org/browse/SI-6976) | [d9d6494](https://github.com/scala/scala/commit/d9d6494) | <notextile>SI-6976 Fix value class separate compilation crasher.</notextile>
[SI-6637](https://issues.scala-lang.org/browse/SI-6637), [SI-6637](https://issues.scala-lang.org/browse/SI-6637) | [4dceb22](https://github.com/scala/scala/commit/4dceb22) | <notextile>[backport] Fix SI-6637 (misoptimization in erasure)</notextile>
[SI-6611](https://issues.scala-lang.org/browse/SI-6611), [SI-6247](https://issues.scala-lang.org/browse/SI-6247), [SI-6611](https://issues.scala-lang.org/browse/SI-6611), [SI-6247](https://issues.scala-lang.org/browse/SI-6247) | [ba411c4](https://github.com/scala/scala/commit/ba411c4) | <notextile>[backport] Fix unsafe array opt. / opt. primitive Array(...)</notextile>
[SI-6567](https://issues.scala-lang.org/browse/SI-6567), [SI-6567](https://issues.scala-lang.org/browse/SI-6567) | [96ed055](https://github.com/scala/scala/commit/96ed055) | <notextile>[backport] SI-6567 Warning for Option(implicitView(foo))</notextile>
[SI-6439](https://issues.scala-lang.org/browse/SI-6439) | [3486d47](https://github.com/scala/scala/commit/3486d47) | <notextile>SI-6439 Avoid spurious REPL warnings about companionship</notextile>
[SI-6923](https://issues.scala-lang.org/browse/SI-6923), [SI-6994](https://issues.scala-lang.org/browse/SI-6994) | [52a5328](https://github.com/scala/scala/commit/52a5328) | <notextile>Addressing warnings.</notextile>
[SI-6994](https://issues.scala-lang.org/browse/SI-6994) | [8f49884](https://github.com/scala/scala/commit/8f49884) | <notextile>SI-6994 Avoid spurious promiscuous catch warning</notextile>
[SI-6434](https://issues.scala-lang.org/browse/SI-6434) | [8297843](https://github.com/scala/scala/commit/8297843) | <notextile>SI-6434 Pretty print function types with by name arg as (=&gt; A) =&gt; B</notextile>
[SI-6942](https://issues.scala-lang.org/browse/SI-6942) | [f539781](https://github.com/scala/scala/commit/f539781) | <notextile>SI-6942 more efficient unreachability analysis</notextile>
[SI-5568](https://issues.scala-lang.org/browse/SI-5568) | [c606559](https://github.com/scala/scala/commit/c606559) | <notextile>SI-5568 Comment improvements for getClass on primitive intersection.</notextile>
[SI-5568](https://issues.scala-lang.org/browse/SI-5568) | [765386f](https://github.com/scala/scala/commit/765386f) | <notextile>SI-5568 Fixes verify error from getClass on refinement of value type</notextile>
[SI-6608](https://issues.scala-lang.org/browse/SI-6608), [SI-6601](https://issues.scala-lang.org/browse/SI-6601) | [b07228a](https://github.com/scala/scala/commit/b07228a) | <notextile>SI-6601 Publicise derived value contstructor after pickler</notextile>
[SI-6923](https://issues.scala-lang.org/browse/SI-6923) | [66fe64f](https://github.com/scala/scala/commit/66fe64f) | <notextile>SI-6923 Context now buffers warnings as well as errors</notextile>
[SI-6956](https://issues.scala-lang.org/browse/SI-6956) | [a6b34b6](https://github.com/scala/scala/commit/a6b34b6) | <notextile>SI-6956 determine switchability by type, not tree</notextile>
[SI-5824](https://issues.scala-lang.org/browse/SI-5824) | [950e938](https://github.com/scala/scala/commit/950e938) | <notextile>Revert &quot;SI-5824 Fix crashes in reify with _*&quot;</notextile>
[SI-5824](https://issues.scala-lang.org/browse/SI-5824) | [0a25ee3](https://github.com/scala/scala/commit/0a25ee3) | <notextile>SI-5824 Fix crashes in reify with _*</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [a9c374b](https://github.com/scala/scala/commit/a9c374b) | <notextile>SI-6811 Move scala.util.{automata,regexp} ... ... to scala.xml.dtd.impl and make it private[dtd]</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [a386291](https://github.com/scala/scala/commit/a386291) | <notextile>SI-6811 Remove scala.xml.include.sax.Main</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [98d3368](https://github.com/scala/scala/commit/98d3368) | <notextile>SI-6811 Remove scala.ScalaObject</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [684f549](https://github.com/scala/scala/commit/684f549) | <notextile>SI-6811 Remove the scala.annotation.target package</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [f931833](https://github.com/scala/scala/commit/f931833) | <notextile>SI-6811 Misc. removals in util, testing, io, ...</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [be5554f](https://github.com/scala/scala/commit/be5554f) | <notextile>SI-6811 Remove deprecated elements in scala.collection</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [67d7e26](https://github.com/scala/scala/commit/67d7e26) | <notextile>SI-6811 Remove parts of scala.concurrent not needed by scala.actors</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [b13bf26](https://github.com/scala/scala/commit/b13bf26) | <notextile>SI-6811 Remove the scala.util.grammar package</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [c2903d6](https://github.com/scala/scala/commit/c2903d6) | <notextile>SI-6811 Remove scala.collection.mutable.ConcurrentMap</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [ed52ea0](https://github.com/scala/scala/commit/ed52ea0) | <notextile>SI-6811 Remove primitive widenings and /:\</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [2ee8568](https://github.com/scala/scala/commit/2ee8568) | <notextile>SI-6811 Remove deprecated constructors</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [167fc0a](https://github.com/scala/scala/commit/167fc0a) | <notextile>SI-6811 Remove usages of scala.annotation.cloneable</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [4805b97](https://github.com/scala/scala/commit/4805b97) | <notextile>SI-6811 Remove scala.annotation.serializable</notextile>
[SI-6979](https://issues.scala-lang.org/browse/SI-6979) | [decc9a9](https://github.com/scala/scala/commit/decc9a9) | <notextile>SI-6979 Small optimization in lub</notextile>
[SI-6479](https://issues.scala-lang.org/browse/SI-6479) | [9cc61f3](https://github.com/scala/scala/commit/9cc61f3) | <notextile>SI-6479 Don't lift try exprs in label arguments.</notextile>
[SI-6963](https://issues.scala-lang.org/browse/SI-6963) | [0c2e884](https://github.com/scala/scala/commit/0c2e884) | <notextile>SI-6963 Deprecates -Xmigration switch</notextile>
[SI-6675](https://issues.scala-lang.org/browse/SI-6675) | [78019b2](https://github.com/scala/scala/commit/78019b2) | <notextile>SI-6675 Test new warning under -Xoldpatmat.</notextile>
[SI-6675](https://issues.scala-lang.org/browse/SI-6675) | [692372c](https://github.com/scala/scala/commit/692372c) | <notextile>SI-6675 -Xlint arity enforcement for extractors</notextile>
[SI-6955](https://issues.scala-lang.org/browse/SI-6955) | [8475807](https://github.com/scala/scala/commit/8475807) | <notextile>SI-6955 switch emission no longer foiled by type alias</notextile>
[SI-6082](https://issues.scala-lang.org/browse/SI-6082) | [39352fe](https://github.com/scala/scala/commit/39352fe) | <notextile>SI-6082 Conditionally expand @ann(x) to @ann(value = x)</notextile>
[SI-5440](https://issues.scala-lang.org/browse/SI-5440) | [4aba0fe](https://github.com/scala/scala/commit/4aba0fe) | <notextile>SI-5440 Test case for exhaustiveness check</notextile>
[SI-5340](https://issues.scala-lang.org/browse/SI-5340) | [1212af4](https://github.com/scala/scala/commit/1212af4) | <notextile>SI-5340 Change println to log</notextile>
[SI-6925](https://issues.scala-lang.org/browse/SI-6925) | [b1cea21](https://github.com/scala/scala/commit/b1cea21) | <notextile>SI-6925 use concrete type in applyOrElse's match's selector</notextile>
[SI-5189](https://issues.scala-lang.org/browse/SI-5189) | [8fb19b1](https://github.com/scala/scala/commit/8fb19b1) | <notextile>SI-5189 detect unsoundness when inferring type of match</notextile>
[SI-6555](https://issues.scala-lang.org/browse/SI-6555) | [38404e8](https://github.com/scala/scala/commit/38404e8) | <notextile>SI-6555 Scaladoc's class filter shouldn't drop the last character</notextile>
[SI-6930](https://issues.scala-lang.org/browse/SI-6930) | [0f237e9](https://github.com/scala/scala/commit/0f237e9) | <notextile>SI-6930 adds documentation to reduceLeft in TraversableOnce</notextile>
[SI-6905](https://issues.scala-lang.org/browse/SI-6905) | [57ae1f3](https://github.com/scala/scala/commit/57ae1f3) | <notextile>SI-6905 - Switch to sneakyThrows instead of Unsafe.throwException as per new jsr166y to avoid issues with Android</notextile>
[SI-6126](https://issues.scala-lang.org/browse/SI-6126) | [25c7364](https://github.com/scala/scala/commit/25c7364) | <notextile>SI-6126 Test case for varargs of tagged primitives.</notextile>
[SI-6946](https://issues.scala-lang.org/browse/SI-6946), [SI-6924](https://issues.scala-lang.org/browse/SI-6924) | [79a722f](https://github.com/scala/scala/commit/79a722f) | <notextile>SI-6946, SI-6924 Greatly improves IsTraversableLike docs</notextile>
[SI-5954](https://issues.scala-lang.org/browse/SI-5954) | [3ef487e](https://github.com/scala/scala/commit/3ef487e) | <notextile>SI-5954 Implementation restriction preventing companions in package objs</notextile>
[SI-6521](https://issues.scala-lang.org/browse/SI-6521) | [a557a97](https://github.com/scala/scala/commit/a557a97) | <notextile>Fixes SI-6521, overrides Range#head to be faster</notextile>
[SI-5553](https://issues.scala-lang.org/browse/SI-5553), [SI-6912](https://issues.scala-lang.org/browse/SI-6912) | [7a23562](https://github.com/scala/scala/commit/7a23562) | <notextile>SI-6912 Avoid a typer cycle in overload resolution.</notextile>
[SI-6846](https://issues.scala-lang.org/browse/SI-6846), [SI-6846](https://issues.scala-lang.org/browse/SI-6846) | [e5da30b](https://github.com/scala/scala/commit/e5da30b) | <notextile>Backport of SI-6846.</notextile>
[SI-6928](https://issues.scala-lang.org/browse/SI-6928) | [c58647f](https://github.com/scala/scala/commit/c58647f) | <notextile>SI-6928, VerifyError with self reference to super.</notextile>
[SI-6641](https://issues.scala-lang.org/browse/SI-6641) | [557caa3](https://github.com/scala/scala/commit/557caa3) | <notextile>SI-6641 Deprecate SwingWorker</notextile>
[SI-6803](https://issues.scala-lang.org/browse/SI-6803) | [103a478](https://github.com/scala/scala/commit/103a478) | <notextile>SI-6803: do not use java.net.URI, even more so incorrectly.</notextile>
[SI-6894](https://issues.scala-lang.org/browse/SI-6894) | [3bb8745](https://github.com/scala/scala/commit/3bb8745) | <notextile>Fixes and features for javap (fixing SI-6894)</notextile>
[SI-6955](https://issues.scala-lang.org/browse/SI-6955) | [38958f4](https://github.com/scala/scala/commit/38958f4) | <notextile>SI-6955 switch emission no longer foiled by type alias</notextile>
[SI-6964](https://issues.scala-lang.org/browse/SI-6964) | [b61a64d](https://github.com/scala/scala/commit/b61a64d) | <notextile>SI-6964 Remove build managers, both simple and refined.</notextile>
[SI-6375](https://issues.scala-lang.org/browse/SI-6375) | [61f70e4](https://github.com/scala/scala/commit/61f70e4) | <notextile>SI-6375, warn on lost annotation.</notextile>
[SI-5189](https://issues.scala-lang.org/browse/SI-5189) | [bd4bffa](https://github.com/scala/scala/commit/bd4bffa) | <notextile>SI-5189 detect unsoundness when inferring type of match</notextile>
[SI-6966](https://issues.scala-lang.org/browse/SI-6966) | [58bfa19](https://github.com/scala/scala/commit/58bfa19) | <notextile>SI-6966 Fix regression in implicit resolution</notextile>
[SI-5923](https://issues.scala-lang.org/browse/SI-5923) | [fe60284](https://github.com/scala/scala/commit/fe60284) | <notextile>SI-5923 adapt macros when they are deferred</notextile>
[SI-5903](https://issues.scala-lang.org/browse/SI-5903) | [66acf36](https://github.com/scala/scala/commit/66acf36) | <notextile>SI-5903 extractor macros do work</notextile>
[SI-6440](https://issues.scala-lang.org/browse/SI-6440), [SI-6641](https://issues.scala-lang.org/browse/SI-6641) | [c45491c](https://github.com/scala/scala/commit/c45491c) | <notextile>SI-6641 Cull scala.swing.SwingWorker</notextile>
[SI-5378](https://issues.scala-lang.org/browse/SI-5378) | [31f073c](https://github.com/scala/scala/commit/31f073c) | <notextile>SI-5378, unsoundness with type bounds in refinements.</notextile>
[SI-6566](https://issues.scala-lang.org/browse/SI-6566) | [a419799](https://github.com/scala/scala/commit/a419799) | <notextile>SI-6566, unsoundness with alias variance.</notextile>
[SI-6894](https://issues.scala-lang.org/browse/SI-6894) | [942f078](https://github.com/scala/scala/commit/942f078) | <notextile>Repl javap decodes various synthetic names for us (fixing SI-6894)</notextile>
[SI-6915](https://issues.scala-lang.org/browse/SI-6915) | [77c8751](https://github.com/scala/scala/commit/77c8751) | <notextile>SI-6915 Updates copyright properties to 2002-2013</notextile>
[SI-6897](https://issues.scala-lang.org/browse/SI-6897) | [3405294](https://github.com/scala/scala/commit/3405294) | <notextile>SI-6897, lubs and varargs star.</notextile>
[SI-6896](https://issues.scala-lang.org/browse/SI-6896) | [a6ce037](https://github.com/scala/scala/commit/a6ce037) | <notextile>SI-6896, spurious warning with overloaded main.</notextile>
[SI-6911](https://issues.scala-lang.org/browse/SI-6911) | [eeb6ee6](https://github.com/scala/scala/commit/eeb6ee6) | <notextile>SI-6911, regression in generated case class equality.</notextile>
[SI-6827](https://issues.scala-lang.org/browse/SI-6827) | [92cf0e3](https://github.com/scala/scala/commit/92cf0e3) | <notextile>Fix Iterator#copyToArray (fixes SI-6827).</notextile>
[SI-5017](https://issues.scala-lang.org/browse/SI-5017) | [02b2da6](https://github.com/scala/scala/commit/02b2da6) | <notextile>SI-5017 Poor performance of :+ operator on Arrays</notextile>
[SI-6194](https://issues.scala-lang.org/browse/SI-6194) | [ac61e34](https://github.com/scala/scala/commit/ac61e34) | <notextile>SI-6194, repl crash.</notextile>
[SI-6746](https://issues.scala-lang.org/browse/SI-6746) | [e5f16ac](https://github.com/scala/scala/commit/e5f16ac) | <notextile>SI-6746 Fixes MANIFEST.MF package entry (s.r.makro -&gt; s.r.macros)</notextile>
[SI-6415](https://issues.scala-lang.org/browse/SI-6415) | [24a033b](https://github.com/scala/scala/commit/24a033b) | <notextile>SI-6415, overly eager evaluation in Stream.</notextile>
[SI-6829](https://issues.scala-lang.org/browse/SI-6829), [SI-6788](https://issues.scala-lang.org/browse/SI-6788) | [231d59d](https://github.com/scala/scala/commit/231d59d) | <notextile>SI-6829, SI-6788, NPEs during erroneous compilation.</notextile>
[SI-6338](https://issues.scala-lang.org/browse/SI-6338) | [3a6f3ae](https://github.com/scala/scala/commit/3a6f3ae) | <notextile>SI-6338 fixes the unchecked warning in quick.comp</notextile>




#### Complete commit list!

sha | Title
---: | ---
[4ab66d1](https://github.com/scala/scala/commit/4ab66d1) | <notextile>SI-7494 Tests for status quo</notextile>
[e0bd62c](https://github.com/scala/scala/commit/e0bd62c) | <notextile>SI-7494 Each plugin must only be instantiated once.</notextile>
[b6757e1](https://github.com/scala/scala/commit/b6757e1) | <notextile>An attempt to make tests deterministic.</notextile>
[3fb3175](https://github.com/scala/scala/commit/3fb3175) | <notextile>SI-7427 stop crashing under -Ydebug.</notextile>
[08c7293](https://github.com/scala/scala/commit/08c7293) | <notextile>SI-7201 scaladoc url in scala-(library,actors,swing,reflect) pom</notextile>
[12a130d](https://github.com/scala/scala/commit/12a130d) | <notextile>SI-6424 Scaladoc: Use mapNodes.get(_) to avoid NoSuchElementException</notextile>
[f628565](https://github.com/scala/scala/commit/f628565) | <notextile>Prevent slash duplication.</notextile>
[7f9feba](https://github.com/scala/scala/commit/7f9feba) | <notextile>[backport #1727] SI-7359 cyclic nested java class</notextile>
[dd33e28](https://github.com/scala/scala/commit/dd33e28) | <notextile>SI-7486 regression in implicit resolution.</notextile>
[6114038](https://github.com/scala/scala/commit/6114038) | <notextile>[nomaster] unbreaks test.bc</notextile>
[b11324a](https://github.com/scala/scala/commit/b11324a) | <notextile>SI-7492 Remove -Ystruct-dispatch and associated code</notextile>
[b4751a6](https://github.com/scala/scala/commit/b4751a6) | <notextile>No bounds-driven inference for the named.</notextile>
[e28c3ed](https://github.com/scala/scala/commit/e28c3ed) | <notextile>SI-1786 incorporate defined bounds in inference</notextile>
[0bece25](https://github.com/scala/scala/commit/0bece25) | <notextile>ScriptEngine.eval() forwards Error instead of new ScriptException</notextile>
[44a46f8](https://github.com/scala/scala/commit/44a46f8) | <notextile>Deprecate parameter names in scala.concurrent</notextile>
[9db9df7](https://github.com/scala/scala/commit/9db9df7) | <notextile>SI-7484 Indentation and whitespace fixes</notextile>
[cba29e6](https://github.com/scala/scala/commit/cba29e6) | <notextile>SI-7484 Add @SupressWarning(rawtypes/unchecked)</notextile>
[538aa22](https://github.com/scala/scala/commit/538aa22) | <notextile>SI-6488 Interrupt i/o threads on process destroy</notextile>
[5e71539](https://github.com/scala/scala/commit/5e71539) | <notextile>SI-7464 allows FieldMirror.set to update vals</notextile>
[bc10715](https://github.com/scala/scala/commit/bc10715) | <notextile>easy way of writing not implemented macros</notextile>
[b08c135](https://github.com/scala/scala/commit/b08c135) | <notextile>Fix for unreachable code warning.</notextile>
[e9c3f87](https://github.com/scala/scala/commit/e9c3f87) | <notextile>SI-5886 Remove check for packed type conformance.</notextile>
[963c4a7](https://github.com/scala/scala/commit/963c4a7) | <notextile>Actual SI-6555 fix, Scaladoc filter works WITH keyboard shortcuts too</notextile>
[b32d294](https://github.com/scala/scala/commit/b32d294) | <notextile>SI-7383 - Call ExecutionContext.prepare in Future.apply to allow for capturing local context like ThreadLocals and then re-establishing them prior to execution, as per intention of EC.prepare</notextile>
[77437ff](https://github.com/scala/scala/commit/77437ff) | <notextile>SI-7442 Update bundled Fork/Join pool (JSR166y)</notextile>
[4e64a27](https://github.com/scala/scala/commit/4e64a27) | <notextile>[nomaster] removes duplication in inferImplicitValue</notextile>
[3edde27](https://github.com/scala/scala/commit/3edde27) | <notextile>[nomaster] SI-7166 catches DivergentImplicit in c.inferImplicitXXX</notextile>
[b4da864](https://github.com/scala/scala/commit/b4da864) | <notextile>[nomaster] SI-7047 fixes silent for c.inferImplicitXXX</notextile>
[fdead2b](https://github.com/scala/scala/commit/fdead2b) | <notextile>[nomaster] SI-7291: No exception throwing for diverging implicit expansion</notextile>
[8168f11](https://github.com/scala/scala/commit/8168f11) | <notextile>[nomaster] SI-7167 implicit macros decide what is divergence</notextile>
[bb73b96](https://github.com/scala/scala/commit/bb73b96) | <notextile>[nomaster] macroExpandAll is now triggered in all invocations of typed</notextile>
[90ac5c4](https://github.com/scala/scala/commit/90ac5c4) | <notextile>[nomaster] SI-5923 instantiates targs in deferred macro applications</notextile>
[0c6927b](https://github.com/scala/scala/commit/0c6927b) | <notextile>[nomaster] temporarily breaks SI-5353</notextile>
[7562499](https://github.com/scala/scala/commit/7562499) | <notextile>Scaladoc: fixing small typo in PartialFunction.scala</notextile>
[5751ddd](https://github.com/scala/scala/commit/5751ddd) | <notextile>pull request feedback</notextile>
[75a3b88](https://github.com/scala/scala/commit/75a3b88) | <notextile>replaces inferBootClasspath with a simple lookup at sun.boot.class.path</notextile>
[35c0145](https://github.com/scala/scala/commit/35c0145) | <notextile>removes the traces of always on debug diagnostics</notextile>
[a3d03ab](https://github.com/scala/scala/commit/a3d03ab) | <notextile>fixes a crash in ReflectionUtils.systemProperties</notextile>
[f1040ea](https://github.com/scala/scala/commit/f1040ea) | <notextile>fixes a checkfile breakage in 2.10.x</notextile>
[8325729](https://github.com/scala/scala/commit/8325729) | <notextile>SI-5734 Allow setting of socket timeout for remote actors</notextile>
[b2c67b3](https://github.com/scala/scala/commit/b2c67b3) | <notextile>SI-7398 Add support for java8 default methods</notextile>
[fbb1363](https://github.com/scala/scala/commit/fbb1363) | <notextile>Refactor DirectTest so java can be tested.</notextile>
[25f49cb](https://github.com/scala/scala/commit/25f49cb) | <notextile>literal() now assigns a position to the tree it produces</notextile>
[cb1a427](https://github.com/scala/scala/commit/cb1a427) | <notextile>SI-7325 cleans up corner cases of percent handling in StringContext.f</notextile>
[a8edefc](https://github.com/scala/scala/commit/a8edefc) | <notextile>SI-7271 fixes positions of string interpolation parts</notextile>
[df3cae7](https://github.com/scala/scala/commit/df3cae7) | <notextile>SI-7426 Crash in pickler.</notextile>
[3abdaf4](https://github.com/scala/scala/commit/3abdaf4) | <notextile>SI-5634 eliminate overly verbose error message</notextile>
[e86832d](https://github.com/scala/scala/commit/e86832d) | <notextile>SI-7441 Don't ramble on about inapplicable implicits.</notextile>
[d0a1f5b](https://github.com/scala/scala/commit/d0a1f5b) | <notextile>SI-7385 crash in erroneous code</notextile>
[62cdd7f](https://github.com/scala/scala/commit/62cdd7f) | <notextile>SI-6091 overeager warning for reference equality</notextile>
[3009916](https://github.com/scala/scala/commit/3009916) | <notextile>SI-6771 Alias awareness for checkableType in match analysis.</notextile>
[e85df24](https://github.com/scala/scala/commit/e85df24) | <notextile>Read-eval-print : the script engine does not need print so make it lazy</notextile>
[1d1492f](https://github.com/scala/scala/commit/1d1492f) | <notextile>Add :kind command to REPL</notextile>
[37707cd](https://github.com/scala/scala/commit/37707cd) | <notextile>Unprivatize methods in SyncVar.</notextile>
[e36bb0b](https://github.com/scala/scala/commit/e36bb0b) | <notextile>Revert &quot;SI-7469 Remove @deprecated MurmurHash elements&quot;</notextile>
[37884ec](https://github.com/scala/scala/commit/37884ec) | <notextile>SI-7482 Don't cook raw types after erasure.</notextile>
[add19e6](https://github.com/scala/scala/commit/add19e6) | <notextile>No longer cache all subclass templates.</notextile>
[005a08d](https://github.com/scala/scala/commit/005a08d) | <notextile>Remove self types check suppression usage from scaladoc.</notextile>
[c88f733](https://github.com/scala/scala/commit/c88f733) | <notextile>Improve code style in the Scaladoc implementation.</notextile>
[9a43611](https://github.com/scala/scala/commit/9a43611) | <notextile>remove unused methods: checkStable, isStableExceptVolatile</notextile>
[fada1ef](https://github.com/scala/scala/commit/fada1ef) | <notextile>SI-6815 untangle isStable and hasVolatileType</notextile>
[97d5179](https://github.com/scala/scala/commit/97d5179) | <notextile>make treeInfo more globally visible</notextile>
[135cfa8](https://github.com/scala/scala/commit/135cfa8) | <notextile>SI-6406 Restore deprecated API</notextile>
[0c7c521](https://github.com/scala/scala/commit/0c7c521) | <notextile>SI-3943 Test case for already-fixed Java interop bug</notextile>
[ae43506](https://github.com/scala/scala/commit/ae43506) | <notextile>SI-7469 Remove @deprecated scala.util.logging</notextile>
[4478560](https://github.com/scala/scala/commit/4478560) | <notextile>SI-7476 Add documentation to GenericTraversableTemplate</notextile>
[80f1fa5](https://github.com/scala/scala/commit/80f1fa5) | <notextile>Fix formatting for couple of docs in the compiler</notextile>
[ac990c1](https://github.com/scala/scala/commit/ac990c1) | <notextile>SI-7469 Make @deprecated elems in scala.concurrent private[scala]</notextile>
[e544786](https://github.com/scala/scala/commit/e544786) | <notextile>SI-7469 Remove deprecated elements in s.u.parsing.combinator</notextile>
[7e9c21f](https://github.com/scala/scala/commit/7e9c21f) | <notextile>SI-7469 Remove @deprecated MurmurHash elements</notextile>
[966f51c](https://github.com/scala/scala/commit/966f51c) | <notextile>removes duplication in inferImplicitValue</notextile>
[b153880](https://github.com/scala/scala/commit/b153880) | <notextile>SI-7047 fixes silent for c.inferImplicitXXX</notextile>
[c539ae2](https://github.com/scala/scala/commit/c539ae2) | <notextile>SI-7167 implicit macros decide what is divergence</notextile>
[a35b6bc](https://github.com/scala/scala/commit/a35b6bc) | <notextile>macroExpandAll is now triggered in all invocations of typed</notextile>
[adef4b5](https://github.com/scala/scala/commit/adef4b5) | <notextile>SI-5923 instantiates targs in deferred macro applications</notextile>
[b0758f5](https://github.com/scala/scala/commit/b0758f5) | <notextile>SI-6039 Harden against irrelevant filesystem details</notextile>
[6486f9f](https://github.com/scala/scala/commit/6486f9f) | <notextile>fix typo in comment</notextile>
[abc314a](https://github.com/scala/scala/commit/abc314a) | <notextile>AbstractFile.getDirectory does not return null when outDir is &quot;.&quot;</notextile>
[0ee9204](https://github.com/scala/scala/commit/0ee9204) | <notextile>SI-7469 Remove @deprecated scala.util.parsing.ast</notextile>
[15df9e9](https://github.com/scala/scala/commit/15df9e9) | <notextile>Limit unnecessary calls to Type#toString.</notextile>
[6890f38](https://github.com/scala/scala/commit/6890f38) | <notextile>SI-7432 add testcases</notextile>
[357c2df](https://github.com/scala/scala/commit/357c2df) | <notextile>SI-7432 Range.min should throw NoSuchElementException on empty range</notextile>
[9e25797](https://github.com/scala/scala/commit/9e25797) | <notextile>Par-Test includes log in transcript of failed exec</notextile>
[89ced24](https://github.com/scala/scala/commit/89ced24) | <notextile>Boil out some duplicated parser logic.</notextile>
[c1286ab](https://github.com/scala/scala/commit/c1286ab) | <notextile>Flesh out copyMemberDef methods with copyModuleDef.</notextile>
[fb5eb8d](https://github.com/scala/scala/commit/fb5eb8d) | <notextile>indentation typo</notextile>
[265fc6b](https://github.com/scala/scala/commit/265fc6b) | <notextile>SI-6863 root cause fixed using factory of scala.runtime.*Ref</notextile>
[c31e44f](https://github.com/scala/scala/commit/c31e44f) | <notextile>Partest can --show-diff again after incremental report.</notextile>
[a86c7a1](https://github.com/scala/scala/commit/a86c7a1) | <notextile>Hardening against nulls for deserialization.</notextile>
[80ac7d0](https://github.com/scala/scala/commit/80ac7d0) | <notextile>Absolutized paths involving the scala package.</notextile>
[1ce4ecd](https://github.com/scala/scala/commit/1ce4ecd) | <notextile>Rewrite TailCalls for performance and immutability.</notextile>
[83c059d](https://github.com/scala/scala/commit/83c059d) | <notextile>use relative symlink in distpack</notextile>
[17f8101](https://github.com/scala/scala/commit/17f8101) | <notextile>SI-6532 emit debug info in compiled java.</notextile>
[d3aa9a7](https://github.com/scala/scala/commit/d3aa9a7) | <notextile>Warn on selection of vals from DelayedInit subclasses.</notextile>
[6271396](https://github.com/scala/scala/commit/6271396) | <notextile>SI-7369 Avoid spurious unreachable warnings in patterns</notextile>
[184cac8](https://github.com/scala/scala/commit/184cac8) | <notextile>SI-7367 scaladoc crash on constructing the model for annotations.</notextile>
[b40749f](https://github.com/scala/scala/commit/b40749f) | <notextile>Corrects link in README.rst</notextile>
[19a61e5](https://github.com/scala/scala/commit/19a61e5) | <notextile>Update links to old website, in preparation for launch.</notextile>
[8448beb](https://github.com/scala/scala/commit/8448beb) | <notextile>SI-6943 warn on value class miscomparison.</notextile>
[c1327dc](https://github.com/scala/scala/commit/c1327dc) | <notextile>SI-6675 Avoid spurious warning about pattern bind arity.</notextile>
[0d2c7e9](https://github.com/scala/scala/commit/0d2c7e9) | <notextile>SI-7355 Handle spaces in paths in Windows batch files.</notextile>
[9d98b6d](https://github.com/scala/scala/commit/9d98b6d) | <notextile>Interactive scaladoc: mark new typer run when done.</notextile>
[e7aadd0](https://github.com/scala/scala/commit/e7aadd0) | <notextile>SI-7330 better error when pattern isn't a value</notextile>
[8556ca0](https://github.com/scala/scala/commit/8556ca0) | <notextile>Quiet down overloaded implicit warning.</notextile>
[8703e00](https://github.com/scala/scala/commit/8703e00) | <notextile>SI-7200 Test case for fixed type inference error.</notextile>
[12dd8c0](https://github.com/scala/scala/commit/12dd8c0) | <notextile>More useful checkfile output in interactive tests.</notextile>
[e6af9bc](https://github.com/scala/scala/commit/e6af9bc) | <notextile>SI-7362, crash in presentation compiler.</notextile>
[6227837](https://github.com/scala/scala/commit/6227837) | <notextile>SI-7409 Par-Test: A crash is not a DNC for neg tests</notextile>
[0c6bcc9](https://github.com/scala/scala/commit/0c6bcc9) | <notextile>Partest has an optionable wait period.</notextile>
[bf44669](https://github.com/scala/scala/commit/bf44669) | <notextile>SI-7349 Partest supports test-interface</notextile>
[b47ca5b](https://github.com/scala/scala/commit/b47ca5b) | <notextile>Update ScalaCheck to 1.10.1.</notextile>
[b4d54be](https://github.com/scala/scala/commit/b4d54be) | <notextile>Partest testnum field width is sensitive to total tests</notextile>
[e4f62c0](https://github.com/scala/scala/commit/e4f62c0) | <notextile>SI-7358 Partest fails on scalacheck failure</notextile>
c905b95 | <notextile>no need to manually clear perRunCaches in GenASM</notextile>
[176a1ba](https://github.com/scala/scala/commit/176a1ba) | <notextile>maps in GenASM guaranteed mem-leak-free by perRunCaches</notextile>
[d516f38](https://github.com/scala/scala/commit/d516f38) | <notextile>SI-7422 GenASM populates and clears its maps within a Run</notextile>
[7158142](https://github.com/scala/scala/commit/7158142) | <notextile>SI-7291: Remove error kinds.</notextile>
[accaa31](https://github.com/scala/scala/commit/accaa31) | <notextile>SI-7291: No exception throwing for diverging implicit expansion</notextile>
[1931f45](https://github.com/scala/scala/commit/1931f45) | <notextile>BytecodeWriters.BytecodeWriter doesn't need to fiddle with Symbol</notextile>
[38f426d](https://github.com/scala/scala/commit/38f426d) | <notextile>compiler flag -Ygen-asmp to emit .asmp textual files for bytecode</notextile>
[d419227](https://github.com/scala/scala/commit/d419227) | <notextile>Route -explaintypes through reporter.</notextile>
[f59be7a](https://github.com/scala/scala/commit/f59be7a) | <notextile>SI-7429 Fix checkinit build failure in Contexts</notextile>
[5a8329a](https://github.com/scala/scala/commit/5a8329a) | <notextile>Address a deprecation warnings in scala-swing.</notextile>
[2e5c7b9](https://github.com/scala/scala/commit/2e5c7b9) | <notextile>SI-6784 Localize feature imports in scala.swing.</notextile>
[71eaf6d](https://github.com/scala/scala/commit/71eaf6d) | <notextile>Updated jline and rebuilt.</notextile>
[c4d0fd9](https://github.com/scala/scala/commit/c4d0fd9) | <notextile>-Yshow-member-pos, print the positions of members.</notextile>
[a61c9c4](https://github.com/scala/scala/commit/a61c9c4) | <notextile>Documented lateMETHOD flag.</notextile>
[8c77915](https://github.com/scala/scala/commit/8c77915) | <notextile>Call method rather than duplicating method.</notextile>
[e9011f5](https://github.com/scala/scala/commit/e9011f5) | <notextile>deprecation cycle for definitions.NPEConstructor</notextile>
[fc8387f](https://github.com/scala/scala/commit/fc8387f) | <notextile>improved naming of variables in constructors phase</notextile>
[b4fbb7b](https://github.com/scala/scala/commit/b4fbb7b) | <notextile>translation for DelayedInit keeps more code in original class</notextile>
[7211432](https://github.com/scala/scala/commit/7211432) | <notextile>avoids multiple evals of isSubClass DelayedInitClass</notextile>
[8dc0c3d](https://github.com/scala/scala/commit/8dc0c3d) | <notextile>for null outer pointer, NPE via throw null</notextile>
[4ca6eb8](https://github.com/scala/scala/commit/4ca6eb8) | <notextile>Created utility function for dropping by-name-ness.</notextile>
[2dc28a2](https://github.com/scala/scala/commit/2dc28a2) | <notextile>role played by magic constant in ScalaSigBytes</notextile>
[0b6a592](https://github.com/scala/scala/commit/0b6a592) | <notextile>another GenJVM remnant that goes away</notextile>
[af0184d](https://github.com/scala/scala/commit/af0184d) | <notextile>removing remnants from the GenJVM era</notextile>
[449da43](https://github.com/scala/scala/commit/449da43) | <notextile>static methods may have local variables too, some day</notextile>
[8f08151](https://github.com/scala/scala/commit/8f08151) | <notextile>SI-7421 remove unneeded extra-attachement in maven deploy</notextile>
[bdae05f](https://github.com/scala/scala/commit/bdae05f) | <notextile>SI-7403 Stream extends Serializable</notextile>
[7b4e450](https://github.com/scala/scala/commit/7b4e450) | <notextile>SI-4365 nondeterministic failure in asSeenFrom</notextile>
[b50e6b4](https://github.com/scala/scala/commit/b50e6b4) | <notextile>check added instruction to ASM MethodNode</notextile>
[35209fc](https://github.com/scala/scala/commit/35209fc) | <notextile>Minor overhaul of lub-producing typer methods.</notextile>
[9a3bd6c](https://github.com/scala/scala/commit/9a3bd6c) | <notextile>Simplify some checks in Refchecks.</notextile>
[cf93e02](https://github.com/scala/scala/commit/cf93e02) | <notextile>Added ensureFullyDefined.</notextile>
[fe8280c](https://github.com/scala/scala/commit/fe8280c) | <notextile>Added orElse to Type.</notextile>
[648784c](https://github.com/scala/scala/commit/648784c) | <notextile>SI-7345 Address review comments.</notextile>
[c598e76](https://github.com/scala/scala/commit/c598e76) | <notextile>SI-7345 Improved Context.toString</notextile>
[85af192](https://github.com/scala/scala/commit/85af192) | <notextile>SI-7345 Eliminate the `depth` var.</notextile>
[2304a78](https://github.com/scala/scala/commit/2304a78) | <notextile>SI-7345 Drive by refactoring of pattern matching for `arg: _*`.</notextile>
[e112db6](https://github.com/scala/scala/commit/e112db6) | <notextile>SI-7345 Factor out method to clear and restore undetparams.</notextile>
[0ce81c8](https://github.com/scala/scala/commit/0ce81c8) | <notextile>SI-7345 Remove unneeded warning.</notextile>
[ec33ad0](https://github.com/scala/scala/commit/ec33ad0) | <notextile>SI-7345 Doc and TODO comments around Context.</notextile>
[dbd8457](https://github.com/scala/scala/commit/dbd8457) | <notextile>SI-7345 Produce Context#imports from the context chain</notextile>
[78e7eba](https://github.com/scala/scala/commit/78e7eba) | <notextile>SI-7345 Refactor manual iteration to use foreach.</notextile>
[7ce4de4](https://github.com/scala/scala/commit/7ce4de4) | <notextile>SI-7345 Move `inSilentMode` from Infer to Context.</notextile>
[bba9d3d](https://github.com/scala/scala/commit/bba9d3d) | <notextile>SI-7345 remove unused methods.</notextile>
[510ebec](https://github.com/scala/scala/commit/510ebec) | <notextile>SI-7345 Prefer using a throwaway silent context over buffer flushing.</notextile>
[ec5eaee](https://github.com/scala/scala/commit/ec5eaee) | <notextile>SI-7345 More refactoring and documentation in Contexts</notextile>
[190aea9](https://github.com/scala/scala/commit/190aea9) | <notextile>SI-7345 Exploit named/default args   - Collapse overloads of `rootContext`   - make `atOwner` more concise</notextile>
[c9f5ab0](https://github.com/scala/scala/commit/c9f5ab0) | <notextile>SI-7345 Encapsulate warning and error buffers in ReportBuffer.</notextile>
[ff5dde1](https://github.com/scala/scala/commit/ff5dde1) | <notextile>SI-7345 Add Context#isLocal, akin to Symbol#isLocal</notextile>
[b1cb004](https://github.com/scala/scala/commit/b1cb004) | <notextile>SI-7345 Use combinator to find next enclosing non-template.</notextile>
[281b850](https://github.com/scala/scala/commit/281b850) | <notextile>SI-7345 Remove comment that appears obsolete.</notextile>
[f2c351c](https://github.com/scala/scala/commit/f2c351c) | <notextile>SI-7345 Rationalize overloads of Context#make</notextile>
[e658b63](https://github.com/scala/scala/commit/e658b63) | <notextile>SI-7345 Represent the boolean modes in Context in ContextMode.</notextile>
[372965b](https://github.com/scala/scala/commit/372965b) | <notextile>SI-7402 List extends Serializable</notextile>
[4c715eb](https://github.com/scala/scala/commit/4c715eb) | <notextile>Par-Test allows redefinition of srcDir by Ant</notextile>
[d49d36f](https://github.com/scala/scala/commit/d49d36f) | <notextile>Disabled failing bitset test.</notextile>
[cdffcf8](https://github.com/scala/scala/commit/cdffcf8) | <notextile>Eliminated the accumulated feature warnings.</notextile>
[1da48a4](https://github.com/scala/scala/commit/1da48a4) | <notextile>Eliminate a pile of -Xlint warnings.</notextile>
[0f1a004](https://github.com/scala/scala/commit/0f1a004) | <notextile>Taught -Xlint about @implicitNotFound.</notextile>
[d02ccc3](https://github.com/scala/scala/commit/d02ccc3) | <notextile>Fix unchecked warning.</notextile>
[6f47caf](https://github.com/scala/scala/commit/6f47caf) | <notextile>SI-6898 Document AnyVal box and unbox implemention by BoxesRunTime</notextile>
[240fa30](https://github.com/scala/scala/commit/240fa30) | <notextile>Reverting changes to AnyVals generated classes in 9a82fc0</notextile>
[c29405d](https://github.com/scala/scala/commit/c29405d) | <notextile>Simplify type bounds.</notextile>
[5c6d62a](https://github.com/scala/scala/commit/5c6d62a) | <notextile>SI-7408 Fix test by sorting results of getDeclaredClasses</notextile>
[12a18ee](https://github.com/scala/scala/commit/12a18ee) | <notextile>SI-7376 Bad doc variable error is positioned at the variable.</notextile>
[fecc7e0](https://github.com/scala/scala/commit/fecc7e0) | <notextile>SI-7376 Additional trivial Scaladoc format corrections</notextile>
[3f0a90b](https://github.com/scala/scala/commit/3f0a90b) | <notextile>SI-7376 Unmoored doc has correct position</notextile>
[0fde95e](https://github.com/scala/scala/commit/0fde95e) | <notextile>SI-7376 Scaladoc warns when discarding local doc comments with API tags</notextile>
[e8c85a3](https://github.com/scala/scala/commit/e8c85a3) | <notextile>SI-7080 improve boundary value checking for BitSet</notextile>
[47b626e](https://github.com/scala/scala/commit/47b626e) | <notextile>Change unrecognized scaladoc comments to C-style</notextile>
[5cc2eb8](https://github.com/scala/scala/commit/5cc2eb8) | <notextile>SI-7324 jvm not cool with 255+ parameters</notextile>
[c58b0ab](https://github.com/scala/scala/commit/c58b0ab) | <notextile>Fixed BigDecimal documentation for primitive conversion methods.</notextile>
[f93c4c9](https://github.com/scala/scala/commit/f93c4c9) | <notextile>SI-7337 Error out on missing -d directory.</notextile>
[578ef1f](https://github.com/scala/scala/commit/578ef1f) | <notextile>SI-7319 Remove unused method.</notextile>
[962f88e](https://github.com/scala/scala/commit/962f88e) | <notextile>SI-7377 Remove special treatment of `stableFun()` in patterns.</notextile>
[351d5ec](https://github.com/scala/scala/commit/351d5ec) | <notextile>Absolute path in error message.</notextile>
[3e27fec](https://github.com/scala/scala/commit/3e27fec) | <notextile>SI-7388 Be more robust against cycles in error symbol creation.</notextile>
[15e9ef8](https://github.com/scala/scala/commit/15e9ef8) | <notextile>SI-7377 Fix retypechecking of patterns on case companion alias</notextile>
[ef04619](https://github.com/scala/scala/commit/ef04619) | <notextile>SI-7319 Clear error buffer during Typer reset.</notextile>
[aa6723c](https://github.com/scala/scala/commit/aa6723c) | <notextile>SI-7329 duplicate default getters for specialized parameters.</notextile>
[e1af973](https://github.com/scala/scala/commit/e1af973) | <notextile>Remove scaladoc deprecated option.</notextile>
[01edd04](https://github.com/scala/scala/commit/01edd04) | <notextile>SI-7314 Partest locates tools.jar and javac</notextile>
[4e2459e](https://github.com/scala/scala/commit/4e2459e) | <notextile>Reifier -&gt; AST Node test.</notextile>
660c8fd | <notextile>SI-7315 Test @deprecatedInheritance / @specialized interplay</notextile>
[54d11fe](https://github.com/scala/scala/commit/54d11fe) | <notextile>SI-7312 @deprecatedInheritance now ignores same-file subclasses</notextile>
[6690455](https://github.com/scala/scala/commit/6690455) | <notextile>SI-7335 Remove special case for import of Predef._ in Predef.scala</notextile>
[b0fceeb](https://github.com/scala/scala/commit/b0fceeb) | <notextile>SI-7335 Sharpen up comment about implicit prioritization.</notextile>
[ae69de4](https://github.com/scala/scala/commit/ae69de4) | <notextile>SI-7335 Add logging for a now-impossible* case in Symbol#exists.</notextile>
[9d7f811](https://github.com/scala/scala/commit/9d7f811) | <notextile>SI-7335 Don't import Predef._ in Predef.scala</notextile>
[d43f5ce](https://github.com/scala/scala/commit/d43f5ce) | <notextile>SI-7335 Mandate that parents of Predef must be defined in Predef.scala</notextile>
[67c2d6d](https://github.com/scala/scala/commit/67c2d6d) | <notextile>SI-6286 IllegalArgumentException handling specialized method.</notextile>
[23dd325](https://github.com/scala/scala/commit/23dd325) | <notextile>SI-7360 Don't let a follow-up TypeError obscure the original error.</notextile>
[2885eb0](https://github.com/scala/scala/commit/2885eb0) | <notextile>Revert &quot;SI-6387 Clones accessor before name expansion&quot;</notextile>
[7250312](https://github.com/scala/scala/commit/7250312) | <notextile>SI-6386 typed existential type tree's original now have tpe set</notextile>
[6a61e17](https://github.com/scala/scala/commit/6a61e17) | <notextile>SI-7289 Less strict type application for TypeVar.</notextile>
[34a6fa9](https://github.com/scala/scala/commit/34a6fa9) | <notextile>SI-6937 core type tags are no longer referentially unique</notextile>
[7072acb](https://github.com/scala/scala/commit/7072acb) | <notextile>Optimization: avoid call to exists in PlainFile#iterator</notextile>
[246eceb](https://github.com/scala/scala/commit/246eceb) | <notextile>Optimization: avoid isDirectory call in DirectoryClassPath traversal</notextile>
[0cb6324](https://github.com/scala/scala/commit/0cb6324) | <notextile>Add counters to File#{exists, isFile, isDirectory}.</notextile>
[f986d6d](https://github.com/scala/scala/commit/f986d6d) | <notextile>Reduce visibility of implicit class tags.</notextile>
dc3fa0a | <notextile>if starr.use.released fetch Scala ${starr.version} for STARR</notextile>
[3fe2e86](https://github.com/scala/scala/commit/3fe2e86) | <notextile>assume build.release when maven.version.suffix is set</notextile>
[7184bd3](https://github.com/scala/scala/commit/7184bd3) | <notextile>make quick.done depend on quick.bin again</notextile>
[0affa94](https://github.com/scala/scala/commit/0affa94) | <notextile>SI-7321 Memory leak in specialize on multiple compiler runs.</notextile>
[c2534bf](https://github.com/scala/scala/commit/c2534bf) | <notextile>SI-6900 Fix tailrec for dependent method types</notextile>
[d7545ec](https://github.com/scala/scala/commit/d7545ec) | <notextile>Simplify interplay between Uncurry Info- and Tree-Transformers</notextile>
[3ac185b](https://github.com/scala/scala/commit/3ac185b) | <notextile>Refactor existential related code out of types.</notextile>
[f7c9adc](https://github.com/scala/scala/commit/f7c9adc) | <notextile>Add a cautionary comment to TreeSymSubstitutor.</notextile>
[61308be](https://github.com/scala/scala/commit/61308be) | <notextile>Take the N^2 out of the compiler's TreeSet.</notextile>
[d21f90c](https://github.com/scala/scala/commit/d21f90c) | <notextile>SI-7147 Diagnostic for unexplained assertion in presentation compiler.</notextile>
[ca9c8ef](https://github.com/scala/scala/commit/ca9c8ef) | <notextile>SI-6793 Don't use super param accessors if inaccessible.</notextile>
[5f9bc05](https://github.com/scala/scala/commit/5f9bc05) | <notextile>SI-6715 Shouldn't return &quot;&quot; from TermNames.originalName</notextile>
[8e83703](https://github.com/scala/scala/commit/8e83703) | <notextile>Backport #2289's TermNames.unexpandedName as TermNames.originalName</notextile>
[da90207](https://github.com/scala/scala/commit/da90207) | <notextile>Correct sorting example for Ordering in scaladoc</notextile>
[684e874](https://github.com/scala/scala/commit/684e874) | <notextile>Transcendent rewrite of isSameType.</notextile>
[6bde11e](https://github.com/scala/scala/commit/6bde11e) | <notextile>Centrally unify module class representations.</notextile>
[ca2a09d](https://github.com/scala/scala/commit/ca2a09d) | <notextile>Optimization/logic improvement in Scopes.</notextile>
[497b0cb](https://github.com/scala/scala/commit/497b0cb) | <notextile>Add float version of the double NaN tests</notextile>
[dfdbfa7](https://github.com/scala/scala/commit/dfdbfa7) | <notextile>SI-7300 single line comment in multi line comment</notextile>
[0d95443](https://github.com/scala/scala/commit/0d95443) | <notextile>SI-6289 Paulptest demonstrating javac errors</notextile>
[c6ce617](https://github.com/scala/scala/commit/c6ce617) | <notextile>SI-6289 Partest in technicolor and showing javac errors</notextile>
[6591acb](https://github.com/scala/scala/commit/6591acb) | <notextile>comments to address reviewer feedback</notextile>
[92a1785](https://github.com/scala/scala/commit/92a1785) | <notextile>formatting</notextile>
[7c0e8f0](https://github.com/scala/scala/commit/7c0e8f0) | <notextile>Preliminary support for zinc.</notextile>
[ceeb40c](https://github.com/scala/scala/commit/ceeb40c) | <notextile>Regularity for build.xml: 1 output dir / project</notextile>
[5dca660](https://github.com/scala/scala/commit/5dca660) | <notextile>get rid of args element in staged-scalac</notextile>
[fa053a6](https://github.com/scala/scala/commit/fa053a6) | <notextile>doc fix for Types.baseClasses to match spec definition of Linearization 5.1.2</notextile>
[530f4a5](https://github.com/scala/scala/commit/530f4a5) | <notextile>SI-7110 Warn about naked try without catch/finally</notextile>
[da7e175](https://github.com/scala/scala/commit/da7e175) | <notextile>Add () to side-effecting u1/u2/u4.</notextile>
[f657c37](https://github.com/scala/scala/commit/f657c37) | <notextile>Reduce duplication in JavaMirrors.</notextile>
[8c78d4b](https://github.com/scala/scala/commit/8c78d4b) | <notextile>Brought some structure to the classfileparser.</notextile>
[71c14e4](https://github.com/scala/scala/commit/71c14e4) | <notextile>Cleaning up error handling.</notextile>
[13bb4e5](https://github.com/scala/scala/commit/13bb4e5) | <notextile>Fleshing out comments on JavaAccFlags.</notextile>
[15bc39a](https://github.com/scala/scala/commit/15bc39a) | <notextile>Abstract over java.lang.reflect.{ Method, Constructor }.</notextile>
[14aaa70](https://github.com/scala/scala/commit/14aaa70) | <notextile>Value class to represent jvm flags.</notextile>
[7168743](https://github.com/scala/scala/commit/7168743) | <notextile>Added ensureAccessible to reflection library.</notextile>
[29a9c64](https://github.com/scala/scala/commit/29a9c64) | <notextile>SI-7237 Always choose ForkJoinTaskSupport</notextile>
[22944e4](https://github.com/scala/scala/commit/22944e4) | <notextile>SI-7261 Implicit conversion of BooleanSetting to Boolean and BooleanFlag</notextile>
[e073975](https://github.com/scala/scala/commit/e073975) | <notextile>SI-7261 Implicit conversion of BooleanSetting to Boolean and BooleanFlag</notextile>
[edee27f](https://github.com/scala/scala/commit/edee27f) | <notextile>SI-6168 Retain prefix when parsing types in JVM signatures</notextile>
[0cc9496](https://github.com/scala/scala/commit/0cc9496) | <notextile>Scaladoc: Load scripts at the bottom, and with a defer attribute</notextile>
[024cdd4](https://github.com/scala/scala/commit/024cdd4) | <notextile>Strip version suffix from diffutils.</notextile>
[ba21f36](https://github.com/scala/scala/commit/ba21f36) | <notextile>Use java-diff-utils for diffing in partest.</notextile>
[3ec36bb](https://github.com/scala/scala/commit/3ec36bb) | <notextile>Clean up pack targets. Better dependency tracking.</notextile>
[dc5326c](https://github.com/scala/scala/commit/dc5326c) | <notextile>ant clean only zaps the quick stage</notextile>
[c2da1c505](https://github.com/scala/scala/commit/c2da1c505) | <notextile>Run test.scaladoc before test.suite. Fail fast.</notextile>
[c5511de](https://github.com/scala/scala/commit/c5511de) | <notextile>Let continuations library sources determine docs.lib's actuality</notextile>
[88b7a72](https://github.com/scala/scala/commit/88b7a72) | <notextile>Preparation for faster PR validation</notextile>
[ac1a0f0](https://github.com/scala/scala/commit/ac1a0f0) | <notextile>Remove duplication in java builds of fjbg/asm/forkjoin</notextile>
[d85c3f1](https://github.com/scala/scala/commit/d85c3f1) | <notextile>Formatting. Introduce {asm,forkjoin,fjbg}-classes props.</notextile>
[3bb1af9](https://github.com/scala/scala/commit/3bb1af9) | <notextile>remove unused ant targets: test.ant, test.classload, test.positions</notextile>
[86bea6a](https://github.com/scala/scala/commit/86bea6a) | <notextile>run test.bc as part of tests on 2.10.x</notextile>
[6620758](https://github.com/scala/scala/commit/6620758) | <notextile>restored dependency of pack.done on quick.bin</notextile>
[dd89b00](https://github.com/scala/scala/commit/dd89b00) | <notextile>SI-7285 Fix match analysis with nested objects.</notextile>
[499962d](https://github.com/scala/scala/commit/499962d) | <notextile>Expand test for SI-6124 to demonstrate cause of SI-7285.</notextile>
[c3ad5af](https://github.com/scala/scala/commit/c3ad5af) | <notextile>SI-7290 Minor cleanups driven by review comments.</notextile>
[2e0be83](https://github.com/scala/scala/commit/2e0be83) | <notextile>SI-7290 Discard duplicates in switchable alternative patterns.</notextile>
[4e10b2c](https://github.com/scala/scala/commit/4e10b2c) | <notextile>SI-6387 Clones accessor before name expansion</notextile>
[67b8de7](https://github.com/scala/scala/commit/67b8de7) | <notextile>[backport] SI-7237 Always choose ForkJoinTaskSupport</notextile>
[cd9e03a](https://github.com/scala/scala/commit/cd9e03a) | <notextile>SI-7246 Make $outer pointer elision Java aware</notextile>
[b95ca32](https://github.com/scala/scala/commit/b95ca32) | <notextile>SI-7299 Improve error message for eta-expanding 23+ param method</notextile>
[df61e04](https://github.com/scala/scala/commit/df61e04) | <notextile>Fix typos in build.xml</notextile>
[b7cbda7](https://github.com/scala/scala/commit/b7cbda7) | <notextile>Log when invokedynamic instruction is encountered</notextile>
[e78896f](https://github.com/scala/scala/commit/e78896f) | <notextile>Read version 51 (JDK 7) class files.</notextile>
[b4344e1](https://github.com/scala/scala/commit/b4344e1) | <notextile>SI-6580 Scaladoc: Should not close void elements</notextile>
[47fc00d](https://github.com/scala/scala/commit/47fc00d) | <notextile>SI-6210 Test case for already-fixed pattern matcher bug</notextile>
[df29290](https://github.com/scala/scala/commit/df29290) | <notextile>SI-7013 Scaladoc: Fix StackOverflowError</notextile>
[6f4a594](https://github.com/scala/scala/commit/6f4a594) | <notextile>SI-7253: update comments and naming</notextile>
[b0560c5](https://github.com/scala/scala/commit/b0560c5) | <notextile>Remove fragile code, made redundant by previous commit</notextile>
[386a5bd](https://github.com/scala/scala/commit/386a5bd) | <notextile>SI-7253: respect binary compatibility constraints</notextile>
[50ee635](https://github.com/scala/scala/commit/50ee635) | <notextile>SI-5699 correct java parser for annotation defs.</notextile>
[99bdebb](https://github.com/scala/scala/commit/99bdebb) | <notextile>removes duplication in FreeDef extractors</notextile>
[2b5fde7](https://github.com/scala/scala/commit/2b5fde7) | <notextile>SI-7242 Fix crash when inner object mixes in its companion</notextile>
[5db04eb](https://github.com/scala/scala/commit/5db04eb) | <notextile>an amazing discovery made by Iulian</notextile>
[fc46281](https://github.com/scala/scala/commit/fc46281) | <notextile>fixes the craziness in JavaUniverse.log</notextile>
[ef85a10](https://github.com/scala/scala/commit/ef85a10) | <notextile>SI-7258 Don't assume order of reflection values in t6223</notextile>
[f046853](https://github.com/scala/scala/commit/f046853) | <notextile>SI-7259 Fix detection of Java defined Selects</notextile>
[e90efd6](https://github.com/scala/scala/commit/e90efd6) | <notextile>Reduce duplication and increase verbosity in MiMa execution.</notextile>
[552b623](https://github.com/scala/scala/commit/552b623) | <notextile>SI-7249 Reign in overzealous Function0 optimization.</notextile>
[174334b](https://github.com/scala/scala/commit/174334b) | <notextile>SI-6921 SI-7239 Tread lightly during exploratory typing</notextile>
[6e79370](https://github.com/scala/scala/commit/6e79370) | <notextile>SI-7232 Fix Java import vs defn. binding precendence</notextile>
[8383b65](https://github.com/scala/scala/commit/8383b65) | <notextile>SI-7232 Fix Java import vs defn. binding precendence</notextile>
[7d03dcc](https://github.com/scala/scala/commit/7d03dcc) | <notextile>SI-7259 Fix detection of Java defined Selects</notextile>
[844cef6](https://github.com/scala/scala/commit/844cef6) | <notextile>SI-7296 Remove arity limit for case classes</notextile>
[ad79d74](https://github.com/scala/scala/commit/ad79d74) | <notextile>SI-7296 Avoid crash with nested 23-param case class</notextile>
[74de4ba](https://github.com/scala/scala/commit/74de4ba) | <notextile>Improve testing interactive experience.</notextile>
[395e90a](https://github.com/scala/scala/commit/395e90a) | <notextile>SI-7251, compiler crash with $.</notextile>
[a4fb773](https://github.com/scala/scala/commit/a4fb773) | <notextile>SI-7240 fixes language feature lookup</notextile>
[41e3b89](https://github.com/scala/scala/commit/41e3b89) | <notextile>SI-7233 Account for aliased imports in Erasure</notextile>
[33b499c](https://github.com/scala/scala/commit/33b499c) | <notextile>SI-7233 Account for aliased imports in eta expansion.</notextile>
[9bc17e7](https://github.com/scala/scala/commit/9bc17e7) | <notextile>SI-6725 `f` interpolator now supports %n tokens</notextile>
[eb365f9](https://github.com/scala/scala/commit/eb365f9) | <notextile>SI-7132 - don't discard Unit type in interpreter</notextile>
[2b4cd6c](https://github.com/scala/scala/commit/2b4cd6c) | <notextile>SI-7302 importing from Any.</notextile>
[e3ddb2d](https://github.com/scala/scala/commit/e3ddb2d) | <notextile>Iterator.++ no longer blows the stack.</notextile>
[ccf886c](https://github.com/scala/scala/commit/ccf886c) | <notextile>SI-7186 Slim down some TypeRefs by 8 bytes.</notextile>
[98daf03](https://github.com/scala/scala/commit/98daf03) | <notextile>Overhauled local/getter/setter name logic.</notextile>
[07cd90c](https://github.com/scala/scala/commit/07cd90c) | <notextile>An IntelliJ Module for the recently modularized REPL.</notextile>
[fbecd5d](https://github.com/scala/scala/commit/fbecd5d) | <notextile>Allow getting STARR via maven, also: locker.skip</notextile>
[7d2c1f3](https://github.com/scala/scala/commit/7d2c1f3) | <notextile>Use stage/project for taskname instead of scalacfork</notextile>
[e3b5e0b](https://github.com/scala/scala/commit/e3b5e0b) | <notextile>Sanity for build.xml: exscriptus&amp;positus delendus est.</notextile>
[da8d7c2](https://github.com/scala/scala/commit/da8d7c2) | <notextile>Cleanup obsolete options in CodeGen.</notextile>
[4af9ff5](https://github.com/scala/scala/commit/4af9ff5) | <notextile>SI-7294 Deprecate inheritance from TupleN.</notextile>
[8d537a1](https://github.com/scala/scala/commit/8d537a1) | <notextile>SI-7294 Treat TupleN as final under -Xfuture</notextile>
[2ba065f](https://github.com/scala/scala/commit/2ba065f) | <notextile>Doc -&gt; C-style comments for local symbols to avoid &quot;discarding unmoored doc comment&quot; warning when building distribution for scala itself.</notextile>
[6c48941](https://github.com/scala/scala/commit/6c48941) | <notextile>The script engine is given a better binding mechanism and reflexive access</notextile>
[6ec6f69](https://github.com/scala/scala/commit/6ec6f69) | <notextile>Bypass determination of protection domain when resource is not in a jar</notextile>
[cc485a9](https://github.com/scala/scala/commit/cc485a9) | <notextile>SI-5717 error when bytecode cannot be written</notextile>
[4bb8988](https://github.com/scala/scala/commit/4bb8988) | <notextile>Add positive and negative testcases for SI-6123 (-explaintypes)</notextile>
[ec6548f](https://github.com/scala/scala/commit/ec6548f) | <notextile>SI-6123: -explaintypes should not explain errors which won't be reported</notextile>
[1b3a379](https://github.com/scala/scala/commit/1b3a379) | <notextile>SI-7102 Specialize isEmpty for bitsets</notextile>
[645634a](https://github.com/scala/scala/commit/645634a) | <notextile>Removed dead src directory.</notextile>
[fc5e558](https://github.com/scala/scala/commit/fc5e558) | <notextile>Eliminate a bunch of -Xlint warnings.</notextile>
[9fed30c](https://github.com/scala/scala/commit/9fed30c) | <notextile>Warn about forgotten string interpolators.</notextile>
[437d619](https://github.com/scala/scala/commit/437d61994c) | <notextile>removed a redundant var in JavaWriter.flagsToStr</notextile>
[67ed8c8](https://github.com/scala/scala/commit/67ed8c8) | <notextile>SI-7236 Deprecate ThreadPoolTaskSupport and friends</notextile>
[38a1515](https://github.com/scala/scala/commit/38a1515) | <notextile>SI-5513: add inplace set-theoretic operations for mutable bitsets.</notextile>
[57d728c](https://github.com/scala/scala/commit/57d728c) | <notextile>Optimize rebalance method by using null optimized list implementation.</notextile>
[4f17806](https://github.com/scala/scala/commit/4f17806) | <notextile>Eliminated containsNull.</notextile>
[a063bb0](https://github.com/scala/scala/commit/a063bb0) | <notextile>Completely remove isNotNull/notNull.</notextile>
[3fe7b8c](https://github.com/scala/scala/commit/3fe7b8c) | <notextile>SI-7247, deprecated NotNull.</notextile>
[a4c3388](https://github.com/scala/scala/commit/a4c3388) | <notextile>Remove -Xcheck-null setting.</notextile>
[2655a99](https://github.com/scala/scala/commit/2655a99) | <notextile>Removed -Ynotnull setting.</notextile>
[3a17ff0](https://github.com/scala/scala/commit/3a17ff0) | <notextile>Cleanup of constant optimization</notextile>
[69109c0](https://github.com/scala/scala/commit/69109c0) | <notextile>Analyze constants to remove unnecessary branches</notextile>
[81a4f4d](https://github.com/scala/scala/commit/81a4f4d) | <notextile>Restore sketchy dependency to quick.bin.</notextile>
[6ef63e4](https://github.com/scala/scala/commit/6ef63e4) | <notextile>Fix it-never-happened performance regression.</notextile>
9c5ea96 | <notextile>Moved some numeric subtyping logic closer to center.</notextile>
[cb02c96](https://github.com/scala/scala/commit/cb02c96) | <notextile>Simplified the widening logic.</notextile>
[2fa2db7](https://github.com/scala/scala/commit/2fa2db7) | <notextile>SI-7228, bug in weak subtyping.</notextile>
[745c36a](https://github.com/scala/scala/commit/745c36a) | <notextile>SI-7328 Bail out of names/defaults if args are error typed</notextile>
[83c9c76](https://github.com/scala/scala/commit/83c9c76) | <notextile>SI-7234 Make named args play nice with dep. method types</notextile>
[f742aa3](https://github.com/scala/scala/commit/f742aa3) | <notextile>SI-5710 has fixed itself</notextile>
[3ae2653](https://github.com/scala/scala/commit/3ae2653) | <notextile>reifier is now aware of SI-7235</notextile>
[7e52fb9](https://github.com/scala/scala/commit/7e52fb9) | <notextile>SI-7226 Fix inference regression caused by TypeVar equality.</notextile>
[292435f](https://github.com/scala/scala/commit/292435f) | <notextile>Fix SI-7224.</notextile>
[cab4762](https://github.com/scala/scala/commit/cab4762) | <notextile>Update sbt.latest.version to sbt's latest version.</notextile>
[34faa0d](https://github.com/scala/scala/commit/34faa0d) | <notextile>SI-6601 Close access loophole for value class constructors</notextile>
[089cad8](https://github.com/scala/scala/commit/089cad8) | <notextile>Warn about locally identifiable init order issues.</notextile>
[e39e001](https://github.com/scala/scala/commit/e39e001) | <notextile>update eclipse projects (partest, repl &amp; scaladoc)</notextile>
[3a30af1](https://github.com/scala/scala/commit/3a30af1) | <notextile>SI-874 actual JSR-223 implementation</notextile>
[3e8f8dd](https://github.com/scala/scala/commit/3e8f8dd) | <notextile>SI-874 reflect.io improvements</notextile>
[f691997](https://github.com/scala/scala/commit/f691997) | <notextile>Add eclipse projects for interactive, scaladoc.</notextile>
[1291da3](https://github.com/scala/scala/commit/1291da3) | <notextile>IntellIiJ module definitions for scaladoc, interactive and continuations-*.</notextile>
[a67b626](https://github.com/scala/scala/commit/a67b626) | <notextile>Close after slurping (fixes SI-7244)</notextile>
[fdf2533](https://github.com/scala/scala/commit/fdf2533) | <notextile>a typo corrected</notextile>
[48cc8b4](https://github.com/scala/scala/commit/48cc8b4) | <notextile>Modularized the repl.</notextile>
[e3b36c7](https://github.com/scala/scala/commit/e3b36c7) | <notextile>Carve up Types.scala</notextile>
[523eb34](https://github.com/scala/scala/commit/523eb34) | <notextile>Deprecated custom ant task 'Same'.</notextile>
[2352814](https://github.com/scala/scala/commit/2352814) | <notextile>Eliminated all forInteractive/forScaladoc uses.</notextile>
[e01c7ef](https://github.com/scala/scala/commit/e01c7ef) | <notextile>Moved interactive code into src/interactive.</notextile>
[3d5c675](https://github.com/scala/scala/commit/3d5c675) | <notextile>Moved scaladoc code into src/scaladoc.</notextile>
[9604770](https://github.com/scala/scala/commit/9604770) | <notextile>Give interactive tests their own target.</notextile>
[2fd8e72](https://github.com/scala/scala/commit/2fd8e72) | <notextile>Give partest its own classpath in build.xml.</notextile>
[1dd88d9](https://github.com/scala/scala/commit/1dd88d9) | <notextile>Teach partest the magic of abstraction.</notextile>
[e83defa](https://github.com/scala/scala/commit/e83defa) | <notextile>Moved interactive sources into separate directory.</notextile>
[c6ca941](https://github.com/scala/scala/commit/c6ca941) | <notextile>Moved scaladoc sources into separate directory.</notextile>
[9094822](https://github.com/scala/scala/commit/9094822) | <notextile>Enabling commit for interactive/scaladoc modules.</notextile>
[960f984](https://github.com/scala/scala/commit/960f984) | <notextile>Bring some sanity to the stability test.</notextile>
[9f6b7bc](https://github.com/scala/scala/commit/9f6b7bc) | <notextile>SI-7006 Fix the unreachable test</notextile>
[fd21898](https://github.com/scala/scala/commit/fd21898) | <notextile>SI-7231 Fix assertion when adapting Null type to Array type</notextile>
[04eac5c](https://github.com/scala/scala/commit/04eac5c) | <notextile>SI-7006 Cleanup from code review</notextile>
[b50a0d8](https://github.com/scala/scala/commit/b50a0d8) | <notextile>SI-7006 Prevent unreachable blocks in GenICode</notextile>
[53c499b](https://github.com/scala/scala/commit/53c499b) | <notextile>SI-7109 SI-7153 Generalize the API to get docComments: allow to force docTrees for given fragments. Don't type-check when forcing doc comments, but rather  do it directly. Test the new functionality as well as better tests for the old one.</notextile>
[2cf6c5d](https://github.com/scala/scala/commit/2cf6c5d) | <notextile>[port] SI-7183 Disable unreachability for withFilter matches.</notextile>
[5b7cfe3](https://github.com/scala/scala/commit/5b7cfe3) | <notextile>better names for components of MatchTranslator</notextile>
[0a3219b](https://github.com/scala/scala/commit/0a3219b) | <notextile>move sat solving to separate file</notextile>
[ad69835](https://github.com/scala/scala/commit/ad69835) | <notextile>SI-7215 Fix transpose of an empty Array[Array[T]].</notextile>
[1117be8](https://github.com/scala/scala/commit/1117be8) | <notextile>SI-7190 macros no longer give rise to bridges</notextile>
[b775d8f](https://github.com/scala/scala/commit/b775d8f) | <notextile>test.done again checks bin compat (using mima 0.1.5)</notextile>
[09130d5](https://github.com/scala/scala/commit/09130d5) | <notextile>[nomaster] SI-7195 minor version mustn't introduce warnings</notextile>
[0303e64](https://github.com/scala/scala/commit/0303e64) | <notextile>SI-7183 Disable unreachability for withFilter matches.</notextile>
[acd74ca](https://github.com/scala/scala/commit/acd74ca) | <notextile>SI-7214 outer check based on dealiased pattern type.</notextile>
[204b2b4](https://github.com/scala/scala/commit/204b2b4) | <notextile>SI-7126 Eliminate a source of malformed types.</notextile>
[696dcdf](https://github.com/scala/scala/commit/696dcdf) | <notextile>SI-7126 Account for the alias types that don't dealias.</notextile>
[387fbf4](https://github.com/scala/scala/commit/387fbf4) | <notextile>SI-7185 Avoid NPE in TreeInfo.isExprSafeToInline</notextile>
[ebaa34e](https://github.com/scala/scala/commit/ebaa34e) | <notextile>simplify dependencies between patmat components, remove self types</notextile>
[0420b2d](https://github.com/scala/scala/commit/0420b2d) | <notextile>Revert SI-6240 synchronization for runtime reflection</notextile>
[c46bc25](https://github.com/scala/scala/commit/c46bc25) | <notextile>Tone down a soft-warning to only show under -Ydebug.</notextile>
[387b259](https://github.com/scala/scala/commit/387b259) | <notextile>runtime reflection: death from thousand threads</notextile>
[73d079f](https://github.com/scala/scala/commit/73d079f) | <notextile>removes the assertion in missingHook</notextile>
[f4dd56c](https://github.com/scala/scala/commit/f4dd56c) | <notextile>synchronizes names</notextile>
[dd148de](https://github.com/scala/scala/commit/dd148de) | <notextile>synchronizes pendingVolatiles</notextile>
[4cbb935](https://github.com/scala/scala/commit/4cbb935) | <notextile>synchronizes toolboxes</notextile>
[07bcb61](https://github.com/scala/scala/commit/07bcb61) | <notextile>SI-7045 reflection now auto-initializes selfType</notextile>
[bebd62d](https://github.com/scala/scala/commit/bebd62d) | <notextile>optimizes Scala reflection GIL</notextile>
[735634f](https://github.com/scala/scala/commit/735634f) | <notextile>initializes lazy vals and inner objects in advance</notextile>
[5b37cfb](https://github.com/scala/scala/commit/5b37cfb) | <notextile>introduces GIL to Scala reflection</notextile>
[981da8e](https://github.com/scala/scala/commit/981da8e) | <notextile>cleans up initialization of runtime reflection</notextile>
[b2c2493](https://github.com/scala/scala/commit/b2c2493) | <notextile>reflection no longer uses atPhase and friends</notextile>
[a9dca51](https://github.com/scala/scala/commit/a9dca51) | <notextile>synchronizes symbols</notextile>
[0262941](https://github.com/scala/scala/commit/0262941) | <notextile>removes the crazy extraneous log</notextile>
[21d5d382](https://github.com/scala/scala/commit/21d5d382) | <notextile>moves Symbol#SymbolKind to Symbols</notextile>
[3f0224c](https://github.com/scala/scala/commit/3f0224c) | <notextile>Add option to disable optimization</notextile>
[c8fbba0](https://github.com/scala/scala/commit/c8fbba0) | <notextile>Check named-args-for-clarity incur no extra bytecode</notextile>
[9179c88](https://github.com/scala/scala/commit/9179c88) | <notextile>Name boolean arguments in src/library.</notextile>
[a8d60a6](https://github.com/scala/scala/commit/a8d60a6) | <notextile>Name boolean arguments in src/reflect.</notextile>
[fff0f507](https://github.com/scala/scala/commit/fff0f507) | <notextile>Name boolean arguments in src/compiler.</notextile>
[6898c9f](https://github.com/scala/scala/commit/6898c9f) | <notextile>Eliminated separate RangePositions trait.</notextile>
[dc1cd96](https://github.com/scala/scala/commit/dc1cd96) | <notextile>Disentangled RangePositions from interactive.</notextile>
[e3b7b5f](https://github.com/scala/scala/commit/e3b7b5f) | <notextile>Require firstKey and lastKey on IntMap to be tail recursive.</notextile>
[9a82fc0](https://github.com/scala/scala/commit/9a82fc0) | <notextile>Remove unused symbols and imports from the library.</notextile>
[1666f6e](https://github.com/scala/scala/commit/1666f6e) | <notextile>Since the problem in SI-6758 is fixed, it's ok to move checking for unused imports to Analyzer. This allows the check to be used in the IDE.</notextile>
[1b9c2f5](https://github.com/scala/scala/commit/1b9c2f5) | <notextile>SI-7132 - don't discard Unit type in interpreter</notextile>
[3b07135](https://github.com/scala/scala/commit/3b07135) | <notextile>SI-6816 Deprecate -Yeta-expand-keeps-star</notextile>
[7edeb24](https://github.com/scala/scala/commit/7edeb24) | <notextile>Cleanup in isHKSubType0.</notextile>
[c10df64](https://github.com/scala/scala/commit/c10df64) | <notextile>Add some logging to sinful typevar methods.</notextile>
[305a987](https://github.com/scala/scala/commit/305a987) | <notextile>Added methods debuglogResult and devWarningResult.</notextile>
[1bde987](https://github.com/scala/scala/commit/1bde987) | <notextile>Always at least log devWarnings.</notextile>
[c048669](https://github.com/scala/scala/commit/c048669) | <notextile>Renamed type param to be consistent with convention.</notextile>
[6f5e525](https://github.com/scala/scala/commit/6f5e525) | <notextile>Establishes what's up with widening in asSeenFrom.</notextile>
[e1ab60e](https://github.com/scala/scala/commit/e1ab60e) | <notextile>Simplified correspondingTypeArgument based on reviewer feedback.</notextile>
[b457b6c](https://github.com/scala/scala/commit/b457b6c) | <notextile>Refactors AsSeenFromMap to expose extension point.</notextile>
[1976d9f](https://github.com/scala/scala/commit/1976d9f) | <notextile>fixes the test for SI-7112</notextile>
[de1f749](https://github.com/scala/scala/commit/de1f749) | <notextile>SI-7180 Fix regression in implicit scope of HK type alias.</notextile>
[26be206](https://github.com/scala/scala/commit/26be206) | <notextile>Additional test case for Lukas' fix to annotated originals.</notextile>
[dafebd0](https://github.com/scala/scala/commit/dafebd0) | <notextile>Fix typing idempotency bug with Annotated trees</notextile>
[19649d4](https://github.com/scala/scala/commit/19649d4) | <notextile>SI-6576 Workaround / diagnostic for IDE NPE.</notextile>
[bb067d3](https://github.com/scala/scala/commit/bb067d3) | <notextile>SI-7146 - Fixing checkinit bug in ExecutionContextImpl and adding test</notextile>
[348ff4b](https://github.com/scala/scala/commit/348ff4b) | <notextile>SI-7128 Fix regression in copyToArray for empty arrays</notextile>
[3e7db2d](https://github.com/scala/scala/commit/3e7db2d) | <notextile>adds some comments to resetAttrs</notextile>
e2a17d9 | <notextile>resetAttrs now always erases This.tpe</notextile>
[4f1bfec](https://github.com/scala/scala/commit/4f1bfec) | <notextile>Fix SI-7107: scala now thinks every exception is polymorphic</notextile>
[8187deb](https://github.com/scala/scala/commit/8187deb) | <notextile>SI-7074 Fix xml attribute sorting</notextile>
[89be691](https://github.com/scala/scala/commit/89be691) | <notextile>fixes the test for SI-7112</notextile>
[d49532f](https://github.com/scala/scala/commit/d49532f) | <notextile>check scala-swing for binary compatibility</notextile>
[dad8796](https://github.com/scala/scala/commit/dad8796) | <notextile>[nomaster] Revert &quot;Added a Swing ColorChooser wrapper&quot;</notextile>
[b4f277a](https://github.com/scala/scala/commit/b4f277a) | <notextile>[nomaster] Revert &quot;Added a Swing PopupMenu wrapper&quot;</notextile>
[85b63b8](https://github.com/scala/scala/commit/85b63b8) | <notextile>[nomaster] Revert &quot;SI-6548 reflection now correctly enters jinners&quot;</notextile>
[2f9b708](https://github.com/scala/scala/commit/2f9b708) | <notextile>[nomaster] inline importPrivateWithinFromJavaFlags into SymbolTable</notextile>
[ddfe3a0](https://github.com/scala/scala/commit/ddfe3a0) | <notextile>[nomaster] Revert &quot;cosmetic renamings in runtime reflection&quot;</notextile>
[9194b37](https://github.com/scala/scala/commit/9194b37) | <notextile>[nomaster] refactor AdaptedForkJoinTask, uncaughtExceptionHandler</notextile>
[56cbf23](https://github.com/scala/scala/commit/56cbf23) | <notextile>[nomaster] can't add new class BatchingExecutor</notextile>
[549a1fe](https://github.com/scala/scala/commit/549a1fe) | <notextile>[nomaster] bring back SerializeStart from fa3b8040eb</notextile>
[5d487f1](https://github.com/scala/scala/commit/5d487f1) | <notextile>[nomaster] duplicate tailImpl as a private method</notextile>
[8b4af71](https://github.com/scala/scala/commit/8b4af71) | <notextile>[nomaster] Revert &quot;SI-4664 Make scala.util.Random Serializable&quot;</notextile>
[f9550c6](https://github.com/scala/scala/commit/f9550c6) | <notextile>[nomaster] Revert &quot;Fixes SI-6521, overrides Range#head to be faster&quot;</notextile>
[af0da51](https://github.com/scala/scala/commit/af0da51) | <notextile>[nomaster] run mima both ways, filter out failures</notextile>
[bfd7863](https://github.com/scala/scala/commit/bfd7863) | <notextile>SI-7159 Distinguish between assignability and sub typing in TypeKinds</notextile>
[4124a09](https://github.com/scala/scala/commit/4124a09) | <notextile>SI-7159 Remove erroneous INT &lt;:&lt; LONG in TypeKinds</notextile>
[04b147e](https://github.com/scala/scala/commit/04b147e) | <notextile>SI-7159 Prepare to remove erroneous INT &lt;:&lt; LONG in TypeKinds</notextile>
[208d6ad](https://github.com/scala/scala/commit/208d6ad) | <notextile>SI-7159 Remove unreachable cases in GenICode#adapt</notextile>
[910e5a0](https://github.com/scala/scala/commit/910e5a0) | <notextile>Reconcile definitions of stability.</notextile>
[3e0fbc0](https://github.com/scala/scala/commit/3e0fbc0) | <notextile>relax time constraint in duration-tck.scala (for Windows VMs)</notextile>
[5f3cd86](https://github.com/scala/scala/commit/5f3cd86) | <notextile>SI-7181 Eliminate unnecessary duplication of finally blocks</notextile>
[28a7161](https://github.com/scala/scala/commit/28a7161) | <notextile>SI-7181 Prepare to remove duplicated finally blocks</notextile>
[4f2d784](https://github.com/scala/scala/commit/4f2d784) | <notextile>SI-7006 Simplify jump-only block destination determination</notextile>
[e9f6511](https://github.com/scala/scala/commit/e9f6511) | <notextile>SI-7006 Eliminate unreachable blocks</notextile>
[0d2e19c](https://github.com/scala/scala/commit/0d2e19c) | <notextile>SI-7006 Recognize more jump only blocks</notextile>
[022c57f](https://github.com/scala/scala/commit/022c57f) | <notextile>SI-7006 Improve jump-elision code in GenASM</notextile>
[d6527d5](https://github.com/scala/scala/commit/d6527d5) | <notextile>Address some Scaladocrot</notextile>
[6d94b35](https://github.com/scala/scala/commit/6d94b35) | <notextile>Modernize legacy backquotes in comments.</notextile>
[256e468](https://github.com/scala/scala/commit/256e468) | <notextile>Remove redundant explicit returns.</notextile>
[bc99770](https://github.com/scala/scala/commit/bc99770) | <notextile>Don't wrap an array just to get its length.</notextile>
[ee03302](https://github.com/scala/scala/commit/ee03302) | <notextile>Remove redundant 'val' from case class params.</notextile>
[54065a7](https://github.com/scala/scala/commit/54065a7) | <notextile>Fix two malformed format strings.</notextile>
[41703df](https://github.com/scala/scala/commit/41703df) | <notextile>More explicit empty paren lists in method calls.</notextile>
[6e450ed](https://github.com/scala/scala/commit/6e450ed) | <notextile>Reorder to avoid code appearing like a forward reference.</notextile>
[8cdf3b3](https://github.com/scala/scala/commit/8cdf3b3) | <notextile>Banish needless semicolons.</notextile>
[e7ab2f4](https://github.com/scala/scala/commit/e7ab2f4) | <notextile>Be explicit about empty param list calls.</notextile>
[d1b16c4](https://github.com/scala/scala/commit/d1b16c4) | <notextile>Don't override empty-paren methods as paren-less.</notextile>
[0ecba21](https://github.com/scala/scala/commit/0ecba21) | <notextile>fixes the test for SI-7112</notextile>
[c11cf0b](https://github.com/scala/scala/commit/c11cf0b) | <notextile>SI-7120 Erasure must honor typeref prefixes</notextile>
[3d5758c](https://github.com/scala/scala/commit/3d5758c) | <notextile>SI-7171 Consider prefix when assessing type finality.</notextile>
[18a2ba2](https://github.com/scala/scala/commit/18a2ba2) | <notextile>please ant with filenames, add comments</notextile>
[6a7078c](https://github.com/scala/scala/commit/6a7078c) | <notextile>remove unused imports</notextile>
[b20e288](https://github.com/scala/scala/commit/b20e288) | <notextile>Fixed error in reflection API docs about linearization order on method baseClasses</notextile>
[d2a36ab](https://github.com/scala/scala/commit/d2a36ab) | <notextile>Shadowed Implict typo (fixes no issue)</notextile>
[62fcd3d](https://github.com/scala/scala/commit/62fcd3d) | <notextile>SI-7015 Cleanup from review of null duplication</notextile>
[1b6661b](https://github.com/scala/scala/commit/1b6661b) | <notextile>SI-7015 Removes redundant aconst_null; pop; aconst_null creation</notextile>
[7fdc873](https://github.com/scala/scala/commit/7fdc873) | <notextile>[refactor] move some logic-related code</notextile>
[c930a85](https://github.com/scala/scala/commit/c930a85) | <notextile>[refactor] better name for symbolicCase</notextile>
[76fc728](https://github.com/scala/scala/commit/76fc728) | <notextile>[refactor] make hash-consing more robust</notextile>
[712a921](https://github.com/scala/scala/commit/712a921) | <notextile>drop Cond in favor of Prop</notextile>
[1b47248](https://github.com/scala/scala/commit/1b47248) | <notextile>[refactor] prepare migration from Cond to Prop</notextile>
[647a760](https://github.com/scala/scala/commit/647a760) | <notextile>[refactor] type analysis consolidation</notextile>
[e14846b](https://github.com/scala/scala/commit/e14846b) | <notextile>[refactor] move PatternMatching.scala to transform.patmat</notextile>
[f5ed914](https://github.com/scala/scala/commit/f5ed914) | <notextile>re-align 2.10.x's pattern matcher with master's</notextile>
[8a2cebe](https://github.com/scala/scala/commit/8a2cebe) | <notextile>SI-6807 Deprecating the Actors library.</notextile>
[68f62d7](https://github.com/scala/scala/commit/68f62d7) | <notextile>SI-7164 - Removing NotImplementedError as Fatal from s.u.c.NonFatal</notextile>
[39249d5](https://github.com/scala/scala/commit/39249d5) | <notextile>bump build number to 2.10.2</notextile>
[3c22436](https://github.com/scala/scala/commit/3c22436) | <notextile>Additional test case for Lukas' fix to annotated originals.</notextile>
[8206e26](https://github.com/scala/scala/commit/8206e26) | <notextile>Fix typing idempotency bug with Annotated trees</notextile>
[c8ab5b3](https://github.com/scala/scala/commit/c8ab5b3) | <notextile>Fix SI-7130: Memory leaked caused by Statistics</notextile>
[4df9e20](https://github.com/scala/scala/commit/4df9e20) | <notextile>SI-7143 Fix scanner docComment: docBuffer and docPos are initialized in different places and as a result can get out of sync and as a result the invariant that docComment has a position is broken.</notextile>
[fd68fe6](https://github.com/scala/scala/commit/fd68fe6) | <notextile>SI-7134: don't require doc.Settings in base api of scaladoc.</notextile>
[c10b7b6](https://github.com/scala/scala/commit/c10b7b6) | <notextile>unit test ide-t1000567 exercises SI-5063, aka #1000567.</notextile>
[5379eba](https://github.com/scala/scala/commit/5379eba) | <notextile>Removing disabled, unneeded futures tests</notextile>
[9f25a2a](https://github.com/scala/scala/commit/9f25a2a) | <notextile>make Future scaladoc examples up-to-date and compilable</notextile>
[9d5d55b](https://github.com/scala/scala/commit/9d5d55b) | <notextile>SI-5744 evidence params are now SYNTHETIC</notextile>
[6a7d793](https://github.com/scala/scala/commit/6a7d793) | <notextile>SI-7091 Don't try to put a protected accessor in a package.</notextile>
[2e8ede5](https://github.com/scala/scala/commit/2e8ede5) | <notextile>SI-7091 Add a diagnostic for the &quot;no acc def buf&quot; error.</notextile>
[0eff6cd](https://github.com/scala/scala/commit/0eff6cd) | <notextile>Fix and optimization in overriding logic.</notextile>
[6879451](https://github.com/scala/scala/commit/6879451) | <notextile>Extracted abstract implicit vals from Types.</notextile>
[d8ba6af](https://github.com/scala/scala/commit/d8ba6af) | <notextile>Boxing cleanup: erasure, post-erasure, value classes.</notextile>
[07ba1f8](https://github.com/scala/scala/commit/07ba1f8) | <notextile>SI-6642 Code cleanup from review of iteratorFrom</notextile>
[3903779](https://github.com/scala/scala/commit/3903779) | <notextile>SI-6642 Refactor mutable.TreeSet to use RedBlackTree instead of AVL</notextile>
[62bc99d](https://github.com/scala/scala/commit/62bc99d) | <notextile>SI-6642 Adds iteratorFrom, keysIteratorFrom, and valuesIteratorFrom</notextile>
[a0b1db4](https://github.com/scala/scala/commit/a0b1db4) | <notextile>SI-6642 Code cleanup on RedBlackTree#TreeIterator</notextile>
[de2410b](https://github.com/scala/scala/commit/de2410b) | <notextile>silences t6323a</notextile>
[673cc83](https://github.com/scala/scala/commit/673cc83) | <notextile>SI-6514 Avoid spurious dead code warnings</notextile>
[ef6095a](https://github.com/scala/scala/commit/ef6095a) | <notextile>Tolerate symbol sharing between accessor/field.</notextile>
[451cab9](https://github.com/scala/scala/commit/451cab9) | <notextile>SI-6225 Fix import of inherited package object implicits</notextile>
[c049d66](https://github.com/scala/scala/commit/c049d66) | <notextile>SI-6935 Added readResolve in BoxedUnit When deserializing Unit, it would return an instance of Object, but not a Scala Unit. By adding readResolve, the deserialization of Unit will work.</notextile>
[7b425bf](https://github.com/scala/scala/commit/7b425bf) | <notextile>SI-6370 changed ListMap apply0 method to produce correct error message when a key is not found Current implementation of apply0 relies on tail method to iterate over all keys. When the list gets to its end, tail produces an 'empty map' message in its exception, which is thrown by ListMap. This change checks if the collection is empty before calling tail and provides a more appropriate key not found message.</notextile>
[6424907](https://github.com/scala/scala/commit/6424907) | <notextile>SI-6158 Restore compile error output under partest --show-log</notextile>
[37824d3](https://github.com/scala/scala/commit/37824d3) | <notextile>Update src/library/scala/sys/process/package.scala</notextile>
[c26cc53](https://github.com/scala/scala/commit/c26cc53) | <notextile>SI-6355, weakend implementation restriction on applyDynamic.</notextile>
[c26a8db](https://github.com/scala/scala/commit/c26a8db) | <notextile>Maintenance of Predef.</notextile>
[42744d7](https://github.com/scala/scala/commit/42744d7) | <notextile>Application is deprecated. Replaced with App</notextile>
[8eadc6d](https://github.com/scala/scala/commit/8eadc6d) | <notextile>Update src/library/scala/sys/process/ProcessBuilder.scala</notextile>
[13caa49](https://github.com/scala/scala/commit/13caa49) | <notextile>Fix for paramaccessor alias regression.</notextile>
[22341e7](https://github.com/scala/scala/commit/22341e7) | <notextile>Expanded bytecode testing code.</notextile>
[57c0e63](https://github.com/scala/scala/commit/57c0e63) | <notextile>accommodates pull request feedback</notextile>
[ce867c7](https://github.com/scala/scala/commit/ce867c7) | <notextile>term and type reftrees are now reified uniformly</notextile>
[09ef873](https://github.com/scala/scala/commit/09ef873) | <notextile>SI-6591 Reify and path-dependent types</notextile>
[e0068b9](https://github.com/scala/scala/commit/e0068b9) | <notextile>SI-5675 Discard duplicate feature warnings at a position</notextile>
[5258b63](https://github.com/scala/scala/commit/5258b63) | <notextile>SI-7096 SubstSymMap copies trees before modifying their symbols</notextile>
[6052e19](https://github.com/scala/scala/commit/6052e19) | <notextile>[backport] SI-6478 Fixing JavaTokenParser ident</notextile>
[96b0eff](https://github.com/scala/scala/commit/96b0eff) | <notextile>SI-5824 Fix crashes in reify with _*</notextile>
[fa3b804](https://github.com/scala/scala/commit/fa3b804) | <notextile>SI-6961 no structural sharing in list serialization</notextile>
[dfbaaa1](https://github.com/scala/scala/commit/dfbaaa1) | <notextile>SI-6187 Make partial functions re-typable</notextile>
[55c9b9c](https://github.com/scala/scala/commit/55c9b9c) | <notextile>SI-6146 More accurate prefixes for sealed subtypes.</notextile>
[1426fec](https://github.com/scala/scala/commit/1426fec) | <notextile>SI-7070 Turn restriction on companions in pkg objs into warning</notextile>
[a0ee6e9](https://github.com/scala/scala/commit/a0ee6e9) | <notextile>SI-5082 Cycle avoidance between case companions</notextile>
[a53e150](https://github.com/scala/scala/commit/a53e150) | <notextile>SI-7100 Fixed infinite recursion in duplicators</notextile>
[0d68a87](https://github.com/scala/scala/commit/0d68a87) | <notextile>SI-6113 typeOf now works for type lambdas</notextile>
[79e774f](https://github.com/scala/scala/commit/79e774f) | <notextile>SI-7026: parseTree should never return a typed one</notextile>
[f784fbf](https://github.com/scala/scala/commit/f784fbf) | <notextile>Add a request to presentation compiler to fetch doc comment information. Refactor scaladoc base functionality to allow it to be mixed in with Global in the IDE.</notextile>
[81fa831](https://github.com/scala/scala/commit/81fa831) | <notextile>Class symbols can't be contravariant.</notextile>
[275b341](https://github.com/scala/scala/commit/275b341) | <notextile>SI-6666 Catch VerifyErrors in the making in early defs.</notextile>
[66fa1f2](https://github.com/scala/scala/commit/66fa1f2) | <notextile>Broader checks for poisonous this references.</notextile>
[4c34280](https://github.com/scala/scala/commit/4c34280) | <notextile>Add a test case from the comments of SI-6666.</notextile>
[fd61254](https://github.com/scala/scala/commit/fd61254) | <notextile>SI-6666 Account for nesting in setting INCONSTRUCTOR</notextile>
[ee24807](https://github.com/scala/scala/commit/ee24807) | <notextile>Move a test from pos to run to highlight bytecode deficiencies.</notextile>
[b579a42](https://github.com/scala/scala/commit/b579a42) | <notextile>SI-6888 Loosen criteria for $outer search.</notextile>
[b43ae58](https://github.com/scala/scala/commit/b43ae58) | <notextile>introduces an exhaustive java-to-scala test</notextile>
[02ed5fb](https://github.com/scala/scala/commit/02ed5fb) | <notextile>SI-6989 privateWithin is now populated in reflect</notextile>
[1f838ed](https://github.com/scala/scala/commit/1f838ed) | <notextile>[nomaster] verifies compat with 2.10.0</notextile>
[c9a0e36](https://github.com/scala/scala/commit/c9a0e36) | <notextile>[nomaster] Revert &quot;refactors handling of parent types&quot;</notextile>
[570f4a4](https://github.com/scala/scala/commit/570f4a4) | <notextile>[nomaster] Revert &quot;introduces global.pendingSuperCall&quot;</notextile>
[c720531](https://github.com/scala/scala/commit/c720531) | <notextile>[nomaster] Revert &quot;DummyTree =&gt; CannotHaveAttrs&quot;</notextile>
[4d7982b](https://github.com/scala/scala/commit/4d7982b) | <notextile>[nomaster] Revert &quot;more ListOfNil =&gt; Nil&quot;</notextile>
[4ef2a49](https://github.com/scala/scala/commit/4ef2a49) | <notextile>[nomaster] Revert &quot;s/SuperCallArgs/SuperArgs/&quot;</notextile>
[0e0c851](https://github.com/scala/scala/commit/0e0c851) | <notextile>[nomaster] revives BuildUtils.emptyValDef</notextile>
[1093ce0](https://github.com/scala/scala/commit/1093ce0) | <notextile>[nomaster] removes Tree.canHaveAttrs</notextile>
[7bf0ecc](https://github.com/scala/scala/commit/7bf0ecc) | <notextile>[nomaster] doesn't touch NonemptyAttachments</notextile>
[015ff51](https://github.com/scala/scala/commit/015ff51) | <notextile>[nomaster] Revert &quot;SI-5017 Poor performance of :+ operator on Arrays&quot;</notextile>
[87d52db](https://github.com/scala/scala/commit/87d52db) | <notextile>[nomaster] SI-6773 Makes the SI-6150 changes binary compatible with 2.10</notextile>
[e5c0e59](https://github.com/scala/scala/commit/e5c0e59) | <notextile>SI-7060 More conservative dead code elim marking</notextile>
[8ae0e2a](https://github.com/scala/scala/commit/8ae0e2a) | <notextile>SI-7039 unapplySeq result type independent of subpattern count</notextile>
[0574172](https://github.com/scala/scala/commit/0574172) | <notextile>SI-5833 Fixes tail-of-Nil problem in RefinedType#normalizeImpl</notextile>
[b67f8e5](https://github.com/scala/scala/commit/b67f8e5) | <notextile>[nomerge] SI-6667 Demote a new ambiguity error to a lint warning.</notextile>
[0e8d8c7](https://github.com/scala/scala/commit/0e8d8c7) | <notextile>SI-6017 Scaladoc: Show all letters without dangling links</notextile>
[3f0bce9](https://github.com/scala/scala/commit/3f0bce9) | <notextile>SI-6017 Generate Scaladoc's index links in Scala side</notextile>
[a6137d1](https://github.com/scala/scala/commit/a6137d1) | <notextile>Fix SI-6578. Deprecated `askType` because of possible race conditions in type checker.</notextile>
[02dd4c9](https://github.com/scala/scala/commit/02dd4c9) | <notextile>reflecting @throws defined in Scala code</notextile>
[0bcdf71](https://github.com/scala/scala/commit/0bcdf71) | <notextile>pullrequest feedback</notextile>
[adf50a3](https://github.com/scala/scala/commit/adf50a3) | <notextile>evicts javac-artifacts.jar</notextile>
[f1701f7](https://github.com/scala/scala/commit/f1701f7) | <notextile>SI-7008 @throws annotations are now populated in reflect</notextile>
[3af838c](https://github.com/scala/scala/commit/3af838c) | <notextile>SI-7033 Be symful when creating factory methods.</notextile>
[bc01614](https://github.com/scala/scala/commit/bc01614) | <notextile>Revert &quot;SI-6422: add missing Fractional and Integral alias in scala package&quot;</notextile>
[4fda83f](https://github.com/scala/scala/commit/4fda83f) | <notextile>SI-5313 Minor code cleanup for store clobbering</notextile>
[c7d489e](https://github.com/scala/scala/commit/c7d489e) | <notextile>SI-5313 Test clobbers on the back edge of a loop</notextile>
[9b4fa83](https://github.com/scala/scala/commit/9b4fa83) | <notextile>SI-5313 Eliminate more stores by replacing clobbers with null stores</notextile>
[eab2884](https://github.com/scala/scala/commit/eab2884) | <notextile>SI-5313 Do not eliminate stores that potentially wipe referenes</notextile>
[2403d1d](https://github.com/scala/scala/commit/2403d1d) | <notextile>SI-7046 reflection now auto-initializes knownDirectSubclasses</notextile>
[374c912](https://github.com/scala/scala/commit/374c912) | <notextile>SI-7022 Additional test case for value class w. bounds</notextile>
[4ed8836](https://github.com/scala/scala/commit/4ed8836) | <notextile>[backport] SI-6482, lost bounds in extension methods.</notextile>
[b2117cf](https://github.com/scala/scala/commit/b2117cf) | <notextile>SI-6941 tests</notextile>
[b92396b](https://github.com/scala/scala/commit/b92396b) | <notextile>SI-6686 drop valdef unused in flatMapCond's block</notextile>
[b47bb0f](https://github.com/scala/scala/commit/b47bb0f) | <notextile>no type test if static type &lt;:&lt; primitive value class</notextile>
[494ba94](https://github.com/scala/scala/commit/494ba94) | <notextile>don't store subpats bound to underscore</notextile>
[71ea3e8](https://github.com/scala/scala/commit/71ea3e8) | <notextile>no null check for type-tested unapply arg</notextile>
[62b37dd](https://github.com/scala/scala/commit/62b37dd) | <notextile>refactor: prepare null check redundancy analysis</notextile>
[415becd](https://github.com/scala/scala/commit/415becd) | <notextile>support testing bytecode similarity in ByteCodeTest</notextile>
[a07555f](https://github.com/scala/scala/commit/a07555f) | <notextile>bytecode diffing support in ByteCodeTest</notextile>
[d71f59e](https://github.com/scala/scala/commit/d71f59e) | <notextile>SI-4976 Scaladoc: Add a source link to package objects</notextile>
[5275bae](https://github.com/scala/scala/commit/5275bae) | <notextile>SI-7029 - Make test more robust</notextile>
[3f78bee](https://github.com/scala/scala/commit/3f78bee) | <notextile>SI-7029 - Makes sure that uncaught exceptions are propagated to the UEH for the global ExecutionContext</notextile>
[2989258](https://github.com/scala/scala/commit/2989258) | <notextile>SI-6539 moves @compileTimeOnly away from scala-reflect</notextile>
[8bd03e0](https://github.com/scala/scala/commit/8bd03e0) | <notextile>SI-5151 - Add firstKey and lastKey to LongMap.</notextile>
[108a1f7](https://github.com/scala/scala/commit/108a1f7) | <notextile>SI-6773 Changes IndexSeqFactory to be &quot;since 2.11&quot;</notextile>
[f3cdf14](https://github.com/scala/scala/commit/f3cdf14) | <notextile>Fix context for type checking early initializers</notextile>
[7e836f8](https://github.com/scala/scala/commit/7e836f8) | <notextile>Analyzer Plugins</notextile>
[b74c33e](https://github.com/scala/scala/commit/b74c33e) | <notextile>SI-1803, plus documentation and cleanups in Namers, mainly in typeSig</notextile>
[a06d31f](https://github.com/scala/scala/commit/a06d31f) | <notextile>Keep annotations when computing lubs</notextile>
[6697c28](https://github.com/scala/scala/commit/6697c28) | <notextile>Allow for Function treess with refined types in UnCurry.</notextile>
[59918ee](https://github.com/scala/scala/commit/59918ee) | <notextile>case module toString is synthetic</notextile>
[91c9c42](https://github.com/scala/scala/commit/91c9c42) | <notextile>replace symbols correctly when subtyping dependent types</notextile>
[71fb0b8](https://github.com/scala/scala/commit/71fb0b8) | <notextile>Removed -Ymacro-no-expand.</notextile>
[e3d9a08](https://github.com/scala/scala/commit/e3d9a08) | <notextile>Cleaning up after brutal merge of 2.10.x into master.</notextile>
[941c569](https://github.com/scala/scala/commit/941c569) | <notextile>SI-6812 scaladoc can opt out of expanding macros</notextile>
[11ac963](https://github.com/scala/scala/commit/11ac963) | <notextile>[backport] Fix for SI-6206, inconsistency with apply.</notextile>
[5a2828c](https://github.com/scala/scala/commit/5a2828c) | <notextile>A test case to guide the eventual fix for SI-6601.</notextile>
[172f3f6](https://github.com/scala/scala/commit/172f3f6) | <notextile>Revert &quot;SI-6601 Publicise derived value contstructor after pickler&quot;</notextile>
[6db4db9](https://github.com/scala/scala/commit/6db4db9) | <notextile>SI-2818 Make List.foldRight always do a reverse/foldLeft flip</notextile>
[8350cd9](https://github.com/scala/scala/commit/8350cd9) | <notextile>[backport] SI-2968 Fix brace healing for `^case (class&#124;object) {`</notextile>
[1de399d](https://github.com/scala/scala/commit/1de399d) | <notextile>SI-6963 Add version to -Xmigration</notextile>
[1049435](https://github.com/scala/scala/commit/1049435) | <notextile>SI-3353 don't extract &lt;unapply-selector&gt; into named-arg local val</notextile>
[485d815](https://github.com/scala/scala/commit/485d815) | <notextile>There is no &quot;letters&quot; method in this branch</notextile>
[033b6c1](https://github.com/scala/scala/commit/033b6c1) | <notextile>Forgot to cherry-pick the .check file</notextile>
[831bffd](https://github.com/scala/scala/commit/831bffd) | <notextile>SI-6017 Scaladoc's Index should be case-sensitive</notextile>
[e36327a](https://github.com/scala/scala/commit/e36327a) | <notextile>SI-6853 changed private method remove to be tail recursive. Operations += and -= on mutable.ListMap rely on the private method remove to perform. This methods was implemented using recursion, but it was not tail recursive. When the ListMap got too big the += caused a StackOverflowError.</notextile>
[ff92610](https://github.com/scala/scala/commit/ff92610) | <notextile>SI-6595, lost modifiers in early defs.</notextile>
[98534b2](https://github.com/scala/scala/commit/98534b2) | <notextile>SI-6584, Stream#distinct uses too much memory.</notextile>
[d2316df](https://github.com/scala/scala/commit/d2316df) | <notextile>SI-6426, importable _.</notextile>
[05882eb](https://github.com/scala/scala/commit/05882eb) | <notextile>SI-6072, crasher with overloaded eq.</notextile>
[d4437aa](https://github.com/scala/scala/commit/d4437aa) | <notextile>SI-5604, selections on package objects.</notextile>
[e156cd1](https://github.com/scala/scala/commit/e156cd1) | <notextile>SI-5859, inapplicable varargs.</notextile>
[f3f1e50](https://github.com/scala/scala/commit/f3f1e50) | <notextile>SI-5353, imperfect error message.</notextile>
[77ec4ef](https://github.com/scala/scala/commit/77ec4ef) | <notextile>SI-5130, precision disappearing from refinement.</notextile>
[faca7ec](https://github.com/scala/scala/commit/faca7ec) | <notextile>SI-4729, overriding java varargs in scala.</notextile>
[0990890](https://github.com/scala/scala/commit/0990890) | <notextile>SI-2418, remove restriction on final vars.</notextile>
[16eaefb](https://github.com/scala/scala/commit/16eaefb) | <notextile>SI-6572 Test case, originally fixed in a3680be.</notextile>
[0679da5](https://github.com/scala/scala/commit/0679da5) | <notextile>[backport] SI-6301 / SI-6572 specialization regressions</notextile>
[f6d90a8](https://github.com/scala/scala/commit/f6d90a8) | <notextile>[backport] SI-5378, unsoundness with type bounds in refinements.</notextile>
[5f85fe5](https://github.com/scala/scala/commit/5f85fe5) | <notextile>SI-4714 Initialize history while initializing the REPL's reader</notextile>
[243cede](https://github.com/scala/scala/commit/243cede) | <notextile>[backport] Removed restriction on final vars, SI-2418.</notextile>
[4b39be4](https://github.com/scala/scala/commit/4b39be4) | <notextile>changes the flags to not depend on partest</notextile>
[ced7411](https://github.com/scala/scala/commit/ced7411) | <notextile>the scanner is now less eager about deprecations</notextile>
[1ab7d1c](https://github.com/scala/scala/commit/1ab7d1c) | <notextile>evicts eponymous packages and objects from tests</notextile>
[fefe6cc](https://github.com/scala/scala/commit/fefe6cc) | <notextile>SI-7009: `@throws` annotation synthesized incorrectly</notextile>
[e22d801](https://github.com/scala/scala/commit/e22d801) | <notextile>Test case for SI-7009.</notextile>
[a87d409](https://github.com/scala/scala/commit/a87d409) | <notextile>SI-6968 Simple Tuple patterns aren't irrefutable</notextile>
[166fd02](https://github.com/scala/scala/commit/166fd02) | <notextile>SI-6669 Add . to the default scalap classpath</notextile>
[80a814d](https://github.com/scala/scala/commit/80a814d) | <notextile>SI-6728 Fixes crash in parser on incomplete for expression</notextile>
[8610d7e](https://github.com/scala/scala/commit/8610d7e) | <notextile>Add Bytecode test (ASM-based) to partest.</notextile>
[9afae59](https://github.com/scala/scala/commit/9afae59) | <notextile>SI-7035 Centralize case field accessor sorting.</notextile>
[eba079b](https://github.com/scala/scala/commit/eba079b) | <notextile>Optimization in AsSeenFromMap.</notextile>
[f72354c](https://github.com/scala/scala/commit/f72354c) | <notextile>Remove gratuitous var</notextile>
[6357c8d](https://github.com/scala/scala/commit/6357c8d) | <notextile>SI-6726 Further optimization of pattern analysis</notextile>
[14d8c22](https://github.com/scala/scala/commit/14d8c22) | <notextile>SI-6726 Hash consing for Pattern matching Sym-s</notextile>
[32c0a2e](https://github.com/scala/scala/commit/32c0a2e) | <notextile>SI-6726 Add benchmark used for testing pattern matcher.</notextile>
[d3f3394](https://github.com/scala/scala/commit/d3f3394) | <notextile>[backport] Fix for SI-6154, VerifyError originating in uncurry.</notextile>
[6f86583](https://github.com/scala/scala/commit/6f86583) | <notextile>SI-6516, macros comparing types with == instead of =:=.</notextile>
[cfaa3b5](https://github.com/scala/scala/commit/cfaa3b5) | <notextile>SI-6551 Expand test case into uncomfortable areas.</notextile>
[45ccdc5](https://github.com/scala/scala/commit/45ccdc5) | <notextile>SI-6651 Substitute `this` in extension method sigs</notextile>
[bffe776](https://github.com/scala/scala/commit/bffe776) | <notextile>[backport] Disabled SI-6987.</notextile>
[b8da00e](https://github.com/scala/scala/commit/b8da00e) | <notextile>[backport] SI-3577 BoundedWildcardType handling</notextile>
[fd6fe4e](https://github.com/scala/scala/commit/fd6fe4e) | <notextile>Fix access to empty package from the repl.</notextile>
[d2965f8](https://github.com/scala/scala/commit/d2965f8) | <notextile>Overhaul of tools/partest-ack.</notextile>
[c8293b7](https://github.com/scala/scala/commit/c8293b7) | <notextile>Expanded the comment on Type#normalize.</notextile>
[039b1cb](https://github.com/scala/scala/commit/039b1cb) | <notextile>Changes many calls to normalize to dealiasWiden.</notextile>
[0388a7c](https://github.com/scala/scala/commit/0388a7c) | <notextile>Renames normalize to normalizeModifiers.</notextile>
[6d669f3](https://github.com/scala/scala/commit/6d669f3) | <notextile>Pending test for SI-5459.</notextile>
[b6f898f](https://github.com/scala/scala/commit/b6f898f) | <notextile>SI-6939 Fix namespace binding (xmlns) not overriding outer binding</notextile>
[aa199b8](https://github.com/scala/scala/commit/aa199b8) | <notextile>Revert &quot;SI-6811 Misc. removals in util, testing, io, ...&quot;</notextile>
[7babdab](https://github.com/scala/scala/commit/7babdab) | <notextile>SI-6891 Fix value class + tailrec crasher.</notextile>
[cff0934](https://github.com/scala/scala/commit/cff0934) | <notextile>Ill-scoped reference checking in TreeCheckers</notextile>
[05ad682](https://github.com/scala/scala/commit/05ad682) | <notextile>Make value classes TreeCheckers friendly</notextile>
[3cbb002](https://github.com/scala/scala/commit/3cbb002) | <notextile>SI-4602 Disable unreliable test of fsc path absolutization</notextile>
[952e1bf](https://github.com/scala/scala/commit/952e1bf) | <notextile>SI-4602 Make fsc absolutize source file names</notextile>
[e0cf651](https://github.com/scala/scala/commit/e0cf651) | <notextile>SI-4733 - fsc no longer creates a single temp directory for all users.</notextile>
[0b52a51](https://github.com/scala/scala/commit/0b52a51) | <notextile>SI-6863 Fix verify error in captured var inited from expr with try/catch</notextile>
[262d7ec](https://github.com/scala/scala/commit/262d7ec) | <notextile>SI-6932 Remove Batchable trait plus minor clean-ups</notextile>
[08a74e5](https://github.com/scala/scala/commit/08a74e5) | <notextile> Fix SI-6932 by enabling linearization of callback execution for the internal execution context of Future</notextile>
[11329c3](https://github.com/scala/scala/commit/11329c3) | <notextile>SI-6443 Expand test coverage with varargs, by-name.</notextile>
[493197f](https://github.com/scala/scala/commit/493197f) | <notextile>SI-6443 Widen dependent param types in uncurry</notextile>
[62111a4](https://github.com/scala/scala/commit/62111a4) | <notextile>Update a checkfile from a recent fix.</notextile>
[a72aa94](https://github.com/scala/scala/commit/a72aa94) | <notextile>SI-7018 Fix memory leak in Attachments.</notextile>
[7c45aa5](https://github.com/scala/scala/commit/7c45aa5) | <notextile>Bumped partest MaxPermSize to 128m.</notextile>
[982633a](https://github.com/scala/scala/commit/982633a) | <notextile>SI-6556 Remove unneeded workaround in erasure.</notextile>
[373b001](https://github.com/scala/scala/commit/373b001) | <notextile>Fixed typo in ProcessBuilder scaladoc.</notextile>
[2580a51](https://github.com/scala/scala/commit/2580a51) | <notextile>Laying groundwork for a followup ticket.</notextile>
[412ad57](https://github.com/scala/scala/commit/412ad57) | <notextile>SI-4859 Retain MODULE_LOAD in dead code elim.</notextile>
[f21b1ce](https://github.com/scala/scala/commit/f21b1ce) | <notextile>SI-4859 Don't elide qualifiers when selecting nested modules.</notextile>
[eb4b065](https://github.com/scala/scala/commit/eb4b065) | <notextile>Wider use of isTopLevel</notextile>
[3813d75](https://github.com/scala/scala/commit/3813d75) | <notextile>Introduce a new Symbol test: isTopLevel.</notextile>
[61f2936](https://github.com/scala/scala/commit/61f2936) | <notextile>SI-4859 Don't rewrite CC().CC2() to new CC2</notextile>
[f01e001](https://github.com/scala/scala/commit/f01e001) | <notextile>Make sure typed isn't called with an erroneous tree.</notextile>
[3623432](https://github.com/scala/scala/commit/3623432) | <notextile>Put back a method which sbt is using.</notextile>
[e8d4b11](https://github.com/scala/scala/commit/e8d4b11) | <notextile>A very interesting checkfile update.</notextile>
[a8fe829](https://github.com/scala/scala/commit/a8fe829) | <notextile>Add PolyType to Infer#normalize.</notextile>
[46e8ece](https://github.com/scala/scala/commit/46e8ece) | <notextile>Cleaning up dummy applied types and friends.</notextile>
[901ac16](https://github.com/scala/scala/commit/901ac16) | <notextile>Removing superfluous method parameters.</notextile>
[5878099](https://github.com/scala/scala/commit/5878099) | <notextile>Renamed methods to be less ambiguous in intent.</notextile>
[e626ecd](https://github.com/scala/scala/commit/e626ecd) | <notextile>Added test for untested nested annotation restriction.</notextile>
[76bb23d](https://github.com/scala/scala/commit/76bb23d) | <notextile>SI-6083, misleading annotation error message.</notextile>
[801eab5](https://github.com/scala/scala/commit/801eab5) | <notextile>SI-5182, no position on annotation error.</notextile>
[832fc9a](https://github.com/scala/scala/commit/832fc9a) | <notextile>SI-2577, SI-6860: annotation type inference.</notextile>
[53d5df5](https://github.com/scala/scala/commit/53d5df5) | <notextile>Disabled SI-6987.</notextile>
[d592216](https://github.com/scala/scala/commit/d592216) | <notextile>SI-7011 Fix finding constructor type in captured var definitions</notextile>
[f6168b8](https://github.com/scala/scala/commit/f6168b8) | <notextile>SI-6231 Report unsupported free var capture by a trait.</notextile>
[1dab5bf](https://github.com/scala/scala/commit/1dab5bf) | <notextile>SI-6987 Tests fsc verbose output</notextile>
[e12a5b8](https://github.com/scala/scala/commit/e12a5b8) | <notextile>SI-6987 Fixes fsc compile server verbose output</notextile>
[1a7de43](https://github.com/scala/scala/commit/1a7de43) | <notextile>SI-6666 Restrict hidden `this` access in self/super calls.</notextile>
[cbd0205](https://github.com/scala/scala/commit/cbd0205) | <notextile>SI-6902 Check unreachability under @unchecked</notextile>
[8a74b7b](https://github.com/scala/scala/commit/8a74b7b) | <notextile>Closes SI-6952: add correct error positions for Dynamic feature check.</notextile>
[0d01cc1](https://github.com/scala/scala/commit/0d01cc1) | <notextile>SI-6969, mishandling of SoftReferences in method cache.</notextile>
[d9d6494](https://github.com/scala/scala/commit/d9d6494) | <notextile>SI-6976 Fix value class separate compilation crasher.</notextile>
[a9bbfec](https://github.com/scala/scala/commit/a9bbfec) | <notextile>Do not recompute stack frames when instrumenting bytecode.</notextile>
[b2776b4](https://github.com/scala/scala/commit/b2776b4) | <notextile>Set `canRetransform` flag to `false` in instrumentation.</notextile>
[0a967e1](https://github.com/scala/scala/commit/0a967e1) | <notextile>Correct whitespace in `ASMTransformer.java`.</notextile>
[f2e45fc](https://github.com/scala/scala/commit/f2e45fc) | <notextile>Fix class loader issues in instrumentation tests.</notextile>
[d972336](https://github.com/scala/scala/commit/d972336) | <notextile>Use the same default scalac options in all three partest frontends</notextile>
[4dceb22](https://github.com/scala/scala/commit/4dceb22) | <notextile>[backport] Fix SI-6637 (misoptimization in erasure)</notextile>
[ba411c4](https://github.com/scala/scala/commit/ba411c4) | <notextile>[backport] Fix unsafe array opt. / opt. primitive Array(...)</notextile>
[96ed055](https://github.com/scala/scala/commit/96ed055) | <notextile>[backport] SI-6567 Warning for Option(implicitView(foo))</notextile>
[3486d47](https://github.com/scala/scala/commit/3486d47) | <notextile>SI-6439 Avoid spurious REPL warnings about companionship</notextile>
[52a5328](https://github.com/scala/scala/commit/52a5328) | <notextile>Addressing warnings.</notextile>
[8f49884](https://github.com/scala/scala/commit/8f49884) | <notextile>SI-6994 Avoid spurious promiscuous catch warning</notextile>
[873aecc](https://github.com/scala/scala/commit/873aecc) | <notextile>Fix broken build.</notextile>
[8297843](https://github.com/scala/scala/commit/8297843) | <notextile>SI-6434 Pretty print function types with by name arg as (=&gt; A) =&gt; B</notextile>
[277f0fe](https://github.com/scala/scala/commit/277f0fe) | <notextile>Removed class files.</notextile>
[964776f](https://github.com/scala/scala/commit/964776f) | <notextile>use ArrayBuffer instead of Array to build Formulae</notextile>
[f539781](https://github.com/scala/scala/commit/f539781) | <notextile>SI-6942 more efficient unreachability analysis</notextile>
[c606559](https://github.com/scala/scala/commit/c606559) | <notextile>SI-5568 Comment improvements for getClass on primitive intersection.</notextile>
[765386f](https://github.com/scala/scala/commit/765386f) | <notextile>SI-5568 Fixes verify error from getClass on refinement of value type</notextile>
[b07228a](https://github.com/scala/scala/commit/b07228a) | <notextile>SI-6601 Publicise derived value contstructor after pickler</notextile>
[66fe64f](https://github.com/scala/scala/commit/66fe64f) | <notextile>SI-6923 Context now buffers warnings as well as errors</notextile>
[ce56316](https://github.com/scala/scala/commit/ce56316) | <notextile>use Constant::isIntRange even if it's NIH</notextile>
[a6b34b6](https://github.com/scala/scala/commit/a6b34b6) | <notextile>SI-6956 determine switchability by type, not tree</notextile>
[950e938](https://github.com/scala/scala/commit/950e938) | <notextile>Revert &quot;SI-5824 Fix crashes in reify with _*&quot;</notextile>
[0a25ee3](https://github.com/scala/scala/commit/0a25ee3) | <notextile>SI-5824 Fix crashes in reify with _*</notextile>
[8f1d4a5](https://github.com/scala/scala/commit/8f1d4a5) | <notextile>Grammatical fix</notextile>
[8d4402d](https://github.com/scala/scala/commit/8d4402d) | <notextile>Remove the term &quot;pimp&quot; from the repository</notextile>
[20d7a17](https://github.com/scala/scala/commit/20d7a17) | <notextile>align partest script with ant</notextile>
[a01e535](https://github.com/scala/scala/commit/a01e535) | <notextile>Fix some typos</notextile>
[76b92ef](https://github.com/scala/scala/commit/76b92ef) | <notextile>Modifies &quot;maybeRewrap&quot; to focus more on the maybe.</notextile>
[a9c374b](https://github.com/scala/scala/commit/a9c374b) | <notextile>SI-6811 Move scala.util.{automata,regexp} ... ... to scala.xml.dtd.impl and make it private[dtd]</notextile>
[a386291](https://github.com/scala/scala/commit/a386291) | <notextile>SI-6811 Remove scala.xml.include.sax.Main</notextile>
[98d3368](https://github.com/scala/scala/commit/98d3368) | <notextile>SI-6811 Remove scala.ScalaObject</notextile>
[684f549](https://github.com/scala/scala/commit/684f549) | <notextile>SI-6811 Remove the scala.annotation.target package</notextile>
[f931833](https://github.com/scala/scala/commit/f931833) | <notextile>SI-6811 Misc. removals in util, testing, io, ...</notextile>
[be5554f](https://github.com/scala/scala/commit/be5554f) | <notextile>SI-6811 Remove deprecated elements in scala.collection</notextile>
[67d7e26](https://github.com/scala/scala/commit/67d7e26) | <notextile>SI-6811 Remove parts of scala.concurrent not needed by scala.actors</notextile>
[b13bf26](https://github.com/scala/scala/commit/b13bf26) | <notextile>SI-6811 Remove the scala.util.grammar package</notextile>
[c2903d6](https://github.com/scala/scala/commit/c2903d6) | <notextile>SI-6811 Remove scala.collection.mutable.ConcurrentMap</notextile>
[ed52ea0](https://github.com/scala/scala/commit/ed52ea0) | <notextile>SI-6811 Remove primitive widenings and /:\</notextile>
[2ee8568](https://github.com/scala/scala/commit/2ee8568) | <notextile>SI-6811 Remove deprecated constructors</notextile>
[167fc0a](https://github.com/scala/scala/commit/167fc0a) | <notextile>SI-6811 Remove usages of scala.annotation.cloneable</notextile>
[4805b97](https://github.com/scala/scala/commit/4805b97) | <notextile>SI-6811 Remove scala.annotation.serializable</notextile>
[decc9a9](https://github.com/scala/scala/commit/decc9a9) | <notextile>SI-6979 Small optimization in lub</notextile>
[5d59fb9](https://github.com/scala/scala/commit/5d59fb9) | <notextile>Disable MIMA in master.</notextile>
[9cc61f3](https://github.com/scala/scala/commit/9cc61f3) | <notextile>SI-6479 Don't lift try exprs in label arguments.</notextile>
[0c2e884](https://github.com/scala/scala/commit/0c2e884) | <notextile>SI-6963 Deprecates -Xmigration switch</notextile>
[78019b2](https://github.com/scala/scala/commit/78019b2) | <notextile>SI-6675 Test new warning under -Xoldpatmat.</notextile>
[692372c](https://github.com/scala/scala/commit/692372c) | <notextile>SI-6675 -Xlint arity enforcement for extractors</notextile>
[8475807](https://github.com/scala/scala/commit/8475807) | <notextile>SI-6955 switch emission no longer foiled by type alias</notextile>
[39352fe](https://github.com/scala/scala/commit/39352fe) | <notextile>SI-6082 Conditionally expand @ann(x) to @ann(value = x)</notextile>
[4aba0fe](https://github.com/scala/scala/commit/4aba0fe) | <notextile>SI-5440 Test case for exhaustiveness check</notextile>
[1212af4](https://github.com/scala/scala/commit/1212af4) | <notextile>SI-5340 Change println to log</notextile>
[51f574a](https://github.com/scala/scala/commit/51f574a) | <notextile>clean up synthesizePartialFunction</notextile>
[e314ff1](https://github.com/scala/scala/commit/e314ff1) | <notextile>rework partial function synthesis</notextile>
[b1cea21](https://github.com/scala/scala/commit/b1cea21) | <notextile>SI-6925 use concrete type in applyOrElse's match's selector</notextile>
[8fb19b1](https://github.com/scala/scala/commit/8fb19b1) | <notextile>SI-5189 detect unsoundness when inferring type of match</notextile>
[38404e8](https://github.com/scala/scala/commit/38404e8) | <notextile>SI-6555 Scaladoc's class filter shouldn't drop the last character</notextile>
[0f237e9](https://github.com/scala/scala/commit/0f237e9) | <notextile>SI-6930 adds documentation to reduceLeft in TraversableOnce</notextile>
[57ae1f3](https://github.com/scala/scala/commit/57ae1f3) | <notextile>SI-6905 - Switch to sneakyThrows instead of Unsafe.throwException as per new jsr166y to avoid issues with Android</notextile>
[25c7364](https://github.com/scala/scala/commit/25c7364) | <notextile>SI-6126 Test case for varargs of tagged primitives.</notextile>
[79a722f](https://github.com/scala/scala/commit/79a722f) | <notextile>SI-6946, SI-6924 Greatly improves IsTraversableLike docs</notextile>
[3ef487e](https://github.com/scala/scala/commit/3ef487e) | <notextile>SI-5954 Implementation restriction preventing companions in package objs</notextile>
[a557a97](https://github.com/scala/scala/commit/a557a97) | <notextile>Fixes SI-6521, overrides Range#head to be faster</notextile>
[7a23562](https://github.com/scala/scala/commit/7a23562) | <notextile>SI-6912 Avoid a typer cycle in overload resolution.</notextile>
[e5da30b](https://github.com/scala/scala/commit/e5da30b) | <notextile>Backport of SI-6846.</notextile>
[c58647f](https://github.com/scala/scala/commit/c58647f) | <notextile>SI-6928, VerifyError with self reference to super.</notextile>
[557caa3](https://github.com/scala/scala/commit/557caa3) | <notextile>SI-6641 Deprecate SwingWorker</notextile>
[103a478](https://github.com/scala/scala/commit/103a478) | <notextile>SI-6803: do not use java.net.URI, even more so incorrectly.</notextile>
[aedec19](https://github.com/scala/scala/commit/aedec19) | <notextile>Granted scaladoc its own Global.</notextile>
[f7490d5](https://github.com/scala/scala/commit/f7490d5) | <notextile>Restore pending repl-javap tests that now succeed under java 6.</notextile>
[3bb8745](https://github.com/scala/scala/commit/3bb8745) | <notextile>Fixes and features for javap (fixing SI-6894)</notextile>
[38958f4](https://github.com/scala/scala/commit/38958f4) | <notextile>SI-6955 switch emission no longer foiled by type alias</notextile>
[b61a64d](https://github.com/scala/scala/commit/b61a64d) | <notextile>SI-6964 Remove build managers, both simple and refined.</notextile>
[f98ccad](https://github.com/scala/scala/commit/f98ccad) | <notextile>Tweaked meta-annotation error based on feedback.</notextile>
[61f70e4](https://github.com/scala/scala/commit/61f70e4) | <notextile>SI-6375, warn on lost annotation.</notextile>
[ebdc0ff](https://github.com/scala/scala/commit/ebdc0ff) | <notextile>Cleaned up meta-annotations.</notextile>
[fdca508](https://github.com/scala/scala/commit/fdca508) | <notextile>remove hack for old patmat unnecessary in 2.11</notextile>
[bd4bffa](https://github.com/scala/scala/commit/bd4bffa) | <notextile>SI-5189 detect unsoundness when inferring type of match</notextile>
[58bfa19](https://github.com/scala/scala/commit/58bfa19) | <notextile>SI-6966 Fix regression in implicit resolution</notextile>
[76aab73](https://github.com/scala/scala/commit/76aab73) | <notextile>Fix dependant =&gt; dependent</notextile>
[78bc17b](https://github.com/scala/scala/commit/78bc17b) | <notextile>Remove EqualsPatternClass.</notextile>
[143cd7a](https://github.com/scala/scala/commit/143cd7a) | <notextile>macroExpandAll is now triggered by typed</notextile>
[fe60284](https://github.com/scala/scala/commit/fe60284) | <notextile>SI-5923 adapt macros when they are deferred</notextile>
30e2e3a | <notextile>generalizes macroExpand</notextile>
[94de3c8](https://github.com/scala/scala/commit/94de3c8) | <notextile>typedPrimaryConstrBody now returns supercall</notextile>
[3d397aa](https://github.com/scala/scala/commit/3d397aa) | <notextile>more precise errors for macros</notextile>
[055b07e](https://github.com/scala/scala/commit/055b07e) | <notextile>parentTypes =&gt; typedParentTypes</notextile>
[baef456](https://github.com/scala/scala/commit/baef456) | <notextile>changes isTermMacro checks to something more universal</notextile>
[1077c92](https://github.com/scala/scala/commit/1077c92) | <notextile>fixes printing of AppliedTypeTree</notextile>
[5660b7a](https://github.com/scala/scala/commit/5660b7a) | <notextile>adds Trees.replace(Tree, Tree)</notextile>
[7550799](https://github.com/scala/scala/commit/7550799) | <notextile>makes macro override error more consistent</notextile>
[fa4531e](https://github.com/scala/scala/commit/fa4531e) | <notextile>refactors handling of macros in repl</notextile>
[66acf36](https://github.com/scala/scala/commit/66acf36) | <notextile>SI-5903 extractor macros do work</notextile>
[d17e3fc](https://github.com/scala/scala/commit/d17e3fc) | <notextile>adds c.macroRole</notextile>
[0bfb798](https://github.com/scala/scala/commit/0bfb798) | <notextile>sbt-git-plugin has moved.</notextile>
[c45491c](https://github.com/scala/scala/commit/c45491c) | <notextile>SI-6641 Cull scala.swing.SwingWorker</notextile>
[198d522](https://github.com/scala/scala/commit/198d522) | <notextile>Made &quot;mode&quot; into a value class.</notextile>
[481772d](https://github.com/scala/scala/commit/481772d) | <notextile>Moved repl javap tests into pending.</notextile>
[03caf40](https://github.com/scala/scala/commit/03caf40) | <notextile>Renamed isTrackingVariance to trackVariance.</notextile>
[31f073c](https://github.com/scala/scala/commit/31f073c) | <notextile>SI-5378, unsoundness with type bounds in refinements.</notextile>
[a419799](https://github.com/scala/scala/commit/a419799) | <notextile>SI-6566, unsoundness with alias variance.</notextile>
[567df8e](https://github.com/scala/scala/commit/567df8e) | <notextile>Boosted test coverage.</notextile>
[5d66c12](https://github.com/scala/scala/commit/5d66c12) | <notextile>Handle variance exclusions in a less ad hoc manner.</notextile>
[fb98b70](https://github.com/scala/scala/commit/fb98b70) | <notextile>Eliminated redundant validateVariance.</notextile>
[85571f6](https://github.com/scala/scala/commit/85571f6) | <notextile>Sweeping up in Variances.</notextile>
[a65dbd7](https://github.com/scala/scala/commit/a65dbd7) | <notextile>Move isFinalType logic to Symbol.</notextile>
[0693592](https://github.com/scala/scala/commit/0693592) | <notextile>Move escaping local logic into VarianceValidator.</notextile>
[882f8e6](https://github.com/scala/scala/commit/882f8e6) | <notextile>Eliminated VariantTypeMap.</notextile>
[9be6d05](https://github.com/scala/scala/commit/9be6d05) | <notextile>Functionalization of Variance code.</notextile>
[57aa63b](https://github.com/scala/scala/commit/57aa63b) | <notextile>Moved VariantTypeMap into Variances.</notextile>
[91d8584](https://github.com/scala/scala/commit/91d8584) | <notextile>Moved Variances into SymbolTable.</notextile>
[36ec5ff](https://github.com/scala/scala/commit/36ec5ff) | <notextile>Relocated redundant variance checking code.</notextile>
[ea93654](https://github.com/scala/scala/commit/ea93654) | <notextile>Incorporated Variance value class in Variances.</notextile>
[996ee33](https://github.com/scala/scala/commit/996ee33) | <notextile>Created value class Variance.</notextile>
[942f078](https://github.com/scala/scala/commit/942f078) | <notextile>Repl javap decodes various synthetic names for us (fixing SI-6894)</notextile>
[77c8751](https://github.com/scala/scala/commit/77c8751) | <notextile>SI-6915 Updates copyright properties to 2002-2013</notextile>
[2ceec33](https://github.com/scala/scala/commit/2ceec33) | <notextile>avoid reflect overhead of certain array instantiations</notextile>
[f76432a](https://github.com/scala/scala/commit/f76432a) | <notextile>proper elementClass for WrappedArray</notextile>
[3405294](https://github.com/scala/scala/commit/3405294) | <notextile>SI-6897, lubs and varargs star.</notextile>
[a6ce037](https://github.com/scala/scala/commit/a6ce037) | <notextile>SI-6896, spurious warning with overloaded main.</notextile>
[eeb6ee6](https://github.com/scala/scala/commit/eeb6ee6) | <notextile>SI-6911, regression in generated case class equality.</notextile>
[92cf0e3](https://github.com/scala/scala/commit/92cf0e3) | <notextile>Fix Iterator#copyToArray (fixes SI-6827).</notextile>
[02b2da6](https://github.com/scala/scala/commit/02b2da6) | <notextile>SI-5017 Poor performance of :+ operator on Arrays</notextile>
[ac61e34](https://github.com/scala/scala/commit/ac61e34) | <notextile>SI-6194, repl crash.</notextile>
[9575ee9](https://github.com/scala/scala/commit/9575ee9) | <notextile>Remove -deprecation from partest default options.</notextile>
[e5f16ac](https://github.com/scala/scala/commit/e5f16ac) | <notextile>SI-6746 Fixes MANIFEST.MF package entry (s.r.makro -&gt; s.r.macros)</notextile>
[9d1e22b](https://github.com/scala/scala/commit/9d1e22b) | <notextile>Stream.zip naturalsEx example does not compile =&gt; remove extra zip call</notextile>
[1364381](https://github.com/scala/scala/commit/1364381) | <notextile>LinearSeq lengthCompare without an iterator.</notextile>
[24a033b](https://github.com/scala/scala/commit/24a033b) | <notextile>SI-6415, overly eager evaluation in Stream.</notextile>
[231d59d](https://github.com/scala/scala/commit/231d59d) | <notextile>SI-6829, SI-6788, NPEs during erroneous compilation.</notextile>
[4423c59](https://github.com/scala/scala/commit/4423c59) | <notextile>Remove stray debugging output line.</notextile>
[3a6f3ae](https://github.com/scala/scala/commit/3a6f3ae) | <notextile>SI-6338 fixes the unchecked warning in quick.comp</notextile>
