---
category: announcement
permalink: /news/2.12.5
title: "Scala 2.12.5 is now available!"
---
Main highlights of this release:

  - When running the compiler on Java 9 or higher, the new `-release N` flag changes the compilation classpath to match the JDK version N. This works for the JDK itself and for multi-release JARs on the classpath. Details in the PR: https://github.com/scala/scala/pull/6362.
  - With the new `-Ybackend-parallelism N` compiler flag, the backend can now run bytecode serialization, classfile writing and method-local optimizations (`-opt:l:method`) in parallel on N threads. (thanks @mkeskells!) PR: https://github.com/scala/scala/pull/6124.
  - The `raw""` and `s""` string interpolators are now intercepted by the compiler to produce more efficient bytecode. PR: https://github.com/scala/scala/pull/6093.
  - The `-Ycache-plugin-class-loader` and `-Ycache-macro-class-loader` flags enable caching of classloaders for compiler plugins and macro definitions. This can lead to significant performance improvements. PRs: https://github.com/scala/scala/pull/6412, https://github.com/scala/scala/pull/6314. (thanks @xeno-by and @jvican!)

Further highlights:

  - The `apply` method on the `PartialFunction` companion object is now deprecated. PR: https://github.com/scala/scala/pull/6005.
  - Scala JARs (library, reflect, compiler) now have an `Automatic-Module-Name` attribute in their manifests. PR: https://github.com/scala/scala/pull/6395.
  - Enabling unused warnings now leads to fewer false positives. (thanks @som-snytt!) PR: https://github.com/scala/scala/pull/6190.
 - Explicit eta-expansion (`foo _`) of a nullary method no longer gives a deprecation warning. PR: https://github.com/scala/scala/pull/6177.

For more details, check out [all closed bugs](https://github.com/scala/bug/issues?q=is%3Aclosed%20milestone%3A2.12.5) and [merged PRs](https://github.com/scala/scala/pulls?q=is%3Amerged%20milestone%3A2.12.5).

Compiler [performance since 2.12.4](https://scala-ci.typesafe.com/grafana/dashboard/db/scala-benchmark?orgId=1&var-branch=2.12.x&var-source=All&var-bench=HotScalacBenchmark.compile&var-host=scalabench@scalabench@&from=1507448786368&to=1521035111430) is stable.

As usual for minor releases, Scala 2.12.5 is binary compatible with the whole Scala 2.12 series.

## Contributors

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, spreading kindness in discussions around Scala, and submitting and reviewing pull requests! You are all magnificent.

This release was brought to you by 36 contributors, according to `git shortlog -sn --no-merges v2.12.4..v2.12.5`. Thank you, Jason Zaugg, A. P. Marki, Mike Skells, Harrison Houghton, Adriaan Moors, Lukas Rytz, Seth Tisue, jvican, Eyal Farago, Philippus Baalman, Martijn Hoekstra, Stefan Zeiger, howtonotwin, Jasper Moeys, Cong Zhao, Piotr Kukielka, Rex Kerr, Ben Elliott, id.ilych, Markus Hauck, mkeskells, Steve Robinson, Viktor Klang, ghik, Ólafur Páll Geirsson, Aaron S. Hawley, Janek Bogucki, Håkon Hjelde Wold, Jonathan Frawley, Dale Wijnand, Marconi Lanna, Pavel Petlinsky, Antoine Gourlay, Alex Levenson, Shohei Shimomura, Teemu Lehtinen!

## Scala 2.12 Notes

The [release notes for Scala 2.12.0](https://github.com/scala/scala/releases/v2.12.0) have important information applicable to the whole 2.12 series.

## Obtaining Scala

Scala releases are available through a variety of channels, including (but not limited to):

* Bump the `scalaVersion` setting in your sbt-based project
* Download a distribution from [scala-lang.org](http://scala-lang.org/download/2.12.5.html)
* Obtain JARs via [Maven Central](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.12.5%22)
