---
layout: news
post-type: announcement
permalink: /news/2.12.0-M4
title: "Scala 2.12.0-M4 is now available!"
---
We are happy to announce the availability of Scala 2.12.0-M4, which marks feature completeness for 2.12!

Scala 2.12 is all about making optimal use of Java 8's new features. Traits ([#5003](https://github.com/scala/scala/pull/5003)) and functions are compiled to their Java 8 equivalents, and we treat Single Abstract Method types and Scala's builtin function types uniformly from type checking to the back end ([#4971](https://github.com/scala/scala/pull/4971)). We also use `invokedynamic` for a more natural encoding of other language features ([#4896](https://github.com/scala/scala/pull/4896)). We've standardized on the GenBCode back end ([#4814](https://github.com/scala/scala/pull/4814), [#4838](https://github.com/scala/scala/pull/4838)) and the flat classpath implementation is now the default ([#5057](https://github.com/scala/scala/pull/5057)). The optimizer has been completely overhauled for 2.12. This milestone adds box/unbox optimization ([#4858](https://github.com/scala/scala/pull/4858)).

For more details about what's new in this milestone, including some breaking changes, please take a look at [these 14 noteworthy PRs](https://github.com/scala/scala/pulls?q=is%3Apr+label%3Arelease-notes+milestone%3A2.12.0-M4+is%3Amerged).

In total, we merged [135 pull requests](https://github.com/scala/scala/pulls?q=is%3Apr+is%3Amerged+milestone%3A2.12.0-M4), of which [16 are by new contributors](https://github.com/scala/scala/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Amerged+author%3Afelixmulder++milestone%3A2.12.0-M4) -- welcome! This milestone resolves [49 JIRA tickets](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20status%20%3D%20CLOSED%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20%3D%20%22Scala%202.12.0-M4%22%20ORDER%20BY%20component%20ASC%2C%20priority%20DESC).

We'd especially like to thank Felix Mulder for his [excellent work on the new Scaladoc interface](https://github.com/scala/scala/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Amerged+author%3Afelixmulder++milestone%3A2.12.0-M4)! [Check it out!](http://www.scala-lang.org/files/archive/api/2.12.0-M4/)


Except for the breaking changes listed below, code that compiles on 2.11.x without deprecation warnings should compile on 2.12.x too, unless you use experimental APIs such as reflection.  If you find incompatibilities, please [file an issue](https://issues.scala-lang.org).

As usual for milestones, 2.12.0-M4 is not binary compatible with any other Scala release, including other 2.12 milestones. Scala 2.12 requires a Java 8 runtime.

### New features

With M4, we consider 2.12.x feature complete. Please try it out while we still have time to fix any regressions in M5! For the next milestone, we'll focus on addressing any issues discovered with M4, overall robustness and polish, and some smaller improvements that are less likely to cause regressions or source incompatibilities. For RC1, we will try to remain binary compatible with M5, and we won't risk regressions except for the most critical bugs.

#### Trait compiles to an interface
With Java 8 allowing concrete methods in interfaces, Scala 2.12 is able to compile a trait to a single interface. Before, a trait was represented as a class that held the method implementations and an interface. Note that the compiler still has quite a bit of magic to perform behind the scenes, so that care must be taken if a trait is meant to be implemented in Java. (Briefly, if a trait does any of the following its subclasses require synthetic code: defining fields, calling super, initializer statements in the body, extending a class, relying on linearization to find implementations in the right super trait.)

#### Java 8-style lambdas

Scala 2.12 emits closures in the same style as Java 8, whether they target a FunctionN class from the standard library or a user-defined Single Abstract Method type. The type checker accepts a function literal as a valid expression for either kind of "function-like" type (built-in or SAM). This improves the experience of using libraries written for Java 8 in Scala.

For each lambda the compiler generates a method containing the lambda body, and emits an `invokedynamic` that will spin up a lightweight class for this closure using the JDK's `LambdaMetaFactory`.

Compared to Scala 2.11, the new scheme has the advantage that, in most cases, the compiler does not need to generate an anonymous class for each closure. This leads to significantly smaller JAR files.

#### New back end

Scala 2.12 standardizes on the "GenBCode" back end, which emits code more quickly because it directly generates ASM bytecode from Scala compiler trees, while the previous back end used an intermediate representation called "ICode". The old back ends (GenASM and GenIcode) have been removed ([#4814](https://github.com/scala/scala/pull/4814), [#4838](https://github.com/scala/scala/pull/4838)).


#### New bytecode optimizer

The GenBCode back end includes a new inliner and bytecode optimizer.
The optimizer is enabled using the `-Yopt:l:classpath` compiler option.
Check `-Yopt:help` to see the full list of available options for the optimizer.

As of M4, the following optimizations are available:

* Inlining final methods, including methods defined in objects and final methods defined in traits
* If a closure is allocated and invoked within the same method, the closure invocation is replaced by an invocations of the corresponding lambda body method
* Dead code elimination and a small number of cleanup optimizations
* Box/unbox elimination [#4858](https://github.com/scala/scala/pull/4858)

The work on the new optimizer is still ongoing.  You can track it in the [scala-dev repository issue tracker](https://github.com/scala/scala-dev/labels/t%3Aoptimizer).


### Breaking changes

#### SAM types
As of [#4971](https://github.com/scala/scala/pull/4971), we treat Single Abstract Method types in the same way as our built-in FunctionN classes. This means overloading resolution has more contenders to choose from, making type inference less effective. Here's an example:

```scala
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
```

The first attempt fails because the type checker cannot infer the types for `_ - _`'s arguments anymore.
Type inference in this scenario only works when we can narrow the overloads down to one before type checking the arguments the methods are applied to. When a function is passed as an argument to an overloaded method, we do this by considering the "shape" of the function (essentially, its arity). Now that `Comparator[?]` and `(?, ?) => ?` are both considered functions of arity two, our clever scheme breaks down and the programmer must either select an overload (second application) or make the argument types explicit (last application, which resolves to the `Function2` overload).

Finally, implicit conversion of SAM types to Function types won't kick in anymore, since the compiler does this conversion itself first:

```scala
trait MySam { def apply(x: Int): String }

implicit def unused(fun: Int => String): MySam 
  = new MySam { def apply(x: Int) = fun(x) }

// uses sam conversion, not the `unused` implicit
val sammy: MySam = _.toString
```

#### Changed syntax trees (affects macro and compiler plugin authors)

PR [#4794](https://github.com/scala/scala/pull/4749) changed the syntax trees for selections of statically accessible symbols. For example, a selection of `Predef` no longer has the shape `q"scala.this.Predef"` but simply `q"scala.Predef"`. Macros and compiler plugins matching on the old tree shape need to be adjusted.




## Binary compatibility

Since Scala 2.11, minor releases of Scala are binary compatible with each other.
Scala 2.12 will continue this tradition: every 2.12.x release will be binary compatible with 2.12.0.
Milestone releases and release candidates, however, are **not** binary compatible with any other release.

Scala 2.12 is not and will not be binary compatible with the 2.11.x series.  This allows us to keep improving the Scala compiler and standard library.  We are working with the community to ensure that core projects in the Scala eco-system become available for 2.12.  Please refer to this growing [list of libraries and frameworks](https://github.com/scala/make-release-notes/blob/2.12.x/projects-2.12.md).

The [Scala 2.11.1 release notes](http://scala-lang.org/news/2.11.1) explain in more detail on how binary compatibility works in Scala.  The same policies apply to 2.12 as well.


## Contributors

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, spreading kindness in mailing lists and other public fora, and submitting and reviewing pull requests! You are all magnificent.

According to `git shortlog -sn --no-merges v2.12.0-M3..v2.12.0-M4`, the following contributors helped to realize this milestone: Lukas Rytz, Adriaan Moors, Jason Zaugg, Stefan Zeiger, Janek Bogucki, Seth Tisue, Felix Mulder, A. P. Marki, Simon Ochsenreither, Performant Data LLC, wpopielarski, Kota Mizushima, Rui Gonçalves, Shane Delmore, dk14, Rex Kerr, martijnhoekstra, Kenji Yoshida, vsalvis, todesking, triggerNZ, Linas Medziunas, Dongjoon Hyun, Denys Shabalin, Pim Verkerk, Rebecca Claire Murphy, Alan Johnson, David Hoepelman, Shadow53, Casey Leask, Arnout Engelen, Sébastien Doeraene, Valerian, Viktor Klang, jvican, mathhun, peterz, Eitan Adler, Frank S. Thomas, Dmitry Petrashko, JoeRatt, Kato Kazuyoshi, Dmitry Melnichenko, Marc Prud'hommeaux, Mark Mynsted, Marko Elezovic, Markus Hauck, Michał Pociecha. Thank you!

## Release notes

Improvements to these release notes [are welcome!](https://github.com/scala/make-release-notes/blob/2.12.x/hand-written.md)

## Obtaining Scala

* Download a distribution from [scala-lang.org](http://scala-lang.org/download/2.12.0-M4.html)
* Bump the `scalaVersion` setting in your SBT-based project
* Obtain JARs via [Maven Central](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.12.0-M4%22)
