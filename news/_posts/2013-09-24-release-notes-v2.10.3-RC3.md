---
layout: news
post-type: announcement
title: "Scala 2.10.3-RC3 is now available!"
---
We are very happy to announce the RC3 release of Scala 2.10.3! If no serious blocking issues are found this will become the final 2.10.3 version.

The release is available for download from [scala-lang.org](/download/2.10.3-RC3.html) or from [Maven Central](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.10.3-RC3%22).

The Scala team and contributors [fixed 50 issues since 2.10.2](https://issues.scala-lang.org/secure/IssueNavigator.jspa?mode=hide&requestId=12215)!

In total, 
[63 RC1 pull requests](https://github.com/scala/scala/issues?milestone=17&state=closed), 
[19 RC2 pull requests](https://github.com/scala/scala/issues?milestone=23&state=closed) and
[2 RC3 pull requests](https://github.com/scala/scala/issues?milestone=24&state=closed)
were opened on [GitHub](https://github.com/scala/scala) of which 72 were merged after having been [tested](https://github.com/typesafehub/ghpullrequest-validator) and reviewed.

<!--break-->

### Known Issues
Before reporting a bug, please have a look at these [known issues](https://issues.scala-lang.org/secure/IssueNavigator.jspa?mode=hide&requestId=12216).

### Scala IDE for Eclipse
The Scala IDE with Scala 2.10.3-RC3 built right in is available through the following update-site:

* [for Eclipse 4.2/4.3 (Juno/Kepler)](http://download.scala-ide.org/sdk/e38/scala210/dev/site/)

Have a look at the [getting started guide](http://scala-ide.org/docs/user/gettingstarted.html) for more info.

### New features in the 2.10 series
Since 2.10.3 is strictly a bug-fix release, here's an overview of the most prominent new features and improvements as introduced in 2.10.0:

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
1 | <notextile>Iulian Dragos</notextile>
1 | <notextile>Jason Zaugg</notextile>



#### Commits and the issues they fixed since v2.10.3-RC2

Issue(s) | Commit | Message
--- | --- | ---
[SI-7862](https://issues.scala-lang.org/browse/SI-7862) | [8e11dcb](https://github.com/scala/scala/commit/8e11dcb) | <notextile>[nomaster] SI-7862: MANIFEST.MF file for Scala sources</notextile>
[SI-7861](https://issues.scala-lang.org/browse/SI-7861) | [7f4b44b](https://github.com/scala/scala/commit/7f4b44b) | <notextile>SI-7861 Don't execute internal callbacks on the user Executor</notextile>




#### Complete commit list!

sha | Title
---: | ---
[8e11dcb](https://github.com/scala/scala/commit/8e11dcb) | <notextile>[nomaster] SI-7862: MANIFEST.MF file for Scala sources</notextile>
[7f4b44b](https://github.com/scala/scala/commit/7f4b44b) | <notextile>SI-7861 Don't execute internal callbacks on the user Executor</notextile>


      
