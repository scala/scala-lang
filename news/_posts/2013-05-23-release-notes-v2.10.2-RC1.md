---
layout: news
post-type: announcement
title: "Scala 2.10.2-RC1 is now available!"
---
We are very happy to announce the RC1 release of Scala 2.10.2! If no serious blocking issues are found this will become the final 2.10.2 version.

The Scala team and contributors [fixed 89 issues since 2.10.1](https://issues.scala-lang.org/secure/IssueNavigator.jspa?mode=hide&requestId=12206)!

In total, [164 RC1 pull requests](https://github.com/scala/scala/issues?milestone=12&state=closed) were opened on [GitHub](https://github.com/scala/scala), of which 134 were merged after having been [tested](https://github.com/typesafehub/ghpullrequest-validator) and reviewed.

<!--break-->

### Known Issues
Before reporting a bug, please have a look at these [known issues](https://issues.scala-lang.org/secure/IssueNavigator.jspa?mode=hide&requestId=12207).

### Scala IDE for Eclipse
The Scala IDE with Scala 2.10.2-RC1 built right in is available through one of the following update-sites:

* [for Eclipse 3.7 (Indigo)](http://download.scala-ide.org/sdk/e37/scala210/dev/site/)
* [for Eclipse 3.8/4.2 (Juno)](http://download.scala-ide.org/sdk/e38/scala210/dev/site/) (Support for this version is experimental.)

Have a look at the [getting started guide](http://scala-ide.org/docs/user/gettingstarted.html) for more info.

### New features in the 2.10 series
Since 2.10.2 is strictly a bug-fix release, here's an overview of the most prominent new features and improvements as introduced in 2.10.0:

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
46 | <notextile>Jason Zaugg</notextile>
45 | <notextile>Adriaan Moors</notextile>
45 | <notextile>Eugene Burmako</notextile>
15 | <notextile>Paul Phillips</notextile>
12 | <notextile>Eugene Vigdorchik</notextile>
6 | <notextile>Kato Kazuyoshi</notextile>
4 | <notextile>Heather Miller</notextile>
3 | <notextile>Paolo Giarrusso</notextile>
2 | <notextile>James Iry</notextile>
2 | <notextile>Uladzimir Abramchuk</notextile>
2 | <notextile>Grzegorz Kossakowski</notextile>
2 | <notextile>Vinicius Miana</notextile>
2 | <notextile>Simon Ochsenreither</notextile>
1 | <notextile>Som Snytt</notextile>
1 | <notextile>Szabolcs Berecz</notextile>
1 | <notextile>Eugene Platonov</notextile>
1 | <notextile>Lukas Rytz</notextile>
1 | <notextile>Bjorn Regnell</notextile>
1 | <notextile>Iulian Dragos</notextile>
1 | <notextile>Fran&radic;&szlig;ois Garillot</notextile>
1 | <notextile>Martin McNulty</notextile>
1 | <notextile>Gyuhang Shim</notextile>
1 | <notextile>Igor Moreno</notextile>
1 | <notextile>Viktor Klang</notextile>
1 | <notextile>Hubert Plociniczak</notextile>
1 | <notextile>Philipp Haller</notextile>
1 | <notextile>Nada Amin</notextile>
1 | <notextile>Dan Rosen</notextile>



#### Commits and the issues they fixed since v2.10.1

Issue(s) | Commit | Message
--- | --- | ---
[https://issues.scala-lang.org/browse/SI-7201](SI-7201) | [https://github.com/scala/scala/commit/08c7293](08c7293) | <notextile>SI-7201 scaladoc url in scala-(library,actors,swing,reflect) pom</notextile>
[https://issues.scala-lang.org/browse/SI-6424](SI-6424) | [https://github.com/scala/scala/commit/12a130d](12a130d) | <notextile>SI-6424 Scaladoc: Use mapNodes.get(_) to avoid NoSuchElementException</notextile>
[https://issues.scala-lang.org/browse/SI-6548](SI-6548), [https://issues.scala-lang.org/browse/SI-7359](SI-7359) | [https://github.com/scala/scala/commit/7f9feba](7f9feba) | <notextile>[backport #1727] SI-7359 cyclic nested java class</notextile>
[https://issues.scala-lang.org/browse/SI-7486](SI-7486) | [https://github.com/scala/scala/commit/dd33e28](dd33e28) | <notextile>SI-7486 regression in implicit resolution.</notextile>
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
[https://issues.scala-lang.org/browse/SI-6532](SI-6532) | [https://github.com/scala/scala/commit/17f8101](17f8101) | <notextile>SI-6532 emit debug info in compiled java.</notextile>
[https://issues.scala-lang.org/browse/SI-7369](SI-7369) | [https://github.com/scala/scala/commit/6271396](6271396) | <notextile>SI-7369 Avoid spurious unreachable warnings in patterns</notextile>
[https://issues.scala-lang.org/browse/SI-7367](SI-7367) | [https://github.com/scala/scala/commit/184cac8](184cac8) | <notextile>SI-7367 scaladoc crash on constructing the model for annotations.</notextile>
[https://issues.scala-lang.org/browse/SI-6943](SI-6943) | [https://github.com/scala/scala/commit/8448beb](8448beb) | <notextile>SI-6943 warn on value class miscomparison.</notextile>
[https://issues.scala-lang.org/browse/SI-6675](SI-6675), [https://issues.scala-lang.org/browse/SI-6675](SI-6675) | [https://github.com/scala/scala/commit/c1327dc](c1327dc) | <notextile>SI-6675 Avoid spurious warning about pattern bind arity.</notextile>
[https://issues.scala-lang.org/browse/SI-7355](SI-7355) | [https://github.com/scala/scala/commit/0d2c7e9](0d2c7e9) | <notextile>SI-7355 Handle spaces in paths in Windows batch files.</notextile>
[https://issues.scala-lang.org/browse/SI-7330](SI-7330) | [https://github.com/scala/scala/commit/e7aadd0](e7aadd0) | <notextile>SI-7330 better error when pattern isn't a value</notextile>
[https://issues.scala-lang.org/browse/SI-7200](SI-7200) | [https://github.com/scala/scala/commit/8703e00](8703e00) | <notextile>SI-7200 Test case for fixed type inference error.</notextile>
[https://issues.scala-lang.org/browse/SI-7388](SI-7388) | [https://github.com/scala/scala/commit/3e27fec](3e27fec) | <notextile>SI-7388 Be more robust against cycles in error symbol creation.</notextile>
[https://issues.scala-lang.org/browse/SI-7377](SI-7377) | [https://github.com/scala/scala/commit/15e9ef8](15e9ef8) | <notextile>SI-7377 Fix retypechecking of patterns on case companion alias</notextile>
[https://issues.scala-lang.org/browse/SI-7319](SI-7319), [https://issues.scala-lang.org/browse/SI-7319](SI-7319) | [https://github.com/scala/scala/commit/ef04619](ef04619) | <notextile>SI-7319 Clear error buffer during Typer reset.</notextile>
[https://issues.scala-lang.org/browse/SI-7329](SI-7329) | [https://github.com/scala/scala/commit/aa6723c](aa6723c) | <notextile>SI-7329 duplicate default getters for specialized parameters.</notextile>
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
[https://issues.scala-lang.org/browse/SI-7251](SI-7251), [https://issues.scala-lang.org/browse/SI-7251](SI-7251) | [https://github.com/scala/scala/commit/395e90a](395e90a) | <notextile>SI-7251, compiler crash with $.</notextile>
[https://issues.scala-lang.org/browse/SI-7253](SI-7253) | [https://github.com/scala/scala/commit/6f4a594](6f4a594) | <notextile>SI-7253: update comments and naming</notextile>
[https://issues.scala-lang.org/browse/SI-7253](SI-7253) | [https://github.com/scala/scala/commit/386a5bd](386a5bd) | <notextile>SI-7253: respect binary compatibility constraints</notextile>
[https://issues.scala-lang.org/browse/SI-5699](SI-5699) | [https://github.com/scala/scala/commit/50ee635](50ee635) | <notextile>SI-5699 correct java parser for annotation defs.</notextile>
[https://issues.scala-lang.org/browse/SI-3994](SI-3994), [https://issues.scala-lang.org/browse/SI-7242](SI-7242) | [https://github.com/scala/scala/commit/2b5fde7](2b5fde7) | <notextile>SI-7242 Fix crash when inner object mixes in its companion</notextile>
[https://issues.scala-lang.org/browse/SI-7258](SI-7258) | [https://github.com/scala/scala/commit/ef85a10](ef85a10) | <notextile>SI-7258 Don't assume order of reflection values in t6223</notextile>
[https://issues.scala-lang.org/browse/SI-3120](SI-3120), [https://issues.scala-lang.org/browse/SI-3120](SI-3120), [https://issues.scala-lang.org/browse/SI-7259](SI-7259) | [https://github.com/scala/scala/commit/f046853](f046853) | <notextile>SI-7259 Fix detection of Java defined Selects</notextile>
[https://issues.scala-lang.org/browse/SI-1247](SI-1247), [https://issues.scala-lang.org/browse/SI-7249](SI-7249) | [https://github.com/scala/scala/commit/552b623](552b623) | <notextile>SI-7249 Reign in overzealous Function0 optimization.</notextile>
[https://issues.scala-lang.org/browse/SI-5464](SI-5464), [https://issues.scala-lang.org/browse/SI-7176](SI-7176), [https://issues.scala-lang.org/browse/SI-6921](SI-6921), [https://issues.scala-lang.org/browse/SI-7239](SI-7239) | [https://github.com/scala/scala/commit/174334b](174334b) | <notextile>SI-6921 SI-7239 Tread lightly during exploratory typing</notextile>
[https://issues.scala-lang.org/browse/SI-7232](SI-7232) | [https://github.com/scala/scala/commit/6e79370](6e79370) | <notextile>SI-7232 Fix Java import vs defn. binding precendence</notextile>
[https://issues.scala-lang.org/browse/SI-7240](SI-7240) | [https://github.com/scala/scala/commit/a4fb773](a4fb773) | <notextile>SI-7240 fixes language feature lookup</notextile>
[https://issues.scala-lang.org/browse/SI-7233](SI-7233) | [https://github.com/scala/scala/commit/41e3b89](41e3b89) | <notextile>SI-7233 Account for aliased imports in Erasure</notextile>
[https://issues.scala-lang.org/browse/SI-7233](SI-7233) | [https://github.com/scala/scala/commit/33b499c](33b499c) | <notextile>SI-7233 Account for aliased imports in eta expansion.</notextile>
[https://issues.scala-lang.org/browse/SI-6725](SI-6725) | [https://github.com/scala/scala/commit/9bc17e7](9bc17e7) | <notextile>SI-6725 `f` interpolator now supports %n tokens</notextile>
[https://issues.scala-lang.org/browse/SI-7132](SI-7132) | [https://github.com/scala/scala/commit/eb365f9](eb365f9) | <notextile>SI-7132 - don't discard Unit type in interpreter</notextile>
[https://issues.scala-lang.org/browse/SI-7328](SI-7328) | [https://github.com/scala/scala/commit/745c36a](745c36a) | <notextile>SI-7328 Bail out of names/defaults if args are error typed</notextile>
[https://issues.scala-lang.org/browse/SI-7234](SI-7234) | [https://github.com/scala/scala/commit/83c9c76](83c9c76) | <notextile>SI-7234 Make named args play nice with dep. method types</notextile>
[https://issues.scala-lang.org/browse/SI-5710](SI-5710) | [https://github.com/scala/scala/commit/f742aa3](f742aa3) | <notextile>SI-5710 has fixed itself</notextile>
[https://issues.scala-lang.org/browse/SI-7235](SI-7235), [https://issues.scala-lang.org/browse/SI-7235](SI-7235), [https://issues.scala-lang.org/browse/SI-7235](SI-7235) | [https://github.com/scala/scala/commit/3ae2653](3ae2653) | <notextile>reifier is now aware of SI-7235</notextile>
[https://issues.scala-lang.org/browse/SI-7226](SI-7226) | [https://github.com/scala/scala/commit/7e52fb9](7e52fb9) | <notextile>SI-7226 Fix inference regression caused by TypeVar equality.</notextile>
[https://issues.scala-lang.org/browse/SI-7224](SI-7224) | [https://github.com/scala/scala/commit/292435f](292435f) | <notextile>Fix SI-7224.</notextile>
[https://issues.scala-lang.org/browse/SI-7214](SI-7214) | [https://github.com/scala/scala/commit/acd74ca](acd74ca) | <notextile>SI-7214 outer check based on dealiased pattern type.</notextile>
[https://issues.scala-lang.org/browse/SI-7109](SI-7109), [https://issues.scala-lang.org/browse/SI-7153](SI-7153) | [https://github.com/scala/scala/commit/53c499b](53c499b) | <notextile>SI-7109 SI-7153 Generalize the API to get docComments: allow to force docTrees for given fragments. Don't type-check when forcing doc comments, but rather  do it directly. Test the new functionality as well as better tests for the old one.</notextile>
[https://issues.scala-lang.org/browse/SI-7183](SI-7183) | [https://github.com/scala/scala/commit/2cf6c5d](2cf6c5d) | <notextile>[port] SI-7183 Disable unreachability for withFilter matches.</notextile>
[https://issues.scala-lang.org/browse/SI-7215](SI-7215) | [https://github.com/scala/scala/commit/ad69835](ad69835) | <notextile>SI-7215 Fix transpose of an empty Array[Array[T]].</notextile>
[https://issues.scala-lang.org/browse/SI-7185](SI-7185) | [https://github.com/scala/scala/commit/387fbf4](387fbf4) | <notextile>SI-7185 Avoid NPE in TreeInfo.isExprSafeToInline</notextile>
[https://issues.scala-lang.org/browse/SI-7190](SI-7190) | [https://github.com/scala/scala/commit/1117be8](1117be8) | <notextile>SI-7190 macros no longer give rise to bridges</notextile>
[https://issues.scala-lang.org/browse/SI-7045](SI-7045), [https://issues.scala-lang.org/browse/SI-6240](SI-6240) | [https://github.com/scala/scala/commit/0420b2d](0420b2d) | <notextile>Revert SI-6240 synchronization for runtime reflection</notextile>
[https://issues.scala-lang.org/browse/SI-6191](SI-6191) | [https://github.com/scala/scala/commit/c46bc25](c46bc25) | <notextile>Tone down a soft-warning to only show under -Ydebug.</notextile>
[https://issues.scala-lang.org/browse/SI-7045](SI-7045) | [https://github.com/scala/scala/commit/07bcb61](07bcb61) | <notextile>SI-7045 reflection now auto-initializes selfType</notextile>
[https://issues.scala-lang.org/browse/SI-7107](SI-7107) | [https://github.com/scala/scala/commit/4f1bfec](4f1bfec) | <notextile>Fix SI-7107: scala now thinks every exception is polymorphic</notextile>
[https://issues.scala-lang.org/browse/SI-7074](SI-7074) | [https://github.com/scala/scala/commit/8187deb](8187deb) | <notextile>SI-7074 Fix xml attribute sorting</notextile>
[https://issues.scala-lang.org/browse/SI-7112](SI-7112) | [https://github.com/scala/scala/commit/89be691](89be691) | <notextile>fixes the test for SI-7112</notextile>
[https://issues.scala-lang.org/browse/SI-7172](SI-7172), [https://issues.scala-lang.org/browse/SI-7171](SI-7171) | [https://github.com/scala/scala/commit/3d5758c](3d5758c) | <notextile>SI-7171 Consider prefix when assessing type finality.</notextile>
[https://issues.scala-lang.org/browse/SI-7130](SI-7130) | [https://github.com/scala/scala/commit/c8ab5b3](c8ab5b3) | <notextile>Fix SI-7130: Memory leaked caused by Statistics</notextile>
[https://issues.scala-lang.org/browse/SI-7143](SI-7143) | [https://github.com/scala/scala/commit/4df9e20](4df9e20) | <notextile>SI-7143 Fix scanner docComment: docBuffer and docPos are initialized in different places and as a result can get out of sync and as a result the invariant that docComment has a position is broken.</notextile>
[https://issues.scala-lang.org/browse/SI-7134](SI-7134) | [https://github.com/scala/scala/commit/fd68fe6](fd68fe6) | <notextile>SI-7134: don't require doc.Settings in base api of scaladoc.</notextile>
[https://issues.scala-lang.org/browse/SI-5063](SI-5063) | [https://github.com/scala/scala/commit/c10b7b6](c10b7b6) | <notextile>unit test ide-t1000567 exercises SI-5063, aka #1000567.</notextile>
[https://issues.scala-lang.org/browse/SI-5920](SI-5920), [https://issues.scala-lang.org/browse/SI-5744](SI-5744) | [https://github.com/scala/scala/commit/9d5d55b](9d5d55b) | <notextile>SI-5744 evidence params are now SYNTHETIC</notextile>
[https://issues.scala-lang.org/browse/SI-2296](SI-2296), [https://issues.scala-lang.org/browse/SI-7091](SI-7091) | [https://github.com/scala/scala/commit/6a7d793](6a7d793) | <notextile>SI-7091 Don't try to put a protected accessor in a package.</notextile>
[https://issues.scala-lang.org/browse/SI-7091](SI-7091) | [https://github.com/scala/scala/commit/2e8ede5](2e8ede5) | <notextile>SI-7091 Add a diagnostic for the &quot;no acc def buf&quot; error.</notextile>
[https://issues.scala-lang.org/browse/SI-6514](SI-6514) | [https://github.com/scala/scala/commit/673cc83](673cc83) | <notextile>SI-6514 Avoid spurious dead code warnings</notextile>
[https://issues.scala-lang.org/browse/SI-6225](SI-6225) | [https://github.com/scala/scala/commit/451cab9](451cab9) | <notextile>SI-6225 Fix import of inherited package object implicits</notextile>
[https://issues.scala-lang.org/browse/SI-6935](SI-6935) | [https://github.com/scala/scala/commit/c049d66](c049d66) | <notextile>SI-6935 Added readResolve in BoxedUnit When deserializing Unit, it would return an instance of Object, but not a Scala Unit. By adding readResolve, the deserialization of Unit will work.</notextile>
[https://issues.scala-lang.org/browse/SI-6370](SI-6370) | [https://github.com/scala/scala/commit/7b425bf](7b425bf) | <notextile>SI-6370 changed ListMap apply0 method to produce correct error message when a key is not found Current implementation of apply0 relies on tail method to iterate over all keys. When the list gets to its end, tail produces an 'empty map' message in its exception, which is thrown by ListMap. This change checks if the collection is empty before calling tail and provides a more appropriate key not found message.</notextile>
[https://issues.scala-lang.org/browse/SI-6158](SI-6158) | [https://github.com/scala/scala/commit/6424907](6424907) | <notextile>SI-6158 Restore compile error output under partest --show-log</notextile>




#### Complete commit list!

sha | Title
---: | ---
[https://github.com/scala/scala/commit/08c7293](08c7293) | <notextile>SI-7201 scaladoc url in scala-(library,actors,swing,reflect) pom</notextile>
[https://github.com/scala/scala/commit/12a130d](12a130d) | <notextile>SI-6424 Scaladoc: Use mapNodes.get(_) to avoid NoSuchElementException</notextile>
[https://github.com/scala/scala/commit/f628565](f628565) | <notextile>Prevent slash duplication.</notextile>
[https://github.com/scala/scala/commit/7f9feba](7f9feba) | <notextile>[backport #1727] SI-7359 cyclic nested java class</notextile>
[https://github.com/scala/scala/commit/dd33e28](dd33e28) | <notextile>SI-7486 regression in implicit resolution.</notextile>
[https://github.com/scala/scala/commit/6114038](6114038) | <notextile>[nomaster] unbreaks test.bc</notextile>
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
[https://github.com/scala/scala/commit/351d5ec](351d5ec) | <notextile>Absolute path in error message.</notextile>
[https://github.com/scala/scala/commit/3e27fec](3e27fec) | <notextile>SI-7388 Be more robust against cycles in error symbol creation.</notextile>
[https://github.com/scala/scala/commit/15e9ef8](15e9ef8) | <notextile>SI-7377 Fix retypechecking of patterns on case companion alias</notextile>
[https://github.com/scala/scala/commit/ef04619](ef04619) | <notextile>SI-7319 Clear error buffer during Typer reset.</notextile>
[https://github.com/scala/scala/commit/aa6723c](aa6723c) | <notextile>SI-7329 duplicate default getters for specialized parameters.</notextile>
[https://github.com/scala/scala/commit/67c2d6d](67c2d6d) | <notextile>SI-6286 IllegalArgumentException handling specialized method.</notextile>
[https://github.com/scala/scala/commit/23dd325](23dd325) | <notextile>SI-7360 Don't let a follow-up TypeError obscure the original error.</notextile>
[https://github.com/scala/scala/commit/2885eb0](2885eb0) | <notextile>Revert &quot;SI-6387 Clones accessor before name expansion&quot;</notextile>
[https://github.com/scala/scala/commit/7250312](7250312) | <notextile>SI-6386 typed existential type tree's original now have tpe set</notextile>
[https://github.com/scala/scala/commit/6a61e17](6a61e17) | <notextile>SI-7289 Less strict type application for TypeVar.</notextile>
[https://github.com/scala/scala/commit/34a6fa9](34a6fa9) | <notextile>SI-6937 core type tags are no longer referentially unique</notextile>
[https://github.com/scala/scala/commit/dc3fa0a](dc3fa0a) | <notextile>if starr.use.released fetch Scala ${starr.version} for STARR</notextile>
[https://github.com/scala/scala/commit/3fe2e86](3fe2e86) | <notextile>assume build.release when maven.version.suffix is set</notextile>
[https://github.com/scala/scala/commit/7184bd3](7184bd3) | <notextile>make quick.done depend on quick.bin again</notextile>
[https://github.com/scala/scala/commit/0affa94](0affa94) | <notextile>SI-7321 Memory leak in specialize on multiple compiler runs.</notextile>
[https://github.com/scala/scala/commit/6591acb](6591acb) | <notextile>comments to address reviewer feedback</notextile>
[https://github.com/scala/scala/commit/92a1785](92a1785) | <notextile>formatting</notextile>
[https://github.com/scala/scala/commit/7c0e8f0](7c0e8f0) | <notextile>Preliminary support for zinc.</notextile>
[https://github.com/scala/scala/commit/ceeb40c](ceeb40c) | <notextile>Regularity for build.xml: 1 output dir / project</notextile>
[https://github.com/scala/scala/commit/5dca660](5dca660) | <notextile>get rid of args element in staged-scalac</notextile>
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
[https://github.com/scala/scala/commit/fbecd5d](fbecd5d) | <notextile>Allow getting STARR via maven, also: locker.skip</notextile>
[https://github.com/scala/scala/commit/7d2c1f3](7d2c1f3) | <notextile>Use stage/project for taskname instead of scalacfork</notextile>
[https://github.com/scala/scala/commit/e3b5e0b](e3b5e0b) | <notextile>Sanity for build.xml: exscriptus&amp;positus delendus est.</notextile>
[https://github.com/scala/scala/commit/df29290](df29290) | <notextile>SI-7013 Scaladoc: Fix StackOverflowError</notextile>
[https://github.com/scala/scala/commit/395e90a](395e90a) | <notextile>SI-7251, compiler crash with $.</notextile>
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
[https://github.com/scala/scala/commit/a4fb773](a4fb773) | <notextile>SI-7240 fixes language feature lookup</notextile>
[https://github.com/scala/scala/commit/41e3b89](41e3b89) | <notextile>SI-7233 Account for aliased imports in Erasure</notextile>
[https://github.com/scala/scala/commit/33b499c](33b499c) | <notextile>SI-7233 Account for aliased imports in eta expansion.</notextile>
[https://github.com/scala/scala/commit/9bc17e7](9bc17e7) | <notextile>SI-6725 `f` interpolator now supports %n tokens</notextile>
[https://github.com/scala/scala/commit/eb365f9](eb365f9) | <notextile>SI-7132 - don't discard Unit type in interpreter</notextile>
[https://github.com/scala/scala/commit/745c36a](745c36a) | <notextile>SI-7328 Bail out of names/defaults if args are error typed</notextile>
[https://github.com/scala/scala/commit/83c9c76](83c9c76) | <notextile>SI-7234 Make named args play nice with dep. method types</notextile>
[https://github.com/scala/scala/commit/f742aa3](f742aa3) | <notextile>SI-5710 has fixed itself</notextile>
[https://github.com/scala/scala/commit/3ae2653](3ae2653) | <notextile>reifier is now aware of SI-7235</notextile>
[https://github.com/scala/scala/commit/7e52fb9](7e52fb9) | <notextile>SI-7226 Fix inference regression caused by TypeVar equality.</notextile>
[https://github.com/scala/scala/commit/292435f](292435f) | <notextile>Fix SI-7224.</notextile>
[https://github.com/scala/scala/commit/acd74ca](acd74ca) | <notextile>SI-7214 outer check based on dealiased pattern type.</notextile>
[https://github.com/scala/scala/commit/53c499b](53c499b) | <notextile>SI-7109 SI-7153 Generalize the API to get docComments: allow to force docTrees for given fragments. Don't type-check when forcing doc comments, but rather  do it directly. Test the new functionality as well as better tests for the old one.</notextile>
[https://github.com/scala/scala/commit/2cf6c5d](2cf6c5d) | <notextile>[port] SI-7183 Disable unreachability for withFilter matches.</notextile>
[https://github.com/scala/scala/commit/5b7cfe3](5b7cfe3) | <notextile>better names for components of MatchTranslator</notextile>
[https://github.com/scala/scala/commit/0a3219b](0a3219b) | <notextile>move sat solving to separate file</notextile>
[https://github.com/scala/scala/commit/ebaa34e](ebaa34e) | <notextile>simplify dependencies between patmat components, remove self types</notextile>
[https://github.com/scala/scala/commit/ad69835](ad69835) | <notextile>SI-7215 Fix transpose of an empty Array[Array[T]].</notextile>
[https://github.com/scala/scala/commit/387fbf4](387fbf4) | <notextile>SI-7185 Avoid NPE in TreeInfo.isExprSafeToInline</notextile>
[https://github.com/scala/scala/commit/1117be8](1117be8) | <notextile>SI-7190 macros no longer give rise to bridges</notextile>
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
[https://github.com/scala/scala/commit/3e7db2d](3e7db2d) | <notextile>adds some comments to resetAttrs</notextile>
[https://github.com/scala/scala/commit/e2a17d9](e2a17d9) | <notextile>resetAttrs now always erases This.tpe</notextile>
[https://github.com/scala/scala/commit/4f1bfec](4f1bfec) | <notextile>Fix SI-7107: scala now thinks every exception is polymorphic</notextile>
[https://github.com/scala/scala/commit/8187deb](8187deb) | <notextile>SI-7074 Fix xml attribute sorting</notextile>
[https://github.com/scala/scala/commit/89be691](89be691) | <notextile>fixes the test for SI-7112</notextile>
[https://github.com/scala/scala/commit/3d5758c](3d5758c) | <notextile>SI-7171 Consider prefix when assessing type finality.</notextile>
[https://github.com/scala/scala/commit/18a2ba2](18a2ba2) | <notextile>please ant with filenames, add comments</notextile>
[https://github.com/scala/scala/commit/6a7078c](6a7078c) | <notextile>remove unused imports</notextile>
[https://github.com/scala/scala/commit/7fdc873](7fdc873) | <notextile>[refactor] move some logic-related code</notextile>
[https://github.com/scala/scala/commit/c930a85](c930a85) | <notextile>[refactor] better name for symbolicCase</notextile>
[https://github.com/scala/scala/commit/76fc728](76fc728) | <notextile>[refactor] make hash-consing more robust</notextile>
[https://github.com/scala/scala/commit/712a921](712a921) | <notextile>drop Cond in favor of Prop</notextile>
[https://github.com/scala/scala/commit/1b47248](1b47248) | <notextile>[refactor] prepare migration from Cond to Prop</notextile>
[https://github.com/scala/scala/commit/647a760](647a760) | <notextile>[refactor] type analysis consolidation</notextile>
[https://github.com/scala/scala/commit/e14846b](e14846b) | <notextile>[refactor] move PatternMatching.scala to transform.patmat</notextile>
[https://github.com/scala/scala/commit/f5ed914](f5ed914) | <notextile>re-align 2.10.x's pattern matcher with master's</notextile>
[https://github.com/scala/scala/commit/b20e288](b20e288) | <notextile>Fixed error in reflection API docs about linearization order on method baseClasses</notextile>
[https://github.com/scala/scala/commit/d2a36ab](d2a36ab) | <notextile>Shadowed Implict typo (fixes no issue)</notextile>
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
[https://github.com/scala/scala/commit/de2410b](de2410b) | <notextile>silences t6323a</notextile>
[https://github.com/scala/scala/commit/673cc83](673cc83) | <notextile>SI-6514 Avoid spurious dead code warnings</notextile>
[https://github.com/scala/scala/commit/ef6095a](ef6095a) | <notextile>Tolerate symbol sharing between accessor/field.</notextile>
[https://github.com/scala/scala/commit/451cab9](451cab9) | <notextile>SI-6225 Fix import of inherited package object implicits</notextile>
[https://github.com/scala/scala/commit/c049d66](c049d66) | <notextile>SI-6935 Added readResolve in BoxedUnit When deserializing Unit, it would return an instance of Object, but not a Scala Unit. By adding readResolve, the deserialization of Unit will work.</notextile>
[https://github.com/scala/scala/commit/7b425bf](7b425bf) | <notextile>SI-6370 changed ListMap apply0 method to produce correct error message when a key is not found Current implementation of apply0 relies on tail method to iterate over all keys. When the list gets to its end, tail produces an 'empty map' message in its exception, which is thrown by ListMap. This change checks if the collection is empty before calling tail and provides a more appropriate key not found message.</notextile>
[https://github.com/scala/scala/commit/6424907](6424907) | <notextile>SI-6158 Restore compile error output under partest --show-log</notextile>


      