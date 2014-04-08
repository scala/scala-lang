---
layout: news
post-type: announcement
title: "Scala 2.11.0-RC4 is now available!"
---
<!-- comment at the top because it breaks the markdown parser when it's where we'd actually like it...
Things to update:
- replace 2.11.0-RC4 by actual version,
- milestone=32 by actual milestone number
- bug/PR counts
-->

We are very pleased to announce Scala 2.11.0-RC4, the next release candidate of Scala 2.11.0! Download it now from [scala-lang.org](http://scala-lang.org/download/2.11.0-RC4.html) or via [Maven Central](http://search.maven.org/%23search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.11.0-RC4%22).

Since RC3, we've fixed two blocker bugs, and admitted some final polish for macros and quasiquotes. Here's the [difference between RC4 and RC3](https://github.com/scala/scala/compare/v2.11.0-RC3...v2.11.0-RC4).

Please do try out this release candidate to help us find any serious regressions before the final release. The next release candidate (or the final) will be cut on Friday April 11, if there are no unresolved blocker bugs. Our goal is to have the next release be the final -- please help us make sure there are no important regressions!

Code that compiled on 2.10.x without deprecation warnings should compile on 2.11.x (we do no guarantee this for experimental APIs, such as reflection). If not, [please file a regression](https://issues.scala-lang.org/secure/CreateIssueDetails!init.jspa?pid=10005&issuetype=1&versions=11311&labels=regression). We are working with the community to ensure availability of the core projects of the Scala 2.11.x eco-system, please see below for a list. This release is *not* binary compatible with the 2.10.x series, to allow us to keep improving the Scala standard library.

For production use, we recommend the latest stable release, 2.10.4.

<!--break-->

The Scala 2.11.x series targets Java 6, with (evolving) experimental support for Java 8. In 2.11.0, Java 8 support is mostly limited to reading Java 8 bytecode and parsing Java 8 source. Stay tuned for more complete (experimental) Java 8 support.

The Scala team and contributors [fixed 613 bugs](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20and%20fixVersion%20>%3D%20"Scala%202.11.0-M1"%20and%20fixVersion%20<%3D%20"Scala%202.11.0-RC4"%20and%20resolution%20%3D%20fixed) that are exclusive to Scala 2.11.0-RC4! We also backported as many as possible. With the release of 2.11, 2.10 backports will be dialed back.

Since the last RC, we fixed [11 issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20fixVersion%20%3D%20"Scala%202.11.0-RC4"%20AND%20resolution%20%3D%20fixed%20ORDER%20BY%20priority%20DESC) via [37 merged pull requests](https://github.com/scala/scala/issues?milestone=36&state=closed).

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, participating in mailing lists and other public fora, and -- of course -- submitting and reviewing pull requests! You are all awesome.

Concretely, according to `git log --no-merges --oneline master --not 2.10.x --format='%aN'  | sort | uniq -c | sort -rn`, 111 people contributed code, tests, and/or documentation to Scala 2.11.x: Paul Phillips,  Jason Zaugg,  Eugene Burmako,  Adriaan Moors,  Den Shabalin,  Simon Ochsenreither,  A. P. Marki,  Miguel Garcia,  James Iry,  Denys Shabalin,  Rex Kerr,  Grzegorz Kossakowski,  Vladimir Nikolaev,  Eugene Vigdorchik,  François Garillot,  Mirco Dotta,  Rüdiger Klaehn,  Raphael Jolly,  Kenji Yoshida,  Paolo Giarrusso,  Antoine Gourlay,  Hubert Plociniczak,  Aleksandar Prokopec,  Simon Schaefer,  Lex Spoon,  Andrew Phillips,  Sébastien Doeraene,  Luc Bourlier,  Josh Suereth,  Jean-Remi Desjardins,  Vojin Jovanovic,  Vlad Ureche,  Viktor Klang,  Valerian,  Prashant Sharma,  Pavel Pavlov,  Michael Thorpe,  Jan Niehusmann,  Heejong Lee,  George Leontiev,  Daniel C. Sobral,  Christoffer Sawicki,  yllan,  rjfwhite,  Volkan Yazıcı,  Ruslan Shevchenko,  Robin Green,  Olivier Blanvillain,  Lukas Rytz,  Iulian Dragos,  Ilya Maykov,  Eugene Yokota,  Erik Osheim,  Dan Hopkins,  Chris Hodapp,  Antonio Cunei,  Andriy Polishchuk,  Alexander Clare,  杨博,  srinivasreddy,  secwall,  nermin,  martijnhoekstra,  jinfu-leng,  folone,  Yaroslav Klymko,  Xusen Yin,  Trent Ogren,  Tobias Schlatter,  Thomas Geier,  Stuart Golodetz,  Stefan Zeiger,  Scott Carey,  Samy Dindane,  Sagie Davidovich,  Runar Bjarnason,  Roland Kuhn,  Roberto Tyley,  Robert Nix,  Robert Ladstätter,  Rike-Benjamin Schuppner,  Rajiv,  Philipp Haller,  Nada Amin,  Mike Morearty,  Michael Bayne,  Mark Harrah,  Luke Cycon,  Lee Mighdoll,  Konstantin Fedorov,  Julio Santos,  Julien Richard-Foy,  Juha Heljoranta,  Johannes Rudolph,  Jiawei Li,  Jentsch,  Jason Swartz,  James Ward,  James Roper,  Havoc Pennington,  Evgeny Kotelnikov,  Dmitry Petrashko,  Dmitry Bushev,  David Hall,  Daniel Darabos,  Dan Rosen,  Cody Allen,  Carlo Dapor,  Brian McKenna,  Andrey Kutejko,  Alden Torres.

Thank you all very much.

If you find any errors or omissions in these relates notes, [please submit a PR](https://github.com/scala/make-release-notes/blob/master/hand-written.md)!

### Reporting Bugs / Known Issues
Please [file any bugs you encounter](https://issues.scala-lang.org/secure/CreateIssueDetails!init.jspa?pid=10005&issuetype=1&versions=11311). If you're unsure whether something is a bug, please contact the [scala-user](https://groups.google.com/forum/?fromgroups#!forum/scala-user) mailing list.

Before reporting a bug, please have a look at these [known issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20fixVersion%20%21%3D%20%22Scala%202.11.0-RC3%22%20AND%20affectedVersion%20%3D%20%22Scala%202.11.0-RC4%22%20%20and%20resolution%20%3D%20unresolved%20ORDER%20BY%20priority%20DESC).

### Scala IDE for Eclipse
The Scala IDE with this release built in is [available from this update site](http://download.scala-ide.org/sdk/helium/e38/scala211/dev/site/) for [Eclipse 4.2/4.3 (Juno/Kepler)](http://www.eclipse.org/downloads/packages/eclipse-ide-java-developers/keplersr2). Please have a look at the [getting started guide](http://scala-ide.org/docs/user/gettingstarted.html) for more info.

### Available projects
The following Scala projects have already been released against 2.11.0-RC4! We'd love to include yours in this list as soon as it's available -- please submit a PR to update [these release notes](https://github.com/scala/make-release-notes/blob/master/hand-written.md).

    "com.typesafe.akka"      %% "akka-actor"         % "2.3.0"
    "org.scalatest"          %% "scalatest"          % "2.1.3"
    "org.scala-lang.modules" %% "scala-async"        % "0.9.1"

The following projects were released against 2.11.0-RC3, with an RC4 build hopefully following soon:

    "org.scalacheck"         %% "scalacheck"         % "1.11.3"
    "org.scalafx"            %% "scalafx"            % "1.0.0-R8"
    "org.scalafx"            %% "scalafx"            % "8.0.0-R4"
    "com.github.scopt"       %% "scopt"              % "3.2.0"
    "org.specs2"             %% "specs2"             % "2.3.10"
    "org.scalaz"             %% "scalaz-core"        % "7.0.6"
    "com.nocandysw"          %% "platform-executing" % "0.5.0"
    "io.argonaut"            %% "argonaut"           % "6.0.3"
    "com.clarifi"            %% "f0"                 % "1.1.1"
    "org.parboiled"          %% "parboiled-scala"    % "1.1.6"
    "com.sksamuel.scrimage"  %% "scrimage"           % "1.3.16"

### Cross-building with sbt 0.13
When cross-building between Scala versions, you often need to vary the versions of your dependencies. In particular, the new scala modules (such as scala-xml) are no longer included in scala-library, so you'll have to add an explicit dependency on it to use Scala's xml support.

Here's how we recommend handling this in sbt 0.13. For the full build and Maven build, see [example](https://github.com/scala/scala-module-dependency-sample).

    scalaVersion        := "2.11.0-RC4"

    crossScalaVersions  := Seq("2.11.0-RC4", "2.10.3")

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
  * The core Scala standard library jar has shed 20% of its bytecode. The modules for xml, parsing, swing as well as the (unsupported) continuations plugin and library are available individually or via [scala-library-all](http://search.maven.org/#artifactdetails%7Corg.scala-lang%7Cscala-library-all%7C2.11.0-RC4%7Cpom). Note that this artifact has weaker binary compatibility guarantees than `scala-library` -- as explained above.
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
  * [Numerous bug fixes and improvements!](https://issues.scala-lang.org/browse/SI-8085?jql=component%20%3D%20%22Presentation%20Compiler%22%20AND%20project%20%3D%20SI%20AND%20resolution%20%3D%20fixed%20and%20fixVersion%20%3E%3D%20%22Scala%202.11.0-M1%22%20and%20fixVersion%20%3C%3D%20%20%22Scala%202.11.0-RC4%22%20ORDER%20BY%20updated%20DESC)
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
68 | <notextile>Adriaan Moors</notextile>
40 | <notextile>Iain McGinniss</notextile>
9 | <notextile>Jason Zaugg</notextile>
7 | <notextile>Denys Shabalin</notextile>
5 | <notextile>Eugene Burmako</notextile>
5 | <notextile>Simon Ochsenreither</notextile>
4 | <notextile>A. P. Marki</notextile>
1 | <notextile>Grzegorz Kossakowski</notextile>
1 | <notextile>Fran&ccedil;ois Garillot</notextile>



#### Commits and the issues they fixed since v2.11.0-RC3

Issue(s) | Commit | Message
--- | --- | ---
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




#### Complete commit list!

sha | Title
---: | ---
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


      