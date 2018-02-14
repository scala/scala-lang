---
title: Changelog
layout: inner-page-no-masthead
# permalink: /download/changelog/
includeTOC: true
---

<!-- [ [2.10.0](#2.10.0) | [2.9.0](#2.9.0) | [2.8.0](#2.8.0) | [2.7.2](#2.7.2) | [2.7.1](#2.7.1) | [2.7.0](#2.7.0) | [2.6.1](#2.6.1) | [2.6.0](#2.6.0) | [2.5.0](#2.5.0) | [2.4.0](#2.4.0) | [2.3.2](#2.3.2) | [2.3.0](#2.3.0) | [2.1.8](#2.1.8) | [2.1.7](#2.1.7) | [2.1.5](#2.1.5) | [2.0](#2.0) ] -->

## Changes in Version 2.12.0
Please consult the [Scala 2.12.0 release notes](/news/2.12.0).

## Changes in Version 2.11
Please consult the [Scala 2.11.1 release notes](/news/2.11.1).

## Changes in Version 2.10.0

The Scala 2.10.0 codebase includes the following new features and changes:

### Value Classes

A class may now extend `AnyVal` to make it behave like a struct type (restrictions apply).
See: http://docs.scala-lang.org/overviews/core/value-classes.html

### Implicit Classes

The `implicit` modifier now also applies to class definitions to reduce the boilerplate of implicit wrappers.
See: http://docs.scala-lang.org/sips/pending/implicit-classes.html

### String Interpolation

Example:

    val what = "awesome"; println(s"string interpolation is ${what.toUpperCase}!")

See more: http://docs.scala-lang.org/overviews/core/string-interpolation.html

### Futures and Promises

Asynchronously get some JSON:

    for (req <- WS.url(restApiUrl).get()) yield (req.json \ "users").as[List[User]] (uses play!)

See more: http://docs.scala-lang.org/overviews/core/futures.html

### Dynamic and applyDynamic

`x.foo` becomes `x.applyDynamic("foo")` if `x`'s type does not define a `foo`, but is a subtype of `Dynamic`
See: http://docs.scala-lang.org/sips/pending/type-dynamic.html

### Dependent method types

    def identity(x: AnyRef): x.type = x // the return type says we return exactly what we got

### New ByteCode emitter based on ASM

- Can target JDK 1.5, 1.6 and 1.7
- Emits 1.6 bytecode by default
- Old 1.5 backend is deprecated

### A new Pattern Matcher

- rewritten from scratch to generate more robust code (no more exponential blow-up!)
- code generation and analyses are now independent (the latter can be turned off with -Xno-patmat-analysis)

### Scaladoc Improvements

- Implicits (-implicits flag)
- Diagrams (-diagrams flag, requires graphviz)
- Groups (-groups)

### Modularized Language features

Get on top of the advanced Scala features used in your codebase by explicitly importing them.
See: http://docs.scala-lang.org/sips/pending/modularizing-language-features.html

### Parallel Collections are now configurable with custom thread pools

See: http://docs.scala-lang.org/overviews/parallel-collections/overview.html

### Akka Actors now part of the distribution

The original Scala actors are now deprecated.
See the actors migration project for more information.

### Performance Improvements

- Faster inliner
- `Range#sum` is now O(1)
- Update of `ForkJoin` library
- Fixes in immutable `TreeSet`/`TreeMap`
- Improvements to `PartialFunction`s
- Addition of `???` and `NotImplementedError`
- Addition of `IsTraversableOnce` + `IsTraversableLike` type classes for extension methods
- Deprecations and cleanup
- Floating point and octal literal syntax deprecation
- Removed `scala.dbc`
- Experimental features


The following exciting -- experimental -- features are part of 2.10.0:

#### Scala Reflection

See: https://docs.google.com/document/d/1Z1VhhNPplbUpaZPIYdc0_EUv5RiGQ2X4oqp0i-vz1qw/edit#heading=h.pqwdkl

#### Macros

See: http://docs.scala-lang.org/overviews/macros/overview.html

The API is subject to (possibly major) changes in the 2.11.x series, but don't let that stop you from experimenting with them! A lot of developers have already come up with very cool applications for them.


## Changes in Version 2.9.1 to 2.9.2

No language changes were introduced.

## Changes in Version 2.9.0 (12-May-2011) {: #2.9.0 }

The Scala 2.9.0 codebase includes the following new features and changes:

### Parallel Collections

Every collection may be converted into a corresponding parallel collection with the new `par` method. Parallel collections utilize multicore processors by implementing bulk operations such as `foreach`, `map`, `filter` etc. in parallel. Parallel collections are located in the package `scala.collection.parallel`.

Depending on the collection in question, `par` may require copying the underlying dataset to create a parallel collection. However, specific collections share their underlying dataset with a parallel collection, making `par` a constant time operation.

Currently available parallel collections are:

* parallel arrays - `scala.collection.parallel.mutable.ParArray`
* parallel ranges - `scala.collection.parallel.immutable.ParRange`
* parallel hash maps - `scala.collection.parallel.mutable.ParHashMap`
* parallel hash sets - `scala.collection.parallel.mutable.ParHashSet`
* parallel hash tries - `scala.collection.parallel.immutable.{ParHashMap, ParHashSet}`
* parallel vectors - `scala.collection.parallel.immutable.ParVector`

The method `seq` is used to convert from a parallel collection to a corresponding sequential collection. This method is always efficient (O(1)).

### The App Trait

The `App` trait is a safer, more powerful alternative to the previous `Application` trait, which has now been deprecated. The new recommended way to write a top-level application is like this:

    object Echo extends App {
      println("Echo" + (args mkString " "))
    }

Objects inheriting from the old `Application` trait were almost as convenient to write, but were not thread-safe and were often not optimized by the VM, since the application's body was execited as part of of the object's initialization sequence. Objects inheriting the `App` trait instead make use of Scala 2.9's delayed initialization feature to execute the whole body as part of an inherited `main` method. Another new feature of the `App` scheme is that command line arguments are now accessible via the `args` value (which is inherited from trait `App`)

### The DelayedInit Trait

The `DelayedInit` trait provides another tool to customize initialization sequences of classes and objects. If a class or object inherits from this trait, all its initialization code is packed in a closure and forwarded as an argument to a method named `delayedInit` which is defined as an abstract method in trait `DelayedInit`.

Implementations of `delayedInit` have thus full freedom when to execute the initialization code. For instance, Scala's new `App` trait stores all initialization sequences in an internal buffer and executes them when the object's `main` method is called.

Note that only initialization code contained in classes and objects is passed to `DelayedInit`; initialization code contained in traits is not affected.

### Repl Improvements

Improvements in jline, the repl input handler. More robust cursor handling, bash-style ctrl-R history search, new commands like `:imports`, `:implicits`, `:keybindings`. On platforms with the necessary runtime support, `:javap` will disassemble any class including repl-defined ones. A long-running repl command can now be interrupted via ctrl-C without terminating the repl session. Improved programmability: the repl classloader exposes repl-defined classes via their given names.

### Scala Runner

Scala code can now be executed in any of the following ways:

* `scala <jarfile>` will run the main class, similar to java -jar
* `scala <classname>` will run the main method of that class
* `scala <sourcefile>` will run the script contents as a scala script
* `scala <sourcefile>` will, if the contents are not a script, find a single main method in a top level object and run that. This allows the same file to be used with scalac and to be run directly.
* `scala -save <sourcefile>` will create a jar file with the compiled source, which is then reusable and can be run as `scala <jarfile>`

### Java Interop

* The `@strictfp` annotation is now supported.
* Various fixes in `JavaConverters` and `JavaConversions` for smoother interoperation.
* Primitive types and their boxed versions are now implicitly converted bidirectionally.

### Other features

#### Generalized try-catch-finally

<pre><b>try</b> <em>body</em>
<b>catch</b> <em>handler</em>
<b>finally</b> <em>cleanup</em>
</pre>

Here, *body* and *cleanup* can be arbitrary expressions, and *handler* can be any expression which evaluates to a valid exception handler (which is: `PartialFunction[Throwable, T]`).

#### New packages

`scala.sys` and `scala.sys.process`, which are imported from `sbt.Process`.

#### New methods in collections

`collectFirst`, `maxBy`, `minBy`, `span`, `inits`, `tails`, `permutations`, `combinations`, `subsets`

#### AnyRef specialization

It is now possible to specialize on type parameters for subtypes of `AnyRef` (`class Foo[@specialize(AnyRef) T](arr: Array[T]) { ... })`, which allows for more efficient array indexing and updates.

## Changes in Version 2.8.1

No language changes were introduced.

## Changes in Version 2.8.0 (14-Jul-2010) {: #2.8.0 }

Scala 2.8.0 is a significantly innovative release, which contains a large amount of fixes and introduces many new features:

#### Redesigned collection library

The collection library has undergone a complete overhaul for Scala 2.8, offering a more coherent and efficient design, while maintaining virtually complete compatibility with existing sources. Detailed information [here](http://www.scala-lang.org/sid/3).

#### New array implementation, manifests for polymorphic arrays

Handling of arrays has been simplified and optimized in Scala 2.8. The previous compiler magic has been replaced by a more systematic and predictable implementation in terms of implicit conversions. Detailed information [here](http://www.scala-lang.org/sid/7).

#### Type specialization

Scala 2.8 adds specialized type parameters, which enable the compiler to generate transparently multiple versions of a given definition, and to use the most specific version whenever the static type information at a call site allows it. Detailed information [here](http://www.scala-lang.org/sid/9).

#### Named and default arguments

Named arguments improve the readability of method calls with many arguments. Default arguments reduce code duplication, and enable "copy" methods for case classes, useful to generate quickly modified copies of case classes. Detailed information [here](http://www.scala-lang.org/sid/1).

#### Package objects

Packages can now contain besides classes and objects also methods, fields or type aliases. These are added to a package by declaring a package object. More capabilities might be added to package objects in subsequent releases.

#### Beefed up Scala Swing libraries, better documentation

Components publish key events, input events can be consumed, refactored window subhierarchy, additional demos, Swing listeners are installed lazily, more complete component caching, minor refactorings, bugfixes, more Scaladocs. Detailed information [here](http://www.scala-lang.org/sid/8).

#### Revamped REPL

Many bugfixes. Tab-completion for all packages on the classpath, as well as object and instance methods and fields, including type aliases and package objects. Searchable history, integrated shell access, and a power mode which offers direct access to compiler internals.

#### Implicits changes

We have refined the implicit resolution process so that resolution is now able to determine type variables.

#### Improved equality

Equality across numeric types is to be consistent across all the primitives types, while also adhering to the equals/hashCode contract. Numeric comparisons will have the same results as they would between Java primitives.

#### Packrat parser combinators

With support for packrat parsing, parser combinators are now able to handle left-recursive grammars and will show improved performance for ambiguous productions.

#### Improved XML library

Many bugfixes.

#### Type constructor inference

Type inference has been extended to deal with type constructors, so that, in certain cases, you can omit type parameter lists that contain higher-kinded types (aka type constructors, e.g., `List`).

#### Improved Annotations

Scala 2.8 adds support for nested java annotations. For annotations on fields, it is now possible to specify which synthetic members (getter / setter) will have the annotation. Documentation about Scala annotations can be found [here](http://www.scala-lang.org/sid/5).

#### Enhanced actors

New Reactors provide more lightweight, purely event-based actors with optional, implicit sender identification. Support for actors with daemon-style semantics was added. Actors can be configured to use the efficient JSR166y fork/join pool, resulting in significant performance improvements on 1.6 JVMs. Schedulers are now pluggable and easier to customize.

#### Support for continuations

Continuations are supported by a compiler plugin, which is now supported as part of the main distribution.

### Internal improvements

#### New presentation compiler

This new infrastructure, within the Scala compiler, enables IDEs to hook into the compiler to find efficiently information about the structure of the program under editing. This new code offers a better platform for the development of IDE plugins.

#### New build manager

The new feature used by for example Eclipse to detect intelligently changes in the files and compile only necessary Scala sources, instead of performing clean build on whole projects. This technique enables to significantly reduce the compilation time on bigger projects.

#### Speed improvements

The compiler now runs as optimised code. In addition, a number of improvements and fine-tunings have further improved the compiler speed up to 50%.

### Additional tools

#### Scaladoc 2

A new look-and-feel, automatic comments expansion and wiki-like syntax, as well as compile-time error checking.

#### Sbaz 2

Sbaz includes many bug fixes and enhancements. It now gives better feedback to the user during lengthy downloads and while diagnosing dependency audits, which in turn have been re-factored and enhanced. Sbaz should work properly on Windows using either cmd or cygwin, and is now capable of reliably updating itself. Support for pack200 has been added, in some cases reducing file sizes up to 70%.

#### Scalap

A new `scalap`, contributed by the community, is included. The new `scalap` is aware of package objects and can decompile them by using `<package_name>.package`.

#### Scala IDE for Eclipse

The IDE has been extensively reworked with much functionality moved into the Scala compiler where it can be better maintained and reused by non-Eclipse IDEs and other tools. The integration with Eclipse's JDT has been deepened, and much previously Scala-specific behaviour and functionality is now provided directly by the JDT leading to across the board improvements. The Scala IDE for Eclipse is now [hosted at Assembla](http://www.scala-ide.org).




## Changes in 2.7.3 to 2.7.7

No language changes were introduced.





## Changes in Version 2.7.2 (10-Nov-2008) {: #2.7.2 }

#### Generic Signatures

The Scala compiler now generates Java's generic signatures, so that Scala generics are visible to Java.

#### Java/Scala Combined Projects

The compiler can now parse (but not translate) Java source files. This makes it possible to have mixed Java/Scala projects with recursive dependencies between them. In such a project, you can submit first all the Java and Scala sources to the Scala compiler. In a second step, the Java sources are compiled using the Scala generated .class files and the Scala sources are compiled again using the Java generated .class files.

#### ScalaSwing

Another major addition is the first beta version of the ScalaSwing library, which is now bundled with the distribution.

#### Scala Collections

There are new implementations of collection classes, contributed by David MacIver: `IntMap`, `LongMap`, and `TreeHashMap` (immutable), ArrayStack and `OpenHashMap` (mutable).





## Changes in Version 2.7.1 (09-Apr-2008) {: #2.7.1 }

#### Change in Scoping Rules for Wildcard Placeholders in Types

A wildcard in a type now binds to the closest enclosing type application.

For example `List[List[_]]` is now equivalent to the existential type

    List[List[t] forSome { type t }]face

In version 2.7.0, the type expanded instead to

    List[List[t]] forSome { type t }

The new convention corresponds exactly to the way wildcards in Java are interpreted.

#### No Contractiveness Requirement for Implicits

The contractiveness requirement for implicit method definitions has been dropped. Instead it is checked for each implicit expansion         individually that the expansion does not result in a cycle or a tree of infinitely growing types.





## Changes in Version 2.7.0 (07-Feb-2008) {: #2.7.0 }

#### Java Generics

Scala now supports [Java generic types](http://en.wikipedia.org/wiki/Generics_in_Java) by default:

* A generic type in Java such as `ArrayList<String>` is translated to a generic type in Scala: `ArrayList[String]`.
* A wildcard type such as `ArrayList<? extends Number>` is translated to `ArrayList[_ <: Number]`. This is itself a shorthand for the existential type `ArrayList[T] forSome { type T <: Number }`.
* A raw type in Java such as `ArrayList` is translated to `ArrayList[_]`, which is a shorthand for `ArrayList[T] forSome { type T }`.

This translation works if `-target:jvm-1.5` is specified, which is the new default. For any other target, Java generics are not         recognized. To ensure upgradability of Scala codebases, extraneous type parameters for Java classes under scalac `-target:jvm-1.4` are simply ignored. For instance, when compiling with `>-target:jvm-1.4`, a Scala type such as `ArrayList[String]` is simply treated as the unparameterized type `ArrayList`>.

#### Case Classes

The Scala compiler generates now for every case class a companion extractor object. For instance, given the case class:

    case class X(elem: String)

the following companion object is generated:

    object X {
      def unapply(x: X): Some[String] = Some(x.elem)
      def apply(s: String): X = new X(s)
    }

If the object exists already, only the `apply` and `unapply` methods are added to it.

Three restrictions on case classes have been removed:

* Case classes can now inherit from other case classes.

      case class Foo(x: Int)
      case class Bar(override val x: Int, y: Int) extends Foo(x)
      object test extends Application {
        println(Bar(1, 2).x)
        (Bar(1, 2): Foo) match {
          case Foo(x) => println(x)
        }
      }

* Case classes may now be `abstract`
* Case classes may now come with companion objects:

      case class Foo(x: Int)
      object Foo {
        val x = 2
        val y = Foo(2)
      }
      object test extends Application {
        println(Foo.x)
        println(Foo.y match { case Foo(x) => x } )
      }


#### Removed features

The following deprecated features have been removed from the standard Scala library:

| Removed  | Use instead
|:--------:|:------------:
| `All` and `AllRef` (object `scala.Predef`) | `Nothing` and `Null` (available since 2.3.0)
| element and arity (class `scala.Product`)  | `productElement` and `productArity`
| `scala.compat.Math` | `scala.Math`
| `scala.testing.UnitTest` | `scala.testing.SUnit`
| `assertNotSame` and `assertSame` (class `scala.testing.SUnit.Assert`) | `assertNotEq` and `assertEq`
| `scala.util.Fluid` | `scala.util.DynamicVariable`




## Changes in Version 2.6.1 (30-Nov-2007) {: #2.6.1 }

#### Mutable variables introduced by pattern binding
Mutable variables can now be introduced by a pattern matching definition, just like values can. For example:

    var (x, y) = if (positive) (1, 2) else (-1, -3)
    var hd :: tl = mylist

#### Self-types

Self types can now be introduced without defining an alias name for `this`. For example:

    class C {
      type T <: Trait
      trait Trait { this: T => ... }
    }





## Changes in Version 2.6 (27-Jul-2007) {: #2.6.0 }

#### Existential types
It is now possible to define existential types using the new keyword `forSome`. An existential type has the form `T forSome {Q}` where `Q` is a  sequence of value and/or type declarations. Given the class definitions

    class Ref[T]
    abstract class Outer { type T }

one may for example write the following existential types

    Ref[T] forSome { type T <: java.lang.Number }
    Ref[x.T] forSome { val x: Outer }

#### Lazy values

It is now possible to define lazy value declarations using the new modifier `lazy`.

    import compat.Platform._
    val t0 = currentTime
    lazy val t1 = currentTime
    val t2 = currentTime

    println("t0 <= t2: " + (t0 <= t2))  //true
    println("t1 <= t2: " + (t1 <= t2))  //false (lazy evaluation of t1)

#### Structural types

It is now possible to declare structural types using type refinements. For example:

    class File(name: String) {
      def getName(): String = name
      def open() { /*..*/ }
      def close() { println("close file") }
    }
    def test(f: { def getName(): String }) { println(f.getName) }

    test(new File("test.txt"))
    test(new java.io.File("test.txt"))

#### Deprecated features

* The old-style syntax of for-comprehensions has been deprecated.
* The `requires` clause has been deprecated; use `{ self: T =>; ... }` instead.
* `&f` for unapplied methods has been deprecated; use `f _` instead.





## Changes in Version 2.5 (02-May-2007) {: #2.5.0 }

#### Type constructor polymorphism

Type parameters and abstract type members can now also abstract over type constructors. This allows a more precise `Iterable` interface:

    trait Iterable[+t] {
      type MyType[+t] <: Iterable[t] // MyType is a type constructor

      def filter(p: t => Boolean): MyType[t] = //...
      def map[s](f: t => s): MyType[s] = //...
    }

    abstract class List[+t] extends Iterable[t] {
      type MyType[+t] = List[t]
    }

This definition of `Iterable` makes explicit that mapping a function over a certain structure (e.g., a `List`>) will yield the same structure (containing different elements).

#### Early object initialization

It is now possible to initialize some fields of an object before any parent constructors are called. This is particularly useful for traits, which do not have normal constructor parameters. For example:

    trait Greeting {
      val name: String
      val msg = "How are you, " + name
    }
    class C extends {
      val name = "Bob"
    } with Greeting {
      println(msg)
    }

In the code above, the field `name` is initialized before the constructor of `Greeting` is called. Therefore, field `msg` in class `Greeting` is properly initialized to `"How are you, Bob"`.

#### `for`-comprehensions, revised

The syntax of `for`-comprehensions has been changed. For example:

    for (val x <- List(1, 2, 3); x % 2 == 0) println(x)

is now written

    for (x <- List(1, 2, 3) if x % 2 == 0) println(x)

Thus a `for`-comprehension now starts with a (possibly guarded) generator followed by one or more enumerators which can be         either a (possibly guarded) generator, a guard or a local value definition.

The old syntax is still available but will be deprecated in the future.

#### Implicit anonymous functions

It is now possible to define anonymous functions using underscores in parameter position. For instance, the expressions in the left         column are each function values which expand to the anonymous functions on their right.

    _ + 1                  x => x + 1
    _ * _                  (x1, x2) => x1 * x2
    (_: int) * 2           (x: int) => (x: int) * 2
    if (_) x else y        z => if (z) x else y
    _.map(f)               x => x.map(f)
    _.map(_ + 1)           x => x.map(y => y + 1)

As a special case, a partially unapplied method is now designated `m _` instead of the previous notation `&;m`.

The new notation will displace the special syntax forms `.m()` for abstracting over method receivers and `&m` for treating an unapplied method as a function value. For the time being, the old syntax forms are still available, but they will be deprecated in the future.

#### Pattern matching anonymous functions, refined

It is now possible to use case clauses to define a function value  directly for functions of arities greater than one. Previously,         only unary functions could be defined that way. For example:

    def scalarProduct(xs: Array[Double], ys: Array[Double]) =
      (0.0 /: (xs zip ys)) {
        case (a, (b, c)) => a + b * c
      }




## Changes in Version 2.4 (09-Mar-2007) {: #2.4.0 }

#### Object-local private and protected

The `private` and `protected` modifiers now accept a `[this]` qualifier. A definition `M` which is labelled         `private[this]` is private, and in addition can be accessed only from within the current object. That is, the only legal prefixes         for `M` are `this` or `C.this`. Analogously, a definition `M` which is labelled `protected[this]` is protected, and in         addition can be accessed only from within the current object.

#### Tuples, revised

The syntax for tuples has been changed from `{...}` to `(...)`. For any sequence of types T<sub>1</sub>, ..., T<sub>n</sub>,

`(`T<sub>1</sub>, ..., T<sub>n</sub>`)` is a shorthand for `Tuplen[`T<sub>1</sub>, ..., T<sub>n</sub>`]`.

Analogously, for any sequence of expressions or patterns x<sub>1</sub>, ..., x<sub>n</sub>,

`(`x<sub>1</sub>, ..., x<sub>n</sub>`)` is a shorthand for `Tuplen(`x<sub>1</sub>, ..., x<sub>n</sub>`)`.

#### Access modifiers for primary constructors

The primary constructor of a class can now be marked `private` or `protected`. If such an access modifier is given, it comes between the name of the class and its value parameters. For example:

    class C[T] private (x: T) { ... }

#### Annotations

The support for attributes has been extended and its syntax changed. Attributes are now called *annotations*. The syntax has been changed to follow Java's conventions, e.g. `@annotation` instead of `[attribute]`. The old syntax is still available but will be         deprecated in the future.

Annotations are now serialized so that they can be read by compile-time or run-time tools. Class `scala.Annotation` has two         sub-traits which are used to indicate how annotations are retained. Instances of an annotation class inheriting from trait         `scala.ClassfileAnnotation` will be stored in the generated class files. Instances of an annotation class inheriting from trait         `scala.StaticAnnotation` will be visible  to the Scala type-checker in every compilation unit where the annotated symbol is accessed.

#### Decidable Subtyping

The implementation of subtyping has been changed to prevent infinite recursions. Termination of subtyping is now ensured by a new         restriction of class graphs to be finitary.

#### Case classes cannot be abstract

It is now explicitly ruled out that case classes can be abstract. The specification was silent on this point before, but did not explain how abstract case classes were treated. The Scala compiler allowed the idiom.

#### New syntax for self aliases and self types

It is now possible to give an explicit alias name and/or type for the self reference `this`. For instance, in

    class C { self: D =>
      ...
    }

the name `self` is introduced as an alias for `this` within `C` and the self type of `C` is assumed to be `D`. This construct is introduced now in order to replace eventually both the qualified this construct `C.this` and the `requires` clause in Scala.

#### Assignment Operators

It is now possible to combine operators with assignments. For example:

    var x: int = 0
    x += 1





## Changes in Version 2.3.2 (23-Jan-2007) {: #2.3.2 }

#### Extractors

It is now possible to define patterns independently of case classes, using `unapply` methods in extractor objects. Here is an example:

    object Twice {
      def apply(x: Int): int = x*2
      def unapply(z: Int): Option[int] = if (z%2 == 0) Some(z/2) else None
    }
    val x = Twice(21)
    x match { case Twice(n) => Console.println(n) } // prints 21

In the example, `Twice` is an extractor object with two methods:

* The `apply` method is used to build even numbers.
* The `unapply` method is used to decompose an even number; it is in a sense the reverse of `apply`. `unapply` methods return option types: `Some(...)` for a match that suceeds, `None` for a match that fails. Pattern variables are returned as the elements of `Some`. If there are several variables, they are grouped in a tuple.


In the second-to-last line, `Twice`'s `apply` method   is used to construct a number `x`. In the last line, `x` is tested against the pattern `Twice(n)`. This pattern succeeds for even numbers and assigns to the variable `n` one half of the number that was tested. The pattern match makes use of the `unapply` method of object `Twice`. More details on extractors can be found in the paper [Matching Objects with Patterns](https://infoscience.epfl.ch/record/98468/files/MatchingObjectsWithPatterns-TR.pdf) by Emir, Odersky and Williams

#### Tuples

A new lightweight syntax for tuples has been introduced. For any sequence of types `{`T<sub>1</sub> ,.., T<sub>n</sub>`}`,

`{`T<sub>1</sub> ,.., T<sub>n</sub>`}` is a shorthand for `Tuplen[`T<sub>1</sub> ,.., T<sub>n</sub>`]`.

Analogously, for any sequence of expressions or patterns x<sub>1</sub>,.., x<sub>n</sub>,

`{`x<sub>1</sub> ,.., x<sub>n</sub>`}` is a shorthand for `Tuplen(`x<sub>1</sub> ,.., x<sub>n</sub>`)`.


#### Infix operators of greater arities

It is now possible to use methods which have more than one parameter as infix operators. In this case, all method arguments are written as a normal parameter list in parentheses. Example:

    class C {
      def +(x: int, y: String) = ...
    }
    val c = new C
    c + (1, "abc")


#### Deprecated attribute

A new standard attribute `deprecated` is available. If a member definition is marked with this attribute, any reference to the     member will cause a "deprecated" warning message to be emitted.





## Changes in Version 2.3.0 (23-Nov-2006) {: #2.3.0 }

#### Procedures

A simplified syntax for functions returning `Unit` has been introduced. Scala now allows the following shorthands:

`def f(params)` for `def f(params): Unit` and

`def f(params) { … } ` for `def f(params): Unit = { … }`.

#### Type Patterns

The syntax of types in patterns has been refined. Scala now distinguishes between type variables (starting with a lower case letter) and types as type arguments in patterns. Type variables are bound in the pattern. Other type arguments are, as in previous versions, erased. The Scala compiler will now issue an "`unchecked`" warning at places where type erasure might compromise type-safety.

#### Standard Types

The recommended names for the two bottom classes in Scala's type hierarchy have changed as follows:

    All      ==>     Nothing
    AllRef   ==>     Null

The old names are still available as type aliases.




## Changes in Version 2.1.8 (23-Aug-2006) {: #2.1.8 }

#### Visibility Qualifier for protected

Protected members can now have a visibility qualifier, e.g., `protected[<qualifier>]`. In particular, one can now simulate package protected access as in Java writing

    protected[P] def X ...

where `P` would name the package containing `X`.

#### Relaxation of Private Access

Private members of a class can now be referenced from the companion module of the class and vice versa.

#### Implicit Lookup

The lookup method for implicit definitions has been generalized. When searching for an implicit definition matching a type `T`, now are considered

* all identifiers accessible without prefix, and
* all members of companion modules of classes associated with `T`.

(The second clause is more general than before). Here, a class is *associated* with a type `T` if it is referenced by some part of `T`, or if it is a base class of some part of `T`. For instance, to find implicit members corresponding to the type

    HashSet[List[Int], String]

one would now look in the companion modules (aka static parts) of `HashSet`, `List`, `Int`, and `String`. Before, it was just the static part of `HashSet`.

#### Tightened Pattern Match

A typed pattern match with a singleton type `p.type` now tests whether the selector value is reference-equal to `p`. For example:

    val p = List(1, 2, 3)
    val q = List(1, 2)
    val r = q
    r match {
      case _: p.type => Console.println("p")
      case _: q.type => Console.println("q")
    }

This will match the second case and hence will print `"q"`. Before, the singleton types were erased to `List`, and         therefore the first case would have matched, which is non-sensical.





## Changes in Version 2.1.7 (19-Jul-2006) {: #2.1.7 }

#### Multi-Line string literals

It is now possible to write multi-line string-literals enclosed in triple quotes. Example

    """this is a
       multi-line
       string literal"""

No escape substitutions except for unicode escapes are performed in such string literals.




## Changes in Version 2.1.5 (24-May-2006) {: #2.1.5 }

#### Class Literals

There is a new syntax for class literals: For any class type `C`, `classOf[C]` designates the run-time representation of         `C`.



## Changes in Version 2.0 (12-Mar-2006) {: #2.0 }

Scala in its second version is different in some details from the first version of the language. There have been several additions and some old idioms are no longer supported. This section summarizes the main changes.

#### New Keywords

The following three words are now reserved; they cannot be used as identifiers

    implicit     match     requires

#### Newlines as Statement Separators

Newlines can now be used as statement separators in place of semicolons

#### Syntax Restrictions

There are some other situations where old constructs no longer work:

##### Pattern matching expressions

The `match` keyword now appears only as infix operator between a selector expression and a number of cases, as in:

    expr match {
      case Some(x) => ...
      case None => ...
    }

Variants such as `expr.match {...}` or just `match {...}` are no longer supported.

##### `with` in `extends` clauses

The idiom

    class C with M { ... }

is no longer supported. A `with` connective is only allowed following an `extends` clause. For instance, the line above would have to be written

    class C extends AnyRef with M { ... }

However, assuming `M` is a trait , it is also legal to write

    class C extends M { ... }

The latter expression is treated as equivalent to

    class C extends S with M { ... }

where `S` is the superclass of `M`.

##### Regular Expression Patterns

The only form of regular expression pattern that is currently supported is a sequence pattern, which might end in a sequence wildcard `_*`. Example:

    case List(1, 2, _*) => ... // will match all lists starting with 1,2

It is at current not clear whether this is a permanent restriction. We are evaluating the possibility of re-introducing full regular expression patterns in Scala.

#### Selftype Annotations

The recommended syntax of selftype annotations has changed.

    class C: T extends B { ... }

becomes

    class C requires T extends B { ... }

That is, selftypes are now indicated by the new `requires` keyword. The old syntax is still available but is considered deprecated.

#### For-comprehensions

For-comprehensions  now admit value and pattern definitions. For example:

    for {
      val x <- List.range(1, 100)
      val y <- List.range(1, x)
      val z = x + y
      isPrime(z)
    } yield Pair(x, y)

Note the definition `val z = x + y` as the third item in the for-comprehension.

#### Conversions

The rules for implicit conversions of methods to functions have been tightened. Previously, a parameterized method used as a value was always implicitly converted to a function. This could lead to unexpected results when method arguments where forgotten. Consider for instance the statement below:

    show(x.toString)

where `show` is defined as follows:

    def show(x: String) = Console.println(x)

Most likely, the programmer forgot to supply an empty argument list `()` to `toString`. The previous Scala version would treat this code as a partially applied method, and expand it to:

    show(() => x.toString())

As a result, the address of a closure would be printed instead of the value of `s`.

Scala version 2.0 will apply a conversion from partially applied method to function value only if the expected type of the expression is indeed a function type. For instance, the conversion would not be applied in the code above because the expected type of `show`'s parameter is `String`, not a function type.

The new convention disallows some previously legal code. Example:

    def sum(f: int => double)(a: int, b: int): double =
      if (a > b) 0 else f(a) + sum(f)(a + 1, b)

    val sumInts = sum(x => x)  // error: missing arguments

The partial application of `sum` in the last line of the code above will not be converted to a function type. Instead, the   compiler will produce an error message which states that arguments for method `sum` are missing. The problem can be fixed by providing an expected type for the partial application, for instance by annotating the definition of `sumInts` with its type:

    val sumInts: (int, int) => double = sum(x => x)  // OK

On the other hand, Scala version 2.0 now automatically applies methods with empty parameter lists to `()` argument lists when   necessary. For instance, the `show` expression above will now be expanded to

    show(x.toString())

Scala version 2.0 also relaxes the rules of overriding with respect to empty parameter lists. The revised definition of *matching   members* makes it now possible to override a method with an explicit, but empty parameter list `()` with a parameterless method, and *vice versa*. For instance, the following class definition is now legal:

    class C {
      override def toString: String = //...
    }

Previously this definition would have been rejected, because the `toString` method as inherited from `java.lang.Object` takes an empty parameter list.

#### Class Parameters

A class parameter may now be prefixed by `val` or `var`.

#### Private Qualifiers

Previously, Scala had three levels of visibility: *private*, *protected* and *public*. There was no way to restrict accesses to members of the current package, as in Java. Scala 2 now defines access qualifiers that let one express this level of visibility, among others. In the definition

    private[C] def f(...)

access to `f` is restricted to all code within the class or package `C` (which must contain the definition of `f`)

#### Changes in the Mixin Model

The model which details mixin composition of classes has changed significantly. The main differences are:

* We now distinguish between *traits* that are used as mixin classes and normal classes. The syntax of traits has been generalized from version 1.0, in that traits are now allowed to have mutable fields. However, as in version 1.0, traits may still do not have           constructor parameters.
* Member resolution and super accesses are now both defined in terms of a *class linearization*.
* Scala's notion of method overloading has been generalized; in particular, it is now possible to have overloaded variants of the           same method in a subclass and in a superclass, or in several different mixins. This makes method overloading in Scala conceptually the same as in Java.

The new mixin model is explained in more detail in the [Scala Language Specification](/files/archive/spec/2.11/).

#### Implicit Parameters

Views in Scala 1.0 have been replaced by the more general concept of implicit parameters

#### Flexible Typing of Pattern Matching

The new version of Scala implements more flexible typing rules when it comes to pattern matching over heterogeneous class hierarchies. A *heterogeneous class hierarchy* is  one where subclasses inherit a common superclass with different         parameter types. With the new rules in Scala version 2.0 one can perform pattern matches over such hierarchies with more precise         typings that keep track of the information gained by comparing the types of a selector and a matching pattern. This gives Scala capabilities analogous to guarded algebraic data types.
