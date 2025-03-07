---
category: announcement
permalink: /news/3.6.4/
title: "Scala 3.6.4 is now available!"
---
Scala 3.6.4 is now available!

# Highlight of the release

- Support for JDK 24 [#22250](https://github.com/scala/scala3/pull/22250)
- REPL `:silent` command to toggle automatic printing of outputs [#22248](https://github.com/scala/scala3/pull/22248)
- REPL `--repl-init-script:` setting to run a code on startup [#22206](https://github.com/scala/scala3/pull/22206)
- Deprecated setting `-Xno-decode-stacktraces` is now an alias to `-Xno-enrich-error-messages` [#22208](https://github.com/scala/scala3/pull/22208)
- Annotation arguments are no longer lifted [#22035](https://github.com/scala/scala3/pull/22035)
- Experimental Capture Checking: Implement tracked members [#21761](https://github.com/scala/scala3/pull/21761)

## Breaking changes

- Align `@implicitNotFound` and `@implicitAmbigous` with the language specification [#22371](https://github.com/scala/scala3/pull/22371)

  This change may impact users who previously used these annotations using variables or string interpolation.
  
  Previously, a bug in the Scala 3 compiler allowed non-literal strings to be passed as arguments to the `@implicitNotFound` and `@implicitAmbiguous` annotations.
  This could have affected how failed implicit search results were reported by the compiler.
  
  Starting from Scala 3.6.4, the arguments for these annotations must be string literals.
  If a message is too long, it can be concatenated using the `+` operator, allowing for constant folding.

For a full list of changes and contributor credits, please refer to the [release notes](https://github.com/scala/scala3/releases/tag/3.6.4).
