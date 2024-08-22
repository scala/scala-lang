---
category: announcement
permalink: /news/3.4.3
title: "Scala 3.4.3 is now available!"
---
Scala 3.4.3 is now available!

The hotfix version 3.4.3 is recommended for library authors who cannot or do not want Scala 3.5 upgrade, but want to keep their forward and backward binary compatibility.

This release reverts changes introduced in Scala 3.4.2 that led to binary incompatibility of match types produced by the compiler. You can read about this issue in [Scala 3 repository](https://github.com/scala/scala3/issues/21258). The new behaviour would be restored in some next major version (probably 3.6) after being well described and probably introducing a warning for the users.

We recommend authors of Scala 3 libraries that use match types in their APIs to set up [TASTy MiMA](https://github.com/scalacenter/tasty-mima) checks as the extension to classic bytecode-based MiMa binary compatibility assertions.

For a full list of changes and contributor credits, please refer to the [release notes](https://github.com/scala/scala3/releases/tag/3.4.3).
