---

category: announcement
title: "Scala 2.11.0-M8 is now available!"

---

We are pleased to announce the final milestone release of Scala 2.11.0!

Please do try out this release to help us find any regressions before the first release candidate, which is scheduled for February 18.
For production use, we recommend the latest stable release, 2.10.3 (soon 2.10.4).

If your code compiled on 2.10.x without deprecation warnings, it should compile on 2.11.x. If not, [please file a regression](https://issues.scala-lang.org/secure/CreateIssueDetails!init.jspa?pid=10005&issuetype=1&versions=11311&labels=regression).
We are working with the community to ensure availability of the core artifacts of the Scala 2.11.x eco-system.
This release is *not* binary compatible with the 2.10.x series, so that we can keep improving the Scala standard library.

Scala 2.11.0-M8 is available for download from [scala-lang.org](http://scala-lang.org/download/2.11.0-M8.html)
or from [Maven Central](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.11.0-M8%22).

The Scala team and contributors [fixed 119 issues](https://issues.scala-lang.org/issues/?jql=project+%3D+SI+AND+fixVersion+%3D+%22Scala+2.11.0-M8%22+AND+status+%3D+CLOSED+ORDER+BY+priority+DESC) via [174 merged pull requests](https://github.com/scala/scala/issues?milestone=26&page=1&state=closed)!

### Reporting Bugs / Known Issues
Please [file any bugs you encounter](https://issues.scala-lang.org/secure/CreateIssueDetails!init.jspa?pid=10005&issuetype=1&versions=11311). If you're unsure whether something is a bug, please contact the [scala-user](https://groups.google.com/forum/?fromgroups#!forum/scala-user) mailing list.

Before reporting a bug, please have a look at these [known issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20fixVersion%20%21%3D%20%22Scala%202.11.0-M8%22%20AND%20affectedVersion%20%3D%20%22Scala%202.11.0-M8%22%20%20and%20resolution%20%3D%20unresolved%20ORDER%20BY%20priority%20DESC).

### Scala IDE for Eclipse
The Scala IDE with this release built in will soon be available at the usual update-site:

* for Eclipse 4.2/4.3 (Juno/Kepler)

Have a look at the [getting started guide](http://scala-ide.org/docs/user/gettingstarted.html) for more info.

<!--break-->

### New features in the 2.11 series
This release contains all of the bug fixes and improvements made in the 2.10 series, as well as:

* Modularization
  * The core Scala standard library jar has shed 20% of its bytecode. The modules for xml, parsing, and swing are available individually or via [scala-library-all](http://search.maven.org/#artifactdetails%7Corg.scala-lang%7Cscala-library-all%7C2.11.0-M8%7Cpom).
  * The compiler has been internally modularized, to separate the presentation compiler, scaladoc
      and the REPL. In this release, all of these modules are still packaged in scala-compiler.jar.
      We plan to ship them in separate JARs in 2.12.x.
* Slimming down
  * The experimental .NET backend has been removed from the compiler.
  * In Scala 2.10.0, new implementations of the Pattern Matcher and the Bytecode Emitter
      were shipped. We have now removed the old implementations.
  * scala-actors is now deprecated; we advise users to follow the steps in the [Actors Migration Guide](http://docs.scala-lang.org/overviews/core/actors-migration-guide.html) to port to Akka Actors, which have been included in the distribution since 2.10.0.
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
75 | <notextile>Jason Zaugg</notextile>
42 | <notextile>Eugene Burmako</notextile>
31 | <notextile>Adriaan Moors</notextile>
24 | <notextile>Den Shabalin</notextile>
15 | <notextile>Simon Ochsenreither</notextile>
13 | <notextile>Som Snytt</notextile>
11 | <notextile>Paul Phillips</notextile>
10 | <notextile>Rex Kerr</notextile>
9 | <notextile>Vladimir Nikolaev</notextile>
8 | <notextile>Mirco Dotta</notextile>
7 | <notextile>Miguel Garcia</notextile>
7 | <notextile>R&uuml;diger Klaehn</notextile>
5 | <notextile>Fran&ccedil;ois Garillot</notextile>
4 | <notextile>Simon Schaefer</notextile>
4 | <notextile>Luc Bourlier</notextile>
3 | <notextile>Denys Shabalin</notextile>
2 | <notextile>Olivier Blanvillain</notextile>
2 | <notextile>Antoine Gourlay</notextile>
2 | <notextile>Kenji Yoshida</notextile>
2 | <notextile>Christoffer Sawicki</notextile>
2 | <notextile>Paolo Giarrusso</notextile>
1 | <notextile>Erik Osheim</notextile>
1 | <notextile>Scott Carey</notextile>
1 | <notextile>James Iry</notextile>
1 | <notextile>Chris Hodapp</notextile>
1 | <notextile>James Ward</notextile>
1 | <notextile>Heather Miller</notextile>
1 | <notextile>Thomas Geier</notextile>
1 | <notextile>Jason Swartz</notextile>
1 | <notextile>Visitor</notextile>
1 | <notextile>Johannes Rudolph</notextile>
1 | <notextile>Roberto Tyley</notextile>
1 | <notextile>Dmitry Petrashko</notextile>



#### Commits and the issues they fixed since v2.11.0-M7

Issue(s) | Commit | Message
--- | --- | ---
[SI-6443](https://issues.scala-lang.org/browse/SI-6443), [SI-8143](https://issues.scala-lang.org/browse/SI-8143) | [1baf11a2bb](https://github.com/scala/scala/commit/1baf11a2bb) | <notextile>SI-8143 Fix bug with super-accessors / dependent types</notextile>
[SI-8152](https://issues.scala-lang.org/browse/SI-8152) | [9df2dcc584](https://github.com/scala/scala/commit/9df2dcc58439cf75420da68d4e6d9bb5504aabb4) | <notextile>[nomaster] SI-8152 Backport variance validator performance fix</notextile>
[SI-8111](https://issues.scala-lang.org/browse/SI-8111) | [c91d373a78](https://github.com/scala/scala/commit/c91d373a78) | <notextile>SI-8111 Expand the comment with a more detailed TODO</notextile>
[SI-8111](https://issues.scala-lang.org/browse/SI-8111) | [2c770ae31a](https://github.com/scala/scala/commit/2c770ae31a) | <notextile>SI-8111 Repair symbol owners after abandoned named-/default-args</notextile>
[SI-7120](https://issues.scala-lang.org/browse/SI-7120), [SI-8114](https://issues.scala-lang.org/browse/SI-8114), [SI-7120](https://issues.scala-lang.org/browse/SI-7120) | [5876e8c621](https://github.com/scala/scala/commit/5876e8c621) | <notextile>[nomaster] SI-8114 Binary compat. workaround for erasure bug SI-7120</notextile>
[SI-7636](https://issues.scala-lang.org/browse/SI-7636), [SI-6563](https://issues.scala-lang.org/browse/SI-6563) | [255c51b3dd](https://github.com/scala/scala/commit/255c51b3dd) | <notextile>SI-6563 Test case for already-fixed crasher</notextile>
[SI-8104](https://issues.scala-lang.org/browse/SI-8104), [SI-8104](https://issues.scala-lang.org/browse/SI-8104) | [c0cb1d891a](https://github.com/scala/scala/commit/c0cb1d891a) | <notextile>[nomaster] codifies the state of the art wrt SI-8104</notextile>
[SI-8085](https://issues.scala-lang.org/browse/SI-8085) | [7e85b59550](https://github.com/scala/scala/commit/7e85b59550) | <notextile>SI-8085 Fix BrowserTraverser for package objects</notextile>
[SI-8085](https://issues.scala-lang.org/browse/SI-8085) | [a12dd9c3b6](https://github.com/scala/scala/commit/a12dd9c3b6) | <notextile>Test demonstrating SI-8085</notextile>
[SI-6426](https://issues.scala-lang.org/browse/SI-6426) | [47562e7adb](https://github.com/scala/scala/commit/47562e7adb) | <notextile>Revert &quot;SI-6426, importable _.&quot;</notextile>
[SI-8062](https://issues.scala-lang.org/browse/SI-8062) | [f0d913b51d](https://github.com/scala/scala/commit/f0d913b51d) | <notextile>SI-8062 Fix inliner cycle with recursion, separate compilation</notextile>
[SI-8157](https://issues.scala-lang.org/browse/SI-8157) | [ca05d22006](https://github.com/scala/scala/commit/ca05d22006) | <notextile>SI-8157 Make overloading, defaults restriction PolyType aware</notextile>
[SI-6253](https://issues.scala-lang.org/browse/SI-6253) | [034f6b9452](https://github.com/scala/scala/commit/034f6b9452) | <notextile>SI-6253 HashSet should implement union</notextile>
[SI-5604](https://issues.scala-lang.org/browse/SI-5604), [SI-5604](https://issues.scala-lang.org/browse/SI-5604) | [841dbc9c8c](https://github.com/scala/scala/commit/841dbc9c8c) | <notextile>removing defensive code made obsolete by existing fix to SI-5604</notextile>
[SI-6089](https://issues.scala-lang.org/browse/SI-6089), [SI-7749](https://issues.scala-lang.org/browse/SI-7749) | [c4e37d6521](https://github.com/scala/scala/commit/c4e37d6521) | <notextile>overzealous assert in GenBCode</notextile>
[SI-8126](https://issues.scala-lang.org/browse/SI-8126), [SI-7335](https://issues.scala-lang.org/browse/SI-7335) | [94e05a8501](https://github.com/scala/scala/commit/94e05a8501) | <notextile>SI-8126 Puts SI-7335 fix behind a source level flag</notextile>
[SI-8126](https://issues.scala-lang.org/browse/SI-8126), [SI-6899](https://issues.scala-lang.org/browse/SI-6899) | [6dd3653b9c](https://github.com/scala/scala/commit/6dd3653b9c) | <notextile>SI-8126 Puts SI-6899 fix under a source level flag</notextile>
[SI-8126](https://issues.scala-lang.org/browse/SI-8126) | [d43618a92c](https://github.com/scala/scala/commit/d43618a92c) | <notextile>SI-8126 Add a '-Xsource' flag allowing compilation in e.g. 2.10 mode</notextile>
[SI-4370](https://issues.scala-lang.org/browse/SI-4370) | [994de8ffd1](https://github.com/scala/scala/commit/994de8ffd1) | <notextile>SI-4370 Range bug: Wrong result for Long.MinValue to Long.MaxValue by Int.MaxVal</notextile>
[SI-8148](https://issues.scala-lang.org/browse/SI-8148) | [973c7066b8](https://github.com/scala/scala/commit/973c7066b8) | <notextile>SI-8148 fix anonymous functions with placeholders</notextile>
[SI-6196](https://issues.scala-lang.org/browse/SI-6196), [SI-6200](https://issues.scala-lang.org/browse/SI-6200) | [47a91d76fc](https://github.com/scala/scala/commit/47a91d76fc) | <notextile>SI-6200 - HashMap should implement filter</notextile>
[SI-6196](https://issues.scala-lang.org/browse/SI-6196) | [afcfba02ed](https://github.com/scala/scala/commit/afcfba02ed) | <notextile>SI-6196 - Set should implement filter</notextile>
[SI-7544](https://issues.scala-lang.org/browse/SI-7544) | [af75be6034](https://github.com/scala/scala/commit/af75be6034) | <notextile>SI-7544 StringContext.f docs update</notextile>
[SI-6457](https://issues.scala-lang.org/browse/SI-6457) | [bfa70315d7](https://github.com/scala/scala/commit/bfa70315d7) | <notextile>SI-6457 ImmutableSetFactory.empty results in StackOverflowError</notextile>
[SI-6153](https://issues.scala-lang.org/browse/SI-6153), [SI-6173](https://issues.scala-lang.org/browse/SI-6173), [SI-6456](https://issues.scala-lang.org/browse/SI-6456), [SI-6699](https://issues.scala-lang.org/browse/SI-6699), [SI-8116](https://issues.scala-lang.org/browse/SI-8116) | [29541ce396](https://github.com/scala/scala/commit/29541ce396) | <notextile>Quasi-comprehensive BigDecimal soundness/correctness fix.</notextile>
[SI-8100](https://issues.scala-lang.org/browse/SI-8100) | [2477bbd9d6](https://github.com/scala/scala/commit/2477bbd9d6) | <notextile>SI-8100 - prevent possible SOE during Stream#flatten.</notextile>
[SI-7469](https://issues.scala-lang.org/browse/SI-7469) | [765ac94c2b](https://github.com/scala/scala/commit/765ac94c2b) | <notextile>SI-7469 Remove misc. @deprecated elements</notextile>
[SI-8015](https://issues.scala-lang.org/browse/SI-8015) | [f606d8176e](https://github.com/scala/scala/commit/f606d8176e) | <notextile>SI-8015 Refactor per code review</notextile>
[SI-8015](https://issues.scala-lang.org/browse/SI-8015) | [2c8a8ff6ba](https://github.com/scala/scala/commit/2c8a8ff6ba) | <notextile>SI-8015 Carat =&gt; Caret</notextile>
[SI-8015](https://issues.scala-lang.org/browse/SI-8015) | [8be560a1cf](https://github.com/scala/scala/commit/8be560a1cf) | <notextile>SI-8015 Unprintables in messages</notextile>
[SI-8015](https://issues.scala-lang.org/browse/SI-8015) | [bb2e99a692](https://github.com/scala/scala/commit/bb2e99a692) | <notextile>SI-8015 Count lines by EOLs</notextile>
[SI-8035](https://issues.scala-lang.org/browse/SI-8035) | [c5567e2700](https://github.com/scala/scala/commit/c5567e2700) | <notextile>SI-8035 Deprecate automatic () insertion in argument lists</notextile>
[SI-8107](https://issues.scala-lang.org/browse/SI-8107) | [2fe767806b](https://github.com/scala/scala/commit/2fe767806b) | <notextile>SI-8107: Use Regex.quote</notextile>
[SI-8107](https://issues.scala-lang.org/browse/SI-8107) | [780ceca6a3](https://github.com/scala/scala/commit/780ceca6a3) | <notextile>SI-8107: Add Regex.quote</notextile>
[SI-8081](https://issues.scala-lang.org/browse/SI-8081) | [b8a76f688c](https://github.com/scala/scala/commit/b8a76f688c) | <notextile>SI-8081 unzip/unzip3 return wrong static type when applied to Arrays</notextile>
[SI-8132](https://issues.scala-lang.org/browse/SI-8132) | [8642a50da8](https://github.com/scala/scala/commit/8642a50da8) | <notextile>SI-8132 Fix false &quot;overrides nothing&quot; for case class protected param</notextile>
[SI-7326](https://issues.scala-lang.org/browse/SI-7326) | [24a227d23d](https://github.com/scala/scala/commit/24a227d23d) | <notextile>Implements specialized subsetOf for HashSet</notextile>
[SI-8146](https://issues.scala-lang.org/browse/SI-8146) | [a09e143b7f](https://github.com/scala/scala/commit/a09e143b7f) | <notextile>SI-8146 Fix non-deterministic &lt;:&lt; for deeply nested types</notextile>
[SI-8146](https://issues.scala-lang.org/browse/SI-8146) | [2e28cf7f76](https://github.com/scala/scala/commit/2e28cf7f76) | <notextile>SI-8146 Test cases for typechecking decidability</notextile>
[SI-8146](https://issues.scala-lang.org/browse/SI-8146) | [8beeef339a](https://github.com/scala/scala/commit/8beeef339a) | <notextile>SI-8146 Pending test, diagnosis for bug in decidability of &lt;:&lt;</notextile>
[SI-8128](https://issues.scala-lang.org/browse/SI-8128) | [3e9e2c65a6](https://github.com/scala/scala/commit/3e9e2c65a6) | <notextile>SI-8128 Fix regression in extractors returning existentials</notextile>
[SI-8045](https://issues.scala-lang.org/browse/SI-8045), [SI-8045](https://issues.scala-lang.org/browse/SI-8045) | [1696145f76](https://github.com/scala/scala/commit/1696145f76) | <notextile>SI-8045 type inference of extracted value</notextile>
[SI-7850](https://issues.scala-lang.org/browse/SI-7850) | [def46a9d44](https://github.com/scala/scala/commit/def46a9d44) | <notextile>SI-7850 CCE in patmat with invalid isEmpty.</notextile>
[SI-6111](https://issues.scala-lang.org/browse/SI-6111), [SI-6675](https://issues.scala-lang.org/browse/SI-6675), [SI-7897](https://issues.scala-lang.org/browse/SI-7897), [SI-6675](https://issues.scala-lang.org/browse/SI-6675) | [11bfa25e37](https://github.com/scala/scala/commit/11bfa25e37) | <notextile>SI-7897, SI-6675 improves name-based patmat</notextile>
[SI-6615](https://issues.scala-lang.org/browse/SI-6615) | [8dd69ecfa7](https://github.com/scala/scala/commit/8dd69ecfa7) | <notextile>SI-6615 junit test</notextile>
[SI-8058](https://issues.scala-lang.org/browse/SI-8058) | [a90f39cdb5](https://github.com/scala/scala/commit/a90f39cdb5) | <notextile>SI-8058 Better support for enum trees</notextile>
[SI-4841](https://issues.scala-lang.org/browse/SI-4841) | [77a66d3525](https://github.com/scala/scala/commit/77a66d3525) | <notextile>SI-4841 CLI help update for -Xplugin</notextile>
[SI-8046](https://issues.scala-lang.org/browse/SI-8046) | [6f42bd6881](https://github.com/scala/scala/commit/6f42bd6881) | <notextile>SI-8046 Only use fast TypeRef#baseTypeSeq with concrete base types</notextile>
[SI-6161](https://issues.scala-lang.org/browse/SI-6161) | [0de991ffea](https://github.com/scala/scala/commit/0de991ffea) | <notextile>Pending test for SI-6161</notextile>
[SI-8046](https://issues.scala-lang.org/browse/SI-8046) | [edc9edb79b](https://github.com/scala/scala/commit/edc9edb79b) | <notextile>SI-8046 Fix baseTypeSeq in presence of type aliases</notextile>
[SI-2066](https://issues.scala-lang.org/browse/SI-2066) | [28d3390e07](https://github.com/scala/scala/commit/28d3390e07) | <notextile>SI-2066 Plug a soundness hole higher order type params, overriding</notextile>
[SI-6615](https://issues.scala-lang.org/browse/SI-6615) | [ad594604ed](https://github.com/scala/scala/commit/ad594604ed) | <notextile>SI-6615 PagedSeq's slice throws a NPE if it starts on a page that hasn't been co</notextile>
[SI-6364](https://issues.scala-lang.org/browse/SI-6364) | [973f69ac75](https://github.com/scala/scala/commit/973f69ac75) | <notextile>SI-6364 SetWrapper does not preserve performance / behavior</notextile>
[SI-7680](https://issues.scala-lang.org/browse/SI-7680) | [cb0d2854e1](https://github.com/scala/scala/commit/cb0d2854e1) | <notextile>SI-7680 Update the ScalaDoc entry page of the Scala library</notextile>
[SI-8129](https://issues.scala-lang.org/browse/SI-8129) | [00e11ffdd4](https://github.com/scala/scala/commit/00e11ffdd4) | <notextile>SI-8129 Plug a leak in perRunCaches</notextile>
[SI-8131](https://issues.scala-lang.org/browse/SI-8131), [SI-8131](https://issues.scala-lang.org/browse/SI-8131) | [1d908106cf](https://github.com/scala/scala/commit/1d908106cf) | <notextile>SI-8131 Move test for reflection thread safety to pending.</notextile>
[SI-8135](https://issues.scala-lang.org/browse/SI-8135) | [3b68163e47](https://github.com/scala/scala/commit/3b68163e47) | <notextile>SI-8135 Disabled flaky hyperlinking presentation compiler test</notextile>
[SI-7443](https://issues.scala-lang.org/browse/SI-7443) | [4b6a0a999e](https://github.com/scala/scala/commit/4b6a0a999e) | <notextile>SI-7443 Use typeclass instance for {Range,NumericRange}.sum</notextile>
[SI-6812](https://issues.scala-lang.org/browse/SI-6812) | [6e4c926b4a](https://github.com/scala/scala/commit/6e4c926b4a) | <notextile>Use macro expandee, rather than expansion, in pres. compiler</notextile>
[SI-8064](https://issues.scala-lang.org/browse/SI-8064) | [d744921f85](https://github.com/scala/scala/commit/d744921f85) | <notextile>SI-8064 Automatic position repair for macro expansion</notextile>
[SI-7974](https://issues.scala-lang.org/browse/SI-7974) | [2e7c7347b9](https://github.com/scala/scala/commit/2e7c7347b9) | <notextile>SI-7974 Clean up and test 'Symbol-handling code in CleanUp</notextile>
[SI-7974](https://issues.scala-lang.org/browse/SI-7974) | [5e1e472fa1](https://github.com/scala/scala/commit/5e1e472fa1) | <notextile>SI-7974 Avoid calling nonPrivateMember after erasure</notextile>
[SI-4827](https://issues.scala-lang.org/browse/SI-4827) | [4936c43c13](https://github.com/scala/scala/commit/4936c43c13) | <notextile>SI-4827 Corrected positions assigned to constructor's default arg</notextile>
[SI-4827](https://issues.scala-lang.org/browse/SI-4827) | [bdb0ac0fe5](https://github.com/scala/scala/commit/bdb0ac0fe5) | <notextile>SI-4827 Test to demonstrate wrong position of constructor default arg</notextile>
[SI-4287](https://issues.scala-lang.org/browse/SI-4287), [SI-4287](https://issues.scala-lang.org/browse/SI-4287), [SI-4287](https://issues.scala-lang.org/browse/SI-4287) | [7f4720c5db](https://github.com/scala/scala/commit/7f4720c5db) | <notextile>SI-4287 Added test demonstrating hyperlinking to constructor's argument</notextile>
[SI-7491](https://issues.scala-lang.org/browse/SI-7491) | [906e517135](https://github.com/scala/scala/commit/906e517135) | <notextile>SI-7491 deprecate overriding App.main and clarify documentation</notextile>
[SI-7859](https://issues.scala-lang.org/browse/SI-7859) | [7f16e4d1c5](https://github.com/scala/scala/commit/7f16e4d1c5) | <notextile>SI-7859 fix AnyVal.scala scaladoc.</notextile>
[SI-7492](https://issues.scala-lang.org/browse/SI-7492) | [bbe963873d](https://github.com/scala/scala/commit/bbe963873d) | <notextile>SI-7492 Make scala.runtime.MethodCache private[scala]</notextile>
[SI-8120](https://issues.scala-lang.org/browse/SI-8120) | [5b9966d077](https://github.com/scala/scala/commit/5b9966d077) | <notextile>SI-8120 Avoid tree sharing when typechecking patmat anon functions</notextile>
[SI-8102](https://issues.scala-lang.org/browse/SI-8102), [SI-8102](https://issues.scala-lang.org/browse/SI-8102) | [b46d7aefd6](https://github.com/scala/scala/commit/b46d7aefd6) | <notextile>SI-8102 -0.0.abs must equal 0.0</notextile>
[SI-7837](https://issues.scala-lang.org/browse/SI-7837) | [feebc7131c](https://github.com/scala/scala/commit/feebc7131c) | <notextile>SI-7837 quickSort, along with Ordering[K], may result in stackoverflow because t</notextile>
[SI-7880](https://issues.scala-lang.org/browse/SI-7880) | [d2ee92f055](https://github.com/scala/scala/commit/d2ee92f055) | <notextile>SI-7880 Fix infinite loop in ResizableArray#ensureSize</notextile>
[SI-8052](https://issues.scala-lang.org/browse/SI-8052) | [ea8ae48c18](https://github.com/scala/scala/commit/ea8ae48c18) | <notextile>SI-8052 Disallow `macro` as an identifier</notextile>
[SI-8047](https://issues.scala-lang.org/browse/SI-8047) | [b97d44b2d8](https://github.com/scala/scala/commit/b97d44b2d8) | <notextile>SI-8047 change fresh name encoding to avoid owner corruption</notextile>
[SI-7406](https://issues.scala-lang.org/browse/SI-7406) | [72cd50c11b](https://github.com/scala/scala/commit/72cd50c11b) | <notextile>SI-7406 crasher with specialized lazy val</notextile>
[SI-8091](https://issues.scala-lang.org/browse/SI-8091) | [bce97058c4](https://github.com/scala/scala/commit/bce97058c4) | <notextile>makes boxity of fast track macros configurable</notextile>
[SI-8006](https://issues.scala-lang.org/browse/SI-8006) | [d92effc8a9](https://github.com/scala/scala/commit/d92effc8a9) | <notextile>SI-8006 prevents infinite applyDynamicNamed desugarings</notextile>
[SI-7777](https://issues.scala-lang.org/browse/SI-7777) | [bbd03b26f1](https://github.com/scala/scala/commit/bbd03b26f1) | <notextile>SI-7777 applyDynamic macro fails for nested application</notextile>
[SI-8104](https://issues.scala-lang.org/browse/SI-8104), [SI-8104](https://issues.scala-lang.org/browse/SI-8104) | [4b9e8e3417](https://github.com/scala/scala/commit/4b9e8e3417) | <notextile>codifies the state of the art wrt SI-8104</notextile>
[SI-6355](https://issues.scala-lang.org/browse/SI-6355), [SI-6355](https://issues.scala-lang.org/browse/SI-6355), [SI-7059](https://issues.scala-lang.org/browse/SI-7059) | [431e19f9f1](https://github.com/scala/scala/commit/431e19f9f1) | <notextile>SI-6355 SI-7059 it is possible to overload applyDynamic</notextile>
[SI-6120](https://issues.scala-lang.org/browse/SI-6120) | [9b2ce26887](https://github.com/scala/scala/commit/9b2ce26887) | <notextile>SI-6120 Suppress extra warnings</notextile>
[SI-8017](https://issues.scala-lang.org/browse/SI-8017) | [6a4947c45c](https://github.com/scala/scala/commit/6a4947c45c) | <notextile>SI-8017 Value class awareness for -Ydelamdafy:method</notextile>
[SI-6231](https://issues.scala-lang.org/browse/SI-6231) | [3b8b24a48b](https://github.com/scala/scala/commit/3b8b24a48b) | <notextile>Remove obsolete diagnostic error for SI-6231</notextile>
[SI-7012](https://issues.scala-lang.org/browse/SI-7012), [SI-6231](https://issues.scala-lang.org/browse/SI-6231), [SI-2897](https://issues.scala-lang.org/browse/SI-2897), [SI-5508](https://issues.scala-lang.org/browse/SI-5508) | [cca4d51dbf](https://github.com/scala/scala/commit/cca4d51dbf) | <notextile>SI-5508 Fix crasher with private[this] in nested traits</notextile>
[SI-7971](https://issues.scala-lang.org/browse/SI-7971) | [f7f80e8b27](https://github.com/scala/scala/commit/f7f80e8b27) | <notextile>SI-7971 Handle static field initializers correctly</notextile>
[SI-7546](https://issues.scala-lang.org/browse/SI-7546) | [a3a5e4a6f5](https://github.com/scala/scala/commit/a3a5e4a6f5) | <notextile>SI-7546 Use likely monotonic clock source for durations</notextile>
[SI-8042](https://issues.scala-lang.org/browse/SI-8042) | [a5fc6e69e0](https://github.com/scala/scala/commit/a5fc6e69e0) | <notextile>SI-8042 Use Serialization Proxy Pattern in List</notextile>
[SI-7618](https://issues.scala-lang.org/browse/SI-7618) | [6688da4fb3](https://github.com/scala/scala/commit/6688da4fb3) | <notextile>SI-7618 Remove octal number literals</notextile>
[SI-8030](https://issues.scala-lang.org/browse/SI-8030) | [760df9843a](https://github.com/scala/scala/commit/760df9843a) | <notextile>SI-8030 force symbols on presentation compiler initialization</notextile>
[SI-8059](https://issues.scala-lang.org/browse/SI-8059) | [f0f0a5e781](https://github.com/scala/scala/commit/f0f0a5e781) | <notextile>SI-8059 Override immutable.Queue#{+:,:+} for performance</notextile>
[SI-8024](https://issues.scala-lang.org/browse/SI-8024) | [b2b9cf4f8c](https://github.com/scala/scala/commit/b2b9cf4f8c) | <notextile>SI-8024 Improve user-level toString of package objects</notextile>
[SI-8024](https://issues.scala-lang.org/browse/SI-8024) | [e6cee26275](https://github.com/scala/scala/commit/e6cee26275) | <notextile>SI-8024 Fix inaccurate message on overloaded ambiguous ident</notextile>
[SI-8024](https://issues.scala-lang.org/browse/SI-8024) | [a443bae839](https://github.com/scala/scala/commit/a443bae839) | <notextile>SI-8024 Pending test case for package object / overloading bug</notextile>
[SI-6780](https://issues.scala-lang.org/browse/SI-6780) | [110fde017e](https://github.com/scala/scala/commit/110fde017e) | <notextile>SI-6780 Refactor Context#implicitss</notextile>
[SI-6780](https://issues.scala-lang.org/browse/SI-6780) | [0304e00168](https://github.com/scala/scala/commit/0304e00168) | <notextile>SI-6780 Better handling of cycles in in-scope implicit search</notextile>
[SI-7912](https://issues.scala-lang.org/browse/SI-7912) | [006e2f2aad](https://github.com/scala/scala/commit/006e2f2aad) | <notextile>SI-7912 Be defensive calling `toString` in `MatchError#getMessage`</notextile>
[SI-8060](https://issues.scala-lang.org/browse/SI-8060) | [bb427a3416](https://github.com/scala/scala/commit/bb427a3416) | <notextile>SI-8060 Avoid infinite loop with higher kinded type alias</notextile>
[SI-7995](https://issues.scala-lang.org/browse/SI-7995) | [5ed834e251](https://github.com/scala/scala/commit/5ed834e251) | <notextile>SI-7995 completion imported vars and vals</notextile>
[SI-8019](https://issues.scala-lang.org/browse/SI-8019) | [c955cf4c2e](https://github.com/scala/scala/commit/c955cf4c2e) | <notextile>SI-8019 Make Publisher check PartialFunction is defined for Event</notextile>
[SI-8029](https://issues.scala-lang.org/browse/SI-8029) | [fdcc262070](https://github.com/scala/scala/commit/fdcc262070) | <notextile>SI-8029 Avoid multi-run cyclic error with companions, package object</notextile>
[SI-7439](https://issues.scala-lang.org/browse/SI-7439) | [8d74fa0242](https://github.com/scala/scala/commit/8d74fa0242) | <notextile>[backport] SI-7439 Avoid NPE in `isMonomorphicType` with stub symbols.</notextile>
[SI-8010](https://issues.scala-lang.org/browse/SI-8010) | [9036f774bc](https://github.com/scala/scala/commit/9036f774bc) | <notextile>SI-8010 Fix regression in erasure double definition checks</notextile>
[SI-8050](https://issues.scala-lang.org/browse/SI-8050) | [85692fffdd](https://github.com/scala/scala/commit/85692fffdd) | <notextile>SI-8050 [Avian] Skip instrumented tests</notextile>
[SI-8027](https://issues.scala-lang.org/browse/SI-8027) | [30f779b4d9](https://github.com/scala/scala/commit/30f779b4d9) | <notextile>SI-8027 REPL double tab regression</notextile>
[SI-4841](https://issues.scala-lang.org/browse/SI-4841) | [1d30ea8669](https://github.com/scala/scala/commit/1d30ea8669) | <notextile>SI-4841 Plugins get a class path</notextile>
[SI-7928](https://issues.scala-lang.org/browse/SI-7928), [SI-8054](https://issues.scala-lang.org/browse/SI-8054) | [369f370b1e](https://github.com/scala/scala/commit/369f370b1e) | <notextile>SI-8054 Fix regression in TypeRef rebind with val overriding object</notextile>
[SI-7789](https://issues.scala-lang.org/browse/SI-7789) | [e6eed418ee](https://github.com/scala/scala/commit/e6eed418ee) | <notextile>SI-7789 make quasiquotes deconstruct UnApply trees</notextile>
[SI-7980](https://issues.scala-lang.org/browse/SI-7980), [SI-7996](https://issues.scala-lang.org/browse/SI-7996) | [4c899ea34c](https://github.com/scala/scala/commit/4c899ea34c) | <notextile>Refactor Holes and Reifiers slices of Quasiquotes cake</notextile>
[SI-7979](https://issues.scala-lang.org/browse/SI-7979) | [26a3348271](https://github.com/scala/scala/commit/26a3348271) | <notextile>SI-7979 Fix quasiquotes crash on mismatch between fields and constructor</notextile>
[SI-6842](https://issues.scala-lang.org/browse/SI-6842) | [0ccd4bcac6](https://github.com/scala/scala/commit/0ccd4bcac6) | <notextile>SI-6842 Make splicing less sensitive to precise types of trees</notextile>
[SI-8009](https://issues.scala-lang.org/browse/SI-8009) | [2695924907](https://github.com/scala/scala/commit/2695924907) | <notextile>SI-8009 Ensure that Idents preserve isBackquoted property</notextile>
[SI-8016](https://issues.scala-lang.org/browse/SI-8016) | [207b945353](https://github.com/scala/scala/commit/207b945353) | <notextile>SI-8016 Ensure that q&sbquo;&Auml;&ugrave;..$xs&sbquo;&Auml;&ugrave; is equivalent to q&sbquo;&Auml;&ugrave;{..$xs}&sbquo;&Auml;&ugrave;</notextile>
[SI-8008](https://issues.scala-lang.org/browse/SI-8008) | [8bde124040](https://github.com/scala/scala/commit/8bde124040) | <notextile>SI-8008 Make q&sbquo;&Auml;&ugrave;f(..$xs)&sbquo;&Auml;&ugrave; only match trees with Apply node</notextile>
[SI-8013](https://issues.scala-lang.org/browse/SI-8013) | [1b454185c4](https://github.com/scala/scala/commit/1b454185c4) | <notextile>SI-8013 Nowarn on macro str interpolation</notextile>
[SI-7982](https://issues.scala-lang.org/browse/SI-7982) | [7d4109486b](https://github.com/scala/scala/commit/7d4109486b) | <notextile>SI-7982 Changed contract of askLoadedType to unload units by default</notextile>
[SI-6913](https://issues.scala-lang.org/browse/SI-6913) | [70634395a4](https://github.com/scala/scala/commit/70634395a4) | <notextile>SI-6913 Fixing semantics of Future fallbackTo to be according to docs</notextile>
[SI-7458](https://issues.scala-lang.org/browse/SI-7458) | [02308c9691](https://github.com/scala/scala/commit/02308c9691) | <notextile>SI-7458 Pres. compiler must not observe trees in silent mode</notextile>
[SI-7548](https://issues.scala-lang.org/browse/SI-7548) | [652b3b4b9d](https://github.com/scala/scala/commit/652b3b4b9d) | <notextile>SI-7548 Test to demonstrate residual exploratory typing bug</notextile>
[SI-7548](https://issues.scala-lang.org/browse/SI-7548) | [b7509c922f](https://github.com/scala/scala/commit/b7509c922f) | <notextile>SI-7548 askTypeAt returns the same type whether the source was fully or targeted</notextile>
[SI-8014](https://issues.scala-lang.org/browse/SI-8014) | [03bf97e089](https://github.com/scala/scala/commit/03bf97e089) | <notextile>Fixes SI-8014, regression in Vector ++ TraversableOnce.</notextile>
[SI-7373](https://issues.scala-lang.org/browse/SI-7373) | [1071d0ca86](https://github.com/scala/scala/commit/1071d0ca86) | <notextile>SI-7373 Make the constructor of Vector non-public</notextile>
[SI-8023](https://issues.scala-lang.org/browse/SI-8023) | [d0aaa86a9f](https://github.com/scala/scala/commit/d0aaa86a9f) | <notextile>SI-8023 Address review comments around typedHigherKindedType</notextile>
[SI-7756](https://issues.scala-lang.org/browse/SI-7756), [SI-8023](https://issues.scala-lang.org/browse/SI-8023) | [a89000be9f](https://github.com/scala/scala/commit/a89000be9f) | <notextile>SI-8023 Fix symbol-completion-order type var pattern bug</notextile>
[SI-6406](https://issues.scala-lang.org/browse/SI-6406), [SI-7737](https://issues.scala-lang.org/browse/SI-7737), [SI-8022](https://issues.scala-lang.org/browse/SI-8022) | [32b756494e](https://github.com/scala/scala/commit/32b756494e) | <notextile>SI-8022 Backwards compatibility for Regex#unapplySeq</notextile>
[SI-8005](https://issues.scala-lang.org/browse/SI-8005) | [3629b645cc](https://github.com/scala/scala/commit/3629b645cc) | <notextile>SI-8005 Fixes NoPositon error for updateDynamic calls</notextile>
[SI-8004](https://issues.scala-lang.org/browse/SI-8004) | [696545d53f](https://github.com/scala/scala/commit/696545d53f) | <notextile>SI-8004 Resolve NoPosition error for applyDynamicNamed method call</notextile>
[SI-7463](https://issues.scala-lang.org/browse/SI-7463), [SI-8003](https://issues.scala-lang.org/browse/SI-8003) | [b915f440eb](https://github.com/scala/scala/commit/b915f440eb) | <notextile>SI-7463,SI-8003 Correct wrong position for {select,apply}Dynamic calls</notextile>
[SI-7280](https://issues.scala-lang.org/browse/SI-7280) | [053a2744c6](https://github.com/scala/scala/commit/053a2744c6) | <notextile>[nomaster] SI-7280 Scope completion not returning members provided by imports</notextile>
[SI-7915](https://issues.scala-lang.org/browse/SI-7915) | [04df2e48e4](https://github.com/scala/scala/commit/04df2e48e4) | <notextile>SI-7915 Corrected range positions created during default args expansion</notextile>
[SI-8002](https://issues.scala-lang.org/browse/SI-8002) | [28bf4ada31](https://github.com/scala/scala/commit/28bf4ada31) | <notextile>SI-8002 private access for local companions</notextile>
[SI-4332](https://issues.scala-lang.org/browse/SI-4332) | [f12bb7bda4](https://github.com/scala/scala/commit/f12bb7bda4) | <notextile>SI-4332 Plugs the gaps in views</notextile>
[SI-7984](https://issues.scala-lang.org/browse/SI-7984) | [0271a4a394](https://github.com/scala/scala/commit/0271a4a394) | <notextile>SI-7984 Issue unchecked warning for type aliases</notextile>
[SI-8011](https://issues.scala-lang.org/browse/SI-8011) | [05620ad4e1](https://github.com/scala/scala/commit/05620ad4e1) | <notextile>SI-8011 Test case for recently fixed value class bug</notextile>
[SI-7969](https://issues.scala-lang.org/browse/SI-7969) | [8f20fa23db](https://github.com/scala/scala/commit/8f20fa23db) | <notextile>SI-7969 REPL variable columnar output</notextile>
[SI-7969](https://issues.scala-lang.org/browse/SI-7969) | [02359a09eb](https://github.com/scala/scala/commit/02359a09eb) | <notextile>SI-7969 Refactor to trait with test</notextile>
[SI-7969](https://issues.scala-lang.org/browse/SI-7969) | [28cfe16fdd](https://github.com/scala/scala/commit/28cfe16fdd) | <notextile>SI-7969 REPL -C columnar output</notextile>
[SI-7872](https://issues.scala-lang.org/browse/SI-7872) | [518635385a](https://github.com/scala/scala/commit/518635385a) | <notextile>SI-7872 Plug a variance exploit in refinement types</notextile>
[SI-8001](https://issues.scala-lang.org/browse/SI-8001) | [66577fa6ec](https://github.com/scala/scala/commit/66577fa6ec) | <notextile>SI-8001 spurious &quot;pure expression does nothing&quot; warning</notextile>
[SI-7967](https://issues.scala-lang.org/browse/SI-7967) | [a5e24768f2](https://github.com/scala/scala/commit/a5e24768f2) | <notextile>SI-7967 Account for type aliases in self-type checks</notextile>
[SI-7999](https://issues.scala-lang.org/browse/SI-7999) | [64603653f8](https://github.com/scala/scala/commit/64603653f8) | <notextile>SI-7999 s.u.c.NonFatal: StackOverflowError is fatal</notextile>
[SI-7983](https://issues.scala-lang.org/browse/SI-7983) | [dfe0ba847e](https://github.com/scala/scala/commit/dfe0ba847e) | <notextile>SI-7983 Fix regression in implicit divergence checking</notextile>
[SI-7985](https://issues.scala-lang.org/browse/SI-7985) | [1050745dca](https://github.com/scala/scala/commit/1050745dca) | <notextile>SI-7985 Refactor parsing of pattern type args</notextile>
[SI-7985](https://issues.scala-lang.org/browse/SI-7985) | [b1d305388d](https://github.com/scala/scala/commit/b1d305388d) | <notextile>SI-7985 Allow projection of lower-cased prefix as pattern type arg</notextile>
[SI-7985](https://issues.scala-lang.org/browse/SI-7985) | [77ecff775e](https://github.com/scala/scala/commit/77ecff775e) | <notextile>SI-7985 Allow qualified type argument in patterns</notextile>
[SI-7221](https://issues.scala-lang.org/browse/SI-7221) | [d6a457cdc9](https://github.com/scala/scala/commit/d6a457cdc9) | <notextile>SI-7221 rewrites pollForWork non-recursively</notextile>
[SI-6329](https://issues.scala-lang.org/browse/SI-6329), [SI-6329](https://issues.scala-lang.org/browse/SI-6329) | [b27c9b84be](https://github.com/scala/scala/commit/b27c9b84be) | <notextile>SI-6329 Graduation day for pending tests for tag materialization</notextile>
[SI-7944](https://issues.scala-lang.org/browse/SI-7944), [SI-7987](https://issues.scala-lang.org/browse/SI-7987) | [5eef542ae4](https://github.com/scala/scala/commit/5eef542ae4) | <notextile>SI-7987 Test case for &quot;macro not expanded&quot; error with implicits</notextile>
[SI-7280](https://issues.scala-lang.org/browse/SI-7280) | [0f9c1e7a9a](https://github.com/scala/scala/commit/0f9c1e7a9a) | <notextile>SI-7280 Remove unneccesary method</notextile>




#### Complete commit list!

sha | Title
---: | ---
[1baf11a2bb](https://github.com/scala/scala/commit/1baf11a2bb) | <notextile>SI-8143 Fix bug with super-accessors / dependent types</notextile>
[9df2dcc584](https://github.com/scala/scala/commit/9df2dcc58439cf75420da68d4e6d9bb5504aabb4) | <notextile>[nomaster] SI-8152 Backport variance validator performance fix</notextile>
[c91d373a78](https://github.com/scala/scala/commit/c91d373a78) | <notextile>SI-8111 Expand the comment with a more detailed TODO</notextile>
[2c770ae31a](https://github.com/scala/scala/commit/2c770ae31a) | <notextile>SI-8111 Repair symbol owners after abandoned named-/default-args</notextile>
[5876e8c621](https://github.com/scala/scala/commit/5876e8c621) | <notextile>[nomaster] SI-8114 Binary compat. workaround for erasure bug SI-7120</notextile>
[bd4adf5c97](https://github.com/scala/scala/commit/bd4adf5c97) | <notextile>More clear implicitNotFound error for ExecutionContext</notextile>
[255c51b3dd](https://github.com/scala/scala/commit/255c51b3dd) | <notextile>SI-6563 Test case for already-fixed crasher</notextile>
[c0cb1d891a](https://github.com/scala/scala/commit/c0cb1d891a) | <notextile>[nomaster] codifies the state of the art wrt SI-8104</notextile>
[7e85b59550](https://github.com/scala/scala/commit/7e85b59550) | <notextile>SI-8085 Fix BrowserTraverser for package objects</notextile>
[a12dd9c3b6](https://github.com/scala/scala/commit/a12dd9c3b6) | <notextile>Test demonstrating SI-8085</notextile>
[3fa2c97853](https://github.com/scala/scala/commit/3fa2c97853) | <notextile>Report error on code size overflow, log method name.</notextile>
[2aa9da578e](https://github.com/scala/scala/commit/2aa9da578e) | <notextile>Partially revert f8d8f7d08d.</notextile>
[47562e7adb](https://github.com/scala/scala/commit/47562e7adb) | <notextile>Revert &quot;SI-6426, importable _.&quot;</notextile>
[f0d913b51d](https://github.com/scala/scala/commit/f0d913b51d) | <notextile>SI-8062 Fix inliner cycle with recursion, separate compilation</notextile>
[c258ccc9b5](https://github.com/scala/scala/commit/c258ccc9b5) | <notextile>Don't trace the low-level details of ResetAttrs under -Ydebug</notextile>
[b7b210db14](https://github.com/scala/scala/commit/b7b210db14) | <notextile>Avoid cycles in Symbol toString under -Ydebug</notextile>
[06bae51b07](https://github.com/scala/scala/commit/06bae51b07) | <notextile>Problem with EOL in tests for Printers is fixed</notextile>
[99a75c0a91](https://github.com/scala/scala/commit/99a75c0a91) | <notextile>Fix typo</notextile>
[03e9e95f57](https://github.com/scala/scala/commit/03e9e95f57) | <notextile>Test edge cases of literal lifting</notextile>
[6283c01462](https://github.com/scala/scala/commit/6283c01462) | <notextile>Give better names to UnliftHelper1 and UnliftHelper2</notextile>
[ae4a2f0f7b](https://github.com/scala/scala/commit/ae4a2f0f7b) | <notextile>Lift Some, None, Nil, Left, Right not just supertypes</notextile>
[722c743331](https://github.com/scala/scala/commit/722c743331) | <notextile>Remove redundant asInstanceOf for liftable</notextile>
[ca05d22006](https://github.com/scala/scala/commit/ca05d22006) | <notextile>SI-8157 Make overloading, defaults restriction PolyType aware</notextile>
[a1c00ae4b2](https://github.com/scala/scala/commit/a1c00ae4b2) | <notextile>Dotless type application for infix operators.</notextile>
[6f4dfb4c85](https://github.com/scala/scala/commit/6f4dfb4c85) | <notextile>deprecates c.enclosingTree-style APIs</notextile>
[034f6b9452](https://github.com/scala/scala/commit/034f6b9452) | <notextile>SI-6253 HashSet should implement union</notextile>
[f9cbcbdaf8](https://github.com/scala/scala/commit/f9cbcbdaf8) | <notextile>overzealous assert in BCodeBodyBuilder rejected throw null</notextile>
[841dbc9c8c](https://github.com/scala/scala/commit/841dbc9c8c) | <notextile>removing defensive code made obsolete by existing fix to SI-5604</notextile>
[c4e37d6521](https://github.com/scala/scala/commit/c4e37d6521) | <notextile>overzealous assert in GenBCode</notextile>
[f1ca1a3823](https://github.com/scala/scala/commit/f1ca1a3823) | <notextile>removing dead code in BCodeSyncAndTry</notextile>
[6eed8d00a5](https://github.com/scala/scala/commit/6eed8d00a5) | <notextile>there's a reason for this code in GenBCode</notextile>
[7ee1a8321e](https://github.com/scala/scala/commit/7ee1a8321e) | <notextile>GenBCode version of &quot;not eliminate loadmodule on static methods.&quot;</notextile>
[7d1e8aa74d](https://github.com/scala/scala/commit/7d1e8aa74d) | <notextile>GenBCode version of &quot;Updating Position call sites&quot; commit</notextile>
[94e05a8501](https://github.com/scala/scala/commit/94e05a8501) | <notextile>SI-8126 Puts SI-7335 fix behind a source level flag</notextile>
[6dd3653b9c](https://github.com/scala/scala/commit/6dd3653b9c) | <notextile>SI-8126 Puts SI-6899 fix under a source level flag</notextile>
[d43618a92c](https://github.com/scala/scala/commit/d43618a92c) | <notextile>SI-8126 Add a '-Xsource' flag allowing compilation in e.g. 2.10 mode</notextile>
[994de8ffd1](https://github.com/scala/scala/commit/994de8ffd1) | <notextile>SI-4370 Range bug: Wrong result for Long.MinValue to Long.MaxValue by Int.MaxVal</notextile>
[973c7066b8](https://github.com/scala/scala/commit/973c7066b8) | <notextile>SI-8148 fix anonymous functions with placeholders</notextile>
[9c5e7f3893](https://github.com/scala/scala/commit/9c5e7f3893) | <notextile>Repairs unexpected failure of test t6200.scala</notextile>
[47a91d76fc](https://github.com/scala/scala/commit/47a91d76fc) | <notextile>SI-6200 - HashMap should implement filter</notextile>
[afcfba02ed](https://github.com/scala/scala/commit/afcfba02ed) | <notextile>SI-6196 - Set should implement filter</notextile>
[af75be6034](https://github.com/scala/scala/commit/af75be6034) | <notextile>SI-7544 StringContext.f docs update</notextile>
[bfa70315d7](https://github.com/scala/scala/commit/bfa70315d7) | <notextile>SI-6457 ImmutableSetFactory.empty results in StackOverflowError</notextile>
[29541ce396](https://github.com/scala/scala/commit/29541ce396) | <notextile>Quasi-comprehensive BigDecimal soundness/correctness fix.</notextile>
[2477bbd9d6](https://github.com/scala/scala/commit/2477bbd9d6) | <notextile>SI-8100 - prevent possible SOE during Stream#flatten.</notextile>
[765ac94c2b](https://github.com/scala/scala/commit/765ac94c2b) | <notextile>SI-7469 Remove misc. @deprecated elements</notextile>
[f606d8176e](https://github.com/scala/scala/commit/f606d8176e) | <notextile>SI-8015 Refactor per code review</notextile>
[2c8a8ff6ba](https://github.com/scala/scala/commit/2c8a8ff6ba) | <notextile>SI-8015 Carat =&gt; Caret</notextile>
[8be560a1cf](https://github.com/scala/scala/commit/8be560a1cf) | <notextile>SI-8015 Unprintables in messages</notextile>
[bb2e99a692](https://github.com/scala/scala/commit/bb2e99a692) | <notextile>SI-8015 Count lines by EOLs</notextile>
[c5567e2700](https://github.com/scala/scala/commit/c5567e2700) | <notextile>SI-8035 Deprecate automatic () insertion in argument lists</notextile>
[2fe767806b](https://github.com/scala/scala/commit/2fe767806b) | <notextile>SI-8107: Use Regex.quote</notextile>
[780ceca6a3](https://github.com/scala/scala/commit/780ceca6a3) | <notextile>SI-8107: Add Regex.quote</notextile>
[b8a76f688c](https://github.com/scala/scala/commit/b8a76f688c) | <notextile>SI-8081 unzip/unzip3 return wrong static type when applied to Arrays</notextile>
[d680d23947](https://github.com/scala/scala/commit/d680d23947) | <notextile>toCode renamed to showCode</notextile>
[3989227e45](https://github.com/scala/scala/commit/3989227e45) | <notextile>Code cleanup based on pull request comments</notextile>
[68ba3efba9](https://github.com/scala/scala/commit/68ba3efba9) | <notextile>Annotated trees processing is modified</notextile>
[2357e5dace](https://github.com/scala/scala/commit/2357e5dace) | <notextile>Printers code refactoring and cleanup</notextile>
[0754abb566](https://github.com/scala/scala/commit/0754abb566) | <notextile>Tests for ParsedTreePrinter</notextile>
[0ac5c56837](https://github.com/scala/scala/commit/0ac5c56837) | <notextile>toCode is added to Printers</notextile>
[6536256f0e](https://github.com/scala/scala/commit/6536256f0e) | <notextile>val showOuterTests is removed</notextile>
[64c9122aa3](https://github.com/scala/scala/commit/64c9122aa3) | <notextile>Variance annotations printing</notextile>
[8642a50da8](https://github.com/scala/scala/commit/8642a50da8) | <notextile>SI-8132 Fix false &quot;overrides nothing&quot; for case class protected param</notextile>
[b33740f0b4](https://github.com/scala/scala/commit/b33740f0b4) | <notextile>Improved documentation of HashTrieSet internals</notextile>
[24a227d23d](https://github.com/scala/scala/commit/24a227d23d) | <notextile>Implements specialized subsetOf for HashSet</notextile>
[a09e143b7f](https://github.com/scala/scala/commit/a09e143b7f) | <notextile>SI-8146 Fix non-deterministic &lt;:&lt; for deeply nested types</notextile>
[2e28cf7f76](https://github.com/scala/scala/commit/2e28cf7f76) | <notextile>SI-8146 Test cases for typechecking decidability</notextile>
[8beeef339a](https://github.com/scala/scala/commit/8beeef339a) | <notextile>SI-8146 Pending test, diagnosis for bug in decidability of &lt;:&lt;</notextile>
[65a2a417d8](https://github.com/scala/scala/commit/65a2a417d8) | <notextile>Removes TODO comments that are no longer applicable</notextile>
[b2f67b5730](https://github.com/scala/scala/commit/b2f67b5730) | <notextile>removes Scala reflection-based macro runtime</notextile>
[e36888c3d9](https://github.com/scala/scala/commit/e36888c3d9) | <notextile>prohibits constructor overloading for macro bundles</notextile>
[3a689f5c42](https://github.com/scala/scala/commit/3a689f5c42) | <notextile>changes bundles to be classes, not traits extending Macro</notextile>
[5cc8f83c68](https://github.com/scala/scala/commit/5cc8f83c68) | <notextile>*boxContext =&gt; *box.Context	, *boxMacro =&gt; *box.Macro</notextile>
[10f58e9d6a](https://github.com/scala/scala/commit/10f58e9d6a) | <notextile>Fix infinite recursion in name-based patmat.</notextile>
[3e9e2c65a6](https://github.com/scala/scala/commit/3e9e2c65a6) | <notextile>SI-8128 Fix regression in extractors returning existentials</notextile>
[969a269033](https://github.com/scala/scala/commit/969a269033) | <notextile>Finalized some case classes, for better static checking.</notextile>
[e0a3702f8a](https://github.com/scala/scala/commit/e0a3702f8a) | <notextile>Eliminated some dead/redundant code based on review.</notextile>
[1696145f76](https://github.com/scala/scala/commit/1696145f76) | <notextile>SI-8045 type inference of extracted value</notextile>
[def46a9d44](https://github.com/scala/scala/commit/def46a9d44) | <notextile>SI-7850 CCE in patmat with invalid isEmpty.</notextile>
[11bfa25e37](https://github.com/scala/scala/commit/11bfa25e37) | <notextile>SI-7897, SI-6675 improves name-based patmat</notextile>
[8dd69ecfa7](https://github.com/scala/scala/commit/8dd69ecfa7) | <notextile>SI-6615 junit test</notextile>
[a90f39cdb5](https://github.com/scala/scala/commit/a90f39cdb5) | <notextile>SI-8058 Better support for enum trees</notextile>
[77a66d3525](https://github.com/scala/scala/commit/77a66d3525) | <notextile>SI-4841 CLI help update for -Xplugin</notextile>
[6f42bd6881](https://github.com/scala/scala/commit/6f42bd6881) | <notextile>SI-8046 Only use fast TypeRef#baseTypeSeq with concrete base types</notextile>
[0de991ffea](https://github.com/scala/scala/commit/0de991ffea) | <notextile>Pending test for SI-6161</notextile>
[edc9edb79b](https://github.com/scala/scala/commit/edc9edb79b) | <notextile>SI-8046 Fix baseTypeSeq in presence of type aliases</notextile>
[28d3390e07](https://github.com/scala/scala/commit/28d3390e07) | <notextile>SI-2066 Plug a soundness hole higher order type params, overriding</notextile>
[ad594604ed](https://github.com/scala/scala/commit/ad594604ed) | <notextile>SI-6615 PagedSeq's slice throws a NPE if it starts on a page that hasn't been co</notextile>
[973f69ac75](https://github.com/scala/scala/commit/973f69ac75) | <notextile>SI-6364 SetWrapper does not preserve performance / behavior</notextile>
[cb0d2854e1](https://github.com/scala/scala/commit/cb0d2854e1) | <notextile>SI-7680 Update the ScalaDoc entry page of the Scala library</notextile>
[505dc908dd](https://github.com/scala/scala/commit/505dc908dd) | <notextile>Fixes #3330 with Scaladoc changes only</notextile>
[00e11ffdd4](https://github.com/scala/scala/commit/00e11ffdd4) | <notextile>SI-8129 Plug a leak in perRunCaches</notextile>
[945f859475](https://github.com/scala/scala/commit/945f859475) | <notextile>fixes run/macroPlugins-namerHooks.scala</notextile>
[1d908106cf](https://github.com/scala/scala/commit/1d908106cf) | <notextile>SI-8131 Move test for reflection thread safety to pending.</notextile>
[3b68163e47](https://github.com/scala/scala/commit/3b68163e47) | <notextile>SI-8135 Disabled flaky hyperlinking presentation compiler test</notextile>
[4b6a0a999e](https://github.com/scala/scala/commit/4b6a0a999e) | <notextile>SI-7443 Use typeclass instance for {Range,NumericRange}.sum</notextile>
[a6f84efd87](https://github.com/scala/scala/commit/a6f84efd87) | <notextile>Update man pages for scala and scalac.</notextile>
[60c7427d2f](https://github.com/scala/scala/commit/60c7427d2f) | <notextile>License formatting tweak, RTF version.</notextile>
[4a4454b8f9](https://github.com/scala/scala/commit/4a4454b8f9) | <notextile>Explicit jline dependency.</notextile>
[c1c368bb2c](https://github.com/scala/scala/commit/c1c368bb2c) | <notextile>Always copy man/* and doc/tools/*.</notextile>
[c1ef1527f9](https://github.com/scala/scala/commit/c1ef1527f9) | <notextile>Fix typo in scala-library-all-pom.xml.</notextile>
[50e7f2ba49](https://github.com/scala/scala/commit/50e7f2ba49) | <notextile>scala-library-all: dependency for those who want it all</notextile>
[0dde1ae27f](https://github.com/scala/scala/commit/0dde1ae27f) | <notextile>scala-dist: all you need to roll your own scala distribution</notextile>
[94ca91dd5f](https://github.com/scala/scala/commit/94ca91dd5f) | <notextile>Prepare maven-based distribution building.</notextile>
[846d8d1195](https://github.com/scala/scala/commit/846d8d1195) | <notextile>Remove spurious resurrection of src/swing.</notextile>
[c926974c30](https://github.com/scala/scala/commit/c926974c30) | <notextile>Remove the unused test.continuations.suite.</notextile>
[f5e35ecf81](https://github.com/scala/scala/commit/f5e35ecf81) | <notextile>Remove temporary binary compat scaffolding from AbstractPartiionFun.</notextile>
[94eb751d00](https://github.com/scala/scala/commit/94eb751d00) | <notextile>Removes unnecessary generality in the macro engine</notextile>
[6e4c926b4a](https://github.com/scala/scala/commit/6e4c926b4a) | <notextile>Use macro expandee, rather than expansion, in pres. compiler</notextile>
[d744921f85](https://github.com/scala/scala/commit/d744921f85) | <notextile>SI-8064 Automatic position repair for macro expansion</notextile>
[d6b4cda628](https://github.com/scala/scala/commit/d6b4cda628) | <notextile>Test to show the bug with hyperlinking in macro arguments</notextile>
[7e0eee211f](https://github.com/scala/scala/commit/7e0eee211f) | <notextile>More robust hyperlink tests for the presentation compiler</notextile>
[db6e3062c1](https://github.com/scala/scala/commit/db6e3062c1) | <notextile>ExistentialTypeTree.whereClauses are now MemberDefs</notextile>
[9ce25045dd](https://github.com/scala/scala/commit/9ce25045dd) | <notextile>Fix typo in documentation</notextile>
[2e7c7347b9](https://github.com/scala/scala/commit/2e7c7347b9) | <notextile>SI-7974 Clean up and test 'Symbol-handling code in CleanUp</notextile>
[5e1e472fa1](https://github.com/scala/scala/commit/5e1e472fa1) | <notextile>SI-7974 Avoid calling nonPrivateMember after erasure</notextile>
[4936c43c13](https://github.com/scala/scala/commit/4936c43c13) | <notextile>SI-4827 Corrected positions assigned to constructor's default arg</notextile>
[bdb0ac0fe5](https://github.com/scala/scala/commit/bdb0ac0fe5) | <notextile>SI-4827 Test to demonstrate wrong position of constructor default arg</notextile>
[7f4720c5db](https://github.com/scala/scala/commit/7f4720c5db) | <notextile>SI-4287 Added test demonstrating hyperlinking to constructor's argument</notextile>
[ccacb06c49](https://github.com/scala/scala/commit/ccacb06c49) | <notextile>Presentation compiler hyperlinking on context bounds test</notextile>
[906e517135](https://github.com/scala/scala/commit/906e517135) | <notextile>SI-7491 deprecate overriding App.main and clarify documentation</notextile>
[7f16e4d1c5](https://github.com/scala/scala/commit/7f16e4d1c5) | <notextile>SI-7859 fix AnyVal.scala scaladoc.</notextile>
[87913661e1](https://github.com/scala/scala/commit/87913661e1) | <notextile>hooks for naming and synthesis in Namers.scala and Typers.scala</notextile>
[4d92aec651](https://github.com/scala/scala/commit/4d92aec651) | <notextile>unprivates important helpers in Namers.scala</notextile>
[6c7b003003](https://github.com/scala/scala/commit/6c7b003003) | <notextile>manifests that Namers.mkTypeCompleter is flag-agnostic</notextile>
[0019bc2c4b](https://github.com/scala/scala/commit/0019bc2c4b) | <notextile>humane reporting of macro impl binding version errors</notextile>
[68b8e23585](https://github.com/scala/scala/commit/68b8e23585) | <notextile>hooks for typecheck and expansion of macro defs</notextile>
[279e2e3b50](https://github.com/scala/scala/commit/279e2e3b50) | <notextile>unprivates important helpers in Macros.scala</notextile>
[447e737174](https://github.com/scala/scala/commit/447e737174) | <notextile>removes some copy/paste from AnalyzerPlugins</notextile>
[9e14058dd2](https://github.com/scala/scala/commit/9e14058dd2) | <notextile>gives a more specific signature to `computeMacroDefType`</notextile>
[9737b808c1](https://github.com/scala/scala/commit/9737b808c1) | <notextile>macroExpandApply =&gt; macroExpand</notextile>
[bbe963873d](https://github.com/scala/scala/commit/bbe963873d) | <notextile>SI-7492 Make scala.runtime.MethodCache private[scala]</notextile>
[5b9966d077](https://github.com/scala/scala/commit/5b9966d077) | <notextile>SI-8120 Avoid tree sharing when typechecking patmat anon functions</notextile>
[b46d7aefd6](https://github.com/scala/scala/commit/b46d7aefd6) | <notextile>SI-8102 -0.0.abs must equal 0.0</notextile>
[5cc01766a6](https://github.com/scala/scala/commit/5cc01766a6) | <notextile>Improved testing framework for sets and maps.</notextile>
[feebc7131c](https://github.com/scala/scala/commit/feebc7131c) | <notextile>SI-7837 quickSort, along with Ordering[K], may result in stackoverflow because t</notextile>
[5f08c78ccd](https://github.com/scala/scala/commit/5f08c78ccd) | <notextile>untyper is no more</notextile>
[59cdd50fa8](https://github.com/scala/scala/commit/59cdd50fa8) | <notextile>awakens default getter synthesis from the untyper nightmare</notextile>
[dafcbeb344](https://github.com/scala/scala/commit/dafcbeb344) | <notextile>Fix typos in documentation</notextile>
[d2ee92f055](https://github.com/scala/scala/commit/d2ee92f055) | <notextile>SI-7880 Fix infinite loop in ResizableArray#ensureSize</notextile>
[ea8ae48c18](https://github.com/scala/scala/commit/ea8ae48c18) | <notextile>SI-8052 Disallow `macro` as an identifier</notextile>
[71a2102a2d](https://github.com/scala/scala/commit/71a2102a2d) | <notextile>Use t- prefix instead of si- prefix for test files</notextile>
[b97d44b2d8](https://github.com/scala/scala/commit/b97d44b2d8) | <notextile>SI-8047 change fresh name encoding to avoid owner corruption</notextile>
[f417380637](https://github.com/scala/scala/commit/f417380637) | <notextile>typeCheck =&gt; typecheck</notextile>
[c728ff3866](https://github.com/scala/scala/commit/c728ff3866) | <notextile>fix Stream#flatten example</notextile>
[72cd50c11b](https://github.com/scala/scala/commit/72cd50c11b) | <notextile>SI-7406 crasher with specialized lazy val</notextile>
[bce97058c4](https://github.com/scala/scala/commit/bce97058c4) | <notextile>makes boxity of fast track macros configurable</notextile>
[49239833f5](https://github.com/scala/scala/commit/49239833f5) | <notextile>Added .ant-targets-build.xml to .gitignore.</notextile>
[29037f5465](https://github.com/scala/scala/commit/29037f5465) | <notextile>Remove commented out code from HashSet and HashMap</notextile>
[08a5e03280](https://github.com/scala/scala/commit/08a5e03280) | <notextile>makes well-known packages and package classes consistent with each other</notextile>
[187d73ed1b](https://github.com/scala/scala/commit/187d73ed1b) | <notextile>duplicates arguments to macro typer APIs</notextile>
[05eacadf41](https://github.com/scala/scala/commit/05eacadf41) | <notextile>Invalidate &lt;uptodate&gt; checks on edits to build-ant-macros.xml</notextile>
[b79ee63dae](https://github.com/scala/scala/commit/b79ee63dae) | <notextile>Fix Ant uptodate checking in OSGI JAR creation</notextile>
[d92effc8a9](https://github.com/scala/scala/commit/d92effc8a9) | <notextile>SI-8006 prevents infinite applyDynamicNamed desugarings</notextile>
[bbd03b26f1](https://github.com/scala/scala/commit/bbd03b26f1) | <notextile>SI-7777 applyDynamic macro fails for nested application</notextile>
[4b9e8e3417](https://github.com/scala/scala/commit/4b9e8e3417) | <notextile>codifies the state of the art wrt SI-8104</notextile>
[431e19f9f1](https://github.com/scala/scala/commit/431e19f9f1) | <notextile>SI-6355 SI-7059 it is possible to overload applyDynamic</notextile>
[3ef5837be5](https://github.com/scala/scala/commit/3ef5837be5) | <notextile>cosmetic changes to liftables</notextile>
[9b2ce26887](https://github.com/scala/scala/commit/9b2ce26887) | <notextile>SI-6120 Suppress extra warnings</notextile>
[6a4947c45c](https://github.com/scala/scala/commit/6a4947c45c) | <notextile>SI-8017 Value class awareness for -Ydelamdafy:method</notextile>
[3b8b24a48b](https://github.com/scala/scala/commit/3b8b24a48b) | <notextile>Remove obsolete diagnostic error for SI-6231</notextile>
[cca4d51dbf](https://github.com/scala/scala/commit/cca4d51dbf) | <notextile>SI-5508 Fix crasher with private[this] in nested traits</notextile>
[b275c38c94](https://github.com/scala/scala/commit/b275c38c94) | <notextile>duplicates macro arguments before expansion</notextile>
[f7f80e8b27](https://github.com/scala/scala/commit/f7f80e8b27) | <notextile>SI-7971 Handle static field initializers correctly</notextile>
[ca2dbe55eb](https://github.com/scala/scala/commit/ca2dbe55eb) | <notextile>drops the redundant typecheck of blackbox expansions</notextile>
[a3b33419b0](https://github.com/scala/scala/commit/a3b33419b0) | <notextile>whitebox macros are now first typechecked against outerPt</notextile>
[bd615c62ac](https://github.com/scala/scala/commit/bd615c62ac) | <notextile>refactors macroExpandApply</notextile>
[e3cedb7e84](https://github.com/scala/scala/commit/e3cedb7e84) | <notextile>Improvements to partest-ack, plus partest-paths.</notextile>
[d00ad5abe8](https://github.com/scala/scala/commit/d00ad5abe8) | <notextile>Fix osgi bundle name for continuations.</notextile>
[30b389a9b0](https://github.com/scala/scala/commit/30b389a9b0) | <notextile>Modularize the swing library.</notextile>
[858a5d5137](https://github.com/scala/scala/commit/858a5d5137) | <notextile>Modularize continuations plugin.</notextile>
[a3a5e4a6f5](https://github.com/scala/scala/commit/a3a5e4a6f5) | <notextile>SI-7546 Use likely monotonic clock source for durations</notextile>
[d68bbe4b83](https://github.com/scala/scala/commit/d68bbe4b83) | <notextile>Fixup for #3265</notextile>
[a5fc6e69e0](https://github.com/scala/scala/commit/a5fc6e69e0) | <notextile>SI-8042 Use Serialization Proxy Pattern in List</notextile>
[7db59bd998](https://github.com/scala/scala/commit/7db59bd998) | <notextile>fix typo in error messages</notextile>
[6688da4fb3](https://github.com/scala/scala/commit/6688da4fb3) | <notextile>SI-7618 Remove octal number literals</notextile>
[760df9843a](https://github.com/scala/scala/commit/760df9843a) | <notextile>SI-8030 force symbols on presentation compiler initialization</notextile>
[f0f0a5e781](https://github.com/scala/scala/commit/f0f0a5e781) | <notextile>SI-8059 Override immutable.Queue#{+:,:+} for performance</notextile>
[c4e1b032d9](https://github.com/scala/scala/commit/c4e1b032d9) | <notextile>Test case for recently improved unchecked warning</notextile>
[b2b9cf4f8c](https://github.com/scala/scala/commit/b2b9cf4f8c) | <notextile>SI-8024 Improve user-level toString of package objects</notextile>
[e6cee26275](https://github.com/scala/scala/commit/e6cee26275) | <notextile>SI-8024 Fix inaccurate message on overloaded ambiguous ident</notextile>
[a443bae839](https://github.com/scala/scala/commit/a443bae839) | <notextile>SI-8024 Pending test case for package object / overloading bug</notextile>
[110fde017e](https://github.com/scala/scala/commit/110fde017e) | <notextile>SI-6780 Refactor Context#implicitss</notextile>
[0304e00168](https://github.com/scala/scala/commit/0304e00168) | <notextile>SI-6780 Better handling of cycles in in-scope implicit search</notextile>
[9cdbe28c00](https://github.com/scala/scala/commit/9cdbe28c00) | <notextile>Fixup #3248 missed a spot in pack.xml</notextile>
[006e2f2aad](https://github.com/scala/scala/commit/006e2f2aad) | <notextile>SI-7912 Be defensive calling `toString` in `MatchError#getMessage`</notextile>
[bb427a3416](https://github.com/scala/scala/commit/bb427a3416) | <notextile>SI-8060 Avoid infinite loop with higher kinded type alias</notextile>
[27a38602de](https://github.com/scala/scala/commit/27a38602de) | <notextile>Update README, include doc/licenses in distro</notextile>
[139ba9d875](https://github.com/scala/scala/commit/139ba9d875) | <notextile>Add attribution for Typesafe.</notextile>
[e555106070](https://github.com/scala/scala/commit/e555106070) | <notextile>Remove docs/examples; they reside at scala/scala-dist</notextile>
[dc6dd58d9d](https://github.com/scala/scala/commit/dc6dd58d9d) | <notextile>Remove unused android test and corresponding license.</notextile>
[f8d8f7d08d](https://github.com/scala/scala/commit/f8d8f7d08d) | <notextile>Do not distribute partest and its dependencies.</notextile>
[5ed834e251](https://github.com/scala/scala/commit/5ed834e251) | <notextile>SI-7995 completion imported vars and vals</notextile>
[c955cf4c2e](https://github.com/scala/scala/commit/c955cf4c2e) | <notextile>SI-8019 Make Publisher check PartialFunction is defined for Event</notextile>
[fdcc262070](https://github.com/scala/scala/commit/fdcc262070) | <notextile>SI-8029 Avoid multi-run cyclic error with companions, package object</notextile>
[8d74fa0242](https://github.com/scala/scala/commit/8d74fa0242) | <notextile>[backport] SI-7439 Avoid NPE in `isMonomorphicType` with stub symbols.</notextile>
[9036f774bc](https://github.com/scala/scala/commit/9036f774bc) | <notextile>SI-8010 Fix regression in erasure double definition checks</notextile>
[3faa2eedd8](https://github.com/scala/scala/commit/3faa2eedd8) | <notextile>[nomaster] better error messages for various macro definition errors</notextile>
[85692fffdd](https://github.com/scala/scala/commit/85692fffdd) | <notextile>SI-8050 [Avian] Skip instrumented tests</notextile>
[30f779b4d9](https://github.com/scala/scala/commit/30f779b4d9) | <notextile>SI-8027 REPL double tab regression</notextile>
[1d30ea8669](https://github.com/scala/scala/commit/1d30ea8669) | <notextile>SI-4841 Plugins get a class path</notextile>
[369f370b1e](https://github.com/scala/scala/commit/369f370b1e) | <notextile>SI-8054 Fix regression in TypeRef rebind with val overriding object</notextile>
[495b7b873b](https://github.com/scala/scala/commit/495b7b873b) | <notextile>Address minor pull request feedback points</notextile>
[a09914ca9f](https://github.com/scala/scala/commit/a09914ca9f) | <notextile>Test possible quasiquote runtime failures</notextile>
[b9a900e5d2](https://github.com/scala/scala/commit/b9a900e5d2) | <notextile>Test usage of SubpatternsAttachment from a macro</notextile>
[13aa2975bb](https://github.com/scala/scala/commit/13aa2975bb) | <notextile>Test unliftable not found scenario</notextile>
[c9cd5eeb01](https://github.com/scala/scala/commit/c9cd5eeb01) | <notextile>Test tuple lifting and unlifting</notextile>
[e6eed418ee](https://github.com/scala/scala/commit/e6eed418ee) | <notextile>SI-7789 make quasiquotes deconstruct UnApply trees</notextile>
[1188f95acf](https://github.com/scala/scala/commit/1188f95acf) | <notextile>Introduce support for Unliftable for Quasiquotes</notextile>
[4c899ea34c](https://github.com/scala/scala/commit/4c899ea34c) | <notextile>Refactor Holes and Reifiers slices of Quasiquotes cake</notextile>
[4be6ea147a](https://github.com/scala/scala/commit/4be6ea147a) | <notextile>Provide a way for unapply macro to obtain a list of subpattens</notextile>
[f3c260bf89](https://github.com/scala/scala/commit/f3c260bf89) | <notextile>Move Liftable into the Universe cake; add additional standard Liftables</notextile>
[26a3348271](https://github.com/scala/scala/commit/26a3348271) | <notextile>SI-7979 Fix quasiquotes crash on mismatch between fields and constructor</notextile>
[0ccd4bcac6](https://github.com/scala/scala/commit/0ccd4bcac6) | <notextile>SI-6842 Make splicing less sensitive to precise types of trees</notextile>
[2695924907](https://github.com/scala/scala/commit/2695924907) | <notextile>SI-8009 Ensure that Idents preserve isBackquoted property</notextile>
[207b945353](https://github.com/scala/scala/commit/207b945353) | <notextile>SI-8016 Ensure that q&sbquo;&Auml;&ugrave;..$xs&sbquo;&Auml;&ugrave; is equivalent to q&sbquo;&Auml;&ugrave;{..$xs}&sbquo;&Auml;&ugrave;</notextile>
[8bde124040](https://github.com/scala/scala/commit/8bde124040) | <notextile>SI-8008 Make q&sbquo;&Auml;&ugrave;f(..$xs)&sbquo;&Auml;&ugrave; only match trees with Apply node</notextile>
[eb78e90ca7](https://github.com/scala/scala/commit/eb78e90ca7) | <notextile>streamlines refchecking undesired symbol properties</notextile>
[87979ad96f](https://github.com/scala/scala/commit/87979ad96f) | <notextile>deprecates macro def return type inference</notextile>
[58eadc0952](https://github.com/scala/scala/commit/58eadc0952) | <notextile>add method dequeueOption to immutable.Queue</notextile>
[1b454185c4](https://github.com/scala/scala/commit/1b454185c4) | <notextile>SI-8013 Nowarn on macro str interpolation</notextile>
[5ba6e13b9e](https://github.com/scala/scala/commit/5ba6e13b9e) | <notextile>undeprecates c.parse</notextile>
[7d4109486b](https://github.com/scala/scala/commit/7d4109486b) | <notextile>SI-7982 Changed contract of askLoadedType to unload units by default</notextile>
[70634395a4](https://github.com/scala/scala/commit/70634395a4) | <notextile>SI-6913 Fixing semantics of Future fallbackTo to be according to docs</notextile>
[02308c9691](https://github.com/scala/scala/commit/02308c9691) | <notextile>SI-7458 Pres. compiler must not observe trees in silent mode</notextile>
[652b3b4b9d](https://github.com/scala/scala/commit/652b3b4b9d) | <notextile>SI-7548 Test to demonstrate residual exploratory typing bug</notextile>
[b7509c922f](https://github.com/scala/scala/commit/b7509c922f) | <notextile>SI-7548 askTypeAt returns the same type whether the source was fully or targeted</notextile>
[0c963c9085](https://github.com/scala/scala/commit/0c963c9085) | <notextile>[nomaster] teaches toolbox about -Yrangepos</notextile>
[51cd47491e](https://github.com/scala/scala/commit/51cd47491e) | <notextile>Removes Gen*View and Par*View</notextile>
[2ce7b1269a](https://github.com/scala/scala/commit/2ce7b1269a) | <notextile>Deprecates Par*View and Gen*View</notextile>
[3d804859d7](https://github.com/scala/scala/commit/3d804859d7) | <notextile>Use -Dupdate.versions to update versions.properties</notextile>
[1d3ec4e708](https://github.com/scala/scala/commit/1d3ec4e708) | <notextile>better error messages for various macro definition errors</notextile>
[03bf97e089](https://github.com/scala/scala/commit/03bf97e089) | <notextile>Fixes SI-8014, regression in Vector ++ TraversableOnce.</notextile>
[e571c9cc3e](https://github.com/scala/scala/commit/e571c9cc3e) | <notextile>Better error messages for common Function/Tuple mistakes</notextile>
[1071d0ca86](https://github.com/scala/scala/commit/1071d0ca86) | <notextile>SI-7373 Make the constructor of Vector non-public</notextile>
[d0aaa86a9f](https://github.com/scala/scala/commit/d0aaa86a9f) | <notextile>SI-8023 Address review comments around typedHigherKindedType</notextile>
[a89000be9f](https://github.com/scala/scala/commit/a89000be9f) | <notextile>SI-8023 Fix symbol-completion-order type var pattern bug</notextile>
[32b756494e](https://github.com/scala/scala/commit/32b756494e) | <notextile>SI-8022 Backwards compatibility for Regex#unapplySeq</notextile>
[158c76ada5](https://github.com/scala/scala/commit/158c76ada5) | <notextile>Remove unused android tests.</notextile>
[38e2d6ebd1](https://github.com/scala/scala/commit/38e2d6ebd1) | <notextile>Rename build-support.xml to build-ant-macros.xml.</notextile>
[7742a7d909](https://github.com/scala/scala/commit/7742a7d909) | <notextile>No longer support unreleased STARR.</notextile>
[23f52a8aad](https://github.com/scala/scala/commit/23f52a8aad) | <notextile>Move all macros in build.xml to build-support.xml.</notextile>
[3629b645cc](https://github.com/scala/scala/commit/3629b645cc) | <notextile>SI-8005 Fixes NoPositon error for updateDynamic calls</notextile>
[696545d53f](https://github.com/scala/scala/commit/696545d53f) | <notextile>SI-8004 Resolve NoPosition error for applyDynamicNamed method call</notextile>
[b915f440eb](https://github.com/scala/scala/commit/b915f440eb) | <notextile>SI-7463,SI-8003 Correct wrong position for {select,apply}Dynamic calls</notextile>
[053a2744c6](https://github.com/scala/scala/commit/053a2744c6) | <notextile>[nomaster] SI-7280 Scope completion not returning members provided by imports</notextile>
[eb9f0f7975](https://github.com/scala/scala/commit/eb9f0f7975) | <notextile>[nomaster] Adds test cases for scope completion</notextile>
[3a8796da1a](https://github.com/scala/scala/commit/3a8796da1a) | <notextile>[nomaster] Test infrastructure for scope completion</notextile>
[04df2e48e4](https://github.com/scala/scala/commit/04df2e48e4) | <notextile>SI-7915 Corrected range positions created during default args expansion</notextile>
[28bf4ada31](https://github.com/scala/scala/commit/28bf4ada31) | <notextile>SI-8002 private access for local companions</notextile>
[f12bb7bda4](https://github.com/scala/scala/commit/f12bb7bda4) | <notextile>SI-4332 Plugs the gaps in views</notextile>
[0271a4a394](https://github.com/scala/scala/commit/0271a4a394) | <notextile>SI-7984 Issue unchecked warning for type aliases</notextile>
[05620ad4e1](https://github.com/scala/scala/commit/05620ad4e1) | <notextile>SI-8011 Test case for recently fixed value class bug</notextile>
[8f20fa23db](https://github.com/scala/scala/commit/8f20fa23db) | <notextile>SI-7969 REPL variable columnar output</notextile>
[02359a09eb](https://github.com/scala/scala/commit/02359a09eb) | <notextile>SI-7969 Refactor to trait with test</notextile>
[28cfe16fdd](https://github.com/scala/scala/commit/28cfe16fdd) | <notextile>SI-7969 REPL -C columnar output</notextile>
[518635385a](https://github.com/scala/scala/commit/518635385a) | <notextile>SI-7872 Plug a variance exploit in refinement types</notextile>
[66577fa6ec](https://github.com/scala/scala/commit/66577fa6ec) | <notextile>SI-8001 spurious &quot;pure expression does nothing&quot; warning</notextile>
[a5e24768f2](https://github.com/scala/scala/commit/a5e24768f2) | <notextile>SI-7967 Account for type aliases in self-type checks</notextile>
[5d5596bb07](https://github.com/scala/scala/commit/5d5596bb07) | <notextile>Special treatment for local symbols in TypeTreeMemberType</notextile>
[b5be392967](https://github.com/scala/scala/commit/b5be392967) | <notextile>Refactor away duplication between -Ydelambdafy:{inline,method}</notextile>
[736613ea8a](https://github.com/scala/scala/commit/736613ea8a) | <notextile>Substitute new parameter symbols into lambda body</notextile>
[cb37548ef8](https://github.com/scala/scala/commit/cb37548ef8) | <notextile>Symbol substutition must consider ClassInfoType#parents</notextile>
[d7d63e93f3](https://github.com/scala/scala/commit/d7d63e93f3) | <notextile>Tidy up the Uncurry component of delambdafy</notextile>
[342b05b849](https://github.com/scala/scala/commit/342b05b849) | <notextile>Test in quick mode for ant build</notextile>
[7c9b41fa11](https://github.com/scala/scala/commit/7c9b41fa11) | <notextile>Update Eclipse classpath files</notextile>
[1d8e8ffa0f](https://github.com/scala/scala/commit/1d8e8ffa0f) | <notextile>Revise paragraph (a revised #3164)</notextile>
[ee6fbae3d0](https://github.com/scala/scala/commit/ee6fbae3d0) | <notextile>correctly fails implicit search for invalid implicit macros</notextile>
[64603653f8](https://github.com/scala/scala/commit/64603653f8) | <notextile>SI-7999 s.u.c.NonFatal: StackOverflowError is fatal</notextile>
[60ac821192](https://github.com/scala/scala/commit/60ac821192) | <notextile>Account for a variation of package types in Implicit Divergence.</notextile>
[d8ffaac6ae](https://github.com/scala/scala/commit/d8ffaac6ae) | <notextile>Code reformatting in Implicits</notextile>
[dfe0ba847e](https://github.com/scala/scala/commit/dfe0ba847e) | <notextile>SI-7983 Fix regression in implicit divergence checking</notextile>
[e7443e2d5b](https://github.com/scala/scala/commit/e7443e2d5b) | <notextile>2.11.0-M7 starr, 1.11.1 scalacheck, bump modules.</notextile>
[1050745dca](https://github.com/scala/scala/commit/1050745dca) | <notextile>SI-7985 Refactor parsing of pattern type args</notextile>
[b1d305388d](https://github.com/scala/scala/commit/b1d305388d) | <notextile>SI-7985 Allow projection of lower-cased prefix as pattern type arg</notextile>
[77ecff775e](https://github.com/scala/scala/commit/77ecff775e) | <notextile>SI-7985 Allow qualified type argument in patterns</notextile>
[d6a457cdc9](https://github.com/scala/scala/commit/d6a457cdc9) | <notextile>SI-7221 rewrites pollForWork non-recursively</notextile>
[34358ee1e8](https://github.com/scala/scala/commit/34358ee1e8) | <notextile>more precise isMacroApplication check</notextile>
[5344a0316e](https://github.com/scala/scala/commit/5344a0316e) | <notextile>Remove deprecated constructor from the migration annotation</notextile>
[d6ef83a2d7](https://github.com/scala/scala/commit/d6ef83a2d7) | <notextile>use more specific cake dependencies</notextile>
[1080da8076](https://github.com/scala/scala/commit/1080da8076) | <notextile>refactor out fresh name prefix extraction logic</notextile>
[2d4f0f1859](https://github.com/scala/scala/commit/2d4f0f1859) | <notextile>Removing deprecated code.</notextile>
[b004c3ddb3](https://github.com/scala/scala/commit/b004c3ddb3) | <notextile>deprecate Pair and Triple</notextile>
[b27c9b84be](https://github.com/scala/scala/commit/b27c9b84be) | <notextile>SI-6329 Graduation day for pending tests for tag materialization</notextile>
[5eef542ae4](https://github.com/scala/scala/commit/5eef542ae4) | <notextile>SI-7987 Test case for &quot;macro not expanded&quot; error with implicits</notextile>
[36d66c2134](https://github.com/scala/scala/commit/36d66c2134) | <notextile>deprecate scala.Responder</notextile>
[33a086b97a](https://github.com/scala/scala/commit/33a086b97a) | <notextile>Handle TypeApply(fun, ...) for symbol-less funs</notextile>
[733f7f0868](https://github.com/scala/scala/commit/733f7f0868) | <notextile>Prepare upgrade to scalacheck 1.11.</notextile>
[ec89b59717](https://github.com/scala/scala/commit/ec89b59717) | <notextile>Upgrade pax-url-aether to 1.6.0.</notextile>
[0f9c1e7a9a](https://github.com/scala/scala/commit/0f9c1e7a9a) | <notextile>SI-7280 Remove unneccesary method</notextile>



