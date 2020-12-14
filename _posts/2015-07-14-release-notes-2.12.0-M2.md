---

category: announcement
permalink: /news/2.12.0-M2/
title: "Scala 2.12.0-M2 is now available!"
---
We are pleased to announce the availability of Scala 2.12.0-M2!

We would like to highlight the following changes since M1:

* Java 8 is now required.
* Lambdas are compiled to Java 8 style closures.

Compared to M1, this release resolves [9 issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20%3D%20%22Scala%202.12.0-M2%22%20ORDER%20BY%20component%20ASC%2C%20priority%20DESC).  We [merged 29 pull requests](https://github.com/scala/scala/pulls?q=is%3Apr+is%3Amerged+milestone%3A2.12.0-M2).
<!-- Before upgrading, please also check the [known issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20status%3Dopen%20AND%20affectedVersion%20%3D%20%22Scala%202.11.7%22%20and%20fixVersion%20%3E%3D%20%22Scala%202.11.7%22%20ORDER%20BY%20component%20ASC%2C%20priority%20DESC) for this release.-->

As usual for milestones, 2.12.0-M2 is not binary compatible with any other Scala release, including other 2.12 milestones.

## About Scala 2.12

Beginning with 2.12.0-M2, the Scala 2.12 series targets Java 8. Programs written in Scala 2.12, including the Scala 2.12 compiler, can only be executed on Java 8 or newer.

### Source compatibility

Scala 2.12 is mostly source compatible with 2.11.  Code that compiles on 2.11.x without deprecation warnings should compile on 2.12.x too, unless you use experimental APIs such as reflection.  If you find incompatibilities, please [file an issue](https://issues.scala-lang.org).

### Binary compatibility

Since Scala 2.11, minor releases of Scala are binary compatible with each other.
Scala 2.12 will continue this tradition: every 2.12.x release will be binary compatible with 2.12.0.
Milestone releases and release candidates, however, are **not** binary compatible with any other release.

Scala 2.12 is not and will not be binary compatible with the 2.11.x series.  This allows us to keep improving the Scala compiler and standard library.  We are working with the community to ensure that core projects in the Scala eco-system become available for 2.12.  Please refer to this growing [list of libraries and frameworks](https://github.com/scala/make-release-notes/blob/2.12.x/projects-2.12.md).

The [Scala 2.11.1 release notes](https://scala-lang.org/news/2.11.1) explain in more detail on how binary compatibility works in Scala.  The same policies that applied to 2.11 will apply to 2.12 as well.

### New features

Future 2.12 milestones will include additional new features. For now, M2 includes the following major changes:

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

As of M2, this feature is not yet on by default.  You can enable it with the `-Xexperimental` compiler option.

When the option is enabled, then similar to Java 8, Scala 2.12 allows instantiating any type with one single abstract method by passing a lambda.  This improves the experience of using libraries written for Java 8 in Scala.

This feature was also available in Scala 2.11, also via `-Xexperimental`.

#### New Bytecode Optimizer

The GenBCode backend includes a new inliner and bytecode optimizer.
The optimizer is enabled using the `-Yopt:l:classpath` compiler option.
Check `-Yopt:help` to see the full list of available options for the optimizer.

As of M2, the following optimizations are available:

* Inlining final methods, including methods defined in objects and final methods defined in traits
* If a closure is allocated and invoked within the same method, the closure invocation is replaced by an invocations of the corresponding lambda body method
* Dead code elimination and a small number of cleanup optimizations

The work on the new optimizer is still ongoing.  You can track it in the scala-opt repository issue tracker.

### Unbundled features

The following modules have been removed from the Scala 2.12 distribution:

* Scala standard library actors.
  We recommend [Akka actors](https://akka.io/) instead.
  See the [Scala actors migration guide](https://docs.scala-lang.org/overviews/core/actors-migration-guide.html).
* Akka actors.
  The Scala distribution and the `scala-library-all` dependency no longer include Akka actors.
  To use Akka, [add it as a dependency](https://doc.akka.io/docs/akka/2.3.11/intro/getting-started.html).
* Continuations plugin.
  ([Community maintainers sought](https://github.com/scala/scala-continuations).)

## Contributors

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, spreading kindness in mailing lists and other public fora, and submitting and reviewing pull requests! You are all magnificent.

According to `git shortlog -sn --no-merges 2.11.x..v2.12.0-M2`, 40 people have contributed to Scala 2.12 so far: Lukas Rytz, Jason Zaugg, A. P. Marki, Rex Kerr, Adriaan Moors, Kato Kazuyoshi, Max Bileschi, Rui Gonçalves, jxcoder, François Garillot, rubyu, Dominik Gruntz, Evgeny Vereshchagin, Kenji Yoshida, Marc Siegel, Masato Sogame, Simon Ochsenreither, Todd Vierling, Viktor Klang, Maks Atygaev, dgruntz, harryhuk, Denton Cockburn, Paolo Giarrusso, Denis Rosset, Roman Hargrave, Antoine Gourlay, Seth Tisue, Shadaj, Alexey Romanov, Steven Scott, Tim Vergenz, martijnhoekstra, Aleksandar Prokopec, Janek Bogucki, Eugene Dzhurinsky, cchantep, Lukas Elmer, Erlend Hamnaberg, Malte Isberner. Thank you!

Thanks also to Miguel Garcia and James Iry for their substantial prior work on the new compiler backend.

## Release notes

You can propose edits to these release notes [on GitHub](https://github.com/scala/make-release-notes/blob/2.12.x/hand-written.md).

## Obtaining Scala

Scala releases are available various ways, such as:

<!-- re-add for 2.12.0 final?
* Get started with the [Hello Scala 2.12 template](https://www.lightbend.com/activator/template/hello-scala-2_12) in [Typesafe Activator](https://www.lightbend.com/platform/getstarted)
-->
* Download a distribution from [scala-lang.org](https://scala-lang.org/download/2.12.0-M2.html)
* Bump the `scalaVersion` setting in your SBT-based project
* Obtain JARs via [Maven Central](https://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.12.0-M2%22)
