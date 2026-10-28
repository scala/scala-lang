---
category: release
permalink: /news/3.10/
title: "Scala 3.10 released!"
by: Wojciech Mazur, VirtusLab
---

# Scala 3.10 released!

We are happy to announce **Scala 3.10.0**, the first release of the new [Scala Next]({{ site.baseurl }}/news/3.9/#what-does-lts-mean) series.

This release stabilizes [SIP-67](https://docs.scala-lang.org/sips/67.html), moves three SIPs into preview, and starts dropping legacy language features that have been deprecated for several minor releases.

Scala 3.3 LTS and Scala 3.9 LTS put compatibility with Scala 2.13 first.
Now, nearly five years after Scala 3.0, Scala 3.10 starts removing legacy syntax and features that have been deprecated for several minor releases.
The standard library also starts using more Scala 3 features, such as `inline` and extension methods.

Binary compatibility is preserved: libraries compiled with earlier Scala 3 versions keep working, including those that used features now removed.
Source that still uses those features must be updated to compile with 3.10.
Macros and compiler plugins may need to be adapted to changed internal representations (details below).
If you publish a library and want the longest support window, Scala 3.9 LTS remains the recommended version to build against.

Cross-compilation between Scala 2 and 3.10 is no longer supported because of the removed legacy features.
Some libraries might remain cross-compilable, but it is expected that cross-compiled libraries will remain on Scala 3.9 LTS indefinitely.

Before checking a 3.10 artifact with [MiMa](https://github.com/scala-garden/mima), upgrade to **[MiMa 1.2.1](https://github.com/scala-garden/mima/releases/tag/v1.2.1) or later**: that release adds Scala 3.9 and 3.10 support and fixes several false positives.

## Highlights

- [SIP-67](#sip-67-strict-equality-pattern-matching): pattern matching under `strictEquality` no longer needs `CanEqual` - now stable. (But strict equality remains an opt-in feature.)
- Three SIPs move to preview behind `-preview`: [`@unroll`](#sip-61-unroll-default-arguments), [relaxed lambda syntax](#sip-75-relaxed-lambda-syntax), and [referenceable package objects](#sip-68-referenceable-package-objects).
- Deprecated syntax previously retained for compatibility with Scala 2, such as `A with B`, is now an error; see [Breaking changes](#breaking-changes).
- The compiler reports `Recursion limit exceeded` instead of crashing with a `StackOverflowError` ([details](#compiler-fuel)).
- Scala is now also distributed as `.deb` and `.rpm` packages.

## Breaking changes

Most projects can upgrade without code changes.
Macros and compiler plugins are affected most, but not exclusively.
Expect problems in a few areas:

- APIs that were easy to rely on by accident (for example, a `given` defined in a private companion object, or a custom `->` defined via an implicit class)
- Syntax that has been deprecated for several releases already
- Standard library operations that became `inline` or extension methods for performance. Normal call sites are unaffected, but macros see different trees, so you usually just need to upgrade the affected library.

The sections below walk through the most common issues in more detail.

> **Library maintainers:** if you ship macros or compiler plugins, add a CI job that builds against Scala Next nightly releases (or against release candidates once they are available).
> Several of the fixes listed below were found by the [Open Community Build](https://github.com/VirtusLab/community-build3); a job in your own repository finds such problems earlier.

### Inaccessible companion implicits are no longer found

When implicit search looks into a type's companion, it now only considers instances that are accessible at the call site.
Scala 3.9 already reported this under `-deprecation`; Scala 3.10 [stops finding those instances](https://github.com/scala/scala3/pull/25367).

```scala
object api:
  class Config
  private object Config:
    given Config = new Config

  def describe(using Config): String = "configured"

api.describe
// error: no implicit argument of type api.Config was found
```

The specification has always required an eligible implicit to be accessible at the point of the call.
If a library you maintain still hides givens in a private companion, publish a fix before users move to 3.10 - users usually cannot work around it in their own code.
Make the companion public, or move the `given` to a public object.

### Stronger constant folding during inlining

[Stronger constant folding during inlining](https://github.com/scala/scala3/pull/25731) fixes several inlining bugs, but it also makes compilation fail for macros that generate ill-typed code, which previously happened to work.
Scala 3.10 also [checks that a macro expansion has the type the macro claimed](https://github.com/scala/scala3/pull/25756).

**If you use the ZIO ecosystem, upgrade these libraries before upgrading the compiler.** The fixed versions are:

- **ZIO 2.1.26** ([zio/zio#10725](https://github.com/zio/zio/pull/10725))
- **zio-blocks 0.0.54** ([zio/zio-blocks#1584](https://github.com/zio/zio-blocks/pull/1584))
- **izumi-reflect 3.0.10** ([zio/izumi-reflect#598](https://github.com/zio/izumi-reflect/pull/598))
- **neotype 0.7.2** ([kitlangton/neotype#517](https://github.com/kitlangton/neotype/pull/517)), which also covers the `Rich*` change below

### Primitive `Rich*` wrappers are extension methods

[`runtime.RichInt` and the other `Rich*` implicit classes are gone](https://github.com/scala/scala3/pull/23872).
Operations such as `until`, `to`, `abs`, and `max` are now extension methods defined in the companion objects of `Int`, `Long`, and the other primitive types.
Call sites that just use `1 to 10` keep working.
Macros that inspected the old `Rich*` symbols, or that assumed `Predef` still inserted those implicit classes, need to match the extension-method shape instead.

### `->` is an inline extension method

The `a -> b` pair syntax is now an [inline extension method](https://github.com/scala/scala3/pull/24728).
`Predef.ArrowAssoc` is deprecated and is no longer an implicit conversion.

Two practical consequences:

- Quote patterns such as `case '{ ($a: String) -> ($b: Any) }` no longer match, because the tree is no longer an `ArrowAssoc` conversion.
- If your library defines `->` through an **implicit class**, `Predef.->` may now be chosen instead, because extension methods and implicit classes are prioritized differently ([#26851](https://github.com/scala/scala3/issues/26851)). A `->` defined as an **extension method** still takes precedence. If you ship a DSL that defines `->` via an implicit class, change it to an extension method.

### `A with B` is an error

`with` as a type operator has warned since Scala 3.4 and is an [error in 3.10](https://github.com/scala/scala3/pull/26545).
On Scala 3.10, `-source:3.4-migration -rewrite` rewrites `A with B` to `A & B`.
In typed patterns, the intersection must be wrapped in parentheses: `case x: (A & B) =>`. The rewrite adds them for you.

### `this` is illegal in top-level definitions

Top-level definitions using `this` are now rejected ([#26448](https://github.com/scala/scala3/pull/26448)).
A top-level definition has no enclosing class, so `this` has nothing meaningful to refer to.
Previously the reference resolved to the synthetic package object for the file, which was almost never what authors intended:

```scala
val self = this // error in 3.10
```

### Java generic signatures are more precise

The compiler now uses boxed types for primitive type arguments in the generic signature stored in class files ([#25944](https://github.com/scala/scala3/pull/25944)).
For a type such as `Option[Int => String]`, the generic signature is now more precise:

```text
// before
scala.Option<scala.Function1<java.lang.Object, java.lang.String>>
// after
scala.Option<scala.Function1<java.lang.Integer, java.lang.String>>
```

The JVM method *descriptor* is unchanged, so Scala binary linking keeps working.
What changes is what Java compilers and bytecode tools read from that signature.
[MiMa](https://github.com/scala-garden/mima) may report `IncompatibleSignatureProblem` when you republish ([#27063](https://github.com/scala/scala3/issues/27063) is one example); use MiMa 1.2.1 or later, as noted in the introduction.
If you mix Scala and Java, also check that Java call sites still type-check against the tighter signature.

Primitive and value-class results inside higher-kinded type lambdas are now boxed as well; previously they could crash the compiler's JVM backend ([#26787](https://github.com/scala/scala3/pull/26787)).

### Recursion runs out of "fuel" instead of overflowing the stack

The compiler no longer catches `StackOverflowError` to stop runaway type checking ([#25937](https://github.com/scala/scala3/pull/25937)).
Very deep types that used to compile may now fail until you raise `-Xmax-fuel` and usually `-Xss`.
See [Fuel-limited recursion](#compiler-fuel) for how that works and which flags to set.

### Other compatibility notes

- Deprecated no-op compiler settings are removed, including `-Youtput-only-tasty` ([#26169](https://github.com/scala/scala3/pull/26169), [#26170](https://github.com/scala/scala3/pull/26170), [#26171](https://github.com/scala/scala3/pull/26171)).
- Bytecode generation uses the stock ASM library instead of the scala-asm fork ([#26772](https://github.com/scala/scala3/pull/26772)). Tools that depended on the `scala-asm` artifact transitively may need a dependency update.

## New stable features

### [SIP-67: Strict equality pattern matching](https://docs.scala-lang.org/sips/67.html) {#sip-67-strict-equality-pattern-matching}

With `strictEquality`, `x == y` needs a `CanEqual` instance, so you cannot compare unrelated types by accident.
Until now that also got in the way of ordinary pattern matching: matching on an enum case or case object is implemented with `==` under the hood, so the compiler asked for `CanEqual` even when you only wrote `match`.

SIP-67, experimental since Scala 3.8, is now stable, so it applies whenever `strictEquality` is enabled.
You can match on enums and ADTs under `strictEquality` without proving `CanEqual`, while `==` itself stays strict.

```scala
//> using scala 3.10.0

import scala.language.strictEquality

enum Foo:
  case Bar
  case Baz(f: Int => Int)

// Still rejected: comparing Foo values with `==` can be nonsensical
def eqIsStillIllegal(x: Foo, y: Foo) =
  x == y // error (as intended)

def eval(x: Foo): Int =
  x match
    case Foo.Bar      => 0 // previously required CanEqual[Foo, Foo]
    case Foo.Baz(fun) => fun(0)
```

## New preview features

Preview features are enabled with `-preview` (for example `scalacOptions += "-preview"` in sbt, or `scala -preview` / `//> using options -preview` with Scala CLI).
The experimental language imports that previously gated these SIPs are deprecated; using them prints a warning that points you to `-preview`.

### [SIP-61: Unroll default arguments](https://docs.scala-lang.org/sips/61.html) {#sip-61-unroll-default-arguments}

Adding a parameter with a default value to a public method is source compatible, but not binary compatible: the old JVM method signature disappears, so code compiled against the previous version of your library fails at runtime with `NoSuchMethodError`.
`@unroll` tells the compiler to keep the old signatures as forwarders - methods that exist in the bytecode but cannot be called from Scala source.

New parameters must be **appended**.
`@unroll` marks the first parameter added in each version of your library, and every parameter to its right must also have a default.
The compiler checks that annotated parameters (and those after them) have defaults.
The compiler does not check that `@unroll` is placed at the right version boundary; that is your responsibility.
Keep an `@unroll` at every previous binary boundary when you add another wave of parameters.

```scala
//> using scala 3.10.0
//> using options -preview

import scala.annotation.unroll

object Api:
  // Invisible forwarders generated by @unroll:
  //   greet(name)                        // v1.0
  //   greet(name, excited, punctuation)  // v1.1
  final def greet(
      // v1.0
      name: String,
      // v1.1
      @unroll excited: Boolean = true,
      punctuation: String = "!",
      // v1.2
      @unroll color: String = "blue"
  ): String =
    val base = s"Hello, $name"
    val text = if excited then base + punctuation else base
    s"$text[$color]"
```

New Scala callers compiling against the latest version of the API do not need the forwarders: they see the full method and omit trailing arguments via ordinary Scala defaults.
The forwarders exist for **already-compiled** clients that linked against an older JVM signature such as `greet(String)`.
Without `@unroll`, defaults alone never emit those older overloads, so old binaries fail to link.
You can append parameters this way, but you **cannot remove** them later: dropping a parameter removes a binary entry point and breaks existing callers.
Use [MiMa](https://github.com/scala-garden/mima) against your previous artifacts to catch a missing forwarder or a dropped parameter before you publish.
If v1.2 had annotated only `color`, the v1.1 entry point `greet(name, excited, punctuation)` would be kept but the v1.0 entry point `greet(name)` would be lost.

### [SIP-75: Relaxed lambda syntax](https://docs.scala-lang.org/sips/75.html) {#sip-75-relaxed-lambda-syntax}

[Fewer-braces](https://docs.scala-lang.org/scala3/reference/other-new-features/indentation.html) application with `:` already allowed an indented lambda.
SIP-75 now allows the lambda on the same line as well, so `:` means application whether the body is indented or written inline.
A same-line lambda extends to the end of the line.
Placeholder syntax (`_`) is not supported; write a lambda with named parameters and `=>` or `?=>`.
For example, `xs.map: _ + 1` is rejected; write `xs.map: x => x + 1` instead.

```scala
//> using scala 3.10.0
//> using options -preview

def newSyntax(xs: Option[Int]) =
  xs.map: v => v + 1
  .filter: v => v > 3 && v < 8

def oldSyntax(xs: Option[Int]) =
  xs.map: v =>
    v + 1
  .filter: v =>
    v > 3 && v < 8

val sums = Seq((1, 2), (3, 4)).map: (a, b) => a + b
```

In both forms above, `.filter` continues the chain started by `xs.map`; the indentation of the lambda body does not change how the following `.filter` attaches.
Two single-line lambdas on the same line are rejected ([SIP amendment](https://docs.scala-lang.org/sips/75.html)): `xs.map: x => ys.map: y => x + y` must wrap the inner lambda in parentheses.
The new rule also does not apply immediately inside parentheses, so `(x: Int => Int)` stays a type ascription.

### [SIP-68: Referenceable package objects](https://docs.scala-lang.org/sips/68.html) {#sip-68-referenceable-package-objects}

You could always call members on a package object (`lib.json.encode(...)`), but until now you could not treat the package object itself as a value the way a normal `object` works.
`val api = lib.json` failed with "package is not a value"; the workaround was `` lib.json.`package` ``.
SIP-68 removes that irregularity, so the direct form now works.

Package objects are [listed among features that may eventually be dropped](https://docs.scala-lang.org/scala3/reference/dropped-features/package-objects.html), but there is no concrete plan to remove them.
Until there is, they should behave like ordinary objects.

```scala
//> using scala 3.10.0
//> using options -preview

package lib

package object json:
  def encode(x: Any): String = x.toString
  def decode(s: String): Any = s

object Demo:
  val api = lib.json // was: lib.json.`package`

  def roundTrip(codec: lib.json.type, value: Int): Any =
    codec.decode(codec.encode(value))

  roundTrip(api, 42)
  roundTrip(lib.json, 42)
```

`lib.json` is treated as `` lib.json.`package` `` only when it is used on its own, not in a longer selection such as `lib.json.encode`.
Its type is the type of the package object, so it only includes members of the package object itself, not top-level definitions from other files in the same package.

## New experimental features

Experimental features carry neither source nor binary compatibility guarantees between any compiler versions.
They can be changed or removed at any time until stabilized as `preview` features.
Enable them with `-experimental`, or with a specific `-language:experimental.*` option as in the snippets below.
A *Pre-SIP* feature is a design that has not yet been submitted as a SIP.

### [SIP-72: Dedented string literals](https://github.com/scala/improvement-proposals/pull/112)

[Dedented string literals](https://github.com/scala/scala3/pull/26332) are an experimental implementation of SIP-72.
Enable them with `-language:experimental.dedentedStringLiterals`, or `import language.experimental.dedentedStringLiterals`.

They introduce a `'''` multiline literal that strips indentation in the language, so you do not need `.stripMargin`.
The opening `'''` must be followed by a newline, and the closing `'''` must sit on its own indented line.
The compiler removes the first newline after the opener, the final newline before the closer, and common leading indentation up to the closer's column.
Indent content further than the closer if you want leading spaces kept in the string.
Interpolators such as `s'''...'''` and `f'''...'''` work the same way.

```scala
//> using scala 3.10.0
//> using options -language:experimental.dedentedStringLiterals

def plain =
  '''
  i am cow
  hear me moo
  '''

def indented =
  '''
    i am cow
    hear me moo
  '''

@main def run(): Unit =
  println(plain)    // i am cow\nhear me moo
  println(indented) //   i am cow\n  hear me moo
```

See the [reference](https://scala-lang.org/api/3.10.0/docs/experimental/dedented-string-literals.html) for the full rules and more examples.

### Pre-SIP: Inline traits and specialized traits

[Inline traits and specialized traits](https://github.com/scala/scala3/pull/26156) are a new attempt at specialization in Scala 3, a Scala 3 successor to Scala 2's `@specialized`, which Scala 3 does not support.

```scala
//> using scala 3.10.0
//> using options -language:experimental.specializedTraits

inline trait Cell[T: Specialized](val value: T):
  def get: T = value

object Cell:
  inline def apply[T: Specialized](value: T): Cell[T] =
    new Cell[T](value) {}

def bump(c: Cell[Int]): Int =
  c.get + 1

@main def run(): Unit =
  println(bump(Cell(41)))
```

An `inline trait` does not stay as a shared superclass whose methods are erased to `Object`.
When a concrete class extends `Cell[T]` with `T = Int`, the compiler copies the trait's members into that class with `T` already replaced by `Int`, so the implementation stores and returns a primitive `int`.

That alone is not enough for calls through a reference whose static type is `Cell[Int]`: erasure would still see a generic `Cell` interface, so `c.get` would return `Object` and need unboxing.
A `Specialized` context bound asks the compiler to also emit a specialized interface (for example `Cell$$sp$scala$Int` with `get(): Int`) and to route those calls through it, so `bump` reads the value without boxing (an unboxed `get` followed by `iadd`, instead of `get`, `unboxToInt`, `iadd`).

See the [reference](https://scala-lang.org/api/3.10.0/docs/experimental/specialized-traits.html) for the generated layout, richer examples such as specialized numeric vectors, and the current restrictions.

## Scala CLI and distribution

Scala 3.10 ships with Scala CLI **1.17.1**.
See the [v1.17.0](https://github.com/VirtusLab/scala-cli/releases/tag/v1.17.0) and [v1.17.1](https://github.com/VirtusLab/scala-cli/releases/tag/v1.17.1) notes for the full list; the main additions are:

- Java instance main methods and `void main()` without a class ([JEP 512](https://openjdk.org/jeps/512)), on JDK 25+ (or JDK 21+ with `--enable-preview`)
- Individual files as resources with `--resource` or `//> using resource`
- `//> using exclude` in `.sc` scripts
- Passing a `-d` path ending in `.jar` now produces a library JAR, as `scalac` does
- The `lts` version tag now resolves to the Scala **3.9** LTS series (use `3.3.lts` to stay on 3.3)

### Deb and RPM packages

The recommended way to install Scala remains a version manager such as [Coursier](https://get-coursier.io/docs/cli-installation), [SDKMAN!](https://sdkman.io/), or [Homebrew](https://brew.sh/).
Those tools still give you the easiest upgrades and the ability to switch between Scala versions.

Scala 3.10 also ships the distribution as **`.deb` and `.rpm`** packages ([#26858](https://github.com/scala/scala3/pull/26858)), so you can install it through the usual package managers on Debian/Ubuntu and Fedora/RHEL-family systems when that fits your environment better.
The packages are published as [GitHub release assets](https://github.com/scala/scala3/releases) alongside the existing archives, the same way Windows `.msi` installers are.

## Other changes worth noting

### Fuel-limited recursion {#compiler-fuel}

Deep or recursive types used to make the compiler overflow the JVM stack.
Catching `StackOverflowError` was unreliable, and the crash was hard to relate back to your code.

From Scala 3.10, recursive compiler work spends **fuel** ([#25937](https://github.com/scala/scala3/pull/25937)): a counter of how deeply the compiler may nest fuel-checked operations such as subtype tests, match-type reduction, or inlining before it gives up.
Each nested entry costs one unit of fuel; when the counter hits zero, compilation stops with `Recursion limit exceeded` and a short list of the recurring operations, instead of a stack overflow.

The fuel budget is set with the compiler option `-Xmax-fuel`.
The default is 550, chosen so that, with a typical JVM stack size, the compiler runs out of fuel before the stack overflows.
If the error comes from a type or expansion that is *meant* to be that deep, raise the limit, for example `-Xmax-fuel:2000`, **and** give the compiler a larger stack with `-Xss` (in sbt, put it in `.jvmopts`; with Scala CLI, `//> using javaOpt -Xss8m` or `--java-opt -Xss8m`).
Raising fuel without raising the stack often just turns the error into a real `StackOverflowError`.

Fuel is separate from `-Xmax-inlines` (default 32), which caps how many successive inline expansions are allowed.
Deep recursive inlines also spend fuel while the expansion is typed, so raising `-Xmax-inlines` alone may still fail with `Recursion limit exceeded` until you raise `-Xmax-fuel` (and usually `-Xss`) as well.

If you get a `StackOverflowError` on 3.10 without changing `-Xmax-fuel` or the stack size, that is a compiler bug: fuel should run out first. [Please report it](https://github.com/scala/scala3/issues/new/choose).

For the details, including hosts where you cannot grow the stack when the compiler itself runs there, see [Compiling deeply nested code](https://docs.scala-lang.org/overviews/compiler-options/compiling-deeply-nested-code.html).

### Pattern matching on Java records

Java records can be used as extractor patterns, including generic records and varargs components ([#26497](https://github.com/scala/scala3/pull/26497)).
A static `unapply` already defined on the record class still takes precedence.

Given these Java records, compiled as part of the same project or coming from a dependency:

```java
public record Point(int x, int y) {}
public record Labels(int count, String... names) {}
```

```scala
//> using scala 3.10.0

@main def run(): Unit =
  val p = Point(3, 4)
  p match
    case Point(x, y) => println(s"point $x,$y")

  val labels = Labels(2, "a", "b")
  labels match
    case Labels(count, names*) => println(s"$count: ${names.mkString(",")}")
```

### `\s` space escape

String literals accept `\s` as a space, including in interpolators ([#26515](https://github.com/scala/scala3/pull/26515)).
`raw"..."` still treats the two characters literally.

```scala
//> using scala 3.10.0

println("a\sb")    // a b
println(s"a\sb")   // a b
println(raw"a\sb") // a\sb
println(f"a\sb")   // a b
```

### REPL

You can now type `//> using dep`, `//> using toolkit`, and `//> using jar` directives directly in the REPL, on their own or followed by code in the same input ([#26507](https://github.com/scala/scala3/pull/26507), [#26788](https://github.com/scala/scala3/pull/26788), [#26726](https://github.com/scala/scala3/pull/26726)).
Do not mix them with `:` REPL commands in a single input.

```text
scala> //> using toolkit default
     | os.pwd
val res0: os.Path = ...
```

The REPL also gained `:save` and `:replay`: `:save <path>` writes the session's inputs to a file, and `:replay` resets the REPL and re-runs those commands.
`-Yrepl-print-tostring` ([#26435](https://github.com/scala/scala3/pull/26435)) prints results with `toString` instead of the default pretty-printer.
`-deprecation` and `-feature` are enabled by default in the REPL.

### Standard library and tooling

- `IArray` now has `Factory`, `IsSeq` and `BuildFrom` instances ([#24552](https://github.com/scala/scala3/pull/24552), [#24674](https://github.com/scala/scala3/pull/24674)), so more collection operations work without converting to `Array`.
- Several standard-library collection operations allocate less; `ArrayDeque.clear` is now O(1) ([#26288](https://github.com/scala/scala3/pull/26288)).
- Scaladoc no longer crashes on mixed class/module API packages, keeps the current page when switching versions, and finds members whose names end in `!` or `$`.

## What's next?

The release branch for **Scala 3.10.1** has already been cut, and its first release candidate will follow shortly.

We plan one further patch, **Scala 3.10.2**, a few weeks later.
After that, development moves on to **Scala 3.11**, expected around **March or April 2027**.

Scala 3.9 LTS continues as the long-term publishing baseline.

---

As always, the full changelog is available in the [release notes on GitHub](https://github.com/scala/scala3/releases/tag/3.10.0).

This release was made possible by the joint work of [EPFL](https://www.epfl.ch/), [VirtusLab](https://virtuslab.com/expertise/scala) and the [Scala Center](https://scala.epfl.ch/), together with the wider Scala community. Thank you to everyone who contributed.

<p style="margin-bottom: 4px; line-height: 0;"><a href="https://virtuslab.com/expertise/scala"><img src="{{ site.baseurl }}/resources/img/orgs/virtuslab-logo.png" alt="VirtusLab" style="height: 64px; width: auto; margin: 0;"></a></p>

**About VirtusLab**

VirtusLab is a software engineering company and a long-term core contributor to the Scala ecosystem. Its engineers help maintain the Scala 2 and Scala 3 compilers, manage their releases, and build key tools including Scala CLI, the Metals language server and the Open Community Build. Learn more at [virtuslab.com/expertise/scala](https://virtuslab.com/expertise/scala).

<p style="margin-top: 10px; margin-bottom: 4px; line-height: 0;"><a href="https://www.epfl.ch/"><img src="{{ site.baseurl }}/resources/img/epfl-logo.svg" alt="EPFL" style="height: 48px; width: auto; margin: 0 2.5em 0 0; vertical-align: middle;"></a><a href="https://scala.epfl.ch/"><img src="{{ site.baseurl }}/resources/img/orgs/scala-center-logo.png" alt="Scala Center" style="height: 48px; width: auto; margin: 0; vertical-align: middle;"></a></p>

**About EPFL and the Scala Center**

Scala was created at EPFL in Lausanne, Switzerland, by Martin Odersky's research group. EPFL still leads much of the language's design and compiler research. The Scala Center, a not-for-profit centre at EPFL, supports Scala's open-source ecosystem, tooling and education. Learn more at [scala.epfl.ch](https://scala.epfl.ch).
