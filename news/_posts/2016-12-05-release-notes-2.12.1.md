---
layout: news
post-type: announcement
permalink: /news/2.12.1
title: "Scala 2.12.1 is now available!"
---
We are pleased to announce the availability of Scala 2.12.1!

## Changes

Significant changes since 2.12.1 include:

* [#5516](https://github.com/scala/scala/pull/5516) Improved runtime speed for Vector, restoring previous performance
* [#5509](https://github.com/scala/scala/pull/5509) SI-10032 Fix code gen with returns in nested try-finally blocks
* [#5482](https://github.com/scala/scala/pull/5482) Fix 2.12 regression, backend crash: Cannot create ClassBType from non-class symbol; also fix SI-7139
* [#5469](https://github.com/scala/scala/pull/5469) SI-10020 SI-10027 Scaladoc: keep Java comment scanning stack-friendly
* [#5376](https://github.com/scala/scala/pull/5376) Make -Xexperimental features available separately
* [#5284](https://github.com/scala/scala/pull/5284) SI-7046 partial fix to knownDirectSubclasses for reflection users and macro authors
* [#5410](https://github.com/scala/scala/pull/5410) Upgrade to scala-xml 1.0.6

  * see [1.0.6 release notes](https://github.com/scala/scala-xml/releases/tag/v1.0.6)

In total, this release resolves [28 issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20in%20%28%22Scala%202.12.1%22%29%20ORDER%20BY%20component%20ASC%2C%20priority%20DESC).  We merged [88 pull requests](https://github.com/scala/scala/pulls?q=is%3Apr+is%3Amerged+milestone%3A2.12.1).

As usual for minor releases, Scala 2.12.1 is binary compatible with the whole Scala 2.12 series.

## Contributors

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, spreading kindness in discussions around Scala, and submitting and reviewing pull requests! You are all magnificent.

According to `git shortlog -sn --no-merges v2.12.0..v2.12.1`, 28 people contributed to this minor release: A. P. Marki, Jason Zaugg, Lukas Rytz, Seth Tisue, Adriaan Moors, Stefan Zeiger, Dale Wijnand, Miles Sabin, Daniel Barclay, Pap Lőrinc, Iulian Dragos, Rex Kerr, Sakthipriyan Vairamani, Kenji Yoshida, Jakob Odersky, Mohit Agarwal, Paul Kernfeld, Pavel Petlinsky, Boris Korogvich, Sébastien Doeraene, Tim Spence, Viktor Klang, Vladimir Glushak, Chris Okasaki, Lifu Huang, Janek Bogucki, Martijn Hoekstra, Masaru Nomura.

## Scala 2.12 Notes

The [release notes for Scala 2.12.0](http://scala-lang.org/news/2.12.0) have important information applicable to the whole 2.12 series.

## Obtaining Scala

Scala releases are available through a variety of channels, including (but not limited to):

* Bump the `scalaVersion` setting in your sbt-based project
* Download a distribution from [scala-lang.org](http://scala-lang.org/download/2.12.1.html)
* Obtain JARs via [Maven Central](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.12.1%22)
