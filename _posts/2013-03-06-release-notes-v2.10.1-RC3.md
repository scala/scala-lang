---

category: announcement
title: "Scala 2.10.1-RC3 is now available!"
---
We are pleased to announce the third release candidate of Scala 2.10.1!

The Scala team and contributors [fixed 189 issues since 2.10.0](https://issues.scala-lang.org/secure/IssueNavigator.jspa?reset=true&jqlQuery=project+%3D+SI+AND+%28fixVersion+%3D+%22Scala+2.10.1-RC1%22+OR+fixVersion+%3D+%22Scala+2.10.1-RC2%22+OR+fixVersion+%3D+%22Scala+2.10.1-RC3%22%29+AND+status+%3D+closed+ORDER+BY+priority+DESC)!
In total, [242 pull requests](https://github.com/scala/scala/issues?milestone=5&page=1&state=closed) (+ [4 for RC3](https://github.com/scala/scala/issues?milestone=14&page=1&state=closed)) were opened on [GitHub](https://github.com/scala/scala), of which [225 were merged](https://gist.github.com/adriaanm/4760366) (+ 4 for RC3) after having been [tested](https://github.com/typesafehub/ghpullrequest-validator) and reviewed.

Please give 2.10.1-RC3 a spin! It's designed to be a drop-in replacement for 2.10.0.
We'd love to hear about any regressions since 2.10.0 and will try to fix them before releasing the final version.

This RC will become the final unless new blocker issues are discovered within a week after its release.

<!--break-->

### Known Issues
Before reporting a bug, please have a look at these known issues scheduled [for 2.10.1-RC4](https://issues.scala-lang.org/secure/IssueNavigator.jspa?reset=true&jqlQuery=project+%3D+SI+AND+fixVersion+%3D+%22Scala+2.10.1-RC4%22+AND+resolution+%3D+Unresolved++ORDER+BY+priority+DESC%2C+key+DESC).

### Scala IDE for Eclipse
The Scala IDE with Scala 2.10.1-RC3 built right in is available through one of the following update-sites:

* for Eclipse 3.7 (Indigo)
* for Eclipse 3.8/4.2 (Juno) (Support for this version is experimental.)

Have a look at the [getting started guide](http://scala-ide.org/docs/user/gettingstarted.html) for more info.

### New features in the 2.10 series
As for 2.10.0, here's an overview of the most prominent new features and improvements:

* Value Classes

    * A class may now extend `AnyVal` to make it behave like a struct type (restrictions apply).

    * [https://docs.scala-lang.org/overviews/core/value-classes.html](https://docs.scala-lang.org/overviews/core/value-classes.html)
* Implicit Classes

    * The implicit modifier now also applies to class definitions to reduce the boilerplate of implicit wrappers.

    * [https://docs.scala-lang.org/sips/implicit-classes.html](https://docs.scala-lang.org/sips/implicit-classes.html)
* String Interpolation

    * `val what = "awesome"; println(s"string interpolation is ${what.toUpperCase}!")`

    * [https://docs.scala-lang.org/overviews/core/string-interpolation.html](https://docs.scala-lang.org/overviews/core/string-interpolation.html)
* Futures and Promises

    * Asynchronously get some JSON: `for (req <- WS.url(restApiUrl).get()) yield (req.json \ "users").as[List[User]]` (uses play!)

    * [https://docs.scala-lang.org/overviews/core/futures.html](https://docs.scala-lang.org/overviews/core/futures.html)
* Dynamic and applyDynamic

    * `x.foo` becomes `x.applyDynamic("foo")` if `x`'s type does not define a `foo`, but is a subtype of `Dynamic`

    * [https://docs.scala-lang.org/sips/type-dynamic.html](https://docs.scala-lang.org/sips/type-dynamic.html)
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

    * [https://docs.scala-lang.org/sips/modularizing-language-features.html](https://docs.scala-lang.org/sips/modularizing-language-features.html)
* Parallel Collections are now configurable with custom thread pools

    * [https://docs.scala-lang.org/overviews/parallel-collections/overview.html](https://docs.scala-lang.org/overviews/parallel-collections/overview.html)
* Akka Actors now part of the distribution

    * scala.actors have been deprecated and the akka implementation is now included in the distribution.
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

    * [https://docs.scala-lang.org/overviews/reflection/overview.html](https://docs.scala-lang.org/overviews/reflection/overview.html)
* Macros

    * [https://docs.scala-lang.org/overviews/macros/overview.html](https://docs.scala-lang.org/overviews/macros/overview.html)

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
[SI-5954](https://issues.scala-lang.org/browse/SI-5954), [SI-7195](https://issues.scala-lang.org/browse/SI-7195) | [09130d5](https://github.com/scala/scala/commit/09130d5) | <notextile>[nomaster] SI-7195 minor version mustn't introduce warnings</notextile>
[SI-6902](https://issues.scala-lang.org/browse/SI-6902), [SI-7183](https://issues.scala-lang.org/browse/SI-7183) | [0303e64](https://github.com/scala/scala/commit/0303e64) | <notextile>SI-7183 Disable unreachability for withFilter matches.</notextile>
[SI-7126](https://issues.scala-lang.org/browse/SI-7126), [SI-7126](https://issues.scala-lang.org/browse/SI-7126) | [204b2b4](https://github.com/scala/scala/commit/204b2b4) | <notextile>SI-7126 Eliminate a source of malformed types.</notextile>
[SI-7126](https://issues.scala-lang.org/browse/SI-7126), [SI-7126](https://issues.scala-lang.org/browse/SI-7126) | [696dcdf](https://github.com/scala/scala/commit/696dcdf) | <notextile>SI-7126 Account for the alias types that don't dealias.</notextile>
[SI-7112](https://issues.scala-lang.org/browse/SI-7112) | [1976d9f](https://github.com/scala/scala/commit/1976d9f) | <notextile>fixes the test for SI-7112</notextile>
[SI-7180](https://issues.scala-lang.org/browse/SI-7180) | [de1f749](https://github.com/scala/scala/commit/de1f749) | <notextile>SI-7180 Fix regression in implicit scope of HK type alias.</notextile>
[SI-5975](https://issues.scala-lang.org/browse/SI-5975), [SI-6576](https://issues.scala-lang.org/browse/SI-6576) | [19649d4](https://github.com/scala/scala/commit/19649d4) | <notextile>SI-6576 Workaround / diagnostic for IDE NPE.</notextile>
[SI-7146](https://issues.scala-lang.org/browse/SI-7146) | [bb067d3](https://github.com/scala/scala/commit/bb067d3) | <notextile>SI-7146 - Fixing checkinit bug in ExecutionContextImpl and adding test</notextile>
[SI-7128](https://issues.scala-lang.org/browse/SI-7128) | [348ff4b](https://github.com/scala/scala/commit/348ff4b) | <notextile>SI-7128 Fix regression in copyToArray for empty arrays</notextile>
[SI-6548](https://issues.scala-lang.org/browse/SI-6548), [SI-6548](https://issues.scala-lang.org/browse/SI-6548) | [85b63b8](https://github.com/scala/scala/commit/85b63b8) | <notextile>[nomaster] Revert &quot;SI-6548 reflection now correctly enters jinners&quot;</notextile>
[SI-4664](https://issues.scala-lang.org/browse/SI-4664), [SI-4664](https://issues.scala-lang.org/browse/SI-4664) | [8b4af71](https://github.com/scala/scala/commit/8b4af71) | <notextile>[nomaster] Revert &quot;SI-4664 Make scala.util.Random Serializable&quot;</notextile>
[SI-6521](https://issues.scala-lang.org/browse/SI-6521) | [f9550c6](https://github.com/scala/scala/commit/f9550c6) | <notextile>[nomaster] Revert &quot;Fixes SI-6521, overrides Range#head to be faster&quot;</notextile>
[SI-7082](https://issues.scala-lang.org/browse/SI-7082), [SI-7083](https://issues.scala-lang.org/browse/SI-7083), [SI-6591](https://issues.scala-lang.org/browse/SI-6591) | [09ef873](https://github.com/scala/scala/commit/09ef873) | <notextile>SI-6591 Reify and path-dependent types</notextile>
[SI-5675](https://issues.scala-lang.org/browse/SI-5675) | [e0068b9](https://github.com/scala/scala/commit/e0068b9) | <notextile>SI-5675 Discard duplicate feature warnings at a position</notextile>
[SI-7096](https://issues.scala-lang.org/browse/SI-7096) | [5258b63](https://github.com/scala/scala/commit/5258b63) | <notextile>SI-7096 SubstSymMap copies trees before modifying their symbols</notextile>
[SI-6666](https://issues.scala-lang.org/browse/SI-6666) | [81fa831](https://github.com/scala/scala/commit/81fa831) | <notextile>Class symbols can't be contravariant.</notextile>
[SI-6666](https://issues.scala-lang.org/browse/SI-6666) | [275b341](https://github.com/scala/scala/commit/275b341) | <notextile>SI-6666 Catch VerifyErrors in the making in early defs.</notextile>
[SI-6666](https://issues.scala-lang.org/browse/SI-6666) | [4c34280](https://github.com/scala/scala/commit/4c34280) | <notextile>Add a test case from the comments of SI-6666.</notextile>
[SI-6259](https://issues.scala-lang.org/browse/SI-6259), [SI-6506](https://issues.scala-lang.org/browse/SI-6506), [SI-6957](https://issues.scala-lang.org/browse/SI-6957), [SI-6666](https://issues.scala-lang.org/browse/SI-6666) | [fd61254](https://github.com/scala/scala/commit/fd61254) | <notextile>SI-6666 Account for nesting in setting INCONSTRUCTOR</notextile>
[SI-6478](https://issues.scala-lang.org/browse/SI-6478) | [6052e19](https://github.com/scala/scala/commit/6052e19) | <notextile>[backport] SI-6478 Fixing JavaTokenParser ident</notextile>
[SI-7071](https://issues.scala-lang.org/browse/SI-7071), [SI-7072](https://issues.scala-lang.org/browse/SI-7072) | [b43ae58](https://github.com/scala/scala/commit/b43ae58) | <notextile>introduces an exhaustive java-to-scala test</notextile>
[SI-6989](https://issues.scala-lang.org/browse/SI-6989) | [02ed5fb](https://github.com/scala/scala/commit/02ed5fb) | <notextile>SI-6989 privateWithin is now populated in reflect</notextile>
[SI-5824](https://issues.scala-lang.org/browse/SI-5824) | [96b0eff](https://github.com/scala/scala/commit/96b0eff) | <notextile>SI-5824 Fix crashes in reify with _*</notextile>
[SI-5374](https://issues.scala-lang.org/browse/SI-5374), [SI-6961](https://issues.scala-lang.org/browse/SI-6961) | [fa3b804](https://github.com/scala/scala/commit/fa3b804) | <notextile>SI-6961 no structural sharing in list serialization</notextile>
[SI-6187](https://issues.scala-lang.org/browse/SI-6187) | [dfbaaa1](https://github.com/scala/scala/commit/dfbaaa1) | <notextile>SI-6187 Make partial functions re-typable</notextile>
[SI-6146](https://issues.scala-lang.org/browse/SI-6146) | [55c9b9c](https://github.com/scala/scala/commit/55c9b9c) | <notextile>SI-6146 More accurate prefixes for sealed subtypes.</notextile>
[SI-5954](https://issues.scala-lang.org/browse/SI-5954), [SI-7070](https://issues.scala-lang.org/browse/SI-7070) | [1426fec](https://github.com/scala/scala/commit/1426fec) | <notextile>SI-7070 Turn restriction on companions in pkg objs into warning</notextile>
[SI-5082](https://issues.scala-lang.org/browse/SI-5082) | [a0ee6e9](https://github.com/scala/scala/commit/a0ee6e9) | <notextile>SI-5082 Cycle avoidance between case companions</notextile>
[SI-7100](https://issues.scala-lang.org/browse/SI-7100) | [a53e150](https://github.com/scala/scala/commit/a53e150) | <notextile>SI-7100 Fixed infinite recursion in duplicators</notextile>
[SI-6113](https://issues.scala-lang.org/browse/SI-6113) | [0d68a87](https://github.com/scala/scala/commit/0d68a87) | <notextile>SI-6113 typeOf now works for type lambdas</notextile>
[SI-2806](https://issues.scala-lang.org/browse/SI-2806), [SI-6888](https://issues.scala-lang.org/browse/SI-6888) | [b579a42](https://github.com/scala/scala/commit/b579a42) | <notextile>SI-6888 Loosen criteria for $outer search.</notextile>
[SI-7026](https://issues.scala-lang.org/browse/SI-7026), [SI-7026](https://issues.scala-lang.org/browse/SI-7026) | [79e774f](https://github.com/scala/scala/commit/79e774f) | <notextile>SI-7026: parseTree should never return a typed one</notextile>
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
[SI-5543](https://issues.scala-lang.org/browse/SI-5543), [SI-1803](https://issues.scala-lang.org/browse/SI-1803) | [b74c33e](https://github.com/scala/scala/commit/b74c33e) | <notextile>SI-1803, plus documentation and cleanups in Namers, mainly in typeSig</notextile>
[SI-6482](https://issues.scala-lang.org/browse/SI-6482), [SI-7022](https://issues.scala-lang.org/browse/SI-7022) | [374c912](https://github.com/scala/scala/commit/374c912) | <notextile>SI-7022 Additional test case for value class w. bounds</notextile>
[SI-6482](https://issues.scala-lang.org/browse/SI-6482), [SI-6482](https://issues.scala-lang.org/browse/SI-6482) | [4ed8836](https://github.com/scala/scala/commit/4ed8836) | <notextile>[backport] SI-6482, lost bounds in extension methods.</notextile>
[SI-6941](https://issues.scala-lang.org/browse/SI-6941) | [b2117cf](https://github.com/scala/scala/commit/b2117cf) | <notextile>SI-6941 tests</notextile>
[SI-6686](https://issues.scala-lang.org/browse/SI-6686) | [b92396b](https://github.com/scala/scala/commit/b92396b) | <notextile>SI-6686 drop valdef unused in flatMapCond's block</notextile>
[SI-5158](https://issues.scala-lang.org/browse/SI-5158), [SI-6941](https://issues.scala-lang.org/browse/SI-6941) | [494ba94](https://github.com/scala/scala/commit/494ba94) | <notextile>don't store subpats bound to underscore</notextile>
[SI-4976](https://issues.scala-lang.org/browse/SI-4976) | [d71f59e](https://github.com/scala/scala/commit/d71f59e) | <notextile>SI-4976 Scaladoc: Add a source link to package objects</notextile>
[SI-7029](https://issues.scala-lang.org/browse/SI-7029) | [5275bae](https://github.com/scala/scala/commit/5275bae) | <notextile>SI-7029 - Make test more robust</notextile>
[SI-7029](https://issues.scala-lang.org/browse/SI-7029) | [3f78bee](https://github.com/scala/scala/commit/3f78bee) | <notextile>SI-7029 - Makes sure that uncaught exceptions are propagated to the UEH for the global ExecutionContext</notextile>
[SI-6539](https://issues.scala-lang.org/browse/SI-6539) | [2989258](https://github.com/scala/scala/commit/2989258) | <notextile>SI-6539 moves @compileTimeOnly away from scala-reflect</notextile>
[SI-6812](https://issues.scala-lang.org/browse/SI-6812) | [941c569](https://github.com/scala/scala/commit/941c569) | <notextile>SI-6812 scaladoc can opt out of expanding macros</notextile>
[SI-6206](https://issues.scala-lang.org/browse/SI-6206), [SI-6206](https://issues.scala-lang.org/browse/SI-6206) | [11ac963c](https://github.com/scala/scala/commit/11ac963c) | <notextile>[backport] Fix for SI-6206, inconsistency with apply.</notextile>
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
[SI-6795](https://issues.scala-lang.org/browse/SI-6795) | [f029c3a](https://github.com/scala/scala/commit/f029c3a) | <notextile>SI-6795 Simplify errors related to &quot;abstract override&quot; on type members</notextile>
[SI-6795](https://issues.scala-lang.org/browse/SI-6795) | [71e42a7](https://github.com/scala/scala/commit/71e42a7) | <notextile>SI-6795 Adds negative check for &quot;abstract override&quot; on types in traits</notextile>
[SI-3995](https://issues.scala-lang.org/browse/SI-3995) | [cab8ea4](https://github.com/scala/scala/commit/cab8ea4) | <notextile>Expand test with a stably qualified example.</notextile>
[SI-3995](https://issues.scala-lang.org/browse/SI-3995) | [90efa6b](https://github.com/scala/scala/commit/90efa6b) | <notextile>SI-3995 Exclude companions with an existential prefix.</notextile>
[SI-6548](https://issues.scala-lang.org/browse/SI-6548) | [54a84a3](https://github.com/scala/scala/commit/54a84a3) | <notextile>SI-6548 reflection now correctly enters jinners</notextile>
[SI-5390](https://issues.scala-lang.org/browse/SI-5390) | [289a882](https://github.com/scala/scala/commit/289a882) | <notextile>SI-5390 Detect forward reference of case class apply</notextile>
[SI-5361](https://issues.scala-lang.org/browse/SI-5361) | [8b7f0ac](https://github.com/scala/scala/commit/8b7f0ac) | <notextile>SI-5361 Refactor in accordance with review comments.</notextile>
[SI-3614](https://issues.scala-lang.org/browse/SI-3614), [SI-5361](https://issues.scala-lang.org/browse/SI-5361) | [327083d](https://github.com/scala/scala/commit/327083d) | <notextile>SI-5361 Avoid cyclic type with malformed refinement</notextile>
[SI-6288](https://issues.scala-lang.org/browse/SI-6288) | [286dced](https://github.com/scala/scala/commit/286dced) | <notextile>SI-6288 Remedy ill-positioned extractor binding.</notextile>
[SI-6288](https://issues.scala-lang.org/browse/SI-6288) | [f69b846](https://github.com/scala/scala/commit/f69b846) | <notextile>SI-6288 Fix positioning of label jumps</notextile>
[SI-6288](https://issues.scala-lang.org/browse/SI-6288) | [79a43d7](https://github.com/scala/scala/commit/79a43d7) | <notextile>SI-6288 Position argument of unapply</notextile>
[SI-6758](https://issues.scala-lang.org/browse/SI-6758) | [089173d](https://github.com/scala/scala/commit/089173d) | <notextile>Fixes SI-6758: force LazyAnnnotationInfo for DefDef and TypeDef</notextile>
[SI-6555](https://issues.scala-lang.org/browse/SI-6555) | [818a2e6](https://github.com/scala/scala/commit/818a2e6) | <notextile>SI-6555 Better parameter name retention</notextile>
[SI-5841](https://issues.scala-lang.org/browse/SI-5841) | [286abfc](https://github.com/scala/scala/commit/286abfc) | <notextile>SI-5841 reification of renamed imports</notextile>
[SI-5877](https://issues.scala-lang.org/browse/SI-5877) | [0b1ae9c](https://github.com/scala/scala/commit/0b1ae9c) | <notextile>SI-5877 Tweak the check for package object owner.</notextile>
[SI-5877](https://issues.scala-lang.org/browse/SI-5877) | [96e5c40](https://github.com/scala/scala/commit/96e5c40) | <notextile>SI-5877 Support implicit classes in package objects</notextile>
[SI-5877](https://issues.scala-lang.org/browse/SI-5877) | [65c1ae5](https://github.com/scala/scala/commit/65c1ae5) | <notextile>Adds debug logging for synthetic registration.</notextile>
[SI-6758](https://issues.scala-lang.org/browse/SI-6758) | [673bc70](https://github.com/scala/scala/commit/673bc70) | <notextile>Split test case to workaround incomplete error report.</notextile>
[SI-6558](https://issues.scala-lang.org/browse/SI-6558) | [c24400f](https://github.com/scala/scala/commit/c24400f) | <notextile>SI-6558 Expand test case for annotation typos</notextile>
[SI-6558](https://issues.scala-lang.org/browse/SI-6558) | [d9928d5](https://github.com/scala/scala/commit/d9928d5) | <notextile>Fixes SI-6558: typecheck lazy annotation info using non-silent context.</notextile>
[SI-4922](https://issues.scala-lang.org/browse/SI-4922) | [e249f2e](https://github.com/scala/scala/commit/e249f2e) | <notextile>SI-4922 Show default in Scaladoc for generic methods.</notextile>
[SI-6614](https://issues.scala-lang.org/browse/SI-6614) | [bd04b2c](https://github.com/scala/scala/commit/bd04b2c) | <notextile>SI-6614 Test case for fixed ArrayStack misconduct.</notextile>
[SI-6690](https://issues.scala-lang.org/browse/SI-6690) | [d526f8b](https://github.com/scala/scala/commit/d526f8b) | <notextile>SI-6690 Release reference to last dequeued element.</notextile>
[SI-5789](https://issues.scala-lang.org/browse/SI-5789) | [5f2b7c4](https://github.com/scala/scala/commit/5f2b7c4) | <notextile>SI-5789 Use the ReplTest framework in the test</notextile>
[SI-5789](https://issues.scala-lang.org/browse/SI-5789) | [850128d](https://github.com/scala/scala/commit/850128d) | <notextile>SI-5789 Checks in the right version of the test</notextile>
[SI-6782](https://issues.scala-lang.org/browse/SI-6782), [SI-5789](https://issues.scala-lang.org/browse/SI-5789) | [d699122](https://github.com/scala/scala/commit/d699122) | <notextile>SI-5789 Removes assertion about implclass flag in Mixin.scala</notextile>
[SI-5894](https://issues.scala-lang.org/browse/SI-5894) | [a23cc20](https://github.com/scala/scala/commit/a23cc20) | <notextile>SI-5894 Don't emit static forwarders for macros.</notextile>
[SI-5894](https://issues.scala-lang.org/browse/SI-5894) | [b828e32](https://github.com/scala/scala/commit/b828e32) | <notextile>Remove some low-hanging duplication beween GenJVM / GenASM.</notextile>
[SI-1672](https://issues.scala-lang.org/browse/SI-1672) | [31a0aa7](https://github.com/scala/scala/commit/31a0aa7) | <notextile>SI-1672 Catches are in tail position without finally.</notextile>
[SI-6535](https://issues.scala-lang.org/browse/SI-6535) | [8a1f85d](https://github.com/scala/scala/commit/8a1f85d) | <notextile>SI-6535 Step back from the precipice of a cycle</notextile>
[SI-6549](https://issues.scala-lang.org/browse/SI-6549) | [90c87fc](https://github.com/scala/scala/commit/90c87fc) | <notextile>SI-6549 Improve escaping in REPL codegen.</notextile>
[SI-6547](https://issues.scala-lang.org/browse/SI-6547) | [d99b7f4](https://github.com/scala/scala/commit/d99b7f4) | <notextile>SI-6547: elide box unbox pair only when primitives match</notextile>
[SI-5678](https://issues.scala-lang.org/browse/SI-5678) | [8204b19](https://github.com/scala/scala/commit/8204b19) | <notextile>SI-5678 Bad return type for [Use Case] docs in Range</notextile>
[SI-6667](https://issues.scala-lang.org/browse/SI-6667) | [9aa6ded](https://github.com/scala/scala/commit/9aa6ded) | <notextile>SI-6667 Abort after any ambiguous in-scope implicit</notextile>
[SI-6667](https://issues.scala-lang.org/browse/SI-6667) | [3719f79](https://github.com/scala/scala/commit/3719f79) | <notextile>Refactor use of SearchFailure in implicits.</notextile>
[SI-4664](https://issues.scala-lang.org/browse/SI-4664) | [2aa66be](https://github.com/scala/scala/commit/2aa66be) | <notextile>SI-4664 [Make scala.util.Random Serializable] Add test case</notextile>
[SI-4664](https://issues.scala-lang.org/browse/SI-4664) | [0b92073](https://github.com/scala/scala/commit/0b92073) | <notextile>SI-4664 Make scala.util.Random Serializable</notextile>
[SI-6712](https://issues.scala-lang.org/browse/SI-6712) | [089cc9f](https://github.com/scala/scala/commit/089cc9f) | <notextile>Fix for SI-6712, bug in object lifting.</notextile>
[SI-6696](https://issues.scala-lang.org/browse/SI-6696), [SI-6696](https://issues.scala-lang.org/browse/SI-6696) | [5546a72](https://github.com/scala/scala/commit/5546a72) | <notextile>SI-6696 removes &quot;helper&quot; tree factory methods</notextile>
[SI-6766](https://issues.scala-lang.org/browse/SI-6766) | [868fe64](https://github.com/scala/scala/commit/868fe64) | <notextile>SI-6766 Makes the -Pcontinuations:enable flag a project specific preference</notextile>
[SI-6766](https://issues.scala-lang.org/browse/SI-6766) | [a725494](https://github.com/scala/scala/commit/a725494) | <notextile>SI-6766 Create a continuations project in eclipse</notextile>
[SI-6631](https://issues.scala-lang.org/browse/SI-6631) | [7ee1145](https://github.com/scala/scala/commit/7ee1145) | <notextile>SI-6631 Handle invalid escapes in string interpolators</notextile>
[SI-5464](https://issues.scala-lang.org/browse/SI-5464) | [5028181](https://github.com/scala/scala/commit/5028181) | <notextile>tests for idempotency issues in the typechecker</notextile>
[SI-6663](https://issues.scala-lang.org/browse/SI-6663), [SI-5726](https://issues.scala-lang.org/browse/SI-5726), [SI-5733](https://issues.scala-lang.org/browse/SI-5733), [SI-6320](https://issues.scala-lang.org/browse/SI-6320), [SI-6551](https://issues.scala-lang.org/browse/SI-6551), [SI-6722](https://issues.scala-lang.org/browse/SI-6722) | [a694194](https://github.com/scala/scala/commit/a694194) | <notextile>Test cases for SI-5726, SI-5733, SI-6320, SI-6551, SI-6722.</notextile>
[SI-6731](https://issues.scala-lang.org/browse/SI-6731) | [dac1488](https://github.com/scala/scala/commit/dac1488) | <notextile>Fix for SI-6731, dropped trees in selectDynamic.</notextile>
[SI-5753](https://issues.scala-lang.org/browse/SI-5753) | [597a949](https://github.com/scala/scala/commit/597a949) | <notextile>SI-5753 macros cannot be loaded when inherited from a class or a trait</notextile>
[SI-6718](https://issues.scala-lang.org/browse/SI-6718) | [20c2a50](https://github.com/scala/scala/commit/20c2a50) | <notextile>SI-6718 fixes a volatile test</notextile>
[SI-6687](https://issues.scala-lang.org/browse/SI-6687) | [7f1ba06](https://github.com/scala/scala/commit/7f1ba06) | <notextile>Fix for SI-6687, wrong isVar logic.</notextile>
[SI-6357](https://issues.scala-lang.org/browse/SI-6357) | [8b54ec9](https://github.com/scala/scala/commit/8b54ec9) | <notextile>Fix for SI-6357, cycle with value classes.</notextile>
[SI-6677](https://issues.scala-lang.org/browse/SI-6677) | [2aa6841](https://github.com/scala/scala/commit/2aa6841) | <notextile>SI-6677 Insert required cast in `new qual.foo.T`</notextile>
[SI-6706](https://issues.scala-lang.org/browse/SI-6706) | [d0de367](https://github.com/scala/scala/commit/d0de367) | <notextile>Fix for SI-6706, Symbol breakage under GC.</notextile>
[SI-6023](https://issues.scala-lang.org/browse/SI-6023) | [548a54d](https://github.com/scala/scala/commit/548a54d) | <notextile>SI-6023 reify abstract vals</notextile>
[SI-6673](https://issues.scala-lang.org/browse/SI-6673), [SI-6673](https://issues.scala-lang.org/browse/SI-6673) | [907d6ea](https://github.com/scala/scala/commit/907d6ea) | <notextile>SI-6673 fixes macro problems with eta expansions</notextile>
[SI-6695](https://issues.scala-lang.org/browse/SI-6695) | [7376ad7](https://github.com/scala/scala/commit/7376ad7) | <notextile>SI-6695 Test case for fixed Array match bug</notextile>
[SI-6632](https://issues.scala-lang.org/browse/SI-6632), [SI-6633](https://issues.scala-lang.org/browse/SI-6633) | [925c6e3](https://github.com/scala/scala/commit/925c6e3) | <notextile>SI-6632 SI-6633 Fixes issues and data corruption in ListBuffer</notextile>
[SI-6634](https://issues.scala-lang.org/browse/SI-6634) | [2c23acf](https://github.com/scala/scala/commit/2c23acf) | <notextile>SI-6634 Fixes data corruption issue in ListBuffer#remove</notextile>
[SI-6551](https://issues.scala-lang.org/browse/SI-6551) | [74ca558](https://github.com/scala/scala/commit/74ca558) | <notextile>SI-6551: don't insert apply call in polymorphic expression.</notextile>
[SI-6663](https://issues.scala-lang.org/browse/SI-6663) | [c656920](https://github.com/scala/scala/commit/c656920) | <notextile>SI-6663: don't ignore type parameter on selectDynamic invocation</notextile>
[SI-6150](https://issues.scala-lang.org/browse/SI-6150) | [1f0e488](https://github.com/scala/scala/commit/1f0e488) | <notextile>Fixes SI-6150 - backport to 2.10.x branch.</notextile>
[SI-5330](https://issues.scala-lang.org/browse/SI-5330), [SI-6014](https://issues.scala-lang.org/browse/SI-6014) | [65778d7](https://github.com/scala/scala/commit/65778d7) | <notextile>SI-5330, SI-6014 deal with existential self-type</notextile>
[SI-6539](https://issues.scala-lang.org/browse/SI-6539) | [6902da3](https://github.com/scala/scala/commit/6902da3) | <notextile>SI-6539 Annotation for methods unfit for post-typer ASTs</notextile>
[SI-6662](https://issues.scala-lang.org/browse/SI-6662) | [b922573](https://github.com/scala/scala/commit/b922573) | <notextile>Fix for SI-6662, macro failing too early.</notextile>
[SI-6616](https://issues.scala-lang.org/browse/SI-6616) | [03aa7fc](https://github.com/scala/scala/commit/03aa7fc) | <notextile>SI-6616 Check that unsafe operations are only called on the presentation compiler thread.</notextile>
[SI-6649](https://issues.scala-lang.org/browse/SI-6649) | [1bdd5ee](https://github.com/scala/scala/commit/1bdd5ee) | <notextile>better error when typetagging local classes</notextile>
[SI-6597](https://issues.scala-lang.org/browse/SI-6597) | [1e2328e](https://github.com/scala/scala/commit/1e2328e) | <notextile>Fix for SI-6597, implicit case class crasher.</notextile>
[SI-6488](https://issues.scala-lang.org/browse/SI-6488) | [c7c79c8](https://github.com/scala/scala/commit/c7c79c8) | <notextile>SI-6488: Stop I/O threads prior to Process destruction</notextile>
[SI-6559](https://issues.scala-lang.org/browse/SI-6559) | [492cbe5](https://github.com/scala/scala/commit/492cbe5) | <notextile>Fixes SI-6559 - StringContext not using passed in escape function.</notextile>
[SI-6358](https://issues.scala-lang.org/browse/SI-6358) | [a52bd2c](https://github.com/scala/scala/commit/a52bd2c) | <notextile>Added one more test for SI-6358</notextile>
[SI-6358](https://issues.scala-lang.org/browse/SI-6358) | [4c86dbb](https://github.com/scala/scala/commit/4c86dbb) | <notextile>Closes SI-6358. Move accessor generation for lazy vals to typers.</notextile>
[SI-6422](https://issues.scala-lang.org/browse/SI-6422) | [c6866a2](https://github.com/scala/scala/commit/c6866a2) | <notextile>SI-6422: add missing Fractional and Integral alias in scala package</notextile>




#### Complete commit list!

sha | Title
---: | ---
[b775d8f](https://github.com/scala/scala/commit/b775d8f) | <notextile>test.done again checks bin compat (using mima 0.1.5)</notextile>
[09130d5](https://github.com/scala/scala/commit/09130d5) | <notextile>[nomaster] SI-7195 minor version mustn't introduce warnings</notextile>
[0303e64](https://github.com/scala/scala/commit/0303e64) | <notextile>SI-7183 Disable unreachability for withFilter matches.</notextile>
[204b2b4](https://github.com/scala/scala/commit/204b2b4) | <notextile>SI-7126 Eliminate a source of malformed types.</notextile>
[696dcdf](https://github.com/scala/scala/commit/696dcdf) | <notextile>SI-7126 Account for the alias types that don't dealias.</notextile>
[1976d9f](https://github.com/scala/scala/commit/1976d9f) | <notextile>fixes the test for SI-7112</notextile>
[de1f749](https://github.com/scala/scala/commit/de1f749) | <notextile>SI-7180 Fix regression in implicit scope of HK type alias.</notextile>
[26be206](https://github.com/scala/scala/commit/26be206) | <notextile>Additional test case for Lukas' fix to annotated originals.</notextile>
[dafebd0](https://github.com/scala/scala/commit/dafebd0) | <notextile>Fix typing idempotency bug with Annotated trees</notextile>
[19649d4](https://github.com/scala/scala/commit/19649d4) | <notextile>SI-6576 Workaround / diagnostic for IDE NPE.</notextile>
[bb067d3](https://github.com/scala/scala/commit/bb067d3) | <notextile>SI-7146 - Fixing checkinit bug in ExecutionContextImpl and adding test</notextile>
[348ff4b](https://github.com/scala/scala/commit/348ff4b) | <notextile>SI-7128 Fix regression in copyToArray for empty arrays</notextile>
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
[13caa49](https://github.com/scala/scala/commit/13caa49) | <notextile>Fix for paramaccessor alias regression.</notextile>
[22341e7](https://github.com/scala/scala/commit/22341e7) | <notextile>Expanded bytecode testing code.</notextile>
[57c0e63](https://github.com/scala/scala/commit/57c0e63) | <notextile>accommodates pull request feedback</notextile>
[ce867c7](https://github.com/scala/scala/commit/ce867c7) | <notextile>term and type reftrees are now reified uniformly</notextile>
[09ef873](https://github.com/scala/scala/commit/09ef873) | <notextile>SI-6591 Reify and path-dependent types</notextile>
[e0068b9](https://github.com/scala/scala/commit/e0068b9) | <notextile>SI-5675 Discard duplicate feature warnings at a position</notextile>
[5258b63](https://github.com/scala/scala/commit/5258b63) | <notextile>SI-7096 SubstSymMap copies trees before modifying their symbols</notextile>
[81fa831](https://github.com/scala/scala/commit/81fa831) | <notextile>Class symbols can't be contravariant.</notextile>
[275b341](https://github.com/scala/scala/commit/275b341) | <notextile>SI-6666 Catch VerifyErrors in the making in early defs.</notextile>
[66fa1f2](https://github.com/scala/scala/commit/66fa1f2) | <notextile>Broader checks for poisonous this references.</notextile>
[4c34280](https://github.com/scala/scala/commit/4c34280) | <notextile>Add a test case from the comments of SI-6666.</notextile>
[fd61254](https://github.com/scala/scala/commit/fd61254) | <notextile>SI-6666 Account for nesting in setting INCONSTRUCTOR</notextile>
[ee24807](https://github.com/scala/scala/commit/ee24807) | <notextile>Move a test from pos to run to highlight bytecode deficiencies.</notextile>
[6052e19](https://github.com/scala/scala/commit/6052e19) | <notextile>[backport] SI-6478 Fixing JavaTokenParser ident</notextile>
[b43ae58](https://github.com/scala/scala/commit/b43ae58) | <notextile>introduces an exhaustive java-to-scala test</notextile>
[02ed5fb](https://github.com/scala/scala/commit/02ed5fb) | <notextile>SI-6989 privateWithin is now populated in reflect</notextile>
[96b0eff](https://github.com/scala/scala/commit/96b0eff) | <notextile>SI-5824 Fix crashes in reify with _*</notextile>
[fa3b804](https://github.com/scala/scala/commit/fa3b804) | <notextile>SI-6961 no structural sharing in list serialization</notextile>
[dfbaaa1](https://github.com/scala/scala/commit/dfbaaa1) | <notextile>SI-6187 Make partial functions re-typable</notextile>
[55c9b9c](https://github.com/scala/scala/commit/55c9b9c) | <notextile>SI-6146 More accurate prefixes for sealed subtypes.</notextile>
[1426fec](https://github.com/scala/scala/commit/1426fec) | <notextile>SI-7070 Turn restriction on companions in pkg objs into warning</notextile>
[a0ee6e9](https://github.com/scala/scala/commit/a0ee6e9) | <notextile>SI-5082 Cycle avoidance between case companions</notextile>
[a53e150](https://github.com/scala/scala/commit/a53e150) | <notextile>SI-7100 Fixed infinite recursion in duplicators</notextile>
[0d68a87](https://github.com/scala/scala/commit/0d68a87) | <notextile>SI-6113 typeOf now works for type lambdas</notextile>
[b579a42](https://github.com/scala/scala/commit/b579a42) | <notextile>SI-6888 Loosen criteria for $outer search.</notextile>
[79e774f](https://github.com/scala/scala/commit/79e774f) | <notextile>SI-7026: parseTree should never return a typed one</notextile>
[f784fbf](https://github.com/scala/scala/commit/f784fbf) | <notextile>Add a request to presentation compiler to fetch doc comment information. Refactor scaladoc base functionality to allow it to be mixed in with Global in the IDE.</notextile>
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
[f3cdf14](https://github.com/scala/scala/commit/f3cdf14) | <notextile>Fix context for type checking early initializers</notextile>
[7e836f8](https://github.com/scala/scala/commit/7e836f8) | <notextile>Analyzer Plugins</notextile>
[b74c33e](https://github.com/scala/scala/commit/b74c33e) | <notextile>SI-1803, plus documentation and cleanups in Namers, mainly in typeSig</notextile>
[a06d31f](https://github.com/scala/scala/commit/a06d31f) | <notextile>Keep annotations when computing lubs</notextile>
[6697c28](https://github.com/scala/scala/commit/6697c28) | <notextile>Allow for Function treess with refined types in UnCurry.</notextile>
[59918ee](https://github.com/scala/scala/commit/59918ee) | <notextile>case module toString is synthetic</notextile>
[91c9c42](https://github.com/scala/scala/commit/91c9c42) | <notextile>replace symbols correctly when subtyping dependent types</notextile>
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
[941c569](https://github.com/scala/scala/commit/941c569) | <notextile>SI-6812 scaladoc can opt out of expanding macros</notextile>
[11ac963c](https://github.com/scala/scala/commit/11ac963c) | <notextile>[backport] Fix for SI-6206, inconsistency with apply.</notextile>
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
[0ceaf83](https://github.com/scala/scala/commit/0ceaf83) | <notextile>scaladoc Template: remove duplicate code and several usages of Option.get.</notextile>
[b53c35c](https://github.com/scala/scala/commit/b53c35c) | <notextile>Implicit vars should have non-implicit setters.</notextile>
[f029c3a](https://github.com/scala/scala/commit/f029c3a) | <notextile>SI-6795 Simplify errors related to &quot;abstract override&quot; on type members</notextile>
[71e42a7](https://github.com/scala/scala/commit/71e42a7) | <notextile>SI-6795 Adds negative check for &quot;abstract override&quot; on types in traits</notextile>
[5851396](https://github.com/scala/scala/commit/5851396) | <notextile>Cleanup MemberLookup. Better explain ambiguous link targets.</notextile>
[0cbefd0](https://github.com/scala/scala/commit/0cbefd0) | <notextile>Deprecate `scala.tools.nsc.Phases` because it's dead-code.</notextile>
[0a2022c](https://github.com/scala/scala/commit/0a2022c) | <notextile>Remove dead code from `Global`.</notextile>
[cab8ea4](https://github.com/scala/scala/commit/cab8ea4) | <notextile>Expand test with a stably qualified example.</notextile>
[90efa6b](https://github.com/scala/scala/commit/90efa6b) | <notextile>SI-3995 Exclude companions with an existential prefix.</notextile>
[0429f0f](https://github.com/scala/scala/commit/0429f0f) | <notextile>cosmetic renamings in runtime reflection</notextile>
[54a84a3](https://github.com/scala/scala/commit/54a84a3) | <notextile>SI-6548 reflection now correctly enters jinners</notextile>
[9ba7cf8](https://github.com/scala/scala/commit/9ba7cf8) | <notextile>fixes incorrect handling of Annotated in lazy copier</notextile>
[787e82f](https://github.com/scala/scala/commit/787e82f) | <notextile>adds scala-reflect.jar to MIMA in ant</notextile>
[bbf0eb2](https://github.com/scala/scala/commit/bbf0eb2) | <notextile>Test showing the absence of a forward reference</notextile>
[289a882](https://github.com/scala/scala/commit/289a882) | <notextile>SI-5390 Detect forward reference of case class apply</notextile>
[d29696a](https://github.com/scala/scala/commit/d29696a) | <notextile>update mailmap</notextile>
[8b7f0ac](https://github.com/scala/scala/commit/8b7f0ac) | <notextile>SI-5361 Refactor in accordance with review comments.</notextile>
[327083d](https://github.com/scala/scala/commit/327083d) | <notextile>SI-5361 Avoid cyclic type with malformed refinement</notextile>
[098e8a0](https://github.com/scala/scala/commit/098e8a0) | <notextile>typedIdent no longer destroys attachments</notextile>
[6015361](https://github.com/scala/scala/commit/6015361) | <notextile>Expand pattern match position tests.</notextile>
[286dced](https://github.com/scala/scala/commit/286dced) | <notextile>SI-6288 Remedy ill-positioned extractor binding.</notextile>
[f69b846](https://github.com/scala/scala/commit/f69b846) | <notextile>SI-6288 Fix positioning of label jumps</notextile>
[79a43d7](https://github.com/scala/scala/commit/79a43d7) | <notextile>SI-6288 Position argument of unapply</notextile>
[2621918](https://github.com/scala/scala/commit/2621918) | <notextile>s/SuperCallArgs/SuperArgs/</notextile>
[dfa4e23](https://github.com/scala/scala/commit/dfa4e23) | <notextile>simplifies checkBounds</notextile>
[a0cd0f8](https://github.com/scala/scala/commit/a0cd0f81be) | <notextile>prevents spurious kind bound errors</notextile>
[24455e2](https://github.com/scala/scala/commit/24455e2) | <notextile>Recurse into instantiations when stripping type vars.</notextile>
[089173d](https://github.com/scala/scala/commit/089173d) | <notextile>Fixes SI-6758: force LazyAnnnotationInfo for DefDef and TypeDef</notextile>
[e5e6d67](https://github.com/scala/scala/commit/e5e6d67) | <notextile>Extract base scaladoc functionality for the IDE.</notextile>
[69f4e93](https://github.com/scala/scala/commit/69f4e93) | <notextile>DRYer crash reports.</notextile>
[818a2e6](https://github.com/scala/scala/commit/818a2e6) | <notextile>SI-6555 Better parameter name retention</notextile>
[c5ffa03](https://github.com/scala/scala/commit/c5ffa03) | <notextile>Cleanups of reifyBoundTerm and reifyBoundType</notextile>
[286abfc](https://github.com/scala/scala/commit/286abfc) | <notextile>SI-5841 reification of renamed imports</notextile>
[0b1ae9c](https://github.com/scala/scala/commit/0b1ae9c) | <notextile>SI-5877 Tweak the check for package object owner.</notextile>
[96e5c40](https://github.com/scala/scala/commit/96e5c40) | <notextile>SI-5877 Support implicit classes in package objects</notextile>
[65c1ae5](https://github.com/scala/scala/commit/65c1ae5) | <notextile>Adds debug logging for synthetic registration.</notextile>
[673bc70](https://github.com/scala/scala/commit/673bc70) | <notextile>Split test case to workaround incomplete error report.</notextile>
[c24400f](https://github.com/scala/scala/commit/c24400f) | <notextile>SI-6558 Expand test case for annotation typos</notextile>
[d9928d5](https://github.com/scala/scala/commit/d9928d5) | <notextile>Fixes SI-6558: typecheck lazy annotation info using non-silent context.</notextile>
[e249f2e](https://github.com/scala/scala/commit/e249f2e) | <notextile>SI-4922 Show default in Scaladoc for generic methods.</notextile>
[bd04b2c](https://github.com/scala/scala/commit/bd04b2c) | <notextile>SI-6614 Test case for fixed ArrayStack misconduct.</notextile>
[48cffd0](https://github.com/scala/scala/commit/48cffd0) | <notextile>Share the empty LinkedList between first0/last0.</notextile>
[d526f8b](https://github.com/scala/scala/commit/d526f8b) | <notextile>SI-6690 Release reference to last dequeued element.</notextile>
[5f2b7c4](https://github.com/scala/scala/commit/5f2b7c4) | <notextile>SI-5789 Use the ReplTest framework in the test</notextile>
[850128d](https://github.com/scala/scala/commit/850128d) | <notextile>SI-5789 Checks in the right version of the test</notextile>
[d699122](https://github.com/scala/scala/commit/d699122) | <notextile>SI-5789 Removes assertion about implclass flag in Mixin.scala</notextile>
[a23cc20](https://github.com/scala/scala/commit/a23cc20) | <notextile>SI-5894 Don't emit static forwarders for macros.</notextile>
[b828e32](https://github.com/scala/scala/commit/b828e32) | <notextile>Remove some low-hanging duplication beween GenJVM / GenASM.</notextile>
[8434922](https://github.com/scala/scala/commit/8434922) | <notextile>Addtional test cases for tail calls in catches.</notextile>
[31a0aa7](https://github.com/scala/scala/commit/31a0aa7) | <notextile>SI-1672 Catches are in tail position without finally.</notextile>
[e4d1d93](https://github.com/scala/scala/commit/e4d1d93) | <notextile>Warn when generated classfiles differ only in case.</notextile>
[8a1f85d](https://github.com/scala/scala/commit/8a1f85d) | <notextile>SI-6535 Step back from the precipice of a cycle</notextile>
[90c87fc](https://github.com/scala/scala/commit/90c87fc) | <notextile>SI-6549 Improve escaping in REPL codegen.</notextile>
[d99b7f4](https://github.com/scala/scala/commit/d99b7f4) | <notextile>SI-6547: elide box unbox pair only when primitives match</notextile>
[8204b19](https://github.com/scala/scala/commit/8204b19) | <notextile>SI-5678 Bad return type for [Use Case] docs in Range</notextile>
[9aa6ded](https://github.com/scala/scala/commit/9aa6ded) | <notextile>SI-6667 Abort after any ambiguous in-scope implicit</notextile>
[3719f79](https://github.com/scala/scala/commit/3719f79) | <notextile>Refactor use of SearchFailure in implicits.</notextile>
[2aa66be](https://github.com/scala/scala/commit/2aa66be) | <notextile>SI-4664 [Make scala.util.Random Serializable] Add test case</notextile>
[0b92073](https://github.com/scala/scala/commit/0b92073) | <notextile>SI-4664 Make scala.util.Random Serializable</notextile>
[089cc9f](https://github.com/scala/scala/commit/089cc9f) | <notextile>Fix for SI-6712, bug in object lifting.</notextile>
[78a081f](https://github.com/scala/scala/commit/78a081f) | <notextile>Now the test suite runs MIMA for compatibility testing.</notextile>
[bb9adfb](https://github.com/scala/scala/commit/bb9adfb) | <notextile>more ListOfNil =&gt; Nil</notextile>
[838cbe6](https://github.com/scala/scala/commit/838cbe6) | <notextile>DummyTree =&gt; CannotHaveAttrs</notextile>
[7ee299b](https://github.com/scala/scala/commit/7ee299b) | <notextile>evicts assert(false) from the compiler</notextile>
[0ebf72b](https://github.com/scala/scala/commit/0ebf72b) | <notextile>introduces global.pendingSuperCall</notextile>
[40063b0](https://github.com/scala/scala/commit/40063b0) | <notextile>refactors handling of parent types</notextile>
[85f3202](https://github.com/scala/scala/commit/85f3202) | <notextile>unifies approaches to call analysis in TreeInfo</notextile>
[d547760](https://github.com/scala/scala/commit/d547760) | <notextile>TypeApply + Select and their type-level twins</notextile>
[5546a72](https://github.com/scala/scala/commit/5546a72) | <notextile>SI-6696 removes &quot;helper&quot; tree factory methods</notextile>
[868fe64](https://github.com/scala/scala/commit/868fe64) | <notextile>SI-6766 Makes the -Pcontinuations:enable flag a project specific preference</notextile>
[a725494](https://github.com/scala/scala/commit/a725494) | <notextile>SI-6766 Create a continuations project in eclipse</notextile>
[d483ec3](https://github.com/scala/scala/commit/d483ec3) | <notextile>Fix Scaladoc for the raw interpolator.</notextile>
[7ee1145](https://github.com/scala/scala/commit/7ee1145) | <notextile>SI-6631 Handle invalid escapes in string interpolators</notextile>
[ef61bc5](https://github.com/scala/scala/commit/ef61bc5) | <notextile>Fix typo in documentation for Seq</notextile>
[5028181](https://github.com/scala/scala/commit/5028181) | <notextile>tests for idempotency issues in the typechecker</notextile>
[a694194](https://github.com/scala/scala/commit/a694194) | <notextile>Test cases for SI-5726, SI-5733, SI-6320, SI-6551, SI-6722.</notextile>
[dac1488](https://github.com/scala/scala/commit/dac1488) | <notextile>Fix for SI-6731, dropped trees in selectDynamic.</notextile>
[d55840e](https://github.com/scala/scala/commit/d55840e) | <notextile>Asserts about Tree qualifiers.</notextile>
[1be0244](https://github.com/scala/scala/commit/1be0244) | <notextile>neg test added</notextile>
[597a949](https://github.com/scala/scala/commit/597a949) | <notextile>SI-5753 macros cannot be loaded when inherited from a class or a trait</notextile>
[8fcbee5](https://github.com/scala/scala/commit/8fcbee5) | <notextile>Take advantage of the margin stripping interpolator.</notextile>
[a0001fc](https://github.com/scala/scala/commit/a0001fc) | <notextile>Adds a margin stripping string interpolator.</notextile>
[20c2a50](https://github.com/scala/scala/commit/20c2a50) | <notextile>SI-6718 fixes a volatile test</notextile>
[3177934](https://github.com/scala/scala/commit/3177934) | <notextile>Mark pattern matcher synthetics as SYNTHETIC.</notextile>
[b02e952](https://github.com/scala/scala/commit/b02e952) | <notextile>Set symbol flags at creation.</notextile>
[7f1ba06](https://github.com/scala/scala/commit/7f1ba06) | <notextile>Fix for SI-6687, wrong isVar logic.</notextile>
[555a9ba](https://github.com/scala/scala/commit/555a9ba) | <notextile>findEntry implementation code more concise and DRYer.</notextile>
[8b54ec9](https://github.com/scala/scala/commit/8b54ec9) | <notextile>Fix for SI-6357, cycle with value classes.</notextile>
[cd1bf78](https://github.com/scala/scala/commit/cd1bf78) | <notextile>Refactoring of adaptMethod</notextile>
[2aa6841](https://github.com/scala/scala/commit/2aa6841) | <notextile>SI-6677 Insert required cast in `new qual.foo.T`</notextile>
[d0de367](https://github.com/scala/scala/commit/d0de367) | <notextile>Fix for SI-6706, Symbol breakage under GC.</notextile>
[548a54d](https://github.com/scala/scala/commit/548a54d) | <notextile>SI-6023 reify abstract vals</notextile>
[1fd3a2a](https://github.com/scala/scala/commit/1fd3a2a) | <notextile>adds comments to standard attachments</notextile>
[907d6ea](https://github.com/scala/scala/commit/907d6ea) | <notextile>SI-6673 fixes macro problems with eta expansions</notextile>
[7376ad7](https://github.com/scala/scala/commit/7376ad7) | <notextile>SI-6695 Test case for fixed Array match bug</notextile>
[925c6e3](https://github.com/scala/scala/commit/925c6e3) | <notextile>SI-6632 SI-6633 Fixes issues and data corruption in ListBuffer</notextile>
[2c23acf](https://github.com/scala/scala/commit/2c23acf) | <notextile>SI-6634 Fixes data corruption issue in ListBuffer#remove</notextile>
[74ca558](https://github.com/scala/scala/commit/74ca558) | <notextile>SI-6551: don't insert apply call in polymorphic expression.</notextile>
[c656920](https://github.com/scala/scala/commit/c656920) | <notextile>SI-6663: don't ignore type parameter on selectDynamic invocation</notextile>
[af8b45f](https://github.com/scala/scala/commit/af8b45f) | <notextile>Scaladoc update for collection.mutable.MultiMap</notextile>
[db0bf8f](https://github.com/scala/scala/commit/db0bf8f) | <notextile>Restore the opimization apparently lost after merge.</notextile>
[1f0e488](https://github.com/scala/scala/commit/1f0e488) | <notextile>Fixes SI-6150 - backport to 2.10.x branch.</notextile>
[65778d7](https://github.com/scala/scala/commit/65778d7) | <notextile>SI-5330, SI-6014 deal with existential self-type</notextile>
[f8647ee](https://github.com/scala/scala/commit/f8647ee) | <notextile>show developer guidelines on opening pull request</notextile>
[2e0cbe0](https://github.com/scala/scala/commit/2e0cbe0) | <notextile>sane printing of renamed imports</notextile>
[48ee29a](https://github.com/scala/scala/commit/48ee29a) | <notextile>Refine @compileTimeOnly</notextile>
[6902da3](https://github.com/scala/scala/commit/6902da3) | <notextile>SI-6539 Annotation for methods unfit for post-typer ASTs</notextile>
[b922573](https://github.com/scala/scala/commit/b922573) | <notextile>Fix for SI-6662, macro failing too early.</notextile>
[03aa7fc](https://github.com/scala/scala/commit/03aa7fc) | <notextile>SI-6616 Check that unsafe operations are only called on the presentation compiler thread.</notextile>
[1bdd5ee](https://github.com/scala/scala/commit/1bdd5ee) | <notextile>better error when typetagging local classes</notextile>
[af3b03b](https://github.com/scala/scala/commit/af3b03b) | <notextile>-Yshow-trees-compact respects other options</notextile>
[f98e4d0](https://github.com/scala/scala/commit/f98e4d0) | <notextile>Fix type of the custom `ClassTag` in `PatternMatching.scala`</notextile>
[1e2328e](https://github.com/scala/scala/commit/1e2328e) | <notextile>Fix for SI-6597, implicit case class crasher.</notextile>
[c7c79c8](https://github.com/scala/scala/commit/c7c79c8) | <notextile>SI-6488: Stop I/O threads prior to Process destruction</notextile>
[492cbe5](https://github.com/scala/scala/commit/492cbe5) | <notextile>Fixes SI-6559 - StringContext not using passed in escape function.</notextile>
[e23f9ed](https://github.com/scala/scala/commit/e23f9ed) | <notextile>Remove compiler phases that don't influence scaladoc generation.</notextile>
[d22b74c](https://github.com/scala/scala/commit/d22b74c) | <notextile>Scaladoc knows the package structure of the libraries, so don't include them in external documentation setting.</notextile>
[ed09630](https://github.com/scala/scala/commit/ed09630) | <notextile>Crash on missing accessor (internal bug in the lazy vals implementation) instead of trying to recover from the bug</notextile>
[a3c5427](https://github.com/scala/scala/commit/a3c5427) | <notextile>Incorporated changes suggested in code review</notextile>
[a52bd2c](https://github.com/scala/scala/commit/a52bd2c) | <notextile>Added one more test for SI-6358</notextile>
[4c86dbb](https://github.com/scala/scala/commit/4c86dbb) | <notextile>Closes SI-6358. Move accessor generation for lazy vals to typers.</notextile>
[aa27396](https://github.com/scala/scala/commit/aa27396) | <notextile>Remove unneeded calls to substring()</notextile>
[08ab007](https://github.com/scala/scala/commit/08ab007) | <notextile>Added a Swing ColorChooser wrapper</notextile>
[bdff881](https://github.com/scala/scala/commit/bdff881) | <notextile>Added a Swing PopupMenu wrapper</notextile>
[c6866a2](https://github.com/scala/scala/commit/c6866a2) | <notextile>SI-6422: add missing Fractional and Integral alias in scala package</notextile>
[ad65b28](https://github.com/scala/scala/commit/ad65b28) | <notextile>Bump version number for next dev cycle.</notextile>
