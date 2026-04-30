---
layout: blog-detail
post-type: blog
by: Anatolii Kmetiuk, Scala Center
title: "Hardening Scoverage Support in Scala 3"
description: "We've enabled systematic coverage testing in the Scala 3 compiler's CI pipeline, uncovering and fixing latent bugs that blocked enterprise adoption."
---

> This post covers work done under the [Sovereign Tech Fund investment](https://www.scala-lang.org/blog/2026/01/27/sta-invests-in-scala.html) umbrella: [Scoverage hardening](https://contributors.scala-lang.org/t/scoverage-hardening/7352). The work is coordinated by the [Scala Center](https://scala.epfl.ch/).

## Summary

Code coverage is a key part of maintaining high-quality Scala projects. We've recently made progress on making Scoverage more robust for Scala 3, expanding the way we test it and discovering and fixing new issues.

## Background

Measuring how much of your Scala code is exercised by tests sounds simple until you try to do it yourself. That's where code coverage tools come in. Code coverage is not optional for many organizations. As one of the QA metrics, coverage helps ensure reliability of the solution which is especially important in regulated sectors. Scoverage is the standard coverage tool for Scala, built directly into the Scala 3 compiler as a dedicated phase.

A crucial requirement for Scoverage's wide industry adoption is that Scoverage itself is reliable and well-tested. The tool is already tested via its own dedicated test suite - however, that is not enough. Most tricky bugs happen not in isolation but at intersections of language features. Therefore, Scoverage needs to be tested in interaction with all of the language features to be truly considered reliable. Furthermore, all future changes to the compiler should be tested in interaction with Scoverage to ensure the tool remains compatible with the compiler.

To guarantee such a level of reliability, we have recently started a systematic rework of the testing strategy for Scoverage. This article reports on the progress we've made in 2026 so far.

## Enabling coverage on the compiler test suite

The first step was mapping out the current failures of Scoverage in interaction with other language features. The strategy for that was to enable Scoverage on the existing compiler test suite. This means, in addition to the usual CI run of the tests that we do for each new PR, now we run the same tests again, but with Scoverage enabled.

Under this mode, for each test we verify three things:

- The compiler doesn't crash
- The coverage output file is produced
- The coverage output file is valid and deserializable

As a result, we have discovered *97 failing tests* when coverage instrumentation was switched on. Those tests are being addressed in the order of impact. They were disabled for the time being to allow the validation logic to be merged early, thus future-proofing Scoverage.

As for the rest of the tests, they are now running with coverage instrumentation for each PR, and passing them is a requirement for a PR to be merged to the compiler codebase. Furthermore, every newly added test to the compiler test suite is tested against Scoverage by default, thus preventing future PRs from unintentionally introducing Scoverage breakages.

Details of this work are in [PR #25009](https://github.com/scala/scala3/pull/25009).

## Addressing breakages: erased values and the purity constraint

We have also taken the first steps to address discovered issues. A pattern that emerged is that failing tests were clustered around a few common root causes.

One of the root causes behind a significant cluster of failures was the interaction between coverage instrumentation and Scala 3's capability system. Capabilities in Scala 3 are represented as erased values - values that exist at compile time but are eliminated at runtime. Because they are erased, they must be pure: they cannot have side effects, and the compiler enforces this constraint, failing compilation if that is not the case.

Coverage instrumentation works by injecting calls into the compiled code to record which expressions were executed. These calls introduce side effects. The erasure phase would then reject the result with an error.

The fix is conceptually simple: the coverage instrumentation phase now checks whether a value is erased and, if so, skips it. *23 tests* that previously failed under coverage are now passing as a result of this fix, opening the door to using Scoverage together with capabilities.

Details in [PR #25298](https://github.com/scala/scala3/pull/25298).

## Expanding the testing surface

The Scala 3 compiler's test suite is extensive. The strategy has been to enable coverage testing incrementally: start with the core tests, exclude the currently failing ones so regressions are caught from day one, then gradually expand the testing surface and fix discovered issues.

The latest expansion of the testing surface was done after fixing the first cluster of issues. Coverage instrumentation is now also exercised on additional test suites such as `rewrites`, `warn`, `explicit-nulls/pos`, `explicit-nulls/warn`, and `init` test suites. As a part of this expansion, we have discovered *13 new breakages* that are being addressed in the same manner.

Details in [PR #25385](https://github.com/scala/scala3/pull/25385).

## Conclusion

To ensure the reliability of Scoverage in the industry, we are continuing to expand the testing surface of the tool and fix discovered issues. We will be sharing more updates as the work continues. If you are actively using Scoverage, your feedback is welcome! You can join the discussion on [contributors.scala-lang.org](https://contributors.scala-lang.org/t/scoverage-hardening/7352) or contribute Scoverage-related issues to the Scala 3 [issue tracker](https://github.com/scala/scala3/issues).

## Participation

The Scala Center has been entrusted with coordinating the commissioned Scala work for the Sovereign Tech Fund. The Scala Center is an independent, not-for-profit center sponsored by [corporate members and individual backers like you](/blog/2023/09/11/scala-center-fundraising.html) to promote and facilitate Scala. If you would like to participate and/or see more of these types of efforts, please reach out to your manager to see if your company can donate engineering time or membership to the Scala Center.

See [The Scala Center Fundraising Campaign](/blog/2023/09/11/scala-center-fundraising.html) for more details.
