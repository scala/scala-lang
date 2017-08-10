---
post-type: announcement
permalink: /news/2.12.3
title: "Scala 2.12.3 is now available!"
---
[Scala 2.12.3](https://github.com/scala/scala/releases/tag/v2.12.3) is now available.

Compiler performance has [improved significantly](http://developer.lightbend.com/blog/2017-06-12-faster-scala-compiler/) and is now [automatically benchmarked](https://scala-ci.typesafe.com/grafana/) after each change.

A new [optimizer setting](https://github.com/scala/scala/pull/5964) `-opt-inline-from` limits the classes from which the inliner will copy code. `scalac -opt-inline-from:help` provides [detailed help](https://gist.github.com/retronym/29932ea76712ff374d1363c9eda6eabe).

The presentation compiler has [improved support for implicit macros](https://github.com/scala/scala/pull/5929), which should improve the experience with libraries based on Shapeless. It also has [better support](https://github.com/scala/scala/pull/5927) for code completion for dependently typed methods.

For all the details, refer to the [release notes](https://github.com/scala/scala/releases/tag/v2.12.3) on GitHub.
