---
layout: blog-detail
post-type: blog
by: Seth Tisue
title: "Scala 2 community build achieves completion"
---

The Scala 2 community build is a large collection of open-source Scala
code that we build and run every day in order to validate changes to
the Scala compiler and standard library.

If you're not familiar with the community build at all, this
[introduction](https://www.scala-lang.org/2018/01/16/community-build-growth.html),
from January 2018, still applies.

A year ago, we [updated
you](https://www.scala-lang.org/2019/01/18/community-build.html) on
improvements made up through January 2019.  The post you are reading
highlights the progress the community build has made since then.

In short, we believe **the Scala 2 community build is now essentially
complete**. Still, we will continue to run and maintain it throughout
Scala 2's lifetime.

We describe the build as complete because:

* It has successfully supported the release of Scala 2.13
  and the migration of the ecosystem to 2.13.
* It is large and diverse enough to support future 2.13.x releases.
* It is now entirely green on JDK 8 and 11 and nearly green on JDK 14.

Details below.

## Overall growth

The 2.13 community build is now the main one.  (The 2.11 and 2.12
builds still exist, but they have required only light maintenance
for some time now.)

The 2.13 build currently has **209 repos** and a total of **3.4 million
lines** of code.  (A year ago, on 2.12, we had 185 repos and 3.2
million lines.  On 2.13, we had only 79 repos.)  It takes about
nine hours to run.

Repos added in the last year include: advxml, akka-http-webgoat,
akka-management, akka-streams-tcp-chat, alpakka-kafka, avro4s,
cats-effect-testing, cats-mtl, cats-retry, cats-testkit-scalatest,
cats-time, circe-generic-extras, circe-jackson, ciris, claimant,
context-applied, discipline-scalatest, discipline-specs2, doobie,
droste, expression-evaluator, fastparse-scalameta, finagle,
http4s-jwt-auth, implicitbox, jwt-scala, kits, libra, log4cats, mdoc,
meow-mtl, mockito-scala, munit, natchez, pfps-shopping-cart,
play-file-watch, playframework, prog-scala-examples, quicklens,
redis4cats, scala-collection-contrib, scala-collection-laws,
scala-hedgehog, scala-parallel-collections, scala-pet-store,
scala-typed-holes, scalatestplus-junit, scalatestplus-mockito,
scalatestplus-scalacheck, scalatestplus-testng, scodec-cats, sconfig,
skunk, splain, squants, sttp-model, treehugger, tsec, unique, vault,
verify.

See also the [full
list](https://github.com/scala/community-build/blob/8cb95d155679c34d6f3b0e540b4309c3b8e64715/community.conf#L150-L359)
of all included repos.

## Success of the Scala 2.13 series

The Scala open-source ecosystem has almost universally adopted Scala
2.13.  Libraries and tools unavailable for 2.13 are few and far
between, as [this short
list](https://github.com/scala/make-release-notes/blob/2.13.x/projects-2.13.md#pending)
shows.

Most projects needed only minor changes around the edges to
cross-compile against 2.11, 2.12, and 2.13.  (Most maintainers have
already dropped 2.10 from their cross-builds.  Some are dropping 2.11,
now, too.)

Not many new bugs were reported in Scala 2.13 itself, so without
urgent fixes to ship, we've been able to do followup releases on a
fairly leisurely schedule: 2.13.1 after three months, and 2.13.2
([coming
soon](https://contributors.scala-lang.org/t/coming-soon-scala-2-12-11-scala-2-13-2/4003))
after a further six months.

We take the relative scarcity of new defects as evidence that the
community build is providing a high level of quality assurance.  The
build doesn't catch everything, but it has prevented many regressions
from ever being released.

## JDK 11 and 14

The 2.13 build is now 100% green on JDK 11.  That's because:

* Support for JDK 11 in Scala and sbt has improved.
* Across the Scala and Java ecosystems, maintainers have increasingly
  added JDK 11 to their own CI matrices.
* We report JDK 11 related issues to upstream maintainers.

We also now run the build on an early-access build of JDK 14.  Only
two repos currently fail (for minor reasons not having to do with
regressions in Scala).

All variants of the community build now run on AdoptOpenJDK.
This seems to be an increasingly standard choice, within Lightbend
and in the community at large.

## Maintenance and process changes

The way the community build is configured and maintained has been
overhauled.  It is now easier for us to maintain, and it is easier for
the maintainers of included repos to participate.  If interested, see
[this
post](https://contributors.scala-lang.org/t/community-build-progress-report-august-2019/3573/8?u=sethtisue)
for details.

## The future: Scala 2

We believe that for Scala 2, the community build is now essentially
complete.  It is sufficiently large, and sufficiently up-to-date with
the ecosystem, to serve the needs of ongoing development on the Scala
2.13.x series.  We will keep maintaining it indefinitely, but we don't
expect any further really notable changes or expansions.

(What about Scala 2.14? We don't expect any 2.14 release to be needed.
If you missed that news, see [this blog
post](https://www.scala-lang.org/2019/12/18/road-to-scala-3.html) from
December.)

## The future: Scala 3

And what about Scala 3?  Dotty has its own community build,
and it continues to grow. It now contains 25 repos, compared to 5
a year ago.

Here is the [list of included repos](https://github.com/lampepfl/dotty/tree/master/community-build/community-projects).  If you want to add something,
there are [instructions](https://github.com/lampepfl/dotty/tree/master/community-build/test/scala/dotty/communitybuild).

## Credits

I ([Seth Tisue](https://github.com/SethTisue)) am the primary
maintainer of the Scala community build, as a member of the Scala team
at Lightbend.  [Toni Cunei](https://github.com/cunei), also at
Lightbend, is the primary author of
[dbuild](https://github.com/lightbend/dbuild), the meta-build tool
that makes the community build possible.

The community build couldn't exist without continual help and advice
from the maintainers of the included projects.
