---
category: release
permalink: /news/3.8.3/
title: "Scala 3.8.3 is now available!"
by: Wojciech Mazur, VirtusLab
---
# Scala 3.8.3 is now available!

## Release highlights

### Local coverage exclusions with `// $COVERAGE-OFF$` blocks ([#24486](https://github.com/scala/scala3/pull/24486))

Coverage-instrumented builds can now disable coverage for a selected region of code, instead of excluding a whole file or class. This is useful for generated code, intentionally defensive branches, or support code that would otherwise distort coverage results.

```scala
//> using scala 3.8.3
//> using options --coverage-out coverage-data

class Parser:
  def parse(input: String): Int =
    input.toInt

  // $COVERAGE-OFF$
  def debugFallback(input: String): Int =
    if input == "zero" then 0
    else -1
  // $COVERAGE-ON$

@main def CoverageTest = {
  val parser = Parser()
  assert(parser.parse("42") == 42)
}
```

Only the code between the markers is skipped by coverage instrumentation. The rest of the file is still measured as usual.

### Safe mode for capability-safe code ([#25307](https://github.com/scala/scala3/pull/25307))

Scala 3.8.3 introduces **safe mode**, a new experimental language subset that can be enabled with `import language.experimental.safe` or `-language:experimental.safe`. As described in the [safe mode reference](https://www.scala-lang.org/api/3.8.3/docs/experimental/capture-checking/safe.html), this is not just “stricter capture checking”: it is a capability-safe subset intended for agent-generated or otherwise untrusted code.

The underlying model is also described in the research paper [Tracking Capabilities for Safer Agents](https://arxiv.org/abs/2603.00991), which proposes using Scala 3 with capture checking as a programming-language-based safety harness for AI agents.

When safe mode is enabled, the compiler rejects unchecked casts and unchecked pattern matches, forbids escape hatches such as `caps.unsafe`, `@unchecked`, and runtime reflection, turns on capture checking with mutation tracking, and restricts access to global APIs unless they are known-safe or explicitly reviewed.

That last point is what makes the feature practical. Safe code is meant to call a restricted set of APIs directly, while effectful or implementation-dependent behavior can still be exposed through wrappers marked `@assumeSafe`. The implementation in [#25307](https://github.com/scala/scala3/pull/25307) makes that boundary explicit: `@assumeSafe` declarations are themselves written outside safe mode, and safe code calls them from within the restricted subset.


```scala
// app.scala

//> using scala 3.8.3
//> using file CheckedMailer.scala
//> using options -experimental

import language.experimental.safe

@main def PotentiallyUnsafeApp = 
  val address = EmailAddress("team@scala-lang.org")
  CheckedMailer.send(address)  // ok
  println(address)             // error: rejected in safe mode
  address.asInstanceOf[String] // error: rejected in safe mode
```


```scala
// CheckedMailer.scala

import scala.caps.assumeSafe

@assumeSafe
object CheckedMailer:
    def send(to: EmailAddress) =
        scala.Console.out.println(s"Sending message to $to")

opaque type EmailAddress <: String = String
@assumeSafe object EmailAddress:
    def apply(value: String): EmailAddress = value
```

In the example above, the safe code in `app.scala` can call `CheckedMailer.send`, but the effectful operation is isolated behind an `@assumeSafe` boundary. By contrast, direct calls to `println`, unchecked `asInstanceOf` casts, or `scala.caps.unsafe` helpers are rejected in safe mode.

### Scala 2 JVM optimizer ported to Scala 3 ([#25165](https://github.com/scala/scala3/pull/25165))

Scala 3 now includes the port of the Scala 2 JVM backend optimizer. The optimizer is opt-in: compiler flag `-opt` enables local bytecode optimizations, while `-opt-inline:...` controls which classes and packages may be inlined across call sites. This brings Scala 3 to feature parity with the Scala 2 optimizer and opens the door to significant performance gains for JVM applications.

Rather than enabling blanket inlining everywhere, it is usually better to start from explicit filters. The `-opt-inline` setting accepts a comma-separated list of patterns; `**` matches all classes, `a.**` matches a package and its subpackages, `<sources>` matches classes compiled in the current run, and a leading `!` excludes matches. The last matching pattern wins.

```scala
//> using scala 3.8.3
//> using options -opt
//> using options "-opt-inline:<sources>,my.app.**,!java.**,!org.example.**"
//> using options "-Wopt:at-inline-failed-summary,no-inline-missing-bytecode"
```

In this configuration, the optimizer may inline code from the current compilation (`<sources>`) and from `my.app` subpackages defined in external dependencies, but not from the JDK or the `org.example` packages. This is often a good starting point for applications. For libraries, the conservative choice is usually to inline only from `<sources>` or from packages you fully control.

The optimizer port also brings additional settings:

- `-Wopt:...` enables optimizer warnings. Available choices are `all` or `at-inline-failed-summary`, `at-inline-failed`, `any-inline-failed`, `no-inline-mixed`, `no-inline-missing-bytecode`, and `no-inline-missing-attribute`
- `-Yopt-specific:...` enables individual optimization passes such as `copy-propagation`, `box-unbox`, `nullness-tracking`, `closure-invocations`, or `redundant-casts`
- `-Yopt-inline-heuristics:default|everything|at-inline-annotated` adjusts how aggressively the compiler chooses call sites for inlining
- `-Yopt-log-inline:<prefix>` logs inliner activity for matching methods
- `-Yopt-trace:<prefix>` traces optimizer progress for matching methods

The `-Wopt` options let you choose between a one-line summary for failed `@inline` calls, detailed per-callsite diagnostics, reporting for heuristic inlining failures, and warnings for cases where inlining could not even be decided because bytecode or Scala inline metadata was unavailable.

> The `-Y...` optimizer flags are primarily intended for debugging and internal use. As with other `-Y` settings, they are not stable user-facing interfaces, and their exact behavior may change between releases.

As with the Scala 2 optimizer, inlining external code comes with a compatibility trade-off: if you compile against one version of a dependency and later run against a different one, any inlined bytecode will not pick up the dependency's runtime bug fixes or behavior changes. In practice, that means aggressive cross-library inlining is best reserved for applications with tightly controlled runtime classpaths. Read more about binary compatibility of optimized code in the [Scala 2 optimizer documentation](https://docs.scala-lang.org/overviews/compiler-options/optimizer.html#binary-compatibility)

The long-term plan is to build on this work in Scala 3.9 by enabling optimizations for the Scala standard library and the compiler itself.

### `-print-lines` is deprecated for removal, but remains accepted as a no-op ([#25330](https://github.com/scala/scala3/pull/25330))

Scala 3.8.3 restores the `-print-lines` flag for compatibility, but only as a deprecated no-op. This avoids breaking existing builds in a patch release while giving users time to remove the setting from their build definitions.

The flag no longer has any effect and is scheduled for removal in Scala 3.9.0.

---

For the complete list of changes and contributor credits, see the [release notes on GitHub](https://github.com/scala/scala3/releases/tag/3.8.3).
