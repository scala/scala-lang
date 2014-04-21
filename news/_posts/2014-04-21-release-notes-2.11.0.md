---
layout: news
post-type: announcement
title: "Scala 2.11.0 is now available!"
---


We are very pleased to announce the final release of Scala 2.11.0!

* Get started with the [Hello Scala 2.11 template](https://typesafe.com/activator/template/hello-scala-2_11) in [Typesafe Activator](https://typesafe.com/platform/getstarted)
* Download a distribution from [scala-lang.org](http://scala-lang.org/download/2.11.0.html)
* Obtain it via [Maven Central](http://search.maven.org/?search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.11.0%22#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.11.0%22)

There have been no code changes since RC4, just improvements to documentation and version bump to the most recent stable version of Akka actors. Here's the [difference between the release and RC4](https://github.com/scala/scala/compare/v2.11.0-RC4...v2.11.0).

Code that compiled on 2.10.x without deprecation warnings should compile on 2.11.x (we do not guarantee this for experimental APIs, such as reflection). If not, [please file a regression](https://issues.scala-lang.org/secure/CreateIssueDetails!init.jspa?pid=10005&issuetype=1&versions=11311&labels=regression). We are working with the community to ensure availability of the core projects of the Scala 2.11.x eco-system, please see below for a list. This release is *not* binary compatible with the 2.10.x series, to allow us to keep improving the Scala standard library.

<!--break-->

The Scala 2.11.x series targets Java 6, with (evolving) experimental support for Java 8. In 2.11.0, Java 8 support is mostly limited to reading Java 8 bytecode and parsing Java 8 source. Stay tuned for more complete (experimental) Java 8 support.

### New features in the 2.11 series
This release contains all of the bug fixes and improvements made in the 2.10 series, as well as:

* Collections
  * Immutable `HashMap`s and `HashSet`s perform faster filters, unions, and the like, with improved structural sharing (lower memory usage or churn).
  * Mutable `LongMap` and `AnyRefMap` have been added to provide improved performance when keys are `Long` or `AnyRef` (performance enhancement of up to 4x or 2x respectively).
  * `BigDecimal` is more explicit about rounding and numeric representations, and better handles very large values without exhausting memory (by avoiding unnecessary conversions to `BigInt`).
  * `List` has improved performance on `map`, `flatMap`, and `collect`.
  * See also Deprecation above: we have slated many classes and methods to become final, to clarify which classes are not meant to be subclassed and to facilitate future maintenance and performance improvements.
* Modularization
  * The core Scala standard library jar has shed 20% of its bytecode. The modules for xml, parsing, swing as well as the (unsupported) continuations plugin and library are available individually or via [scala-library-all](http://search.maven.org/#artifactdetails%7Corg.scala-lang%7Cscala-library-all%7C2.11.0%7Cpom). Note that this artifact has weaker binary compatibility guarantees than `scala-library` -- as explained above.
  * The compiler has been modularized internally, to separate the presentation compiler, scaladoc and the REPL. We hope this will make it easier to contribute. In this release, all of these modules are still packaged in scala-compiler.jar. We plan to ship them in separate JARs in 2.12.x.
* Reflection, macros and quasiquotes
  * Please see [this detailed changelog](http://docs.scala-lang.org/overviews/macros/changelog211.html) that lists all significant changes and provides advice on forward and backward compatibility.
  * See also this [summary](http://scalamacros.org/news/index.html) of the experimental side of the 2.11 development cycle.
  * [#3321](https://github.com/scala/scala/pull/3321) introduced [Sprinter](http://vladimirnik.github.io/sprinter/), a new AST pretty-printing library! Very useful for tools that deal with source code.
* Back-end
  * The [GenBCode back-end](https://github.com/scala/scala/pull/2620) (experimental in 2.11). See [@magarciaepfl's extensive documentation](http://magarciaepfl.github.io/scala/).
  * A new experimental way of compiling closures, implemented by [@JamesIry](https://github.com/JamesIry). With `-Ydelambdafy:method` anonymous functions are compiled faster, with a smaller bytecode footprint. This works by keeping the function body as a private (static, if no `this` reference is needed) method of the enclosing class, and at the last moment during compilation emitting a small anonymous class that `extends FunctionN` and delegates to it. This sets the scene for a smooth migration to Java 8-style lambdas (not yet implemented).
  * Branch elimination through constant analysis [#2214](https://github.com/scala/scala/pull/2214)
* Compiler Performance
  * Incremental compilation has been improved significantly. To try it out, upgrade to sbt 0.13.2 and add `incOptions := incOptions.value.withNameHashing(true)` to your build! Other build tools are also supported. More info at [this sbt issue](https://github.com/sbt/sbt/issues/1010) -- that's where most of the work happened. More features are planned, e.g. [class-based tracking](https://github.com/sbt/sbt/issues/1104).
  * We've been optimizing the batch compiler's performance as well, and will continue to work on this during the 2.11.x cycle.
  * Improve performance of reflection [SI-6638](https://issues.scala-lang.org/browse/SI-6638)
* IDE
  * [Numerous bug fixes and improvements!](https://issues.scala-lang.org/browse/SI-8085?jql=component%20%3D%20%22Presentation%20Compiler%22%20AND%20project%20%3D%20SI%20AND%20resolution%20%3D%20fixed%20and%20fixVersion%20%3E%3D%20%22Scala%202.11.0-M1%22%20and%20fixVersion%20%3C%3D%20%20%22Scala%202.11.0%22%20ORDER%20BY%20updated%20DESC)
* REPL
  * The bytecode decompiler command, :javap, now works with Java 7 [SI-4936](https://issues.scala-lang.org/browse/SI-4936) and has sprouted new options [SI-6894](https://issues.scala-lang.org/browse/SI-6894) (Thanks, [@som-snytt](https://github.com/som-snytt)!)
  * Added command :kind to help to tell ground types from type constructors. [#2340](https://github.com/scala/scala/pull/2340) (Thanks, [George Leontiev](https://github.com/folone) and [Eugene Yokota](https://github.com/eed3si9n)!)
  * The interpreter can now be embedded as a JSR-223 Scripting Engine [SI-874](https://issues.scala-lang.org/browse/SI-874). (Thanks, [Raphael Jolly](https://github.com/rjolly)!)
* Warnings
  * Warn about unused private / local terms and types, and unused imports, under `-Xlint`. This will even tell you when a local `var` could be a `val`.
* Slimming down the compiler
  * The experimental .NET backend has been removed from the compiler.
  * Scala 2.10 shipped with new implementations of the Pattern Matcher and the Bytecode Emitter. We have removed the old implementations.
  * Search and destroy mission for ~5000 chunks of dead code. [#1648](https://github.com/scala/scala/pull/1648/files)

The Scala team and contributors [fixed 613 bugs](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20and%20fixVersion%20>%3D%20"Scala%202.11.0-M1"%20and%20fixVersion%20<%3D%20"Scala%202.11.0"%20and%20resolution%20%3D%20fixed) that are exclusive to Scala 2.11.0! We also backported as many as possible. With the release of 2.11, 2.10 backports will be dialed back.

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, participating in mailing lists and other public fora, and -- of course -- submitting and reviewing pull requests! You are all awesome.

Concretely, according to `git log --no-merges --oneline master --not 2.10.x --format='%aN'  | sort | uniq -c | sort -rn`, 111 people contributed code, tests, and/or documentation to Scala 2.11.x: Paul Phillips,  Jason Zaugg,  Eugene Burmako,  Adriaan Moors,  A. P. Marki,  Simon Ochsenreither,  Den Shabalin,  Miguel Garcia,  James Iry,  Iain McGinniss,  Rex Kerr,  Grzegorz Kossakowski,  Vladimir Nikolaev,  Eugene Vigdorchik,  François Garillot,  Mirco Dotta,  Rüdiger Klaehn,  Raphael Jolly,  Simon Schaefer,  Kenji Yoshida,  Paolo Giarrusso,  Luc Bourlier,  Antoine Gourlay,  Hubert Plociniczak,  Aleksandar Prokopec,  Lex Spoon,  Andrew Phillips,  Vlad Ureche,  Sébastien Doeraene,  Josh Suereth,  Jean-Remi Desjardins,  Vojin Jovanovic,  Viktor Klang,  Valerian,  Prashant Sharma,  Pavel Pavlov,  Michael Thorpe,  Jan Niehusmann,  Heejong Lee,  George Leontiev,  Daniel C. Sobral,  Christoffer Sawicki,  yllan,  rjfwhite,  Volkan Yazıcı,  Ruslan Shevchenko,  Robin Green,  Roberto Tyley,  Olivier Blanvillain,  Mark Harrah,  Lukas Rytz,  James Ward,  Iulian Dragos,  Ilya Maykov,  Eugene Yokota,  Erik Osheim,  Dan Hopkins,  Chris Hodapp,  Antonio Cunei,  Andriy Polishchuk,  Alexander Clare,  杨博,  srinivasreddy,  secwall,  nermin,  martijnhoekstra,  kurnevsky,  jinfu-leng,  folone,  Yaroslav Klymko,  Xusen Yin,  Trent Ogren,  Tobias Schlatter,  Thomas Geier,  Stuart Golodetz,  Stefan Zeiger,  Scott Carey,  Samy Dindane,  Sagie Davidovich,  Runar Bjarnason,  Roland Kuhn,  Robert Nix,  Robert Ladstätter,  Rike-Benjamin Schuppner,  Rajiv,  Philipp Haller,  Nada Amin,  Mike Morearty,  Michael Bayne,  Luke Cycon,  Lee Mighdoll,  Konstantin Fedorov,  Julio Santos,  Julien Richard-Foy,  Juha Heljoranta,  Johannes Rudolph,  Jiawei Li,  Jentsch,  Jason Swartz,  James Roper,  Heather Miller,  Havoc Pennington,  Evgeny Kotelnikov,  Dmitry Petrashko,  Dmitry Bushev,  David Hall,  Daniel Darabos,  Dan Rosen,  Cody Allen,  Carlo Dapor,  Brian McKenna,  Andrey Kutejko,  Alden Torres.

Thank you all very much.

If you find any errors or omissions in these relates notes, [please submit a PR](https://github.com/scala/make-release-notes/blob/master/hand-written.md)!

### Reporting Bugs / Known Issues
Please [file any bugs you encounter](https://issues.scala-lang.org/secure/CreateIssueDetails!init.jspa?pid=10005&issuetype=1&versions=11311). If you're unsure whether something is a bug, please contact the [scala-user](https://groups.google.com/forum/?fromgroups#!forum/scala-user) mailing list.

Before reporting a bug, please have a look at these [known issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20fixVersion%20%21%3D%20%22Scala%202.11.0-RC3%22%20AND%20affectedVersion%20%3D%20%22Scala%202.11.0%22%20%20and%20resolution%20%3D%20unresolved%20ORDER%20BY%20priority%20DESC).

### Scala IDE for Eclipse
The Scala IDE with this release built in is [available from this update site](http://download.scala-ide.org/sdk/helium/e38/scala211/stable/site/) for [Eclipse 4.2/4.3 (Juno/Kepler)](http://www.eclipse.org/downloads/packages/eclipse-ide-java-developers/keplersr2). Please have a look at the [getting started guide](http://scala-ide.org/docs/user/gettingstarted.html) for more info.

### Available projects
The following Scala projects have already been released against 2.11.0! We'd love to include yours in this list as soon as it's available -- please submit a PR to update [these release notes](https://github.com/scala/make-release-notes/blob/master/hand-written.md).

    "org.scalacheck"                   %% "scalacheck"                % "1.11.3"
    "org.scalatest"                    %% "scalatest"                 % "2.1.3"
    "org.scalautils"                   %% "scalautils"                % "2.1.3"
    "com.typesafe.akka"                %% "akka-actor"                % "2.3.2"
    "com.typesafe.scala-logging"       %% "scala-logging-slf4j"       % "2.0.3"
    "org.scala-lang.modules"           %% "scala-async"               % "0.9.1"
    "org.scalikejdbc"                  %% "scalikejdbc-interpolation" % "2.0.0-beta1"
    "com.softwaremill.scalamacrodebug" %% "macros"                    % "0.4"
    "com.softwaremill.macwire"         %% "macros"                    % "0.6"
    "com.chuusai"                      %% "shapeless"                 % "1.2.4"
    "com.chuusai"                      %% "shapeless"                 % "2.0.0"
    "org.nalloc"                       %% "optional"                  % "0.1.0"
    "org.scalaz"                       %% "scalaz-core"               % "7.0.6"
    "com.nocandysw"                    %% "platform-executing"        % "0.5.0"
    "com.qifun"                        %% "stateless-future"          % "0.1.1"
    "com.github.scopt"                 %% "scopt"                     % "3.2.0"
    "com.dongxiguo"                    %% "fastring"                  % "0.2.4"
    "com.github.seratch"               %% "ltsv4s"                    % "1.0.0"
    "com.googlecode.kiama"             %% "kiama"                     % "1.5.3"
    "org.scalamock"                    %% "scalamock-scalatest-support" % "3.0.1"
    "org.scalamock"                    %% "scalamock-specs2-support"  % "3.0.1"
    "com.github.nscala-time"           %% "nscala-time"               % "1.0.0"
    "com.github.xuwei-k"               %% "applybuilder70"            % "0.1.2"
    "com.github.xuwei-k"               %% "nobox"                     % "0.1.9"
    "org.typelevel"                    %% "scodec-bits"               % "1.0.0"
    "org.typelevel"                    %% "scodec-core"               % "1.0.0"
    "com.sksamuel.scrimage"            %% "scrimage"                  % "1.3.20"
    "net.databinder"                   %% "dispatch-http"             % "0.8.10"
    "net.databinder"                   %% "unfiltered"                % "0.7.1"
    "io.argonaut"                      %% "argonaut"                  % "6.0.4"

The following projects were released against 2.11.0-RC4, with an 2.11 build hopefully following soon:

    "org.scalafx"            %% "scalafx"            % "8.0.0-R4"
    "org.scalamacros"        %% "paradise"           % "2.0.0-M7"
    "org.specs2"             %% "specs2"             % "2.3.10"
    "com.propensive"         %% "rapture-core"       % "0.9.0"
    "com.propensive"         %% "rapture-json"       % "0.9.1"
    "com.propensive"         %% "rapture-io"         % "0.9.1"
    "org.scalafx"            %% "scalafx"            % "1.0.0-R8"
    "com.clarifi"            %% "f0"                 % "1.1.1"
    "org.parboiled"          %% "parboiled-scala"    % "1.1.6"
    "org.scala-stm"          %% "scala-stm"          % "0.7"
    "org.monifu"             %% "monifu"             % "0.4"

### Cross-building with sbt 0.13
When cross-building between Scala versions, you often need to vary the versions of your dependencies. In particular, the new scala modules (such as scala-xml) are no longer included in scala-library, so you'll have to add an explicit dependency on it to use Scala's xml support.

Here's how we recommend handling this in sbt 0.13. For the full build and Maven build, see [example](https://github.com/scala/scala-module-dependency-sample).

    scalaVersion        := "2.11.0"

    crossScalaVersions  := Seq("2.11.0", "2.10.3")

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
For most cases, code that compiled under 2.10.x without deprecation warnings should not be affected. We've verified this by [compiling](https://jenkins-dbuild.typesafe.com:8499/job/Community-2.11.x) a [sizeable number of open source projects](https://github.com/typesafehub/community-builds/blob/master/common-2.11.x.conf#L43). 

Changes to the reflection API may cause breakages, but these breakages can be easily fixed in a manner that is source-compatible with Scala 2.10.x. Follow our reflection/macro changelog for [detailed instructions](http://docs.scala-lang.org/overviews/macros/changelog211.html#how_to_make_your_210x_macros_work_in_2110).

We've decided to fix the following more obscure deviations from specified behavior without deprecating them first.

* [SI-4577](https://issues.scala-lang.org/browse/SI-4577) Compile `x match { case _ : Foo.type => }` to `Foo eq x`, as specified. It used to be `Foo == x` (without warning). If that's what you meant, write `case Foo =>`.
* [SI-7475](https://issues.scala-lang.org/browse/SI-7475) Improvements to access checks, aligned with the spec (see also the linked issues). Most importantly, private members are no longer inherited. Thus, this does not type check: `class Foo[T] { private val bar: T = ???; new Foo[String] { bar: String } }`, as the `bar` in `bar: String` refers to the `bar` with type `T`. The `Foo[String]`'s `bar` is not inherited, and thus not in scope, in the refinement. (Example from [SI-8371](https://issues.scala-lang.org/browse/SI-8371), see also [SI-8426](https://issues.scala-lang.org/browse/SI-8426).)

The following changes were made after a deprecation cycle (Thank you, [@soc](https://github.com/soc), for leading the deprecation effort!)

* [SI-6809](https://issues.scala-lang.org/browse/SI-6809) Case classes without a parameter list are no longer allowed.
* [SI-7618](https://issues.scala-lang.org/browse/SI-7618) Octal number literals no longer supported.

Finally, some notable improvements and bug fixes:

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

Finally, Scala 2.11.0 introduces `scala-library-all` to aggregate the modules that constitute a Scala release. Note that this means it does not provide forward binary compatibility, whereas the core `scala-library` artifact does. We consider the versions of the modules that `"scala-library-all" % "2.11.x"` depends on to be the canonical ones, that are part of the official Scala distribution. (The distribution itself is defined by the new `scala-dist` maven artifact.)

### License clarification
Scala is now distributed under the standard 3-clause BSD license. Originally, the same 3-clause BSD license was adopted, but slightly reworded over the years, and the "Scala License" was born. We're now back to the standard formulation to avoid confusion.


#### A big thank you to all the contributors!

\# | Author
---: | ---
592 | <notextile>Jason Zaugg</notextile>
548 | <notextile>Paul Phillips</notextile>
374 | <notextile>Eugene Burmako</notextile>
300 | <notextile>Adriaan Moors</notextile>
122 | <notextile>A. P. Marki</notextile>
121 | <notextile>Simon Ochsenreither</notextile>
112 | <notextile>Den Shabalin</notextile>
83 | <notextile>James Iry</notextile>
63 | <notextile>Miguel Garcia</notextile>
52 | <notextile>Denys Shabalin</notextile>
42 | <notextile>Grzegorz Kossakowski</notextile>
42 | <notextile>Eugene Vigdorchik</notextile>
40 | <notextile>Iain McGinniss</notextile>
32 | <notextile>Rex Kerr</notextile>
24 | <notextile>Fran&ccedil;ois Garillot</notextile>
21 | <notextile>Vladimir Nikolaev</notextile>
14 | <notextile>Mirco Dotta</notextile>
14 | <notextile>Hubert Plociniczak</notextile>
13 | <notextile>Kato Kazuyoshi</notextile>
13 | <notextile>Lukas Rytz</notextile>
12 | <notextile>Paolo Giarrusso</notextile>
11 | <notextile>Viktor Klang</notextile>
11 | <notextile>Jean-Remi Desjardins</notextile>
10 | <notextile>Vlad Ureche</notextile>
10 | <notextile>R&uuml;diger Klaehn</notextile>
9 | <notextile>Simon Schaefer</notextile>
9 | <notextile>Raphael Jolly</notextile>
9 | <notextile>Antoine Gourlay</notextile>
9 | <notextile>Aleksandar Prokopec</notextile>
8 | <notextile>Kenji Yoshida</notextile>
7 | <notextile>Heather Miller</notextile>
7 | <notextile>Josh Suereth</notextile>
7 | <notextile>Luc Bourlier</notextile>
6 | <notextile>Iulian Dragos</notextile>
5 | <notextile>Lex Spoon</notextile>
5 | <notextile>Nada Amin</notextile>
5 | <notextile>Andrew Phillips</notextile>
4 | <notextile>S&eacute;bastien Doeraene</notextile>
4 | <notextile>Andriy Polishchuk</notextile>
4 | <notextile>Jan Niehusmann</notextile>
4 | <notextile>Philipp Haller</notextile>
3 | <notextile>Erik Osheim</notextile>
3 | <notextile>Vojin Jovanovic</notextile>
3 | <notextile>Valerian</notextile>
3 | <notextile>Heejong Lee</notextile>
3 | <notextile>George Leontiev</notextile>
3 | <notextile>Christoffer Sawicki</notextile>
3 | <notextile>Pavel Pavlov</notextile>
3 | <notextile>Prashant Sharma</notextile>
3 | <notextile>Vinicius Miana</notextile>
3 | <notextile>Daniel C. Sobral</notextile>
3 | <notextile>Michael Thorpe</notextile>
2 | <notextile>David Hall</notextile>
2 | <notextile>Mark Harrah</notextile>
2 | <notextile>Szabolcs Berecz</notextile>
2 | <notextile>Olivier Blanvillain</notextile>
2 | <notextile>Chris Hodapp</notextile>
2 | <notextile>Volkan Yazıcı</notextile>
2 | <notextile>yllan</notextile>
2 | <notextile>James Ward</notextile>
2 | <notextile>Uladzimir Abramchuk</notextile>
2 | <notextile>James Roper</notextile>
2 | <notextile>Ruslan Shevchenko</notextile>
2 | <notextile>Dmitry Bushev</notextile>
2 | <notextile>Robin Green</notextile>
2 | <notextile>Eugene Yokota</notextile>
2 | <notextile>Ingo Maier</notextile>
2 | <notextile>Alexander Clare</notextile>
2 | <notextile>martende</notextile>
2 | <notextile>rjfwhite</notextile>
2 | <notextile>Roland Kuhn</notextile>
2 | <notextile>Brian McKenna</notextile>
2 | <notextile>Roberto Tyley</notextile>
2 | <notextile>Antonio Cunei</notextile>
2 | <notextile>Evgeny Kotelnikov</notextile>
2 | <notextile>Dan Hopkins</notextile>
2 | <notextile>Dan Rosen</notextile>
2 | <notextile>Ilya Maykov</notextile>
1 | <notextile>Christopher Vogt</notextile>
1 | <notextile>Konstantin Fedorov</notextile>
1 | <notextile>ybr</notextile>
1 | <notextile>secwall</notextile>
1 | <notextile>Mike Morearty</notextile>
1 | <notextile>Lee Mighdoll</notextile>
1 | <notextile>Julio Santos</notextile>
1 | <notextile>Stefan Zeiger</notextile>
1 | <notextile>Robert Nix</notextile>
1 | <notextile>Havoc Pennington</notextile>
1 | <notextile>Scott Carey</notextile>
1 | <notextile>jinfu-leng</notextile>
1 | <notextile>Declan Conlon</notextile>
1 | <notextile>Julien Richard-Foy</notextile>
1 | <notextile>Michael Bayne</notextile>
1 | <notextile>Luke Cycon</notextile>
1 | <notextile>Seth Tisue</notextile>
1 | <notextile>Eugene Platonov</notextile>
1 | <notextile>Samy Dindane</notextile>
1 | <notextile>nermin</notextile>
1 | <notextile>Andrey Kutejko</notextile>
1 | <notextile>Daniel Darabos</notextile>
1 | <notextile>Rajiv</notextile>
1 | <notextile>Jentsch</notextile>
1 | <notextile>Thomas Geier</notextile>
1 | <notextile>srinivasreddy</notextile>
1 | <notextile>Runar Bjarnason</notextile>
1 | <notextile>Alden Torres</notextile>
1 | <notextile>Bjorn Regnell</notextile>
1 | <notextile>Jason Swartz</notextile>
1 | <notextile>Carlo Dapor</notextile>
1 | <notextile>Sagie Davidovich</notextile>
1 | <notextile>Martin McNulty</notextile>
1 | <notextile>Jiawei Li</notextile>
1 | <notextile>Johannes Rudolph</notextile>
1 | <notextile>Gyuhang Shim</notextile>
1 | <notextile>Juha Heljoranta</notextile>
1 | <notextile>Igor Moreno</notextile>
1 | <notextile>Robert Ladst&auml;tter</notextile>
1 | <notextile>杨博</notextile>
1 | <notextile>kurnevsky</notextile>
1 | <notextile>Xusen Yin</notextile>
1 | <notextile>Yaroslav Klymko</notextile>
1 | <notextile>Cody Allen</notextile>
1 | <notextile>Tobias Schlatter</notextile>
1 | <notextile>Trent Ogren</notextile>
1 | <notextile>Mads Hartmann Jensen</notextile>
1 | <notextile>Stuart Golodetz</notextile>
1 | <notextile>Your Name</notextile>
1 | <notextile>folone</notextile>
1 | <notextile>martijnhoekstra</notextile>
1 | <notextile>Dmitry Petrashko</notextile>
1 | <notextile>Rich Dougherty</notextile>
1 | <notextile>Cody Mello</notextile>
1 | <notextile>Rike-Benjamin Schuppner</notextile>



#### Commits and the issues they fixed since v2.10.0

Issue(s) | Commit | Message
--- | --- | ---
[SI-8472](https://issues.scala-lang.org/browse/SI-8472) | [2e70518](https://github.com/scala/scala/commit/2e70518) | <notextile>Bump Akka version to 2.3.2</notextile>
[SI-8466](https://issues.scala-lang.org/browse/SI-8466) | [9fbac09](https://github.com/scala/scala/commit/9fbac09) | <notextile>SI-8466 fix quasiquote crash on recursively iterable unlifting</notextile>
[SI-7291](https://issues.scala-lang.org/browse/SI-7291), [SI-8460](https://issues.scala-lang.org/browse/SI-8460) | [1c330e6](https://github.com/scala/scala/commit/1c330e6) | <notextile>SI-8460 Fix regression in divergent implicit recovery</notextile>
[SI-8460](https://issues.scala-lang.org/browse/SI-8460) | [5e795fc](https://github.com/scala/scala/commit/5e795fc) | <notextile>Refactor handling of failures in implicit search</notextile>
[SI-6054](https://issues.scala-lang.org/browse/SI-6054) | [91fb5c0](https://github.com/scala/scala/commit/91fb5c0) | <notextile>SI-6054 Modern eta-expansion examples that almost run</notextile>
[SI-5610](https://issues.scala-lang.org/browse/SI-5610), [SI-6069](https://issues.scala-lang.org/browse/SI-6069) | [b3adae6](https://github.com/scala/scala/commit/b3adae6) | <notextile>SI-6069 Preserve by-name during eta-expansion</notextile>
[SI-6054](https://issues.scala-lang.org/browse/SI-6054) | [3fb5acc](https://github.com/scala/scala/commit/3fb5acc) | <notextile>SI-6054 don't use the defunct List.map2 in example</notextile>
[SI-5136](https://issues.scala-lang.org/browse/SI-5136) | [71e45e0](https://github.com/scala/scala/commit/71e45e0) | <notextile>SI-5136 correct return type for unapplySeq</notextile>
[SI-6195](https://issues.scala-lang.org/browse/SI-6195) | [aa6e4b3](https://github.com/scala/scala/commit/aa6e4b3) | <notextile>SI-6195 stable members can only be overridden by stable members</notextile>
[SI-5605](https://issues.scala-lang.org/browse/SI-5605) | [1921528](https://github.com/scala/scala/commit/1921528) | <notextile>SI-5605 case class equals only considers first param section</notextile>
[SI-6054](https://issues.scala-lang.org/browse/SI-6054) | [51f3ac1](https://github.com/scala/scala/commit/51f3ac1) | <notextile>SI-6054 correct eta-expansion in method value using placeholder syntax</notextile>
[SI-5155](https://issues.scala-lang.org/browse/SI-5155) | [3c0d964](https://github.com/scala/scala/commit/3c0d964) | <notextile>SI-5155 xml patterns do not support cdata, entity refs or comments</notextile>
[SI-5089](https://issues.scala-lang.org/browse/SI-5089) | [84bba26](https://github.com/scala/scala/commit/84bba26) | <notextile>SI-5089 update definition implicit scope in terms of parts of a type</notextile>
[SI-7313](https://issues.scala-lang.org/browse/SI-7313) | [227e11d](https://github.com/scala/scala/commit/227e11d) | <notextile>SI-7313 method types of implicit and non-implicit parameter sections are never e</notextile>
[SI-7672](https://issues.scala-lang.org/browse/SI-7672) | [7be2a6c](https://github.com/scala/scala/commit/7be2a6c) | <notextile>SI-7672 explicit top-level import of Predef precludes implicit one</notextile>
[SI-5370](https://issues.scala-lang.org/browse/SI-5370) | [aa64187](https://github.com/scala/scala/commit/aa64187) | <notextile>SI-5370 PartialFunction is a Function with queryable domain</notextile>
[SI-4980](https://issues.scala-lang.org/browse/SI-4980) | [4615ec5](https://github.com/scala/scala/commit/4615ec5) | <notextile>SI-4980 isInstanceOf does not do outer checks</notextile>
[SI-1972](https://issues.scala-lang.org/browse/SI-1972) | [f0b37c2](https://github.com/scala/scala/commit/f0b37c2) | <notextile>SI-1972 clarify getter and setter must be declared together</notextile>
[SI-5086](https://issues.scala-lang.org/browse/SI-5086) | [5135bae](https://github.com/scala/scala/commit/5135bae) | <notextile>SI-5086 clean up EBNF</notextile>
[SI-5065](https://issues.scala-lang.org/browse/SI-5065) | [32e0943](https://github.com/scala/scala/commit/32e0943) | <notextile>SI-5065 val/var is optional for a constructor parameter</notextile>
[SI-5209](https://issues.scala-lang.org/browse/SI-5209) | [64b7338](https://github.com/scala/scala/commit/64b7338) | <notextile>SI-5209 correct precedence of infix operators starting with ! =</notextile>
[SI-4249](https://issues.scala-lang.org/browse/SI-4249) | [e197cf8](https://github.com/scala/scala/commit/e197cf8) | <notextile>SI-4249 try/catch accepts expression</notextile>
[SI-7937](https://issues.scala-lang.org/browse/SI-7937) | [d614228](https://github.com/scala/scala/commit/d614228) | <notextile>SI-7937 In for, semi before guard never required</notextile>
[SI-4583](https://issues.scala-lang.org/browse/SI-4583) | [19ab789](https://github.com/scala/scala/commit/19ab789) | <notextile>SI-4583 UnicodeEscape does not allow multiple backslashes</notextile>
[SI-8388](https://issues.scala-lang.org/browse/SI-8388) | [0bac64d](https://github.com/scala/scala/commit/0bac64d) | <notextile>SI-8388 consistently match type trees by originals</notextile>
[SI-8387](https://issues.scala-lang.org/browse/SI-8387) | [f10d754](https://github.com/scala/scala/commit/f10d754) | <notextile>SI-8387 don't match new as a function application</notextile>
[SI-8350](https://issues.scala-lang.org/browse/SI-8350) | [2fea950](https://github.com/scala/scala/commit/2fea950) | <notextile>SI-8350 treat single parens equivalently to no-parens in new</notextile>
[SI-8451](https://issues.scala-lang.org/browse/SI-8451) | [a0c3bbd](https://github.com/scala/scala/commit/a0c3bbd) | <notextile>SI-8451 quasiquotes now handle quirks of secondary constructors</notextile>
[SI-8437](https://issues.scala-lang.org/browse/SI-8437) | [9326264](https://github.com/scala/scala/commit/9326264) | <notextile>SI-8437 macro runtime now also picks inherited macro implementations</notextile>
[SI-8411](https://issues.scala-lang.org/browse/SI-8411) | [5e23a6a](https://github.com/scala/scala/commit/5e23a6a) | <notextile>SI-8411 match desugared partial functions</notextile>
[SI-8200](https://issues.scala-lang.org/browse/SI-8200) | [fa91b17](https://github.com/scala/scala/commit/fa91b17) | <notextile>SI-8200 provide an identity liftable for trees</notextile>
[SI-7902](https://issues.scala-lang.org/browse/SI-7902) | [5f4011e](https://github.com/scala/scala/commit/5f4011e) | <notextile>[backport] SI-7902 Fix spurious kind error due to an unitialized symbol</notextile>
[SI-8205](https://issues.scala-lang.org/browse/SI-8205) | [8ee165c](https://github.com/scala/scala/commit/8ee165c) | <notextile>SI-8205 [nomaster] backport test pos.lineContent</notextile>
[SI-8126](https://issues.scala-lang.org/browse/SI-8126), [SI-6566](https://issues.scala-lang.org/browse/SI-6566) | [806b6e4](https://github.com/scala/scala/commit/806b6e4) | <notextile>Backports library changes related to SI-6566 from a419799</notextile>
[SI-8146](https://issues.scala-lang.org/browse/SI-8146), [SI-8146](https://issues.scala-lang.org/browse/SI-8146), [SI-8146](https://issues.scala-lang.org/browse/SI-8146), [SI-8146](https://issues.scala-lang.org/browse/SI-8146) | [ff13742](https://github.com/scala/scala/commit/ff13742) | <notextile>[nomaster] SI-8146 Fix non-deterministic &lt;:&lt; for deeply nested types</notextile>
[SI-8420](https://issues.scala-lang.org/browse/SI-8420) | [b6a54a8](https://github.com/scala/scala/commit/b6a54a8) | <notextile>SI-8420 don't crash on unquoting of non-liftable native type</notextile>
[SI-8428](https://issues.scala-lang.org/browse/SI-8428) | [aa1e1d0](https://github.com/scala/scala/commit/aa1e1d0) | <notextile>SI-8428 Refactor ConcatIterator</notextile>
[SI-8428](https://issues.scala-lang.org/browse/SI-8428) | [1fa46a5](https://github.com/scala/scala/commit/1fa46a5) | <notextile>SI-8428 Fix regression in iterator concatenation</notextile>
[SI-8341](https://issues.scala-lang.org/browse/SI-8341) | [e66f5f7](https://github.com/scala/scala/commit/e66f5f7) | <notextile>SI-8341 minor fixup for comments in test</notextile>
[SI-7944](https://issues.scala-lang.org/browse/SI-7944), [SI-8341](https://issues.scala-lang.org/browse/SI-8341) | [9f42c09](https://github.com/scala/scala/commit/9f42c09) | <notextile>SI-8341 Refine handoff of undet. params from implicit search</notextile>
[SI-8425](https://issues.scala-lang.org/browse/SI-8425) | [d9687d5](https://github.com/scala/scala/commit/d9687d5) | <notextile>SI-8425 don't create double-dollar names in c.freshName</notextile>
[SI-4492](https://issues.scala-lang.org/browse/SI-4492) | [b310d8c](https://github.com/scala/scala/commit/b310d8c) | <notextile>SI-4492 More informative error when class not found on classpath</notextile>
[SI-8368](https://issues.scala-lang.org/browse/SI-8368) | [ba1dab6](https://github.com/scala/scala/commit/ba1dab6) | <notextile>SI-8368 respect user-supplied scala.usejavacp</notextile>
[SI-8386](https://issues.scala-lang.org/browse/SI-8386) | [2ae86dd](https://github.com/scala/scala/commit/2ae86dd) | <notextile>SI-8386 fixed</notextile>
[SI-6476](https://issues.scala-lang.org/browse/SI-6476), [SI-8266](https://issues.scala-lang.org/browse/SI-8266) | [953b776](https://github.com/scala/scala/commit/953b776) | <notextile>SI-8266 Amend advice for deprecated octal 042</notextile>
[SI-8086](https://issues.scala-lang.org/browse/SI-8086) | [0fc0aad](https://github.com/scala/scala/commit/0fc0aad) | <notextile>SI-8086 follow-up that fixes the problem with `setter`</notextile>
[SI-6566](https://issues.scala-lang.org/browse/SI-6566), [SI-8265](https://issues.scala-lang.org/browse/SI-8265) | [80fc8b7](https://github.com/scala/scala/commit/80fc8b7) | <notextile>SI-8265 Restore 2.10 variance behavior under -Xsource:2.10</notextile>
[SI-8403](https://issues.scala-lang.org/browse/SI-8403) | [0226345](https://github.com/scala/scala/commit/0226345) | <notextile>SI-8403 Fix regression in name binding with imports in templates</notextile>
[SI-8407](https://issues.scala-lang.org/browse/SI-8407) | [f46ae47](https://github.com/scala/scala/commit/f46ae47) | <notextile>SI-8407 &quot;symbol not found&quot; in Scaladoc use cases: warning only</notextile>
[SI-8395](https://issues.scala-lang.org/browse/SI-8395) | [5ef842e](https://github.com/scala/scala/commit/5ef842e) | <notextile>SI-8395 Regression in pattern matching with nested binds</notextile>
[SI-8376](https://issues.scala-lang.org/browse/SI-8376) | [8800614](https://github.com/scala/scala/commit/8800614) | <notextile>SI-8376 Better type printing for Java varargs</notextile>
[SI-8376](https://issues.scala-lang.org/browse/SI-8376) | [e6895d7](https://github.com/scala/scala/commit/e6895d7) | <notextile>SI-8376 Fix overload resolution with Java varargs</notextile>
[SI-8392](https://issues.scala-lang.org/browse/SI-8392) | [e09e5a4](https://github.com/scala/scala/commit/e09e5a4) | <notextile>SI-8392 Guards QuasiquoteClass against non-availability in scala-reflect</notextile>
[SI-6666](https://issues.scala-lang.org/browse/SI-6666), [SI-8363](https://issues.scala-lang.org/browse/SI-8363) | [814ecad](https://github.com/scala/scala/commit/814ecad) | <notextile>SI-8363 Disable -Ydelambdafy:method in constructor position</notextile>
[SI-8366](https://issues.scala-lang.org/browse/SI-8366) | [6dbd770](https://github.com/scala/scala/commit/6dbd770) | <notextile>SI-8366 make partial function and match trees disjoint</notextile>
[SI-8368](https://issues.scala-lang.org/browse/SI-8368) | [59e8c6e](https://github.com/scala/scala/commit/59e8c6e) | <notextile>SI-8368 respect user-supplied -Dscala.usejavacp in Windows runner</notextile>
[SI-8385](https://issues.scala-lang.org/browse/SI-8385) | [f94959d](https://github.com/scala/scala/commit/f94959d) | <notextile>SI-8385 make sure $quasiquote$tuple gets reified properly</notextile>
[SI-8370](https://issues.scala-lang.org/browse/SI-8370) | [aa93daf](https://github.com/scala/scala/commit/aa93daf) | <notextile>SI-8370 fixes an infinite loop in repl init</notextile>
[SI-8331](https://issues.scala-lang.org/browse/SI-8331) | [67d175f](https://github.com/scala/scala/commit/67d175f) | <notextile>SI-8331 make sure type select &amp; applied type doesn't match terms</notextile>
[SI-8367](https://issues.scala-lang.org/browse/SI-8367), [SI-8192](https://issues.scala-lang.org/browse/SI-8192) | [60aa577](https://github.com/scala/scala/commit/60aa577) | <notextile>SI-8367 revert SI-8192's change to primaryConstructor when isJavaDefined</notextile>
[SI-8368](https://issues.scala-lang.org/browse/SI-8368) | [34e1a83](https://github.com/scala/scala/commit/34e1a83) | <notextile>SI-8368 respect user-supplied -Dscala.usejavacp in unix runner</notextile>
[SI-8377](https://issues.scala-lang.org/browse/SI-8377) | [76add38](https://github.com/scala/scala/commit/76add38) | <notextile>SI-8377 - Clarify the asynchronous requirement of ExecutionContext</notextile>
[SI-8375](https://issues.scala-lang.org/browse/SI-8375) | [b10f45a](https://github.com/scala/scala/commit/b10f45a) | <notextile>SI-8375 saner binary incompat errors for macros</notextile>
[SI-8364](https://issues.scala-lang.org/browse/SI-8364) | [eb4a2e3](https://github.com/scala/scala/commit/eb4a2e3) | <notextile>SI-8364 fixes cxTree lookup for imports</notextile>
[SI-8369](https://issues.scala-lang.org/browse/SI-8369) | [10154cf](https://github.com/scala/scala/commit/10154cf) | <notextile>SI-8369 resetAttrs now correctly accounts for skolems</notextile>
[SI-8372](https://issues.scala-lang.org/browse/SI-8372) | [ed74326](https://github.com/scala/scala/commit/ed74326) | <notextile>SI-8372: unspliceable type printed in error message</notextile>
[SI-8372](https://issues.scala-lang.org/browse/SI-8372), [SI-8372](https://issues.scala-lang.org/browse/SI-8372) | [9b0d0a8](https://github.com/scala/scala/commit/9b0d0a8) | <notextile>Test case for SI-8372: issue with ArrayOps.unzip</notextile>
[SI-8281](https://issues.scala-lang.org/browse/SI-8281) | [c05153d](https://github.com/scala/scala/commit/c05153d) | <notextile>SI-8281 check for unbound placeholder parameters in quasiquote parser</notextile>
[SI-8332](https://issues.scala-lang.org/browse/SI-8332) | [04c55c8](https://github.com/scala/scala/commit/04c55c8) | <notextile>SI-8332 implicit class param unquoting in quasiquotes</notextile>
[SI-8333](https://issues.scala-lang.org/browse/SI-8333) | [6ec0f2f](https://github.com/scala/scala/commit/6ec0f2f) | <notextile>SI-8333 can't use modifiers if class is in a block</notextile>
[SI-8285](https://issues.scala-lang.org/browse/SI-8285) | [51b8e6c](https://github.com/scala/scala/commit/51b8e6c) | <notextile>SI-8285 use correct kind of map for quasiquote positions</notextile>
[SI-8275](https://issues.scala-lang.org/browse/SI-8275) | [e17c055](https://github.com/scala/scala/commit/e17c055) | <notextile>SI-8275 allow to directly extract block contents of the case def</notextile>
[SI-8352](https://issues.scala-lang.org/browse/SI-8352) | [fef3c33](https://github.com/scala/scala/commit/fef3c33) | <notextile>test case that verifies SI-8352</notextile>
[SI-7624](https://issues.scala-lang.org/browse/SI-7624) | [7bb1f41](https://github.com/scala/scala/commit/7bb1f41) | <notextile>Revert &quot;SI-7624 Fix -feature warnings in scala/tools/scalap&quot;</notextile>
[SI-8315](https://issues.scala-lang.org/browse/SI-8315) | [52d60e6](https://github.com/scala/scala/commit/52d60e6) | <notextile>Selectively revert &quot;SI-8315 Better debugging facility for ICode&quot;</notextile>
[SI-4728](https://issues.scala-lang.org/browse/SI-4728) | [9d2d01f](https://github.com/scala/scala/commit/9d2d01f) | <notextile>SI-4728 test case</notextile>
[SI-4592](https://issues.scala-lang.org/browse/SI-4592), [SI-4728](https://issues.scala-lang.org/browse/SI-4728), [SI-4728](https://issues.scala-lang.org/browse/SI-4728), [SI-8197](https://issues.scala-lang.org/browse/SI-8197) | [a5cd601](https://github.com/scala/scala/commit/a5cd601) | <notextile>SI-8197 clarify overloading resolution with default args</notextile>
[SI-3235](https://issues.scala-lang.org/browse/SI-3235), [SI-3235](https://issues.scala-lang.org/browse/SI-3235) | [1994a2d](https://github.com/scala/scala/commit/1994a2d) | <notextile>SI-3235 math.round() returns wrong results for Int and Long</notextile>
[SI-8334](https://issues.scala-lang.org/browse/SI-8334), [SI-8240](https://issues.scala-lang.org/browse/SI-8240) | [c5962b1](https://github.com/scala/scala/commit/c5962b1) | <notextile>SI-8240 Consider rolling back optimizations for List</notextile>
[SI-8251](https://issues.scala-lang.org/browse/SI-8251) | [e0079c4](https://github.com/scala/scala/commit/e0079c4) | <notextile>SI-8251 deprecate `ListBuffer::readOnly`</notextile>
[SI-6455](https://issues.scala-lang.org/browse/SI-6455) | [12dc4a2](https://github.com/scala/scala/commit/12dc4a2) | <notextile>SI-6455 util.Try supports withFilter</notextile>
[SI-6455](https://issues.scala-lang.org/browse/SI-6455) | [62560b1](https://github.com/scala/scala/commit/62560b1) | <notextile>SI-6455 under -Xfuture, don't rewrite .withFilter to .filter</notextile>
[SI-8233](https://issues.scala-lang.org/browse/SI-8233), [SI-8233](https://issues.scala-lang.org/browse/SI-8233), [SI-8330](https://issues.scala-lang.org/browse/SI-8330), [SI-8330](https://issues.scala-lang.org/browse/SI-8330) | [7def1a9](https://github.com/scala/scala/commit/7def1a9) | <notextile>SI-8330: Mismatch in stack heights</notextile>
[SI-8324](https://issues.scala-lang.org/browse/SI-8324) | [679c920](https://github.com/scala/scala/commit/679c920) | <notextile>SI-8324 fix permutation in test filename</notextile>
[SI-4577](https://issues.scala-lang.org/browse/SI-4577), [SI-5024](https://issues.scala-lang.org/browse/SI-5024), [SI-1503](https://issues.scala-lang.org/browse/SI-1503) | [c001b88](https://github.com/scala/scala/commit/c001b88) | <notextile>SI-1503 don't assume unsound type for ident/literal patterns</notextile>
[SI-7507](https://issues.scala-lang.org/browse/SI-7507) | [dded01b](https://github.com/scala/scala/commit/dded01b) | <notextile>more clean up in the macro engine</notextile>
[SI-8321](https://issues.scala-lang.org/browse/SI-8321) | [4203170](https://github.com/scala/scala/commit/4203170) | <notextile>SI-8321 whitebox bundles are now recognized as such</notextile>
[SI-7962](https://issues.scala-lang.org/browse/SI-7962) | [b530ff0](https://github.com/scala/scala/commit/b530ff0) | <notextile>SI-7962 Scalac runner does not work within Emacs's terminal</notextile>
[SI-8324](https://issues.scala-lang.org/browse/SI-8324) | [5dfcf5e](https://github.com/scala/scala/commit/5dfcf5e) | <notextile>SI-8324 Fix regression in override checks for sealed classes</notextile>
[SI-8197](https://issues.scala-lang.org/browse/SI-8197) | [17a3639](https://github.com/scala/scala/commit/17a3639) | <notextile>SI-8197 Only consider immediate params for defaults, overloading</notextile>
[SI-5479](https://issues.scala-lang.org/browse/SI-5479) | [2ede59c](https://github.com/scala/scala/commit/2ede59c) | <notextile>SI-5479 link to release notes instead of jira query</notextile>
[SI-4330](https://issues.scala-lang.org/browse/SI-4330), [SI-5479](https://issues.scala-lang.org/browse/SI-5479) | [07e0e2f](https://github.com/scala/scala/commit/07e0e2f) | <notextile>SI-5479 deprecate DelayedInit outside of App</notextile>
[SI-8315](https://issues.scala-lang.org/browse/SI-8315) | [64ed64e](https://github.com/scala/scala/commit/64ed64e) | <notextile>SI-8315 Fix crash in dead code elimination</notextile>
[SI-8315](https://issues.scala-lang.org/browse/SI-8315) | [0561dd0](https://github.com/scala/scala/commit/0561dd0) | <notextile>SI-8315 Better debugging facility for ICode</notextile>
[SI-4728](https://issues.scala-lang.org/browse/SI-4728), [SI-8197](https://issues.scala-lang.org/browse/SI-8197) | [d5bb19f](https://github.com/scala/scala/commit/d5bb19f) | <notextile>SI-8197 Overload resolution should not consider default arguments</notextile>
[SI-8224](https://issues.scala-lang.org/browse/SI-8224), [SI-8224](https://issues.scala-lang.org/browse/SI-8224) | [917c494](https://github.com/scala/scala/commit/917c494) | <notextile>SI-8224 Fix regression in f-bound aware LUBs</notextile>
[SI-8180](https://issues.scala-lang.org/browse/SI-8180) | [931edcc](https://github.com/scala/scala/commit/931edcc) | <notextile>Attributed val/var processing for syntactics (SI-8180) TypedTreesPrinter added c</notextile>
[SI-7788](https://issues.scala-lang.org/browse/SI-7788) | [4223bc2](https://github.com/scala/scala/commit/4223bc2) | <notextile>SI-7788 Avoid accidental shadowing of Predef.conforms</notextile>
[SI-8229](https://issues.scala-lang.org/browse/SI-8229) | [bba0166](https://github.com/scala/scala/commit/bba0166) | <notextile>SI-8229 Source compatible name for implicit any2stringadd</notextile>
[SI-4577](https://issues.scala-lang.org/browse/SI-4577) | [971358b](https://github.com/scala/scala/commit/971358b) | <notextile>SI-4577 singleton type pattern test should use `eq`, not `==`</notextile>
[SI-6111](https://issues.scala-lang.org/browse/SI-6111), [SI-6675](https://issues.scala-lang.org/browse/SI-6675) | [810db85](https://github.com/scala/scala/commit/810db85) | <notextile>SI-6675 deprecation warning for auto-tupling in patterns</notextile>
[SI-8316](https://issues.scala-lang.org/browse/SI-8316), [SI-8318](https://issues.scala-lang.org/browse/SI-8318), [SI-8248](https://issues.scala-lang.org/browse/SI-8248) | [09fe97a](https://github.com/scala/scala/commit/09fe97a) | <notextile>SI-8316 SI-8318 SI-8248 reintroduces resetAllAttrs</notextile>
[SI-8306](https://issues.scala-lang.org/browse/SI-8306), [SI-8306](https://issues.scala-lang.org/browse/SI-8306) | [e26fd72](https://github.com/scala/scala/commit/e26fd72) | <notextile>SI-8306: handle SWITCH nodes with just default case</notextile>
[SI-8303](https://issues.scala-lang.org/browse/SI-8303), [SI-6484](https://issues.scala-lang.org/browse/SI-6484) | [afecfe9](https://github.com/scala/scala/commit/afecfe9) | <notextile>reverses SI-6484</notextile>
[SI-8300](https://issues.scala-lang.org/browse/SI-8300) | [34532d7](https://github.com/scala/scala/commit/34532d7) | <notextile>tests for SI-8300</notextile>
[SI-6785](https://issues.scala-lang.org/browse/SI-6785) | [c9ca737](https://github.com/scala/scala/commit/c9ca737) | <notextile>SI-6785 exposes Symbol.flags, setFlag and resetFlag</notextile>
[SI-8259](https://issues.scala-lang.org/browse/SI-8259), [SI-7044](https://issues.scala-lang.org/browse/SI-7044) | [1dda176](https://github.com/scala/scala/commit/1dda176) | <notextile>SI-7044 deprecates Symbol.associatedFile</notextile>
[SI-6732](https://issues.scala-lang.org/browse/SI-6732) | [da09331](https://github.com/scala/scala/commit/da09331) | <notextile>SI-6732 deprecates internal#Symbol.isPackage</notextile>
[SI-6441](https://issues.scala-lang.org/browse/SI-6441) | [3dff364](https://github.com/scala/scala/commit/3dff364) | <notextile>SI-6441 removes Symbol.isOverride</notextile>
[SI-8086](https://issues.scala-lang.org/browse/SI-8086) | [47dba05](https://github.com/scala/scala/commit/47dba05) | <notextile>SI-8086 addresses problem with calling Symbol.getter</notextile>
[SI-6931](https://issues.scala-lang.org/browse/SI-6931), [SI-6931](https://issues.scala-lang.org/browse/SI-6931) | [b5c4666](https://github.com/scala/scala/commit/b5c4666) | <notextile>SI-6931 cleans up the position API</notextile>
[SI-6814](https://issues.scala-lang.org/browse/SI-6814) | [2c05f01](https://github.com/scala/scala/commit/2c05f01) | <notextile>SI-6814 adds typechecker modes to c.typecheck</notextile>
[SI-8118](https://issues.scala-lang.org/browse/SI-8118) | [0268e03](https://github.com/scala/scala/commit/0268e03) | <notextile>SI-8118 simplifies Annotation down to a plain Tree</notextile>
[SI-8063](https://issues.scala-lang.org/browse/SI-8063) | [d236523](https://github.com/scala/scala/commit/d236523) | <notextile>SI-8063 exposes much needed conveniences for Type</notextile>
[SI-8194](https://issues.scala-lang.org/browse/SI-8194) | [ada0252](https://github.com/scala/scala/commit/ada0252) | <notextile>SI-8194 adds Universe.symbolOf[T]</notextile>
[SI-6484](https://issues.scala-lang.org/browse/SI-6484) | [b017629](https://github.com/scala/scala/commit/b017629) | <notextile>SI-6484 adds Universe.typeOf[T](x: T)</notextile>
[SI-8193](https://issues.scala-lang.org/browse/SI-8193), [SI-8192](https://issues.scala-lang.org/browse/SI-8192) | [51b16e4](https://github.com/scala/scala/commit/51b16e4) | <notextile>SI-8192 adds ClassSymbol.isPrimaryConstructor</notextile>
[SI-6379](https://issues.scala-lang.org/browse/SI-6379) | [edadc01](https://github.com/scala/scala/commit/edadc01) | <notextile>SI-6379 adds MethodSymbol.exception</notextile>
[SI-8190](https://issues.scala-lang.org/browse/SI-8190) | [3293d60](https://github.com/scala/scala/commit/3293d60) | <notextile>SI-8190 erasure identities for types in reflection API</notextile>
[SI-8187](https://issues.scala-lang.org/browse/SI-8187) | [7881137](https://github.com/scala/scala/commit/7881137) | <notextile>SI-8187 api#Symbol.name now has precise type</notextile>
[SI-6733](https://issues.scala-lang.org/browse/SI-6733) | [c34b24a](https://github.com/scala/scala/commit/c34b24a) | <notextile>disambiguates uses of &ldquo;local&rdquo; in internal symbol API</notextile>
[SI-6733](https://issues.scala-lang.org/browse/SI-6733) | [7c06c9d](https://github.com/scala/scala/commit/7c06c9d) | <notextile>SI-6733 LOCAL, isLocal, and private[this]</notextile>
[SI-7533](https://issues.scala-lang.org/browse/SI-7533) | [30174f9](https://github.com/scala/scala/commit/30174f9) | <notextile>SI-7533 Adds Symbol.isAbstract</notextile>
[SI-6267](https://issues.scala-lang.org/browse/SI-6267), [SI-6565](https://issues.scala-lang.org/browse/SI-6565) | [1af8dcb](https://github.com/scala/scala/commit/1af8dcb) | <notextile>SI-6565 Adds missing flag values to reflection API</notextile>
[SI-6566](https://issues.scala-lang.org/browse/SI-6566) | [f6c11c0](https://github.com/scala/scala/commit/f6c11c0) | <notextile>SI-6566, unsoundness with alias variance: document fix</notextile>
[SI-7932](https://issues.scala-lang.org/browse/SI-7932) | [4f4ee87](https://github.com/scala/scala/commit/4f4ee87) | <notextile>SI-7932 Exclude PolyTypes from Java generic signatures</notextile>
[SI-6815](https://issues.scala-lang.org/browse/SI-6815), [SI-8304](https://issues.scala-lang.org/browse/SI-8304) | [fd623f8](https://github.com/scala/scala/commit/fd623f8) | <notextile>SI-8304 Allow volatile-typed Idents as stable ident patterns</notextile>
[SI-8301](https://issues.scala-lang.org/browse/SI-8301) | [b31f9ab](https://github.com/scala/scala/commit/b31f9ab) | <notextile>SI-8301 fix regression with refinement subtyping, wildcard type.</notextile>
[SI-8072](https://issues.scala-lang.org/browse/SI-8072) | [9be10bc](https://github.com/scala/scala/commit/9be10bc) | <notextile>SI-8072 rationalize public implicits in scala parallel collections</notextile>
[SI-5165](https://issues.scala-lang.org/browse/SI-5165) | [3a6c9ad](https://github.com/scala/scala/commit/3a6c9ad) | <notextile>SI-5165 separate compilation test Java annotations bug</notextile>
[SI-5655](https://issues.scala-lang.org/browse/SI-5655), [SI-5134](https://issues.scala-lang.org/browse/SI-5134) | [de7abde](https://github.com/scala/scala/commit/de7abde) | <notextile>SI-5134 Test case for fixed DelayedInit / structural type bug</notextile>
[SI-5565](https://issues.scala-lang.org/browse/SI-5565) | [f5a99c2](https://github.com/scala/scala/commit/f5a99c2) | <notextile>SI-5565 Test case for fixed delayed init bug</notextile>
[SI-7707](https://issues.scala-lang.org/browse/SI-7707), [SI-7712](https://issues.scala-lang.org/browse/SI-7712), [SI-7707](https://issues.scala-lang.org/browse/SI-7707), [SI-7712](https://issues.scala-lang.org/browse/SI-7712) | [1b1461f](https://github.com/scala/scala/commit/1b1461f) | <notextile>SI-7707 SI-7712 Exclude unused warnings from -Xlint</notextile>
[SI-5920](https://issues.scala-lang.org/browse/SI-5920) | [3ca9038](https://github.com/scala/scala/commit/3ca9038) | <notextile>Revert &quot;SI-5920 enables default and named args in macros&quot;</notextile>
[SI-5920](https://issues.scala-lang.org/browse/SI-5920) | [a02e053](https://github.com/scala/scala/commit/a02e053) | <notextile>SI-5920 enables default and named args in macros</notextile>
[SI-8270](https://issues.scala-lang.org/browse/SI-8270) | [c85435d](https://github.com/scala/scala/commit/c85435d) | <notextile>SI-8270 unconfuses bundles and vanilla macros</notextile>
[SI-8202](https://issues.scala-lang.org/browse/SI-8202), [SI-8211](https://issues.scala-lang.org/browse/SI-8211) | [a8a7f4a](https://github.com/scala/scala/commit/a8a7f4a) | <notextile>SI-8202 bug compatibility with SI-8211 for quasiquotes</notextile>
[SI-3452](https://issues.scala-lang.org/browse/SI-3452) | [653c404](https://github.com/scala/scala/commit/653c404) | <notextile>SI-3452 GenBCode version of the static-forwarder signature fix</notextile>
[SI-3452](https://issues.scala-lang.org/browse/SI-3452) | [c7a5aab](https://github.com/scala/scala/commit/c7a5aab) | <notextile>SI-3452 Reduce low-hanging duplication bewteen GenASM and GenBCode</notextile>
[SI-3452](https://issues.scala-lang.org/browse/SI-3452) | [827ac1f](https://github.com/scala/scala/commit/827ac1f) | <notextile>SI-3452 Refactoring code in GenASM</notextile>
[SI-3452](https://issues.scala-lang.org/browse/SI-3452) | [640e279](https://github.com/scala/scala/commit/640e279) | <notextile>SI-3452 A better fix for static forwarder generic sigs</notextile>
[SI-7374](https://issues.scala-lang.org/browse/SI-7374) | [45cfc7b](https://github.com/scala/scala/commit/45cfc7b) | <notextile>SI-7374 Test cases for fixed Java interop problem</notextile>
[SI-3452](https://issues.scala-lang.org/browse/SI-3452) | [f8d80ea](https://github.com/scala/scala/commit/f8d80ea) | <notextile>SI-3452 Correct Java generic signatures for mixins, static forwarders</notextile>
[SI-8266](https://issues.scala-lang.org/browse/SI-8266) | [ff4cfd5](https://github.com/scala/scala/commit/ff4cfd5) | <notextile>SI-8266 Deprecate octal escapes in f-interpolator</notextile>
[SI-6908](https://issues.scala-lang.org/browse/SI-6908) | [040a4e6](https://github.com/scala/scala/commit/040a4e6) | <notextile>SI-6908 FlatHashTable and things that depend on it can't store nulls</notextile>
[SI-8264](https://issues.scala-lang.org/browse/SI-8264) | [326fa9a](https://github.com/scala/scala/commit/326fa9a) | <notextile>SI-8264 scala.collection.immutable.HashSet#- returns broken Set</notextile>
[SI-7711](https://issues.scala-lang.org/browse/SI-7711) | [1dceb39](https://github.com/scala/scala/commit/1dceb39) | <notextile>SI-7711 Test for args in script</notextile>
[SI-7711](https://issues.scala-lang.org/browse/SI-7711) | [37f822e](https://github.com/scala/scala/commit/37f822e) | <notextile>SI-7711 Do not emit extra argv in script body</notextile>
[SI-6169](https://issues.scala-lang.org/browse/SI-6169), [SI-8283](https://issues.scala-lang.org/browse/SI-8283) | [2a1b15e](https://github.com/scala/scala/commit/2a1b15e) | <notextile>SI-8283 mutation-free bound inference for existentials</notextile>
[SI-8188](https://issues.scala-lang.org/browse/SI-8188) | [a4a1319](https://github.com/scala/scala/commit/a4a1319) | <notextile>SI-8188 NPE during deserialization of TrieMap</notextile>
[SI-6632](https://issues.scala-lang.org/browse/SI-6632) | [d3a302b](https://github.com/scala/scala/commit/d3a302b) | <notextile>SI-6632 ListBuffer's updated accepts negative positions</notextile>
[SI-8177](https://issues.scala-lang.org/browse/SI-8177) | [5984461](https://github.com/scala/scala/commit/5984461) | <notextile>SI-8177 tidy up in type reification</notextile>
[SI-8177](https://issues.scala-lang.org/browse/SI-8177) | [33fc681](https://github.com/scala/scala/commit/33fc681) | <notextile>SI-8177 specializeSym must use memberInfo on high side</notextile>
[SI-8153](https://issues.scala-lang.org/browse/SI-8153) | [509bd09](https://github.com/scala/scala/commit/509bd09) | <notextile>SI-8153 Mutation is hard, let's go shopping with an empty list</notextile>
[SI-1786](https://issues.scala-lang.org/browse/SI-1786), [SI-8276](https://issues.scala-lang.org/browse/SI-8276), [SI-1786](https://issues.scala-lang.org/browse/SI-1786) | [922d090](https://github.com/scala/scala/commit/922d090) | <notextile>SI-8276 Test for cyclic error caused by (reverted) SI-1786 fix</notextile>
[SI-7228](https://issues.scala-lang.org/browse/SI-7228), [SI-8280](https://issues.scala-lang.org/browse/SI-8280) | [1067e23](https://github.com/scala/scala/commit/1067e23) | <notextile>SI-8280 regression in implicit selection.</notextile>
[SI-8134](https://issues.scala-lang.org/browse/SI-8134) | [436bbbe](https://github.com/scala/scala/commit/436bbbe) | <notextile>SI-8134 Address pull request feedback</notextile>
[SI-5954](https://issues.scala-lang.org/browse/SI-5954) | [eb1d52a](https://github.com/scala/scala/commit/eb1d52a) | <notextile>SI-5954 Add a TODO comment with an idea for future work</notextile>
[SI-5954](https://issues.scala-lang.org/browse/SI-5954) | [357905c](https://github.com/scala/scala/commit/357905c) | <notextile>SI-5954 Invalidate TypeRef cache when opening package object</notextile>
[SI-4344](https://issues.scala-lang.org/browse/SI-4344), [SI-5760](https://issues.scala-lang.org/browse/SI-5760), [SI-8134](https://issues.scala-lang.org/browse/SI-8134), [SI-5954](https://issues.scala-lang.org/browse/SI-5954) | [731ed38](https://github.com/scala/scala/commit/731ed38) | <notextile>SI-8134 SI-5954 Fix companions in package object under separate comp.</notextile>
[SI-5900](https://issues.scala-lang.org/browse/SI-5900), [SI-7886](https://issues.scala-lang.org/browse/SI-7886), [SI-7886](https://issues.scala-lang.org/browse/SI-7886), [SI-5900](https://issues.scala-lang.org/browse/SI-5900) | [c956a27](https://github.com/scala/scala/commit/c956a27) | <notextile>SI-5900 Fix pattern inference regression</notextile>
[SI-5900](https://issues.scala-lang.org/browse/SI-5900), [SI-7886](https://issues.scala-lang.org/browse/SI-7886) | [b4e1a30](https://github.com/scala/scala/commit/b4e1a30) | <notextile>SI-5900 Pending test to show that SI-7886 persists</notextile>
[SI-8244](https://issues.scala-lang.org/browse/SI-8244) | [f62e280](https://github.com/scala/scala/commit/f62e280) | <notextile>SI-8244 Fix raw type regression under separate compilation</notextile>
[SI-3873](https://issues.scala-lang.org/browse/SI-3873), [SI-7753](https://issues.scala-lang.org/browse/SI-7753) | [d5a1ea6](https://github.com/scala/scala/commit/d5a1ea6) | <notextile>SI-7753 InstantiateDependentMap narrows type of unstable args</notextile>
[SI-8177](https://issues.scala-lang.org/browse/SI-8177) | [427b826](https://github.com/scala/scala/commit/427b826) | <notextile>SI-8177 refine embeddedSymbols</notextile>
[SI-8177](https://issues.scala-lang.org/browse/SI-8177) | [7ea7a3b](https://github.com/scala/scala/commit/7ea7a3b) | <notextile>SI-8177 co-evolve more than just RefinedTypes</notextile>
[SI-8263](https://issues.scala-lang.org/browse/SI-8263) | [555db25](https://github.com/scala/scala/commit/555db25) | <notextile>SI-8263 Avoid SOE in logicallyEnclosingMember</notextile>
[SI-6736](https://issues.scala-lang.org/browse/SI-6736) | [95f21ca](https://github.com/scala/scala/commit/95f21ca) | <notextile>SI-6736 Range.contains is wrong</notextile>
[SI-7475](https://issues.scala-lang.org/browse/SI-7475), [SI-261](https://issues.scala-lang.org/browse/SI-261) | [d187a0a](https://github.com/scala/scala/commit/d187a0a) | <notextile>SI-261 private vals in traits depend on composition order</notextile>
[SI-7475](https://issues.scala-lang.org/browse/SI-7475) | [47885ff](https://github.com/scala/scala/commit/47885ff) | <notextile>SI-7475 Address review comments in FindMembers</notextile>
[SI-7475](https://issues.scala-lang.org/browse/SI-7475) | [8d96380](https://github.com/scala/scala/commit/8d96380) | <notextile>SI-7475 Private members are not inheritable</notextile>
[SI-7475](https://issues.scala-lang.org/browse/SI-7475), [SI-7475](https://issues.scala-lang.org/browse/SI-7475) | [aebe379](https://github.com/scala/scala/commit/aebe379) | <notextile>SI-7475 findMember and findMembers: estranged no more</notextile>
[SI-7475](https://issues.scala-lang.org/browse/SI-7475) | [db9fd55](https://github.com/scala/scala/commit/db9fd55) | <notextile>SI-7475 Refactor findMember computation into a class</notextile>
[SI-6169](https://issues.scala-lang.org/browse/SI-6169), [SI-1786](https://issues.scala-lang.org/browse/SI-1786) | [48f6cdd](https://github.com/scala/scala/commit/48f6cdd) | <notextile>Revert &quot;SI-1786 incorporate defined bounds in inference&quot;</notextile>
[SI-5994](https://issues.scala-lang.org/browse/SI-5994) | [b816a83](https://github.com/scala/scala/commit/b816a83) | <notextile>SI-5994 battling implicits for String.lines</notextile>
[SI-6992](https://issues.scala-lang.org/browse/SI-6992), [SI-6992](https://issues.scala-lang.org/browse/SI-6992), [SI-8048](https://issues.scala-lang.org/browse/SI-8048) | [2606bec](https://github.com/scala/scala/commit/2606bec) | <notextile>changes the order of whitebox typechecks. yes, again.</notextile>
[SI-8226](https://issues.scala-lang.org/browse/SI-8226) | [e008708](https://github.com/scala/scala/commit/e008708) | <notextile>SI-8226 Deduplicate Scala's Tokens and JavaTokens</notextile>
[SI-8167](https://issues.scala-lang.org/browse/SI-8167) | [81d1151](https://github.com/scala/scala/commit/81d1151) | <notextile>SI-8167 readLine shold flush output before reading input</notextile>
[SI-8129](https://issues.scala-lang.org/browse/SI-8129) | [127a767](https://github.com/scala/scala/commit/127a767) | <notextile>SI-8129 Crack the case of the curiously incoherent Context</notextile>
[SI-8129](https://issues.scala-lang.org/browse/SI-8129) | [4a8edc0](https://github.com/scala/scala/commit/4a8edc0) | <notextile>SI-8129 Make Object#== override Any#==</notextile>
[SI-8219](https://issues.scala-lang.org/browse/SI-8219) | [b0f81ed](https://github.com/scala/scala/commit/b0f81ed) | <notextile>SI-8219 Pending test to show suspicous overload in == in AnyRef</notextile>
[SI-8219](https://issues.scala-lang.org/browse/SI-8219) | [4b3dbd9](https://github.com/scala/scala/commit/4b3dbd9) | <notextile>SI-8219 Pending test case for unpositioned implicit error</notextile>
[SI-8258](https://issues.scala-lang.org/browse/SI-8258), [SI-7335](https://issues.scala-lang.org/browse/SI-7335) | [ea36cad](https://github.com/scala/scala/commit/ea36cad) | <notextile>SI-8258 Revert &quot;SI-7335 Remove special case for import of Predef._</notextile>
[SI-6948](https://issues.scala-lang.org/browse/SI-6948) | [51ec62a](https://github.com/scala/scala/commit/51ec62a) | <notextile>SI-6948 Make the Abstract* classes public.</notextile>
[SI-6169](https://issues.scala-lang.org/browse/SI-6169), [SI-1786](https://issues.scala-lang.org/browse/SI-1786) | [bf06e15](https://github.com/scala/scala/commit/bf06e15) | <notextile>SI-6169 TODO: consolidate with fix for SI-1786 (#2518)</notextile>
[SI-6260](https://issues.scala-lang.org/browse/SI-6260) | [d6b1e6e](https://github.com/scala/scala/commit/d6b1e6e) | <notextile>SI-6260 Adddress pull request review</notextile>
[SI-6260](https://issues.scala-lang.org/browse/SI-6260) | [9f142b1](https://github.com/scala/scala/commit/9f142b1) | <notextile>SI-6260 Avoid double-def error with lambdas over value classes</notextile>
[SI-7570](https://issues.scala-lang.org/browse/SI-7570) | [1d53b2b](https://github.com/scala/scala/commit/1d53b2b) | <notextile>SI-7570 top-level codegen for toolboxes</notextile>
[SI-7328](https://issues.scala-lang.org/browse/SI-7328) | [6c7ceb6](https://github.com/scala/scala/commit/6c7ceb6) | <notextile>SI-7328 FieldMirrors now support value classes</notextile>
[SI-6411](https://issues.scala-lang.org/browse/SI-6411) | [8b87327](https://github.com/scala/scala/commit/8b87327) | <notextile>SI-6411 reflection is now aware of posterasure</notextile>
[SI-7933](https://issues.scala-lang.org/browse/SI-7933) | [9dfac45](https://github.com/scala/scala/commit/9dfac45) | <notextile>SI-7933 REPL javax.script eval is cached result</notextile>
[SI-6815](https://issues.scala-lang.org/browse/SI-6815), [SI-8207](https://issues.scala-lang.org/browse/SI-8207) | [10ca178](https://github.com/scala/scala/commit/10ca178) | <notextile>SI-8207 Allow import qualified by self reference</notextile>
[SI-8215](https://issues.scala-lang.org/browse/SI-8215) | [cbe136c](https://github.com/scala/scala/commit/cbe136c) | <notextile>SI-8215: Correcting typo and splitting a long sentence in MatchIterator doc</notextile>
[SI-6169](https://issues.scala-lang.org/browse/SI-6169) | [38162b5](https://github.com/scala/scala/commit/38162b5) | <notextile>SI-6169 initialize before .typeParams -- just in case</notextile>
[SI-6169](https://issues.scala-lang.org/browse/SI-6169) | [715a39b](https://github.com/scala/scala/commit/715a39b) | <notextile>SI-6169 more accurate check for raw java type encoded as existential</notextile>
[SI-8197](https://issues.scala-lang.org/browse/SI-8197), [SI-1786](https://issues.scala-lang.org/browse/SI-1786), [SI-6169](https://issues.scala-lang.org/browse/SI-6169) | [4525e33](https://github.com/scala/scala/commit/4525e33) | <notextile>SI-6169 Refine java wildcard bounds using corresponding tparam</notextile>
[SI-7226](https://issues.scala-lang.org/browse/SI-7226), [SI-8237](https://issues.scala-lang.org/browse/SI-8237) | [1cf1bae](https://github.com/scala/scala/commit/1cf1bae) | <notextile>SI-8237 Avoid cyclic constraints when inferring hk type args</notextile>
[SI-6358](https://issues.scala-lang.org/browse/SI-6358), [SI-8245](https://issues.scala-lang.org/browse/SI-8245) | [46d8419](https://github.com/scala/scala/commit/46d8419) | <notextile>SI-8245 Fix regression in interplay between lazy val, return</notextile>
[SI-8154](https://issues.scala-lang.org/browse/SI-8154) | [2dfbbf5](https://github.com/scala/scala/commit/2dfbbf5) | <notextile>SI-8154 AnyRefMap iterates its way to ((null, null))</notextile>
[SI-8248](https://issues.scala-lang.org/browse/SI-8248) | [97515ef](https://github.com/scala/scala/commit/97515ef) | <notextile>SI-8248 kills resetAllAttrs</notextile>
[SI-8092](https://issues.scala-lang.org/browse/SI-8092) | [ab7a8bc](https://github.com/scala/scala/commit/ab7a8bc) | <notextile>SI-8092 Review cleanup, no qq</notextile>
[SI-8092](https://issues.scala-lang.org/browse/SI-8092) | [f8e0f98](https://github.com/scala/scala/commit/f8e0f98) | <notextile>SI-8092 Refactor f-interp</notextile>
[SI-8092](https://issues.scala-lang.org/browse/SI-8092) | [8053682](https://github.com/scala/scala/commit/8053682) | <notextile>SI-8092 More verify for f-interpolator</notextile>
[SI-8131](https://issues.scala-lang.org/browse/SI-8131) | [2bd3044](https://github.com/scala/scala/commit/2bd3044) | <notextile>SI-8131 fixes residual race condition in runtime reflection</notextile>
[SI-8173](https://issues.scala-lang.org/browse/SI-8173) | [ffc3203](https://github.com/scala/scala/commit/ffc3203) | <notextile>SI-8173 add support for patterns like init :+ last to quasiquotes</notextile>
[SI-8239](https://issues.scala-lang.org/browse/SI-8239) | [8e9e464](https://github.com/scala/scala/commit/8e9e464) | <notextile>SI-8239 don't loop forever in ContextTrees.locateContextTree</notextile>
[SI-8228](https://issues.scala-lang.org/browse/SI-8228) | [b0c4353](https://github.com/scala/scala/commit/b0c4353) | <notextile>SI-8228 Avoid infinite loop with erroneous code, overloading</notextile>
[SI-4997](https://issues.scala-lang.org/browse/SI-4997) | [24f2a3d](https://github.com/scala/scala/commit/24f2a3d) | <notextile>SI-4997 deprecate StringLike.linesIterator for StringLike.lines</notextile>
[SI-7015](https://issues.scala-lang.org/browse/SI-7015), [SI-8233](https://issues.scala-lang.org/browse/SI-8233) | [9506d52](https://github.com/scala/scala/commit/9506d52) | <notextile>SI-8233 Fix regression in backend with boxed nulls</notextile>
[SI-8170](https://issues.scala-lang.org/browse/SI-8170) | [a02fae9](https://github.com/scala/scala/commit/a02fae9) | <notextile>SI-8170 Posing outstanding questions as TODOs</notextile>
[SI-8046](https://issues.scala-lang.org/browse/SI-8046), [SI-8170](https://issues.scala-lang.org/browse/SI-8170) | [52379b6](https://github.com/scala/scala/commit/52379b6) | <notextile>SI-8170 Fix regression in TypeRef#transform w. PolyTypes</notextile>
[SI-8030](https://issues.scala-lang.org/browse/SI-8030) | [8c25607](https://github.com/scala/scala/commit/8c25607) | <notextile>SI-8030 Restore thread safety to the parser</notextile>
[SI-8215](https://issues.scala-lang.org/browse/SI-8215) | [9c0ca62](https://github.com/scala/scala/commit/9c0ca62) | <notextile>SI-8215 Documenting the possibility of IllegalStateExceptions when using MatchIt</notextile>
[SI-8215](https://issues.scala-lang.org/browse/SI-8215) | [9956245](https://github.com/scala/scala/commit/9956245) | <notextile>SI-8215 Removing ASCII art class diagram in Scaladoc for Regex</notextile>
[SI-4014](https://issues.scala-lang.org/browse/SI-4014) | [37a88af](https://github.com/scala/scala/commit/37a88af) | <notextile>SI-4014 Scaladoc omits @author</notextile>
[SI-7266](https://issues.scala-lang.org/browse/SI-7266) | [f84acc9](https://github.com/scala/scala/commit/f84acc9) | <notextile>SI-7266 Stream leaks memory</notextile>
[SI-7322](https://issues.scala-lang.org/browse/SI-7322) | [b5e13c9](https://github.com/scala/scala/commit/b5e13c9) | <notextile>SI-7322 Interpolator idents must be encoded</notextile>
[SI-7124](https://issues.scala-lang.org/browse/SI-7124) | [a9e9035](https://github.com/scala/scala/commit/a9e9035) | <notextile>SI-7124 make macro definitions prettier in scaladoc</notextile>
[SI-7700](https://issues.scala-lang.org/browse/SI-7700) | [d0afd7e](https://github.com/scala/scala/commit/d0afd7e) | <notextile>SI-7700 @unspecialized, Part Deux: Now Working.</notextile>
[SI-8143](https://issues.scala-lang.org/browse/SI-8143) | [2524fdd](https://github.com/scala/scala/commit/2524fdd) | <notextile>SI-8143 Regressions with override checks, private members</notextile>
[SI-8213](https://issues.scala-lang.org/browse/SI-8213) | [f97e2d4](https://github.com/scala/scala/commit/f97e2d4) | <notextile>SI-8213 AnyRefMap.getOrElseUpdate is faulty</notextile>
[SI-8205](https://issues.scala-lang.org/browse/SI-8205) | [f584f5b](https://github.com/scala/scala/commit/f584f5b) | <notextile>SI-8205 Don't include CR in line</notextile>
[SI-8015](https://issues.scala-lang.org/browse/SI-8015), [SI-8205](https://issues.scala-lang.org/browse/SI-8205) | [0eefa77](https://github.com/scala/scala/commit/0eefa77) | <notextile>SI-8205 Avoid long, slow march to AIIOBE in SourceFile#lineContent</notextile>
[SI-8199](https://issues.scala-lang.org/browse/SI-8199) | [d8c7850](https://github.com/scala/scala/commit/d8c7850) | <notextile>SI-8199 Account for module class suffix in -Xmax-classfile-name</notextile>
[SI-8076](https://issues.scala-lang.org/browse/SI-8076) | [8e98624](https://github.com/scala/scala/commit/8e98624) | <notextile>SI-8076 improve support for implicit argument list</notextile>
[SI-6844](https://issues.scala-lang.org/browse/SI-6844) | [39382948](https://github.com/scala/scala/commit/39382948) | <notextile>SI-6844 restrict splicing in parameter position</notextile>
[SI-7275](https://issues.scala-lang.org/browse/SI-7275) | [adf990a](https://github.com/scala/scala/commit/adf990a) | <notextile>SI-7275 allow flattening of blocks with ..$</notextile>
[SI-8182](https://issues.scala-lang.org/browse/SI-8182) | [d603cae](https://github.com/scala/scala/commit/d603cae) | <notextile>SI-8182 Avert crash due to type args in pattern</notextile>
[SI-7919](https://issues.scala-lang.org/browse/SI-7919) | [48413b4](https://github.com/scala/scala/commit/48413b4) | <notextile>SI-7919 Newline after empty string interp</notextile>
[SI-2066](https://issues.scala-lang.org/browse/SI-2066) | [f86c36f](https://github.com/scala/scala/commit/f86c36f) | <notextile>SI-2066 -Xsource:2.10: lenient treatment of variance in &lt;:&lt;, =:=</notextile>
[SI-8171](https://issues.scala-lang.org/browse/SI-8171) | [40f1ff2](https://github.com/scala/scala/commit/40f1ff2) | <notextile>SI-8171 make tq&quot;&quot; an alias for empty type tree</notextile>
[SI-7445](https://issues.scala-lang.org/browse/SI-7445) | [7f65b37](https://github.com/scala/scala/commit/7f65b37) | <notextile>SI-7445 ListMap.tail is returning wrong result</notextile>
[SI-6879](https://issues.scala-lang.org/browse/SI-6879) | [47d1fb1](https://github.com/scala/scala/commit/47d1fb1) | <notextile>SI-6879 improves Context.freshName</notextile>
[SI-8151](https://issues.scala-lang.org/browse/SI-8151) | [07ff3a9](https://github.com/scala/scala/commit/07ff3a9) | <notextile>SI-8151 Remove -Yself-in-annots and associated implementation</notextile>
[SI-8133](https://issues.scala-lang.org/browse/SI-8133) | [e57af7d](https://github.com/scala/scala/commit/e57af7d) | <notextile>SI-8133 Fix regression with package objects, overloading</notextile>
[SI-8158](https://issues.scala-lang.org/browse/SI-8158) | [35300b4](https://github.com/scala/scala/commit/35300b4) | <notextile>introduces failsafe against endless type printing</notextile>
[SI-8158](https://issues.scala-lang.org/browse/SI-8158), [SI-8158](https://issues.scala-lang.org/browse/SI-8158) | [936d60a](https://github.com/scala/scala/commit/936d60a) | <notextile>SI-8158 compiler hangs printing out fancy types</notextile>
[SI-6443](https://issues.scala-lang.org/browse/SI-6443), [SI-8143](https://issues.scala-lang.org/browse/SI-8143) | [1baf11a](https://github.com/scala/scala/commit/1baf11a) | <notextile>SI-8143 Fix bug with super-accessors / dependent types</notextile>
[SI-8152](https://issues.scala-lang.org/browse/SI-8152) | [9df2dcc](https://github.com/scala/scala/commit/9df2dcc) | <notextile>[nomaster] SI-8152 Backport variance validator performance fix</notextile>
[SI-8111](https://issues.scala-lang.org/browse/SI-8111) | [c91d373](https://github.com/scala/scala/commit/c91d373) | <notextile>SI-8111 Expand the comment with a more detailed TODO</notextile>
[SI-8111](https://issues.scala-lang.org/browse/SI-8111) | [2c770ae](https://github.com/scala/scala/commit/2c770ae) | <notextile>SI-8111 Repair symbol owners after abandoned named-/default-args</notextile>
[SI-7120](https://issues.scala-lang.org/browse/SI-7120), [SI-8114](https://issues.scala-lang.org/browse/SI-8114), [SI-7120](https://issues.scala-lang.org/browse/SI-7120) | [5876e8c](https://github.com/scala/scala/commit/5876e8c) | <notextile>[nomaster] SI-8114 Binary compat. workaround for erasure bug SI-7120</notextile>
[SI-7636](https://issues.scala-lang.org/browse/SI-7636), [SI-6563](https://issues.scala-lang.org/browse/SI-6563) | [255c51b](https://github.com/scala/scala/commit/255c51b) | <notextile>SI-6563 Test case for already-fixed crasher</notextile>
[SI-8104](https://issues.scala-lang.org/browse/SI-8104), [SI-8104](https://issues.scala-lang.org/browse/SI-8104) | [c0cb1d8](https://github.com/scala/scala/commit/c0cb1d8) | <notextile>[nomaster] codifies the state of the art wrt SI-8104</notextile>
[SI-8085](https://issues.scala-lang.org/browse/SI-8085) | [7e85b59](https://github.com/scala/scala/commit/7e85b59) | <notextile>SI-8085 Fix BrowserTraverser for package objects</notextile>
[SI-8085](https://issues.scala-lang.org/browse/SI-8085) | [a12dd9c](https://github.com/scala/scala/commit/a12dd9c) | <notextile>Test demonstrating SI-8085</notextile>
[SI-6426](https://issues.scala-lang.org/browse/SI-6426) | [47562e7](https://github.com/scala/scala/commit/47562e7) | <notextile>Revert &quot;SI-6426, importable _.&quot;</notextile>
[SI-8062](https://issues.scala-lang.org/browse/SI-8062) | [f0d913b](https://github.com/scala/scala/commit/f0d913b) | <notextile>SI-8062 Fix inliner cycle with recursion, separate compilation</notextile>
[SI-8157](https://issues.scala-lang.org/browse/SI-8157) | [ca05d22](https://github.com/scala/scala/commit/ca05d22) | <notextile>SI-8157 Make overloading, defaults restriction PolyType aware</notextile>
[SI-6253](https://issues.scala-lang.org/browse/SI-6253) | [034f6b9](https://github.com/scala/scala/commit/034f6b9) | <notextile>SI-6253 HashSet should implement union</notextile>
[SI-5604](https://issues.scala-lang.org/browse/SI-5604), [SI-5604](https://issues.scala-lang.org/browse/SI-5604) | [841dbc9](https://github.com/scala/scala/commit/841dbc9) | <notextile>removing defensive code made obsolete by existing fix to SI-5604</notextile>
[SI-6089](https://issues.scala-lang.org/browse/SI-6089), [SI-7749](https://issues.scala-lang.org/browse/SI-7749) | [c4e37d6](https://github.com/scala/scala/commit/c4e37d6) | <notextile>overzealous assert in GenBCode</notextile>
[SI-8126](https://issues.scala-lang.org/browse/SI-8126), [SI-7335](https://issues.scala-lang.org/browse/SI-7335) | [94e05a8](https://github.com/scala/scala/commit/94e05a8) | <notextile>SI-8126 Puts SI-7335 fix behind a source level flag</notextile>
[SI-8126](https://issues.scala-lang.org/browse/SI-8126), [SI-6899](https://issues.scala-lang.org/browse/SI-6899) | [6dd3653](https://github.com/scala/scala/commit/6dd3653) | <notextile>SI-8126 Puts SI-6899 fix under a source level flag</notextile>
[SI-8126](https://issues.scala-lang.org/browse/SI-8126) | [d43618a](https://github.com/scala/scala/commit/d43618a) | <notextile>SI-8126 Add a '-Xsource' flag allowing compilation in e.g. 2.10 mode</notextile>
[SI-4370](https://issues.scala-lang.org/browse/SI-4370) | [994de8f](https://github.com/scala/scala/commit/994de8f) | <notextile>SI-4370 Range bug: Wrong result for Long.MinValue to Long.MaxValue by Int.MaxVal</notextile>
[SI-8148](https://issues.scala-lang.org/browse/SI-8148) | [973c706](https://github.com/scala/scala/commit/973c706) | <notextile>SI-8148 fix anonymous functions with placeholders</notextile>
[SI-6196](https://issues.scala-lang.org/browse/SI-6196), [SI-6200](https://issues.scala-lang.org/browse/SI-6200) | [47a91d7](https://github.com/scala/scala/commit/47a91d7) | <notextile>SI-6200 - HashMap should implement filter</notextile>
[SI-6196](https://issues.scala-lang.org/browse/SI-6196) | [afcfba0](https://github.com/scala/scala/commit/afcfba0) | <notextile>SI-6196 - Set should implement filter</notextile>
[SI-7544](https://issues.scala-lang.org/browse/SI-7544) | [af75be6](https://github.com/scala/scala/commit/af75be6) | <notextile>SI-7544 StringContext.f docs update</notextile>
[SI-6457](https://issues.scala-lang.org/browse/SI-6457) | [bfa7031](https://github.com/scala/scala/commit/bfa7031) | <notextile>SI-6457 ImmutableSetFactory.empty results in StackOverflowError</notextile>
[SI-6153](https://issues.scala-lang.org/browse/SI-6153), [SI-6173](https://issues.scala-lang.org/browse/SI-6173), [SI-6456](https://issues.scala-lang.org/browse/SI-6456), [SI-6699](https://issues.scala-lang.org/browse/SI-6699), [SI-8116](https://issues.scala-lang.org/browse/SI-8116) | [29541ce](https://github.com/scala/scala/commit/29541ce) | <notextile>Quasi-comprehensive BigDecimal soundness/correctness fix.</notextile>
[SI-8100](https://issues.scala-lang.org/browse/SI-8100) | [2477bbd](https://github.com/scala/scala/commit/2477bbd) | <notextile>SI-8100 - prevent possible SOE during Stream#flatten.</notextile>
[SI-7469](https://issues.scala-lang.org/browse/SI-7469) | [765ac94](https://github.com/scala/scala/commit/765ac94) | <notextile>SI-7469 Remove misc. @deprecated elements</notextile>
[SI-8015](https://issues.scala-lang.org/browse/SI-8015) | [f606d81](https://github.com/scala/scala/commit/f606d81) | <notextile>SI-8015 Refactor per code review</notextile>
[SI-8015](https://issues.scala-lang.org/browse/SI-8015) | [2c8a8ff](https://github.com/scala/scala/commit/2c8a8ff) | <notextile>SI-8015 Carat =&gt; Caret</notextile>
[SI-8015](https://issues.scala-lang.org/browse/SI-8015) | [8be560a](https://github.com/scala/scala/commit/8be560a) | <notextile>SI-8015 Unprintables in messages</notextile>
[SI-8015](https://issues.scala-lang.org/browse/SI-8015) | [bb2e99a](https://github.com/scala/scala/commit/bb2e99a) | <notextile>SI-8015 Count lines by EOLs</notextile>
[SI-8035](https://issues.scala-lang.org/browse/SI-8035) | [c5567e2](https://github.com/scala/scala/commit/c5567e2) | <notextile>SI-8035 Deprecate automatic () insertion in argument lists</notextile>
[SI-8107](https://issues.scala-lang.org/browse/SI-8107) | [2fe7678](https://github.com/scala/scala/commit/2fe7678) | <notextile>SI-8107: Use Regex.quote</notextile>
[SI-8107](https://issues.scala-lang.org/browse/SI-8107) | [780ceca](https://github.com/scala/scala/commit/780ceca) | <notextile>SI-8107: Add Regex.quote</notextile>
[SI-8081](https://issues.scala-lang.org/browse/SI-8081) | [b8a76f6](https://github.com/scala/scala/commit/b8a76f6) | <notextile>SI-8081 unzip/unzip3 return wrong static type when applied to Arrays</notextile>
[SI-8132](https://issues.scala-lang.org/browse/SI-8132) | [8642a50](https://github.com/scala/scala/commit/8642a50) | <notextile>SI-8132 Fix false &quot;overrides nothing&quot; for case class protected param</notextile>
[SI-7326](https://issues.scala-lang.org/browse/SI-7326) | [24a227d](https://github.com/scala/scala/commit/24a227d) | <notextile>Implements specialized subsetOf for HashSet</notextile>
[SI-8146](https://issues.scala-lang.org/browse/SI-8146) | [a09e143](https://github.com/scala/scala/commit/a09e143) | <notextile>SI-8146 Fix non-deterministic &lt;:&lt; for deeply nested types</notextile>
[SI-8146](https://issues.scala-lang.org/browse/SI-8146) | [2e28cf7](https://github.com/scala/scala/commit/2e28cf7) | <notextile>SI-8146 Test cases for typechecking decidability</notextile>
[SI-8146](https://issues.scala-lang.org/browse/SI-8146) | [8beeef3](https://github.com/scala/scala/commit/8beeef3) | <notextile>SI-8146 Pending test, diagnosis for bug in decidability of &lt;:&lt;</notextile>
[SI-8128](https://issues.scala-lang.org/browse/SI-8128) | [3e9e2c6](https://github.com/scala/scala/commit/3e9e2c6) | <notextile>SI-8128 Fix regression in extractors returning existentials</notextile>
[SI-8045](https://issues.scala-lang.org/browse/SI-8045), [SI-8045](https://issues.scala-lang.org/browse/SI-8045) | [1696145](https://github.com/scala/scala/commit/1696145) | <notextile>SI-8045 type inference of extracted value</notextile>
[SI-7850](https://issues.scala-lang.org/browse/SI-7850) | [def46a9](https://github.com/scala/scala/commit/def46a9) | <notextile>SI-7850 CCE in patmat with invalid isEmpty.</notextile>
[SI-6111](https://issues.scala-lang.org/browse/SI-6111), [SI-6675](https://issues.scala-lang.org/browse/SI-6675), [SI-7897](https://issues.scala-lang.org/browse/SI-7897), [SI-6675](https://issues.scala-lang.org/browse/SI-6675) | [11bfa25](https://github.com/scala/scala/commit/11bfa25) | <notextile>SI-7897, SI-6675 improves name-based patmat</notextile>
[SI-6615](https://issues.scala-lang.org/browse/SI-6615) | [8dd69ec](https://github.com/scala/scala/commit/8dd69ec) | <notextile>SI-6615 junit test</notextile>
[SI-8058](https://issues.scala-lang.org/browse/SI-8058) | [a90f39c](https://github.com/scala/scala/commit/a90f39c) | <notextile>SI-8058 Better support for enum trees</notextile>
[SI-4841](https://issues.scala-lang.org/browse/SI-4841) | [77a66d3](https://github.com/scala/scala/commit/77a66d3) | <notextile>SI-4841 CLI help update for -Xplugin</notextile>
[SI-8046](https://issues.scala-lang.org/browse/SI-8046) | [6f42bd6](https://github.com/scala/scala/commit/6f42bd6) | <notextile>SI-8046 Only use fast TypeRef#baseTypeSeq with concrete base types</notextile>
[SI-6161](https://issues.scala-lang.org/browse/SI-6161) | [0de991f](https://github.com/scala/scala/commit/0de991f) | <notextile>Pending test for SI-6161</notextile>
[SI-8046](https://issues.scala-lang.org/browse/SI-8046) | [edc9edb](https://github.com/scala/scala/commit/edc9edb) | <notextile>SI-8046 Fix baseTypeSeq in presence of type aliases</notextile>
[SI-2066](https://issues.scala-lang.org/browse/SI-2066) | [28d3390](https://github.com/scala/scala/commit/28d3390) | <notextile>SI-2066 Plug a soundness hole higher order type params, overriding</notextile>
[SI-6615](https://issues.scala-lang.org/browse/SI-6615) | [ad59460](https://github.com/scala/scala/commit/ad59460) | <notextile>SI-6615 PagedSeq's slice throws a NPE if it starts on a page that hasn't been co</notextile>
[SI-6364](https://issues.scala-lang.org/browse/SI-6364) | [973f69a](https://github.com/scala/scala/commit/973f69a) | <notextile>SI-6364 SetWrapper does not preserve performance / behavior</notextile>
[SI-7680](https://issues.scala-lang.org/browse/SI-7680) | [cb0d285](https://github.com/scala/scala/commit/cb0d285) | <notextile>SI-7680 Update the ScalaDoc entry page of the Scala library</notextile>
[SI-8129](https://issues.scala-lang.org/browse/SI-8129) | [00e11ff](https://github.com/scala/scala/commit/00e11ff) | <notextile>SI-8129 Plug a leak in perRunCaches</notextile>
[SI-8131](https://issues.scala-lang.org/browse/SI-8131), [SI-8131](https://issues.scala-lang.org/browse/SI-8131) | [1d90810](https://github.com/scala/scala/commit/1d90810) | <notextile>SI-8131 Move test for reflection thread safety to pending.</notextile>
[SI-8135](https://issues.scala-lang.org/browse/SI-8135) | [3b68163](https://github.com/scala/scala/commit/3b68163) | <notextile>SI-8135 Disabled flaky hyperlinking presentation compiler test</notextile>
[SI-7443](https://issues.scala-lang.org/browse/SI-7443) | [4b6a0a9](https://github.com/scala/scala/commit/4b6a0a9) | <notextile>SI-7443 Use typeclass instance for {Range,NumericRange}.sum</notextile>
[SI-6812](https://issues.scala-lang.org/browse/SI-6812) | [6e4c926](https://github.com/scala/scala/commit/6e4c926) | <notextile>Use macro expandee, rather than expansion, in pres. compiler</notextile>
[SI-8064](https://issues.scala-lang.org/browse/SI-8064) | [d744921](https://github.com/scala/scala/commit/d744921) | <notextile>SI-8064 Automatic position repair for macro expansion</notextile>
[SI-7974](https://issues.scala-lang.org/browse/SI-7974) | [2e7c734](https://github.com/scala/scala/commit/2e7c734) | <notextile>SI-7974 Clean up and test 'Symbol-handling code in CleanUp</notextile>
[SI-7974](https://issues.scala-lang.org/browse/SI-7974) | [5e1e472](https://github.com/scala/scala/commit/5e1e472) | <notextile>SI-7974 Avoid calling nonPrivateMember after erasure</notextile>
[SI-4827](https://issues.scala-lang.org/browse/SI-4827) | [4936c43](https://github.com/scala/scala/commit/4936c43) | <notextile>SI-4827 Corrected positions assigned to constructor's default arg</notextile>
[SI-4827](https://issues.scala-lang.org/browse/SI-4827) | [bdb0ac0](https://github.com/scala/scala/commit/bdb0ac0) | <notextile>SI-4827 Test to demonstrate wrong position of constructor default arg</notextile>
[SI-4287](https://issues.scala-lang.org/browse/SI-4287), [SI-4287](https://issues.scala-lang.org/browse/SI-4287), [SI-4287](https://issues.scala-lang.org/browse/SI-4287) | [7f4720c](https://github.com/scala/scala/commit/7f4720c) | <notextile>SI-4287 Added test demonstrating hyperlinking to constructor's argument</notextile>
[SI-7491](https://issues.scala-lang.org/browse/SI-7491) | [906e517](https://github.com/scala/scala/commit/906e517) | <notextile>SI-7491 deprecate overriding App.main and clarify documentation</notextile>
[SI-7859](https://issues.scala-lang.org/browse/SI-7859) | [7f16e4d](https://github.com/scala/scala/commit/7f16e4d) | <notextile>SI-7859 fix AnyVal.scala scaladoc.</notextile>
[SI-7492](https://issues.scala-lang.org/browse/SI-7492) | [bbe9638](https://github.com/scala/scala/commit/bbe9638) | <notextile>SI-7492 Make scala.runtime.MethodCache private[scala]</notextile>
[SI-8120](https://issues.scala-lang.org/browse/SI-8120) | [5b9966d](https://github.com/scala/scala/commit/5b9966d) | <notextile>SI-8120 Avoid tree sharing when typechecking patmat anon functions</notextile>
[SI-8102](https://issues.scala-lang.org/browse/SI-8102), [SI-8102](https://issues.scala-lang.org/browse/SI-8102) | [b46d7ae](https://github.com/scala/scala/commit/b46d7ae) | <notextile>SI-8102 -0.0.abs must equal 0.0</notextile>
[SI-7837](https://issues.scala-lang.org/browse/SI-7837) | [feebc71](https://github.com/scala/scala/commit/feebc71) | <notextile>SI-7837 quickSort, along with Ordering[K], may result in stackoverflow because t</notextile>
[SI-7880](https://issues.scala-lang.org/browse/SI-7880) | [d2ee92f](https://github.com/scala/scala/commit/d2ee92f) | <notextile>SI-7880 Fix infinite loop in ResizableArray#ensureSize</notextile>
[SI-8052](https://issues.scala-lang.org/browse/SI-8052) | [ea8ae48](https://github.com/scala/scala/commit/ea8ae48) | <notextile>SI-8052 Disallow `macro` as an identifier</notextile>
[SI-8047](https://issues.scala-lang.org/browse/SI-8047) | [b97d44b](https://github.com/scala/scala/commit/b97d44b) | <notextile>SI-8047 change fresh name encoding to avoid owner corruption</notextile>
[SI-7406](https://issues.scala-lang.org/browse/SI-7406) | [72cd50c](https://github.com/scala/scala/commit/72cd50c) | <notextile>SI-7406 crasher with specialized lazy val</notextile>
[SI-8091](https://issues.scala-lang.org/browse/SI-8091) | [bce9705](https://github.com/scala/scala/commit/bce9705) | <notextile>makes boxity of fast track macros configurable</notextile>
[SI-8006](https://issues.scala-lang.org/browse/SI-8006) | [d92effc](https://github.com/scala/scala/commit/d92effc) | <notextile>SI-8006 prevents infinite applyDynamicNamed desugarings</notextile>
[SI-7777](https://issues.scala-lang.org/browse/SI-7777) | [bbd03b2](https://github.com/scala/scala/commit/bbd03b2) | <notextile>SI-7777 applyDynamic macro fails for nested application</notextile>
[SI-8104](https://issues.scala-lang.org/browse/SI-8104), [SI-8104](https://issues.scala-lang.org/browse/SI-8104) | [4b9e8e3](https://github.com/scala/scala/commit/4b9e8e3) | <notextile>codifies the state of the art wrt SI-8104</notextile>
[SI-6355](https://issues.scala-lang.org/browse/SI-6355), [SI-6355](https://issues.scala-lang.org/browse/SI-6355), [SI-7059](https://issues.scala-lang.org/browse/SI-7059) | [431e19f](https://github.com/scala/scala/commit/431e19f) | <notextile>SI-6355 SI-7059 it is possible to overload applyDynamic</notextile>
[SI-6120](https://issues.scala-lang.org/browse/SI-6120) | [9b2ce26](https://github.com/scala/scala/commit/9b2ce26) | <notextile>SI-6120 Suppress extra warnings</notextile>
[SI-8017](https://issues.scala-lang.org/browse/SI-8017) | [6a4947c](https://github.com/scala/scala/commit/6a4947c) | <notextile>SI-8017 Value class awareness for -Ydelamdafy:method</notextile>
[SI-6231](https://issues.scala-lang.org/browse/SI-6231) | [3b8b24a](https://github.com/scala/scala/commit/3b8b24a) | <notextile>Remove obsolete diagnostic error for SI-6231</notextile>
[SI-7012](https://issues.scala-lang.org/browse/SI-7012), [SI-6231](https://issues.scala-lang.org/browse/SI-6231), [SI-2897](https://issues.scala-lang.org/browse/SI-2897), [SI-5508](https://issues.scala-lang.org/browse/SI-5508) | [cca4d51](https://github.com/scala/scala/commit/cca4d51) | <notextile>SI-5508 Fix crasher with private[this] in nested traits</notextile>
[SI-7971](https://issues.scala-lang.org/browse/SI-7971) | [f7f80e8](https://github.com/scala/scala/commit/f7f80e8) | <notextile>SI-7971 Handle static field initializers correctly</notextile>
[SI-7546](https://issues.scala-lang.org/browse/SI-7546) | [a3a5e4a](https://github.com/scala/scala/commit/a3a5e4a) | <notextile>SI-7546 Use likely monotonic clock source for durations</notextile>
[SI-8042](https://issues.scala-lang.org/browse/SI-8042) | [a5fc6e6](https://github.com/scala/scala/commit/a5fc6e6) | <notextile>SI-8042 Use Serialization Proxy Pattern in List</notextile>
[SI-7618](https://issues.scala-lang.org/browse/SI-7618) | [6688da4](https://github.com/scala/scala/commit/6688da4) | <notextile>SI-7618 Remove octal number literals</notextile>
[SI-8030](https://issues.scala-lang.org/browse/SI-8030) | [760df98](https://github.com/scala/scala/commit/760df98) | <notextile>SI-8030 force symbols on presentation compiler initialization</notextile>
[SI-8059](https://issues.scala-lang.org/browse/SI-8059) | [f0f0a5e](https://github.com/scala/scala/commit/f0f0a5e) | <notextile>SI-8059 Override immutable.Queue#{+:,:+} for performance</notextile>
[SI-8024](https://issues.scala-lang.org/browse/SI-8024) | [b2b9cf4](https://github.com/scala/scala/commit/b2b9cf4) | <notextile>SI-8024 Improve user-level toString of package objects</notextile>
[SI-8024](https://issues.scala-lang.org/browse/SI-8024) | [e6cee26](https://github.com/scala/scala/commit/e6cee26) | <notextile>SI-8024 Fix inaccurate message on overloaded ambiguous ident</notextile>
[SI-8024](https://issues.scala-lang.org/browse/SI-8024) | [a443bae](https://github.com/scala/scala/commit/a443bae) | <notextile>SI-8024 Pending test case for package object / overloading bug</notextile>
[SI-6780](https://issues.scala-lang.org/browse/SI-6780) | [110fde0](https://github.com/scala/scala/commit/110fde0) | <notextile>SI-6780 Refactor Context#implicitss</notextile>
[SI-6780](https://issues.scala-lang.org/browse/SI-6780) | [0304e00](https://github.com/scala/scala/commit/0304e00) | <notextile>SI-6780 Better handling of cycles in in-scope implicit search</notextile>
[SI-7912](https://issues.scala-lang.org/browse/SI-7912) | [006e2f2](https://github.com/scala/scala/commit/006e2f2) | <notextile>SI-7912 Be defensive calling `toString` in `MatchError#getMessage`</notextile>
[SI-8060](https://issues.scala-lang.org/browse/SI-8060) | [bb427a3](https://github.com/scala/scala/commit/bb427a3) | <notextile>SI-8060 Avoid infinite loop with higher kinded type alias</notextile>
[SI-7995](https://issues.scala-lang.org/browse/SI-7995) | [5ed834e](https://github.com/scala/scala/commit/5ed834e) | <notextile>SI-7995 completion imported vars and vals</notextile>
[SI-8019](https://issues.scala-lang.org/browse/SI-8019) | [c955cf4](https://github.com/scala/scala/commit/c955cf4) | <notextile>SI-8019 Make Publisher check PartialFunction is defined for Event</notextile>
[SI-8029](https://issues.scala-lang.org/browse/SI-8029) | [fdcc262](https://github.com/scala/scala/commit/fdcc262) | <notextile>SI-8029 Avoid multi-run cyclic error with companions, package object</notextile>
[SI-7439](https://issues.scala-lang.org/browse/SI-7439) | [8d74fa0](https://github.com/scala/scala/commit/8d74fa0) | <notextile>[backport] SI-7439 Avoid NPE in `isMonomorphicType` with stub symbols.</notextile>
[SI-8010](https://issues.scala-lang.org/browse/SI-8010) | [9036f77](https://github.com/scala/scala/commit/9036f77) | <notextile>SI-8010 Fix regression in erasure double definition checks</notextile>
[SI-8050](https://issues.scala-lang.org/browse/SI-8050) | [85692ff](https://github.com/scala/scala/commit/85692ff) | <notextile>SI-8050 [Avian] Skip instrumented tests</notextile>
[SI-8027](https://issues.scala-lang.org/browse/SI-8027) | [30f779b](https://github.com/scala/scala/commit/30f779b) | <notextile>SI-8027 REPL double tab regression</notextile>
[SI-4841](https://issues.scala-lang.org/browse/SI-4841) | [1d30ea8](https://github.com/scala/scala/commit/1d30ea8) | <notextile>SI-4841 Plugins get a class path</notextile>
[SI-7928](https://issues.scala-lang.org/browse/SI-7928), [SI-8054](https://issues.scala-lang.org/browse/SI-8054) | [369f370](https://github.com/scala/scala/commit/369f370) | <notextile>SI-8054 Fix regression in TypeRef rebind with val overriding object</notextile>
[SI-7789](https://issues.scala-lang.org/browse/SI-7789) | [e6eed41](https://github.com/scala/scala/commit/e6eed41) | <notextile>SI-7789 make quasiquotes deconstruct UnApply trees</notextile>
[SI-7980](https://issues.scala-lang.org/browse/SI-7980), [SI-7996](https://issues.scala-lang.org/browse/SI-7996) | [4c899ea](https://github.com/scala/scala/commit/4c899ea) | <notextile>Refactor Holes and Reifiers slices of Quasiquotes cake</notextile>
[SI-7979](https://issues.scala-lang.org/browse/SI-7979) | [26a3348](https://github.com/scala/scala/commit/26a3348) | <notextile>SI-7979 Fix quasiquotes crash on mismatch between fields and constructor</notextile>
[SI-6842](https://issues.scala-lang.org/browse/SI-6842) | [0ccd4bc](https://github.com/scala/scala/commit/0ccd4bc) | <notextile>SI-6842 Make splicing less sensitive to precise types of trees</notextile>
[SI-8009](https://issues.scala-lang.org/browse/SI-8009) | [2695924](https://github.com/scala/scala/commit/2695924) | <notextile>SI-8009 Ensure that Idents preserve isBackquoted property</notextile>
[SI-8016](https://issues.scala-lang.org/browse/SI-8016) | [207b945](https://github.com/scala/scala/commit/207b945) | <notextile>SI-8016 Ensure that q&rdquo;..$xs&rdquo; is equivalent to q&rdquo;{..$xs}&rdquo;</notextile>
[SI-8008](https://issues.scala-lang.org/browse/SI-8008) | [8bde124](https://github.com/scala/scala/commit/8bde124) | <notextile>SI-8008 Make q&rdquo;f(..$xs)&rdquo; only match trees with Apply node</notextile>
[SI-8013](https://issues.scala-lang.org/browse/SI-8013) | [1b45418](https://github.com/scala/scala/commit/1b45418) | <notextile>SI-8013 Nowarn on macro str interpolation</notextile>
[SI-7982](https://issues.scala-lang.org/browse/SI-7982) | [7d41094](https://github.com/scala/scala/commit/7d41094) | <notextile>SI-7982 Changed contract of askLoadedType to unload units by default</notextile>
[SI-6913](https://issues.scala-lang.org/browse/SI-6913) | [7063439](https://github.com/scala/scala/commit/7063439) | <notextile>SI-6913 Fixing semantics of Future fallbackTo to be according to docs</notextile>
[SI-7458](https://issues.scala-lang.org/browse/SI-7458) | [02308c9](https://github.com/scala/scala/commit/02308c9) | <notextile>SI-7458 Pres. compiler must not observe trees in silent mode</notextile>
[SI-7548](https://issues.scala-lang.org/browse/SI-7548) | [652b3b4](https://github.com/scala/scala/commit/652b3b4) | <notextile>SI-7548 Test to demonstrate residual exploratory typing bug</notextile>
[SI-7548](https://issues.scala-lang.org/browse/SI-7548) | [b7509c9](https://github.com/scala/scala/commit/b7509c9) | <notextile>SI-7548 askTypeAt returns the same type whether the source was fully or targeted</notextile>
[SI-8014](https://issues.scala-lang.org/browse/SI-8014) | [03bf97e](https://github.com/scala/scala/commit/03bf97e) | <notextile>Fixes SI-8014, regression in Vector ++ TraversableOnce.</notextile>
[SI-7373](https://issues.scala-lang.org/browse/SI-7373) | [1071d0c](https://github.com/scala/scala/commit/1071d0c) | <notextile>SI-7373 Make the constructor of Vector non-public</notextile>
[SI-8023](https://issues.scala-lang.org/browse/SI-8023) | [d0aaa86](https://github.com/scala/scala/commit/d0aaa86) | <notextile>SI-8023 Address review comments around typedHigherKindedType</notextile>
[SI-7756](https://issues.scala-lang.org/browse/SI-7756), [SI-8023](https://issues.scala-lang.org/browse/SI-8023) | [a89000b](https://github.com/scala/scala/commit/a89000b) | <notextile>SI-8023 Fix symbol-completion-order type var pattern bug</notextile>
[SI-6406](https://issues.scala-lang.org/browse/SI-6406), [SI-7737](https://issues.scala-lang.org/browse/SI-7737), [SI-8022](https://issues.scala-lang.org/browse/SI-8022) | [32b7564](https://github.com/scala/scala/commit/32b7564) | <notextile>SI-8022 Backwards compatibility for Regex#unapplySeq</notextile>
[SI-8005](https://issues.scala-lang.org/browse/SI-8005) | [3629b64](https://github.com/scala/scala/commit/3629b64) | <notextile>SI-8005 Fixes NoPositon error for updateDynamic calls</notextile>
[SI-8004](https://issues.scala-lang.org/browse/SI-8004) | [696545d](https://github.com/scala/scala/commit/696545d) | <notextile>SI-8004 Resolve NoPosition error for applyDynamicNamed method call</notextile>
[SI-7463](https://issues.scala-lang.org/browse/SI-7463), [SI-8003](https://issues.scala-lang.org/browse/SI-8003) | [b915f44](https://github.com/scala/scala/commit/b915f44) | <notextile>SI-7463,SI-8003 Correct wrong position for {select,apply}Dynamic calls</notextile>
[SI-7280](https://issues.scala-lang.org/browse/SI-7280) | [053a274](https://github.com/scala/scala/commit/053a274) | <notextile>[nomaster] SI-7280 Scope completion not returning members provided by imports</notextile>
[SI-7915](https://issues.scala-lang.org/browse/SI-7915) | [04df2e4](https://github.com/scala/scala/commit/04df2e4) | <notextile>SI-7915 Corrected range positions created during default args expansion</notextile>
[SI-8002](https://issues.scala-lang.org/browse/SI-8002) | [28bf4ad](https://github.com/scala/scala/commit/28bf4ad) | <notextile>SI-8002 private access for local companions</notextile>
[SI-4332](https://issues.scala-lang.org/browse/SI-4332) | [f12bb7b](https://github.com/scala/scala/commit/f12bb7b) | <notextile>SI-4332 Plugs the gaps in views</notextile>
[SI-7984](https://issues.scala-lang.org/browse/SI-7984) | [0271a4a](https://github.com/scala/scala/commit/0271a4a) | <notextile>SI-7984 Issue unchecked warning for type aliases</notextile>
[SI-8011](https://issues.scala-lang.org/browse/SI-8011) | [05620ad](https://github.com/scala/scala/commit/05620ad) | <notextile>SI-8011 Test case for recently fixed value class bug</notextile>
[SI-7969](https://issues.scala-lang.org/browse/SI-7969) | [8f20fa2](https://github.com/scala/scala/commit/8f20fa2) | <notextile>SI-7969 REPL variable columnar output</notextile>
[SI-7969](https://issues.scala-lang.org/browse/SI-7969) | [02359a0](https://github.com/scala/scala/commit/02359a0) | <notextile>SI-7969 Refactor to trait with test</notextile>
[SI-7969](https://issues.scala-lang.org/browse/SI-7969) | [28cfe16](https://github.com/scala/scala/commit/28cfe16) | <notextile>SI-7969 REPL -C columnar output</notextile>
[SI-7872](https://issues.scala-lang.org/browse/SI-7872) | [5186353](https://github.com/scala/scala/commit/5186353) | <notextile>SI-7872 Plug a variance exploit in refinement types</notextile>
[SI-8001](https://issues.scala-lang.org/browse/SI-8001) | [66577fa](https://github.com/scala/scala/commit/66577fa) | <notextile>SI-8001 spurious &quot;pure expression does nothing&quot; warning</notextile>
[SI-7967](https://issues.scala-lang.org/browse/SI-7967) | [a5e2476](https://github.com/scala/scala/commit/a5e2476) | <notextile>SI-7967 Account for type aliases in self-type checks</notextile>
[SI-7999](https://issues.scala-lang.org/browse/SI-7999) | [6460365](https://github.com/scala/scala/commit/6460365) | <notextile>SI-7999 s.u.c.NonFatal: StackOverflowError is fatal</notextile>
[SI-7983](https://issues.scala-lang.org/browse/SI-7983) | [dfe0ba8](https://github.com/scala/scala/commit/dfe0ba8) | <notextile>SI-7983 Fix regression in implicit divergence checking</notextile>
[SI-7985](https://issues.scala-lang.org/browse/SI-7985) | [1050745](https://github.com/scala/scala/commit/1050745) | <notextile>SI-7985 Refactor parsing of pattern type args</notextile>
[SI-7985](https://issues.scala-lang.org/browse/SI-7985) | [b1d3053](https://github.com/scala/scala/commit/b1d3053) | <notextile>SI-7985 Allow projection of lower-cased prefix as pattern type arg</notextile>
[SI-7985](https://issues.scala-lang.org/browse/SI-7985) | [77ecff7](https://github.com/scala/scala/commit/77ecff7) | <notextile>SI-7985 Allow qualified type argument in patterns</notextile>
[SI-7221](https://issues.scala-lang.org/browse/SI-7221) | [d6a457c](https://github.com/scala/scala/commit/d6a457c) | <notextile>SI-7221 rewrites pollForWork non-recursively</notextile>
[SI-6329](https://issues.scala-lang.org/browse/SI-6329), [SI-6329](https://issues.scala-lang.org/browse/SI-6329) | [b27c9b8](https://github.com/scala/scala/commit/b27c9b8) | <notextile>SI-6329 Graduation day for pending tests for tag materialization</notextile>
[SI-7944](https://issues.scala-lang.org/browse/SI-7944), [SI-7987](https://issues.scala-lang.org/browse/SI-7987) | [5eef542](https://github.com/scala/scala/commit/5eef542) | <notextile>SI-7987 Test case for &quot;macro not expanded&quot; error with implicits</notextile>
[SI-7280](https://issues.scala-lang.org/browse/SI-7280) | [0f9c1e7](https://github.com/scala/scala/commit/0f9c1e7) | <notextile>SI-7280 Remove unneccesary method</notextile>
[SI-7280](https://issues.scala-lang.org/browse/SI-7280) | [3028327](https://github.com/scala/scala/commit/3028327) | <notextile>SI-7280 Scope completion not returning members provided by imports</notextile>
[SI-7915](https://issues.scala-lang.org/browse/SI-7915) | [3009a52](https://github.com/scala/scala/commit/3009a52) | <notextile>SI-7915 Corrected range positions created during default args expansion</notextile>
[SI-5263](https://issues.scala-lang.org/browse/SI-5263) | [992b90e](https://github.com/scala/scala/commit/992b90e) | <notextile>New AnyRefMap fixes SI-5263 to the extent practical.</notextile>
[SI-5263](https://issues.scala-lang.org/browse/SI-5263), [SI-6825](https://issues.scala-lang.org/browse/SI-6825) | [05aedd9](https://github.com/scala/scala/commit/05aedd9) | <notextile>New mutable hash map with Long keys: partially solves SI-5263 and is relevant to</notextile>
[SI-7961](https://issues.scala-lang.org/browse/SI-7961) | [bc98d7d](https://github.com/scala/scala/commit/bc98d7d) | <notextile>SI-7961 Fix false positive procedure warnings</notextile>
[SI-7776](https://issues.scala-lang.org/browse/SI-7776) | [d15ed08](https://github.com/scala/scala/commit/d15ed08) | <notextile>[backport] SI-7776 post-erasure signature clashes are now macro-aware</notextile>
[SI-7638](https://issues.scala-lang.org/browse/SI-7638), [SI-4012](https://issues.scala-lang.org/browse/SI-4012) | [e09a8a2](https://github.com/scala/scala/commit/e09a8a2) | <notextile>SI-4012 Mixin and specialization work well</notextile>
[SI-6546](https://issues.scala-lang.org/browse/SI-6546) | [075f6f2](https://github.com/scala/scala/commit/075f6f2) | <notextile>SI-6546 InnerClasses attribute refers to absent class</notextile>
[SI-7519](https://issues.scala-lang.org/browse/SI-7519) | [50c8b39e](https://github.com/scala/scala/commit/50c8b39e) | <notextile>SI-7519: Additional test case covering sbt/sbt#914</notextile>
[SI-7519](https://issues.scala-lang.org/browse/SI-7519) | [ce74bb0](https://github.com/scala/scala/commit/ce74bb0) | <notextile>[nomaster] SI-7519 Less brutal attribute resetting in adapt fallback</notextile>
[SI-7295](https://issues.scala-lang.org/browse/SI-7295) | [25bcba5](https://github.com/scala/scala/commit/25bcba5) | <notextile>SI-7295 Fix windows batch file with args containing parentheses</notextile>
[SI-6026](https://issues.scala-lang.org/browse/SI-6026) | [2bfe0e7](https://github.com/scala/scala/commit/2bfe0e7) | <notextile>SI-6026 REPL checks for javap before tools.jar</notextile>
[SI-4936](https://issues.scala-lang.org/browse/SI-4936), [SI-6026](https://issues.scala-lang.org/browse/SI-6026) | [e350bd2](https://github.com/scala/scala/commit/e350bd2) | <notextile>[nomaster] SI-6026 backport getResource bug fix</notextile>
[SI-7747](https://issues.scala-lang.org/browse/SI-7747) | [1d3156c](https://github.com/scala/scala/commit/1d3156c) | <notextile>SI-7747 Support class based wrappers clean up</notextile>
[SI-7747](https://issues.scala-lang.org/browse/SI-7747) | [1f834cd](https://github.com/scala/scala/commit/1f834cd) | <notextile>SI-7747 Support class based wrappers as alternative through switch -Yrepl-class-</notextile>
[SI-7859](https://issues.scala-lang.org/browse/SI-7859) | [e2a3498](https://github.com/scala/scala/commit/e2a3498) | <notextile>Make parameters to implicit value classes private</notextile>
[SI-7568](https://issues.scala-lang.org/browse/SI-7568) | [1ca329e](https://github.com/scala/scala/commit/1ca329e) | <notextile>SI-7568 Adding PriorityQueueTest</notextile>
[SI-7568](https://issues.scala-lang.org/browse/SI-7568) | [3127ec0](https://github.com/scala/scala/commit/3127ec0) | <notextile>SI-7568 Adding Serializable to ResizableArrayAccess inner class of PriorityQueue</notextile>
[SI-7958](https://issues.scala-lang.org/browse/SI-7958) | [aac015a](https://github.com/scala/scala/commit/aac015a) | <notextile>SI-7958 Deprecate methods `future` and `promise` in the `scala.concurrent` packa</notextile>
[SI-7678](https://issues.scala-lang.org/browse/SI-7678) | [a5127a8](https://github.com/scala/scala/commit/a5127a8) | <notextile>SI-7678 Don't cache member symbols of TypeTags in Definitions.</notextile>
[SI-7678](https://issues.scala-lang.org/browse/SI-7678), [SI-7678](https://issues.scala-lang.org/browse/SI-7678) | [3dba993](https://github.com/scala/scala/commit/3dba993) | <notextile>Add a per-run cache for member symbols</notextile>
[SI-7776](https://issues.scala-lang.org/browse/SI-7776) | [086702d](https://github.com/scala/scala/commit/086702d) | <notextile>SI-7776 post-erasure signature clashes are now macro-aware</notextile>
[SI-7634](https://issues.scala-lang.org/browse/SI-7634) | [490f946](https://github.com/scala/scala/commit/490f946) | <notextile>SI-7634 resurrect the REPL's :sh command</notextile>
[SI-7938](https://issues.scala-lang.org/browse/SI-7938) | [344ac60](https://github.com/scala/scala/commit/344ac60) | <notextile>SI-7938 - parallel collections should use default ExecutionContext</notextile>
[SI-7944](https://issues.scala-lang.org/browse/SI-7944) | [251c2b9](https://github.com/scala/scala/commit/251c2b9) | <notextile>SI-7944 FOUND: stray undetermined type params in vicinity of implicits</notextile>
[SI-7605](https://issues.scala-lang.org/browse/SI-7605) | [bc47503](https://github.com/scala/scala/commit/bc47503) | <notextile>SI-7605 Deprecate procedure syntax</notextile>
[SI-6260](https://issues.scala-lang.org/browse/SI-6260), [SI-6385](https://issues.scala-lang.org/browse/SI-6385), [SI-6260](https://issues.scala-lang.org/browse/SI-6260), [SI-6260](https://issues.scala-lang.org/browse/SI-6260), [SI-6385](https://issues.scala-lang.org/browse/SI-6385) | [4acac08](https://github.com/scala/scala/commit/4acac08) | <notextile>SI-6385 Avoid bridges to identical signatures over value classes</notextile>
[SI-7928](https://issues.scala-lang.org/browse/SI-7928) | [8076738](https://github.com/scala/scala/commit/8076738) | <notextile>SI-7928 Favour module accessors symbols in rebind</notextile>
[SI-7883](https://issues.scala-lang.org/browse/SI-7883) | [f38f762](https://github.com/scala/scala/commit/f38f762) | <notextile>SI-7883: Added a comment per CR feedback from @adriaanm, @Ichoran</notextile>
[SI-7883](https://issues.scala-lang.org/browse/SI-7883) | [55a558a](https://github.com/scala/scala/commit/55a558a) | <notextile>SI-7883 - don't iterate over all keys in MapWrapper.containsKey()</notextile>
[SI-3871](https://issues.scala-lang.org/browse/SI-3871) | [b39a509](https://github.com/scala/scala/commit/b39a509) | <notextile>SI-3871 Testing protected access against the spec</notextile>
[SI-3871](https://issues.scala-lang.org/browse/SI-3871) | [4d96314](https://github.com/scala/scala/commit/4d96314) | <notextile>SI-3871 Missing test case for protected bug.</notextile>
[SI-6840](https://issues.scala-lang.org/browse/SI-6840) | [6d4f435](https://github.com/scala/scala/commit/6d4f435) | <notextile>SI-6840 fixes weird typing of quasiquote arguments</notextile>
[SI-7020](https://issues.scala-lang.org/browse/SI-7020) | [69557da](https://github.com/scala/scala/commit/69557da) | <notextile>SI-7020 Deterministic warnings for pattern matcher, take 2</notextile>
[SI-7519](https://issues.scala-lang.org/browse/SI-7519) | [e72c32d](https://github.com/scala/scala/commit/e72c32d) | <notextile>SI-7519: Additional test case covering sbt/sbt#914</notextile>
[SI-6240](https://issues.scala-lang.org/browse/SI-6240) | [59b94ef](https://github.com/scala/scala/commit/59b94ef) | <notextile>Platform independence for SI-6240 test case</notextile>
[SI-6841](https://issues.scala-lang.org/browse/SI-6841), [SI-6657](https://issues.scala-lang.org/browse/SI-6657) | [3a148cd](https://github.com/scala/scala/commit/3a148cd) | <notextile>SI-6841 SI-6657 add support for packages into quasiquotes and toolbox</notextile>
[SI-7020](https://issues.scala-lang.org/browse/SI-7020) | [7b56021](https://github.com/scala/scala/commit/7b56021) | <notextile>Disable tests for SI-7020</notextile>
[SI-7045](https://issues.scala-lang.org/browse/SI-7045) | [544ae24](https://github.com/scala/scala/commit/544ae24) | <notextile>SI-7045 reflection now auto-initializes selfType</notextile>
[SI-6240](https://issues.scala-lang.org/browse/SI-6240) | [484d6d7](https://github.com/scala/scala/commit/484d6d7) | <notextile>SI-6240 introduces GIL to Scala reflection</notextile>
[SI-3346](https://issues.scala-lang.org/browse/SI-3346), [SI-3346](https://issues.scala-lang.org/browse/SI-3346) | [210dbc7](https://github.com/scala/scala/commit/210dbc7) | <notextile>SI-3346 implicit parameters can now guide implicit view inference</notextile>
[SI-7783](https://issues.scala-lang.org/browse/SI-7783) | [2ccbfa5](https://github.com/scala/scala/commit/2ccbfa5) | <notextile>SI-7783 Don't issue deprecation warnings for inferred TypeTrees</notextile>
[SI-2797](https://issues.scala-lang.org/browse/SI-2797), [SI-7688](https://issues.scala-lang.org/browse/SI-7688) | [fbbc767](https://github.com/scala/scala/commit/fbbc767) | <notextile>SI-7688 Fix AsSeenFrom of ThisType from TypeVar prefix</notextile>
[SI-7899](https://issues.scala-lang.org/browse/SI-7899) | [4f1a46c](https://github.com/scala/scala/commit/4f1a46c) | <notextile>SI-7899 Allow by-name inference under -Yinfer-by-name</notextile>
[SI-7239](https://issues.scala-lang.org/browse/SI-7239), [SI-7239](https://issues.scala-lang.org/browse/SI-7239) | [5d6bcfe](https://github.com/scala/scala/commit/5d6bcfe) | <notextile>SI-7239 A bonus test case from [scala-user]</notextile>
[SI-7985](https://issues.scala-lang.org/browse/SI-7985) | [83feb86](https://github.com/scala/scala/commit/83feb86) | <notextile>SI-7985 Typecheck args after failure to typecheck function</notextile>
[SI-7895](https://issues.scala-lang.org/browse/SI-7895) | [7e4a97e](https://github.com/scala/scala/commit/7e4a97e) | <notextile>SI-7895 Issue all buffered errors after silent mode.</notextile>
[SI-7895](https://issues.scala-lang.org/browse/SI-7895) | [d0af55c](https://github.com/scala/scala/commit/d0af55c) | <notextile>SI-7895 Avoid cascade of &quot;symbol not found&quot; in pattern matches</notextile>
[SI-7902](https://issues.scala-lang.org/browse/SI-7902) | [03a06e0](https://github.com/scala/scala/commit/03a06e0) | <notextile>SI-7902 Fix spurious kind error due to an unitialized symbol</notextile>
[SI-7899](https://issues.scala-lang.org/browse/SI-7899) | [8ed7099](https://github.com/scala/scala/commit/8ed7099) | <notextile>SI-7899 Don't infer by-name types during, e.g. eta-expansion</notextile>
[SI-6680](https://issues.scala-lang.org/browse/SI-6680) | [5708e9d](https://github.com/scala/scala/commit/5708e9d) | <notextile>SI-6680 unsoundness in gadt typing.</notextile>
[SI-7886](https://issues.scala-lang.org/browse/SI-7886) | [95d5554](https://github.com/scala/scala/commit/95d5554) | <notextile>SI-7886 unsoundness in pattern matcher.</notextile>
[SI-6601](https://issues.scala-lang.org/browse/SI-6601), [SI-7859](https://issues.scala-lang.org/browse/SI-7859) | [4595ac6](https://github.com/scala/scala/commit/4595ac6) | <notextile>SI-7859 Value classes may wrap a non-public member</notextile>
[SI-5465](https://issues.scala-lang.org/browse/SI-5465), [SI-7871](https://issues.scala-lang.org/browse/SI-7871) | [7122560](https://github.com/scala/scala/commit/7122560) | <notextile>transformers no longer ignore UnApply.fun</notextile>
[SI-7629](https://issues.scala-lang.org/browse/SI-7629) | [96ff8c5](https://github.com/scala/scala/commit/96ff8c5) | <notextile>SI-7629 Deprecate view bounds</notextile>
[SI-7877](https://issues.scala-lang.org/browse/SI-7877) | [d290d0d](https://github.com/scala/scala/commit/d290d0d) | <notextile>SI-7877 Only look for unapplies in term trees</notextile>
[SI-7848](https://issues.scala-lang.org/browse/SI-7848) | [69ce274](https://github.com/scala/scala/commit/69ce274) | <notextile>SI-7848 Xlint no warn on $sym with params</notextile>
[SI-3971](https://issues.scala-lang.org/browse/SI-3971) | [7fa77af](https://github.com/scala/scala/commit/7fa77af) | <notextile>SI-3971 error message carat mispoints at curried methods.</notextile>
[SI-6120](https://issues.scala-lang.org/browse/SI-6120) | [3431279](https://github.com/scala/scala/commit/3431279) | <notextile>SI-6120 multiple warnings at same position.</notextile>
[SI-6762](https://issues.scala-lang.org/browse/SI-6762) | [9ea3a4a](https://github.com/scala/scala/commit/9ea3a4a) | <notextile>SI-6762 rename emptyValDef to noSelfType.</notextile>
[SI-7862](https://issues.scala-lang.org/browse/SI-7862) | [8e11dcb](https://github.com/scala/scala/commit/8e11dcb) | <notextile>[nomaster] SI-7862: MANIFEST.MF file for Scala sources</notextile>
[SI-7861](https://issues.scala-lang.org/browse/SI-7861) | [7f4b44b](https://github.com/scala/scala/commit/7f4b44b) | <notextile>SI-7861 Don't execute internal callbacks on the user Executor</notextile>
[SI-7815](https://issues.scala-lang.org/browse/SI-7815) | [733b322](https://github.com/scala/scala/commit/733b322) | <notextile>SI-7815 Dealias before deeming method type as dependent</notextile>
[SI-7398](https://issues.scala-lang.org/browse/SI-7398) | [a1796aa](https://github.com/scala/scala/commit/a1796aa) | <notextile>SI-7398 Enable test for Java 8 source parser under Java 8</notextile>
[SI-7825](https://issues.scala-lang.org/browse/SI-7825) | [bf0f9da](https://github.com/scala/scala/commit/bf0f9da) | <notextile>SI-7825 Consider DEFAULTMETHOD when refchecking concreteness</notextile>
[SI-7870](https://issues.scala-lang.org/browse/SI-7870) | [d882ec0](https://github.com/scala/scala/commit/d882ec0) | <notextile>SI-7870 Detect default getter clashes in constructors</notextile>
[SI-7876](https://issues.scala-lang.org/browse/SI-7876) | [c11d988](https://github.com/scala/scala/commit/c11d988) | <notextile>SI-7876 Less dealiasing in Scaladoc's type printing.</notextile>
[SI-7876](https://issues.scala-lang.org/browse/SI-7876) | [001132d](https://github.com/scala/scala/commit/001132d) | <notextile>SI-7876 Scaladoc crasher due to regression in isFunctionType.</notextile>
[SI-4605](https://issues.scala-lang.org/browse/SI-4605), [SI-7839](https://issues.scala-lang.org/browse/SI-7839), [SI-4742](https://issues.scala-lang.org/browse/SI-4742) | [fa271e2](https://github.com/scala/scala/commit/fa271e2) | <notextile>SI-4742 Make -Xcheckinit aware of constants.</notextile>
[SI-7868](https://issues.scala-lang.org/browse/SI-7868) | [16d963b](https://github.com/scala/scala/commit/16d963b) | <notextile>SI-7868 Account for numeric widening in match translation</notextile>
[SI-7725](https://issues.scala-lang.org/browse/SI-7725) | [4234b34](https://github.com/scala/scala/commit/4234b34) | <notextile>SI-7725 - Vector concatenation is unreasonably slow</notextile>
[SI-7848](https://issues.scala-lang.org/browse/SI-7848) | [a5bae8f](https://github.com/scala/scala/commit/a5bae8f) | <notextile>SI-7848 Xlint no warn on $sym with params</notextile>
[SI-7855](https://issues.scala-lang.org/browse/SI-7855) | [40d57db](https://github.com/scala/scala/commit/40d57db) | <notextile>SI-7855 No missing interpolator warning post-typer</notextile>
[SI-7848](https://issues.scala-lang.org/browse/SI-7848) | [6ff756b](https://github.com/scala/scala/commit/6ff756b) | <notextile>SI-7848 Xlint says what looks interpolated</notextile>
[SI-7864](https://issues.scala-lang.org/browse/SI-7864) | [3d7f84e](https://github.com/scala/scala/commit/3d7f84e) | <notextile>SI-7864 Harden &quot;looks like an interpolated String&quot; warning</notextile>
[SI-7852](https://issues.scala-lang.org/browse/SI-7852) | [355eff4](https://github.com/scala/scala/commit/355eff4) | <notextile>SI-7852 Refactor null-elision tests to be more focussed</notextile>
[SI-7852](https://issues.scala-lang.org/browse/SI-7852) | [354f428](https://github.com/scala/scala/commit/354f428) | <notextile>SI-7852 Omit null check for SomeModule.==</notextile>
[SI-7852](https://issues.scala-lang.org/browse/SI-7852) | [4faaa82](https://github.com/scala/scala/commit/4faaa82) | <notextile>SI-7852 Test to show status quo of for SomeModule.==</notextile>
[SI-7852](https://issues.scala-lang.org/browse/SI-7852) | [9fee7b6](https://github.com/scala/scala/commit/9fee7b6) | <notextile>SI-7852 Omit null check for &quot;&quot;.==</notextile>
[SI-7852](https://issues.scala-lang.org/browse/SI-7852) | [2bb960c](https://github.com/scala/scala/commit/2bb960c) | <notextile>SI-7852 Test to show the status quo bytecode for &quot;&quot; == ...</notextile>
[SI-7862](https://issues.scala-lang.org/browse/SI-7862) | [655b7d2](https://github.com/scala/scala/commit/655b7d2) | <notextile>SI-7862: MANIFEST.MF file for Scala sources</notextile>
[SI-6719](https://issues.scala-lang.org/browse/SI-6719) | [48d1d05](https://github.com/scala/scala/commit/48d1d05) | <notextile>add test case for SI-6719</notextile>
[SI-7854](https://issues.scala-lang.org/browse/SI-7854), [SI-6768](https://issues.scala-lang.org/browse/SI-6768) | [f7a315a](https://github.com/scala/scala/commit/f7a315a) | <notextile>SI-7854, SI-6768 better parsing/positioning in parser</notextile>
[SI-7853](https://issues.scala-lang.org/browse/SI-7853) | [0f67e8d](https://github.com/scala/scala/commit/0f67e8d) | <notextile>SI-7853 A less ad-hoc place to call memberType</notextile>
[SI-7853](https://issues.scala-lang.org/browse/SI-7853) | [746f53e](https://github.com/scala/scala/commit/746f53e) | <notextile>SI-7853 An unsatisfying fix regression in explicit outer</notextile>
[SI-7847](https://issues.scala-lang.org/browse/SI-7847) | [6e2cadb](https://github.com/scala/scala/commit/6e2cadb) | <notextile>SI-7847 Static forwarders for case apply/unapply</notextile>
[SI-7841](https://issues.scala-lang.org/browse/SI-7841) | [cff8b56](https://github.com/scala/scala/commit/cff8b56) | <notextile>SI-7841 More robust unspecialization of names</notextile>
[SI-7841](https://issues.scala-lang.org/browse/SI-7841) | [4aad4eb](https://github.com/scala/scala/commit/4aad4eb) | <notextile>SI-7841 Remove AnyRef specialization from AbstractPartialFunction</notextile>
[SI-7841](https://issues.scala-lang.org/browse/SI-7841) | [dd9b286](https://github.com/scala/scala/commit/dd9b286) | <notextile>SI-7841 Remove commented out AnyRef specialization from Function{0,1}.</notextile>
[SI-6489](https://issues.scala-lang.org/browse/SI-6489) | [95fe195](https://github.com/scala/scala/commit/95fe195) | <notextile>SI-6489 parsing in macros should provide proper positions</notextile>
[SI-7304](https://issues.scala-lang.org/browse/SI-7304) | [5607bd1](https://github.com/scala/scala/commit/5607bd1) | <notextile>SI-7304 improve deprecation warnings for tree factory methods</notextile>
[SI-6701](https://issues.scala-lang.org/browse/SI-6701) | [545ee29](https://github.com/scala/scala/commit/545ee29) | <notextile>SI-6701 add SYNTHETIC flag to the reflection api</notextile>
[SI-7845](https://issues.scala-lang.org/browse/SI-7845) | [68b57fd](https://github.com/scala/scala/commit/68b57fd) | <notextile>SI-7845 Disable test for JSR 233</notextile>
[SI-7844](https://issues.scala-lang.org/browse/SI-7844) | [2e51296](https://github.com/scala/scala/commit/2e51296) | <notextile>SI-7844 Intellij setup.sh is not working for Ubuntu 12.04</notextile>
[SI-6666](https://issues.scala-lang.org/browse/SI-6666), [SI-7223](https://issues.scala-lang.org/browse/SI-7223) | [27d73ee](https://github.com/scala/scala/commit/27d73ee) | <notextile>SI-7223 More finesse in setting INCONSTRUCTOR</notextile>
[SI-6666](https://issues.scala-lang.org/browse/SI-6666), [SI-7007](https://issues.scala-lang.org/browse/SI-7007) | [38a488e](https://github.com/scala/scala/commit/38a488e) | <notextile>SI-7007 Test case shows we disallow premature `this` access</notextile>
[SI-1909](https://issues.scala-lang.org/browse/SI-1909), [SI-6666](https://issues.scala-lang.org/browse/SI-6666), [SI-3832](https://issues.scala-lang.org/browse/SI-3832), [SI-3832](https://issues.scala-lang.org/browse/SI-3832) | [f04257b](https://github.com/scala/scala/commit/f04257b) | <notextile>SI-3832 Don't lift methods in aux constructor trailing stats as STATIC</notextile>
[SI-3832](https://issues.scala-lang.org/browse/SI-3832) | [c2dc346](https://github.com/scala/scala/commit/c2dc346) | <notextile>SI-3832 Extract tracking of under-construction classes to a mixin</notextile>
[SI-3832](https://issues.scala-lang.org/browse/SI-3832), [SI-1909](https://issues.scala-lang.org/browse/SI-1909), [SI-1909](https://issues.scala-lang.org/browse/SI-1909) | [97255e7](https://github.com/scala/scala/commit/97255e7) | <notextile>SI-1909 Move tests from pos to run</notextile>
[SI-7843](https://issues.scala-lang.org/browse/SI-7843) | [b4671f0](https://github.com/scala/scala/commit/b4671f0) | <notextile>SI-7843 Restore JSR 223 service entry</notextile>
[SI-7839](https://issues.scala-lang.org/browse/SI-7839) | [ff57b76](https://github.com/scala/scala/commit/ff57b76) | <notextile>SI-7839 Final val breaks checkinit build</notextile>
[SI-7622](https://issues.scala-lang.org/browse/SI-7622) | [5edf50d](https://github.com/scala/scala/commit/5edf50d) | <notextile>SI-7622 Scaladoc and error message polish</notextile>
[SI-7622](https://issues.scala-lang.org/browse/SI-7622) | [1683c95](https://github.com/scala/scala/commit/1683c95) | <notextile>SI-7622 Clean Up Phase Assembly</notextile>
[SI-7622](https://issues.scala-lang.org/browse/SI-7622) | [f3731f9](https://github.com/scala/scala/commit/f3731f9) | <notextile>SI-7622 Plugins can be not enabled</notextile>
[SI-7622](https://issues.scala-lang.org/browse/SI-7622) | [79d6191](https://github.com/scala/scala/commit/79d6191) | <notextile>SI-7622 -Xshow-phases can show disabled phases</notextile>
[SI-7622](https://issues.scala-lang.org/browse/SI-7622) | [5912210](https://github.com/scala/scala/commit/5912210) | <notextile>SI-7622 Phases are enabled or not</notextile>
[SI-7622](https://issues.scala-lang.org/browse/SI-7622) | [26ad989](https://github.com/scala/scala/commit/26ad989) | <notextile>SI-7622 -Xgenerate-phase-graph is an info option</notextile>
[SI-7622](https://issues.scala-lang.org/browse/SI-7622) | [508ee77](https://github.com/scala/scala/commit/508ee77) | <notextile>SI-7622 Phase assembly is testable</notextile>
[SI-7818](https://issues.scala-lang.org/browse/SI-7818) | [cb028ba](https://github.com/scala/scala/commit/cb028ba) | <notextile>SI-7818 Cast our way out of extended existential angst</notextile>
[SI-7767](https://issues.scala-lang.org/browse/SI-7767) | [2391887](https://github.com/scala/scala/commit/2391887) | <notextile>SI-7767 Test case for Scaladoc on early initializers</notextile>
[SI-7767](https://issues.scala-lang.org/browse/SI-7767) | [48283ca](https://github.com/scala/scala/commit/48283ca) | <notextile>SI-7767 avoid rejecting Scaladoc comments in early initializers</notextile>
[SI-7269](https://issues.scala-lang.org/browse/SI-7269) | [fe9a3e9](https://github.com/scala/scala/commit/fe9a3e9) | <notextile>SI-7269 Rework MapLike#retains to account for desugaring change</notextile>
[SI-7814](https://issues.scala-lang.org/browse/SI-7814) | [a19babc](https://github.com/scala/scala/commit/a19babc) | <notextile>SI-7814 Updates the instrumented version of ScalaRuntime.</notextile>
[SI-7814](https://issues.scala-lang.org/browse/SI-7814) | [fb43ec8](https://github.com/scala/scala/commit/fb43ec8) | <notextile>SI-7814 Avoid init cycle between Predef, `package`, ScalaRuntime</notextile>
[SI-7652](https://issues.scala-lang.org/browse/SI-7652) | [7804cec](https://github.com/scala/scala/commit/7804cec) | <notextile>[nomaster] SI-7652 REPL extended quest for tools</notextile>
[SI-7652](https://issues.scala-lang.org/browse/SI-7652) | [8b10daf](https://github.com/scala/scala/commit/8b10daf) | <notextile>[nomaster] SI-7652 Bad tools fails loudly</notextile>
[SI-7801](https://issues.scala-lang.org/browse/SI-7801) | [fdd860d](https://github.com/scala/scala/commit/fdd860d) | <notextile>SI-7801 Fix a nightmarish bug in Symbols#adaptInfos</notextile>
[SI-7834](https://issues.scala-lang.org/browse/SI-7834) | [92bd4a7](https://github.com/scala/scala/commit/92bd4a7) | <notextile>SI-7834 Type equivalence of C.this and C.super.</notextile>
[SI-7708](https://issues.scala-lang.org/browse/SI-7708) | [f812a4c](https://github.com/scala/scala/commit/f812a4c) | <notextile>SI-7708 - Improve Bitset foreach performance</notextile>
[SI-7356](https://issues.scala-lang.org/browse/SI-7356), [SI-7356](https://issues.scala-lang.org/browse/SI-7356) | [4c4d324](https://github.com/scala/scala/commit/4c4d324) | <notextile>SI-7356 - Source.mkString performs painfully slow (...)</notextile>
[SI-7723](https://issues.scala-lang.org/browse/SI-7723) | [a455858](https://github.com/scala/scala/commit/a455858) | <notextile>SI-7723 better support for deconstruction of new expressions</notextile>
[SI-7803](https://issues.scala-lang.org/browse/SI-7803) | [546e940](https://github.com/scala/scala/commit/546e940) | <notextile>SI-7803 support for matching of anonymous function literals</notextile>
[SI-7196](https://issues.scala-lang.org/browse/SI-7196) | [f9d5e3d](https://github.com/scala/scala/commit/f9d5e3d) | <notextile>SI-7196 add support for refineStat splicing and extraction</notextile>
[SI-7810](https://issues.scala-lang.org/browse/SI-7810) | [455354b](https://github.com/scala/scala/commit/455354b) | <notextile>SI-7810 Reflect private constructor</notextile>
[SI-7817](https://issues.scala-lang.org/browse/SI-7817) | [b255617](https://github.com/scala/scala/commit/b255617) | <notextile>SI-7817 Fix regression in structural types</notextile>
[SI-7817](https://issues.scala-lang.org/browse/SI-7817) | [292134a](https://github.com/scala/scala/commit/292134a) | <notextile>SI-7817 Tests to show the foibles of mkAttributedRef</notextile>
[SI-7791](https://issues.scala-lang.org/browse/SI-7791) | [e8af579](https://github.com/scala/scala/commit/e8af579) | <notextile>SI-7791 Line number table reflects underlying file</notextile>
[SI-7805](https://issues.scala-lang.org/browse/SI-7805) | [06c1c78](https://github.com/scala/scala/commit/06c1c78) | <notextile>SI-7805 REPL -i startup</notextile>
[SI-7643](https://issues.scala-lang.org/browse/SI-7643) | [3e1631e](https://github.com/scala/scala/commit/3e1631e) | <notextile>SI-7643 Enable newPatternMatching in interactive.</notextile>
[SI-7149](https://issues.scala-lang.org/browse/SI-7149) | [989c3f8](https://github.com/scala/scala/commit/989c3f8) | <notextile>SI-7149 Use a WeakHashSet for type uniqueness</notextile>
[SI-7150](https://issues.scala-lang.org/browse/SI-7150) | [3ada703](https://github.com/scala/scala/commit/3ada703) | <notextile>SI-7150 Replace scala.reflect.internal.WeakHashSet</notextile>
[SI-7782](https://issues.scala-lang.org/browse/SI-7782) | [bce786f](https://github.com/scala/scala/commit/bce786f) | <notextile>SI-7782 Derive type skolems at the ground level</notextile>
[SI-4760](https://issues.scala-lang.org/browse/SI-4760) | [27d61a2](https://github.com/scala/scala/commit/27d61a2) | <notextile>SI-4760 Parser handles block-ending import</notextile>
[SI-7790](https://issues.scala-lang.org/browse/SI-7790) | [cb9f2b9](https://github.com/scala/scala/commit/cb9f2b9) | <notextile>[nomaster] SI-7790 No ScriptEngine in 2.10 build</notextile>
[SI-7775](https://issues.scala-lang.org/browse/SI-7775) | [9d5ed33](https://github.com/scala/scala/commit/9d5ed33) | <notextile>SI-7775 Harden against the shifting sands of System.getProperties</notextile>
[SI-7779](https://issues.scala-lang.org/browse/SI-7779) | [5dbc37d](https://github.com/scala/scala/commit/5dbc37d) | <notextile>SI-7779 Account for class name compactification in reflection</notextile>
[SI-7781](https://issues.scala-lang.org/browse/SI-7781) | [20b7ae6](https://github.com/scala/scala/commit/20b7ae6) | <notextile>SI-7781 Comments to SessionTest</notextile>
[SI-7781](https://issues.scala-lang.org/browse/SI-7781) | [534ced4](https://github.com/scala/scala/commit/534ced4) | <notextile>SI-7781 Improve test and add comment</notextile>
[SI-7781](https://issues.scala-lang.org/browse/SI-7781) | [2fc528e](https://github.com/scala/scala/commit/2fc528e) | <notextile>SI-7781 REPL stack trunc shows cause</notextile>
[SI-6240](https://issues.scala-lang.org/browse/SI-6240) | [d3c8a0b](https://github.com/scala/scala/commit/d3c8a0b) | <notextile>SI-6240 Synchronizes Names</notextile>
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
[SI-7763](https://issues.scala-lang.org/browse/SI-7763) | [6ad8eb4](https://github.com/scala/scala/commit/6ad8eb4) | <notextile>SI-7763 Don't eliminate CHECK_CAST in dead code elimination.</notextile>
[SI-7763](https://issues.scala-lang.org/browse/SI-7763) | [26dfa54](https://github.com/scala/scala/commit/26dfa54) | <notextile>SI-7763 Avoid dropping casts in erasure</notextile>
[SI-7785](https://issues.scala-lang.org/browse/SI-7785) | [3eebc99](https://github.com/scala/scala/commit/3eebc99) | <notextile>SI-7785 Preserve TypeVar suspension through TypeMaps</notextile>
[SI-7501](https://issues.scala-lang.org/browse/SI-7501) | [d877d0c](https://github.com/scala/scala/commit/d877d0c) | <notextile>SI-7501 Pickler: owner adjustment for param syms in annotation args</notextile>
[SI-6164](https://issues.scala-lang.org/browse/SI-6164) | [cd1c070](https://github.com/scala/scala/commit/cd1c070) | <notextile>GenBCode: decouple ClassNode building from encoding as byte array</notextile>
[SI-7407](https://issues.scala-lang.org/browse/SI-7407) | [2a659cf](https://github.com/scala/scala/commit/2a659cf) | <notextile>SI-7407 fixed in GenBCode but beware, it remains a bug in GenASM</notextile>
[SI-6507](https://issues.scala-lang.org/browse/SI-6507), [SI-6507](https://issues.scala-lang.org/browse/SI-6507) | [654fdb1](https://github.com/scala/scala/commit/654fdb1) | <notextile>SI-6507 completely sidestep handlers in REPL when :silent in on</notextile>
[SI-1980](https://issues.scala-lang.org/browse/SI-1980) | [6634d82](https://github.com/scala/scala/commit/6634d82) | <notextile>SI-1980 A lint warning for by-name parameters in right assoc methods</notextile>
[SI-7740](https://issues.scala-lang.org/browse/SI-7740) | [470c699](https://github.com/scala/scala/commit/470c699) | <notextile>SI-7740 Trim stack trace before printing in REPL</notextile>
[SI-6797](https://issues.scala-lang.org/browse/SI-6797) | [a0a2aa2](https://github.com/scala/scala/commit/a0a2aa2) | <notextile>SI-6797 Test case for already-fixed DelayedInit bug</notextile>
[SI-7756](https://issues.scala-lang.org/browse/SI-7756) | [3df1d77](https://github.com/scala/scala/commit/3df1d77) | <notextile>SI-7756 Uncripple refchecks in case bodies</notextile>
[SI-7729](https://issues.scala-lang.org/browse/SI-7729) | [48d14aa](https://github.com/scala/scala/commit/48d14aa) | <notextile>SI-7729 Fix broken windows build</notextile>
[SI-7757](https://issues.scala-lang.org/browse/SI-7757) | [a721df7](https://github.com/scala/scala/commit/a721df7) | <notextile>SI-7757 add additional test case with annotation on the next line</notextile>
[SI-7757](https://issues.scala-lang.org/browse/SI-7757) | [2131166](https://github.com/scala/scala/commit/2131166) | <notextile>SI-7757 disallow constructor annotations on traits</notextile>
[SI-7472](https://issues.scala-lang.org/browse/SI-7472) | [a905d0e](https://github.com/scala/scala/commit/a905d0e) | <notextile>Revert &quot;Minor improvement in pattern typer inference.&quot;</notextile>
[SI-5903](https://issues.scala-lang.org/browse/SI-5903) | [84a3359](https://github.com/scala/scala/commit/84a3359) | <notextile>SI-5903 extractor macros</notextile>
[SI-4425](https://issues.scala-lang.org/browse/SI-4425) | [35775a8](https://github.com/scala/scala/commit/35775a8) | <notextile>SI-4425 do some validity checking on unapplies.</notextile>
[SI-2486](https://issues.scala-lang.org/browse/SI-2486) | [35122d6](https://github.com/scala/scala/commit/35122d6) | <notextile>Minor improvement in pattern typer inference.</notextile>
[SI-7704](https://issues.scala-lang.org/browse/SI-7704) | [645019e](https://github.com/scala/scala/commit/645019e) | <notextile>SI-7704 Fix partest's test category selection (again)</notextile>
[SI-6507](https://issues.scala-lang.org/browse/SI-6507) | [6db8a52](https://github.com/scala/scala/commit/6db8a52) | <notextile>SI-6507 do not call .toString on REPL results when :silent is on.</notextile>
[SI-7630](https://issues.scala-lang.org/browse/SI-7630) | [bfdf775](https://github.com/scala/scala/commit/bfdf775) | <notextile>SI-7630 [Avian] Skip test run/repl-javap-outdir-funs on Avian</notextile>
[SI-7564](https://issues.scala-lang.org/browse/SI-7564) | [b8d71c5](https://github.com/scala/scala/commit/b8d71c5) | <notextile>SI-7564 [Avian] Whitespace fixes to run/tailcalls.check</notextile>
[SI-7681](https://issues.scala-lang.org/browse/SI-7681) | [bcf35bb](https://github.com/scala/scala/commit/bcf35bb) | <notextile>SI-7681 Remove scala.tools.nsc.io.DaemonThreadFactory</notextile>
[SI-6843](https://issues.scala-lang.org/browse/SI-6843) | [e1bef09](https://github.com/scala/scala/commit/e1bef09) | <notextile>SI-6843 well-positioned syntax errors for quasiquotes</notextile>
[SI-7331](https://issues.scala-lang.org/browse/SI-7331) | [b4598b4](https://github.com/scala/scala/commit/b4598b4) | <notextile>SI-7331 remove all the wrapping code from toolbox</notextile>
[SI-7731](https://issues.scala-lang.org/browse/SI-7731) | [5439c4c](https://github.com/scala/scala/commit/5439c4c) | <notextile>SI-7731 make CannotHaveAttrs more consistent</notextile>
[SI-7715](https://issues.scala-lang.org/browse/SI-7715) | [67d94f6](https://github.com/scala/scala/commit/67d94f6) | <notextile>SI-7715 String inpatternation s&quot;$_&quot; for s&quot;${_}&quot;</notextile>
[SI-7470](https://issues.scala-lang.org/browse/SI-7470) | [21a8c6c](https://github.com/scala/scala/commit/21a8c6c) | <notextile>SI-7470 implements fundep materialization</notextile>
[SI-7658](https://issues.scala-lang.org/browse/SI-7658) | [fbad993](https://github.com/scala/scala/commit/fbad993) | <notextile>SI-7658 Prevent StackOverflowError in ScalaRunTime.stringOf</notextile>
[SI-7704](https://issues.scala-lang.org/browse/SI-7704) | [aa5099e](https://github.com/scala/scala/commit/aa5099e) | <notextile>SI-7704 Fix partest's test category selection</notextile>
[SI-7544](https://issues.scala-lang.org/browse/SI-7544) | [e132de3](https://github.com/scala/scala/commit/e132de3) | <notextile>SI-7544 Interpolation message for %% literal</notextile>
[SI-7624](https://issues.scala-lang.org/browse/SI-7624) | [f2de2c4](https://github.com/scala/scala/commit/f2de2c4) | <notextile>SI-7624 Fix -feature warnings in scala/tools/scalap</notextile>
[SI-7624](https://issues.scala-lang.org/browse/SI-7624) | [6056f7e](https://github.com/scala/scala/commit/6056f7e) | <notextile>SI-7624 Replace new{Term,Type}Name with {Term,Type}Name</notextile>
[SI-7624](https://issues.scala-lang.org/browse/SI-7624) | [0459db4](https://github.com/scala/scala/commit/0459db4) | <notextile>SI-7624 Fix a few remaining -Xlint warnings ... in various places. This includes</notextile>
[SI-7624](https://issues.scala-lang.org/browse/SI-7624) | [f670e28](https://github.com/scala/scala/commit/f670e28) | <notextile>SI-7624 Fix -Xlint warnings in AnyVal-related code</notextile>
[SI-7750](https://issues.scala-lang.org/browse/SI-7750), [SI-7624](https://issues.scala-lang.org/browse/SI-7624) | [7943084](https://github.com/scala/scala/commit/7943084) | <notextile>SI-7624 Fix -feature warnings and build with -feature</notextile>
[SI-7737](https://issues.scala-lang.org/browse/SI-7737) | [93e9623](https://github.com/scala/scala/commit/93e9623) | <notextile>SI-7737 Regex matches Char</notextile>
[SI-7265](https://issues.scala-lang.org/browse/SI-7265) | [8f5a892](https://github.com/scala/scala/commit/8f5a892) | <notextile>SI-7265 javaSpecVersion, adjust isJava... tests</notextile>
[SI-7690](https://issues.scala-lang.org/browse/SI-7690) | [26aebfa](https://github.com/scala/scala/commit/26aebfa) | <notextile>SI-7690 ghost error message fails compile</notextile>
[SI-7729](https://issues.scala-lang.org/browse/SI-7729) | [a992744](https://github.com/scala/scala/commit/a992744) | <notextile>SI-7729 Does Par-Test work?  Absolutely!</notextile>
[SI-2411](https://issues.scala-lang.org/browse/SI-2411) | [b741e8a](https://github.com/scala/scala/commit/b741e8a) | <notextile>Make map2Conserve occupy constant stack space in spirit of SI-2411</notextile>
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
[SI-7668](https://issues.scala-lang.org/browse/SI-7668) | [32fc8fc](https://github.com/scala/scala/commit/32fc8fc) | <notextile>SI-7668 Better return type inheritance for dep. method types</notextile>
[SI-7669](https://issues.scala-lang.org/browse/SI-7669) | [635892e](https://github.com/scala/scala/commit/635892e) | <notextile>SI-7669 Fix exhaustivity warnings for recursive ADTs.</notextile>
[SI-7620](https://issues.scala-lang.org/browse/SI-7620) | [6b16548](https://github.com/scala/scala/commit/6b16548) | <notextile>SI-7620 Remove floating-point-literals-without-digit-after-dot</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [eb7d7f3](https://github.com/scala/scala/commit/eb7d7f3) | <notextile>SI-6811 Deprecate scala.text</notextile>
[SI-7592](https://issues.scala-lang.org/browse/SI-7592) | [559d5ab](https://github.com/scala/scala/commit/559d5ab) | <notextile>SI-7592 Deprecate s.c.m.DefaultMapModel</notextile>
[SI-7679](https://issues.scala-lang.org/browse/SI-7679) | [cf30b40](https://github.com/scala/scala/commit/cf30b40) | <notextile>SI-7679 Remove deprecated StandardScalaSettings#make</notextile>
[SI-7681](https://issues.scala-lang.org/browse/SI-7681) | [efa5689](https://github.com/scala/scala/commit/efa5689) | <notextile>SI-7681 Remove dead code in s.t.n.s.AbsScalaSettings</notextile>
[SI-7681](https://issues.scala-lang.org/browse/SI-7681) | [0a3f340](https://github.com/scala/scala/commit/0a3f340) | <notextile>SI-7681 Clean up scala.reflect.internal.util.TableDef ... now that scala.tools.n</notextile>
[SI-7681](https://issues.scala-lang.org/browse/SI-7681) | [dde9e90](https://github.com/scala/scala/commit/dde9e90) | <notextile>SI-7681 Remove scala.tools.nsc.Phases</notextile>
[SI-7681](https://issues.scala-lang.org/browse/SI-7681) | [150968c](https://github.com/scala/scala/commit/150968c) | <notextile>SI-7681 Remove s.t.n.d.Changes (dead code)</notextile>
[SI-7689](https://issues.scala-lang.org/browse/SI-7689) | [91214da](https://github.com/scala/scala/commit/91214da) | <notextile>SI-7689 Fix typing regression with default arguments</notextile>
[SI-7695](https://issues.scala-lang.org/browse/SI-7695) | [b041fdc](https://github.com/scala/scala/commit/b041fdc) | <notextile>SI-7695 Macro debug output on -explaintypes</notextile>
[SI-7488](https://issues.scala-lang.org/browse/SI-7488) | [1010a32](https://github.com/scala/scala/commit/1010a32) | <notextile>SI-7488 REPL javap finds new style delayedEndpoint</notextile>
[SI-7650](https://issues.scala-lang.org/browse/SI-7650) | [8fbd68c](https://github.com/scala/scala/commit/8fbd68c) | <notextile>SI-7650 No bang expansions in REPL jline</notextile>
[SI-7592](https://issues.scala-lang.org/browse/SI-7592) | [0c48ec1](https://github.com/scala/scala/commit/0c48ec1) | <notextile>SI-7592 Remove scala.tools.nsc.util.MultiHashMap</notextile>
[SI-7174](https://issues.scala-lang.org/browse/SI-7174) | [415dda4](https://github.com/scala/scala/commit/415dda4) | <notextile>SI-7174 Fix initialization issues</notextile>
[SI-4684](https://issues.scala-lang.org/browse/SI-4684) | [e7468f3](https://github.com/scala/scala/commit/e7468f3) | <notextile>SI-4684 Repl supports raw paste</notextile>
[SI-4684](https://issues.scala-lang.org/browse/SI-4684) | [816a444](https://github.com/scala/scala/commit/816a444) | <notextile>SI-4684 Repl supports whole-file paste</notextile>
[SI-6812](https://issues.scala-lang.org/browse/SI-6812), [SI-7487](https://issues.scala-lang.org/browse/SI-7487) | [be39391](https://github.com/scala/scala/commit/be39391) | <notextile>SI-7487 Revert &quot;Removed -Ymacro-no-expand.&quot;</notextile>
[SI-6419](https://issues.scala-lang.org/browse/SI-6419) | [72298b8](https://github.com/scala/scala/commit/72298b8) | <notextile>SI-6419 Repl save session command</notextile>
[SI-4594](https://issues.scala-lang.org/browse/SI-4594) | [596b853](https://github.com/scala/scala/commit/596b853) | <notextile>SI-4594 Repl settings command</notextile>
[SI-4594](https://issues.scala-lang.org/browse/SI-4594) | [4222849](https://github.com/scala/scala/commit/4222849) | <notextile>SI-4594 Enable mutating mutable multi settings</notextile>
[SI-1067](https://issues.scala-lang.org/browse/SI-1067), [SI-7637](https://issues.scala-lang.org/browse/SI-7637) | [33b45ee](https://github.com/scala/scala/commit/33b45ee) | <notextile>SI-7637 Repl edit command</notextile>
[SI-6574](https://issues.scala-lang.org/browse/SI-6574) | [a90d1f0](https://github.com/scala/scala/commit/a90d1f0) | <notextile>SI-6574 Support @tailrec for extension methods.</notextile>
[SI-7638](https://issues.scala-lang.org/browse/SI-7638) | [8329a64](https://github.com/scala/scala/commit/8329a64) | <notextile>SI-7638 Superaccessor lookup after specialization</notextile>
[SI-6221](https://issues.scala-lang.org/browse/SI-6221) | [ede32ba](https://github.com/scala/scala/commit/ede32ba) | <notextile>SI-6221 inference with Function1 subtypes.</notextile>
[SI-7614](https://issues.scala-lang.org/browse/SI-7614) | [ece1834](https://github.com/scala/scala/commit/ece1834) | <notextile>SI-7614 Minimize the times of evaluation f in TraversableOnce.maxBy/minBy.</notextile>
[SI-7582](https://issues.scala-lang.org/browse/SI-7582) | [1c69dbc](https://github.com/scala/scala/commit/1c69dbc) | <notextile>SI-7582 Only inline accessible calls to package-private Java code</notextile>
[SI-7582](https://issues.scala-lang.org/browse/SI-7582) | [1391c51](https://github.com/scala/scala/commit/1391c51) | <notextile>SI-7582 ClassfileParser: populate privateWithin of Java module class</notextile>
[SI-7592](https://issues.scala-lang.org/browse/SI-7592) | [f94d86e](https://github.com/scala/scala/commit/f94d86e) | <notextile>SI-7592 Replace s.t.n.u.TreeSet with s.c.m.TreeSet</notextile>
[SI-7603](https://issues.scala-lang.org/browse/SI-7603), [SI-7603](https://issues.scala-lang.org/browse/SI-7603) | [eebaae5](https://github.com/scala/scala/commit/eebaae5) | <notextile>SI-7603 Speculative fix for annotation binding error</notextile>
[SI-7579](https://issues.scala-lang.org/browse/SI-7579), [SI-7344](https://issues.scala-lang.org/browse/SI-7344) | [2285493](https://github.com/scala/scala/commit/2285493) | <notextile>SI-7344 Specialize methods in private scopes</notextile>
[SI-7571](https://issues.scala-lang.org/browse/SI-7571) | [e7ac254](https://github.com/scala/scala/commit/e7ac254) | <notextile>SI-7571 Allow nesting of anonymous classes in value classes</notextile>
[SI-7343](https://issues.scala-lang.org/browse/SI-7343) | [c43b504](https://github.com/scala/scala/commit/c43b504) | <notextile>SI-7343 Fixed phase ordering in specialization</notextile>
[SI-7591](https://issues.scala-lang.org/browse/SI-7591) | [6090709](https://github.com/scala/scala/commit/6090709) | <notextile>SI-7591 Make s.t.p.n.ConsoleRunner use s.t.c.CommandLine</notextile>
[SI-7591](https://issues.scala-lang.org/browse/SI-7591) | [a8f9c2e](https://github.com/scala/scala/commit/a8f9c2e) | <notextile>SI-7591 Minor cleanups</notextile>
[SI-7591](https://issues.scala-lang.org/browse/SI-7591) | [f5a18b5](https://github.com/scala/scala/commit/f5a18b5) | <notextile>SI-7591 Move command-line spec usage demo to tests</notextile>
[SI-7151](https://issues.scala-lang.org/browse/SI-7151) | [8281ab5](https://github.com/scala/scala/commit/8281ab5) | <notextile>catching up with a fix in master after this PR was submitted</notextile>
[SI-5031](https://issues.scala-lang.org/browse/SI-5031), [SI-5031](https://issues.scala-lang.org/browse/SI-5031) | [94297df](https://github.com/scala/scala/commit/94297df) | <notextile>SI-5031 fixed in GenBCode</notextile>
[SI-5031](https://issues.scala-lang.org/browse/SI-5031), [SI-7122](https://issues.scala-lang.org/browse/SI-7122) | [22ee2df](https://github.com/scala/scala/commit/22ee2df) | <notextile>new bytecode emitter, GenBCode, for now under a flag</notextile>
[SI-7590](https://issues.scala-lang.org/browse/SI-7590) | [c005287](https://github.com/scala/scala/commit/c005287) | <notextile>SI-7590 TreeSet should fail fast if Ordering is null</notextile>
[SI-7511](https://issues.scala-lang.org/browse/SI-7511) | [4cbb6a9](https://github.com/scala/scala/commit/4cbb6a9) | <notextile>SI-7511 Remove indirection of numeric methods</notextile>
[SI-7579](https://issues.scala-lang.org/browse/SI-7579), [SI-7344](https://issues.scala-lang.org/browse/SI-7344) | [3216321](https://github.com/scala/scala/commit/3216321) | <notextile>SI-7344 Specialize methods in private scopes</notextile>
[SI-7600](https://issues.scala-lang.org/browse/SI-7600) | [c7ee272](https://github.com/scala/scala/commit/c7ee272) | <notextile>SI-7600 [Avian] Skip tests r/stream_length and r/t4294</notextile>
[SI-3936](https://issues.scala-lang.org/browse/SI-3936), [SI-3936](https://issues.scala-lang.org/browse/SI-3936), [SI-3936](https://issues.scala-lang.org/browse/SI-3936) | [cac899c](https://github.com/scala/scala/commit/cac899c) | <notextile>SI-3936 - add test case to show that SI-3936 is already fixed</notextile>
[SI-7599](https://issues.scala-lang.org/browse/SI-7599) | [57a6447](https://github.com/scala/scala/commit/57a6447) | <notextile>SI-7599 [Avian] Prevent TCO in test to inspect stack</notextile>
[SI-6855](https://issues.scala-lang.org/browse/SI-6855) | [990c2b0](https://github.com/scala/scala/commit/990c2b0) | <notextile>SI-6855: REPL emits error on partial pastie</notextile>
[SI-7584](https://issues.scala-lang.org/browse/SI-7584) | [9f2b289](https://github.com/scala/scala/commit/9f2b289) | <notextile>SI-7584 Test and spurious warning fix for by-name closures</notextile>
[SI-7584](https://issues.scala-lang.org/browse/SI-7584) | [83ae74c](https://github.com/scala/scala/commit/83ae74c) | <notextile>SI-7584 Fix typer regression with by-name parameter types</notextile>
[SI-7569](https://issues.scala-lang.org/browse/SI-7569) | [272b165](https://github.com/scala/scala/commit/272b165) | <notextile>SI-7569 Fix end position in PostfixSelect tree</notextile>
[SI-6994](https://issues.scala-lang.org/browse/SI-6994), [SI-7433](https://issues.scala-lang.org/browse/SI-7433) | [58abe39](https://github.com/scala/scala/commit/58abe39) | <notextile>SI-7433 Fix spurious warning about catching control throwable</notextile>
[SI-7439](https://issues.scala-lang.org/browse/SI-7439) | [a954321](https://github.com/scala/scala/commit/a954321) | <notextile>SI-7439 Avoid NPE in `isMonomorphicType` with stub symbols.</notextile>
[SI-7292](https://issues.scala-lang.org/browse/SI-7292), [SI-7292](https://issues.scala-lang.org/browse/SI-7292) | [48bcc18](https://github.com/scala/scala/commit/48bcc18) | <notextile>SI-7292 Fixes test failures by updating *.check files</notextile>
[SI-7292](https://issues.scala-lang.org/browse/SI-7292) | [36da622](https://github.com/scala/scala/commit/36da622) | <notextile>SI-7292 Deprecate octal escape literals</notextile>
[SI-6899](https://issues.scala-lang.org/browse/SI-6899) | [2f0e5ec](https://github.com/scala/scala/commit/2f0e5ec) | <notextile>SI-6899, prohibit dangerous, useless implicit conversions.</notextile>
[SI-7364](https://issues.scala-lang.org/browse/SI-7364) | [5c4be40](https://github.com/scala/scala/commit/5c4be40) | <notextile>SI-7364 Allow raw types in parent position in Java sources</notextile>
[SI-5676](https://issues.scala-lang.org/browse/SI-5676), [SI-7151](https://issues.scala-lang.org/browse/SI-7151) | [b49b6cf](https://github.com/scala/scala/commit/b49b6cf) | <notextile>SI-7151 Emit final in bytecode for final inner classes.</notextile>
[SI-4515](https://issues.scala-lang.org/browse/SI-4515), [SI-5022](https://issues.scala-lang.org/browse/SI-5022) | [8c0f444](https://github.com/scala/scala/commit/8c0f444) | <notextile>SI-5022 Retain precise existentials through pattern matching</notextile>
[SI-7498](https://issues.scala-lang.org/browse/SI-7498) | [c71fa58](https://github.com/scala/scala/commit/c71fa58) | <notextile>[backport] SI-7498 ParTrieMap.foreach no longer crashes</notextile>
[SI-7479](https://issues.scala-lang.org/browse/SI-7479) | [9cabcf2](https://github.com/scala/scala/commit/9cabcf2) | <notextile>SI-7479 Make test/files/run/tailcalls.scala pass on Avian</notextile>
[SI-7479](https://issues.scala-lang.org/browse/SI-7479) | [da7c064](https://github.com/scala/scala/commit/da7c064) | <notextile>SI-7479 Add avian option to partest's diff filter...</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [de5267d](https://github.com/scala/scala/commit/de5267d) | <notextile>SI-6811 Remove scala.annotation.cloneable</notextile>
[SI-6747](https://issues.scala-lang.org/browse/SI-6747) | [528808c](https://github.com/scala/scala/commit/528808c) | <notextile>SI-6747 Deprecate Range#{numRange,last,terminal}Element{s,}</notextile>
[SI-7214](https://issues.scala-lang.org/browse/SI-7214), [SI-7505](https://issues.scala-lang.org/browse/SI-7505) | [d5288f8](https://github.com/scala/scala/commit/d5288f8) | <notextile>SI-7505 Test case for pattern matcher + type alias bug</notextile>
[SI-6841](https://issues.scala-lang.org/browse/SI-6841) | [608f577](https://github.com/scala/scala/commit/608f577) | <notextile>SI-6841 Fix bug at the intersection of DelayedInit and named args</notextile>
[SI-7558](https://issues.scala-lang.org/browse/SI-7558) | [dd5fa60](https://github.com/scala/scala/commit/dd5fa60) | <notextile>SI-7558 Fix capture of free local vars in toolbox compiler</notextile>
[SI-7556](https://issues.scala-lang.org/browse/SI-7556) | [28c5f73](https://github.com/scala/scala/commit/28c5f73) | <notextile>SI-7556 Fix runtime reflection involving ScalaLongSignature</notextile>
[SI-6976](https://issues.scala-lang.org/browse/SI-6976), [SI-7264](https://issues.scala-lang.org/browse/SI-7264) | [86e6e92](https://github.com/scala/scala/commit/86e6e92) | <notextile>SI-7264 Initialize owner when searching for companion.</notextile>
[SI-7498](https://issues.scala-lang.org/browse/SI-7498) | [fcec275](https://github.com/scala/scala/commit/fcec275) | <notextile>SI-7498 ParTrieMap.foreach no longer crashes</notextile>
[SI-6503](https://issues.scala-lang.org/browse/SI-6503) | [c77edc4](https://github.com/scala/scala/commit/c77edc4) | <notextile>SI-6503 Fix scaladoc output to generate valid HTML5</notextile>
[SI-7519](https://issues.scala-lang.org/browse/SI-7519) | [32b5d50](https://github.com/scala/scala/commit/32b5d50) | <notextile>SI-7519 Less brutal attribute resetting in adapt fallback</notextile>
[SI-6308](https://issues.scala-lang.org/browse/SI-6308) | [8518709](https://github.com/scala/scala/commit/8518709) | <notextile>SI-6308 Specialize methods that have some unspecialized params</notextile>
[SI-7564](https://issues.scala-lang.org/browse/SI-7564) | [1d9abd2](https://github.com/scala/scala/commit/1d9abd2) | <notextile>SI-7564 Fix detection of reflective calls on Avian</notextile>
[SI-2464](https://issues.scala-lang.org/browse/SI-2464) | [2a19cd5](https://github.com/scala/scala/commit/2a19cd5) | <notextile>SI-2464 Resiliance against missing InnerClass attributes</notextile>
[SI-7418](https://issues.scala-lang.org/browse/SI-7418) | [b42bb18](https://github.com/scala/scala/commit/b42bb18) | <notextile>SI-7418 Avoid concurrent use of compiler in REPL startup</notextile>
[SI-7149](https://issues.scala-lang.org/browse/SI-7149) | [746d85b](https://github.com/scala/scala/commit/746d85b) | <notextile>SI-7149 Use a WeakHashSet for type uniqueness</notextile>
[SI-7150](https://issues.scala-lang.org/browse/SI-7150) | [ad63f36](https://github.com/scala/scala/commit/ad63f36) | <notextile>SI-7150 Replace scala.reflect.internal.WeakHashSet</notextile>
[SI-7532](https://issues.scala-lang.org/browse/SI-7532) | [75251f7](https://github.com/scala/scala/commit/75251f7) | <notextile>SI-7532 Fix regression in Java inner classfile reader</notextile>
[SI-6846](https://issues.scala-lang.org/browse/SI-6846), [SI-7517](https://issues.scala-lang.org/browse/SI-7517) | [403eadd](https://github.com/scala/scala/commit/403eadd) | <notextile>SI-7517 Fix higher kinded type inference regression</notextile>
[SI-7516](https://issues.scala-lang.org/browse/SI-7516), [SI-7234](https://issues.scala-lang.org/browse/SI-7234) | [851e399](https://github.com/scala/scala/commit/851e399) | <notextile>SI-7516 Revert &quot;SI-7234 Make named args play nice w. depmet types&quot;</notextile>
[SI-7486](https://issues.scala-lang.org/browse/SI-7486) | [de12ca6](https://github.com/scala/scala/commit/de12ca6) | <notextile>SI-7486 Regressions in implicit search.</notextile>
[SI-7238](https://issues.scala-lang.org/browse/SI-7238), [SI-7509](https://issues.scala-lang.org/browse/SI-7509) | [d9c8ccc](https://github.com/scala/scala/commit/d9c8ccc) | <notextile>SI-7509 Avoid crasher as erronous args flow through NamesDefaults</notextile>
[SI-7507](https://issues.scala-lang.org/browse/SI-7507) | [d2faeb9](https://github.com/scala/scala/commit/d2faeb9) | <notextile>SI-7507 Fix lookup of private[this] member in presence of self type.</notextile>
[SI-7375](https://issues.scala-lang.org/browse/SI-7375) | [4dc3a33](https://github.com/scala/scala/commit/4dc3a33) | <notextile>SI-7375 ClassTag for value class aliases</notextile>
[SI-6138](https://issues.scala-lang.org/browse/SI-6138) | [b941551](https://github.com/scala/scala/commit/b941551) | <notextile>SI-6138 Centralize and refine detection of `getClass` calls</notextile>
[SI-7236](https://issues.scala-lang.org/browse/SI-7236), [SI-7237](https://issues.scala-lang.org/browse/SI-7237), [SI-7391](https://issues.scala-lang.org/browse/SI-7391) | [f92ef91](https://github.com/scala/scala/commit/f92ef91) | <notextile>SI-7391 Always use ForkJoin in Scala actors on ... ... Java 6 and above (except </notextile>
[SI-7473](https://issues.scala-lang.org/browse/SI-7473) | [5b54681](https://github.com/scala/scala/commit/5b54681) | <notextile>SI-7473 Bad for expr crashes postfix</notextile>
[SI-7421](https://issues.scala-lang.org/browse/SI-7421) | [e18e48d](https://github.com/scala/scala/commit/e18e48d) | <notextile>SI-7421 remove unneeded extra-attachement in maven deploy</notextile>
[SI-7497](https://issues.scala-lang.org/browse/SI-7497) | [d38e8ae](https://github.com/scala/scala/commit/d38e8ae) | <notextile>SI-7497 Fix scala.util.Properties.isMac</notextile>
[SI-7517](https://issues.scala-lang.org/browse/SI-7517) | [278305a](https://github.com/scala/scala/commit/278305a) | <notextile>Revert &quot;SI-7517 type constructors too eagerly normalized.&quot;</notextile>
[SI-7520](https://issues.scala-lang.org/browse/SI-7520) | [3c21aa3](https://github.com/scala/scala/commit/3c21aa3) | <notextile>SI-7520 bug in subtyping.</notextile>
[SI-7517](https://issues.scala-lang.org/browse/SI-7517) | [14534c6](https://github.com/scala/scala/commit/14534c6) | <notextile>SI-7517 type constructors too eagerly normalized.</notextile>
[SI-7461](https://issues.scala-lang.org/browse/SI-7461) | [4324900](https://github.com/scala/scala/commit/4324900) | <notextile>SI-7461 c.typeCheck(silent = true) now suppresses ambiguous errors</notextile>
[SI-6309](https://issues.scala-lang.org/browse/SI-6309) | [801720b](https://github.com/scala/scala/commit/801720b) | <notextile>SI-6309 Test case for early-init / private[this] crasher.</notextile>
[SI-7542](https://issues.scala-lang.org/browse/SI-7542) | [f281de8](https://github.com/scala/scala/commit/f281de8) | <notextile>Finalized math.E and math.Pi.</notextile>
[SI-7088](https://issues.scala-lang.org/browse/SI-7088) | [e26f5c4](https://github.com/scala/scala/commit/e26f5c4) | <notextile>SI-7088 Array crasher in erasure.</notextile>
[SI-6039](https://issues.scala-lang.org/browse/SI-6039) | [9c29723](https://github.com/scala/scala/commit/9c29723) | <notextile>Revert &quot;SI-6039 Harden against irrelevant filesystem details&quot;</notextile>
[SI-7399](https://issues.scala-lang.org/browse/SI-7399) | [e230409](https://github.com/scala/scala/commit/e230409) | <notextile>SI-7399 : Take scala.concurrent.context.maxThreads into account</notextile>
[SI-7474](https://issues.scala-lang.org/browse/SI-7474) | [bcbe38d](https://github.com/scala/scala/commit/bcbe38d) | <notextile>SI-7474 Parallel collections: End the exception handling madness</notextile>
[SI-7502](https://issues.scala-lang.org/browse/SI-7502) | [84d9b52](https://github.com/scala/scala/commit/84d9b52) | <notextile>SI-7502 removing non-existent element from ListMap returns same map.</notextile>
[SI-7469](https://issues.scala-lang.org/browse/SI-7469) | [4250ce1](https://github.com/scala/scala/commit/4250ce1) | <notextile>SI-7469 Remove deprecated elements in Java{Conversions,Converters}</notextile>
[SI-7410](https://issues.scala-lang.org/browse/SI-7410) | [63bd527](https://github.com/scala/scala/commit/63bd527) | <notextile>SI-7410 REPL uses improved tools.jar locator</notextile>
[SI-7198](https://issues.scala-lang.org/browse/SI-7198) | [e037c9a](https://github.com/scala/scala/commit/e037c9a) | <notextile>SI-7198 Par-Test uses filters files</notextile>
[SI-7003](https://issues.scala-lang.org/browse/SI-7003) | [99b4d95](https://github.com/scala/scala/commit/99b4d95) | <notextile>SI-7003 Partest redirects stderr to log file</notextile>
[SI-7287](https://issues.scala-lang.org/browse/SI-7287) | [e5e45b0](https://github.com/scala/scala/commit/e5e45b0) | <notextile>SI-7287 include all compiler sources in -src.jar</notextile>
[SI-7499](https://issues.scala-lang.org/browse/SI-7499), [SI-7319](https://issues.scala-lang.org/browse/SI-7319) | [d64de5b](https://github.com/scala/scala/commit/d64de5b) | <notextile>SI-7499 Additional test case for SI-7319</notextile>
[SI-3425](https://issues.scala-lang.org/browse/SI-3425) | [a2ad291](https://github.com/scala/scala/commit/a2ad291) | <notextile>SI-3425 erasure crash with refinement members.</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [3e1a075](https://github.com/scala/scala/commit/3e1a075) | <notextile>SI-6811 Deprecate scala.util.parsing.json</notextile>
[SI-7436](https://issues.scala-lang.org/browse/SI-7436) | [7c90830](https://github.com/scala/scala/commit/7c90830) | <notextile>SI-7436 Varargs awareness for super param aliasing.</notextile>
[SI-6446](https://issues.scala-lang.org/browse/SI-6446), [SI-7494](https://issues.scala-lang.org/browse/SI-7494) | [4ab66d1](https://github.com/scala/scala/commit/4ab66d1) | <notextile>SI-7494 Tests for status quo</notextile>
[SI-7494](https://issues.scala-lang.org/browse/SI-7494) | [e0bd62c](https://github.com/scala/scala/commit/e0bd62c) | <notextile>SI-7494 Each plugin must only be instantiated once.</notextile>
[SI-7427](https://issues.scala-lang.org/browse/SI-7427) | [3fb3175](https://github.com/scala/scala/commit/3fb3175) | <notextile>SI-7427 stop crashing under -Ydebug.</notextile>
[SI-7201](https://issues.scala-lang.org/browse/SI-7201) | [08c7293](https://github.com/scala/scala/commit/08c7293) | <notextile>SI-7201 scaladoc url in scala-(library,actors,swing,reflect) pom</notextile>
[SI-6424](https://issues.scala-lang.org/browse/SI-6424) | [12a130d](https://github.com/scala/scala/commit/12a130d) | <notextile>SI-6424 Scaladoc: Use mapNodes.get(_) to avoid NoSuchElementException</notextile>
[SI-6548](https://issues.scala-lang.org/browse/SI-6548), [SI-7359](https://issues.scala-lang.org/browse/SI-7359) | [7f9feba](https://github.com/scala/scala/commit/7f9feba) | <notextile>[backport #1727] SI-7359 cyclic nested java class</notextile>
[SI-7486](https://issues.scala-lang.org/browse/SI-7486) | [dd33e28](https://github.com/scala/scala/commit/dd33e28) | <notextile>SI-7486 regression in implicit resolution.</notextile>
[SI-7492](https://issues.scala-lang.org/browse/SI-7492) | [b11324a](https://github.com/scala/scala/commit/b11324a) | <notextile>SI-7492 Remove -Ystruct-dispatch and associated code</notextile>
[SI-5459](https://issues.scala-lang.org/browse/SI-5459), [SI-1786](https://issues.scala-lang.org/browse/SI-1786) | [e28c3ed](https://github.com/scala/scala/commit/e28c3ed) | <notextile>SI-1786 incorporate defined bounds in inference</notextile>
[SI-7484](https://issues.scala-lang.org/browse/SI-7484) | [9db9df7](https://github.com/scala/scala/commit/9db9df7) | <notextile>SI-7484 Indentation and whitespace fixes</notextile>
[SI-7484](https://issues.scala-lang.org/browse/SI-7484) | [cba29e6](https://github.com/scala/scala/commit/cba29e6) | <notextile>SI-7484 Add @SupressWarning(rawtypes/unchecked)</notextile>
[SI-6488](https://issues.scala-lang.org/browse/SI-6488) | [538aa22](https://github.com/scala/scala/commit/538aa22) | <notextile>SI-6488 Interrupt i/o threads on process destroy</notextile>
[SI-7464](https://issues.scala-lang.org/browse/SI-7464) | [5e71539](https://github.com/scala/scala/commit/5e71539) | <notextile>SI-7464 allows FieldMirror.set to update vals</notextile>
[SI-5886](https://issues.scala-lang.org/browse/SI-5886) | [e9c3f87](https://github.com/scala/scala/commit/e9c3f87) | <notextile>SI-5886 Remove check for packed type conformance.</notextile>
[SI-6555](https://issues.scala-lang.org/browse/SI-6555) | [963c4a7](https://github.com/scala/scala/commit/963c4a7) | <notextile>Actual SI-6555 fix, Scaladoc filter works WITH keyboard shortcuts too</notextile>
[SI-7383](https://issues.scala-lang.org/browse/SI-7383) | [b32d294](https://github.com/scala/scala/commit/b32d294) | <notextile>SI-7383 - Call ExecutionContext.prepare in Future.apply to allow for capturing l</notextile>
[SI-7438](https://issues.scala-lang.org/browse/SI-7438), [SI-7442](https://issues.scala-lang.org/browse/SI-7442) | [77437ff](https://github.com/scala/scala/commit/77437ff) | <notextile>SI-7442 Update bundled Fork/Join pool (JSR166y)</notextile>
[SI-7166](https://issues.scala-lang.org/browse/SI-7166) | [3edde27](https://github.com/scala/scala/commit/3edde27) | <notextile>[nomaster] SI-7166 catches DivergentImplicit in c.inferImplicitXXX</notextile>
[SI-7047](https://issues.scala-lang.org/browse/SI-7047) | [b4da864](https://github.com/scala/scala/commit/b4da864) | <notextile>[nomaster] SI-7047 fixes silent for c.inferImplicitXXX</notextile>
[SI-7291](https://issues.scala-lang.org/browse/SI-7291), [SI-7291](https://issues.scala-lang.org/browse/SI-7291), [SI-7291](https://issues.scala-lang.org/browse/SI-7291), [SI-7291](https://issues.scala-lang.org/browse/SI-7291) | [fdead2b](https://github.com/scala/scala/commit/fdead2b) | <notextile>[nomaster] SI-7291: No exception throwing for diverging implicit expansion</notextile>
[SI-7167](https://issues.scala-lang.org/browse/SI-7167) | [8168f11](https://github.com/scala/scala/commit/8168f11) | <notextile>[nomaster] SI-7167 implicit macros decide what is divergence</notextile>
[SI-5923](https://issues.scala-lang.org/browse/SI-5923) | [90ac5c4](https://github.com/scala/scala/commit/90ac5c4) | <notextile>[nomaster] SI-5923 instantiates targs in deferred macro applications</notextile>
[SI-5923](https://issues.scala-lang.org/browse/SI-5923), [SI-5353](https://issues.scala-lang.org/browse/SI-5353), [SI-5923](https://issues.scala-lang.org/browse/SI-5923), [SI-5923](https://issues.scala-lang.org/browse/SI-5923), [SI-5353](https://issues.scala-lang.org/browse/SI-5353), [SI-7453](https://issues.scala-lang.org/browse/SI-7453), [SI-5923](https://issues.scala-lang.org/browse/SI-5923), [SI-5353](https://issues.scala-lang.org/browse/SI-5353), [SI-3859](https://issues.scala-lang.org/browse/SI-3859), [SI-5353](https://issues.scala-lang.org/browse/SI-5353), [SI-5353](https://issues.scala-lang.org/browse/SI-5353) | [0c6927b](https://github.com/scala/scala/commit/0c6927b) | <notextile>[nomaster] temporarily breaks SI-5353</notextile>
[SI-7465](https://issues.scala-lang.org/browse/SI-7465) | [a3d03ab](https://github.com/scala/scala/commit/a3d03ab) | <notextile>fixes a crash in ReflectionUtils.systemProperties</notextile>
[SI-5734](https://issues.scala-lang.org/browse/SI-5734) | [8325729](https://github.com/scala/scala/commit/8325729) | <notextile>SI-5734 Allow setting of socket timeout for remote actors</notextile>
[SI-7398](https://issues.scala-lang.org/browse/SI-7398) | [b2c67b3](https://github.com/scala/scala/commit/b2c67b3) | <notextile>SI-7398 Add support for java8 default methods</notextile>
[SI-7271](https://issues.scala-lang.org/browse/SI-7271), [SI-7325](https://issues.scala-lang.org/browse/SI-7325) | [cb1a427](https://github.com/scala/scala/commit/cb1a427) | <notextile>SI-7325 cleans up corner cases of percent handling in StringContext.f</notextile>
[SI-7271](https://issues.scala-lang.org/browse/SI-7271) | [a8edefc](https://github.com/scala/scala/commit/a8edefc) | <notextile>SI-7271 fixes positions of string interpolation parts</notextile>
[SI-7426](https://issues.scala-lang.org/browse/SI-7426) | [df3cae7](https://github.com/scala/scala/commit/df3cae7) | <notextile>SI-7426 Crash in pickler.</notextile>
[SI-5634](https://issues.scala-lang.org/browse/SI-5634) | [3abdaf4](https://github.com/scala/scala/commit/3abdaf4) | <notextile>SI-5634 eliminate overly verbose error message</notextile>
[SI-7441](https://issues.scala-lang.org/browse/SI-7441) | [e86832d](https://github.com/scala/scala/commit/e86832d) | <notextile>SI-7441 Don't ramble on about inapplicable implicits.</notextile>
[SI-7385](https://issues.scala-lang.org/browse/SI-7385) | [d0a1f5b](https://github.com/scala/scala/commit/d0a1f5b) | <notextile>SI-7385 crash in erroneous code</notextile>
[SI-6091](https://issues.scala-lang.org/browse/SI-6091) | [62cdd7f](https://github.com/scala/scala/commit/62cdd7f) | <notextile>SI-6091 overeager warning for reference equality</notextile>
[SI-6771](https://issues.scala-lang.org/browse/SI-6771) | [3009916](https://github.com/scala/scala/commit/3009916) | <notextile>SI-6771 Alias awareness for checkableType in match analysis.</notextile>
[SI-7469](https://issues.scala-lang.org/browse/SI-7469) | [e36bb0b](https://github.com/scala/scala/commit/e36bb0b) | <notextile>Revert &quot;SI-7469 Remove @deprecated MurmurHash elements&quot;</notextile>
[SI-7482](https://issues.scala-lang.org/browse/SI-7482) | [37884ec](https://github.com/scala/scala/commit/37884ec) | <notextile>SI-7482 Don't cook raw types after erasure.</notextile>
[SI-6815](https://issues.scala-lang.org/browse/SI-6815), [SI-6815](https://issues.scala-lang.org/browse/SI-6815) | [fada1ef](https://github.com/scala/scala/commit/fada1ef) | <notextile>SI-6815 untangle isStable and hasVolatileType</notextile>
[SI-6406](https://issues.scala-lang.org/browse/SI-6406), [SI-6406](https://issues.scala-lang.org/browse/SI-6406) | [135cfa8](https://github.com/scala/scala/commit/135cfa8) | <notextile>SI-6406 Restore deprecated API</notextile>
[SI-3943](https://issues.scala-lang.org/browse/SI-3943) | [0c7c521](https://github.com/scala/scala/commit/0c7c521) | <notextile>SI-3943 Test case for already-fixed Java interop bug</notextile>
[SI-7469](https://issues.scala-lang.org/browse/SI-7469) | [ae43506](https://github.com/scala/scala/commit/ae43506) | <notextile>SI-7469 Remove @deprecated scala.util.logging</notextile>
[SI-7476](https://issues.scala-lang.org/browse/SI-7476) | [4478560](https://github.com/scala/scala/commit/4478560) | <notextile>SI-7476 Add documentation to GenericTraversableTemplate</notextile>
[SI-7469](https://issues.scala-lang.org/browse/SI-7469) | [ac990c1](https://github.com/scala/scala/commit/ac990c1) | <notextile>SI-7469 Make @deprecated elems in scala.concurrent private[scala]</notextile>
[SI-7469](https://issues.scala-lang.org/browse/SI-7469) | [e544786](https://github.com/scala/scala/commit/e544786) | <notextile>SI-7469 Remove deprecated elements in s.u.parsing.combinator</notextile>
[SI-7469](https://issues.scala-lang.org/browse/SI-7469) | [7e9c21f](https://github.com/scala/scala/commit/7e9c21f) | <notextile>SI-7469 Remove @deprecated MurmurHash elements</notextile>
[SI-7047](https://issues.scala-lang.org/browse/SI-7047) | [b153880](https://github.com/scala/scala/commit/b153880) | <notextile>SI-7047 fixes silent for c.inferImplicitXXX</notextile>
[SI-7167](https://issues.scala-lang.org/browse/SI-7167) | [c539ae2](https://github.com/scala/scala/commit/c539ae2) | <notextile>SI-7167 implicit macros decide what is divergence</notextile>
[SI-5923](https://issues.scala-lang.org/browse/SI-5923), [SI-5923](https://issues.scala-lang.org/browse/SI-5923) | [adef4b5](https://github.com/scala/scala/commit/adef4b5) | <notextile>SI-5923 instantiates targs in deferred macro applications</notextile>
[SI-6039](https://issues.scala-lang.org/browse/SI-6039) | [b0758f5](https://github.com/scala/scala/commit/b0758f5) | <notextile>SI-6039 Harden against irrelevant filesystem details</notextile>
[SI-7469](https://issues.scala-lang.org/browse/SI-7469) | [0ee9204](https://github.com/scala/scala/commit/0ee9204) | <notextile>SI-7469 Remove @deprecated scala.util.parsing.ast</notextile>
[SI-6149](https://issues.scala-lang.org/browse/SI-6149) | [15df9e9](https://github.com/scala/scala/commit/15df9e9) | <notextile>Limit unnecessary calls to Type#toString.</notextile>
[SI-7432](https://issues.scala-lang.org/browse/SI-7432) | [6890f38](https://github.com/scala/scala/commit/6890f38) | <notextile>SI-7432 add testcases</notextile>
[SI-7432](https://issues.scala-lang.org/browse/SI-7432) | [357c2df](https://github.com/scala/scala/commit/357c2df) | <notextile>SI-7432 Range.min should throw NoSuchElementException on empty range</notextile>
[SI-6863](https://issues.scala-lang.org/browse/SI-6863), [SI-6863](https://issues.scala-lang.org/browse/SI-6863), [SI-6863](https://issues.scala-lang.org/browse/SI-6863) | [265fc6b](https://github.com/scala/scala/commit/265fc6b) | <notextile>SI-6863 root cause fixed using factory of scala.runtime.*Ref</notextile>
[SI-6532](https://issues.scala-lang.org/browse/SI-6532) | [17f8101](https://github.com/scala/scala/commit/17f8101) | <notextile>SI-6532 emit debug info in compiled java.</notextile>
[SI-7369](https://issues.scala-lang.org/browse/SI-7369) | [6271396](https://github.com/scala/scala/commit/6271396) | <notextile>SI-7369 Avoid spurious unreachable warnings in patterns</notextile>
[SI-7367](https://issues.scala-lang.org/browse/SI-7367) | [184cac8](https://github.com/scala/scala/commit/184cac8) | <notextile>SI-7367 scaladoc crash on constructing the model for annotations.</notextile>
[SI-6943](https://issues.scala-lang.org/browse/SI-6943) | [8448beb](https://github.com/scala/scala/commit/8448beb) | <notextile>SI-6943 warn on value class miscomparison.</notextile>
[SI-6675](https://issues.scala-lang.org/browse/SI-6675), [SI-6675](https://issues.scala-lang.org/browse/SI-6675) | [c1327dc](https://github.com/scala/scala/commit/c1327dc) | <notextile>SI-6675 Avoid spurious warning about pattern bind arity.</notextile>
[SI-7355](https://issues.scala-lang.org/browse/SI-7355) | [0d2c7e9](https://github.com/scala/scala/commit/0d2c7e9) | <notextile>SI-7355 Handle spaces in paths in Windows batch files.</notextile>
[SI-7330](https://issues.scala-lang.org/browse/SI-7330) | [e7aadd0](https://github.com/scala/scala/commit/e7aadd0) | <notextile>SI-7330 better error when pattern isn't a value</notextile>
[SI-7200](https://issues.scala-lang.org/browse/SI-7200) | [8703e00](https://github.com/scala/scala/commit/8703e00) | <notextile>SI-7200 Test case for fixed type inference error.</notextile>
[SI-7362](https://issues.scala-lang.org/browse/SI-7362) | [e6af9bc](https://github.com/scala/scala/commit/e6af9bc) | <notextile>SI-7362, crash in presentation compiler.</notextile>
[SI-7409](https://issues.scala-lang.org/browse/SI-7409) | [6227837](https://github.com/scala/scala/commit/6227837) | <notextile>SI-7409 Par-Test: A crash is not a DNC for neg tests</notextile>
[SI-7349](https://issues.scala-lang.org/browse/SI-7349) | [bf44669](https://github.com/scala/scala/commit/bf44669) | <notextile>SI-7349 Partest supports test-interface</notextile>
[SI-7358](https://issues.scala-lang.org/browse/SI-7358) | [e4f62c0](https://github.com/scala/scala/commit/e4f62c0) | <notextile>SI-7358 Partest fails on scalacheck failure</notextile>
[SI-7422](https://issues.scala-lang.org/browse/SI-7422) | [d516f38](https://github.com/scala/scala/commit/d516f38) | <notextile>SI-7422 GenASM populates and clears its maps within a Run</notextile>
[SI-7291](https://issues.scala-lang.org/browse/SI-7291) | [7158142](https://github.com/scala/scala/commit/7158142) | <notextile>SI-7291: Remove error kinds.</notextile>
[SI-7291](https://issues.scala-lang.org/browse/SI-7291), [SI-7291](https://issues.scala-lang.org/browse/SI-7291) | [accaa31](https://github.com/scala/scala/commit/accaa31) | <notextile>SI-7291: No exception throwing for diverging implicit expansion</notextile>
[SI-7429](https://issues.scala-lang.org/browse/SI-7429) | [f59be7a](https://github.com/scala/scala/commit/f59be7a) | <notextile>SI-7429 Fix checkinit build failure in Contexts</notextile>
[SI-6784](https://issues.scala-lang.org/browse/SI-6784) | [2e5c7b9](https://github.com/scala/scala/commit/2e5c7b9) | <notextile>SI-6784 Localize feature imports in scala.swing.</notextile>
[SI-7421](https://issues.scala-lang.org/browse/SI-7421) | [8f08151](https://github.com/scala/scala/commit/8f08151) | <notextile>SI-7421 remove unneeded extra-attachement in maven deploy</notextile>
[SI-7403](https://issues.scala-lang.org/browse/SI-7403) | [bdae05f](https://github.com/scala/scala/commit/bdae05f) | <notextile>SI-7403 Stream extends Serializable</notextile>
[SI-4365](https://issues.scala-lang.org/browse/SI-4365) | [7b4e450](https://github.com/scala/scala/commit/7b4e450) | <notextile>SI-4365 nondeterministic failure in asSeenFrom</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [648784c](https://github.com/scala/scala/commit/648784c) | <notextile>SI-7345 Address review comments.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [c598e76](https://github.com/scala/scala/commit/c598e76) | <notextile>SI-7345 Improved Context.toString</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [85af192](https://github.com/scala/scala/commit/85af192) | <notextile>SI-7345 Eliminate the `depth` var.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [2304a78](https://github.com/scala/scala/commit/2304a78) | <notextile>SI-7345 Drive by refactoring of pattern matching for `arg: _*`.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [e112db6](https://github.com/scala/scala/commit/e112db6) | <notextile>SI-7345 Factor out method to clear and restore undetparams.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [0ce81c8](https://github.com/scala/scala/commit/0ce81c8) | <notextile>SI-7345 Remove unneeded warning.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [ec33ad0](https://github.com/scala/scala/commit/ec33ad0) | <notextile>SI-7345 Doc and TODO comments around Context.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [dbd8457](https://github.com/scala/scala/commit/dbd8457) | <notextile>SI-7345 Produce Context#imports from the context chain</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [78e7eba](https://github.com/scala/scala/commit/78e7eba) | <notextile>SI-7345 Refactor manual iteration to use foreach.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [7ce4de4](https://github.com/scala/scala/commit/7ce4de4) | <notextile>SI-7345 Move `inSilentMode` from Infer to Context.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [bba9d3d](https://github.com/scala/scala/commit/bba9d3d) | <notextile>SI-7345 remove unused methods.</notextile>
[SI-7319](https://issues.scala-lang.org/browse/SI-7319), [SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [510ebec](https://github.com/scala/scala/commit/510ebec) | <notextile>SI-7345 Prefer using a throwaway silent context over buffer flushing.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [ec5eaee](https://github.com/scala/scala/commit/ec5eaee) | <notextile>SI-7345 More refactoring and documentation in Contexts</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [190aea9](https://github.com/scala/scala/commit/190aea9) | <notextile>SI-7345 Exploit named/default args   - Collapse overloads of `rootContext`   - m</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [c9f5ab0](https://github.com/scala/scala/commit/c9f5ab0) | <notextile>SI-7345 Encapsulate warning and error buffers in ReportBuffer.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [ff5dde1](https://github.com/scala/scala/commit/ff5dde1) | <notextile>SI-7345 Add Context#isLocal, akin to Symbol#isLocal</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [b1cb004](https://github.com/scala/scala/commit/b1cb004) | <notextile>SI-7345 Use combinator to find next enclosing non-template.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [281b850](https://github.com/scala/scala/commit/281b850) | <notextile>SI-7345 Remove comment that appears obsolete.</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [f2c351c](https://github.com/scala/scala/commit/f2c351c) | <notextile>SI-7345 Rationalize overloads of Context#make</notextile>
[SI-7345](https://issues.scala-lang.org/browse/SI-7345) | [e658b63](https://github.com/scala/scala/commit/e658b63) | <notextile>SI-7345 Represent the boolean modes in Context in ContextMode.</notextile>
[SI-7402](https://issues.scala-lang.org/browse/SI-7402) | [372965b](https://github.com/scala/scala/commit/372965b) | <notextile>SI-7402 List extends Serializable</notextile>
[SI-6898](https://issues.scala-lang.org/browse/SI-6898) | [6f47caf](https://github.com/scala/scala/commit/6f47caf) | <notextile>SI-6898 Document AnyVal box and unbox implemention by BoxesRunTime</notextile>
[SI-7408](https://issues.scala-lang.org/browse/SI-7408) | [5c6d62a](https://github.com/scala/scala/commit/5c6d62a) | <notextile>SI-7408 Fix test by sorting results of getDeclaredClasses</notextile>
[SI-7376](https://issues.scala-lang.org/browse/SI-7376) | [12a18ee](https://github.com/scala/scala/commit/12a18ee) | <notextile>SI-7376 Bad doc variable error is positioned at the variable.</notextile>
[SI-7376](https://issues.scala-lang.org/browse/SI-7376) | [fecc7e0](https://github.com/scala/scala/commit/fecc7e0) | <notextile>SI-7376 Additional trivial Scaladoc format corrections</notextile>
[SI-7376](https://issues.scala-lang.org/browse/SI-7376) | [3f0a90b](https://github.com/scala/scala/commit/3f0a90b) | <notextile>SI-7376 Unmoored doc has correct position</notextile>
[SI-7376](https://issues.scala-lang.org/browse/SI-7376) | [0fde95e](https://github.com/scala/scala/commit/0fde95e) | <notextile>SI-7376 Scaladoc warns when discarding local doc comments with API tags</notextile>
[SI-7080](https://issues.scala-lang.org/browse/SI-7080) | [e8c85a3](https://github.com/scala/scala/commit/e8c85a3) | <notextile>SI-7080 improve boundary value checking for BitSet</notextile>
[SI-7324](https://issues.scala-lang.org/browse/SI-7324) | [5cc2eb8](https://github.com/scala/scala/commit/5cc2eb8) | <notextile>SI-7324 jvm not cool with 255+ parameters</notextile>
[SI-7337](https://issues.scala-lang.org/browse/SI-7337) | [f93c4c9](https://github.com/scala/scala/commit/f93c4c9) | <notextile>SI-7337 Error out on missing -d directory.</notextile>
[SI-7319](https://issues.scala-lang.org/browse/SI-7319), [SI-7319](https://issues.scala-lang.org/browse/SI-7319) | [578ef1f](https://github.com/scala/scala/commit/578ef1f) | <notextile>SI-7319 Remove unused method.</notextile>
[SI-7377](https://issues.scala-lang.org/browse/SI-7377) | [962f88e](https://github.com/scala/scala/commit/962f88e) | <notextile>SI-7377 Remove special treatment of `stableFun()` in patterns.</notextile>
[SI-7388](https://issues.scala-lang.org/browse/SI-7388) | [3e27fec](https://github.com/scala/scala/commit/3e27fec) | <notextile>SI-7388 Be more robust against cycles in error symbol creation.</notextile>
[SI-7377](https://issues.scala-lang.org/browse/SI-7377) | [15e9ef8](https://github.com/scala/scala/commit/15e9ef8) | <notextile>SI-7377 Fix retypechecking of patterns on case companion alias</notextile>
[SI-7319](https://issues.scala-lang.org/browse/SI-7319), [SI-7319](https://issues.scala-lang.org/browse/SI-7319) | [ef04619](https://github.com/scala/scala/commit/ef04619) | <notextile>SI-7319 Clear error buffer during Typer reset.</notextile>
[SI-7329](https://issues.scala-lang.org/browse/SI-7329) | [aa6723c](https://github.com/scala/scala/commit/aa6723c) | <notextile>SI-7329 duplicate default getters for specialized parameters.</notextile>
[SI-7314](https://issues.scala-lang.org/browse/SI-7314) | [01edd04](https://github.com/scala/scala/commit/01edd04) | <notextile>SI-7314 Partest locates tools.jar and javac</notextile>
[SI-7312](https://issues.scala-lang.org/browse/SI-7312), [SI-7315](https://issues.scala-lang.org/browse/SI-7315) | [660c8fd](https://github.com/scala/scala/commit/660c8fd) | <notextile>SI-7315 Test @deprecatedInheritance / @specialized interplay</notextile>
[SI-7312](https://issues.scala-lang.org/browse/SI-7312) | [54d11fe](https://github.com/scala/scala/commit/54d11fe) | <notextile>SI-7312 @deprecatedInheritance now ignores same-file subclasses</notextile>
[SI-7335](https://issues.scala-lang.org/browse/SI-7335) | [6690455](https://github.com/scala/scala/commit/6690455) | <notextile>SI-7335 Remove special case for import of Predef._ in Predef.scala</notextile>
[SI-7335](https://issues.scala-lang.org/browse/SI-7335) | [b0fceeb](https://github.com/scala/scala/commit/b0fceeb) | <notextile>SI-7335 Sharpen up comment about implicit prioritization.</notextile>
[SI-7335](https://issues.scala-lang.org/browse/SI-7335) | [ae69de4](https://github.com/scala/scala/commit/ae69de4) | <notextile>SI-7335 Add logging for a now-impossible* case in Symbol#exists.</notextile>
[SI-7335](https://issues.scala-lang.org/browse/SI-7335) | [9d7f811](https://github.com/scala/scala/commit/9d7f811) | <notextile>SI-7335 Don't import Predef._ in Predef.scala</notextile>
[SI-7335](https://issues.scala-lang.org/browse/SI-7335) | [d43f5ce](https://github.com/scala/scala/commit/d43f5ce) | <notextile>SI-7335 Mandate that parents of Predef must be defined in Predef.scala</notextile>
[SI-6286](https://issues.scala-lang.org/browse/SI-6286) | [67c2d6d](https://github.com/scala/scala/commit/67c2d6d) | <notextile>SI-6286 IllegalArgumentException handling specialized method.</notextile>
[SI-7360](https://issues.scala-lang.org/browse/SI-7360) | [23dd325](https://github.com/scala/scala/commit/23dd325) | <notextile>SI-7360 Don't let a follow-up TypeError obscure the original error.</notextile>
[SI-6387](https://issues.scala-lang.org/browse/SI-6387) | [2885eb0](https://github.com/scala/scala/commit/2885eb0) | <notextile>Revert &quot;SI-6387 Clones accessor before name expansion&quot;</notextile>
[SI-6386](https://issues.scala-lang.org/browse/SI-6386) | [7250312](https://github.com/scala/scala/commit/7250312) | <notextile>SI-6386 typed existential type tree's original now have tpe set</notextile>
[SI-7289](https://issues.scala-lang.org/browse/SI-7289) | [6a61e17](https://github.com/scala/scala/commit/6a61e17) | <notextile>SI-7289 Less strict type application for TypeVar.</notextile>
[SI-6937](https://issues.scala-lang.org/browse/SI-6937) | [34a6fa9](https://github.com/scala/scala/commit/34a6fa9) | <notextile>SI-6937 core type tags are no longer referentially unique</notextile>
[SI-7321](https://issues.scala-lang.org/browse/SI-7321) | [0affa94](https://github.com/scala/scala/commit/0affa94) | <notextile>SI-7321 Memory leak in specialize on multiple compiler runs.</notextile>
[SI-6900](https://issues.scala-lang.org/browse/SI-6900) | [c2534bf](https://github.com/scala/scala/commit/c2534bf) | <notextile>SI-6900 Fix tailrec for dependent method types</notextile>
[SI-6135](https://issues.scala-lang.org/browse/SI-6135) | [d7545ec](https://github.com/scala/scala/commit/d7545ec) | <notextile>Simplify interplay between Uncurry Info- and Tree-Transformers</notextile>
[SI-7316](https://issues.scala-lang.org/browse/SI-7316) | [61308be](https://github.com/scala/scala/commit/61308be) | <notextile>Take the N^2 out of the compiler's TreeSet.</notextile>
[SI-7147](https://issues.scala-lang.org/browse/SI-7147) | [d21f90c](https://github.com/scala/scala/commit/d21f90c) | <notextile>SI-7147 Diagnostic for unexplained assertion in presentation compiler.</notextile>
[SI-6793](https://issues.scala-lang.org/browse/SI-6793) | [ca9c8ef](https://github.com/scala/scala/commit/ca9c8ef) | <notextile>SI-6793 Don't use super param accessors if inaccessible.</notextile>
[SI-6715](https://issues.scala-lang.org/browse/SI-6715) | [5f9bc05](https://github.com/scala/scala/commit/5f9bc05) | <notextile>SI-6715 Shouldn't return &quot;&quot; from TermNames.originalName</notextile>
[SI-6715](https://issues.scala-lang.org/browse/SI-6715) | [8e83703](https://github.com/scala/scala/commit/8e83703) | <notextile>Backport #2289's TermNames.unexpandedName as TermNames.originalName</notextile>
[SI-7300](https://issues.scala-lang.org/browse/SI-7300) | [dfdbfa7](https://github.com/scala/scala/commit/dfdbfa7) | <notextile>SI-7300 single line comment in multi line comment</notextile>
[SI-6289](https://issues.scala-lang.org/browse/SI-6289) | [0d95443](https://github.com/scala/scala/commit/0d95443) | <notextile>SI-6289 Paulptest demonstrating javac errors</notextile>
[SI-6289](https://issues.scala-lang.org/browse/SI-6289) | [c6ce617](https://github.com/scala/scala/commit/c6ce617) | <notextile>SI-6289 Partest in technicolor and showing javac errors</notextile>
[SI-7110](https://issues.scala-lang.org/browse/SI-7110) | [530f4a5](https://github.com/scala/scala/commit/530f4a5) | <notextile>SI-7110 Warn about naked try without catch/finally</notextile>
[SI-7237](https://issues.scala-lang.org/browse/SI-7237) | [29a9c64](https://github.com/scala/scala/commit/29a9c64) | <notextile>SI-7237 Always choose ForkJoinTaskSupport</notextile>
[SI-7261](https://issues.scala-lang.org/browse/SI-7261) | [22944e4](https://github.com/scala/scala/commit/22944e4) | <notextile>SI-7261 Implicit conversion of BooleanSetting to Boolean and BooleanFlag</notextile>
[SI-7261](https://issues.scala-lang.org/browse/SI-7261) | [e073975](https://github.com/scala/scala/commit/e073975) | <notextile>SI-7261 Implicit conversion of BooleanSetting to Boolean and BooleanFlag</notextile>
[SI-6168](https://issues.scala-lang.org/browse/SI-6168) | [edee27f](https://github.com/scala/scala/commit/edee27f) | <notextile>SI-6168 Retain prefix when parsing types in JVM signatures</notextile>
[SI-6146](https://issues.scala-lang.org/browse/SI-6146), [SI-7285](https://issues.scala-lang.org/browse/SI-7285) | [dd89b00](https://github.com/scala/scala/commit/dd89b00) | <notextile>SI-7285 Fix match analysis with nested objects.</notextile>
[SI-6124](https://issues.scala-lang.org/browse/SI-6124), [SI-7285](https://issues.scala-lang.org/browse/SI-7285) | [499962d](https://github.com/scala/scala/commit/499962d) | <notextile>Expand test for SI-6124 to demonstrate cause of SI-7285.</notextile>
[SI-7290](https://issues.scala-lang.org/browse/SI-7290) | [c3ad5af](https://github.com/scala/scala/commit/c3ad5af) | <notextile>SI-7290 Minor cleanups driven by review comments.</notextile>
[SI-7290](https://issues.scala-lang.org/browse/SI-7290) | [2e0be83](https://github.com/scala/scala/commit/2e0be83) | <notextile>SI-7290 Discard duplicates in switchable alternative patterns.</notextile>
[SI-6387](https://issues.scala-lang.org/browse/SI-6387) | [4e10b2c](https://github.com/scala/scala/commit/4e10b2c) | <notextile>SI-6387 Clones accessor before name expansion</notextile>
[SI-7237](https://issues.scala-lang.org/browse/SI-7237) | [67b8de7](https://github.com/scala/scala/commit/67b8de7) | <notextile>[backport] SI-7237 Always choose ForkJoinTaskSupport</notextile>
[SI-7246](https://issues.scala-lang.org/browse/SI-7246) | [cd9e03a](https://github.com/scala/scala/commit/cd9e03a) | <notextile>SI-7246 Make $outer pointer elision Java aware</notextile>
[SI-7299](https://issues.scala-lang.org/browse/SI-7299) | [b95ca32](https://github.com/scala/scala/commit/b95ca32) | <notextile>SI-7299 Improve error message for eta-expanding 23+ param method</notextile>
[SI-6580](https://issues.scala-lang.org/browse/SI-6580), [SI-6580](https://issues.scala-lang.org/browse/SI-6580) | [b4344e1](https://github.com/scala/scala/commit/b4344e1) | <notextile>SI-6580 Scaladoc: Should not close void elements</notextile>
[SI-6022](https://issues.scala-lang.org/browse/SI-6022), [SI-6210](https://issues.scala-lang.org/browse/SI-6210) | [47fc00d](https://github.com/scala/scala/commit/47fc00d) | <notextile>SI-6210 Test case for already-fixed pattern matcher bug</notextile>
[SI-7013](https://issues.scala-lang.org/browse/SI-7013) | [df29290](https://github.com/scala/scala/commit/df29290) | <notextile>SI-7013 Scaladoc: Fix StackOverflowError</notextile>
[SI-7253](https://issues.scala-lang.org/browse/SI-7253) | [6f4a594](https://github.com/scala/scala/commit/6f4a594) | <notextile>SI-7253: update comments and naming</notextile>
[SI-7253](https://issues.scala-lang.org/browse/SI-7253) | [386a5bd](https://github.com/scala/scala/commit/386a5bd) | <notextile>SI-7253: respect binary compatibility constraints</notextile>
[SI-5699](https://issues.scala-lang.org/browse/SI-5699) | [50ee635](https://github.com/scala/scala/commit/50ee635) | <notextile>SI-5699 correct java parser for annotation defs.</notextile>
[SI-3994](https://issues.scala-lang.org/browse/SI-3994), [SI-7242](https://issues.scala-lang.org/browse/SI-7242) | [2b5fde7](https://github.com/scala/scala/commit/2b5fde7) | <notextile>SI-7242 Fix crash when inner object mixes in its companion</notextile>
[SI-7258](https://issues.scala-lang.org/browse/SI-7258) | [ef85a10](https://github.com/scala/scala/commit/ef85a10) | <notextile>SI-7258 Don't assume order of reflection values in t6223</notextile>
[SI-3120](https://issues.scala-lang.org/browse/SI-3120), [SI-3120](https://issues.scala-lang.org/browse/SI-3120), [SI-7259](https://issues.scala-lang.org/browse/SI-7259) | [f046853](https://github.com/scala/scala/commit/f046853) | <notextile>SI-7259 Fix detection of Java defined Selects</notextile>
[SI-1247](https://issues.scala-lang.org/browse/SI-1247), [SI-7249](https://issues.scala-lang.org/browse/SI-7249) | [552b623](https://github.com/scala/scala/commit/552b623) | <notextile>SI-7249 Reign in overzealous Function0 optimization.</notextile>
[SI-5464](https://issues.scala-lang.org/browse/SI-5464), [SI-7176](https://issues.scala-lang.org/browse/SI-7176), [SI-6921](https://issues.scala-lang.org/browse/SI-6921), [SI-7239](https://issues.scala-lang.org/browse/SI-7239) | [174334b](https://github.com/scala/scala/commit/174334b) | <notextile>SI-6921 SI-7239 Tread lightly during exploratory typing</notextile>
[SI-7232](https://issues.scala-lang.org/browse/SI-7232) | [6e79370](https://github.com/scala/scala/commit/6e79370) | <notextile>SI-7232 Fix Java import vs defn. binding precendence</notextile>
[SI-7232](https://issues.scala-lang.org/browse/SI-7232) | [8383b65](https://github.com/scala/scala/commit/8383b65) | <notextile>SI-7232 Fix Java import vs defn. binding precendence</notextile>
[SI-3120](https://issues.scala-lang.org/browse/SI-3120), [SI-3120](https://issues.scala-lang.org/browse/SI-3120), [SI-7259](https://issues.scala-lang.org/browse/SI-7259) | [7d03dcc](https://github.com/scala/scala/commit/7d03dcc) | <notextile>SI-7259 Fix detection of Java defined Selects</notextile>
[SI-7296](https://issues.scala-lang.org/browse/SI-7296) | [844cef6](https://github.com/scala/scala/commit/844cef6) | <notextile>SI-7296 Remove arity limit for case classes</notextile>
[SI-7296](https://issues.scala-lang.org/browse/SI-7296) | [ad79d74](https://github.com/scala/scala/commit/ad79d74) | <notextile>SI-7296 Avoid crash with nested 23-param case class</notextile>
[SI-7251](https://issues.scala-lang.org/browse/SI-7251), [SI-7251](https://issues.scala-lang.org/browse/SI-7251) | [395e90a](https://github.com/scala/scala/commit/395e90a) | <notextile>SI-7251, compiler crash with $.</notextile>
[SI-7240](https://issues.scala-lang.org/browse/SI-7240) | [a4fb773](https://github.com/scala/scala/commit/a4fb773) | <notextile>SI-7240 fixes language feature lookup</notextile>
[SI-7233](https://issues.scala-lang.org/browse/SI-7233) | [41e3b89](https://github.com/scala/scala/commit/41e3b89) | <notextile>SI-7233 Account for aliased imports in Erasure</notextile>
[SI-7233](https://issues.scala-lang.org/browse/SI-7233) | [33b499c](https://github.com/scala/scala/commit/33b499c) | <notextile>SI-7233 Account for aliased imports in eta expansion.</notextile>
[SI-6725](https://issues.scala-lang.org/browse/SI-6725) | [9bc17e7](https://github.com/scala/scala/commit/9bc17e7) | <notextile>SI-6725 `f` interpolator now supports %n tokens</notextile>
[SI-7132](https://issues.scala-lang.org/browse/SI-7132) | [eb365f9](https://github.com/scala/scala/commit/eb365f9) | <notextile>SI-7132 - don't discard Unit type in interpreter</notextile>
[SI-7233](https://issues.scala-lang.org/browse/SI-7233), [SI-7302](https://issues.scala-lang.org/browse/SI-7302) | [2b4cd6c](https://github.com/scala/scala/commit/2b4cd6c) | <notextile>SI-7302 importing from Any.</notextile>
[SI-7186](https://issues.scala-lang.org/browse/SI-7186) | [ccf886c](https://github.com/scala/scala/commit/ccf886c) | <notextile>SI-7186 Slim down some TypeRefs by 8 bytes.</notextile>
[SI-7294](https://issues.scala-lang.org/browse/SI-7294) | [4af9ff5](https://github.com/scala/scala/commit/4af9ff5) | <notextile>SI-7294 Deprecate inheritance from TupleN.</notextile>
[SI-7294](https://issues.scala-lang.org/browse/SI-7294) | [8d537a1](https://github.com/scala/scala/commit/8d537a1) | <notextile>SI-7294 Treat TupleN as final under -Xfuture</notextile>
[SI-5717](https://issues.scala-lang.org/browse/SI-5717) | [cc485a9](https://github.com/scala/scala/commit/cc485a9) | <notextile>SI-5717 error when bytecode cannot be written</notextile>
[SI-7003](https://issues.scala-lang.org/browse/SI-7003), [SI-7003](https://issues.scala-lang.org/browse/SI-7003), [SI-7003](https://issues.scala-lang.org/browse/SI-7003), [SI-6123](https://issues.scala-lang.org/browse/SI-6123) | [4bb8988](https://github.com/scala/scala/commit/4bb8988) | <notextile>Add positive and negative testcases for SI-6123 (-explaintypes)</notextile>
[SI-6123](https://issues.scala-lang.org/browse/SI-6123) | [ec6548f](https://github.com/scala/scala/commit/ec6548f) | <notextile>SI-6123: -explaintypes should not explain errors which won't be reported</notextile>
[SI-7102](https://issues.scala-lang.org/browse/SI-7102) | [1b3a379](https://github.com/scala/scala/commit/1b3a379) | <notextile>SI-7102 Specialize isEmpty for bitsets</notextile>
[SI-7236](https://issues.scala-lang.org/browse/SI-7236) | [67ed8c8](https://github.com/scala/scala/commit/67ed8c8) | <notextile>SI-7236 Deprecate ThreadPoolTaskSupport and friends</notextile>
[SI-5513](https://issues.scala-lang.org/browse/SI-5513) | [38a1515](https://github.com/scala/scala/commit/38a1515) | <notextile>SI-5513: add inplace set-theoretic operations for mutable bitsets.</notextile>
[SI-7247](https://issues.scala-lang.org/browse/SI-7247) | [3fe7b8c](https://github.com/scala/scala/commit/3fe7b8c) | <notextile>SI-7247, deprecated NotNull.</notextile>
[SI-7228](https://issues.scala-lang.org/browse/SI-7228) | [2fa2db7](https://github.com/scala/scala/commit/2fa2db7) | <notextile>SI-7228, bug in weak subtyping.</notextile>
[SI-7328](https://issues.scala-lang.org/browse/SI-7328) | [745c36a](https://github.com/scala/scala/commit/745c36a) | <notextile>SI-7328 Bail out of names/defaults if args are error typed</notextile>
[SI-7234](https://issues.scala-lang.org/browse/SI-7234) | [83c9c76](https://github.com/scala/scala/commit/83c9c76) | <notextile>SI-7234 Make named args play nice with dep. method types</notextile>
[SI-5710](https://issues.scala-lang.org/browse/SI-5710) | [f742aa3](https://github.com/scala/scala/commit/f742aa3) | <notextile>SI-5710 has fixed itself</notextile>
[SI-7235](https://issues.scala-lang.org/browse/SI-7235), [SI-7235](https://issues.scala-lang.org/browse/SI-7235), [SI-7235](https://issues.scala-lang.org/browse/SI-7235) | [3ae2653](https://github.com/scala/scala/commit/3ae2653) | <notextile>reifier is now aware of SI-7235</notextile>
[SI-7226](https://issues.scala-lang.org/browse/SI-7226) | [7e52fb9](https://github.com/scala/scala/commit/7e52fb9) | <notextile>SI-7226 Fix inference regression caused by TypeVar equality.</notextile>
[SI-7224](https://issues.scala-lang.org/browse/SI-7224) | [292435f](https://github.com/scala/scala/commit/292435f) | <notextile>Fix SI-7224.</notextile>
[SI-6608](https://issues.scala-lang.org/browse/SI-6608), [SI-6601](https://issues.scala-lang.org/browse/SI-6601) | [34faa0d](https://github.com/scala/scala/commit/34faa0d) | <notextile>SI-6601 Close access loophole for value class constructors</notextile>
[SI-874](https://issues.scala-lang.org/browse/SI-874) | [3a30af1](https://github.com/scala/scala/commit/3a30af1) | <notextile>SI-874 actual JSR-223 implementation</notextile>
[SI-874](https://issues.scala-lang.org/browse/SI-874) | [3e8f8dd](https://github.com/scala/scala/commit/3e8f8dd) | <notextile>SI-874 reflect.io improvements</notextile>
[SI-7244](https://issues.scala-lang.org/browse/SI-7244) | [a67b626](https://github.com/scala/scala/commit/a67b626) | <notextile>Close after slurping (fixes SI-7244)</notextile>
[SI-7006](https://issues.scala-lang.org/browse/SI-7006) | [9f6b7bc](https://github.com/scala/scala/commit/9f6b7bc) | <notextile>SI-7006 Fix the unreachable test</notextile>
[SI-7231](https://issues.scala-lang.org/browse/SI-7231) | [fd21898](https://github.com/scala/scala/commit/fd21898) | <notextile>SI-7231 Fix assertion when adapting Null type to Array type</notextile>
[SI-7006](https://issues.scala-lang.org/browse/SI-7006) | [04eac5c](https://github.com/scala/scala/commit/04eac5c) | <notextile>SI-7006 Cleanup from code review</notextile>
[SI-7006](https://issues.scala-lang.org/browse/SI-7006) | [b50a0d8](https://github.com/scala/scala/commit/b50a0d8) | <notextile>SI-7006 Prevent unreachable blocks in GenICode</notextile>
[SI-7109](https://issues.scala-lang.org/browse/SI-7109), [SI-7153](https://issues.scala-lang.org/browse/SI-7153) | [53c499b](https://github.com/scala/scala/commit/53c499b) | <notextile>SI-7109 SI-7153 Generalize the API to get docComments: allow to force docTrees f</notextile>
[SI-7183](https://issues.scala-lang.org/browse/SI-7183) | [2cf6c5d](https://github.com/scala/scala/commit/2cf6c5d) | <notextile>[port] SI-7183 Disable unreachability for withFilter matches.</notextile>
[SI-7215](https://issues.scala-lang.org/browse/SI-7215) | [ad69835](https://github.com/scala/scala/commit/ad69835) | <notextile>SI-7215 Fix transpose of an empty Array[Array[T]].</notextile>
[SI-7190](https://issues.scala-lang.org/browse/SI-7190) | [1117be8](https://github.com/scala/scala/commit/1117be8) | <notextile>SI-7190 macros no longer give rise to bridges</notextile>
[SI-5954](https://issues.scala-lang.org/browse/SI-5954), [SI-7195](https://issues.scala-lang.org/browse/SI-7195) | [09130d5](https://github.com/scala/scala/commit/09130d5) | <notextile>[nomaster] SI-7195 minor version mustn't introduce warnings</notextile>
[SI-6902](https://issues.scala-lang.org/browse/SI-6902), [SI-7183](https://issues.scala-lang.org/browse/SI-7183) | [0303e64](https://github.com/scala/scala/commit/0303e64) | <notextile>SI-7183 Disable unreachability for withFilter matches.</notextile>
[SI-7214](https://issues.scala-lang.org/browse/SI-7214) | [acd74ca](https://github.com/scala/scala/commit/acd74ca) | <notextile>SI-7214 outer check based on dealiased pattern type.</notextile>
[SI-7126](https://issues.scala-lang.org/browse/SI-7126), [SI-7126](https://issues.scala-lang.org/browse/SI-7126) | [204b2b4](https://github.com/scala/scala/commit/204b2b4) | <notextile>SI-7126 Eliminate a source of malformed types.</notextile>
[SI-7126](https://issues.scala-lang.org/browse/SI-7126), [SI-7126](https://issues.scala-lang.org/browse/SI-7126) | [696dcdf](https://github.com/scala/scala/commit/696dcdf) | <notextile>SI-7126 Account for the alias types that don't dealias.</notextile>
[SI-7185](https://issues.scala-lang.org/browse/SI-7185) | [387fbf4](https://github.com/scala/scala/commit/387fbf4) | <notextile>SI-7185 Avoid NPE in TreeInfo.isExprSafeToInline</notextile>
[SI-7045](https://issues.scala-lang.org/browse/SI-7045), [SI-6240](https://issues.scala-lang.org/browse/SI-6240) | [0420b2d](https://github.com/scala/scala/commit/0420b2d) | <notextile>Revert SI-6240 synchronization for runtime reflection</notextile>
[SI-6191](https://issues.scala-lang.org/browse/SI-6191) | [c46bc25](https://github.com/scala/scala/commit/c46bc25) | <notextile>Tone down a soft-warning to only show under -Ydebug.</notextile>
[SI-7045](https://issues.scala-lang.org/browse/SI-7045) | [07bcb61](https://github.com/scala/scala/commit/07bcb61) | <notextile>SI-7045 reflection now auto-initializes selfType</notextile>
[SI-6758](https://issues.scala-lang.org/browse/SI-6758) | [1666f6e](https://github.com/scala/scala/commit/1666f6e) | <notextile>Since the problem in SI-6758 is fixed, it's ok to move checking for unused impor</notextile>
[SI-7132](https://issues.scala-lang.org/browse/SI-7132) | [1b9c2f5](https://github.com/scala/scala/commit/1b9c2f5) | <notextile>SI-7132 - don't discard Unit type in interpreter</notextile>
[SI-6816](https://issues.scala-lang.org/browse/SI-6816) | [3b07135](https://github.com/scala/scala/commit/3b07135) | <notextile>SI-6816 Deprecate -Yeta-expand-keeps-star</notextile>
[SI-6161](https://issues.scala-lang.org/browse/SI-6161) | [b457b6c](https://github.com/scala/scala/commit/b457b6c) | <notextile>Refactors AsSeenFromMap to expose extension point.</notextile>
[SI-7112](https://issues.scala-lang.org/browse/SI-7112) | [1976d9f](https://github.com/scala/scala/commit/1976d9f) | <notextile>fixes the test for SI-7112</notextile>
[SI-7180](https://issues.scala-lang.org/browse/SI-7180) | [de1f749](https://github.com/scala/scala/commit/de1f749) | <notextile>SI-7180 Fix regression in implicit scope of HK type alias.</notextile>
[SI-5975](https://issues.scala-lang.org/browse/SI-5975), [SI-6576](https://issues.scala-lang.org/browse/SI-6576) | [19649d4](https://github.com/scala/scala/commit/19649d4) | <notextile>SI-6576 Workaround / diagnostic for IDE NPE.</notextile>
[SI-7146](https://issues.scala-lang.org/browse/SI-7146) | [bb067d3](https://github.com/scala/scala/commit/bb067d3) | <notextile>SI-7146 - Fixing checkinit bug in ExecutionContextImpl and adding test</notextile>
[SI-7128](https://issues.scala-lang.org/browse/SI-7128) | [348ff4b](https://github.com/scala/scala/commit/348ff4b) | <notextile>SI-7128 Fix regression in copyToArray for empty arrays</notextile>
[SI-7107](https://issues.scala-lang.org/browse/SI-7107) | [4f1bfec](https://github.com/scala/scala/commit/4f1bfec) | <notextile>Fix SI-7107: scala now thinks every exception is polymorphic</notextile>
[SI-7074](https://issues.scala-lang.org/browse/SI-7074) | [8187deb](https://github.com/scala/scala/commit/8187deb) | <notextile>SI-7074 Fix xml attribute sorting</notextile>
[SI-7112](https://issues.scala-lang.org/browse/SI-7112) | [89be691](https://github.com/scala/scala/commit/89be691) | <notextile>fixes the test for SI-7112</notextile>
[SI-6548](https://issues.scala-lang.org/browse/SI-6548), [SI-6548](https://issues.scala-lang.org/browse/SI-6548) | [85b63b8](https://github.com/scala/scala/commit/85b63b8) | <notextile>[nomaster] Revert &quot;SI-6548 reflection now correctly enters jinners&quot;</notextile>
[SI-4664](https://issues.scala-lang.org/browse/SI-4664), [SI-4664](https://issues.scala-lang.org/browse/SI-4664) | [8b4af71](https://github.com/scala/scala/commit/8b4af71) | <notextile>[nomaster] Revert &quot;SI-4664 Make scala.util.Random Serializable&quot;</notextile>
[SI-6521](https://issues.scala-lang.org/browse/SI-6521) | [f9550c6](https://github.com/scala/scala/commit/f9550c6) | <notextile>[nomaster] Revert &quot;Fixes SI-6521, overrides Range#head to be faster&quot;</notextile>
[SI-7159](https://issues.scala-lang.org/browse/SI-7159) | [bfd7863](https://github.com/scala/scala/commit/bfd7863) | <notextile>SI-7159 Distinguish between assignability and sub typing in TypeKinds</notextile>
[SI-7159](https://issues.scala-lang.org/browse/SI-7159) | [4124a09](https://github.com/scala/scala/commit/4124a09) | <notextile>SI-7159 Remove erroneous INT &lt;:&lt; LONG in TypeKinds</notextile>
[SI-107](https://issues.scala-lang.org/browse/SI-107), [SI-7159](https://issues.scala-lang.org/browse/SI-7159) | [04b147e](https://github.com/scala/scala/commit/04b147e) | <notextile>SI-7159 Prepare to remove erroneous INT &lt;:&lt; LONG in TypeKinds</notextile>
[SI-7159](https://issues.scala-lang.org/browse/SI-7159) | [208d6ad](https://github.com/scala/scala/commit/208d6ad) | <notextile>SI-7159 Remove unreachable cases in GenICode#adapt</notextile>
[SI-7181](https://issues.scala-lang.org/browse/SI-7181) | [5f3cd86](https://github.com/scala/scala/commit/5f3cd86) | <notextile>SI-7181 Eliminate unnecessary duplication of finally blocks</notextile>
[SI-7181](https://issues.scala-lang.org/browse/SI-7181) | [28a7161](https://github.com/scala/scala/commit/28a7161) | <notextile>SI-7181 Prepare to remove duplicated finally blocks</notextile>
[SI-7006](https://issues.scala-lang.org/browse/SI-7006) | [4f2d784](https://github.com/scala/scala/commit/4f2d784) | <notextile>SI-7006 Simplify jump-only block destination determination</notextile>
[SI-7006](https://issues.scala-lang.org/browse/SI-7006) | [e9f6511](https://github.com/scala/scala/commit/e9f6511) | <notextile>SI-7006 Eliminate unreachable blocks</notextile>
[SI-7006](https://issues.scala-lang.org/browse/SI-7006) | [0d2e19c](https://github.com/scala/scala/commit/0d2e19c) | <notextile>SI-7006 Recognize more jump only blocks</notextile>
[SI-7006](https://issues.scala-lang.org/browse/SI-7006), [SI-7006](https://issues.scala-lang.org/browse/SI-7006) | [022c57f](https://github.com/scala/scala/commit/022c57f) | <notextile>SI-7006 Improve jump-elision code in GenASM</notextile>
[SI-7112](https://issues.scala-lang.org/browse/SI-7112) | [0ecba21](https://github.com/scala/scala/commit/0ecba21) | <notextile>fixes the test for SI-7112</notextile>
[SI-7120](https://issues.scala-lang.org/browse/SI-7120) | [c11cf0b](https://github.com/scala/scala/commit/c11cf0b) | <notextile>SI-7120 Erasure must honor typeref prefixes</notextile>
[SI-7172](https://issues.scala-lang.org/browse/SI-7172), [SI-7171](https://issues.scala-lang.org/browse/SI-7171) | [3d5758c](https://github.com/scala/scala/commit/3d5758c) | <notextile>SI-7171 Consider prefix when assessing type finality.</notextile>
[SI-7015](https://issues.scala-lang.org/browse/SI-7015) | [62fcd3d](https://github.com/scala/scala/commit/62fcd3d) | <notextile>SI-7015 Cleanup from review of null duplication</notextile>
[SI-7159](https://issues.scala-lang.org/browse/SI-7159), [SI-7015](https://issues.scala-lang.org/browse/SI-7015) | [1b6661b](https://github.com/scala/scala/commit/1b6661b) | <notextile>SI-7015 Removes redundant aconst_null; pop; aconst_null creation</notextile>
[SI-6807](https://issues.scala-lang.org/browse/SI-6807) | [8a2cebe](https://github.com/scala/scala/commit/8a2cebe) | <notextile>SI-6807 Deprecating the Actors library.</notextile>
[SI-7164](https://issues.scala-lang.org/browse/SI-7164) | [68f62d7](https://github.com/scala/scala/commit/68f62d7) | <notextile>SI-7164 - Removing NotImplementedError as Fatal from s.u.c.NonFatal</notextile>
[SI-7130](https://issues.scala-lang.org/browse/SI-7130) | [c8ab5b3](https://github.com/scala/scala/commit/c8ab5b3) | <notextile>Fix SI-7130: Memory leaked caused by Statistics</notextile>
[SI-7143](https://issues.scala-lang.org/browse/SI-7143) | [4df9e20](https://github.com/scala/scala/commit/4df9e20) | <notextile>SI-7143 Fix scanner docComment: docBuffer and docPos are initialized in differen</notextile>
[SI-7134](https://issues.scala-lang.org/browse/SI-7134) | [fd68fe6](https://github.com/scala/scala/commit/fd68fe6) | <notextile>SI-7134: don't require doc.Settings in base api of scaladoc.</notextile>
[SI-5063](https://issues.scala-lang.org/browse/SI-5063) | [c10b7b6](https://github.com/scala/scala/commit/c10b7b6) | <notextile>unit test ide-t1000567 exercises SI-5063, aka #1000567.</notextile>
[SI-5920](https://issues.scala-lang.org/browse/SI-5920), [SI-5744](https://issues.scala-lang.org/browse/SI-5744) | [9d5d55b](https://github.com/scala/scala/commit/9d5d55b) | <notextile>SI-5744 evidence params are now SYNTHETIC</notextile>
[SI-2296](https://issues.scala-lang.org/browse/SI-2296), [SI-7091](https://issues.scala-lang.org/browse/SI-7091) | [6a7d793](https://github.com/scala/scala/commit/6a7d793) | <notextile>SI-7091 Don't try to put a protected accessor in a package.</notextile>
[SI-7091](https://issues.scala-lang.org/browse/SI-7091) | [2e8ede5](https://github.com/scala/scala/commit/2e8ede5) | <notextile>SI-7091 Add a diagnostic for the &quot;no acc def buf&quot; error.</notextile>
[SI-6642](https://issues.scala-lang.org/browse/SI-6642) | [07ba1f8](https://github.com/scala/scala/commit/07ba1f8) | <notextile>SI-6642 Code cleanup from review of iteratorFrom</notextile>
[SI-6642](https://issues.scala-lang.org/browse/SI-6642) | [3903779](https://github.com/scala/scala/commit/3903779) | <notextile>SI-6642 Refactor mutable.TreeSet to use RedBlackTree instead of AVL</notextile>
[SI-6642](https://issues.scala-lang.org/browse/SI-6642) | [62bc99d](https://github.com/scala/scala/commit/62bc99d) | <notextile>SI-6642 Adds iteratorFrom, keysIteratorFrom, and valuesIteratorFrom</notextile>
[SI-6642](https://issues.scala-lang.org/browse/SI-6642) | [a0b1db4](https://github.com/scala/scala/commit/a0b1db4) | <notextile>SI-6642 Code cleanup on RedBlackTree#TreeIterator</notextile>
[SI-6514](https://issues.scala-lang.org/browse/SI-6514) | [673cc83](https://github.com/scala/scala/commit/673cc83) | <notextile>SI-6514 Avoid spurious dead code warnings</notextile>
[SI-6225](https://issues.scala-lang.org/browse/SI-6225) | [451cab9](https://github.com/scala/scala/commit/451cab9) | <notextile>SI-6225 Fix import of inherited package object implicits</notextile>
[SI-6935](https://issues.scala-lang.org/browse/SI-6935) | [c049d66](https://github.com/scala/scala/commit/c049d66) | <notextile>SI-6935 Added readResolve in BoxedUnit When deserializing Unit, it would return </notextile>
[SI-6370](https://issues.scala-lang.org/browse/SI-6370) | [7b425bf](https://github.com/scala/scala/commit/7b425bf) | <notextile>SI-6370 changed ListMap apply0 method to produce correct error message when a ke</notextile>
[SI-6158](https://issues.scala-lang.org/browse/SI-6158) | [6424907](https://github.com/scala/scala/commit/6424907) | <notextile>SI-6158 Restore compile error output under partest --show-log</notextile>
[SI-6355](https://issues.scala-lang.org/browse/SI-6355) | [c26cc53](https://github.com/scala/scala/commit/c26cc53) | <notextile>SI-6355, weakend implementation restriction on applyDynamic.</notextile>
[SI-4793](https://issues.scala-lang.org/browse/SI-4793) | [c26a8db](https://github.com/scala/scala/commit/c26a8db) | <notextile>Maintenance of Predef.</notextile>
[SI-7082](https://issues.scala-lang.org/browse/SI-7082), [SI-7083](https://issues.scala-lang.org/browse/SI-7083), [SI-6591](https://issues.scala-lang.org/browse/SI-6591) | [09ef873](https://github.com/scala/scala/commit/09ef873) | <notextile>SI-6591 Reify and path-dependent types</notextile>
[SI-5675](https://issues.scala-lang.org/browse/SI-5675) | [e0068b9](https://github.com/scala/scala/commit/e0068b9) | <notextile>SI-5675 Discard duplicate feature warnings at a position</notextile>
[SI-7096](https://issues.scala-lang.org/browse/SI-7096) | [5258b63](https://github.com/scala/scala/commit/5258b63) | <notextile>SI-7096 SubstSymMap copies trees before modifying their symbols</notextile>
[SI-6478](https://issues.scala-lang.org/browse/SI-6478) | [6052e19](https://github.com/scala/scala/commit/6052e19) | <notextile>[backport] SI-6478 Fixing JavaTokenParser ident</notextile>
[SI-5824](https://issues.scala-lang.org/browse/SI-5824) | [96b0eff](https://github.com/scala/scala/commit/96b0eff) | <notextile>SI-5824 Fix crashes in reify with _*</notextile>
[SI-5374](https://issues.scala-lang.org/browse/SI-5374), [SI-6961](https://issues.scala-lang.org/browse/SI-6961) | [fa3b804](https://github.com/scala/scala/commit/fa3b804) | <notextile>SI-6961 no structural sharing in list serialization</notextile>
[SI-6187](https://issues.scala-lang.org/browse/SI-6187) | [dfbaaa1](https://github.com/scala/scala/commit/dfbaaa1) | <notextile>SI-6187 Make partial functions re-typable</notextile>
[SI-6146](https://issues.scala-lang.org/browse/SI-6146) | [55c9b9c](https://github.com/scala/scala/commit/55c9b9c) | <notextile>SI-6146 More accurate prefixes for sealed subtypes.</notextile>
[SI-5954](https://issues.scala-lang.org/browse/SI-5954), [SI-7070](https://issues.scala-lang.org/browse/SI-7070) | [1426fec](https://github.com/scala/scala/commit/1426fec) | <notextile>SI-7070 Turn restriction on companions in pkg objs into warning</notextile>
[SI-5082](https://issues.scala-lang.org/browse/SI-5082) | [a0ee6e9](https://github.com/scala/scala/commit/a0ee6e9) | <notextile>SI-5082 Cycle avoidance between case companions</notextile>
[SI-7100](https://issues.scala-lang.org/browse/SI-7100) | [a53e150](https://github.com/scala/scala/commit/a53e150) | <notextile>SI-7100 Fixed infinite recursion in duplicators</notextile>
[SI-6113](https://issues.scala-lang.org/browse/SI-6113) | [0d68a87](https://github.com/scala/scala/commit/0d68a87) | <notextile>SI-6113 typeOf now works for type lambdas</notextile>
[SI-7026](https://issues.scala-lang.org/browse/SI-7026), [SI-7026](https://issues.scala-lang.org/browse/SI-7026) | [79e774f](https://github.com/scala/scala/commit/79e774f) | <notextile>SI-7026: parseTree should never return a typed one</notextile>
[SI-6666](https://issues.scala-lang.org/browse/SI-6666) | [81fa831](https://github.com/scala/scala/commit/81fa831) | <notextile>Class symbols can't be contravariant.</notextile>
[SI-6666](https://issues.scala-lang.org/browse/SI-6666) | [275b341](https://github.com/scala/scala/commit/275b341) | <notextile>SI-6666 Catch VerifyErrors in the making in early defs.</notextile>
[SI-6666](https://issues.scala-lang.org/browse/SI-6666) | [4c34280](https://github.com/scala/scala/commit/4c34280) | <notextile>Add a test case from the comments of SI-6666.</notextile>
[SI-6259](https://issues.scala-lang.org/browse/SI-6259), [SI-6506](https://issues.scala-lang.org/browse/SI-6506), [SI-6957](https://issues.scala-lang.org/browse/SI-6957), [SI-6666](https://issues.scala-lang.org/browse/SI-6666) | [fd61254](https://github.com/scala/scala/commit/fd61254) | <notextile>SI-6666 Account for nesting in setting INCONSTRUCTOR</notextile>
[SI-2806](https://issues.scala-lang.org/browse/SI-2806), [SI-6888](https://issues.scala-lang.org/browse/SI-6888) | [b579a42](https://github.com/scala/scala/commit/b579a42) | <notextile>SI-6888 Loosen criteria for $outer search.</notextile>
[SI-7071](https://issues.scala-lang.org/browse/SI-7071), [SI-7072](https://issues.scala-lang.org/browse/SI-7072) | [b43ae58](https://github.com/scala/scala/commit/b43ae58) | <notextile>introduces an exhaustive java-to-scala test</notextile>
[SI-6989](https://issues.scala-lang.org/browse/SI-6989) | [02ed5fb](https://github.com/scala/scala/commit/02ed5fb) | <notextile>SI-6989 privateWithin is now populated in reflect</notextile>
[SI-5017](https://issues.scala-lang.org/browse/SI-5017) | [015ff51](https://github.com/scala/scala/commit/015ff51) | <notextile>[nomaster] Revert &quot;SI-5017 Poor performance of :+ operator on Arrays&quot;</notextile>
[SI-6150](https://issues.scala-lang.org/browse/SI-6150), [SI-6773](https://issues.scala-lang.org/browse/SI-6773), [SI-6150](https://issues.scala-lang.org/browse/SI-6150) | [87d52db](https://github.com/scala/scala/commit/87d52db) | <notextile>[nomaster] SI-6773 Makes the SI-6150 changes binary compatible with 2.10</notextile>
[SI-7060](https://issues.scala-lang.org/browse/SI-7060) | [e5c0e59](https://github.com/scala/scala/commit/e5c0e59) | <notextile>SI-7060 More conservative dead code elim marking</notextile>
[SI-7039](https://issues.scala-lang.org/browse/SI-7039) | [8ae0e2a](https://github.com/scala/scala/commit/8ae0e2a) | <notextile>SI-7039 unapplySeq result type independent of subpattern count</notextile>
[SI-5833](https://issues.scala-lang.org/browse/SI-5833) | [0574172](https://github.com/scala/scala/commit/0574172) | <notextile>SI-5833 Fixes tail-of-Nil problem in RefinedType#normalizeImpl</notextile>
[SI-6667](https://issues.scala-lang.org/browse/SI-6667) | [b67f8e5](https://github.com/scala/scala/commit/b67f8e5) | <notextile>[nomerge] SI-6667 Demote a new ambiguity error to a lint warning.</notextile>
[SI-6017](https://issues.scala-lang.org/browse/SI-6017) | [0e8d8c7](https://github.com/scala/scala/commit/0e8d8c7) | <notextile>SI-6017 Scaladoc: Show all letters without dangling links</notextile>
[SI-6017](https://issues.scala-lang.org/browse/SI-6017) | [3f0bce9](https://github.com/scala/scala/commit/3f0bce9) | <notextile>SI-6017 Generate Scaladoc's index links in Scala side</notextile>
[SI-6578](https://issues.scala-lang.org/browse/SI-6578) | [a6137d1](https://github.com/scala/scala/commit/a6137d1) | <notextile>Fix SI-6578. Deprecated `askType` because of possible race conditions in type ch</notextile>
[SI-7008](https://issues.scala-lang.org/browse/SI-7008) | [f1701f7](https://github.com/scala/scala/commit/f1701f7) | <notextile>SI-7008 @throws annotations are now populated in reflect</notextile>
[SI-7033](https://issues.scala-lang.org/browse/SI-7033) | [3af838c](https://github.com/scala/scala/commit/3af838c) | <notextile>SI-7033 Be symful when creating factory methods.</notextile>
[SI-6422](https://issues.scala-lang.org/browse/SI-6422) | [bc01614](https://github.com/scala/scala/commit/bc01614) | <notextile>Revert &quot;SI-6422: add missing Fractional and Integral alias in scala package&quot;</notextile>
[SI-5313](https://issues.scala-lang.org/browse/SI-5313) | [4fda83f](https://github.com/scala/scala/commit/4fda83f) | <notextile>SI-5313 Minor code cleanup for store clobbering</notextile>
[SI-5313](https://issues.scala-lang.org/browse/SI-5313) | [c7d489e](https://github.com/scala/scala/commit/c7d489e) | <notextile>SI-5313 Test clobbers on the back edge of a loop</notextile>
[SI-5313](https://issues.scala-lang.org/browse/SI-5313) | [9b4fa83](https://github.com/scala/scala/commit/9b4fa83) | <notextile>SI-5313 Eliminate more stores by replacing clobbers with null stores</notextile>
[SI-5313](https://issues.scala-lang.org/browse/SI-5313) | [eab2884](https://github.com/scala/scala/commit/eab2884) | <notextile>SI-5313 Do not eliminate stores that potentially wipe referenes</notextile>
[SI-7046](https://issues.scala-lang.org/browse/SI-7046) | [2403d1d](https://github.com/scala/scala/commit/2403d1d) | <notextile>SI-7046 reflection now auto-initializes knownDirectSubclasses</notextile>
[SI-6482](https://issues.scala-lang.org/browse/SI-6482), [SI-7022](https://issues.scala-lang.org/browse/SI-7022) | [374c912](https://github.com/scala/scala/commit/374c912) | <notextile>SI-7022 Additional test case for value class w. bounds</notextile>
[SI-6482](https://issues.scala-lang.org/browse/SI-6482), [SI-6482](https://issues.scala-lang.org/browse/SI-6482) | [4ed8836](https://github.com/scala/scala/commit/4ed8836) | <notextile>[backport] SI-6482, lost bounds in extension methods.</notextile>
[SI-6941](https://issues.scala-lang.org/browse/SI-6941) | [b2117cf](https://github.com/scala/scala/commit/b2117cf) | <notextile>SI-6941 tests</notextile>
[SI-6686](https://issues.scala-lang.org/browse/SI-6686) | [b92396b](https://github.com/scala/scala/commit/b92396b) | <notextile>SI-6686 drop valdef unused in flatMapCond's block</notextile>
[SI-5158](https://issues.scala-lang.org/browse/SI-5158), [SI-6941](https://issues.scala-lang.org/browse/SI-6941) | [494ba94](https://github.com/scala/scala/commit/494ba94) | <notextile>don't store subpats bound to underscore</notextile>
[SI-4976](https://issues.scala-lang.org/browse/SI-4976) | [d71f59e](https://github.com/scala/scala/commit/d71f59e) | <notextile>SI-4976 Scaladoc: Add a source link to package objects</notextile>
[SI-7029](https://issues.scala-lang.org/browse/SI-7029) | [5275bae](https://github.com/scala/scala/commit/5275bae) | <notextile>SI-7029 - Make test more robust</notextile>
[SI-7029](https://issues.scala-lang.org/browse/SI-7029) | [3f78bee](https://github.com/scala/scala/commit/3f78bee) | <notextile>SI-7029 - Makes sure that uncaught exceptions are propagated to the UEH for the </notextile>
[SI-6539](https://issues.scala-lang.org/browse/SI-6539) | [2989258](https://github.com/scala/scala/commit/2989258) | <notextile>SI-6539 moves @compileTimeOnly away from scala-reflect</notextile>
[SI-5151](https://issues.scala-lang.org/browse/SI-5151) | [8bd03e0](https://github.com/scala/scala/commit/8bd03e0) | <notextile>SI-5151 - Add firstKey and lastKey to LongMap.</notextile>
[SI-6773](https://issues.scala-lang.org/browse/SI-6773) | [108a1f7](https://github.com/scala/scala/commit/108a1f7) | <notextile>SI-6773 Changes IndexSeqFactory to be &quot;since 2.11&quot;</notextile>
[SI-5543](https://issues.scala-lang.org/browse/SI-5543), [SI-1803](https://issues.scala-lang.org/browse/SI-1803) | [b74c33e](https://github.com/scala/scala/commit/b74c33e) | <notextile>SI-1803, plus documentation and cleanups in Namers, mainly in typeSig</notextile>
[SI-6812](https://issues.scala-lang.org/browse/SI-6812) | [941c569](https://github.com/scala/scala/commit/941c569) | <notextile>SI-6812 scaladoc can opt out of expanding macros</notextile>
[SI-6206](https://issues.scala-lang.org/browse/SI-6206), [SI-6206](https://issues.scala-lang.org/browse/SI-6206) | [11ac963](https://github.com/scala/scala/commit/11ac963) | <notextile>[backport] Fix for SI-6206, inconsistency with apply.</notextile>
[SI-6601](https://issues.scala-lang.org/browse/SI-6601) | [5a2828c](https://github.com/scala/scala/commit/5a2828c) | <notextile>A test case to guide the eventual fix for SI-6601.</notextile>
[SI-6601](https://issues.scala-lang.org/browse/SI-6601) | [172f3f6](https://github.com/scala/scala/commit/172f3f6) | <notextile>Revert &quot;SI-6601 Publicise derived value contstructor after pickler&quot;</notextile>
[SI-2818](https://issues.scala-lang.org/browse/SI-2818) | [6db4db9](https://github.com/scala/scala/commit/6db4db9) | <notextile>SI-2818 Make List.foldRight always do a reverse/foldLeft flip</notextile>
[SI-2968](https://issues.scala-lang.org/browse/SI-2968), [SI-2968](https://issues.scala-lang.org/browse/SI-2968) | [8350cd9](https://github.com/scala/scala/commit/8350cd9) | <notextile>[backport] SI-2968 Fix brace healing for `^case (class&#124;object) {`</notextile>
[SI-6963](https://issues.scala-lang.org/browse/SI-6963) | [1de399d](https://github.com/scala/scala/commit/1de399d) | <notextile>SI-6963 Add version to -Xmigration</notextile>
[SI-3353](https://issues.scala-lang.org/browse/SI-3353), [SI-3353](https://issues.scala-lang.org/browse/SI-3353) | [1049435](https://github.com/scala/scala/commit/1049435) | <notextile>SI-3353 don't extract &lt;unapply-selector&gt; into named-arg local val</notextile>
[SI-6017](https://issues.scala-lang.org/browse/SI-6017) | [831bffd](https://github.com/scala/scala/commit/831bffd) | <notextile>SI-6017 Scaladoc's Index should be case-sensitive</notextile>
[SI-6853](https://issues.scala-lang.org/browse/SI-6853) | [e36327a](https://github.com/scala/scala/commit/e36327a) | <notextile>SI-6853 changed private method remove to be tail recursive. Operations += and -=</notextile>
[SI-6595](https://issues.scala-lang.org/browse/SI-6595) | [ff92610](https://github.com/scala/scala/commit/ff92610) | <notextile>SI-6595, lost modifiers in early defs.</notextile>
[SI-6584](https://issues.scala-lang.org/browse/SI-6584) | [98534b2](https://github.com/scala/scala/commit/98534b2) | <notextile>SI-6584, Stream#distinct uses too much memory.</notextile>
[SI-6426](https://issues.scala-lang.org/browse/SI-6426) | [d2316df](https://github.com/scala/scala/commit/d2316df) | <notextile>SI-6426, importable _.</notextile>
[SI-6072](https://issues.scala-lang.org/browse/SI-6072) | [05882eb](https://github.com/scala/scala/commit/05882eb) | <notextile>SI-6072, crasher with overloaded eq.</notextile>
[SI-5604](https://issues.scala-lang.org/browse/SI-5604) | [d4437aa](https://github.com/scala/scala/commit/d4437aa) | <notextile>SI-5604, selections on package objects.</notextile>
[SI-5859](https://issues.scala-lang.org/browse/SI-5859) | [e156cd1](https://github.com/scala/scala/commit/e156cd1) | <notextile>SI-5859, inapplicable varargs.</notextile>
[SI-5353](https://issues.scala-lang.org/browse/SI-5353) | [f3f1e50](https://github.com/scala/scala/commit/f3f1e50) | <notextile>SI-5353, imperfect error message.</notextile>
[SI-5130](https://issues.scala-lang.org/browse/SI-5130) | [77ec4ef](https://github.com/scala/scala/commit/77ec4ef) | <notextile>SI-5130, precision disappearing from refinement.</notextile>
[SI-4729](https://issues.scala-lang.org/browse/SI-4729) | [faca7ec](https://github.com/scala/scala/commit/faca7ec) | <notextile>SI-4729, overriding java varargs in scala.</notextile>
[SI-2418](https://issues.scala-lang.org/browse/SI-2418), [SI-2418](https://issues.scala-lang.org/browse/SI-2418) | [0990890](https://github.com/scala/scala/commit/0990890) | <notextile>SI-2418, remove restriction on final vars.</notextile>
[SI-6572](https://issues.scala-lang.org/browse/SI-6572) | [16eaefb](https://github.com/scala/scala/commit/16eaefb) | <notextile>SI-6572 Test case, originally fixed in a3680be.</notextile>
[SI-6301](https://issues.scala-lang.org/browse/SI-6301), [SI-6301](https://issues.scala-lang.org/browse/SI-6301), [SI-6301](https://issues.scala-lang.org/browse/SI-6301), [SI-6572](https://issues.scala-lang.org/browse/SI-6572) | [0679da5](https://github.com/scala/scala/commit/0679da5) | <notextile>[backport] SI-6301 / SI-6572 specialization regressions</notextile>
[SI-5378](https://issues.scala-lang.org/browse/SI-5378) | [f6d90a8](https://github.com/scala/scala/commit/f6d90a8) | <notextile>[backport] SI-5378, unsoundness with type bounds in refinements.</notextile>
[SI-4714](https://issues.scala-lang.org/browse/SI-4714) | [5f85fe5](https://github.com/scala/scala/commit/5f85fe5) | <notextile>SI-4714 Initialize history while initializing the REPL's reader</notextile>
[SI-2418](https://issues.scala-lang.org/browse/SI-2418), [SI-2418](https://issues.scala-lang.org/browse/SI-2418) | [243cede](https://github.com/scala/scala/commit/243cede) | <notextile>[backport] Removed restriction on final vars, SI-2418.</notextile>
[SI-7009](https://issues.scala-lang.org/browse/SI-7009), [SI-7009](https://issues.scala-lang.org/browse/SI-7009) | [fefe6cc](https://github.com/scala/scala/commit/fefe6cc) | <notextile>SI-7009: `@throws` annotation synthesized incorrectly</notextile>
[SI-7009](https://issues.scala-lang.org/browse/SI-7009) | [e22d801](https://github.com/scala/scala/commit/e22d801) | <notextile>Test case for SI-7009.</notextile>
[SI-1336](https://issues.scala-lang.org/browse/SI-1336), [SI-5589](https://issues.scala-lang.org/browse/SI-5589), [SI-4574](https://issues.scala-lang.org/browse/SI-4574), [SI-6968](https://issues.scala-lang.org/browse/SI-6968), [SI-6968](https://issues.scala-lang.org/browse/SI-6968) | [a87d409](https://github.com/scala/scala/commit/a87d409) | <notextile>SI-6968 Simple Tuple patterns aren't irrefutable</notextile>
[SI-6669](https://issues.scala-lang.org/browse/SI-6669) | [166fd02](https://github.com/scala/scala/commit/166fd02) | <notextile>SI-6669 Add . to the default scalap classpath</notextile>
[SI-6728](https://issues.scala-lang.org/browse/SI-6728) | [80a814d](https://github.com/scala/scala/commit/80a814d) | <notextile>SI-6728 Fixes crash in parser on incomplete for expression</notextile>
[SI-7035](https://issues.scala-lang.org/browse/SI-7035) | [9afae59](https://github.com/scala/scala/commit/9afae59) | <notextile>SI-7035 Centralize case field accessor sorting.</notextile>
[SI-6726](https://issues.scala-lang.org/browse/SI-6726) | [6357c8d](https://github.com/scala/scala/commit/6357c8d) | <notextile>SI-6726 Further optimization of pattern analysis</notextile>
[SI-6726](https://issues.scala-lang.org/browse/SI-6726), [SI-6726](https://issues.scala-lang.org/browse/SI-6726) | [14d8c22](https://github.com/scala/scala/commit/14d8c22) | <notextile>SI-6726 Hash consing for Pattern matching Sym-s</notextile>
[SI-6726](https://issues.scala-lang.org/browse/SI-6726) | [32c0a2e](https://github.com/scala/scala/commit/32c0a2e) | <notextile>SI-6726 Add benchmark used for testing pattern matcher.</notextile>
[SI-6154](https://issues.scala-lang.org/browse/SI-6154) | [d3f3394](https://github.com/scala/scala/commit/d3f3394) | <notextile>[backport] Fix for SI-6154, VerifyError originating in uncurry.</notextile>
[SI-6516](https://issues.scala-lang.org/browse/SI-6516) | [6f86583](https://github.com/scala/scala/commit/6f86583) | <notextile>SI-6516, macros comparing types with == instead of =:=.</notextile>
[SI-6551](https://issues.scala-lang.org/browse/SI-6551) | [cfaa3b5](https://github.com/scala/scala/commit/cfaa3b5) | <notextile>SI-6551 Expand test case into uncomfortable areas.</notextile>
[SI-6651](https://issues.scala-lang.org/browse/SI-6651) | [45ccdc5](https://github.com/scala/scala/commit/45ccdc5) | <notextile>SI-6651 Substitute `this` in extension method sigs</notextile>
[SI-6987](https://issues.scala-lang.org/browse/SI-6987) | [bffe776](https://github.com/scala/scala/commit/bffe776) | <notextile>[backport] Disabled SI-6987.</notextile>
[SI-6258](https://issues.scala-lang.org/browse/SI-6258), [SI-6258](https://issues.scala-lang.org/browse/SI-6258), [SI-3577](https://issues.scala-lang.org/browse/SI-3577), [SI-3577](https://issues.scala-lang.org/browse/SI-3577) | [b8da00e](https://github.com/scala/scala/commit/b8da00e) | <notextile>[backport] SI-3577 BoundedWildcardType handling</notextile>
[SI-5459](https://issues.scala-lang.org/browse/SI-5459) | [6d669f3](https://github.com/scala/scala/commit/6d669f3) | <notextile>Pending test for SI-5459.</notextile>
[SI-6939](https://issues.scala-lang.org/browse/SI-6939) | [b6f898f](https://github.com/scala/scala/commit/b6f898f) | <notextile>SI-6939 Fix namespace binding (xmlns) not overriding outer binding</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [aa199b8](https://github.com/scala/scala/commit/aa199b8) | <notextile>Revert &quot;SI-6811 Misc. removals in util, testing, io, ...&quot;</notextile>
[SI-6891](https://issues.scala-lang.org/browse/SI-6891) | [7babdab](https://github.com/scala/scala/commit/7babdab) | <notextile>SI-6891 Fix value class + tailrec crasher.</notextile>
[SI-6981](https://issues.scala-lang.org/browse/SI-6981) | [cff0934](https://github.com/scala/scala/commit/cff0934) | <notextile>Ill-scoped reference checking in TreeCheckers</notextile>
[SI-4602](https://issues.scala-lang.org/browse/SI-4602) | [3cbb002](https://github.com/scala/scala/commit/3cbb002) | <notextile>SI-4602 Disable unreliable test of fsc path absolutization</notextile>
[SI-4602](https://issues.scala-lang.org/browse/SI-4602), [SI-4602](https://issues.scala-lang.org/browse/SI-4602) | [952e1bf](https://github.com/scala/scala/commit/952e1bf) | <notextile>SI-4602 Make fsc absolutize source file names</notextile>
[SI-4733](https://issues.scala-lang.org/browse/SI-4733), [SI-4733](https://issues.scala-lang.org/browse/SI-4733) | [e0cf651](https://github.com/scala/scala/commit/e0cf651) | <notextile>SI-4733 - fsc no longer creates a single temp directory for all users.</notextile>
[SI-6863](https://issues.scala-lang.org/browse/SI-6863) | [0b52a51](https://github.com/scala/scala/commit/0b52a51) | <notextile>SI-6863 Fix verify error in captured var inited from expr with try/catch</notextile>
[SI-6932](https://issues.scala-lang.org/browse/SI-6932) | [262d7ec](https://github.com/scala/scala/commit/262d7ec) | <notextile>SI-6932 Remove Batchable trait plus minor clean-ups</notextile>
[SI-6932](https://issues.scala-lang.org/browse/SI-6932) | [08a74e5](https://github.com/scala/scala/commit/08a74e5) | <notextile> Fix SI-6932 by enabling linearization of callback execution for the internal ex</notextile>
[SI-6443](https://issues.scala-lang.org/browse/SI-6443) | [11329c3](https://github.com/scala/scala/commit/11329c3) | <notextile>SI-6443 Expand test coverage with varargs, by-name.</notextile>
[SI-6443](https://issues.scala-lang.org/browse/SI-6443) | [493197f](https://github.com/scala/scala/commit/493197f) | <notextile>SI-6443 Widen dependent param types in uncurry</notextile>
[SI-7018](https://issues.scala-lang.org/browse/SI-7018) | [a72aa94](https://github.com/scala/scala/commit/a72aa94) | <notextile>SI-7018 Fix memory leak in Attachments.</notextile>
[SI-6556](https://issues.scala-lang.org/browse/SI-6556), [SI-6648](https://issues.scala-lang.org/browse/SI-6648), [SI-6556](https://issues.scala-lang.org/browse/SI-6556) | [982633a](https://github.com/scala/scala/commit/982633a) | <notextile>SI-6556 Remove unneeded workaround in erasure.</notextile>
[SI-5304](https://issues.scala-lang.org/browse/SI-5304) | [2580a51](https://github.com/scala/scala/commit/2580a51) | <notextile>Laying groundwork for a followup ticket.</notextile>
[SI-4859](https://issues.scala-lang.org/browse/SI-4859) | [412ad57](https://github.com/scala/scala/commit/412ad57) | <notextile>SI-4859 Retain MODULE_LOAD in dead code elim.</notextile>
[SI-4859](https://issues.scala-lang.org/browse/SI-4859) | [f21b1ce](https://github.com/scala/scala/commit/f21b1ce) | <notextile>SI-4859 Don't elide qualifiers when selecting nested modules.</notextile>
[SI-4859](https://issues.scala-lang.org/browse/SI-4859) | [61f2936](https://github.com/scala/scala/commit/61f2936) | <notextile>SI-4859 Don't rewrite CC().CC2() to new CC2</notextile>
[SI-6083](https://issues.scala-lang.org/browse/SI-6083) | [76bb23d](https://github.com/scala/scala/commit/76bb23d) | <notextile>SI-6083, misleading annotation error message.</notextile>
[SI-5182](https://issues.scala-lang.org/browse/SI-5182) | [801eab5](https://github.com/scala/scala/commit/801eab5) | <notextile>SI-5182, no position on annotation error.</notextile>
[SI-2577](https://issues.scala-lang.org/browse/SI-2577), [SI-6860](https://issues.scala-lang.org/browse/SI-6860) | [832fc9a](https://github.com/scala/scala/commit/832fc9a) | <notextile>SI-2577, SI-6860: annotation type inference.</notextile>
[SI-6987](https://issues.scala-lang.org/browse/SI-6987) | [53d5df5](https://github.com/scala/scala/commit/53d5df5) | <notextile>Disabled SI-6987.</notextile>
[SI-7011](https://issues.scala-lang.org/browse/SI-7011) | [d592216](https://github.com/scala/scala/commit/d592216) | <notextile>SI-7011 Fix finding constructor type in captured var definitions</notextile>
[SI-6231](https://issues.scala-lang.org/browse/SI-6231) | [f6168b8](https://github.com/scala/scala/commit/f6168b8) | <notextile>SI-6231 Report unsupported free var capture by a trait.</notextile>
[SI-6987](https://issues.scala-lang.org/browse/SI-6987) | [1dab5bf](https://github.com/scala/scala/commit/1dab5bf) | <notextile>SI-6987 Tests fsc verbose output</notextile>
[SI-6987](https://issues.scala-lang.org/browse/SI-6987) | [e12a5b8](https://github.com/scala/scala/commit/e12a5b8) | <notextile>SI-6987 Fixes fsc compile server verbose output</notextile>
[SI-6997](https://issues.scala-lang.org/browse/SI-6997), [SI-6666](https://issues.scala-lang.org/browse/SI-6666) | [1a7de43](https://github.com/scala/scala/commit/1a7de43) | <notextile>SI-6666 Restrict hidden `this` access in self/super calls.</notextile>
[SI-6011](https://issues.scala-lang.org/browse/SI-6011), [SI-6902](https://issues.scala-lang.org/browse/SI-6902) | [cbd0205](https://github.com/scala/scala/commit/cbd0205) | <notextile>SI-6902 Check unreachability under @unchecked</notextile>
[SI-6952](https://issues.scala-lang.org/browse/SI-6952) | [8a74b7b](https://github.com/scala/scala/commit/8a74b7b) | <notextile>Closes SI-6952: add correct error positions for Dynamic feature check.</notextile>
[SI-6969](https://issues.scala-lang.org/browse/SI-6969) | [0d01cc1](https://github.com/scala/scala/commit/0d01cc1) | <notextile>SI-6969, mishandling of SoftReferences in method cache.</notextile>
[SI-6976](https://issues.scala-lang.org/browse/SI-6976) | [d9d6494](https://github.com/scala/scala/commit/d9d6494) | <notextile>SI-6976 Fix value class separate compilation crasher.</notextile>
[SI-6637](https://issues.scala-lang.org/browse/SI-6637), [SI-6637](https://issues.scala-lang.org/browse/SI-6637) | [4dceb22](https://github.com/scala/scala/commit/4dceb22) | <notextile>[backport] Fix SI-6637 (misoptimization in erasure)</notextile>
[SI-6611](https://issues.scala-lang.org/browse/SI-6611), [SI-6247](https://issues.scala-lang.org/browse/SI-6247), [SI-6611](https://issues.scala-lang.org/browse/SI-6611), [SI-6247](https://issues.scala-lang.org/browse/SI-6247) | [ba411c4](https://github.com/scala/scala/commit/ba411c4) | <notextile>[backport] Fix unsafe array opt. / opt. primitive Array(...)</notextile>
[SI-6567](https://issues.scala-lang.org/browse/SI-6567), [SI-6567](https://issues.scala-lang.org/browse/SI-6567) | [96ed055](https://github.com/scala/scala/commit/96ed055) | <notextile>[backport] SI-6567 Warning for Option(implicitView(foo))</notextile>
[SI-6439](https://issues.scala-lang.org/browse/SI-6439) | [3486d47](https://github.com/scala/scala/commit/3486d47) | <notextile>SI-6439 Avoid spurious REPL warnings about companionship</notextile>
[SI-6923](https://issues.scala-lang.org/browse/SI-6923), [SI-6994](https://issues.scala-lang.org/browse/SI-6994) | [52a5328](https://github.com/scala/scala/commit/52a5328) | <notextile>Addressing warnings.</notextile>
[SI-6994](https://issues.scala-lang.org/browse/SI-6994) | [8f49884](https://github.com/scala/scala/commit/8f49884) | <notextile>SI-6994 Avoid spurious promiscuous catch warning</notextile>
[SI-6434](https://issues.scala-lang.org/browse/SI-6434) | [8297843](https://github.com/scala/scala/commit/8297843) | <notextile>SI-6434 Pretty print function types with by name arg as (=&gt; A) =&gt; B</notextile>
[SI-6942](https://issues.scala-lang.org/browse/SI-6942) | [f539781](https://github.com/scala/scala/commit/f539781) | <notextile>SI-6942 more efficient unreachability analysis</notextile>
[SI-5568](https://issues.scala-lang.org/browse/SI-5568) | [c606559](https://github.com/scala/scala/commit/c606559) | <notextile>SI-5568 Comment improvements for getClass on primitive intersection.</notextile>
[SI-5568](https://issues.scala-lang.org/browse/SI-5568) | [765386f](https://github.com/scala/scala/commit/765386f) | <notextile>SI-5568 Fixes verify error from getClass on refinement of value type</notextile>
[SI-6608](https://issues.scala-lang.org/browse/SI-6608), [SI-6601](https://issues.scala-lang.org/browse/SI-6601) | [b07228a](https://github.com/scala/scala/commit/b07228a) | <notextile>SI-6601 Publicise derived value contstructor after pickler</notextile>
[SI-6923](https://issues.scala-lang.org/browse/SI-6923) | [66fe64f](https://github.com/scala/scala/commit/66fe64f) | <notextile>SI-6923 Context now buffers warnings as well as errors</notextile>
[SI-6956](https://issues.scala-lang.org/browse/SI-6956) | [a6b34b6](https://github.com/scala/scala/commit/a6b34b6) | <notextile>SI-6956 determine switchability by type, not tree</notextile>
[SI-5824](https://issues.scala-lang.org/browse/SI-5824) | [950e938](https://github.com/scala/scala/commit/950e938) | <notextile>Revert &quot;SI-5824 Fix crashes in reify with _*&quot;</notextile>
[SI-5824](https://issues.scala-lang.org/browse/SI-5824) | [0a25ee3](https://github.com/scala/scala/commit/0a25ee3) | <notextile>SI-5824 Fix crashes in reify with _*</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [a9c374b](https://github.com/scala/scala/commit/a9c374b) | <notextile>SI-6811 Move scala.util.{automata,regexp} ... ... to scala.xml.dtd.impl and make</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [a386291](https://github.com/scala/scala/commit/a386291) | <notextile>SI-6811 Remove scala.xml.include.sax.Main</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [98d3368](https://github.com/scala/scala/commit/98d3368) | <notextile>SI-6811 Remove scala.ScalaObject</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [684f549](https://github.com/scala/scala/commit/684f549) | <notextile>SI-6811 Remove the scala.annotation.target package</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [f931833](https://github.com/scala/scala/commit/f931833) | <notextile>SI-6811 Misc. removals in util, testing, io, ...</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [be5554f](https://github.com/scala/scala/commit/be5554f) | <notextile>SI-6811 Remove deprecated elements in scala.collection</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [67d7e26](https://github.com/scala/scala/commit/67d7e26) | <notextile>SI-6811 Remove parts of scala.concurrent not needed by scala.actors</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [b13bf26](https://github.com/scala/scala/commit/b13bf26) | <notextile>SI-6811 Remove the scala.util.grammar package</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [c2903d6](https://github.com/scala/scala/commit/c2903d6) | <notextile>SI-6811 Remove scala.collection.mutable.ConcurrentMap</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [ed52ea0](https://github.com/scala/scala/commit/ed52ea0) | <notextile>SI-6811 Remove primitive widenings and /:\</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [2ee8568](https://github.com/scala/scala/commit/2ee8568) | <notextile>SI-6811 Remove deprecated constructors</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [167fc0a](https://github.com/scala/scala/commit/167fc0a) | <notextile>SI-6811 Remove usages of scala.annotation.cloneable</notextile>
[SI-6811](https://issues.scala-lang.org/browse/SI-6811) | [4805b97](https://github.com/scala/scala/commit/4805b97) | <notextile>SI-6811 Remove scala.annotation.serializable</notextile>
[SI-6979](https://issues.scala-lang.org/browse/SI-6979) | [decc9a9](https://github.com/scala/scala/commit/decc9a9) | <notextile>SI-6979 Small optimization in lub</notextile>
[SI-6479](https://issues.scala-lang.org/browse/SI-6479) | [9cc61f3](https://github.com/scala/scala/commit/9cc61f3) | <notextile>SI-6479 Don't lift try exprs in label arguments.</notextile>
[SI-6963](https://issues.scala-lang.org/browse/SI-6963) | [0c2e884](https://github.com/scala/scala/commit/0c2e884) | <notextile>SI-6963 Deprecates -Xmigration switch</notextile>
[SI-6675](https://issues.scala-lang.org/browse/SI-6675) | [78019b2](https://github.com/scala/scala/commit/78019b2) | <notextile>SI-6675 Test new warning under -Xoldpatmat.</notextile>
[SI-6675](https://issues.scala-lang.org/browse/SI-6675) | [692372c](https://github.com/scala/scala/commit/692372c) | <notextile>SI-6675 -Xlint arity enforcement for extractors</notextile>
[SI-6955](https://issues.scala-lang.org/browse/SI-6955) | [8475807](https://github.com/scala/scala/commit/8475807) | <notextile>SI-6955 switch emission no longer foiled by type alias</notextile>
[SI-6082](https://issues.scala-lang.org/browse/SI-6082) | [39352fe](https://github.com/scala/scala/commit/39352fe) | <notextile>SI-6082 Conditionally expand @ann(x) to @ann(value = x)</notextile>
[SI-5440](https://issues.scala-lang.org/browse/SI-5440) | [4aba0fe](https://github.com/scala/scala/commit/4aba0fe) | <notextile>SI-5440 Test case for exhaustiveness check</notextile>
[SI-5340](https://issues.scala-lang.org/browse/SI-5340) | [1212af4](https://github.com/scala/scala/commit/1212af4) | <notextile>SI-5340 Change println to log</notextile>
[SI-6925](https://issues.scala-lang.org/browse/SI-6925) | [b1cea21](https://github.com/scala/scala/commit/b1cea21) | <notextile>SI-6925 use concrete type in applyOrElse's match's selector</notextile>
[SI-5189](https://issues.scala-lang.org/browse/SI-5189) | [8fb19b1](https://github.com/scala/scala/commit/8fb19b1) | <notextile>SI-5189 detect unsoundness when inferring type of match</notextile>
[SI-6555](https://issues.scala-lang.org/browse/SI-6555) | [38404e8](https://github.com/scala/scala/commit/38404e8) | <notextile>SI-6555 Scaladoc's class filter shouldn't drop the last character</notextile>
[SI-6930](https://issues.scala-lang.org/browse/SI-6930) | [0f237e9](https://github.com/scala/scala/commit/0f237e9) | <notextile>SI-6930 adds documentation to reduceLeft in TraversableOnce</notextile>
[SI-6905](https://issues.scala-lang.org/browse/SI-6905) | [57ae1f3](https://github.com/scala/scala/commit/57ae1f3) | <notextile>SI-6905 - Switch to sneakyThrows instead of Unsafe.throwException as per new jsr</notextile>
[SI-6126](https://issues.scala-lang.org/browse/SI-6126) | [25c7364](https://github.com/scala/scala/commit/25c7364) | <notextile>SI-6126 Test case for varargs of tagged primitives.</notextile>
[SI-6946](https://issues.scala-lang.org/browse/SI-6946), [SI-6924](https://issues.scala-lang.org/browse/SI-6924) | [79a722f](https://github.com/scala/scala/commit/79a722f) | <notextile>SI-6946, SI-6924 Greatly improves IsTraversableLike docs</notextile>
[SI-5954](https://issues.scala-lang.org/browse/SI-5954) | [3ef487e](https://github.com/scala/scala/commit/3ef487e) | <notextile>SI-5954 Implementation restriction preventing companions in package objs</notextile>
[SI-6521](https://issues.scala-lang.org/browse/SI-6521) | [a557a97](https://github.com/scala/scala/commit/a557a97) | <notextile>Fixes SI-6521, overrides Range#head to be faster</notextile>
[SI-5553](https://issues.scala-lang.org/browse/SI-5553), [SI-6912](https://issues.scala-lang.org/browse/SI-6912) | [7a23562](https://github.com/scala/scala/commit/7a23562) | <notextile>SI-6912 Avoid a typer cycle in overload resolution.</notextile>
[SI-6846](https://issues.scala-lang.org/browse/SI-6846), [SI-6846](https://issues.scala-lang.org/browse/SI-6846) | [e5da30b](https://github.com/scala/scala/commit/e5da30b) | <notextile>Backport of SI-6846.</notextile>
[SI-6928](https://issues.scala-lang.org/browse/SI-6928) | [c58647f](https://github.com/scala/scala/commit/c58647f) | <notextile>SI-6928, VerifyError with self reference to super.</notextile>
[SI-6641](https://issues.scala-lang.org/browse/SI-6641) | [557caa3](https://github.com/scala/scala/commit/557caa3) | <notextile>SI-6641 Deprecate SwingWorker</notextile>
[SI-6803](https://issues.scala-lang.org/browse/SI-6803) | [103a478](https://github.com/scala/scala/commit/103a478) | <notextile>SI-6803: do not use java.net.URI, even more so incorrectly.</notextile>
[SI-6894](https://issues.scala-lang.org/browse/SI-6894) | [3bb8745](https://github.com/scala/scala/commit/3bb8745) | <notextile>Fixes and features for javap (fixing SI-6894)</notextile>
[SI-6955](https://issues.scala-lang.org/browse/SI-6955) | [38958f4](https://github.com/scala/scala/commit/38958f4) | <notextile>SI-6955 switch emission no longer foiled by type alias</notextile>
[SI-6964](https://issues.scala-lang.org/browse/SI-6964) | [b61a64d](https://github.com/scala/scala/commit/b61a64d) | <notextile>SI-6964 Remove build managers, both simple and refined.</notextile>
[SI-6375](https://issues.scala-lang.org/browse/SI-6375) | [61f70e4](https://github.com/scala/scala/commit/61f70e4) | <notextile>SI-6375, warn on lost annotation.</notextile>
[SI-5189](https://issues.scala-lang.org/browse/SI-5189) | [bd4bffa](https://github.com/scala/scala/commit/bd4bffa) | <notextile>SI-5189 detect unsoundness when inferring type of match</notextile>
[SI-6966](https://issues.scala-lang.org/browse/SI-6966) | [58bfa19](https://github.com/scala/scala/commit/58bfa19) | <notextile>SI-6966 Fix regression in implicit resolution</notextile>
[SI-5923](https://issues.scala-lang.org/browse/SI-5923) | [fe60284](https://github.com/scala/scala/commit/fe60284) | <notextile>SI-5923 adapt macros when they are deferred</notextile>
[SI-5903](https://issues.scala-lang.org/browse/SI-5903) | [66acf36](https://github.com/scala/scala/commit/66acf36) | <notextile>SI-5903 extractor macros do work</notextile>
[SI-6440](https://issues.scala-lang.org/browse/SI-6440), [SI-6641](https://issues.scala-lang.org/browse/SI-6641) | [c45491c](https://github.com/scala/scala/commit/c45491c) | <notextile>SI-6641 Cull scala.swing.SwingWorker</notextile>
[SI-5378](https://issues.scala-lang.org/browse/SI-5378) | [31f073c](https://github.com/scala/scala/commit/31f073c) | <notextile>SI-5378, unsoundness with type bounds in refinements.</notextile>
[SI-6566](https://issues.scala-lang.org/browse/SI-6566) | [a419799](https://github.com/scala/scala/commit/a419799) | <notextile>SI-6566, unsoundness with alias variance.</notextile>
[SI-6894](https://issues.scala-lang.org/browse/SI-6894) | [942f078](https://github.com/scala/scala/commit/942f078) | <notextile>Repl javap decodes various synthetic names for us (fixing SI-6894)</notextile>
[SI-6915](https://issues.scala-lang.org/browse/SI-6915) | [77c8751](https://github.com/scala/scala/commit/77c8751) | <notextile>SI-6915 Updates copyright properties to 2002-2013</notextile>
[SI-6897](https://issues.scala-lang.org/browse/SI-6897) | [3405294](https://github.com/scala/scala/commit/3405294) | <notextile>SI-6897, lubs and varargs star.</notextile>
[SI-6896](https://issues.scala-lang.org/browse/SI-6896) | [a6ce037](https://github.com/scala/scala/commit/a6ce037) | <notextile>SI-6896, spurious warning with overloaded main.</notextile>
[SI-6911](https://issues.scala-lang.org/browse/SI-6911) | [eeb6ee6](https://github.com/scala/scala/commit/eeb6ee6) | <notextile>SI-6911, regression in generated case class equality.</notextile>
[SI-6827](https://issues.scala-lang.org/browse/SI-6827) | [92cf0e3](https://github.com/scala/scala/commit/92cf0e3) | <notextile>Fix Iterator#copyToArray (fixes SI-6827).</notextile>
[SI-5017](https://issues.scala-lang.org/browse/SI-5017) | [02b2da6](https://github.com/scala/scala/commit/02b2da6) | <notextile>SI-5017 Poor performance of :+ operator on Arrays</notextile>
[SI-6194](https://issues.scala-lang.org/browse/SI-6194) | [ac61e34](https://github.com/scala/scala/commit/ac61e34) | <notextile>SI-6194, repl crash.</notextile>
[SI-6746](https://issues.scala-lang.org/browse/SI-6746) | [e5f16ac](https://github.com/scala/scala/commit/e5f16ac) | <notextile>SI-6746 Fixes MANIFEST.MF package entry (s.r.makro -&gt; s.r.macros)</notextile>
[SI-6415](https://issues.scala-lang.org/browse/SI-6415) | [24a033b](https://github.com/scala/scala/commit/24a033b) | <notextile>SI-6415, overly eager evaluation in Stream.</notextile>
[SI-6829](https://issues.scala-lang.org/browse/SI-6829), [SI-6788](https://issues.scala-lang.org/browse/SI-6788) | [231d59d](https://github.com/scala/scala/commit/231d59d) | <notextile>SI-6829, SI-6788, NPEs during erroneous compilation.</notextile>
[SI-6338](https://issues.scala-lang.org/browse/SI-6338) | [3a6f3ae](https://github.com/scala/scala/commit/3a6f3ae) | <notextile>SI-6338 fixes the unchecked warning in quick.comp</notextile>
[SI-6916](https://issues.scala-lang.org/browse/SI-6916) | [affa98f](https://github.com/scala/scala/commit/affa98f) | <notextile>SI-6916 makes FlatHashTable#remove a Boolean not Option[A]</notextile>
[SI-6918](https://issues.scala-lang.org/browse/SI-6918) | [4c7f5a5](https://github.com/scala/scala/commit/4c7f5a5) | <notextile>SI-6918 Changes REPL output from &quot;defined module&quot; to &quot;defined object&quot;</notextile>
[SI-6908](https://issues.scala-lang.org/browse/SI-6908) | [4d4ba75](https://github.com/scala/scala/commit/4d4ba75) | <notextile>SI-6908 Cleanup of FlatHashTable nulls based on review</notextile>
[SI-6908](https://issues.scala-lang.org/browse/SI-6908) | [dc0d1c9](https://github.com/scala/scala/commit/dc0d1c9) | <notextile>SI-6908 Removes cannotStoreNull from FastHashSet/HashSet docs</notextile>
[SI-6908](https://issues.scala-lang.org/browse/SI-6908) | [016763c](https://github.com/scala/scala/commit/016763c) | <notextile>SI-6908 Makes FlatHashTable as well as derived classes support null values</notextile>
[SI-6827](https://issues.scala-lang.org/browse/SI-6827) | [cf7b51d](https://github.com/scala/scala/commit/cf7b51d) | <notextile>Fix Iterator#copyToArray (fixes SI-6827).</notextile>
[SI-6846](https://issues.scala-lang.org/browse/SI-6846) | [dbebcd5](https://github.com/scala/scala/commit/dbebcd5) | <notextile>SI-6846, regression in type constructor inference.</notextile>
[SI-6745](https://issues.scala-lang.org/browse/SI-6745) | [5b2990c](https://github.com/scala/scala/commit/5b2990c) | <notextile>SI-6745 Fix &lt;init&gt; lookup</notextile>
[SI-6809](https://issues.scala-lang.org/browse/SI-6809) | [b2bec5a](https://github.com/scala/scala/commit/b2bec5a) | <notextile>SI-6809 Forbids deprecated case class definitions without parameter list</notextile>
[SI-6795](https://issues.scala-lang.org/browse/SI-6795) | [f029c3a](https://github.com/scala/scala/commit/f029c3a) | <notextile>SI-6795 Simplify errors related to &quot;abstract override&quot; on type members</notextile>
[SI-6795](https://issues.scala-lang.org/browse/SI-6795) | [71e42a7](https://github.com/scala/scala/commit/71e42a7) | <notextile>SI-6795 Adds negative check for &quot;abstract override&quot; on types in traits</notextile>
[SI-3995](https://issues.scala-lang.org/browse/SI-3995) | [cab8ea4](https://github.com/scala/scala/commit/cab8ea4) | <notextile>Expand test with a stably qualified example.</notextile>
[SI-3995](https://issues.scala-lang.org/browse/SI-3995) | [90efa6b](https://github.com/scala/scala/commit/90efa6b) | <notextile>SI-3995 Exclude companions with an existential prefix.</notextile>
[SI-6548](https://issues.scala-lang.org/browse/SI-6548) | [54a84a3](https://github.com/scala/scala/commit/54a84a3) | <notextile>SI-6548 reflection now correctly enters jinners</notextile>
[SI-5390](https://issues.scala-lang.org/browse/SI-5390) | [289a882](https://github.com/scala/scala/commit/289a882) | <notextile>SI-5390 Detect forward reference of case class apply</notextile>
[SI-5361](https://issues.scala-lang.org/browse/SI-5361) | [8b7f0ac](https://github.com/scala/scala/commit/8b7f0ac) | <notextile>SI-5361 Refactor in accordance with review comments.</notextile>
[SI-3614](https://issues.scala-lang.org/browse/SI-3614), [SI-5361](https://issues.scala-lang.org/browse/SI-5361) | [327083d](https://github.com/scala/scala/commit/327083d) | <notextile>SI-5361 Avoid cyclic type with malformed refinement</notextile>
[SI-6288](https://issues.scala-lang.org/browse/SI-6288) | [286dced](https://github.com/scala/scala/commit/286dced) | <notextile>SI-6288 Remedy ill-positioned extractor binding.</notextile>
[SI-6288](https://issues.scala-lang.org/browse/SI-6288) | [f69b846](https://github.com/scala/scala/commit/f69b846) | <notextile>SI-6288 Fix positioning of label jumps</notextile>
[SI-6288](https://issues.scala-lang.org/browse/SI-6288) | [79a43d7](https://github.com/scala/scala/commit/79a43d7) | <notextile>SI-6288 Position argument of unapply</notextile>
[SI-6758](https://issues.scala-lang.org/browse/SI-6758) | [089173d](https://github.com/scala/scala/commit/089173d) | <notextile>Fixes SI-6758: force LazyAnnnotationInfo for DefDef and TypeDef</notextile>
[SI-6555](https://issues.scala-lang.org/browse/SI-6555) | [818a2e6](https://github.com/scala/scala/commit/818a2e6) | <notextile>SI-6555 Better parameter name retention</notextile>
[SI-6595](https://issues.scala-lang.org/browse/SI-6595) | [a9d2568](https://github.com/scala/scala/commit/a9d2568) | <notextile>Fix for SI-6595, lost modifiers in early defs.</notextile>
[SI-5841](https://issues.scala-lang.org/browse/SI-5841) | [286abfc](https://github.com/scala/scala/commit/286abfc) | <notextile>SI-5841 reification of renamed imports</notextile>
[SI-5877](https://issues.scala-lang.org/browse/SI-5877) | [0b1ae9c](https://github.com/scala/scala/commit/0b1ae9c) | <notextile>SI-5877 Tweak the check for package object owner.</notextile>
[SI-5877](https://issues.scala-lang.org/browse/SI-5877) | [96e5c40](https://github.com/scala/scala/commit/96e5c40) | <notextile>SI-5877 Support implicit classes in package objects</notextile>
[SI-5877](https://issues.scala-lang.org/browse/SI-5877) | [65c1ae5](https://github.com/scala/scala/commit/65c1ae5) | <notextile>Adds debug logging for synthetic registration.</notextile>
[SI-6758](https://issues.scala-lang.org/browse/SI-6758) | [673bc70](https://github.com/scala/scala/commit/673bc70) | <notextile>Split test case to workaround incomplete error report.</notextile>
[SI-6558](https://issues.scala-lang.org/browse/SI-6558) | [c24400f](https://github.com/scala/scala/commit/c24400f) | <notextile>SI-6558 Expand test case for annotation typos</notextile>
[SI-6558](https://issues.scala-lang.org/browse/SI-6558) | [d9928d5](https://github.com/scala/scala/commit/d9928d5) | <notextile>Fixes SI-6558: typecheck lazy annotation info using non-silent context.</notextile>
[SI-4922](https://issues.scala-lang.org/browse/SI-4922) | [e249f2e](https://github.com/scala/scala/commit/e249f2e) | <notextile>SI-4922 Show default in Scaladoc for generic methods.</notextile>
[SI-6614](https://issues.scala-lang.org/browse/SI-6614) | [bd04b2c](https://github.com/scala/scala/commit/bd04b2c) | <notextile>SI-6614 Test case for fixed ArrayStack misconduct.</notextile>
[SI-6690](https://issues.scala-lang.org/browse/SI-6690) | [d526f8b](https://github.com/scala/scala/commit/d526f8b) | <notextile>SI-6690 Release reference to last dequeued element.</notextile>
[SI-5789](https://issues.scala-lang.org/browse/SI-5789) | [5f2b7c4](https://github.com/scala/scala/commit/5f2b7c4) | <notextile>SI-5789 Use the ReplTest framework in the test</notextile>
[SI-5789](https://issues.scala-lang.org/browse/SI-5789) | [850128d](https://github.com/scala/scala/commit/850128d) | <notextile>SI-5789 Checks in the right version of the test</notextile>
[SI-6782](https://issues.scala-lang.org/browse/SI-6782), [SI-5789](https://issues.scala-lang.org/browse/SI-5789) | [d699122](https://github.com/scala/scala/commit/d699122) | <notextile>SI-5789 Removes assertion about implclass flag in Mixin.scala</notextile>
[SI-5894](https://issues.scala-lang.org/browse/SI-5894) | [a23cc20](https://github.com/scala/scala/commit/a23cc20) | <notextile>SI-5894 Don't emit static forwarders for macros.</notextile>
[SI-5894](https://issues.scala-lang.org/browse/SI-5894) | [b828e32](https://github.com/scala/scala/commit/b828e32) | <notextile>Remove some low-hanging duplication beween GenJVM / GenASM.</notextile>
[SI-1672](https://issues.scala-lang.org/browse/SI-1672) | [31a0aa7](https://github.com/scala/scala/commit/31a0aa7) | <notextile>SI-1672 Catches are in tail position without finally.</notextile>
[SI-6535](https://issues.scala-lang.org/browse/SI-6535) | [8a1f85d](https://github.com/scala/scala/commit/8a1f85d) | <notextile>SI-6535 Step back from the precipice of a cycle</notextile>
[SI-6549](https://issues.scala-lang.org/browse/SI-6549) | [90c87fc](https://github.com/scala/scala/commit/90c87fc) | <notextile>SI-6549 Improve escaping in REPL codegen.</notextile>
[SI-6547](https://issues.scala-lang.org/browse/SI-6547) | [d99b7f4](https://github.com/scala/scala/commit/d99b7f4) | <notextile>SI-6547: elide box unbox pair only when primitives match</notextile>
[SI-5678](https://issues.scala-lang.org/browse/SI-5678) | [8204b19](https://github.com/scala/scala/commit/8204b19) | <notextile>SI-5678 Bad return type for [Use Case] docs in Range</notextile>
[SI-6667](https://issues.scala-lang.org/browse/SI-6667) | [9aa6ded](https://github.com/scala/scala/commit/9aa6ded) | <notextile>SI-6667 Abort after any ambiguous in-scope implicit</notextile>
[SI-6667](https://issues.scala-lang.org/browse/SI-6667) | [3719f79](https://github.com/scala/scala/commit/3719f79) | <notextile>Refactor use of SearchFailure in implicits.</notextile>
[SI-4664](https://issues.scala-lang.org/browse/SI-4664) | [2aa66be](https://github.com/scala/scala/commit/2aa66be) | <notextile>SI-4664 [Make scala.util.Random Serializable] Add test case</notextile>
[SI-4664](https://issues.scala-lang.org/browse/SI-4664) | [0b92073](https://github.com/scala/scala/commit/0b92073) | <notextile>SI-4664 Make scala.util.Random Serializable</notextile>
[SI-6712](https://issues.scala-lang.org/browse/SI-6712) | [089cc9f](https://github.com/scala/scala/commit/089cc9f) | <notextile>Fix for SI-6712, bug in object lifting.</notextile>
[SI-6696](https://issues.scala-lang.org/browse/SI-6696), [SI-6696](https://issues.scala-lang.org/browse/SI-6696) | [5546a72](https://github.com/scala/scala/commit/5546a72) | <notextile>SI-6696 removes &quot;helper&quot; tree factory methods</notextile>
[SI-6766](https://issues.scala-lang.org/browse/SI-6766) | [868fe64](https://github.com/scala/scala/commit/868fe64) | <notextile>SI-6766 Makes the -Pcontinuations:enable flag a project specific preference</notextile>
[SI-6766](https://issues.scala-lang.org/browse/SI-6766) | [a725494](https://github.com/scala/scala/commit/a725494) | <notextile>SI-6766 Create a continuations project in eclipse</notextile>
[SI-6631](https://issues.scala-lang.org/browse/SI-6631) | [7ee1145](https://github.com/scala/scala/commit/7ee1145) | <notextile>SI-6631 Handle invalid escapes in string interpolators</notextile>
[SI-5464](https://issues.scala-lang.org/browse/SI-5464) | [5028181](https://github.com/scala/scala/commit/5028181) | <notextile>tests for idempotency issues in the typechecker</notextile>
[SI-4936](https://issues.scala-lang.org/browse/SI-4936) | [2857d43](https://github.com/scala/scala/commit/2857d43) | <notextile>Javap for Java 7 (Fixes SI-4936)</notextile>
[SI-5841](https://issues.scala-lang.org/browse/SI-5841) | [0433ca4](https://github.com/scala/scala/commit/0433ca4) | <notextile>SI-5841 reification of renamed imports</notextile>
[SI-5859](https://issues.scala-lang.org/browse/SI-5859), [SI-5858](https://issues.scala-lang.org/browse/SI-5858) | [7d5dc08](https://github.com/scala/scala/commit/7d5dc08) | <notextile>SI-5858 xml.Node construction ambiguity is gone.</notextile>
[SI-6769](https://issues.scala-lang.org/browse/SI-6769) | [06844ee](https://github.com/scala/scala/commit/06844ee) | <notextile>SI-6769 Removes GenJVM backend</notextile>
[SI-6745](https://issues.scala-lang.org/browse/SI-6745) | [ff9cfd9](https://github.com/scala/scala/commit/ff9cfd9) | <notextile>Don't return unimportables from importedSymbol.</notextile>
[SI-6770](https://issues.scala-lang.org/browse/SI-6770) | [924633e](https://github.com/scala/scala/commit/924633e) | <notextile>SI-6770 Removes unused and unusable review scripts</notextile>
[SI-6663](https://issues.scala-lang.org/browse/SI-6663), [SI-5726](https://issues.scala-lang.org/browse/SI-5726), [SI-5733](https://issues.scala-lang.org/browse/SI-5733), [SI-6320](https://issues.scala-lang.org/browse/SI-6320), [SI-6551](https://issues.scala-lang.org/browse/SI-6551), [SI-6722](https://issues.scala-lang.org/browse/SI-6722) | [a694194](https://github.com/scala/scala/commit/a694194) | <notextile>Test cases for SI-5726, SI-5733, SI-6320, SI-6551, SI-6722.</notextile>
[SI-6731](https://issues.scala-lang.org/browse/SI-6731) | [dac1488](https://github.com/scala/scala/commit/dac1488) | <notextile>Fix for SI-6731, dropped trees in selectDynamic.</notextile>
[SI-5753](https://issues.scala-lang.org/browse/SI-5753) | [597a949](https://github.com/scala/scala/commit/597a949) | <notextile>SI-5753 macros cannot be loaded when inherited from a class or a trait</notextile>
[SI-6718](https://issues.scala-lang.org/browse/SI-6718) | [20c2a50](https://github.com/scala/scala/commit/20c2a50) | <notextile>SI-6718 fixes a volatile test</notextile>
[SI-6687](https://issues.scala-lang.org/browse/SI-6687) | [7f1ba06](https://github.com/scala/scala/commit/7f1ba06) | <notextile>Fix for SI-6687, wrong isVar logic.</notextile>
[SI-6357](https://issues.scala-lang.org/browse/SI-6357) | [8b54ec9](https://github.com/scala/scala/commit/8b54ec9) | <notextile>Fix for SI-6357, cycle with value classes.</notextile>
[SI-6677](https://issues.scala-lang.org/browse/SI-6677) | [2aa6841](https://github.com/scala/scala/commit/2aa6841) | <notextile>SI-6677 Insert required cast in `new qual.foo.T`</notextile>
[SI-6706](https://issues.scala-lang.org/browse/SI-6706) | [d0de367](https://github.com/scala/scala/commit/d0de367) | <notextile>Fix for SI-6706, Symbol breakage under GC.</notextile>
[SI-6023](https://issues.scala-lang.org/browse/SI-6023) | [548a54d](https://github.com/scala/scala/commit/548a54d) | <notextile>SI-6023 reify abstract vals</notextile>
[SI-6673](https://issues.scala-lang.org/browse/SI-6673), [SI-6673](https://issues.scala-lang.org/browse/SI-6673) | [907d6ea](https://github.com/scala/scala/commit/907d6ea) | <notextile>SI-6673 fixes macro problems with eta expansions</notextile>
[SI-6695](https://issues.scala-lang.org/browse/SI-6695) | [7376ad7](https://github.com/scala/scala/commit/7376ad7) | <notextile>SI-6695 Test case for fixed Array match bug</notextile>
[SI-6632](https://issues.scala-lang.org/browse/SI-6632), [SI-6633](https://issues.scala-lang.org/browse/SI-6633) | [925c6e3](https://github.com/scala/scala/commit/925c6e3) | <notextile>SI-6632 SI-6633 Fixes issues and data corruption in ListBuffer</notextile>
[SI-6634](https://issues.scala-lang.org/browse/SI-6634) | [2c23acf](https://github.com/scala/scala/commit/2c23acf) | <notextile>SI-6634 Fixes data corruption issue in ListBuffer#remove</notextile>
[SI-6551](https://issues.scala-lang.org/browse/SI-6551) | [74ca558](https://github.com/scala/scala/commit/74ca558) | <notextile>SI-6551: don't insert apply call in polymorphic expression.</notextile>
[SI-6663](https://issues.scala-lang.org/browse/SI-6663) | [c656920](https://github.com/scala/scala/commit/c656920) | <notextile>SI-6663: don't ignore type parameter on selectDynamic invocation</notextile>
[SI-6150](https://issues.scala-lang.org/browse/SI-6150) | [1f0e488](https://github.com/scala/scala/commit/1f0e488) | <notextile>Fixes SI-6150 - backport to 2.10.x branch.</notextile>
[SI-5330](https://issues.scala-lang.org/browse/SI-5330), [SI-6014](https://issues.scala-lang.org/browse/SI-6014) | [65778d7](https://github.com/scala/scala/commit/65778d7) | <notextile>SI-5330, SI-6014 deal with existential self-type</notextile>
[SI-6448](https://issues.scala-lang.org/browse/SI-6448), [SI-6448](https://issues.scala-lang.org/browse/SI-6448) | [bc3dda2](https://github.com/scala/scala/commit/bc3dda2) | <notextile>SI-6448 Collecting the spoils of PartialFun#runWith</notextile>
[SI-6357](https://issues.scala-lang.org/browse/SI-6357) | [823d779](https://github.com/scala/scala/commit/823d779) | <notextile>Fix for SI-6357, cycle with value classes.</notextile>
[SI-6247](https://issues.scala-lang.org/browse/SI-6247) | [cac5a08](https://github.com/scala/scala/commit/cac5a08) | <notextile>Optimize primitive Array(e1, ..., en)</notextile>
[SI-6539](https://issues.scala-lang.org/browse/SI-6539) | [6902da3](https://github.com/scala/scala/commit/6902da3) | <notextile>SI-6539 Annotation for methods unfit for post-typer ASTs</notextile>
[SI-6662](https://issues.scala-lang.org/browse/SI-6662) | [b922573](https://github.com/scala/scala/commit/b922573) | <notextile>Fix for SI-6662, macro failing too early.</notextile>
[SI-6616](https://issues.scala-lang.org/browse/SI-6616) | [03aa7fc](https://github.com/scala/scala/commit/03aa7fc) | <notextile>SI-6616 Check that unsafe operations are only called on the presentation compile</notextile>
[SI-6649](https://issues.scala-lang.org/browse/SI-6649) | [1bdd5ee](https://github.com/scala/scala/commit/1bdd5ee) | <notextile>better error when typetagging local classes</notextile>
[SI-5330](https://issues.scala-lang.org/browse/SI-5330), [SI-6014](https://issues.scala-lang.org/browse/SI-6014) | [085b6a5](https://github.com/scala/scala/commit/085b6a5) | <notextile>SI-5330, SI-6014 deal with existential self-type</notextile>
[SI-6355](https://issues.scala-lang.org/browse/SI-6355) | [6023706](https://github.com/scala/scala/commit/6023706) | <notextile>Error for SI-6355, overloading of applyDynamic.</notextile>
[SI-6664](https://issues.scala-lang.org/browse/SI-6664) | [24958f7](https://github.com/scala/scala/commit/24958f7) | <notextile>Fix for SI-6664, cycle in case classes.</notextile>
[SI-6637](https://issues.scala-lang.org/browse/SI-6637) | [b540aae](https://github.com/scala/scala/commit/b540aae) | <notextile>Fix SI-6637 (misoptimization in erasure)</notextile>
[SI-6597](https://issues.scala-lang.org/browse/SI-6597) | [1e2328e](https://github.com/scala/scala/commit/1e2328e) | <notextile>Fix for SI-6597, implicit case class crasher.</notextile>
[SI-6488](https://issues.scala-lang.org/browse/SI-6488) | [c7c79c8](https://github.com/scala/scala/commit/c7c79c8) | <notextile>SI-6488: Stop I/O threads prior to Process destruction</notextile>
[SI-6559](https://issues.scala-lang.org/browse/SI-6559) | [492cbe5](https://github.com/scala/scala/commit/492cbe5) | <notextile>Fixes SI-6559 - StringContext not using passed in escape function.</notextile>
[SI-6611](https://issues.scala-lang.org/browse/SI-6611) | [dad8866](https://github.com/scala/scala/commit/dad8866) | <notextile>SI-6611 Tighten up an unsafe array optimization</notextile>
[SI-6567](https://issues.scala-lang.org/browse/SI-6567) | [0bcb9e9](https://github.com/scala/scala/commit/0bcb9e9) | <notextile>SI-6567 Warning for Option(implicitView(foo))</notextile>
[SI-6426](https://issues.scala-lang.org/browse/SI-6426) | [357f45c](https://github.com/scala/scala/commit/357f45c) | <notextile>Fix for SI-6426, importable _.</notextile>
[SI-440](https://issues.scala-lang.org/browse/SI-440) | [d0c4be6](https://github.com/scala/scala/commit/d0c4be6) | <notextile>Warn about unused private members.</notextile>
[SI-3160](https://issues.scala-lang.org/browse/SI-3160), [SI-4537](https://issues.scala-lang.org/browse/SI-4537) | [e326d86](https://github.com/scala/scala/commit/e326d86) | <notextile>Tests for SI-3160, SI-4537, import precedence.</notextile>
[SI-3160](https://issues.scala-lang.org/browse/SI-3160) | [d477a0f](https://github.com/scala/scala/commit/d477a0f) | <notextile>Adds the core symbol lookup logic to Typers.</notextile>
[SI-6597](https://issues.scala-lang.org/browse/SI-6597) | [187c61a](https://github.com/scala/scala/commit/187c61a) | <notextile>Fix for SI-6597, implicit case class crasher.</notextile>
[SI-6584](https://issues.scala-lang.org/browse/SI-6584) | [8a537b7](https://github.com/scala/scala/commit/8a537b7) | <notextile>Fix SI-6584, Stream#distinct uses too much memory.</notextile>
[SI-6358](https://issues.scala-lang.org/browse/SI-6358) | [a52bd2c](https://github.com/scala/scala/commit/a52bd2c) | <notextile>Added one more test for SI-6358</notextile>
[SI-6358](https://issues.scala-lang.org/browse/SI-6358) | [4c86dbb](https://github.com/scala/scala/commit/4c86dbb) | <notextile>Closes SI-6358. Move accessor generation for lazy vals to typers.</notextile>
[SI-2968](https://issues.scala-lang.org/browse/SI-2968) | [cbad218](https://github.com/scala/scala/commit/cbad218) | <notextile>SI-2968 Fix brace healing for `^case (class&#124;object) {`</notextile>
[SI-6482](https://issues.scala-lang.org/browse/SI-6482) | [ff9f60f](https://github.com/scala/scala/commit/ff9f60f) | <notextile>Fix for SI-6482, lost bounds in extension methods.</notextile>
[SI-6422](https://issues.scala-lang.org/browse/SI-6422) | [c6866a2](https://github.com/scala/scala/commit/c6866a2) | <notextile>SI-6422: add missing Fractional and Integral alias in scala package</notextile>
[SI-6388](https://issues.scala-lang.org/browse/SI-6388) | [18c6d58](https://github.com/scala/scala/commit/18c6d58) | <notextile>SI-6388 Remove Application</notextile>
[SI-6388](https://issues.scala-lang.org/browse/SI-6388) | [3b73e0d](https://github.com/scala/scala/commit/3b73e0d) | <notextile>SI-6388 Remove some remaining, minor deprecations</notextile>
[SI-6388](https://issues.scala-lang.org/browse/SI-6388) | [025e1ae](https://github.com/scala/scala/commit/025e1ae) | <notextile>SI-6388 Remove deprecated item in scala/swing</notextile>
[SI-6388](https://issues.scala-lang.org/browse/SI-6388) | [e3cec78](https://github.com/scala/scala/commit/e3cec78) | <notextile>SI-6388 Remove first parts of deprecated @serializable annotation</notextile>
[SI-6388](https://issues.scala-lang.org/browse/SI-6388) | [c52f91c](https://github.com/scala/scala/commit/c52f91c) | <notextile>SI-6388 Remove deprecated items in scala/math</notextile>
[SI-6388](https://issues.scala-lang.org/browse/SI-6388) | [d43a3ef](https://github.com/scala/scala/commit/d43a3ef) | <notextile>SI-6388 Remove deprecated items in scala/collection</notextile>
[SI-6388](https://issues.scala-lang.org/browse/SI-6388) | [17fd905](https://github.com/scala/scala/commit/17fd905) | <notextile>SI-6388 Remove deprecated items in the compiler jar</notextile>
[SI-6206](https://issues.scala-lang.org/browse/SI-6206) | [267650c](https://github.com/scala/scala/commit/267650c) | <notextile>Fix for SI-6206, inconsistency with apply.</notextile>
[SI-6521](https://issues.scala-lang.org/browse/SI-6521) | [63ba3d6](https://github.com/scala/scala/commit/63ba3d6) | <notextile>Fixes SI-6521, overrides Range#head to be faster</notextile>
[SI-4744](https://issues.scala-lang.org/browse/SI-4744) | [ba36c44](https://github.com/scala/scala/commit/ba36c44) | <notextile>Fix for SI-4744, another variety of cycle.</notextile>
[SI-3809](https://issues.scala-lang.org/browse/SI-3809) | [432f936](https://github.com/scala/scala/commit/432f936) | <notextile>Experimental option -Ybreak-cycles.</notextile>
[SI-6358](https://issues.scala-lang.org/browse/SI-6358) | [63c90af](https://github.com/scala/scala/commit/63c90af) | <notextile>Added one more test for SI-6358</notextile>
[SI-6358](https://issues.scala-lang.org/browse/SI-6358) | [981424b](https://github.com/scala/scala/commit/981424b) | <notextile>Closes SI-6358. Move accessor generation for lazy vals to typers.</notextile>
[SI-6478](https://issues.scala-lang.org/browse/SI-6478) | [2569341](https://github.com/scala/scala/commit/2569341) | <notextile>SI-6478 Fixing JavaTokenParser ident</notextile>
[SI-294](https://issues.scala-lang.org/browse/SI-294), [SI-1751](https://issues.scala-lang.org/browse/SI-1751), [SI-1782](https://issues.scala-lang.org/browse/SI-1782), [SI-2318](https://issues.scala-lang.org/browse/SI-2318), [SI-3897](https://issues.scala-lang.org/browse/SI-3897), [SI-4649](https://issues.scala-lang.org/browse/SI-4649), [SI-4786](https://issues.scala-lang.org/browse/SI-4786), [SI-5293](https://issues.scala-lang.org/browse/SI-5293), [SI-5399](https://issues.scala-lang.org/browse/SI-5399), [SI-5418](https://issues.scala-lang.org/browse/SI-5418), [SI-5606](https://issues.scala-lang.org/browse/SI-5606), [SI-5610](https://issues.scala-lang.org/browse/SI-5610), [SI-5639](https://issues.scala-lang.org/browse/SI-5639) | [5240da5](https://github.com/scala/scala/commit/5240da5) | <notextile>Moved a bunch of passing tests out of pending.</notextile>
[SI-6338](https://issues.scala-lang.org/browse/SI-6338) | [120e14f](https://github.com/scala/scala/commit/120e14f) | <notextile>Fix for rangepos crasher.</notextile>
[SI-6406](https://issues.scala-lang.org/browse/SI-6406) | [ce1bbfe](https://github.com/scala/scala/commit/ce1bbfe) | <notextile>Regex.unapplySeq should not take Any (Fixes SI-6406)</notextile>
[SI-6467](https://issues.scala-lang.org/browse/SI-6467) | [b405a29](https://github.com/scala/scala/commit/b405a29) | <notextile>SI-6467: Zero element in aggregate now by-name</notextile>
[SI-4729](https://issues.scala-lang.org/browse/SI-4729) | [32e70a0](https://github.com/scala/scala/commit/32e70a0) | <notextile>Fix for SI-4729, overriding java varargs in scala.</notextile>
[SI-5353](https://issues.scala-lang.org/browse/SI-5353) | [75a075b](https://github.com/scala/scala/commit/75a075b) | <notextile>Fix for SI-5353, imperfect error message.</notextile>
[SI-5859](https://issues.scala-lang.org/browse/SI-5859) | [8886d22](https://github.com/scala/scala/commit/8886d22) | <notextile>Fix for SI-5859, inapplicable varargs.</notextile>
[SI-5130](https://issues.scala-lang.org/browse/SI-5130) | [d892e8b](https://github.com/scala/scala/commit/d892e8b) | <notextile>Fix for SI-5130, precision disappearing from refinement.</notextile>
[SI-6452](https://issues.scala-lang.org/browse/SI-6452) | [d16326a](https://github.com/scala/scala/commit/d16326a) | <notextile>Fix for SI-6452, leak in ListBuffer.</notextile>
[SI-6447](https://issues.scala-lang.org/browse/SI-6447) | [f2f4f55](https://github.com/scala/scala/commit/f2f4f55) | <notextile>Some cleanups in Macros.</notextile>
[SI-6447](https://issues.scala-lang.org/browse/SI-6447) | [9ad9896](https://github.com/scala/scala/commit/9ad9896) | <notextile>Fix for SI-6447, macro dependent type propagation.</notextile>
[SI-5604](https://issues.scala-lang.org/browse/SI-5604) | [e6f10b0](https://github.com/scala/scala/commit/e6f10b0) | <notextile>Fixed SI-5604, selections on package objects.</notextile>
[SI-5954](https://issues.scala-lang.org/browse/SI-5954), [SI-6225](https://issues.scala-lang.org/browse/SI-6225), [SI-5877](https://issues.scala-lang.org/browse/SI-5877), [SI-4695](https://issues.scala-lang.org/browse/SI-4695) | [d47a15b](https://github.com/scala/scala/commit/d47a15b) | <notextile>Pending tests for SI-5954, SI-6225, SI-5877, SI-4695.</notextile>
[SI-6381](https://issues.scala-lang.org/browse/SI-6381) | [676d895](https://github.com/scala/scala/commit/676d895) | <notextile>SI-6381 Honour -Yrangepos in the REPL</notextile>
[SI-6315](https://issues.scala-lang.org/browse/SI-6315) | [cc56187](https://github.com/scala/scala/commit/cc56187) | <notextile>SI-6315 fixed.</notextile>
[SI-6258](https://issues.scala-lang.org/browse/SI-6258), [SI-6258](https://issues.scala-lang.org/browse/SI-6258) | [2b4e718](https://github.com/scala/scala/commit/2b4e718) | <notextile>Make RefChecks#validateVariance aware of BoundedWildcardType.</notextile>
[SI-3577](https://issues.scala-lang.org/browse/SI-3577) | [2110565](https://github.com/scala/scala/commit/2110565) | <notextile>SI-3577 Make varianceInType aware of BoundedWildcardType.</notextile>
[SI-6295](https://issues.scala-lang.org/browse/SI-6295) | [c49e235](https://github.com/scala/scala/commit/c49e235) | <notextile>SI-6295: Introduced NoExternalID, fixed DocType's documentation.</notextile>
[SI-6301](https://issues.scala-lang.org/browse/SI-6301) | [ccbc51d](https://github.com/scala/scala/commit/ccbc51d) | <notextile>Test case for SI-6301.</notextile>
[SI-6301](https://issues.scala-lang.org/browse/SI-6301) | [a3680be](https://github.com/scala/scala/commit/a3680be) | <notextile>Actual fix for SI-6301, specialized crasher.</notextile>
[SI-6301](https://issues.scala-lang.org/browse/SI-6301) | [74842f7](https://github.com/scala/scala/commit/74842f7) | <notextile>Workaround for SI-6301, @specialize crasher.</notextile>
[SI-6278](https://issues.scala-lang.org/browse/SI-6278) | [6917599](https://github.com/scala/scala/commit/6917599) | <notextile>SI-6278 fixed: synthetic implicit def must sort with its associated implicit cla</notextile>
[SI-6296](https://issues.scala-lang.org/browse/SI-6296) | [656a1c4](https://github.com/scala/scala/commit/656a1c4) | <notextile>On --grep, partest must dir.list to descend into subdirs (fixes SI-6296)</notextile>
[SI-4996](https://issues.scala-lang.org/browse/SI-4996) | [9733f56](https://github.com/scala/scala/commit/9733f56) | <notextile>Fixes SI-4996.</notextile>
[SI-6150](https://issues.scala-lang.org/browse/SI-6150) | [823239f](https://github.com/scala/scala/commit/823239f) | <notextile>Modified SI-6150 fix again.</notextile>
[SI-6150](https://issues.scala-lang.org/browse/SI-6150) | [0fc0038](https://github.com/scala/scala/commit/0fc0038) | <notextile>Modified SI-6150 fix to use intended ReusableCBF.</notextile>
[SI-6150](https://issues.scala-lang.org/browse/SI-6150) | [0308ae8](https://github.com/scala/scala/commit/0308ae8) | <notextile>Fixes SI-6150.</notextile>
[SI-6220](https://issues.scala-lang.org/browse/SI-6220) | [a158487](https://github.com/scala/scala/commit/a158487) | <notextile>Added test that should cover all code paths of the changes done in SI-6220</notextile>
[SI-2251](https://issues.scala-lang.org/browse/SI-2251) | [db46c71](https://github.com/scala/scala/commit/db46c71) | <notextile>Improvement for SI-2251, failure to lub f-bounds.</notextile>
[SI-4042](https://issues.scala-lang.org/browse/SI-4042) | [eb2375c](https://github.com/scala/scala/commit/eb2375c) | <notextile>Warn when Any or AnyVal is inferred.</notextile>
[SI-6119](https://issues.scala-lang.org/browse/SI-6119) | [c7e733e](https://github.com/scala/scala/commit/c7e733e) | <notextile>SI-6119 Fix mispelling on take documentation.</notextile>
[SI-6154](https://issues.scala-lang.org/browse/SI-6154) | [48f8235](https://github.com/scala/scala/commit/48f8235) | <notextile>Fix for SI-6154, VerifyError originating in uncurry.</notextile>
[SI-6064](https://issues.scala-lang.org/browse/SI-6064) | [855f01b](https://github.com/scala/scala/commit/855f01b) | <notextile>SI-6064 Add method contains to Option.</notextile>
[SI-2418](https://issues.scala-lang.org/browse/SI-2418), [SI-2418](https://issues.scala-lang.org/browse/SI-2418) | [b79c760](https://github.com/scala/scala/commit/b79c760) | <notextile>Removed restriction on final vars, SI-2418.</notextile>
[SI-6142](https://issues.scala-lang.org/browse/SI-6142) | [adeffda](https://github.com/scala/scala/commit/adeffda) | <notextile>Refined isEffectivelyFinal logic for sealedness.</notextile>
[SI-4023](https://issues.scala-lang.org/browse/SI-4023) | [07824e5](https://github.com/scala/scala/commit/07824e5) | <notextile>SI-4023 Testcase closes issue with inner classes/getDeclaredClasses</notextile>
[SI-5906](https://issues.scala-lang.org/browse/SI-5906) | [ab0e09b](https://github.com/scala/scala/commit/ab0e09b) | <notextile>SI-5906 Search for sorted sequences</notextile>
[SI-6072](https://issues.scala-lang.org/browse/SI-6072) | [6559722](https://github.com/scala/scala/commit/6559722) | <notextile>Closes SI-6072, crasher with overloaded eq.</notextile>
[SI-6052](https://issues.scala-lang.org/browse/SI-6052) | [48b128d](https://github.com/scala/scala/commit/48b128d) | <notextile>SI-6052 - fix groupBy on parallel collections</notextile>


#### [Complete commit list](https://github.com/scala/scala/compare/v2.10.4...v2.11.0)


      