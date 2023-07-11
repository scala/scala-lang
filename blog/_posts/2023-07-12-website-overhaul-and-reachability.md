---
layout: blog-detail
post-type: blog
by: Julien Richard-Foy (Scala Center)
title: Website Overhaul and Improved Reachability
---

We are happy to announce that the homepage of this website has been overhauled to highlight better the use cases of Scala and to clarify what makes the language unique. Additionally, this website and all the other `*.scala-lang.org` websites should now be reachable from VPNs.

## Homepage Overhaul

In the last few months, [Jamie Thompson](https://github.com/bishabosha) has been making several improvements to the Scala homepage to put more emphasis on the use cases of Scala. The most notable changes compared to [one year ago](http://web.archive.org/web/20220316071028/https://www.scala-lang.org/) are:
- less content: we focus on answering the questions “why Scala?” and “what is Scala?”.
- simpler tagline: instead of going through a list of language features we give a more general description: “a programming language that scales with you: from small scripts to large multiplatform applications”.
- executable code examples: because developers like playing with concrete examples, we showcase some strengths of Scala in a carousel of code examples that can be edited and run on Scastie.
- use-case oriented: just after describing the unique combination of features that make the language expressive, scalable, and safe, we provide concrete, proven, use-cases for Scala with plenty of links to go further: server-side, data processing, command-line, and frontend web.

## Websites Reachability

All the `*.scala-lang.org` websites (such as this website, as well as [https://docs.scala-lang.org](https://docs.scala-lang.org) or [https://users.scala-lang.org](https://users.scala-lang.org)) are hosted on [EPFL](https://epfl.ch) servers. In late 2022, EPFL decided to block the requests coming from some networks because they got too many attacks from them. An unfortunate consequence was that [the Scala websites were unreachable from some VPNs](https://github.com/scala/scala-lang/issues/1456). This led the company Lightbend to submit a Scala Center Proposal to [ensure the reachability of the Scala websites](https://github.com/scalacenter/advisoryboard/blob/main/proposals/031-scala-websites-vpn.md) in June this year.

We are happy to announce that our system administrator has set up a reverse proxy in front of the EPFL server. The reverse proxy now handles the traffic to all the Scala websites, which should solve the reachability issue. In case you are still rejected, please let us know in the corresponding [issue](https://github.com/scala/scala-lang/issues/1456).
