---
layout: news
post-type: announcement
title: "Scala 2.11.4 is now available!"
permalink: /news/2.11.4
---
We are very pleased to announce the release of Scala 2.11.4!

* Get started with the [Hello Scala 2.11 template](https://typesafe.com/activator/template/hello-scala-2_11) in [Typesafe Activator](https://typesafe.com/platform/getstarted)
* Download a distribution from [scala-lang.org](http://scala-lang.org/download/2.11.4.html)
* Obtain it via [Maven Central](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.11.4%22)

Scala 2.11.4 is a bugfix release that is binary compatible with previous releases in the Scala 2.11 series.
The changes include:

* Scala shell (REPL) is more friendly to Crtl+D. It leaves your terminal in a clean state and suggests using `:quit` the next
time (see [#3902](https://github.com/scala/scala/pull/3902)). Kudos to [@gourlaysama](https://github.com/gourlaysama)!
* REPL uses different colors when printing references to vals and types. Pass `-Dscala.color` to enable that behavior (see [#3993](https://github.com/scala/scala/pull/3993)). Thanks to [@puffnfresh](https://github.com/puffnfresh)!
* [The Scala specification](http://www.scala-lang.org/files/archive/spec/2.11/) received a fair amount of love and became much more beautiful. It has got syntax highlighting ([#3984](https://github.com/scala/scala/pull/3984)), linkable headers, and a side bar with TOC ([#3996](https://github.com/scala/scala/pull/3996)). A few final touches has been merged that fix typos and mistakes stemming from automatic Latex to Markdown conversion we've done a while ago. Thanks for attention to details [@gourlaysama](https://github.com/gourlaysama), [@som-snytt](https://github.com/som-snytt) and [roberthoedicke](https://github.com/roberthoedicke)!
* Non-deterministic pattern matching warnings has been fixed ([SI-7746](https://issues.scala-lang.org/browse/SI-7746)). Many thanks to [@gbasler](https://github.com/gbasler) for diving deep ([#3954](https://github.com/scala/scala/pull/3954])) into logical formulas constructed by our pattern matcher implementation!

Compared to 2.11.2, this release resolves [54 issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20in%20%28%22Scala%202.11.3%22%2C%20%22Scala%202.11.4%22%29%20ORDER%20BY%20component%20ASC%2C%20priority%20DESC). Out of 120, we merged 95 pull requests: [90 for 2.11.3](https://github.com/scala/scala/pulls?q=is%3Apr+is%3Amerged+milestone%3A2.11.3), and [5 for 2.11.4](https://github.com/scala/scala/pulls?q=is%3Apr+is%3Amerged+milestone%3A2.11.4).

The next minor Scala 2.11 release will be available before the end of the year, or sooner if prompted by a serious issue.

### Do Not Use Scala 2.11.3
Due to a [binary incompatibility](https://issues.scala-lang.org/browse/SI-8899) in Scala 2.11.3, we recommend upgrading to Scala 2.11.4, which resolves the incompatibility, as well as another [blocker issue](https://issues.scala-lang.org/browse/SI-8900) that was discovered in the days after the 2.11.3 release.

We have [analyzed](https://groups.google.com/d/msg/scala-internals/SSD9BNJaFbU/rACBkHrs2JEJ) the mistakes that lead to the breakage (human error), and are taking measures to prevent this from happening again. We apologize for the inconvenience, and thank everyone who was involved in reporting and diagnosing these critical issues.

### Available Libraries and Frameworks

A large number of Scala projects have been released against Scala 2.11. Please refer to the list of [libraries and frameworks available for Scala 2.11](https://github.com/scala/make-release-notes/blob/2.11.x/projects-2.11.md).

A release of the Scala IDE that includes Scala 2.11.4 is available [on their download site](http://scala-ide.org/download/milestone.html).

### Release Notes for the Scala 2.11 Series

The release notes for the Scala 2.11 series, which also apply to the current minor release, are available in the [release notes for Scala 2.11.1](http://scala-lang.org/news/2.11.1). They contain important information such as:

* The specification of binary compatibility between minor releases.
* Details on new features, important changes and deprecations in Scala 2.11.

### Contributors

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, participating in mailing lists and other public fora, and submitting and reviewing pull requests! You are all awesome.

According to `git shortlog -sn --no-merges v2.11.2..v2.11.4`, 35 people contributed to this minor release:
Lukas Rytz, Adriaan Moors, Antoine Gourlay, A. P. Marki, Jason Zaugg, Robert Hoedicke, Eugene Burmako, Rex Kerr, Max Bileschi, Brian McKenna, Grzegorz Kossakowski, Maks Atygaev, Evgeny Vereshchagin, Simon Ochsenreither, Dominik Gruntz, Masato Sogame, Gerard Basler, Dan Garrette, Artem Stasuk, David Turner, Iulian Dragos, Jeroen ter Voorde, Kato Kazuyoshi, Konstantin Fedorov, Krystian Nowak, Lukas Elmer, Malte Isberner, Paolo Giarrusso, Paweł Wiejacha, Robert Hoedicke, dgruntz, Roman Janusz, harryhuk, Michał Pociecha.
