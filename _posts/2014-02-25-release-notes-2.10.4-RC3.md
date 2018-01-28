---

category: announcement
title: "Scala 2.10.4-RC3 is now available!"
---
We are very happy to announce the third release candidate of Scala 2.10.4!
If no serious blocking issues are found this will become the final 2.10.4 version.

The release is available for download from [scala-lang.org](http://scala-lang.org/download/2.10.4-RC3.html) or from [Maven Central](http://search.maven.org/#search%7Cga%7C1%7Cg%3Aorg.scala-lang%20AND%20v%3A2.10.4-RC3).

The Scala team and contributors [fixed 31 issues since 2.10.3](https://issues.scala-lang.org/issues/?filter=12416)!

In total, 
[39 RC1 pull requests](https://github.com/scala/scala/issues?milestone=22&state=closed), [12 RC2 pull requests](https://github.com/scala/scala/issues?milestone=28&state=closed) and [3 RC3 pull requests](https://github.com/scala/scala/issues?milestone=30&state=closed)
were merged on [GitHub](https://github.com/scala/scala).

<!--break-->

### Known Issues
Before reporting a bug, please have a look at these [known issues](https://issues.scala-lang.org/issues/?filter=12417).

### Scala IDE for Eclipse
The Scala IDE with this release built right in is available through the following update-site:

* for Eclipse 4.2/4.3 (Juno/Kepler)

Have a look at the [getting started guide](http://scala-ide.org/docs/user/gettingstarted.html) for more info.

### New features in the 2.10 series
Since 2.10.4 is strictly a bug-fix release, here's an overview of the most prominent new features and improvements as introduced in 2.10.0:

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
26 | <notextile>Jason Zaugg</notextile>
15 | <notextile>Adriaan Moors</notextile>
5 | <notextile>Eugene Burmako</notextile>
3 | <notextile>A. P. Marki</notextile>
3 | <notextile>Simon Schaefer</notextile>
3 | <notextile>Mirco Dotta</notextile>
3 | <notextile>Luc Bourlier</notextile>
2 | <notextile>Paul Phillips</notextile>
2 | <notextile>Fran&ccedil;ois Garillot</notextile>
1 | <notextile>Mark Harrah</notextile>
1 | <notextile>Vlad Ureche</notextile>
1 | <notextile>James Ward</notextile>
1 | <notextile>Heather Miller</notextile>
1 | <notextile>Roberto Tyley</notextile>



#### Commits and the issues they fixed since v2.10.3

Issue(s) | Commit | Message
--- | --- | ---
[SI-7902](https://issues.scala-lang.org/browse/SI-7902) | [5f4011e](https://github.com/scala/scala/commit/5f4011e) | <notextile>[backport] SI-7902 Fix spurious kind error due to an unitialized symbol</notextile>
[SI-8205](https://issues.scala-lang.org/browse/SI-8205) | [8ee165c](https://github.com/scala/scala/commit/8ee165c) | <notextile>SI-8205 [nomaster] backport test pos.lineContent</notextile>
[SI-8126](https://issues.scala-lang.org/browse/SI-8126), [SI-6566](https://issues.scala-lang.org/browse/SI-6566) | [806b6e4](https://github.com/scala/scala/commit/806b6e4) | <notextile>Backports library changes related to SI-6566 from a419799</notextile>
[SI-8146](https://issues.scala-lang.org/browse/SI-8146), [SI-8146](https://issues.scala-lang.org/browse/SI-8146), [SI-8146](https://issues.scala-lang.org/browse/SI-8146), [SI-8146](https://issues.scala-lang.org/browse/SI-8146) | [ff13742](https://github.com/scala/scala/commit/ff13742) | <notextile>[nomaster] SI-8146 Fix non-deterministic &lt;:&lt; for deeply nested types</notextile>
[SI-6443](https://issues.scala-lang.org/browse/SI-6443), [SI-8143](https://issues.scala-lang.org/browse/SI-8143) | [1baf11a](https://github.com/scala/scala/commit/1baf11a) | <notextile>SI-8143 Fix bug with super-accessors / dependent types</notextile>
[SI-8152](https://issues.scala-lang.org/browse/SI-8152) | 9df2dcc | <notextile>[nomaster] SI-8152 Backport variance validator performance fix</notextile>
[SI-8111](https://issues.scala-lang.org/browse/SI-8111) | [c91d373](https://github.com/scala/scala/commit/c91d373) | <notextile>SI-8111 Expand the comment with a more detailed TODO</notextile>
[SI-8111](https://issues.scala-lang.org/browse/SI-8111) | [2c770ae](https://github.com/scala/scala/commit/2c770ae) | <notextile>SI-8111 Repair symbol owners after abandoned named-/default-args</notextile>
[SI-7120](https://issues.scala-lang.org/browse/SI-7120), [SI-8114](https://issues.scala-lang.org/browse/SI-8114), [SI-7120](https://issues.scala-lang.org/browse/SI-7120) | [5876e8c](https://github.com/scala/scala/commit/5876e8c) | <notextile>[nomaster] SI-8114 Binary compat. workaround for erasure bug SI-7120</notextile>
[SI-7636](https://issues.scala-lang.org/browse/SI-7636), [SI-6563](https://issues.scala-lang.org/browse/SI-6563) | [255c51b](https://github.com/scala/scala/commit/255c51b) | <notextile>SI-6563 Test case for already-fixed crasher</notextile>
[SI-8104](https://issues.scala-lang.org/browse/SI-8104), [SI-8104](https://issues.scala-lang.org/browse/SI-8104) | [c0cb1d8](https://github.com/scala/scala/commit/c0cb1d8) | <notextile>[nomaster] codifies the state of the art wrt SI-8104</notextile>
[SI-8085](https://issues.scala-lang.org/browse/SI-8085) | [7e85b59](https://github.com/scala/scala/commit/7e85b59) | <notextile>SI-8085 Fix BrowserTraverser for package objects</notextile>
[SI-8085](https://issues.scala-lang.org/browse/SI-8085) | [a12dd9c](https://github.com/scala/scala/commit/a12dd9c) | <notextile>Test demonstrating SI-8085</notextile>
[SI-6426](https://issues.scala-lang.org/browse/SI-6426) | [47562e7](https://github.com/scala/scala/commit/47562e7) | <notextile>Revert &quot;SI-6426, importable _.&quot;</notextile>
[SI-8062](https://issues.scala-lang.org/browse/SI-8062) | [f0d913b](https://github.com/scala/scala/commit/f0d913b) | <notextile>SI-8062 Fix inliner cycle with recursion, separate compilation</notextile>
[SI-7912](https://issues.scala-lang.org/browse/SI-7912) | [006e2f2](https://github.com/scala/scala/commit/006e2f2) | <notextile>SI-7912 Be defensive calling `toString` in `MatchError#getMessage`</notextile>
[SI-8060](https://issues.scala-lang.org/browse/SI-8060) | [bb427a3](https://github.com/scala/scala/commit/bb427a3) | <notextile>SI-8060 Avoid infinite loop with higher kinded type alias</notextile>
[SI-7995](https://issues.scala-lang.org/browse/SI-7995) | [5ed834e](https://github.com/scala/scala/commit/5ed834e) | <notextile>SI-7995 completion imported vars and vals</notextile>
[SI-8019](https://issues.scala-lang.org/browse/SI-8019) | [c955cf4](https://github.com/scala/scala/commit/c955cf4) | <notextile>SI-8019 Make Publisher check PartialFunction is defined for Event</notextile>
[SI-8029](https://issues.scala-lang.org/browse/SI-8029) | [fdcc262](https://github.com/scala/scala/commit/fdcc262) | <notextile>SI-8029 Avoid multi-run cyclic error with companions, package object</notextile>
[SI-7439](https://issues.scala-lang.org/browse/SI-7439) | [8d74fa0](https://github.com/scala/scala/commit/8d74fa0) | <notextile>[backport] SI-7439 Avoid NPE in `isMonomorphicType` with stub symbols.</notextile>
[SI-8010](https://issues.scala-lang.org/browse/SI-8010) | [9036f77](https://github.com/scala/scala/commit/9036f77) | <notextile>SI-8010 Fix regression in erasure double definition checks</notextile>
[SI-7982](https://issues.scala-lang.org/browse/SI-7982) | [7d41094](https://github.com/scala/scala/commit/7d41094) | <notextile>SI-7982 Changed contract of askLoadedType to unload units by default</notextile>
[SI-6913](https://issues.scala-lang.org/browse/SI-6913) | [7063439](https://github.com/scala/scala/commit/7063439) | <notextile>SI-6913 Fixing semantics of Future fallbackTo to be according to docs</notextile>
[SI-7458](https://issues.scala-lang.org/browse/SI-7458) | [02308c9](https://github.com/scala/scala/commit/02308c9) | <notextile>SI-7458 Pres. compiler must not observe trees in silent mode</notextile>
[SI-7548](https://issues.scala-lang.org/browse/SI-7548) | [652b3b4](https://github.com/scala/scala/commit/652b3b4) | <notextile>SI-7548 Test to demonstrate residual exploratory typing bug</notextile>
[SI-7548](https://issues.scala-lang.org/browse/SI-7548) | [b7509c9](https://github.com/scala/scala/commit/b7509c9) | <notextile>SI-7548 askTypeAt returns the same type whether the source was fully or targeted</notextile>
[SI-8005](https://issues.scala-lang.org/browse/SI-8005) | [3629b64](https://github.com/scala/scala/commit/3629b64) | <notextile>SI-8005 Fixes NoPositon error for updateDynamic calls</notextile>
[SI-8004](https://issues.scala-lang.org/browse/SI-8004) | [696545d](https://github.com/scala/scala/commit/696545d) | <notextile>SI-8004 Resolve NoPosition error for applyDynamicNamed method call</notextile>
[SI-7463](https://issues.scala-lang.org/browse/SI-7463), [SI-8003](https://issues.scala-lang.org/browse/SI-8003) | [b915f44](https://github.com/scala/scala/commit/b915f44) | <notextile>SI-7463,SI-8003 Correct wrong position for {select,apply}Dynamic calls</notextile>
[SI-7280](https://issues.scala-lang.org/browse/SI-7280) | [053a274](https://github.com/scala/scala/commit/053a274) | <notextile>[nomaster] SI-7280 Scope completion not returning members provided by imports</notextile>
[SI-7915](https://issues.scala-lang.org/browse/SI-7915) | [04df2e4](https://github.com/scala/scala/commit/04df2e4) | <notextile>SI-7915 Corrected range positions created during default args expansion</notextile>
[SI-7776](https://issues.scala-lang.org/browse/SI-7776) | [d15ed08](https://github.com/scala/scala/commit/d15ed08) | <notextile>[backport] SI-7776 post-erasure signature clashes are now macro-aware</notextile>
[SI-6546](https://issues.scala-lang.org/browse/SI-6546) | [075f6f2](https://github.com/scala/scala/commit/075f6f2) | <notextile>SI-6546 InnerClasses attribute refers to absent class</notextile>
[SI-7638](https://issues.scala-lang.org/browse/SI-7638), [SI-4012](https://issues.scala-lang.org/browse/SI-4012) | [e09a8a2](https://github.com/scala/scala/commit/e09a8a2) | <notextile>SI-4012 Mixin and specialization work well</notextile>
[SI-7519](https://issues.scala-lang.org/browse/SI-7519) | [50c8b39e](https://github.com/scala/scala/commit/50c8b39e) | <notextile>SI-7519: Additional test case covering sbt/sbt#914</notextile>
[SI-7519](https://issues.scala-lang.org/browse/SI-7519) | [ce74bb0](https://github.com/scala/scala/commit/ce74bb0) | <notextile>[nomaster] SI-7519 Less brutal attribute resetting in adapt fallback</notextile>
[SI-4936](https://issues.scala-lang.org/browse/SI-4936), [SI-6026](https://issues.scala-lang.org/browse/SI-6026) | [e350bd2](https://github.com/scala/scala/commit/e350bd2) | <notextile>[nomaster] SI-6026 backport getResource bug fix</notextile>
[SI-6026](https://issues.scala-lang.org/browse/SI-6026) | [2bfe0e7](https://github.com/scala/scala/commit/2bfe0e7) | <notextile>SI-6026 REPL checks for javap before tools.jar</notextile>
[SI-7295](https://issues.scala-lang.org/browse/SI-7295) | [25bcba5](https://github.com/scala/scala/commit/25bcba5) | <notextile>SI-7295 Fix windows batch file with args containing parentheses</notextile>
[SI-7020](https://issues.scala-lang.org/browse/SI-7020) | [7b56021](https://github.com/scala/scala/commit/7b56021) | <notextile>Disable tests for SI-7020</notextile>
[SI-7783](https://issues.scala-lang.org/browse/SI-7783) | [2ccbfa5](https://github.com/scala/scala/commit/2ccbfa5) | <notextile>SI-7783 Don't issue deprecation warnings for inferred TypeTrees</notextile>
[SI-7815](https://issues.scala-lang.org/browse/SI-7815) | [733b322](https://github.com/scala/scala/commit/733b322) | <notextile>SI-7815 Dealias before deeming method type as dependent</notextile>




#### Complete commit list!

sha | Title
---: | ---
[5f4011e](https://github.com/scala/scala/commit/5f4011e) | <notextile>[backport] SI-7902 Fix spurious kind error due to an unitialized symbol</notextile>
[8ee165c](https://github.com/scala/scala/commit/8ee165c) | <notextile>SI-8205 [nomaster] backport test pos.lineContent</notextile>
d167f14 | <notextile>[nomaster] corrects an error in reify&rsquo;s documentation</notextile>
[806b6e4](https://github.com/scala/scala/commit/806b6e4) | <notextile>Backports library changes related to SI-6566 from a419799</notextile>
[ff13742](https://github.com/scala/scala/commit/ff13742) | <notextile>[nomaster] SI-8146 Fix non-deterministic &lt;:&lt; for deeply nested types</notextile>
[cbb88ac](https://github.com/scala/scala/commit/cbb88ac) | <notextile>[nomaster] Update MiMa and use new wildcard filter</notextile>
[1baf11a](https://github.com/scala/scala/commit/1baf11a) | <notextile>SI-8143 Fix bug with super-accessors / dependent types</notextile>
9df2dcc | <notextile>[nomaster] SI-8152 Backport variance validator performance fix</notextile>
[c91d373](https://github.com/scala/scala/commit/c91d373) | <notextile>SI-8111 Expand the comment with a more detailed TODO</notextile>
[2c770ae](https://github.com/scala/scala/commit/2c770ae) | <notextile>SI-8111 Repair symbol owners after abandoned named-/default-args</notextile>
[5876e8c](https://github.com/scala/scala/commit/5876e8c) | <notextile>[nomaster] SI-8114 Binary compat. workaround for erasure bug SI-7120</notextile>
[bd4adf5](https://github.com/scala/scala/commit/bd4adf5) | <notextile>More clear implicitNotFound error for ExecutionContext</notextile>
[255c51b](https://github.com/scala/scala/commit/255c51b) | <notextile>SI-6563 Test case for already-fixed crasher</notextile>
[c0cb1d8](https://github.com/scala/scala/commit/c0cb1d8) | <notextile>[nomaster] codifies the state of the art wrt SI-8104</notextile>
[7e85b59](https://github.com/scala/scala/commit/7e85b59) | <notextile>SI-8085 Fix BrowserTraverser for package objects</notextile>
[a12dd9c](https://github.com/scala/scala/commit/a12dd9c) | <notextile>Test demonstrating SI-8085</notextile>
[3fa2c97](https://github.com/scala/scala/commit/3fa2c97) | <notextile>Report error on code size overflow, log method name.</notextile>
[2aa9da5](https://github.com/scala/scala/commit/2aa9da5) | <notextile>Partially revert f8d8f7d08d.</notextile>
[47562e7](https://github.com/scala/scala/commit/47562e7) | <notextile>Revert &quot;SI-6426, importable _.&quot;</notextile>
[f0d913b](https://github.com/scala/scala/commit/f0d913b) | <notextile>SI-8062 Fix inliner cycle with recursion, separate compilation</notextile>
[9cdbe28](https://github.com/scala/scala/commit/9cdbe28) | <notextile>Fixup #3248 missed a spot in pack.xml</notextile>
[006e2f2](https://github.com/scala/scala/commit/006e2f2) | <notextile>SI-7912 Be defensive calling `toString` in `MatchError#getMessage`</notextile>
[bb427a3](https://github.com/scala/scala/commit/bb427a3) | <notextile>SI-8060 Avoid infinite loop with higher kinded type alias</notextile>
[27a3860](https://github.com/scala/scala/commit/27a3860) | <notextile>Update README, include doc/licenses in distro</notextile>
[139ba9d](https://github.com/scala/scala/commit/139ba9d) | <notextile>Add attribution for Typesafe.</notextile>
[e555106](https://github.com/scala/scala/commit/e555106) | <notextile>Remove docs/examples; they reside at scala/scala-dist</notextile>
[dc6dd58](https://github.com/scala/scala/commit/dc6dd58) | <notextile>Remove unused android test and corresponding license.</notextile>
[f8d8f7d](https://github.com/scala/scala/commit/f8d8f7d) | <notextile>Do not distribute partest and its dependencies.</notextile>
[5ed834e](https://github.com/scala/scala/commit/5ed834e) | <notextile>SI-7995 completion imported vars and vals</notextile>
[c955cf4](https://github.com/scala/scala/commit/c955cf4) | <notextile>SI-8019 Make Publisher check PartialFunction is defined for Event</notextile>
[fdcc262](https://github.com/scala/scala/commit/fdcc262) | <notextile>SI-8029 Avoid multi-run cyclic error with companions, package object</notextile>
[8d74fa0](https://github.com/scala/scala/commit/8d74fa0) | <notextile>[backport] SI-7439 Avoid NPE in `isMonomorphicType` with stub symbols.</notextile>
[9036f77](https://github.com/scala/scala/commit/9036f77) | <notextile>SI-8010 Fix regression in erasure double definition checks</notextile>
[3faa2ee](https://github.com/scala/scala/commit/3faa2ee) | <notextile>[nomaster] better error messages for various macro definition errors</notextile>
[7d41094](https://github.com/scala/scala/commit/7d41094) | <notextile>SI-7982 Changed contract of askLoadedType to unload units by default</notextile>
[7063439](https://github.com/scala/scala/commit/7063439) | <notextile>SI-6913 Fixing semantics of Future fallbackTo to be according to docs</notextile>
[02308c9](https://github.com/scala/scala/commit/02308c9) | <notextile>SI-7458 Pres. compiler must not observe trees in silent mode</notextile>
[652b3b4](https://github.com/scala/scala/commit/652b3b4) | <notextile>SI-7548 Test to demonstrate residual exploratory typing bug</notextile>
[b7509c9](https://github.com/scala/scala/commit/b7509c9) | <notextile>SI-7548 askTypeAt returns the same type whether the source was fully or targeted</notextile>
[0c963c9](https://github.com/scala/scala/commit/0c963c9) | <notextile>[nomaster] teaches toolbox about -Yrangepos</notextile>
[3629b64](https://github.com/scala/scala/commit/3629b64) | <notextile>SI-8005 Fixes NoPositon error for updateDynamic calls</notextile>
[696545d](https://github.com/scala/scala/commit/696545d) | <notextile>SI-8004 Resolve NoPosition error for applyDynamicNamed method call</notextile>
[b915f44](https://github.com/scala/scala/commit/b915f44) | <notextile>SI-7463,SI-8003 Correct wrong position for {select,apply}Dynamic calls</notextile>
[053a274](https://github.com/scala/scala/commit/053a274) | <notextile>[nomaster] SI-7280 Scope completion not returning members provided by imports</notextile>
[eb9f0f7](https://github.com/scala/scala/commit/eb9f0f7) | <notextile>[nomaster] Adds test cases for scope completion</notextile>
[3a8796d](https://github.com/scala/scala/commit/3a8796d) | <notextile>[nomaster] Test infrastructure for scope completion</notextile>
[04df2e4](https://github.com/scala/scala/commit/04df2e4) | <notextile>SI-7915 Corrected range positions created during default args expansion</notextile>
[ec89b59](https://github.com/scala/scala/commit/ec89b59) | <notextile>Upgrade pax-url-aether to 1.6.0.</notextile>
[1d29c0a](https://github.com/scala/scala/commit/1d29c0a) | <notextile>[backport] Add buildcharacter.properties to .gitignore.</notextile>
[31ead67](https://github.com/scala/scala/commit/31ead67) | <notextile>IDE needs swing/actors/continuations</notextile>
[852a947](https://github.com/scala/scala/commit/852a947) | <notextile>Allow retrieving STARR from non-standard repo for PR validation</notextile>
[40af1e0](https://github.com/scala/scala/commit/40af1e0) | <notextile>Allow publishing only core (pr validation)</notextile>
[ba0718f](https://github.com/scala/scala/commit/ba0718f) | <notextile>Render relevant properties to buildcharacter.properties</notextile>
[d15ed08](https://github.com/scala/scala/commit/d15ed08) | <notextile>[backport] SI-7776 post-erasure signature clashes are now macro-aware</notextile>
[6045a05](https://github.com/scala/scala/commit/6045a05) | <notextile>Fix completion after application with implicit arguments</notextile>
[075f6f2](https://github.com/scala/scala/commit/075f6f2) | <notextile>SI-6546 InnerClasses attribute refers to absent class</notextile>
[e09a8a2](https://github.com/scala/scala/commit/e09a8a2) | <notextile>SI-4012 Mixin and specialization work well</notextile>
[50c8b39e](https://github.com/scala/scala/commit/50c8b39e) | <notextile>SI-7519: Additional test case covering sbt/sbt#914</notextile>
[ce74bb0](https://github.com/scala/scala/commit/ce74bb0) | <notextile>[nomaster] SI-7519 Less brutal attribute resetting in adapt fallback</notextile>
[e350bd2](https://github.com/scala/scala/commit/e350bd2) | <notextile>[nomaster] SI-6026 backport getResource bug fix</notextile>
[2bfe0e7](https://github.com/scala/scala/commit/2bfe0e7) | <notextile>SI-6026 REPL checks for javap before tools.jar</notextile>
[25bcba5](https://github.com/scala/scala/commit/25bcba5) | <notextile>SI-7295 Fix windows batch file with args containing parentheses</notextile>
[7b56021](https://github.com/scala/scala/commit/7b56021) | <notextile>Disable tests for SI-7020</notextile>
[8986ee4](https://github.com/scala/scala/commit/8986ee4) | <notextile>Disable flaky presentation compiler test.</notextile>
[2ccbfa5](https://github.com/scala/scala/commit/2ccbfa5) | <notextile>SI-7783 Don't issue deprecation warnings for inferred TypeTrees</notextile>
[ee9138e](https://github.com/scala/scala/commit/ee9138e) | <notextile>Bump version to 2.10.4 for nightlies</notextile>
[733b322](https://github.com/scala/scala/commit/733b322) | <notextile>SI-7815 Dealias before deeming method type as dependent</notextile>


      
