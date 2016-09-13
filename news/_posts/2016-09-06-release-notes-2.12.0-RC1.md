---
layout: news
post-type: announcement
permalink: /news/2.12.0-RC1
title: "Scala 2.12.0-RC1 is now available!"
---
We are happy to announce the availability of Scala 2.12.0-RC1!

Note, however, that Scala 2.12.0-RC2 will follow, due to known
regressions detailed below.

The most notable changes since M5 are:

  - [#5135](https://github.com/scala/scala/pull/5135): Either is now
    right-biased
  - [SI-4826](https://issues.scala-lang.org/browse/SI-7187): Scaladoc now
    supports doc comments in Java sources
  - [SI-7187](https://issues.scala-lang.org/browse/SI-7187): Eta-expansion of
    zero-argument method values is now deprecated
  - [#5307](https://github.com/scala/scala/pull/5307): Reduced interference
    from SAMs when inferring function types in the presence of overload
  - [#5141](https://github.com/scala/scala/pull/5141) /
    [#5294](https://github.com/scala/scala/pull/5294): Refactoring
    of `def`, `val`, and `lazy val` handling, fixing assorted corner
    cases and inconsistencies
  - [#5311](https://github.com/scala/scala/pull/5311): Scala is now built with
    sbt instead of Ant (affects only contributors, not users)

In total, we merged [82 pull requests](https://github.com/scala/scala/pulls?q=is%3Apr+is%3Amerged+milestone%3A2.12.0-RC1), of which [6 are by new contributors](https://github.com/scala/scala/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Amerged%20milestone%3A2.12.0-RC1%20label%3Awelcome) -- welcome!
This milestone resolves [25 JIRA tickets](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20status%20%3D%20CLOSED%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20%3D%20%22Scala%202.12.0-RC1%22%20ORDER%20BY%20component%20ASC%2C%20priority%20DESC).

As usual for Scala pre-releases, 2.12.0-RC1 is not binary compatible with any other Scala version, including any 2.12 milestones.

### Known issues

As with previous 2.12 builds, the new trait encoding may make some
trait-based code run slower. As a result, compile times may also be
longer in 2.12 than 2.11.  We welcome feedback from the Scala
community helping to isolate unusual slowdowns.

The following known regressions will be fixed in 2.12.0-RC2:

* [SD-225](https://github.com/scala/scala-dev/issues/225)
  may cause drastically longer compile times for certain
  kinds of code.
* [SI-9918](https://issues.scala-lang.org/browse/SI-9918) may
  cause `scala.reflect.internal.Types$TypeError`s in code
  involving package objects.
* [SI-9920](https://issues.scala-lang.org/browse/SI-9920) may
  cause `java.lang.NoSuchMethodError`s at runtime.
* A regression may cause `java.util.NoSuchElementException`s in
  `scala.tools.nsc.backend.jvm.BCodeSkelBuilder`; see
  [#5395](https://github.com/scala/scala/pull/5395).

Because of the last-mentioned regression,
[Shapeless](https://github.com/milessabin/shapeless) will not be
published for 2.12.0-RC1.

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

For 2.12.0, we will try to remain binary compatible with RC1,
and we won't risk regressions except for the most critical bugs.

#### Trait compiles to an interface

With Java 8 allowing concrete methods in interfaces, Scala 2.12 is able to compile a trait to a single interface. Before, a trait was represented as a class that held the method implementations and an interface. Note that the compiler still has quite a bit of magic to perform behind the scenes, so that care must be taken if a trait is meant to be implemented in Java. (Briefly, if a trait does any of the following its subclasses require synthetic code: defining fields, calling super, initializer statements in the body, extending a class, relying on linearization to find implementations in the right super trait.)

#### Java 8-style lambdas

Scala 2.12 emits closures in the same style as Java 8, whether they target a FunctionN class from the standard library or a user-defined Single Abstract Method type. The type checker accepts a function literal as a valid expression for either kind of "function-like" type (built-in or SAM). This improves the experience of using libraries written for Java 8 in Scala.

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

`.left` and `.right` are deprecated in favor of `.swap`.

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

As of [#4971](https://github.com/scala/scala/pull/4971), we treat Single Abstract Method types in the same way as our built-in FunctionN classes. This means overloading resolution has more contenders to choose from, making type inference less effective. Here's an example:

    class C[V] {
      def sort(cmp: java.util.Comparator[V]): C[V] = ???
      def sort(cmp: (V, V) => Int): C[V] = sort(
        new java.util.Comparator[V] {
          def compare(a: V, b: V): Int = cmp(a, b)
        })
    }

    (new C[Int]) sort (_ - _) // error
    (new C[Int]) sort ((_ - _): java.util.Comparator[Int]) // ok
    (new C[Int]) sort ((a: Int, b: Int) => a - b)  // ok

The first attempt fails because the type checker cannot infer the types for `_ - _`'s arguments anymore.
Type inference in this scenario only works when we can narrow the overloads down to one before type checking the arguments the methods are applied to. When a function is passed as an argument to an overloaded method, we do this by considering the "shape" of the function (essentially, its arity). Now that `Comparator[?]` and `(?, ?) => ?` are both considered functions of arity two, our clever scheme breaks down and the programmer must either select an overload (second application) or make the argument types explicit (last application, which resolves to the `Function2` overload).

Finally, implicit conversion of SAM types to Function types won't kick in anymore, since the compiler does this conversion itself first:

    trait MySam { def apply(x: Int): String }

    implicit def unused(fun: Int => String): MySam
      = new MySam { def apply(x: Int) = fun(x) }

    // uses sam conversion, not the `unused` implicit
    val sammy: MySam = _.toString

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

According to `git shortlog -sn --no-merges v2.12.0-M5..v2.12.0-RC1`, the following contributors helped to realize this milestone: Adriaan Moors, Jason Zaugg, Lukas Rytz, Stefan Zeiger, A. P. Marki, Simon Ochsenreither, Seth Tisue, Jakob Odersky, Dale Wijnand, Dima Tkach, Janek Bogucki, Michał Pociecha, Christopher Davenport, Martin Olsson, tomjridge, Miles Sabin, Oscar Boykin, Raul Bache, Rex Kerr, Dmitriy Pogretskiy, Daniel Barclay, Antoine Gourlay, Steven Mitchell, Carsten Varming. Thank you!

## Release notes

Improvements to these release notes [are welcome!](https://github.com/scala/make-release-notes/blob/2.12.x/hand-written.md)

## Obtaining Scala

* Download a distribution from [scala-lang.org](http://scala-lang.org/download/2.12.0-RC1.html)
* Bump the `scalaVersion` setting in your sbt-based project
* Obtain JARs via [Maven Central](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.12.0-M5%22)
