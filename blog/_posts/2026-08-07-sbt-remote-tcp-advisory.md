---
layout: blog-detail
post-type: blog
by: Anatolii Kmetiuk (Scala Center) and Eugene Yokota
title: "Fixing a remote execution vulnerability in sbt"
---

> This post covers work done under the [Sovereign Tech Fund investment](https://www.scala-lang.org/blog/2026/01/27/sta-invests-in-scala.html) umbrella: [sbt 2 Stable Release and Maintenance](https://contributors.scala-lang.org/t/sbt-2-production-ready-roadmap/7351). The work is coordinated by the [Scala Center](https://scala.epfl.ch/).

As part of our ongoing work on the sbt 2 release, we’ve been reviewing bug reports and pull requests.

## TL;DR

Only builds that explicitly set `serverConnectionType` are affected. You can remove the setting from your build, or upgrade to sbt 1.12.15 / sbt 2.0.6 or later by putting the following in `project/build.properties`:

```scala
sbt.version=1.12.15
```

Note that installing a new `sbt` command does not affect the sbt version used by each individual build.

## The vulnerability

The sbt team received a security report [GHSA-m2pw-22cj-jq4v](https://github.com/sbt/sbt/security/advisories/GHSA-m2pw-22cj-jq4v) from [Arpit Jain](https://github.com/arpitjain099) that an attacker is able to execute arbitrary code remotely via the sbt server when the `serverConnectionType` is set to `ConnectionType.Tcp`.

By default, sbt uses UNIX domain socket on Linux and macOS, and named pipes on Windows, but this can be changed to TCP using the following setting:

```scala
Global / serverConnectionType := ConnectionType.Tcp
```

This will use a TCP port that can be calculated deterministically from the working directory, e.g. 5001, for the sbt server communication. An attacker can then craft a JSON-RPC message, masquerading as an sbt client.

In a normal sequence, using TCP would go through a token authentication so only the local user can use the sbt server; however, there were several endpoints that were not protected by the access control, which allowed improper escalation. This is a form of [CWE-425: Direct Request](https://cwe.mitre.org/data/definitions/425.html). The vulnerability has existed since sbt 1.1.0 and affects both the sbt 1.x and sbt 2.x series.

## The fix

The primary fix was to make sure all LSP-like endpoints are protected behind authorization when using TCP. The fix is available in sbt 1.12.15 and 2.0.6. The remediation was implemented by Eugene and Anatolii using GitHub's private fork feature. The full advisory is available as [GHSA-m2pw-22cj-jq4v](https://github.com/sbt/sbt/security/advisories/GHSA-m2pw-22cj-jq4v).

We recommend removing the `serverConnectionType` setting, or upgrading to a patched version sbt 1.12.15 / sbt 2.0.6 or later.

## AI tooling

When Claude Mythos 5 was announced, it was widely reported that the LLM had reached the ability to discover new vulnerabilities in software. Subsequent availability of Claude Fable 5 and competing models have put the idea to the test. In the security report, the reporter has noted that he used AI assistance for the code audit and for drafting this report, and including detailed tracing of functions across multiple source files.
When we prompted Claude Code to discover vulnerabilities, it downgraded to Opus 5, but was able to discovered the same remote execution bug.

We're thankful that the vulnerability was reported to the sbt team. If you find one please report through [GitHub advisories](https://github.com/sbt/sbt/security/advisories).

## Participation

The Scala Center has been entrusted with coordinating the commissioned Scala work for the Sovereign Tech Fund. The Scala Center is an independent, not-for-profit center sponsored by [corporate members and individual backers like you](/blog/2023/09/11/scala-center-fundraising.html) to promote and facilitate Scala. If you would like to participate and/or see more of these types of efforts, please reach out to your manager to see if your company can donate engineering time or membership to the Scala Center.

See [The Scala Center Fundraising Campaign](/blog/2023/09/11/scala-center-fundraising.html) for more details.
