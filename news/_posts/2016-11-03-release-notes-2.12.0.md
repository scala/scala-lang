---
layout: news
post-type: announcement
permalink: /news/2.12.0
title: "Scala 2.12.0 is now available!"
---
We are very happy to announce the availability of Scala 2.12.0!

The Scala 2.12 compiler has been completely overhauled to make use of the new VM features available in Java 8:

  - A trait [compiles directly to an interface](#trait-compiles-to-an-interface) with default methods. This improves binary compatibility and Java interoperability.
  - Scala and Java 8 interop is also improved for functional code, as methods that take functions can easily be called in each direction using lambda syntax. The  `FunctionN` classes in Scala's standard library are now Single Abstract Method (SAM) types, and all [SAM types](#lambda-syntax-for-sam-types) are treated uniformly -- from type checking until code generation (no class file is generated for lambdas, and `invokedynamic` is used instead).

This release ships with a powerful [new optimizer](#new-optimizer). Many more (effectively) final methods, including those defined in objects and traits, are now inlined. As well, closure allocations, dead code and box/unbox pairs are eliminated more effectively.

From now on, 2.12.x releases will be fully binary compatible. This release is identical to 2.12.0-RC2.

The [list of open-source libraries](https://github.com/scala/make-release-notes/blob/2.12.x/projects-2.12.md) released for Scala 2.12 is growing quickly!

Our [roadmap](https://github.com/scala/scala/milestones) lists the following upcoming releases for 2016: 2.12.1 will be out shortly (by the end of November) to address some known (but rare) issues in 2.12.0, and 2.11.9 is the last planned 2.11.x release (due by mid December). In the next few weeks, we at Lightbend will share our plans for Scala 2.13.


## Known issues
There are some [known issues](https://issues.scala-lang.org/browse/SI-10009?jql=project%20%3D%20SI%20AND%20affectedVersion%20%3D%20%22Scala%202.12.0%22) with this release that [will be resolved](https://github.com/scala/scala/pulls?q=is%3Apr+milestone%3A2.12.1+label%3Arelease-notes) in 2.12.1, due by the end of November.

The heavy use of default methods for compiling traits caused some performance regressions in the startup time of Scala applications. Note that steady-state performance is not affected according to our measurements.

The regression was mitigated 2.12.0-RC2 (and the final release) by generating forwarder methods in classes that inherit concrete methods form trait, which unfortunately [increases bytecode size while improving JVM startup performance](https://github.com/scala/scala/pull/5429).

Please let us know if you notice any performance regressions. We will continue to tweak the bytecode during the 2.12.x cycle to get the best performance out of the JVM.

We hope to address the following in a future 2.12.x release:

  - [SI-9824](https://issues.scala-lang.org/browse/SI-9824): Parallel collections are prone to deadlock in the REPL and in object initializers.

## Obtaining Scala

### Java 8 runtime
Install a recent build of the Java 8 Platform, from [OpenJDK](http://openjdk.java.net/install/) or [Oracle](http://www.oracle.com/technetwork/java/javase/downloads/index.html). Any Java 8 compliant run-time will do. We are planning to add (some) support for Java 9 in the near future. Full Java 9 support will be part of the 2.13 roadmap discussions.

### Build tool
We recommend using [sbt 0.13.13](http://www.scala-sbt.org/download.html). Simply bump the `scalaVersion` setting in your existing project, or start a new project using `sbt new scala/scala-seed.g8`. We strongly recommend upgrading to sbt 0.13.13 for [templating support using the new command](https://github.com/sbt/sbt/pull/2705), [faster compilation](https://github.com/sbt/sbt/pull/2754), and [much more](http://www.scala-sbt.org/0.13/docs/sbt-0.13-Tech-Previews.html#sbt+0.13.13)!

Please head over to the [scala-seed repo](https://github.com/scala/scala-seed.g8) to extend this [giter8 template](https://github.com/foundweekends/giter8) with an example of your favorite 2.12 feature!

Scala also works with ant, [maven](http://docs.scala-lang.org/tutorials/scala-with-maven.html) and [gradle](https://docs.gradle.org/current/userguide/scala_plugin.html). You can also download a distribution from [scala-lang.org](http://scala-lang.org/download/2.12.0.html), or obtain the JARs yourself via [Maven Central](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.12.0%22).


## Contributors

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, kindly helping others on our forums and at meetups, and submitting and reviewing pull requests! You are all magnificent.

Scala 2.12.0 is the result of merging over [500 pull requests](https://github.com/scala/scala/pulls?utf8=%E2%9C%93&q=is%3Amerged%20label%3A2.12%20) out of about [600 received PRs](https://github.com/scala/scala/pulls?utf8=%E2%9C%93&q=is%3Apr%20label%3A2.12%20). The [contributions to 2.12.x](https://github.com/scala/scala/graphs/contributors?from=2014-11-01&to=2016-10-29&type=c) over the last 2 years [were split](https://docs.google.com/spreadsheets/d/16zVViCpJEZn_x2RlYFh-xAOiHJG3SrYYpfetRr5cu_Y/edit#gid=912693440) as 64/32/4 between the Scala team at Lightbend ([lrytz](https://github.com/lrytz), [retronym](https://github.com/retronym), [adriaanm](https://github.com/adriaanm), [SethTisue](https://github.com/SethTisue), [szeiger](https://github.com/szeiger)), the community and EPFL.

The new encodings of traits, lambdas and lazy vals were developed in fruitful collaboration with the Dotty team at EPFL.

## Binary compatibility

Since Scala 2.10, minor releases of Scala are binary compatible with each other. We maintain [this policy](http://docs.scala-lang.org/overviews/core/binary-compatibility-of-scala-releases.html) for 2.12.x.

Although Scala 2.11 and 2.12 are mostly source compatible to facilitate cross-building, they are not *binary* compatible.  This allows us to keep improving the Scala compiler and standard library.


## Scala 2.12 overview

Scala 2.12 is all about making optimal use of Java 8's new features (and thus generates code that requires a Java 8 runtime).

  - Traits ([#5003](https://github.com/scala/scala/pull/5003)) and functions are compiled to their Java 8 equivalents. The compiler no longer generates trait implementation classes (`T$class.class`) and anonymous function classes (`C$$anonfun$1.class`).
  - We treat Single Abstract Method types and Scala's builtin function types uniformly from type checking to the back end ([#4971](https://github.com/scala/scala/pull/4971)).
  - In addition to compiling functions, we also use `invokedynamic` for a more natural encoding of other language features ([#4896](https://github.com/scala/scala/pull/4896)).
  - We've standardized on the GenBCode back end ([#4814](https://github.com/scala/scala/pull/4814), [#4838](https://github.com/scala/scala/pull/4838)) and the flat classpath implementation is now the default ([#5057](https://github.com/scala/scala/pull/5057)).
  - The optimizer has been completely overhauled for 2.12.

The new encodings for traits and lambdas lead to significantly smaller JAR files. For example, for scalatest 3.0.0, the jar size went from 9.9M in 2.11.8 to 6.7M.

Except for the breaking changes listed below, code that compiles on 2.11.x without deprecation warnings should compile on 2.12.x, unless you use experimental APIs such as reflection.  If you find incompatibilities that are not [listed below](#breaking-changes), please [file an issue](https://issues.scala-lang.org).

Thanks to source compatibility, cross-building is a one-line change to most sbt builds. Where needed, sbt provides support for [version-specific source folders](http://www.scala-sbt.org/0.13/docs/sbt-0.13-Tech-Previews.html#Cross-version+support+for+Scala+sources) out of the box.

### New language features
The next sections introduce new features and breaking changes in Scala 2.12 in more detail. To understand more technicalities and review past discussions, you can also take a look at the full list of [noteworthy pull request](https://github.com/scala/scala/pulls?utf8=%E2%9C%93&q=%20is%3Amerged%20label%3A2.12%20label%3Arelease-notes%20) that went into this release.

#### Trait compiles to an interface

With Java 8 allowing concrete methods in interfaces, Scala 2.12 is able to compile a trait to a single interface classfile. Before, a trait was represented as an interface and a class that held the method implementations (`T$class.class`).

Note that the compiler still has quite a bit of magic to perform behind the scenes, so that care must be taken if a trait is meant to be implemented in Java. Briefly, if a trait does any of the following its subclasses require synthetic code: defining fields ( `val` or `var`, but a constant is ok -- `final val` without result type), calling super, initializer statements in the body, extending a class, relying on linearization to find implementations in the right super trait.

#### Lambda syntax for SAM types

The Scala 2.12 type checker accepts a function literal as a valid expression for any Single Abstract Method (SAM) type, in addition to the `FunctionN` types from standard library. This improves the experience of using libraries written for Java 8 in Scala. For example, in the REPL:

    scala> val runRunnable: Runnable = () => println("Run!")
    runRunnable: Runnable = $$Lambda$1073/754978432@7cf283e1

    scala> runRunnable.run()
    Run!

Note that only lambda expressions are converted to SAM type instances, not arbitrary expressions of `FunctionN` type:

    scala> val f = () => println("Faster!")

    scala> val fasterRunnable: Runnable = f
    <console>:12: error: type mismatch;
     found   : () => Unit
     required: Runnable

The language specification has the [full list of requirements for SAM conversion](http://www.scala-lang.org/files/archive/spec/2.12/06-expressions.html#sam-conversion).

With the use of default methods, Scala's built-in `FunctionN` traits are compiled to SAM interfaces. This allows creating Scala functions from Java using Java's lambda syntax:

    public class A {
      scala.Function1<String, String> f = s -> s.trim();
    }

Specialized function classes are also SAM interfaces and can be found in the package `scala.runtime.java8`.

Thanks to an improvement in type-checking, the parameter type in a lambda expression can be omitted even when the invoked method is overloaded (see [#5307](https://github.com/scala/scala/pull/5307)). In the following example, the compiler infers parameter type `Int` for type checking the lambda:

    scala> trait MyFun { def apply(x: Int): String }

    scala> object T {
         |   def m(f: Int => String) = 0
         |   def m(f: MyFun) = 1
         | }

    scala> T.m(x => x.toString)
    res0: Int = 0

Note that both methods are applicable, and overloading resolution selects the one with the `Function1` argument type, as [explained in more detail below](#sam-conversion-in-overloading-resolution).

#### Java 8-style bytecode for lambdas

Scala 2.12 emits bytecode for functions in the same style as Java 8, whether they target a `FunctionN` class from the standard library or a user-defined Single Abstract Method (SAM) type.

For each lambda the compiler generates a method containing the lambda body, and emits an `invokedynamic` that will spin up a lightweight class for this closure using the JDK's `LambdaMetaFactory`. Note that in the following situations, an anonymous function class is still synthesized at compile-time:

  - If the SAM type is not a simple interface, for example an abstract class or a trait with a field definition (see [#4971](https://github.com/scala/scala/pull/4971))
  - If the abstract method is specialized - except for `scala.FunctionN`, whose specialized variants can be instantiated using `LambdaMetaFactory` (see [#4971](https://github.com/scala/scala/pull/4971))
  - If the function literal is defined in a constructor or a super call ([#3616](https://github.com/scala/scala/pull/3616))

Compared to Scala 2.11, the new scheme has the advantage that, in most cases, the compiler does not need to generate an anonymous class for each closure.

Our backend support for `invokedynamic` is also available to macro authors, as shown in [this test case](https://github.com/scala/scala/blob/v2.12.0/test/files/run/indy-via-macro-with-dynamic-args/macro_1.scala).


#### Partial unification for type constructor inference

Compiling with `-Ypartial-unification` improves type constructor inference with support for partial unification, fixing the notorious [SI-2712](https://issues.scala-lang.org/browse/SI-2712). Thank you, [Miles Sabin](https://github.com/milessabin) for contributing [your implementation](https://github.com/scala/scala/pull/5102) (and [backporting to 2.11.9](https://github.com/scala/scala/pull/5343))!

Also, hat tip to Daniel Spiewak for [a great explanation of this feature](https://gist.github.com/djspiewak/7a81a395c461fd3a09a6941d4cd040f2).

For now, we recommend using `-Ypartial-unification` over `-Xexperimental`, as the latter enables some surprising features that will not ship with a future release of Scala.

#### New representation and locking scope for local lazy vals

Local lazy vals and objects, i.e., those defined in methods, now use a more efficient representation (implemented in [#5294](https://github.com/scala/scala/pull/5294) and [#5374](https://github.com/scala/scala/pull/5374)).

In Scala 2.11, a local lazy val is encoded using two heap-allocated objects (one for the value, a second for the initialized flag), and initialization synchronizes on the enclosing class instance. With the new [representation for lambdas](#java-8-style-bytecode-for-lambdas) in 2.12, which emits the lambda body as a method in the enclosing class, this encoding can cause new deadlocks for lazy vals or objects defined in the lambda body.

This has been fixed by creating a single heap-allocated object that holds both the value and the initialized flag, and is at the same time used as initialization lock. A similar implementation already existed in Dotty.

#### Better type inference for Scala.js

The [improved type inference for lambda parameters](#lambda-syntax-for-sam-types) also benefits `js.Function`s. For example, you can now write:

    dom.window.requestAnimationFrame { now => // inferred as Double
      ...
    }

without having to specify `(now: Double)` explicitly. In a similar spirit, the [new inference for overriding `val`s](#inferred-types-for-fields) allows to more easily implement Scala.js-defined JS traits with anonymous objects. For example:

    @ScalaJSDefined
    trait SomeOptions extends js.Object {
      val width: Double | String // e.g., "300px"
    }
    val options = new SomeOptions {
      val width = 200 // implicitly converted from Int to the inferred Double | String
    }

### Tooling improvements

#### New back end

Scala 2.12 standardizes on the "GenBCode" back end, which emits code more quickly because it directly generates bytecode from Scala compiler trees, while the previous back end used an intermediate representation called "ICode". The old back ends (GenASM and GenIcode) have been removed ([#4814](https://github.com/scala/scala/pull/4814), [#4838](https://github.com/scala/scala/pull/4838)).


#### New optimizer

The GenBCode back end includes a new inliner and bytecode optimizer. The optimizer is configured using the `-opt` compiler option. By default it only removes unreachable code within a method. Check `-opt:help` to see the list of available options for the optimizer.

The following optimizations are available:

* Inlining final methods, including methods defined in objects and final methods defined in traits
* If a closure is allocated and invoked within the same method, the closure invocation is replaced by an invocations of the corresponding lambda body method
* Dead code elimination and a small number of cleanup optimizations
* Box/unbox elimination [#4858](https://github.com/scala/scala/pull/4858): primitive boxes and tuples that are created and used within some method without escaping are eliminated.

For example, the following code

    def f(a: Int, b: Boolean) = (a, b) match {
      case (0, true) => -1
      case _ if a < 0 => -a
      case _ => a
    }

produces, when compiled with `-opt:l:method`, the following bytecode (decompiled using [cfr](http://www.benf.org/other/cfr/)):

    public int f(int a, boolean b) {
      int n = 0 == a && true == b ? -1 : (a < 0 ? - a : a);
      return n;
    }

The optimizer supports inlining (disabled by default). With `-opt:l:project` code from source files currently being compiled is inlined, while `-opt:l:classpath` enables inlining code from libraries on the compiler's classpath. Other than methods marked [`@inline`](http://www.scala-lang.org/files/archive/api/2.12.0/scala/inline.html), higher-order methods are inlined if the function argument is a lambda, or a parameter of the caller.

Note that:

  - We recommend to enable inlining only for production builds, as sbt's incremental compilation does not track dependencies introduced by inlining.
  - When inlining code from the classpath, you need to ensure that all dependencies have exactly the same versions at compile time and run time.
  - If you are building a library to publish on Maven Central, you should not inline code from its dependencies. Users of your library might have different versions of its dependencies on the classpath, which breaks binary compatibility.

The Scala distribution is built using `-opt:l:classpath`, which improves the performance of the Scala compiler by roughly 5% (hot and cold, measured using our [JMH-based benchmark suite](https://github.com/scala/compiler-benchmark/blob/master/compilation/src/main/scala/scala/tools/nsc/ScalacBenchmark.scala)) compared to a non-optimized build.

The GenBCode backend and the implementation of the new optimizer are built on earlier work by Miguel Garcia.


#### Scaladoc look-and-feel overhauled

Scaladoc's output is now more attractive, more modern, and easier to use. Take a look at the [Scala Standard Library API](http://www.scala-lang.org/api/2.12.0).

Thanks, [Felix Mulder](https://github.com/felixmulder), for leading this effort.

#### Scaladoc can be used to document Java sources
This fix for [SI-4826](https://issues.scala-lang.org/browse/SI-4826) simplifies generating comprehensive documentation for projects with both Scala and Java sources. Thank you for your contribution, [Jakob Odersky](https://github.com/jodersky)!

This feature is enabled by default, but can be disabled with:

    scalacOptions in (Compile, doc) += "-no-java-comments"

Some projects with very large Javadoc comments may run into a stack overflow in the Javadoc scanner, which [will be fixed in 2.12.1](https://github.com/scala/scala/pull/5469).


#### Scala Shell ([REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop))
Scala's interactive shell ships with several spiffy improvements. To try it out, launch it from the command line with the `scala` script or in sbt using the `console` task. If you like color (who doesn't!), use `scala -Dscala.color` instead until [it's turned on by default](https://github.com/scala/scala-dev/issues/256).

Since 2.11.8, the REPL uses the same tab completion logic as Scala IDE and ENSIME, which greatly improves the experience! Check out the [PR description](https://github.com/scala/scala/pull/4725) for some tips and tricks.

#### sbt builds Scala

Scala itself is now completely built, tested and published with sbt! This makes it easier to get started hacking on the compiler and standard library. All you need on your machine is JDK 8 and sbt - no ant, no environment variables to set, no shell scripts to run. You can [build, use, test and publish](https://github.com/scala/scala/blob/2.12.x/README.md#using-the-sbt-build) Scala like any other sbt-based project. Due to the recursive nature of building Scala with itself, IntelliJ cannot yet import our sbt build directly -- use the `intellij` task instead to generate suitable project files.


### Library Improvements

#### Either is now right-biased

`Either` now supports operations like `map`, `flatMap`, `contains`, `toOption`, and so forth, which operate on the right-hand side. The `.left` and `.right` methods may be deprecated in favor of `.swap` in a later release.
The changes are source-compatible with existing code (except in the presence of conflicting extension methods).

This change has allowed other libraries, such as [cats](http://typelevel.org/cats/) to standardize on `Either`.

Thanks, [Simon Ochsenreither](https://github.com/soc), for this contribution.


#### Futures improved

A number of improvements to `scala.concurrent.Future` were made for Scala 2.12. This [blog post series](https://github.com/viktorklang/blog) by Viktor Klang explores them in detail.


#### scala-java8-compat

The [Java 8 compatibility module for Scala](https://github.com/scala/scala-java8-compat) has received an overhaul for Scala 2.12. Even though interoperability of Java 8 SAMs and Scala functions is now baked into the language, this module provides additional convenience for working with Java 8 SAMs. Java 8 streams support was also added during the development cycle of Scala 2.12. Releases are available for both Scala 2.11 and Scala 2.12.



### Other changes and deprecations

  - A [mutable TreeMap](http://www.scala-lang.org/files/archive/api/2.12.0/scala/collection/mutable/TreeMap.html) implementation was added ([#4504](https://github.com/scala/scala/pull/4504)).
  - [ListSet](http://www.scala-lang.org/files/archive/api/2.12.0/scala/collection/immutable/ListSet.html) and [ListMap](http://www.scala-lang.org/files/archive/api/2.12.0/scala/collection/immutable/ListMap.html) now ensure insertion-order traversal (in 2.11.x, traversal was in reverse order), and their performance has been improved ([#5103](https://github.com/scala/scala/pull/5103)).
  - The [`@deprecatedInheritance`](http://www.scala-lang.org/files/archive/api/2.12.0/scala/deprecatedInheritance.html) and [`@deprecatedOverriding`](http://www.scala-lang.org/files/archive/api/2.12.0/scala/deprecatedOverriding.html) are now public and available to library authors.
  - The `@hideImplicitConversion` Scaladoc annotation allows customizing which implicit conversions are hidden ([#4952](https://github.com/scala/scala/pull/4952)).
  - The `@shortDescription` Scaladoc annotation customizes the method summary on entity pages ([#4991](https://github.com/scala/scala/pull/4991)).
  - JavaConversions, providing implicit conversions between Scala and Java collection types, has been deprecated. We recommend using [JavaConverters](http://www.scala-lang.org/files/archive/api/2.12.0/scala/collection/JavaConverters$.html) and explicit `.asJava` / `.asScala` conversions.
  - Eta-expansion (conversion of a method to a function value) of zero-args methods has been deprecated, as this can lead to surprising behavior ([#5327](https://github.com/scala/scala/pull/5327)).
  - The Scala library is [free](https://github.com/scala/scala/pull/4443) of [references](https://github.com/scala/scala/pull/4712) to `sun.misc.Unsafe`, and [no longer ships](https://github.com/scala/scala/pull/4629) with a fork of the forkjoin library.
  - Exhaustiveness analysis in the pattern matcher has been improved ([#4919](https://github.com/scala/scala/pull/4919)).
  - We emit parameter names according to [JEP-118](http://openjdk.java.net/jeps/118), which makes them available to Java tools and exposes them through Java reflection.


## Breaking changes

### Object initialization locks and lambdas

In Scala 2.11, the body of a lambda is in the `apply` method of the anonymous function class generated at compile time. The new lambda encoding in 2.12 lifts the lambda body into a method in the enclosing class. An invocation of the lambda will therefore indirect through the enclosing class, which may cause deadlocks that did not happen before.

For example, the following code

    import scala.concurrent._
    import scala.concurrent.duration._
    import ExecutionContext.Implicits.global
    object O { Await.result(Future(1), 5.seconds) }

compiles to (simplified):

    public final class O$ {
      public static O$ MODULE$;
      public static final int $anonfun$new$1() { return 1; }
      public static { new O$(); }
      private O$() {
        MODULE$ = this;
        Await.result(Future.apply(LambdaMetaFactory(Function0, $anonfun$new$1)), DurationInt(5).seconds);
      }
    }

Accessing `O` for the first time initializes the `O$` class and executes the static initializer (which invokes the instance constructor). Class initialization is guarded by an initialization lock ([Chapter 5.5 in the JVM specification](https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-5.html#jvms-5.5)).

The main thread locks class initialization and spawns the Future. The Future, executed on a different thread, attempts to execute the static lambda body method `$anonfun$new$1`, which also requires initialization of the class `O$`. Because initialization is locked by the main thread, the thread running the future will block. In the meantime, the main thread continues to run `Await.result`, which will block until the future completes, causing the deadlock.

One example of this [surprised the authors of ScalaCheck](https://github.com/rickynils/scalacheck/issues/290) -- now [fixed](https://github.com/rickynils/scalacheck/pull/294).

### Lambdas capturing outer instances

Because lambda bodies are emitted as methods in the enclosing class, a lambda can capture the outer instance in cases where this did not happen in 2.11. This can affect serialization.

The Scala compiler analyzes classes and methods to prevent unnecessary outer captures: unused outer parameters are removed from classes ([#4652](https://github.com/scala/scala/pull/4652)), and methods not accessing any instance members are made static ([#5099](https://github.com/scala/scala/pull/5099)). One known limitation is that the analysis is local to a class and does not cover subclasses.

    class C {
      def f = () => {
        class A extends Serializable
        class B extends A
        serialize(new A)
      }
    }

In this example, the classes `A` and `B` are first lifted into `C`. When flattening the classes to the package level, the `A` obtains an outer pointer to capture the `A` instance. Because `A` has a subclass `B`, the class-level analysis of `A` cannot conclude that the outer parameter is unused (it might be used in `B`).

Serializing the `A` instance attempts to serialize the outer field, which causes a `NotSerializableException: C`.


### SAM conversion precedes implicits

The [SAM conversion](http://www.scala-lang.org/files/archive/spec/2.12/06-expressions.html#sam-conversion) built into the type system takes priority over implicit conversion of function types to SAM types. This can change the semantics of existing code relying on implicit conversion to SAM types:

    trait MySam { def i(): Int }
    implicit def convert(fun: () => Int): MySam = new MySam { def i() = 1 }
    val sam1: MySam = () => 2 // Uses SAM conversion, not the implicit
    sam1.i()                  // Returns 2

To retain the old behavior, you may compile under `-Xsource:2.11`, use an explicit call to the conversion method, or disqualify the type from being a SAM (e.g. by adding a second abstract method).

Note that SAM conversion only applies to lambda expressions, not to arbitrary expressions with Scala `FunctionN` types:

    val fun = () => 2     // Type Function0[Int]
    val sam2: MySam = fun // Uses implicit conversion
    sam2.i()              // Returns 1


### SAM conversion in overloading resolution

In order to improve source compatibility, overloading resolution has been adapted to prefer methods with `Function`-typed arguments over methods with parameters of SAM types. The following example is identical in Scala 2.11 and 2.12:

    scala> object T {
         |   def m(f: () => Unit) = 0
         |   def m(r: Runnable) = 1
         | }

    scala> val f = () => ()

    scala> T.m(f)
    res0: Int = 0

In Scala 2.11, the first alternative is chosen because it is the only applicable method. In Scala 2.12, both methods are applicable, therefore [overloading resolution](http://www.scala-lang.org/files/archive/spec/2.12/06-expressions.html#overloading-resolution) needs to pick the most specific alternative. The specification for [*compatibility*](http://www.scala-lang.org/files/archive/spec/2.12/03-types.html#compatibility) has been updated to consider SAM conversion, so that the first alternative is more specific.

Note that SAM conversion in overloading resolution is always considered, also if the argument expression is not a function literal (like in the example). This is unlike SAM conversions of expressions themselves, see the previous section. See also the discussion in [scala-dev#158](https://github.com/scala/scala-dev/issues/158).

While the adjustment to overloading resolution improves compatibility, there also exists code that compiles in 2.11, but is ambiguous in 2.12:

    scala> object T {
         |   def m(f: () => Unit, o: Object) = 0
         |   def m(r: Runnable, s: String) = 1
         | }
    defined object T

    scala> T.m(() => (), "")
    <console>:13: error: ambiguous reference to overloaded definition


### Inferred types for fields

Type inference for `val`, and `lazy val` has been aligned with `def`, fixing assorted corner cases and inconsistencies ([#5141](https://github.com/scala/scala/pull/5141) and [#5294](https://github.com/scala/scala/pull/5294)). Concretely, when computing the type of an overriding field, the type of the overridden field is used used as expected type. As a result, the inferred type of a `val` or `lazy val` may change in Scala 2.12.

In particular, an `implicit val` that did not need an explicitly declared type in 2.11 may need one now. (This is always good practice anyway.)

You can get the old behavior with `-Xsource:2.11`. This may be useful for testing whether these changes are responsible if your code fails to compile.

### Changed syntax trees (affects macro and compiler plugin authors)

PR [#4794](https://github.com/scala/scala/pull/4749) changed the syntax trees for selections of statically accessible symbols. For example, a selection of `Predef` no longer has the shape `q"scala.this.Predef"` but simply `q"scala.Predef"`. Macros and compiler plugins matching on the old tree shape need to be adjusted.




## Improving these notes

Improvements to these release notes [are welcome!](https://github.com/scala/make-release-notes/blob/2.12.x/hand-written.md)
