---

category: announcement
permalink: /news/2.12.0-M3/
title: "Scala 2.12.0-M3 is now available!"
---
We are pleased to announce the availability of Scala 2.12.0-M3!

Significant changes since M2 include:

* The REPL received a robust and flexible implementation of tab-completion (details below) - a fruitful collaboration between @som-snytt and @retronym
* The `@implicitAmbiguous` annotation allows customizing the error message when an implicit search finds multiple ambiguous values (details below) - thanks @puffnfresh!
* Enabling `-Ywarn-unused-import` now correctly warns about unused imports that were considered but discarded during an implicit search - thanks @som-snytt!
* The optimizer now attempts to inline invocations of higher-order methods if the argument function is statically known, eliminating polymorphic callsites. (This work will be refined further in later milestones.)
* The standard library no longer contains a clone of Java's fork/join library, but uses the one bundled in Java 8

Compared to M2, this release resolves [21 issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20status%20%3D%20CLOSED%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20%3D%20%22Scala%202.12.0-M3%22%20ORDER%20BY%20component%20ASC%2C%20priority%20DESC). We merged [49 pull requests](https://github.com/scala/scala/pulls?q=is%3Apr+is%3Amerged+milestone%3A2.12.0-M3).
<!-- Before upgrading, please also check the [known issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20status%3Dopen%20AND%20affectedVersion%20%3D%20%22Scala%202.11.7%22%20and%20fixVersion%20%3E%3D%20%22Scala%202.11.7%22%20ORDER%20BY%20component%20ASC%2C%20priority%20DESC) for this release.-->

As usual for milestones, 2.12.0-M3 is not binary compatible with any other Scala release, including other 2.12 milestones.

## About Scala 2.12

The Scala 2.12 series targets Java 8. Programs written in Scala 2.12 must be compiled and run on Java 8 or newer.

### Source compatibility

Scala 2.12 is mostly source compatible with 2.11.  Code that compiles on 2.11.x without deprecation warnings should compile on 2.12.x too, unless you use experimental APIs such as reflection.  If you find incompatibilities, please [file an issue](https://issues.scala-lang.org).

### Binary compatibility

Since Scala 2.11, minor releases of Scala are binary compatible with each other.
Scala 2.12 will continue this tradition: every 2.12.x release will be binary compatible with 2.12.0.
Milestone releases and release candidates, however, are **not** binary compatible with any other release.

Scala 2.12 is not and will not be binary compatible with the 2.11.x series.  This allows us to keep improving the Scala compiler and standard library.  We are working with the community to ensure that core projects in the Scala eco-system become available for 2.12.  Please refer to this growing [list of libraries and frameworks](https://github.com/scala/make-release-notes/blob/2.12.x/projects-2.12.md).

The [Scala 2.11.1 release notes](http://scala-lang.org/news/2.11.1) explain in more detail on how binary compatibility works in Scala.  The same policies apply to 2.12 as well.

### New features

Future 2.12 milestones will include additional new features. For now, M3 includes the following major changes:

#### New backend

Scala 2.12 enables the "GenBCode" backend by default.

The new backend is more efficient than the default backend of Scala 2.11, because it directly generates ASM bytecode from Scala compiler trees, while the previous backend used an intermediate representation called "ICode".

#### Java 8 style closure classes

Scala 2.12 emits closures in the same style as Java 8.

For each lambda the compiler generates a method containing the lambda body.
At runtime, this method is passed as an argument to the LambdaMetaFactory provided by the JDK, which creates a closure object.

Compared to Scala 2.11, the new scheme has the advantage that the compiler does not generate an anonymous class for each lambda anymore.
This leads to significantly smaller JAR files.

#### Lambda syntax for SAM types (experimental)

As of M3, this feature is not yet on by default.  You can enable it with the `-Xexperimental` compiler option.

When the option is enabled, then similar to Java 8, Scala 2.12 allows instantiating any type with one single abstract method by passing a lambda.  This improves the experience of using libraries written for Java 8 in Scala.

This feature was also available in Scala 2.11, also via `-Xexperimental`.

#### New tab-completion in the Scala REPL

The implementation of tab-completion in the Scala REPL has been rewritten and now uses the same infrastruture as for example the Scala IDE or Ensime. Note that this feature will also be available in 2.11.8.

There are a number of improvements:
* Reliable completion, also in partial expressions and syntactically incorrect programs: try `class C { def f(l: List[Int]) = l.<TAB>`
* CamelCase completion: try `(l: List[Int]).rro<TAB>`, it expands to `(l: List[Int]).reduceRightOption`
* Show desugarings performed by the compiler by adding `//print`: try `for (x <- 1 to 10) println(x) //print<TAB>`
* Complete bean getters without typing `get`: try `(d: java.util.Date).day<TAB>`
* Find members by typing any CamelCased part of the name: try `classOf[String].typ<TAB>` to get `getAnnotationsByType`, `getComponentType` and others
* Complete non-qualified names, including types: try `def f(s: Str<TAB>`
* Press tab twice to see the method signature: try `List(1,2,3).part<TAB>`, which completes to `List(1,2,3).partition`; press tab again to display `def partition(p: Int => Boolean): (List[Int], List[Int])`

Thanks to @som-snytt for helping out with this work!

#### New bytecode optimizer

The GenBCode backend includes a new inliner and bytecode optimizer.
The optimizer is enabled using the `-Yopt:l:classpath` compiler option.
Check `-Yopt:help` to see the full list of available options for the optimizer.

As of M3, the following optimizations are available:

* Inlining final methods, including methods defined in objects and final methods defined in traits
* If a closure is allocated and invoked within the same method, the closure invocation is replaced by an invocations of the corresponding lambda body method
* Dead code elimination and a small number of cleanup optimizations

The work on the new optimizer is still ongoing.  You can track it in the [scala-dev repository issue tracker](https://github.com/scala/scala-dev/labels/t%3Aoptimizer).

#### The `@implicitAmbiguous` annotation

The `@implicitAmbiguous` annotation allows customizing the error message when an implicit search finds multiple ambiguous values. Refer to the [Scaladoc of the annotation class](http://www.scala-lang.org/api/2.12.x/#scala.annotation.implicitAmbiguous) for an example.

Thanks to @puffnfresh for this contribution!

### Unbundled features

The following modules have been removed from the Scala 2.12 distribution:

* Scala standard library actors.
  We recommend [Akka actors](http://akka.io/) instead.
  See the [Scala actors migration guide](http://docs.scala-lang.org/overviews/core/actors-migration-guide.html).
* Akka actors.
  The Scala distribution and the `scala-library-all` dependency no longer include Akka actors.
  To use Akka, [add it as a dependency](http://doc.akka.io/docs/akka/2.4.0/intro/getting-started.html).
* Continuations plugin.
  ([Community maintainers sought](https://github.com/scala/scala-continuations).)

### Breaking changes

#### Changed syntax trees (affects macro and compiler plugin authors)

PR [#4794](https://github.com/scala/scala/pull/4749) changed the syntax trees for selections of statically accessible symbols. For example, a selection of `Predef` no longer has the shape `q"scala.this.Predef"` but simply `q"scala.Predef"`. Macros and compiler plugins matching on the old tree shape need to be adjusted.

## Contributors

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, spreading kindness in mailing lists and other public fora, and submitting and reviewing pull requests! You are all magnificent.

According to `git shortlog -sn --no-merges 2.11.x..v2.12.0-M3`, 44 people have contributed to Scala 2.12 so far: Lukas Rytz, Jason Zaugg, A. P. Marki, Rex Kerr, Adriaan Moors, Seth Tisue, Kato Kazuyoshi, Rui Gonçalves, Simon Ochsenreither, Max Bileschi, François Garillot, qilab gamma, jxcoder, Masato Sogame, Dominik Gruntz, Simon Schäfer, Kenji Yoshida, Todd Vierling, Viktor Klang, Alexey Romanov, Evgeny Vereshchagin, rubyu, Marc Siegel, dgruntz, Aleksandar Prokopec, Antoine Gourlay, Brian McKenna, Denis Rosset, Denton Cockburn, Erlend Hamnaberg, Eugene Dzhurinsky, Janek Bogucki, Lukas Elmer, Maks Atygaev, Malte Isberner, Nicolas Stucki, Paolo Giarrusso, Roman Hargrave, Shadaj, Steven Scott, Vojin Jovanovic, cchantep, harryhuk, martijnhoekstra. Thank you!

Thanks also to Miguel Garcia and James Iry for their substantial prior work on the new compiler backend.

## Release notes

You can propose edits to these release notes [on GitHub](https://github.com/scala/make-release-notes/blob/2.12.x/hand-written.md).

## Obtaining Scala

Scala releases are available various ways, such as:

<!-- re-add for 2.12.0 final?
* Get started with the [Hello Scala 2.12 template](https://typesafe.com/activator/template/hello-scala-2_12) in [Typesafe Activator](https://typesafe.com/platform/getstarted)
-->
* Download a distribution from [scala-lang.org](http://scala-lang.org/download/2.12.0-M3.html)
* Bump the `scalaVersion` setting in your SBT-based project
* Obtain JARs via [Maven Central](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.12.0-M3%22)
