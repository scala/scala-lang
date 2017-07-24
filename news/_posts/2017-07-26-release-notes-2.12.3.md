---
layout: news
post-type: announcement
permalink: /news/2.12.3
title: "Scala 2.12.3 is now available!"
---
## Changes

- Compiler performance has [improved significantly](developer.lightbend.com/blog/2017-06-12-faster-scala-compiler/) and is now [automatically benchmarked](https://scala-ci.typesafe.com/grafana/) after each change.
- A new [optimizer setting](https://github.com/scala/scala/pull/5964) `-opt-inline-from` limits the classes from which the inliner will copy code. `scalac -opt-inline-from:help` provides [detailed help](https://gist.github.com/retronym/29932ea76712ff374d1363c9eda6eabe).
- The presentation compiler has [improved support for implicit macros](https://github.com/scala/scala/pull/5929), which should improve the experience with libraries based on Shapeless. It also has [better support](https://github.com/scala/scala/pull/5927) for code completion for dependently typed methods.

Further [significant changes](https://github.com/scala/scala/pulls?q=is%3Amerged%20milestone%3A2.12.3%20label%3Arelease-notes) since 2.12.2 include:

- [#5978](https://github.com/scala/scala/pull/5978) Avoid calling static initializers when reflecting on Java classes
- [#5964](https://github.com/scala/scala/pull/5589) New setting `-opt-inline-from` to control where to inline from
- [#5931](https://github.com/scala/scala/pull/5931) Upgrade to jline 2.14.4
- [#5880](https://github.com/scala/scala/pull/5880) bundle newer scala-parser-combinators (1.0.5->1.0.6)
- [#5879](https://github.com/scala/scala/pull/5879) -Xlint:unused -Ywarn-unused is intuitive
- [#5848](https://github.com/scala/scala/pull/5848) add per-phase profiling to scalac

For more information, check out [all closed bugs](https://github.com/scala/bug/issues?q=is%3Aclosed%20milestone%3A2.12.3) and [merged PRs](https://github.com/scala/scala/pulls?q=is%3Amerged%20milestone%3A2.12.3).

As usual for minor releases, Scala 2.12.3 is binary compatible with the whole Scala 2.12 series.

## Contributors

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, spreading kindness in discussions around Scala, and submitting and reviewing pull requests! You are all magnificent.

This release was brought to you by 49 contributors, according to `git shortlog -sn --no-merges v2.12.2..v2.12.3`. Thank you, Jason Zaugg, Lukas Rytz, Som Snytt, Dale Wijnand, Janek Bogucki, Adriaan Moors, Seth Tisue, Earl St Sauver, Eugene Yokota, Mike Skells, Miles Sabin, Iulian Dragos, 杨博 (Yang Bo), Cody Allen, Harrison Houghton, Jasper Moeys, xuwei-k, Ganesh Prasad Kumble, Rory Graves, Rui Gonçalves, Sayyed, Atiq (Agoda), BrianLondon, Arnout Engelen, chengpohi, joymufeng, kenji yoshida, Adrien Suree, Edmund Noble!

## Scala 2.12 Notes

The [release notes for Scala 2.12.0](https://github.com/scala/scala/releases/v2.12.0) have important information applicable to the whole 2.12 series.

## Obtaining Scala

Scala releases are available through a variety of channels, including (but not limited to):

* Bump the `scalaVersion` setting in your sbt-based project
* Download a distribution from [scala-lang.org](http://scala-lang.org/download/2.12.3.html)
* Obtain JARs via [Maven Central](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.12.3%22)
