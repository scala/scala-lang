---
category: release
permalink: /news/3.3.8/
title: "Scala 3.3.8 is now available!"
by: Tomasz Godzik, VirtusLab
---

Scala 3.3.8 LTS is now available!

This patch release backports most of the bugfixes and some of the improvements
introduced in the Scala Next series to the Scala 3.8.4 release. All of the
backported changes were proven to not break either binary or source
compatibility, by testing over 1500 projects in the
[Scala 3 Open Community Build](https://github.com/VirtusLab/community-build3).

# Notable changes

- Support for JDK 26 [#24430](https://github.com/scala/scala3/pull/24430)
- Multiple coverage improvement to make it on par with Scala 2 support including
  `// $COVERAGE-OFF$` and `// $COVERAGE-ON$` markers
- New @uncheckedOverride annotation for definitions that may override.
  [#24545](https://github.com/scala/scala3/pull/24545)
- Trap Ctrl-C in the REPL: if no command is running clear the prompt, if some
  command is running ask for confirmation before exiting.
  [#24127](https://github.com/scala/scala3/pull/24127)
- Numerous linting and presentation compiler improvements and fixes.
- New '-YfutureLazyVals' options that allows to compile with new lazy val
  implementation compatible with all JDK 9+
  [#637](https://github.com/scala/scala3-lts/pull/637)

For a full list of changes and contributor credits, please refer to the
[release notes](https://github.com/scala/scala3/releases/tag/3.3.8).

## Scala LTS Release Notice

The next planned LTS 3.3 release will include updates introduced until last
Scala 3.9.x before 3.10. Scala 3.9.x will also be a new LTS release. We'll
continue to backport bug fixes and improvements from the Scala Next series to
the 3.3.x series for the next year after the release 3.9.0.
