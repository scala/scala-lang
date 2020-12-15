---

category: announcement
title: "Scala 2.11.2 is now available!"
permalink: /news/2.11.2/
---
We are very pleased to announce the release of Scala 2.11.2!

* Get started with the [Hello Scala 2.11 template](https://typesafe.com/activator/template/hello-scala-2_11) in [Typesafe Activator](https://typesafe.com/platform/getstarted)
* Download a distribution from [scala-lang.org](https://scala-lang.org/download/2.11.2.html)
* Obtain it via [Maven Central](https://search.maven.org/?search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.11.2%22#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.11.2%22)

Scala 2.11.2 is a bugfix release that is binary compatible with previous releases in the Scala 2.11 series.
The changes include:

* Several [issues in the collections library](https://issues.scala-lang.org/browse/SI-8738?jql=project%20%3D%20SI%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20%3D%20%22Scala%202.11.2%22%20AND%20component%20%3D%20Collections%20ORDER%20BY%20priority%20DESC) were resolved, most notably equality on ranges ([SI-8738](https://issues.scala-lang.org/browse/SI-8738)).
* The optimizer no longer eliminates division instructions that may throw an `ArithmeticException` ([SI-7607](https://issues.scala-lang.org/browse/SI-7607)).
* The `-Xlint` compiler flag is now parameterized by individual warnings. This is intended to replace the `-Ywarn-...` options, for instance, `-Xlint:nullary-unit` is equivalent to `-Ywarn-nullary-unit`. Run `scalac -Xlint:help` to see all available options. Kudos to [@som-snytt](https://github.com/som-snytt)!
* TypeTags and Exprs are now serializable ([SI-5919](https://issues.scala-lang.org/browse/SI-5919)).

Compared to 2.11.1, this release resolves [49 issues](https://issues.scala-lang.org/browse/SI-8738?jql=project%20%3D%20SI%20AND%20fixVersion%20%3D%20%22Scala%202.11.2%22%20AND%20resolution%20%3D%20fixed%20ORDER%20BY%20component%20ASC%2C%20priority%20DESC). We reviewed and merged [70 pull requests](https://github.com/scala/scala/issues?milestone=38&state=closed).

The next minor Scala 2.11 release will be available in 2 months, or sooner if prompted by a serious issue.

### Available Libraries and Frameworks

A large number of Scala projects have been released against Scala 2.11. Please refer to the list of [libraries and frameworks available for Scala 2.11](https://github.com/scala/make-release-notes/blob/2.11.x/projects-2.11.md).

A release of the Scala IDE that includes Scala 2.11.2 will be available shortly [on their download site](http://scala-ide.org/download/sdk.html).

### Release Notes for the Scala 2.11 Series

The release notes for the Scala 2.11 series, which also apply to the current minor release, are available in the [release notes for Scala 2.11.1](https://scala-lang.org/news/2.11.1). They contain important information such as:

* The specification of binary compatibility between minor releases.
* Details on new features, important changes and deprecations in Scala 2.11.

### Contributors

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, participating in mailing lists and other public fora, and submitting and reviewing pull requests!
You are all awesome.

According to `git shortlog -sn --no-merges v2.11.1..v2.11.2`, 21 people contributed code to this minor release:
Jason Zaugg, A. P. Marki, Lukas Rytz, Adriaan Moors, Rex Kerr, Eugene Burmako, Antoine Gourlay, Tobias Roeser, Denys Shabalin, Philipp Haller, Chris Hodapp, Todd Vierling, Vladimir Nikolaev, François Garillot, Jean-Remi Desjardins, Johannes Rudolph, Marcin Kubala, Martin Odersky, Paolo Giarrusso, Rui Gonçalves, Stephen Compall.
