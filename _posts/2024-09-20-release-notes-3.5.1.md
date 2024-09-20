---
category: announcement
permalink: /news/3.5.1
title: "Scala 3.5.1 is now available!"
---
Scala 3.5.1 is now available!

This release focused mostly on fixes to bugs, however, it also included some DX improvements.
You can now use `-language:help` to see the list of available language features. The compiler would now also reject incorrect values passed to the `-language` setting.
The compiler would now generate better source positions for synthetic `Unit` expressions - these were previously leading to incorrect behaviour of JVM debuggers.

For a full list of changes and contributor credits, please refer to the [release notes](https://github.com/scala/scala3/releases/tag/3.5.1).

## Known Issues

Scala 3.5.1 corrects generic signatures emitted in the JVM bytecode for value classes and aligns it with Scala 2.13 semantics.
The previously generated signatures for value classes were invalid - they contained underlying value class type instead of boxed type. This change would lead to MiMa errors when signature checks are enabled and could lead to issues when trying to refer to value class methods using reflection API. It would not affect the normal usage of value classes in Scala code compiled with the previous version of the compiler.
