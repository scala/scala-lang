---
category: announcement
permalink: /news/next-scala-lts-jdk.html
title: "JDK 17 will be the next minimum version required by Scala 3"
by: Tomasz Godzik, VirtusLab & Scala Core Team
---

We recently asked for community input about changing the JDK version used by the
Scala 3 compiler. We wanted to thank everyone for their input and announce the
decision to switch to JDK 17 as the new minimum, starting with Scala 3.8 minor
and the next LTS which will mostly likely be Scala 3.9.

The discussion didn't uncover any compelling reason not to leave JDK 11 behind.
11 is now nearly as antiquated as 8, and moving from 11 to 17 is not normally a
difficult upgrade for users. 17 offers useful APIs and VM features. In the JVM
world, requiring 17+ is already a mainstream position and is becoming more so
with every passing month. Also, we increase Scala's minimum so rarely, we feel
we should take this chance to aid open-source maintainers by reducing the
testing and maintenance burden across the entire Scala 3 tooling and library
ecosystems as much as we reasonably can.

This change only concerns future minor versions of Scala 3. In particular, the
Scala 3.3 LTS line is unaffected by this change. Scala 3.3.x releases will
continue for at least a year after the next LTS line begins

There are also no plans to change Scala 2’s JDK support and it will continue
being built using JDK 8.

The open discussion that led to this decision can be found at the
[Scala contributors forum](https://contributors.scala-lang.org/t/next-scala-3-lts-version-will-increase-minimum-required-jdk-version).
