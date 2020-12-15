---

category: announcement
permalink: /news/2.12.0-M1/
title: "Scala 2.12.0-M1 is now available!"
---
We are very pleased to announce the release of Scala 2.12.0-M1!

* Download a distribution from [scala-lang.org](https://scala-lang.org/download/2.12.0-M1.html)
* Obtain it via [Maven Central](https://search.maven.org/?search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.11.0%22#search%7Cga%7C1%7Cg%3Aorg.scala-lang%20AND%20v%3A2.12.0-M1)

Code that compiles on 2.11.x without deprecation warnings should compile on 2.12.x (we do not guarantee this for experimental APIs, such as reflection).
If not, [please file an issue](https://issues.scala-lang.org).

We are working with the community to ensure availability of the core projects of the Scala 2.12 eco-system.
This release is *not* binary compatible with the 2.11.x series, to allow us to keep improving the Scala standard library.

The Scala 2.12 series targets Java 8.
Programs written in Scala 2.12, including the Scala 2.12 compiler, can only be executed on Java 8 or newer.
Note that the current milestone release (2.12.0-M1) still targets Java 6.


### New Features in the 2.12 Series

Scala 2.12 contains all of the bug fixes and improvements made in the 2.11 series.

At the current stage in the milestone cycle, Scala 2.12 is still very similar to Scala 2.11.

The following changes are planned for Scala 2.12:

* Java 8 style closures.
  The Scala compiler will emit closure classes (lambdas) in the same manner as Java 8.
  The design notes for this feature are available in [this gist](https://gist.github.com/retronym/0178c212e4bacffed568).
* Lambda syntax for SAM types.
  Similar to Java 8, Scala 2.12 allows instantiating any type with one single abstract method by passing a lambda.
  This feature is already avalable in Scala 2.11 using the `-Xexperimental` compiler option.
  It improves the experience of using libraries written for Java 8 in Scala.
* New backend and optimizer.
  The "GenBCode" backend, which is already available in Scala 2.11 using the `-Ybackend:GenBCode` compiler option, will be enabled by default.
  Scala 2.12 will also ship with a new inliner and bytecode optimizer.
  We keep track of issues and work items for the new optimizer on the scala-opt repository issue tracker.

The above list is incomplete and will be extended during the Scala 2.12 milestone cycle.

Up the current milestone, the Scala team and contributors [fixed 47 bugs](https://issues.scala-lang.org/browse/SI-9200?jql=project%20%3D%20SI%20and%20fixVersion%20%3E%3D%20%222.12.0-M1%22%20and%20fixVersion%20%3C%3D%20%222.12.0%22%20and%20resolution%20%3D%20fixed) that are exclusive to Scala 2.12.0.
During the development cycle of Scala 2.12, we will continue to backport issues to 2.11 whenever feasible.
With the release of 2.12.0, backports to 2.11 will be dialed back.


<!-- Notes from 2.11.0
#### Important Changes

For most cases, code that compiled under 2.10.x without deprecation warnings should not be affected. We've verified this by [compiling](https://scala-ci.typesafe.com/job/scala-2.11.x-jdk8-integrate-community-build/) a [sizeable number of open source projects](https://github.com/scala/community-build/blob/2.11.x/common.conf#L20).

Changes to the reflection API may cause breakages...

We've decided to fix the following more obscure deviations from specified behavior without deprecating them first.

* [SI-4577](https://issues.scala-lang.org/browse/SI-4577) Compile `x match { case _ : Foo.type => }` to `Foo eq x`, as specified. It used to be `Foo == x` (without warning). If that's what you meant, write `case Foo =>`.
* ...

The following changes were made after a deprecation cycle

* [SI-6809](https://issues.scala-lang.org/browse/SI-6809) Case classes without a parameter list are no longer allowed.
* ...

Finally, some notable improvements and bug fixes:

* [SI-7296](https://issues.scala-lang.org/browse/SI-7296) Case classes with > 22 parameters are now allowed.
*...


#### Deprecations

The following language "warts" have been deprecated:
* [#3746](https://github.com/scala/scala/pull/3746) Generation of bean info classes using the `@BeanInfo` annotation.
Deprecation is closely linked to source and binary compatibility. We say two versions are source compatible when they compile the same programs with the same results. Deprecation requires qualifying this statement: "assuming there are no deprecation warnings". This is what allows us to evolve the Scala platform and keep it healthy. We move slowly to guarantee smooth upgrades, but we want to keep improving as well!
-->


#### Removed Modules

The following modules have been removed from the Scala 2.12 distribution:

* The Scala actors library is no longer released with Scala 2.12.
  We recommend that you use the [Akka actors library](https://akka.io/) instead.
  To migrate your code, follow the [Scala actors migration guide](https://docs.scala-lang.org/overviews/core/actors-migration-guide.html) before upgrading your project to Scala 2.12.
* The Scala distribution archives and the `scala-library-all` maven dependency no longer inlcude Akka actors.
  To use the Akka actors library, add it to your project [as a dependency](https://doc.akka.io/docs/akka/2.3.10/intro/getting-started.html).
* The continuations plugin is no longer shipped with the Scala 2.12 distribution.


#### Contributors

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, spreading kindness in mailing lists and other public fora, and submitting and reviewing pull requests!
You are all magnificent.

According to `git shortlog -sn --no-merges 2.11.x..v2.12.0-M1`, 33 people contributed to this major release:
Jason Zaugg, Lukas Rytz, A. P. Marki, Rex Kerr, Kato Kazuyoshi, Max Bileschi, jxcoder, François Garillot, rubyu, Adriaan Moors, Dominik Gruntz, Evgeny Vereshchagin, Marc Siegel, Masato Sogame, Simon Ochsenreither, Todd Vierling, Viktor Klang, cchantep, Denton Cockburn, Paolo Giarrusso, Denis Rosset, Roman Hargrave, Rui Gonçalves, Shadaj, harryhuk, Steven Scott, Antoine Gourlay, Aleksandar Prokopec, Lukas Elmer, Erlend Hamnaberg, Maks Atygaev, Malte Isberner, dgruntz.
Thank you!

These release notes are [hosted on GitHub](https://github.com/scala/make-release-notes/blob/2.12.x/hand-written.md) and are continuously updated during the Scala 2.12.0 release cycle.
You are kindly invited to contribute!


### Reporting Bugs

Please file any bugs you encounter on [our issue tracker](https://issues.scala-lang.org).
If you're unsure whether something is a bug, please contact the [scala-user](https://groups.google.com/forum/?fromgroups#!forum/scala-user) mailing list.
Before creating a new issue, search search the issue tracker to see if your bug has already been reported.


### Scala IDE for Eclipse

A release of the Scala IDE for Eclipse for Scala 2.12 will be available together with the release.

Note that for the current milestone (2.12.0-M1), the Scala IDE is not yet available.

<!-- Notes from 2.11.0
The Scala IDE with this release built in is [available from this update site](https://web.archive.org/web/20151026064959/http://download.scala-ide.org/sdk/helium/e38/scala211/stable/site/) for [Eclipse 4.2/4.3 (Juno/Kepler)](https://www.eclipse.org/downloads/packages/release/Kepler/SR2). Please have a look at the [getting started guide](http://scala-ide.org/docs/user/gettingstarted.html) for more info.
-->


### Available Projects

Please refer to the list of [libraries and frameworks available for Scala 2.12](https://github.com/scala/make-release-notes/blob/2.12.x/projects-2.12.md).


### Binary Compatibility

Since Sala 2.11, minor releases of Scala are binary compatible.
Scala 2.12 continues this tradition: every 2.12.x release will be binary compatible with 2.12.0.
Note that milestone releases and release candidates are **not** binary compatible with any other release.

#### Definition

When two versions of Scala are binary compatible, it is safe to compile your project on one Scala version and link against another Scala version at run time.
Safe run-time linkage (only!) means that the JVM does not throw a (subclass of) [`LinkageError`](https://docs.oracle.com/javase/7/docs/api/java/lang/LinkageError.html) when executing your program in the mixed scenario, assuming that none arise when compiling and running on the same version of Scala.
Concretely, this means you may have external dependencies on your run-time classpath that use a different version of Scala than the one you're compiling with, as long as they're binary compatibile.
In other words, separate compilation on different binary compatible versions does not introduce problems compared to compiling and running everything on the same version of Scala.

We check binary compatibility automatically with [MiMa](https://github.com/typesafehub/migration-manager).

#### Forwards and Back

We distinguish forwards and backwards compatibility (think of these as properties of a sequence of versions, not of an individual version).
Maintaining backwards compatibility means code compiled on an older version will link with code compiled with newer ones.
Forwards compatibility allows you to compile on new versions and run on older ones.

Thus, backwards compatibility precludes the removal of (non-private) methods, as older versions could call them, not knowing they would be removed, whereas forwards compatibility disallows adding new (non-private) methods, because newer programs may come to depend on them, which would prevent them from running on older versions (private methods are exempted here as well, as their definition and call sites must be in the same compilation unit).

#### Meta

Note that so far we've only talked about the jars generated by scalac for the standard library and reflection.
Our policies do not extend to the meta-issue: ensuring binary compatibility for bytecode generated from identical sources, by different version of scalac?
(The same problem exists for compiling on different JDKs.)
While we strive to achieve this, it's not something we can test in general.
Notable examples where we know meta-binary compatibility is hard to achieve: specialisation and the optimizer.

In short, if binary compatibility of your library is important to you, use [MiMa](https://github.com/typesafehub/migration-manager) to verify compatibility before releasing.
Compiling identical sources with different versions of the Scala compiler (or on different JVM versions!) could result in binary incompatible bytecode.
This is rare, and we try to avoid it, but we can't guarantee it will never happen.

#### Concretely

We guarantee forwards and backwards compatibility of the `"org.scala-lang" % "scala-library" % "2.12.x"` and `"org.scala-lang" % "scala-reflect" % "2.12.x"` artifacts, except for anything under the `scala.reflect.internal` package, as scala-reflect is still experimental.
We also strongly discourage relying on the stability of `scala.concurrent.impl` and `scala.reflect.runtime`, though we will only break compatibility for severe bugs here.
