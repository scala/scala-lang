---

category: announcement
permalink: /news/2.12.0-RC2
title: "Scala 2.12.0-RC2 is now available!"
---
We are happy to announce the availability of Scala 2.12.0-RC2!

This RC fixes all reported regressions since 2.11.
It will become the final by October 28th, unless we hear of any issues that block your upgrade to 2.12 before then!


Here are the [most noteworthy fixes](https://github.com/scala/scala/pulls?q=is%3Apr+is%3Amerged+milestone%3A2.12.0-RC2+label%3Arelease-notes) since RC1:

  - [#5429](https://github.com/scala/scala/pull/5429) Default `-Xmixin-force-forwarders` to `true` (regression in performance of generated code);
  - [#5398](https://github.com/scala/scala/pull/5398) [SD-225](https://github.com/scala/scala-dev/issues/225) Use a `lzycompute` method for module initialization. Address a performance regression;
  - [#5417](https://github.com/scala/scala/pull/5417) [SD-233](https://github.com/scala/scala-dev/issues/233) `synchronized` blocks are JIT-friendly again;
  - [#5433](https://github.com/scala/scala/pull/5433) Don't deprecate `Either.left` and `Either.right` yet;
  - [#5392](https://github.com/scala/scala/pull/5392) [SI-9918](https://issues.scala-lang.org/browse/SI-9918) Don't crash on `object` in `trait` mixed into package object;
  - [#5397](https://github.com/scala/scala/pull/5397) [SI-9920](https://issues.scala-lang.org/browse/SI-9920) Avoid linkage errors with captured local objects + self types;
  - [#5430](https://github.com/scala/scala/pull/5430) Emit `object` in method like `lazy val`;
  - [#5442](https://github.com/scala/scala/pull/5442) [SI-9943](https://issues.scala-lang.org/browse/SI-9943) `sealed` class does not yield SAM type;

The [RC1 release notes](http://scala-lang.org/news/2.12.0-RC1) have a list of important changes since M5.


In total, we merged [29 pull requests](https://github.com/scala/scala/pulls?q=is%3Apr+is%3Amerged+milestone%3A2.12.0-RC2).
This milestone resolves [6 JIRA tickets](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20status%20%3D%20CLOSED%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20%3D%20%22Scala%202.12.0-RC2%22%20ORDER%20BY%20component%20ASC%2C%20priority%20DESC) and [9 scala-dev issues](https://github.com/scala/scala-dev/milestone/9?closed=1).

As usual for Scala pre-releases, 2.12.0-RC2 is not guaranteed to be binary compatible with any other Scala version, including any 2.12 milestones and release candidates.

### Known issues

As with previous 2.12 builds, the new trait encoding may make some
trait-based code run slower. We've investigated this issue in depth,
and have implemented important improvements in RC2.
Compile times may still be longer in 2.12 than 2.11. Please let us know
if you notice any performance regressions. We will continue to tweak
the bytecode we emit during the 2.12.x cycle to get the best performance out of the JVM.

We welcome feedback from the Scala community helping to isolate unusual slowdowns.

We hope to address the following in a future 2.12.x release:

* [SI-9824](https://issues.scala-lang.org/browse/SI-9824):
  Parallel collections are prone to deadlock in the REPL and
  in object initializers.

## Scala 2.12

Scala 2.12 requires a Java 8 runtime.

Scala 2.12 is all about making optimal use of Java 8's new features. Traits ([#5003](https://github.com/scala/scala/pull/5003)) and functions are compiled to their Java 8 equivalents, and we treat Single Abstract Method types and Scala's builtin function types uniformly from type checking to the back end ([#4971](https://github.com/scala/scala/pull/4971)). We also use `invokedynamic` for a more natural encoding of other language features ([#4896](https://github.com/scala/scala/pull/4896)). We've standardized on the GenBCode back end ([#4814](https://github.com/scala/scala/pull/4814), [#4838](https://github.com/scala/scala/pull/4838)) and the flat classpath implementation is now the default ([#5057](https://github.com/scala/scala/pull/5057)). The optimizer has been completely overhauled for 2.12.

Except for the breaking changes listed below, code that compiles on 2.11.x without deprecation warnings should compile on 2.12.x too, unless you use experimental APIs such as reflection.  If you find incompatibilities, please [file an issue](https://issues.scala-lang.org).

### New features

With this release candidate, we consider 2.12.x to be feature complete.

For 2.12.0, we will try to remain binary compatible with RC2,
and we won't risk regressions except for the most critical bugs.

#### Trait compiles to an interface

With Java 8 allowing concrete methods in interfaces, Scala 2.12 is able to compile a trait to a single interface. Before, a trait was represented as a class that held the method implementations and an interface. Note that the compiler still has quite a bit of magic to perform behind the scenes, so that care must be taken if a trait is meant to be implemented in Java. (Briefly, if a trait does any of the following its subclasses require synthetic code: defining fields, calling super, initializer statements in the body, extending a class, relying on linearization to find implementations in the right super trait.)

#### Java 8-style lambdas

Scala 2.12 emits closures in the same style as Java 8, whether they target a `FunctionN` class from the standard library or a user-defined Single Abstract Method (SAM) type. The type checker accepts a function literal as a valid expression for either kind of "function-like" type (built-in or SAM). This improves the experience of using libraries written for Java 8 in Scala.

For each lambda the compiler generates a method containing the lambda body, and emits an `invokedynamic` that will spin up a lightweight class for this closure using the JDK's `LambdaMetaFactory`.

Compared to Scala 2.11, the new scheme has the advantage that, in most cases, the compiler does not need to generate an anonymous class for each closure. This leads to significantly smaller JAR files.

#### New back end

Scala 2.12 standardizes on the "GenBCode" back end, which emits code more quickly because it directly generates ASM bytecode from Scala compiler trees, while the previous back end used an intermediate representation called "ICode". The old back ends (GenASM and GenIcode) have been removed ([#4814](https://github.com/scala/scala/pull/4814), [#4838](https://github.com/scala/scala/pull/4838)).

#### New optimizer

The GenBCode back end includes a new inliner and bytecode optimizer.
The optimizer is enabled using `-opt` compiler option, which defaults
to `-opt:l:classpath`.  Check `-opt:help` to see the full list of
available options for the optimizer.

The following optimizations are available:

* Inlining final methods, including methods defined in objects and final methods defined in traits
* If a closure is allocated and invoked within the same method, the closure invocation is replaced by an invocations of the corresponding lambda body method
* Dead code elimination and a small number of cleanup optimizations
* Box/unbox elimination [#4858](https://github.com/scala/scala/pull/4858)

#### Either is now right-biased

`Either` now supports operations like `map`, `flatMap`, `contains`,
`toOption`, and so forth, which operate on the right-hand side.

(`.left` and `.right` may be deprecated in favor of `.swap` in a later release.)

The changes are source-compatible with old code (except in the
presence of conflicting extension methods).

Thanks, [Simon Ochsenreither](https://github.com/soc), for this
contribution.

#### Futures improved

This [blog post series](https://github.com/viktorklang/blog)
by Viktor Klang explores the diverse improvements made to
`scala.concurrent.Future` for 2.12.

#### Scaladoc now supports doc comments in Java sources

Thanks, [Jakob Odersky](https://github.com/jodersky), for this fix to [SI-4826](https://issues.scala-lang.org/browse/SI-4826).

#### Partial unification of type constructors (SI-2712)

Compiling with `-Ypartial-unification` adds partial unification of type constructors, fixing the notorious [SI-2712](https://issues.scala-lang.org/browse/SI-2712), thanks to [Miles Sabin](https://github.com/milessabin).

### Breaking changes

#### SAM types

Implicit conversion of function types to SAM types won't kick in as often now, since the compiler's own SAM conversion takes priority:

    trait MySam { def apply(x: Int): String }
    implicit def unused(fun: Int => String): MySam =
      new MySam { def apply(x: Int) = fun(x) }
    // uses SAM conversion, not the `unused` implicit
    val sammy: MySam = (_: Int).toString

To retain the old behavior, you may compile under `-Xsource:2.11`, or disqualify the type from being a SAM (e.g. by adding a second abstract method).

#### Inferred types for `val` (and `lazy val`)

[#5141](https://github.com/scala/scala/pull/5141) and
[#5294](https://github.com/scala/scala/pull/5294) align type
inference for `def`, `val`, and `lazy val`, fixing assorted
corner cases and inconsistencies.  As a result, the inferred type
of a `val` or `lazy val` may change.

In particular, `implicit val`s that didn't need explicitly declared
types before may need them now.  (This is always good practice
anyway.)

You can get the old behavior with `-Xsource:2.11`.  This may be
useful for testing whether these changes are responsible if your
code fails to compile.

#### Changed syntax trees (affects macro and compiler plugin authors)

PR [#4794](https://github.com/scala/scala/pull/4749) changed the syntax trees for selections of statically accessible symbols. For example, a selection of `Predef` no longer has the shape `q"scala.this.Predef"` but simply `q"scala.Predef"`. Macros and compiler plugins matching on the old tree shape need to be adjusted.



## Binary compatibility

Since Scala 2.11, minor releases of Scala are binary compatible with each other.
Scala 2.12 will continue this tradition: every 2.12.x release will be binary compatible with 2.12.0.
Milestones and release candidates, however, are **not** binary compatible with any other release.

Scala 2.12 is not and will not be binary compatible with the 2.11.x series.  This allows us to keep improving the Scala compiler and standard library.  We are working with the community to ensure that core projects in the Scala eco-system become available for 2.12.  Please refer to this growing [list of libraries and frameworks](https://github.com/scala/make-release-notes/blob/2.12.x/projects-2.12.md).

The [Scala 2.11.1 release notes](http://scala-lang.org/news/2.11.1) explain in more detail on how binary compatibility works in Scala.  The same policies apply to 2.12 as well.


## Contributors

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, spreading kindness in mailing lists and other public fora, and submitting and reviewing pull requests! You are all magnificent.

According to `git shortlog -sn --no-merges v2.12.0-RC1..v2.12.0-RC2`, the following contributors helped to realize this release candidate: Adriaan Moors, Jason Zaugg, Lukas Rytz, Seth Tisue, Stefan Zeiger, Antoine Gourlay, Raphael Jolly. Thank you!

## Release notes

Improvements to these release notes [are welcome!](https://github.com/scala/make-release-notes/blob/2.12.x/hand-written.md)

## Obtaining Scala

* Download a distribution from [scala-lang.org](http://scala-lang.org/download/2.12.0-RC2.html)
* Bump the `scalaVersion` setting in your sbt-based project
* Obtain JARs via [Maven Central](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.12.0-RC2%22)
