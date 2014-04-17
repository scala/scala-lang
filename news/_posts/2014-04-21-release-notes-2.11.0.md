---
layout: news
post-type: announcement
title: "Scala 2.11.0 is now available!"
---
<!-- comment at the top because it breaks the markdown parser when it's where we'd actually like it...
Things to update:
- replace 2.11.0-RCX-1 by previous version,
- replace 2.11.0-RCX by actual version,
- milestone=32 by actual milestone number
- bug/PR counts
-->

We are very pleased to announce the final release of Scala 2.11.0! Download it now from [scala-lang.org](http://scala-lang.org/download/2.11.0.html) or via [Maven Central](http://search.maven.org/?search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.11.0%22#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.11.0%22).

There have been no code changes since RC4, just improvements to documentation and version bump to the most recent stable version of Akk actors. Here's [difference between the release and RC4](https://github.com/scala/scala/compare/v2.11.0-RC4...v2.11.0).

Code that compiled on 2.10.x without deprecation warnings should compile on 2.11.x (we do no guarantee this for experimental APIs, such as reflection). If not, [please file a regression](https://issues.scala-lang.org/secure/CreateIssueDetails!init.jspa?pid=10005&issuetype=1&versions=11311&labels=regression). We are working with the community to ensure availability of the core projects of the Scala 2.11.x eco-system, please see below for a list. This release is *not* binary compatible with the 2.10.x series, to allow us to keep improving the Scala standard library.

<!--break-->

The Scala 2.11.x series targets Java 6, with (evolving) experimental support for Java 8. In 2.11.0, Java 8 support is mostly limited to reading Java 8 bytecode and parsing Java 8 source. Stay tuned for more complete (experimental) Java 8 support.

The Scala team and contributors [fixed 613 bugs](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20and%20fixVersion%20>%3D%20"Scala%202.11.0-M1"%20and%20fixVersion%20<%3D%20"Scala%202.11.0"%20and%20resolution%20%3D%20fixed) that are exclusive to Scala 2.11.0! We also backported as many as possible. With the release of 2.11, 2.10 backports will be dialed back.

Since the last RC, we fixed [11 issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20fixVersion%20%3D%20"Scala%202.11.0"%20AND%20resolution%20%3D%20fixed%20ORDER%20BY%20priority%20DESC) via [37 merged pull requests](https://github.com/scala/scala/issues?milestone=37&state=closed).

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, participating in mailing lists and other public fora, and -- of course -- submitting and reviewing pull requests! You are all awesome.

Concretely, according to `git log --no-merges --oneline master --not 2.10.x --format='%aN'  | sort | uniq -c | sort -rn`, 111 people contributed code, tests, and/or documentation to Scala 2.11.x: Paul Phillips,  Jason Zaugg,  Eugene Burmako,  Adriaan Moors,  A. P. Marki,  Simon Ochsenreither,  Den Shabalin,  Miguel Garcia,  Denys Shabalin,  James Iry,  Iain McGinniss,  Rex Kerr,  Grzegorz Kossakowski,  Vladimir Nikolaev,  Eugene Vigdorchik,  François Garillot,  Mirco Dotta,  Rüdiger Klaehn,  Raphael Jolly,  Simon Schaefer,  Kenji Yoshida,  Paolo Giarrusso,  Luc Bourlier,  Antoine Gourlay,  Hubert Plociniczak,  Aleksandar Prokopec,  Lex Spoon,  Andrew Phillips,  Vlad Ureche,  Sébastien Doeraene,  Josh Suereth,  Jean-Remi Desjardins,  Vojin Jovanovic,  Viktor Klang,  Valerian,  Prashant Sharma,  Pavel Pavlov,  Michael Thorpe,  Jan Niehusmann,  Heejong Lee,  George Leontiev,  Daniel C. Sobral,  Christoffer Sawicki,  yllan,  rjfwhite,  Volkan Yazıcı,  Ruslan Shevchenko,  Robin Green,  Roberto Tyley,  Olivier Blanvillain,  Mark Harrah,  Lukas Rytz,  James Ward,  Iulian Dragos,  Ilya Maykov,  Eugene Yokota,  Erik Osheim,  Dan Hopkins,  Chris Hodapp,  Antonio Cunei,  Andriy Polishchuk,  Alexander Clare,  杨博,  srinivasreddy,  secwall,  nermin,  martijnhoekstra,  kurnevsky,  jinfu-leng,  folone,  Yaroslav Klymko,  Xusen Yin,  Trent Ogren,  Tobias Schlatter,  Thomas Geier,  Stuart Golodetz,  Stefan Zeiger,  Scott Carey,  Samy Dindane,  Sagie Davidovich,  Runar Bjarnason,  Roland Kuhn,  Robert Nix,  Robert Ladstätter,  Rike-Benjamin Schuppner,  Rajiv,  Philipp Haller,  Nada Amin,  Mike Morearty,  Michael Bayne,  Luke Cycon,  Lee Mighdoll,  Konstantin Fedorov,  Julio Santos,  Julien Richard-Foy,  Juha Heljoranta,  Johannes Rudolph,  Jiawei Li,  Jentsch,  Jason Swartz,  James Roper,  Heather Miller,  Havoc Pennington,  Evgeny Kotelnikov,  Dmitry Petrashko,  Dmitry Bushev,  David Hall,  Daniel Darabos,  Dan Rosen,  Cody Allen,  Carlo Dapor,  Brian McKenna,  Andrey Kutejko,  Alden Torres.

Thank you all very much.

If you find any errors or omissions in these relates notes, [please submit a PR](https://github.com/scala/make-release-notes/blob/master/hand-written.md)!

### Reporting Bugs / Known Issues
Please [file any bugs you encounter](https://issues.scala-lang.org/secure/CreateIssueDetails!init.jspa?pid=10005&issuetype=1&versions=11311). If you're unsure whether something is a bug, please contact the [scala-user](https://groups.google.com/forum/?fromgroups#!forum/scala-user) mailing list.

Before reporting a bug, please have a look at these [known issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20fixVersion%20%21%3D%20%22Scala%202.11.0-RC3%22%20AND%20affectedVersion%20%3D%20%22Scala%202.11.0%22%20%20and%20resolution%20%3D%20unresolved%20ORDER%20BY%20priority%20DESC).

### Scala IDE for Eclipse
The Scala IDE with this release built in is [available from this update site](http://download.scala-ide.org/sdk/helium/e38/scala211/dev/site/) for [Eclipse 4.2/4.3 (Juno/Kepler)](http://www.eclipse.org/downloads/packages/eclipse-ide-java-developers/keplersr2). Please have a look at the [getting started guide](http://scala-ide.org/docs/user/gettingstarted.html) for more info.

### Available projects
The following Scala projects have already been released against 2.11.0! We'd love to include yours in this list as soon as it's available -- please submit a PR to update [these release notes](https://github.com/scala/make-release-notes/blob/master/hand-written.md).

    "org.scalacheck"         %% "scalacheck"         % "1.11.3"
    "com.typesafe.akka"      %% "akka-actor"         % "2.3.0"

The following projects were released against 2.11.0-RC4, with an 2.11 build hopefully following soon:

    "org.scalatest"          %% "scalatest"          % "2.1.3"
    "org.scala-lang.modules" %% "scala-async"        % "0.9.1"
    "org.scalafx"            %% "scalafx"            % "8.0.0-R4"
    "com.chuusai"            %% "shapeless"          % "1.2.4"
    "com.chuusai"            %% "shapeless"          % "2.0.0"
    "org.scalamacros"        %% "paradise"           % "2.0.0-M7"
    "org.scalaz"             %% "scalaz-core"        % "7.0.6"
    "org.specs2"             %% "specs2"             % "2.3.10"
    "com.propensive"         %% "rapture-core"       % "0.9.0"
    "com.propensive"         %% "rapture-json"       % "0.9.1"
    "com.propensive"         %% "rapture-io"         % "0.9.1"
    "org.scalafx"            %% "scalafx"            % "1.0.0-R8"
    "com.github.scopt"       %% "scopt"              % "3.2.0"
    "com.nocandysw"          %% "platform-executing" % "0.5.0"
    "io.argonaut"            %% "argonaut"           % "6.0.3"
    "com.clarifi"            %% "f0"                 % "1.1.1"
    "org.parboiled"          %% "parboiled-scala"    % "1.1.6"
    "com.sksamuel.scrimage"  %% "scrimage"           % "1.3.16"
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
  * Incremental compilation has been improved significantly. To try it out, upgrade to sbt 0.13.2-M2 and add `incOptions := incOptions.value.withNameHashing(true)` to your build! Other build tools are also supported. More info at [this sbt issue](https://github.com/sbt/sbt/issues/1010) -- that's where most of the work happened. More features are planned, e.g. [class-based tracking](https://github.com/sbt/sbt/issues/1104).
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




#### Complete commit list!

sha | Title
---: | ---
[2e70518](https://github.com/scala/scala/commit/2e70518) | <notextile>Bump Akka version to 2.3.2</notextile>
[d556f83](https://github.com/scala/scala/commit/d556f83) | <notextile>Bump versions after release of Scala 2.11.0-RC4</notextile>
[03fc287](https://github.com/scala/scala/commit/03fc287) | <notextile>Correction in the documentation.</notextile>
[965bfc6](https://github.com/scala/scala/commit/965bfc6) | <notextile>Update references to quasiquotes guide</notextile>
[b48ecfc](https://github.com/scala/scala/commit/b48ecfc) | <notextile>Render scala.full.version to versions.properties.</notextile>
[2ba0453](https://github.com/scala/scala/commit/2ba0453) | <notextile>Further tweak version of continuations plugin in scala-dist.pom</notextile>
[9fbac09](https://github.com/scala/scala/commit/9fbac09) | <notextile>SI-8466 fix quasiquote crash on recursively iterable unlifting</notextile>
[afccae6](https://github.com/scala/scala/commit/afccae6) | <notextile>Refactor rankImplicits, add some more docs</notextile>
[d345424](https://github.com/scala/scala/commit/d345424) | <notextile>Refactor: keep DivergentImplicitRecovery logic together.</notextile>
[1c330e6](https://github.com/scala/scala/commit/1c330e6) | <notextile>SI-8460 Fix regression in divergent implicit recovery</notextile>
[5e795fc](https://github.com/scala/scala/commit/5e795fc) | <notextile>Refactor handling of failures in implicit search</notextile>
[8489be1](https://github.com/scala/scala/commit/8489be1) | <notextile>Rebase #3665</notextile>
[63783f5](https://github.com/scala/scala/commit/63783f5) | <notextile>Disable more of the Travis spec build for PR validation</notextile>
[9cc0911](https://github.com/scala/scala/commit/9cc0911) | <notextile>Minor typographical fixes for lexical syntax chapter</notextile>
[f40d63a](https://github.com/scala/scala/commit/f40d63a) | <notextile>Don't mention C#</notextile>
[bb2a952](https://github.com/scala/scala/commit/bb2a952) | <notextile>Reducing overlap of code and math.</notextile>
[3a75252](https://github.com/scala/scala/commit/3a75252) | <notextile>Simplify CSS, bigger monospace to match math</notextile>
[91fb5c0](https://github.com/scala/scala/commit/91fb5c0) | <notextile>SI-6054 Modern eta-expansion examples that almost run</notextile>
[b3adae6](https://github.com/scala/scala/commit/b3adae6) | <notextile>SI-6069 Preserve by-name during eta-expansion</notextile>
[a89157f](https://github.com/scala/scala/commit/a89157f) | <notextile>Stubs for references chapter, remains TODO</notextile>
[0b48dc2](https://github.com/scala/scala/commit/0b48dc2) | <notextile>Number files like chapters. Consolidate toc &amp; preface.</notextile>
[0f1dcc4](https://github.com/scala/scala/commit/0f1dcc4) | <notextile>Minor cleanup in aisle README</notextile>
[6ec6990](https://github.com/scala/scala/commit/6ec6990) | <notextile>Skip step bound to fail in Travis PR validation</notextile>
[12720e6](https://github.com/scala/scala/commit/12720e6) | <notextile>Remove scala-continuations-plugin from scala-library-all</notextile>
[3560ddc](https://github.com/scala/scala/commit/3560ddc) | <notextile>Start ssh-agent</notextile>
[b102ffc](https://github.com/scala/scala/commit/b102ffc) | <notextile>Disable strict host checking</notextile>
[0261598](https://github.com/scala/scala/commit/0261598) | <notextile>Jekyll generated html in spec/ directory</notextile>
[71c1716](https://github.com/scala/scala/commit/71c1716) | <notextile>Add language to code blocks. Shorter Example title.</notextile>
[abd0895](https://github.com/scala/scala/commit/abd0895) | <notextile>Fix #6: automatic section numbering.</notextile>
[5997e32](https://github.com/scala/scala/commit/5997e32) | <notextile>#9 try to avoid double slashes in url</notextile>
[09f2a26](https://github.com/scala/scala/commit/09f2a26) | <notextile>require redcarpet 3.1 for user-friendly anchors</notextile>
[f16ab43](https://github.com/scala/scala/commit/f16ab43) | <notextile>use simple quotes, fix indent, escape dollar</notextile>
[5629529](https://github.com/scala/scala/commit/5629529) | <notextile>liquid requires SSA?</notextile>
[128c5e8](https://github.com/scala/scala/commit/128c5e8) | <notextile>sort pages in index</notextile>
[8dba297](https://github.com/scala/scala/commit/8dba297) | <notextile>base url</notextile>
[3df5773](https://github.com/scala/scala/commit/3df5773) | <notextile>formatting</notextile>
[7307a03](https://github.com/scala/scala/commit/7307a03) | <notextile>TODO: number headings using css</notextile>
[617bdf8](https://github.com/scala/scala/commit/617bdf8) | <notextile>mathjax escape dollar</notextile>
[a1275c4](https://github.com/scala/scala/commit/a1275c4) | <notextile>TODO: binding example</notextile>
[c61f554](https://github.com/scala/scala/commit/c61f554) | <notextile>fix indentation for footnotes</notextile>
[52898fa](https://github.com/scala/scala/commit/52898fa) | <notextile>allow math in code</notextile>
[827f5f6](https://github.com/scala/scala/commit/827f5f6) | <notextile>redcarpet</notextile>
[0bc3ec9](https://github.com/scala/scala/commit/0bc3ec9) | <notextile>formatting</notextile>
[2f3d0fd](https://github.com/scala/scala/commit/2f3d0fd) | <notextile>Jekyll 2 config for redcarpet 3.1.1</notextile>
[e6ecfd0](https://github.com/scala/scala/commit/e6ecfd0) | <notextile>That was fun: fix internal links.</notextile>
[d8a09e2](https://github.com/scala/scala/commit/d8a09e2) | <notextile>formatting</notextile>
[9c757bb](https://github.com/scala/scala/commit/9c757bb) | <notextile>fix some links</notextile>
[453625e](https://github.com/scala/scala/commit/453625e) | <notextile>wip: jekyllify</notextile>
[3fb5acc](https://github.com/scala/scala/commit/3fb5acc) | <notextile>SI-6054 don't use the defunct List.map2 in example</notextile>
[71e45e0](https://github.com/scala/scala/commit/71e45e0) | <notextile>SI-5136 correct return type for unapplySeq</notextile>
[aa6e4b3](https://github.com/scala/scala/commit/aa6e4b3) | <notextile>SI-6195 stable members can only be overridden by stable members</notextile>
[1921528](https://github.com/scala/scala/commit/1921528) | <notextile>SI-5605 case class equals only considers first param section</notextile>
[51f3ac1](https://github.com/scala/scala/commit/51f3ac1) | <notextile>SI-6054 correct eta-expansion in method value using placeholder syntax</notextile>
[78d96ea](https://github.com/scala/scala/commit/78d96ea) | <notextile>formatting: tables and headings</notextile>
[3c0d964](https://github.com/scala/scala/commit/3c0d964) | <notextile>SI-5155 xml patterns do not support cdata, entity refs or comments</notextile>
[84bba26](https://github.com/scala/scala/commit/84bba26) | <notextile>SI-5089 update definition implicit scope in terms of parts of a type</notextile>
[227e11d](https://github.com/scala/scala/commit/227e11d) | <notextile>SI-7313 method types of implicit and non-implicit parameter sections are never e</notextile>
[7be2a6c](https://github.com/scala/scala/commit/7be2a6c) | <notextile>SI-7672 explicit top-level import of Predef precludes implicit one</notextile>
[aa64187](https://github.com/scala/scala/commit/aa64187) | <notextile>SI-5370 PartialFunction is a Function with queryable domain</notextile>
[4615ec5](https://github.com/scala/scala/commit/4615ec5) | <notextile>SI-4980 isInstanceOf does not do outer checks</notextile>
[f0b37c2](https://github.com/scala/scala/commit/f0b37c2) | <notextile>SI-1972 clarify getter and setter must be declared together</notextile>
[5135bae](https://github.com/scala/scala/commit/5135bae) | <notextile>SI-5086 clean up EBNF</notextile>
[32e0943](https://github.com/scala/scala/commit/32e0943) | <notextile>SI-5065 val/var is optional for a constructor parameter</notextile>
[64b7338](https://github.com/scala/scala/commit/64b7338) | <notextile>SI-5209 correct precedence of infix operators starting with ! =</notextile>
[1130d10](https://github.com/scala/scala/commit/1130d10) | <notextile>formatting</notextile>
[e197cf8](https://github.com/scala/scala/commit/e197cf8) | <notextile>SI-4249 try/catch accepts expression</notextile>
[622ffd4](https://github.com/scala/scala/commit/622ffd4) | <notextile>wip</notextile>
[d614228](https://github.com/scala/scala/commit/d614228) | <notextile>SI-7937 In for, semi before guard never required</notextile>
[507e58b](https://github.com/scala/scala/commit/507e58b) | <notextile>github markdown: tables</notextile>
[09c957b](https://github.com/scala/scala/commit/09c957b) | <notextile>github markdown: use ###### for definitions and notes</notextile>
[9fb8276](https://github.com/scala/scala/commit/9fb8276) | <notextile>github markdown: use ###### for examples</notextile>
[19ab789](https://github.com/scala/scala/commit/19ab789) | <notextile>SI-4583 UnicodeEscape does not allow multiple backslashes</notextile>
[1ca2095](https://github.com/scala/scala/commit/1ca2095) | <notextile>formatting</notextile>
[b75812d](https://github.com/scala/scala/commit/b75812d) | <notextile>Mention WIP in README</notextile>
[9031467](https://github.com/scala/scala/commit/9031467) | <notextile>Catch up with latex spec.</notextile>
[21ca2cf](https://github.com/scala/scala/commit/21ca2cf) | <notextile>convert {\em } to _..._</notextile>
[37ef8a2](https://github.com/scala/scala/commit/37ef8a2) | <notextile>github markdown: numbered definition</notextile>
[b44c598](https://github.com/scala/scala/commit/b44c598) | <notextile>github markdown: code blocks</notextile>
[9dec37b](https://github.com/scala/scala/commit/9dec37b) | <notextile>github markdown: drop css classes</notextile>
[df2f3f7](https://github.com/scala/scala/commit/df2f3f7) | <notextile>github markdown: headers</notextile>
[839fd6e](https://github.com/scala/scala/commit/839fd6e) | <notextile>github markdown: numbered lists</notextile>
[fa4aba5](https://github.com/scala/scala/commit/fa4aba5) | <notextile>new build options</notextile>
[b71a2c1](https://github.com/scala/scala/commit/b71a2c1) | <notextile>updated README.md</notextile>
[d8f0a93](https://github.com/scala/scala/commit/d8f0a93) | <notextile>rendering error fix</notextile>
[ab8f966](https://github.com/scala/scala/commit/ab8f966) | <notextile>added tex source build</notextile>
[a80a894](https://github.com/scala/scala/commit/a80a894) | <notextile>Typographical adjustments</notextile>
[34eb920](https://github.com/scala/scala/commit/34eb920) | <notextile>Fix fonts to enable both old-style and lining numerals</notextile>
[8f1bd7f](https://github.com/scala/scala/commit/8f1bd7f) | <notextile>Over-wide line fix for types grammar</notextile>
[9cee383](https://github.com/scala/scala/commit/9cee383) | <notextile>Replaced build script with make file</notextile>
[3f339c8](https://github.com/scala/scala/commit/3f339c8) | <notextile>Minor pagination tweak</notextile>
[50ce322](https://github.com/scala/scala/commit/50ce322) | <notextile>Miscellaneous cleanups:</notextile>
[2311e34](https://github.com/scala/scala/commit/2311e34) | <notextile>fix poorly labeled section links fix over-wide grammar text</notextile>
[e7ade69](https://github.com/scala/scala/commit/e7ade69) | <notextile>Use the original type faces</notextile>
[2c21733](https://github.com/scala/scala/commit/2c21733) | <notextile>Adjust layout</notextile>
[54273a3](https://github.com/scala/scala/commit/54273a3) | <notextile>set Luxi Mono and Heuristica (Utopia) as the default fonts for monospace and mai</notextile>
[1352994](https://github.com/scala/scala/commit/1352994) | <notextile>use \sigma instead of raw unicode character in math mode, as it does not render </notextile>
[7691d7f](https://github.com/scala/scala/commit/7691d7f) | <notextile>added build step for ebook</notextile>
[9a8134a](https://github.com/scala/scala/commit/9a8134a) | <notextile>PDF building now working with pandoc 1.10.1</notextile>
[ab50eec](https://github.com/scala/scala/commit/ab50eec) | <notextile>using standard markdown for numbered lists (hopefully better rendering on github</notextile>
[94198c7](https://github.com/scala/scala/commit/94198c7) | <notextile>fixed reference to class diagram fixed undefined macro</notextile>
[ea177a2](https://github.com/scala/scala/commit/ea177a2) | <notextile>fixed inline code block</notextile>
[cdaeb84](https://github.com/scala/scala/commit/cdaeb84) | <notextile>fixed inline code blocks fixed math array for PDF output</notextile>
[1ec5965](https://github.com/scala/scala/commit/1ec5965) | <notextile>fixed inline code blocks removed LaTeX labels converted TODOs to comments</notextile>
[3404f54](https://github.com/scala/scala/commit/3404f54) | <notextile>fix for undefined macro</notextile>
[990d4f0](https://github.com/scala/scala/commit/990d4f0) | <notextile>fixed undefined macros and converted comment block</notextile>
[580d5d6](https://github.com/scala/scala/commit/580d5d6) | <notextile>fix for unicode character conversion error in producing PDF fix for grammar code</notextile>
[1847283](https://github.com/scala/scala/commit/1847283) | <notextile>standard library chapter converted</notextile>
[7066c70](https://github.com/scala/scala/commit/7066c70) | <notextile>converted xml expressions and user defined annotations chapters</notextile>
[dc958b2](https://github.com/scala/scala/commit/dc958b2) | <notextile>fixed minor math layout and unsupported commands</notextile>
[2f67c76](https://github.com/scala/scala/commit/2f67c76) | <notextile>Converted pattern matching chapter</notextile>
[a327584](https://github.com/scala/scala/commit/a327584) | <notextile>Implicit Parameters and Values chapter converted</notextile>
[a368e9c](https://github.com/scala/scala/commit/a368e9c) | <notextile>expressions chapter converted, some math-mode errors still exist</notextile>
[fd283b6](https://github.com/scala/scala/commit/fd283b6) | <notextile>conversion of classes and objects chapter</notextile>
[79833dc](https://github.com/scala/scala/commit/79833dc) | <notextile>converted syntax summary</notextile>
[b871ec6](https://github.com/scala/scala/commit/b871ec6) | <notextile>basic declarations and definitions chapter converted, needs second-pass review.</notextile>
[bb53357](https://github.com/scala/scala/commit/bb53357) | <notextile>types chapter fully converted. Added link to jquery and some experimental code f</notextile>
[3340862](https://github.com/scala/scala/commit/3340862) | <notextile>accidentally committed OS resource</notextile>
[eb3e02a](https://github.com/scala/scala/commit/eb3e02a) | <notextile>MathJAX configuration for inline math inside code blocks</notextile>
[a805b04](https://github.com/scala/scala/commit/a805b04) | <notextile>interim commit of conversion of types chapter</notextile>
[7d50d8f](https://github.com/scala/scala/commit/7d50d8f) | <notextile>- Grouping of text for examples in Lexical Syntax chapter fixed - Style of examp</notextile>
[f938a7c](https://github.com/scala/scala/commit/f938a7c) | <notextile>Identifiers, Names and Scopes chapter converted. Minor CSS tweaks to make exampl</notextile>
[7c16776](https://github.com/scala/scala/commit/7c16776) | <notextile>removed some stray LaTeX commands from Lexical Syntax chapter, and a back-refere</notextile>
[82435f1](https://github.com/scala/scala/commit/82435f1) | <notextile>experimental restyling of examples to try and look a bit more like the original </notextile>
[4f86c27](https://github.com/scala/scala/commit/4f86c27) | <notextile>fixed missing newline between example text and delimited code expression</notextile>
[5e2a788](https://github.com/scala/scala/commit/5e2a788) | <notextile>preface and lexical syntax chapter converted, other chapters split into their ow</notextile>
[0bac64d](https://github.com/scala/scala/commit/0bac64d) | <notextile>SI-8388 consistently match type trees by originals</notextile>
[f10d754](https://github.com/scala/scala/commit/f10d754) | <notextile>SI-8387 don't match new as a function application</notextile>
[2fea950](https://github.com/scala/scala/commit/2fea950) | <notextile>SI-8350 treat single parens equivalently to no-parens in new</notextile>
[a0c3bbd](https://github.com/scala/scala/commit/a0c3bbd) | <notextile>SI-8451 quasiquotes now handle quirks of secondary constructors</notextile>
[9326264](https://github.com/scala/scala/commit/9326264) | <notextile>SI-8437 macro runtime now also picks inherited macro implementations</notextile>
[5e23a6a](https://github.com/scala/scala/commit/5e23a6a) | <notextile>SI-8411 match desugared partial functions</notextile>
[f9a5880](https://github.com/scala/scala/commit/f9a5880) | <notextile>introduces Mirror.typeOf</notextile>
[fa91b17](https://github.com/scala/scala/commit/fa91b17) | <notextile>SI-8200 provide an identity liftable for trees</notextile>
[db300d4](https://github.com/scala/scala/commit/db300d4) | <notextile>[backport] no longer warns on calls to vampire macros</notextile>
[a16e003](https://github.com/scala/scala/commit/a16e003) | <notextile>Bump version to 2.10.5 for nightly builds.</notextile>
[5f4011e](https://github.com/scala/scala/commit/5f4011e) | <notextile>[backport] SI-7902 Fix spurious kind error due to an unitialized symbol</notextile>
[8ee165c](https://github.com/scala/scala/commit/8ee165c) | <notextile>SI-8205 [nomaster] backport test pos.lineContent</notextile>
[d167f14](https://github.com/scala/scala/commit/d167f14) | <notextile>[nomaster] corrects an error in reify&rsquo;s documentation</notextile>
[806b6e4](https://github.com/scala/scala/commit/806b6e4) | <notextile>Backports library changes related to SI-6566 from a419799</notextile>
[ff13742](https://github.com/scala/scala/commit/ff13742) | <notextile>[nomaster] SI-8146 Fix non-deterministic &lt;:&lt; for deeply nested types</notextile>
[cbb88ac](https://github.com/scala/scala/commit/cbb88ac) | <notextile>[nomaster] Update MiMa and use new wildcard filter</notextile>
[b6a54a8](https://github.com/scala/scala/commit/b6a54a8) | <notextile>SI-8420 don't crash on unquoting of non-liftable native type</notextile>
[aa1e1d0](https://github.com/scala/scala/commit/aa1e1d0) | <notextile>SI-8428 Refactor ConcatIterator</notextile>
[1fa46a5](https://github.com/scala/scala/commit/1fa46a5) | <notextile>SI-8428 Fix regression in iterator concatenation</notextile>
[ff02fda](https://github.com/scala/scala/commit/ff02fda) | <notextile>Bump versions for 2.11.0-RC3</notextile>
[bcf24ec](https://github.com/scala/scala/commit/bcf24ec) | <notextile>RC3 will ship with akka-actor 2.3.0</notextile>
[e66f5f7](https://github.com/scala/scala/commit/e66f5f7) | <notextile>SI-8341 minor fixup for comments in test</notextile>
[9f42c09](https://github.com/scala/scala/commit/9f42c09) | <notextile>SI-8341 Refine handoff of undet. params from implicit search</notextile>
[d9687d5](https://github.com/scala/scala/commit/d9687d5) | <notextile>SI-8425 don't create double-dollar names in c.freshName</notextile>
[b310d8c](https://github.com/scala/scala/commit/b310d8c) | <notextile>SI-4492 More informative error when class not found on classpath</notextile>
[ba1dab6](https://github.com/scala/scala/commit/ba1dab6) | <notextile>SI-8368 respect user-supplied scala.usejavacp</notextile>
[8864924](https://github.com/scala/scala/commit/8864924) | <notextile>Printers tests uncommented</notextile>
[2ae86dd](https://github.com/scala/scala/commit/2ae86dd) | <notextile>SI-8386 fixed</notextile>
[953b776](https://github.com/scala/scala/commit/953b776) | <notextile>SI-8266 Amend advice for deprecated octal 042</notextile>
[4309fb5](https://github.com/scala/scala/commit/4309fb5) | <notextile>Remove &quot;will not terminate&quot; from toStream doc</notextile>
[0fc0aad](https://github.com/scala/scala/commit/0fc0aad) | <notextile>SI-8086 follow-up that fixes the problem with `setter`</notextile>
[4b0b673](https://github.com/scala/scala/commit/4b0b673) | <notextile>Minor fixes in test. The equals method always returned true.</notextile>
[80fc8b7](https://github.com/scala/scala/commit/80fc8b7) | <notextile>SI-8265 Restore 2.10 variance behavior under -Xsource:2.10</notextile>
[0226345](https://github.com/scala/scala/commit/0226345) | <notextile>SI-8403 Fix regression in name binding with imports in templates</notextile>
[f46ae47](https://github.com/scala/scala/commit/f46ae47) | <notextile>SI-8407 &quot;symbol not found&quot; in Scaladoc use cases: warning only</notextile>
[5ef842e](https://github.com/scala/scala/commit/5ef842e) | <notextile>SI-8395 Regression in pattern matching with nested binds</notextile>
[8800614](https://github.com/scala/scala/commit/8800614) | <notextile>SI-8376 Better type printing for Java varargs</notextile>
[e6895d7](https://github.com/scala/scala/commit/e6895d7) | <notextile>SI-8376 Fix overload resolution with Java varargs</notextile>
[e09e5a4](https://github.com/scala/scala/commit/e09e5a4) | <notextile>SI-8392 Guards QuasiquoteClass against non-availability in scala-reflect</notextile>
[814ecad](https://github.com/scala/scala/commit/814ecad) | <notextile>SI-8363 Disable -Ydelambdafy:method in constructor position</notextile>
[f6712e4](https://github.com/scala/scala/commit/f6712e4) | <notextile>Add more tests for partial functions</notextile>
[6dbd770](https://github.com/scala/scala/commit/6dbd770) | <notextile>SI-8366 make partial function and match trees disjoint</notextile>
[59e8c6e](https://github.com/scala/scala/commit/59e8c6e) | <notextile>SI-8368 respect user-supplied -Dscala.usejavacp in Windows runner</notextile>
[a047057](https://github.com/scala/scala/commit/a047057) | <notextile>Fixes syntax error in unix runner.</notextile>
[14e77b9](https://github.com/scala/scala/commit/14e77b9) | <notextile>Move extra tuple placeholder case to reifyTreePlaceholder</notextile>
[c754ca8](https://github.com/scala/scala/commit/c754ca8) | <notextile>Update quasiquote debug output minimization pass</notextile>
[f94959d](https://github.com/scala/scala/commit/f94959d) | <notextile>SI-8385 make sure $quasiquote$tuple gets reified properly</notextile>
[aa93daf](https://github.com/scala/scala/commit/aa93daf) | <notextile>SI-8370 fixes an infinite loop in repl init</notextile>
[1b5a34b](https://github.com/scala/scala/commit/1b5a34b) | <notextile>Address pull request feedback</notextile>
[67d175f](https://github.com/scala/scala/commit/67d175f) | <notextile>SI-8331 make sure type select &amp; applied type doesn't match terms</notextile>
[60aa577](https://github.com/scala/scala/commit/60aa577) | <notextile>SI-8367 revert SI-8192's change to primaryConstructor when isJavaDefined</notextile>
[34e1a83](https://github.com/scala/scala/commit/34e1a83) | <notextile>SI-8368 respect user-supplied -Dscala.usejavacp in unix runner</notextile>
[76add38](https://github.com/scala/scala/commit/76add38) | <notextile>SI-8377 - Clarify the asynchronous requirement of ExecutionContext</notextile>
[384322b](https://github.com/scala/scala/commit/384322b) | <notextile>Addresses pull request feedback</notextile>
[b10f45a](https://github.com/scala/scala/commit/b10f45a) | <notextile>SI-8375 saner binary incompat errors for macros</notextile>
[eb4a2e3](https://github.com/scala/scala/commit/eb4a2e3) | <notextile>SI-8364 fixes cxTree lookup for imports</notextile>
[c1cb5e4](https://github.com/scala/scala/commit/c1cb5e4) | <notextile>minor typos in the doc of applyOrElse</notextile>
[10154cf](https://github.com/scala/scala/commit/10154cf) | <notextile>SI-8369 resetAttrs now correctly accounts for skolems</notextile>
[ed74326](https://github.com/scala/scala/commit/ed74326) | <notextile>SI-8372: unspliceable type printed in error message</notextile>
[9b0d0a8](https://github.com/scala/scala/commit/9b0d0a8) | <notextile>Test case for SI-8372: issue with ArrayOps.unzip</notextile>
[11682a9](https://github.com/scala/scala/commit/11682a9) | <notextile>Remove distribution building from ant build, see scala/scala-dist.</notextile>
[eeccc3d](https://github.com/scala/scala/commit/eeccc3d) | <notextile>No longer generate deprecated dists/maven/latest/build.xml</notextile>
[8d8a23c](https://github.com/scala/scala/commit/8d8a23c) | <notextile>Check library/reflect bincompat against 2.11.0-RC1</notextile>
[84378a8](https://github.com/scala/scala/commit/84378a8) | <notextile>Bump versions for 2.11.0-RC1</notextile>
[2cb7cba](https://github.com/scala/scala/commit/2cb7cba) | <notextile>Fix typo in log message.</notextile>
[c05153d](https://github.com/scala/scala/commit/c05153d) | <notextile>SI-8281 check for unbound placeholder parameters in quasiquote parser</notextile>
[04c55c8](https://github.com/scala/scala/commit/04c55c8) | <notextile>SI-8332 implicit class param unquoting in quasiquotes</notextile>
[6ec0f2f](https://github.com/scala/scala/commit/6ec0f2f) | <notextile>SI-8333 can't use modifiers if class is in a block</notextile>
[51b8e6c](https://github.com/scala/scala/commit/51b8e6c) | <notextile>SI-8285 use correct kind of map for quasiquote positions</notextile>
[fae2912](https://github.com/scala/scala/commit/fae2912) | <notextile>Fix block construction/deconstruction asymmetry</notextile>
[e17c055](https://github.com/scala/scala/commit/e17c055) | <notextile>SI-8275 allow to directly extract block contents of the case def</notextile>
[fef3c33](https://github.com/scala/scala/commit/fef3c33) | <notextile>test case that verifies SI-8352</notextile>
[2c91778](https://github.com/scala/scala/commit/2c91778) | <notextile>Update ant build's update.versions mechanism.</notextile>
[13e7b81](https://github.com/scala/scala/commit/13e7b81) | <notextile>Bump akka-actor version to 2.3.0-RC4</notextile>
[7bb1f41](https://github.com/scala/scala/commit/7bb1f41) | <notextile>Revert &quot;SI-7624 Fix -feature warnings in scala/tools/scalap&quot;</notextile>
[52d60e6](https://github.com/scala/scala/commit/52d60e6) | <notextile>Selectively revert &quot;SI-8315 Better debugging facility for ICode&quot;</notextile>
[9d2d01f](https://github.com/scala/scala/commit/9d2d01f) | <notextile>SI-4728 test case</notextile>
[a5cd601](https://github.com/scala/scala/commit/a5cd601) | <notextile>SI-8197 clarify overloading resolution with default args</notextile>
[1994a2d](https://github.com/scala/scala/commit/1994a2d) | <notextile>SI-3235 math.round() returns wrong results for Int and Long</notextile>
[c5962b1](https://github.com/scala/scala/commit/c5962b1) | <notextile>SI-8240 Consider rolling back optimizations for List</notextile>
[a7a1f43](https://github.com/scala/scala/commit/a7a1f43) | <notextile>Address pull request feedback</notextile>
[b2588a9](https://github.com/scala/scala/commit/b2588a9) | <notextile>Add ScalaDoc to Quasiquotes and Liftables parts of api</notextile>
[e0079c4](https://github.com/scala/scala/commit/e0079c4) | <notextile>SI-8251 deprecate `ListBuffer::readOnly`</notextile>
[12dc4a2](https://github.com/scala/scala/commit/12dc4a2) | <notextile>SI-6455 util.Try supports withFilter</notextile>
[62560b1](https://github.com/scala/scala/commit/62560b1) | <notextile>SI-6455 under -Xfuture, don't rewrite .withFilter to .filter</notextile>
[7def1a9](https://github.com/scala/scala/commit/7def1a9) | <notextile>SI-8330: Mismatch in stack heights</notextile>
[679c920](https://github.com/scala/scala/commit/679c920) | <notextile>SI-8324 fix permutation in test filename</notextile>
[c001b88](https://github.com/scala/scala/commit/c001b88) | <notextile>SI-1503 don't assume unsound type for ident/literal patterns</notextile>
[dded01b](https://github.com/scala/scala/commit/dded01b) | <notextile>more clean up in the macro engine</notextile>
[fb0c25c](https://github.com/scala/scala/commit/fb0c25c) | <notextile>more tests for macro bundles</notextile>
[64edb44](https://github.com/scala/scala/commit/64edb44) | <notextile>more helpful bundle error messages</notextile>
[da1032c](https://github.com/scala/scala/commit/da1032c) | <notextile>prohibits polymorphic bundles</notextile>
[31b52ed](https://github.com/scala/scala/commit/31b52ed) | <notextile>bundles now reject invalid context types</notextile>
[4203170](https://github.com/scala/scala/commit/4203170) | <notextile>SI-8321 whitebox bundles are now recognized as such</notextile>
[6ce573b](https://github.com/scala/scala/commit/6ce573b) | <notextile>minor code cleanup in the macro engine</notextile>
[b530ff0](https://github.com/scala/scala/commit/b530ff0) | <notextile>SI-7962 Scalac runner does not work within Emacs's terminal</notextile>
[4ba93e0](https://github.com/scala/scala/commit/4ba93e0) | <notextile>Fix ./build/&lt;stage&gt;/bin/scaladoc</notextile>
[5dfcf5e](https://github.com/scala/scala/commit/5dfcf5e) | <notextile>SI-8324 Fix regression in override checks for sealed classes</notextile>
[17a3639](https://github.com/scala/scala/commit/17a3639) | <notextile>SI-8197 Only consider immediate params for defaults, overloading</notextile>
[2ede59c](https://github.com/scala/scala/commit/2ede59c) | <notextile>SI-5479 link to release notes instead of jira query</notextile>
[07e0e2f](https://github.com/scala/scala/commit/07e0e2f) | <notextile>SI-5479 deprecate DelayedInit outside of App</notextile>
[64ed64e](https://github.com/scala/scala/commit/64ed64e) | <notextile>SI-8315 Fix crash in dead code elimination</notextile>
[0561dd0](https://github.com/scala/scala/commit/0561dd0) | <notextile>SI-8315 Better debugging facility for ICode</notextile>
[d5bb19f](https://github.com/scala/scala/commit/d5bb19f) | <notextile>SI-8197 Overload resolution should not consider default arguments</notextile>
[917c494](https://github.com/scala/scala/commit/917c494) | <notextile>SI-8224 Fix regression in f-bound aware LUBs</notextile>
[48a706d](https://github.com/scala/scala/commit/48a706d) | <notextile>PrintersTest commented</notextile>
[68e5d13](https://github.com/scala/scala/commit/68e5d13) | <notextile>fixes for wrappingIntoTerm</notextile>
[0f2ce92](https://github.com/scala/scala/commit/0f2ce92) | <notextile>block wrapping for trees modified</notextile>
[74b5c92](https://github.com/scala/scala/commit/74b5c92) | <notextile>block processing fixed for syntactics in typechecked trees</notextile>
[f7425c0](https://github.com/scala/scala/commit/f7425c0) | <notextile>printOwners support added to Printers; whitespaces removed</notextile>
[81e7caa](https://github.com/scala/scala/commit/81e7caa) | <notextile>move methods for typechecked trees processing to TreeInfo</notextile>
[109774b](https://github.com/scala/scala/commit/109774b) | <notextile>CodePrinter: TypedTreePrinter merged with ParsedTreePrinter</notextile>
[e727314](https://github.com/scala/scala/commit/e727314) | <notextile>lazy vals printing fixed for typechecked trees</notextile>
[9505aff](https://github.com/scala/scala/commit/9505aff) | <notextile>printers flag processing improvements: printRootPkg flag fixed, comments to flag</notextile>
[931edcc](https://github.com/scala/scala/commit/931edcc) | <notextile>Attributed val/var processing for syntactics (SI-8180) TypedTreesPrinter added c</notextile>
[4223bc2](https://github.com/scala/scala/commit/4223bc2) | <notextile>SI-7788 Avoid accidental shadowing of Predef.conforms</notextile>
[bba0166](https://github.com/scala/scala/commit/bba0166) | <notextile>SI-8229 Source compatible name for implicit any2stringadd</notextile>
[971358b](https://github.com/scala/scala/commit/971358b) | <notextile>SI-4577 singleton type pattern test should use `eq`, not `==`</notextile>
[810db85](https://github.com/scala/scala/commit/810db85) | <notextile>SI-6675 deprecation warning for auto-tupling in patterns</notextile>
[09fe97a](https://github.com/scala/scala/commit/09fe97a) | <notextile>SI-8316 SI-8318 SI-8248 reintroduces resetAllAttrs</notextile>
[23546f9](https://github.com/scala/scala/commit/23546f9) | <notextile>Tweak signature for quasiquote's apply</notextile>
[d49c09e](https://github.com/scala/scala/commit/d49c09e) | <notextile>Fix quasiquote terminology to be consistent with Scheme</notextile>
[e26fd72](https://github.com/scala/scala/commit/e26fd72) | <notextile>SI-8306: handle SWITCH nodes with just default case</notextile>
[1714578](https://github.com/scala/scala/commit/1714578) | <notextile>undeprecates typeSignature and typeSignatureIn</notextile>
[347fa24](https://github.com/scala/scala/commit/347fa24) | <notextile>improves situation with auto-init</notextile>
[00283e6](https://github.com/scala/scala/commit/00283e6) | <notextile>makes sure compat._ provides full compatibility with 2.10.x</notextile>
[afecfe9](https://github.com/scala/scala/commit/afecfe9) | <notextile>reverses SI-6484</notextile>
[34532d7](https://github.com/scala/scala/commit/34532d7) | <notextile>tests for SI-8300</notextile>
[5400784](https://github.com/scala/scala/commit/5400784) | <notextile>better deprecation message for Symbol.companionSymbol</notextile>
[2fc0164](https://github.com/scala/scala/commit/2fc0164) | <notextile>adds missing signature of appliedType</notextile>
[5b6700f](https://github.com/scala/scala/commit/5b6700f) | <notextile>adds more tests for enclosingOwners</notextile>
[3bedb19](https://github.com/scala/scala/commit/3bedb19) | <notextile>updates deprecation hints in compat</notextile>
[9b8bcf9](https://github.com/scala/scala/commit/9b8bcf9) | <notextile>some extension methods that I forgot to expose</notextile>
[2fb6a1e](https://github.com/scala/scala/commit/2fb6a1e) | <notextile>fixes compat for tree and type extractors</notextile>
[8801d29](https://github.com/scala/scala/commit/8801d29) | <notextile>exposes scope mutation APIs</notextile>
[c9ca737](https://github.com/scala/scala/commit/c9ca737) | <notextile>SI-6785 exposes Symbol.flags, setFlag and resetFlag</notextile>
[25e7274](https://github.com/scala/scala/commit/25e7274) | <notextile>exposes Symbol.setOwner</notextile>
[6402b57](https://github.com/scala/scala/commit/6402b57) | <notextile>better appliedType signatures</notextile>
[37b3d73](https://github.com/scala/scala/commit/37b3d73) | <notextile>makes internal.decorators signatures work</notextile>
[989aa43](https://github.com/scala/scala/commit/989aa43) | <notextile>upgrades typingTransform</notextile>
[2608db6](https://github.com/scala/scala/commit/2608db6) | <notextile>exposes additional TreeGen methods</notextile>
[3bfacda](https://github.com/scala/scala/commit/3bfacda) | <notextile>introduces Flag.STABLE</notextile>
[99b32bf](https://github.com/scala/scala/commit/99b32bf) | <notextile>staticXXX now throw ScalaReflectionException</notextile>
[88fd9b9](https://github.com/scala/scala/commit/88fd9b9) | <notextile>provides extension methods for internal</notextile>
[1c48634](https://github.com/scala/scala/commit/1c48634) | <notextile>addresses pull request feedback</notextile>
[2e4cce3](https://github.com/scala/scala/commit/2e4cce3) | <notextile>Type.companionType =&gt; Type.companion</notextile>
[49c99e6](https://github.com/scala/scala/commit/49c99e6) | <notextile>addresses pull request feedback</notextile>
[1039174](https://github.com/scala/scala/commit/1039174) | <notextile>renames some methods in ReificationSupport</notextile>
[1dda176](https://github.com/scala/scala/commit/1dda176) | <notextile>SI-7044 deprecates Symbol.associatedFile</notextile>
[d7b6662](https://github.com/scala/scala/commit/d7b6662) | <notextile>moves Symbol.pos to public API</notextile>
[2478009](https://github.com/scala/scala/commit/2478009) | <notextile>addresses pull request feedback</notextile>
[fa8f402](https://github.com/scala/scala/commit/fa8f402) | <notextile>some renamings</notextile>
[462d0b8](https://github.com/scala/scala/commit/462d0b8) | <notextile>adds internal.subpatterns</notextile>
[8c29132](https://github.com/scala/scala/commit/8c29132) | <notextile>adds internal.typingTransform</notextile>
[73adf2d](https://github.com/scala/scala/commit/73adf2d) | <notextile>introduces c.internal</notextile>
[63462f3](https://github.com/scala/scala/commit/63462f3) | <notextile>adds internal.changeOwner</notextile>
[483bd3c](https://github.com/scala/scala/commit/483bd3c) | <notextile>adds Context.enclosingOwner</notextile>
[d7dd68f](https://github.com/scala/scala/commit/d7dd68f) | <notextile>adds initialize and fullyInitialize</notextile>
[9582eb5](https://github.com/scala/scala/commit/9582eb5) | <notextile>adds Symbol.alternatives</notextile>
[2155ca4](https://github.com/scala/scala/commit/2155ca4) | <notextile>reflection API compatibility with 2.10.x</notextile>
[114c996](https://github.com/scala/scala/commit/114c996) | <notextile>establishes scala.reflect.api#internal</notextile>
[2780557](https://github.com/scala/scala/commit/2780557) | <notextile>cleans up Trees a little bit</notextile>
[012ad09](https://github.com/scala/scala/commit/012ad09) | <notextile>deprecates api#Name.decoded and api#Name.encoded</notextile>
[f14e9fe](https://github.com/scala/scala/commit/f14e9fe) | <notextile>deprecates String =&gt; Name implicit conversions</notextile>
[da09331](https://github.com/scala/scala/commit/da09331) | <notextile>SI-6732 deprecates internal#Symbol.isPackage</notextile>
[3dff364](https://github.com/scala/scala/commit/3dff364) | <notextile>SI-6441 removes Symbol.isOverride</notextile>
[47dba05](https://github.com/scala/scala/commit/47dba05) | <notextile>SI-8086 addresses problem with calling Symbol.getter</notextile>
[b5c4666](https://github.com/scala/scala/commit/b5c4666) | <notextile>SI-6931 cleans up the position API</notextile>
[2c05f01](https://github.com/scala/scala/commit/2c05f01) | <notextile>SI-6814 adds typechecker modes to c.typecheck</notextile>
[0268e03](https://github.com/scala/scala/commit/0268e03) | <notextile>SI-8118 simplifies Annotation down to a plain Tree</notextile>
[c7fd039](https://github.com/scala/scala/commit/c7fd039) | <notextile>ValOrDefDef.name is now TermName</notextile>
[7fc77f8](https://github.com/scala/scala/commit/7fc77f8) | <notextile>sane semantics for Symbols.companionSymbol</notextile>
[be22698](https://github.com/scala/scala/commit/be22698) | <notextile>adds Type.companionType</notextile>
[d236523](https://github.com/scala/scala/commit/d236523) | <notextile>SI-8063 exposes much needed conveniences for Type</notextile>
[0f4e955](https://github.com/scala/scala/commit/0f4e955) | <notextile>adds Type.typeArgs</notextile>
[df061de](https://github.com/scala/scala/commit/df061de) | <notextile>splits Type.normalize into dealias and etaExpand</notextile>
[202eb73](https://github.com/scala/scala/commit/202eb73) | <notextile>adds showDeclaration(sym: Symbol): String</notextile>
[ada0252](https://github.com/scala/scala/commit/ada0252) | <notextile>SI-8194 adds Universe.symbolOf[T]</notextile>
[b017629](https://github.com/scala/scala/commit/b017629) | <notextile>SI-6484 adds Universe.typeOf[T](x: T)</notextile>
[51b16e4](https://github.com/scala/scala/commit/51b16e4) | <notextile>SI-8192 adds ClassSymbol.isPrimaryConstructor</notextile>
[edadc01](https://github.com/scala/scala/commit/edadc01) | <notextile>SI-6379 adds MethodSymbol.exception</notextile>
[ad7983b](https://github.com/scala/scala/commit/ad7983b) | <notextile>additional class tags for reflection API</notextile>
[3293d60](https://github.com/scala/scala/commit/3293d60) | <notextile>SI-8190 erasure identities for types in reflection API</notextile>
[356839e](https://github.com/scala/scala/commit/356839e) | <notextile>fixes indentation in Annotations.scala</notextile>
[9380a38](https://github.com/scala/scala/commit/9380a38) | <notextile>does away with implicits in StandardLiftables</notextile>
[7881137](https://github.com/scala/scala/commit/7881137) | <notextile>SI-8187 api#Symbol.name now has precise type</notextile>
[8217c06](https://github.com/scala/scala/commit/8217c06) | <notextile>proceeds with the quest of removing `local` from names</notextile>
[c34b24a](https://github.com/scala/scala/commit/c34b24a) | <notextile>disambiguates uses of &ldquo;local&rdquo; in internal symbol API</notextile>
[7c06c9d](https://github.com/scala/scala/commit/7c06c9d) | <notextile>SI-6733 LOCAL, isLocal, and private[this]</notextile>
[30174f9](https://github.com/scala/scala/commit/30174f9) | <notextile>SI-7533 Adds Symbol.isAbstract</notextile>
[1af8dcb](https://github.com/scala/scala/commit/1af8dcb) | <notextile>SI-6565 Adds missing flag values to reflection API</notextile>
[f6c11c0](https://github.com/scala/scala/commit/f6c11c0) | <notextile>SI-6566, unsoundness with alias variance: document fix</notextile>
[78a7494](https://github.com/scala/scala/commit/78a7494) | <notextile>README.md: Add link to CONTRIBUTING.md</notextile>
[4f4ee87](https://github.com/scala/scala/commit/4f4ee87) | <notextile>SI-7932 Exclude PolyTypes from Java generic signatures</notextile>
[fd623f8](https://github.com/scala/scala/commit/fd623f8) | <notextile>SI-8304 Allow volatile-typed Idents as stable ident patterns</notextile>
[b31f9ab](https://github.com/scala/scala/commit/b31f9ab) | <notextile>SI-8301 fix regression with refinement subtyping, wildcard type.</notextile>
[3d2eba9](https://github.com/scala/scala/commit/3d2eba9) | <notextile>Optimization: remove assertion from SubstMap constructor</notextile>
[9be10bc](https://github.com/scala/scala/commit/9be10bc) | <notextile>SI-8072 rationalize public implicits in scala parallel collections</notextile>
[3a6c9ad](https://github.com/scala/scala/commit/3a6c9ad) | <notextile>SI-5165 separate compilation test Java annotations bug</notextile>
[de7abde](https://github.com/scala/scala/commit/de7abde) | <notextile>SI-5134 Test case for fixed DelayedInit / structural type bug</notextile>
[f5a99c2](https://github.com/scala/scala/commit/f5a99c2) | <notextile>SI-5565 Test case for fixed delayed init bug</notextile>
[0538e7f](https://github.com/scala/scala/commit/0538e7f) | <notextile>Group settings should honor user-set individual options</notextile>
[55549bf](https://github.com/scala/scala/commit/55549bf) | <notextile>Expose a means to disable boolean settings</notextile>
[1b1461f](https://github.com/scala/scala/commit/1b1461f) | <notextile>SI-7707 SI-7712 Exclude unused warnings from -Xlint</notextile>
[8161b51](https://github.com/scala/scala/commit/8161b51) | <notextile>Avoid storing source file contents twice</notextile>
[3ca9038](https://github.com/scala/scala/commit/3ca9038) | <notextile>Revert &quot;SI-5920 enables default and named args in macros&quot;</notextile>
[a02e053](https://github.com/scala/scala/commit/a02e053) | <notextile>SI-5920 enables default and named args in macros</notextile>
[d2a1dd5](https://github.com/scala/scala/commit/d2a1dd5) | <notextile>introduces -Yshow-symowners</notextile>
[c32dee8](https://github.com/scala/scala/commit/c32dee8) | <notextile>deduplication in Symbol.nameString</notextile>
[9eead7f](https://github.com/scala/scala/commit/9eead7f) | <notextile>standardizes checks for default getters</notextile>
[3900e4b](https://github.com/scala/scala/commit/3900e4b) | <notextile>standardizes prefixes used in named/default desugaring</notextile>
[2b67f8b](https://github.com/scala/scala/commit/2b67f8b) | <notextile>Make handling of tuples more consistent in quasi-quotes</notextile>
[c85435d](https://github.com/scala/scala/commit/c85435d) | <notextile>SI-8270 unconfuses bundles and vanilla macros</notextile>
[609047b](https://github.com/scala/scala/commit/609047b) | <notextile>typecheck(q&quot;class C&quot;) no longer crashes</notextile>
[8a27336](https://github.com/scala/scala/commit/8a27336) | <notextile>Improve support for patterns in vals</notextile>
[c716541](https://github.com/scala/scala/commit/c716541) | <notextile>Move null check case higher to avoid NPE</notextile>
[4280fc1](https://github.com/scala/scala/commit/4280fc1) | <notextile>Move placeholder construction logic into Placeholders</notextile>
[a8a7f4a](https://github.com/scala/scala/commit/a8a7f4a) | <notextile>SI-8202 bug compatibility with SI-8211 for quasiquotes</notextile>
[653c404](https://github.com/scala/scala/commit/653c404) | <notextile>SI-3452 GenBCode version of the static-forwarder signature fix</notextile>
[c7a5aab](https://github.com/scala/scala/commit/c7a5aab) | <notextile>SI-3452 Reduce low-hanging duplication bewteen GenASM and GenBCode</notextile>
[827ac1f](https://github.com/scala/scala/commit/827ac1f) | <notextile>SI-3452 Refactoring code in GenASM</notextile>
[640e279](https://github.com/scala/scala/commit/640e279) | <notextile>SI-3452 A better fix for static forwarder generic sigs</notextile>
[45cfc7b](https://github.com/scala/scala/commit/45cfc7b) | <notextile>SI-7374 Test cases for fixed Java interop problem</notextile>
[f8d80ea](https://github.com/scala/scala/commit/f8d80ea) | <notextile>SI-3452 Correct Java generic signatures for mixins, static forwarders</notextile>
[ff4cfd5](https://github.com/scala/scala/commit/ff4cfd5) | <notextile>SI-8266 Deprecate octal escapes in f-interpolator</notextile>
[a63193c](https://github.com/scala/scala/commit/a63193c) | <notextile>Made ParFlatHashTableIterator private vars private[this].</notextile>
[040a4e6](https://github.com/scala/scala/commit/040a4e6) | <notextile>SI-6908 FlatHashTable and things that depend on it can't store nulls</notextile>
[326fa9a](https://github.com/scala/scala/commit/326fa9a) | <notextile>SI-8264 scala.collection.immutable.HashSet#- returns broken Set</notextile>
[d84b86c](https://github.com/scala/scala/commit/d84b86c) | <notextile>add -Xsource:version to scalac man page</notextile>
[1dceb39](https://github.com/scala/scala/commit/1dceb39) | <notextile>SI-7711 Test for args in script</notextile>
[37f822e](https://github.com/scala/scala/commit/37f822e) | <notextile>SI-7711 Do not emit extra argv in script body</notextile>
[25a445e](https://github.com/scala/scala/commit/25a445e) | <notextile>Add an extremely well-commented test</notextile>
[2a1b15e](https://github.com/scala/scala/commit/2a1b15e) | <notextile>SI-8283 mutation-free bound inference for existentials</notextile>
[a4a1319](https://github.com/scala/scala/commit/a4a1319) | <notextile>SI-8188 NPE during deserialization of TrieMap</notextile>
[d3a302b](https://github.com/scala/scala/commit/d3a302b) | <notextile>SI-6632 ListBuffer's updated accepts negative positions</notextile>
[5984461](https://github.com/scala/scala/commit/5984461) | <notextile>SI-8177 tidy up in type reification</notextile>
[33fc681](https://github.com/scala/scala/commit/33fc681) | <notextile>SI-8177 specializeSym must use memberInfo on high side</notextile>
[509bd09](https://github.com/scala/scala/commit/509bd09) | <notextile>SI-8153 Mutation is hard, let's go shopping with an empty list</notextile>
[922d090](https://github.com/scala/scala/commit/922d090) | <notextile>SI-8276 Test for cyclic error caused by (reverted) SI-1786 fix</notextile>
[1067e23](https://github.com/scala/scala/commit/1067e23) | <notextile>SI-8280 regression in implicit selection.</notextile>
[436bbbe](https://github.com/scala/scala/commit/436bbbe) | <notextile>SI-8134 Address pull request feedback</notextile>
[eb1d52a](https://github.com/scala/scala/commit/eb1d52a) | <notextile>SI-5954 Add a TODO comment with an idea for future work</notextile>
[357905c](https://github.com/scala/scala/commit/357905c) | <notextile>SI-5954 Invalidate TypeRef cache when opening package object</notextile>
[731ed38](https://github.com/scala/scala/commit/731ed38) | <notextile>SI-8134 SI-5954 Fix companions in package object under separate comp.</notextile>
[c956a27](https://github.com/scala/scala/commit/c956a27) | <notextile>SI-5900 Fix pattern inference regression</notextile>
[b4e1a30](https://github.com/scala/scala/commit/b4e1a30) | <notextile>SI-5900 Pending test to show that SI-7886 persists</notextile>
[f62e280](https://github.com/scala/scala/commit/f62e280) | <notextile>SI-8244 Fix raw type regression under separate compilation</notextile>
[d5a1ea6](https://github.com/scala/scala/commit/d5a1ea6) | <notextile>SI-7753 InstantiateDependentMap narrows type of unstable args</notextile>
[427b826](https://github.com/scala/scala/commit/427b826) | <notextile>SI-8177 refine embeddedSymbols</notextile>
[7ea7a3b](https://github.com/scala/scala/commit/7ea7a3b) | <notextile>SI-8177 co-evolve more than just RefinedTypes</notextile>
[2d4d2d3](https://github.com/scala/scala/commit/2d4d2d3) | <notextile>A test case for a name binding progression</notextile>
[555db25](https://github.com/scala/scala/commit/555db25) | <notextile>SI-8263 Avoid SOE in logicallyEnclosingMember</notextile>
[e152297](https://github.com/scala/scala/commit/e152297) | <notextile>Reasonable Range operations consistently work when overfull.</notextile>
[95f21ca](https://github.com/scala/scala/commit/95f21ca) | <notextile>SI-6736 Range.contains is wrong</notextile>
[d187a0a](https://github.com/scala/scala/commit/d187a0a) | <notextile>SI-261 private vals in traits depend on composition order</notextile>
[47885ff](https://github.com/scala/scala/commit/47885ff) | <notextile>SI-7475 Address review comments in FindMembers</notextile>
[8d96380](https://github.com/scala/scala/commit/8d96380) | <notextile>SI-7475 Private members are not inheritable</notextile>
[aebe379](https://github.com/scala/scala/commit/aebe379) | <notextile>SI-7475 findMember and findMembers: estranged no more</notextile>
[db9fd55](https://github.com/scala/scala/commit/db9fd55) | <notextile>SI-7475 Refactor findMember computation into a class</notextile>
[48f6cdd](https://github.com/scala/scala/commit/48f6cdd) | <notextile>Revert &quot;SI-1786 incorporate defined bounds in inference&quot;</notextile>
[b816a83](https://github.com/scala/scala/commit/b816a83) | <notextile>SI-5994 battling implicits for String.lines</notextile>
[36ca860](https://github.com/scala/scala/commit/36ca860) | <notextile>Add a great test case.</notextile>
[2606bec](https://github.com/scala/scala/commit/2606bec) | <notextile>changes the order of whitebox typechecks. yes, again.</notextile>
[aceb0f3](https://github.com/scala/scala/commit/aceb0f3) | <notextile>Tweak parser entry point for pq</notextile>
[e008708](https://github.com/scala/scala/commit/e008708) | <notextile>SI-8226 Deduplicate Scala's Tokens and JavaTokens</notextile>
[81d1151](https://github.com/scala/scala/commit/81d1151) | <notextile>SI-8167 readLine shold flush output before reading input</notextile>
[127a767](https://github.com/scala/scala/commit/127a767) | <notextile>SI-8129 Crack the case of the curiously incoherent Context</notextile>
[4a8edc0](https://github.com/scala/scala/commit/4a8edc0) | <notextile>SI-8129 Make Object#== override Any#==</notextile>
[b0f81ed](https://github.com/scala/scala/commit/b0f81ed) | <notextile>SI-8219 Pending test to show suspicous overload in == in AnyRef</notextile>
[4b3dbd9](https://github.com/scala/scala/commit/4b3dbd9) | <notextile>SI-8219 Pending test case for unpositioned implicit error</notextile>
[894aee1](https://github.com/scala/scala/commit/894aee1) | <notextile>Start the PC thread only after initialization of required symbols.</notextile>
[ea36cad](https://github.com/scala/scala/commit/ea36cad) | <notextile>SI-8258 Revert &quot;SI-7335 Remove special case for import of Predef._</notextile>
[51ec62a](https://github.com/scala/scala/commit/51ec62a) | <notextile>SI-6948 Make the Abstract* classes public.</notextile>
[bf06e15](https://github.com/scala/scala/commit/bf06e15) | <notextile>SI-6169 TODO: consolidate with fix for SI-1786 (#2518)</notextile>
[7957f63](https://github.com/scala/scala/commit/7957f63) | <notextile>Optimation: use AnyRefMap in GenASM javaName caches</notextile>
[6f05aca](https://github.com/scala/scala/commit/6f05aca) | <notextile>Optimization: use AnyRef map for Namer -&gt; Typer tree handoff</notextile>
[d6b1e6e](https://github.com/scala/scala/commit/d6b1e6e) | <notextile>SI-6260 Adddress pull request review</notextile>
[9f142b1](https://github.com/scala/scala/commit/9f142b1) | <notextile>SI-6260 Avoid double-def error with lambdas over value classes</notextile>
[604707c](https://github.com/scala/scala/commit/604707c) | <notextile>addresses pull request feedback</notextile>
[1d53b2b](https://github.com/scala/scala/commit/1d53b2b) | <notextile>SI-7570 top-level codegen for toolboxes</notextile>
[6c7ceb6](https://github.com/scala/scala/commit/6c7ceb6) | <notextile>SI-7328 FieldMirrors now support value classes</notextile>
[6c1129b](https://github.com/scala/scala/commit/6c1129b) | <notextile>unifies method and constructor handling in JavaMirrors</notextile>
[32a02d6](https://github.com/scala/scala/commit/32a02d6) | <notextile>updates the test for by-name value class parameters</notextile>
[8b87327](https://github.com/scala/scala/commit/8b87327) | <notextile>SI-6411 reflection is now aware of posterasure</notextile>
[3d8a9ae](https://github.com/scala/scala/commit/3d8a9ae) | <notextile>fix typo</notextile>
[9dfac45](https://github.com/scala/scala/commit/9dfac45) | <notextile>SI-7933 REPL javax.script eval is cached result</notextile>
[10ca178](https://github.com/scala/scala/commit/10ca178) | <notextile>SI-8207 Allow import qualified by self reference</notextile>
[cbe136c](https://github.com/scala/scala/commit/cbe136c) | <notextile>SI-8215: Correcting typo and splitting a long sentence in MatchIterator doc</notextile>
[38162b5](https://github.com/scala/scala/commit/38162b5) | <notextile>SI-6169 initialize before .typeParams -- just in case</notextile>
[715a39b](https://github.com/scala/scala/commit/715a39b) | <notextile>SI-6169 more accurate check for raw java type encoded as existential</notextile>
[4525e33](https://github.com/scala/scala/commit/4525e33) | <notextile>SI-6169 Refine java wildcard bounds using corresponding tparam</notextile>
[1cf1bae](https://github.com/scala/scala/commit/1cf1bae) | <notextile>SI-8237 Avoid cyclic constraints when inferring hk type args</notextile>
[46d8419](https://github.com/scala/scala/commit/46d8419) | <notextile>SI-8245 Fix regression in interplay between lazy val, return</notextile>
[2dfbbf5](https://github.com/scala/scala/commit/2dfbbf5) | <notextile>SI-8154 AnyRefMap iterates its way to ((null, null))</notextile>
[1adb337](https://github.com/scala/scala/commit/1adb337) | <notextile>renames resetLocalAttrs to resetAttrs</notextile>
[97515ef](https://github.com/scala/scala/commit/97515ef) | <notextile>SI-8248 kills resetAllAttrs</notextile>
[b0fca1a](https://github.com/scala/scala/commit/b0fca1a) | <notextile>does away with resetAllAttrs in typedLabelDef</notextile>
[6015418](https://github.com/scala/scala/commit/6015418) | <notextile>does away with resetAllAttrs in the reifier</notextile>
[b6326af](https://github.com/scala/scala/commit/b6326af) | <notextile>further limits discoverability of resetAttrs</notextile>
[ab7a8bc](https://github.com/scala/scala/commit/ab7a8bc) | <notextile>SI-8092 Review cleanup, no qq</notextile>
[f8e0f98](https://github.com/scala/scala/commit/f8e0f98) | <notextile>SI-8092 Refactor f-interp</notextile>
[8053682](https://github.com/scala/scala/commit/8053682) | <notextile>SI-8092 More verify for f-interpolator</notextile>
[dc3fccb](https://github.com/scala/scala/commit/dc3fccb) | <notextile>turns off the gilSynchronizedIfNotInited optimization</notextile>
[2bd3044](https://github.com/scala/scala/commit/2bd3044) | <notextile>SI-8131 fixes residual race condition in runtime reflection</notextile>
[f142d85](https://github.com/scala/scala/commit/f142d85) | <notextile>removes non-determinism in reflection-sync-potpourri</notextile>
[8c1505f](https://github.com/scala/scala/commit/8c1505f) | <notextile>FromJavaClassCompleter is now flag-agnostic</notextile>
[b88198e](https://github.com/scala/scala/commit/b88198e) | <notextile>Revert &quot;synchronizes pendingVolatiles&quot;</notextile>
[f2afbb46](https://github.com/scala/scala/commit/f2afbb46) | <notextile>a note about Symbol.typeSignature</notextile>
[c73f309](https://github.com/scala/scala/commit/c73f309) | <notextile>Add support for a more straightforward alternative to import selectors</notextile>
[31c5310](https://github.com/scala/scala/commit/31c5310) | <notextile>Use more specific return type for SyntacticFunction</notextile>
[a98eee5](https://github.com/scala/scala/commit/a98eee5) | <notextile>Better comment for SyntacticEmptyTypeTree</notextile>
[1e5654c](https://github.com/scala/scala/commit/1e5654c) | <notextile>Represent tq&quot;&quot; as SyntacticEmptyTypeTree rather than TypeTree()</notextile>
[d60b832](https://github.com/scala/scala/commit/d60b832) | <notextile>Rename EmptyTypTree into SyntacticEmptyTypeTree</notextile>
[a408d79](https://github.com/scala/scala/commit/a408d79) | <notextile>Fix partest-extras eclipse project dependencies</notextile>
[8994da9](https://github.com/scala/scala/commit/8994da9) | <notextile>Fix inconsistent binding in patterns with 10+ holes</notextile>
[e8cca3c](https://github.com/scala/scala/commit/e8cca3c) | <notextile>Fix feature warnings in test.osgi.comp</notextile>
[ffc3203](https://github.com/scala/scala/commit/ffc3203) | <notextile>SI-8173 add support for patterns like init :+ last to quasiquotes</notextile>
[ba98fa5](https://github.com/scala/scala/commit/ba98fa5) | <notextile>Remove cruft from pom.</notextile>
[1f16ef8](https://github.com/scala/scala/commit/1f16ef8) | <notextile>Scaladoc jars should go to /api.</notextile>
[8e9e464](https://github.com/scala/scala/commit/8e9e464) | <notextile>SI-8239 don't loop forever in ContextTrees.locateContextTree</notextile>
[81cd06c](https://github.com/scala/scala/commit/81cd06c) | <notextile>Add repl as dependency of test-junit Eclipse project.</notextile>
[a2f595c](https://github.com/scala/scala/commit/a2f595c) | <notextile>Avoid work in GenICode#run when inactive.</notextile>
[86bc324](https://github.com/scala/scala/commit/86bc324) | <notextile>Optimization in Uncurry</notextile>
[811e423](https://github.com/scala/scala/commit/811e423) | <notextile>Avoid needless Name creation</notextile>
[e3af86a](https://github.com/scala/scala/commit/e3af86a) | <notextile>Optimize generic signatures utility method `dotCleanup`</notextile>
[b0c4353](https://github.com/scala/scala/commit/b0c4353) | <notextile>SI-8228 Avoid infinite loop with erroneous code, overloading</notextile>
[60f106e](https://github.com/scala/scala/commit/60f106e) | <notextile>Improve ExecutionContext implicitNotFound and docs</notextile>
[24f2a3d](https://github.com/scala/scala/commit/24f2a3d) | <notextile>SI-4997 deprecate StringLike.linesIterator for StringLike.lines</notextile>
[9506d52](https://github.com/scala/scala/commit/9506d52) | <notextile>SI-8233 Fix regression in backend with boxed nulls</notextile>
[a02fae9](https://github.com/scala/scala/commit/a02fae9) | <notextile>SI-8170 Posing outstanding questions as TODOs</notextile>
[52379b6](https://github.com/scala/scala/commit/52379b6) | <notextile>SI-8170 Fix regression in TypeRef#transform w. PolyTypes</notextile>
[50c1c42](https://github.com/scala/scala/commit/50c1c42) | <notextile>PR #3233 cleanup</notextile>
[8c25607](https://github.com/scala/scala/commit/8c25607) | <notextile>SI-8030 Restore thread safety to the parser</notextile>
[cb1b0ae](https://github.com/scala/scala/commit/cb1b0ae) | <notextile>Fix typo in compiler's error message: anoynmous =&gt; anonymous</notextile>
[9c0ca62](https://github.com/scala/scala/commit/9c0ca62) | <notextile>SI-8215 Documenting the possibility of IllegalStateExceptions when using MatchIt</notextile>
[9956245](https://github.com/scala/scala/commit/9956245) | <notextile>SI-8215 Removing ASCII art class diagram in Scaladoc for Regex</notextile>
[37a88af](https://github.com/scala/scala/commit/37a88af) | <notextile>SI-4014 Scaladoc omits @author</notextile>
[c30cf0e](https://github.com/scala/scala/commit/c30cf0e) | <notextile>Optimization in TailCalls</notextile>
[67f7df2](https://github.com/scala/scala/commit/67f7df2) | <notextile>Optimize tailcall elimination</notextile>
[eb2627c](https://github.com/scala/scala/commit/eb2627c) | <notextile>Don't try to eliminate tail calls in constructors.</notextile>
[bf24780](https://github.com/scala/scala/commit/bf24780) | <notextile>Optimize use of methodTypeSchema</notextile>
[925df55](https://github.com/scala/scala/commit/925df55) | <notextile>Optimize lookup of tree/symbol attachment search.</notextile>
[cc649ce](https://github.com/scala/scala/commit/cc649ce) | <notextile>More overrides for SetN</notextile>
[9e7eb8c](https://github.com/scala/scala/commit/9e7eb8c) | <notextile>Implicits: Move shadowing checks after plausibility checks</notextile>
[1623c62](https://github.com/scala/scala/commit/1623c62) | <notextile>Optimization in InstantiateDependentMap</notextile>
[d607009](https://github.com/scala/scala/commit/d607009) | <notextile>Optimize typedDefDef: disable some checks post typer</notextile>
[9da3710](https://github.com/scala/scala/commit/9da3710) | <notextile>Typers#stabilize is a noop in erasure's typer.</notextile>
[36a10f0](https://github.com/scala/scala/commit/36a10f0) | <notextile>Optimize TreeInfo#isMacroApplication.</notextile>
[de4c59e](https://github.com/scala/scala/commit/de4c59e) | <notextile>Optimize isSelfSuperCall</notextile>
[f84acc9](https://github.com/scala/scala/commit/f84acc9) | <notextile>SI-7266 Stream leaks memory</notextile>
[b5e13c9](https://github.com/scala/scala/commit/b5e13c9) | <notextile>SI-7322 Interpolator idents must be encoded</notextile>
[da6b444](https://github.com/scala/scala/commit/da6b444) | <notextile>update mailmap</notextile>
[a9e9035](https://github.com/scala/scala/commit/a9e9035) | <notextile>SI-7124 make macro definitions prettier in scaladoc</notextile>
[8ef0c6c](https://github.com/scala/scala/commit/8ef0c6c) | <notextile>Avoid generic collections operations hot paths</notextile>
[5024246](https://github.com/scala/scala/commit/5024246) | <notextile>Optimize the pickler phase</notextile>
[d0afd7e](https://github.com/scala/scala/commit/d0afd7e) | <notextile>SI-7700 @unspecialized, Part Deux: Now Working.</notextile>
[2524fdd](https://github.com/scala/scala/commit/2524fdd) | <notextile>SI-8143 Regressions with override checks, private members</notextile>
[f97e2d4](https://github.com/scala/scala/commit/f97e2d4) | <notextile>SI-8213 AnyRefMap.getOrElseUpdate is faulty</notextile>
[327eea8](https://github.com/scala/scala/commit/327eea8) | <notextile>Prohibit views targeting AnyVal</notextile>
[f584f5b](https://github.com/scala/scala/commit/f584f5b) | <notextile>SI-8205 Don't include CR in line</notextile>
[0eefa77](https://github.com/scala/scala/commit/0eefa77) | <notextile>SI-8205 Avoid long, slow march to AIIOBE in SourceFile#lineContent</notextile>
[d8c7850](https://github.com/scala/scala/commit/d8c7850) | <notextile>SI-8199 Account for module class suffix in -Xmax-classfile-name</notextile>
[8e98624](https://github.com/scala/scala/commit/8e98624) | <notextile>SI-8076 improve support for implicit argument list</notextile>
[39382948](https://github.com/scala/scala/commit/39382948) | <notextile>SI-6844 restrict splicing in parameter position</notextile>
[0200375](https://github.com/scala/scala/commit/0200375) | <notextile>Addresses feedback from Jason</notextile>
[3074857](https://github.com/scala/scala/commit/3074857) | <notextile>Reify all blocks as syntactic blocks</notextile>
[0a529b9](https://github.com/scala/scala/commit/0a529b9) | <notextile>Address pull request feedback</notextile>
[adf990a](https://github.com/scala/scala/commit/adf990a) | <notextile>SI-7275 allow flattening of blocks with ..$</notextile>
[01f9ab5](https://github.com/scala/scala/commit/01f9ab5) | <notextile>Refactor reification of high-cardinality holes</notextile>
[ef118b8](https://github.com/scala/scala/commit/ef118b8) | <notextile>Tag synthetic unit with attachment</notextile>
[d603cae](https://github.com/scala/scala/commit/d603cae) | <notextile>SI-8182 Avert crash due to type args in pattern</notextile>
[97d14c5](https://github.com/scala/scala/commit/97d14c5) | <notextile>Fix misuse of underscores.</notextile>
[eacf187](https://github.com/scala/scala/commit/eacf187) | <notextile>corrects an error in reify&rsquo;s documentation</notextile>
[48413b4](https://github.com/scala/scala/commit/48413b4) | <notextile>SI-7919 Newline after empty string interp</notextile>
[f86c36f](https://github.com/scala/scala/commit/f86c36f) | <notextile>SI-2066 -Xsource:2.10: lenient treatment of variance in &lt;:&lt;, =:=</notextile>
[40f1ff2](https://github.com/scala/scala/commit/40f1ff2) | <notextile>SI-8171 make tq&quot;&quot; an alias for empty type tree</notextile>
[fdce4a0](https://github.com/scala/scala/commit/fdce4a0) | <notextile>Use more precise return types for objects</notextile>
[ac3b407](https://github.com/scala/scala/commit/ac3b407) | <notextile>Versions of modules part of Scala 2.11.0-M8.</notextile>
[7f65b37](https://github.com/scala/scala/commit/7f65b37) | <notextile>SI-7445 ListMap.tail is returning wrong result</notextile>
[947defc](https://github.com/scala/scala/commit/947defc) | <notextile>Make abstract-report2 test less dependent on std library.</notextile>
[6d71ae8](https://github.com/scala/scala/commit/6d71ae8) | <notextile>Work-around for partest failure due to JDK bug.</notextile>
[008694f](https://github.com/scala/scala/commit/008694f) | <notextile>Add support for Java 8 in our build.</notextile>
[d3cc913](https://github.com/scala/scala/commit/d3cc913) | <notextile>fix to partest.cross</notextile>
[b48c706](https://github.com/scala/scala/commit/b48c706) | <notextile>Add cross suffix customizability for modules</notextile>
[56d980c](https://github.com/scala/scala/commit/56d980c) | <notextile>addresses pull request feedback</notextile>
[47d1fb1](https://github.com/scala/scala/commit/47d1fb1) | <notextile>SI-6879 improves Context.freshName</notextile>
[7591aa1](https://github.com/scala/scala/commit/7591aa1) | <notextile>an optimization for c.eval</notextile>
[ca74550](https://github.com/scala/scala/commit/ca74550) | <notextile>Expose seq field for variable arity definitions</notextile>
[14c8779](https://github.com/scala/scala/commit/14c8779) | <notextile>Improve naming of ReadStdin</notextile>
[752f1eb](https://github.com/scala/scala/commit/752f1eb) | <notextile>deprecates resetAllAttrs and resetLocalAttrs in favor of the new API</notextile>
[97286d7](https://github.com/scala/scala/commit/97286d7) | <notextile>moves analyzer.ImportType into scala.reflect.internal</notextile>
[07ff3a9](https://github.com/scala/scala/commit/07ff3a9) | <notextile>SI-8151 Remove -Yself-in-annots and associated implementation</notextile>
[e57af7d](https://github.com/scala/scala/commit/e57af7d) | <notextile>SI-8133 Fix regression with package objects, overloading</notextile>
[3f3014c](https://github.com/scala/scala/commit/3f3014c) | <notextile>temporarily disables the toStringSubjects cache</notextile>
[554fc3e](https://github.com/scala/scala/commit/554fc3e) | <notextile>addresses pull request feedback</notextile>
[2d0aaf5](https://github.com/scala/scala/commit/2d0aaf5) | <notextile>capitalizes &ldquo;s&rdquo; in tostring</notextile>
[35300b4](https://github.com/scala/scala/commit/35300b4) | <notextile>introduces failsafe against endless type printing</notextile>
[936d60a](https://github.com/scala/scala/commit/936d60a) | <notextile>SI-8158 compiler hangs printing out fancy types</notextile>
[6a6b485](https://github.com/scala/scala/commit/6a6b485) | <notextile>fixes a typo in Types.scala</notextile>
[88c2994](https://github.com/scala/scala/commit/88c2994) | <notextile>quasiquotes no longer evaluate debug logs when debug logging is off</notextile>
[1baf11a](https://github.com/scala/scala/commit/1baf11a) | <notextile>SI-8143 Fix bug with super-accessors / dependent types</notextile>
[9df2dcc](https://github.com/scala/scala/commit/9df2dcc) | <notextile>[nomaster] SI-8152 Backport variance validator performance fix</notextile>
[c91d373](https://github.com/scala/scala/commit/c91d373) | <notextile>SI-8111 Expand the comment with a more detailed TODO</notextile>
[2c770ae](https://github.com/scala/scala/commit/2c770ae) | <notextile>SI-8111 Repair symbol owners after abandoned named-/default-args</notextile>
[5876e8c](https://github.com/scala/scala/commit/5876e8c) | <notextile>[nomaster] SI-8114 Binary compat. workaround for erasure bug SI-7120</notextile>
[bd4adf5](https://github.com/scala/scala/commit/bd4adf5) | <notextile>More clear implicitNotFound error for ExecutionContext</notextile>
[255c51b](https://github.com/scala/scala/commit/255c51b) | <notextile>SI-6563 Test case for already-fixed crasher</notextile>
[c0cb1d8](https://github.com/scala/scala/commit/c0cb1d8) | <notextile>[nomaster] codifies the state of the art wrt SI-8104</notextile>
[7e85b59](https://github.com/scala/scala/commit/7e85b59) | <notextile>SI-8085 Fix BrowserTraverser for package objects</notextile>
[a12dd9c](https://github.com/scala/scala/commit/a12dd9c) | <notextile>Test demonstrating SI-8085</notextile>
[3fa2c97](https://github.com/scala/scala/commit/3fa2c97) | <notextile>Report error on code size overflow, log method name.</notextile>
[2aa9da5](https://github.com/scala/scala/commit/2aa9da5) | <notextile>Partially revert f8d8f7d08d.</notextile>
[47562e7](https://github.com/scala/scala/commit/47562e7) | <notextile>Revert &quot;SI-6426, importable _.&quot;</notextile>
[f0d913b](https://github.com/scala/scala/commit/f0d913b) | <notextile>SI-8062 Fix inliner cycle with recursion, separate compilation</notextile>
[c258ccc](https://github.com/scala/scala/commit/c258ccc) | <notextile>Don't trace the low-level details of ResetAttrs under -Ydebug</notextile>
[b7b210d](https://github.com/scala/scala/commit/b7b210d) | <notextile>Avoid cycles in Symbol toString under -Ydebug</notextile>
[06bae51](https://github.com/scala/scala/commit/06bae51) | <notextile>Problem with EOL in tests for Printers is fixed</notextile>
[99a75c0](https://github.com/scala/scala/commit/99a75c0) | <notextile>Fix typo</notextile>
[03e9e95](https://github.com/scala/scala/commit/03e9e95) | <notextile>Test edge cases of literal lifting</notextile>
[6283c01](https://github.com/scala/scala/commit/6283c01) | <notextile>Give better names to UnliftHelper1 and UnliftHelper2</notextile>
[ae4a2f0](https://github.com/scala/scala/commit/ae4a2f0) | <notextile>Lift Some, None, Nil, Left, Right not just supertypes</notextile>
[722c743](https://github.com/scala/scala/commit/722c743) | <notextile>Remove redundant asInstanceOf for liftable</notextile>
[ca05d22](https://github.com/scala/scala/commit/ca05d22) | <notextile>SI-8157 Make overloading, defaults restriction PolyType aware</notextile>
[a1c00ae](https://github.com/scala/scala/commit/a1c00ae) | <notextile>Dotless type application for infix operators.</notextile>
[6f4dfb4](https://github.com/scala/scala/commit/6f4dfb4) | <notextile>deprecates c.enclosingTree-style APIs</notextile>
[034f6b9](https://github.com/scala/scala/commit/034f6b9) | <notextile>SI-6253 HashSet should implement union</notextile>
[f9cbcbd](https://github.com/scala/scala/commit/f9cbcbd) | <notextile>overzealous assert in BCodeBodyBuilder rejected throw null</notextile>
[841dbc9](https://github.com/scala/scala/commit/841dbc9) | <notextile>removing defensive code made obsolete by existing fix to SI-5604</notextile>
[c4e37d6](https://github.com/scala/scala/commit/c4e37d6) | <notextile>overzealous assert in GenBCode</notextile>
[f1ca1a3](https://github.com/scala/scala/commit/f1ca1a3) | <notextile>removing dead code in BCodeSyncAndTry</notextile>
[6eed8d0](https://github.com/scala/scala/commit/6eed8d0) | <notextile>there's a reason for this code in GenBCode</notextile>
[7ee1a83](https://github.com/scala/scala/commit/7ee1a83) | <notextile>GenBCode version of &quot;not eliminate loadmodule on static methods.&quot;</notextile>
[7d1e8aa](https://github.com/scala/scala/commit/7d1e8aa) | <notextile>GenBCode version of &quot;Updating Position call sites&quot; commit</notextile>
[94e05a8](https://github.com/scala/scala/commit/94e05a8) | <notextile>SI-8126 Puts SI-7335 fix behind a source level flag</notextile>
[6dd3653](https://github.com/scala/scala/commit/6dd3653) | <notextile>SI-8126 Puts SI-6899 fix under a source level flag</notextile>
[d43618a](https://github.com/scala/scala/commit/d43618a) | <notextile>SI-8126 Add a '-Xsource' flag allowing compilation in e.g. 2.10 mode</notextile>
[994de8f](https://github.com/scala/scala/commit/994de8f) | <notextile>SI-4370 Range bug: Wrong result for Long.MinValue to Long.MaxValue by Int.MaxVal</notextile>
[973c706](https://github.com/scala/scala/commit/973c706) | <notextile>SI-8148 fix anonymous functions with placeholders</notextile>
[9c5e7f3](https://github.com/scala/scala/commit/9c5e7f3) | <notextile>Repairs unexpected failure of test t6200.scala</notextile>
[47a91d7](https://github.com/scala/scala/commit/47a91d7) | <notextile>SI-6200 - HashMap should implement filter</notextile>
[afcfba0](https://github.com/scala/scala/commit/afcfba0) | <notextile>SI-6196 - Set should implement filter</notextile>
[af75be6](https://github.com/scala/scala/commit/af75be6) | <notextile>SI-7544 StringContext.f docs update</notextile>
[bfa7031](https://github.com/scala/scala/commit/bfa7031) | <notextile>SI-6457 ImmutableSetFactory.empty results in StackOverflowError</notextile>
[29541ce](https://github.com/scala/scala/commit/29541ce) | <notextile>Quasi-comprehensive BigDecimal soundness/correctness fix.</notextile>
[2477bbd](https://github.com/scala/scala/commit/2477bbd) | <notextile>SI-8100 - prevent possible SOE during Stream#flatten.</notextile>
[765ac94](https://github.com/scala/scala/commit/765ac94) | <notextile>SI-7469 Remove misc. @deprecated elements</notextile>
[f606d81](https://github.com/scala/scala/commit/f606d81) | <notextile>SI-8015 Refactor per code review</notextile>
[2c8a8ff](https://github.com/scala/scala/commit/2c8a8ff) | <notextile>SI-8015 Carat =&gt; Caret</notextile>
[8be560a](https://github.com/scala/scala/commit/8be560a) | <notextile>SI-8015 Unprintables in messages</notextile>
[bb2e99a](https://github.com/scala/scala/commit/bb2e99a) | <notextile>SI-8015 Count lines by EOLs</notextile>
[c5567e2](https://github.com/scala/scala/commit/c5567e2) | <notextile>SI-8035 Deprecate automatic () insertion in argument lists</notextile>
[2fe7678](https://github.com/scala/scala/commit/2fe7678) | <notextile>SI-8107: Use Regex.quote</notextile>
[780ceca](https://github.com/scala/scala/commit/780ceca) | <notextile>SI-8107: Add Regex.quote</notextile>
[b8a76f6](https://github.com/scala/scala/commit/b8a76f6) | <notextile>SI-8081 unzip/unzip3 return wrong static type when applied to Arrays</notextile>
[d680d23](https://github.com/scala/scala/commit/d680d23) | <notextile>toCode renamed to showCode</notextile>
[3989227](https://github.com/scala/scala/commit/3989227) | <notextile>Code cleanup based on pull request comments</notextile>
[68ba3ef](https://github.com/scala/scala/commit/68ba3ef) | <notextile>Annotated trees processing is modified</notextile>
[2357e5d](https://github.com/scala/scala/commit/2357e5d) | <notextile>Printers code refactoring and cleanup</notextile>
[0754abb](https://github.com/scala/scala/commit/0754abb) | <notextile>Tests for ParsedTreePrinter</notextile>
[0ac5c56](https://github.com/scala/scala/commit/0ac5c56) | <notextile>toCode is added to Printers</notextile>
[6536256](https://github.com/scala/scala/commit/6536256) | <notextile>val showOuterTests is removed</notextile>
[64c9122](https://github.com/scala/scala/commit/64c9122) | <notextile>Variance annotations printing</notextile>
[8642a50](https://github.com/scala/scala/commit/8642a50) | <notextile>SI-8132 Fix false &quot;overrides nothing&quot; for case class protected param</notextile>
[b33740f](https://github.com/scala/scala/commit/b33740f) | <notextile>Improved documentation of HashTrieSet internals</notextile>
[24a227d](https://github.com/scala/scala/commit/24a227d) | <notextile>Implements specialized subsetOf for HashSet</notextile>
[a09e143](https://github.com/scala/scala/commit/a09e143) | <notextile>SI-8146 Fix non-deterministic &lt;:&lt; for deeply nested types</notextile>
[2e28cf7](https://github.com/scala/scala/commit/2e28cf7) | <notextile>SI-8146 Test cases for typechecking decidability</notextile>
[8beeef3](https://github.com/scala/scala/commit/8beeef3) | <notextile>SI-8146 Pending test, diagnosis for bug in decidability of &lt;:&lt;</notextile>
[65a2a41](https://github.com/scala/scala/commit/65a2a41) | <notextile>Removes TODO comments that are no longer applicable</notextile>
[b2f67b5](https://github.com/scala/scala/commit/b2f67b5) | <notextile>removes Scala reflection-based macro runtime</notextile>
[e36888c](https://github.com/scala/scala/commit/e36888c) | <notextile>prohibits constructor overloading for macro bundles</notextile>
[3a689f5](https://github.com/scala/scala/commit/3a689f5) | <notextile>changes bundles to be classes, not traits extending Macro</notextile>
[5cc8f83](https://github.com/scala/scala/commit/5cc8f83) | <notextile>*boxContext =&gt; *box.Context	, *boxMacro =&gt; *box.Macro</notextile>
[10f58e9](https://github.com/scala/scala/commit/10f58e9) | <notextile>Fix infinite recursion in name-based patmat.</notextile>
[3e9e2c6](https://github.com/scala/scala/commit/3e9e2c6) | <notextile>SI-8128 Fix regression in extractors returning existentials</notextile>
[969a269](https://github.com/scala/scala/commit/969a269) | <notextile>Finalized some case classes, for better static checking.</notextile>
[e0a3702](https://github.com/scala/scala/commit/e0a3702) | <notextile>Eliminated some dead/redundant code based on review.</notextile>
[1696145](https://github.com/scala/scala/commit/1696145) | <notextile>SI-8045 type inference of extracted value</notextile>
[def46a9](https://github.com/scala/scala/commit/def46a9) | <notextile>SI-7850 CCE in patmat with invalid isEmpty.</notextile>
[11bfa25](https://github.com/scala/scala/commit/11bfa25) | <notextile>SI-7897, SI-6675 improves name-based patmat</notextile>
[8dd69ec](https://github.com/scala/scala/commit/8dd69ec) | <notextile>SI-6615 junit test</notextile>
[a90f39c](https://github.com/scala/scala/commit/a90f39c) | <notextile>SI-8058 Better support for enum trees</notextile>
[77a66d3](https://github.com/scala/scala/commit/77a66d3) | <notextile>SI-4841 CLI help update for -Xplugin</notextile>
[6f42bd6](https://github.com/scala/scala/commit/6f42bd6) | <notextile>SI-8046 Only use fast TypeRef#baseTypeSeq with concrete base types</notextile>
[0de991f](https://github.com/scala/scala/commit/0de991f) | <notextile>Pending test for SI-6161</notextile>
[edc9edb](https://github.com/scala/scala/commit/edc9edb) | <notextile>SI-8046 Fix baseTypeSeq in presence of type aliases</notextile>
[28d3390](https://github.com/scala/scala/commit/28d3390) | <notextile>SI-2066 Plug a soundness hole higher order type params, overriding</notextile>
[ad59460](https://github.com/scala/scala/commit/ad59460) | <notextile>SI-6615 PagedSeq's slice throws a NPE if it starts on a page that hasn't been co</notextile>
[973f69a](https://github.com/scala/scala/commit/973f69a) | <notextile>SI-6364 SetWrapper does not preserve performance / behavior</notextile>
[cb0d285](https://github.com/scala/scala/commit/cb0d285) | <notextile>SI-7680 Update the ScalaDoc entry page of the Scala library</notextile>
[505dc90](https://github.com/scala/scala/commit/505dc90) | <notextile>Fixes #3330 with Scaladoc changes only</notextile>
[00e11ff](https://github.com/scala/scala/commit/00e11ff) | <notextile>SI-8129 Plug a leak in perRunCaches</notextile>
[945f859](https://github.com/scala/scala/commit/945f859) | <notextile>fixes run/macroPlugins-namerHooks.scala</notextile>
[1d90810](https://github.com/scala/scala/commit/1d90810) | <notextile>SI-8131 Move test for reflection thread safety to pending.</notextile>
[3b68163](https://github.com/scala/scala/commit/3b68163) | <notextile>SI-8135 Disabled flaky hyperlinking presentation compiler test</notextile>
[4b6a0a9](https://github.com/scala/scala/commit/4b6a0a9) | <notextile>SI-7443 Use typeclass instance for {Range,NumericRange}.sum</notextile>
[a6f84ef](https://github.com/scala/scala/commit/a6f84ef) | <notextile>Update man pages for scala and scalac.</notextile>
[60c7427](https://github.com/scala/scala/commit/60c7427) | <notextile>License formatting tweak, RTF version.</notextile>
[4a4454b](https://github.com/scala/scala/commit/4a4454b) | <notextile>Explicit jline dependency.</notextile>
[c1c368b](https://github.com/scala/scala/commit/c1c368b) | <notextile>Always copy man/* and doc/tools/*.</notextile>
[c1ef152](https://github.com/scala/scala/commit/c1ef152) | <notextile>Fix typo in scala-library-all-pom.xml.</notextile>
[50e7f2b](https://github.com/scala/scala/commit/50e7f2b) | <notextile>scala-library-all: dependency for those who want it all</notextile>
[0dde1ae](https://github.com/scala/scala/commit/0dde1ae) | <notextile>scala-dist: all you need to roll your own scala distribution</notextile>
[94ca91d](https://github.com/scala/scala/commit/94ca91d) | <notextile>Prepare maven-based distribution building.</notextile>
[846d8d1](https://github.com/scala/scala/commit/846d8d1) | <notextile>Remove spurious resurrection of src/swing.</notextile>
[c926974](https://github.com/scala/scala/commit/c926974) | <notextile>Remove the unused test.continuations.suite.</notextile>
[f5e35ec](https://github.com/scala/scala/commit/f5e35ec) | <notextile>Remove temporary binary compat scaffolding from AbstractPartiionFun.</notextile>
[94eb751](https://github.com/scala/scala/commit/94eb751) | <notextile>Removes unnecessary generality in the macro engine</notextile>
[6e4c926](https://github.com/scala/scala/commit/6e4c926) | <notextile>Use macro expandee, rather than expansion, in pres. compiler</notextile>
[d744921](https://github.com/scala/scala/commit/d744921) | <notextile>SI-8064 Automatic position repair for macro expansion</notextile>
[d6b4cda](https://github.com/scala/scala/commit/d6b4cda) | <notextile>Test to show the bug with hyperlinking in macro arguments</notextile>
[7e0eee2](https://github.com/scala/scala/commit/7e0eee2) | <notextile>More robust hyperlink tests for the presentation compiler</notextile>
[db6e306](https://github.com/scala/scala/commit/db6e306) | <notextile>ExistentialTypeTree.whereClauses are now MemberDefs</notextile>
[9ce2504](https://github.com/scala/scala/commit/9ce2504) | <notextile>Fix typo in documentation</notextile>
[2e7c734](https://github.com/scala/scala/commit/2e7c734) | <notextile>SI-7974 Clean up and test 'Symbol-handling code in CleanUp</notextile>
[5e1e472](https://github.com/scala/scala/commit/5e1e472) | <notextile>SI-7974 Avoid calling nonPrivateMember after erasure</notextile>
[4936c43](https://github.com/scala/scala/commit/4936c43) | <notextile>SI-4827 Corrected positions assigned to constructor's default arg</notextile>
[bdb0ac0](https://github.com/scala/scala/commit/bdb0ac0) | <notextile>SI-4827 Test to demonstrate wrong position of constructor default arg</notextile>
[7f4720c](https://github.com/scala/scala/commit/7f4720c) | <notextile>SI-4287 Added test demonstrating hyperlinking to constructor's argument</notextile>
[ccacb06](https://github.com/scala/scala/commit/ccacb06) | <notextile>Presentation compiler hyperlinking on context bounds test</notextile>
[906e517](https://github.com/scala/scala/commit/906e517) | <notextile>SI-7491 deprecate overriding App.main and clarify documentation</notextile>
[7f16e4d](https://github.com/scala/scala/commit/7f16e4d) | <notextile>SI-7859 fix AnyVal.scala scaladoc.</notextile>
[8791366](https://github.com/scala/scala/commit/8791366) | <notextile>hooks for naming and synthesis in Namers.scala and Typers.scala</notextile>
[4d92aec](https://github.com/scala/scala/commit/4d92aec) | <notextile>unprivates important helpers in Namers.scala</notextile>
[6c7b003](https://github.com/scala/scala/commit/6c7b003) | <notextile>manifests that Namers.mkTypeCompleter is flag-agnostic</notextile>
[0019bc2](https://github.com/scala/scala/commit/0019bc2) | <notextile>humane reporting of macro impl binding version errors</notextile>
[68b8e23](https://github.com/scala/scala/commit/68b8e23) | <notextile>hooks for typecheck and expansion of macro defs</notextile>
[279e2e3](https://github.com/scala/scala/commit/279e2e3) | <notextile>unprivates important helpers in Macros.scala</notextile>
[447e737](https://github.com/scala/scala/commit/447e737) | <notextile>removes some copy/paste from AnalyzerPlugins</notextile>
[9e14058](https://github.com/scala/scala/commit/9e14058) | <notextile>gives a more specific signature to `computeMacroDefType`</notextile>
[9737b80](https://github.com/scala/scala/commit/9737b80) | <notextile>macroExpandApply =&gt; macroExpand</notextile>
[bbe9638](https://github.com/scala/scala/commit/bbe9638) | <notextile>SI-7492 Make scala.runtime.MethodCache private[scala]</notextile>
[5b9966d](https://github.com/scala/scala/commit/5b9966d) | <notextile>SI-8120 Avoid tree sharing when typechecking patmat anon functions</notextile>
[b46d7ae](https://github.com/scala/scala/commit/b46d7ae) | <notextile>SI-8102 -0.0.abs must equal 0.0</notextile>
[5cc0176](https://github.com/scala/scala/commit/5cc0176) | <notextile>Improved testing framework for sets and maps.</notextile>
[feebc71](https://github.com/scala/scala/commit/feebc71) | <notextile>SI-7837 quickSort, along with Ordering[K], may result in stackoverflow because t</notextile>
[5f08c78](https://github.com/scala/scala/commit/5f08c78) | <notextile>untyper is no more</notextile>
[59cdd50](https://github.com/scala/scala/commit/59cdd50) | <notextile>awakens default getter synthesis from the untyper nightmare</notextile>
[dafcbeb](https://github.com/scala/scala/commit/dafcbeb) | <notextile>Fix typos in documentation</notextile>
[d2ee92f](https://github.com/scala/scala/commit/d2ee92f) | <notextile>SI-7880 Fix infinite loop in ResizableArray#ensureSize</notextile>
[ea8ae48](https://github.com/scala/scala/commit/ea8ae48) | <notextile>SI-8052 Disallow `macro` as an identifier</notextile>
[71a2102](https://github.com/scala/scala/commit/71a2102) | <notextile>Use t- prefix instead of si- prefix for test files</notextile>
[b97d44b](https://github.com/scala/scala/commit/b97d44b) | <notextile>SI-8047 change fresh name encoding to avoid owner corruption</notextile>
[f417380](https://github.com/scala/scala/commit/f417380) | <notextile>typeCheck =&gt; typecheck</notextile>
[c728ff3](https://github.com/scala/scala/commit/c728ff3) | <notextile>fix Stream#flatten example</notextile>
[72cd50c](https://github.com/scala/scala/commit/72cd50c) | <notextile>SI-7406 crasher with specialized lazy val</notextile>
[bce9705](https://github.com/scala/scala/commit/bce9705) | <notextile>makes boxity of fast track macros configurable</notextile>
[4923983](https://github.com/scala/scala/commit/4923983) | <notextile>Added .ant-targets-build.xml to .gitignore.</notextile>
[29037f5](https://github.com/scala/scala/commit/29037f5) | <notextile>Remove commented out code from HashSet and HashMap</notextile>
[08a5e03](https://github.com/scala/scala/commit/08a5e03) | <notextile>makes well-known packages and package classes consistent with each other</notextile>
[187d73e](https://github.com/scala/scala/commit/187d73e) | <notextile>duplicates arguments to macro typer APIs</notextile>
[05eacad](https://github.com/scala/scala/commit/05eacad) | <notextile>Invalidate &lt;uptodate&gt; checks on edits to build-ant-macros.xml</notextile>
[b79ee63](https://github.com/scala/scala/commit/b79ee63) | <notextile>Fix Ant uptodate checking in OSGI JAR creation</notextile>
[d92effc](https://github.com/scala/scala/commit/d92effc) | <notextile>SI-8006 prevents infinite applyDynamicNamed desugarings</notextile>
[bbd03b2](https://github.com/scala/scala/commit/bbd03b2) | <notextile>SI-7777 applyDynamic macro fails for nested application</notextile>
[4b9e8e3](https://github.com/scala/scala/commit/4b9e8e3) | <notextile>codifies the state of the art wrt SI-8104</notextile>
[431e19f](https://github.com/scala/scala/commit/431e19f) | <notextile>SI-6355 SI-7059 it is possible to overload applyDynamic</notextile>
[3ef5837](https://github.com/scala/scala/commit/3ef5837) | <notextile>cosmetic changes to liftables</notextile>
[9b2ce26](https://github.com/scala/scala/commit/9b2ce26) | <notextile>SI-6120 Suppress extra warnings</notextile>
[6a4947c](https://github.com/scala/scala/commit/6a4947c) | <notextile>SI-8017 Value class awareness for -Ydelamdafy:method</notextile>
[3b8b24a](https://github.com/scala/scala/commit/3b8b24a) | <notextile>Remove obsolete diagnostic error for SI-6231</notextile>
[cca4d51](https://github.com/scala/scala/commit/cca4d51) | <notextile>SI-5508 Fix crasher with private[this] in nested traits</notextile>
[b275c38](https://github.com/scala/scala/commit/b275c38) | <notextile>duplicates macro arguments before expansion</notextile>
[f7f80e8](https://github.com/scala/scala/commit/f7f80e8) | <notextile>SI-7971 Handle static field initializers correctly</notextile>
[ca2dbe5](https://github.com/scala/scala/commit/ca2dbe5) | <notextile>drops the redundant typecheck of blackbox expansions</notextile>
[a3b3341](https://github.com/scala/scala/commit/a3b3341) | <notextile>whitebox macros are now first typechecked against outerPt</notextile>
[bd615c6](https://github.com/scala/scala/commit/bd615c6) | <notextile>refactors macroExpandApply</notextile>
[e3cedb7](https://github.com/scala/scala/commit/e3cedb7) | <notextile>Improvements to partest-ack, plus partest-paths.</notextile>
[d00ad5a](https://github.com/scala/scala/commit/d00ad5a) | <notextile>Fix osgi bundle name for continuations.</notextile>
[30b389a](https://github.com/scala/scala/commit/30b389a) | <notextile>Modularize the swing library.</notextile>
[858a5d5](https://github.com/scala/scala/commit/858a5d5) | <notextile>Modularize continuations plugin.</notextile>
[a3a5e4a](https://github.com/scala/scala/commit/a3a5e4a) | <notextile>SI-7546 Use likely monotonic clock source for durations</notextile>
[d68bbe4](https://github.com/scala/scala/commit/d68bbe4) | <notextile>Fixup for #3265</notextile>
[a5fc6e6](https://github.com/scala/scala/commit/a5fc6e6) | <notextile>SI-8042 Use Serialization Proxy Pattern in List</notextile>
[7db59bd](https://github.com/scala/scala/commit/7db59bd) | <notextile>fix typo in error messages</notextile>
[6688da4](https://github.com/scala/scala/commit/6688da4) | <notextile>SI-7618 Remove octal number literals</notextile>
[760df98](https://github.com/scala/scala/commit/760df98) | <notextile>SI-8030 force symbols on presentation compiler initialization</notextile>
[f0f0a5e](https://github.com/scala/scala/commit/f0f0a5e) | <notextile>SI-8059 Override immutable.Queue#{+:,:+} for performance</notextile>
[c4e1b03](https://github.com/scala/scala/commit/c4e1b03) | <notextile>Test case for recently improved unchecked warning</notextile>
[b2b9cf4](https://github.com/scala/scala/commit/b2b9cf4) | <notextile>SI-8024 Improve user-level toString of package objects</notextile>
[e6cee26](https://github.com/scala/scala/commit/e6cee26) | <notextile>SI-8024 Fix inaccurate message on overloaded ambiguous ident</notextile>
[a443bae](https://github.com/scala/scala/commit/a443bae) | <notextile>SI-8024 Pending test case for package object / overloading bug</notextile>
[110fde0](https://github.com/scala/scala/commit/110fde0) | <notextile>SI-6780 Refactor Context#implicitss</notextile>
[0304e00](https://github.com/scala/scala/commit/0304e00) | <notextile>SI-6780 Better handling of cycles in in-scope implicit search</notextile>
[9cdbe28](https://github.com/scala/scala/commit/9cdbe28) | <notextile>Fixup #3248 missed a spot in pack.xml</notextile>
[006e2f2](https://github.com/scala/scala/commit/006e2f2) | <notextile>SI-7912 Be defensive calling `toString` in `MatchError#getMessage`</notextile>
[bb427a3](https://github.com/scala/scala/commit/bb427a3) | <notextile>SI-8060 Avoid infinite loop with higher kinded type alias</notextile>
[27a3860](https://github.com/scala/scala/commit/27a3860) | <notextile>Update README, include doc/licenses in distro</notextile>
[139ba9d](https://github.com/scala/scala/commit/139ba9d) | <notextile>Add attribution for Typesafe.</notextile>
[e555106](https://github.com/scala/scala/commit/e555106) | <notextile>Remove docs/examples; they reside at scala/scala-dist</notextile>
[dc6dd58](https://github.com/scala/scala/commit/dc6dd58) | <notextile>Remove unused android test and corresponding license.</notextile>
[f8d8f7d](https://github.com/scala/scala/commit/f8d8f7d) | <notextile>Do not distribute partest and its dependencies.</notextile>
[5ed834e](https://github.com/scala/scala/commit/5ed834e) | <notextile>SI-7995 completion imported vars and vals</notextile>
[c955cf4](https://github.com/scala/scala/commit/c955cf4) | <notextile>SI-8019 Make Publisher check PartialFunction is defined for Event</notextile>
[fdcc262](https://github.com/scala/scala/commit/fdcc262) | <notextile>SI-8029 Avoid multi-run cyclic error with companions, package object</notextile>
[8d74fa0](https://github.com/scala/scala/commit/8d74fa0) | <notextile>[backport] SI-7439 Avoid NPE in `isMonomorphicType` with stub symbols.</notextile>
[9036f77](https://github.com/scala/scala/commit/9036f77) | <notextile>SI-8010 Fix regression in erasure double definition checks</notextile>
[3faa2ee](https://github.com/scala/scala/commit/3faa2ee) | <notextile>[nomaster] better error messages for various macro definition errors</notextile>
[85692ff](https://github.com/scala/scala/commit/85692ff) | <notextile>SI-8050 [Avian] Skip instrumented tests</notextile>
[30f779b](https://github.com/scala/scala/commit/30f779b) | <notextile>SI-8027 REPL double tab regression</notextile>
[1d30ea8](https://github.com/scala/scala/commit/1d30ea8) | <notextile>SI-4841 Plugins get a class path</notextile>
[369f370](https://github.com/scala/scala/commit/369f370) | <notextile>SI-8054 Fix regression in TypeRef rebind with val overriding object</notextile>
[495b7b8](https://github.com/scala/scala/commit/495b7b8) | <notextile>Address minor pull request feedback points</notextile>
[a09914c](https://github.com/scala/scala/commit/a09914c) | <notextile>Test possible quasiquote runtime failures</notextile>
[b9a900e](https://github.com/scala/scala/commit/b9a900e) | <notextile>Test usage of SubpatternsAttachment from a macro</notextile>
[13aa297](https://github.com/scala/scala/commit/13aa297) | <notextile>Test unliftable not found scenario</notextile>
[c9cd5ee](https://github.com/scala/scala/commit/c9cd5ee) | <notextile>Test tuple lifting and unlifting</notextile>
[e6eed41](https://github.com/scala/scala/commit/e6eed41) | <notextile>SI-7789 make quasiquotes deconstruct UnApply trees</notextile>
[1188f95](https://github.com/scala/scala/commit/1188f95) | <notextile>Introduce support for Unliftable for Quasiquotes</notextile>
[4c899ea](https://github.com/scala/scala/commit/4c899ea) | <notextile>Refactor Holes and Reifiers slices of Quasiquotes cake</notextile>
[4be6ea1](https://github.com/scala/scala/commit/4be6ea1) | <notextile>Provide a way for unapply macro to obtain a list of subpattens</notextile>
[f3c260b](https://github.com/scala/scala/commit/f3c260b) | <notextile>Move Liftable into the Universe cake; add additional standard Liftables</notextile>
[26a3348](https://github.com/scala/scala/commit/26a3348) | <notextile>SI-7979 Fix quasiquotes crash on mismatch between fields and constructor</notextile>
[0ccd4bc](https://github.com/scala/scala/commit/0ccd4bc) | <notextile>SI-6842 Make splicing less sensitive to precise types of trees</notextile>
[2695924](https://github.com/scala/scala/commit/2695924) | <notextile>SI-8009 Ensure that Idents preserve isBackquoted property</notextile>
[207b945](https://github.com/scala/scala/commit/207b945) | <notextile>SI-8016 Ensure that q&rdquo;..$xs&rdquo; is equivalent to q&rdquo;{..$xs}&rdquo;</notextile>
[8bde124](https://github.com/scala/scala/commit/8bde124) | <notextile>SI-8008 Make q&rdquo;f(..$xs)&rdquo; only match trees with Apply node</notextile>
[eb78e90](https://github.com/scala/scala/commit/eb78e90) | <notextile>streamlines refchecking undesired symbol properties</notextile>
[87979ad](https://github.com/scala/scala/commit/87979ad) | <notextile>deprecates macro def return type inference</notextile>
[58eadc0](https://github.com/scala/scala/commit/58eadc0) | <notextile>add method dequeueOption to immutable.Queue</notextile>
[1b45418](https://github.com/scala/scala/commit/1b45418) | <notextile>SI-8013 Nowarn on macro str interpolation</notextile>
[5ba6e13](https://github.com/scala/scala/commit/5ba6e13) | <notextile>undeprecates c.parse</notextile>
[7d41094](https://github.com/scala/scala/commit/7d41094) | <notextile>SI-7982 Changed contract of askLoadedType to unload units by default</notextile>
[7063439](https://github.com/scala/scala/commit/7063439) | <notextile>SI-6913 Fixing semantics of Future fallbackTo to be according to docs</notextile>
[02308c9](https://github.com/scala/scala/commit/02308c9) | <notextile>SI-7458 Pres. compiler must not observe trees in silent mode</notextile>
[652b3b4](https://github.com/scala/scala/commit/652b3b4) | <notextile>SI-7548 Test to demonstrate residual exploratory typing bug</notextile>
[b7509c9](https://github.com/scala/scala/commit/b7509c9) | <notextile>SI-7548 askTypeAt returns the same type whether the source was fully or targeted</notextile>
[0c963c9](https://github.com/scala/scala/commit/0c963c9) | <notextile>[nomaster] teaches toolbox about -Yrangepos</notextile>
[51cd474](https://github.com/scala/scala/commit/51cd474) | <notextile>Removes Gen*View and Par*View</notextile>
[2ce7b12](https://github.com/scala/scala/commit/2ce7b12) | <notextile>Deprecates Par*View and Gen*View</notextile>
[3d80485](https://github.com/scala/scala/commit/3d80485) | <notextile>Use -Dupdate.versions to update versions.properties</notextile>
[1d3ec4e](https://github.com/scala/scala/commit/1d3ec4e) | <notextile>better error messages for various macro definition errors</notextile>
[03bf97e](https://github.com/scala/scala/commit/03bf97e) | <notextile>Fixes SI-8014, regression in Vector ++ TraversableOnce.</notextile>
[e571c9c](https://github.com/scala/scala/commit/e571c9c) | <notextile>Better error messages for common Function/Tuple mistakes</notextile>
[1071d0c](https://github.com/scala/scala/commit/1071d0c) | <notextile>SI-7373 Make the constructor of Vector non-public</notextile>
[d0aaa86](https://github.com/scala/scala/commit/d0aaa86) | <notextile>SI-8023 Address review comments around typedHigherKindedType</notextile>
[a89000b](https://github.com/scala/scala/commit/a89000b) | <notextile>SI-8023 Fix symbol-completion-order type var pattern bug</notextile>
[32b7564](https://github.com/scala/scala/commit/32b7564) | <notextile>SI-8022 Backwards compatibility for Regex#unapplySeq</notextile>
[158c76a](https://github.com/scala/scala/commit/158c76a) | <notextile>Remove unused android tests.</notextile>
[38e2d6e](https://github.com/scala/scala/commit/38e2d6e) | <notextile>Rename build-support.xml to build-ant-macros.xml.</notextile>
[7742a7d](https://github.com/scala/scala/commit/7742a7d) | <notextile>No longer support unreleased STARR.</notextile>
[23f52a8](https://github.com/scala/scala/commit/23f52a8) | <notextile>Move all macros in build.xml to build-support.xml.</notextile>
[3629b64](https://github.com/scala/scala/commit/3629b64) | <notextile>SI-8005 Fixes NoPositon error for updateDynamic calls</notextile>
[696545d](https://github.com/scala/scala/commit/696545d) | <notextile>SI-8004 Resolve NoPosition error for applyDynamicNamed method call</notextile>
[b915f44](https://github.com/scala/scala/commit/b915f44) | <notextile>SI-7463,SI-8003 Correct wrong position for {select,apply}Dynamic calls</notextile>
[053a274](https://github.com/scala/scala/commit/053a274) | <notextile>[nomaster] SI-7280 Scope completion not returning members provided by imports</notextile>
[eb9f0f7](https://github.com/scala/scala/commit/eb9f0f7) | <notextile>[nomaster] Adds test cases for scope completion</notextile>
[3a8796d](https://github.com/scala/scala/commit/3a8796d) | <notextile>[nomaster] Test infrastructure for scope completion</notextile>
[04df2e4](https://github.com/scala/scala/commit/04df2e4) | <notextile>SI-7915 Corrected range positions created during default args expansion</notextile>
[28bf4ad](https://github.com/scala/scala/commit/28bf4ad) | <notextile>SI-8002 private access for local companions</notextile>
[f12bb7b](https://github.com/scala/scala/commit/f12bb7b) | <notextile>SI-4332 Plugs the gaps in views</notextile>
[0271a4a](https://github.com/scala/scala/commit/0271a4a) | <notextile>SI-7984 Issue unchecked warning for type aliases</notextile>
[05620ad](https://github.com/scala/scala/commit/05620ad) | <notextile>SI-8011 Test case for recently fixed value class bug</notextile>
[8f20fa2](https://github.com/scala/scala/commit/8f20fa2) | <notextile>SI-7969 REPL variable columnar output</notextile>
[02359a0](https://github.com/scala/scala/commit/02359a0) | <notextile>SI-7969 Refactor to trait with test</notextile>
[28cfe16](https://github.com/scala/scala/commit/28cfe16) | <notextile>SI-7969 REPL -C columnar output</notextile>
[5186353](https://github.com/scala/scala/commit/5186353) | <notextile>SI-7872 Plug a variance exploit in refinement types</notextile>
[66577fa](https://github.com/scala/scala/commit/66577fa) | <notextile>SI-8001 spurious &quot;pure expression does nothing&quot; warning</notextile>
[a5e2476](https://github.com/scala/scala/commit/a5e2476) | <notextile>SI-7967 Account for type aliases in self-type checks</notextile>
[5d5596b](https://github.com/scala/scala/commit/5d5596b) | <notextile>Special treatment for local symbols in TypeTreeMemberType</notextile>
[b5be392](https://github.com/scala/scala/commit/b5be392) | <notextile>Refactor away duplication between -Ydelambdafy:{inline,method}</notextile>
[736613e](https://github.com/scala/scala/commit/736613e) | <notextile>Substitute new parameter symbols into lambda body</notextile>
[cb37548](https://github.com/scala/scala/commit/cb37548) | <notextile>Symbol substutition must consider ClassInfoType#parents</notextile>
[d7d63e9](https://github.com/scala/scala/commit/d7d63e9) | <notextile>Tidy up the Uncurry component of delambdafy</notextile>
[342b05b](https://github.com/scala/scala/commit/342b05b) | <notextile>Test in quick mode for ant build</notextile>
[7c9b41f](https://github.com/scala/scala/commit/7c9b41f) | <notextile>Update Eclipse classpath files</notextile>
[1d8e8ff](https://github.com/scala/scala/commit/1d8e8ff) | <notextile>Revise paragraph (a revised #3164)</notextile>
[ee6fbae](https://github.com/scala/scala/commit/ee6fbae) | <notextile>correctly fails implicit search for invalid implicit macros</notextile>
[6460365](https://github.com/scala/scala/commit/6460365) | <notextile>SI-7999 s.u.c.NonFatal: StackOverflowError is fatal</notextile>
[60ac821](https://github.com/scala/scala/commit/60ac821) | <notextile>Account for a variation of package types in Implicit Divergence.</notextile>
[d8ffaac](https://github.com/scala/scala/commit/d8ffaac) | <notextile>Code reformatting in Implicits</notextile>
[dfe0ba8](https://github.com/scala/scala/commit/dfe0ba8) | <notextile>SI-7983 Fix regression in implicit divergence checking</notextile>
[e7443e2](https://github.com/scala/scala/commit/e7443e2) | <notextile>2.11.0-M7 starr, 1.11.1 scalacheck, bump modules.</notextile>
[1050745](https://github.com/scala/scala/commit/1050745) | <notextile>SI-7985 Refactor parsing of pattern type args</notextile>
[b1d3053](https://github.com/scala/scala/commit/b1d3053) | <notextile>SI-7985 Allow projection of lower-cased prefix as pattern type arg</notextile>
[77ecff7](https://github.com/scala/scala/commit/77ecff7) | <notextile>SI-7985 Allow qualified type argument in patterns</notextile>
[d6a457c](https://github.com/scala/scala/commit/d6a457c) | <notextile>SI-7221 rewrites pollForWork non-recursively</notextile>
[34358ee](https://github.com/scala/scala/commit/34358ee) | <notextile>more precise isMacroApplication check</notextile>
[5344a03](https://github.com/scala/scala/commit/5344a03) | <notextile>Remove deprecated constructor from the migration annotation</notextile>
[d6ef83a](https://github.com/scala/scala/commit/d6ef83a) | <notextile>use more specific cake dependencies</notextile>
[1080da8](https://github.com/scala/scala/commit/1080da8) | <notextile>refactor out fresh name prefix extraction logic</notextile>
[2d4f0f1](https://github.com/scala/scala/commit/2d4f0f1) | <notextile>Removing deprecated code.</notextile>
[b004c3d](https://github.com/scala/scala/commit/b004c3d) | <notextile>deprecate Pair and Triple</notextile>
[b27c9b8](https://github.com/scala/scala/commit/b27c9b8) | <notextile>SI-6329 Graduation day for pending tests for tag materialization</notextile>
[5eef542](https://github.com/scala/scala/commit/5eef542) | <notextile>SI-7987 Test case for &quot;macro not expanded&quot; error with implicits</notextile>
[36d66c2](https://github.com/scala/scala/commit/36d66c2) | <notextile>deprecate scala.Responder</notextile>
[33a086b](https://github.com/scala/scala/commit/33a086b) | <notextile>Handle TypeApply(fun, ...) for symbol-less funs</notextile>
[733f7f0](https://github.com/scala/scala/commit/733f7f0) | <notextile>Prepare upgrade to scalacheck 1.11.</notextile>
[ec89b59](https://github.com/scala/scala/commit/ec89b59) | <notextile>Upgrade pax-url-aether to 1.6.0.</notextile>
[0f9c1e7](https://github.com/scala/scala/commit/0f9c1e7) | <notextile>SI-7280 Remove unneccesary method</notextile>
[9730957](https://github.com/scala/scala/commit/9730957) | <notextile>Fix a typo in the `scala` man page</notextile>
[3028327](https://github.com/scala/scala/commit/3028327) | <notextile>SI-7280 Scope completion not returning members provided by imports</notextile>
[3d55fe7](https://github.com/scala/scala/commit/3d55fe7) | <notextile>Adds test cases for scope completion</notextile>
[9c7c66f](https://github.com/scala/scala/commit/9c7c66f) | <notextile>Test infrastructure for scope completion</notextile>
[3009a52](https://github.com/scala/scala/commit/3009a52) | <notextile>SI-7915 Corrected range positions created during default args expansion</notextile>
[992b90e](https://github.com/scala/scala/commit/992b90e) | <notextile>New AnyRefMap fixes SI-5263 to the extent practical.</notextile>
[05aedd9](https://github.com/scala/scala/commit/05aedd9) | <notextile>New mutable hash map with Long keys: partially solves SI-5263 and is relevant to</notextile>
[5b532e9](https://github.com/scala/scala/commit/5b532e9) | <notextile>Revived tests that once depended on xml</notextile>
[5b7e0d2](https://github.com/scala/scala/commit/5b7e0d2) | <notextile>fix IntMap#foreachValue and LongMap#foreachValue scaladoc</notextile>
[ed1cfc3](https://github.com/scala/scala/commit/ed1cfc3) | <notextile>fix typo</notextile>
[bc98d7d](https://github.com/scala/scala/commit/bc98d7d) | <notextile>SI-7961 Fix false positive procedure warnings</notextile>
[e99b5e3](https://github.com/scala/scala/commit/e99b5e3) | <notextile>Added information on how to launch and debug scalac inside Eclipse</notextile>
[3b3bcd7](https://github.com/scala/scala/commit/3b3bcd7) | <notextile>Revert &quot;temporarily disables run/reflection-sync-subtypes&quot;</notextile>
[5237782](https://github.com/scala/scala/commit/5237782) | <notextile>Updated Eclipse .classpath for partest and scaladoc projects</notextile>
[1d29c0a](https://github.com/scala/scala/commit/1d29c0a) | <notextile>[backport] Add buildcharacter.properties to .gitignore.</notextile>
[31ead67](https://github.com/scala/scala/commit/31ead67) | <notextile>IDE needs swing/actors/continuations</notextile>
[852a947](https://github.com/scala/scala/commit/852a947) | <notextile>Allow retrieving STARR from non-standard repo for PR validation</notextile>
[40af1e0](https://github.com/scala/scala/commit/40af1e0) | <notextile>Allow publishing only core (pr validation)</notextile>
[ba0718f](https://github.com/scala/scala/commit/ba0718f) | <notextile>Render relevant properties to buildcharacter.properties</notextile>
[d15ed08](https://github.com/scala/scala/commit/d15ed08) | <notextile>[backport] SI-7776 post-erasure signature clashes are now macro-aware</notextile>
[6045a05](https://github.com/scala/scala/commit/6045a05) | <notextile>Fix completion after application with implicit arguments</notextile>
[e09a8a2](https://github.com/scala/scala/commit/e09a8a2) | <notextile>SI-4012 Mixin and specialization work well</notextile>
[075f6f2](https://github.com/scala/scala/commit/075f6f2) | <notextile>SI-6546 InnerClasses attribute refers to absent class</notextile>
[50c8b39e](https://github.com/scala/scala/commit/50c8b39e) | <notextile>SI-7519: Additional test case covering sbt/sbt#914</notextile>
[ce74bb0](https://github.com/scala/scala/commit/ce74bb0) | <notextile>[nomaster] SI-7519 Less brutal attribute resetting in adapt fallback</notextile>
[25bcba5](https://github.com/scala/scala/commit/25bcba5) | <notextile>SI-7295 Fix windows batch file with args containing parentheses</notextile>
[2bfe0e7](https://github.com/scala/scala/commit/2bfe0e7) | <notextile>SI-6026 REPL checks for javap before tools.jar</notextile>
[e350bd2](https://github.com/scala/scala/commit/e350bd2) | <notextile>[nomaster] SI-6026 backport getResource bug fix</notextile>
[8e267c8](https://github.com/scala/scala/commit/8e267c8) | <notextile>Fixes markdown syntax</notextile>
[6b13a1d](https://github.com/scala/scala/commit/6b13a1d) | <notextile>Use an intrinsic for the next power of two calculation and also return the input</notextile>
[f832965](https://github.com/scala/scala/commit/f832965) | <notextile>blackbox restriction #4: can't customize pattern matching</notextile>
[0d5c2f7](https://github.com/scala/scala/commit/0d5c2f7) | <notextile>blackbox restriction #3: can't affect implicit search</notextile>
[6038bac](https://github.com/scala/scala/commit/6038bac) | <notextile>blackbox restriction #2: can't guide type inference</notextile>
[a2b523a](https://github.com/scala/scala/commit/a2b523a) | <notextile>blackbox restriction #1: can't refine the official return type</notextile>
[ce37ae4](https://github.com/scala/scala/commit/ce37ae4) | <notextile>blackbox and whitebox macros</notextile>
[9484833](https://github.com/scala/scala/commit/9484833) | <notextile>add comments that explain FreshName extractor from Quasiquotes cake</notextile>
[4405a64](https://github.com/scala/scala/commit/4405a64) | <notextile>add comments that explain new for loop enumerator encoding</notextile>
[0f3c8a2](https://github.com/scala/scala/commit/0f3c8a2) | <notextile>test legacy .filter support in for loop resugaring</notextile>
[2cd95fe](https://github.com/scala/scala/commit/2cd95fe) | <notextile>re-implement hasAttachment directly in raw attachments</notextile>
[c62a0e7](https://github.com/scala/scala/commit/c62a0e7) | <notextile>add support for for loops and for enumerators to quasiquotes</notextile>
[a4a3ab0](https://github.com/scala/scala/commit/a4a3ab0) | <notextile>implement inverse transformation to mkFor</notextile>
[d736805](https://github.com/scala/scala/commit/d736805) | <notextile>add syntactic combinators that represent enumerators</notextile>
[ef02d85](https://github.com/scala/scala/commit/ef02d85) | <notextile>move for loop desugaring into tree gen</notextile>
[d89bfbb](https://github.com/scala/scala/commit/d89bfbb) | <notextile>change intermidiate representation of for loop enumerators</notextile>
[c3e766e](https://github.com/scala/scala/commit/c3e766e) | <notextile>make fresh names compare similar in quasiquotes</notextile>
[c6fe22f](https://github.com/scala/scala/commit/c6fe22f) | <notextile>add support for importable attachments</notextile>
[ee1e81a](https://github.com/scala/scala/commit/ee1e81a) | <notextile>simplify imports in quasiquotes scalacheck tests</notextile>
[3b4d8c0](https://github.com/scala/scala/commit/3b4d8c0) | <notextile>add some post-typecheck tests for quasiquotes</notextile>
[538cc13](https://github.com/scala/scala/commit/538cc13) | <notextile>add hasAttachment utility method to the internal api</notextile>
[9b95ab5](https://github.com/scala/scala/commit/9b95ab5) | <notextile>make internal implementation of universe.build less restrictive</notextile>
[80ddc95](https://github.com/scala/scala/commit/80ddc95) | <notextile>deduplicate tuple tree creation code</notextile>
[ed37907](https://github.com/scala/scala/commit/ed37907) | <notextile>Refactoring to prepare modularization of the compiler.</notextile>
[1d3156c](https://github.com/scala/scala/commit/1d3156c) | <notextile>SI-7747 Support class based wrappers clean up</notextile>
[1f834cd](https://github.com/scala/scala/commit/1f834cd) | <notextile>SI-7747 Support class based wrappers as alternative through switch -Yrepl-class-</notextile>
[e2a3498](https://github.com/scala/scala/commit/e2a3498) | <notextile>Make parameters to implicit value classes private</notextile>
[beed168](https://github.com/scala/scala/commit/beed168) | <notextile>Filter dependencies from partest and scalacheck.</notextile>
[1ca329e](https://github.com/scala/scala/commit/1ca329e) | <notextile>SI-7568 Adding PriorityQueueTest</notextile>
[3127ec0](https://github.com/scala/scala/commit/3127ec0) | <notextile>SI-7568 Adding Serializable to ResizableArrayAccess inner class of PriorityQueue</notextile>
[aac015a](https://github.com/scala/scala/commit/aac015a) | <notextile>SI-7958 Deprecate methods `future` and `promise` in the `scala.concurrent` packa</notextile>
[a24e7fa](https://github.com/scala/scala/commit/a24e7fa) | <notextile>M6 modules, partest depends on scala as provided.</notextile>
[693e55e](https://github.com/scala/scala/commit/693e55e) | <notextile>Add buildcharacter.properties to .gitignore.</notextile>
[e1fdf86](https://github.com/scala/scala/commit/e1fdf86) | <notextile>Parser stack reduction peekingAhead</notextile>
[ef273e4](https://github.com/scala/scala/commit/ef273e4) | <notextile>Parser stack reduction discussion</notextile>
[19e68d6](https://github.com/scala/scala/commit/19e68d6) | <notextile>Rewrites the parser stack reduction logic.</notextile>
[a38c36d](https://github.com/scala/scala/commit/a38c36d) | <notextile>A value class for Precedence.</notextile>
[cd563c1](https://github.com/scala/scala/commit/cd563c1) | <notextile>IDE needs actors/swing/continuations publish for validation.</notextile>
[366a40d](https://github.com/scala/scala/commit/366a40d) | <notextile>More useful ant targets for faster pr validation</notextile>
[2218301](https://github.com/scala/scala/commit/2218301) | <notextile>Extra repository hook via `extra.repo.url` var</notextile>
[2374fcb](https://github.com/scala/scala/commit/2374fcb) | <notextile>Render relevant properties to buildcharacter.properties</notextile>
[de66ada](https://github.com/scala/scala/commit/de66ada) | <notextile>De-duplicate logic in maven deployment.</notextile>
[fe5aab6](https://github.com/scala/scala/commit/fe5aab6) | <notextile>Enforce consistency of pack, docs, osgi, maven tasks.</notextile>
[5e0dc87](https://github.com/scala/scala/commit/5e0dc87) | <notextile>Address review comments</notextile>
[db4ef5b](https://github.com/scala/scala/commit/db4ef5b) | <notextile>Avoid needless TypeRef allocation during erasure.</notextile>
[3cc99d7](https://github.com/scala/scala/commit/3cc99d7) | <notextile>Collections library tidying and deprecation.  Separate parts are listed below.</notextile>
[a5127a8](https://github.com/scala/scala/commit/a5127a8) | <notextile>SI-7678 Don't cache member symbols of TypeTags in Definitions.</notextile>
[3dba993](https://github.com/scala/scala/commit/3dba993) | <notextile>Add a per-run cache for member symbols</notextile>
[4aeb8ac](https://github.com/scala/scala/commit/4aeb8ac) | <notextile>Cache ImplicitInfo#isCyclicOrErroneous</notextile>
[b686a05](https://github.com/scala/scala/commit/b686a05) | <notextile>Fast path for ByNameClass in isImpossibleSubtype</notextile>
[086702d](https://github.com/scala/scala/commit/086702d) | <notextile>SI-7776 post-erasure signature clashes are now macro-aware</notextile>
[490f946](https://github.com/scala/scala/commit/490f946) | <notextile>SI-7634 resurrect the REPL's :sh command</notextile>
[ef995ac](https://github.com/scala/scala/commit/ef995ac) | <notextile>Force several tests to run using inline delambdafication. The differences when r</notextile>
[8d4a5ba](https://github.com/scala/scala/commit/8d4a5ba) | <notextile>Create test variants where delambdafication alters signatures. This commit inclu</notextile>
[13ea590](https://github.com/scala/scala/commit/13ea590) | <notextile>Make specialization aware of anonymous functions. During development of late del</notextile>
[f27f2d8](https://github.com/scala/scala/commit/f27f2d8) | <notextile>Make GenASM not eliminate loadmodule on static methods. During development of de</notextile>
[5d29697](https://github.com/scala/scala/commit/5d29697) | <notextile>Flesh out the Delambdafy phase.</notextile>
[510b8ce](https://github.com/scala/scala/commit/510b8ce) | <notextile>Refactor Erasure for delambdafication. This commit is purely a refactor. It pull</notextile>
[10a061d](https://github.com/scala/scala/commit/10a061d) | <notextile>Adds a setting to delay delambdafication. If set then uncurry lifts the body of </notextile>
[9136e76](https://github.com/scala/scala/commit/9136e76) | <notextile>Add a skeletal Delambdafy phase. This commit adds a do-nothing phase called &quot;Del</notextile>
[0057d4d](https://github.com/scala/scala/commit/0057d4d) | <notextile>Make future-spec tests not spawn threads in constructors. The future-spec tests </notextile>
[bb7e96a](https://github.com/scala/scala/commit/bb7e96a) | <notextile>Updated instructions for setting up Eclipse for Scala development</notextile>
[a028d1c](https://github.com/scala/scala/commit/a028d1c) | <notextile>Removed Eclipse .project and .classpath for `plugintemplate` project</notextile>
[f2e67b3](https://github.com/scala/scala/commit/f2e67b3) | <notextile>Updated Eclipse .classpath of partest and scaladoc projects</notextile>
[a1d9656](https://github.com/scala/scala/commit/a1d9656) | <notextile>Don't use runtime reflection from the batch compiler.</notextile>
[344ac60](https://github.com/scala/scala/commit/344ac60) | <notextile>SI-7938 - parallel collections should use default ExecutionContext</notextile>
[5aef1ea](https://github.com/scala/scala/commit/5aef1ea) | <notextile>from Issue #3098</notextile>
[251c2b9](https://github.com/scala/scala/commit/251c2b9) | <notextile>SI-7944 FOUND: stray undetermined type params in vicinity of implicits</notextile>
[08c6a9b](https://github.com/scala/scala/commit/08c6a9b) | <notextile>Remove tools/*{cp, _scala, _scalac}, and tools/*pickled</notextile>
[7a8d51d](https://github.com/scala/scala/commit/7a8d51d) | <notextile>Remove tools/remotetest</notextile>
[cf957e0](https://github.com/scala/scala/commit/cf957e0) | <notextile>Remove tools/test-renamer</notextile>
[aa3e67f](https://github.com/scala/scala/commit/aa3e67f) | <notextile>Remove tools/updatescalacheck</notextile>
[ca7a549](https://github.com/scala/scala/commit/ca7a549) | <notextile>Remove outdated build scripts.</notextile>
[f65bf3a](https://github.com/scala/scala/commit/f65bf3a) | <notextile>Remove tools/make-release-notes</notextile>
[7d09097](https://github.com/scala/scala/commit/7d09097) | <notextile>Collections: remove redundant calls to .seq</notextile>
[212c55d](https://github.com/scala/scala/commit/212c55d) | <notextile>Microptimization in implicit search</notextile>
[bc47503](https://github.com/scala/scala/commit/bc47503) | <notextile>SI-7605 Deprecate procedure syntax</notextile>
[4acac08](https://github.com/scala/scala/commit/4acac08) | <notextile>SI-6385 Avoid bridges to identical signatures over value classes</notextile>
[937e304](https://github.com/scala/scala/commit/937e304) | <notextile>Bundle source and class file bundling in osgi bundling.</notextile>
[340907a](https://github.com/scala/scala/commit/340907a) | <notextile>Tidy pom xml files.</notextile>
[22ac38a](https://github.com/scala/scala/commit/22ac38a) | <notextile>Fail build on error in signed maven publish.</notextile>
[d925c21](https://github.com/scala/scala/commit/d925c21) | <notextile>Build cleanup. Prepare for scaladoc module build.</notextile>
[331d32b](https://github.com/scala/scala/commit/331d32b) | <notextile>Targets for publishing core to maven.</notextile>
[a323812](https://github.com/scala/scala/commit/a323812) | <notextile>Towards minimal build for publishing core to maven.</notextile>
[9c46b97](https://github.com/scala/scala/commit/9c46b97) | <notextile>Support publishing to maven from main build</notextile>
[c1055be](https://github.com/scala/scala/commit/c1055be) | <notextile>Simplify packing, align maven-deploy and pack-maven.</notextile>
[a51c789](https://github.com/scala/scala/commit/a51c789) | <notextile>Inline src/build/pack.xml into build.xml.</notextile>
[cd779d1](https://github.com/scala/scala/commit/cd779d1) | <notextile>Continuations plugin gets its own osgi source bundle.</notextile>
[5a487ef](https://github.com/scala/scala/commit/5a487ef) | <notextile>Generate scaladoc for each subproject.</notextile>
[8f05b5a](https://github.com/scala/scala/commit/8f05b5a) | <notextile>Untangle classpaths related to doc targets.</notextile>
[2cba4f7](https://github.com/scala/scala/commit/2cba4f7) | <notextile>Remove dead target: locker.actors</notextile>
[09faf8e](https://github.com/scala/scala/commit/09faf8e) | <notextile>Clarify comment.</notextile>
[6ba5fc6](https://github.com/scala/scala/commit/6ba5fc6) | <notextile>Correct license to 3-clause BSD in poms.</notextile>
[869f924](https://github.com/scala/scala/commit/869f924) | <notextile>Remove orphaned check files and flags files.</notextile>
[c6301ae](https://github.com/scala/scala/commit/c6301ae) | <notextile>Remove empty check files and flags files.</notextile>
[8076738](https://github.com/scala/scala/commit/8076738) | <notextile>SI-7928 Favour module accessors symbols in rebind</notextile>
[0ad4b60](https://github.com/scala/scala/commit/0ad4b60) | <notextile>More clear implicitNotFound error for ExecutionContext</notextile>
[847f477](https://github.com/scala/scala/commit/847f477) | <notextile>Update description of explicitouter phase.</notextile>
[f38f762](https://github.com/scala/scala/commit/f38f762) | <notextile>SI-7883: Added a comment per CR feedback from @adriaanm, @Ichoran</notextile>
[55a558a](https://github.com/scala/scala/commit/55a558a) | <notextile>SI-7883 - don't iterate over all keys in MapWrapper.containsKey()</notextile>
[ce5cfd2](https://github.com/scala/scala/commit/ce5cfd2) | <notextile>Prevent useless filter operation in docs</notextile>
[404ef0b](https://github.com/scala/scala/commit/404ef0b) | <notextile>IterableLike.grouped() : More explicit documentation</notextile>
[a2599a4](https://github.com/scala/scala/commit/a2599a4) | <notextile>IterableLike grouped : fix documentation</notextile>
[b39a509](https://github.com/scala/scala/commit/b39a509) | <notextile>SI-3871 Testing protected access against the spec</notextile>
[4d96314](https://github.com/scala/scala/commit/4d96314) | <notextile>SI-3871 Missing test case for protected bug.</notextile>
[09f52ed](https://github.com/scala/scala/commit/09f52ed) | <notextile>Filter JVM debug output for custom options in partest</notextile>
[6d4f435](https://github.com/scala/scala/commit/6d4f435) | <notextile>SI-6840 fixes weird typing of quasiquote arguments</notextile>
[9b6a269](https://github.com/scala/scala/commit/9b6a269) | <notextile>better macro impl shape errors</notextile>
[69557da](https://github.com/scala/scala/commit/69557da) | <notextile>SI-7020 Deterministic warnings for pattern matcher, take 2</notextile>
[e72c32d](https://github.com/scala/scala/commit/e72c32d) | <notextile>SI-7519: Additional test case covering sbt/sbt#914</notextile>
[5a67286](https://github.com/scala/scala/commit/5a67286) | <notextile>fixes handling of fancy nested classes in runtime reflection</notextile>
[04e2dbb](https://github.com/scala/scala/commit/04e2dbb) | <notextile>temporarily disables run/reflection-sync-subtypes</notextile>
[a6d6550](https://github.com/scala/scala/commit/a6d6550) | <notextile>changes some manual tree constructions in macro tests to quasiquotes</notextile>
[3b4dc75](https://github.com/scala/scala/commit/3b4dc75) | <notextile>deprecates raw tree manipulation facilities in macros.Context</notextile>
[88be7ea](https://github.com/scala/scala/commit/88be7ea) | <notextile>Moving disabled tests to their rightful home.</notextile>
[59b94ef](https://github.com/scala/scala/commit/59b94ef) | <notextile>Platform independence for SI-6240 test case</notextile>
[f06e833](https://github.com/scala/scala/commit/f06e833) | <notextile>Fix problem assembling sources and docs of modules.</notextile>
[b6d39e0](https://github.com/scala/scala/commit/b6d39e0) | <notextile>hotfix for reflection tests on Windows</notextile>
[d3e04da](https://github.com/scala/scala/commit/d3e04da) | <notextile>annotate return type of the implicit fresh name creator</notextile>
[489ea4a](https://github.com/scala/scala/commit/489ea4a) | <notextile>use more descriptive types instead of ints in the parser and scanner</notextile>
[68e9e26](https://github.com/scala/scala/commit/68e9e26) | <notextile>use concurrent hash map with atomic integers</notextile>
[cf58d7c](https://github.com/scala/scala/commit/cf58d7c) | <notextile>re-wire fresh name creator to currentUnit.fresh at compile-time</notextile>
[0a16caa](https://github.com/scala/scala/commit/0a16caa) | <notextile>use NameTransformer.encode for fresh name prefix sanitization</notextile>
[68a6b57](https://github.com/scala/scala/commit/68a6b57) | <notextile>eliminate isCaseDefEnd override by moving the logic into stock parser</notextile>
[27fca0f](https://github.com/scala/scala/commit/27fca0f) | <notextile>decrease duplication of fresh* function definitions</notextile>
[3692aca](https://github.com/scala/scala/commit/3692aca) | <notextile>move fresh name creator into scala.reflect.internal.util</notextile>
[ed86ab0](https://github.com/scala/scala/commit/ed86ab0) | <notextile>rename selfdef into selfType</notextile>
[f6d0fbf9](https://github.com/scala/scala/commit/f6d0fbf9) | <notextile>fix minor regression in quasiquote reification</notextile>
[0fd119d](https://github.com/scala/scala/commit/0fd119d) | <notextile>better name for isCaseDefStart</notextile>
[9aa5a27](https://github.com/scala/scala/commit/9aa5a27) | <notextile>make q&quot;f(..$xs)&quot; deconstruction symmetrical to q&quot;f[..$xs]&quot;</notextile>
[d36989d](https://github.com/scala/scala/commit/d36989d) | <notextile>advanced fresh name reification</notextile>
[debdd2f](https://github.com/scala/scala/commit/debdd2f) | <notextile>use regular macro expansion logic for unapply quasiquotes</notextile>
[60603f2](https://github.com/scala/scala/commit/60603f2) | <notextile>minor changes due to typos</notextile>
[3a148cd](https://github.com/scala/scala/commit/3a148cd) | <notextile>SI-6841 SI-6657 add support for packages into quasiquotes and toolbox</notextile>
[d7aae49](https://github.com/scala/scala/commit/d7aae49) | <notextile>refactor out range position utility constructors</notextile>
[c676ec2](https://github.com/scala/scala/commit/c676ec2) | <notextile>refactor out common logic between various statSeq-s in parser</notextile>
[335cf10](https://github.com/scala/scala/commit/335cf10) | <notextile>harden test case to avoid parsing failure when name is keyword</notextile>
[7b56021](https://github.com/scala/scala/commit/7b56021) | <notextile>Disable tests for SI-7020</notextile>
[8986ee4](https://github.com/scala/scala/commit/8986ee4) | <notextile>Disable flaky presentation compiler test.</notextile>
[b18a2f8](https://github.com/scala/scala/commit/b18a2f8) | <notextile>hotfix for runtime reflection</notextile>
[089cbc7](https://github.com/scala/scala/commit/089cbc7) | <notextile>pull request feedback</notextile>
[6597eeb](https://github.com/scala/scala/commit/6597eeb) | <notextile>makes all locks and tlses private and lazy</notextile>
[17947ed](https://github.com/scala/scala/commit/17947ed) | <notextile>need to synchronize Symbols.recursionTable</notextile>
[e19bfee](https://github.com/scala/scala/commit/e19bfee) | <notextile>replaces locks over numbers with AtomicIntegers</notextile>
[37f4e9c](https://github.com/scala/scala/commit/37f4e9c) | <notextile>thread locals instead of locks for vars in Types.scala</notextile>
[174f146](https://github.com/scala/scala/commit/174f146) | <notextile>runtime reflection: death from thousand threads</notextile>
[61cfb8c](https://github.com/scala/scala/commit/61cfb8c) | <notextile>removes the assertion in missingHook</notextile>
[000c18a](https://github.com/scala/scala/commit/000c18a) | <notextile>synchronizes pendingVolatiles</notextile>
[efdcb3c](https://github.com/scala/scala/commit/efdcb3c) | <notextile>synchronizes toolboxes</notextile>
[544ae24](https://github.com/scala/scala/commit/544ae24) | <notextile>SI-7045 reflection now auto-initializes selfType</notextile>
[d05566c](https://github.com/scala/scala/commit/d05566c) | <notextile>optimizes Scala reflection GIL</notextile>
[484d6d7](https://github.com/scala/scala/commit/484d6d7) | <notextile>SI-6240 introduces GIL to Scala reflection</notextile>
[f7c6213](https://github.com/scala/scala/commit/f7c6213) | <notextile>tests for fancy classloader configurations</notextile>
[f94b224](https://github.com/scala/scala/commit/f94b224) | <notextile>improves OSGi test runner in Ant</notextile>
[48c2845](https://github.com/scala/scala/commit/48c2845) | <notextile>eagerly initializes lazy vals and objects in runtime reflection</notextile>
[a030784](https://github.com/scala/scala/commit/a030784) | <notextile>cleans up initialization of runtime reflection</notextile>
[b2bd146](https://github.com/scala/scala/commit/b2bd146) | <notextile>reflection no longer uses enteringPhase and friends</notextile>
[0c35821](https://github.com/scala/scala/commit/0c35821) | <notextile>synchronizes symbols</notextile>
[3e4bc61](https://github.com/scala/scala/commit/3e4bc61) | <notextile>moves Symbol#SymbolKind to Symbols</notextile>
[0c8d1f2](https://github.com/scala/scala/commit/0c8d1f2) | <notextile>Use overwriting copy uniformly in our build.</notextile>
[4adc973](https://github.com/scala/scala/commit/4adc973) | <notextile>fix uptodate checking for osgi.done</notextile>
[ea11372](https://github.com/scala/scala/commit/ea11372) | <notextile>Skip more under ant -Ddocs.skip.</notextile>
[210dbc7](https://github.com/scala/scala/commit/210dbc7) | <notextile>SI-3346 implicit parameters can now guide implicit view inference</notextile>
[2ccbfa5](https://github.com/scala/scala/commit/2ccbfa5) | <notextile>SI-7783 Don't issue deprecation warnings for inferred TypeTrees</notextile>
[ee9138e](https://github.com/scala/scala/commit/ee9138e) | <notextile>Bump version to 2.10.4 for nightlies</notextile>
[7fbaf94](https://github.com/scala/scala/commit/7fbaf94) | <notextile>Test cases for SAM restrictions.</notextile>
[fbbc767](https://github.com/scala/scala/commit/fbbc767) | <notextile>SI-7688 Fix AsSeenFrom of ThisType from TypeVar prefix</notextile>
[1edddfa](https://github.com/scala/scala/commit/1edddfa) | <notextile>Eliminate redundant pickling code.</notextile>
[351a3e0](https://github.com/scala/scala/commit/351a3e0) | <notextile>Tree traversal: more uniform and granular.</notextile>
[2e396cf](https://github.com/scala/scala/commit/2e396cf) | <notextile>Mappings between classes and pickler tags.</notextile>
[eaad52c](https://github.com/scala/scala/commit/eaad52c) | <notextile>Add -Xdev to the runtime-visible settings.</notextile>
[1a1c37c](https://github.com/scala/scala/commit/1a1c37c) | <notextile>Convenience method findSymbol.</notextile>
[b747209](https://github.com/scala/scala/commit/b747209) | <notextile>no longer warns on calls to vampire macros</notextile>
[71d4e28](https://github.com/scala/scala/commit/71d4e28) | <notextile>Remove stray debug comment</notextile>
[58ba39c](https://github.com/scala/scala/commit/58ba39c) | <notextile>Single Abstract Method support: java8 test</notextile>
[4265ab6](https://github.com/scala/scala/commit/4265ab6) | <notextile>Extract SerialVersionUIDAnnotation. Make SAM body synthetic.</notextile>
[00c9c16](https://github.com/scala/scala/commit/00c9c16) | <notextile>Don't pursue SAM translation after an arity mismatch.</notextile>
[67062db](https://github.com/scala/scala/commit/67062db) | <notextile>Single Abstract Method support: synthesize SAMs</notextile>
[657e85f](https://github.com/scala/scala/commit/657e85f) | <notextile>Single Abstract Method support: synthesis helpers</notextile>
[e864129](https://github.com/scala/scala/commit/e864129) | <notextile>Clarify findMembers, add reverse engineered docs</notextile>
[8db838e](https://github.com/scala/scala/commit/8db838e) | <notextile>Simplify partest.task target, fix typo in comment.</notextile>
[4f1a46c](https://github.com/scala/scala/commit/4f1a46c) | <notextile>SI-7899 Allow by-name inference under -Yinfer-by-name</notextile>
[f9f8543](https://github.com/scala/scala/commit/f9f8543) | <notextile>Aesthetics in Trees.</notextile>
[3052eef](https://github.com/scala/scala/commit/3052eef) | <notextile>Aesthetics in GenTrees.</notextile>
[57e07eb](https://github.com/scala/scala/commit/57e07eb) | <notextile>An ant property to skip building docs</notextile>
[5d6bcfe](https://github.com/scala/scala/commit/5d6bcfe) | <notextile>SI-7239 A bonus test case from [scala-user]</notextile>
[83feb86](https://github.com/scala/scala/commit/83feb86) | <notextile>SI-7985 Typecheck args after failure to typecheck function</notextile>
[7e4a97e](https://github.com/scala/scala/commit/7e4a97e) | <notextile>SI-7895 Issue all buffered errors after silent mode.</notextile>
[d0af55c](https://github.com/scala/scala/commit/d0af55c) | <notextile>SI-7895 Avoid cascade of &quot;symbol not found&quot; in pattern matches</notextile>
[03a06e0](https://github.com/scala/scala/commit/03a06e0) | <notextile>SI-7902 Fix spurious kind error due to an unitialized symbol</notextile>
[3e6b82c](https://github.com/scala/scala/commit/3e6b82c) | <notextile>Extract isStable and isVolatile from Type.</notextile>
[e609f1f](https://github.com/scala/scala/commit/e609f1f) | <notextile>Generalize OverridingPairs to SymbolPairs.</notextile>
[8ed7099](https://github.com/scala/scala/commit/8ed7099) | <notextile>SI-7899 Don't infer by-name types during, e.g. eta-expansion</notextile>
[9835d33](https://github.com/scala/scala/commit/9835d33) | <notextile>Describe type parameter interpolation in @implicitNotFound documentation</notextile>
[5708e9d](https://github.com/scala/scala/commit/5708e9d) | <notextile>SI-6680 unsoundness in gadt typing.</notextile>
[95d5554](https://github.com/scala/scala/commit/95d5554) | <notextile>SI-7886 unsoundness in pattern matcher.</notextile>
[74d94cf](https://github.com/scala/scala/commit/74d94cf) | <notextile>Correct build command for scala-ide</notextile>
[b090f97](https://github.com/scala/scala/commit/b090f97) | <notextile>Rework cff8b569 to heal the windows build.</notextile>
[d0c8698](https://github.com/scala/scala/commit/d0c8698) | <notextile>Update of Eclipse project files</notextile>
[4595ac6](https://github.com/scala/scala/commit/4595ac6) | <notextile>SI-7859 Value classes may wrap a non-public member</notextile>
[fe074bb](https://github.com/scala/scala/commit/fe074bb) | <notextile>macro bundles are now usable in repl</notextile>
[5db26e5](https://github.com/scala/scala/commit/5db26e5) | <notextile>gets rid of randomness in virtual filenames for bundles</notextile>
[d627672](https://github.com/scala/scala/commit/d627672) | <notextile>clearly establishes what macro bundles are</notextile>
[59ba775](https://github.com/scala/scala/commit/59ba775) | <notextile>Add -Yno-load-impl-class disabling loading of $class.class files.</notextile>
[a3f71ba](https://github.com/scala/scala/commit/a3f71ba) | <notextile>Don't avoid to load trait impl .class without inliner.</notextile>
[aced32d](https://github.com/scala/scala/commit/aced32d) | <notextile>Removing unused code.</notextile>
[45183d8](https://github.com/scala/scala/commit/45183d8) | <notextile>Remove 'hasDefaultFlag'.</notextile>
[7d62df0](https://github.com/scala/scala/commit/7d62df0) | <notextile>Updating Position call sites.</notextile>
[4133eb8](https://github.com/scala/scala/commit/4133eb8) | <notextile>refactors ToolBoxGlobal wrappers</notextile>
[7122560](https://github.com/scala/scala/commit/7122560) | <notextile>transformers no longer ignore UnApply.fun</notextile>
[8516095](https://github.com/scala/scala/commit/8516095) | <notextile>Some refinement of -Xlint interpolation warning.</notextile>
[96ff8c5](https://github.com/scala/scala/commit/96ff8c5) | <notextile>SI-7629 Deprecate view bounds</notextile>
[d290d0d](https://github.com/scala/scala/commit/d290d0d) | <notextile>SI-7877 Only look for unapplies in term trees</notextile>
[69ce274](https://github.com/scala/scala/commit/69ce274) | <notextile>SI-7848 Xlint no warn on $sym with params</notextile>
[7fa77af](https://github.com/scala/scala/commit/7fa77af) | <notextile>SI-3971 error message carat mispoints at curried methods.</notextile>
[3431279](https://github.com/scala/scala/commit/3431279) | <notextile>SI-6120 multiple warnings at same position.</notextile>
[9ea3a4a](https://github.com/scala/scala/commit/9ea3a4a) | <notextile>SI-6762 rename emptyValDef to noSelfType.</notextile>
[693ecff](https://github.com/scala/scala/commit/693ecff) | <notextile>Fix up DEFAULTPARAM semantics.</notextile>
[40c1068](https://github.com/scala/scala/commit/40c1068) | <notextile>Move logic checking valid names from ClassPath to ClassPathContext</notextile>
[2399304](https://github.com/scala/scala/commit/2399304) | <notextile>Add back the newClassLoader hook in SymbolLoaders.</notextile>
[8e11dcb](https://github.com/scala/scala/commit/8e11dcb) | <notextile>[nomaster] SI-7862: MANIFEST.MF file for Scala sources</notextile>
[7f4b44b](https://github.com/scala/scala/commit/7f4b44b) | <notextile>SI-7861 Don't execute internal callbacks on the user Executor</notextile>
[733b322](https://github.com/scala/scala/commit/733b322) | <notextile>SI-7815 Dealias before deeming method type as dependent</notextile>
[cb4b8eb](https://github.com/scala/scala/commit/cb4b8eb) | <notextile>update typesafe.artifactory-online.com to private-repo</notextile>
[bf93057](https://github.com/scala/scala/commit/bf93057) | <notextile>Change Scala license to unmodified 3-clause BSD.</notextile>
[a1796aa](https://github.com/scala/scala/commit/a1796aa) | <notextile>SI-7398 Enable test for Java 8 source parser under Java 8</notextile>
[bf0f9da](https://github.com/scala/scala/commit/bf0f9da) | <notextile>SI-7825 Consider DEFAULTMETHOD when refchecking concreteness</notextile>
[0fb4d46](https://github.com/scala/scala/commit/0fb4d46) | <notextile>A .mailmap entry for @huitseeker</notextile>
[d882ec0](https://github.com/scala/scala/commit/d882ec0) | <notextile>SI-7870 Detect default getter clashes in constructors</notextile>
[c11d988](https://github.com/scala/scala/commit/c11d988) | <notextile>SI-7876 Less dealiasing in Scaladoc's type printing.</notextile>
[001132d](https://github.com/scala/scala/commit/001132d) | <notextile>SI-7876 Scaladoc crasher due to regression in isFunctionType.</notextile>
[f64de5f](https://github.com/scala/scala/commit/f64de5f) | <notextile>Remove octal escape literals from the codebase</notextile>
[fa271e2](https://github.com/scala/scala/commit/fa271e2) | <notextile>SI-4742 Make -Xcheckinit aware of constants.</notextile>
[efd64ae](https://github.com/scala/scala/commit/efd64ae) | <notextile>Add position check for regression introduced by #2957</notextile>
[710401d](https://github.com/scala/scala/commit/710401d) | <notextile>Revert &quot;Merge pull request #2957 from paulp/pr/parser-improvements&quot;</notextile>
[16d963b](https://github.com/scala/scala/commit/16d963b) | <notextile>SI-7868 Account for numeric widening in match translation</notextile>
[4234b34](https://github.com/scala/scala/commit/4234b34) | <notextile>SI-7725 - Vector concatenation is unreasonably slow</notextile>
[8f325dd](https://github.com/scala/scala/commit/8f325dd) | <notextile>Upgrade: starr=M5, partest=RC5, xml=RC4, parsers=RC2.</notextile>
[a5bae8f](https://github.com/scala/scala/commit/a5bae8f) | <notextile>SI-7848 Xlint no warn on $sym with params</notextile>
[40d57db](https://github.com/scala/scala/commit/40d57db) | <notextile>SI-7855 No missing interpolator warning post-typer</notextile>
[6ff756b](https://github.com/scala/scala/commit/6ff756b) | <notextile>SI-7848 Xlint says what looks interpolated</notextile>
[74dfb53](https://github.com/scala/scala/commit/74dfb53) | <notextile>Fix typo in documentation.</notextile>
[c8a9329](https://github.com/scala/scala/commit/c8a9329) | <notextile>add syntactic extractor for assignment-like trees</notextile>
[f8e28af](https://github.com/scala/scala/commit/f8e28af) | <notextile>Follow good interrupt discipline in Response</notextile>
[3d7f84e](https://github.com/scala/scala/commit/3d7f84e) | <notextile>SI-7864 Harden &quot;looks like an interpolated String&quot; warning</notextile>
[355eff4](https://github.com/scala/scala/commit/355eff4) | <notextile>SI-7852 Refactor null-elision tests to be more focussed</notextile>
[354f428](https://github.com/scala/scala/commit/354f428) | <notextile>SI-7852 Omit null check for SomeModule.==</notextile>
[4faaa82](https://github.com/scala/scala/commit/4faaa82) | <notextile>SI-7852 Test to show status quo of for SomeModule.==</notextile>
[9fee7b6](https://github.com/scala/scala/commit/9fee7b6) | <notextile>SI-7852 Omit null check for &quot;&quot;.==</notextile>
[2bb960c](https://github.com/scala/scala/commit/2bb960c) | <notextile>SI-7852 Test to show the status quo bytecode for &quot;&quot; == ...</notextile>
[9fe6b69](https://github.com/scala/scala/commit/9fe6b69) | <notextile>Convenience methods from Try[T] =&gt; {Future, Promise}[T]</notextile>
[21049af](https://github.com/scala/scala/commit/21049af) | <notextile>Require Ant &gt;= 1.8.2</notextile>
[655b7d2](https://github.com/scala/scala/commit/655b7d2) | <notextile>SI-7862: MANIFEST.MF file for Scala sources</notextile>
[48d1d05](https://github.com/scala/scala/commit/48d1d05) | <notextile>add test case for SI-6719</notextile>
[f7a315a](https://github.com/scala/scala/commit/f7a315a) | <notextile>SI-7854, SI-6768 better parsing/positioning in parser</notextile>
[1c8bbd7](https://github.com/scala/scala/commit/1c8bbd7) | <notextile>Position#show prints the point.</notextile>
[1103d48](https://github.com/scala/scala/commit/1103d48) | <notextile>Add trait keeping comments across new Typer runs</notextile>
[b0abc2d](https://github.com/scala/scala/commit/b0abc2d) | <notextile>Uses a WeakHashMap to constrain memory footprint of docComments</notextile>
[2b03ac4](https://github.com/scala/scala/commit/2b03ac4) | <notextile>Type housekeeping.</notextile>
[f4267cc](https://github.com/scala/scala/commit/f4267cc) | <notextile>Cull extraneous whitespace.</notextile>
[6d47a31](https://github.com/scala/scala/commit/6d47a31) | <notextile>Silence pos/t3960's -Ycheck output.</notextile>
[0f67e8d](https://github.com/scala/scala/commit/0f67e8d) | <notextile>SI-7853 A less ad-hoc place to call memberType</notextile>
[746f53e](https://github.com/scala/scala/commit/746f53e) | <notextile>SI-7853 An unsatisfying fix regression in explicit outer</notextile>
[145aaa4](https://github.com/scala/scala/commit/145aaa4) | <notextile>Longer timeout for repl test.</notextile>
[1e8e16e](https://github.com/scala/scala/commit/1e8e16e) | <notextile>Remove build.number.maven</notextile>
[6e2cadb](https://github.com/scala/scala/commit/6e2cadb) | <notextile>SI-7847 Static forwarders for case apply/unapply</notextile>
[cff8b56](https://github.com/scala/scala/commit/cff8b56) | <notextile>SI-7841 More robust unspecialization of names</notextile>
[4aad4eb](https://github.com/scala/scala/commit/4aad4eb) | <notextile>SI-7841 Remove AnyRef specialization from AbstractPartialFunction</notextile>
[dd9b286](https://github.com/scala/scala/commit/dd9b286) | <notextile>SI-7841 Remove commented out AnyRef specialization from Function{0,1}.</notextile>
[8a7b566](https://github.com/scala/scala/commit/8a7b566) | <notextile>refactor variable arity definitions</notextile>
[95fe195](https://github.com/scala/scala/commit/95fe195) | <notextile>SI-6489 parsing in macros should provide proper positions</notextile>
[5607bd1](https://github.com/scala/scala/commit/5607bd1) | <notextile>SI-7304 improve deprecation warnings for tree factory methods</notextile>
[545ee29](https://github.com/scala/scala/commit/545ee29) | <notextile>SI-6701 add SYNTHETIC flag to the reflection api</notextile>
[68b57fd](https://github.com/scala/scala/commit/68b57fd) | <notextile>SI-7845 Disable test for JSR 233</notextile>
[2e51296](https://github.com/scala/scala/commit/2e51296) | <notextile>SI-7844 Intellij setup.sh is not working for Ubuntu 12.04</notextile>
[27d73ee](https://github.com/scala/scala/commit/27d73ee) | <notextile>SI-7223 More finesse in setting INCONSTRUCTOR</notextile>
[38a488e](https://github.com/scala/scala/commit/38a488e) | <notextile>SI-7007 Test case shows we disallow premature `this` access</notextile>
[f04257b](https://github.com/scala/scala/commit/f04257b) | <notextile>SI-3832 Don't lift methods in aux constructor trailing stats as STATIC</notextile>
[c2dc346](https://github.com/scala/scala/commit/c2dc346) | <notextile>SI-3832 Extract tracking of under-construction classes to a mixin</notextile>
[97255e7](https://github.com/scala/scala/commit/97255e7) | <notextile>SI-1909 Move tests from pos to run</notextile>
[330ead5](https://github.com/scala/scala/commit/330ead5) | <notextile>Reducing variation of tree creation methods.</notextile>
[55c6fd4](https://github.com/scala/scala/commit/55c6fd4) | <notextile>Widen type of outer accessor.</notextile>
[671e6e0](https://github.com/scala/scala/commit/671e6e0) | <notextile>Corrects behavior of finalResultType.</notextile>
[b4671f0](https://github.com/scala/scala/commit/b4671f0) | <notextile>SI-7843 Restore JSR 223 service entry</notextile>
[6e47be0](https://github.com/scala/scala/commit/6e47be0) | <notextile>Removed deprecated calls.</notextile>
[1282395](https://github.com/scala/scala/commit/1282395) | <notextile>Consolidate Position classes.</notextile>
[ff57b76](https://github.com/scala/scala/commit/ff57b76) | <notextile>SI-7839 Final val breaks checkinit build</notextile>
[dfe3fe3](https://github.com/scala/scala/commit/dfe3fe3) | <notextile>Todo promote to partest</notextile>
[5edf50d](https://github.com/scala/scala/commit/5edf50d) | <notextile>SI-7622 Scaladoc and error message polish</notextile>
[1683c95](https://github.com/scala/scala/commit/1683c95) | <notextile>SI-7622 Clean Up Phase Assembly</notextile>
[f3731f9](https://github.com/scala/scala/commit/f3731f9) | <notextile>SI-7622 Plugins can be not enabled</notextile>
[79d6191](https://github.com/scala/scala/commit/79d6191) | <notextile>SI-7622 -Xshow-phases can show disabled phases</notextile>
[5912210](https://github.com/scala/scala/commit/5912210) | <notextile>SI-7622 Phases are enabled or not</notextile>
[26ad989](https://github.com/scala/scala/commit/26ad989) | <notextile>SI-7622 -Xgenerate-phase-graph is an info option</notextile>
[508ee77](https://github.com/scala/scala/commit/508ee77) | <notextile>SI-7622 Phase assembly is testable</notextile>
[13c716e](https://github.com/scala/scala/commit/13c716e) | <notextile>Build partest-extras under `pack.done`</notextile>
[cb028ba](https://github.com/scala/scala/commit/cb028ba) | <notextile>SI-7818 Cast our way out of extended existential angst</notextile>
[2391887](https://github.com/scala/scala/commit/2391887) | <notextile>SI-7767 Test case for Scaladoc on early initializers</notextile>
[48283ca](https://github.com/scala/scala/commit/48283ca) | <notextile>SI-7767 avoid rejecting Scaladoc comments in early initializers</notextile>
[fe9a3e9](https://github.com/scala/scala/commit/fe9a3e9) | <notextile>SI-7269 Rework MapLike#retains to account for desugaring change</notextile>
[a19babc](https://github.com/scala/scala/commit/a19babc) | <notextile>SI-7814 Updates the instrumented version of ScalaRuntime.</notextile>
[fb43ec8](https://github.com/scala/scala/commit/fb43ec8) | <notextile>SI-7814 Avoid init cycle between Predef, `package`, ScalaRuntime</notextile>
[7804cec](https://github.com/scala/scala/commit/7804cec) | <notextile>[nomaster] SI-7652 REPL extended quest for tools</notextile>
[8b10daf](https://github.com/scala/scala/commit/8b10daf) | <notextile>[nomaster] SI-7652 Bad tools fails loudly</notextile>
[fdd860d](https://github.com/scala/scala/commit/fdd860d) | <notextile>SI-7801 Fix a nightmarish bug in Symbols#adaptInfos</notextile>
[3bfec2c](https://github.com/scala/scala/commit/3bfec2c) | <notextile>Deprecate -Yinfer-debug</notextile>
[92bd4a7](https://github.com/scala/scala/commit/92bd4a7) | <notextile>SI-7834 Type equivalence of C.this and C.super.</notextile>
[f812a4c](https://github.com/scala/scala/commit/f812a4c) | <notextile>SI-7708 - Improve Bitset foreach performance</notextile>
[eb5a8cd](https://github.com/scala/scala/commit/eb5a8cd) | <notextile>Update scaladoc's .classpath to new name of partest project</notextile>
[4c4d324](https://github.com/scala/scala/commit/4c4d324) | <notextile>SI-7356 - Source.mkString performs painfully slow (...)</notextile>
[2c9e051](https://github.com/scala/scala/commit/2c9e051) | <notextile>Revert a tiny recent refactoring in SelectiveCPSTransform</notextile>
[bc9630e](https://github.com/scala/scala/commit/bc9630e) | <notextile>Restore --show-diff to partest-ack.</notextile>
[7c8b636](https://github.com/scala/scala/commit/7c8b636) | <notextile>Limit bad advice given for erroneous pattern.</notextile>
[09058cf](https://github.com/scala/scala/commit/09058cf) | <notextile>Removing orphan check/flag files.</notextile>
[cdac66f](https://github.com/scala/scala/commit/cdac66f) | <notextile>streamline implementation of annotation splicing</notextile>
[230f36d](https://github.com/scala/scala/commit/230f36d) | <notextile>unify handling of references to scala members for functions and tuples</notextile>
[71087fd](https://github.com/scala/scala/commit/71087fd) | <notextile>make the postfixOps warning go away</notextile>
[cd07f9f](https://github.com/scala/scala/commit/cd07f9f) | <notextile>better support for ValDefs, VarDefs and DefDefs</notextile>
[4ad1064](https://github.com/scala/scala/commit/4ad1064) | <notextile>rename TupleN and TupleTypeN into SyntacticTuple and SyntacticTupleType</notextile>
[a455858](https://github.com/scala/scala/commit/a455858) | <notextile>SI-7723 better support for deconstruction of new expressions</notextile>
[546e940](https://github.com/scala/scala/commit/546e940) | <notextile>SI-7803 support for matching of anonymous function literals</notextile>
[1352fea](https://github.com/scala/scala/commit/1352fea) | <notextile>first-class early def splicing and extraction support</notextile>
[73a4f17](https://github.com/scala/scala/commit/73a4f17) | <notextile>extract out isHole(name)</notextile>
[800f5ac](https://github.com/scala/scala/commit/800f5ac) | <notextile>add support for function type splicing and extraction</notextile>
[1585b52](https://github.com/scala/scala/commit/1585b52) | <notextile>reify ScalaPackage symbol with the help of ScalaDot</notextile>
[901cdc1](https://github.com/scala/scala/commit/901cdc1) | <notextile>refine block and applied/typeapplied splicing/matching semantics</notextile>
[f9d5e3d](https://github.com/scala/scala/commit/f9d5e3d) | <notextile>SI-7196 add support for refineStat splicing and extraction</notextile>
[c637cfc](https://github.com/scala/scala/commit/c637cfc) | <notextile>reduce amount of clutter on -Yquasiquote-debug</notextile>
[1ac6bb9](https://github.com/scala/scala/commit/1ac6bb9) | <notextile>minor changes to TreeGen.mkTemplate</notextile>
[eabe3b4](https://github.com/scala/scala/commit/eabe3b4) | <notextile>move mkNew from tools.nsc.ast.TreeGen to reflect.internal.TreeGen</notextile>
[0d7c4a5](https://github.com/scala/scala/commit/0d7c4a5) | <notextile>use NoMods and NoFlags for reification of empty values</notextile>
[34f0f7d](https://github.com/scala/scala/commit/34f0f7d) | <notextile>merge flagsFromBits and FlagsAsBits into FlagsRepr</notextile>
[9f03b67](https://github.com/scala/scala/commit/9f03b67) | <notextile>rename mkAnnotationCtor into mkAnnotation</notextile>
[5085546](https://github.com/scala/scala/commit/5085546) | <notextile>add missing copyTypeDef utility function</notextile>
[c701fb6](https://github.com/scala/scala/commit/c701fb6) | <notextile>refactor definition tests into separate subsuite</notextile>
[652e969](https://github.com/scala/scala/commit/652e969) | <notextile>add toolbox-based utility methods to quasiquotes' tests</notextile>
[455354b](https://github.com/scala/scala/commit/455354b) | <notextile>SI-7810 Reflect private constructor</notextile>
[6e585e1](https://github.com/scala/scala/commit/6e585e1) | <notextile>Avoid spurious tree checker warning for higher order type params</notextile>
[288b12e](https://github.com/scala/scala/commit/288b12e) | <notextile>Noise reduction + minor enhance in TreeCheckers.</notextile>
[b255617](https://github.com/scala/scala/commit/b255617) | <notextile>SI-7817 Fix regression in structural types</notextile>
[292134a](https://github.com/scala/scala/commit/292134a) | <notextile>SI-7817 Tests to show the foibles of mkAttributedRef</notextile>
[0d7fd08](https://github.com/scala/scala/commit/0d7fd08) | <notextile>Avoid needless Type stringification when logging is disabled.</notextile>
[c58b7b1](https://github.com/scala/scala/commit/c58b7b1) | <notextile>Eliminate TypeTrees with null original.</notextile>
[e8af579](https://github.com/scala/scala/commit/e8af579) | <notextile>SI-7791 Line number table reflects underlying file</notextile>
[4ddff66](https://github.com/scala/scala/commit/4ddff66) | <notextile>Stackless implementation of TailRec in constant memory.</notextile>
[fdc5437](https://github.com/scala/scala/commit/fdc5437) | <notextile>Alter TailRec to have map and flatMap</notextile>
[896addd](https://github.com/scala/scala/commit/896addd) | <notextile>Correcting scaladoc for all classes defining withDefaultValue method. The descri</notextile>
[06c1c78](https://github.com/scala/scala/commit/06c1c78) | <notextile>SI-7805 REPL -i startup</notextile>
[3e1631e](https://github.com/scala/scala/commit/3e1631e) | <notextile>SI-7643 Enable newPatternMatching in interactive.</notextile>
[1515556](https://github.com/scala/scala/commit/1515556) | <notextile>Fix dbuild meta info: remove scaladoc project</notextile>
[ce5c506](https://github.com/scala/scala/commit/ce5c506) | <notextile>Include xml and parsers in dist, tool classpath.</notextile>
[884bc78](https://github.com/scala/scala/commit/884bc78) | <notextile>Don't use sonatype to resolve jars relevant to a release.</notextile>
[67600a7](https://github.com/scala/scala/commit/67600a7) | <notextile>Remove scala-xml and scala-parser-combinators</notextile>
[9c50dd5](https://github.com/scala/scala/commit/9c50dd5) | <notextile>Prepare removal of scala-xml, scala-parser-combinators</notextile>
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
[53e905e](https://github.com/scala/scala/commit/53e905e) | <notextile>Change Scala license to unmodified 3-clause BSD.</notextile>
[20b7ae6](https://github.com/scala/scala/commit/20b7ae6) | <notextile>SI-7781 Comments to SessionTest</notextile>
[534ced4](https://github.com/scala/scala/commit/534ced4) | <notextile>SI-7781 Improve test and add comment</notextile>
[c88e8be](https://github.com/scala/scala/commit/c88e8be) | <notextile>Target junit.clean to clean junit artifacts</notextile>
[2fc528e](https://github.com/scala/scala/commit/2fc528e) | <notextile>SI-7781 REPL stack trunc shows cause</notextile>
[865591b](https://github.com/scala/scala/commit/865591b) | <notextile>Lock down methods in Names</notextile>
[d3c8a0b](https://github.com/scala/scala/commit/d3c8a0b) | <notextile>SI-6240 Synchronizes Names</notextile>
[8db8a6f](https://github.com/scala/scala/commit/8db8a6f) | <notextile>update typesafe.artifactory-online.com to private-repo</notextile>
[b65d67d](https://github.com/scala/scala/commit/b65d67d) | <notextile>deprecate early type defs</notextile>
[f0bbd2c](https://github.com/scala/scala/commit/f0bbd2c) | <notextile>Paring back the scope of our shared .gitignore</notextile>
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
[6ad8eb4](https://github.com/scala/scala/commit/6ad8eb4) | <notextile>SI-7763 Don't eliminate CHECK_CAST in dead code elimination.</notextile>
[26dfa54](https://github.com/scala/scala/commit/26dfa54) | <notextile>SI-7763 Avoid dropping casts in erasure</notextile>
[3eebc99](https://github.com/scala/scala/commit/3eebc99) | <notextile>SI-7785 Preserve TypeVar suspension through TypeMaps</notextile>
[d877d0c](https://github.com/scala/scala/commit/d877d0c) | <notextile>SI-7501 Pickler: owner adjustment for param syms in annotation args</notextile>
[3b3f037](https://github.com/scala/scala/commit/3b3f037) | <notextile>GenBCode: decouple ClassDef traversing from ClassNode building</notextile>
[cd1c070](https://github.com/scala/scala/commit/cd1c070) | <notextile>GenBCode: decouple ClassNode building from encoding as byte array</notextile>
[22d907c](https://github.com/scala/scala/commit/22d907c) | <notextile>GenBCode: decouple ClassNode building from classfile writing</notextile>
[2a659cf](https://github.com/scala/scala/commit/2a659cf) | <notextile>SI-7407 fixed in GenBCode but beware, it remains a bug in GenASM</notextile>
[5e8bc19](https://github.com/scala/scala/commit/5e8bc19) | <notextile>A better diagnostic error for corrupt or missing JARs.</notextile>
[4254b47](https://github.com/scala/scala/commit/4254b47) | <notextile>Echo the location of JUnit test failure reports in `ant test.junit`.</notextile>
[7d83be2](https://github.com/scala/scala/commit/7d83be2) | <notextile>Logging cleanup.</notextile>
[4412a92](https://github.com/scala/scala/commit/4412a92) | <notextile>Value class Depth.</notextile>
[654fdb1](https://github.com/scala/scala/commit/654fdb1) | <notextile>SI-6507 completely sidestep handlers in REPL when :silent in on</notextile>
[7693be8](https://github.com/scala/scala/commit/7693be8) | <notextile>Overhaul of partest-ack.</notextile>
[159baa2](https://github.com/scala/scala/commit/159baa2) | <notextile>Fix typo in sample code in scaladoc for package scala.sys.process</notextile>
[20be88d](https://github.com/scala/scala/commit/20be88d) | <notextile>ProcessBuilder.lines(log) *does* throw an exception.</notextile>
[37eec59](https://github.com/scala/scala/commit/37eec59) | <notextile>Golfed about 20 lines into the sand trap.</notextile>
[8586158](https://github.com/scala/scala/commit/8586158) | <notextile>skipping trips to specializeTypes when not necessary in constructors</notextile>
[053682c](https://github.com/scala/scala/commit/053682c) | <notextile>separation of concerns: guard non-specialized ctor-stats in constructors</notextile>
[21e5681](https://github.com/scala/scala/commit/21e5681) | <notextile>better encapsulation in constructors phase</notextile>
[d41152a](https://github.com/scala/scala/commit/d41152a) | <notextile>readability for intoConstructors transformer</notextile>
[5a22456](https://github.com/scala/scala/commit/5a22456) | <notextile>separation of concerns: eliding param-accessor fields in constructors</notextile>
[1974313](https://github.com/scala/scala/commit/1974313) | <notextile>separation of concerns: delayed-init in constructors</notextile>
[6d5f3a0](https://github.com/scala/scala/commit/6d5f3a0) | <notextile>method transformClassTemplate() turned into class TemplateTransformer</notextile>
[dbbd1d4](https://github.com/scala/scala/commit/dbbd1d4) | <notextile>eliding what the constructor phase elides but with less effort (2 of 2)</notextile>
[dd1f5f9](https://github.com/scala/scala/commit/dd1f5f9) | <notextile>eliding what the constructor phase elides but with less effort (1 of 2)</notextile>
[c0f7c46](https://github.com/scala/scala/commit/c0f7c46) | <notextile>how stuff works: elision of param-accessor-fields and outer-accessors</notextile>
[0512c38](https://github.com/scala/scala/commit/0512c38) | <notextile>handling AnyVal special case early on to simplify logic afterwards</notextile>
[23925fc](https://github.com/scala/scala/commit/23925fc) | <notextile>warn about uninitialized reads (in constructors), self-contained check</notextile>
[6634d82](https://github.com/scala/scala/commit/6634d82) | <notextile>SI-1980 A lint warning for by-name parameters in right assoc methods</notextile>
[46f17f1](https://github.com/scala/scala/commit/46f17f1) | <notextile>@compileTimeOnly now works for symbols from the empty package</notextile>
[4ca45cb](https://github.com/scala/scala/commit/4ca45cb) | <notextile>@compileTimeOnly now works for annotations</notextile>
[840ad76](https://github.com/scala/scala/commit/840ad76) | <notextile>marks Expr.splice and Expr.value with @compileTimeOnly</notextile>
[1b5f731](https://github.com/scala/scala/commit/1b5f731) | <notextile>moves compileTimeOnly to scala-library</notextile>
[609738a](https://github.com/scala/scala/commit/609738a) | <notextile>Use scala-partest 1.0-RC4</notextile>
[473a169](https://github.com/scala/scala/commit/473a169) | <notextile>Move partest to https://github.com/scala/scala-partest</notextile>
[470c699](https://github.com/scala/scala/commit/470c699) | <notextile>SI-7740 Trim stack trace before printing in REPL</notextile>
[fde88c7](https://github.com/scala/scala/commit/fde88c7) | <notextile>No longer crash on NoSymbol.owner.</notextile>
[a0a2aa2](https://github.com/scala/scala/commit/a0a2aa2) | <notextile>SI-6797 Test case for already-fixed DelayedInit bug</notextile>
[3df1d77](https://github.com/scala/scala/commit/3df1d77) | <notextile>SI-7756 Uncripple refchecks in case bodies</notextile>
[48d14aa](https://github.com/scala/scala/commit/48d14aa) | <notextile>SI-7729 Fix broken windows build</notextile>
[a721df7](https://github.com/scala/scala/commit/a721df7) | <notextile>SI-7757 add additional test case with annotation on the next line</notextile>
[2131166](https://github.com/scala/scala/commit/2131166) | <notextile>SI-7757 disallow constructor annotations on traits</notextile>
[6d4e71c](https://github.com/scala/scala/commit/6d4e71c) | <notextile>Refinement of name-based unapplySeq.</notextile>
[b3d9dfa](https://github.com/scala/scala/commit/b3d9dfa) | <notextile>An unapplySeq-via-String test.</notextile>
[6d77da3](https://github.com/scala/scala/commit/6d77da3) | <notextile>Refined name-based patmat methods.</notextile>
[a905d0e](https://github.com/scala/scala/commit/a905d0e) | <notextile>Revert &quot;Minor improvement in pattern typer inference.&quot;</notextile>
[84a3359](https://github.com/scala/scala/commit/84a3359) | <notextile>SI-5903 extractor macros</notextile>
[22b82a4](https://github.com/scala/scala/commit/22b82a4) | <notextile>Finish segregating patmat cps hacks.</notextile>
[017460e](https://github.com/scala/scala/commit/017460e) | <notextile>Reworked MaybeTypedBound.</notextile>
[ef30ea3](https://github.com/scala/scala/commit/ef30ea3) | <notextile>Pull translatePattern entirely into BoundTree.</notextile>
[54bb76b](https://github.com/scala/scala/commit/54bb76b) | <notextile>Move more pattern logic into BoundTree.</notextile>
[4f6b16a](https://github.com/scala/scala/commit/4f6b16a) | <notextile>Introduced case class BoundTree.</notextile>
[1cd7a9e](https://github.com/scala/scala/commit/1cd7a9e) | <notextile>New tests for name-based pattern matcher.</notextile>
[8f05647](https://github.com/scala/scala/commit/8f05647) | <notextile>Pattern matcher: extractors become name-based.</notextile>
[b895541](https://github.com/scala/scala/commit/b895541) | <notextile>Introduced classes to encapsulate extractor info.</notextile>
[db2e756](https://github.com/scala/scala/commit/db2e756) | <notextile>Stylistic cleanups in patmat.</notextile>
[e60e837](https://github.com/scala/scala/commit/e60e837) | <notextile>Simplify management of pattern vars.</notextile>
[a31f1f0](https://github.com/scala/scala/commit/a31f1f0) | <notextile>Cleanups in Typers.</notextile>
[8c94e9c](https://github.com/scala/scala/commit/8c94e9c) | <notextile>Add some logging to instantiateTypeVar.</notextile>
[a2189f4](https://github.com/scala/scala/commit/a2189f4) | <notextile>Expanded logic in formalTypes.</notextile>
[35775a8](https://github.com/scala/scala/commit/35775a8) | <notextile>SI-4425 do some validity checking on unapplies.</notextile>
[e611eea](https://github.com/scala/scala/commit/e611eea) | <notextile>Move most of Typers#Typer#typedTyped into PatternTypers.</notextile>
[c5f7aac](https://github.com/scala/scala/commit/c5f7aac) | <notextile>Turned TreeMaker into case class.</notextile>
[13ad734](https://github.com/scala/scala/commit/13ad734) | <notextile>Compressed central TreeMaker pattern match.</notextile>
[3349d5a](https://github.com/scala/scala/commit/3349d5a) | <notextile>Pulled pattern typing methods from Typers.</notextile>
[dc872cd](https://github.com/scala/scala/commit/dc872cd) | <notextile>Broke up typed1's giant pattern match.</notextile>
[b084cab](https://github.com/scala/scala/commit/b084cab) | <notextile>Deduplicate mkZero in pattern matcher.</notextile>
[0cf47bd](https://github.com/scala/scala/commit/0cf47bd) | <notextile>Simplified the MaybeBoundTyped extractor a bit.</notextile>
[d351a1f](https://github.com/scala/scala/commit/d351a1f) | <notextile>Segreated CPS hacks in pattern matcher.</notextile>
[0be0b99](https://github.com/scala/scala/commit/0be0b99) | <notextile>Remedied glaring omission in error output.</notextile>
[e76507f](https://github.com/scala/scala/commit/e76507f) | <notextile>An Unapplied extractor.</notextile>
[35122d6](https://github.com/scala/scala/commit/35122d6) | <notextile>Minor improvement in pattern typer inference.</notextile>
[9672a80](https://github.com/scala/scala/commit/9672a80) | <notextile>Add checkability condition.</notextile>
[b38c928](https://github.com/scala/scala/commit/b38c928) | <notextile>Cleanups in Unapplies.</notextile>
[b1d72f1](https://github.com/scala/scala/commit/b1d72f1) | <notextile>Cosmetic cleanup in the matcher.</notextile>
[87d80ff](https://github.com/scala/scala/commit/87d80ff) | <notextile>Positioned variations of inform/warning/globalError.</notextile>
[e7c6108](https://github.com/scala/scala/commit/e7c6108) | <notextile>Removed some dead code in Uncurry.</notextile>
[2a31f0a](https://github.com/scala/scala/commit/2a31f0a) | <notextile>Pushed some noisy logging down to debuglog.</notextile>
[44b4dcf](https://github.com/scala/scala/commit/44b4dcf) | <notextile>Add a helper method drop to ScalaRunTime.</notextile>
[de1d8c3](https://github.com/scala/scala/commit/de1d8c3) | <notextile>Expand the understanding of bytecode tests.</notextile>
[4334f4c](https://github.com/scala/scala/commit/4334f4c) | <notextile>Some general purpose methods.</notextile>
[37e43d0](https://github.com/scala/scala/commit/37e43d0) | <notextile>Add some standard names used in pattern matcher.</notextile>
[130b5d7](https://github.com/scala/scala/commit/130b5d7) | <notextile>Make memberType less crashy.</notextile>
[5eb5ad5](https://github.com/scala/scala/commit/5eb5ad5) | <notextile>Repair NPE in -Ytyper-debug output.</notextile>
[5212aaf](https://github.com/scala/scala/commit/5212aaf) | <notextile>Crasher in symbol tracer.</notextile>
[645019e](https://github.com/scala/scala/commit/645019e) | <notextile>SI-7704 Fix partest's test category selection (again)</notextile>
[4a27365](https://github.com/scala/scala/commit/4a27365) | <notextile>kills introduceTopLevel</notextile>
[6db8a52](https://github.com/scala/scala/commit/6db8a52) | <notextile>SI-6507 do not call .toString on REPL results when :silent is on.</notextile>
[bfdf775](https://github.com/scala/scala/commit/bfdf775) | <notextile>SI-7630 [Avian] Skip test run/repl-javap-outdir-funs on Avian</notextile>
[b8d71c5](https://github.com/scala/scala/commit/b8d71c5) | <notextile>SI-7564 [Avian] Whitespace fixes to run/tailcalls.check</notextile>
[ee6e25e](https://github.com/scala/scala/commit/ee6e25e) | <notextile>Clean up imports in s.t.n.interpreter.IMain</notextile>
[bcf35bb](https://github.com/scala/scala/commit/bcf35bb) | <notextile>SI-7681 Remove scala.tools.nsc.io.DaemonThreadFactory</notextile>
[417718b](https://github.com/scala/scala/commit/417718b) | <notextile>addresses feedback regarding new junit tests</notextile>
[e1bef09](https://github.com/scala/scala/commit/e1bef09) | <notextile>SI-6843 well-positioned syntax errors for quasiquotes</notextile>
[b4598b4](https://github.com/scala/scala/commit/b4598b4) | <notextile>SI-7331 remove all the wrapping code from toolbox</notextile>
[d7ad291](https://github.com/scala/scala/commit/d7ad291) | <notextile>refactor repl to use new new parser entry point</notextile>
[a06a771](https://github.com/scala/scala/commit/a06a771) | <notextile>refactor parser entry points and extract a few methods out</notextile>
[5439c4c](https://github.com/scala/scala/commit/5439c4c) | <notextile>SI-7731 make CannotHaveAttrs more consistent</notextile>
[834e29f](https://github.com/scala/scala/commit/834e29f) | <notextile>add assertThrows testing utility function</notextile>
[67d94f6](https://github.com/scala/scala/commit/67d94f6) | <notextile>SI-7715 String inpatternation s&quot;$_&quot; for s&quot;${_}&quot;</notextile>
[21a8c6c](https://github.com/scala/scala/commit/21a8c6c) | <notextile>SI-7470 implements fundep materialization</notextile>
[f878bf0](https://github.com/scala/scala/commit/f878bf0) | <notextile>Remove unused private[scala] def ScalaRunTime.checkZip</notextile>
[fbad993](https://github.com/scala/scala/commit/fbad993) | <notextile>SI-7658 Prevent StackOverflowError in ScalaRunTime.stringOf</notextile>
[2b1563f](https://github.com/scala/scala/commit/2b1563f) | <notextile>Clean up ConsoleRunner, --&gt; returns Boolean ...</notextile>
[e526164](https://github.com/scala/scala/commit/e526164) | <notextile>Add some explicit return types to s.t.c._</notextile>
[aa5099e](https://github.com/scala/scala/commit/aa5099e) | <notextile>SI-7704 Fix partest's test category selection</notextile>
[9d5c97c](https://github.com/scala/scala/commit/9d5c97c) | <notextile>StringContext#checkLengths reports bad args count</notextile>
[6917cca](https://github.com/scala/scala/commit/6917cca) | <notextile>In tests, interpolation is no longer -Xperimental.</notextile>
[e132de3](https://github.com/scala/scala/commit/e132de3) | <notextile>SI-7544 Interpolation message for %% literal</notextile>
[a4a43a1](https://github.com/scala/scala/commit/a4a43a1) | <notextile>Whitespace fixes in scala/tools/scalap</notextile>
[f2de2c4](https://github.com/scala/scala/commit/f2de2c4) | <notextile>SI-7624 Fix -feature warnings in scala/tools/scalap</notextile>
[6056f7e](https://github.com/scala/scala/commit/6056f7e) | <notextile>SI-7624 Replace new{Term,Type}Name with {Term,Type}Name</notextile>
[0459db4](https://github.com/scala/scala/commit/0459db4) | <notextile>SI-7624 Fix a few remaining -Xlint warnings ... in various places. This includes</notextile>
[f670e28](https://github.com/scala/scala/commit/f670e28) | <notextile>SI-7624 Fix -Xlint warnings in AnyVal-related code</notextile>
[91fcafe](https://github.com/scala/scala/commit/91fcafe) | <notextile>Formatting fixes for AnyVal</notextile>
[7943084](https://github.com/scala/scala/commit/7943084) | <notextile>SI-7624 Fix -feature warnings and build with -feature</notextile>
[862daae](https://github.com/scala/scala/commit/862daae) | <notextile>Added a warning from scala runner script.</notextile>
[b2ddf85](https://github.com/scala/scala/commit/b2ddf85) | <notextile>Bug fix ! , if $color_opts is unset partest script does not work.</notextile>
[93e9623](https://github.com/scala/scala/commit/93e9623) | <notextile>SI-7737 Regex matches Char</notextile>
[8f5a892](https://github.com/scala/scala/commit/8f5a892) | <notextile>SI-7265 javaSpecVersion, adjust isJava... tests</notextile>
[adcf1d5](https://github.com/scala/scala/commit/adcf1d5) | <notextile>Add deprecation warning to lock class</notextile>
[26aebfa](https://github.com/scala/scala/commit/26aebfa) | <notextile>SI-7690 ghost error message fails compile</notextile>
[593024d](https://github.com/scala/scala/commit/593024d) | <notextile>Log file is zapped before test run</notextile>
[a992744](https://github.com/scala/scala/commit/a992744) | <notextile>SI-7729 Does Par-Test work?  Absolutely!</notextile>
[3dd0dd4](https://github.com/scala/scala/commit/3dd0dd4) | <notextile>Par-Test split checks work again</notextile>
[b741e8a](https://github.com/scala/scala/commit/b741e8a) | <notextile>Make map2Conserve occupy constant stack space in spirit of SI-2411</notextile>
[b145cb1](https://github.com/scala/scala/commit/b145cb1) | <notextile>Move map2Conserve to a new home, next to map2.</notextile>
[0e81962](https://github.com/scala/scala/commit/0e81962) | <notextile>DefDef.name is now TermName again</notextile>
[466b7d2](https://github.com/scala/scala/commit/466b7d2) | <notextile>Fix N^2 spot in erasure.</notextile>
[02df8f3](https://github.com/scala/scala/commit/02df8f3) | <notextile>Scrubbing up the IntelliJ Config</notextile>
[d5e0f72](https://github.com/scala/scala/commit/d5e0f72) | <notextile>Add sample to SymbolTableTest using custom symbols and type.</notextile>
[3cb3c8e](https://github.com/scala/scala/commit/3cb3c8e) | <notextile>Address TODOs around SymbolLoaders and SymbolTable.</notextile>
[115e8b4](https://github.com/scala/scala/commit/115e8b4) | <notextile>Fix Platform type in Global to be JavaPlatform.</notextile>
[526f6c3](https://github.com/scala/scala/commit/526f6c3) | <notextile>Add example of SymbolTable unit test.</notextile>
[e96962d](https://github.com/scala/scala/commit/e96962d) | <notextile>Make junit runner quiet when tests pass.</notextile>
[f3ed70c](https://github.com/scala/scala/commit/f3ed70c) | <notextile>The `test-junit` Eclipse project depends on `scala-compiler`</notextile>
[afbee09](https://github.com/scala/scala/commit/afbee09) | <notextile>Refactor the cake so SymbolTable does not depend on Global</notextile>
[5eb4cdf](https://github.com/scala/scala/commit/5eb4cdf) | <notextile>Update sbt interface version to 0.12.4.</notextile>
[d898ca3](https://github.com/scala/scala/commit/d898ca3) | <notextile>Deprecate Platform.BinaryRepr.</notextile>
[e5121c8](https://github.com/scala/scala/commit/e5121c8) | <notextile>Remove dependency on typer phase in ClassfileParser.</notextile>
[ced7214](https://github.com/scala/scala/commit/ced7214) | <notextile>Move ICodeReader-specific logic out of ClassfileParser.</notextile>
[4d6be05](https://github.com/scala/scala/commit/4d6be05) | <notextile>Make -Ytyper-debug output readable.</notextile>
[aeb7331](https://github.com/scala/scala/commit/aeb7331) | <notextile>Cleanups in type printing.</notextile>
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
[32fc8fc](https://github.com/scala/scala/commit/32fc8fc) | <notextile>SI-7668 Better return type inheritance for dep. method types</notextile>
[635892e](https://github.com/scala/scala/commit/635892e) | <notextile>SI-7669 Fix exhaustivity warnings for recursive ADTs.</notextile>
[6b16548](https://github.com/scala/scala/commit/6b16548) | <notextile>SI-7620 Remove floating-point-literals-without-digit-after-dot</notextile>
[eb7d7f3](https://github.com/scala/scala/commit/eb7d7f3) | <notextile>SI-6811 Deprecate scala.text</notextile>
[559d5ab](https://github.com/scala/scala/commit/559d5ab) | <notextile>SI-7592 Deprecate s.c.m.DefaultMapModel</notextile>
[cf30b40](https://github.com/scala/scala/commit/cf30b40) | <notextile>SI-7679 Remove deprecated StandardScalaSettings#make</notextile>
[efa5689](https://github.com/scala/scala/commit/efa5689) | <notextile>SI-7681 Remove dead code in s.t.n.s.AbsScalaSettings</notextile>
[0a3f340](https://github.com/scala/scala/commit/0a3f340) | <notextile>SI-7681 Clean up scala.reflect.internal.util.TableDef ... now that scala.tools.n</notextile>
[dde9e90](https://github.com/scala/scala/commit/dde9e90) | <notextile>SI-7681 Remove scala.tools.nsc.Phases</notextile>
[150968c](https://github.com/scala/scala/commit/150968c) | <notextile>SI-7681 Remove s.t.n.d.Changes (dead code)</notextile>
[91214da](https://github.com/scala/scala/commit/91214da) | <notextile>SI-7689 Fix typing regression with default arguments</notextile>
[4cdeaba](https://github.com/scala/scala/commit/4cdeaba) | <notextile>MergeableEither extends AnyVal</notextile>
[b041fdc](https://github.com/scala/scala/commit/b041fdc) | <notextile>SI-7695 Macro debug output on -explaintypes</notextile>
[652e780](https://github.com/scala/scala/commit/652e780) | <notextile>Removing unused things from scalap.</notextile>
[3a35480](https://github.com/scala/scala/commit/3a35480) | <notextile>fix Promise scaladoc</notextile>
[1c68a30](https://github.com/scala/scala/commit/1c68a30) | <notextile>fix typo. s/Universes/Universe</notextile>
[1010a32](https://github.com/scala/scala/commit/1010a32) | <notextile>SI-7488 REPL javap finds new style delayedEndpoint</notextile>
[8fbd68c](https://github.com/scala/scala/commit/8fbd68c) | <notextile>SI-7650 No bang expansions in REPL jline</notextile>
[b51cb58](https://github.com/scala/scala/commit/b51cb58) | <notextile>Commit .gitignore directly</notextile>
[750892d](https://github.com/scala/scala/commit/750892d) | <notextile>Fixing exhaustiveness warnings.</notextile>
[37dc3e4](https://github.com/scala/scala/commit/37dc3e4) | <notextile>STARR: use 2.11.0-M4, built with 2.11.0-M3</notextile>
[64619ce](https://github.com/scala/scala/commit/64619ce) | <notextile>Update README.md</notextile>
[33952e6](https://github.com/scala/scala/commit/33952e6) | <notextile>Update README.md</notextile>
[45545e3](https://github.com/scala/scala/commit/45545e3) | <notextile>A smaller readme, with content moved to our gh-pages</notextile>
[b5d14bf](https://github.com/scala/scala/commit/b5d14bf) | <notextile>Fix typo in Documentation</notextile>
[0c48ec1](https://github.com/scala/scala/commit/0c48ec1) | <notextile>SI-7592 Remove scala.tools.nsc.util.MultiHashMap</notextile>
[415dda4](https://github.com/scala/scala/commit/415dda4) | <notextile>SI-7174 Fix initialization issues</notextile>
[e7468f3](https://github.com/scala/scala/commit/e7468f3) | <notextile>SI-4684 Repl supports raw paste</notextile>
[816a444](https://github.com/scala/scala/commit/816a444) | <notextile>SI-4684 Repl supports whole-file paste</notextile>
[138fecf](https://github.com/scala/scala/commit/138fecf) | <notextile>Fix repl-save test</notextile>
[0f18a00](https://github.com/scala/scala/commit/0f18a00) | <notextile>Fixes checkinit build failure caused by quasiquotes pull request</notextile>
[be39391](https://github.com/scala/scala/commit/be39391) | <notextile>SI-7487 Revert &quot;Removed -Ymacro-no-expand.&quot;</notextile>
[72298b8](https://github.com/scala/scala/commit/72298b8) | <notextile>SI-6419 Repl save session command</notextile>
[596b853](https://github.com/scala/scala/commit/596b853) | <notextile>SI-4594 Repl settings command</notextile>
[4222849](https://github.com/scala/scala/commit/4222849) | <notextile>SI-4594 Enable mutating mutable multi settings</notextile>
[33b45ee](https://github.com/scala/scala/commit/33b45ee) | <notextile>SI-7637 Repl edit command</notextile>
[0870f91](https://github.com/scala/scala/commit/0870f91) | <notextile>Fix docs inconsistent (cmp -&gt; ord).</notextile>
[114d52b](https://github.com/scala/scala/commit/114d52b) | <notextile>macro impls can now return subtypes of c.Tree</notextile>
[aada28f](https://github.com/scala/scala/commit/aada28f) | <notextile>precise return type for FlagsAsBits.unapply</notextile>
[f7093b8](https://github.com/scala/scala/commit/f7093b8) | <notextile>backward compatibility for TreeBuilder</notextile>
[7553b0a](https://github.com/scala/scala/commit/7553b0a) | <notextile>tests for quasiquotes</notextile>
[1771923](https://github.com/scala/scala/commit/1771923) | <notextile>introduces unapply macros for internal use</notextile>
[7184fe0](https://github.com/scala/scala/commit/7184fe0) | <notextile>implements quasiquotes</notextile>
[32949c4](https://github.com/scala/scala/commit/32949c4) | <notextile>introduces extensibility hooks into the reifier</notextile>
[7e6c723](https://github.com/scala/scala/commit/7e6c723) | <notextile>moves template creation logic from nsc to reflect</notextile>
[cbe5362](https://github.com/scala/scala/commit/cbe5362) | <notextile>adds the lookahead routine to the parser</notextile>
[b5f703f](https://github.com/scala/scala/commit/b5f703f) | <notextile>extensibility hooks for parser</notextile>
[310df92](https://github.com/scala/scala/commit/310df92) | <notextile>moves TreeBuilder into the parser</notextile>
[a90d1f0](https://github.com/scala/scala/commit/a90d1f0) | <notextile>SI-6574 Support @tailrec for extension methods.</notextile>
[8329a64](https://github.com/scala/scala/commit/8329a64) | <notextile>SI-7638 Superaccessor lookup after specialization</notextile>
[a07879d](https://github.com/scala/scala/commit/a07879d) | <notextile>scaladoc needs xml and parser-combinators</notextile>
[57534f9](https://github.com/scala/scala/commit/57534f9) | <notextile>Updated eclipse project files.</notextile>
[a0a60e7](https://github.com/scala/scala/commit/a0a60e7) | <notextile>Add meta-information for dbuild.</notextile>
[1b0fa91](https://github.com/scala/scala/commit/1b0fa91) | <notextile>Unfork jline: use vanilla jline 2.11 as a dependency.</notextile>
[46a4635](https://github.com/scala/scala/commit/46a4635) | <notextile>Spin off parser combinators to scala-parser-combinators.jar.</notextile>
[4340f79](https://github.com/scala/scala/commit/4340f79) | <notextile>Spin off src/library/scala/xml to src/xml/scala/xml.</notextile>
[b672009](https://github.com/scala/scala/commit/b672009) | <notextile>No more duplication in maven-deploy.xml.</notextile>
[ede32ba](https://github.com/scala/scala/commit/ede32ba) | <notextile>SI-6221 inference with Function1 subtypes.</notextile>
[ece1834](https://github.com/scala/scala/commit/ece1834) | <notextile>SI-7614 Minimize the times of evaluation f in TraversableOnce.maxBy/minBy.</notextile>
[1b4ffde](https://github.com/scala/scala/commit/1b4ffde) | <notextile>Fix typo in documentation</notextile>
[216e036](https://github.com/scala/scala/commit/216e036) | <notextile>fix typo</notextile>
[51fe664](https://github.com/scala/scala/commit/51fe664) | <notextile>Move some code from s.t.n.io to s.t.n.interactive</notextile>
[1c69dbc](https://github.com/scala/scala/commit/1c69dbc) | <notextile>SI-7582 Only inline accessible calls to package-private Java code</notextile>
[1391c51](https://github.com/scala/scala/commit/1391c51) | <notextile>SI-7582 ClassfileParser: populate privateWithin of Java module class</notextile>
[d5b733c](https://github.com/scala/scala/commit/d5b733c) | <notextile>Use forward slash in #2637's test on windows</notextile>
[f94d86e](https://github.com/scala/scala/commit/f94d86e) | <notextile>SI-7592 Replace s.t.n.u.TreeSet with s.c.m.TreeSet</notextile>
[b86d29e](https://github.com/scala/scala/commit/b86d29e) | <notextile>Adds equals and hashCode to three classes that implement Ordered.</notextile>
[abe4bd8](https://github.com/scala/scala/commit/abe4bd8) | <notextile>Adds a hashCode method to the Settings class for Ant.</notextile>
[930b36d](https://github.com/scala/scala/commit/930b36d) | <notextile>Seals some case class hierarchies.</notextile>
[be02dff](https://github.com/scala/scala/commit/be02dff) | <notextile>Unseal a uselessly sealed case class.</notextile>
[c485095](https://github.com/scala/scala/commit/c485095) | <notextile>Updates .gitignore files.</notextile>
[eebaae5](https://github.com/scala/scala/commit/eebaae5) | <notextile>SI-7603 Speculative fix for annotation binding error</notextile>
[0c752d7](https://github.com/scala/scala/commit/0c752d7) | <notextile>Less noise on a partest failure.</notextile>
[2285493](https://github.com/scala/scala/commit/2285493) | <notextile>SI-7344 Specialize methods in private scopes</notextile>
[e7ac254](https://github.com/scala/scala/commit/e7ac254) | <notextile>SI-7571 Allow nesting of anonymous classes in value classes</notextile>
[d2c5324](https://github.com/scala/scala/commit/d2c5324) | <notextile>Refactoring to the scala-concurrent-tck.scala   - there were numerous logical is</notextile>
[da54f34](https://github.com/scala/scala/commit/da54f34) | <notextile>Cleaning up method implementations in Future     Optimizations:     1) Avoiding </notextile>
[c43b504](https://github.com/scala/scala/commit/c43b504) | <notextile>SI-7343 Fixed phase ordering in specialization</notextile>
[c0ba5eb](https://github.com/scala/scala/commit/c0ba5eb) | <notextile>Removed redundant `retypedMethod` in `Duplicators`</notextile>
[da1ae7a](https://github.com/scala/scala/commit/da1ae7a) | <notextile>[backport] relax time constraint in duration-tck.scala (for Windows VMs) (cherry</notextile>
[6090709](https://github.com/scala/scala/commit/6090709) | <notextile>SI-7591 Make s.t.p.n.ConsoleRunner use s.t.c.CommandLine</notextile>
[a8f9c2e](https://github.com/scala/scala/commit/a8f9c2e) | <notextile>SI-7591 Minor cleanups</notextile>
[f5a18b5](https://github.com/scala/scala/commit/f5a18b5) | <notextile>SI-7591 Move command-line spec usage demo to tests</notextile>
[ed7f488](https://github.com/scala/scala/commit/ed7f488) | <notextile>GenBCode: Eliminate needless Options</notextile>
[be436ba](https://github.com/scala/scala/commit/be436ba) | <notextile>more informative name for backend-selection via command-line</notextile>
[8281ab5](https://github.com/scala/scala/commit/8281ab5) | <notextile>catching up with a fix in master after this PR was submitted</notextile>
[e8d1612](https://github.com/scala/scala/commit/e8d1612) | <notextile>additional documentation for GenBCode</notextile>
[94297df](https://github.com/scala/scala/commit/94297df) | <notextile>SI-5031 fixed in GenBCode</notextile>
[5213d23](https://github.com/scala/scala/commit/5213d23) | <notextile>two bytecode tests atune with bytecode by GenASM</notextile>
[22ee2df](https://github.com/scala/scala/commit/22ee2df) | <notextile>new bytecode emitter, GenBCode, for now under a flag</notextile>
[c4d1217](https://github.com/scala/scala/commit/c4d1217) | <notextile>an ICode InvokeStyle can now answer whether it isSuper</notextile>
[c005287](https://github.com/scala/scala/commit/c005287) | <notextile>SI-7590 TreeSet should fail fast if Ordering is null</notextile>
[4cbb6a9](https://github.com/scala/scala/commit/4cbb6a9) | <notextile>SI-7511 Remove indirection of numeric methods</notextile>
[c03bcbc](https://github.com/scala/scala/commit/c03bcbc) | <notextile>Fix typo in Scaladoc</notextile>
[3216321](https://github.com/scala/scala/commit/3216321) | <notextile>SI-7344 Specialize methods in private scopes</notextile>
[59fae2e](https://github.com/scala/scala/commit/59fae2e) | <notextile>Get rid of raw types which cause unnecessary warnings</notextile>
[c7ee272](https://github.com/scala/scala/commit/c7ee272) | <notextile>SI-7600 [Avian] Skip tests r/stream_length and r/t4294</notextile>
[cac899c](https://github.com/scala/scala/commit/cac899c) | <notextile>SI-3936 - add test case to show that SI-3936 is already fixed</notextile>
[d863c71](https://github.com/scala/scala/commit/d863c71) | <notextile>Remove dependency on combinators from CommandLinerParser.</notextile>
[57a6447](https://github.com/scala/scala/commit/57a6447) | <notextile>SI-7599 [Avian] Prevent TCO in test to inspect stack</notextile>
[990c2b0](https://github.com/scala/scala/commit/990c2b0) | <notextile>SI-6855: REPL emits error on partial pastie</notextile>
[9f2b289](https://github.com/scala/scala/commit/9f2b289) | <notextile>SI-7584 Test and spurious warning fix for by-name closures</notextile>
[83ae74c](https://github.com/scala/scala/commit/83ae74c) | <notextile>SI-7584 Fix typer regression with by-name parameter types</notextile>
[9b72669](https://github.com/scala/scala/commit/9b72669) | <notextile>Set scene for Predef.$scope's demise.</notextile>
[4e9b33a](https://github.com/scala/scala/commit/4e9b33a) | <notextile>Remove dependency on xml in ast.parser</notextile>
[ef1264b](https://github.com/scala/scala/commit/ef1264b) | <notextile>Remove dependency on xml in MarkupParsers</notextile>
[edee7db](https://github.com/scala/scala/commit/edee7db) | <notextile>Remove dependency on xml in plugin loading.</notextile>
[739cc9d](https://github.com/scala/scala/commit/739cc9d) | <notextile>Remove dependency on xml in ScalaRunTime.</notextile>
[1a1d09c](https://github.com/scala/scala/commit/1a1d09c) | <notextile>Remove dependency on xml in sys.process.</notextile>
[272b165](https://github.com/scala/scala/commit/272b165) | <notextile>SI-7569 Fix end position in PostfixSelect tree</notextile>
[58abe39](https://github.com/scala/scala/commit/58abe39) | <notextile>SI-7433 Fix spurious warning about catching control throwable</notextile>
[a954321](https://github.com/scala/scala/commit/a954321) | <notextile>SI-7439 Avoid NPE in `isMonomorphicType` with stub symbols.</notextile>
[48bcc18](https://github.com/scala/scala/commit/48bcc18) | <notextile>SI-7292 Fixes test failures by updating *.check files</notextile>
[36da622](https://github.com/scala/scala/commit/36da622) | <notextile>SI-7292 Deprecate octal escape literals</notextile>
[2f0e5ec](https://github.com/scala/scala/commit/2f0e5ec) | <notextile>SI-6899, prohibit dangerous, useless implicit conversions.</notextile>
[5c4be40](https://github.com/scala/scala/commit/5c4be40) | <notextile>SI-7364 Allow raw types in parent position in Java sources</notextile>
[b49b6cf](https://github.com/scala/scala/commit/b49b6cf) | <notextile>SI-7151 Emit final in bytecode for final inner classes.</notextile>
[8c0f444](https://github.com/scala/scala/commit/8c0f444) | <notextile>SI-5022 Retain precise existentials through pattern matching</notextile>
[173e709](https://github.com/scala/scala/commit/173e709) | <notextile>Move WeakHashSetTest to junit tests.</notextile>
[3494397](https://github.com/scala/scala/commit/3494397) | <notextile>Add Eclipse project for JUnit tests.</notextile>
[25a8e70](https://github.com/scala/scala/commit/25a8e70) | <notextile>Add support for JUnit tests</notextile>
[c71fa58](https://github.com/scala/scala/commit/c71fa58) | <notextile>[backport] SI-7498 ParTrieMap.foreach no longer crashes</notextile>
[e3d3e16](https://github.com/scala/scala/commit/e3d3e16) | <notextile>Add Duration.toCoarsest method</notextile>
[9cabcf2](https://github.com/scala/scala/commit/9cabcf2) | <notextile>SI-7479 Make test/files/run/tailcalls.scala pass on Avian</notextile>
[da7c064](https://github.com/scala/scala/commit/da7c064) | <notextile>SI-7479 Add avian option to partest's diff filter...</notextile>
[77bf3a0](https://github.com/scala/scala/commit/77bf3a0) | <notextile>Removed sbt build.</notextile>
[de5267d](https://github.com/scala/scala/commit/de5267d) | <notextile>SI-6811 Remove scala.annotation.cloneable</notextile>
[528808c](https://github.com/scala/scala/commit/528808c) | <notextile>SI-6747 Deprecate Range#{numRange,last,terminal}Element{s,}</notextile>
[d5288f8](https://github.com/scala/scala/commit/d5288f8) | <notextile>SI-7505 Test case for pattern matcher + type alias bug</notextile>
[ac4e3ca](https://github.com/scala/scala/commit/ac4e3ca) | <notextile>Refactor testing logic for only running under certain JDK versions</notextile>
[fc6da8d](https://github.com/scala/scala/commit/fc6da8d) | <notextile>Test for reading JDK 8 (classfile format 52) class files.</notextile>
[608f577](https://github.com/scala/scala/commit/608f577) | <notextile>SI-6841 Fix bug at the intersection of DelayedInit and named args</notextile>
[dd5fa60](https://github.com/scala/scala/commit/dd5fa60) | <notextile>SI-7558 Fix capture of free local vars in toolbox compiler</notextile>
[28c5f73](https://github.com/scala/scala/commit/28c5f73) | <notextile>SI-7556 Fix runtime reflection involving ScalaLongSignature</notextile>
[86e6e92](https://github.com/scala/scala/commit/86e6e92) | <notextile>SI-7264 Initialize owner when searching for companion.</notextile>
[32ba1fc](https://github.com/scala/scala/commit/32ba1fc) | <notextile>Fix incorrectly documented exception of toBoolean method of String</notextile>
[99cbeeb](https://github.com/scala/scala/commit/99cbeeb) | <notextile>Document exceptions thrown in some conversion methods of String</notextile>
[fcec275](https://github.com/scala/scala/commit/fcec275) | <notextile>SI-7498 ParTrieMap.foreach no longer crashes</notextile>
[45d6177](https://github.com/scala/scala/commit/45d6177) | <notextile>Eliminate needless Options.</notextile>
[c77edc4](https://github.com/scala/scala/commit/c77edc4) | <notextile>SI-6503 Fix scaladoc output to generate valid HTML5</notextile>
[32b5d50](https://github.com/scala/scala/commit/32b5d50) | <notextile>SI-7519 Less brutal attribute resetting in adapt fallback</notextile>
[8518709](https://github.com/scala/scala/commit/8518709) | <notextile>SI-6308 Specialize methods that have some unspecialized params</notextile>
[1d9abd2](https://github.com/scala/scala/commit/1d9abd2) | <notextile>SI-7564 Fix detection of reflective calls on Avian</notextile>
[2a19cd5](https://github.com/scala/scala/commit/2a19cd5) | <notextile>SI-2464 Resiliance against missing InnerClass attributes</notextile>
[b42bb18](https://github.com/scala/scala/commit/b42bb18) | <notextile>SI-7418 Avoid concurrent use of compiler in REPL startup</notextile>
[4f530c4](https://github.com/scala/scala/commit/4f530c4) | <notextile>Cleanup of crash output.</notextile>
[a45d3e5](https://github.com/scala/scala/commit/a45d3e5) | <notextile>unifies handling of T's in various analyses of Foo[T]'s</notextile>
[ee646e9](https://github.com/scala/scala/commit/ee646e9) | <notextile>fixes a crash on a degenerate macro definition</notextile>
[488444b](https://github.com/scala/scala/commit/488444b) | <notextile>cleans up 82f0925</notextile>
[67caf85](https://github.com/scala/scala/commit/67caf85) | <notextile>Cache the most recently created SubstTypeMap.</notextile>
[b7e0fd2](https://github.com/scala/scala/commit/b7e0fd2) | <notextile>Modify perRunCaches to not leak WeakReferences</notextile>
[746d85b](https://github.com/scala/scala/commit/746d85b) | <notextile>SI-7149 Use a WeakHashSet for type uniqueness</notextile>
[ad63f36](https://github.com/scala/scala/commit/ad63f36) | <notextile>SI-7150 Replace scala.reflect.internal.WeakHashSet</notextile>
[75251f7](https://github.com/scala/scala/commit/75251f7) | <notextile>SI-7532 Fix regression in Java inner classfile reader</notextile>
[403eadd](https://github.com/scala/scala/commit/403eadd) | <notextile>SI-7517 Fix higher kinded type inference regression</notextile>
[851e399](https://github.com/scala/scala/commit/851e399) | <notextile>SI-7516 Revert &quot;SI-7234 Make named args play nice w. depmet types&quot;</notextile>
[de12ca6](https://github.com/scala/scala/commit/de12ca6) | <notextile>SI-7486 Regressions in implicit search.</notextile>
[d9c8ccc](https://github.com/scala/scala/commit/d9c8ccc) | <notextile>SI-7509 Avoid crasher as erronous args flow through NamesDefaults</notextile>
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
[278305a](https://github.com/scala/scala/commit/278305a) | <notextile>Revert &quot;SI-7517 type constructors too eagerly normalized.&quot;</notextile>
[073cc20](https://github.com/scala/scala/commit/073cc20) | <notextile>Golfed about 20 lines into the sand trap.</notextile>
[0ee622f](https://github.com/scala/scala/commit/0ee622f) | <notextile>Reversing reversion of ac6504b8c4.</notextile>
[478e31a](https://github.com/scala/scala/commit/478e31a) | <notextile>skipping trips to specializeTypes when not necessary in constructors</notextile>
[7a3c9b4](https://github.com/scala/scala/commit/7a3c9b4) | <notextile>separation of concerns: guard non-specialized ctor-stats in constructors</notextile>
[63325fe](https://github.com/scala/scala/commit/63325fe) | <notextile>readability for intoConstructors transformer</notextile>
[4837fa3](https://github.com/scala/scala/commit/4837fa3) | <notextile>separation of concerns: elision in constructors</notextile>
[ef68aee](https://github.com/scala/scala/commit/ef68aee) | <notextile>separation of concerns: delayed-init in constructors</notextile>
[b77dcdd](https://github.com/scala/scala/commit/b77dcdd) | <notextile>method transformClassTemplate() turned into class TemplateTransformer</notextile>
[955c8fc](https://github.com/scala/scala/commit/955c8fc) | <notextile>eliding what the constructor phase elides but with less effort (2 of 2)</notextile>
[6eeafe5](https://github.com/scala/scala/commit/6eeafe5) | <notextile>eliding what the constructor phase elides but with less effort (1 of 2)</notextile>
[bf2b753](https://github.com/scala/scala/commit/bf2b753) | <notextile>how stuff works: elision of param-accessor-fields and outer-accessors</notextile>
[ac7bbc8](https://github.com/scala/scala/commit/ac7bbc8) | <notextile>handling AnyVal special case early on to simplify logic afterwards</notextile>
[b7add15](https://github.com/scala/scala/commit/b7add15) | <notextile>warn about uninitialized reads (in constructors), self-contained check</notextile>
[ac6504b](https://github.com/scala/scala/commit/ac6504b) | <notextile>Temporary reversion of a bit of d8b96bb858.</notextile>
[3c21aa3](https://github.com/scala/scala/commit/3c21aa3) | <notextile>SI-7520 bug in subtyping.</notextile>
[bcd052c](https://github.com/scala/scala/commit/bcd052c) | <notextile>Eliminated the shared logic.</notextile>
[72d213d](https://github.com/scala/scala/commit/72d213d) | <notextile>New method typeRelationPreCheck.</notextile>
[8b92693](https://github.com/scala/scala/commit/8b92693) | <notextile>Add a TriState value class.</notextile>
[14534c6](https://github.com/scala/scala/commit/14534c6) | <notextile>SI-7517 type constructors too eagerly normalized.</notextile>
[82f0925](https://github.com/scala/scala/commit/82f0925) | <notextile>refactors IMPLPARAM_xxx constants into value classes</notextile>
[b136b42](https://github.com/scala/scala/commit/b136b42) | <notextile>more refactoring and explanations in importers</notextile>
[d5bfbd5](https://github.com/scala/scala/commit/d5bfbd5) | <notextile>applying Jason's aesthetics suggestion</notextile>
[363230a](https://github.com/scala/scala/commit/363230a) | <notextile>changes some definitions to use Symbol.map</notextile>
[463ef75](https://github.com/scala/scala/commit/463ef75) | <notextile>refactors macro runtimes</notextile>
[1022931](https://github.com/scala/scala/commit/1022931) | <notextile>refactors macro compilation</notextile>
[e0bbe0a](https://github.com/scala/scala/commit/e0bbe0a) | <notextile>refactors importers</notextile>
[70f0011](https://github.com/scala/scala/commit/70f0011) | <notextile>refactors macro tests</notextile>
[e1d9805](https://github.com/scala/scala/commit/e1d9805) | <notextile>macro engine refactoring</notextile>
[4324900](https://github.com/scala/scala/commit/4324900) | <notextile>SI-7461 c.typeCheck(silent = true) now suppresses ambiguous errors</notextile>
[81e7389](https://github.com/scala/scala/commit/81e7389) | <notextile>less magic in fast track macros</notextile>
[12a21c9](https://github.com/scala/scala/commit/12a21c9) | <notextile>new starr that supports macro ???</notextile>
[801720b](https://github.com/scala/scala/commit/801720b) | <notextile>SI-6309 Test case for early-init / private[this] crasher.</notextile>
[f281de8](https://github.com/scala/scala/commit/f281de8) | <notextile>Finalized math.E and math.Pi.</notextile>
[e26f5c4](https://github.com/scala/scala/commit/e26f5c4) | <notextile>SI-7088 Array crasher in erasure.</notextile>
[9c29723](https://github.com/scala/scala/commit/9c29723) | <notextile>Revert &quot;SI-6039 Harden against irrelevant filesystem details&quot;</notextile>
[e230409](https://github.com/scala/scala/commit/e230409) | <notextile>SI-7399 : Take scala.concurrent.context.maxThreads into account</notextile>
[bcbe38d](https://github.com/scala/scala/commit/bcbe38d) | <notextile>SI-7474 Parallel collections: End the exception handling madness</notextile>
[84d9b52](https://github.com/scala/scala/commit/84d9b52) | <notextile>SI-7502 removing non-existent element from ListMap returns same map.</notextile>
[a2e8f9e](https://github.com/scala/scala/commit/a2e8f9e) | <notextile>Make all numeric coercions explicit.</notextile>
[de249ba](https://github.com/scala/scala/commit/de249ba) | <notextile>Print raw types correctly.</notextile>
[4250ce1](https://github.com/scala/scala/commit/4250ce1) | <notextile>SI-7469 Remove deprecated elements in Java{Conversions,Converters}</notextile>
[8527209](https://github.com/scala/scala/commit/8527209) | <notextile>PathResolver uses platform EOL to mkStrings</notextile>
[63bd527](https://github.com/scala/scala/commit/63bd527) | <notextile>SI-7410 REPL uses improved tools.jar locator</notextile>
[e037c9a](https://github.com/scala/scala/commit/e037c9a) | <notextile>SI-7198 Par-Test uses filters files</notextile>
[99b4d95](https://github.com/scala/scala/commit/99b4d95) | <notextile>SI-7003 Partest redirects stderr to log file</notextile>
[e5e45b0](https://github.com/scala/scala/commit/e5e45b0) | <notextile>SI-7287 include all compiler sources in -src.jar</notextile>
[1822150](https://github.com/scala/scala/commit/1822150) | <notextile>A couple additional simplifications.</notextile>
[d8b96bb](https://github.com/scala/scala/commit/d8b96bb) | <notextile>Concision contribution.</notextile>
[b8641a9](https://github.com/scala/scala/commit/b8641a9) | <notextile>Avoid caching different types in TypeSymbol.</notextile>
[d64de5b](https://github.com/scala/scala/commit/d64de5b) | <notextile>SI-7499 Additional test case for SI-7319</notextile>
[5230909](https://github.com/scala/scala/commit/5230909) | <notextile>Added another test.</notextile>
[a2ad291](https://github.com/scala/scala/commit/a2ad291) | <notextile>SI-3425 erasure crash with refinement members.</notextile>
[3e1a075](https://github.com/scala/scala/commit/3e1a075) | <notextile>SI-6811 Deprecate scala.util.parsing.json</notextile>
[7c90830](https://github.com/scala/scala/commit/7c90830) | <notextile>SI-7436 Varargs awareness for super param aliasing.</notextile>
[8f6b474](https://github.com/scala/scala/commit/8f6b474) | <notextile>Moves AbstractFileClassLoader to scala-reflect.jar</notextile>
[33b71f6](https://github.com/scala/scala/commit/33b71f6) | <notextile>Swabbing exprTypeArgs.</notextile>
[1ed2dc6](https://github.com/scala/scala/commit/1ed2dc6) | <notextile>Help makeFullyDefined allocate fewer ListBuffers.</notextile>
[5b7becd](https://github.com/scala/scala/commit/5b7becd) | <notextile>Tried to follow own advice with isCoercible.</notextile>
[5419cab](https://github.com/scala/scala/commit/5419cab) | <notextile>Wipe some dirt off protoTypeArgs's face.</notextile>
[410067c](https://github.com/scala/scala/commit/410067c) | <notextile>Splashed soap and water on checkAccessible.</notextile>
[b6639f0](https://github.com/scala/scala/commit/b6639f0) | <notextile>Pull some big chunks out of checkAccessible.</notextile>
[473af4d](https://github.com/scala/scala/commit/473af4d) | <notextile>Remove isPossiblyMissingArgs.</notextile>
[49132b9](https://github.com/scala/scala/commit/49132b9) | <notextile>Make cookJavaRawInfo return this.type.</notextile>
[97fe311](https://github.com/scala/scala/commit/97fe311) | <notextile>Annotated return type of a method.</notextile>
[6adbcfa](https://github.com/scala/scala/commit/6adbcfa) | <notextile>Commented out code from 2008.</notextile>
[b0ada91](https://github.com/scala/scala/commit/b0ada91) | <notextile>Commented out code from 2007.</notextile>
[32169f1](https://github.com/scala/scala/commit/32169f1) | <notextile>Commented out code from 2006.</notextile>
[e11da18](https://github.com/scala/scala/commit/e11da18) | <notextile>Scrubbing up inferPolyAlternatives.</notextile>
[8b8c91e](https://github.com/scala/scala/commit/8b8c91e) | <notextile>Moving on to checkBounds.</notextile>
[0fe56b9](https://github.com/scala/scala/commit/0fe56b9) | <notextile>Cleaning crew moves down the hall.</notextile>
[01bbaa9](https://github.com/scala/scala/commit/01bbaa9) | <notextile>Cleaning up isApplicable and neighbors.</notextile>
[d93826f](https://github.com/scala/scala/commit/d93826f) | <notextile>Incorporated reviewer feedback.</notextile>
[c663ecf](https://github.com/scala/scala/commit/c663ecf) | <notextile>Incorporated reviewer feedback.</notextile>
[433880e](https://github.com/scala/scala/commit/433880e) | <notextile>Refactored stabilize.</notextile>
[24cad03](https://github.com/scala/scala/commit/24cad03) | <notextile>Eliminated HKmode.</notextile>
[b174efb](https://github.com/scala/scala/commit/b174efb) | <notextile>Eliminated RETmode.</notextile>
[1c1d45d](https://github.com/scala/scala/commit/1c1d45d) | <notextile>Eliminated SNDTRYmode.</notextile>
[751daa9](https://github.com/scala/scala/commit/751daa9) | <notextile>Started eliminating modes.</notextile>
[1850ddf](https://github.com/scala/scala/commit/1850ddf) | <notextile>Corralling Modes into a smaller pen.</notextile>
[72de12e](https://github.com/scala/scala/commit/72de12e) | <notextile>Harden partest against duplicate paths.</notextile>
[4ab66d1](https://github.com/scala/scala/commit/4ab66d1) | <notextile>SI-7494 Tests for status quo</notextile>
[e0bd62c](https://github.com/scala/scala/commit/e0bd62c) | <notextile>SI-7494 Each plugin must only be instantiated once.</notextile>
[b6757e1](https://github.com/scala/scala/commit/b6757e1) | <notextile>An attempt to make tests deterministic.</notextile>
[3fb3175](https://github.com/scala/scala/commit/3fb3175) | <notextile>SI-7427 stop crashing under -Ydebug.</notextile>
[08c7293](https://github.com/scala/scala/commit/08c7293) | <notextile>SI-7201 scaladoc url in scala-(library,actors,swing,reflect) pom</notextile>
[12a130d](https://github.com/scala/scala/commit/12a130d) | <notextile>SI-6424 Scaladoc: Use mapNodes.get(_) to avoid NoSuchElementException</notextile>
[f628565](https://github.com/scala/scala/commit/f628565) | <notextile>Prevent slash duplication.</notextile>
[7f9feba](https://github.com/scala/scala/commit/7f9feba) | <notextile>[backport #1727] SI-7359 cyclic nested java class</notextile>
[dd33e28](https://github.com/scala/scala/commit/dd33e28) | <notextile>SI-7486 regression in implicit resolution.</notextile>
[6114038](https://github.com/scala/scala/commit/6114038) | <notextile>[nomaster] unbreaks test.bc</notextile>
[b11324a](https://github.com/scala/scala/commit/b11324a) | <notextile>SI-7492 Remove -Ystruct-dispatch and associated code</notextile>
[b4751a6](https://github.com/scala/scala/commit/b4751a6) | <notextile>No bounds-driven inference for the named.</notextile>
[e28c3ed](https://github.com/scala/scala/commit/e28c3ed) | <notextile>SI-1786 incorporate defined bounds in inference</notextile>
[0bece25](https://github.com/scala/scala/commit/0bece25) | <notextile>ScriptEngine.eval() forwards Error instead of new ScriptException</notextile>
[44a46f8](https://github.com/scala/scala/commit/44a46f8) | <notextile>Deprecate parameter names in scala.concurrent</notextile>
[9db9df7](https://github.com/scala/scala/commit/9db9df7) | <notextile>SI-7484 Indentation and whitespace fixes</notextile>
[cba29e6](https://github.com/scala/scala/commit/cba29e6) | <notextile>SI-7484 Add @SupressWarning(rawtypes/unchecked)</notextile>
[538aa22](https://github.com/scala/scala/commit/538aa22) | <notextile>SI-6488 Interrupt i/o threads on process destroy</notextile>
[5e71539](https://github.com/scala/scala/commit/5e71539) | <notextile>SI-7464 allows FieldMirror.set to update vals</notextile>
[bc10715](https://github.com/scala/scala/commit/bc10715) | <notextile>easy way of writing not implemented macros</notextile>
[b08c135](https://github.com/scala/scala/commit/b08c135) | <notextile>Fix for unreachable code warning.</notextile>
[e9c3f87](https://github.com/scala/scala/commit/e9c3f87) | <notextile>SI-5886 Remove check for packed type conformance.</notextile>
[963c4a7](https://github.com/scala/scala/commit/963c4a7) | <notextile>Actual SI-6555 fix, Scaladoc filter works WITH keyboard shortcuts too</notextile>
[b32d294](https://github.com/scala/scala/commit/b32d294) | <notextile>SI-7383 - Call ExecutionContext.prepare in Future.apply to allow for capturing l</notextile>
[77437ff](https://github.com/scala/scala/commit/77437ff) | <notextile>SI-7442 Update bundled Fork/Join pool (JSR166y)</notextile>
[4e64a27](https://github.com/scala/scala/commit/4e64a27) | <notextile>[nomaster] removes duplication in inferImplicitValue</notextile>
[3edde27](https://github.com/scala/scala/commit/3edde27) | <notextile>[nomaster] SI-7166 catches DivergentImplicit in c.inferImplicitXXX</notextile>
[b4da864](https://github.com/scala/scala/commit/b4da864) | <notextile>[nomaster] SI-7047 fixes silent for c.inferImplicitXXX</notextile>
[fdead2b](https://github.com/scala/scala/commit/fdead2b) | <notextile>[nomaster] SI-7291: No exception throwing for diverging implicit expansion</notextile>
[8168f11](https://github.com/scala/scala/commit/8168f11) | <notextile>[nomaster] SI-7167 implicit macros decide what is divergence</notextile>
[bb73b96](https://github.com/scala/scala/commit/bb73b96) | <notextile>[nomaster] macroExpandAll is now triggered in all invocations of typed</notextile>
[90ac5c4](https://github.com/scala/scala/commit/90ac5c4) | <notextile>[nomaster] SI-5923 instantiates targs in deferred macro applications</notextile>
[0c6927b](https://github.com/scala/scala/commit/0c6927b) | <notextile>[nomaster] temporarily breaks SI-5353</notextile>
[7562499](https://github.com/scala/scala/commit/7562499) | <notextile>Scaladoc: fixing small typo in PartialFunction.scala</notextile>
[5751ddd](https://github.com/scala/scala/commit/5751ddd) | <notextile>pull request feedback</notextile>
[75a3b88](https://github.com/scala/scala/commit/75a3b88) | <notextile>replaces inferBootClasspath with a simple lookup at sun.boot.class.path</notextile>
[35c0145](https://github.com/scala/scala/commit/35c0145) | <notextile>removes the traces of always on debug diagnostics</notextile>
[a3d03ab](https://github.com/scala/scala/commit/a3d03ab) | <notextile>fixes a crash in ReflectionUtils.systemProperties</notextile>
[f1040ea](https://github.com/scala/scala/commit/f1040ea) | <notextile>fixes a checkfile breakage in 2.10.x</notextile>
[8325729](https://github.com/scala/scala/commit/8325729) | <notextile>SI-5734 Allow setting of socket timeout for remote actors</notextile>
[b2c67b3](https://github.com/scala/scala/commit/b2c67b3) | <notextile>SI-7398 Add support for java8 default methods</notextile>
[fbb1363](https://github.com/scala/scala/commit/fbb1363) | <notextile>Refactor DirectTest so java can be tested.</notextile>
[25f49cb](https://github.com/scala/scala/commit/25f49cb) | <notextile>literal() now assigns a position to the tree it produces</notextile>
[cb1a427](https://github.com/scala/scala/commit/cb1a427) | <notextile>SI-7325 cleans up corner cases of percent handling in StringContext.f</notextile>
[a8edefc](https://github.com/scala/scala/commit/a8edefc) | <notextile>SI-7271 fixes positions of string interpolation parts</notextile>
[df3cae7](https://github.com/scala/scala/commit/df3cae7) | <notextile>SI-7426 Crash in pickler.</notextile>
[3abdaf4](https://github.com/scala/scala/commit/3abdaf4) | <notextile>SI-5634 eliminate overly verbose error message</notextile>
[e86832d](https://github.com/scala/scala/commit/e86832d) | <notextile>SI-7441 Don't ramble on about inapplicable implicits.</notextile>
[d0a1f5b](https://github.com/scala/scala/commit/d0a1f5b) | <notextile>SI-7385 crash in erroneous code</notextile>
[62cdd7f](https://github.com/scala/scala/commit/62cdd7f) | <notextile>SI-6091 overeager warning for reference equality</notextile>
[3009916](https://github.com/scala/scala/commit/3009916) | <notextile>SI-6771 Alias awareness for checkableType in match analysis.</notextile>
[e85df24](https://github.com/scala/scala/commit/e85df24) | <notextile>Read-eval-print : the script engine does not need print so make it lazy</notextile>
[1d1492f](https://github.com/scala/scala/commit/1d1492f) | <notextile>Add :kind command to REPL</notextile>
[37707cd](https://github.com/scala/scala/commit/37707cd) | <notextile>Unprivatize methods in SyncVar.</notextile>
[e36bb0b](https://github.com/scala/scala/commit/e36bb0b) | <notextile>Revert &quot;SI-7469 Remove @deprecated MurmurHash elements&quot;</notextile>
[37884ec](https://github.com/scala/scala/commit/37884ec) | <notextile>SI-7482 Don't cook raw types after erasure.</notextile>
[add19e6](https://github.com/scala/scala/commit/add19e6) | <notextile>No longer cache all subclass templates.</notextile>
[005a08d](https://github.com/scala/scala/commit/005a08d) | <notextile>Remove self types check suppression usage from scaladoc.</notextile>
[c88f733](https://github.com/scala/scala/commit/c88f733) | <notextile>Improve code style in the Scaladoc implementation.</notextile>
[9a43611](https://github.com/scala/scala/commit/9a43611) | <notextile>remove unused methods: checkStable, isStableExceptVolatile</notextile>
[fada1ef](https://github.com/scala/scala/commit/fada1ef) | <notextile>SI-6815 untangle isStable and hasVolatileType</notextile>
[97d5179](https://github.com/scala/scala/commit/97d5179) | <notextile>make treeInfo more globally visible</notextile>
[135cfa8](https://github.com/scala/scala/commit/135cfa8) | <notextile>SI-6406 Restore deprecated API</notextile>
[0c7c521](https://github.com/scala/scala/commit/0c7c521) | <notextile>SI-3943 Test case for already-fixed Java interop bug</notextile>
[ae43506](https://github.com/scala/scala/commit/ae43506) | <notextile>SI-7469 Remove @deprecated scala.util.logging</notextile>
[4478560](https://github.com/scala/scala/commit/4478560) | <notextile>SI-7476 Add documentation to GenericTraversableTemplate</notextile>
[80f1fa5](https://github.com/scala/scala/commit/80f1fa5) | <notextile>Fix formatting for couple of docs in the compiler</notextile>
[ac990c1](https://github.com/scala/scala/commit/ac990c1) | <notextile>SI-7469 Make @deprecated elems in scala.concurrent private[scala]</notextile>
[e544786](https://github.com/scala/scala/commit/e544786) | <notextile>SI-7469 Remove deprecated elements in s.u.parsing.combinator</notextile>
[7e9c21f](https://github.com/scala/scala/commit/7e9c21f) | <notextile>SI-7469 Remove @deprecated MurmurHash elements</notextile>
[966f51c](https://github.com/scala/scala/commit/966f51c) | <notextile>removes duplication in inferImplicitValue</notextile>
[b153880](https://github.com/scala/scala/commit/b153880) | <notextile>SI-7047 fixes silent for c.inferImplicitXXX</notextile>
[c539ae2](https://github.com/scala/scala/commit/c539ae2) | <notextile>SI-7167 implicit macros decide what is divergence</notextile>
[a35b6bc](https://github.com/scala/scala/commit/a35b6bc) | <notextile>macroExpandAll is now triggered in all invocations of typed</notextile>
[adef4b5](https://github.com/scala/scala/commit/adef4b5) | <notextile>SI-5923 instantiates targs in deferred macro applications</notextile>
[b0758f5](https://github.com/scala/scala/commit/b0758f5) | <notextile>SI-6039 Harden against irrelevant filesystem details</notextile>
[6486f9f](https://github.com/scala/scala/commit/6486f9f) | <notextile>fix typo in comment</notextile>
[abc314a](https://github.com/scala/scala/commit/abc314a) | <notextile>AbstractFile.getDirectory does not return null when outDir is &quot;.&quot;</notextile>
[0ee9204](https://github.com/scala/scala/commit/0ee9204) | <notextile>SI-7469 Remove @deprecated scala.util.parsing.ast</notextile>
[15df9e9](https://github.com/scala/scala/commit/15df9e9) | <notextile>Limit unnecessary calls to Type#toString.</notextile>
[6890f38](https://github.com/scala/scala/commit/6890f38) | <notextile>SI-7432 add testcases</notextile>
[357c2df](https://github.com/scala/scala/commit/357c2df) | <notextile>SI-7432 Range.min should throw NoSuchElementException on empty range</notextile>
[9e25797](https://github.com/scala/scala/commit/9e25797) | <notextile>Par-Test includes log in transcript of failed exec</notextile>
[89ced24](https://github.com/scala/scala/commit/89ced24) | <notextile>Boil out some duplicated parser logic.</notextile>
[c1286ab](https://github.com/scala/scala/commit/c1286ab) | <notextile>Flesh out copyMemberDef methods with copyModuleDef.</notextile>
[fb5eb8d](https://github.com/scala/scala/commit/fb5eb8d) | <notextile>indentation typo</notextile>
[265fc6b](https://github.com/scala/scala/commit/265fc6b) | <notextile>SI-6863 root cause fixed using factory of scala.runtime.*Ref</notextile>
[c31e44f](https://github.com/scala/scala/commit/c31e44f) | <notextile>Partest can --show-diff again after incremental report.</notextile>
[a86c7a1](https://github.com/scala/scala/commit/a86c7a1) | <notextile>Hardening against nulls for deserialization.</notextile>
[80ac7d0](https://github.com/scala/scala/commit/80ac7d0) | <notextile>Absolutized paths involving the scala package.</notextile>
[1ce4ecd](https://github.com/scala/scala/commit/1ce4ecd) | <notextile>Rewrite TailCalls for performance and immutability.</notextile>
[83c059d](https://github.com/scala/scala/commit/83c059d) | <notextile>use relative symlink in distpack</notextile>
[17f8101](https://github.com/scala/scala/commit/17f8101) | <notextile>SI-6532 emit debug info in compiled java.</notextile>
[d3aa9a7](https://github.com/scala/scala/commit/d3aa9a7) | <notextile>Warn on selection of vals from DelayedInit subclasses.</notextile>
[6271396](https://github.com/scala/scala/commit/6271396) | <notextile>SI-7369 Avoid spurious unreachable warnings in patterns</notextile>
[184cac8](https://github.com/scala/scala/commit/184cac8) | <notextile>SI-7367 scaladoc crash on constructing the model for annotations.</notextile>
[b40749f](https://github.com/scala/scala/commit/b40749f) | <notextile>Corrects link in README.rst</notextile>
[19a61e5](https://github.com/scala/scala/commit/19a61e5) | <notextile>Update links to old website, in preparation for launch.</notextile>
[8448beb](https://github.com/scala/scala/commit/8448beb) | <notextile>SI-6943 warn on value class miscomparison.</notextile>
[c1327dc](https://github.com/scala/scala/commit/c1327dc) | <notextile>SI-6675 Avoid spurious warning about pattern bind arity.</notextile>
[0d2c7e9](https://github.com/scala/scala/commit/0d2c7e9) | <notextile>SI-7355 Handle spaces in paths in Windows batch files.</notextile>
[9d98b6d](https://github.com/scala/scala/commit/9d98b6d) | <notextile>Interactive scaladoc: mark new typer run when done.</notextile>
[e7aadd0](https://github.com/scala/scala/commit/e7aadd0) | <notextile>SI-7330 better error when pattern isn't a value</notextile>
[8556ca0](https://github.com/scala/scala/commit/8556ca0) | <notextile>Quiet down overloaded implicit warning.</notextile>
[8703e00](https://github.com/scala/scala/commit/8703e00) | <notextile>SI-7200 Test case for fixed type inference error.</notextile>
[12dd8c0](https://github.com/scala/scala/commit/12dd8c0) | <notextile>More useful checkfile output in interactive tests.</notextile>
[e6af9bc](https://github.com/scala/scala/commit/e6af9bc) | <notextile>SI-7362, crash in presentation compiler.</notextile>
[6227837](https://github.com/scala/scala/commit/6227837) | <notextile>SI-7409 Par-Test: A crash is not a DNC for neg tests</notextile>
[0c6bcc9](https://github.com/scala/scala/commit/0c6bcc9) | <notextile>Partest has an optionable wait period.</notextile>
[bf44669](https://github.com/scala/scala/commit/bf44669) | <notextile>SI-7349 Partest supports test-interface</notextile>
[b47ca5b](https://github.com/scala/scala/commit/b47ca5b) | <notextile>Update ScalaCheck to 1.10.1.</notextile>
[b4d54be](https://github.com/scala/scala/commit/b4d54be) | <notextile>Partest testnum field width is sensitive to total tests</notextile>
[e4f62c0](https://github.com/scala/scala/commit/e4f62c0) | <notextile>SI-7358 Partest fails on scalacheck failure</notextile>
[c905b95](https://github.com/scala/scala/commit/c905b95) | <notextile>no need to manually clear perRunCaches in GenASM</notextile>
[176a1ba](https://github.com/scala/scala/commit/176a1ba) | <notextile>maps in GenASM guaranteed mem-leak-free by perRunCaches</notextile>
[d516f38](https://github.com/scala/scala/commit/d516f38) | <notextile>SI-7422 GenASM populates and clears its maps within a Run</notextile>
[7158142](https://github.com/scala/scala/commit/7158142) | <notextile>SI-7291: Remove error kinds.</notextile>
[accaa31](https://github.com/scala/scala/commit/accaa31) | <notextile>SI-7291: No exception throwing for diverging implicit expansion</notextile>
[1931f45](https://github.com/scala/scala/commit/1931f45) | <notextile>BytecodeWriters.BytecodeWriter doesn't need to fiddle with Symbol</notextile>
[38f426d](https://github.com/scala/scala/commit/38f426d) | <notextile>compiler flag -Ygen-asmp to emit .asmp textual files for bytecode</notextile>
[d419227](https://github.com/scala/scala/commit/d419227) | <notextile>Route -explaintypes through reporter.</notextile>
[f59be7a](https://github.com/scala/scala/commit/f59be7a) | <notextile>SI-7429 Fix checkinit build failure in Contexts</notextile>
[5a8329a](https://github.com/scala/scala/commit/5a8329a) | <notextile>Address a deprecation warnings in scala-swing.</notextile>
[2e5c7b9](https://github.com/scala/scala/commit/2e5c7b9) | <notextile>SI-6784 Localize feature imports in scala.swing.</notextile>
[71eaf6d](https://github.com/scala/scala/commit/71eaf6d) | <notextile>Updated jline and rebuilt.</notextile>
[c4d0fd9](https://github.com/scala/scala/commit/c4d0fd9) | <notextile>-Yshow-member-pos, print the positions of members.</notextile>
[a61c9c4](https://github.com/scala/scala/commit/a61c9c4) | <notextile>Documented lateMETHOD flag.</notextile>
[8c77915](https://github.com/scala/scala/commit/8c77915) | <notextile>Call method rather than duplicating method.</notextile>
[e9011f5](https://github.com/scala/scala/commit/e9011f5) | <notextile>deprecation cycle for definitions.NPEConstructor</notextile>
[fc8387f](https://github.com/scala/scala/commit/fc8387f) | <notextile>improved naming of variables in constructors phase</notextile>
[b4fbb7b](https://github.com/scala/scala/commit/b4fbb7b) | <notextile>translation for DelayedInit keeps more code in original class</notextile>
[7211432](https://github.com/scala/scala/commit/7211432) | <notextile>avoids multiple evals of isSubClass DelayedInitClass</notextile>
[8dc0c3d](https://github.com/scala/scala/commit/8dc0c3d) | <notextile>for null outer pointer, NPE via throw null</notextile>
[4ca6eb8](https://github.com/scala/scala/commit/4ca6eb8) | <notextile>Created utility function for dropping by-name-ness.</notextile>
[2dc28a2](https://github.com/scala/scala/commit/2dc28a2) | <notextile>role played by magic constant in ScalaSigBytes</notextile>
[0b6a592](https://github.com/scala/scala/commit/0b6a592) | <notextile>another GenJVM remnant that goes away</notextile>
[af0184d](https://github.com/scala/scala/commit/af0184d) | <notextile>removing remnants from the GenJVM era</notextile>
[449da43](https://github.com/scala/scala/commit/449da43) | <notextile>static methods may have local variables too, some day</notextile>
[8f08151](https://github.com/scala/scala/commit/8f08151) | <notextile>SI-7421 remove unneeded extra-attachement in maven deploy</notextile>
[bdae05f](https://github.com/scala/scala/commit/bdae05f) | <notextile>SI-7403 Stream extends Serializable</notextile>
[7b4e450](https://github.com/scala/scala/commit/7b4e450) | <notextile>SI-4365 nondeterministic failure in asSeenFrom</notextile>
[b50e6b4](https://github.com/scala/scala/commit/b50e6b4) | <notextile>check added instruction to ASM MethodNode</notextile>
[35209fc](https://github.com/scala/scala/commit/35209fc) | <notextile>Minor overhaul of lub-producing typer methods.</notextile>
[9a3bd6c](https://github.com/scala/scala/commit/9a3bd6c) | <notextile>Simplify some checks in Refchecks.</notextile>
[cf93e02](https://github.com/scala/scala/commit/cf93e02) | <notextile>Added ensureFullyDefined.</notextile>
[fe8280c](https://github.com/scala/scala/commit/fe8280c) | <notextile>Added orElse to Type.</notextile>
[648784c](https://github.com/scala/scala/commit/648784c) | <notextile>SI-7345 Address review comments.</notextile>
[c598e76](https://github.com/scala/scala/commit/c598e76) | <notextile>SI-7345 Improved Context.toString</notextile>
[85af192](https://github.com/scala/scala/commit/85af192) | <notextile>SI-7345 Eliminate the `depth` var.</notextile>
[2304a78](https://github.com/scala/scala/commit/2304a78) | <notextile>SI-7345 Drive by refactoring of pattern matching for `arg: _*`.</notextile>
[e112db6](https://github.com/scala/scala/commit/e112db6) | <notextile>SI-7345 Factor out method to clear and restore undetparams.</notextile>
[0ce81c8](https://github.com/scala/scala/commit/0ce81c8) | <notextile>SI-7345 Remove unneeded warning.</notextile>
[ec33ad0](https://github.com/scala/scala/commit/ec33ad0) | <notextile>SI-7345 Doc and TODO comments around Context.</notextile>
[dbd8457](https://github.com/scala/scala/commit/dbd8457) | <notextile>SI-7345 Produce Context#imports from the context chain</notextile>
[78e7eba](https://github.com/scala/scala/commit/78e7eba) | <notextile>SI-7345 Refactor manual iteration to use foreach.</notextile>
[7ce4de4](https://github.com/scala/scala/commit/7ce4de4) | <notextile>SI-7345 Move `inSilentMode` from Infer to Context.</notextile>
[bba9d3d](https://github.com/scala/scala/commit/bba9d3d) | <notextile>SI-7345 remove unused methods.</notextile>
[510ebec](https://github.com/scala/scala/commit/510ebec) | <notextile>SI-7345 Prefer using a throwaway silent context over buffer flushing.</notextile>
[ec5eaee](https://github.com/scala/scala/commit/ec5eaee) | <notextile>SI-7345 More refactoring and documentation in Contexts</notextile>
[190aea9](https://github.com/scala/scala/commit/190aea9) | <notextile>SI-7345 Exploit named/default args   - Collapse overloads of `rootContext`   - m</notextile>
[c9f5ab0](https://github.com/scala/scala/commit/c9f5ab0) | <notextile>SI-7345 Encapsulate warning and error buffers in ReportBuffer.</notextile>
[ff5dde1](https://github.com/scala/scala/commit/ff5dde1) | <notextile>SI-7345 Add Context#isLocal, akin to Symbol#isLocal</notextile>
[b1cb004](https://github.com/scala/scala/commit/b1cb004) | <notextile>SI-7345 Use combinator to find next enclosing non-template.</notextile>
[281b850](https://github.com/scala/scala/commit/281b850) | <notextile>SI-7345 Remove comment that appears obsolete.</notextile>
[f2c351c](https://github.com/scala/scala/commit/f2c351c) | <notextile>SI-7345 Rationalize overloads of Context#make</notextile>
[e658b63](https://github.com/scala/scala/commit/e658b63) | <notextile>SI-7345 Represent the boolean modes in Context in ContextMode.</notextile>
[372965b](https://github.com/scala/scala/commit/372965b) | <notextile>SI-7402 List extends Serializable</notextile>
[4c715eb](https://github.com/scala/scala/commit/4c715eb) | <notextile>Par-Test allows redefinition of srcDir by Ant</notextile>
[d49d36f](https://github.com/scala/scala/commit/d49d36f) | <notextile>Disabled failing bitset test.</notextile>
[cdffcf8](https://github.com/scala/scala/commit/cdffcf8) | <notextile>Eliminated the accumulated feature warnings.</notextile>
[1da48a4](https://github.com/scala/scala/commit/1da48a4) | <notextile>Eliminate a pile of -Xlint warnings.</notextile>
[0f1a004](https://github.com/scala/scala/commit/0f1a004) | <notextile>Taught -Xlint about @implicitNotFound.</notextile>
[d02ccc3](https://github.com/scala/scala/commit/d02ccc3) | <notextile>Fix unchecked warning.</notextile>
[6f47caf](https://github.com/scala/scala/commit/6f47caf) | <notextile>SI-6898 Document AnyVal box and unbox implemention by BoxesRunTime</notextile>
[240fa30](https://github.com/scala/scala/commit/240fa30) | <notextile>Reverting changes to AnyVals generated classes in 9a82fc0</notextile>
[c29405d](https://github.com/scala/scala/commit/c29405d) | <notextile>Simplify type bounds.</notextile>
[5c6d62a](https://github.com/scala/scala/commit/5c6d62a) | <notextile>SI-7408 Fix test by sorting results of getDeclaredClasses</notextile>
[12a18ee](https://github.com/scala/scala/commit/12a18ee) | <notextile>SI-7376 Bad doc variable error is positioned at the variable.</notextile>
[fecc7e0](https://github.com/scala/scala/commit/fecc7e0) | <notextile>SI-7376 Additional trivial Scaladoc format corrections</notextile>
[3f0a90b](https://github.com/scala/scala/commit/3f0a90b) | <notextile>SI-7376 Unmoored doc has correct position</notextile>
[0fde95e](https://github.com/scala/scala/commit/0fde95e) | <notextile>SI-7376 Scaladoc warns when discarding local doc comments with API tags</notextile>
[e8c85a3](https://github.com/scala/scala/commit/e8c85a3) | <notextile>SI-7080 improve boundary value checking for BitSet</notextile>
[47b626e](https://github.com/scala/scala/commit/47b626e) | <notextile>Change unrecognized scaladoc comments to C-style</notextile>
[5cc2eb8](https://github.com/scala/scala/commit/5cc2eb8) | <notextile>SI-7324 jvm not cool with 255+ parameters</notextile>
[c58b0ab](https://github.com/scala/scala/commit/c58b0ab) | <notextile>Fixed BigDecimal documentation for primitive conversion methods.</notextile>
[f93c4c9](https://github.com/scala/scala/commit/f93c4c9) | <notextile>SI-7337 Error out on missing -d directory.</notextile>
[578ef1f](https://github.com/scala/scala/commit/578ef1f) | <notextile>SI-7319 Remove unused method.</notextile>
[962f88e](https://github.com/scala/scala/commit/962f88e) | <notextile>SI-7377 Remove special treatment of `stableFun()` in patterns.</notextile>
[351d5ec](https://github.com/scala/scala/commit/351d5ec) | <notextile>Absolute path in error message.</notextile>
[3e27fec](https://github.com/scala/scala/commit/3e27fec) | <notextile>SI-7388 Be more robust against cycles in error symbol creation.</notextile>
[15e9ef8](https://github.com/scala/scala/commit/15e9ef8) | <notextile>SI-7377 Fix retypechecking of patterns on case companion alias</notextile>
[ef04619](https://github.com/scala/scala/commit/ef04619) | <notextile>SI-7319 Clear error buffer during Typer reset.</notextile>
[aa6723c](https://github.com/scala/scala/commit/aa6723c) | <notextile>SI-7329 duplicate default getters for specialized parameters.</notextile>
[e1af973](https://github.com/scala/scala/commit/e1af973) | <notextile>Remove scaladoc deprecated option.</notextile>
[01edd04](https://github.com/scala/scala/commit/01edd04) | <notextile>SI-7314 Partest locates tools.jar and javac</notextile>
[4e2459e](https://github.com/scala/scala/commit/4e2459e) | <notextile>Reifier -&gt; AST Node test.</notextile>
[660c8fd](https://github.com/scala/scala/commit/660c8fd) | <notextile>SI-7315 Test @deprecatedInheritance / @specialized interplay</notextile>
[54d11fe](https://github.com/scala/scala/commit/54d11fe) | <notextile>SI-7312 @deprecatedInheritance now ignores same-file subclasses</notextile>
[6690455](https://github.com/scala/scala/commit/6690455) | <notextile>SI-7335 Remove special case for import of Predef._ in Predef.scala</notextile>
[b0fceeb](https://github.com/scala/scala/commit/b0fceeb) | <notextile>SI-7335 Sharpen up comment about implicit prioritization.</notextile>
[ae69de4](https://github.com/scala/scala/commit/ae69de4) | <notextile>SI-7335 Add logging for a now-impossible* case in Symbol#exists.</notextile>
[9d7f811](https://github.com/scala/scala/commit/9d7f811) | <notextile>SI-7335 Don't import Predef._ in Predef.scala</notextile>
[d43f5ce](https://github.com/scala/scala/commit/d43f5ce) | <notextile>SI-7335 Mandate that parents of Predef must be defined in Predef.scala</notextile>
[67c2d6d](https://github.com/scala/scala/commit/67c2d6d) | <notextile>SI-6286 IllegalArgumentException handling specialized method.</notextile>
[23dd325](https://github.com/scala/scala/commit/23dd325) | <notextile>SI-7360 Don't let a follow-up TypeError obscure the original error.</notextile>
[2885eb0](https://github.com/scala/scala/commit/2885eb0) | <notextile>Revert &quot;SI-6387 Clones accessor before name expansion&quot;</notextile>
[7250312](https://github.com/scala/scala/commit/7250312) | <notextile>SI-6386 typed existential type tree's original now have tpe set</notextile>
[6a61e17](https://github.com/scala/scala/commit/6a61e17) | <notextile>SI-7289 Less strict type application for TypeVar.</notextile>
[34a6fa9](https://github.com/scala/scala/commit/34a6fa9) | <notextile>SI-6937 core type tags are no longer referentially unique</notextile>
[7072acb](https://github.com/scala/scala/commit/7072acb) | <notextile>Optimization: avoid call to exists in PlainFile#iterator</notextile>
[246eceb](https://github.com/scala/scala/commit/246eceb) | <notextile>Optimization: avoid isDirectory call in DirectoryClassPath traversal</notextile>
[0cb6324](https://github.com/scala/scala/commit/0cb6324) | <notextile>Add counters to File#{exists, isFile, isDirectory}.</notextile>
[f986d6d](https://github.com/scala/scala/commit/f986d6d) | <notextile>Reduce visibility of implicit class tags.</notextile>
[dc3fa0a](https://github.com/scala/scala/commit/dc3fa0a) | <notextile>if starr.use.released fetch Scala ${starr.version} for STARR</notextile>
[3fe2e86](https://github.com/scala/scala/commit/3fe2e86) | <notextile>assume build.release when maven.version.suffix is set</notextile>
[7184bd3](https://github.com/scala/scala/commit/7184bd3) | <notextile>make quick.done depend on quick.bin again</notextile>
[0affa94](https://github.com/scala/scala/commit/0affa94) | <notextile>SI-7321 Memory leak in specialize on multiple compiler runs.</notextile>
[c2534bf](https://github.com/scala/scala/commit/c2534bf) | <notextile>SI-6900 Fix tailrec for dependent method types</notextile>
[d7545ec](https://github.com/scala/scala/commit/d7545ec) | <notextile>Simplify interplay between Uncurry Info- and Tree-Transformers</notextile>
[3ac185b](https://github.com/scala/scala/commit/3ac185b) | <notextile>Refactor existential related code out of types.</notextile>
[f7c9adc](https://github.com/scala/scala/commit/f7c9adc) | <notextile>Add a cautionary comment to TreeSymSubstitutor.</notextile>
[61308be](https://github.com/scala/scala/commit/61308be) | <notextile>Take the N^2 out of the compiler's TreeSet.</notextile>
[d21f90c](https://github.com/scala/scala/commit/d21f90c) | <notextile>SI-7147 Diagnostic for unexplained assertion in presentation compiler.</notextile>
[ca9c8ef](https://github.com/scala/scala/commit/ca9c8ef) | <notextile>SI-6793 Don't use super param accessors if inaccessible.</notextile>
[5f9bc05](https://github.com/scala/scala/commit/5f9bc05) | <notextile>SI-6715 Shouldn't return &quot;&quot; from TermNames.originalName</notextile>
[8e83703](https://github.com/scala/scala/commit/8e83703) | <notextile>Backport #2289's TermNames.unexpandedName as TermNames.originalName</notextile>
[da90207](https://github.com/scala/scala/commit/da90207) | <notextile>Correct sorting example for Ordering in scaladoc</notextile>
[684e874](https://github.com/scala/scala/commit/684e874) | <notextile>Transcendent rewrite of isSameType.</notextile>
[6bde11e](https://github.com/scala/scala/commit/6bde11e) | <notextile>Centrally unify module class representations.</notextile>
[ca2a09d](https://github.com/scala/scala/commit/ca2a09d) | <notextile>Optimization/logic improvement in Scopes.</notextile>
[497b0cb](https://github.com/scala/scala/commit/497b0cb) | <notextile>Add float version of the double NaN tests</notextile>
[dfdbfa7](https://github.com/scala/scala/commit/dfdbfa7) | <notextile>SI-7300 single line comment in multi line comment</notextile>
[0d95443](https://github.com/scala/scala/commit/0d95443) | <notextile>SI-6289 Paulptest demonstrating javac errors</notextile>
[c6ce617](https://github.com/scala/scala/commit/c6ce617) | <notextile>SI-6289 Partest in technicolor and showing javac errors</notextile>
[6591acb](https://github.com/scala/scala/commit/6591acb) | <notextile>comments to address reviewer feedback</notextile>
[92a1785](https://github.com/scala/scala/commit/92a1785) | <notextile>formatting</notextile>
[7c0e8f0](https://github.com/scala/scala/commit/7c0e8f0) | <notextile>Preliminary support for zinc.</notextile>
[ceeb40c](https://github.com/scala/scala/commit/ceeb40c) | <notextile>Regularity for build.xml: 1 output dir / project</notextile>
[5dca660](https://github.com/scala/scala/commit/5dca660) | <notextile>get rid of args element in staged-scalac</notextile>
[fa053a6](https://github.com/scala/scala/commit/fa053a6) | <notextile>doc fix for Types.baseClasses to match spec definition of Linearization 5.1.2</notextile>
[530f4a5](https://github.com/scala/scala/commit/530f4a5) | <notextile>SI-7110 Warn about naked try without catch/finally</notextile>
[da7e175](https://github.com/scala/scala/commit/da7e175) | <notextile>Add () to side-effecting u1/u2/u4.</notextile>
[f657c37](https://github.com/scala/scala/commit/f657c37) | <notextile>Reduce duplication in JavaMirrors.</notextile>
[8c78d4b](https://github.com/scala/scala/commit/8c78d4b) | <notextile>Brought some structure to the classfileparser.</notextile>
[71c14e4](https://github.com/scala/scala/commit/71c14e4) | <notextile>Cleaning up error handling.</notextile>
[13bb4e5](https://github.com/scala/scala/commit/13bb4e5) | <notextile>Fleshing out comments on JavaAccFlags.</notextile>
[15bc39a](https://github.com/scala/scala/commit/15bc39a) | <notextile>Abstract over java.lang.reflect.{ Method, Constructor }.</notextile>
[14aaa70](https://github.com/scala/scala/commit/14aaa70) | <notextile>Value class to represent jvm flags.</notextile>
[7168743](https://github.com/scala/scala/commit/7168743) | <notextile>Added ensureAccessible to reflection library.</notextile>
[29a9c64](https://github.com/scala/scala/commit/29a9c64) | <notextile>SI-7237 Always choose ForkJoinTaskSupport</notextile>
[22944e4](https://github.com/scala/scala/commit/22944e4) | <notextile>SI-7261 Implicit conversion of BooleanSetting to Boolean and BooleanFlag</notextile>
[e073975](https://github.com/scala/scala/commit/e073975) | <notextile>SI-7261 Implicit conversion of BooleanSetting to Boolean and BooleanFlag</notextile>
[edee27f](https://github.com/scala/scala/commit/edee27f) | <notextile>SI-6168 Retain prefix when parsing types in JVM signatures</notextile>
[0cc9496](https://github.com/scala/scala/commit/0cc9496) | <notextile>Scaladoc: Load scripts at the bottom, and with a defer attribute</notextile>
[024cdd4](https://github.com/scala/scala/commit/024cdd4) | <notextile>Strip version suffix from diffutils.</notextile>
[ba21f36](https://github.com/scala/scala/commit/ba21f36) | <notextile>Use java-diff-utils for diffing in partest.</notextile>
[3ec36bb](https://github.com/scala/scala/commit/3ec36bb) | <notextile>Clean up pack targets. Better dependency tracking.</notextile>
[dc5326c](https://github.com/scala/scala/commit/dc5326c) | <notextile>ant clean only zaps the quick stage</notextile>
[c2da1c5](https://github.com/scala/scala/commit/c2da1c5) | <notextile>Run test.scaladoc before test.suite. Fail fast.</notextile>
[c5511de](https://github.com/scala/scala/commit/c5511de) | <notextile>Let continuations library sources determine docs.lib's actuality</notextile>
[88b7a72](https://github.com/scala/scala/commit/88b7a72) | <notextile>Preparation for faster PR validation</notextile>
[ac1a0f0](https://github.com/scala/scala/commit/ac1a0f0) | <notextile>Remove duplication in java builds of fjbg/asm/forkjoin</notextile>
[d85c3f1](https://github.com/scala/scala/commit/d85c3f1) | <notextile>Formatting. Introduce {asm,forkjoin,fjbg}-classes props.</notextile>
[3bb1af9](https://github.com/scala/scala/commit/3bb1af9) | <notextile>remove unused ant targets: test.ant, test.classload, test.positions</notextile>
[86bea6a](https://github.com/scala/scala/commit/86bea6a) | <notextile>run test.bc as part of tests on 2.10.x</notextile>
[6620758](https://github.com/scala/scala/commit/6620758) | <notextile>restored dependency of pack.done on quick.bin</notextile>
[dd89b00](https://github.com/scala/scala/commit/dd89b00) | <notextile>SI-7285 Fix match analysis with nested objects.</notextile>
[499962d](https://github.com/scala/scala/commit/499962d) | <notextile>Expand test for SI-6124 to demonstrate cause of SI-7285.</notextile>
[c3ad5af](https://github.com/scala/scala/commit/c3ad5af) | <notextile>SI-7290 Minor cleanups driven by review comments.</notextile>
[2e0be83](https://github.com/scala/scala/commit/2e0be83) | <notextile>SI-7290 Discard duplicates in switchable alternative patterns.</notextile>
[4e10b2c](https://github.com/scala/scala/commit/4e10b2c) | <notextile>SI-6387 Clones accessor before name expansion</notextile>
[67b8de7](https://github.com/scala/scala/commit/67b8de7) | <notextile>[backport] SI-7237 Always choose ForkJoinTaskSupport</notextile>
[cd9e03a](https://github.com/scala/scala/commit/cd9e03a) | <notextile>SI-7246 Make $outer pointer elision Java aware</notextile>
[b95ca32](https://github.com/scala/scala/commit/b95ca32) | <notextile>SI-7299 Improve error message for eta-expanding 23+ param method</notextile>
[df61e04](https://github.com/scala/scala/commit/df61e04) | <notextile>Fix typos in build.xml</notextile>
[b7cbda7](https://github.com/scala/scala/commit/b7cbda7) | <notextile>Log when invokedynamic instruction is encountered</notextile>
[e78896f](https://github.com/scala/scala/commit/e78896f) | <notextile>Read version 51 (JDK 7) class files.</notextile>
[b4344e1](https://github.com/scala/scala/commit/b4344e1) | <notextile>SI-6580 Scaladoc: Should not close void elements</notextile>
[47fc00d](https://github.com/scala/scala/commit/47fc00d) | <notextile>SI-6210 Test case for already-fixed pattern matcher bug</notextile>
[df29290](https://github.com/scala/scala/commit/df29290) | <notextile>SI-7013 Scaladoc: Fix StackOverflowError</notextile>
[6f4a594](https://github.com/scala/scala/commit/6f4a594) | <notextile>SI-7253: update comments and naming</notextile>
[b0560c5](https://github.com/scala/scala/commit/b0560c5) | <notextile>Remove fragile code, made redundant by previous commit</notextile>
[386a5bd](https://github.com/scala/scala/commit/386a5bd) | <notextile>SI-7253: respect binary compatibility constraints</notextile>
[50ee635](https://github.com/scala/scala/commit/50ee635) | <notextile>SI-5699 correct java parser for annotation defs.</notextile>
[99bdebb](https://github.com/scala/scala/commit/99bdebb) | <notextile>removes duplication in FreeDef extractors</notextile>
[2b5fde7](https://github.com/scala/scala/commit/2b5fde7) | <notextile>SI-7242 Fix crash when inner object mixes in its companion</notextile>
[5db04eb](https://github.com/scala/scala/commit/5db04eb) | <notextile>an amazing discovery made by Iulian</notextile>
[fc46281](https://github.com/scala/scala/commit/fc46281) | <notextile>fixes the craziness in JavaUniverse.log</notextile>
[ef85a10](https://github.com/scala/scala/commit/ef85a10) | <notextile>SI-7258 Don't assume order of reflection values in t6223</notextile>
[f046853](https://github.com/scala/scala/commit/f046853) | <notextile>SI-7259 Fix detection of Java defined Selects</notextile>
[e90efd6](https://github.com/scala/scala/commit/e90efd6) | <notextile>Reduce duplication and increase verbosity in MiMa execution.</notextile>
[552b623](https://github.com/scala/scala/commit/552b623) | <notextile>SI-7249 Reign in overzealous Function0 optimization.</notextile>
[174334b](https://github.com/scala/scala/commit/174334b) | <notextile>SI-6921 SI-7239 Tread lightly during exploratory typing</notextile>
[6e79370](https://github.com/scala/scala/commit/6e79370) | <notextile>SI-7232 Fix Java import vs defn. binding precendence</notextile>
[8383b65](https://github.com/scala/scala/commit/8383b65) | <notextile>SI-7232 Fix Java import vs defn. binding precendence</notextile>
[7d03dcc](https://github.com/scala/scala/commit/7d03dcc) | <notextile>SI-7259 Fix detection of Java defined Selects</notextile>
[844cef6](https://github.com/scala/scala/commit/844cef6) | <notextile>SI-7296 Remove arity limit for case classes</notextile>
[ad79d74](https://github.com/scala/scala/commit/ad79d74) | <notextile>SI-7296 Avoid crash with nested 23-param case class</notextile>
[74de4ba](https://github.com/scala/scala/commit/74de4ba) | <notextile>Improve testing interactive experience.</notextile>
[395e90a](https://github.com/scala/scala/commit/395e90a) | <notextile>SI-7251, compiler crash with $.</notextile>
[a4fb773](https://github.com/scala/scala/commit/a4fb773) | <notextile>SI-7240 fixes language feature lookup</notextile>
[41e3b89](https://github.com/scala/scala/commit/41e3b89) | <notextile>SI-7233 Account for aliased imports in Erasure</notextile>
[33b499c](https://github.com/scala/scala/commit/33b499c) | <notextile>SI-7233 Account for aliased imports in eta expansion.</notextile>
[9bc17e7](https://github.com/scala/scala/commit/9bc17e7) | <notextile>SI-6725 `f` interpolator now supports %n tokens</notextile>
[eb365f9](https://github.com/scala/scala/commit/eb365f9) | <notextile>SI-7132 - don't discard Unit type in interpreter</notextile>
[2b4cd6c](https://github.com/scala/scala/commit/2b4cd6c) | <notextile>SI-7302 importing from Any.</notextile>
[e3ddb2d](https://github.com/scala/scala/commit/e3ddb2d) | <notextile>Iterator.++ no longer blows the stack.</notextile>
[ccf886c](https://github.com/scala/scala/commit/ccf886c) | <notextile>SI-7186 Slim down some TypeRefs by 8 bytes.</notextile>
[98daf03](https://github.com/scala/scala/commit/98daf03) | <notextile>Overhauled local/getter/setter name logic.</notextile>
[07cd90c](https://github.com/scala/scala/commit/07cd90c) | <notextile>An IntelliJ Module for the recently modularized REPL.</notextile>
[fbecd5d](https://github.com/scala/scala/commit/fbecd5d) | <notextile>Allow getting STARR via maven, also: locker.skip</notextile>
[7d2c1f3](https://github.com/scala/scala/commit/7d2c1f3) | <notextile>Use stage/project for taskname instead of scalacfork</notextile>
[e3b5e0b](https://github.com/scala/scala/commit/e3b5e0b) | <notextile>Sanity for build.xml: exscriptus&amp;positus delendus est.</notextile>
[da8d7c2](https://github.com/scala/scala/commit/da8d7c2) | <notextile>Cleanup obsolete options in CodeGen.</notextile>
[4af9ff5](https://github.com/scala/scala/commit/4af9ff5) | <notextile>SI-7294 Deprecate inheritance from TupleN.</notextile>
[8d537a1](https://github.com/scala/scala/commit/8d537a1) | <notextile>SI-7294 Treat TupleN as final under -Xfuture</notextile>
[2ba065f](https://github.com/scala/scala/commit/2ba065f) | <notextile>Doc -&gt; C-style comments for local symbols to avoid &quot;discarding unmoored doc comm</notextile>
[6c48941](https://github.com/scala/scala/commit/6c48941) | <notextile>The script engine is given a better binding mechanism and reflexive access</notextile>
[6ec6f69](https://github.com/scala/scala/commit/6ec6f69) | <notextile>Bypass determination of protection domain when resource is not in a jar</notextile>
[cc485a9](https://github.com/scala/scala/commit/cc485a9) | <notextile>SI-5717 error when bytecode cannot be written</notextile>
[4bb8988](https://github.com/scala/scala/commit/4bb8988) | <notextile>Add positive and negative testcases for SI-6123 (-explaintypes)</notextile>
[ec6548f](https://github.com/scala/scala/commit/ec6548f) | <notextile>SI-6123: -explaintypes should not explain errors which won't be reported</notextile>
[1b3a379](https://github.com/scala/scala/commit/1b3a379) | <notextile>SI-7102 Specialize isEmpty for bitsets</notextile>
[645634a](https://github.com/scala/scala/commit/645634a) | <notextile>Removed dead src directory.</notextile>
[fc5e558](https://github.com/scala/scala/commit/fc5e558) | <notextile>Eliminate a bunch of -Xlint warnings.</notextile>
[9fed30c](https://github.com/scala/scala/commit/9fed30c) | <notextile>Warn about forgotten string interpolators.</notextile>
[437d619](https://github.com/scala/scala/commit/437d619) | <notextile>removed a redundant var in JavaWriter.flagsToStr</notextile>
[67ed8c8](https://github.com/scala/scala/commit/67ed8c8) | <notextile>SI-7236 Deprecate ThreadPoolTaskSupport and friends</notextile>
[38a1515](https://github.com/scala/scala/commit/38a1515) | <notextile>SI-5513: add inplace set-theoretic operations for mutable bitsets.</notextile>
[57d728c](https://github.com/scala/scala/commit/57d728c) | <notextile>Optimize rebalance method by using null optimized list implementation.</notextile>
[4f17806](https://github.com/scala/scala/commit/4f17806) | <notextile>Eliminated containsNull.</notextile>
[a063bb0](https://github.com/scala/scala/commit/a063bb0) | <notextile>Completely remove isNotNull/notNull.</notextile>
[3fe7b8c](https://github.com/scala/scala/commit/3fe7b8c) | <notextile>SI-7247, deprecated NotNull.</notextile>
[a4c3388](https://github.com/scala/scala/commit/a4c3388) | <notextile>Remove -Xcheck-null setting.</notextile>
[2655a99](https://github.com/scala/scala/commit/2655a99) | <notextile>Removed -Ynotnull setting.</notextile>
[3a17ff0](https://github.com/scala/scala/commit/3a17ff0) | <notextile>Cleanup of constant optimization</notextile>
[69109c0](https://github.com/scala/scala/commit/69109c0) | <notextile>Analyze constants to remove unnecessary branches</notextile>
[81a4f4d](https://github.com/scala/scala/commit/81a4f4d) | <notextile>Restore sketchy dependency to quick.bin.</notextile>
[6ef63e4](https://github.com/scala/scala/commit/6ef63e4) | <notextile>Fix it-never-happened performance regression.</notextile>
[9c5ea96b](https://github.com/scala/scala/commit/9c5ea96b) | <notextile>Moved some numeric subtyping logic closer to center.</notextile>
[cb02c96](https://github.com/scala/scala/commit/cb02c96) | <notextile>Simplified the widening logic.</notextile>
[2fa2db7](https://github.com/scala/scala/commit/2fa2db7) | <notextile>SI-7228, bug in weak subtyping.</notextile>
[745c36a](https://github.com/scala/scala/commit/745c36a) | <notextile>SI-7328 Bail out of names/defaults if args are error typed</notextile>
[83c9c76](https://github.com/scala/scala/commit/83c9c76) | <notextile>SI-7234 Make named args play nice with dep. method types</notextile>
[f742aa3](https://github.com/scala/scala/commit/f742aa3) | <notextile>SI-5710 has fixed itself</notextile>
[3ae2653](https://github.com/scala/scala/commit/3ae2653) | <notextile>reifier is now aware of SI-7235</notextile>
[7e52fb9](https://github.com/scala/scala/commit/7e52fb9) | <notextile>SI-7226 Fix inference regression caused by TypeVar equality.</notextile>
[292435f](https://github.com/scala/scala/commit/292435f) | <notextile>Fix SI-7224.</notextile>
[cab4762](https://github.com/scala/scala/commit/cab4762) | <notextile>Update sbt.latest.version to sbt's latest version.</notextile>
[34faa0d](https://github.com/scala/scala/commit/34faa0d) | <notextile>SI-6601 Close access loophole for value class constructors</notextile>
[089cad8](https://github.com/scala/scala/commit/089cad8) | <notextile>Warn about locally identifiable init order issues.</notextile>
[e39e001](https://github.com/scala/scala/commit/e39e001) | <notextile>update eclipse projects (partest, repl &amp; scaladoc)</notextile>
[3a30af1](https://github.com/scala/scala/commit/3a30af1) | <notextile>SI-874 actual JSR-223 implementation</notextile>
[3e8f8dd](https://github.com/scala/scala/commit/3e8f8dd) | <notextile>SI-874 reflect.io improvements</notextile>
[f691997](https://github.com/scala/scala/commit/f691997) | <notextile>Add eclipse projects for interactive, scaladoc.</notextile>
[1291da3](https://github.com/scala/scala/commit/1291da3) | <notextile>IntellIiJ module definitions for scaladoc, interactive and continuations-*.</notextile>
[a67b626](https://github.com/scala/scala/commit/a67b626) | <notextile>Close after slurping (fixes SI-7244)</notextile>
[fdf2533](https://github.com/scala/scala/commit/fdf2533) | <notextile>a typo corrected</notextile>
[48cc8b4](https://github.com/scala/scala/commit/48cc8b4) | <notextile>Modularized the repl.</notextile>
[e3b36c7](https://github.com/scala/scala/commit/e3b36c7) | <notextile>Carve up Types.scala</notextile>
[523eb34](https://github.com/scala/scala/commit/523eb34) | <notextile>Deprecated custom ant task 'Same'.</notextile>
[2352814](https://github.com/scala/scala/commit/2352814) | <notextile>Eliminated all forInteractive/forScaladoc uses.</notextile>
[e01c7ef](https://github.com/scala/scala/commit/e01c7ef) | <notextile>Moved interactive code into src/interactive.</notextile>
[3d5c675](https://github.com/scala/scala/commit/3d5c675) | <notextile>Moved scaladoc code into src/scaladoc.</notextile>
[9604770](https://github.com/scala/scala/commit/9604770) | <notextile>Give interactive tests their own target.</notextile>
[2fd8e72](https://github.com/scala/scala/commit/2fd8e72) | <notextile>Give partest its own classpath in build.xml.</notextile>
[1dd88d9](https://github.com/scala/scala/commit/1dd88d9) | <notextile>Teach partest the magic of abstraction.</notextile>
[e83defa](https://github.com/scala/scala/commit/e83defa) | <notextile>Moved interactive sources into separate directory.</notextile>
[c6ca941](https://github.com/scala/scala/commit/c6ca941) | <notextile>Moved scaladoc sources into separate directory.</notextile>
[9094822](https://github.com/scala/scala/commit/9094822) | <notextile>Enabling commit for interactive/scaladoc modules.</notextile>
[960f984](https://github.com/scala/scala/commit/960f984) | <notextile>Bring some sanity to the stability test.</notextile>
[9f6b7bc](https://github.com/scala/scala/commit/9f6b7bc) | <notextile>SI-7006 Fix the unreachable test</notextile>
[fd21898](https://github.com/scala/scala/commit/fd21898) | <notextile>SI-7231 Fix assertion when adapting Null type to Array type</notextile>
[04eac5c](https://github.com/scala/scala/commit/04eac5c) | <notextile>SI-7006 Cleanup from code review</notextile>
[b50a0d8](https://github.com/scala/scala/commit/b50a0d8) | <notextile>SI-7006 Prevent unreachable blocks in GenICode</notextile>
[53c499b](https://github.com/scala/scala/commit/53c499b) | <notextile>SI-7109 SI-7153 Generalize the API to get docComments: allow to force docTrees f</notextile>
[2cf6c5d](https://github.com/scala/scala/commit/2cf6c5d) | <notextile>[port] SI-7183 Disable unreachability for withFilter matches.</notextile>
[5b7cfe3](https://github.com/scala/scala/commit/5b7cfe3) | <notextile>better names for components of MatchTranslator</notextile>
[0a3219b](https://github.com/scala/scala/commit/0a3219b) | <notextile>move sat solving to separate file</notextile>
[ad69835](https://github.com/scala/scala/commit/ad69835) | <notextile>SI-7215 Fix transpose of an empty Array[Array[T]].</notextile>
[1117be8](https://github.com/scala/scala/commit/1117be8) | <notextile>SI-7190 macros no longer give rise to bridges</notextile>
[b775d8f](https://github.com/scala/scala/commit/b775d8f) | <notextile>test.done again checks bin compat (using mima 0.1.5)</notextile>
[09130d5](https://github.com/scala/scala/commit/09130d5) | <notextile>[nomaster] SI-7195 minor version mustn't introduce warnings</notextile>
[0303e64](https://github.com/scala/scala/commit/0303e64) | <notextile>SI-7183 Disable unreachability for withFilter matches.</notextile>
[acd74ca](https://github.com/scala/scala/commit/acd74ca) | <notextile>SI-7214 outer check based on dealiased pattern type.</notextile>
[204b2b4](https://github.com/scala/scala/commit/204b2b4) | <notextile>SI-7126 Eliminate a source of malformed types.</notextile>
[696dcdf](https://github.com/scala/scala/commit/696dcdf) | <notextile>SI-7126 Account for the alias types that don't dealias.</notextile>
[387fbf4](https://github.com/scala/scala/commit/387fbf4) | <notextile>SI-7185 Avoid NPE in TreeInfo.isExprSafeToInline</notextile>
[ebaa34e](https://github.com/scala/scala/commit/ebaa34e) | <notextile>simplify dependencies between patmat components, remove self types</notextile>
[0420b2d](https://github.com/scala/scala/commit/0420b2d) | <notextile>Revert SI-6240 synchronization for runtime reflection</notextile>
[c46bc25](https://github.com/scala/scala/commit/c46bc25) | <notextile>Tone down a soft-warning to only show under -Ydebug.</notextile>
[387b259](https://github.com/scala/scala/commit/387b259) | <notextile>runtime reflection: death from thousand threads</notextile>
[73d079f](https://github.com/scala/scala/commit/73d079f) | <notextile>removes the assertion in missingHook</notextile>
[f4dd56c](https://github.com/scala/scala/commit/f4dd56c) | <notextile>synchronizes names</notextile>
[dd148de](https://github.com/scala/scala/commit/dd148de) | <notextile>synchronizes pendingVolatiles</notextile>
[4cbb935](https://github.com/scala/scala/commit/4cbb935) | <notextile>synchronizes toolboxes</notextile>
[07bcb61](https://github.com/scala/scala/commit/07bcb61) | <notextile>SI-7045 reflection now auto-initializes selfType</notextile>
[bebd62d](https://github.com/scala/scala/commit/bebd62d) | <notextile>optimizes Scala reflection GIL</notextile>
[735634f](https://github.com/scala/scala/commit/735634f) | <notextile>initializes lazy vals and inner objects in advance</notextile>
[5b37cfb](https://github.com/scala/scala/commit/5b37cfb) | <notextile>introduces GIL to Scala reflection</notextile>
[981da8e](https://github.com/scala/scala/commit/981da8e) | <notextile>cleans up initialization of runtime reflection</notextile>
[b2c2493](https://github.com/scala/scala/commit/b2c2493) | <notextile>reflection no longer uses atPhase and friends</notextile>
[a9dca51](https://github.com/scala/scala/commit/a9dca51) | <notextile>synchronizes symbols</notextile>
[0262941](https://github.com/scala/scala/commit/0262941) | <notextile>removes the crazy extraneous log</notextile>
[21d5d38](https://github.com/scala/scala/commit/21d5d38) | <notextile>moves Symbol#SymbolKind to Symbols</notextile>
[3f0224c](https://github.com/scala/scala/commit/3f0224c) | <notextile>Add option to disable optimization</notextile>
[c8fbba0](https://github.com/scala/scala/commit/c8fbba0) | <notextile>Check named-args-for-clarity incur no extra bytecode</notextile>
[9179c88](https://github.com/scala/scala/commit/9179c88) | <notextile>Name boolean arguments in src/library.</notextile>
[a8d60a6](https://github.com/scala/scala/commit/a8d60a6) | <notextile>Name boolean arguments in src/reflect.</notextile>
[fff0f50](https://github.com/scala/scala/commit/fff0f50) | <notextile>Name boolean arguments in src/compiler.</notextile>
[6898c9f](https://github.com/scala/scala/commit/6898c9f) | <notextile>Eliminated separate RangePositions trait.</notextile>
[dc1cd96](https://github.com/scala/scala/commit/dc1cd96) | <notextile>Disentangled RangePositions from interactive.</notextile>
[e3b7b5f](https://github.com/scala/scala/commit/e3b7b5f) | <notextile>Require firstKey and lastKey on IntMap to be tail recursive.</notextile>
[9a82fc0](https://github.com/scala/scala/commit/9a82fc0) | <notextile>Remove unused symbols and imports from the library.</notextile>
[1666f6e](https://github.com/scala/scala/commit/1666f6e) | <notextile>Since the problem in SI-6758 is fixed, it's ok to move checking for unused impor</notextile>
[1b9c2f5](https://github.com/scala/scala/commit/1b9c2f5) | <notextile>SI-7132 - don't discard Unit type in interpreter</notextile>
[3b07135](https://github.com/scala/scala/commit/3b07135) | <notextile>SI-6816 Deprecate -Yeta-expand-keeps-star</notextile>
[7edeb24](https://github.com/scala/scala/commit/7edeb24) | <notextile>Cleanup in isHKSubType0.</notextile>
[c10df64](https://github.com/scala/scala/commit/c10df64) | <notextile>Add some logging to sinful typevar methods.</notextile>
[305a987](https://github.com/scala/scala/commit/305a987) | <notextile>Added methods debuglogResult and devWarningResult.</notextile>
[1bde987](https://github.com/scala/scala/commit/1bde987) | <notextile>Always at least log devWarnings.</notextile>
[c048669](https://github.com/scala/scala/commit/c048669) | <notextile>Renamed type param to be consistent with convention.</notextile>
[6f5e525](https://github.com/scala/scala/commit/6f5e525) | <notextile>Establishes what's up with widening in asSeenFrom.</notextile>
[e1ab60e](https://github.com/scala/scala/commit/e1ab60e) | <notextile>Simplified correspondingTypeArgument based on reviewer feedback.</notextile>
[b457b6c](https://github.com/scala/scala/commit/b457b6c) | <notextile>Refactors AsSeenFromMap to expose extension point.</notextile>
[1976d9f](https://github.com/scala/scala/commit/1976d9f) | <notextile>fixes the test for SI-7112</notextile>
[de1f749](https://github.com/scala/scala/commit/de1f749) | <notextile>SI-7180 Fix regression in implicit scope of HK type alias.</notextile>
[26be206](https://github.com/scala/scala/commit/26be206) | <notextile>Additional test case for Lukas' fix to annotated originals.</notextile>
[dafebd0](https://github.com/scala/scala/commit/dafebd0) | <notextile>Fix typing idempotency bug with Annotated trees</notextile>
[19649d4](https://github.com/scala/scala/commit/19649d4) | <notextile>SI-6576 Workaround / diagnostic for IDE NPE.</notextile>
[bb067d3](https://github.com/scala/scala/commit/bb067d3) | <notextile>SI-7146 - Fixing checkinit bug in ExecutionContextImpl and adding test</notextile>
[348ff4b](https://github.com/scala/scala/commit/348ff4b) | <notextile>SI-7128 Fix regression in copyToArray for empty arrays</notextile>
[3e7db2d](https://github.com/scala/scala/commit/3e7db2d) | <notextile>adds some comments to resetAttrs</notextile>
[e2a17d9](https://github.com/scala/scala/commit/e2a17d9) | <notextile>resetAttrs now always erases This.tpe</notextile>
[4f1bfec](https://github.com/scala/scala/commit/4f1bfec) | <notextile>Fix SI-7107: scala now thinks every exception is polymorphic</notextile>
[8187deb](https://github.com/scala/scala/commit/8187deb) | <notextile>SI-7074 Fix xml attribute sorting</notextile>
[89be691](https://github.com/scala/scala/commit/89be691) | <notextile>fixes the test for SI-7112</notextile>
[d49532f](https://github.com/scala/scala/commit/d49532f) | <notextile>check scala-swing for binary compatibility</notextile>
[dad8796](https://github.com/scala/scala/commit/dad8796) | <notextile>[nomaster] Revert &quot;Added a Swing ColorChooser wrapper&quot;</notextile>
[b4f277a](https://github.com/scala/scala/commit/b4f277a) | <notextile>[nomaster] Revert &quot;Added a Swing PopupMenu wrapper&quot;</notextile>
[85b63b8](https://github.com/scala/scala/commit/85b63b8) | <notextile>[nomaster] Revert &quot;SI-6548 reflection now correctly enters jinners&quot;</notextile>
[2f9b708](https://github.com/scala/scala/commit/2f9b708) | <notextile>[nomaster] inline importPrivateWithinFromJavaFlags into SymbolTable</notextile>
[ddfe3a0](https://github.com/scala/scala/commit/ddfe3a0) | <notextile>[nomaster] Revert &quot;cosmetic renamings in runtime reflection&quot;</notextile>
[9194b37](https://github.com/scala/scala/commit/9194b37) | <notextile>[nomaster] refactor AdaptedForkJoinTask, uncaughtExceptionHandler</notextile>
[56cbf23](https://github.com/scala/scala/commit/56cbf23) | <notextile>[nomaster] can't add new class BatchingExecutor</notextile>
[549a1fe](https://github.com/scala/scala/commit/549a1fe) | <notextile>[nomaster] bring back SerializeStart from fa3b8040eb</notextile>
[5d487f1](https://github.com/scala/scala/commit/5d487f1) | <notextile>[nomaster] duplicate tailImpl as a private method</notextile>
[8b4af71](https://github.com/scala/scala/commit/8b4af71) | <notextile>[nomaster] Revert &quot;SI-4664 Make scala.util.Random Serializable&quot;</notextile>
[f9550c6](https://github.com/scala/scala/commit/f9550c6) | <notextile>[nomaster] Revert &quot;Fixes SI-6521, overrides Range#head to be faster&quot;</notextile>
[af0da51](https://github.com/scala/scala/commit/af0da51) | <notextile>[nomaster] run mima both ways, filter out failures</notextile>
[bfd7863](https://github.com/scala/scala/commit/bfd7863) | <notextile>SI-7159 Distinguish between assignability and sub typing in TypeKinds</notextile>
[4124a09](https://github.com/scala/scala/commit/4124a09) | <notextile>SI-7159 Remove erroneous INT &lt;:&lt; LONG in TypeKinds</notextile>
[04b147e](https://github.com/scala/scala/commit/04b147e) | <notextile>SI-7159 Prepare to remove erroneous INT &lt;:&lt; LONG in TypeKinds</notextile>
[208d6ad](https://github.com/scala/scala/commit/208d6ad) | <notextile>SI-7159 Remove unreachable cases in GenICode#adapt</notextile>
[910e5a0](https://github.com/scala/scala/commit/910e5a0) | <notextile>Reconcile definitions of stability.</notextile>
[3e0fbc0](https://github.com/scala/scala/commit/3e0fbc0) | <notextile>relax time constraint in duration-tck.scala (for Windows VMs)</notextile>
[5f3cd86](https://github.com/scala/scala/commit/5f3cd86) | <notextile>SI-7181 Eliminate unnecessary duplication of finally blocks</notextile>
[28a7161](https://github.com/scala/scala/commit/28a7161) | <notextile>SI-7181 Prepare to remove duplicated finally blocks</notextile>
[4f2d784](https://github.com/scala/scala/commit/4f2d784) | <notextile>SI-7006 Simplify jump-only block destination determination</notextile>
[e9f6511](https://github.com/scala/scala/commit/e9f6511) | <notextile>SI-7006 Eliminate unreachable blocks</notextile>
[0d2e19c](https://github.com/scala/scala/commit/0d2e19c) | <notextile>SI-7006 Recognize more jump only blocks</notextile>
[022c57f](https://github.com/scala/scala/commit/022c57f) | <notextile>SI-7006 Improve jump-elision code in GenASM</notextile>
[d6527d5](https://github.com/scala/scala/commit/d6527d5) | <notextile>Address some Scaladocrot</notextile>
[6d94b35](https://github.com/scala/scala/commit/6d94b35) | <notextile>Modernize legacy backquotes in comments.</notextile>
[256e468](https://github.com/scala/scala/commit/256e468) | <notextile>Remove redundant explicit returns.</notextile>
[bc99770](https://github.com/scala/scala/commit/bc99770) | <notextile>Don't wrap an array just to get its length.</notextile>
[ee03302](https://github.com/scala/scala/commit/ee03302) | <notextile>Remove redundant 'val' from case class params.</notextile>
[54065a7](https://github.com/scala/scala/commit/54065a7) | <notextile>Fix two malformed format strings.</notextile>
[41703df](https://github.com/scala/scala/commit/41703df) | <notextile>More explicit empty paren lists in method calls.</notextile>
[6e450ed](https://github.com/scala/scala/commit/6e450ed) | <notextile>Reorder to avoid code appearing like a forward reference.</notextile>
[8cdf3b3](https://github.com/scala/scala/commit/8cdf3b3) | <notextile>Banish needless semicolons.</notextile>
[e7ab2f4](https://github.com/scala/scala/commit/e7ab2f4) | <notextile>Be explicit about empty param list calls.</notextile>
[d1b16c4](https://github.com/scala/scala/commit/d1b16c4) | <notextile>Don't override empty-paren methods as paren-less.</notextile>
[0ecba21](https://github.com/scala/scala/commit/0ecba21) | <notextile>fixes the test for SI-7112</notextile>
[c11cf0b](https://github.com/scala/scala/commit/c11cf0b) | <notextile>SI-7120 Erasure must honor typeref prefixes</notextile>
[3d5758c](https://github.com/scala/scala/commit/3d5758c) | <notextile>SI-7171 Consider prefix when assessing type finality.</notextile>
[18a2ba2](https://github.com/scala/scala/commit/18a2ba2) | <notextile>please ant with filenames, add comments</notextile>
[6a7078c](https://github.com/scala/scala/commit/6a7078c) | <notextile>remove unused imports</notextile>
[b20e288](https://github.com/scala/scala/commit/b20e288) | <notextile>Fixed error in reflection API docs about linearization order on method baseClass</notextile>
[d2a36ab](https://github.com/scala/scala/commit/d2a36ab) | <notextile>Shadowed Implict typo (fixes no issue)</notextile>
[62fcd3d](https://github.com/scala/scala/commit/62fcd3d) | <notextile>SI-7015 Cleanup from review of null duplication</notextile>
[1b6661b](https://github.com/scala/scala/commit/1b6661b) | <notextile>SI-7015 Removes redundant aconst_null; pop; aconst_null creation</notextile>
[7fdc873](https://github.com/scala/scala/commit/7fdc873) | <notextile>[refactor] move some logic-related code</notextile>
[c930a85](https://github.com/scala/scala/commit/c930a85) | <notextile>[refactor] better name for symbolicCase</notextile>
[76fc728](https://github.com/scala/scala/commit/76fc728) | <notextile>[refactor] make hash-consing more robust</notextile>
[712a921](https://github.com/scala/scala/commit/712a921) | <notextile>drop Cond in favor of Prop</notextile>
[1b47248](https://github.com/scala/scala/commit/1b47248) | <notextile>[refactor] prepare migration from Cond to Prop</notextile>
[647a760](https://github.com/scala/scala/commit/647a760) | <notextile>[refactor] type analysis consolidation</notextile>
[e14846b](https://github.com/scala/scala/commit/e14846b) | <notextile>[refactor] move PatternMatching.scala to transform.patmat</notextile>
[f5ed914](https://github.com/scala/scala/commit/f5ed914) | <notextile>re-align 2.10.x's pattern matcher with master's</notextile>
[8a2cebe](https://github.com/scala/scala/commit/8a2cebe) | <notextile>SI-6807 Deprecating the Actors library.</notextile>
[68f62d7](https://github.com/scala/scala/commit/68f62d7) | <notextile>SI-7164 - Removing NotImplementedError as Fatal from s.u.c.NonFatal</notextile>
[39249d5](https://github.com/scala/scala/commit/39249d5) | <notextile>bump build number to 2.10.2</notextile>
[3c22436](https://github.com/scala/scala/commit/3c22436) | <notextile>Additional test case for Lukas' fix to annotated originals.</notextile>
[8206e26](https://github.com/scala/scala/commit/8206e26) | <notextile>Fix typing idempotency bug with Annotated trees</notextile>
[c8ab5b3](https://github.com/scala/scala/commit/c8ab5b3) | <notextile>Fix SI-7130: Memory leaked caused by Statistics</notextile>
[4df9e20](https://github.com/scala/scala/commit/4df9e20) | <notextile>SI-7143 Fix scanner docComment: docBuffer and docPos are initialized in differen</notextile>
[fd68fe6](https://github.com/scala/scala/commit/fd68fe6) | <notextile>SI-7134: don't require doc.Settings in base api of scaladoc.</notextile>
[c10b7b6](https://github.com/scala/scala/commit/c10b7b6) | <notextile>unit test ide-t1000567 exercises SI-5063, aka #1000567.</notextile>
[5379eba](https://github.com/scala/scala/commit/5379eba) | <notextile>Removing disabled, unneeded futures tests</notextile>
[9f25a2a](https://github.com/scala/scala/commit/9f25a2a) | <notextile>make Future scaladoc examples up-to-date and compilable</notextile>
[9d5d55b](https://github.com/scala/scala/commit/9d5d55b) | <notextile>SI-5744 evidence params are now SYNTHETIC</notextile>
[6a7d793](https://github.com/scala/scala/commit/6a7d793) | <notextile>SI-7091 Don't try to put a protected accessor in a package.</notextile>
[2e8ede5](https://github.com/scala/scala/commit/2e8ede5) | <notextile>SI-7091 Add a diagnostic for the &quot;no acc def buf&quot; error.</notextile>
[0eff6cd](https://github.com/scala/scala/commit/0eff6cd) | <notextile>Fix and optimization in overriding logic.</notextile>
[6879451](https://github.com/scala/scala/commit/6879451) | <notextile>Extracted abstract implicit vals from Types.</notextile>
[d8ba6af](https://github.com/scala/scala/commit/d8ba6af) | <notextile>Boxing cleanup: erasure, post-erasure, value classes.</notextile>
[07ba1f8](https://github.com/scala/scala/commit/07ba1f8) | <notextile>SI-6642 Code cleanup from review of iteratorFrom</notextile>
[3903779](https://github.com/scala/scala/commit/3903779) | <notextile>SI-6642 Refactor mutable.TreeSet to use RedBlackTree instead of AVL</notextile>
[62bc99d](https://github.com/scala/scala/commit/62bc99d) | <notextile>SI-6642 Adds iteratorFrom, keysIteratorFrom, and valuesIteratorFrom</notextile>
[a0b1db4](https://github.com/scala/scala/commit/a0b1db4) | <notextile>SI-6642 Code cleanup on RedBlackTree#TreeIterator</notextile>
[de2410b](https://github.com/scala/scala/commit/de2410b) | <notextile>silences t6323a</notextile>
[673cc83](https://github.com/scala/scala/commit/673cc83) | <notextile>SI-6514 Avoid spurious dead code warnings</notextile>
[ef6095a](https://github.com/scala/scala/commit/ef6095a) | <notextile>Tolerate symbol sharing between accessor/field.</notextile>
[451cab9](https://github.com/scala/scala/commit/451cab9) | <notextile>SI-6225 Fix import of inherited package object implicits</notextile>
[c049d66](https://github.com/scala/scala/commit/c049d66) | <notextile>SI-6935 Added readResolve in BoxedUnit When deserializing Unit, it would return </notextile>
[7b425bf](https://github.com/scala/scala/commit/7b425bf) | <notextile>SI-6370 changed ListMap apply0 method to produce correct error message when a ke</notextile>
[6424907](https://github.com/scala/scala/commit/6424907) | <notextile>SI-6158 Restore compile error output under partest --show-log</notextile>
[37824d3](https://github.com/scala/scala/commit/37824d3) | <notextile>Update src/library/scala/sys/process/package.scala</notextile>
[c26cc53](https://github.com/scala/scala/commit/c26cc53) | <notextile>SI-6355, weakend implementation restriction on applyDynamic.</notextile>
[c26a8db](https://github.com/scala/scala/commit/c26a8db) | <notextile>Maintenance of Predef.</notextile>
[42744d7](https://github.com/scala/scala/commit/42744d7) | <notextile>Application is deprecated. Replaced with App</notextile>
[8eadc6d](https://github.com/scala/scala/commit/8eadc6d) | <notextile>Update src/library/scala/sys/process/ProcessBuilder.scala</notextile>
[13caa49](https://github.com/scala/scala/commit/13caa49) | <notextile>Fix for paramaccessor alias regression.</notextile>
[22341e7](https://github.com/scala/scala/commit/22341e7) | <notextile>Expanded bytecode testing code.</notextile>
[57c0e63](https://github.com/scala/scala/commit/57c0e63) | <notextile>accommodates pull request feedback</notextile>
[ce867c7](https://github.com/scala/scala/commit/ce867c7) | <notextile>term and type reftrees are now reified uniformly</notextile>
[09ef873](https://github.com/scala/scala/commit/09ef873) | <notextile>SI-6591 Reify and path-dependent types</notextile>
[e0068b9](https://github.com/scala/scala/commit/e0068b9) | <notextile>SI-5675 Discard duplicate feature warnings at a position</notextile>
[5258b63](https://github.com/scala/scala/commit/5258b63) | <notextile>SI-7096 SubstSymMap copies trees before modifying their symbols</notextile>
[6052e19](https://github.com/scala/scala/commit/6052e19) | <notextile>[backport] SI-6478 Fixing JavaTokenParser ident</notextile>
[96b0eff](https://github.com/scala/scala/commit/96b0eff) | <notextile>SI-5824 Fix crashes in reify with _*</notextile>
[fa3b804](https://github.com/scala/scala/commit/fa3b804) | <notextile>SI-6961 no structural sharing in list serialization</notextile>
[dfbaaa1](https://github.com/scala/scala/commit/dfbaaa1) | <notextile>SI-6187 Make partial functions re-typable</notextile>
[55c9b9c](https://github.com/scala/scala/commit/55c9b9c) | <notextile>SI-6146 More accurate prefixes for sealed subtypes.</notextile>
[1426fec](https://github.com/scala/scala/commit/1426fec) | <notextile>SI-7070 Turn restriction on companions in pkg objs into warning</notextile>
[a0ee6e9](https://github.com/scala/scala/commit/a0ee6e9) | <notextile>SI-5082 Cycle avoidance between case companions</notextile>
[a53e150](https://github.com/scala/scala/commit/a53e150) | <notextile>SI-7100 Fixed infinite recursion in duplicators</notextile>
[0d68a87](https://github.com/scala/scala/commit/0d68a87) | <notextile>SI-6113 typeOf now works for type lambdas</notextile>
[79e774f](https://github.com/scala/scala/commit/79e774f) | <notextile>SI-7026: parseTree should never return a typed one</notextile>
[f784fbf](https://github.com/scala/scala/commit/f784fbf) | <notextile>Add a request to presentation compiler to fetch doc comment information. Refacto</notextile>
[81fa831](https://github.com/scala/scala/commit/81fa831) | <notextile>Class symbols can't be contravariant.</notextile>
[275b341](https://github.com/scala/scala/commit/275b341) | <notextile>SI-6666 Catch VerifyErrors in the making in early defs.</notextile>
[66fa1f2](https://github.com/scala/scala/commit/66fa1f2) | <notextile>Broader checks for poisonous this references.</notextile>
[4c34280](https://github.com/scala/scala/commit/4c34280) | <notextile>Add a test case from the comments of SI-6666.</notextile>
[fd61254](https://github.com/scala/scala/commit/fd61254) | <notextile>SI-6666 Account for nesting in setting INCONSTRUCTOR</notextile>
[ee24807](https://github.com/scala/scala/commit/ee24807) | <notextile>Move a test from pos to run to highlight bytecode deficiencies.</notextile>
[b579a42](https://github.com/scala/scala/commit/b579a42) | <notextile>SI-6888 Loosen criteria for $outer search.</notextile>
[b43ae58](https://github.com/scala/scala/commit/b43ae58) | <notextile>introduces an exhaustive java-to-scala test</notextile>
[02ed5fb](https://github.com/scala/scala/commit/02ed5fb) | <notextile>SI-6989 privateWithin is now populated in reflect</notextile>
[1f838ed](https://github.com/scala/scala/commit/1f838ed) | <notextile>[nomaster] verifies compat with 2.10.0</notextile>
[c9a0e36](https://github.com/scala/scala/commit/c9a0e36) | <notextile>[nomaster] Revert &quot;refactors handling of parent types&quot;</notextile>
[570f4a4](https://github.com/scala/scala/commit/570f4a4) | <notextile>[nomaster] Revert &quot;introduces global.pendingSuperCall&quot;</notextile>
[c720531](https://github.com/scala/scala/commit/c720531) | <notextile>[nomaster] Revert &quot;DummyTree =&gt; CannotHaveAttrs&quot;</notextile>
[4d7982b](https://github.com/scala/scala/commit/4d7982b) | <notextile>[nomaster] Revert &quot;more ListOfNil =&gt; Nil&quot;</notextile>
[4ef2a49](https://github.com/scala/scala/commit/4ef2a49) | <notextile>[nomaster] Revert &quot;s/SuperCallArgs/SuperArgs/&quot;</notextile>
[0e0c851](https://github.com/scala/scala/commit/0e0c851) | <notextile>[nomaster] revives BuildUtils.emptyValDef</notextile>
[1093ce0](https://github.com/scala/scala/commit/1093ce0) | <notextile>[nomaster] removes Tree.canHaveAttrs</notextile>
[7bf0ecc](https://github.com/scala/scala/commit/7bf0ecc) | <notextile>[nomaster] doesn't touch NonemptyAttachments</notextile>
[015ff51](https://github.com/scala/scala/commit/015ff51) | <notextile>[nomaster] Revert &quot;SI-5017 Poor performance of :+ operator on Arrays&quot;</notextile>
[87d52db](https://github.com/scala/scala/commit/87d52db) | <notextile>[nomaster] SI-6773 Makes the SI-6150 changes binary compatible with 2.10</notextile>
[e5c0e59](https://github.com/scala/scala/commit/e5c0e59) | <notextile>SI-7060 More conservative dead code elim marking</notextile>
[8ae0e2a](https://github.com/scala/scala/commit/8ae0e2a) | <notextile>SI-7039 unapplySeq result type independent of subpattern count</notextile>
[0574172](https://github.com/scala/scala/commit/0574172) | <notextile>SI-5833 Fixes tail-of-Nil problem in RefinedType#normalizeImpl</notextile>
[b67f8e5](https://github.com/scala/scala/commit/b67f8e5) | <notextile>[nomerge] SI-6667 Demote a new ambiguity error to a lint warning.</notextile>
[0e8d8c7](https://github.com/scala/scala/commit/0e8d8c7) | <notextile>SI-6017 Scaladoc: Show all letters without dangling links</notextile>
[3f0bce9](https://github.com/scala/scala/commit/3f0bce9) | <notextile>SI-6017 Generate Scaladoc's index links in Scala side</notextile>
[a6137d1](https://github.com/scala/scala/commit/a6137d1) | <notextile>Fix SI-6578. Deprecated `askType` because of possible race conditions in type ch</notextile>
[02dd4c9](https://github.com/scala/scala/commit/02dd4c9) | <notextile>reflecting @throws defined in Scala code</notextile>
[0bcdf71](https://github.com/scala/scala/commit/0bcdf71) | <notextile>pullrequest feedback</notextile>
[adf50a3](https://github.com/scala/scala/commit/adf50a3) | <notextile>evicts javac-artifacts.jar</notextile>
[f1701f7](https://github.com/scala/scala/commit/f1701f7) | <notextile>SI-7008 @throws annotations are now populated in reflect</notextile>
[3af838c](https://github.com/scala/scala/commit/3af838c) | <notextile>SI-7033 Be symful when creating factory methods.</notextile>
[bc01614](https://github.com/scala/scala/commit/bc01614) | <notextile>Revert &quot;SI-6422: add missing Fractional and Integral alias in scala package&quot;</notextile>
[4fda83f](https://github.com/scala/scala/commit/4fda83f) | <notextile>SI-5313 Minor code cleanup for store clobbering</notextile>
[c7d489e](https://github.com/scala/scala/commit/c7d489e) | <notextile>SI-5313 Test clobbers on the back edge of a loop</notextile>
[9b4fa83](https://github.com/scala/scala/commit/9b4fa83) | <notextile>SI-5313 Eliminate more stores by replacing clobbers with null stores</notextile>
[eab2884](https://github.com/scala/scala/commit/eab2884) | <notextile>SI-5313 Do not eliminate stores that potentially wipe referenes</notextile>
[2403d1d](https://github.com/scala/scala/commit/2403d1d) | <notextile>SI-7046 reflection now auto-initializes knownDirectSubclasses</notextile>
[374c912](https://github.com/scala/scala/commit/374c912) | <notextile>SI-7022 Additional test case for value class w. bounds</notextile>
[4ed8836](https://github.com/scala/scala/commit/4ed8836) | <notextile>[backport] SI-6482, lost bounds in extension methods.</notextile>
[b2117cf](https://github.com/scala/scala/commit/b2117cf) | <notextile>SI-6941 tests</notextile>
[b92396b](https://github.com/scala/scala/commit/b92396b) | <notextile>SI-6686 drop valdef unused in flatMapCond's block</notextile>
[b47bb0f](https://github.com/scala/scala/commit/b47bb0f) | <notextile>no type test if static type &lt;:&lt; primitive value class</notextile>
[494ba94](https://github.com/scala/scala/commit/494ba94) | <notextile>don't store subpats bound to underscore</notextile>
[71ea3e8](https://github.com/scala/scala/commit/71ea3e8) | <notextile>no null check for type-tested unapply arg</notextile>
[62b37dd](https://github.com/scala/scala/commit/62b37dd) | <notextile>refactor: prepare null check redundancy analysis</notextile>
[415becd](https://github.com/scala/scala/commit/415becd) | <notextile>support testing bytecode similarity in ByteCodeTest</notextile>
[a07555f](https://github.com/scala/scala/commit/a07555f) | <notextile>bytecode diffing support in ByteCodeTest</notextile>
[d71f59e](https://github.com/scala/scala/commit/d71f59e) | <notextile>SI-4976 Scaladoc: Add a source link to package objects</notextile>
[5275bae](https://github.com/scala/scala/commit/5275bae) | <notextile>SI-7029 - Make test more robust</notextile>
[3f78bee](https://github.com/scala/scala/commit/3f78bee) | <notextile>SI-7029 - Makes sure that uncaught exceptions are propagated to the UEH for the </notextile>
[2989258](https://github.com/scala/scala/commit/2989258) | <notextile>SI-6539 moves @compileTimeOnly away from scala-reflect</notextile>
[8bd03e0](https://github.com/scala/scala/commit/8bd03e0) | <notextile>SI-5151 - Add firstKey and lastKey to LongMap.</notextile>
[108a1f7](https://github.com/scala/scala/commit/108a1f7) | <notextile>SI-6773 Changes IndexSeqFactory to be &quot;since 2.11&quot;</notextile>
[f3cdf14](https://github.com/scala/scala/commit/f3cdf14) | <notextile>Fix context for type checking early initializers</notextile>
[7e836f8](https://github.com/scala/scala/commit/7e836f8) | <notextile>Analyzer Plugins</notextile>
[b74c33e](https://github.com/scala/scala/commit/b74c33e) | <notextile>SI-1803, plus documentation and cleanups in Namers, mainly in typeSig</notextile>
[a06d31f](https://github.com/scala/scala/commit/a06d31f) | <notextile>Keep annotations when computing lubs</notextile>
[6697c28](https://github.com/scala/scala/commit/6697c28) | <notextile>Allow for Function treess with refined types in UnCurry.</notextile>
[59918ee](https://github.com/scala/scala/commit/59918ee) | <notextile>case module toString is synthetic</notextile>
[91c9c42](https://github.com/scala/scala/commit/91c9c42) | <notextile>replace symbols correctly when subtyping dependent types</notextile>
[71fb0b8](https://github.com/scala/scala/commit/71fb0b8) | <notextile>Removed -Ymacro-no-expand.</notextile>
[e3d9a08](https://github.com/scala/scala/commit/e3d9a08) | <notextile>Cleaning up after brutal merge of 2.10.x into master.</notextile>
[941c569](https://github.com/scala/scala/commit/941c569) | <notextile>SI-6812 scaladoc can opt out of expanding macros</notextile>
[11ac963](https://github.com/scala/scala/commit/11ac963) | <notextile>[backport] Fix for SI-6206, inconsistency with apply.</notextile>
[5a2828c](https://github.com/scala/scala/commit/5a2828c) | <notextile>A test case to guide the eventual fix for SI-6601.</notextile>
[172f3f6](https://github.com/scala/scala/commit/172f3f6) | <notextile>Revert &quot;SI-6601 Publicise derived value contstructor after pickler&quot;</notextile>
[6db4db9](https://github.com/scala/scala/commit/6db4db9) | <notextile>SI-2818 Make List.foldRight always do a reverse/foldLeft flip</notextile>
[8350cd9](https://github.com/scala/scala/commit/8350cd9) | <notextile>[backport] SI-2968 Fix brace healing for `^case (class&#124;object) {`</notextile>
[1de399d](https://github.com/scala/scala/commit/1de399d) | <notextile>SI-6963 Add version to -Xmigration</notextile>
[1049435](https://github.com/scala/scala/commit/1049435) | <notextile>SI-3353 don't extract &lt;unapply-selector&gt; into named-arg local val</notextile>
[485d815](https://github.com/scala/scala/commit/485d815) | <notextile>There is no &quot;letters&quot; method in this branch</notextile>
[033b6c1](https://github.com/scala/scala/commit/033b6c1) | <notextile>Forgot to cherry-pick the .check file</notextile>
[831bffd](https://github.com/scala/scala/commit/831bffd) | <notextile>SI-6017 Scaladoc's Index should be case-sensitive</notextile>
[e36327a](https://github.com/scala/scala/commit/e36327a) | <notextile>SI-6853 changed private method remove to be tail recursive. Operations += and -=</notextile>
[ff92610](https://github.com/scala/scala/commit/ff92610) | <notextile>SI-6595, lost modifiers in early defs.</notextile>
[98534b2](https://github.com/scala/scala/commit/98534b2) | <notextile>SI-6584, Stream#distinct uses too much memory.</notextile>
[d2316df](https://github.com/scala/scala/commit/d2316df) | <notextile>SI-6426, importable _.</notextile>
[05882eb](https://github.com/scala/scala/commit/05882eb) | <notextile>SI-6072, crasher with overloaded eq.</notextile>
[d4437aa](https://github.com/scala/scala/commit/d4437aa) | <notextile>SI-5604, selections on package objects.</notextile>
[e156cd1](https://github.com/scala/scala/commit/e156cd1) | <notextile>SI-5859, inapplicable varargs.</notextile>
[f3f1e50](https://github.com/scala/scala/commit/f3f1e50) | <notextile>SI-5353, imperfect error message.</notextile>
[77ec4ef](https://github.com/scala/scala/commit/77ec4ef) | <notextile>SI-5130, precision disappearing from refinement.</notextile>
[faca7ec](https://github.com/scala/scala/commit/faca7ec) | <notextile>SI-4729, overriding java varargs in scala.</notextile>
[0990890](https://github.com/scala/scala/commit/0990890) | <notextile>SI-2418, remove restriction on final vars.</notextile>
[16eaefb](https://github.com/scala/scala/commit/16eaefb) | <notextile>SI-6572 Test case, originally fixed in a3680be.</notextile>
[0679da5](https://github.com/scala/scala/commit/0679da5) | <notextile>[backport] SI-6301 / SI-6572 specialization regressions</notextile>
[f6d90a8](https://github.com/scala/scala/commit/f6d90a8) | <notextile>[backport] SI-5378, unsoundness with type bounds in refinements.</notextile>
[5f85fe5](https://github.com/scala/scala/commit/5f85fe5) | <notextile>SI-4714 Initialize history while initializing the REPL's reader</notextile>
[243cede](https://github.com/scala/scala/commit/243cede) | <notextile>[backport] Removed restriction on final vars, SI-2418.</notextile>
[4b39be4](https://github.com/scala/scala/commit/4b39be4) | <notextile>changes the flags to not depend on partest</notextile>
[ced7411](https://github.com/scala/scala/commit/ced7411) | <notextile>the scanner is now less eager about deprecations</notextile>
[1ab7d1c](https://github.com/scala/scala/commit/1ab7d1c) | <notextile>evicts eponymous packages and objects from tests</notextile>
[fefe6cc](https://github.com/scala/scala/commit/fefe6cc) | <notextile>SI-7009: `@throws` annotation synthesized incorrectly</notextile>
[e22d801](https://github.com/scala/scala/commit/e22d801) | <notextile>Test case for SI-7009.</notextile>
[a87d409](https://github.com/scala/scala/commit/a87d409) | <notextile>SI-6968 Simple Tuple patterns aren't irrefutable</notextile>
[166fd02](https://github.com/scala/scala/commit/166fd02) | <notextile>SI-6669 Add . to the default scalap classpath</notextile>
[80a814d](https://github.com/scala/scala/commit/80a814d) | <notextile>SI-6728 Fixes crash in parser on incomplete for expression</notextile>
[8610d7e](https://github.com/scala/scala/commit/8610d7e) | <notextile>Add Bytecode test (ASM-based) to partest.</notextile>
[9afae59](https://github.com/scala/scala/commit/9afae59) | <notextile>SI-7035 Centralize case field accessor sorting.</notextile>
[eba079b](https://github.com/scala/scala/commit/eba079b) | <notextile>Optimization in AsSeenFromMap.</notextile>
[f72354c](https://github.com/scala/scala/commit/f72354c) | <notextile>Remove gratuitous var</notextile>
[6357c8d](https://github.com/scala/scala/commit/6357c8d) | <notextile>SI-6726 Further optimization of pattern analysis</notextile>
[14d8c22](https://github.com/scala/scala/commit/14d8c22) | <notextile>SI-6726 Hash consing for Pattern matching Sym-s</notextile>
[32c0a2e](https://github.com/scala/scala/commit/32c0a2e) | <notextile>SI-6726 Add benchmark used for testing pattern matcher.</notextile>
[d3f3394](https://github.com/scala/scala/commit/d3f3394) | <notextile>[backport] Fix for SI-6154, VerifyError originating in uncurry.</notextile>
[6f86583](https://github.com/scala/scala/commit/6f86583) | <notextile>SI-6516, macros comparing types with == instead of =:=.</notextile>
[cfaa3b5](https://github.com/scala/scala/commit/cfaa3b5) | <notextile>SI-6551 Expand test case into uncomfortable areas.</notextile>
[45ccdc5](https://github.com/scala/scala/commit/45ccdc5) | <notextile>SI-6651 Substitute `this` in extension method sigs</notextile>
[bffe776](https://github.com/scala/scala/commit/bffe776) | <notextile>[backport] Disabled SI-6987.</notextile>
[b8da00e](https://github.com/scala/scala/commit/b8da00e) | <notextile>[backport] SI-3577 BoundedWildcardType handling</notextile>
[fd6fe4e](https://github.com/scala/scala/commit/fd6fe4e) | <notextile>Fix access to empty package from the repl.</notextile>
[d2965f8](https://github.com/scala/scala/commit/d2965f8) | <notextile>Overhaul of tools/partest-ack.</notextile>
[c8293b7](https://github.com/scala/scala/commit/c8293b7) | <notextile>Expanded the comment on Type#normalize.</notextile>
[039b1cb](https://github.com/scala/scala/commit/039b1cb) | <notextile>Changes many calls to normalize to dealiasWiden.</notextile>
[0388a7c](https://github.com/scala/scala/commit/0388a7c) | <notextile>Renames normalize to normalizeModifiers.</notextile>
[6d669f3](https://github.com/scala/scala/commit/6d669f3) | <notextile>Pending test for SI-5459.</notextile>
[b6f898f](https://github.com/scala/scala/commit/b6f898f) | <notextile>SI-6939 Fix namespace binding (xmlns) not overriding outer binding</notextile>
[aa199b8](https://github.com/scala/scala/commit/aa199b8) | <notextile>Revert &quot;SI-6811 Misc. removals in util, testing, io, ...&quot;</notextile>
[7babdab](https://github.com/scala/scala/commit/7babdab) | <notextile>SI-6891 Fix value class + tailrec crasher.</notextile>
[cff0934](https://github.com/scala/scala/commit/cff0934) | <notextile>Ill-scoped reference checking in TreeCheckers</notextile>
[05ad682](https://github.com/scala/scala/commit/05ad682) | <notextile>Make value classes TreeCheckers friendly</notextile>
[3cbb002](https://github.com/scala/scala/commit/3cbb002) | <notextile>SI-4602 Disable unreliable test of fsc path absolutization</notextile>
[952e1bf](https://github.com/scala/scala/commit/952e1bf) | <notextile>SI-4602 Make fsc absolutize source file names</notextile>
[e0cf651](https://github.com/scala/scala/commit/e0cf651) | <notextile>SI-4733 - fsc no longer creates a single temp directory for all users.</notextile>
[0b52a51](https://github.com/scala/scala/commit/0b52a51) | <notextile>SI-6863 Fix verify error in captured var inited from expr with try/catch</notextile>
[262d7ec](https://github.com/scala/scala/commit/262d7ec) | <notextile>SI-6932 Remove Batchable trait plus minor clean-ups</notextile>
[08a74e5](https://github.com/scala/scala/commit/08a74e5) | <notextile> Fix SI-6932 by enabling linearization of callback execution for the internal ex</notextile>
[11329c3](https://github.com/scala/scala/commit/11329c3) | <notextile>SI-6443 Expand test coverage with varargs, by-name.</notextile>
[493197f](https://github.com/scala/scala/commit/493197f) | <notextile>SI-6443 Widen dependent param types in uncurry</notextile>
[62111a4](https://github.com/scala/scala/commit/62111a4) | <notextile>Update a checkfile from a recent fix.</notextile>
[a72aa94](https://github.com/scala/scala/commit/a72aa94) | <notextile>SI-7018 Fix memory leak in Attachments.</notextile>
[7c45aa5](https://github.com/scala/scala/commit/7c45aa5) | <notextile>Bumped partest MaxPermSize to 128m.</notextile>
[982633a](https://github.com/scala/scala/commit/982633a) | <notextile>SI-6556 Remove unneeded workaround in erasure.</notextile>
[373b001](https://github.com/scala/scala/commit/373b001) | <notextile>Fixed typo in ProcessBuilder scaladoc.</notextile>
[2580a51](https://github.com/scala/scala/commit/2580a51) | <notextile>Laying groundwork for a followup ticket.</notextile>
[412ad57](https://github.com/scala/scala/commit/412ad57) | <notextile>SI-4859 Retain MODULE_LOAD in dead code elim.</notextile>
[f21b1ce](https://github.com/scala/scala/commit/f21b1ce) | <notextile>SI-4859 Don't elide qualifiers when selecting nested modules.</notextile>
[eb4b065](https://github.com/scala/scala/commit/eb4b065) | <notextile>Wider use of isTopLevel</notextile>
[3813d75](https://github.com/scala/scala/commit/3813d75) | <notextile>Introduce a new Symbol test: isTopLevel.</notextile>
[61f2936](https://github.com/scala/scala/commit/61f2936) | <notextile>SI-4859 Don't rewrite CC().CC2() to new CC2</notextile>
[f01e001](https://github.com/scala/scala/commit/f01e001) | <notextile>Make sure typed isn't called with an erroneous tree.</notextile>
[3623432](https://github.com/scala/scala/commit/3623432) | <notextile>Put back a method which sbt is using.</notextile>
[e8d4b11](https://github.com/scala/scala/commit/e8d4b11) | <notextile>A very interesting checkfile update.</notextile>
[a8fe829](https://github.com/scala/scala/commit/a8fe829) | <notextile>Add PolyType to Infer#normalize.</notextile>
[46e8ece](https://github.com/scala/scala/commit/46e8ece) | <notextile>Cleaning up dummy applied types and friends.</notextile>
[901ac16](https://github.com/scala/scala/commit/901ac16) | <notextile>Removing superfluous method parameters.</notextile>
[5878099](https://github.com/scala/scala/commit/5878099) | <notextile>Renamed methods to be less ambiguous in intent.</notextile>
[e626ecd](https://github.com/scala/scala/commit/e626ecd) | <notextile>Added test for untested nested annotation restriction.</notextile>
[76bb23d](https://github.com/scala/scala/commit/76bb23d) | <notextile>SI-6083, misleading annotation error message.</notextile>
[801eab5](https://github.com/scala/scala/commit/801eab5) | <notextile>SI-5182, no position on annotation error.</notextile>
[832fc9a](https://github.com/scala/scala/commit/832fc9a) | <notextile>SI-2577, SI-6860: annotation type inference.</notextile>
[53d5df5](https://github.com/scala/scala/commit/53d5df5) | <notextile>Disabled SI-6987.</notextile>
[d592216](https://github.com/scala/scala/commit/d592216) | <notextile>SI-7011 Fix finding constructor type in captured var definitions</notextile>
[f6168b8](https://github.com/scala/scala/commit/f6168b8) | <notextile>SI-6231 Report unsupported free var capture by a trait.</notextile>
[1dab5bf](https://github.com/scala/scala/commit/1dab5bf) | <notextile>SI-6987 Tests fsc verbose output</notextile>
[e12a5b8](https://github.com/scala/scala/commit/e12a5b8) | <notextile>SI-6987 Fixes fsc compile server verbose output</notextile>
[1a7de43](https://github.com/scala/scala/commit/1a7de43) | <notextile>SI-6666 Restrict hidden `this` access in self/super calls.</notextile>
[cbd0205](https://github.com/scala/scala/commit/cbd0205) | <notextile>SI-6902 Check unreachability under @unchecked</notextile>
[8a74b7b](https://github.com/scala/scala/commit/8a74b7b) | <notextile>Closes SI-6952: add correct error positions for Dynamic feature check.</notextile>
[0d01cc1](https://github.com/scala/scala/commit/0d01cc1) | <notextile>SI-6969, mishandling of SoftReferences in method cache.</notextile>
[d9d6494](https://github.com/scala/scala/commit/d9d6494) | <notextile>SI-6976 Fix value class separate compilation crasher.</notextile>
[a9bbfec](https://github.com/scala/scala/commit/a9bbfec) | <notextile>Do not recompute stack frames when instrumenting bytecode.</notextile>
[b2776b4](https://github.com/scala/scala/commit/b2776b4) | <notextile>Set `canRetransform` flag to `false` in instrumentation.</notextile>
[0a967e1](https://github.com/scala/scala/commit/0a967e1) | <notextile>Correct whitespace in `ASMTransformer.java`.</notextile>
[f2e45fc](https://github.com/scala/scala/commit/f2e45fc) | <notextile>Fix class loader issues in instrumentation tests.</notextile>
[d972336](https://github.com/scala/scala/commit/d972336) | <notextile>Use the same default scalac options in all three partest frontends</notextile>
[4dceb22](https://github.com/scala/scala/commit/4dceb22) | <notextile>[backport] Fix SI-6637 (misoptimization in erasure)</notextile>
[ba411c4](https://github.com/scala/scala/commit/ba411c4) | <notextile>[backport] Fix unsafe array opt. / opt. primitive Array(...)</notextile>
[96ed055](https://github.com/scala/scala/commit/96ed055) | <notextile>[backport] SI-6567 Warning for Option(implicitView(foo))</notextile>
[3486d47](https://github.com/scala/scala/commit/3486d47) | <notextile>SI-6439 Avoid spurious REPL warnings about companionship</notextile>
[52a5328](https://github.com/scala/scala/commit/52a5328) | <notextile>Addressing warnings.</notextile>
[8f49884](https://github.com/scala/scala/commit/8f49884) | <notextile>SI-6994 Avoid spurious promiscuous catch warning</notextile>
[873aecc](https://github.com/scala/scala/commit/873aecc) | <notextile>Fix broken build.</notextile>
[8297843](https://github.com/scala/scala/commit/8297843) | <notextile>SI-6434 Pretty print function types with by name arg as (=&gt; A) =&gt; B</notextile>
[277f0fe](https://github.com/scala/scala/commit/277f0fe) | <notextile>Removed class files.</notextile>
[964776f](https://github.com/scala/scala/commit/964776f) | <notextile>use ArrayBuffer instead of Array to build Formulae</notextile>
[f539781](https://github.com/scala/scala/commit/f539781) | <notextile>SI-6942 more efficient unreachability analysis</notextile>
[c606559](https://github.com/scala/scala/commit/c606559) | <notextile>SI-5568 Comment improvements for getClass on primitive intersection.</notextile>
[765386f](https://github.com/scala/scala/commit/765386f) | <notextile>SI-5568 Fixes verify error from getClass on refinement of value type</notextile>
[b07228a](https://github.com/scala/scala/commit/b07228a) | <notextile>SI-6601 Publicise derived value contstructor after pickler</notextile>
[66fe64f](https://github.com/scala/scala/commit/66fe64f) | <notextile>SI-6923 Context now buffers warnings as well as errors</notextile>
[ce56316](https://github.com/scala/scala/commit/ce56316) | <notextile>use Constant::isIntRange even if it's NIH</notextile>
[a6b34b6](https://github.com/scala/scala/commit/a6b34b6) | <notextile>SI-6956 determine switchability by type, not tree</notextile>
[950e938](https://github.com/scala/scala/commit/950e938) | <notextile>Revert &quot;SI-5824 Fix crashes in reify with _*&quot;</notextile>
[0a25ee3](https://github.com/scala/scala/commit/0a25ee3) | <notextile>SI-5824 Fix crashes in reify with _*</notextile>
[8f1d4a5](https://github.com/scala/scala/commit/8f1d4a5) | <notextile>Grammatical fix</notextile>
[8d4402d](https://github.com/scala/scala/commit/8d4402d) | <notextile>Remove the term &quot;pimp&quot; from the repository</notextile>
[20d7a17](https://github.com/scala/scala/commit/20d7a17) | <notextile>align partest script with ant</notextile>
[a01e535](https://github.com/scala/scala/commit/a01e535) | <notextile>Fix some typos</notextile>
[76b92ef](https://github.com/scala/scala/commit/76b92ef) | <notextile>Modifies &quot;maybeRewrap&quot; to focus more on the maybe.</notextile>
[a9c374b](https://github.com/scala/scala/commit/a9c374b) | <notextile>SI-6811 Move scala.util.{automata,regexp} ... ... to scala.xml.dtd.impl and make</notextile>
[a386291](https://github.com/scala/scala/commit/a386291) | <notextile>SI-6811 Remove scala.xml.include.sax.Main</notextile>
[98d3368](https://github.com/scala/scala/commit/98d3368) | <notextile>SI-6811 Remove scala.ScalaObject</notextile>
[684f549](https://github.com/scala/scala/commit/684f549) | <notextile>SI-6811 Remove the scala.annotation.target package</notextile>
[f931833](https://github.com/scala/scala/commit/f931833) | <notextile>SI-6811 Misc. removals in util, testing, io, ...</notextile>
[be5554f](https://github.com/scala/scala/commit/be5554f) | <notextile>SI-6811 Remove deprecated elements in scala.collection</notextile>
[67d7e26](https://github.com/scala/scala/commit/67d7e26) | <notextile>SI-6811 Remove parts of scala.concurrent not needed by scala.actors</notextile>
[b13bf26](https://github.com/scala/scala/commit/b13bf26) | <notextile>SI-6811 Remove the scala.util.grammar package</notextile>
[c2903d6](https://github.com/scala/scala/commit/c2903d6) | <notextile>SI-6811 Remove scala.collection.mutable.ConcurrentMap</notextile>
[ed52ea0](https://github.com/scala/scala/commit/ed52ea0) | <notextile>SI-6811 Remove primitive widenings and /:\</notextile>
[2ee8568](https://github.com/scala/scala/commit/2ee8568) | <notextile>SI-6811 Remove deprecated constructors</notextile>
[167fc0a](https://github.com/scala/scala/commit/167fc0a) | <notextile>SI-6811 Remove usages of scala.annotation.cloneable</notextile>
[4805b97](https://github.com/scala/scala/commit/4805b97) | <notextile>SI-6811 Remove scala.annotation.serializable</notextile>
[decc9a9](https://github.com/scala/scala/commit/decc9a9) | <notextile>SI-6979 Small optimization in lub</notextile>
[5d59fb9](https://github.com/scala/scala/commit/5d59fb9) | <notextile>Disable MIMA in master.</notextile>
[9cc61f3](https://github.com/scala/scala/commit/9cc61f3) | <notextile>SI-6479 Don't lift try exprs in label arguments.</notextile>
[0c2e884](https://github.com/scala/scala/commit/0c2e884) | <notextile>SI-6963 Deprecates -Xmigration switch</notextile>
[78019b2](https://github.com/scala/scala/commit/78019b2) | <notextile>SI-6675 Test new warning under -Xoldpatmat.</notextile>
[692372c](https://github.com/scala/scala/commit/692372c) | <notextile>SI-6675 -Xlint arity enforcement for extractors</notextile>
[8475807](https://github.com/scala/scala/commit/8475807) | <notextile>SI-6955 switch emission no longer foiled by type alias</notextile>
[39352fe](https://github.com/scala/scala/commit/39352fe) | <notextile>SI-6082 Conditionally expand @ann(x) to @ann(value = x)</notextile>
[4aba0fe](https://github.com/scala/scala/commit/4aba0fe) | <notextile>SI-5440 Test case for exhaustiveness check</notextile>
[1212af4](https://github.com/scala/scala/commit/1212af4) | <notextile>SI-5340 Change println to log</notextile>
[51f574a](https://github.com/scala/scala/commit/51f574a) | <notextile>clean up synthesizePartialFunction</notextile>
[e314ff1](https://github.com/scala/scala/commit/e314ff1) | <notextile>rework partial function synthesis</notextile>
[b1cea21](https://github.com/scala/scala/commit/b1cea21) | <notextile>SI-6925 use concrete type in applyOrElse's match's selector</notextile>
[8fb19b1](https://github.com/scala/scala/commit/8fb19b1) | <notextile>SI-5189 detect unsoundness when inferring type of match</notextile>
[38404e8](https://github.com/scala/scala/commit/38404e8) | <notextile>SI-6555 Scaladoc's class filter shouldn't drop the last character</notextile>
[0f237e9](https://github.com/scala/scala/commit/0f237e9) | <notextile>SI-6930 adds documentation to reduceLeft in TraversableOnce</notextile>
[57ae1f3](https://github.com/scala/scala/commit/57ae1f3) | <notextile>SI-6905 - Switch to sneakyThrows instead of Unsafe.throwException as per new jsr</notextile>
[25c7364](https://github.com/scala/scala/commit/25c7364) | <notextile>SI-6126 Test case for varargs of tagged primitives.</notextile>
[79a722f](https://github.com/scala/scala/commit/79a722f) | <notextile>SI-6946, SI-6924 Greatly improves IsTraversableLike docs</notextile>
[3ef487e](https://github.com/scala/scala/commit/3ef487e) | <notextile>SI-5954 Implementation restriction preventing companions in package objs</notextile>
[a557a97](https://github.com/scala/scala/commit/a557a97) | <notextile>Fixes SI-6521, overrides Range#head to be faster</notextile>
[7a23562](https://github.com/scala/scala/commit/7a23562) | <notextile>SI-6912 Avoid a typer cycle in overload resolution.</notextile>
[e5da30b](https://github.com/scala/scala/commit/e5da30b) | <notextile>Backport of SI-6846.</notextile>
[c58647f](https://github.com/scala/scala/commit/c58647f) | <notextile>SI-6928, VerifyError with self reference to super.</notextile>
[557caa3](https://github.com/scala/scala/commit/557caa3) | <notextile>SI-6641 Deprecate SwingWorker</notextile>
[103a478](https://github.com/scala/scala/commit/103a478) | <notextile>SI-6803: do not use java.net.URI, even more so incorrectly.</notextile>
[aedec19](https://github.com/scala/scala/commit/aedec19) | <notextile>Granted scaladoc its own Global.</notextile>
[f7490d5](https://github.com/scala/scala/commit/f7490d5) | <notextile>Restore pending repl-javap tests that now succeed under java 6.</notextile>
[3bb8745](https://github.com/scala/scala/commit/3bb8745) | <notextile>Fixes and features for javap (fixing SI-6894)</notextile>
[38958f4](https://github.com/scala/scala/commit/38958f4) | <notextile>SI-6955 switch emission no longer foiled by type alias</notextile>
[b61a64d](https://github.com/scala/scala/commit/b61a64d) | <notextile>SI-6964 Remove build managers, both simple and refined.</notextile>
[f98ccad](https://github.com/scala/scala/commit/f98ccad) | <notextile>Tweaked meta-annotation error based on feedback.</notextile>
[61f70e4](https://github.com/scala/scala/commit/61f70e4) | <notextile>SI-6375, warn on lost annotation.</notextile>
[ebdc0ff](https://github.com/scala/scala/commit/ebdc0ff) | <notextile>Cleaned up meta-annotations.</notextile>
[fdca508](https://github.com/scala/scala/commit/fdca508) | <notextile>remove hack for old patmat unnecessary in 2.11</notextile>
[bd4bffa](https://github.com/scala/scala/commit/bd4bffa) | <notextile>SI-5189 detect unsoundness when inferring type of match</notextile>
[58bfa19](https://github.com/scala/scala/commit/58bfa19) | <notextile>SI-6966 Fix regression in implicit resolution</notextile>
[76aab73](https://github.com/scala/scala/commit/76aab73) | <notextile>Fix dependant =&gt; dependent</notextile>
[78bc17b](https://github.com/scala/scala/commit/78bc17b) | <notextile>Remove EqualsPatternClass.</notextile>
[143cd7a](https://github.com/scala/scala/commit/143cd7a) | <notextile>macroExpandAll is now triggered by typed</notextile>
[fe60284](https://github.com/scala/scala/commit/fe60284) | <notextile>SI-5923 adapt macros when they are deferred</notextile>
[30e2e3a](https://github.com/scala/scala/commit/30e2e3a) | <notextile>generalizes macroExpand</notextile>
[94de3c8](https://github.com/scala/scala/commit/94de3c8) | <notextile>typedPrimaryConstrBody now returns supercall</notextile>
[3d397aa](https://github.com/scala/scala/commit/3d397aa) | <notextile>more precise errors for macros</notextile>
[055b07e](https://github.com/scala/scala/commit/055b07e) | <notextile>parentTypes =&gt; typedParentTypes</notextile>
[baef456](https://github.com/scala/scala/commit/baef456) | <notextile>changes isTermMacro checks to something more universal</notextile>
[1077c92](https://github.com/scala/scala/commit/1077c92) | <notextile>fixes printing of AppliedTypeTree</notextile>
[5660b7a](https://github.com/scala/scala/commit/5660b7a) | <notextile>adds Trees.replace(Tree, Tree)</notextile>
[7550799](https://github.com/scala/scala/commit/7550799) | <notextile>makes macro override error more consistent</notextile>
[fa4531e](https://github.com/scala/scala/commit/fa4531e) | <notextile>refactors handling of macros in repl</notextile>
[66acf36](https://github.com/scala/scala/commit/66acf36) | <notextile>SI-5903 extractor macros do work</notextile>
[d17e3fc](https://github.com/scala/scala/commit/d17e3fc) | <notextile>adds c.macroRole</notextile>
[0bfb798](https://github.com/scala/scala/commit/0bfb798) | <notextile>sbt-git-plugin has moved.</notextile>
[c45491c](https://github.com/scala/scala/commit/c45491c) | <notextile>SI-6641 Cull scala.swing.SwingWorker</notextile>
[198d522](https://github.com/scala/scala/commit/198d522) | <notextile>Made &quot;mode&quot; into a value class.</notextile>
[481772d](https://github.com/scala/scala/commit/481772d) | <notextile>Moved repl javap tests into pending.</notextile>
[03caf40](https://github.com/scala/scala/commit/03caf40) | <notextile>Renamed isTrackingVariance to trackVariance.</notextile>
[31f073c](https://github.com/scala/scala/commit/31f073c) | <notextile>SI-5378, unsoundness with type bounds in refinements.</notextile>
[a419799](https://github.com/scala/scala/commit/a419799) | <notextile>SI-6566, unsoundness with alias variance.</notextile>
[567df8e](https://github.com/scala/scala/commit/567df8e) | <notextile>Boosted test coverage.</notextile>
[5d66c12](https://github.com/scala/scala/commit/5d66c12) | <notextile>Handle variance exclusions in a less ad hoc manner.</notextile>
[fb98b70](https://github.com/scala/scala/commit/fb98b70) | <notextile>Eliminated redundant validateVariance.</notextile>
[85571f6](https://github.com/scala/scala/commit/85571f6) | <notextile>Sweeping up in Variances.</notextile>
[a65dbd7](https://github.com/scala/scala/commit/a65dbd7) | <notextile>Move isFinalType logic to Symbol.</notextile>
[0693592](https://github.com/scala/scala/commit/0693592) | <notextile>Move escaping local logic into VarianceValidator.</notextile>
[882f8e6](https://github.com/scala/scala/commit/882f8e6) | <notextile>Eliminated VariantTypeMap.</notextile>
[9be6d05](https://github.com/scala/scala/commit/9be6d05) | <notextile>Functionalization of Variance code.</notextile>
[57aa63b](https://github.com/scala/scala/commit/57aa63b) | <notextile>Moved VariantTypeMap into Variances.</notextile>
[91d8584](https://github.com/scala/scala/commit/91d8584) | <notextile>Moved Variances into SymbolTable.</notextile>
[36ec5ff](https://github.com/scala/scala/commit/36ec5ff) | <notextile>Relocated redundant variance checking code.</notextile>
[ea93654](https://github.com/scala/scala/commit/ea93654) | <notextile>Incorporated Variance value class in Variances.</notextile>
[996ee33](https://github.com/scala/scala/commit/996ee33) | <notextile>Created value class Variance.</notextile>
[942f078](https://github.com/scala/scala/commit/942f078) | <notextile>Repl javap decodes various synthetic names for us (fixing SI-6894)</notextile>
[77c8751](https://github.com/scala/scala/commit/77c8751) | <notextile>SI-6915 Updates copyright properties to 2002-2013</notextile>
[2ceec33](https://github.com/scala/scala/commit/2ceec33) | <notextile>avoid reflect overhead of certain array instantiations</notextile>
[f76432a](https://github.com/scala/scala/commit/f76432a) | <notextile>proper elementClass for WrappedArray</notextile>
[3405294](https://github.com/scala/scala/commit/3405294) | <notextile>SI-6897, lubs and varargs star.</notextile>
[a6ce037](https://github.com/scala/scala/commit/a6ce037) | <notextile>SI-6896, spurious warning with overloaded main.</notextile>
[eeb6ee6](https://github.com/scala/scala/commit/eeb6ee6) | <notextile>SI-6911, regression in generated case class equality.</notextile>
[92cf0e3](https://github.com/scala/scala/commit/92cf0e3) | <notextile>Fix Iterator#copyToArray (fixes SI-6827).</notextile>
[02b2da6](https://github.com/scala/scala/commit/02b2da6) | <notextile>SI-5017 Poor performance of :+ operator on Arrays</notextile>
[ac61e34](https://github.com/scala/scala/commit/ac61e34) | <notextile>SI-6194, repl crash.</notextile>
[9575ee9](https://github.com/scala/scala/commit/9575ee9) | <notextile>Remove -deprecation from partest default options.</notextile>
[e5f16ac](https://github.com/scala/scala/commit/e5f16ac) | <notextile>SI-6746 Fixes MANIFEST.MF package entry (s.r.makro -&gt; s.r.macros)</notextile>
[9d1e22b](https://github.com/scala/scala/commit/9d1e22b) | <notextile>Stream.zip naturalsEx example does not compile =&gt; remove extra zip call</notextile>
[1364381](https://github.com/scala/scala/commit/1364381) | <notextile>LinearSeq lengthCompare without an iterator.</notextile>
[24a033b](https://github.com/scala/scala/commit/24a033b) | <notextile>SI-6415, overly eager evaluation in Stream.</notextile>
[231d59d](https://github.com/scala/scala/commit/231d59d) | <notextile>SI-6829, SI-6788, NPEs during erroneous compilation.</notextile>
[4423c59](https://github.com/scala/scala/commit/4423c59) | <notextile>Remove stray debugging output line.</notextile>
[3a6f3ae](https://github.com/scala/scala/commit/3a6f3ae) | <notextile>SI-6338 fixes the unchecked warning in quick.comp</notextile>
[1f1e369](https://github.com/scala/scala/commit/1f1e369) | <notextile>Made Symbol#associatedFile always return non-null</notextile>
[348c8fa](https://github.com/scala/scala/commit/348c8fa) | <notextile>adds c.introduceTopLevel</notextile>
[affa98f](https://github.com/scala/scala/commit/affa98f) | <notextile>SI-6916 makes FlatHashTable#remove a Boolean not Option[A]</notextile>
[4c7f5a5](https://github.com/scala/scala/commit/4c7f5a5) | <notextile>SI-6918 Changes REPL output from &quot;defined module&quot; to &quot;defined object&quot;</notextile>
[4d4ba75](https://github.com/scala/scala/commit/4d4ba75) | <notextile>SI-6908 Cleanup of FlatHashTable nulls based on review</notextile>
[dc0d1c9](https://github.com/scala/scala/commit/dc0d1c9) | <notextile>SI-6908 Removes cannotStoreNull from FastHashSet/HashSet docs</notextile>
[016763c](https://github.com/scala/scala/commit/016763c) | <notextile>SI-6908 Makes FlatHashTable as well as derived classes support null values</notextile>
[b2bd825](https://github.com/scala/scala/commit/b2bd825) | <notextile>comments on avoiding closure allocation in Global's assert() and require()</notextile>
[653b29b](https://github.com/scala/scala/commit/653b29b) | <notextile>nested closures are flattened by calling supplementErrorMessage() directly</notextile>
[7abb0c9](https://github.com/scala/scala/commit/7abb0c9) | <notextile>fusion of loops in Range.foreach() and Range.validateRangeBoundaries()</notextile>
[45ef051](https://github.com/scala/scala/commit/45ef051) | <notextile>a few performance improvements for toArray</notextile>
[186e3bf](https://github.com/scala/scala/commit/186e3bf) | <notextile>bind + argc specialization = 20x perf boost</notextile>
[cf7b51d](https://github.com/scala/scala/commit/cf7b51d) | <notextile>Fix Iterator#copyToArray (fixes SI-6827).</notextile>
[176aa56](https://github.com/scala/scala/commit/176aa56) | <notextile>Updated copyright to 2013</notextile>
[6a288b6](https://github.com/scala/scala/commit/6a288b6) | <notextile>Eliminate allocations in Types.</notextile>
[eb491d2](https://github.com/scala/scala/commit/eb491d2) | <notextile>Eliminate allocations in Trees and Symbols.</notextile>
[57c40c5](https://github.com/scala/scala/commit/57c40c5) | <notextile>Eliminate allocations in Specialize.</notextile>
[113405b](https://github.com/scala/scala/commit/113405b) | <notextile>Eliminate allocations in Trees.</notextile>
[cdf6feb](https://github.com/scala/scala/commit/cdf6feb) | <notextile>Eliminate allocations in uncurry and the backend.</notextile>
[9a6320b](https://github.com/scala/scala/commit/9a6320b) | <notextile>Eliminate allocations in BaseTypeSeqs.</notextile>
[2e3e43b](https://github.com/scala/scala/commit/2e3e43b) | <notextile>Eliminate allocations in CPSAnnotationChecker.</notextile>
[bf253b8](https://github.com/scala/scala/commit/bf253b8) | <notextile>Eliminate allocations in TypeMap.</notextile>
[1697132](https://github.com/scala/scala/commit/1697132) | <notextile>Eliminate allocations in Growable.</notextile>
[d3099c0](https://github.com/scala/scala/commit/d3099c0) | <notextile>Eliminating allocations in typeDepth.</notextile>
[78269a6](https://github.com/scala/scala/commit/78269a6) | <notextile>Eliminating allocations in Codec.</notextile>
[3059e3a](https://github.com/scala/scala/commit/3059e3a) | <notextile>Eliminating more allocations in the collections.</notextile>
[c53359e](https://github.com/scala/scala/commit/c53359e) | <notextile>Eliminate allocations in ClassfileParser.</notextile>
[3f9943b](https://github.com/scala/scala/commit/3f9943b) | <notextile>Eliminate allocations in ListBuffer.</notextile>
[46d174e](https://github.com/scala/scala/commit/46d174e) | <notextile>New starr based on b7840d6b41.</notextile>
[0271b35](https://github.com/scala/scala/commit/0271b35) | <notextile>showRaw can now print positions</notextile>
[2375e2d](https://github.com/scala/scala/commit/2375e2d) | <notextile>enclosures are now strongly typed and are no longer vals</notextile>
[2015ad3](https://github.com/scala/scala/commit/2015ad3) | <notextile>changes the flags to not depend on partest</notextile>
[e5d34d7](https://github.com/scala/scala/commit/e5d34d7) | <notextile>the scanner is now less eager about deprecations</notextile>
[6c3c0e3](https://github.com/scala/scala/commit/6c3c0e3) | <notextile>fixes the typedIdent problem for good</notextile>
[21c4db2](https://github.com/scala/scala/commit/21c4db2) | <notextile>Moves annotationError outside typedAnnotation</notextile>
[48cdfef](https://github.com/scala/scala/commit/48cdfef) | <notextile>macro expansions are now auto-duplicated</notextile>
[56ef2b3](https://github.com/scala/scala/commit/56ef2b3) | <notextile>cleans up usages of &lt;init&gt;</notextile>
[eea635a](https://github.com/scala/scala/commit/eea635a) | <notextile>Changes reflection tests to use shorter name constructors</notextile>
[136bf70](https://github.com/scala/scala/commit/136bf70) | <notextile>Changes tree pretty printer to use shorter name constructors</notextile>
[c229718](https://github.com/scala/scala/commit/c229718) | <notextile>Changes reifier to use shorter name constructors</notextile>
[e5ed594](https://github.com/scala/scala/commit/e5ed594) | <notextile>Adds extractors for TypeName, TermName and Modifiers</notextile>
[9f5a021](https://github.com/scala/scala/commit/9f5a021) | <notextile>renames c.fresh to c.freshName</notextile>
[2d612c3](https://github.com/scala/scala/commit/2d612c3) | <notextile>adds Tree.nonEmpty</notextile>
[dbebcd5](https://github.com/scala/scala/commit/dbebcd5) | <notextile>SI-6846, regression in type constructor inference.</notextile>
[3bf5118](https://github.com/scala/scala/commit/3bf5118) | <notextile>Cleaning up type alias usage.</notextile>
[422f461](https://github.com/scala/scala/commit/422f461) | <notextile>Shored up a hidden dealiasing dependency.</notextile>
[394cc42](https://github.com/scala/scala/commit/394cc42) | <notextile>Fix and simplify typedTypeConstructor.</notextile>
[ed40f5c](https://github.com/scala/scala/commit/ed40f5c) | <notextile>Removed dead implementation.</notextile>
[5b2990c](https://github.com/scala/scala/commit/5b2990c) | <notextile>SI-6745 Fix &lt;init&gt; lookup</notextile>
[6084d2d](https://github.com/scala/scala/commit/6084d2d) | <notextile>Removed old pattern matcher.</notextile>
[9c5b207](https://github.com/scala/scala/commit/9c5b207) | <notextile>Rewrote FastTrack for clarity.</notextile>
[5f1e18b](https://github.com/scala/scala/commit/5f1e18b) | <notextile>Optimization in SpecializeTypes.</notextile>
[667e0a2](https://github.com/scala/scala/commit/667e0a2) | <notextile>Remove stray debugging output line.</notextile>
[fadb306](https://github.com/scala/scala/commit/fadb306) | <notextile>PluginComponent contributes description to -Xshow-phases.</notextile>
[88cbbe1](https://github.com/scala/scala/commit/88cbbe1) | <notextile>Fixing up the mailmap.</notextile>
[b2bec5a](https://github.com/scala/scala/commit/b2bec5a) | <notextile>SI-6809 Forbids deprecated case class definitions without parameter list</notextile>
[0ceaf83](https://github.com/scala/scala/commit/0ceaf83) | <notextile>scaladoc Template: remove duplicate code and several usages of Option.get.</notextile>
[b53c35c](https://github.com/scala/scala/commit/b53c35c) | <notextile>Implicit vars should have non-implicit setters.</notextile>
[f029c3a](https://github.com/scala/scala/commit/f029c3a) | <notextile>SI-6795 Simplify errors related to &quot;abstract override&quot; on type members</notextile>
[71e42a7](https://github.com/scala/scala/commit/71e42a7) | <notextile>SI-6795 Adds negative check for &quot;abstract override&quot; on types in traits</notextile>
[5851396](https://github.com/scala/scala/commit/5851396) | <notextile>Cleanup MemberLookup. Better explain ambiguous link targets.</notextile>
[0cbefd0](https://github.com/scala/scala/commit/0cbefd0) | <notextile>Deprecate `scala.tools.nsc.Phases` because it's dead-code.</notextile>
[0a2022c](https://github.com/scala/scala/commit/0a2022c) | <notextile>Remove dead code from `Global`.</notextile>
[cab8ea4](https://github.com/scala/scala/commit/cab8ea4) | <notextile>Expand test with a stably qualified example.</notextile>
[90efa6b](https://github.com/scala/scala/commit/90efa6b) | <notextile>SI-3995 Exclude companions with an existential prefix.</notextile>
[0429f0f](https://github.com/scala/scala/commit/0429f0f) | <notextile>cosmetic renamings in runtime reflection</notextile>
[54a84a3](https://github.com/scala/scala/commit/54a84a3) | <notextile>SI-6548 reflection now correctly enters jinners</notextile>
[9ba7cf8](https://github.com/scala/scala/commit/9ba7cf8) | <notextile>fixes incorrect handling of Annotated in lazy copier</notextile>
[787e82f](https://github.com/scala/scala/commit/787e82f) | <notextile>adds scala-reflect.jar to MIMA in ant</notextile>
[bbf0eb2](https://github.com/scala/scala/commit/bbf0eb2) | <notextile>Test showing the absence of a forward reference</notextile>
[289a882](https://github.com/scala/scala/commit/289a882) | <notextile>SI-5390 Detect forward reference of case class apply</notextile>
[d29696a](https://github.com/scala/scala/commit/d29696a) | <notextile>update mailmap</notextile>
[8b7f0ac](https://github.com/scala/scala/commit/8b7f0ac) | <notextile>SI-5361 Refactor in accordance with review comments.</notextile>
[327083d](https://github.com/scala/scala/commit/327083d) | <notextile>SI-5361 Avoid cyclic type with malformed refinement</notextile>
[098e8a0](https://github.com/scala/scala/commit/098e8a0) | <notextile>typedIdent no longer destroys attachments</notextile>
[6015361](https://github.com/scala/scala/commit/6015361) | <notextile>Expand pattern match position tests.</notextile>
[286dced](https://github.com/scala/scala/commit/286dced) | <notextile>SI-6288 Remedy ill-positioned extractor binding.</notextile>
[f69b846](https://github.com/scala/scala/commit/f69b846) | <notextile>SI-6288 Fix positioning of label jumps</notextile>
[79a43d7](https://github.com/scala/scala/commit/79a43d7) | <notextile>SI-6288 Position argument of unapply</notextile>
[2621918](https://github.com/scala/scala/commit/2621918) | <notextile>s/SuperCallArgs/SuperArgs/</notextile>
[dfa4e23](https://github.com/scala/scala/commit/dfa4e23) | <notextile>simplifies checkBounds</notextile>
[a0cd0f8](https://github.com/scala/scala/commit/a0cd0f8) | <notextile>prevents spurious kind bound errors</notextile>
[24455e2](https://github.com/scala/scala/commit/24455e2) | <notextile>Recurse into instantiations when stripping type vars.</notextile>
[089173d](https://github.com/scala/scala/commit/089173d) | <notextile>Fixes SI-6758: force LazyAnnnotationInfo for DefDef and TypeDef</notextile>
[e5e6d67](https://github.com/scala/scala/commit/e5e6d67) | <notextile>Extract base scaladoc functionality for the IDE.</notextile>
[69f4e93](https://github.com/scala/scala/commit/69f4e93) | <notextile>DRYer crash reports.</notextile>
[818a2e6](https://github.com/scala/scala/commit/818a2e6) | <notextile>SI-6555 Better parameter name retention</notextile>
[44f6504](https://github.com/scala/scala/commit/44f6504) | <notextile>Fix scaladoc typo for isTerm method</notextile>
[b6dd2d2](https://github.com/scala/scala/commit/b6dd2d2) | <notextile>Do not recompute stack frames when instrumenting bytecode.</notextile>
[ba6a3d6](https://github.com/scala/scala/commit/ba6a3d6) | <notextile>Set `canRetransform` flag to `false` in instrumentation.</notextile>
[3781cbe](https://github.com/scala/scala/commit/3781cbe) | <notextile>Correct whitespace in `ASMTransformer.java`.</notextile>
[9e88ddf](https://github.com/scala/scala/commit/9e88ddf) | <notextile>Eliminating var-like setter tpe_= on Tree.</notextile>
[1feee89](https://github.com/scala/scala/commit/1feee89) | <notextile>Integrate isNameInScope in Contexts.</notextile>
[8aae611](https://github.com/scala/scala/commit/8aae611) | <notextile>Deskolemize type skolems before pickling.</notextile>
[d5ee322](https://github.com/scala/scala/commit/d5ee322) | <notextile>Removed some dead tests.</notextile>
[2d6ce2a](https://github.com/scala/scala/commit/2d6ce2a) | <notextile>Removed src/detach.</notextile>
[1426d9c](https://github.com/scala/scala/commit/1426d9c) | <notextile>Add convenience attribute operator to NodeSeq</notextile>
[a9d2568](https://github.com/scala/scala/commit/a9d2568) | <notextile>Fix for SI-6595, lost modifiers in early defs.</notextile>
[e77db05](https://github.com/scala/scala/commit/e77db05) | <notextile>Normalized TRUE/FALSE trees in the pattern matcher.</notextile>
[4bc3fa1](https://github.com/scala/scala/commit/4bc3fa1) | <notextile>Eliminated some sources of tree sharing.</notextile>
[b26f12d](https://github.com/scala/scala/commit/b26f12d) | <notextile>Cleanup in module var creation.</notextile>
[c5ffa03](https://github.com/scala/scala/commit/c5ffa03) | <notextile>Cleanups of reifyBoundTerm and reifyBoundType</notextile>
[286abfc](https://github.com/scala/scala/commit/286abfc) | <notextile>SI-5841 reification of renamed imports</notextile>
[0b1ae9c](https://github.com/scala/scala/commit/0b1ae9c) | <notextile>SI-5877 Tweak the check for package object owner.</notextile>
[96e5c40](https://github.com/scala/scala/commit/96e5c40) | <notextile>SI-5877 Support implicit classes in package objects</notextile>
[65c1ae5](https://github.com/scala/scala/commit/65c1ae5) | <notextile>Adds debug logging for synthetic registration.</notextile>
[673bc70](https://github.com/scala/scala/commit/673bc70) | <notextile>Split test case to workaround incomplete error report.</notextile>
[c24400f](https://github.com/scala/scala/commit/c24400f) | <notextile>SI-6558 Expand test case for annotation typos</notextile>
[d9928d5](https://github.com/scala/scala/commit/d9928d5) | <notextile>Fixes SI-6558: typecheck lazy annotation info using non-silent context.</notextile>
[e249f2e](https://github.com/scala/scala/commit/e249f2e) | <notextile>SI-4922 Show default in Scaladoc for generic methods.</notextile>
[bd04b2c](https://github.com/scala/scala/commit/bd04b2c) | <notextile>SI-6614 Test case for fixed ArrayStack misconduct.</notextile>
[48cffd0](https://github.com/scala/scala/commit/48cffd0) | <notextile>Share the empty LinkedList between first0/last0.</notextile>
[d526f8b](https://github.com/scala/scala/commit/d526f8b) | <notextile>SI-6690 Release reference to last dequeued element.</notextile>
[5f2b7c4](https://github.com/scala/scala/commit/5f2b7c4) | <notextile>SI-5789 Use the ReplTest framework in the test</notextile>
[850128d](https://github.com/scala/scala/commit/850128d) | <notextile>SI-5789 Checks in the right version of the test</notextile>
[d699122](https://github.com/scala/scala/commit/d699122) | <notextile>SI-5789 Removes assertion about implclass flag in Mixin.scala</notextile>
[a23cc20](https://github.com/scala/scala/commit/a23cc20) | <notextile>SI-5894 Don't emit static forwarders for macros.</notextile>
[b828e32](https://github.com/scala/scala/commit/b828e32) | <notextile>Remove some low-hanging duplication beween GenJVM / GenASM.</notextile>
[8434922](https://github.com/scala/scala/commit/8434922) | <notextile>Addtional test cases for tail calls in catches.</notextile>
[31a0aa7](https://github.com/scala/scala/commit/31a0aa7) | <notextile>SI-1672 Catches are in tail position without finally.</notextile>
[e4d1d93](https://github.com/scala/scala/commit/e4d1d93) | <notextile>Warn when generated classfiles differ only in case.</notextile>
[8a1f85d](https://github.com/scala/scala/commit/8a1f85d) | <notextile>SI-6535 Step back from the precipice of a cycle</notextile>
[90c87fc](https://github.com/scala/scala/commit/90c87fc) | <notextile>SI-6549 Improve escaping in REPL codegen.</notextile>
[d99b7f4](https://github.com/scala/scala/commit/d99b7f4) | <notextile>SI-6547: elide box unbox pair only when primitives match</notextile>
[8204b19](https://github.com/scala/scala/commit/8204b19) | <notextile>SI-5678 Bad return type for [Use Case] docs in Range</notextile>
[9aa6ded](https://github.com/scala/scala/commit/9aa6ded) | <notextile>SI-6667 Abort after any ambiguous in-scope implicit</notextile>
[3719f79](https://github.com/scala/scala/commit/3719f79) | <notextile>Refactor use of SearchFailure in implicits.</notextile>
[2aa66be](https://github.com/scala/scala/commit/2aa66be) | <notextile>SI-4664 [Make scala.util.Random Serializable] Add test case</notextile>
[0b92073](https://github.com/scala/scala/commit/0b92073) | <notextile>SI-4664 Make scala.util.Random Serializable</notextile>
[089cc9f](https://github.com/scala/scala/commit/089cc9f) | <notextile>Fix for SI-6712, bug in object lifting.</notextile>
[78a081f](https://github.com/scala/scala/commit/78a081f) | <notextile>Now the test suite runs MIMA for compatibility testing.</notextile>
[bb9adfb](https://github.com/scala/scala/commit/bb9adfb) | <notextile>more ListOfNil =&gt; Nil</notextile>
[838cbe6](https://github.com/scala/scala/commit/838cbe6) | <notextile>DummyTree =&gt; CannotHaveAttrs</notextile>
[7ee299b](https://github.com/scala/scala/commit/7ee299b) | <notextile>evicts assert(false) from the compiler</notextile>
[0ebf72b](https://github.com/scala/scala/commit/0ebf72b) | <notextile>introduces global.pendingSuperCall</notextile>
[40063b0](https://github.com/scala/scala/commit/40063b0) | <notextile>refactors handling of parent types</notextile>
[85f3202](https://github.com/scala/scala/commit/85f3202) | <notextile>unifies approaches to call analysis in TreeInfo</notextile>
[d547760](https://github.com/scala/scala/commit/d547760) | <notextile>TypeApply + Select and their type-level twins</notextile>
[5546a72](https://github.com/scala/scala/commit/5546a72) | <notextile>SI-6696 removes &quot;helper&quot; tree factory methods</notextile>
[868fe64](https://github.com/scala/scala/commit/868fe64) | <notextile>SI-6766 Makes the -Pcontinuations:enable flag a project specific preference</notextile>
[a725494](https://github.com/scala/scala/commit/a725494) | <notextile>SI-6766 Create a continuations project in eclipse</notextile>
[d483ec3](https://github.com/scala/scala/commit/d483ec3) | <notextile>Fix Scaladoc for the raw interpolator.</notextile>
[7ee1145](https://github.com/scala/scala/commit/7ee1145) | <notextile>SI-6631 Handle invalid escapes in string interpolators</notextile>
[ef61bc5](https://github.com/scala/scala/commit/ef61bc5) | <notextile>Fix typo in documentation for Seq</notextile>
[5028181](https://github.com/scala/scala/commit/5028181) | <notextile>tests for idempotency issues in the typechecker</notextile>
[2567da8](https://github.com/scala/scala/commit/2567da8) | <notextile>Support &quot;javap -&quot; for lastvar, move JavapTool into JavapClass.</notextile>
[1fa4ad0](https://github.com/scala/scala/commit/1fa4ad0) | <notextile>Restore unmangling but add -raw; massage options to support tool args like -raw </notextile>
[81e68f9](https://github.com/scala/scala/commit/81e68f9) | <notextile>Javap for repl output.</notextile>
[2857d43](https://github.com/scala/scala/commit/2857d43) | <notextile>Javap for Java 7 (Fixes SI-4936)</notextile>
[ca1e7ec](https://github.com/scala/scala/commit/ca1e7ec) | <notextile>Cleanups of reifyBoundTerm and reifyBoundType</notextile>
[0433ca4](https://github.com/scala/scala/commit/0433ca4) | <notextile>SI-5841 reification of renamed imports</notextile>
[7d5dc08](https://github.com/scala/scala/commit/7d5dc08) | <notextile>SI-5858 xml.Node construction ambiguity is gone.</notextile>
[3180156](https://github.com/scala/scala/commit/3180156) | <notextile>Treat name in getResourceAsStream as resource path</notextile>
[593a760](https://github.com/scala/scala/commit/593a760) | <notextile>Small cleanup work done during my initial visits to the code.</notextile>
[e8d6f5e](https://github.com/scala/scala/commit/e8d6f5e) | <notextile>Surgery on MANIFEST.MF.</notextile>
[c35751b](https://github.com/scala/scala/commit/c35751b) | <notextile>Misc touchup after purging msil/fjbg/genjvm.</notextile>
[96fa31d](https://github.com/scala/scala/commit/96fa31d) | <notextile>Expunged the .net backend.</notextile>
[06844ee](https://github.com/scala/scala/commit/06844ee) | <notextile>SI-6769 Removes GenJVM backend</notextile>
[ff9cfd9](https://github.com/scala/scala/commit/ff9cfd9) | <notextile>Don't return unimportables from importedSymbol.</notextile>
[de66494](https://github.com/scala/scala/commit/de66494) | <notextile>Remove TermName -&gt; String implicit.</notextile>
[47245f5](https://github.com/scala/scala/commit/47245f5) | <notextile>Remove Name -&gt; TermName implicit.</notextile>
[924633e](https://github.com/scala/scala/commit/924633e) | <notextile>SI-6770 Removes unused and unusable review scripts</notextile>
[a694194](https://github.com/scala/scala/commit/a694194) | <notextile>Test cases for SI-5726, SI-5733, SI-6320, SI-6551, SI-6722.</notextile>
[dac1488](https://github.com/scala/scala/commit/dac1488) | <notextile>Fix for SI-6731, dropped trees in selectDynamic.</notextile>
[d55840e](https://github.com/scala/scala/commit/d55840e) | <notextile>Asserts about Tree qualifiers.</notextile>
[1be0244](https://github.com/scala/scala/commit/1be0244) | <notextile>neg test added</notextile>
[597a949](https://github.com/scala/scala/commit/597a949) | <notextile>SI-5753 macros cannot be loaded when inherited from a class or a trait</notextile>
[8fcbee5](https://github.com/scala/scala/commit/8fcbee5) | <notextile>Take advantage of the margin stripping interpolator.</notextile>
[a0001fc](https://github.com/scala/scala/commit/a0001fc) | <notextile>Adds a margin stripping string interpolator.</notextile>
[20c2a50](https://github.com/scala/scala/commit/20c2a50) | <notextile>SI-6718 fixes a volatile test</notextile>
[3177934](https://github.com/scala/scala/commit/3177934) | <notextile>Mark pattern matcher synthetics as SYNTHETIC.</notextile>
[b02e952](https://github.com/scala/scala/commit/b02e952) | <notextile>Set symbol flags at creation.</notextile>
[7f1ba06](https://github.com/scala/scala/commit/7f1ba06) | <notextile>Fix for SI-6687, wrong isVar logic.</notextile>
[555a9ba](https://github.com/scala/scala/commit/555a9ba) | <notextile>findEntry implementation code more concise and DRYer.</notextile>
[8b54ec9](https://github.com/scala/scala/commit/8b54ec9) | <notextile>Fix for SI-6357, cycle with value classes.</notextile>
[cd1bf78](https://github.com/scala/scala/commit/cd1bf78) | <notextile>Refactoring of adaptMethod</notextile>
[2aa6841](https://github.com/scala/scala/commit/2aa6841) | <notextile>SI-6677 Insert required cast in `new qual.foo.T`</notextile>
[d0de367](https://github.com/scala/scala/commit/d0de367) | <notextile>Fix for SI-6706, Symbol breakage under GC.</notextile>
[b9e01a0](https://github.com/scala/scala/commit/b9e01a0) | <notextile>Disabled part of a test.</notextile>
[5573281](https://github.com/scala/scala/commit/5573281) | <notextile>Account for existence of scala's ClassfileAnnotation.</notextile>
[a854529](https://github.com/scala/scala/commit/a854529) | <notextile>Eliminate some one-arg asserts.</notextile>
[4267444](https://github.com/scala/scala/commit/4267444) | <notextile>Fix for SerialVersionUID instability.</notextile>
[f9053e5](https://github.com/scala/scala/commit/f9053e5) | <notextile>Updated asm to 4.1.</notextile>
[548a54d](https://github.com/scala/scala/commit/548a54d) | <notextile>SI-6023 reify abstract vals</notextile>
[1fd3a2a](https://github.com/scala/scala/commit/1fd3a2a) | <notextile>adds comments to standard attachments</notextile>
[907d6ea](https://github.com/scala/scala/commit/907d6ea) | <notextile>SI-6673 fixes macro problems with eta expansions</notextile>
[7376ad7](https://github.com/scala/scala/commit/7376ad7) | <notextile>SI-6695 Test case for fixed Array match bug</notextile>
[925c6e3](https://github.com/scala/scala/commit/925c6e3) | <notextile>SI-6632 SI-6633 Fixes issues and data corruption in ListBuffer</notextile>
[2c23acf](https://github.com/scala/scala/commit/2c23acf) | <notextile>SI-6634 Fixes data corruption issue in ListBuffer#remove</notextile>
[74ca558](https://github.com/scala/scala/commit/74ca558) | <notextile>SI-6551: don't insert apply call in polymorphic expression.</notextile>
[c656920](https://github.com/scala/scala/commit/c656920) | <notextile>SI-6663: don't ignore type parameter on selectDynamic invocation</notextile>
[af8b45f](https://github.com/scala/scala/commit/af8b45f) | <notextile>Scaladoc update for collection.mutable.MultiMap</notextile>
[db0bf8f](https://github.com/scala/scala/commit/db0bf8f) | <notextile>Restore the opimization apparently lost after merge.</notextile>
[1f0e488](https://github.com/scala/scala/commit/1f0e488) | <notextile>Fixes SI-6150 - backport to 2.10.x branch.</notextile>
[65778d7](https://github.com/scala/scala/commit/65778d7) | <notextile>SI-5330, SI-6014 deal with existential self-type</notextile>
[f8647ee](https://github.com/scala/scala/commit/f8647ee) | <notextile>show developer guidelines on opening pull request</notextile>
[2e0cbe0](https://github.com/scala/scala/commit/2e0cbe0) | <notextile>sane printing of renamed imports</notextile>
[bc3dda2](https://github.com/scala/scala/commit/bc3dda2) | <notextile>SI-6448 Collecting the spoils of PartialFun#runWith</notextile>
[373ded2](https://github.com/scala/scala/commit/373ded2) | <notextile>Remove code from compiler central.</notextile>
[69d850c](https://github.com/scala/scala/commit/69d850c) | <notextile>Remove code from misc bits of the compiler.</notextile>
[c54432c](https://github.com/scala/scala/commit/c54432c) | <notextile>Removed code from scaladoc.</notextile>
[009c57d](https://github.com/scala/scala/commit/009c57d) | <notextile>Removed code from the typechecker.</notextile>
[e5b0508](https://github.com/scala/scala/commit/e5b0508) | <notextile>Members removed in scala.reflect.</notextile>
[50712cf](https://github.com/scala/scala/commit/50712cf) | <notextile>Members removed in the backend.</notextile>
[427e02e](https://github.com/scala/scala/commit/427e02e) | <notextile>Members removed from partest.</notextile>
[9d4994b](https://github.com/scala/scala/commit/9d4994b) | <notextile>Members removed from scala.reflect.io.</notextile>
[59c0c5d](https://github.com/scala/scala/commit/59c0c5d) | <notextile>Members removed from the repl.</notextile>
[d09bb9c](https://github.com/scala/scala/commit/d09bb9c) | <notextile>Some files removed in their entirety.</notextile>
[f89394e](https://github.com/scala/scala/commit/f89394e) | <notextile>Removing ancient comments and pointless comments.</notextile>
[d5e3f85](https://github.com/scala/scala/commit/d5e3f85) | <notextile>Revert &quot;Commenting out unused members.&quot;</notextile>
[645c267](https://github.com/scala/scala/commit/645c267) | <notextile>Commenting out unused members.</notextile>
[345f937](https://github.com/scala/scala/commit/345f937) | <notextile>applyOrElse is a synthetic method.</notextile>
[120879e](https://github.com/scala/scala/commit/120879e) | <notextile>Deal with possibly spurious warning in Macros.</notextile>
[dbd7d71](https://github.com/scala/scala/commit/dbd7d71) | <notextile>Remove unused imports in library.</notextile>
[c4395b3](https://github.com/scala/scala/commit/c4395b3) | <notextile>Remove unused imports in continuations.</notextile>
[66d3540](https://github.com/scala/scala/commit/66d3540) | <notextile>Remove unused imports in partest.</notextile>
[8fb4e9e](https://github.com/scala/scala/commit/8fb4e9e) | <notextile>Removed unused imports in swing.</notextile>
[7936ce5](https://github.com/scala/scala/commit/7936ce5) | <notextile>Added -Xdev setting... you know, for devs</notextile>
[1236f27](https://github.com/scala/scala/commit/1236f27) | <notextile>Associate correct names to e-mails, correct or not</notextile>
[823d779](https://github.com/scala/scala/commit/823d779) | <notextile>Fix for SI-6357, cycle with value classes.</notextile>
[0625f0c](https://github.com/scala/scala/commit/0625f0c) | <notextile>comment / question in typers</notextile>
[768a408](https://github.com/scala/scala/commit/768a408) | <notextile>Fix for overly eager package object initialization.</notextile>
[a7cc894](https://github.com/scala/scala/commit/a7cc894) | <notextile>More principled tree copying.</notextile>
[cac5a08](https://github.com/scala/scala/commit/cac5a08) | <notextile>Optimize primitive Array(e1, ..., en)</notextile>
[48ee29a](https://github.com/scala/scala/commit/48ee29a) | <notextile>Refine @compileTimeOnly</notextile>
[6902da3](https://github.com/scala/scala/commit/6902da3) | <notextile>SI-6539 Annotation for methods unfit for post-typer ASTs</notextile>
[b922573](https://github.com/scala/scala/commit/b922573) | <notextile>Fix for SI-6662, macro failing too early.</notextile>
[03aa7fc](https://github.com/scala/scala/commit/03aa7fc) | <notextile>SI-6616 Check that unsafe operations are only called on the presentation compile</notextile>
[1bdd5ee](https://github.com/scala/scala/commit/1bdd5ee) | <notextile>better error when typetagging local classes</notextile>
[af3b03b](https://github.com/scala/scala/commit/af3b03b) | <notextile>-Yshow-trees-compact respects other options</notextile>
[f98e4d0](https://github.com/scala/scala/commit/f98e4d0) | <notextile>Fix type of the custom `ClassTag` in `PatternMatching.scala`</notextile>
[48e8d1d](https://github.com/scala/scala/commit/48e8d1d) | <notextile>show developer guidelines on opening pull request</notextile>
[085b6a5](https://github.com/scala/scala/commit/085b6a5) | <notextile>SI-5330, SI-6014 deal with existential self-type</notextile>
[6023706](https://github.com/scala/scala/commit/6023706) | <notextile>Error for SI-6355, overloading of applyDynamic.</notextile>
[24958f7](https://github.com/scala/scala/commit/24958f7) | <notextile>Fix for SI-6664, cycle in case classes.</notextile>
[62ebb7c](https://github.com/scala/scala/commit/62ebb7c) | <notextile>Lower confusion levels in typedApply.</notextile>
[7ab5e71](https://github.com/scala/scala/commit/7ab5e71) | <notextile>Fix bug in partest-ack.</notextile>
[666e375](https://github.com/scala/scala/commit/666e375) | <notextile>Fix Documentation Typo</notextile>
[92daa5e](https://github.com/scala/scala/commit/92daa5e) | <notextile>Address obvious bug in MutableSettings.</notextile>
[b540aae](https://github.com/scala/scala/commit/b540aae) | <notextile>Fix SI-6637 (misoptimization in erasure)</notextile>
[1315a1f](https://github.com/scala/scala/commit/1315a1f) | <notextile>fix t2318.scala</notextile>
[3baa06d](https://github.com/scala/scala/commit/3baa06d) | <notextile>Fix merge error.</notextile>
[c7a2e39](https://github.com/scala/scala/commit/c7a2e39) | <notextile>Restore briefly awol // 3 in explicitouter</notextile>
[3292c4a](https://github.com/scala/scala/commit/3292c4a) | <notextile>A utility function to summarize an exception.</notextile>
[8da7e37](https://github.com/scala/scala/commit/8da7e37) | <notextile>Cleanups to the previous repl commits.</notextile>
[31ed2e8](https://github.com/scala/scala/commit/31ed2e8) | <notextile>Moved IMain ops requiring stability into implicit class.</notextile>
[f56f9a3](https://github.com/scala/scala/commit/f56f9a3) | <notextile>Massively simplified repl name resolution.</notextile>
[45c2d7f1d](https://github.com/scala/scala/commit/45c2d7f1d) | <notextile>Massively simplified repl initialization.</notextile>
[632daed](https://github.com/scala/scala/commit/632daed) | <notextile>Minor tweaks in Types/Scopes.</notextile>
[2a1d020](https://github.com/scala/scala/commit/2a1d020) | <notextile>Hardened JavaMirrors against linkage errors.</notextile>
[bb9d367](https://github.com/scala/scala/commit/bb9d367) | <notextile>Remove hostile code from explicitouter.</notextile>
[5736649](https://github.com/scala/scala/commit/5736649) | <notextile>New starr based on 4f98d50bc2 .</notextile>
[2097657](https://github.com/scala/scala/commit/2097657) | <notextile>Warn about unused imports.</notextile>
[36edc79](https://github.com/scala/scala/commit/36edc79) | <notextile>A few straggling unused imports.</notextile>
[fc89074](https://github.com/scala/scala/commit/fc89074) | <notextile>Deprecation patrol.</notextile>
[e51e9b5](https://github.com/scala/scala/commit/e51e9b5) | <notextile>Removed unused imports.</notextile>
[1e2328e](https://github.com/scala/scala/commit/1e2328e) | <notextile>Fix for SI-6597, implicit case class crasher.</notextile>
[c7c79c8](https://github.com/scala/scala/commit/c7c79c8) | <notextile>SI-6488: Stop I/O threads prior to Process destruction</notextile>
[492cbe5](https://github.com/scala/scala/commit/492cbe5) | <notextile>Fixes SI-6559 - StringContext not using passed in escape function.</notextile>
[46fc45e](https://github.com/scala/scala/commit/46fc45e) | <notextile>Revert &quot;Expand optimization of Array(e1, ..., en) to primitive arrays.&quot;</notextile>
[ed3709a](https://github.com/scala/scala/commit/ed3709a) | <notextile>Revert &quot;Refactor guards checking for a particular overload of Array.apply.&quot;</notextile>
[092345a](https://github.com/scala/scala/commit/092345a) | <notextile>Refactor guards checking for a particular overload of Array.apply.</notextile>
[8265175](https://github.com/scala/scala/commit/8265175) | <notextile>Expand optimization of Array(e1, ..., en) to primitive arrays.</notextile>
[dad8866](https://github.com/scala/scala/commit/dad8866) | <notextile>SI-6611 Tighten up an unsafe array optimization</notextile>
[c04a4ed](https://github.com/scala/scala/commit/c04a4ed) | <notextile>Revert &quot;Convenience method commonSymbolOwner.&quot;</notextile>
[9809721](https://github.com/scala/scala/commit/9809721) | <notextile>Revamp import ambiguity logic.</notextile>
[77a4585](https://github.com/scala/scala/commit/77a4585) | <notextile>The improvements made possible by the scope changes.</notextile>
[14704da](https://github.com/scala/scala/commit/14704da) | <notextile>Convenience method commonSymbolOwner.</notextile>
[d7ed53f](https://github.com/scala/scala/commit/d7ed53f) | <notextile>Hardening scope lookup against wrongness.</notextile>
[64258cf](https://github.com/scala/scala/commit/64258cf) | <notextile>Fixed bug in Symbol filtering.</notextile>
[0bcb9e9](https://github.com/scala/scala/commit/0bcb9e9) | <notextile>SI-6567 Warning for Option(implicitView(foo))</notextile>
[477eee3](https://github.com/scala/scala/commit/477eee3) | <notextile>Pull request feedback.</notextile>
[3095427](https://github.com/scala/scala/commit/3095427) | <notextile>Restored a scaladoc val body.</notextile>
[9c09c17](https://github.com/scala/scala/commit/9c09c17) | <notextile>Removing unused locals and making vars into vals.</notextile>
[d3da3ef](https://github.com/scala/scala/commit/d3da3ef) | <notextile>Expanded unused warnings.</notextile>
[357f45c](https://github.com/scala/scala/commit/357f45c) | <notextile>Fix for SI-6426, importable _.</notextile>
[8541ea3](https://github.com/scala/scala/commit/8541ea3) | <notextile>Comment to link code to a relevant JIRA ticket</notextile>
[d5ebd7e](https://github.com/scala/scala/commit/d5ebd7e) | <notextile>Remove unused private members.</notextile>
[d0c4be6](https://github.com/scala/scala/commit/d0c4be6) | <notextile>Warn about unused private members.</notextile>
[578c4c6](https://github.com/scala/scala/commit/578c4c6) | <notextile>Make LookupNotFound a case object.</notextile>
[e326d86](https://github.com/scala/scala/commit/e326d86) | <notextile>Tests for SI-3160, SI-4537, import precedence.</notextile>
[9cbbb1c](https://github.com/scala/scala/commit/9cbbb1c) | <notextile>Adding some comments and clearer naming.</notextile>
[f5c336d](https://github.com/scala/scala/commit/f5c336d) | <notextile>Switch typedIdent to use Context's lookupSymbol.</notextile>
[6e4e851](https://github.com/scala/scala/commit/6e4e851) | <notextile>Simplifying Typer.</notextile>
[cd6ad89](https://github.com/scala/scala/commit/cd6ad89) | <notextile>Added some symbol lookup convenience methods.</notextile>
[56b2377](https://github.com/scala/scala/commit/56b2377) | <notextile>Made SilentResult more monadic.</notextile>
[d477a0f](https://github.com/scala/scala/commit/d477a0f) | <notextile>Adds the core symbol lookup logic to Typers.</notextile>
[2dc5841](https://github.com/scala/scala/commit/2dc5841) | <notextile>Introduces some structure for name lookups.</notextile>
[187c61a](https://github.com/scala/scala/commit/187c61a) | <notextile>Fix for SI-6597, implicit case class crasher.</notextile>
[4e4060f](https://github.com/scala/scala/commit/4e4060f) | <notextile>Implementation of Stream#dropRight.</notextile>
[8a537b7](https://github.com/scala/scala/commit/8a537b7) | <notextile>Fix SI-6584, Stream#distinct uses too much memory.</notextile>
[1841114](https://github.com/scala/scala/commit/1841114) | <notextile>An option for real repl output.</notextile>
[8d962ed](https://github.com/scala/scala/commit/8d962ed) | <notextile>Fix performance bug in GenASM.</notextile>
[98e3e47](https://github.com/scala/scala/commit/98e3e47) | <notextile>Minor tweaks to logging approach.</notextile>
[c15171d](https://github.com/scala/scala/commit/c15171d) | <notextile>silences optional logs in reflection</notextile>
[1e1199d](https://github.com/scala/scala/commit/1e1199d) | <notextile>Fix for -Xcheckinit failures.</notextile>
[e23f9ed](https://github.com/scala/scala/commit/e23f9ed) | <notextile>Remove compiler phases that don't influence scaladoc generation.</notextile>
[d22b74c](https://github.com/scala/scala/commit/d22b74c) | <notextile>Scaladoc knows the package structure of the libraries, so don't include them in </notextile>
[ed09630](https://github.com/scala/scala/commit/ed09630) | <notextile>Crash on missing accessor (internal bug in the lazy vals implementation) instead</notextile>
[a3c5427](https://github.com/scala/scala/commit/a3c5427) | <notextile>Incorporated changes suggested in code review</notextile>
[a52bd2c](https://github.com/scala/scala/commit/a52bd2c) | <notextile>Added one more test for SI-6358</notextile>
[4c86dbb](https://github.com/scala/scala/commit/4c86dbb) | <notextile>Closes SI-6358. Move accessor generation for lazy vals to typers.</notextile>
[aa27396](https://github.com/scala/scala/commit/aa27396) | <notextile>Remove unneeded calls to substring()</notextile>
[08ab007](https://github.com/scala/scala/commit/08ab007) | <notextile>Added a Swing ColorChooser wrapper</notextile>
[bdff881](https://github.com/scala/scala/commit/bdff881) | <notextile>Added a Swing PopupMenu wrapper</notextile>
[cbad218](https://github.com/scala/scala/commit/cbad218) | <notextile>SI-2968 Fix brace healing for `^case (class&#124;object) {`</notextile>
[1abc901](https://github.com/scala/scala/commit/1abc901) | <notextile> using  existing scala.tools.nsc.util.stackTraceString</notextile>
[d562ef9](https://github.com/scala/scala/commit/d562ef9) | <notextile> fixed trivial error with printing of exception stack trace in verbose mode.</notextile>
[61f12fa](https://github.com/scala/scala/commit/61f12fa) | <notextile>A little more housecleaning in ExtensionMethods.</notextile>
[153ccb4](https://github.com/scala/scala/commit/153ccb4) | <notextile>Incorporated pull request feedback.</notextile>
[ff9f60f](https://github.com/scala/scala/commit/ff9f60f) | <notextile>Fix for SI-6482, lost bounds in extension methods.</notextile>
[883f1ac](https://github.com/scala/scala/commit/883f1ac) | <notextile>Responded to comment about how many isCoercibles there are.</notextile>
[c6866a2](https://github.com/scala/scala/commit/c6866a2) | <notextile>SI-6422: add missing Fractional and Integral alias in scala package</notextile>
[18c6d58](https://github.com/scala/scala/commit/18c6d58) | <notextile>SI-6388 Remove Application</notextile>
[3b73e0d](https://github.com/scala/scala/commit/3b73e0d) | <notextile>SI-6388 Remove some remaining, minor deprecations</notextile>
[025e1ae](https://github.com/scala/scala/commit/025e1ae) | <notextile>SI-6388 Remove deprecated item in scala/swing</notextile>
[e3cec78](https://github.com/scala/scala/commit/e3cec78) | <notextile>SI-6388 Remove first parts of deprecated @serializable annotation</notextile>
[c52f91c](https://github.com/scala/scala/commit/c52f91c) | <notextile>SI-6388 Remove deprecated items in scala/math</notextile>
[d43a3ef](https://github.com/scala/scala/commit/d43a3ef) | <notextile>SI-6388 Remove deprecated items in scala/collection</notextile>
[17fd905](https://github.com/scala/scala/commit/17fd905) | <notextile>SI-6388 Remove deprecated items in the compiler jar</notextile>
[4dd4beb](https://github.com/scala/scala/commit/4dd4beb) | <notextile>Removed .disabled files.</notextile>
[267650c](https://github.com/scala/scala/commit/267650c) | <notextile>Fix for SI-6206, inconsistency with apply.</notextile>
[63ba3d6](https://github.com/scala/scala/commit/63ba3d6) | <notextile>Fixes SI-6521, overrides Range#head to be faster</notextile>
[02909f2](https://github.com/scala/scala/commit/02909f2) | <notextile>Warn about more misplaced expressions.</notextile>
[f61cd63](https://github.com/scala/scala/commit/f61cd63) | <notextile>Removed redundant containsUncheckable.</notextile>
[b755617](https://github.com/scala/scala/commit/b755617) | <notextile>Make reads in CommentFactory slice from the underlying buffer</notextile>
[ca89fb9](https://github.com/scala/scala/commit/ca89fb9) | <notextile>Fix broken links with names that need to be encoded when querying the owner.</notextile>
[eed61be](https://github.com/scala/scala/commit/eed61be) | <notextile>Incorporated pull request feedback.</notextile>
[ba36c44](https://github.com/scala/scala/commit/ba36c44) | <notextile>Fix for SI-4744, another variety of cycle.</notextile>
[432f936](https://github.com/scala/scala/commit/432f936) | <notextile>Experimental option -Ybreak-cycles.</notextile>
[b7a3786](https://github.com/scala/scala/commit/b7a3786) | <notextile>Crash on missing accessor (internal bug in the lazy vals implementation) instead</notextile>
[a15969a](https://github.com/scala/scala/commit/a15969a) | <notextile>Incorporated changes suggested in code review</notextile>
[63c90af](https://github.com/scala/scala/commit/63c90af) | <notextile>Added one more test for SI-6358</notextile>
[981424b](https://github.com/scala/scala/commit/981424b) | <notextile>Closes SI-6358. Move accessor generation for lazy vals to typers.</notextile>
[d1a35cc](https://github.com/scala/scala/commit/d1a35cc) | <notextile>Possible fix for continuations bug.</notextile>
[1b42512](https://github.com/scala/scala/commit/1b42512) | <notextile>Overhauled documentation and structure of tpe/tpeHK/etc.</notextile>
[b1307ff](https://github.com/scala/scala/commit/b1307ff) | <notextile>All the actual changes of tpe to tpe_* or tpeHK.</notextile>
[609b3b8](https://github.com/scala/scala/commit/609b3b8) | <notextile>Hardening in appliedType and Subst*Map.</notextile>
[68a3a1d](https://github.com/scala/scala/commit/68a3a1d) | <notextile>Cleanup in old Typers code.</notextile>
[6829219](https://github.com/scala/scala/commit/6829219) | <notextile>Defanged dummy type arguments.</notextile>
[516fe52](https://github.com/scala/scala/commit/516fe52) | <notextile>Removed obsolete migration test.</notextile>
[2569341](https://github.com/scala/scala/commit/2569341) | <notextile>SI-6478 Fixing JavaTokenParser ident</notextile>
[781788c](https://github.com/scala/scala/commit/781788c) | <notextile>Incorporated pull request feedback.</notextile>
[5240da5](https://github.com/scala/scala/commit/5240da5) | <notextile>Moved a bunch of passing tests out of pending.</notextile>
[6d6c182](https://github.com/scala/scala/commit/6d6c182) | <notextile>Moved some disabled test to the right place.</notextile>
[d735483](https://github.com/scala/scala/commit/d735483) | <notextile>Fix for spurious warning.</notextile>
[1f99df2](https://github.com/scala/scala/commit/1f99df2) | <notextile>Eliminated pattern matcher warning.</notextile>
[120e14f](https://github.com/scala/scala/commit/120e14f) | <notextile>Fix for rangepos crasher.</notextile>
[ce1bbfe](https://github.com/scala/scala/commit/ce1bbfe) | <notextile>Regex.unapplySeq should not take Any (Fixes SI-6406)</notextile>
[29a5970](https://github.com/scala/scala/commit/29a5970) | <notextile>Added utility function shortClass.</notextile>
[dee6a34](https://github.com/scala/scala/commit/dee6a34) | <notextile>Renamed hasSymbol to hasSymbolField.</notextile>
[6c7e6eb](https://github.com/scala/scala/commit/6c7e6eb) | <notextile>Worked over inferMethodAlternative.</notextile>
[88fa89c](https://github.com/scala/scala/commit/88fa89c) | <notextile>Replaced some &lt;code&gt; comments.</notextile>
[b405a29](https://github.com/scala/scala/commit/b405a29) | <notextile>SI-6467: Zero element in aggregate now by-name</notextile>
[53e8009](https://github.com/scala/scala/commit/53e8009) | <notextile>Fix for gluttunous raw type creation.</notextile>
[968f492](https://github.com/scala/scala/commit/968f492) | <notextile>Fix scaladoc links in a couple of places.</notextile>
[ad65b28](https://github.com/scala/scala/commit/ad65b28) | <notextile>Bump version number for next dev cycle.</notextile>
[bc6815b](https://github.com/scala/scala/commit/bc6815b) | <notextile>More retrofit of scaladoc model factory.</notextile>
[81226b8](https://github.com/scala/scala/commit/81226b8) | <notextile>Recovered a bunch of deleted tests.</notextile>
[d207479](https://github.com/scala/scala/commit/d207479) | <notextile>Fix for TypeVar instantiation.</notextile>
[32e70a0](https://github.com/scala/scala/commit/32e70a0) | <notextile>Fix for SI-4729, overriding java varargs in scala.</notextile>
[75a075b](https://github.com/scala/scala/commit/75a075b) | <notextile>Fix for SI-5353, imperfect error message.</notextile>
[8886d22](https://github.com/scala/scala/commit/8886d22) | <notextile>Fix for SI-5859, inapplicable varargs.</notextile>
[d892e8b](https://github.com/scala/scala/commit/d892e8b) | <notextile>Fix for SI-5130, precision disappearing from refinement.</notextile>
[6476eb3](https://github.com/scala/scala/commit/6476eb3) | <notextile>Purged DebruijnIndex.</notextile>
[d16326a](https://github.com/scala/scala/commit/d16326a) | <notextile>Fix for SI-6452, leak in ListBuffer.</notextile>
[f2f4f55](https://github.com/scala/scala/commit/f2f4f55) | <notextile>Some cleanups in Macros.</notextile>
[9ad9896](https://github.com/scala/scala/commit/9ad9896) | <notextile>Fix for SI-6447, macro dependent type propagation.</notextile>
[ddcf5ce](https://github.com/scala/scala/commit/ddcf5ce) | <notextile>Fix class loader issues in instrumentation tests.</notextile>
[97ede5a](https://github.com/scala/scala/commit/97ede5a) | <notextile>Simplifications in typedIdent.</notextile>
[e6f10b0](https://github.com/scala/scala/commit/e6f10b0) | <notextile>Fixed SI-5604, selections on package objects.</notextile>
[83b5d4c](https://github.com/scala/scala/commit/83b5d4c) | <notextile>Comments explaining some brokenness in Namers.</notextile>
[b45a91f](https://github.com/scala/scala/commit/b45a91f) | <notextile>Expanded an error message from the backend.</notextile>
[d47a15b](https://github.com/scala/scala/commit/d47a15b) | <notextile>Pending tests for SI-5954, SI-6225, SI-5877, SI-4695.</notextile>
[3992f23](https://github.com/scala/scala/commit/3992f23) | <notextile>A wrapper for selecting tests for partest.</notextile>
[676d895](https://github.com/scala/scala/commit/676d895) | <notextile>SI-6381 Honour -Yrangepos in the REPL</notextile>
[0a1f923](https://github.com/scala/scala/commit/0a1f923) | <notextile>A couple minor .gitattributes additions.</notextile>
[da29b3f](https://github.com/scala/scala/commit/da29b3f) | <notextile>Remove extraneous null check in RedBlackTree</notextile>
[87f1f99](https://github.com/scala/scala/commit/87f1f99) | <notextile>Scaladoc cleanup. Review by @VladUreche.</notextile>
[4a04725](https://github.com/scala/scala/commit/4a04725) | <notextile>Cleanup makeShadowingTable, save some memory. Review by @VladUreche or @heatherm</notextile>
[cc56187](https://github.com/scala/scala/commit/cc56187) | <notextile>SI-6315 fixed.</notextile>
[518a8e2](https://github.com/scala/scala/commit/518a8e2) | <notextile>Additional Actor Migration test cases.</notextile>
[aa90f53](https://github.com/scala/scala/commit/aa90f53) | <notextile>Make the scalac Ant task recognise -Yrangepos</notextile>
[00e46b3](https://github.com/scala/scala/commit/00e46b3) | <notextile>Mention BoundedWildcardType in &quot;a standard type pattern match&quot;.</notextile>
[2b4e718](https://github.com/scala/scala/commit/2b4e718) | <notextile>Make RefChecks#validateVariance aware of BoundedWildcardType.</notextile>
[2110565](https://github.com/scala/scala/commit/2110565) | <notextile>SI-3577 Make varianceInType aware of BoundedWildcardType.</notextile>
[c49e235](https://github.com/scala/scala/commit/c49e235) | <notextile>SI-6295: Introduced NoExternalID, fixed DocType's documentation.</notextile>
[ccbc51d](https://github.com/scala/scala/commit/ccbc51d) | <notextile>Test case for SI-6301.</notextile>
[8706ad0](https://github.com/scala/scala/commit/8706ad0) | <notextile>Culling debugging code.</notextile>
[1d70cac](https://github.com/scala/scala/commit/1d70cac) | <notextile>Hardening specialization and others.</notextile>
[7e4d8a4](https://github.com/scala/scala/commit/7e4d8a4) | <notextile>Minor library changes to help overloading issues.</notextile>
[d48021c](https://github.com/scala/scala/commit/d48021c) | <notextile>Eliminated more overloaded types after typer.</notextile>
[7206df0](https://github.com/scala/scala/commit/7206df0) | <notextile>Don't synthesize trees with overloaded calls.</notextile>
[a3680be](https://github.com/scala/scala/commit/a3680be) | <notextile>Actual fix for SI-6301, specialized crasher.</notextile>
[f4c45ae](https://github.com/scala/scala/commit/f4c45ae) | <notextile>Rewrite of GenICode adapt.</notextile>
[74842f7](https://github.com/scala/scala/commit/74842f7) | <notextile>Workaround for SI-6301, @specialize crasher.</notextile>
[1a32068](https://github.com/scala/scala/commit/1a32068) | <notextile>Warn when overloaded types are seen after typer.</notextile>
[6917599](https://github.com/scala/scala/commit/6917599) | <notextile>SI-6278 fixed: synthetic implicit def must sort with its associated implicit cla</notextile>
[4692ce2](https://github.com/scala/scala/commit/4692ce2) | <notextile>Used methods according to @paulp suggestions.</notextile>
[2527a5a](https://github.com/scala/scala/commit/2527a5a) | <notextile>Use proper Option methods instead of .get in scaladoc ModelFactory. Review by @u</notextile>
[72315f5](https://github.com/scala/scala/commit/72315f5) | <notextile>Clear undo log after each unit has been type-checked to prevent 300M memory lost</notextile>
[20583c7](https://github.com/scala/scala/commit/20583c7) | <notextile>Fix SBT sha resolution for new * in sha files.</notextile>
[656a1c4](https://github.com/scala/scala/commit/656a1c4) | <notextile>On --grep, partest must dir.list to descend into subdirs (fixes SI-6296)</notextile>
[a2b3030](https://github.com/scala/scala/commit/a2b3030) | <notextile>Fix version detection to be the first word.</notextile>
[0b7aaa5](https://github.com/scala/scala/commit/0b7aaa5) | <notextile>Fix raw string interpolator: string parts which were after the first argument we</notextile>
[9733f56](https://github.com/scala/scala/commit/9733f56) | <notextile>Fixes SI-4996.</notextile>
[823239f](https://github.com/scala/scala/commit/823239f) | <notextile>Modified SI-6150 fix again.</notextile>
[0fc0038](https://github.com/scala/scala/commit/0fc0038) | <notextile>Modified SI-6150 fix to use intended ReusableCBF.</notextile>
[0308ae8](https://github.com/scala/scala/commit/0308ae8) | <notextile>Fixes SI-6150.</notextile>
[a158487](https://github.com/scala/scala/commit/a158487) | <notextile>Added test that should cover all code paths of the changes done in SI-6220</notextile>
[5be6e64](https://github.com/scala/scala/commit/5be6e64) | <notextile>Improve efficiency of updated</notextile>
[db46c71](https://github.com/scala/scala/commit/db46c71) | <notextile>Improvement for SI-2251, failure to lub f-bounds.</notextile>
[0aa77ff](https://github.com/scala/scala/commit/0aa77ff) | <notextile>Warn about catching non-local returns.</notextile>
[fbbbb22](https://github.com/scala/scala/commit/fbbbb22) | <notextile>Made -Xfatal-warnings less immediately fatal.</notextile>
[eb2375c](https://github.com/scala/scala/commit/eb2375c) | <notextile>Warn when Any or AnyVal is inferred.</notextile>
[c7e733e](https://github.com/scala/scala/commit/c7e733e) | <notextile>SI-6119 Fix mispelling on take documentation.</notextile>
[434adb1](https://github.com/scala/scala/commit/434adb1) | <notextile>Want a 25% partest speedup?*</notextile>
[4b0f6d9](https://github.com/scala/scala/commit/4b0f6d9) | <notextile>Don't know how git merge loses a whole brace.</notextile>
[48f8235](https://github.com/scala/scala/commit/48f8235) | <notextile>Fix for SI-6154, VerifyError originating in uncurry.</notextile>
[855f01b](https://github.com/scala/scala/commit/855f01b) | <notextile>SI-6064 Add method contains to Option.</notextile>
[5f31daa](https://github.com/scala/scala/commit/5f31daa) | <notextile>Fixes typo in Throwable compiler warning</notextile>
[b79c760](https://github.com/scala/scala/commit/b79c760) | <notextile>Removed restriction on final vars, SI-2418.</notextile>
[adeffda](https://github.com/scala/scala/commit/adeffda) | <notextile>Refined isEffectivelyFinal logic for sealedness.</notextile>
[07824e5](https://github.com/scala/scala/commit/07824e5) | <notextile>SI-4023 Testcase closes issue with inner classes/getDeclaredClasses</notextile>
[188083e](https://github.com/scala/scala/commit/188083e) | <notextile>Optimization in List.</notextile>
[fa63170](https://github.com/scala/scala/commit/fa63170) | <notextile>Removed &quot;core classes first&quot; logic.</notextile>
[2dbeff0](https://github.com/scala/scala/commit/2dbeff0) | <notextile>Renaming files to please ant.</notextile>
[1079a63](https://github.com/scala/scala/commit/1079a63) | <notextile>A missed checkfile for pull #949.</notextile>
[b68d572](https://github.com/scala/scala/commit/b68d572) | <notextile>Expanded use of HIDDEN flag.</notextile>
[186f57a](https://github.com/scala/scala/commit/186f57a) | <notextile>Improve unchecked warnings.</notextile>
[97ce709](https://github.com/scala/scala/commit/97ce709) | <notextile>Missed a couple test case renames.</notextile>
[2e69ae4](https://github.com/scala/scala/commit/2e69ae4) | <notextile>Renaming phase time-travel methods.</notextile>
[41869c3](https://github.com/scala/scala/commit/41869c3) | <notextile>Changes suggested by @retronym and @jsuereth</notextile>
[ab0e09b](https://github.com/scala/scala/commit/ab0e09b) | <notextile>SI-5906 Search for sorted sequences</notextile>
[6559722](https://github.com/scala/scala/commit/6559722) | <notextile>Closes SI-6072, crasher with overloaded eq.</notextile>
[9e101a3](https://github.com/scala/scala/commit/9e101a3) | <notextile>Simplify raw types logic.</notextile>
[d9c9e58](https://github.com/scala/scala/commit/d9c9e58) | <notextile>Removed AestheticSettings.</notextile>
[e293420](https://github.com/scala/scala/commit/e293420) | <notextile>Moved two tests to preserve path uniqueness.</notextile>
[48b128d](https://github.com/scala/scala/commit/48b128d) | <notextile>SI-6052 - fix groupBy on parallel collections</notextile>
[761c5fe](https://github.com/scala/scala/commit/761c5fe) | <notextile>  New make release notes script, this time scala-ified for more POWER, cap'n.</notextile>
[7f8be07](https://github.com/scala/scala/commit/7f8be07) | <notextile>Bump version number for new nightlies.</notextile>


      