---
category: announcement
permalink: /news/3.3.5
title: "Scala 3.3.5 is now available!"
---
Scala 3.3.5 LTS is now available!

This patch release backports most of the improvements and bugfixes introduced in the Scala Next series up to the Scala 3.5.2 release.
All of the backported changes were proven to not break either binary or source compatibility, by testing the compilation of over 1500 projects using [Scala 3 Open Community Build](https://github.com/VirtusLab/community-build3).

Notable changes:

- Scala 2 Standard Library upgraded to 2.13.15
- Support for JDK 23
- Added the `-Wall` option that enables all linting warnings
- Aligned `-Wconf` parsing order with Scala 2 semantics

For a full list of changes and contributor credits, please refer to the [release notes](https://github.com/scala/scala3/releases/tag/3.3.5).