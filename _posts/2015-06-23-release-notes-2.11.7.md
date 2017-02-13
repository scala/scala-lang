---

category: announcement
permalink: /news/2.11.7
title: "Scala 2.11.7 is now available!"
---
We are very pleased to announce the availability of Scala 2.11.7!

We would like to highlight the following changes:

* Exhaustivity checking for pattern matching is now much snappier &mdash; thank you @gbasler! ([SI-9181](https://issues.scala-lang.org/browse/SI-9181))
* A 300x more embeddable Scala REPL, brought to you by a team effort with Apache Spark. Thank you @ScrapCodes, @retronym &amp; co! ([#4548](https://github.com/scala/scala/pull/4548), [#4563](https://github.com/scala/scala/pull/4563))
* Scala also &lt;3 INDYs -- experiment with all our favorite new Java 8 features [as follows](https://github.com/scala/make-release-notes/blob/2.11.x/experimental-backend.md) and get an exclusive sneak preview of 2.12.0-M2!
* Oh, and [the spec](http://www.scala-lang.org/files/archive/spec/2.11/) is now much spiffier! Thanks, @soc!

<!--break-->

Compared to 2.11.6, this release resolves [53 issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20in%20%28%22Scala%202.11.7%22%29%20ORDER%20BY%20component%20ASC%2C%20priority%20DESC).  We [merged 124 pull requests](https://github.com/scala/scala/pulls?q=is%3Apr+is%3Amerged+milestone%3A2.11.7) (out of 157).  Before upgrading, please also check the [known issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20status%3Dopen%20AND%20affectedVersion%20%3D%20%22Scala%202.11.7%22%20and%20fixVersion%20%3E%3D%20%22Scala%202.11.7%22%20ORDER%20BY%20component%20ASC%2C%20priority%20DESC) for this release.

As usual for minor releases, Scala 2.11.7 is binary compatible with other releases in the Scala 2.11 series.

The quarterly release schedule will continue for 2.11.x until the end of this year, and a few more quarters into 2016.

### Contributors

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, spreading kindness in mailing lists and other public fora, and submitting and reviewing pull requests! You are all magnificent.

According to `git shortlog -sn --no-merges v2.11.6..v2.11.7`, 36 people contributed to this minor release: Lukas Rytz, Jason Zaugg, A. P. Marki, Grzegorz Kossakowski, Adriaan Moors, Rex Kerr, Simon Ochsenreither, Antoine Gourlay, Gérard Basler, Zhong Sheng, Kato Kazuyoshi, Michał Pociecha, Janek Bogucki, vsalvis, Prashant Sharma, Daniel Dietrich, Kenji Yoshida, YawarRaza7349, Simon Schäfer, Eugene Burmako, Guillaume Martres, Sean Riggin, Christoph Neijenhuis, Szabolcs Berecz, Bruno Bieth, dumpstate, esfandiar amirrahimi, nafg, swaldman, Alessandro Lacava, Geoffrey Knauth, Jean-Rémi Desjardins, EECOLOR, Niko Vuokko, Cody Allen, RobertZK. Thank you!

### Obtaining Scala

Scala releases are available through a variety of channels, including (but not limited to):

* Get started with the [Hello Scala 2.11 template](https://typesafe.com/activator/template/hello-scala-2_11) in [Typesafe Activator](https://typesafe.com/platform/getstarted)
* Download a distribution from [scala-lang.org](http://scala-lang.org/download/2.11.7.html)
* Bump the `scalaVersion` setting in your SBT-based project
* Obtain JARs via [Maven Central](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.11.7%22)

### Scala 2.11 Notes

The [release notes for Scala 2.11.1](http://scala-lang.org/news/2.11.1) have important information applicable to the whole 2.11 series, such as:

* Details on new features, important changes and deprecations since Scala 2.10.
* The specification of binary compatibility between minor releases.
