---
category: release
permalink: /news/3.3.6/
title: "Scala 3.3.6 LTS is now available!"
---
Scala 3.3.6 LTS is now available!

This patch release backports most of the bugfixes and some of the improvements introduced in the Scala Next series up to the Scala 3.6.4 release.
All of the backported changes were proven to not break either binary or source compatibility, by testing over 1500 projects in the [Scala 3 Open Community Build](https://github.com/VirtusLab/community-build3).

# Notable changes

- REPL: Add REPL init script setting [#22206](https://github.com/scala/scala3/pull/22206)
- Update asm to patched 9.7.1 # [#22250](https://github.com/scala/scala3/pull/22250)
- REPL: Add back :silent command # [#22248](https://github.com/scala/scala3/pull/22248)
- Do not lift annotation arguments [#22035](https://github.com/scala/scala3/pull/22035) and [#22046](https://github.com/scala/scala3/pull/22046)
- Scala 2 forwardport: -Yprofile-trace [#19897](https://github.com/scala/scala3/pull/19897)


For a full list of changes and contributor credits, please refer to the [release notes](https://github.com/scala/scala3/releases/tag/3.3.6).

## Scala LTS Release Notice

The Scala LTS series introduces a delay before backporting non-critical changes from the latest Scala Next stable releases. This delay helps minimize the risk of regressions that may be uncovered during testing.

The next planned LTS release will include updates introduced until Scala 3.7.2.

