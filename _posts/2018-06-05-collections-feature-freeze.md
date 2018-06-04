---
category: blog
by: Stefan Zeiger
title: Scala 2.13 Collections Feature Freeze
---

[Scala 2.13.0-M4](https://www.scala-lang.org/news/2.13.0-M4) was released two weeks ago and we are now heading towards the final milestone before RC1. The planned release date for [Scala 2.13.0-M5](https://github.com/scala/scala/milestone/74) is August 10. This constitutes the general feature freeze for the 2.13 compiler and library.

For the collections library in particular the feature freeze will already happen on June 22 (after Scala Days New York). Collections were [redesigned from scratch](https://www.scala-lang.org/blog/2017/02/28/collections-rework.html) for 2.13, therefore we are allocating more time for bug fixes and improved backwards compatibility after the feature freeze. 

The most important goals now are reaching stability and feature parity with the 2.12 library (except where we deliberately drop features). Changes to restore missing features from 2.12 will still be accepted but new features (like additional collection types or convenience methods) will not. Even before the deadline we take a conservative approach to new methods and collection types in order to avoid scope creep.

Both at compile time and run time the new collections are supposed to be at least as fast as the old ones, hopefully faster. Our preliminary benchmarks indicate that this is generally the case. We will spend more time after the feature freeze on benchmarking additional scenarios and fixing potential performance regressions.

Another area with a lot of ongoing work is documentation, in particular scaladocs and an updated version of the [collections guide](https://docs.scala-lang.org/overviews/collections/introduction.html) for the new collections design.

Note that [binary compatibility](https://docs.scala-lang.org/overviews/core/binary-compatibility-of-scala-releases.html), both backwards and forwards, is required for all official Scala minor releases and also expected for release candidates. Breaking binary compatibility is still possible between M5 and RC1 but new features that miss the feature freeze deadline will have to target Scala 2.14 instead.

Adoption of Scala 2.13.0-M4 so far has been slower than for most milestones because the number of source incompatibilities is higher than usual. We hope that an early feature freeze and further compatibility improvements will make it easier for core projects to upgrade to M5 (whether they are already on M4 or not) in order to bootstrap the Scala ecosystem in preparation for the 2.13.0 release.