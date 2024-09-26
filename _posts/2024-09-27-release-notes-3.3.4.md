---
category: announcement
permalink: /news/3.3.4
title: "Scala 3.3.4 is now available!"
---
Scala 3.3.4 LTS is now available!

This release of Scala 3 focuses on increasing stability, improving tooling support, and fine-tuning the language to handle modern use cases efficiently. 
It contains most of the improvements introduced in the Scala Next series up to the Scala 3.5.1 release. 
All of the backported changes were proven to not break either binary or source compatibility, by testing the compilation of over 1500 projects using [Scala 3 Open Community Build](https://github.com/VirtusLab/community-build3).

For a full list of changes and contributor credits, please refer to the [release notes](https://github.com/scala/scala3/releases/tag/3.3.4).

## Notable changes

- Improved errors when using newer, incompatible version of JVM bytecode in project dependencies
- Upgrade Scala 2 library to 2.13.14
- Support for JDK 22
- Support JEP-409 (sealed classes) in mixed Java/Scala codebases. 
- Support for `@deprecatedInheritance`
- Support for progress tracking and interface for cooperative interruption of compilation (e.g. cancellation from within an editor). Metals IDE users will notice that compilation progress is no longer frozen at 0% when using sbt or bloop as the BSP server. IntelliJ will also correctly report progress for BSP and sbt based projects 
- Support for coverage filter options under `-coverage-exclude-packages` and `-coverage-exclude-files`
- Support parallel JVM backend under `-Ybackend-parallelism:N`
- Warnings for definitions of anonymous classes in inlined methods - each usage of such methods would create a new anonymous class leading to an increased number of generated class files and possibly increased JVM meta-space pressure. Methods defining anonymous classes would yield a warning
- Warnings for extension receivers already having a defined non-private member of the same name and a subsuming signature
- Warnings when a private field or class parameter shadows a superclass field under `-Xlint:private-shadow`
- Warnings type parameter shadows a type already defined in the scope under `-Xlint:type-parameter-shadow`
- Improved generation of source positions for synthetic Unit expressions - these were previously leading to incorrect behaviour of JVM debuggers

## Known Issues

Scala 3.3.4 corrects generic signatures emitted in the JVM bytecode for value classes and aligns it with Scala 2.13 semantics.
The previously generated signatures for value classes were invalid - they contained underlying value class type instead of boxed type. This change would lead to MiMa errors when signature checks are enabled and could lead to issues when referring to value class methods using reflection API. It would not affect the normal usage of value classes in Scala code compiled with the previous version of the compiler.
