---

category: announcement
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

* for Eclipse 3.7 (Indigo)
* for Eclipse 3.8/4.2 (Juno) (Support for this version is experimental.)

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

    * See the [actors migration project](https://docs.scala-lang.org/overviews/core/actors-migration-guide.html) for more information.
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
[SI-7201](https://issues.scala-lang.org/browse/SI-7201) | [08c7293](https://github.com/scala/scala/commit/08c7293) | <notextile>SI-7201 scaladoc url in scala-(library,actors,swing,reflect) pom</notextile>
[SI-6424](https://issues.scala-lang.org/browse/SI-6424) | [12a130d](https://github.com/scala/scala/commit/12a130d) | <notextile>SI-6424 Scaladoc: Use mapNodes.get(_) to avoid NoSuchElementException</notextile>
[SI-6548](https://issues.scala-lang.org/browse/SI-6548), [SI-7359](https://issues.scala-lang.org/browse/SI-7359) | [7f9feba](https://github.com/scala/scala/commit/7f9feba) | <notextile>[backport #1727] SI-7359 cyclic nested java class</notextile>
[SI-7486](https://issues.scala-lang.org/browse/SI-7486) | [dd33e28](https://github.com/scala/scala/commit/dd33e28) | <notextile>SI-7486 regression in implicit resolution.</notextile>
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
[SI-6532](https://issues.scala-lang.org/browse/SI-6532) | [17f8101](https://github.com/scala/scala/commit/17f8101) | <notextile>SI-6532 emit debug info in compiled java.</notextile>
[SI-7369](https://issues.scala-lang.org/browse/SI-7369) | [6271396](https://github.com/scala/scala/commit/6271396) | <notextile>SI-7369 Avoid spurious unreachable warnings in patterns</notextile>
[SI-7367](https://issues.scala-lang.org/browse/SI-7367) | [184cac8](https://github.com/scala/scala/commit/184cac8) | <notextile>SI-7367 scaladoc crash on constructing the model for annotations.</notextile>
[SI-6943](https://issues.scala-lang.org/browse/SI-6943) | [8448beb](https://github.com/scala/scala/commit/8448beb) | <notextile>SI-6943 warn on value class miscomparison.</notextile>
[SI-6675](https://issues.scala-lang.org/browse/SI-6675), [SI-6675](https://issues.scala-lang.org/browse/SI-6675) | [c1327dc](https://github.com/scala/scala/commit/c1327dc) | <notextile>SI-6675 Avoid spurious warning about pattern bind arity.</notextile>
[SI-7355](https://issues.scala-lang.org/browse/SI-7355) | [0d2c7e9](https://github.com/scala/scala/commit/0d2c7e9) | <notextile>SI-7355 Handle spaces in paths in Windows batch files.</notextile>
[SI-7330](https://issues.scala-lang.org/browse/SI-7330) | [e7aadd0](https://github.com/scala/scala/commit/e7aadd0) | <notextile>SI-7330 better error when pattern isn't a value</notextile>
[SI-7200](https://issues.scala-lang.org/browse/SI-7200) | [8703e00](https://github.com/scala/scala/commit/8703e00) | <notextile>SI-7200 Test case for fixed type inference error.</notextile>
[SI-7388](https://issues.scala-lang.org/browse/SI-7388) | [3e27fec](https://github.com/scala/scala/commit/3e27fec) | <notextile>SI-7388 Be more robust against cycles in error symbol creation.</notextile>
[SI-7377](https://issues.scala-lang.org/browse/SI-7377) | [15e9ef8](https://github.com/scala/scala/commit/15e9ef8) | <notextile>SI-7377 Fix retypechecking of patterns on case companion alias</notextile>
[SI-7319](https://issues.scala-lang.org/browse/SI-7319), [SI-7319](https://issues.scala-lang.org/browse/SI-7319) | [ef04619](https://github.com/scala/scala/commit/ef04619) | <notextile>SI-7319 Clear error buffer during Typer reset.</notextile>
[SI-7329](https://issues.scala-lang.org/browse/SI-7329) | [aa6723c](https://github.com/scala/scala/commit/aa6723c) | <notextile>SI-7329 duplicate default getters for specialized parameters.</notextile>
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
[SI-7251](https://issues.scala-lang.org/browse/SI-7251), [SI-7251](https://issues.scala-lang.org/browse/SI-7251) | [395e90a](https://github.com/scala/scala/commit/395e90a) | <notextile>SI-7251, compiler crash with $.</notextile>
[SI-7253](https://issues.scala-lang.org/browse/SI-7253) | [6f4a594](https://github.com/scala/scala/commit/6f4a594) | <notextile>SI-7253: update comments and naming</notextile>
[SI-7253](https://issues.scala-lang.org/browse/SI-7253) | [386a5bd](https://github.com/scala/scala/commit/386a5bd) | <notextile>SI-7253: respect binary compatibility constraints</notextile>
[SI-5699](https://issues.scala-lang.org/browse/SI-5699) | [50ee635](https://github.com/scala/scala/commit/50ee635) | <notextile>SI-5699 correct java parser for annotation defs.</notextile>
[SI-3994](https://issues.scala-lang.org/browse/SI-3994), [SI-7242](https://issues.scala-lang.org/browse/SI-7242) | [2b5fde7](https://github.com/scala/scala/commit/2b5fde7) | <notextile>SI-7242 Fix crash when inner object mixes in its companion</notextile>
[SI-7258](https://issues.scala-lang.org/browse/SI-7258) | [ef85a10](https://github.com/scala/scala/commit/ef85a10) | <notextile>SI-7258 Don't assume order of reflection values in t6223</notextile>
[SI-3120](https://issues.scala-lang.org/browse/SI-3120), [SI-3120](https://issues.scala-lang.org/browse/SI-3120), [SI-7259](https://issues.scala-lang.org/browse/SI-7259) | [f046853](https://github.com/scala/scala/commit/f046853) | <notextile>SI-7259 Fix detection of Java defined Selects</notextile>
[SI-1247](https://issues.scala-lang.org/browse/SI-1247), [SI-7249](https://issues.scala-lang.org/browse/SI-7249) | [552b623](https://github.com/scala/scala/commit/552b623) | <notextile>SI-7249 Reign in overzealous Function0 optimization.</notextile>
[SI-5464](https://issues.scala-lang.org/browse/SI-5464), [SI-7176](https://issues.scala-lang.org/browse/SI-7176), [SI-6921](https://issues.scala-lang.org/browse/SI-6921), [SI-7239](https://issues.scala-lang.org/browse/SI-7239) | [174334b](https://github.com/scala/scala/commit/174334b) | <notextile>SI-6921 SI-7239 Tread lightly during exploratory typing</notextile>
[SI-7232](https://issues.scala-lang.org/browse/SI-7232) | [6e79370](https://github.com/scala/scala/commit/6e79370) | <notextile>SI-7232 Fix Java import vs defn. binding precendence</notextile>
[SI-7240](https://issues.scala-lang.org/browse/SI-7240) | [a4fb773](https://github.com/scala/scala/commit/a4fb773) | <notextile>SI-7240 fixes language feature lookup</notextile>
[SI-7233](https://issues.scala-lang.org/browse/SI-7233) | [41e3b89](https://github.com/scala/scala/commit/41e3b89) | <notextile>SI-7233 Account for aliased imports in Erasure</notextile>
[SI-7233](https://issues.scala-lang.org/browse/SI-7233) | [33b499c](https://github.com/scala/scala/commit/33b499c) | <notextile>SI-7233 Account for aliased imports in eta expansion.</notextile>
[SI-6725](https://issues.scala-lang.org/browse/SI-6725) | [9bc17e7](https://github.com/scala/scala/commit/9bc17e7) | <notextile>SI-6725 `f` interpolator now supports %n tokens</notextile>
[SI-7132](https://issues.scala-lang.org/browse/SI-7132) | [eb365f9](https://github.com/scala/scala/commit/eb365f9) | <notextile>SI-7132 - don't discard Unit type in interpreter</notextile>
[SI-7328](https://issues.scala-lang.org/browse/SI-7328) | [745c36a](https://github.com/scala/scala/commit/745c36a) | <notextile>SI-7328 Bail out of names/defaults if args are error typed</notextile>
[SI-7234](https://issues.scala-lang.org/browse/SI-7234) | [83c9c76](https://github.com/scala/scala/commit/83c9c76) | <notextile>SI-7234 Make named args play nice with dep. method types</notextile>
[SI-5710](https://issues.scala-lang.org/browse/SI-5710) | [f742aa3](https://github.com/scala/scala/commit/f742aa3) | <notextile>SI-5710 has fixed itself</notextile>
[SI-7235](https://issues.scala-lang.org/browse/SI-7235), [SI-7235](https://issues.scala-lang.org/browse/SI-7235), [SI-7235](https://issues.scala-lang.org/browse/SI-7235) | [3ae2653](https://github.com/scala/scala/commit/3ae2653) | <notextile>reifier is now aware of SI-7235</notextile>
[SI-7226](https://issues.scala-lang.org/browse/SI-7226) | [7e52fb9](https://github.com/scala/scala/commit/7e52fb9) | <notextile>SI-7226 Fix inference regression caused by TypeVar equality.</notextile>
[SI-7224](https://issues.scala-lang.org/browse/SI-7224) | [292435f](https://github.com/scala/scala/commit/292435f) | <notextile>Fix SI-7224.</notextile>
[SI-7214](https://issues.scala-lang.org/browse/SI-7214) | [acd74ca](https://github.com/scala/scala/commit/acd74ca) | <notextile>SI-7214 outer check based on dealiased pattern type.</notextile>
[SI-7109](https://issues.scala-lang.org/browse/SI-7109), [SI-7153](https://issues.scala-lang.org/browse/SI-7153) | [53c499b](https://github.com/scala/scala/commit/53c499b) | <notextile>SI-7109 SI-7153 Generalize the API to get docComments: allow to force docTrees for given fragments. Don't type-check when forcing doc comments, but rather  do it directly. Test the new functionality as well as better tests for the old one.</notextile>
[SI-7183](https://issues.scala-lang.org/browse/SI-7183) | [2cf6c5d](https://github.com/scala/scala/commit/2cf6c5d) | <notextile>[port] SI-7183 Disable unreachability for withFilter matches.</notextile>
[SI-7215](https://issues.scala-lang.org/browse/SI-7215) | [ad69835](https://github.com/scala/scala/commit/ad69835) | <notextile>SI-7215 Fix transpose of an empty Array[Array[T]].</notextile>
[SI-7185](https://issues.scala-lang.org/browse/SI-7185) | [387fbf4](https://github.com/scala/scala/commit/387fbf4) | <notextile>SI-7185 Avoid NPE in TreeInfo.isExprSafeToInline</notextile>
[SI-7190](https://issues.scala-lang.org/browse/SI-7190) | [1117be8](https://github.com/scala/scala/commit/1117be8) | <notextile>SI-7190 macros no longer give rise to bridges</notextile>
[SI-7045](https://issues.scala-lang.org/browse/SI-7045), [SI-6240](https://issues.scala-lang.org/browse/SI-6240) | [0420b2d](https://github.com/scala/scala/commit/0420b2d) | <notextile>Revert SI-6240 synchronization for runtime reflection</notextile>
[SI-6191](https://issues.scala-lang.org/browse/SI-6191) | [c46bc25](https://github.com/scala/scala/commit/c46bc25) | <notextile>Tone down a soft-warning to only show under -Ydebug.</notextile>
[SI-7045](https://issues.scala-lang.org/browse/SI-7045) | [07bcb61](https://github.com/scala/scala/commit/07bcb61) | <notextile>SI-7045 reflection now auto-initializes selfType</notextile>
[SI-7107](https://issues.scala-lang.org/browse/SI-7107) | [4f1bfec](https://github.com/scala/scala/commit/4f1bfec) | <notextile>Fix SI-7107: scala now thinks every exception is polymorphic</notextile>
[SI-7074](https://issues.scala-lang.org/browse/SI-7074) | [8187deb](https://github.com/scala/scala/commit/8187deb) | <notextile>SI-7074 Fix xml attribute sorting</notextile>
[SI-7112](https://issues.scala-lang.org/browse/SI-7112) | [89be691](https://github.com/scala/scala/commit/89be691) | <notextile>fixes the test for SI-7112</notextile>
[SI-7172](https://issues.scala-lang.org/browse/SI-7172), [SI-7171](https://issues.scala-lang.org/browse/SI-7171) | [3d5758c](https://github.com/scala/scala/commit/3d5758c) | <notextile>SI-7171 Consider prefix when assessing type finality.</notextile>
[SI-7130](https://issues.scala-lang.org/browse/SI-7130) | [c8ab5b3](https://github.com/scala/scala/commit/c8ab5b3) | <notextile>Fix SI-7130: Memory leaked caused by Statistics</notextile>
[SI-7143](https://issues.scala-lang.org/browse/SI-7143) | [4df9e20](https://github.com/scala/scala/commit/4df9e20) | <notextile>SI-7143 Fix scanner docComment: docBuffer and docPos are initialized in different places and as a result can get out of sync and as a result the invariant that docComment has a position is broken.</notextile>
[SI-7134](https://issues.scala-lang.org/browse/SI-7134) | [fd68fe6](https://github.com/scala/scala/commit/fd68fe6) | <notextile>SI-7134: don't require doc.Settings in base api of scaladoc.</notextile>
[SI-5063](https://issues.scala-lang.org/browse/SI-5063) | [c10b7b6](https://github.com/scala/scala/commit/c10b7b6) | <notextile>unit test ide-t1000567 exercises SI-5063, aka #1000567.</notextile>
[SI-5920](https://issues.scala-lang.org/browse/SI-5920), [SI-5744](https://issues.scala-lang.org/browse/SI-5744) | [9d5d55b](https://github.com/scala/scala/commit/9d5d55b) | <notextile>SI-5744 evidence params are now SYNTHETIC</notextile>
[SI-2296](https://issues.scala-lang.org/browse/SI-2296), [SI-7091](https://issues.scala-lang.org/browse/SI-7091) | [6a7d793](https://github.com/scala/scala/commit/6a7d793) | <notextile>SI-7091 Don't try to put a protected accessor in a package.</notextile>
[SI-7091](https://issues.scala-lang.org/browse/SI-7091) | [2e8ede5](https://github.com/scala/scala/commit/2e8ede5) | <notextile>SI-7091 Add a diagnostic for the &quot;no acc def buf&quot; error.</notextile>
[SI-6514](https://issues.scala-lang.org/browse/SI-6514) | [673cc83](https://github.com/scala/scala/commit/673cc83) | <notextile>SI-6514 Avoid spurious dead code warnings</notextile>
[SI-6225](https://issues.scala-lang.org/browse/SI-6225) | [451cab9](https://github.com/scala/scala/commit/451cab9) | <notextile>SI-6225 Fix import of inherited package object implicits</notextile>
[SI-6935](https://issues.scala-lang.org/browse/SI-6935) | [c049d66](https://github.com/scala/scala/commit/c049d66) | <notextile>SI-6935 Added readResolve in BoxedUnit When deserializing Unit, it would return an instance of Object, but not a Scala Unit. By adding readResolve, the deserialization of Unit will work.</notextile>
[SI-6370](https://issues.scala-lang.org/browse/SI-6370) | [7b425bf](https://github.com/scala/scala/commit/7b425bf) | <notextile>SI-6370 changed ListMap apply0 method to produce correct error message when a key is not found Current implementation of apply0 relies on tail method to iterate over all keys. When the list gets to its end, tail produces an 'empty map' message in its exception, which is thrown by ListMap. This change checks if the collection is empty before calling tail and provides a more appropriate key not found message.</notextile>
[SI-6158](https://issues.scala-lang.org/browse/SI-6158) | [6424907](https://github.com/scala/scala/commit/6424907) | <notextile>SI-6158 Restore compile error output under partest --show-log</notextile>




#### Complete commit list!

sha | Title
---: | ---
[08c7293](https://github.com/scala/scala/commit/08c7293) | <notextile>SI-7201 scaladoc url in scala-(library,actors,swing,reflect) pom</notextile>
[12a130d](https://github.com/scala/scala/commit/12a130d) | <notextile>SI-6424 Scaladoc: Use mapNodes.get(_) to avoid NoSuchElementException</notextile>
[f628565](https://github.com/scala/scala/commit/f628565) | <notextile>Prevent slash duplication.</notextile>
[7f9feba](https://github.com/scala/scala/commit/7f9feba) | <notextile>[backport #1727] SI-7359 cyclic nested java class</notextile>
[dd33e28](https://github.com/scala/scala/commit/dd33e28) | <notextile>SI-7486 regression in implicit resolution.</notextile>
[6114038](https://github.com/scala/scala/commit/6114038) | <notextile>[nomaster] unbreaks test.bc</notextile>
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
[351d5ec](https://github.com/scala/scala/commit/351d5ec) | <notextile>Absolute path in error message.</notextile>
[3e27fec](https://github.com/scala/scala/commit/3e27fec) | <notextile>SI-7388 Be more robust against cycles in error symbol creation.</notextile>
[15e9ef8](https://github.com/scala/scala/commit/15e9ef8) | <notextile>SI-7377 Fix retypechecking of patterns on case companion alias</notextile>
[ef04619](https://github.com/scala/scala/commit/ef04619) | <notextile>SI-7319 Clear error buffer during Typer reset.</notextile>
[aa6723c](https://github.com/scala/scala/commit/aa6723c) | <notextile>SI-7329 duplicate default getters for specialized parameters.</notextile>
[67c2d6d](https://github.com/scala/scala/commit/67c2d6d) | <notextile>SI-6286 IllegalArgumentException handling specialized method.</notextile>
[23dd325](https://github.com/scala/scala/commit/23dd325) | <notextile>SI-7360 Don't let a follow-up TypeError obscure the original error.</notextile>
[2885eb0](https://github.com/scala/scala/commit/2885eb0) | <notextile>Revert &quot;SI-6387 Clones accessor before name expansion&quot;</notextile>
[7250312](https://github.com/scala/scala/commit/7250312) | <notextile>SI-6386 typed existential type tree's original now have tpe set</notextile>
[6a61e17](https://github.com/scala/scala/commit/6a61e17) | <notextile>SI-7289 Less strict type application for TypeVar.</notextile>
[34a6fa9](https://github.com/scala/scala/commit/34a6fa9) | <notextile>SI-6937 core type tags are no longer referentially unique</notextile>
dc3fa0a | <notextile>if starr.use.released fetch Scala ${starr.version} for STARR</notextile>
[3fe2e86](https://github.com/scala/scala/commit/3fe2e86) | <notextile>assume build.release when maven.version.suffix is set</notextile>
[7184bd3](https://github.com/scala/scala/commit/7184bd3) | <notextile>make quick.done depend on quick.bin again</notextile>
[0affa94](https://github.com/scala/scala/commit/0affa94) | <notextile>SI-7321 Memory leak in specialize on multiple compiler runs.</notextile>
[6591acb](https://github.com/scala/scala/commit/6591acb) | <notextile>comments to address reviewer feedback</notextile>
[92a1785](https://github.com/scala/scala/commit/92a1785) | <notextile>formatting</notextile>
[7c0e8f0](https://github.com/scala/scala/commit/7c0e8f0) | <notextile>Preliminary support for zinc.</notextile>
[ceeb40c](https://github.com/scala/scala/commit/ceeb40c) | <notextile>Regularity for build.xml: 1 output dir / project</notextile>
[5dca660](https://github.com/scala/scala/commit/5dca660) | <notextile>get rid of args element in staged-scalac</notextile>
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
[fbecd5d](https://github.com/scala/scala/commit/fbecd5d) | <notextile>Allow getting STARR via maven, also: locker.skip</notextile>
[7d2c1f3](https://github.com/scala/scala/commit/7d2c1f3) | <notextile>Use stage/project for taskname instead of scalacfork</notextile>
[e3b5e0b](https://github.com/scala/scala/commit/e3b5e0b) | <notextile>Sanity for build.xml: exscriptus&amp;positus delendus est.</notextile>
[df29290](https://github.com/scala/scala/commit/df29290) | <notextile>SI-7013 Scaladoc: Fix StackOverflowError</notextile>
[395e90a](https://github.com/scala/scala/commit/395e90a) | <notextile>SI-7251, compiler crash with $.</notextile>
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
[a4fb773](https://github.com/scala/scala/commit/a4fb773) | <notextile>SI-7240 fixes language feature lookup</notextile>
[41e3b89](https://github.com/scala/scala/commit/41e3b89) | <notextile>SI-7233 Account for aliased imports in Erasure</notextile>
[33b499c](https://github.com/scala/scala/commit/33b499c) | <notextile>SI-7233 Account for aliased imports in eta expansion.</notextile>
[9bc17e7](https://github.com/scala/scala/commit/9bc17e7) | <notextile>SI-6725 `f` interpolator now supports %n tokens</notextile>
[eb365f9](https://github.com/scala/scala/commit/eb365f9) | <notextile>SI-7132 - don't discard Unit type in interpreter</notextile>
[745c36a](https://github.com/scala/scala/commit/745c36a) | <notextile>SI-7328 Bail out of names/defaults if args are error typed</notextile>
[83c9c76](https://github.com/scala/scala/commit/83c9c76) | <notextile>SI-7234 Make named args play nice with dep. method types</notextile>
[f742aa3](https://github.com/scala/scala/commit/f742aa3) | <notextile>SI-5710 has fixed itself</notextile>
[3ae2653](https://github.com/scala/scala/commit/3ae2653) | <notextile>reifier is now aware of SI-7235</notextile>
[7e52fb9](https://github.com/scala/scala/commit/7e52fb9) | <notextile>SI-7226 Fix inference regression caused by TypeVar equality.</notextile>
[292435f](https://github.com/scala/scala/commit/292435f) | <notextile>Fix SI-7224.</notextile>
[acd74ca](https://github.com/scala/scala/commit/acd74ca) | <notextile>SI-7214 outer check based on dealiased pattern type.</notextile>
[53c499b](https://github.com/scala/scala/commit/53c499b) | <notextile>SI-7109 SI-7153 Generalize the API to get docComments: allow to force docTrees for given fragments. Don't type-check when forcing doc comments, but rather  do it directly. Test the new functionality as well as better tests for the old one.</notextile>
[2cf6c5d](https://github.com/scala/scala/commit/2cf6c5d) | <notextile>[port] SI-7183 Disable unreachability for withFilter matches.</notextile>
[5b7cfe3](https://github.com/scala/scala/commit/5b7cfe3) | <notextile>better names for components of MatchTranslator</notextile>
[0a3219b](https://github.com/scala/scala/commit/0a3219b) | <notextile>move sat solving to separate file</notextile>
[ebaa34e](https://github.com/scala/scala/commit/ebaa34e) | <notextile>simplify dependencies between patmat components, remove self types</notextile>
[ad69835](https://github.com/scala/scala/commit/ad69835) | <notextile>SI-7215 Fix transpose of an empty Array[Array[T]].</notextile>
[387fbf4](https://github.com/scala/scala/commit/387fbf4) | <notextile>SI-7185 Avoid NPE in TreeInfo.isExprSafeToInline</notextile>
[1117be8](https://github.com/scala/scala/commit/1117be8) | <notextile>SI-7190 macros no longer give rise to bridges</notextile>
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
21d5d38 | <notextile>moves Symbol#SymbolKind to Symbols</notextile>
[3e7db2d](https://github.com/scala/scala/commit/3e7db2d) | <notextile>adds some comments to resetAttrs</notextile>
e2a17d9 | <notextile>resetAttrs now always erases This.tpe</notextile>
[4f1bfec](https://github.com/scala/scala/commit/4f1bfec) | <notextile>Fix SI-7107: scala now thinks every exception is polymorphic</notextile>
[8187deb](https://github.com/scala/scala/commit/8187deb) | <notextile>SI-7074 Fix xml attribute sorting</notextile>
[89be691](https://github.com/scala/scala/commit/89be691) | <notextile>fixes the test for SI-7112</notextile>
[3d5758c](https://github.com/scala/scala/commit/3d5758c) | <notextile>SI-7171 Consider prefix when assessing type finality.</notextile>
[18a2ba2](https://github.com/scala/scala/commit/18a2ba2) | <notextile>please ant with filenames, add comments</notextile>
[6a7078c](https://github.com/scala/scala/commit/6a7078c) | <notextile>remove unused imports</notextile>
[7fdc873](https://github.com/scala/scala/commit/7fdc873) | <notextile>[refactor] move some logic-related code</notextile>
[c930a85](https://github.com/scala/scala/commit/c930a85) | <notextile>[refactor] better name for symbolicCase</notextile>
[76fc728](https://github.com/scala/scala/commit/76fc728) | <notextile>[refactor] make hash-consing more robust</notextile>
[712a921](https://github.com/scala/scala/commit/712a921) | <notextile>drop Cond in favor of Prop</notextile>
[1b47248](https://github.com/scala/scala/commit/1b47248) | <notextile>[refactor] prepare migration from Cond to Prop</notextile>
[647a760](https://github.com/scala/scala/commit/647a760) | <notextile>[refactor] type analysis consolidation</notextile>
[e14846b](https://github.com/scala/scala/commit/e14846b) | <notextile>[refactor] move PatternMatching.scala to transform.patmat</notextile>
[f5ed914](https://github.com/scala/scala/commit/f5ed914) | <notextile>re-align 2.10.x's pattern matcher with master's</notextile>
[b20e288](https://github.com/scala/scala/commit/b20e288) | <notextile>Fixed error in reflection API docs about linearization order on method baseClasses</notextile>
[d2a36ab](https://github.com/scala/scala/commit/d2a36ab) | <notextile>Shadowed Implict typo (fixes no issue)</notextile>
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
[de2410b](https://github.com/scala/scala/commit/de2410b) | <notextile>silences t6323a</notextile>
[673cc83](https://github.com/scala/scala/commit/673cc83) | <notextile>SI-6514 Avoid spurious dead code warnings</notextile>
[ef6095a](https://github.com/scala/scala/commit/ef6095a) | <notextile>Tolerate symbol sharing between accessor/field.</notextile>
[451cab9](https://github.com/scala/scala/commit/451cab9) | <notextile>SI-6225 Fix import of inherited package object implicits</notextile>
[c049d66](https://github.com/scala/scala/commit/c049d66) | <notextile>SI-6935 Added readResolve in BoxedUnit When deserializing Unit, it would return an instance of Object, but not a Scala Unit. By adding readResolve, the deserialization of Unit will work.</notextile>
[7b425bf](https://github.com/scala/scala/commit/7b425bf) | <notextile>SI-6370 changed ListMap apply0 method to produce correct error message when a key is not found Current implementation of apply0 relies on tail method to iterate over all keys. When the list gets to its end, tail produces an 'empty map' message in its exception, which is thrown by ListMap. This change checks if the collection is empty before calling tail and provides a more appropriate key not found message.</notextile>
[6424907](https://github.com/scala/scala/commit/6424907) | <notextile>SI-6158 Restore compile error output under partest --show-log</notextile>
