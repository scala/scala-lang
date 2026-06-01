---  
layout: blog-detail  
post-type: blog  
By: Darja Jovanovic, Solal Pirelli, Scala Center  
title: Scala Codebase Security Audit Complete  
description: The first part of the security audit funded by the Sovereign Tech Fund is done, no critical issues were found.  
---

> This post covers work done under the [Sovereign Tech Fund investment](https://www.scala-lang.org/blog/2026/01/27/sta-invests-in-scala.html) umbrella: [Maintenance of the Standard Library/Core Library Modules and APIs](https://contributors.scala-lang.org/t/standard-library-now-open-for-improvements-and-suggestions/7337). The work is coordinated by the [Scala Center](https://scala.epfl.ch/).

The Scala Center is proud to share the first results of the security audit of Scala carried out in collaboration with [Open Source Technology Improvement Fund](https://ostif.org/) and the security researchers at [Quarkslab](https://github.com/scala/scala-lang/blob/ddfc6996a8a1c66cc891261f57684a41ec5268b6/blog/_posts/2026-06-01-first-part-security-audit.md). The audit was divided into two major parts: an assessment of the Scala 3 compiler and Scala standard library codebases, and a separate review of Scala's supply-chain security.

This [first publication](https://ostif.org/wp-content/uploads/2026/05/26-01-2527-REP-scala-security-audit-V1.0.pdf) focuses on the compiler and standard library audit. Since many reported security issues in Scala ecosystems involve the standard library, the audit aimed to strengthen the security and robustness of Scala's core components through a combination of manual code review and automated tooling, including fuzzing and Java deserialization gadget finders.

## Results

Read the full report [here](https://ostif.org/wp-content/uploads/2026/05/26-01-2527-REP-scala-security-audit-V1.0.pdf).

No critical or major security issues were identified during the audit. However, the review uncovered 5 medium severity issues, 1 low severity issue, and 2 informational findings, all of which have since been addressed by the Scala maintainers. All of these issues are fixed as of the date of this blog post, both for the 3.3 LTS branch and for the main 3.8 branch. 

Importantly, these issues do not affect typical users compiling Scala code locally or through continuous integration pipelines. Most findings were only relevant in scenarios where the Scala compiler is exposed as a service and processes untrusted input, where they could potentially lead to denial-of-service-type behavior.

## Fixes

All reported issues were fixed before the publication of this blog post, both in the Scala 3.3 LTS branch and in the main Scala 3.8 development branch.

One example was a medium severity issue in [the compiler's handling of TASTy files](https://github.com/scala/scala3/pull/25676). The compiler did not validate that certain offsets were nonnegative, which could lead to an infinite loop when processing a maliciously crafted TASTy file containing unexpected negative offsets. The fix introduced additional validation not only for this specific case, but more generally for parsing variable-length TASTy integers, helping prevent similar classes of issues in the future.

## Summary 

| Severity | Description | Perimeter | Fixes |
| :---- | :---- | :---- | :---- |
| Medium | `scala.sys.Process.ProcessBuilderImpl.AbstractFunction0` may be used as a deserialization gadget | Scala standard library (Scala 3.8-RC1) | [https://github.com/scala/scala3/pull/25679](https://github.com/scala/scala3/pull/25679) |
| Medium | Stored XSS vulnerability in Scaladoc | Scala Scaladoc (Scala 3.8-RC1) | [https://github.com/scala/scala3/pull/25681](https://github.com/scala/scala3/pull/25681) |
| Medium | Unexpected return value in `scala.collection.SeqOps.indexOfSlice` on empty sequences | Scala standard library (Scala 3.8-RC1) | Invalid, Scala behaves the same as other languages here. |
| Medium | Uncaught `ParseException` in `scala.sys.process.Parser.tokenize` on unmatched quotes | Scala standard library (Scala 3.8-RC1) | [https://github.com/scala/scala3/pull/25675](https://github.com/scala/scala3/pull/25675) |
| Medium | Infinite loop during section loading in `dotty.tools.dotc.core.tasty.TastyUnpickler` | Scala 3 compiler (Scala 3.8-RC1) | [https://github.com/scala/scala3/pull/25676](https://github.com/scala/scala3/pull/25676) |
| Low | Potential command injection in GitHub Action CI/CD scripts | Scala GitHub Action workflows (Scala 3.8-RC1) | [https://github.com/scala/scala3/pull/25677](https://github.com/scala/scala3/pull/25677) |
| Low | Scala Java-produced bytecode could lead to conflicts because the compiler does not check for conflicts between generated and user-defined methods | Scala 3 compiler (Scala 3.8-RC1) | Acceptable, no evidence it leads to any security issue. |
| Informational | Use of a non-cryptographically secure random number generator | Scala 3 compiler (Scala 3.8-RC1) | [https://github.com/scala/scala3/pull/25660](https://github.com/scala/scala3/pull/25660) |
| Informational | `TastyPrinter` silently skips `.tasty` files in subdirectories of a `.jar` | `scalac -print-tasty` (Scala 3.8-RC1) | [https://github.com/scala/scala3/pull/26082](https://github.com/scala/scala3/pull/26082) |

## How to report future security issues

Please let us know as soon as you discover a security issue as per [https://scala-lang.org/security/](https://scala-lang.org/security/) 

## Thank you

We first began discussions with the team at Open Source Technology Improvement Fund in July 2024. Between defining the scope of the audit, securing funding, assembling the teams, and carrying out the work itself, nearly two years passed before reaching this milestone.

Projects like this are a reminder that open source work takes time, collaboration and coordination, patience and persistence, and countless contributions along the way.

And so, we extend our gratitude to every person and organization involved in making this effort possible, including the Sovereign Tech Agency, the Open Source Technology Improvement Fund, Quarkslab, and the many Scala teams and maintainers who contributed along the way. We also look forward to sharing the final part of the audit, focused on Scala's supply-chain security.

## Participation 

The Scala Center has been entrusted with coordinating the commissioned Scala work for the Sovereign Tech Fund. The Scala Center is an independent, not-for-profit center sponsored by [corporate members and individual backers like you](/blog/2023/09/11/scala-center-fundraising.html) to promote and facilitate Scala. If you would like to participate and/or see more of these types of efforts, please reach out to your manager to see if your company can donate engineering time or membership to the Scala Center.

See [The Scala Center Fundraising Campaign](/blog/2023/09/11/scala-center-fundraising.html) for more details.

