---
category: release
permalink: /news/3.3.9/
title: "Scala 3.3.9 LTS is now available!"
by: Tomasz Godzik, VirtusLab
---

Scala 3.3.9 LTS is now available!

This patch release backports most of the bugfixes and some of the improvements
introduced in Scala 3.9.0. All of the backported changes were proven to not
break either binary or source compatibility, by testing over 1500 projects in
the
[Scala 3 Open Community Build](https://github.com/VirtusLab/community-build3).

# Notable changes

- Stop using custom fonts for Scaladoc, to reduce doc jar size
  [#26393](https://github.com/scala/scala3/pull/26393)
- Improve Java generic signatures for higher-kinded types, value classes
  [#25540](https://github.com/scala/scala3/pull/25540)
  [#25744](https://github.com/scala/scala3/pull/25744)
  [#25631](https://github.com/scala/scala3/pull/25631)
- Exhaustiveness checking for sealed abstract Java classes
  [#25788](https://github.com/scala/scala3/pull/25788)
- Actionable diagnostic for missing members
  [#23572](https://github.com/scala/scala3/pull/23572)
- Warn on dubious negative literal syntax (`- 42`, `-42.abs`)
  [#24163](https://github.com/scala/scala3/pull/24163)
- Scaladoc no longer crashes with an NPE on JDK 25
  [#25779](https://github.com/scala/scala3/pull/25779)

For a full list of changes and contributor credits, please refer to the
[release notes](https://github.com/scala/scala3/releases/tag/3.3.9).

## Scala LTS Release Notice

The next planned LTS 3.3 release will include updates introduced until last
Scala 3.10.x before 3.11. We'll continue to backport eligible bug fixes and
improvements from the Scala Next series. Because the next LTS 3.9.0 has now been
released, we will continue to support the 3.3.x series for the next year.

| Scala 3.x |    End of service |
| --------: | ----------------: |
|     3.3.x |          2027 Sep |
|     3.9.x | 2029 Sep or later |
|    3.10.x |      Until 3.11.x |
