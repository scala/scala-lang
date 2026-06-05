---
category: release
permalink: /news/3.8.4/
title: "Scala 3.8.4 is now available!"
by: Wojciech Mazur, VirtusLab
---

## Release highlights

### Security audit fixes

Scala 3.8.4 includes improvements and fixes for issues discovered during the [Scala codebase security audit](https://scala-lang.org/blog/2026/06/01/first-part-security-audit.html) carried out in collaboration with the Open Source Technology Improvement Fund and Quarkslab. Notable fixes in this release include:

- Hardened TASTy parsing to prevent infinite loops on maliciously crafted files ([#25676](https://github.com/scala/scala3/pull/25676))
- Fixed a stored XSS vulnerability in Scaladoc ([#25681](https://github.com/scala/scala3/pull/25681))
- Improved error handling in `scala.sys.process.Parser.tokenize` ([#25675](https://github.com/scala/scala3/pull/25675))
- Fixed TastyPrinter's JAR-walking logic to include subdirectories ([#25678](https://github.com/scala/scala3/pull/25678))

### `:help` syntax for all compiler settings ([#26052](https://github.com/scala/scala3/pull/26052))

You can now use `:help` in the REPL and other contexts to get documentation for any compiler setting, not just a fixed subset. This makes it easier to discover and understand available options without leaving your workflow.

### Upgrade to Scala CLI 1.14.0

The bundled Scala CLI has been upgraded from 1.11.x through 1.12.5, 1.13.0, to **1.14.0**. Notable additions across these versions include:

- **v1.12.5:** experimental `--cross` support for `run`, `package`, and `doc`; global `--offline` config key; experimental local `.m2` in `publish local`
- **v1.13.0:** Scala.js 1.21.0 support; Ammonite REPL deprecated and scheduled for removal; `java-test-runner` for pure Java tests; GraalVM native-image packaging via `packaging.graalvmJvmId` and `packaging.graalvmArgs`
- **v1.14.0:** support for `.test.java` files; a toggle to turn auto-IDE-setup off

See the [Scala CLI release notes](https://github.com/VirtusLab/scala-cli/releases/tag/v1.14.0) for full details.

---

For the complete list of changes and contributor credits, see the [release notes on GitHub](https://github.com/scala/scala3/releases/tag/3.8.4).
