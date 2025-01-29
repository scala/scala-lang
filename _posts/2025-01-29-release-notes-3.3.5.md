---
category: announcement
permalink: /news/3.3.5/
title: "Scala 3.3.5 LTS is now available!"
---
Scala 3.3.5 LTS is now available!

This patch release backports most of the improvements and bugfixes introduced in the Scala Next series up to the Scala 3.5.2 release.
All of the backported changes were proven to not break either binary or source compatibility, by testing over 1500 projects in the [Scala 3 Open Community Build](https://github.com/VirtusLab/community-build3).

# Breaking changes

- Aligned `-Wconf` parsing order with Scala 2 semantics: `-Wconf:x,y` now means `-Wconf:x -Wconf:y`, with y overruling x, rather than the reverse to align with Scala 3.4+ and with user intuition [#21985](https://github.com/scala/scala3/pull/21985)

# Notable changes

- Scala 2 Standard Library upgraded to 2.13.15
- Support for JDK 23
- Added the `-Wall` option that enables all linting warnings

For a full list of changes and contributor credits, please refer to the [release notes](https://github.com/scala/scala3/releases/tag/3.3.5).

## Scala LTS Release Notice

The Scala LTS series introduces a delay before backporting non-critical changes from the latest Scala Next stable releases. This delay helps minimize the risk of regressions that may be uncovered during testing.

The next planned LTS release will include updates introduced until Scala 3.6.4, along with support for JDK 24 and the Scala 2.13.16 standard library.

