---
layout: news
category: announcement
permalink: /news/2.11.6
title: "Scala 2.11.6 is now available!"
---
We are very pleased to announce the availability of Scala 2.11.6!

* Get started with the [Hello Scala 2.11 template](https://typesafe.com/activator/template/hello-scala-2_11) in [Typesafe Activator](https://typesafe.com/platform/getstarted)
* Download a distribution from [scala-lang.org](http://scala-lang.org/download/2.11.6.html)
* Obtain it via [Maven Central](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.11.6%22)

Scala 2.11.6 is a bugfix release that is binary compatible with previous releases in the Scala 2.11 series. We would like to highlight the following changes:

 - We [fixed a cross-site scripting vulnerability](https://github.com/scala/scala/pull/4351) in Scaladoc's JavaScript. Many thanks to @todesking for discovering this, suggesting a fix, and for delaying disclosure until this release! This bug could be used to access sensitive information on sites hosted on the same domain as Scaladoc-generated documentation. All previous versions of Scaladoc are affected (Scala 2.10.5 includes the fix as well). We do recommend, as a general precaution, to host Scaladoc documentation on its own domain.
 - [SI-9089](https://issues.scala-lang.org/browse/SI-9089) repl is now much less crash-and-burny when calling a function (which turns out to be a common thing people do in a REPL). Also, apologies to the author of [SI-9022](https://issues.scala-lang.org/browse/SI-9022), who [reported this before the bug was discovered and you had to wait in line for like three hours on a Tuesday afternoon](https://issues.scala-lang.org/browse/SI-9022#comment-71996). Or, maybe, that honor should go to the enigmatic [dk14](http://stackoverflow.com/questions/27213616/why-specialized-annotation-doesnt-work-for-asinstanceof/27221875).
 - [SI-8759](https://issues.scala-lang.org/browse/SI-8759) no need to enter almost half the konami code to enter a right square bracket in the REPL (via [jline 2.12.1](https://github.com/jline/jline2/pull/175)). Thank you for implementing the jline fix, @michael72, and kudos to @jdillon and @trptcolin for cutting a new jline release just for us!

Compared to 2.11.5, this release resolves [38 issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20in%20%28%22Scala%202.11.6%22%29%20ORDER%20BY%20component%20ASC%2C%20priority%20DESC). Out of 100, we [merged 58 pull requests](https://github.com/scala/scala/pulls?q=is%3Apr+is%3Amerged+milestone%3A2.11.6). Before upgrading, please also check the [known issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20status%3Dopen%20AND%20affectedVersion%20%3D%20%22Scala%202.11.6%22%20and%20fixVersion%20%3E%3D%20%22Scala%202.11.6%22%20ORDER%20BY%20component%20ASC%2C%20priority%20DESC) for this release.

In 2015, 2.11 minor releases will be released quarterly, or sooner if prompted by a serious issue.

### Scala IDE
The current release of Scala IDE includes Scala 2.11.6 is available on the [download site](http://scala-ide.org/download/sdk.html) (or as an update to version 4.0 of the plugin).

### Available Libraries and Frameworks

A large number of Scala projects have been released against Scala 2.11. Please refer to the list of [libraries and frameworks available for Scala 2.11](https://github.com/scala/make-release-notes/blob/2.11.x/projects-2.11.md).

### Reminder: Do Not Use Scala 2.11.3
Due to a [binary incompatibility](https://issues.scala-lang.org/browse/SI-8899) in Scala 2.11.3, we recommend upgrading to Scala 2.11.6, which resolves the incompatibility, as well as another [blocker issue](https://issues.scala-lang.org/browse/SI-8900) that was discovered in the days after the 2.11.3 release.

We have [analyzed](https://groups.google.com/d/msg/scala-internals/SSD9BNJaFbU/rACBkHrs2JEJ) the mistakes that lead to the breakage (human error), and are taking measures to prevent this from happening again. We apologize for the inconvenience, and thank everyone who was involved in reporting and diagnosing these critical issues.

### Release Notes for the Scala 2.11 Series

The release notes for the Scala 2.11 series, which also apply to the current minor release, are available in the [release notes for Scala 2.11.1](http://scala-lang.org/news/2.11.1). They contain important information such as:

* The specification of binary compatibility between minor releases.
* Details on new features, important changes and deprecations in Scala 2.11.

### Contributors

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, spreading kindness in mailing lists and other public fora, and submitting and reviewing pull requests! You are all magnificent.

According to `git shortlog -sn --no-merges v2.11.5..v2.11.6`, 25 people contributed to this minor release:
Jason Zaugg, Adriaan Moors, Lukas Rytz, A. P. Marki, Denton Cockburn, Rex Kerr, mpociecha, Aleksandar Prokopec, Jan Bessai, Eugene Burmako, JustinPihony, Kornel Kielczewski, Krzysztof Romanowski, Eric Peters, Lyle Kopnicky, Mark Zitnik, Michael Pigg, Miles Sabin, BartekJanota, Simon Ochsenreither, Sébastien Doeraene, Viktor Klang, dickwall, jhegedus42, and Ikumi Shimizu. Thank you!