---
category: release
permalink: /news/3.7.1/
title: "Scala 3.7.1 is now available!"
by: Wojciech Mazur, VirtusLab
---
Scala 3.7.1 is now available!

The first patch release of Scala 3.7 series introduces multiple bug-fixes, reduces the amount of false-positives in linters and adds support for a new version of the JDK.

# Highlights of the release

- Support for JDK 25 [#23004](https://github.com/scala/scala3/pull/23004)
- Warn if interpolator uses `toString` [#20578](https://github.com/scala/scala3/pull/20578)
- Warn if match in block is not used for `PartialFunction` [#23002](https://github.com/scala/scala3/pull/23002)
- Scala runner now uses Scala CLI 1.8.0 see [the changelog](https://github.com/VirtusLab/scala-cli/releases/tag/v1.8.0) for details

For a full list of changes and contributor credits, please refer to the [release notes](https://github.com/scala/scala3/releases/tag/3.7.1).
