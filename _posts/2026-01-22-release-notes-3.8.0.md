---
category: release
permalink: /news/3.8.0/
title: "Scala 3.8 released!"
by: Wojciech Mazur, VirtusLab
---

![Scala 3.8]({{ site.baseurl }}/resources/img/scala-3.8-launch.png)

We're pleased to announce the release of Scala 3.8 — a significant release that modernizes the Scala ecosystem and paves the way for Scala 3.9 LTS. This release introduces a standard library compiled by Scala 3 itself, stabilizes highly-anticipated features like **Better Fors** (SIP-62) and **`runtimeChecked`** (SIP-57), and introduces experimental features including **flexible varargs** and **strict equality pattern matching**.

> A runtime regression was detected after publishing the Scala 3.8.0 artifacts. Please **use Scala 3.8.1** instead. <br>
> <br>
> The issue could lead to JVM linkage errors at runtime. It may have affected Scala 3 users who execute Scala 2.13 libraries, as well as certain uses of specialized members in the Scala standard library.
> Any library published with Scala 3.8.0 is expected to remain binary compatible. Artifacts built with Scala 3.8.0 are safe to use and should stay binary compatible with subsequent Scala 3 releases. <br>
> <br>
> A more detailed postmortem will follow shortly after the Scala 3.8 release announcement.

# What's new in Scala 3.8?

## JDK 17 is now required

> **Important:** This release requires **JDK 17 or later** for compilation and execution. If your project runs on an older JDK, you must upgrade before migrating to **Scala 3.8**.

The plans for this change were [announced in early 2025](https://www.scala-lang.org/news/next-scala-lts-jdk.html) by the Scala team and are required to support future JDK 26+, which restricts access to `sun.misc.Unsafe` functionalities used by our existing lazy-vals implementation. For most end users this might be just a small adjustment, but this change needs to be considered by the library authors and communicated to their users. If your project still runs on an older JDK, you must first upgrade to at least 17 before upgrading to Scala 3.8. Upgrading earlier will allow you to benefit from new language features and improved performance on the modern JVM.

The LTS (long‑term support) version Scala 3.3 will continue to produce JDK 8 compatible bytecode, but all future Scala releases (including the 3.9 LTS) will require JDK 17 or higher.
For library authors who need to keep compatibility with at least some older JVM versions, we recommend using upcoming Scala 3.3.8 LTS when it's released in the next months. That version will provide a `-Yfuture-lazy-vals` flag which activates new implementation of lazy vals, which still requires upgrading to at least JDK 9.

## Standard Library changes

### Compiled with Scala 3

The Scala standard library has historically been compiled using Scala 2.13 and used by Scala 3 as-is, thanks to binary compatibility. In Scala 3.8 the library is now compiled with Scala 3. The change itself has been verified to be binary compatible and should not cause problems when migrating to Scala 3.8.

> **Source Incompatibility:** Context bounds in standard library classes such as `scala.reflect.ClassTag` used in `Array.empty[T]` method, are now desugared to `given` instead of `implicit`. This change requires `using` modifiers when supplying explicit parameters.

```scala
object Array:
  def empty[T: ClassTag]: Array[T]

val fails = Array.empty(reflect.ClassTag.Int) // error: No ClassTag available for Any
val works = Array.empty(using reflect.ClassTag.Int)
val recommended = Array.empty[Int]
```

Most such errors can be automatically fixed by the compiler when using **Scala 3.7.4** with `-source:3.7-migration -rewrite` options, before upgrading to **Scala 3.8**.

Looking ahead to Scala's future, compiling the standard library with Scala 3 itself paves the way for Scala 3 to eventually have its own standard library, free from the constraints of compatibility with Scala 2. However, this process will not actually begin until Scala 3.10.

## REPL becomes a separate artifact

> **Breaking Change:** Starting with Scala 3.8, the REPL is distributed as a separate artifact. Projects and tools that depend on the REPL must add an explicit dependency on [scala3-repl](https://index.scala-lang.org/scala/scala3/artifacts/scala3-repl/3.8.1).

This makes it easier to embed the REPL in tools, reduces the size of the core compiler distribution, and allows for easier integration with external dependencies.

The previous REPL printer was not dealing well with long expressions or literals, making the output difficult to read.
![Scala 3.7 REPL example]({{ site.baseurl }}/resources/img/scala-3.8-launch_repl_3.7.png)

Starting with **Scala 3.8** REPL rendering is now powered by [com-lihaoyi/fansi](https://index.scala-lang.org/com-lihaoyi/fansi) and [com-lihaoyi/pprint](https://index.scala-lang.org/com-lihaoyi/pprint). This change allows us to provide better user experience, and present results in cleaner, formatted output.

![Scala 3.8 REPL example]({{ site.baseurl }}/resources/img/scala-3.8-launch_repl_3.8.png)

## Stabilised language features

### [SIP-62: For comprehension improvements](https://docs.scala-lang.org/sips/62.html)

The **Better Fors** desugaring previewed in **Scala 3.7** is now **stabilised** and **enabled by default**.
The improved desugaring removes some of the surprising behaviours of traditional for‑comprehensions and produces more efficient code. Two key improvements are:

* **Aliases before generators** - You can introduce alias definitions at the start of a for‑comprehension:

```scala
for
  sizes = List(1, 2, 3)
  size <- sizes
yield size * 2
```

* **Avoiding unnecessary `map` calls** - When the last generator yields a value of the same type as its input, the for‑comprehension now emits direct code without an intermediate `map` call. This simplifies the generated bytecode and avoids constructing unnecessary tuples.

### [SIP-57: Replace non-sensical `@unchecked` annotations](https://docs.scala-lang.org/sips/57.html)

`runtimeChecked` is now a **standard feature**. It enables you to opt-out of certain static checks and defer them to runtime without resorting to the older, syntactically awkward `: @unchecked` type ascription.

Consider the following example that tries to load an optional config value and match it against known values.

```scala
def portFromConfig(name: String): Option[Int] = ???

val Some(httpPort) = portFromConfig("http") // warning: right hand side expression is Option, not Some

portFromConfig("https") match 
    case Some(port) => println(s"HTTPS port: $port")  
    // warning: match may not be exhaustive.
```

The compiler detects and warns that in some cases your program throw an exception at runtime. The previous `: @unchecked` annotation could have been used to suppress these warnings, but its syntax made it difficult to apply.
The new `runtimeChecked` clearly marks that given operation might fail, similar to `.head` or `.get`. What's more, it's perfect for use in chained calls!

```scala
def portFromConfig(name: String): Option[Int] = ???

val Some(httpPort) = portFromConfig("http").runtimeChecked 

val otherPort = portFromConfig("https")
    .map(_ + 1)
    .runtimeChecked
    .match 
        case Some(port) => port
```

`runtimeChecked` only suppresses checks that can be performed at runtime. If you write an obviously wrong pattern (for instance, matching an `Int` against a `String`) the compiler still emits an error.

## New preview features

Preview features are only enabled if the `-preview` flag is used. Features that have reached the preview stage are always eventually stabilized, but may change incompatibly before that time.

### [SIP-71: Allow fully implicit conversions in Scala 3 with `into`](https://docs.scala-lang.org/sips/71.html)

Scala 3 normally requires `import scala.language.implicitConversions` anywhere you *use* `scala.Conversion` instances implicitly.
The new `into` keyword provides two opt-in ways to allow implicit conversions **without** that import:

* **`into[T]` as a type constructor**: marks specific parameter types as "conversion allowed", giving fine-grained control (only where you wrap with `into[...]`)
* **`into` as a soft modifier**: declares a trait, class, or opaque type alias as an `into` target (e.g., `into trait Modifier`), so conversions to that type are allowed everywhere without rewriting lots of signatures

```scala
//> using options -preview

import scala.Conversion
import scala.Conversion.into

// Library code: allow conversions into IterableOnce[A] for this parameter only
def concat[A](xs: List[A], ys: into[IterableOnce[A]]): List[A] =
    xs ++ ys // inside the body, `ys` is treated as IterableOnce[A]

// User code: no `import scala.language.implicitConversions`
given Conversion[Array[Int], IterableOnce[Int]] = _.iterator

val xs = List(1, 2)
val ys = Array(3, 4)

val out = concat(xs, ys)   // `ys` is implicitly converted because expected type is `into[IterableOnce[Int]]`
```

`into` is currently a **preview feature** and is planned to be stabilised in the next minor version.
It requires compilation with `-preview` compiler flag and can be activated using `import scala.language.experimental.into`.
If you previously used experimental annotation-based preview implementation be aware of source incompatibilites when upgrading to Scala 3.8.

More information about `into` modifiers can be found in [the dedicated reference](https://docs.scala-lang.org/scala3/reference/preview/into.html).

## Experimental features changes

### Future-proof Standard Library

With the standard library now compiled using Scala 3, it has been enhanced to better support two highly experimental language features. These features remain far from stabilization and should not be relied upon in production code.

**Explicit nulls** - When you enable explicit nulls in your project (`-Yexplicit-nulls`), all reference types become non-nullable unless annotated with `| Null`. Library maintainers have annotated many standard library APIs with explicit null-return types, so the type checker will now warn if you forget to handle a possible `Null`.

**Capture checking** - The library code has been adjusted to interact properly with the experimental capture-checking system. When you enable capture checking (`-language:experimental.captureChecking`) the type checker tracks references to capabilities and ensures you do not capture local resources in closures.

> **Note:** Both null-safety and capture-checking annotations remain experimental, opt-in features. Your existing code will behave exactly as before unless you enable the appropriate language flag.

### Pure functions and capture checking

The `scala.caps.Pure` capability is used by the capture checker to model pure functions.
Experimental separation checking is new in Scala 3.8 and ensures that closures do not capture resources, providing stronger guarantees about side-effect isolation.
To experiment with capture checking, import `scala.language.experimental.captureChecking` and annotate your functions with the appropriate capabilities. Adding these annotations does not require enabling experimental features and it will not affect users who are not using capture checking.

> **Note:** Only core traits related to capture checking and defined in the Scala Standard Library have been stabilized, as these have been proven to be stable. The capture checking itself is still an experimental feature.

## New experimental features

> The following features are provisional and subject to change or outright removal. Do not rely on them in production code yet.

Several experimental SIPs land in Scala 3.8. You can try them by importing the corresponding experimental language imports or using matching experimental flags to the compiler.

### [SIP-67: Strict equality pattern matching](https://github.com/scala/improvement-proposals/pull/97)

Scala’s `strictEquality` is great at preventing nonsensical `==` comparisons, but it historically made some very common ADT pattern matches painful - especially for enums or case objects, because constant patterns are compiled using `==`, which in turn requires a `CanEqual` proof.

SIP-67 introduces an experimental opt-in that makes "ADT-style" pattern matching work smoothly under `strictEquality`, without forcing you to provide `CanEqual` evidence just to match on enum cases / case objects. In particular, it targets the frustrating situation where `==` should remain rejected (e.g., because parts of the ADT shouldn’t be comparable), yet `match` should still be usable.

```scala
import scala.language.strictEquality
import scala.language.experimental.strictEqualityPatternMatching

enum Foo:
  case Bar
  case Baz(f: Int => Int)

// Still rejected: comparing Foo values with `==` can be nonsensical
def eqIsStillIllegal(x: Foo, y: Foo) =
  x == y // error (as intended)

// But pattern matching is now practical under strictEquality:
def eval(x: Foo): Int =
  x match
    case Foo.Bar      => 0
    case Foo.Baz(fun) => fun(0)
```

This keeps the core promise of `strictEquality` ("don’t let me compare things that shouldn’t be comparable") while removing a major adoption blocker for real-world enums and ADTs.

### [SIP-70: Flexible Varargs](https://github.com/scala/improvement-proposals/pull/105)

SIP-70 removes a long-standing limitation of Scala varargs calls: you can now use `*` (spread) more than once in a single argument list, and the spreads can appear in the middle, not just at the end of arguments list. This makes it much easier to build varargs calls from multiple collections without manual concatenation.

```scala
import scala.language.experimental.multiSpreads

def sum(xs: Int*): Int = xs.sum

val a: Seq[Int] = Seq(1, 2)
val b: Array[Int] = Array(3, 4)

val total = sum(0, a*, b*, 5)   // 15
```

### [SIP-75: Allow single-line lambdas after `:`](https://github.com/scala/improvement-proposals/pull/118)

The indentation based and fewer-braces syntax introduced in Scala 3 allows you to apply a method or operator by separating it from a block with a `:`. SIP-75 extends the supported syntax by allowing the body of the function to be defined in the same line after `:`.
In this form, the lambda extends to the end of the line, making it easy to move between the indented and single-line styles without having to switch back to parentheses.
The change is primarily about consistency and refactoring ergonomics:

* You can read `:` uniformly as “application” when it is followed by either an indented block or a lambda.
* It becomes natural to split/merge lines as code grows or shrinks, without changing the delimiter style (parentheses vs `:`)
* The requirement of new line in the lambda body was confusing to users

```scala
import scala.language.experimental.relaxedLambdaSyntax

def newSyntax(xs: Option[Int]) =
  xs.map: v => v + 1
    .filter: v => v > 3 && v < 8

def oldSyntax(xs: Option[Int]) =
  xs.map: v =>
    v + 1
  .filter: v =>
    v > 3 && v < 8
```

### Match expressions with sub-cases [#23786](https://github.com/scala/scala3/pull/23786)

This change adds an experimental extension to pattern matching: a `case` in a `match` can be followed by a **nested "sub-match"** introduced by the `if` keyword.
This feature enables you to:

* first match an "outer shape" (e.g., `Some(x)`), and then
* immediately refine the result by matching on a field derived from the outer bindings (e.g., `x.version`).

Crucially, if the nested pattern does not match, we still proceed to the next enclosing `case`. This is fundamentally different than putting the sub-case within another level of nesting—in a traditional nested `match`, a failed inner case would not cause the outer match to try subsequent cases.

```scala
import scala.language.experimental.subCases

enum Version:
  case Legacy
  case Stable(major: Int, minor: Int)

case class Document(title: String, version: Version)

def versionLabel(d: Option[Document]): String =
  d match
    case Some(doc @ Document(_, version)) if version match
      case Version.Stable(m, n) if m > 2 => s"$m.$n"
      case Version.Legacy                => "legacy"
      case _                             => "unsupported"
    case _                               => "default"
```

* The sub-cases are tested only if the outer case matches (here: `Some(Document(_, version))`).
* The sub-match scrutinee (`version`) can refer to variables bound by the outer pattern (`doc`).
* Sub-matches do not have to be exhaustive. If none of the sub-cases match, the whole `case ... if <submatch>` is treated as not matched, and the outer match continues with the next case.
* Sub-matches can be nested (sub-sub-matches), and you can interleave additional boolean guards between them when needed.

This experimental feature has not yet been considered by the SIP committee, but we'd like to hear your feedback about this proposal.

## Other notable changes

* **Annotations can now annotate themselves** [#24447](https://github.com/scala/scala3/pull/24447) - Scala now allows an annotation class to be annotated with itself. This is useful for "meta-annotations" where you want the annotation's own definition to carry the same marker it applies elsewhere.

```scala
import scala.annotation.StaticAnnotation

final class audited extends StaticAnnotation

@audited                 // now allowed: the annotation annotates itself
final class audited extends StaticAnnotation
```

* **LTS/Next series indicators** [#24709](https://github.com/scala/scala3/pull/24709) - Starting with Scala 3.3, all artifacts are published with a special attribute in the pom.xml. This attribute indicates whether a given version is part of the LTS or Next series. Tooling can use this information to adjust its behaviour. Starting with Scala 3.8 and the upcoming 3.3.8 LTS, the attribute name has changed from `scala.versionLine` to `info.scala.versionLine`. The change was required due to a negative interaction with build tools that assume attributes starting with `scala` are reserved.
* **Nightly builds in a new repository** - Scala 3 nightly builds for both Scala Next and Scala 3.3 LTS series are now published to a new repository: [https://repo.scala-lang.org/](https://repo.scala-lang.org/). You can read more about this change in a [dedicated blogpost](https://www.scala-lang.org/news/new-scala-nightlies-repo.html).
* **JDK 26 support** - Scala can now emit and consume JDK 26 bytecode. As mentioned [earlier](#jdk17is-now-required), the internal implementation of lazy vals has been adjusted to replace the deprecated `sun.misc.Unsafe` with `VarHandles`. Starting with JDK 24, `sun.misc.Unsafe` emits runtime warnings. In JDK 26, it will throw an exception. This change makes newly published code compatible with JDK 26. However, these problems might still be triggered by previously published libraries or their transitive dependencies. We are working on tools to modify existing lazy-vals-related code to make them future-proof and ease migration to upcoming JDK versions. For more details, see the technical discussion in [Jakub Kozłowski's latest podcast with Łukasz Biały](https://www.youtube.com/watch?v=K_omndY1ifI), VirtusLab's Scala Advocate who prototyped this idea.

## Tooling support

Scala 3.8 changes how parts of the standard library and the REPL are published, which can affect build tools and IDE integrations. For the smoothest upgrade, use the recommended versions (especially if you rely on the REPL).

### Build tools

* **sbt**
  * Minimum [sbt 1.11.5](https://github.com/sbt/sbt/releases/tag/v1.11.5) (no REPL support)
  * Recommended [sbt 1.12.0](https://github.com/sbt/sbt/releases/tag/v1.12.0)
* **Mill**
  * Minimum [mill 1.0.5](https://github.com/com-lihaoyi/mill/releases/tag/1.0.5) (or [mill 0.12.16](https://github.com/com-lihaoyi/mill/releases/tag/0.12.16) on the 0.12 line) (no REPL support)
  * Recommended [mill 1.1.0](https://github.com/com-lihaoyi/mill/releases/tag/1.1.0-RC4)(*forthcoming available 1.1.0-RC4)
* **Scala CLI**
  * Minimum [scala-cli 1.9.0](https://github.com/VirtusLab/scala-cli/releases/tag/v1.9.0) (no REPL support)
  * Recommended [scala-cli 1.11.0](https://github.com/VirtusLab/scala-cli/releases/tag/v1.11.0)

### IDEs and developer tools

* **IntelliJ IDEA**: Recommended [Scala Plugin 2025.3](https://blog.jetbrains.com/scala/2025/12/08/scala-plugin-2025-3-is-out/). The JetBrains team has also prepared a blog post showcasing [IntelliJ support for Scala 3.8](https://blog.jetbrains.com/scala/2026/01/15/scala-38-support-in-the-scala-plugin/).
* **Metals**: Recommended: [Metals 1.6.4](https://scalameta.org/metals/blog/2025/11/25/osmium)
* **scalafmt**: Minimum [scalafmt 3.10.1](https://github.com/scalameta/scalafmt/releases/tag/v3.10.1)
* **Scalameta**: Minimum: [scalameta 4.14.1](https://github.com/scalameta/scalameta/releases/tag/v4.14.1) (used by Metals, scalafmt, scalafix, and more)

## What's next?

The language is now in feature freeze mode in preparation for Scala 3.9 LTS. No new language features will be accepted for 3.9. Development and improvement of existing features is still allowed. This allows us to focus on fixing existing bugs in both tooling and compiler to ensure a smooth transition into the Scala 3.9 LTS era. The freeze will be lifted with the start of the Scala 3.10 development cycle.

Effectively, **Scala 3.9 LTS would contain the same feature set as Scala 3.8**. We may promote preview features to stable, but no new experimental or preview features will be introduced. As a result, any codebase using Scala 3.8 should not require any additional changes to use Scala 3.9 LTS.

**Scala 3.8.2-RC1** is already available and its stable version is expected to be released in the second half of February 2026.
