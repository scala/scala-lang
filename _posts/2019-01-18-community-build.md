---
layout: blog-detail
post-type: blog
by: Seth Tisue
title: "Scala community build grows, adds Scala 2.13 and JDK 11"
---

In a [January 2018 blog
post](https://www.scala-lang.org/2018/01/16/community-build-growth.html)
we introduced the Scala community build, a collection of open-source
Scala code that includes many of the most-used libraries in the Scala
ecosystem.

The community build is used to test changes to the Scala compiler,
enabling Scala the language and Scala the ecosystem of libraries to
evolve in tandem with each other.

This post highlights the progress the community build has made in the
last year.

## Overall growth

We currently have **185 projects** and a total of **3.2 million
lines** of code.  (A year ago, we had 141 projects and 2.8
million lines.)

An especially notable project added recently was [Apache
Kafka](https://kafka.apache.org), thanks to the efforts of [Enno
Runne](https://github.com/ennru) at Lightbend.

Other projects added in the last year include: airframe, akka-http-json,
akka-persistence-jdbc, argonaut-shapeless, better-monadic-for,
boopickle, circe-derivation, classpath-shrinker, classutil,
curryhoward, decline, eff, enumeratum, expecty, export-hook,
fast-string-interpolator, giter8, grizzled, jsoniter-scala, kittens,
linter, magnolia, mercator, metaconfig, metrics-scala, mouse, pascal,
perfolation, portable-scala-reflect, refined, scala-collection-compat,
scala-java-time, scala-newtype, scala-sculpt, scalajson, scalasti,
scalaz8, scapegoat, scribe, scrooge-shapes, scrooge, silencer,
singleton-ops, sttp, testz, wartremover.

<!--See also the [full
list](https://github.com/scala/community-build/blob/2.12.x/configs/project-refs.conf)
of all included projects.-->

## JDK 11 added

With a JDK 11 community build now in place, we are protected from
any more bugs like [the bug that required Scala 2.12.5 to be
withdrawn](https://github.com/scala/scala/pull/6446).

We added a JDK 9 edition of the community build in March 2018,
starting with just a half-dozen projects.  By June, 119 projects were
passing.  Since then we moved to JDK 10 and then to JDK 11. Today,
**165 projects** are passing -- almost 90 percent.

(If it seems worrisome that several dozen projects still fail,
consider the following.  In order for a project to pass, it must both
_build_ and _run_ on on JDK 11.  It's fairly rare for a Scala
library to have any trouble _running_ on JDK 11, using published
artifacts built on JDK 8.  In the community build context, most
failures are minor _build_ problems, not actual runtime problems.)

[This GitHub ticket](https://github.com/scala/community-build/issues/796)
tracks progress on getting the remaining libraries passing.

Project maintainers can help by adding this to their `.travis.yml`
files:

```
jdk:
- oraclejdk8
- openjdk11
```

(These are the JDKs that the community build uses, and that open
source contributors are likeliest to be using.)

## Scala 2.13 added

There are currently **79 projects** that build (and whose test
suites pass) with the latest Scala 2.13 nightly build.  This
number has been gradually growing ever since 2.13's new collections
API landed in April.

Having this many projects passing gives us substantial confidence
already that the new collections API in 2.13, and other changes,
are fundamentally sound.  Most projects have needed only small changes
around the edges to cross-compile against 2.11, 2.12, and 2.13.

[This GitHub
ticket](https://github.com/scala/community-build/issues/710) tracks
progress on getting even more libraries passing in time for the 2.13.0
release in early 2019.

## Learning more, getting involved

See [last year's blog
post](https://github.com/scala/community-build/issues/796).  The
links it contains are still valid.

And what about about Scala 3?  As the Dotty team [tells us](https://dotty.epfl.ch/blog/2018/11/30/11th-dotty-milestone-release.html), "Dotty now has
a set of widely-used community libraries that are built against every
nightly Dotty snapshot. Currently this includes ScalaPB, algebra,
scalatest, scopt and squants. Join our community build to make sure
that our regression suite includes your library."

## Credits

I (Seth Tisue) am the primary maintainer of the Scala community build,
as a member of the Scala team at Lightbend.  Toni Cunei, from the
tooling team at Lightbend, is the primary author of
[dbuild](https://github.com/lightbend/dbuild), the meta-build tool
that makes the community build possible.

The community build couldn't exist without continual help and
advice from the maintainers of the included projects.
