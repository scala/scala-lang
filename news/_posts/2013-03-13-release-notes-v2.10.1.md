---
layout: news
post-type: announcement
title: "Scala 2.10.1 is now available!"
---
We are very happy to announce the final release of Scala 2.10.1!

The Scala team and contributors [fixed 166 issues since 2.10.0](https://issues.scala-lang.org/secure/IssueNavigator.jspa?mode=hide&requestId=12114)!

In total, [242 RC1 pull requests](https://github.com/scala/scala/issues?milestone=5&page=1&state=closed), [7 RC2 pull requests](https://github.com/scala/scala/issues?milestone=13&page=1&state=closed), and [4 RC3 pull requests](https://github.com/scala/scala/issues?milestone=14&page=1&state=closed) were opened on [GitHub](https://github.com/scala/scala), of which 94.5% were merged after having been [tested](https://github.com/typesafehub/ghpullrequest-validator) and reviewed.

<!--break-->

### Known Issues
Before reporting a bug, please have a look at these [known issues](https://issues.scala-lang.org/secure/IssueNavigator.jspa?mode=hide&requestId=12113).

### Scala IDE for Eclipse
The Scala IDE with Scala 2.10.1-RC3 built right in is available through one of the following update-sites:

* [for Eclipse 3.7 (Indigo)](http://download.scala-ide.org/sdk/e37/scala210/dev/site/)
* [for Eclipse 3.8/4.2 (Juno)](http://download.scala-ide.org/sdk/e38/scala210/dev/site/) (Support for this version is experimental.)

Have a look at the [getting started guide](http://scala-ide.org/docs/user/gettingstarted.html) for more info.

### New features in the 2.10 series
Since 2.10.1 is strictly a bug-fix release, here's an overview of the most prominent new features and improvements as introduced in 2.10.0:

* Value Classes

    * A class may now extend `AnyVal` to make it behave like a struct type (restrictions apply).

    * [http://docs.scala-lang.org/overviews/core/value-classes.html](http://docs.scala-lang.org/overviews/core/value-classes.html)
* Implicit Classes

    * The implicit modifier now also applies to class definitions to reduce the boilerplate of implicit wrappers.

    * [http://docs.scala-lang.org/sips/pending/implicit-classes.html](http://docs.scala-lang.org/sips/pending/implicit-classes.html)
* String Interpolation

    * `val what = "awesome"; println(s"string interpolation is ${what.toUpperCase}!")`

    * [http://docs.scala-lang.org/overviews/core/string-interpolation.html](http://docs.scala-lang.org/overviews/core/string-interpolation.html)
* Futures and Promises

    * Asynchronously get some JSON: `for (req <- WS.url(restApiUrl).get()) yield (req.json \ "users").as[List[User]]` (uses play!)

    * [http://docs.scala-lang.org/overviews/core/futures.html](http://docs.scala-lang.org/overviews/core/futures.html)
* Dynamic and applyDynamic

    * `x.foo` becomes `x.applyDynamic("foo")` if `x`'s type does not define a `foo`, but is a subtype of `Dynamic`

    * [http://docs.scala-lang.org/sips/pending/type-dynamic.html](http://docs.scala-lang.org/sips/pending/type-dynamic.html)
* Dependent method types:

    * `def identity(x: AnyRef): x.type = x` // the return type says we return exactly what we got
* New ByteCode emitter based on ASM

    * Can target JDK 1.5, 1.6 and 1.7

    * Emits 1.6 bytecode by default

    * Old 1.5 backend is deprecated
* A new Pattern Matcher

    * rewritten from scratch to generate more robust code (no more [exponential blow-up](https://issues.scala-lang.org/browse/SI-1133)!)

    * code generation and analyses are now independent (the latter can be turned off with `-Xno-patmat-analysis`)
* Scaladoc Improvements

    * Implicits (-implicits flag)

    * Diagrams (-diagrams flag, requires graphviz)

    * Groups (-groups)
* Modularized Language features

    * Get on top of the advanced Scala features used in your codebase by explicitly importing them.

    * [http://docs.scala-lang.org/sips/pending/modularizing-language-features.html](http://docs.scala-lang.org/sips/pending/modularizing-language-features.html)
* Parallel Collections are now configurable with custom thread pools

    * [http://docs.scala-lang.org/overviews/parallel-collections/overview.html](http://docs.scala-lang.org/overviews/parallel-collections/overview.html)
* Akka Actors now part of the distribution

    * scala.actors have been deprecated and the akka implementation is now included in the distribution.

    * See the [actors migration project](http://docs.scala-lang.org/actors-migration/) for more information.
* Performance Improvements

    * Faster inliner

    * `Range#sum` is now O(1)

    * Update of ForkJoin library

    * Fixes in immutable `TreeSet`/`TreeMap`

    * Improvements to PartialFunctions
* Addition of `???` and `NotImplementedError`
* Addition of `IsTraversableOnce` + `IsTraversableLike` type classes for extension methods
* Deprecations and cleanup

    * Floating point and octal literal syntax deprecation

    * Removed scala.dbc

### Experimental features

* Scala Reflection

    * [http://docs.scala-lang.org/overviews/reflection/overview.html](http://docs.scala-lang.org/overviews/reflection/overview.html)
* Macros

    * [http://docs.scala-lang.org/overviews/macros/overview.html](http://docs.scala-lang.org/overviews/macros/overview.html)

The API is subject to (possibly major) changes in the 2.11.x series, but don't let that stop you from experimenting with them!
A lot of developers have already come up with very cool applications for them.
Some examples can be seen at [http://scalamacros.org/news/2012/11/05/status-update.html](http://scalamacros.org/news/2012/11/05/status-update.html).


#### A big thank you to all the contributors!

\# | Author
---: | ---
104 | <notextile>Jason Zaugg</notextile>
49 | <notextile>Eugene Burmako</notextile>
43 | <notextile>Paul Phillips</notextile>
38 | <notextile>Adriaan Moors</notextile>
32 | <notextile>James Iry</notextile>
10 | <notextile>Lukas Rytz</notextile>
9 | <notextile>Grzegorz Kossakowski</notextile>
9 | <notextile>Eugene Vigdorchik</notextile>
7 | <notextile>Kato Kazuyoshi</notextile>
7 | <notextile>Hubert Plociniczak</notextile>
7 | <notextile>Jean-Remi Desjardins</notextile>
4 | <notextile>Viktor Klang</notextile>
3 | <notextile>Josh Suereth</notextile>
3 | <notextile>Nada Amin</notextile>
3 | <notextile>Simon Ochsenreither</notextile>
2 | <notextile>Andriy Polishchuk</notextile>
2 | <notextile>Vlad Ureche</notextile>
2 | <notextile>Heather Miller</notextile>
2 | <notextile>Iulian Dragos</notextile>
2 | <notextile>Ingo Maier</notextile>
2 | <notextile>martende</notextile>
2 | <notextile>Aleksandar Prokopec</notextile>
2 | <notextile>Paolo Giarrusso</notextile>
2 | <notextile>Philipp Haller</notextile>
1 | <notextile>David Hall</notextile>
1 | <notextile>ybr</notextile>
1 | <notextile>Erik Osheim</notextile>
1 | <notextile>Szabolcs Berecz</notextile>
1 | <notextile>Declan Conlon</notextile>
1 | <notextile>Simon Schaefer</notextile>
1 | <notextile>James Roper</notextile>
1 | <notextile>Jan Niehusmann</notextile>
1 | <notextile>Dmitry Bushev</notextile>
1 | <notextile>Vinicius Miana</notextile>
1 | <notextile>Miguel Garcia</notextile>
1 | <notextile>Mads Hartmann Jensen</notextile>
1 | <notextile>Your Name</notextile>
1 | <notextile>Brian McKenna</notextile>
1 | <notextile>Cody Mello</notextile>
1 | <notextile>Evgeny Kotelnikov</notextile>



#### Commits and the issues they fixed since v2.10.0

Issue(s) | Commit | Message
--- | --- | ---
[https://issues.scala-lang.org/browse/SI-5954](SI-5954), [https://issues.scala-lang.org/browse/SI-7195](SI-7195) | [https://github.com/scala/scala/commit/09130d5](09130d5) | <notextile>[nomaster] SI-7195 minor version mustn't introduce warnings</notextile>
[https://issues.scala-lang.org/browse/SI-6902](SI-6902), [https://issues.scala-lang.org/browse/SI-7183](SI-7183) | [https://github.com/scala/scala/commit/0303e64](0303e64) | <notextile>SI-7183 Disable unreachability for withFilter matches.</notextile>
[https://issues.scala-lang.org/browse/SI-7126](SI-7126), [https://issues.scala-lang.org/browse/SI-7126](SI-7126) | [https://github.com/scala/scala/commit/204b2b4](204b2b4) | <notextile>SI-7126 Eliminate a source of malformed types.</notextile>
[https://issues.scala-lang.org/browse/SI-7126](SI-7126), [https://issues.scala-lang.org/browse/SI-7126](SI-7126) | [https://github.com/scala/scala/commit/696dcdf](696dcdf) | <notextile>SI-7126 Account for the alias types that don't dealias.</notextile>
[https://issues.scala-lang.org/browse/SI-7112](SI-7112) | [https://github.com/scala/scala/commit/1976d9f](1976d9f) | <notextile>fixes the test for SI-7112</notextile>
[https://issues.scala-lang.org/browse/SI-7180](SI-7180) | [https://github.com/scala/scala/commit/de1f749](de1f749) | <notextile>SI-7180 Fix regression in implicit scope of HK type alias.</notextile>
[https://issues.scala-lang.org/browse/SI-5975](SI-5975), [https://issues.scala-lang.org/browse/SI-6576](SI-6576) | [https://github.com/scala/scala/commit/19649d4](19649d4) | <notextile>SI-6576 Workaround / diagnostic for IDE NPE.</notextile>
[https://issues.scala-lang.org/browse/SI-7146](SI-7146) | [https://github.com/scala/scala/commit/bb067d3](bb067d3) | <notextile>SI-7146 - Fixing checkinit bug in ExecutionContextImpl and adding test</notextile>
[https://issues.scala-lang.org/browse/SI-7128](SI-7128) | [https://github.com/scala/scala/commit/348ff4b](348ff4b) | <notextile>SI-7128 Fix regression in copyToArray for empty arrays</notextile>
[https://issues.scala-lang.org/browse/SI-6548](SI-6548), [https://issues.scala-lang.org/browse/SI-6548](SI-6548) | [https://github.com/scala/scala/commit/85b63b8](85b63b8) | <notextile>[nomaster] Revert &quot;SI-6548 reflection now correctly enters jinners&quot;</notextile>
[https://issues.scala-lang.org/browse/SI-4664](SI-4664), [https://issues.scala-lang.org/browse/SI-4664](SI-4664) | [https://github.com/scala/scala/commit/8b4af71](8b4af71) | <notextile>[nomaster] Revert &quot;SI-4664 Make scala.util.Random Serializable&quot;</notextile>
[https://issues.scala-lang.org/browse/SI-6521](SI-6521) | [https://github.com/scala/scala/commit/f9550c6](f9550c6) | <notextile>[nomaster] Revert &quot;Fixes SI-6521, overrides Range#head to be faster&quot;</notextile>
[https://issues.scala-lang.org/browse/SI-7082](SI-7082), [https://issues.scala-lang.org/browse/SI-7083](SI-7083), [https://issues.scala-lang.org/browse/SI-6591](SI-6591) | [https://github.com/scala/scala/commit/09ef873](09ef873) | <notextile>SI-6591 Reify and path-dependent types</notextile>
[https://issues.scala-lang.org/browse/SI-5675](SI-5675) | [https://github.com/scala/scala/commit/e0068b9](e0068b9) | <notextile>SI-5675 Discard duplicate feature warnings at a position</notextile>
[https://issues.scala-lang.org/browse/SI-7096](SI-7096) | [https://github.com/scala/scala/commit/5258b63](5258b63) | <notextile>SI-7096 SubstSymMap copies trees before modifying their symbols</notextile>
[https://issues.scala-lang.org/browse/SI-6666](SI-6666) | [https://github.com/scala/scala/commit/81fa831](81fa831) | <notextile>Class symbols can't be contravariant.</notextile>
[https://issues.scala-lang.org/browse/SI-6666](SI-6666) | [https://github.com/scala/scala/commit/275b341](275b341) | <notextile>SI-6666 Catch VerifyErrors in the making in early defs.</notextile>
[https://issues.scala-lang.org/browse/SI-6666](SI-6666) | [https://github.com/scala/scala/commit/4c34280](4c34280) | <notextile>Add a test case from the comments of SI-6666.</notextile>
[https://issues.scala-lang.org/browse/SI-6259](SI-6259), [https://issues.scala-lang.org/browse/SI-6506](SI-6506), [https://issues.scala-lang.org/browse/SI-6957](SI-6957), [https://issues.scala-lang.org/browse/SI-6666](SI-6666) | [https://github.com/scala/scala/commit/fd61254](fd61254) | <notextile>SI-6666 Account for nesting in setting INCONSTRUCTOR</notextile>
[https://issues.scala-lang.org/browse/SI-6478](SI-6478) | [https://github.com/scala/scala/commit/6052e19](6052e19) | <notextile>[backport] SI-6478 Fixing JavaTokenParser ident</notextile>
[https://issues.scala-lang.org/browse/SI-7071](SI-7071), [https://issues.scala-lang.org/browse/SI-7072](SI-7072) | [https://github.com/scala/scala/commit/b43ae58](b43ae58) | <notextile>introduces an exhaustive java-to-scala test</notextile>
[https://issues.scala-lang.org/browse/SI-6989](SI-6989) | [https://github.com/scala/scala/commit/02ed5fb](02ed5fb) | <notextile>SI-6989 privateWithin is now populated in reflect</notextile>
[https://issues.scala-lang.org/browse/SI-5824](SI-5824) | [https://github.com/scala/scala/commit/96b0eff](96b0eff) | <notextile>SI-5824 Fix crashes in reify with _*</notextile>
[https://issues.scala-lang.org/browse/SI-5374](SI-5374), [https://issues.scala-lang.org/browse/SI-6961](SI-6961) | [https://github.com/scala/scala/commit/fa3b804](fa3b804) | <notextile>SI-6961 no structural sharing in list serialization</notextile>
[https://issues.scala-lang.org/browse/SI-6187](SI-6187) | [https://github.com/scala/scala/commit/dfbaaa1](dfbaaa1) | <notextile>SI-6187 Make partial functions re-typable</notextile>
[https://issues.scala-lang.org/browse/SI-6146](SI-6146) | [https://github.com/scala/scala/commit/55c9b9c](55c9b9c) | <notextile>SI-6146 More accurate prefixes for sealed subtypes.</notextile>
[https://issues.scala-lang.org/browse/SI-5954](SI-5954), [https://issues.scala-lang.org/browse/SI-7070](SI-7070) | [https://github.com/scala/scala/commit/1426fec](1426fec) | <notextile>SI-7070 Turn restriction on companions in pkg objs into warning</notextile>
[https://issues.scala-lang.org/browse/SI-5082](SI-5082) | [https://github.com/scala/scala/commit/a0ee6e9](a0ee6e9) | <notextile>SI-5082 Cycle avoidance between case companions</notextile>
[https://issues.scala-lang.org/browse/SI-7100](SI-7100) | [https://github.com/scala/scala/commit/a53e150](a53e150) | <notextile>SI-7100 Fixed infinite recursion in duplicators</notextile>
[https://issues.scala-lang.org/browse/SI-6113](SI-6113) | [https://github.com/scala/scala/commit/0d68a87](0d68a87) | <notextile>SI-6113 typeOf now works for type lambdas</notextile>
[https://issues.scala-lang.org/browse/SI-2806](SI-2806), [https://issues.scala-lang.org/browse/SI-6888](SI-6888) | [https://github.com/scala/scala/commit/b579a42](b579a42) | <notextile>SI-6888 Loosen criteria for $outer search.</notextile>
[https://issues.scala-lang.org/browse/SI-7026](SI-7026), [https://issues.scala-lang.org/browse/SI-7026](SI-7026) | [https://github.com/scala/scala/commit/79e774f](79e774f) | <notextile>SI-7026: parseTree should never return a typed one</notextile>
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
[https://issues.scala-lang.org/browse/SI-5543](SI-5543), [https://issues.scala-lang.org/browse/SI-1803](SI-1803) | [https://github.com/scala/scala/commit/b74c33e](b74c33e) | <notextile>SI-1803, plus documentation and cleanups in Namers, mainly in typeSig</notextile>
[https://issues.scala-lang.org/browse/SI-6482](SI-6482), [https://issues.scala-lang.org/browse/SI-7022](SI-7022) | [https://github.com/scala/scala/commit/374c912](374c912) | <notextile>SI-7022 Additional test case for value class w. bounds</notextile>
[https://issues.scala-lang.org/browse/SI-6482](SI-6482), [https://issues.scala-lang.org/browse/SI-6482](SI-6482) | [https://github.com/scala/scala/commit/4ed8836](4ed8836) | <notextile>[backport] SI-6482, lost bounds in extension methods.</notextile>
[https://issues.scala-lang.org/browse/SI-6941](SI-6941) | [https://github.com/scala/scala/commit/b2117cf](b2117cf) | <notextile>SI-6941 tests</notextile>
[https://issues.scala-lang.org/browse/SI-6686](SI-6686) | [https://github.com/scala/scala/commit/b92396b](b92396b) | <notextile>SI-6686 drop valdef unused in flatMapCond's block</notextile>
[https://issues.scala-lang.org/browse/SI-5158](SI-5158), [https://issues.scala-lang.org/browse/SI-6941](SI-6941) | [https://github.com/scala/scala/commit/494ba94](494ba94) | <notextile>don't store subpats bound to underscore</notextile>
[https://issues.scala-lang.org/browse/SI-4976](SI-4976) | [https://github.com/scala/scala/commit/d71f59e](d71f59e) | <notextile>SI-4976 Scaladoc: Add a source link to package objects</notextile>
[https://issues.scala-lang.org/browse/SI-7029](SI-7029) | [https://github.com/scala/scala/commit/5275bae](5275bae) | <notextile>SI-7029 - Make test more robust</notextile>
[https://issues.scala-lang.org/browse/SI-7029](SI-7029) | [https://github.com/scala/scala/commit/3f78bee](3f78bee) | <notextile>SI-7029 - Makes sure that uncaught exceptions are propagated to the UEH for the global ExecutionContext</notextile>
[https://issues.scala-lang.org/browse/SI-6539](SI-6539) | [https://github.com/scala/scala/commit/2989258](2989258) | <notextile>SI-6539 moves @compileTimeOnly away from scala-reflect</notextile>
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
[https://issues.scala-lang.org/browse/SI-6795](SI-6795) | [https://github.com/scala/scala/commit/f029c3a](f029c3a) | <notextile>SI-6795 Simplify errors related to &quot;abstract override&quot; on type members</notextile>
[https://issues.scala-lang.org/browse/SI-6795](SI-6795) | [https://github.com/scala/scala/commit/71e42a7](71e42a7) | <notextile>SI-6795 Adds negative check for &quot;abstract override&quot; on types in traits</notextile>
[https://issues.scala-lang.org/browse/SI-3995](SI-3995) | [https://github.com/scala/scala/commit/cab8ea4](cab8ea4) | <notextile>Expand test with a stably qualified example.</notextile>
[https://issues.scala-lang.org/browse/SI-3995](SI-3995) | [https://github.com/scala/scala/commit/90efa6b](90efa6b) | <notextile>SI-3995 Exclude companions with an existential prefix.</notextile>
[https://issues.scala-lang.org/browse/SI-6548](SI-6548) | [https://github.com/scala/scala/commit/54a84a3](54a84a3) | <notextile>SI-6548 reflection now correctly enters jinners</notextile>
[https://issues.scala-lang.org/browse/SI-5390](SI-5390) | [https://github.com/scala/scala/commit/289a882](289a882) | <notextile>SI-5390 Detect forward reference of case class apply</notextile>
[https://issues.scala-lang.org/browse/SI-5361](SI-5361) | [https://github.com/scala/scala/commit/8b7f0ac](8b7f0ac) | <notextile>SI-5361 Refactor in accordance with review comments.</notextile>
[https://issues.scala-lang.org/browse/SI-3614](SI-3614), [https://issues.scala-lang.org/browse/SI-5361](SI-5361) | [https://github.com/scala/scala/commit/327083d](327083d) | <notextile>SI-5361 Avoid cyclic type with malformed refinement</notextile>
[https://issues.scala-lang.org/browse/SI-6288](SI-6288) | [https://github.com/scala/scala/commit/286dced](286dced) | <notextile>SI-6288 Remedy ill-positioned extractor binding.</notextile>
[https://issues.scala-lang.org/browse/SI-6288](SI-6288) | [https://github.com/scala/scala/commit/f69b846](f69b846) | <notextile>SI-6288 Fix positioning of label jumps</notextile>
[https://issues.scala-lang.org/browse/SI-6288](SI-6288) | [https://github.com/scala/scala/commit/79a43d7](79a43d7) | <notextile>SI-6288 Position argument of unapply</notextile>
[https://issues.scala-lang.org/browse/SI-6758](SI-6758) | [https://github.com/scala/scala/commit/089173d](089173d) | <notextile>Fixes SI-6758: force LazyAnnnotationInfo for DefDef and TypeDef</notextile>
[https://issues.scala-lang.org/browse/SI-6555](SI-6555) | [https://github.com/scala/scala/commit/818a2e6](818a2e6) | <notextile>SI-6555 Better parameter name retention</notextile>
[https://issues.scala-lang.org/browse/SI-5841](SI-5841) | [https://github.com/scala/scala/commit/286abfc](286abfc) | <notextile>SI-5841 reification of renamed imports</notextile>
[https://issues.scala-lang.org/browse/SI-5877](SI-5877) | [https://github.com/scala/scala/commit/0b1ae9c](0b1ae9c) | <notextile>SI-5877 Tweak the check for package object owner.</notextile>
[https://issues.scala-lang.org/browse/SI-5877](SI-5877) | [https://github.com/scala/scala/commit/96e5c40](96e5c40) | <notextile>SI-5877 Support implicit classes in package objects</notextile>
[https://issues.scala-lang.org/browse/SI-5877](SI-5877) | [https://github.com/scala/scala/commit/65c1ae5](65c1ae5) | <notextile>Adds debug logging for synthetic registration.</notextile>
[https://issues.scala-lang.org/browse/SI-6758](SI-6758) | [https://github.com/scala/scala/commit/673bc70](673bc70) | <notextile>Split test case to workaround incomplete error report.</notextile>
[https://issues.scala-lang.org/browse/SI-6558](SI-6558) | [https://github.com/scala/scala/commit/c24400f](c24400f) | <notextile>SI-6558 Expand test case for annotation typos</notextile>
[https://issues.scala-lang.org/browse/SI-6558](SI-6558) | [https://github.com/scala/scala/commit/d9928d5](d9928d5) | <notextile>Fixes SI-6558: typecheck lazy annotation info using non-silent context.</notextile>
[https://issues.scala-lang.org/browse/SI-4922](SI-4922) | [https://github.com/scala/scala/commit/e249f2e](e249f2e) | <notextile>SI-4922 Show default in Scaladoc for generic methods.</notextile>
[https://issues.scala-lang.org/browse/SI-6614](SI-6614) | [https://github.com/scala/scala/commit/bd04b2c](bd04b2c) | <notextile>SI-6614 Test case for fixed ArrayStack misconduct.</notextile>
[https://issues.scala-lang.org/browse/SI-6690](SI-6690) | [https://github.com/scala/scala/commit/d526f8b](d526f8b) | <notextile>SI-6690 Release reference to last dequeued element.</notextile>
[https://issues.scala-lang.org/browse/SI-5789](SI-5789) | [https://github.com/scala/scala/commit/5f2b7c4](5f2b7c4) | <notextile>SI-5789 Use the ReplTest framework in the test</notextile>
[https://issues.scala-lang.org/browse/SI-5789](SI-5789) | [https://github.com/scala/scala/commit/850128d](850128d) | <notextile>SI-5789 Checks in the right version of the test</notextile>
[https://issues.scala-lang.org/browse/SI-6782](SI-6782), [https://issues.scala-lang.org/browse/SI-5789](SI-5789) | [https://github.com/scala/scala/commit/d699122](d699122) | <notextile>SI-5789 Removes assertion about implclass flag in Mixin.scala</notextile>
[https://issues.scala-lang.org/browse/SI-5894](SI-5894) | [https://github.com/scala/scala/commit/a23cc20](a23cc20) | <notextile>SI-5894 Don't emit static forwarders for macros.</notextile>
[https://issues.scala-lang.org/browse/SI-5894](SI-5894) | [https://github.com/scala/scala/commit/b828e32](b828e32) | <notextile>Remove some low-hanging duplication beween GenJVM / GenASM.</notextile>
[https://issues.scala-lang.org/browse/SI-1672](SI-1672) | [https://github.com/scala/scala/commit/31a0aa7](31a0aa7) | <notextile>SI-1672 Catches are in tail position without finally.</notextile>
[https://issues.scala-lang.org/browse/SI-6535](SI-6535) | [https://github.com/scala/scala/commit/8a1f85d](8a1f85d) | <notextile>SI-6535 Step back from the precipice of a cycle</notextile>
[https://issues.scala-lang.org/browse/SI-6549](SI-6549) | [https://github.com/scala/scala/commit/90c87fc](90c87fc) | <notextile>SI-6549 Improve escaping in REPL codegen.</notextile>
[https://issues.scala-lang.org/browse/SI-6547](SI-6547) | [https://github.com/scala/scala/commit/d99b7f4](d99b7f4) | <notextile>SI-6547: elide box unbox pair only when primitives match</notextile>
[https://issues.scala-lang.org/browse/SI-5678](SI-5678) | [https://github.com/scala/scala/commit/8204b19](8204b19) | <notextile>SI-5678 Bad return type for [Use Case] docs in Range</notextile>
[https://issues.scala-lang.org/browse/SI-6667](SI-6667) | [https://github.com/scala/scala/commit/9aa6ded](9aa6ded) | <notextile>SI-6667 Abort after any ambiguous in-scope implicit</notextile>
[https://issues.scala-lang.org/browse/SI-6667](SI-6667) | [https://github.com/scala/scala/commit/3719f79](3719f79) | <notextile>Refactor use of SearchFailure in implicits.</notextile>
[https://issues.scala-lang.org/browse/SI-4664](SI-4664) | [https://github.com/scala/scala/commit/2aa66be](2aa66be) | <notextile>SI-4664 [Make scala.util.Random Serializable] Add test case</notextile>
[https://issues.scala-lang.org/browse/SI-4664](SI-4664) | [https://github.com/scala/scala/commit/0b92073](0b92073) | <notextile>SI-4664 Make scala.util.Random Serializable</notextile>
[https://issues.scala-lang.org/browse/SI-6712](SI-6712) | [https://github.com/scala/scala/commit/089cc9f](089cc9f) | <notextile>Fix for SI-6712, bug in object lifting.</notextile>
[https://issues.scala-lang.org/browse/SI-6696](SI-6696), [https://issues.scala-lang.org/browse/SI-6696](SI-6696) | [https://github.com/scala/scala/commit/5546a72](5546a72) | <notextile>SI-6696 removes &quot;helper&quot; tree factory methods</notextile>
[https://issues.scala-lang.org/browse/SI-6766](SI-6766) | [https://github.com/scala/scala/commit/868fe64](868fe64) | <notextile>SI-6766 Makes the -Pcontinuations:enable flag a project specific preference</notextile>
[https://issues.scala-lang.org/browse/SI-6766](SI-6766) | [https://github.com/scala/scala/commit/a725494](a725494) | <notextile>SI-6766 Create a continuations project in eclipse</notextile>
[https://issues.scala-lang.org/browse/SI-6631](SI-6631) | [https://github.com/scala/scala/commit/7ee1145](7ee1145) | <notextile>SI-6631 Handle invalid escapes in string interpolators</notextile>
[https://issues.scala-lang.org/browse/SI-5464](SI-5464) | [https://github.com/scala/scala/commit/5028181](5028181) | <notextile>tests for idempotency issues in the typechecker</notextile>
[https://issues.scala-lang.org/browse/SI-6663](SI-6663), [https://issues.scala-lang.org/browse/SI-5726](SI-5726), [https://issues.scala-lang.org/browse/SI-5733](SI-5733), [https://issues.scala-lang.org/browse/SI-6320](SI-6320), [https://issues.scala-lang.org/browse/SI-6551](SI-6551), [https://issues.scala-lang.org/browse/SI-6722](SI-6722) | [https://github.com/scala/scala/commit/a694194](a694194) | <notextile>Test cases for SI-5726, SI-5733, SI-6320, SI-6551, SI-6722.</notextile>
[https://issues.scala-lang.org/browse/SI-6731](SI-6731) | [https://github.com/scala/scala/commit/dac1488](dac1488) | <notextile>Fix for SI-6731, dropped trees in selectDynamic.</notextile>
[https://issues.scala-lang.org/browse/SI-5753](SI-5753) | [https://github.com/scala/scala/commit/597a949](597a949) | <notextile>SI-5753 macros cannot be loaded when inherited from a class or a trait</notextile>
[https://issues.scala-lang.org/browse/SI-6718](SI-6718) | [https://github.com/scala/scala/commit/20c2a50](20c2a50) | <notextile>SI-6718 fixes a volatile test</notextile>
[https://issues.scala-lang.org/browse/SI-6687](SI-6687) | [https://github.com/scala/scala/commit/7f1ba06](7f1ba06) | <notextile>Fix for SI-6687, wrong isVar logic.</notextile>
[https://issues.scala-lang.org/browse/SI-6357](SI-6357) | [https://github.com/scala/scala/commit/8b54ec9](8b54ec9) | <notextile>Fix for SI-6357, cycle with value classes.</notextile>
[https://issues.scala-lang.org/browse/SI-6677](SI-6677) | [https://github.com/scala/scala/commit/2aa6841](2aa6841) | <notextile>SI-6677 Insert required cast in `new qual.foo.T`</notextile>
[https://issues.scala-lang.org/browse/SI-6706](SI-6706) | [https://github.com/scala/scala/commit/d0de367](d0de367) | <notextile>Fix for SI-6706, Symbol breakage under GC.</notextile>
[https://issues.scala-lang.org/browse/SI-6023](SI-6023) | [https://github.com/scala/scala/commit/548a54d](548a54d) | <notextile>SI-6023 reify abstract vals</notextile>
[https://issues.scala-lang.org/browse/SI-6673](SI-6673), [https://issues.scala-lang.org/browse/SI-6673](SI-6673) | [https://github.com/scala/scala/commit/907d6ea](907d6ea) | <notextile>SI-6673 fixes macro problems with eta expansions</notextile>
[https://issues.scala-lang.org/browse/SI-6695](SI-6695) | [https://github.com/scala/scala/commit/7376ad7](7376ad7) | <notextile>SI-6695 Test case for fixed Array match bug</notextile>
[https://issues.scala-lang.org/browse/SI-6632](SI-6632), [https://issues.scala-lang.org/browse/SI-6633](SI-6633) | [https://github.com/scala/scala/commit/925c6e3](925c6e3) | <notextile>SI-6632 SI-6633 Fixes issues and data corruption in ListBuffer</notextile>
[https://issues.scala-lang.org/browse/SI-6634](SI-6634) | [https://github.com/scala/scala/commit/2c23acf](2c23acf) | <notextile>SI-6634 Fixes data corruption issue in ListBuffer#remove</notextile>
[https://issues.scala-lang.org/browse/SI-6551](SI-6551) | [https://github.com/scala/scala/commit/74ca558](74ca558) | <notextile>SI-6551: don't insert apply call in polymorphic expression.</notextile>
[https://issues.scala-lang.org/browse/SI-6663](SI-6663) | [https://github.com/scala/scala/commit/c656920](c656920) | <notextile>SI-6663: don't ignore type parameter on selectDynamic invocation</notextile>
[https://issues.scala-lang.org/browse/SI-6150](SI-6150) | [https://github.com/scala/scala/commit/1f0e488](1f0e488) | <notextile>Fixes SI-6150 - backport to 2.10.x branch.</notextile>
[https://issues.scala-lang.org/browse/SI-5330](SI-5330), [https://issues.scala-lang.org/browse/SI-6014](SI-6014) | [https://github.com/scala/scala/commit/65778d7](65778d7) | <notextile>SI-5330, SI-6014 deal with existential self-type</notextile>
[https://issues.scala-lang.org/browse/SI-6539](SI-6539) | [https://github.com/scala/scala/commit/6902da3](6902da3) | <notextile>SI-6539 Annotation for methods unfit for post-typer ASTs</notextile>
[https://issues.scala-lang.org/browse/SI-6662](SI-6662) | [https://github.com/scala/scala/commit/b922573](b922573) | <notextile>Fix for SI-6662, macro failing too early.</notextile>
[https://issues.scala-lang.org/browse/SI-6616](SI-6616) | [https://github.com/scala/scala/commit/03aa7fc](03aa7fc) | <notextile>SI-6616 Check that unsafe operations are only called on the presentation compiler thread.</notextile>
[https://issues.scala-lang.org/browse/SI-6649](SI-6649) | [https://github.com/scala/scala/commit/1bdd5ee](1bdd5ee) | <notextile>better error when typetagging local classes</notextile>
[https://issues.scala-lang.org/browse/SI-6597](SI-6597) | [https://github.com/scala/scala/commit/1e2328e](1e2328e) | <notextile>Fix for SI-6597, implicit case class crasher.</notextile>
[https://issues.scala-lang.org/browse/SI-6488](SI-6488) | [https://github.com/scala/scala/commit/c7c79c8](c7c79c8) | <notextile>SI-6488: Stop I/O threads prior to Process destruction</notextile>
[https://issues.scala-lang.org/browse/SI-6559](SI-6559) | [https://github.com/scala/scala/commit/492cbe5](492cbe5) | <notextile>Fixes SI-6559 - StringContext not using passed in escape function.</notextile>
[https://issues.scala-lang.org/browse/SI-6358](SI-6358) | [https://github.com/scala/scala/commit/a52bd2c](a52bd2c) | <notextile>Added one more test for SI-6358</notextile>
[https://issues.scala-lang.org/browse/SI-6358](SI-6358) | [https://github.com/scala/scala/commit/4c86dbb](4c86dbb) | <notextile>Closes SI-6358. Move accessor generation for lazy vals to typers.</notextile>
[https://issues.scala-lang.org/browse/SI-6422](SI-6422) | [https://github.com/scala/scala/commit/c6866a2](c6866a2) | <notextile>SI-6422: add missing Fractional and Integral alias in scala package</notextile>




#### Complete commit list!

sha | Title
---: | ---
[https://github.com/scala/scala/commit/b775d8f](b775d8f) | <notextile>test.done again checks bin compat (using mima 0.1.5)</notextile>
[https://github.com/scala/scala/commit/09130d5](09130d5) | <notextile>[nomaster] SI-7195 minor version mustn't introduce warnings</notextile>
[https://github.com/scala/scala/commit/0303e64](0303e64) | <notextile>SI-7183 Disable unreachability for withFilter matches.</notextile>
[https://github.com/scala/scala/commit/204b2b4](204b2b4) | <notextile>SI-7126 Eliminate a source of malformed types.</notextile>
[https://github.com/scala/scala/commit/696dcdf](696dcdf) | <notextile>SI-7126 Account for the alias types that don't dealias.</notextile>
[https://github.com/scala/scala/commit/1976d9f](1976d9f) | <notextile>fixes the test for SI-7112</notextile>
[https://github.com/scala/scala/commit/de1f749](de1f749) | <notextile>SI-7180 Fix regression in implicit scope of HK type alias.</notextile>
[https://github.com/scala/scala/commit/26be206](26be206) | <notextile>Additional test case for Lukas' fix to annotated originals.</notextile>
[https://github.com/scala/scala/commit/dafebd0](dafebd0) | <notextile>Fix typing idempotency bug with Annotated trees</notextile>
[https://github.com/scala/scala/commit/19649d4](19649d4) | <notextile>SI-6576 Workaround / diagnostic for IDE NPE.</notextile>
[https://github.com/scala/scala/commit/bb067d3](bb067d3) | <notextile>SI-7146 - Fixing checkinit bug in ExecutionContextImpl and adding test</notextile>
[https://github.com/scala/scala/commit/348ff4b](348ff4b) | <notextile>SI-7128 Fix regression in copyToArray for empty arrays</notextile>
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
[https://github.com/scala/scala/commit/13caa49](13caa49) | <notextile>Fix for paramaccessor alias regression.</notextile>
[https://github.com/scala/scala/commit/22341e7](22341e7) | <notextile>Expanded bytecode testing code.</notextile>
[https://github.com/scala/scala/commit/57c0e63](57c0e63) | <notextile>accommodates pull request feedback</notextile>
[https://github.com/scala/scala/commit/ce867c7](ce867c7) | <notextile>term and type reftrees are now reified uniformly</notextile>
[https://github.com/scala/scala/commit/09ef873](09ef873) | <notextile>SI-6591 Reify and path-dependent types</notextile>
[https://github.com/scala/scala/commit/e0068b9](e0068b9) | <notextile>SI-5675 Discard duplicate feature warnings at a position</notextile>
[https://github.com/scala/scala/commit/5258b63](5258b63) | <notextile>SI-7096 SubstSymMap copies trees before modifying their symbols</notextile>
[https://github.com/scala/scala/commit/81fa831](81fa831) | <notextile>Class symbols can't be contravariant.</notextile>
[https://github.com/scala/scala/commit/275b341](275b341) | <notextile>SI-6666 Catch VerifyErrors in the making in early defs.</notextile>
[https://github.com/scala/scala/commit/66fa1f2](66fa1f2) | <notextile>Broader checks for poisonous this references.</notextile>
[https://github.com/scala/scala/commit/4c34280](4c34280) | <notextile>Add a test case from the comments of SI-6666.</notextile>
[https://github.com/scala/scala/commit/fd61254](fd61254) | <notextile>SI-6666 Account for nesting in setting INCONSTRUCTOR</notextile>
[https://github.com/scala/scala/commit/ee24807](ee24807) | <notextile>Move a test from pos to run to highlight bytecode deficiencies.</notextile>
[https://github.com/scala/scala/commit/6052e19](6052e19) | <notextile>[backport] SI-6478 Fixing JavaTokenParser ident</notextile>
[https://github.com/scala/scala/commit/b43ae58](b43ae58) | <notextile>introduces an exhaustive java-to-scala test</notextile>
[https://github.com/scala/scala/commit/02ed5fb](02ed5fb) | <notextile>SI-6989 privateWithin is now populated in reflect</notextile>
[https://github.com/scala/scala/commit/96b0eff](96b0eff) | <notextile>SI-5824 Fix crashes in reify with _*</notextile>
[https://github.com/scala/scala/commit/fa3b804](fa3b804) | <notextile>SI-6961 no structural sharing in list serialization</notextile>
[https://github.com/scala/scala/commit/dfbaaa1](dfbaaa1) | <notextile>SI-6187 Make partial functions re-typable</notextile>
[https://github.com/scala/scala/commit/55c9b9c](55c9b9c) | <notextile>SI-6146 More accurate prefixes for sealed subtypes.</notextile>
[https://github.com/scala/scala/commit/1426fec](1426fec) | <notextile>SI-7070 Turn restriction on companions in pkg objs into warning</notextile>
[https://github.com/scala/scala/commit/a0ee6e9](a0ee6e9) | <notextile>SI-5082 Cycle avoidance between case companions</notextile>
[https://github.com/scala/scala/commit/a53e150](a53e150) | <notextile>SI-7100 Fixed infinite recursion in duplicators</notextile>
[https://github.com/scala/scala/commit/0d68a87](0d68a87) | <notextile>SI-6113 typeOf now works for type lambdas</notextile>
[https://github.com/scala/scala/commit/b579a42](b579a42) | <notextile>SI-6888 Loosen criteria for $outer search.</notextile>
[https://github.com/scala/scala/commit/79e774f](79e774f) | <notextile>SI-7026: parseTree should never return a typed one</notextile>
[https://github.com/scala/scala/commit/f784fbf](f784fbf) | <notextile>Add a request to presentation compiler to fetch doc comment information. Refactor scaladoc base functionality to allow it to be mixed in with Global in the IDE.</notextile>
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
[https://github.com/scala/scala/commit/f3cdf14](f3cdf14) | <notextile>Fix context for type checking early initializers</notextile>
[https://github.com/scala/scala/commit/7e836f8](7e836f8) | <notextile>Analyzer Plugins</notextile>
[https://github.com/scala/scala/commit/b74c33e](b74c33e) | <notextile>SI-1803, plus documentation and cleanups in Namers, mainly in typeSig</notextile>
[https://github.com/scala/scala/commit/a06d31f](a06d31f) | <notextile>Keep annotations when computing lubs</notextile>
[https://github.com/scala/scala/commit/6697c28](6697c28) | <notextile>Allow for Function treess with refined types in UnCurry.</notextile>
[https://github.com/scala/scala/commit/59918ee](59918ee) | <notextile>case module toString is synthetic</notextile>
[https://github.com/scala/scala/commit/91c9c42](91c9c42) | <notextile>replace symbols correctly when subtyping dependent types</notextile>
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
[https://github.com/scala/scala/commit/0ceaf83](0ceaf83) | <notextile>scaladoc Template: remove duplicate code and several usages of Option.get.</notextile>
[https://github.com/scala/scala/commit/b53c35c](b53c35c) | <notextile>Implicit vars should have non-implicit setters.</notextile>
[https://github.com/scala/scala/commit/f029c3a](f029c3a) | <notextile>SI-6795 Simplify errors related to &quot;abstract override&quot; on type members</notextile>
[https://github.com/scala/scala/commit/71e42a7](71e42a7) | <notextile>SI-6795 Adds negative check for &quot;abstract override&quot; on types in traits</notextile>
[https://github.com/scala/scala/commit/5851396](5851396) | <notextile>Cleanup MemberLookup. Better explain ambiguous link targets.</notextile>
[https://github.com/scala/scala/commit/0cbefd0](0cbefd0) | <notextile>Deprecate `scala.tools.nsc.Phases` because it's dead-code.</notextile>
[https://github.com/scala/scala/commit/0a2022c](0a2022c) | <notextile>Remove dead code from `Global`.</notextile>
[https://github.com/scala/scala/commit/cab8ea4](cab8ea4) | <notextile>Expand test with a stably qualified example.</notextile>
[https://github.com/scala/scala/commit/90efa6b](90efa6b) | <notextile>SI-3995 Exclude companions with an existential prefix.</notextile>
[https://github.com/scala/scala/commit/0429f0f](0429f0f) | <notextile>cosmetic renamings in runtime reflection</notextile>
[https://github.com/scala/scala/commit/54a84a3](54a84a3) | <notextile>SI-6548 reflection now correctly enters jinners</notextile>
[https://github.com/scala/scala/commit/9ba7cf8](9ba7cf8) | <notextile>fixes incorrect handling of Annotated in lazy copier</notextile>
[https://github.com/scala/scala/commit/787e82f](787e82f) | <notextile>adds scala-reflect.jar to MIMA in ant</notextile>
[https://github.com/scala/scala/commit/bbf0eb2](bbf0eb2) | <notextile>Test showing the absence of a forward reference</notextile>
[https://github.com/scala/scala/commit/289a882](289a882) | <notextile>SI-5390 Detect forward reference of case class apply</notextile>
[https://github.com/scala/scala/commit/d29696a](d29696a) | <notextile>update mailmap</notextile>
[https://github.com/scala/scala/commit/8b7f0ac](8b7f0ac) | <notextile>SI-5361 Refactor in accordance with review comments.</notextile>
[https://github.com/scala/scala/commit/327083d](327083d) | <notextile>SI-5361 Avoid cyclic type with malformed refinement</notextile>
[https://github.com/scala/scala/commit/098e8a0](098e8a0) | <notextile>typedIdent no longer destroys attachments</notextile>
[https://github.com/scala/scala/commit/6015361](6015361) | <notextile>Expand pattern match position tests.</notextile>
[https://github.com/scala/scala/commit/286dced](286dced) | <notextile>SI-6288 Remedy ill-positioned extractor binding.</notextile>
[https://github.com/scala/scala/commit/f69b846](f69b846) | <notextile>SI-6288 Fix positioning of label jumps</notextile>
[https://github.com/scala/scala/commit/79a43d7](79a43d7) | <notextile>SI-6288 Position argument of unapply</notextile>
[https://github.com/scala/scala/commit/2621918](2621918) | <notextile>s/SuperCallArgs/SuperArgs/</notextile>
[https://github.com/scala/scala/commit/dfa4e23](dfa4e23) | <notextile>simplifies checkBounds</notextile>
[https://github.com/scala/scala/commit/a0cd0f8](a0cd0f8) | <notextile>prevents spurious kind bound errors</notextile>
[https://github.com/scala/scala/commit/24455e2](24455e2) | <notextile>Recurse into instantiations when stripping type vars.</notextile>
[https://github.com/scala/scala/commit/089173d](089173d) | <notextile>Fixes SI-6758: force LazyAnnnotationInfo for DefDef and TypeDef</notextile>
[https://github.com/scala/scala/commit/e5e6d67](e5e6d67) | <notextile>Extract base scaladoc functionality for the IDE.</notextile>
[https://github.com/scala/scala/commit/69f4e93](69f4e93) | <notextile>DRYer crash reports.</notextile>
[https://github.com/scala/scala/commit/818a2e6](818a2e6) | <notextile>SI-6555 Better parameter name retention</notextile>
[https://github.com/scala/scala/commit/c5ffa03](c5ffa03) | <notextile>Cleanups of reifyBoundTerm and reifyBoundType</notextile>
[https://github.com/scala/scala/commit/286abfc](286abfc) | <notextile>SI-5841 reification of renamed imports</notextile>
[https://github.com/scala/scala/commit/0b1ae9c](0b1ae9c) | <notextile>SI-5877 Tweak the check for package object owner.</notextile>
[https://github.com/scala/scala/commit/96e5c40](96e5c40) | <notextile>SI-5877 Support implicit classes in package objects</notextile>
[https://github.com/scala/scala/commit/65c1ae5](65c1ae5) | <notextile>Adds debug logging for synthetic registration.</notextile>
[https://github.com/scala/scala/commit/673bc70](673bc70) | <notextile>Split test case to workaround incomplete error report.</notextile>
[https://github.com/scala/scala/commit/c24400f](c24400f) | <notextile>SI-6558 Expand test case for annotation typos</notextile>
[https://github.com/scala/scala/commit/d9928d5](d9928d5) | <notextile>Fixes SI-6558: typecheck lazy annotation info using non-silent context.</notextile>
[https://github.com/scala/scala/commit/e249f2e](e249f2e) | <notextile>SI-4922 Show default in Scaladoc for generic methods.</notextile>
[https://github.com/scala/scala/commit/bd04b2c](bd04b2c) | <notextile>SI-6614 Test case for fixed ArrayStack misconduct.</notextile>
[https://github.com/scala/scala/commit/48cffd0](48cffd0) | <notextile>Share the empty LinkedList between first0/last0.</notextile>
[https://github.com/scala/scala/commit/d526f8b](d526f8b) | <notextile>SI-6690 Release reference to last dequeued element.</notextile>
[https://github.com/scala/scala/commit/5f2b7c4](5f2b7c4) | <notextile>SI-5789 Use the ReplTest framework in the test</notextile>
[https://github.com/scala/scala/commit/850128d](850128d) | <notextile>SI-5789 Checks in the right version of the test</notextile>
[https://github.com/scala/scala/commit/d699122](d699122) | <notextile>SI-5789 Removes assertion about implclass flag in Mixin.scala</notextile>
[https://github.com/scala/scala/commit/a23cc20](a23cc20) | <notextile>SI-5894 Don't emit static forwarders for macros.</notextile>
[https://github.com/scala/scala/commit/b828e32](b828e32) | <notextile>Remove some low-hanging duplication beween GenJVM / GenASM.</notextile>
[https://github.com/scala/scala/commit/8434922](8434922) | <notextile>Addtional test cases for tail calls in catches.</notextile>
[https://github.com/scala/scala/commit/31a0aa7](31a0aa7) | <notextile>SI-1672 Catches are in tail position without finally.</notextile>
[https://github.com/scala/scala/commit/e4d1d93](e4d1d93) | <notextile>Warn when generated classfiles differ only in case.</notextile>
[https://github.com/scala/scala/commit/8a1f85d](8a1f85d) | <notextile>SI-6535 Step back from the precipice of a cycle</notextile>
[https://github.com/scala/scala/commit/90c87fc](90c87fc) | <notextile>SI-6549 Improve escaping in REPL codegen.</notextile>
[https://github.com/scala/scala/commit/d99b7f4](d99b7f4) | <notextile>SI-6547: elide box unbox pair only when primitives match</notextile>
[https://github.com/scala/scala/commit/8204b19](8204b19) | <notextile>SI-5678 Bad return type for [Use Case] docs in Range</notextile>
[https://github.com/scala/scala/commit/9aa6ded](9aa6ded) | <notextile>SI-6667 Abort after any ambiguous in-scope implicit</notextile>
[https://github.com/scala/scala/commit/3719f79](3719f79) | <notextile>Refactor use of SearchFailure in implicits.</notextile>
[https://github.com/scala/scala/commit/2aa66be](2aa66be) | <notextile>SI-4664 [Make scala.util.Random Serializable] Add test case</notextile>
[https://github.com/scala/scala/commit/0b92073](0b92073) | <notextile>SI-4664 Make scala.util.Random Serializable</notextile>
[https://github.com/scala/scala/commit/089cc9f](089cc9f) | <notextile>Fix for SI-6712, bug in object lifting.</notextile>
[https://github.com/scala/scala/commit/78a081f](78a081f) | <notextile>Now the test suite runs MIMA for compatibility testing.</notextile>
[https://github.com/scala/scala/commit/bb9adfb](bb9adfb) | <notextile>more ListOfNil =&gt; Nil</notextile>
[https://github.com/scala/scala/commit/838cbe6](838cbe6) | <notextile>DummyTree =&gt; CannotHaveAttrs</notextile>
[https://github.com/scala/scala/commit/7ee299b](7ee299b) | <notextile>evicts assert(false) from the compiler</notextile>
[https://github.com/scala/scala/commit/0ebf72b](0ebf72b) | <notextile>introduces global.pendingSuperCall</notextile>
[https://github.com/scala/scala/commit/40063b0](40063b0) | <notextile>refactors handling of parent types</notextile>
[https://github.com/scala/scala/commit/85f3202](85f3202) | <notextile>unifies approaches to call analysis in TreeInfo</notextile>
[https://github.com/scala/scala/commit/d547760](d547760) | <notextile>TypeApply + Select and their type-level twins</notextile>
[https://github.com/scala/scala/commit/5546a72](5546a72) | <notextile>SI-6696 removes &quot;helper&quot; tree factory methods</notextile>
[https://github.com/scala/scala/commit/868fe64](868fe64) | <notextile>SI-6766 Makes the -Pcontinuations:enable flag a project specific preference</notextile>
[https://github.com/scala/scala/commit/a725494](a725494) | <notextile>SI-6766 Create a continuations project in eclipse</notextile>
[https://github.com/scala/scala/commit/d483ec3](d483ec3) | <notextile>Fix Scaladoc for the raw interpolator.</notextile>
[https://github.com/scala/scala/commit/7ee1145](7ee1145) | <notextile>SI-6631 Handle invalid escapes in string interpolators</notextile>
[https://github.com/scala/scala/commit/ef61bc5](ef61bc5) | <notextile>Fix typo in documentation for Seq</notextile>
[https://github.com/scala/scala/commit/5028181](5028181) | <notextile>tests for idempotency issues in the typechecker</notextile>
[https://github.com/scala/scala/commit/a694194](a694194) | <notextile>Test cases for SI-5726, SI-5733, SI-6320, SI-6551, SI-6722.</notextile>
[https://github.com/scala/scala/commit/dac1488](dac1488) | <notextile>Fix for SI-6731, dropped trees in selectDynamic.</notextile>
[https://github.com/scala/scala/commit/d55840e](d55840e) | <notextile>Asserts about Tree qualifiers.</notextile>
[https://github.com/scala/scala/commit/1be0244](1be0244) | <notextile>neg test added</notextile>
[https://github.com/scala/scala/commit/597a949](597a949) | <notextile>SI-5753 macros cannot be loaded when inherited from a class or a trait</notextile>
[https://github.com/scala/scala/commit/8fcbee5](8fcbee5) | <notextile>Take advantage of the margin stripping interpolator.</notextile>
[https://github.com/scala/scala/commit/a0001fc](a0001fc) | <notextile>Adds a margin stripping string interpolator.</notextile>
[https://github.com/scala/scala/commit/20c2a50](20c2a50) | <notextile>SI-6718 fixes a volatile test</notextile>
[https://github.com/scala/scala/commit/3177934](3177934) | <notextile>Mark pattern matcher synthetics as SYNTHETIC.</notextile>
[https://github.com/scala/scala/commit/b02e952](b02e952) | <notextile>Set symbol flags at creation.</notextile>
[https://github.com/scala/scala/commit/7f1ba06](7f1ba06) | <notextile>Fix for SI-6687, wrong isVar logic.</notextile>
[https://github.com/scala/scala/commit/555a9ba](555a9ba) | <notextile>findEntry implementation code more concise and DRYer.</notextile>
[https://github.com/scala/scala/commit/8b54ec9](8b54ec9) | <notextile>Fix for SI-6357, cycle with value classes.</notextile>
[https://github.com/scala/scala/commit/cd1bf78](cd1bf78) | <notextile>Refactoring of adaptMethod</notextile>
[https://github.com/scala/scala/commit/2aa6841](2aa6841) | <notextile>SI-6677 Insert required cast in `new qual.foo.T`</notextile>
[https://github.com/scala/scala/commit/d0de367](d0de367) | <notextile>Fix for SI-6706, Symbol breakage under GC.</notextile>
[https://github.com/scala/scala/commit/548a54d](548a54d) | <notextile>SI-6023 reify abstract vals</notextile>
[https://github.com/scala/scala/commit/1fd3a2a](1fd3a2a) | <notextile>adds comments to standard attachments</notextile>
[https://github.com/scala/scala/commit/907d6ea](907d6ea) | <notextile>SI-6673 fixes macro problems with eta expansions</notextile>
[https://github.com/scala/scala/commit/7376ad7](7376ad7) | <notextile>SI-6695 Test case for fixed Array match bug</notextile>
[https://github.com/scala/scala/commit/925c6e3](925c6e3) | <notextile>SI-6632 SI-6633 Fixes issues and data corruption in ListBuffer</notextile>
[https://github.com/scala/scala/commit/2c23acf](2c23acf) | <notextile>SI-6634 Fixes data corruption issue in ListBuffer#remove</notextile>
[https://github.com/scala/scala/commit/74ca558](74ca558) | <notextile>SI-6551: don't insert apply call in polymorphic expression.</notextile>
[https://github.com/scala/scala/commit/c656920](c656920) | <notextile>SI-6663: don't ignore type parameter on selectDynamic invocation</notextile>
[https://github.com/scala/scala/commit/af8b45f](af8b45f) | <notextile>Scaladoc update for collection.mutable.MultiMap</notextile>
[https://github.com/scala/scala/commit/db0bf8f](db0bf8f) | <notextile>Restore the opimization apparently lost after merge.</notextile>
[https://github.com/scala/scala/commit/1f0e488](1f0e488) | <notextile>Fixes SI-6150 - backport to 2.10.x branch.</notextile>
[https://github.com/scala/scala/commit/65778d7](65778d7) | <notextile>SI-5330, SI-6014 deal with existential self-type</notextile>
[https://github.com/scala/scala/commit/f8647ee](f8647ee) | <notextile>show developer guidelines on opening pull request</notextile>
[https://github.com/scala/scala/commit/2e0cbe0](2e0cbe0) | <notextile>sane printing of renamed imports</notextile>
[https://github.com/scala/scala/commit/48ee29a](48ee29a) | <notextile>Refine @compileTimeOnly</notextile>
[https://github.com/scala/scala/commit/6902da3](6902da3) | <notextile>SI-6539 Annotation for methods unfit for post-typer ASTs</notextile>
[https://github.com/scala/scala/commit/b922573](b922573) | <notextile>Fix for SI-6662, macro failing too early.</notextile>
[https://github.com/scala/scala/commit/03aa7fc](03aa7fc) | <notextile>SI-6616 Check that unsafe operations are only called on the presentation compiler thread.</notextile>
[https://github.com/scala/scala/commit/1bdd5ee](1bdd5ee) | <notextile>better error when typetagging local classes</notextile>
[https://github.com/scala/scala/commit/af3b03b](af3b03b) | <notextile>-Yshow-trees-compact respects other options</notextile>
[https://github.com/scala/scala/commit/f98e4d0](f98e4d0) | <notextile>Fix type of the custom `ClassTag` in `PatternMatching.scala`</notextile>
[https://github.com/scala/scala/commit/1e2328e](1e2328e) | <notextile>Fix for SI-6597, implicit case class crasher.</notextile>
[https://github.com/scala/scala/commit/c7c79c8](c7c79c8) | <notextile>SI-6488: Stop I/O threads prior to Process destruction</notextile>
[https://github.com/scala/scala/commit/492cbe5](492cbe5) | <notextile>Fixes SI-6559 - StringContext not using passed in escape function.</notextile>
[https://github.com/scala/scala/commit/e23f9ed](e23f9ed) | <notextile>Remove compiler phases that don't influence scaladoc generation.</notextile>
[https://github.com/scala/scala/commit/d22b74c](d22b74c) | <notextile>Scaladoc knows the package structure of the libraries, so don't include them in external documentation setting.</notextile>
[https://github.com/scala/scala/commit/ed09630](ed09630) | <notextile>Crash on missing accessor (internal bug in the lazy vals implementation) instead of trying to recover from the bug</notextile>
[https://github.com/scala/scala/commit/a3c5427](a3c5427) | <notextile>Incorporated changes suggested in code review</notextile>
[https://github.com/scala/scala/commit/a52bd2c](a52bd2c) | <notextile>Added one more test for SI-6358</notextile>
[https://github.com/scala/scala/commit/4c86dbb](4c86dbb) | <notextile>Closes SI-6358. Move accessor generation for lazy vals to typers.</notextile>
[https://github.com/scala/scala/commit/aa27396](aa27396) | <notextile>Remove unneeded calls to substring()</notextile>
[https://github.com/scala/scala/commit/08ab007](08ab007) | <notextile>Added a Swing ColorChooser wrapper</notextile>
[https://github.com/scala/scala/commit/bdff881](bdff881) | <notextile>Added a Swing PopupMenu wrapper</notextile>
[https://github.com/scala/scala/commit/c6866a2](c6866a2) | <notextile>SI-6422: add missing Fractional and Integral alias in scala package</notextile>
[https://github.com/scala/scala/commit/ad65b28](ad65b28) | <notextile>Bump version number for next dev cycle.</notextile>


      