---
layout: blog-detail
post-type: blog
by: Anatolii Kmetiuk, Scala Center
title: "Fixing a Command Injection Vulnerability in sbt"
description: "During our ongoing work on sbt 2, we discovered and fixed a command injection vulnerability affecting sbt on Windows."
---

> This post covers work done under the [Sovereign Tech Fund investment](https://www.scala-lang.org/blog/2026/01/27/sta-invests-in-scala.html) umbrella: [sbt 2 Stable Release and Maintenance](https://contributors.scala-lang.org/t/sbt-2-production-ready-roadmap/7351). The work is coordinated by the [Scala Center](https://scala.epfl.ch/).

As part of our ongoing work on the sbt 2 release, we've been reviewing and hardening core parts of the sbt codebase. During that work, we discovered a command injection vulnerability in how sbt resolves source dependencies on Windows. The issue has been assigned [CVE-2026-32948](https://www.cve.org/CVERecord?id=CVE-2026-32948), rated Moderate (CVSS 6.7), and is now fixed. If you use sbt on Windows, update to **sbt 1.12.8** or **sbt 2.0.0-RC10** or later to apply the fix.

## The vulnerability

sbt has the [source dependencies](https://www.scala-sbt.org/1.x/docs/Multi-Project.html#Project+dependency) feature that lets you depend on a VCS repository in your build definition. For example, to depend on the `develop` branch of a project published to GitHub:

```scala
lazy val dep = RootProject(
  uri("https://github.com/sbt/io.git#develop")
)
```

When sbt resolves this, it clones the repository and checks out the branch specified in the URI fragment - the part after `#`. To do this, sbt runs a VCS client (git, hg, or svn) as an external process.

On Windows, sbt historically wrapped these VCS commands in `cmd /c` - routing them through the Windows command interpreter. `cmd.exe` treats characters like `&`, `|`, and `;` as command separators. The URI fragment is user-controlled and was passed to VCS commands without any validation. This allows an attacker to break out of the intended git command and execute an arbitrary shell command on Windows.

For example, consider a dependency declared as:

```scala
lazy val vulnerable = RootProject(
  uri("https://github.com/sbt/io.git#develop%26%26calc.exe")
)
```

The `%26%26` decodes to `&&`. When this reaches `cmd /c git checkout develop&&calc.exe`, the command interpreter executes two commands: first `git checkout develop`, then `calc.exe`, starting the Windows Calculator.

This is a classic [OS command injection](https://cwe.mitre.org/data/definitions/78.html) (CWE-78). The vulnerability has existed since sbt 0.9.5 and affects both the sbt 1.x line and sbt 2.0 release candidates on Windows.

## Severity

The severity is moderate because exploitation requires an attacker to actively build a project containing a malicious dependency URI, then requires a user to proactively build that project on their local machine. As sbt is a build tool, building a project carries an inherent risk of arbitrary command execution. As with any untrusted software, before building a project, you should check the source code, including the build file definitions.

The threat model here is that a malicious attacker may try to inject commands disguised as a source dependency URL, and pass the code review because the behavior is unexpected.

## The fix

The primary fix was to stop routing VCS commands through `cmd /c`. Git, Mercurial, and Subversion all ship as `.exe` binaries on Windows. When Java's `ProcessBuilder` invokes an `.exe` directly, arguments are passed as separate strings to the operating system - shell metacharacters are not interpreted. By removing the `cmd /c` wrapper, the injection vector disappears.

As defense-in-depth, we also added input validation. URI fragments are now checked against an allowlist of characters - only alphanumeric characters, `-`, `_`, `.`, `/`, and `+` are allowed.

Both measures follow established guidance from [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/OS_Command_Injection_Defense_Cheat_Sheet.html), [Oracle's Secure Coding Guidelines](https://www.oracle.com/java/technologies/javase/seccodeguide.html), and the [JEP 8263697 proposal](https://openjdk.org/jeps/8263697) for safer process launching.

The fix is available in sbt 1.12.8 and sbt 2.0.0-RC10. The full advisory is published as [GHSA-x4ff-q6h8-v7gw](https://github.com/sbt/sbt/security/advisories/GHSA-x4ff-q6h8-v7gw).

## Workflow of applying the fix

One interesting detail to mention is that GitHub provides a [way](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing/privately-reporting-a-security-vulnerability) to report a vulnerability, work on the fix and submit a PR privately to prevent the vulnerability from being publicly disclosed before the fix is ready. If you encounter a security vulnerability in a Scala project, you should do the same, reporting it to the maintainers via Security Advisory on GitHub.

## Applying the fix

Update your `project/build.properties` to sbt 1.12.8 or later, or sbt 2.0.0-RC10 if you are using sbt 2. If your build uses source dependencies, verify that the URIs point to repositories you trust. In general, treat build definitions and VCS dependencies (including their build and source code) with the same review standards as application code. A `build.sbt` runs arbitrary Scala at build time and deserves the same scrutiny as any other code in your repository.

## Participation

The Scala Center has been entrusted with coordinating the commissioned Scala work for the Sovereign Tech Fund. The Scala Center is an independent, not-for-profit center sponsored by [corporate members and individual backers like you](/blog/2023/09/11/scala-center-fundraising.html) to promote and facilitate Scala. If you would like to participate and/or see more of these types of efforts, please reach out to your manager to see if your company can donate engineering time or membership to the Scala Center.

See [The Scala Center Fundraising Campaign](/blog/2023/09/11/scala-center-fundraising.html) for more details.
