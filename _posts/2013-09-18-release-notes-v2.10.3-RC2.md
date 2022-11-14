---

category: announcement
title: "Scala 2.10.3-RC2 is now available!"
---
We are very happy to announce the RC2 release of Scala 2.10.3! If no serious blocking issues are found this will become the final 2.10.3 version.

The Scala team and contributors [fixed 48 issues since 2.10.2](https://issues.scala-lang.org/secure/IssueNavigator.jspa?mode=hide&requestId=12215)!

In total, [63 RC1 pull requests](https://github.com/scala/scala/issues?milestone=17&state=closed) and [19 RC2 pull requests](https://github.com/scala/scala/issues?milestone=23&state=closed) were opened on [GitHub](https://github.com/scala/scala) of which 70 were merged after having been [tested](https://github.com/typesafehub/ghpullrequest-validator) and reviewed.

<!--break-->

### Known Issues
Before reporting a bug, please have a look at these [known issues](https://issues.scala-lang.org/secure/IssueNavigator.jspa?mode=hide&requestId=12216).

### Scala IDE for Eclipse
The Scala IDE with Scala 2.10.3-RC2 built right in is available through the following update-site:

* for Eclipse 4.2/4.3 (Juno/Kepler)

Have a look at the [getting started guide](http://scala-ide.org/docs/user/gettingstarted.html) for more info.

### New features in the 2.10 series
Since 2.10.3 is strictly a bug-fix release, here's an overview of the most prominent new features and improvements as introduced in 2.10.0:

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
32 | <notextile>Jason Zaugg</notextile>
12 | <notextile>Eugene Burmako</notextile>
6 | <notextile>Som Snytt</notextile>
4 | <notextile>Vlad Ureche</notextile>
4 | <notextile>James Iry</notextile>
4 | <notextile>Grzegorz Kossakowski</notextile>
4 | <notextile>Fran&ccedil;ois Garillot</notextile>
3 | <notextile>Adriaan Moors</notextile>
3 | <notextile>Viktor Klang</notextile>
2 | <notextile>Antoine Gourlay</notextile>
2 | <notextile>Simon Ochsenreither</notextile>
1 | <notextile>Christopher Vogt</notextile>
1 | <notextile>Seth Tisue</notextile>
1 | <notextile>Aleksandar Prokopec</notextile>
1 | <notextile>Roland Kuhn</notextile>
1 | <notextile>Den Shabalin</notextile>
1 | <notextile>Rich Dougherty</notextile>



#### Commits and the issues they fixed since v2.10.2

Issue(s) | Commit | Message
--- | --- | ---
[SI-7398](https://issues.scala-lang.org/browse/SI-7398) | [a1796aa](https://github.com/scala/scala/commit/a1796aa) | <notextile>SI-7398 Enable test for Java 8 source parser under Java 8</notextile>
[SI-7825](https://issues.scala-lang.org/browse/SI-7825) | [bf0f9da](https://github.com/scala/scala/commit/bf0f9da) | <notextile>SI-7825 Consider DEFAULTMETHOD when refchecking concreteness</notextile>
[SI-7818](https://issues.scala-lang.org/browse/SI-7818) | [cb028ba](https://github.com/scala/scala/commit/cb028ba) | <notextile>SI-7818 Cast our way out of extended existential angst</notextile>
[SI-7767](https://issues.scala-lang.org/browse/SI-7767) | [2391887](https://github.com/scala/scala/commit/2391887) | <notextile>SI-7767 Test case for Scaladoc on early initializers</notextile>
[SI-7767](https://issues.scala-lang.org/browse/SI-7767) | [48283ca](https://github.com/scala/scala/commit/48283ca) | <notextile>SI-7767 avoid rejecting Scaladoc comments in early initializers</notextile>
[SI-7269](https://issues.scala-lang.org/browse/SI-7269) | [fe9a3e9](https://github.com/scala/scala/commit/fe9a3e9) | <notextile>SI-7269 Rework MapLike#retains to account for desugaring change</notextile>
[SI-7814](https://issues.scala-lang.org/browse/SI-7814) | [a19babc](https://github.com/scala/scala/commit/a19babc) | <notextile>SI-7814 Updates the instrumented version of ScalaRuntime.</notextile>
[SI-7814](https://issues.scala-lang.org/browse/SI-7814) | [fb43ec8](https://github.com/scala/scala/commit/fb43ec8) | <notextile>SI-7814 Avoid init cycle between Predef, `package`, ScalaRuntime</notextile>
[SI-7652](https://issues.scala-lang.org/browse/SI-7652) | [7804cec](https://github.com/scala/scala/commit/7804cec) | <notextile>[nomaster] SI-7652 REPL extended quest for tools</notextile>
[SI-7652](https://issues.scala-lang.org/browse/SI-7652) | [8b10daf](https://github.com/scala/scala/commit/8b10daf) | <notextile>[nomaster] SI-7652 Bad tools fails loudly</notextile>
[SI-7149](https://issues.scala-lang.org/browse/SI-7149) | [989c3f8](https://github.com/scala/scala/commit/989c3f8) | <notextile>SI-7149 Use a WeakHashSet for type uniqueness</notextile>
[SI-7150](https://issues.scala-lang.org/browse/SI-7150) | [3ada703](https://github.com/scala/scala/commit/3ada703) | <notextile>SI-7150 Replace scala.reflect.internal.WeakHashSet</notextile>
[SI-7782](https://issues.scala-lang.org/browse/SI-7782) | [bce786f](https://github.com/scala/scala/commit/bce786f) | <notextile>SI-7782 Derive type skolems at the ground level</notextile>
[SI-4760](https://issues.scala-lang.org/browse/SI-4760) | [27d61a2](https://github.com/scala/scala/commit/27d61a2) | <notextile>SI-4760 Parser handles block-ending import</notextile>
[SI-7790](https://issues.scala-lang.org/browse/SI-7790) | [cb9f2b9](https://github.com/scala/scala/commit/cb9f2b9) | <notextile>[nomaster] SI-7790 No ScriptEngine in 2.10 build</notextile>
[SI-7775](https://issues.scala-lang.org/browse/SI-7775) | [9d5ed33](https://github.com/scala/scala/commit/9d5ed33) | <notextile>SI-7775 Harden against the shifting sands of System.getProperties</notextile>
[SI-7779](https://issues.scala-lang.org/browse/SI-7779) | [5dbc37d](https://github.com/scala/scala/commit/5dbc37d) | <notextile>SI-7779 Account for class name compactification in reflection</notextile>
[SI-7486](https://issues.scala-lang.org/browse/SI-7486) | [bc6d4b5](https://github.com/scala/scala/commit/bc6d4b5) | <notextile>SI-7486 More tests for cycles triggered by implicit search</notextile>
[SI-7778](https://issues.scala-lang.org/browse/SI-7778), [SI-942](https://issues.scala-lang.org/browse/SI-942) | [ed34bcb](https://github.com/scala/scala/commit/ed34bcb) | <notextile>SI-942 A test case, five years adrift.</notextile>
[SI-7756](https://issues.scala-lang.org/browse/SI-7756), [SI-7694](https://issues.scala-lang.org/browse/SI-7694), [SI-7716](https://issues.scala-lang.org/browse/SI-7716) | [42e0f73](https://github.com/scala/scala/commit/42e0f73) | <notextile>SI-7716 Exclude patmat synthetics from bounds checking</notextile>
[SI-7603](https://issues.scala-lang.org/browse/SI-7603) | [076a92b](https://github.com/scala/scala/commit/076a92b) | <notextile>SI-7603 Remove diagnostic code for annotation error</notextile>
[SI-7603](https://issues.scala-lang.org/browse/SI-7603) | [ab8a223](https://github.com/scala/scala/commit/ab8a223) | <notextile>SI-7603 Fix thread safety of FlagTranslation</notextile>
[SI-7752](https://issues.scala-lang.org/browse/SI-7752) | [3222add](https://github.com/scala/scala/commit/3222add) | <notextile>SI-7752 Don't disambiguate type parameters of overloaded alts</notextile>
[SI-7014](https://issues.scala-lang.org/browse/SI-7014) | [f91242c](https://github.com/scala/scala/commit/f91242c) | <notextile>SI-7014 Annot arg may refer to annotated class's member</notextile>
[SI-7694](https://issues.scala-lang.org/browse/SI-7694) | [e65321c](https://github.com/scala/scala/commit/e65321c) | <notextile>SI-7694 Add @uncheckedBounds to the library</notextile>
[SI-7694](https://issues.scala-lang.org/browse/SI-7694) | [5724cae](https://github.com/scala/scala/commit/5724cae) | <notextile>SI-7694 @uncheckedBounds, an opt-out from type bounds checking</notextile>
[SI-7020](https://issues.scala-lang.org/browse/SI-7020) | [ebb01e0](https://github.com/scala/scala/commit/ebb01e0) | <notextile>SI-7020 Determinism for pattern matcher warnings</notextile>
[SI-7733](https://issues.scala-lang.org/browse/SI-7733) | [1d28fe6](https://github.com/scala/scala/commit/1d28fe6) | <notextile>[nomaster] SI-7733 reflective packages now more consistent with scalac</notextile>
[SI-7331](https://issues.scala-lang.org/browse/SI-7331) | [36524c2](https://github.com/scala/scala/commit/36524c2) | <notextile>SI-7331 tb.parse returns unpositioned trees</notextile>
[SI-4907](https://issues.scala-lang.org/browse/SI-4907), [SI-4615](https://issues.scala-lang.org/browse/SI-4615) | [cd41987](https://github.com/scala/scala/commit/cd41987) | <notextile>SI-4907 SI-4615 scala.bat honors -J and -D options.</notextile>
[SI-7455](https://issues.scala-lang.org/browse/SI-7455) | [050b4c9](https://github.com/scala/scala/commit/050b4c9) | <notextile>SI-7455 Drop dummy param for synthetic access constructor</notextile>
[SI-7636](https://issues.scala-lang.org/browse/SI-7636) | [c4bf1d5](https://github.com/scala/scala/commit/c4bf1d5) | <notextile>SI-7636 Fix a NPE in typing class constructors</notextile>
[SI-7687](https://issues.scala-lang.org/browse/SI-7687) | [2473e66](https://github.com/scala/scala/commit/2473e66) | <notextile>SI-7687 Handle spaces in %COMSPEC% path in scala.bat.</notextile>
[SI-7569](https://issues.scala-lang.org/browse/SI-7569) | [c34b048](https://github.com/scala/scala/commit/c34b048) | <notextile>[backport] SI-7569 Fix end position in PostfixSelect tree</notextile>
[SI-7657](https://issues.scala-lang.org/browse/SI-7657) | [ef979c0](https://github.com/scala/scala/commit/ef979c0) | <notextile>SI-7657 clarifies the &quot;macro overrides method&quot; rule</notextile>
[SI-7336](https://issues.scala-lang.org/browse/SI-7336) | [48c677c](https://github.com/scala/scala/commit/48c677c) | <notextile>SI-7336 - Link flatMapped promises to avoid memory leaks</notextile>
[SI-7265](https://issues.scala-lang.org/browse/SI-7265) | [06606e8](https://github.com/scala/scala/commit/06606e8) | <notextile>SI-7265 General test for spec version</notextile>
[SI-7649](https://issues.scala-lang.org/browse/SI-7649) | [6368ae7](https://github.com/scala/scala/commit/6368ae7) | <notextile>SI-7649 Fix positions for reshaped tag materializers</notextile>
[SI-7617](https://issues.scala-lang.org/browse/SI-7617) | [e72ae70](https://github.com/scala/scala/commit/e72ae70) | <notextile>SI-7617 typedAssign no longer expands lhs</notextile>
[SI-7638](https://issues.scala-lang.org/browse/SI-7638) | [504b5f3](https://github.com/scala/scala/commit/504b5f3) | <notextile>SI-7638 Superaccessor lookup after specialization</notextile>
[SI-7603](https://issues.scala-lang.org/browse/SI-7603), [SI-7603](https://issues.scala-lang.org/browse/SI-7603) | [eebaae5](https://github.com/scala/scala/commit/eebaae5) | <notextile>SI-7603 Speculative fix for annotation binding error</notextile>
[SI-7579](https://issues.scala-lang.org/browse/SI-7579), [SI-7344](https://issues.scala-lang.org/browse/SI-7344) | [2285493](https://github.com/scala/scala/commit/2285493) | <notextile>SI-7344 Specialize methods in private scopes</notextile>
[SI-7571](https://issues.scala-lang.org/browse/SI-7571) | [e7ac254](https://github.com/scala/scala/commit/e7ac254) | <notextile>SI-7571 Allow nesting of anonymous classes in value classes</notextile>
[SI-7343](https://issues.scala-lang.org/browse/SI-7343) | [c43b504](https://github.com/scala/scala/commit/c43b504) | <notextile>SI-7343 Fixed phase ordering in specialization</notextile>
[SI-7498](https://issues.scala-lang.org/browse/SI-7498) | [c71fa58](https://github.com/scala/scala/commit/c71fa58) | <notextile>[backport] SI-7498 ParTrieMap.foreach no longer crashes</notextile>
[SI-7214](https://issues.scala-lang.org/browse/SI-7214), [SI-7505](https://issues.scala-lang.org/browse/SI-7505) | [d5288f8](https://github.com/scala/scala/commit/d5288f8) | <notextile>SI-7505 Test case for pattern matcher + type alias bug</notextile>
[SI-6841](https://issues.scala-lang.org/browse/SI-6841) | [608f577](https://github.com/scala/scala/commit/608f577) | <notextile>SI-6841 Fix bug at the intersection of DelayedInit and named args</notextile>
[SI-7558](https://issues.scala-lang.org/browse/SI-7558) | [dd5fa60](https://github.com/scala/scala/commit/dd5fa60) | <notextile>SI-7558 Fix capture of free local vars in toolbox compiler</notextile>
[SI-7556](https://issues.scala-lang.org/browse/SI-7556) | [28c5f73](https://github.com/scala/scala/commit/28c5f73) | <notextile>SI-7556 Fix runtime reflection involving ScalaLongSignature</notextile>
[SI-7507](https://issues.scala-lang.org/browse/SI-7507) | [d2faeb9](https://github.com/scala/scala/commit/d2faeb9) | <notextile>SI-7507 Fix lookup of private[this] member in presence of self type.</notextile>
[SI-7375](https://issues.scala-lang.org/browse/SI-7375) | [4dc3a33](https://github.com/scala/scala/commit/4dc3a33) | <notextile>SI-7375 ClassTag for value class aliases</notextile>
[SI-6138](https://issues.scala-lang.org/browse/SI-6138) | [b941551](https://github.com/scala/scala/commit/b941551) | <notextile>SI-6138 Centralize and refine detection of `getClass` calls</notextile>
[SI-7236](https://issues.scala-lang.org/browse/SI-7236), [SI-7237](https://issues.scala-lang.org/browse/SI-7237), [SI-7391](https://issues.scala-lang.org/browse/SI-7391) | [f92ef91](https://github.com/scala/scala/commit/f92ef91) | <notextile>SI-7391 Always use ForkJoin in Scala actors on ... ... Java 6 and above (except </notextile>
[SI-7473](https://issues.scala-lang.org/browse/SI-7473) | [5b54681](https://github.com/scala/scala/commit/5b54681) | <notextile>SI-7473 Bad for expr crashes postfix</notextile>
[SI-7421](https://issues.scala-lang.org/browse/SI-7421) | [e18e48d](https://github.com/scala/scala/commit/e18e48d) | <notextile>SI-7421 remove unneeded extra-attachement in maven deploy</notextile>
[SI-7497](https://issues.scala-lang.org/browse/SI-7497) | [d38e8ae](https://github.com/scala/scala/commit/d38e8ae) | <notextile>SI-7497 Fix scala.util.Properties.isMac</notextile>




#### Complete commit list!

sha | Title
---: | ---
[cb4b8eb](https://github.com/scala/scala/commit/cb4b8eb) | <notextile>update typesafe.artifactory-online.com to private-repo</notextile>
[bf93057](https://github.com/scala/scala/commit/bf93057) | <notextile>Change Scala license to unmodified 3-clause BSD.</notextile>
[a1796aa](https://github.com/scala/scala/commit/a1796aa) | <notextile>SI-7398 Enable test for Java 8 source parser under Java 8</notextile>
[bf0f9da](https://github.com/scala/scala/commit/bf0f9da) | <notextile>SI-7825 Consider DEFAULTMETHOD when refchecking concreteness</notextile>
[cb028ba](https://github.com/scala/scala/commit/cb028ba) | <notextile>SI-7818 Cast our way out of extended existential angst</notextile>
[2391887](https://github.com/scala/scala/commit/2391887) | <notextile>SI-7767 Test case for Scaladoc on early initializers</notextile>
[48283ca](https://github.com/scala/scala/commit/48283ca) | <notextile>SI-7767 avoid rejecting Scaladoc comments in early initializers</notextile>
[fe9a3e9](https://github.com/scala/scala/commit/fe9a3e9) | <notextile>SI-7269 Rework MapLike#retains to account for desugaring change</notextile>
[a19babc](https://github.com/scala/scala/commit/a19babc) | <notextile>SI-7814 Updates the instrumented version of ScalaRuntime.</notextile>
[fb43ec8](https://github.com/scala/scala/commit/fb43ec8) | <notextile>SI-7814 Avoid init cycle between Predef, `package`, ScalaRuntime</notextile>
[7804cec](https://github.com/scala/scala/commit/7804cec) | <notextile>[nomaster] SI-7652 REPL extended quest for tools</notextile>
[8b10daf](https://github.com/scala/scala/commit/8b10daf) | <notextile>[nomaster] SI-7652 Bad tools fails loudly</notextile>
[9772ec8](https://github.com/scala/scala/commit/9772ec8) | <notextile>typedAnnotated no longer emits nulls</notextile>
[a78dddd](https://github.com/scala/scala/commit/a78dddd) | <notextile>Modify perRunCaches to not leak WeakReferences</notextile>
[989c3f8](https://github.com/scala/scala/commit/989c3f8) | <notextile>SI-7149 Use a WeakHashSet for type uniqueness</notextile>
[3ada703](https://github.com/scala/scala/commit/3ada703) | <notextile>SI-7150 Replace scala.reflect.internal.WeakHashSet</notextile>
[bce786f](https://github.com/scala/scala/commit/bce786f) | <notextile>SI-7782 Derive type skolems at the ground level</notextile>
[27d61a2](https://github.com/scala/scala/commit/27d61a2) | <notextile>SI-4760 Parser handles block-ending import</notextile>
[cb9f2b9](https://github.com/scala/scala/commit/cb9f2b9) | <notextile>[nomaster] SI-7790 No ScriptEngine in 2.10 build</notextile>
[133b5c0](https://github.com/scala/scala/commit/133b5c0) | <notextile>Commit .gitignore directly</notextile>
[9d5ed33](https://github.com/scala/scala/commit/9d5ed33) | <notextile>SI-7775 Harden against the shifting sands of System.getProperties</notextile>
[5dbc37d](https://github.com/scala/scala/commit/5dbc37d) | <notextile>SI-7779 Account for class name compactification in reflection</notextile>
[bc6d4b5](https://github.com/scala/scala/commit/bc6d4b5) | <notextile>SI-7486 More tests for cycles triggered by implicit search</notextile>
[ed34bcb](https://github.com/scala/scala/commit/ed34bcb) | <notextile>SI-942 A test case, five years adrift.</notextile>
[42e0f73](https://github.com/scala/scala/commit/42e0f73) | <notextile>SI-7716 Exclude patmat synthetics from bounds checking</notextile>
[076a92b](https://github.com/scala/scala/commit/076a92b) | <notextile>SI-7603 Remove diagnostic code for annotation error</notextile>
[ab8a223](https://github.com/scala/scala/commit/ab8a223) | <notextile>SI-7603 Fix thread safety of FlagTranslation</notextile>
[75b44a6](https://github.com/scala/scala/commit/75b44a6) | <notextile>[nomaster] macro expansions are now auto-duplicated</notextile>
[3222add](https://github.com/scala/scala/commit/3222add) | <notextile>SI-7752 Don't disambiguate type parameters of overloaded alts</notextile>
[f91242c](https://github.com/scala/scala/commit/f91242c) | <notextile>SI-7014 Annot arg may refer to annotated class's member</notextile>
[e65321c](https://github.com/scala/scala/commit/e65321c) | <notextile>SI-7694 Add @uncheckedBounds to the library</notextile>
[5724cae](https://github.com/scala/scala/commit/5724cae) | <notextile>SI-7694 @uncheckedBounds, an opt-out from type bounds checking</notextile>
[ebb01e0](https://github.com/scala/scala/commit/ebb01e0) | <notextile>SI-7020 Determinism for pattern matcher warnings</notextile>
[1d28fe6](https://github.com/scala/scala/commit/1d28fe6) | <notextile>[nomaster] SI-7733 reflective packages now more consistent with scalac</notextile>
[1dac5ef](https://github.com/scala/scala/commit/1dac5ef) | <notextile>showRaw now prints symbols of def trees</notextile>
[26a8679](https://github.com/scala/scala/commit/26a8679) | <notextile>currentRun.compiles now correctly works in toolboxes</notextile>
[5626c74](https://github.com/scala/scala/commit/5626c74) | <notextile>[nomaster] macro errors now always have positions</notextile>
[36524c2](https://github.com/scala/scala/commit/36524c2) | <notextile>SI-7331 tb.parse returns unpositioned trees</notextile>
[cd41987](https://github.com/scala/scala/commit/cd41987) | <notextile>SI-4907 SI-4615 scala.bat honors -J and -D options.</notextile>
[2864c7f](https://github.com/scala/scala/commit/2864c7f) | <notextile>brings JavaMirrors up to speed with ClassfileParser</notextile>
[79009e3](https://github.com/scala/scala/commit/79009e3) | <notextile>Rename t7636-neg.check to the standard t7636.check.</notextile>
[050b4c9](https://github.com/scala/scala/commit/050b4c9) | <notextile>SI-7455 Drop dummy param for synthetic access constructor</notextile>
[c4bf1d5](https://github.com/scala/scala/commit/c4bf1d5) | <notextile>SI-7636 Fix a NPE in typing class constructors</notextile>
[2473e66](https://github.com/scala/scala/commit/2473e66) | <notextile>SI-7687 Handle spaces in %COMSPEC% path in scala.bat.</notextile>
[c34b048](https://github.com/scala/scala/commit/c34b048) | <notextile>[backport] SI-7569 Fix end position in PostfixSelect tree</notextile>
[ef979c0](https://github.com/scala/scala/commit/ef979c0) | <notextile>SI-7657 clarifies the &quot;macro overrides method&quot; rule</notextile>
[48c677c](https://github.com/scala/scala/commit/48c677c) | <notextile>SI-7336 - Link flatMapped promises to avoid memory leaks</notextile>
[06606e8](https://github.com/scala/scala/commit/06606e8) | <notextile>SI-7265 General test for spec version</notextile>
[6368ae7](https://github.com/scala/scala/commit/6368ae7) | <notextile>SI-7649 Fix positions for reshaped tag materializers</notextile>
[d09a46b](https://github.com/scala/scala/commit/d09a46b) | <notextile>fix typo in BigInt/BigDecimal deprecation messages</notextile>
[e72ae70](https://github.com/scala/scala/commit/e72ae70) | <notextile>SI-7617 typedAssign no longer expands lhs</notextile>
[55decf7](https://github.com/scala/scala/commit/55decf7) | <notextile>makes it more convenient to work with SuppressMacroExpansionAttachment</notextile>
[504b5f3](https://github.com/scala/scala/commit/504b5f3) | <notextile>SI-7638 Superaccessor lookup after specialization</notextile>
[eebaae5](https://github.com/scala/scala/commit/eebaae5) | <notextile>SI-7603 Speculative fix for annotation binding error</notextile>
[0c752d7](https://github.com/scala/scala/commit/0c752d7) | <notextile>Less noise on a partest failure.</notextile>
[2285493](https://github.com/scala/scala/commit/2285493) | <notextile>SI-7344 Specialize methods in private scopes</notextile>
[e7ac254](https://github.com/scala/scala/commit/e7ac254) | <notextile>SI-7571 Allow nesting of anonymous classes in value classes</notextile>
[d2c5324](https://github.com/scala/scala/commit/d2c5324cfdc5a06a848d7001963a3f465e34beb8) | <notextile>Refactoring to the scala-concurrent-tck.scala   - there were numerous logical is</notextile>
[da54f34](https://github.com/scala/scala/commit/da54f34) | <notextile>Cleaning up method implementations in Future     Optimizations:     1) Avoiding </notextile>
[c43b504](https://github.com/scala/scala/commit/c43b504) | <notextile>SI-7343 Fixed phase ordering in specialization</notextile>
[c0ba5eb](https://github.com/scala/scala/commit/c0ba5eb) | <notextile>Removed redundant `retypedMethod` in `Duplicators`</notextile>
[da1ae7a](https://github.com/scala/scala/commit/da1ae7a) | <notextile>[backport] relax time constraint in duration-tck.scala (for Windows VMs) (cherry</notextile>
[3494397](https://github.com/scala/scala/commit/3494397) | <notextile>Add Eclipse project for JUnit tests.</notextile>
[25a8e70](https://github.com/scala/scala/commit/25a8e70) | <notextile>Add support for JUnit tests</notextile>
[c71fa58](https://github.com/scala/scala/commit/c71fa58) | <notextile>[backport] SI-7498 ParTrieMap.foreach no longer crashes</notextile>
[d5288f8](https://github.com/scala/scala/commit/d5288f8) | <notextile>SI-7505 Test case for pattern matcher + type alias bug</notextile>
[ac4e3ca](https://github.com/scala/scala/commit/ac4e3ca) | <notextile>Refactor testing logic for only running under certain JDK versions</notextile>
[fc6da8d](https://github.com/scala/scala/commit/fc6da8d) | <notextile>Test for reading JDK 8 (classfile format 52) class files.</notextile>
[608f577](https://github.com/scala/scala/commit/608f577) | <notextile>SI-6841 Fix bug at the intersection of DelayedInit and named args</notextile>
[dd5fa60](https://github.com/scala/scala/commit/dd5fa60) | <notextile>SI-7558 Fix capture of free local vars in toolbox compiler</notextile>
[28c5f73](https://github.com/scala/scala/commit/28c5f73) | <notextile>SI-7556 Fix runtime reflection involving ScalaLongSignature</notextile>
[d2faeb9](https://github.com/scala/scala/commit/d2faeb9) | <notextile>SI-7507 Fix lookup of private[this] member in presence of self type.</notextile>
[4dc3a33](https://github.com/scala/scala/commit/4dc3a33) | <notextile>SI-7375 ClassTag for value class aliases</notextile>
[b941551](https://github.com/scala/scala/commit/b941551) | <notextile>SI-6138 Centralize and refine detection of `getClass` calls</notextile>
[f92ef91](https://github.com/scala/scala/commit/f92ef91) | <notextile>SI-7391 Always use ForkJoin in Scala actors on ... ... Java 6 and above (except </notextile>
[5b54681](https://github.com/scala/scala/commit/5b54681) | <notextile>SI-7473 Bad for expr crashes postfix</notextile>
[bae4196](https://github.com/scala/scala/commit/bae4196) | <notextile>A test case for a recent LUB progression.</notextile>
[e18e48d](https://github.com/scala/scala/commit/e18e48d) | <notextile>SI-7421 remove unneeded extra-attachement in maven deploy</notextile>
[d38e8ae](https://github.com/scala/scala/commit/d38e8ae) | <notextile>SI-7497 Fix scala.util.Properties.isMac</notextile>
[b89dc03](https://github.com/scala/scala/commit/b89dc03) | <notextile>Increase build.number to 2.10.3</notextile>
[658d90a](https://github.com/scala/scala/commit/658d90a) | <notextile>c.typeCheck(silent = true) now suppresses ambiguous errors</notextile>
[73d494d](https://github.com/scala/scala/commit/73d494d) | <notextile>Reimplementing much of the DefaultPromise methods Optimizations: 1) Avoiding to </notextile>


      
