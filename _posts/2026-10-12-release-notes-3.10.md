---
category: release
permalink: /news/3.10/
title: "Scala 3.10 released!"
by: Wojciech Mazur, VirtusLab
---

# Scala 3.10 released!

We are happy to announce **Scala 3.10.0**, starting a new Scala Next series.

This release stabilises [SIP-67](https://docs.scala-lang.org/sips/67.html), moves three SIPs into preview, and starts dropping language features that have been deprecated for several minors.

Scala 3.9 LTS remains the recommended publishing baseline for libraries that want the long support window.
Scala 3.3 LTS aimed for maximal compatibility with Scala 2.13, and 3.9 LTS continues that approach.
Starting with Scala 3.10, after nearly five years of Scala 3, we begin dropping legacy syntax and features that have already been deprecated.
The standard library also starts using more Scala 3 features, such as `inline` and extension methods.
We keep source and binary compatibility, but macros and compiler plugins can break when the new AST shapes no longer match the trees they were written against.

## Breaking changes

Starting with Scala 3.10, you should expect deprecated language features to become errors in Scala Next.
Macros and compiler plugins take most of the hit, but they are not the only surface that can fail.

Typical cases fall into a few buckets:

- APIs that were easy to rely on by accident (for example a private companion given, or a custom `->` defined via an implicit class)
- Syntax that has been deprecated for several releases already
- Standard-library improvements where common operations became `inline` or extension methods for performance and clarity - these keep source and binary compatibility for normal call sites, but they change the trees macros see, so applications typically need a dependency upgrade rather than local source changes

The sections below walk through the better-known issues in more detail.

> **Library maintainers:** if you ship macros or compiler plugins, we recommend a CI job against Scala Next nightlies (or the current minor once an RC exists). Those surfaces are the ones most often affected, and a job in your own repository catches them earlier than the [Open Community Build](https://github.com/VirtusLab/community-build3), which is how several of the compatibility PRs below were found.

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
If a library you maintain still hides givens in a private companion, publish a fix before users move to 3.10 - they usually cannot repair it from the consuming project.

### Stronger constant folding during inlining

[Stronger constant folding during inlining](https://github.com/scala/scala3/pull/25731) was [left out of Scala 3.9.0]({{ site.baseurl }}/news/3.9/) so the new LTS would keep working with libraries published at the time.
It fixes several inlining bugs, and it also exposes macros that splice ill-typed trees.
Scala 3.10 also [checks that a macro expansion has the type the macro claimed](https://github.com/scala/scala3/pull/25756).

**ZIO ecosystem users should upgrade those libraries first**, then bump the compiler.
Fixes already published include:

- [zio/zio#10725](https://github.com/zio/zio/pull/10725), shipped in **ZIO 2.1.26**
- [zio/zio-blocks#1584](https://github.com/zio/zio-blocks/pull/1584), in the **0.0.54** line
- [zio/izumi-reflect#598](https://github.com/zio/izumi-reflect/pull/598), in **izumi-reflect 3.0.10**
- [kitlangton/neotype#517](https://github.com/kitlangton/neotype/pull/517), in **neotype 0.7.2** (that release also covers the `Rich*` change below)

### Primitive `Rich*` wrappers are extension methods

[`runtime.RichInt` and the other `Rich*` implicit classes are gone](https://github.com/scala/scala3/pull/23872).
Operations such as `until`, `to`, `abs`, and `max` are now extension methods on the primitive companions.
Call sites that just use `1 to 10` keep working.
Macros that inspected the old `Rich*` symbols, or that assumed `Predef` still inserted those implicit classes, need to match the extension-method shape instead.

### `->` is an inline extension method

The `a -> b` pair syntax is now an [inline extension method](https://github.com/scala/scala3/pull/24728).
`Predef.ArrowAssoc` is deprecated and is no longer an implicit conversion.

Two practical consequences:

- Quote patterns such as `case '{ ($a: String) -> ($b: Any) }` no longer match, because the tree is no longer an `ArrowAssoc` conversion.
- A user-defined `->` on an **implicit class** can stop winning over `Predef.->`, because extension methods do not use the same "most specific" priority as implicit classes ([scala/scala3#26851](https://github.com/scala/scala3/issues/26851)). A user-defined **extension** `->` still takes precedence. If you ship a DSL that defines `->` via an implicit class, switch it to an extension method.

### `A with B` is an error

`with` as a type operator has warned since Scala 3.4 and is an [error in 3.10](https://github.com/scala/scala3/pull/26545).
`-source:3.4-migration -rewrite` rewrites `A with B` to `A & B`.
A typed pattern needs extra parentheses, matching that rewrite: `case x: (A & B) =>`.

### `this` is illegal in top-level definitions

A top-level definition is not allowed to refer to [`this`](https://github.com/scala/scala3/pull/26448).
There is no enclosing instance for that reference to mean.

### Java generic signatures are more precise

[#25944](https://github.com/scala/scala3/pull/25944) boxes primitive arguments in the classfile `Signature` attribute.
For a type such as `Option[Int => String]`, the generic signature is now more precise:

```text
// before
scala.Option<scala.Function1<java.lang.Object, java.lang.String>>
// after
scala.Option<scala.Function1<java.lang.Integer, java.lang.String>>
```

The JVM method *descriptor* is unchanged, so Scala binary linking keeps working.
What changes is what Java compilers and bytecode tools read from that signature:

- [MiMa](https://github.com/scala-garden/mima) reports `IncompatibleSignatureProblem` when you republish. Upgrade to **[MiMa 1.2.0](https://github.com/scala-garden/mima/releases/tag/v1.2.0) or later** (1.2.1 is current) before checking a 3.10 artifact: that release adds Scala 3.9 and 3.10 support and drops several false positives.
- Java call sites can start seeing a tighter type argument.

Library authors may see extra MiMa reports on signatures when they republish; [scala/scala3#27063](https://github.com/scala/scala3/issues/27063) is one example. If you mix Scala and Java, check that Java call sites still type-check.

[#26787](https://github.com/scala/scala3/pull/26787) also boxes primitive and value-class results inside higher-kinded type lambdas, which previously could crash the JVM backend.

### Recursion runs out of fuel instead of overflowing the stack

The compiler no longer catches `StackOverflowError` to stop runaway type checking ([#25937](https://github.com/scala/scala3/pull/25937)).
It spends a fuel budget instead, so you get a `Recursion limit exceeded` error rather than a JVM crash.
Very deep types that used to compile by luck may now fail until you raise `-Xmax-fuel`.
See [Fuel-limited recursion](#compiler-fuel) for how that works and which flags to set.

### Other compatibility notes

- Deprecated no-op compiler settings are removed, including `-Youtput-only-tasty` ([#26169](https://github.com/scala/scala3/pull/26169), [#26170](https://github.com/scala/scala3/pull/26170), [#26171](https://github.com/scala/scala3/pull/26171)).
- Bytecode generation uses stock ASM rather than the old scala-asm fork ([#26772](https://github.com/scala/scala3/pull/26772)).

## New stable features

### [SIP-67: Strict equality pattern matching](https://docs.scala-lang.org/sips/67.html)

With `strictEquality`, `x == y` needs a `CanEqual` instance, so you cannot compare unrelated types by accident.
Until now that also got in the way of ordinary pattern matching: matching on an enum case or case object is implemented with `==` under the hood, so the compiler asked for `CanEqual` even when you only wrote `match`.

SIP-67, experimental since Scala 3.8, fixes that and is now enabled by default.
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
    case Foo.Bar      => 0
    case Foo.Baz(fun) => fun(0)
```

## New preview features

Preview features are enabled with `-preview`.
The experimental language imports that previously gated these SIPs are deprecated and tell you to switch to that flag.

### [SIP-61: Unroll default arguments](https://docs.scala-lang.org/sips/61.html)

New parameters must be **appended**. `@unroll` marks the first new defaulted parameter of a release, and every parameter to its right must also have a default.
The compiler checks that annotated parameters (and those after them) have defaults; it does **not** check that you placed `@unroll` on the right boundary for your API history - that is solely on you.
Each `@unroll` emits an invisible binary forwarder that drops that parameter and everything after it.
Keep an `@unroll` at every previous binary boundary when you add another wave of parameters.

```scala
//> using scala 3.10.0
//> using options -preview

import scala.annotation.unroll

object Api:
  // Generated binary API also includes invisible forwarders:
  //   greet(name)                                 // since 1.0
  //   greet(name, excited, punctuation)           // since 1.1
  //   greet(name, excited, punctuation, color)    // since 1.2
  final def greet(
      // since v1.0
      name: String,
      // since v1.1
      @unroll excited: Boolean = true,
      punctuation: String = "!",
      // since v1.2
      @unroll color: String = "blue"
  ): String =
    val base = s"Hello, $name"
    val text = if excited then base + punctuation else base
    s"$text[$color]"
```

New Scala callers, compiling against the latest version of API do not need the forwarders: they see the full method and omit trailing arguments via ordinary Scala defaults.
The forwarders exist for **already-compiled** clients that linked against an older JVM signature such as `greet(String)`.
They are marked invisible, so new source resolution does not pick them; only the binary API keeps them.
Without `@unroll`, defaults alone never emit those older overloads, so old binaries fail to link.
You can append parameters this way, but you **cannot remove** them later: dropping a parameter removes a binary entry point and breaks existing callers.
Use [MiMa](https://github.com/scala-garden/mima) against your previous artifacts to catch a missing forwarder or a dropped parameter before you publish.
If V1.2 annotated only `color`, you would keep the V1.1 `greet(name, excited, punctuation)` entry point but drop the V1.0 `greet(name)` one.

### [SIP-75: Relaxed lambda syntax](https://docs.scala-lang.org/sips/75.html)

Fewer-braces application with `:` already allowed an indented lambda.
SIP-75 now allows the lambda on the same line as well, so `:` means application whether the body is indented or written inline.
A same-line lambda extends to the end of the line.
It does not accept wildcard syntax: write the full form with `=>` or `?=>` and named parameters. `xs.map: _ + 1` is rejected; use `xs.map: x => x + 1` instead.

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

Two single-line lambdas on the same line are rejected, following the SIP amendment.
The new reading also does not apply immediately inside parentheses, so `(x: Int => Int)` stays a type ascription.

### [SIP-68: Referenceable package objects](https://docs.scala-lang.org/sips/68.html)

You could always call members on a package object (`lib.json.encode(...)`), but until now you could not treat the package object itself as a value the way a normal `object` works.
`val api = lib.json` failed with "package is not a value"; the workaround was `` lib.json.`package` ``.
SIP-68 removes that irregularity, so the direct form now works.

Package objects were [listed among features that may eventually go away](https://docs.scala-lang.org/scala3/reference/dropped-features/package-objects.html) in favor of top-level definitions, but despite that earlier announcement there is not yet a concrete removal plan.
Until that story changes, making them referenceable like normal objects removes a long-standing wart rather than investing in a dead end.

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

The expansion only applies when the package object is used standalone (`lib.json`), not in a longer select such as `lib.json.encode`.
The value has the type of the package object, not of every definition that happens to live in that package.

## New experimental features

Experimental features carry neither source nor binary compatibility guarantees between any compiler versions - these can be changes or removed at any time until stabilized as `preview` features.

### Pre-SIP: Inline traits and specialized traits

[Inline traits and specialized traits](https://github.com/scala/scala3/pull/26156) are a new attempt at specialization in Scala 3, replacing Scala 2's `@specialized`.

An `inline trait` does not stay as a shared superclass whose methods are erased to `Object`.
When a concrete class extends `Cell[T]` with `T = Int` (here via `new Cell[T](value) {}` inside `Cell.apply`), the compiler pastes the trait's members into that class with `T` already replaced by `Int`, so the implementation stores and returns a primitive `int`.

That alone is not enough for calls through a `Cell[Int]` typed reference: erasure would still see a generic `Cell` interface, so `c.get` would return `Object` and need unboxing.
A `Specialized` context bound asks the compiler to also emit a specialized interface (for example `Cell$$sp$scala$Int` with `get(): Int`) and to route those calls through it.
In the snippet below, `bump` therefore compiles to an unboxed `get` plus `iadd`, not `get`/`unboxToInt`/`iadd`.

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

See the [reference](https://docs.scala-lang.org/scala3/reference/experimental/specialized-traits.html) for the generated layout, richer examples such as specialized numeric vectors, and the current restrictions.

### Pre-SIP: Spec strings

[Spec strings](https://github.com/scala/scala3/pull/26486) put a coding agent's prompt in the source file, right where the generated code should live.
You write the signature and the intent; the agent is expected to fill in the body (and later keep that body aligned when the intent changes).
The compiler only accepts the syntax and erases the string at runtime — IDE, build, or agent-loop tooling is what invokes the model and reconciles the two sides.

`'''spec` is a dedented string literal enabled by `import scala.language.experimental.magic` (modular agent interface code).
Markdown backticks can name real Scala symbols such as `` `Date` ``, so rename and navigation work across the prompt.

A typical starting point leaves the body to the agent:

```scala
//> using scala 3.10.0

import language.experimental.magic

type Date = (day: Int, month: Int, year: Int)

def parseDate(str: String): Option[Date] =
  '''spec
  Parse date string into a `Date` structure
  '''
  ???
```

On the next agent pass, `???` is replaced with an implementation that matches the prompt.
If you later tighten the spec to require the format `"day/month/year"`, tooling should notice the drift and rewrite the generated body (for example switching `split("-")` to `split("/")`) rather than leaving stale code behind.
Edits in the other direction work the same way: change the body by hand and the agent updates the spec to describe it.

## Scala CLI and distribution

Scala 3.10 ships with Scala CLI **1.17.1**.
See the [v1.17.0](https://github.com/VirtusLab/scala-cli/releases/tag/v1.17.0) and [v1.17.1](https://github.com/VirtusLab/scala-cli/releases/tag/v1.17.1) notes for the full list; the main additions are:

- JEP 512 flexible main methods on JDK 25+ (and on JDK 21+ with `--enable-preview`)
- Individual files as resources with `--resource` or `//> using resource`
- `//> using exclude` in `.sc` scripts
- `-d` paths that end in `.jar` emit a library JAR, matching `scalac`
- The `lts` version tag now resolves to the Scala **3.9** LTS series (use `3.3.lts` to stay on 3.3)

### Deb and RPM packages

The recommended way to install Scala remains a version manager such as [Coursier](https://get-coursier.io/docs/cli-installation), [SDKMAN!](https://sdkman.io/), or [Homebrew](https://brew.sh/).
Those tools still give you the easiest upgrades and the ability to switch between Scala versions.

Scala 3.10 also ships the distribution as **`.deb` and `.rpm`** packages ([#26858](https://github.com/scala/scala3/pull/26858)), so you can install it through the usual package managers on Debian/Ubuntu and Fedora/RHEL-family systems when that fits your environment better.
The packages were smoke-tested on recent Debian, Ubuntu, Fedora, AlmaLinux, and openSUSE releases.

## Other changes worth noting

### Fuel-limited recursion {#compiler-fuel}

Deep or recursive types used to make the compiler overflow the JVM stack.
Catching `StackOverflowError` was unreliable, and the crash was hard to relate back to your code.

From Scala 3.10, recursive compiler work spends **fuel** ([#25937](https://github.com/scala/scala3/pull/25937)): a counter of how deeply the compiler may nest fuel-checked operations such as subtype tests, match-type reduction, or inlining before it gives up.
Each nested entry costs one unit of fuel; when the counter hits zero, compilation stops with `Recursion limit exceeded` and a short list of the recurring operations, instead of a stack overflow.

The fuel budget is set with the compiler option `-Xmax-fuel`. The default is 550 units, sized so a typical JVM stack would usually run out of fuel before overflowing.
If the error is from a type or expansion that is *meant* to be that deep, raise the limit, for example `-Xmax-fuel:2000`, **and** give the compiler a larger stack with `-Xss` (in sbt, put it in `.jvmopts`).
Raising fuel without raising the stack often just turns the error into a real `StackOverflowError`.

Fuel is separate from `-Xmax-inlines` (default 32), which caps how many successive inline expansions are allowed.
Deep recursive inlines also spend fuel while the expansion is typed, so raising `-Xmax-inlines` alone may still fail with `Recursion limit exceeded` until you raise `-Xmax-fuel` (and usually `-Xss`) as well.

If you get a `StackOverflowError` on 3.10 without changing `-Xmax-fuel` or the stack size, that is a compiler bug: fuel should run out first. [Please report it](https://github.com/scala/scala3/issues/new/choose).

For the details, including Scala.js where you cannot grow the stack, see [Compiling deeply nested code](https://docs.scala-lang.org/overviews/compiler-options/compiling-deeply-nested-code.html).

### Pattern matching on Java records

Java records can be used as extractor patterns, including generic records and varargs components.
A user-defined `unapply` still takes precedence.

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

The Scala REPL now accepts selected `//> using` directives in the same input as the code that follows them: [`dep`](https://github.com/scala/scala3/pull/26507), [`toolkit`](https://github.com/scala/scala3/pull/26788), and [`jar`](https://github.com/scala/scala3/pull/26726).
Do not mix them with `:` REPL commands in a single input.

```text
scala> //> using toolkit default
     | os.pwd
val res0: os.Path = ...
```

It also gained `:save` and `:replay`, can print results with `-Yrepl-print-tostring`, and enables `-deprecation` and `-feature` by default.

### Standard library and tooling

- `IArray` got `IsSeq` and `BuildFrom` instances, so more collection operations work without converting to `Array`.
- `scala.util.ChainingOps` methods (`tap`, `pipe`) are `inline`.
- Several standard-library collection operations allocate less; `ArrayDeque.clear` is now O(1).
- Scaladoc no longer crashes on mixed class/module API packages, keeps the current page when switching versions, and finds members whose names end in `!` or `$`.

The full list is in the [Scala 3.10.0 release notes](https://github.com/scala/scala3/releases/tag/3.10.0).

## What's next?

**Scala 3.10.1** is already cut. Its first RC will follow shortly after 3.10.0.

We plan one further patch, **Scala 3.10.2**, a few weeks later.
After that the line moves on to **Scala 3.11**, expected around **March or April 2027**.

Scala 3.9 LTS continues as the long-term publishing baseline.

---

The full changelog for Scala 3.10.0 can as always be found in the [release notes on GitHub](https://github.com/scala/scala3/releases/tag/3.10.0).
