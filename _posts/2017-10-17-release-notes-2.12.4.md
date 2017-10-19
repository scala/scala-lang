---
post-type: announcement
permalink: /news/2.12.4
title: "Scala 2.12.4 is now available!"
---
[Scala 2.12.4](https://github.com/scala/scala/releases/tag/v2.12.4) is now available.

Our [benchmarks](https://scala-ci.typesafe.com/grafana/dashboard/db/scala-benchmark?var-branch=2.12.x&from=1501580691158&to=1507711932006) show a further reduction in compile times since 2.12.3 of 5-10%.

Improved Java 9 friendliness, with more to come!
  - #6097 Fix runtime reflection of empty package members under Java 9
  - #6098 Adapt to change in Java 9 classloader hierarchy

We'd like to highlight a few of the excellent contributions by @hrhino and @TomasMikula, with previews of improvements coming in 2.13 (available now under `-Xsource:2.13`):
  - #5867 Include the parts of a compound/refinement type in implicit scope
  - #6074 Resolve implicit instances for abstract types, according to the spec
  - #6069 Higher-kinded type variable unification

The [full release notes](https://github.com/scala/scala/releases/tag/v2.12.4) are on GitHub.