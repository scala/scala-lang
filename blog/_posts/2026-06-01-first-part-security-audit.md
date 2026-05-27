---
layout: blog-detail
post-type: blog
by: Solal Pirelli, EPFL
title: Scala Codebase Security Audit Complete!
description: The first part of the security audit funded by the Sovereign Tech Fund is done, no critical issues were found.
---

> This post covers work done under the [Sovereign Tech Fund investment](https://www.scala-lang.org/blog/2026/01/27/sta-invests-in-scala.html) umbrella: [Maintenance of the Standard Library/Core Library Modules and APIs](https://contributors.scala-lang.org/t/standard-library-now-open-for-improvements-and-suggestions/7337). The work is coordinated by the [Scala Center](https://scala.epfl.ch/).

As part of STA's investment, [Quarkslab](https://www.quarkslab.com) was mandated through [OSTIF](https://ostif.org) to audit the Scala 3 compiler and standard library codebases.
This involved both manually reading the code to find problems, as well as using automated tools such as fuzzers and Java deserialization gadget finders.

No critical or major security issues were found. However, the audit revealed 5 medium severity issues, 1 low severity issue, and 2 informational issues we Scala maintainers fixed.
These issues do not affect typical users who compile Scala code on their machine or through continuous integration, but could cause "denial of service"-type issues if the Scala compiler was exposed in a "compiler as a service" format that accepts untrusted input.

All of these issues are fixed as of the date of this blog post, both for the 3.3 LTS branch and for the main 3.8 branch.

For instance, we fixed a medium severity issue related to [the compiler not checking that an offset in a TASTY file must be nonnegative](https://github.com/scala/scala3/pull/25676), which could lead to an infinite loop if a user provided a manually-crafted TASTY file with an unexpectedly negative offset. We added extra validation not only for this issue but for parsing variably-sized TASTY integers in general, ensuring this category of issues is no longer a problem.

## Participation

The Scala Center has been entrusted with coordinating the commissioned Scala work for the Sovereign Tech Fund. The Scala Center is an independent, not-for-profit center sponsored by [corporate members and individual backers like you](/blog/2023/09/11/scala-center-fundraising.html) to promote and facilitate Scala. If you would like to participate and/or see more of these types of efforts, please reach out to your manager to see if your company can donate engineering time or membership to the Scala Center.

See [The Scala Center Fundraising Campaign](/blog/2023/09/11/scala-center-fundraising.html) for more details.
