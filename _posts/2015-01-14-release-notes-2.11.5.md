---
layout: news
category: announcement
permalink: /news/2.11.5
title: "Scala 2.11.5 is now available!"
---
We are very pleased to announce the release of Scala 2.11.5!

* Get started with the [Hello Scala 2.11 template](https://typesafe.com/activator/template/hello-scala-2_11) in [Typesafe Activator](https://typesafe.com/platform/getstarted)
* Download a distribution from [scala-lang.org](http://scala-lang.org/download/2.11.5.html)
* Obtain it via [Maven Central](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.11.5%22)

Scala 2.11.5 is a bugfix release that is binary compatible with previous releases in the Scala 2.11 series. We would like to highlight the following changes:

 - heathermiller's [SI-6502 Reenables loading jars into the running REPL](https://github.com/scala/scala/pull/4051)
 - mpociecha's [The alternative, flat representation of classpath elements](https://github.com/scala/scala/pull/4176)
 - gbasler's [Avoid the 'CNF budget exceeded' exception via smarter translation into CNF](https://github.com/scala/scala/pull/4078)
 - adriaanm's [SAMmy: eta-expansion, overloading, existentials](https://github.com/scala/scala/pull/4101)
 - A great number of documentation improvements -- thank you (and, to those appearing for the first time in our release notes, welcome!): @kanielc, @lymia, @stevegury, @vigdorchik, @gourlaysama, @ichoran, @retronym, @xuwei-k, @dickwall, @phaller.

Compared to 2.11.4, this release resolves [74 issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20in%20%28%22Scala%202.11.5%22%29%20ORDER%20BY%20component%20ASC%2C%20priority%20DESC). Out of 132, we [merged 110 pull requests](https://github.com/scala/scala/pulls?q=is%3Apr+is%3Amerged+milestone%3A2.11.5). Before upgrading, please also check the [known issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20status%3Dopen%20AND%20affectedVersion%20%3D%20%22Scala%202.11.5%22%20and%20fixVersion%20%3E%3D%20%22Scala%202.11.5%22%20ORDER%20BY%20component%20ASC%2C%20priority%20DESC) for this release.

In 2015, 2.11 minor releases will be released quarterly, or sooner if prompted by a serious issue.

### Scala IDE
The current release of Scala IDE includes Scala 2.11.5 is available on the [download site](http://scala-ide.org/download/sdk.html) (or as an update to version 4.0 of the plugin).

### Available Libraries and Frameworks

A large number of Scala projects have been released against Scala 2.11. Please refer to the list of [libraries and frameworks available for Scala 2.11](https://github.com/scala/make-release-notes/blob/2.11.x/projects-2.11.md).

### Reminder: Do Not Use Scala 2.11.3
Due to a [binary incompatibility](https://issues.scala-lang.org/browse/SI-8899) in Scala 2.11.3, we recommend upgrading to Scala 2.11.5, which resolves the incompatibility, as well as another [blocker issue](https://issues.scala-lang.org/browse/SI-8900) that was discovered in the days after the 2.11.3 release.

We have [analyzed](https://groups.google.com/d/msg/scala-internals/SSD9BNJaFbU/rACBkHrs2JEJ) the mistakes that lead to the breakage (human error), and are taking measures to prevent this from happening again. We apologize for the inconvenience, and thank everyone who was involved in reporting and diagnosing these critical issues.

### Release Notes for the Scala 2.11 Series

The release notes for the Scala 2.11 series, which also apply to the current minor release, are available in the [release notes for Scala 2.11.1](http://scala-lang.org/news/2.11.1). They contain important information such as:

* The specification of binary compatibility between minor releases.
* Details on new features, important changes and deprecations in Scala 2.11.

### Contributors

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, participating in mailing lists and other public fora, and submitting and reviewing pull requests! You are all awesome.

According to `git shortlog -sn --no-merges v2.11.4..v2.11.5`, 30 people contributed to this minor release:
Jason Zaugg, Lukas Rytz, Michał Pociecha, A. P. Marki, Antoine Gourlay, Heather Miller, Adriaan Moors, Rex Kerr, Simon Ochsenreither, Gerard Basler, Denton Cockburn, Kenji Yoshida, Ye Xianjin, Guy Dickinson, Jean-Remi Desjardins, Alissa Rao, Lukasz Piepiora, Maxim Valyanskiy, Paolo Giarrusso, Philipp Haller, Rafał Krzewski, Eugene Vigdorchik, Rui Gonçalves, Erik Erlandson, Steve Gury, Teemu Lehtinen, Tim Harper, Dick Wall, Guillaume Martres, Grzegorz Kossakowski.