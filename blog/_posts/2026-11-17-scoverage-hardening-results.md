---
layout: blog-detail
post-type: blog
by: Anatolii Kmetiuk, Scala Center
title: "Scoverage Hardening in Scala 3: Results and Next Steps"
description: "A wrap-up of the commissioned Scoverage hardening work: broader compiler testing, fixed breakages, and lessons for the architecture."
---

> This post covers work done under the [Sovereign Tech Fund investment](/blog/2026/01/27/sta-invests-in-scala.html) umbrella: [Scoverage hardening](https://contributors.scala-lang.org/t/scoverage-hardening/7352). The work is coordinated by the [Scala Center](https://scala.epfl.ch/).

## Summary

We've been working throughout 2026 on making Scoverage more reliable in Scala 3. As the project comes to a close, this article reports on the results. We have successfully enabled coverage testing across the wider compiler test suite, fixed breakages encountered in process achieving a 99.5% pass rate, and for the 0.5% tests not working with coverage yet, identified a systematic root cause to be resolved as future work.

## What is coverage?

Suppose you have a function that calculates a shipping fee:

```scala
def shipping(total: Int): Int =
  if total >= 50 then 0
  else 5
```

And a test:

```scala
assertEquals(shipping(70), 0)
```

The test passes, but it only tests the free shipping case. The paid-shipping branch never runs. Code coverage makes such gaps visible by recording which statements and branches execute during a test run. In this example, adding `assertEquals(shipping(20), 5)` would test the missing branch.

In Scala 3, coverage instrumentation is built directly into the compiler. You can enable it with the `-coverage-out:DIR` compiler option, where `DIR` is the directory where you'd like coverage telemetry to be recorded. The compiler writes a map of instrumented statements, and the instrumented program records which of them execute at runtime.

The [Scoverage plugin and reporting libraries](https://github.com/scoverage/scalac-scoverage-plugin) provide the reporting and visualization of this data. In Scala 3, the instrumentation itself comes from the compiler, so a separate compiler plugin is not needed. See [Code Coverage for Scala 3](https://nightly.scala-lang.org/docs/internals/coverage.html) for documentation. You can visualize the reports as HTML using [sbt-scoverage](https://github.com/scoverage/sbt-scoverage).

## Interactions with the language

The compiler implements coverage as a phase that rewrites the program after type checking. This phase records statement execution by injecting probes before each. Probes are effectful function calls performing the recordings. Every later compiler phase then receives these modified trees.

For example, `f()` would get instrumented to something like:

```scala
probe('f')
f()
```

This setup sounds simple but can get tricky fast. For example, consider `f(g())`. You may naively want to instrument it as:

```scala
probe('f')
f({probe('g'); g()})
```

However, if `g()` throws an exception, `f` is never called. Recording the call to `f` before evaluating `g()` would therefore give an incorrect result. Coverage needs to preserve evaluation order, so in reality it needs to "lift" the argument `g()` to a val:

```scala
probe('g')
val liftedG = g()
probe('f')
f(liftedG)
```

This is just one example of a corner case of coverage interacting with a language feature, in this case, evaluation order. As Scala has many more features, this opens up space for a lot more interactions. And if we'd like scoverage to be reliable in industrial codebases, we need to ensure it works in all such scenarios. Hence the need for comprehensive testing and hardening for such corner cases.

## Before and after: testing coverage against the compiler test suite

Before the hardening work, Scoverage was tested by a dedicated suite of coverage tests. This tested Scoverage in isolation and worked to test basic operation. However, it failed to test it in interaction with other features.

Turns out we already have tests suitable for such interaction testing - the same suite of tests we use to test the Scala language itself! The idea is, what compiles without coverage, should also compile with coverage, and the runtime behavior should be the same, modulo coverage recording.

So for the past year, we worked to enable coverage testing on this extended suite of tests. We've enabled Scoverage to test against test groups such as core compilation and runtime tests, warnings, pattern matching, explicit nulls, safe initialization, and macro tests.

We introduced this testing incrementally. First, we enabled coverage on a test group and recorded failing tests in a dedicated exclusion list. Then we investigated the failures, fixed their root causes, and re-enabled passing tests. This allowed the passing tests to protect against regressions while work on the remaining failures continued.

The coverage-enabled compiler tests now run on every pull request. Nightly and release-tag builds also compile selected projects from the compiler repository with coverage enabled, extending validation beyond individual test programs.

## Results and further work

As of the start October 2026, 7,793 out of 7,828 test cases passed with coverage enabled, a 99.55% pass rate. During the work, we have fixed 95 breakages. Beyond the hardening, the project enabled ongoing regression protection in the compiler's CI. New changes to the compiler are now tested in interaction with coverage, helping catch incompatibilities as they are introduced.

At the same time, the work has shown room for improvement in the architecture. Coverage sits early in the compiler phase pipeline. Its transformations therefore interact with many later phases, especially those implementing the capture calculus.

Further work would be to review and redesign the architecture to reduce these interactions. One possible direction is moving instrumentation later in the phase pipeline, after more of the language's high-level constructs have been processed. For the ongoing exploration and discussion in this direction, see [PR #26895](https://github.com/scala/scala3/pull/26895).

For a more detailed introduction to coverage and the hardening work, see my Scala Days 2026 talk, [Scoverage: Test Coverage for the Scala Codebases](https://www.youtube.com/watch?v=GS1WHdvKMS0), which covers how to use Scoverage, how it works inside the compiler, and examples of the issues we encountered.

## Participation

The Scala Center has been entrusted with coordinating the commissioned Scala work for the Sovereign Tech Fund. The Scala Center is an independent, not-for-profit center sponsored by [corporate members and individual backers like you](/blog/2023/09/11/scala-center-fundraising.html) to promote and facilitate Scala. If you would like to participate and/or see more of these types of efforts, please reach out to your manager to see if your company can donate engineering time or membership to the Scala Center.

See [The Scala Center Fundraising Campaign](/blog/2023/09/11/scala-center-fundraising.html) for more details.
