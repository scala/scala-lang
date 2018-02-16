---

category: announcement
title: "Scala 2.11.1 is now available!"
permalink: /news/2.11.1/
---
We are very pleased to announce the release of Scala 2.11.1!

* Get started with the [Hello Scala 2.11 template](https://typesafe.com/activator/template/hello-scala-2_11) in [Typesafe Activator](https://typesafe.com/platform/getstarted)
* Download a distribution from [scala-lang.org](http://scala-lang.org/download/2.11.1.html)
* Obtain it via [Maven Central](http://search.maven.org/?search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.11.1%22#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.11.1%22)

This release contains [an important fix](https://github.com/scala/scala/pull/3711) for serialization, which was broken in Scala 2.11.0 ([SI-8549](https://issues.scala-lang.org/browse/SI-8549)).
The fix necessarily breaks serialization compatibility between 2.11.0 and 2.11.1 (this is separate from binary compatibility, which is maintained).

Users of distributed systems that rely on serialization to exchange objects (such as akka) should upgrade to Scala 2.11.1 (and akka 2.3.3) immediately.
We also strongly recommend that libraries that themselves declare classes with [@SerialVersionUID](http://www.scala-lang.org/api/2.11.1/index.html#scala.SerialVersionUID) annotations release a new version and ask their Scala 2.11 users to upgrade.

We apologize for the breakage. We have included a new suite of tests that will ensure stability of serialization for the remainder of the 2.11.x series.

<!--break-->

Compared to 2.11.0, this release fixes [26 issues](https://issues.scala-lang.org/browse/SI-8549?jql=project%20%3D%20SI%20AND%20fixVersion%20%3D%20%22Scala%202.11.1%22%20AND%20resolution%20%3D%20fixed%20ORDER%20BY%20priority%20DESC). We reviewed and merged [51 pull requests](https://github.com/scala/scala/issues?milestone=34&state=closed).

The next minor Scala 2.11 release will be available in at most 2 months, or sooner if prompted by a serious issue.

The remainder of these release notes summarizes the 2.11.x series, and as such is not specific to this minor release.

### Upgrading
Code that compiled on 2.10.x without deprecation warnings should compile on 2.11.x (we do not guarantee this for experimental APIs, such as reflection). If not, [please file a regression](https://issues.scala-lang.org/secure/CreateIssueDetails!init.jspa?pid=10005&issuetype=1&versions=11808&labels=regression). We are working with the community to ensure availability of the core projects of the Scala 2.11.x eco-system, please see below for a list. This release is *not* binary compatible with the 2.10.x series, to allow us to keep improving the Scala standard library.

### Required Java Version
The Scala 2.11.x series targets Java 6, with (evolving) experimental support for Java 8. In 2.11.1, Java 8 support is mostly limited to reading Java 8 bytecode and parsing Java 8 source. Stay tuned for more complete (experimental) Java 8 support. The next major release, 2.12, will most likely target Java 8 by default.

### New features in the 2.11 series
This release contains all of the bug fixes and improvements made in the 2.10 series, as well as:

* Collections
  * Immutable `HashMap`s and `HashSet`s perform faster filters, unions, and the like, with improved structural sharing (lower memory usage or churn).
  * Mutable `LongMap` and `AnyRefMap` have been added to provide improved performance when keys are `Long` or `AnyRef` (performance enhancement of up to 4x or 2x respectively).
  * `BigDecimal` is more explicit about rounding and numeric representations, and better handles very large values without exhausting memory (by avoiding unnecessary conversions to `BigInt`).
  * `List` has improved performance on `map`, `flatMap`, and `collect`.
  * See also Deprecation above: we have slated many classes and methods to become final, to clarify which classes are not meant to be subclassed and to facilitate future maintenance and performance improvements.
* Modularization
  * The core Scala standard library jar has shed 20% of its bytecode. The modules for xml, parsing, swing as well as the (unsupported) continuations plugin and library are available individually or via [scala-library-all](http://search.maven.org/#artifactdetails%7Corg.scala-lang%7Cscala-library-all%7C2.11.1%7Cpom). Note that this artifact has weaker binary compatibility guarantees than `scala-library` -- as explained above.
  * The compiler has been modularized internally, to separate the presentation compiler, scaladoc and the REPL. We hope this will make it easier to contribute. In this release, all of these modules are still packaged in scala-compiler.jar. We plan to ship them in separate JARs in 2.12.x.
* Reflection, macros and quasiquotes
  * Please see [this detailed changelog](http://docs.scala-lang.org/overviews/macros/changelog211.html) that lists all significant changes and provides advice on forward and backward compatibility.
  * See also this [summary](http://scalamacros.org/news/index.html) of the experimental side of the 2.11 development cycle.
  * [#3321](https://github.com/scala/scala/pull/3321) introduced [Sprinter](http://vladimirnik.github.io/sprinter/), a new AST pretty-printing library! Very useful for tools that deal with source code.
* Back-end
  * The [GenBCode back-end](https://github.com/scala/scala/pull/2620) (experimental in 2.11). See [@magarciaepfl's extensive documentation](http://magarciaepfl.github.io/scala/).
  * A new experimental way of compiling closures, implemented by [@JamesIry](https://github.com/JamesIry). With `-Ydelambdafy:method` anonymous functions are compiled faster, with a smaller bytecode footprint. This works by keeping the function body as a private (static, if no `this` reference is needed) method of the enclosing class, and at the last moment during compilation emitting a small anonymous class that `extends FunctionN` and delegates to it. This sets the scene for a smooth migration to Java 8-style lambdas (not yet implemented).
  * Branch elimination through constant analysis [#2214](https://github.com/scala/scala/pull/2214)
  * [Scala.js](http://www.scala-js.org/), a separate project, provides an experimental JavaScript back-end for Scala 2.11. Note that it is not part of the standard Scala distribution.
  * Be more [Avian](https://readytalk.github.io/avian/)- [friendly](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20and%20fixVersion%20%3E%3D%20%22Scala%202.11.0-M1%22%20and%20fixVersion%20%3C%3D%20%22Scala%202.11.1%22%20and%20resolution%20%3D%20fixed%20and%20text%20~%20%22avian%22).
* Compiler Performance
  * Incremental compilation has been improved significantly. To try it out, upgrade to sbt 0.13.2 and add `incOptions := incOptions.value.withNameHashing(true)` to your build! Other build tools are also supported. More info at [this sbt issue](https://github.com/sbt/sbt/issues/1010) -- that's where most of the work happened. More features are planned, e.g. [class-based tracking](https://github.com/sbt/sbt/issues/1104).
  * We've been optimizing the batch compiler's performance as well, and will continue to work on this during the 2.11.x cycle.
  * Improve performance of reflection [SI-6638](https://issues.scala-lang.org/browse/SI-6638)
* The IDE received [numerous bug fixes and improvements!](https://issues.scala-lang.org/browse/SI-8085?jql=component%20%3D%20%22Presentation%20Compiler%22%20AND%20project%20%3D%20SI%20AND%20resolution%20%3D%20fixed%20and%20fixVersion%20%3E%3D%20%22Scala%202.11.0-M1%22%20and%20fixVersion%20%3C%3D%20%20%22Scala%202.11.1%22%20ORDER%20BY%20updated%20DESC)
* REPL
  * The bytecode decompiler command, :javap, now works with Java 7 [SI-4936](https://issues.scala-lang.org/browse/SI-4936) and has sprouted new options [SI-6894](https://issues.scala-lang.org/browse/SI-6894) (Thanks, [@som-snytt](https://github.com/som-snytt)!)
  * Added command :kind to help to tell ground types from type constructors. [#2340](https://github.com/scala/scala/pull/2340) (Thanks, [George Leontiev](https://github.com/folone) and [Eugene Yokota](https://github.com/eed3si9n)!)
  * The interpreter can now be embedded as a JSR-223 Scripting Engine [SI-874](https://issues.scala-lang.org/browse/SI-874). (Thanks, [Raphael Jolly](https://github.com/rjolly)!)
* Improved `-Xlint` warnings
  * Warn about unused private / local terms and types, and unused imports.
  * This will even tell you when a local `var` could be a `val`.
* Slimming down the compiler
  * The experimental .NET backend has been removed from the compiler.
  * Scala 2.10 shipped with new implementations of the Pattern Matcher and the Bytecode Emitter. We have removed the old implementations.
  * Search and destroy mission for ~5000 chunks of dead code. [#1648](https://github.com/scala/scala/pull/1648/files)

The Scala team and contributors [fixed 655 bugs](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20and%20fixVersion%20>%3D%20"Scala%202.11.0-M1"%20and%20fixVersion%20<%3D%20"Scala%202.11.1"%20and%20resolution%20%3D%20fixed) that are exclusive to Scala 2.11! We also backported as many as possible. With the release of 2.11, 2.10 backports will be dialed back.

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, participating in mailing lists and other public fora, and -- of course -- submitting and reviewing pull requests! You are all awesome.

Concretely, according to `git log --no-merges --oneline 2.11.x --not 2.10.x --format='%aN'  | sort | uniq -c | sort -rn`, 115 people contributed code, tests, and/or documentation to Scala 2.11.x: Paul Phillips, Jason Zaugg, Eugene Burmako, Adriaan Moors, A. P. Marki, Simon Ochsenreither, Den Shabalin, Miguel Garcia, James Iry, Iain McGinniss, Grzegorz Kossakowski, Rex Kerr, François Garillot, Vladimir Nikolaev, Eugene Vigdorchik, Lukas Rytz, Mirco Dotta, Rüdiger Klaehn, Antoine Gourlay, Raphael Jolly, Simon Schaefer, Kenji Yoshida, Paolo Giarrusso, Luc Bourlier, Hubert Plociniczak, Aleksandar Prokopec, Vlad Ureche, Lex Spoon, Andrew Phillips, Sébastien Doeraene, Josh Suereth, Jean-Remi Desjardins, Vojin Jovanovic, Viktor Klang, Valerian, Prashant Sharma, Pavel Pavlov, Michael Thorpe, Jan Niehusmann, Iulian Dragos, Heejong Lee, George Leontiev, Daniel C. Sobral, Christoffer Sawicki, yllan, rjfwhite, Volkan Yazıcı, Ruslan Shevchenko, Robin Green, Roberto Tyley, Olivier Blanvillain, Mark Harrah, James Ward, Ilya Maykov, Eugene Yokota, Erik Osheim, Dan Hopkins, Chris Hodapp, Antonio Cunei, Andriy Polishchuk, Alexander Clare, 杨博, srinivasreddy, secwall, nermin, martijnhoekstra, kurnevsky, jinfu-leng, folone, Yaroslav Klymko, Xusen Yin, Trent Ogren, Tobias Schlatter, Thomas Geier, Stuart Golodetz, Stefan Zeiger, Scott Carey, Samy Dindane, Sagie Davidovich, Runar Bjarnason, Roland Kuhn, Robert Nix, Robert Ladstätter, Rike-Benjamin Schuppner, Rajiv, Philipp Haller, Nada Amin, Mike Morearty, Michael Bayne, Marcin Kubala, Luke Cycon, Lee Mighdoll, Konstantin Fedorov, Julio Santos, Julien Richard-Foy, Juha Heljoranta, Johannes Rudolph, Jiawei Li, Jentsch, Jason Swartz, James Roper, Heather Miller, Havoc Pennington, Guillaume Martres, Evgeny Kotelnikov, Dmitry Petrashko, Dmitry Bushev, David Hall, Daniel Darabos, Dan Rosen, Cody Allen, Carlo Dapor, Brian McKenna, Andrey Kutejko, Alden Torres.

Thank you all very much.

If you find any errors or omissions in these relates notes, [please submit a PR](https://github.com/scala/make-release-notes/blob/2.11.x/hand-written.md)!

### Reporting Bugs / Known Issues
Please [file any bugs you encounter](https://issues.scala-lang.org/secure/CreateIssueDetails!init.jspa?pid=10005&issuetype=1&versions=11311). If you're unsure whether something is a bug, please contact the [scala-user](https://groups.google.com/forum/?fromgroups#!forum/scala-user) mailing list.

Before reporting a bug, please have a look at these [known issues](https://issues.scala-lang.org/browse/SI-6267?jql=project%20%3D%20SI%20AND%20%28fixVersion%20is%20empty%20or%20fixVersion%20%3E%20%22Scala%202.11.1%22%29%20AND%20affectedVersion%20in%20%28%22Scala%202.11.0%22%2C%20%22Scala%202.11.1%22%29%20%20and%20resolution%20%3D%20unresolved%20ORDER%20BY%20priority%20DESC).

### Scala IDE for Eclipse
The Scala IDE with this release built in is [available from this update site](https://web.archive.org/web/20151026064959/http://download.scala-ide.org/sdk/helium/e38/scala211/stable/site/) for [Eclipse 4.2/4.3 (Juno/Kepler)](http://www.eclipse.org/downloads/packages/eclipse-ide-java-developers/keplersr2). Please have a look at the [getting started guide](http://scala-ide.org/docs/user/gettingstarted.html) for more info.


### Available projects
The following Scala projects have already been released against 2.11! See also [@jrudolph's analysis](https://gist.github.com/jrudolph/7a323f5e2820d8479b18) of the availability of 2.11 builds of popular libraries (as well as which ones are missing); updated regularly.

We'd love to include your release in this list as soon as it's available -- please submit a PR to update [these release notes](https://github.com/scala/make-release-notes/blob/2.11.x/hand-written.md).

    "org.scalacheck"                   %% "scalacheck"                % "1.11.4"
    "org.scalatest"                    %% "scalatest"                 % "2.1.7"
    "org.scalautils"                   %% "scalautils"                % "2.1.7"
    "com.typesafe.akka"                %% "akka-actor"                % "2.3.3"
    "com.typesafe.scala-logging"       %% "scala-logging-slf4j"       % "2.1.2"
    "org.scala-lang.modules"           %% "scala-async"               % "0.9.1"
    "org.scalikejdbc"                  %% "scalikejdbc-interpolation" % "2.0.0"
    "com.softwaremill.scalamacrodebug" %% "macros"                    % "0.4"
    "com.softwaremill.macwire"         %% "macros"                    % "0.6"
    "com.chuusai"                      %% "shapeless"                 % "1.2.4"
    "com.chuusai"                      %% "shapeless"                 % "2.0.0"
    "org.nalloc"                       %% "optional"                  % "0.1.0"
    "org.scalaz"                       %% "scalaz-core"               % "7.0.6"
    "com.assembla.scala-incubator"     %% "graph-core"                % "1.8.1"
    "com.nocandysw"                    %% "platform-executing"        % "0.5.0"
    "com.qifun"                        %% "stateless-future"          % "0.2.2"
    "com.github.scopt"                 %% "scopt"                     % "3.2.0"
    "com.dongxiguo"                    %% "commons-continuations"     % "0.2.2"
    "com.dongxiguo"                    %% "memcontinuationed"         % "0.3.2"
    "com.dongxiguo"                    %% "fastring"                  % "0.2.4"
    "com.dongxiguo"                    %% "zero-log"                  % "0.3.5"
    "com.github.seratch"               %% "ltsv4s"                    % "1.0.0"
    "com.googlecode.kiama"             %% "kiama"                     % "1.6.0"
    "org.scalamock"                    %% "scalamock-scalatest-support" % "3.1.1"
    "org.scalamock"                    %% "scalamock-specs2-support"  % "3.1.1"
    "com.github.nscala-time"           %% "nscala-time"               % "1.0.0"
    "com.github.xuwei-k"               %% "applybuilder70"            % "0.1.3"
    "com.github.xuwei-k"               %% "nobox"                     % "0.1.9"
    "org.typelevel"                    %% "scodec-bits"               % "1.0.0"
    "org.typelevel"                    %% "scodec-core"               % "1.0.0"
    "com.sksamuel.scrimage"            %% "scrimage"                  % "1.3.20"
    "net.databinder"                   %% "dispatch-http"             % "0.8.10"
    "net.databinder"                   %% "unfiltered"                % "0.8.0"
    "net.databinder"                   %% "unfiltered"                % "0.7.1"
    "io.argonaut"                      %% "argonaut"                  % "6.0.4"
    "org.specs2"                       %% "specs2"                    % "2.3.12"
    "com.propensive"                   %% "rapture-core"              % "0.9.0"
    "com.propensive"                   %% "rapture-json"              % "0.9.1"
    "com.propensive"                   %% "rapture-io"                % "0.9.1"
    "org.scala-stm"                    %% "scala-stm"                 % "0.7"
    "org.parboiled"                    %% "parboiled-scala"           % "1.1.6"
    "io.spray"                         %% "spray-json"                % "1.2.6"
    "org.scala-libs"                   %% "scalajpa"                  % "1.5"
    "com.casualmiracles"               %% "treelog"                   % "1.2.3"
    "org.monifu"                       %% "monifu"                    % "0.9.3"
    "org.mongodb"                      %% "casbah"                    % "2.7.2"
    "com.clarifi"                      %% "f0"                        % "1.1.2"
    "org.scalaj"                       %% "scalaj-http"               % "0.3.15"

The following libraries are specific to the 2.11.x minor release you're using. If you depend on them, you should also cross-version fully!

    "org.scalamacros"                   % "paradise"                  % "2.0.0" cross CrossVersion.full

### Cross-building with sbt 0.13
When cross-building between Scala versions, you often need to vary the versions of your dependencies. In particular, the new scala modules (such as scala-xml) are no longer included in scala-library, so you'll have to add an explicit dependency on it to use Scala's xml support.

Here's how we recommend handling this in sbt 0.13. For the full build and Maven build, see [example](https://github.com/scala/scala-module-dependency-sample).

    scalaVersion        := "2.11.1"

    crossScalaVersions  := Seq("2.11.1", "2.10.3")

    // add scala-xml dependency when needed (for Scala 2.11 and newer)
    // this mechanism supports cross-version publishing
    libraryDependencies := {
      CrossVersion.partialVersion(scalaVersion.value) match {
        case Some((2, scalaMajor)) if scalaMajor >= 11 =>
          libraryDependencies.value :+ "org.scala-lang.modules" %% "scala-xml" % "1.0.1"
        case _ =>
          libraryDependencies.value
      }
    }

### Important changes
For most cases, code that compiled under 2.10.x without deprecation warnings should not be affected. We've verified this by [compiling](https://jenkins-dbuild.typesafe.com:8499/job/Community-2.11.x) a [sizeable number of open source projects](https://github.com/scala/community-builds/blob/2.11.x/common.conf#L20).

Changes to the reflection API may cause breakages, but these breakages can be easily fixed in a manner that is source-compatible with Scala 2.10.x. Follow our reflection/macro changelog for [detailed instructions](http://docs.scala-lang.org/overviews/macros/changelog211.html#how_to_make_your_210x_macros_work_in_2110).

We've decided to fix the following more obscure deviations from specified behavior without deprecating them first.

* [SI-4577](https://issues.scala-lang.org/browse/SI-4577) Compile `x match { case _ : Foo.type => }` to `Foo eq x`, as specified. It used to be `Foo == x` (without warning). If that's what you meant, write `case Foo =>`.
* [SI-7475](https://issues.scala-lang.org/browse/SI-7475) Improvements to access checks, aligned with the spec (see also the linked issues). Most importantly, private members are no longer inherited. Thus, this does not type check: `class Foo[T] { private val bar: T = ???; new Foo[String] { bar: String } }`, as the `bar` in `bar: String` refers to the `bar` with type `T`. The `Foo[String]`'s `bar` is not inherited, and thus not in scope, in the refinement. (Example from [SI-8371](https://issues.scala-lang.org/browse/SI-8371), see also [SI-8426](https://issues.scala-lang.org/browse/SI-8426).)

The following changes were made after a deprecation cycle (Thank you, [@soc](https://github.com/soc), for leading the deprecation effort!)

* [SI-6809](https://issues.scala-lang.org/browse/SI-6809) Case classes without a parameter list are no longer allowed.
* [SI-7618](https://issues.scala-lang.org/browse/SI-7618) Octal number literals no longer supported.

Finally, some notable improvements and bug fixes:

* [SI-8549](https://issues.scala-lang.org/browse/SI-8549) Fix bad regression: no `serialVersionUID` field for classes annotated with [@SerialVersionUID](http://www.scala-lang.org/api/2.11.1/index.html#scala.SerialVersionUID). The Scala standard library itself was a victim of this bug. As such, collections serialized in 2.11.0 will not be able to be deserialized in 2.11.1. This regression occurred in a failed [attempt](https://github.com/scala/scala/pull/1673) to fix a related bug in 2.10.x, [SI-6988](https://issues.scala-lang.org/browse/SI-6988), whereby classes annotated with non literal UIDS, e.g. `0L - 123L`, had no field generated.
* [SI-7296](https://issues.scala-lang.org/browse/SI-7296) Case classes with > 22 parameters are now allowed.
* [SI-3346](https://issues.scala-lang.org/browse/SI-3346) Implicit arguments of implicit conversions now guide type inference.
* [SI-6240](https://issues.scala-lang.org/browse/SI-6240) Thread safety of reflection API.
* [#3037](https://github.com/scala/scala/pull/3037) Experimental support for SAM synthesis.
* [#2848](https://github.com/scala/scala/pull/2848) Name-based pattern-matching.
* [SI-6169](https://issues.scala-lang.org/browse/SI-6169) Infer bounds of Java-defined existential types.
* [SI-6566](https://issues.scala-lang.org/browse/SI-6566) Right-hand sides of type aliases are now considered invariant for variance checking.
* [SI-5917](https://issues.scala-lang.org/browse/SI-5917) Improve public AST creation facilities.
* [SI-8063](https://issues.scala-lang.org/browse/SI-8063) Expose much needed methods in public reflection/macro API.
* [SI-8126](https://issues.scala-lang.org/browse/SI-8126) Add -Xsource option (make 2.11 type checker behave like 2.10 where possible).
* [SI-8157](https://issues.scala-lang.org/browse/SI-8157) Polymorphic methods also subject to restriction: only one overload may define default arguments

To catch future changes like this early, you can run the compiler under -Xfuture, which makes it behave like the next major version, where possible, to alert you to upcoming breaking changes.

### Deprecations
Deprecation is essential to two of the 2.11.x series' three themes ([faster/smaller/stabler](http://java.dzone.com/articles/state-scala-2013)). They make the language and the libraries smaller, and thus easier to use and maintain, which ultimately improves stability. We are very proud of Scala's first decade, which brought us to where we are, and we are actively working on minimizing the downsides of this legacy, as exemplified by 2.11.x's focus on deprecation, modularization and infrastructure work.

The following language "warts" have been deprecated:

* [SI-7605](https://issues.scala-lang.org/browse/SI-7605) Procedure syntax (only under -Xfuture).
* [SI-5479](https://issues.scala-lang.org/browse/SI-5479) DelayedInit. We will continue support for the important `extends App` idiom. We won't drop `DelayedInit` until there's a replacement for important use cases. ([More details and a proposed alternative.](https://issues.scala-lang.org/browse/SI-4330?jql=labels%20%3D%20delayedinit%20AND%20resolution%20%3D%20unresolved))
* [SI-6455](https://issues.scala-lang.org/browse/SI-6455) Rewrite of `.withFilter` to `.filter`: you must implement `withFilter` to be compatible with for-comprehensions.
* [SI-8035](https://issues.scala-lang.org/browse/SI-8035) Automatic insertion of `()` on missing argument lists.
* [SI-6675](https://issues.scala-lang.org/browse/SI-6675) Auto-tupling in patterns.
* [SI-7247](https://issues.scala-lang.org/browse/SI-7247) NotNull, which was never fully implemented -- slated for removal in 2.12.
* [SI-1503](https://issues.scala-lang.org/browse/SI-1503) Unsound type assumption for stable identifier and literal patterns.
* [SI-7629](https://issues.scala-lang.org/browse/SI-7629) View bounds (*under -Xfuture*).

We'd like to emphasize the following library deprecations:

* [#3103](https://github.com/scala/scala/pull/3103), [#3191](https://github.com/scala/scala/pull/3191), [#3582](https://github.com/scala/scala/pull/3582) Collection classes and methods that are (very) difficult to extend safely have been slated for being marked `final`. Proxies and wrappers that were not adequately implemented or kept up-to-date have been deprecated, along with other minor inconsistencies.
* scala-actors is now deprecated and will be removed in 2.12; please follow the steps in the [Actors Migration Guide](http://docs.scala-lang.org/overviews/core/actors-migration-guide.html) to port to Akka Actors
* [SI-7958](https://issues.scala-lang.org/browse/SI-7958) Deprecate `scala.concurrent.future` and `scala.concurrent.promise`
* [SI-3235](https://issues.scala-lang.org/browse/SI-3235) Deprecate `round` on `Int` and `Long` ([#3581](https://github.com/scala/scala/pull/3581)).
* We are looking for maintainers to take over the following modules: [scala-swing](https://github.com/scala/scala-swing), [scala-continuations](https://github.com/scala/scala-continuations). 2.12 will not include them if no new maintainer is found.
  We will likely keep maintaining the other modules (scala-xml, scala-parser-combinators), but help is still greatly appreciated.

Deprecation is closely linked to source and binary compatibility. We say two versions are source compatible when they compile the same programs with the same results. Deprecation requires qualifying this statement: "assuming there are no deprecation warnings". This is what allows us to evolve the Scala platform and keep it healthy. We move slowly to guarantee smooth upgrades, but we want to keep improving as well!

### Binary Compatibility
When two versions of Scala are binary compatible, it is safe to compile your project on one Scala version and link against another Scala version at run time. Safe run-time linkage (only!) means that the JVM does not throw a (subclass of) [`LinkageError`](http://docs.oracle.com/javase/7/docs/api/java/lang/LinkageError.html) when executing your program in the mixed scenario, assuming that none arise when compiling and running on the same version of Scala. Concretely, this means you may have external dependencies on your run-time classpath that use a different version of Scala than the one you're compiling with, as long as they're binary compatibile. In other words, separate compilation on different binary compatible versions does not introduce problems compared to compiling and running everything on the same version of Scala.

We check binary compatibility automatically with [MiMa](https://github.com/typesafehub/migration-manager). We strive to maintain a similar invariant for the `behavior` (as opposed to just linkage) of the standard library, but this is not checked mechanically (Scala is not a proof assistant so this is out of reach for its type system).

#### Forwards and Back
We distinguish forwards and backwards compatibility (think of these as properties of a sequence of versions, not of an individual version). Maintaining backwards compatibility means code compiled on an older version will link with code compiled with newer ones. Forwards compatibility allows you to compile on new versions and run on older ones.

Thus, backwards compatibility precludes the removal of (non-private) methods, as older versions could call them, not knowing they would be removed, whereas forwards compatibility disallows adding new (non-private) methods, because newer programs may come to depend on them, which would prevent them from running on older versions (private methods are exempted here as well, as their definition and call sites must be in the same compilation unit).

These are strict constraints, but they have worked well for us in the Scala 2.10.x series. They didn't stop us from fixing [372 issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20"SI"%20AND%20resolution%3D"fixed"%20and%20fixVersion%20>%20"Scala%202.10.0"%20and%20fixVersion%20<%3D%20"Scala%202.10.4") in the 2.10.x series post 2.10.0. The advantages are clear, so we will maintain this policy in the 2.11.x series, and are looking (but not yet commiting!) to extend it to include major versions in the future.

#### Meta
Note that so far we've only talked about the jars generated by scalac for the standard library and reflection.
Our policies do not extend to the meta-issue: ensuring binary compatibility for bytecode generated from identical sources, by different version of scalac? (The same problem exists for compiling on different JDKs.) While we strive to achieve this, it's not something we can test in general. Notable examples where we know meta-binary compatibility is hard to achieve: specialisation and the optimizer.

In short, if binary compatibility of your library is important to you, use [MiMa](https://github.com/typesafehub/migration-manager) to verify compatibility before releasing.
Compiling identical sources with different versions of the scala compiler (or on different JVM versions!) could result in binary incompatible bytecode. This is rare, and we try to avoid it, but we can't guarantee it will never happen.

#### Concretely
Just like the 2.10.x series, we guarantee forwards and backwards compatibility of the `"org.scala-lang" % "scala-library" % "2.11.x"` and `"org.scala-lang" % "scala-reflect" % "2.11.x"` artifacts, except for anything under the `scala.reflect.internal` package, as scala-reflect is still experimental. We also strongly discourage relying on the stability of `scala.concurrent.impl` and `scala.reflect.runtime`, though we will only break compatibility for severe bugs here.

Note that we will only enforce *backwards* binary compatibility for the new modules (artifacts under the groupId `org.scala-lang.modules`). As they are opt-in, it's less of a burden to require having the latest version on the classpath. (Without forward compatibility, the latest version of the artifact must be on the run-time classpath to avoid linkage errors.)

Finally, Scala 2.11 introduces `scala-library-all` to aggregate the modules that constitute a Scala release. Note that this means it does not provide forward binary compatibility, whereas the core `scala-library` artifact does. We consider the versions of the modules that `"scala-library-all" % "2.11.x"` depends on to be the canonical ones, that are part of the official Scala distribution. (The distribution itself is defined by the new `scala-dist` maven artifact.)

### License clarification
Scala is now distributed under the standard 3-clause BSD license. Originally, the same 3-clause BSD license was adopted, but slightly reworded over the years, and the "Scala License" was born. We're now back to the standard formulation to avoid confusion.

