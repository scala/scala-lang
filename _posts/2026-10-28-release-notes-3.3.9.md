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


---


## Credits

This release was made possible by the joint work of [EPFL](https://www.epfl.ch/), [VirtusLab](https://virtuslab.com/expertise/scala) and the [Scala Center](https://scala.epfl.ch/), together with the wider Scala community. Thank you to everyone who contributed.

<p style="margin-bottom: 4px; line-height: 0;"><a href="https://virtuslab.com/expertise/scala"><img src="{{ site.baseurl }}/resources/img/orgs/virtuslab-logo.png" alt="VirtusLab" style="height: 64px; width: auto; margin: 0;"></a></p>

**About VirtusLab**

VirtusLab is a software engineering company and a long-term core contributor to the Scala ecosystem. Its engineers help maintain the Scala 2 and Scala 3 compilers, manage their releases, and build key tools including Scala CLI, the Metals language server and the Open Community Build. Learn more at [virtuslab.com/expertise/scala](https://virtuslab.com/expertise/scala).

<p style="margin-top: 10px; margin-bottom: 4px; line-height: 0;"><a href="https://www.epfl.ch/"><img src="{{ site.baseurl }}/resources/img/epfl-logo.svg" alt="EPFL" style="height: 48px; width: auto; margin: 0 2.5em 0 0; vertical-align: middle;"></a><a href="https://scala.epfl.ch/"><img src="{{ site.baseurl }}/resources/img/orgs/scala-center-logo.png" alt="Scala Center" style="height: 48px; width: auto; margin: 0; vertical-align: middle;"></a></p>

**About EPFL and the Scala Center**

Scala was created at EPFL in Lausanne, Switzerland, by Martin Odersky's research group. EPFL still leads much of the language's design and compiler research. The Scala Center, a not-for-profit centre at EPFL, supports Scala's open-source ecosystem, tooling and education. Learn more at [scala.epfl.ch](https://scala.epfl.ch).
