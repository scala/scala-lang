---
category: release
permalink: /news/3.9/
title: "Scala 3.9 LTS released!"
by: Wojciech Mazur, VirtusLab
---

# Scala 3.9 LTS released!

We are happy to announce **Scala 3.9.0**, opening the new **Long Term Support** line for Scala 3.
It succeeds Scala 3.3 LTS as the recommended baseline for library authors and conservative production users, while keeping the Scala Next line available for teams that want the latest language work as soon as it is released.

## What does LTS mean?

Scala 3 follows the [Scala LTS and Scala Next model]({{ site.baseurl }}/blog/2022/08/17/long-term-compatibility-plans.html).
**Scala Next** receives regular minor releases with new language features, tooling work, and ecosystem changes.
**Scala LTS** receives patch releases focused on bug fixes, diagnostics, tooling improvements, and carefully selected quality-of-life changes that are also subject to the compatibility guarantees of the LTS line.

Libraries published with Scala 3.9 LTS can be consumed by later 3.9 patch releases and by Scala Next. The 3.9 line is expected to receive patches and backports for an extended period.

> **Library maintainers:** artifacts built with Scala 3.9 cannot be consumed by Scala 3.3 projects, so treat the move from Scala 3.3 LTS to Scala 3.9 LTS as a minor-version publishing decision for your own libraries.

## Looking back at Scala 3.3 LTS

Scala 3.3.0 was released in May 2023 and became the first Scala 3 LTS.
It carried the ecosystem through more than three years of Scala 3 development while Scala Next delivered new syntax, new standard-library work, new tooling integration, and deeper compatibility testing.

The 3.3 LTS line was not a frozen branch. As I write this, **1,420 of 2,380** pull requests merged into the main Scala 3 compiler branch since 3.4.0 were also backported to Scala 3.3 LTS. That's almost **43% of all changes**!
That work kept 3.3 useful as a publishing target while still protecting the compatibility expectations that made it attractive in the first place.
The result of this decision is visible in the ecosystem - roughly **56% of Scala 3 libraries** are currently published using Scala 3.3 LTS.

What's more, the next patch release - **Scala 3.3.9** - is planned within the next month, and Scala 3.3 LTS will remain actively maintained for **one year after Scala 3.9.0**. However, the number of future backports is expected to be lower than before, as Scala 3.3 LTS and Scala Next codebases have naturally diverged after several years of development.
Special thanks go to Paweł Marks, Wojciech Mazur, and Tomasz Godzik from VirtusLab for the sustained backporting and maintenance work over the years!

## What's new in Scala 3.9?

Scala 3.9.0 is both a new LTS baseline and a regular Scala release.
It consolidates the changes since Scala 3.8, stabilises one language feature, and includes a broad set of compiler, standard-library, documentation, and tooling fixes.

### [SIP-71: Allow fully implicit conversions in Scala 3 with `into`](https://docs.scala-lang.org/sips/71.html) - now stable

The `into` mechanism lets API authors mark selected parameters or types as accepting implicit conversions, without asking all users to enable implicit conversions globally.

This is useful for APIs where conversion is part of the intended design, but where unrestricted implicit conversions would be too broad.
Scala 3.8 introduced `into` as a preview feature; Scala 3.9 makes it part of the stable language.

```scala
//> using scala 3.9

// Prefer `into` as a soft modifier when you control the conversion target.
into trait IntoIterableOnce[A] extends IterableOnce[A]

def appendAll[A](xs: List[A], ys: IntoIterableOnce[A]): List[A] =
  xs ++ ys

// Use `into[T]` when you can't change the target type definition.
def prependAll[A](xs: Conversion.into[IterableOnce[A]], ys: List[A]): List[A] =
  xs.iterator.toList ++ ys

given [A]: Conversion[Array[A], IntoIterableOnce[A]] = arr =>
  new IntoIterableOnce[A]:
    def iterator: Iterator[A] = arr.iterator

given [A]: Conversion[Array[A], IterableOnce[A]] = _.iterator

val appended = appendAll(List(1, 2), Array(3, 4))
val prepended = prependAll(Array(1, 2), List(3, 4))
```

### Documentation snippets can declare the errors they expect

Scaladoc can compile the code snippets it finds in documentation, which stops examples from quietly rotting as a project changes.
Scala 3.9 allows a snippet [to also declare the errors and warnings it is meant to produce](https://github.com/scala/scala3/pull/25713), on the exact lines where they belong.

Documentation for a library with compile-time constraints often needs to show code that must not compile: a macro reporting a custom error, an API enforcing capability or capture requirements, or a type-level constraint being violated.
Until now such a snippet could only claim that it failed somewhere. There was no way to say which line should fail, or whether to expect an error or a warning.

To switch the checks on, add the new `test` modifier to Scaladoc's `-snippet-compiler` setting for the path you want covered:

```scala
Compile / doc / scalacOptions += "-snippet-compiler:docs/my-page.md=compile+test"
```

The path is matched as a prefix, so it can just as well name a directory and cover a whole section of a site at once.
Expected diagnostics are then marked in the snippet itself, by putting an `// error` comment on the line that should fail:

````markdown
```scala
def sum(xs: List[Int]): Int = xs.sum

sum(List("1", "2")) // error: List[String] is not a List[Int]
```
````

The rules are:

- A marker is matched on severity and line number only.
  The text following it is not checked, so it can carry an explanation for readers.
- `// warn` checks warnings the same way.
- Every diagnostic must be accounted for: an unmarked error or warning fails the run, and a snippet with no markers must compile cleanly.

Snippets in Scaladoc comments are configured through the same path-based setting and honour the markers as well, but the intended use is documentation pages.
Snippets in comments written with the legacy wiki syntax are not checked at all, as before.

### Scala CLI updates

Scala 3.9 updates Scala CLI, which brings new features:

- The REPL can start **JShell**, so a project's classpath can be explored from Java as well as from Scala. Try it with `scala repl --jshell`.
- Tests can be written against **JUnit 5 (Jupiter)**, not only the JUnit 4 interface shipped previously.
- `export` can target **sbt 2.x**, allowing rapid conversion of a project to sbt.
- **WebAssembly** is supported experimentally, matching the new Scala.js backend.
- **Ammonite** support has been dropped.

The most consequential change for anyone moving to a recent JDK is experimental built-in support for **[Sloth](https://github.com/VirtusLab/sloth)**.
Code compiled with Scala 3.0 to 3.7 emits `lazy val` bytecode that goes through the legacy `scala.runtime.LazyVals` API.
That API is implemented with `sun.misc.Unsafe`, which was terminally deprecated in JDK 24. Under JDK 26 it only prints a warning at runtime; once it is removed in a future JDK, the affected code stops working altogether.
Compiling with Scala 3.8 or later is not enough to escape this, because any dependency published with the old lazy vals brings the problem back.

Sloth removes that risk by rewriting the bytecode of such dependencies to the `VarHandle`-based implementation introduced in Scala 3.8.
It can run ahead of time, as a post-processing step over the classpath, or just in time through a dedicated JVM agent.

Both modes are opt-in, and the easiest way to reach for them is a `using` directive:

```scala
//> using dep com.example::library-built-with-scala-3.3:1.0.0
//> using jvm 26
//> using sloth

@main def run(): Unit = println(Legacy.greeting)
```

Writing `//> using slothAgent` instead of `//> using sloth` rewrites each class as it is loaded rather than patching the classpath up front, which is the more practical choice when running tests.

The same options are available on the Scala runner, as `--sloth` and `--sloth-agent`.
In both cases the feature is experimental, so it has to be unlocked with `--power`:

```bash
scala --power run Main.scala --sloth
```

See the Scala CLI [v1.15.0](https://github.com/VirtusLab/scala-cli/releases/tag/v1.15.0) and [v1.16.0](https://github.com/VirtusLab/scala-cli/releases/tag/v1.16.0) release notes for the full list of changes.

The parser for Scala CLI `using` directives has moved into a compiler module `org.scala-lang::scala3-directives-parser:3.9.0`.
This gives tools a shared implementation for parsing build and dependency directives in Scala source files and allows custom use outside of Scala CLI.

### Scala.js 1.22

Scala 3.9 ships with [Scala.js 1.22.0](https://www.scala-js.org/news/2026/06/20/announcing-scalajs-1.22.0/).
The Scala.js backend is part of the compiler rather than a separate plugin, so this Scala.js minor is fixed for the whole 3.9 LTS line: a newer Scala.js minor needs a newer Scala minor.
Worth keeping in mind when upgrading: Scala.js 1.22 becomes the minimum version your downstream users need as well.

The main feature of Scala.js 1.22 is a stable WebAssembly backend.
It targets a JavaScript host rather than standalone WebAssembly, so the output runs on Node.js, Deno, Bun, or a browser - not on a Wasm-only runtime.
It requires ECMAScript 2022 or newer, an engine implementing Wasm 3.0, and the `ESModule` module kind.
Those requirements are now the default Scala.js baseline. Node.js 25, Chrome 137, Firefox 134, and Safari 26 all meet them.

Enable it in sbt by requesting ES modules, ECMAScript 2022, and `ESFeatures.withUseWebAssembly`:

```scala
// build.sbt
scalaJSLinkerConfig := {
  scalaJSLinkerConfig.value
    .withModuleKind(ModuleKind.ESModule)
    .withESFeatures(_.withESVersion(ESVersion.ES2022).withUseWebAssembly(true))
}
```

The equivalent for Scala CLI is two directives:

```scala
//> using wasm
//> using jsModuleKind es

@main def hello(): Unit = println("Hello from Wasm!")
```

Wasm support in the Scala runner is experimental, so it has to be invoked with `--power`:

```bash
scala --power run HelloWasm.scala
```

`js.async` and `js.await` need one more step on Wasm: enable `.withWasmFeatures(_.withUseJSPI(true))` and run on an engine that supports JavaScript Promise Integration.
JSPI is standardised, but it is not part of Wasm 3.0, which is why it stays behind that opt-in.

Other improvements in Scala.js 1.22:

- **Generated code is smaller:** the embedded Unicode database uses a tighter encoding, and the JavaScript backend now aggressively optimises arrays of numeric literals.
- **Unicode support** moved to Unicode 15.0, matching JDK 21. It now also accounts for contributory properties, so `isLowerCase` is true for characters carrying `Other_Lowercase`, not only for those in the `Ll` category.
- **sbt 2.x:** if you are migrating, you will need this Scala.js version as well, since `sbt-scalajs` is now published for sbt 2.x alongside sbt 1.x.

See the [Scala.js 1.22.0 announcement](https://www.scala-js.org/news/2026/06/20/announcing-scalajs-1.22.0/) for the full list, including bug fixes.

### Inaccessible companion implicits will no longer be found in Scala 3.10

When implicit search builds the implicit scope for a type, it looks into that type's companion object.
Until now it did so even when the companion could not be referenced from the call site.
That gave call sites unexpected access to private implicits: the instance could be summoned implicitly, even though writing it out explicitly would not compile.
Scala 3.9 reports every such resolution as a warning under the `-deprecation` flag, and Scala 3.10 [stops finding those instances altogether](https://github.com/scala/scala3/pull/25367).

```scala
object api:
  class Config
  private object Config:
    given Config = new Config

  def describe(using Config): String = "configured"

api.describe
// deprecation warning: usage of the implicit defined in object Config, which is not accessible
// here; in Scala 3.10 this implicit will no longer be found
```

The specification has always required an eligible implicit to be accessible at the point of the call, so this closes a hole rather than removing a feature.

It is worth acting on now. Scala 3.9 only warns, but on 3.10 the same code fails to compile, and you usually cannot fix it in the consuming project: the instance lives in a library, so that library needs a new release to make it accessible.
The Open Community Build found around **20 projects** that stop compiling on 3.10 for this reason.

> **What to do:** compile with `-deprecation` on Scala 3.9 to see these warnings in detail. If a library you maintain emits them, publish the fix before 3.10 arrives.

### Other notable changes

- **Java generic signatures are more accurate**, covering higher-kinded types, refined types, arrays of value classes, context functions, inherited inner classes, trait setters, and generic `using` parameters.
- The standard-library JAR again declares `Automatic-Module-Name` in its manifest, which JPMS consumers need.
- The **standard library is now optimized** with the Scala backend optimizer.
- **Scoverage instrumentation** is more reliable, including around separation checking, tail recursion and infinite-loop warnings, constructor applications, singleton types, closures, and parameterless methods.
- **Incremental compilation** can now invalidate type arguments used in macro calls, so Zinc rebuilds those call sites when the argument types change.
- **Diagnostics and linting are tighter**: reports about missing members are more actionable, unused-variable warnings have fewer false positives, and easily misread syntax now warns, such as a template left empty after a trailing colon.
- **Scaladoc is lighter:** it no longer ships jQuery or custom fonts reducing size of published artifacts.

The full list is in the [Scala 3.9.0 release notes](https://github.com/scala/scala3/releases/tag/3.9.0).

## Coming from Scala 3.3 LTS?

If you are moving directly from Scala 3.3 LTS to Scala 3.9 LTS, you are crossing five minor releases.
Most projects should still be able to migrate with little or no source work, but it is useful to know what changed along the way.
The sections below summarise the most important changes in each minor.

### [Scala 3.4]({{ site.baseurl }}/blog/2024/02/29/scala-3.4.0-and-3.3.3-released.html)

#### New stable features

- [SIP-53 Quote Pattern Type Variable Syntax](https://docs.scala-lang.org/sips/quote-pattern-type-variable-syntax.html) - type patterns in quotes became more expressive, so `case '[ (t, t, t) ]` matches a 3-element tuple whose elements all have the same type.
- [SIP-54 Multi-Source Extension Overloads](https://docs.scala-lang.org/sips/multi-source-extension-overloads.html) - extension methods with the same name can be imported from different sources.
- [SIP-56 Match Types Specification](https://docs.scala-lang.org/sips/match-types-spec.html) - match types are properly specified and behave predictably.

#### Breaking changes

- [SIP-56 Match Types Specification](https://docs.scala-lang.org/sips/match-types-spec.html) - some previously accepted match types are no longer legal and need to be rewritten.
- Legacy syntax started warning: `_` type wildcards, `private[this]`, `var x = _`, `with` as a type operator, `xs: _*` varargs, and a trailing `_` to force eta expansion. `-rewrite -source:3.4-migration` applies every rewrite, and `-source:3.3` silences the warnings instead.
- Refutable patterns in a `for` generator now need an explicit `case`, and `.withFilter` is no longer inserted without it.
- Type inference changed for `inline` methods, which can break call sites.

#### Other notable changes

- Inference for fold-like calls improved, so `xs.foldRight((Nil, Nil))(...)` no longer needs explicit types.
- Polymorphic lambdas can omit their parameter types when those are inferable from the context.
- The compiler no longer synthesizes given definitions that can cycle back to themselves.
- Polymorphic lambdas compile to JVM lambdas instead of anonymous classes.
- The JVM backend gained the parallelization ported from Scala 2.
- Errors for incompatible TASTy versions and broken class files became readable and actionable.
- Diagnostics, including unused warnings, are exported to SemanticDB.

### [Scala 3.5]({{ site.baseurl }}/blog/2024/08/22/scala-3.5.0-released.html)

#### Notable changes

- The `scala` command itself became the Scala runner, implemented by [Scala CLI](https://scala-cli.virtuslab.org/), so it now compiles, runs, tests, and packages single-module projects.
- Experimental best-effort compilation emits BETASTy for code that does not compile, which keeps IDE features working while you type.
- Pipelined builds are supported, enabled in sbt with `ThisBuild / usePipelining := true`.
- `var` members are allowed in type refinements, as in `type A = { var number: Int }`.
- Integer literals can be written in base 2, as in `0b1000_0010`.

### [Scala 3.6]({{ site.baseurl }}/news/3.6.2/)

#### New stable features

- [SIP-47 Clause Interleaving](https://docs.scala-lang.org/sips/clause-interleaving.html) - type and term parameter clauses can be interleaved, which helps path-dependent APIs.
- [SIP-56 Match Types Specification](https://docs.scala-lang.org/sips/match-types-spec.html) - match type extractors follow aliases and singleton types.
- [SIP-64 Improve Syntax for Context Bounds and Givens](https://docs.scala-lang.org/sips/sips/typeclasses-syntax.html) - the new context-bound and given syntax, including abstract context bounds on type members.

#### Breaking changes

- Context bounds desugar to `using` parameters instead of `implicit` ones. This can shift implicit resolution, and it affects macros or compiler plugins that inspect argument lists by flag.
- Java-defined annotations with more than one parameter require named arguments. `-source:3.6-migration -rewrite` inserts the names on a best-effort basis.
- Code whose meaning differs under the upcoming given prioritization began to warn, while still compiling under the old rules.

### [Scala 3.7]({{ site.baseurl }}/news/3.7.0/)

#### New stable features

- [SIP-52 Binary APIs](https://docs.scala-lang.org/sips/binary-api.html) - `@publicInBinary` keeps inline methods binary compatible without generating unstable accessors.
- [SIP-58 Named Tuples](https://docs.scala-lang.org/sips/named-tuples.html) - tuples with named elements, which also allow matching a subset of case-class fields by name and computing structural types without macros.

#### Breaking changes

- Given search now picks the most general matching instance instead of the most specific one. `-source:3.5` keeps the old rules and `-source:3.7-migration` warns where the two differ; see [Upcoming Changes to Givens in Scala 3.7]({{ site.baseurl }}/2024/08/19/given-priority-change-3.7.html).
- Passing an explicit argument to an `implicit` parameter warns unless the call site says `using`. `-rewrite -source:3.7-migration` inserts it.
- The standard library moved to 2.13.16, where `.tail` and `.init` on the empty string throw instead of returning it.

#### Other notable changes

- The expression compiler behind Metals and IntelliJ debugging moved into the compiler repository.
- `-Wunused` was rewritten to produce far fewer false positives, and `-Wconf` gained origin-based filtering.
- Scala 3 was unblocked on Android by boxing SAM return types the Android runtime rejects.
- Case classes may have dependent fields, as in `case class ConfigEntry(option: Setting, default: option.Value)`.
- The REPL can pull in dependencies at runtime with `:jar`.
- Experimental [SIP-61 Unroll Default Arguments for Binary Compatibility](https://docs.scala-lang.org/sips/unroll-default-arguments.html) - `@unroll` lets you add default parameters without breaking binary compatibility.
- Experimental [SIP-68 Referenceable Package Objects](https://github.com/scala/improvement-proposals/pull/100) - package objects became referenceable as values.

### [Scala 3.8]({{ site.baseurl }}/news/3.8/)

#### New stable features

- [SIP-57 Replace non-sensical `@unchecked` annotations](https://docs.scala-lang.org/sips/57.html) - `runtimeChecked` replaces awkward `: @unchecked` ascriptions.
- [SIP-62 For Comprehension Improvements](https://docs.scala-lang.org/sips/62.html) - Better Fors is now enabled by default, which allows aliases before generators and drops redundant `map` calls.

#### Breaking changes

- JDK 17 or newer is required to compile and run.
- The REPL moved into a separate [scala3-repl](https://index.scala-lang.org/scala/scala3/artifacts/scala3-repl) artifact, which embedding tools must depend on explicitly.
- The standard library is compiled with Scala 3, so its context bounds desugar to `given` and explicit arguments need `using`, as in `Array.empty(using ClassTag.Int)`. Running 3.7.4 with `-source:3.7-migration -rewrite` fixes most call sites before the bump.
- This is the boundary where Scala 2.13's `-Ytasty-reader` stops consuming Scala 3 artifacts.
- `scala-reflect` used by Scala 2.13 dependencies on the classpath may no longer work: initialising `scala.reflect.runtime.universe` against the Scala 3 standard library can fail at runtime. Apache Spark is the best-known case. Details are in the [migration guide](#runtime-reflection-with-scala-reflect).

#### Other notable changes

- The REPL pretty-prints results with [fansi](https://index.scala-lang.org/com-lihaoyi/fansi) and [pprint](https://index.scala-lang.org/com-lihaoyi/pprint), so long values no longer dump as a single unreadable line.
- The JVM backend gained the Scala 2 bytecode optimizer in 3.8.3. It is opt-in: `-opt` enables local optimizations, and `-opt-inline:...` controls inlining across call sites. See the [3.8.3 release notes]({{ site.baseurl }}/news/3.8.3/) and the [optimizer documentation](https://docs.scala-lang.org/overviews/compiler-options/optimizer.html).
- Lazy vals are implemented with `VarHandle` instead of `sun.misc.Unsafe`, which is how Scala 3.8 can run on JDK 24 and later.
- Nightly builds moved to [repo.scala-lang.org](https://repo.scala-lang.org/).
- Experimental [SIP-67 Strict Equality Pattern Matching](https://github.com/scala/improvement-proposals/pull/97).
- Experimental [SIP-70 Flexible Varargs](https://github.com/scala/improvement-proposals/pull/105).
- Experimental [SIP-75 Allow single-line lambdas after `:`](https://github.com/scala/improvement-proposals/pull/118).
- Experimental match sub-cases ([#23786](https://github.com/scala/scala3/pull/23786)).

## Migration guide

For a practical overview of the migration work behind this release, watch [Migration Without Tears: 2,000 Projects, One New LTS](https://www.youtube.com/watch?v=hhmNxNi0unE).

The [Open Community Build](https://github.com/VirtusLab/community-build3) results shown there are encouraging: **about 1,780 of nearly 2,000 projects** build on Scala 3.9 with no or minimal changes, mostly thanks to the compiler's built-in rewrites.

### Recommended upgrade order

A newer compiler should still compile against the libraries you already use. A newer library may require a newer compiler, so do not bump dependencies first.

Upgrade in this order, and let CI pass and commit after each step:

1. Upgrade the **build tool** if required.
2. Move to **JDK** 17 or later, while staying on the current Scala version where possible.
3. Upgrade **Scala.js** if the project uses it.
4. Upgrade **Scala**, including the compiler rewrites below. If you use separate Scala version stepping stones, commit each one.
5. Upgrade **libraries** after the Scala bump.

For many projects, the migration is just the JDK update and the Scala version bump.
For larger codebases, it is easier to treat the migration as a sequence of small, reviewable compiler-assisted changes than to diagnose every incompatibility after one big jump.

### Compiler built-in rewrites

1. Pick a Scala compiler to run the rewrites on:
   - Start with **Scala 3.7.4** if the codebase often passes explicit arguments to standard-library methods that now need `using`. 3.7.4 is the last release before the standard library was compiled with Scala 3, and it can insert those `using` clauses before the 3.8 library boundary.
   - Start with **Scala 3.9.0** if the codebase uses a lot of `with` types. 3.9 improved the rewrite of `with` to `&`; the same flags on 3.7.4 could emit code that does not compile.
2. With that compiler, apply the `-source:3.x-migration` rewrites in order for each minor you are crossing, always with `-rewrite`: `-source:3.4-migration`, `-source:3.5-migration`, `-source:3.6-migration`, `-source:3.7-migration`, `-source:3.8-migration`, then `-source:3.9-migration`.

   ```scala
   scalacOptions ++= Seq("-source:3.4-migration", "-rewrite")
   ```

   Later flags do not replay earlier patches, so `-source:3.6-migration` does not apply the 3.4 rewrites. Run each flag in order.

   | Flag | What `-rewrite` changes |
   | --- | --- |
   | `-source:3.4-migration` | &bull; `with` to `&` in types<br>&bull; `_` type wildcards to `?`<br>&bull; `xs: _*` to `xs*`<br>&bull; `var x = _` to `scala.compiletime.uninitialized`<br>&bull; drop `[this]` from `private[this]` / `protected[this]`<br>&bull; drop a trailing `_` used only for eta-expansion<br>&bull; backtick alphanumeric infix operators that are not declared `infix`<br>&bull; insert `using` on explicit arguments to context-bound parameters<br>&bull; insert `case` on refutable `for` generators |
   | `-source:3.5-migration` | &bull; no new rewrites |
   | `-source:3.6-migration` | &bull; named arguments on Java-defined annotations<br>&bull; `(x = e)` rewritten to `{x = e}` where it would now be a one-element named tuple instead of an assignment |
   | `-source:3.7-migration` | &bull; insert `using` at call sites of `implicit` parameters<br>&bull; drop empty `()` that existed only to pass implicits<br>&bull; rewrite infix named-argument lists such as `x op (a = 1, b = 2)` to dotted `x.op(...)` |
   | `-source:3.8-migration` | &bull; refutable pattern bindings such as `val hd :: tl = xs` gain `.runtimeChecked`<br>&bull; `: @unchecked` ascriptions are rewritten to `.runtimeChecked` |
   | `-source:3.9-migration` | &bull; backtick identifiers that contain `$` |

3. Some changes have no automatic rewrite. Fix those by hand as the compiler reports them.
4. Review each generated diff as ordinary source, then bump to Scala 3.9.0, drop the temporary migration flags, and run the full test suite.

If a change is hard to apply, for example when using illegal match types after [SIP-56](https://docs.scala-lang.org/sips/match-types-spec.html), you can compile that code with `-source:3.x` so Scala 3.9 treats the sources as if they were compiled with that earlier version:

```scala
scalacOptions += "-source:3.3"
```

Use this only for a subproject that is otherwise hard to migrate: newer language features stay unavailable until you remove the flag. The older language source rules are respected on a best-effort basis, it should be used as a temporary solution.

### Scala 2.13 consumers via TASTy Reader

Scala 3 projects can continue consuming Scala 2.13 artifacts.
The reverse direction has a boundary: Scala 2.13's `-Ytasty-reader` can consume Scala 3 artifacts up to Scala 3.7, but not Scala 3.8 or later.

If you publish Scala 3 libraries for users who still consume them from Scala 2.13, read [State of the TASTy reader and Scala 2.13 ↔ Scala 3 compatibility]({{ site.baseurl }}/blog/state-of-tasty-reader.html) before moving those artifacts to Scala 3.9.

### Runtime reflection with `scala-reflect`

Scala 3.8 and later can still depend on Scala 2.13 libraries, but there can be issues if a dependency uses `scala-reflect` for runtime reflection.
Runtime reflection in `scala-reflect` 2.13 depends on `ScalaSignature` attributes in class files. From Scala 3.8 the standard library is compiled with Scala 3 and no longer emits those attributes, so `scala.reflect.runtime.universe` can fail as soon as it initialises; see [scala/scala3#25896](https://github.com/scala/scala3/issues/25896) for details.

There is no planned compiler or standard-library fix, and it is not yet clear whether a workaround in `scala-reflect` itself is possible. An experimental reimplementation of part of `scala-reflect` has been tried, but that work is not something you can depend on.

What you can do today:

- **Stay on Scala 3.7.x** if you need those 2.13 artifacts as they are.
- **Avoid code paths** that initialise `scala.reflect.runtime.universe`.
- **Migrate the reflection** to the Java reflection API.

## What's next?

Scala 3.3.9 is expected within the next month and will continue the maintenance of the previous LTS line.
It will backport fixes introduced between Scala 3.8.4 and Scala 3.9.0 that are safe for the 3.3 compatibility guarantees.
Scala 3.3 LTS remains actively maintained for **one year** after Scala 3.9.0, giving library maintainers time to plan and communicate their move to the new baseline.
Scala 3.9 LTS itself is guaranteed to be maintained for **at least three years**, the same commitment as for Scala 3.3 LTS; see the [Scala LTS and Scala Next model]({{ site.baseurl }}/blog/2022/08/17/long-term-compatibility-plans.html).

As I write this, Scala 3.10.0-RC1 is already available and will be announced on channels such as [contributors.scala-lang.org](https://contributors.scala-lang.org/).
Scala 3.10 continues the Scala Next line and is expected to contain more breaking changes than 3.9, especially in the standard library.

A glimpse of what is coming:

- **The standard library** continues to move onto Scala 3 constructs, especially by using `inline` and replacing implicit classes with extension methods.
- **[Stronger constant folding during inlining](https://github.com/scala/scala3/pull/25731)** fixes several inlining bugs, but also exposes macros that build ill-typed trees - ZIO and a few other macro-heavy libraries needed new releases to stay compatible with it. It was left out of 3.9.0 so the new LTS stays usable with libraries published today, and can still land in a 3.9.x patch if users ask for it.
- **Features entering preview:** [SIP-61 Unroll](https://docs.scala-lang.org/sips/unroll-default-arguments.html), [SIP-75 relaxed lambda syntax](https://github.com/scala/improvement-proposals/pull/118), and [SIP-68 referenceable package objects](https://github.com/scala/improvement-proposals/pull/100).
- **Experimental** [inline and specialized traits](https://github.com/scala/scala3/pull/26156), bringing specialization to Scala 3.
- **[Pattern matching on Java records](https://github.com/scala/scala3/pull/26497)**.
- Support for select `using` directives within the REPL, including [dep](https://github.com/scala/scala3/pull/26507), [toolkit](https://github.com/scala/scala3/pull/26788) and [jar](https://github.com/scala/scala3/pull/26726), with more to come.

---

The full changelog for Scala 3.9.0 can be as always found in [release note on GitHub](https://github.com/scala/scala3/releases/tag/3.9.0).
