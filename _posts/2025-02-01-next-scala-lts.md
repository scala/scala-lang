---
category: announcement
permalink: /news/next-scala-lts.html
title: "Next Scala 3 LTS version"
by: Tomasz Godzik
---

**TLDR;**

sun.misc.Unsafe, re-used in lazy val implementation, will be removed in a future
JDK one of the Scala 3 Next minors in 2025 Q4 and the next LTS will drop JDK 8
support

## Intro

For the compiler’s second LTS version, the Scala 3 compiler team will be
dropping support for JDK 8 and is considering which later JDK to use.

## Reasons for the change

One of the main reasons is that recent [JEP 471](https://openjdk.org/jeps/471)
stated that the memory-access methods in sun.misc.Unsafe are scheduled for
removal in a future release. Currently, Scala 3 uses sun.misc.Unsafe in its
implementation of lazy values. This was needed due to compatibility with JDK 8.
In order to support later versions of JDK we will need to drop usage of Unsafe,
which is being investigated under
[this issue](https://github.com/scala/scala3/issues/9013). It also started to
dawn on the compiler team that we might consider stopping to support JDK 8
altogether in a future release of Scala 3.

## Advantages

Switching to a newer version of the JDK would allow both the compiler and the
Scala ecosystem to start using new features brought in by JDK 9+. This might
include a number of JEPs, which will be investigated by the team the coming
year. To check the current status take a look at the issues marked with the
[JEP label](https://github.com/scala/scala3/issues?q=is%3Aissue+is%3Aopen+label%3Acompat%3Ajava%3Ajep).

Another advantage would be reducing the maintenance burden on tooling and
library authors that currently have to take into account a large number of
different versions to test and make sure that their code is performant on all of
them.

If we take a look at the timeline we'll see that JDK 8 was first published on
18th March 2014, which is already over 10 years ago. Technology and especially
JDKs have advanced greatly through that period and in order to stay competitive
using those advancements is a must. A lot of the existing distributions are
already stopping or will soon stop updating JDK 8 with security and other fixes,
which might directly impact issues within your business applications.

Some larger projects within JVM and Scala ecosystems have already dropped JDK 8
support. And while it's always possible to not update your libraries and Scala
version, which will avoid having to switch to a newer JDK, it's highly
discouraged as it will make you vulnerable to potential security risks.

## Plan for making the switch

The current plan is to drop support of JDK 8 in one of the future minor releases
of Scala 3 and in the next LTS. The JDK will be either 11 or 17 depending on the
community feedback and our investigations. The current estimate for the next LTS
is Q4 2025.

One of the major challenges here will be making sure that we are still able to
use libraries compiled with earlier JDK 8 compatible Scala 3 versions in the
versions with a new implementation of lazy values, which is not reliant on
sun.misc.Unsafe.

## How does it affect me?

If you are using Scala 3 on JDK 8 do let us know! However the current line of
LTS under 3.3.x will be supported for at least another year after the release of
the next LTS version, which should give you plenty of time to migrate.

If at any point it turns out it's not possible for you to switch, be sure to
send us your feedback.

## Summary

You can track the current work related to lazy values under
[this issue](https://github.com/scala/scala3/issues/9013) and discuss the topic
under soon to be posted thread on the
[Scala contributors forum](https://contributors.scala-lang.org/)
