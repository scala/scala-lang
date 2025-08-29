---
category: release
permalink: /news/3.3.6/
title: "Scala 3.3.7 LTS is now available!"
by: Tomasz Godzik, VirtusLab
---

Scala 3.3.7 LTS is now available!

This patch release backports most of the bugfixes and some of the improvements introduced in the Scala Next series up to the Scala 3.7.3 release.
All of the backported changes were proven to not break either binary or source compatibility, by testing over 1500 projects in the [Scala 3 Open Community Build](https://github.com/VirtusLab/community-build3).

# Notable changes

- Improvement: Warn if interpolator uses toString [#20578](https://github.com/scala/scala3/pull/20578)
- Fix: Unblock Scala 3 on Android [#22632](https://github.com/scala/scala3/pull/22632)
- Feature: Implement :jar (deprecate :require) [#22343](https://github.com/scala/scala3/pull/22343)
- Improvement: For unused warnings, prefix of reference must match import qualifier in selector check [#20894](https://github.com/scala/scala3/pull/20894)
- Improvement: Add REPL flag to quit after evaluating init script [#22636](https://github.com/scala/scala3/pull/22636)
- Improvement: Warn if implicit default shadows given [#23559](https://github.com/scala/scala3/pull/23559)

For a full list of changes and contributor credits, please refer to the [release notes](https://github.com/scala/scala3/releases/tag/3.3.7).

## Scala LTS Release Notice

The next planned LTS release will include updates introduced until Scala 3.8.2.
