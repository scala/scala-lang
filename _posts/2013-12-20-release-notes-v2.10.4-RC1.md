---

category: announcement
title: "Scala 2.10.4-RC1 is now available!"
---
We are very happy to announce the first release candidate of Scala 2.10.4!
If no serious blocking issues are found this will become the final 2.10.4 version.

<!-- Substitute both version numbers here! -->
The release is available for download from [scala-lang.org](https://scala-lang.org/download/2.10.4-RC1.html) or from [Maven Central](https://search.maven.org/#search|ga|1|g:%22org.scala-lang%22%20AND%20v%3A%222.10.4-RC1%22).

The Scala team and contributors [fixed 23 issues since 2.10.3](https://issues.scala-lang.org/issues/?filter=12308)!

In total,
[39 RC1 pull requests](https://github.com/scala/scala/issues?milestone=22&state=closed)
were merged on [GitHub](https://github.com/scala/scala).

<!--break-->

### Known Issues
Before reporting a bug, please have a look at these [known issues](https://issues.scala-lang.org/issues/?filter=12309).

### Scala IDE for Eclipse
The Scala IDE with this release built right in is available through the following update-site:

* for Eclipse 4.2/4.3 (Juno/Kepler)

Have a look at the [getting started guide](http://scala-ide.org/docs/user/gettingstarted.html) for more info.

### New features in the 2.10 series
Since 2.10.4 is strictly a bug-fix release, here's an overview of the most prominent new features and improvements as introduced in 2.10.0:

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
16 | <notextile>Jason Zaugg</notextile>
15 | <notextile>Adriaan Moors</notextile>
3 | <notextile>Simon Schaefer</notextile>
3 | <notextile>Eugene Burmako</notextile>
3 | <notextile>Luc Bourlier</notextile>
2 | <notextile>Som Snytt</notextile>
2 | <notextile>Paul Phillips</notextile>
2 | <notextile>Mirco Dotta</notextile>
1 | <notextile>Mark Harrah</notextile>
1 | <notextile>Vlad Ureche</notextile>
1 | <notextile>Heather Miller</notextile>
1 | <notextile>Franc&Atilde;&szlig;ois Garillot</notextile>
1 | <notextile>Roberto Tyley</notextile>



#### Commits and the issues they fixed since v2.10.3

Issue(s) | Commit | Message
--- | --- | ---
[SI-6426](https://issues.scala-lang.org/browse/SI-6426) | [47562e7adb](https://github.com/scala/scala/commit/47562e7adb) | <notextile>Revert &quot;SI-6426, importable _.&quot;</notextile>
[SI-8062](https://issues.scala-lang.org/browse/SI-8062) | [f0d913b51d](https://github.com/scala/scala/commit/f0d913b51d) | <notextile>SI-8062 Fix inliner cycle with recursion, separate compilation</notextile>
[SI-7912](https://issues.scala-lang.org/browse/SI-7912) | [006e2f2aad](https://github.com/scala/scala/commit/006e2f2aad) | <notextile>SI-7912 Be defensive calling `toString` in `MatchError#getMessage`</notextile>
[SI-8060](https://issues.scala-lang.org/browse/SI-8060) | [bb427a3416](https://github.com/scala/scala/commit/bb427a3416) | <notextile>SI-8060 Avoid infinite loop with higher kinded type alias</notextile>
[SI-7995](https://issues.scala-lang.org/browse/SI-7995) | [5ed834e251](https://github.com/scala/scala/commit/5ed834e251) | <notextile>SI-7995 completion imported vars and vals</notextile>
[SI-8019](https://issues.scala-lang.org/browse/SI-8019) | [c955cf4c2e](https://github.com/scala/scala/commit/c955cf4c2e) | <notextile>SI-8019 Make Publisher check PartialFunction is defined for Event</notextile>
[SI-8029](https://issues.scala-lang.org/browse/SI-8029) | [fdcc262070](https://github.com/scala/scala/commit/fdcc262070) | <notextile>SI-8029 Avoid multi-run cyclic error with companions, package object</notextile>
[SI-7439](https://issues.scala-lang.org/browse/SI-7439) | [8d74fa0242](https://github.com/scala/scala/commit/8d74fa0242) | <notextile>[backport] SI-7439 Avoid NPE in `isMonomorphicType` with stub symbols.</notextile>
[SI-8010](https://issues.scala-lang.org/browse/SI-8010) | [9036f774bc](https://github.com/scala/scala/commit/9036f774bc) | <notextile>SI-8010 Fix regression in erasure double definition checks</notextile>
[SI-7982](https://issues.scala-lang.org/browse/SI-7982) | [7d4109486b](https://github.com/scala/scala/commit/7d4109486b) | <notextile>SI-7982 Changed contract of askLoadedType to unload units by default</notextile>
[SI-6913](https://issues.scala-lang.org/browse/SI-6913) | [70634395a4](https://github.com/scala/scala/commit/70634395a4) | <notextile>SI-6913 Fixing semantics of Future fallbackTo to be according to docs</notextile>
[SI-7458](https://issues.scala-lang.org/browse/SI-7458) | [02308c9691](https://github.com/scala/scala/commit/02308c9691) | <notextile>SI-7458 Pres. compiler must not observe trees in silent mode</notextile>
[SI-7548](https://issues.scala-lang.org/browse/SI-7548) | [652b3b4b9d](https://github.com/scala/scala/commit/652b3b4b9d) | <notextile>SI-7548 Test to demonstrate residual exploratory typing bug</notextile>
[SI-7548](https://issues.scala-lang.org/browse/SI-7548) | [b7509c922f](https://github.com/scala/scala/commit/b7509c922f) | <notextile>SI-7548 askTypeAt returns the same type whether the source was fully or targeted</notextile>
[SI-8005](https://issues.scala-lang.org/browse/SI-8005) | [3629b645cc](https://github.com/scala/scala/commit/3629b645cc) | <notextile>SI-8005 Fixes NoPositon error for updateDynamic calls</notextile>
[SI-8004](https://issues.scala-lang.org/browse/SI-8004) | [696545d53f](https://github.com/scala/scala/commit/696545d53f) | <notextile>SI-8004 Resolve NoPosition error for applyDynamicNamed method call</notextile>
[SI-7463](https://issues.scala-lang.org/browse/SI-7463), [SI-8003](https://issues.scala-lang.org/browse/SI-8003) | [b915f440eb](https://github.com/scala/scala/commit/b915f440eb) | <notextile>SI-7463,SI-8003 Correct wrong position for {select,apply}Dynamic calls</notextile>
[SI-7280](https://issues.scala-lang.org/browse/SI-7280) | [053a2744c6](https://github.com/scala/scala/commit/053a2744c6) | <notextile>[nomaster] SI-7280 Scope completion not returning members provided by imports</notextile>
[SI-7915](https://issues.scala-lang.org/browse/SI-7915) | [04df2e48e4](https://github.com/scala/scala/commit/04df2e48e4) | <notextile>SI-7915 Corrected range positions created during default args expansion</notextile>
[SI-7776](https://issues.scala-lang.org/browse/SI-7776) | [d15ed081ef](https://github.com/scala/scala/commit/d15ed081ef) | <notextile>[backport] SI-7776 post-erasure signature clashes are now macro-aware</notextile>
[SI-6546](https://issues.scala-lang.org/browse/SI-6546) | [075f6f260c](https://github.com/scala/scala/commit/075f6f260c) | <notextile>SI-6546 InnerClasses attribute refers to absent class</notextile>
[SI-7638](https://issues.scala-lang.org/browse/SI-7638), [SI-4012](https://issues.scala-lang.org/browse/SI-4012) | [e09a8a2b7f](https://github.com/scala/scala/commit/e09a8a2b7f) | <notextile>SI-4012 Mixin and specialization work well</notextile>
[SI-7519](https://issues.scala-lang.org/browse/SI-7519) | [50c8b39ec4](https://github.com/scala/scala/commit/50c8b39ec4) | <notextile>SI-7519: Additional test case covering sbt/sbt#914</notextile>
[SI-7519](https://issues.scala-lang.org/browse/SI-7519) | [ce74bb0060](https://github.com/scala/scala/commit/ce74bb0060) | <notextile>[nomaster] SI-7519 Less brutal attribute resetting in adapt fallback</notextile>
[SI-4936](https://issues.scala-lang.org/browse/SI-4936), [SI-6026](https://issues.scala-lang.org/browse/SI-6026) | [e350bd2cbc](https://github.com/scala/scala/commit/e350bd2cbc) | <notextile>[nomaster] SI-6026 backport getResource bug fix</notextile>
[SI-6026](https://issues.scala-lang.org/browse/SI-6026) | [2bfe0e797c](https://github.com/scala/scala/commit/2bfe0e797c) | <notextile>SI-6026 REPL checks for javap before tools.jar</notextile>
[SI-7295](https://issues.scala-lang.org/browse/SI-7295) | [25bcba59ce](https://github.com/scala/scala/commit/25bcba59ce) | <notextile>SI-7295 Fix windows batch file with args containing parentheses</notextile>
[SI-7020](https://issues.scala-lang.org/browse/SI-7020) | [7b560213cb](https://github.com/scala/scala/commit/7b560213cb) | <notextile>Disable tests for SI-7020</notextile>
[SI-7783](https://issues.scala-lang.org/browse/SI-7783) | [2ccbfa5778](https://github.com/scala/scala/commit/2ccbfa5778) | <notextile>SI-7783 Don't issue deprecation warnings for inferred TypeTrees</notextile>
[SI-7815](https://issues.scala-lang.org/browse/SI-7815) | [733b3220c9](https://github.com/scala/scala/commit/733b3220c9) | <notextile>SI-7815 Dealias before deeming method type as dependent</notextile>




#### Complete commit list!

sha | Title
---: | ---
[3fa2c97853](https://github.com/scala/scala/commit/3fa2c97853) | <notextile>Report error on code size overflow, log method name.</notextile>
[2aa9da578e](https://github.com/scala/scala/commit/2aa9da578e) | <notextile>Partially revert f8d8f7d08d.</notextile>
[47562e7adb](https://github.com/scala/scala/commit/47562e7adb) | <notextile>Revert &quot;SI-6426, importable _.&quot;</notextile>
[f0d913b51d](https://github.com/scala/scala/commit/f0d913b51d) | <notextile>SI-8062 Fix inliner cycle with recursion, separate compilation</notextile>
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
[7d4109486b](https://github.com/scala/scala/commit/7d4109486b) | <notextile>SI-7982 Changed contract of askLoadedType to unload units by default</notextile>
[70634395a4](https://github.com/scala/scala/commit/70634395a4) | <notextile>SI-6913 Fixing semantics of Future fallbackTo to be according to docs</notextile>
[02308c9691](https://github.com/scala/scala/commit/02308c9691) | <notextile>SI-7458 Pres. compiler must not observe trees in silent mode</notextile>
[652b3b4b9d](https://github.com/scala/scala/commit/652b3b4b9d) | <notextile>SI-7548 Test to demonstrate residual exploratory typing bug</notextile>
[b7509c922f](https://github.com/scala/scala/commit/b7509c922f) | <notextile>SI-7548 askTypeAt returns the same type whether the source was fully or targeted</notextile>
[0c963c9085](https://github.com/scala/scala/commit/0c963c9085) | <notextile>[nomaster] teaches toolbox about -Yrangepos</notextile>
[3629b645cc](https://github.com/scala/scala/commit/3629b645cc) | <notextile>SI-8005 Fixes NoPositon error for updateDynamic calls</notextile>
[696545d53f](https://github.com/scala/scala/commit/696545d53f) | <notextile>SI-8004 Resolve NoPosition error for applyDynamicNamed method call</notextile>
[b915f440eb](https://github.com/scala/scala/commit/b915f440eb) | <notextile>SI-7463,SI-8003 Correct wrong position for {select,apply}Dynamic calls</notextile>
[053a2744c6](https://github.com/scala/scala/commit/053a2744c6) | <notextile>[nomaster] SI-7280 Scope completion not returning members provided by imports</notextile>
[eb9f0f7975](https://github.com/scala/scala/commit/eb9f0f7975) | <notextile>[nomaster] Adds test cases for scope completion</notextile>
[3a8796da1a](https://github.com/scala/scala/commit/3a8796da1a) | <notextile>[nomaster] Test infrastructure for scope completion</notextile>
[04df2e48e4](https://github.com/scala/scala/commit/04df2e48e4) | <notextile>SI-7915 Corrected range positions created during default args expansion</notextile>
[ec89b59717](https://github.com/scala/scala/commit/ec89b59717) | <notextile>Upgrade pax-url-aether to 1.6.0.</notextile>
[1d29c0a08b](https://github.com/scala/scala/commit/1d29c0a08b) | <notextile>[backport] Add buildcharacter.properties to .gitignore.</notextile>
[31ead67a30](https://github.com/scala/scala/commit/31ead67a30) | <notextile>IDE needs swing/actors/continuations</notextile>
[852a9479d0](https://github.com/scala/scala/commit/852a9479d0) | <notextile>Allow retrieving STARR from non-standard repo for PR validation</notextile>
[40af1e0c44](https://github.com/scala/scala/commit/40af1e0c44) | <notextile>Allow publishing only core (pr validation)</notextile>
[ba0718fd1d](https://github.com/scala/scala/commit/ba0718fd1d) | <notextile>Render relevant properties to buildcharacter.properties</notextile>
[d15ed081ef](https://github.com/scala/scala/commit/d15ed081ef) | <notextile>[backport] SI-7776 post-erasure signature clashes are now macro-aware</notextile>
[6045a05b83](https://github.com/scala/scala/commit/6045a05b83) | <notextile>Fix completion after application with implicit arguments</notextile>
[075f6f260c](https://github.com/scala/scala/commit/075f6f260c) | <notextile>SI-6546 InnerClasses attribute refers to absent class</notextile>
[e09a8a2b7f](https://github.com/scala/scala/commit/e09a8a2b7f) | <notextile>SI-4012 Mixin and specialization work well</notextile>
[50c8b39ec4](https://github.com/scala/scala/commit/50c8b39ec4) | <notextile>SI-7519: Additional test case covering sbt/sbt#914</notextile>
[ce74bb0060](https://github.com/scala/scala/commit/ce74bb0060) | <notextile>[nomaster] SI-7519 Less brutal attribute resetting in adapt fallback</notextile>
[e350bd2cbc](https://github.com/scala/scala/commit/e350bd2cbc) | <notextile>[nomaster] SI-6026 backport getResource bug fix</notextile>
[2bfe0e797c](https://github.com/scala/scala/commit/2bfe0e797c) | <notextile>SI-6026 REPL checks for javap before tools.jar</notextile>
[25bcba59ce](https://github.com/scala/scala/commit/25bcba59ce) | <notextile>SI-7295 Fix windows batch file with args containing parentheses</notextile>
[7b560213cb](https://github.com/scala/scala/commit/7b560213cb) | <notextile>Disable tests for SI-7020</notextile>
[8986ee4fd5](https://github.com/scala/scala/commit/8986ee4fd5) | <notextile>Disable flaky presentation compiler test.</notextile>
[2ccbfa5778](https://github.com/scala/scala/commit/2ccbfa5778) | <notextile>SI-7783 Don't issue deprecation warnings for inferred TypeTrees</notextile>
[ee9138e99e](https://github.com/scala/scala/commit/ee9138e99e) | <notextile>Bump version to 2.10.4 for nightlies</notextile>
[733b3220c9](https://github.com/scala/scala/commit/733b3220c9) | <notextile>SI-7815 Dealias before deeming method type as dependent</notextile>
