---
category: release
permalink: /news/3.7.2/
title: "Scala 3.7.2 is now available!"
by: Wojciech Mazur, VirtusLab
---
Scala 3.7.2 is now available!

# Highlights of the release

- Bump Scala CLI to v1.8.4 (was v1.8.0) [#23538](https://github.com/scala/scala3/pull/23538)
  - Support for URLs in using file directives
  - Better support for the REPL with JDK 24+
  - Experimental publish support for the Sonatype Central Portal

- Add an `-Yimplicit-to-given` flag for rewrites to easily test changes in the ecosystem [#22580](https://github.com/scala/scala3/pull/22580)<br>
This experimental flag allows to treat usages of `implicit` as `given` without modifing your existing sources. It aims to help with testing out on how migration to new syntax and its resolution rules would effect your code base.

- Implement applied constructor types [#22543](https://github.com/scala/scala3/pull/22543)<br>
It introduces new syntax allowing for easier definition of `tracked` parameters under `-language:experimental.modularity`
<br>You can read more about this experimental feature in the [Modularity Improvements proposal](https://www.scala-lang.org/api/3.7.2/docs/experimental/modularity.html) documentation.

For a full list of changes and contributor credits, please refer to the [release notes](https://github.com/scala/scala3/releases/tag/3.7.2).
