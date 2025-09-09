---
category: release
permalink: /news/3.7.3/
title: "Scala 3.7.3 is now available!"
by: Wojciech Mazur, VirtusLab
---
Scala 3.7.3 is now available!

## Highlights of the release

### Warn when an explicit `using` argument clouse with defaults shadows `given` in the scope [#23559](https://github.com/scala/scala3/pull/23559)

If a call supplies any `using` argument explicitly, `given` search is not performed for the remaining params in that clause. If a remaining param has a default, that default is used, even if a compatible `given` is in scope. This behaviour could have been confusing for users and lead to unexpected problems at runtime. 
The compiler now reports a warning when default argument would be used instead of given defined in the scope.
```scala
def f(using x: X, y: Y = defaultY) = ???
given Y = ???
f(using x = X()) // warns: y = defaultY
```

This change also adds new flag `-Wrecurse-with-default` to emit warning when a method calls itself using a default argument instead of forwarding the current value

### Bump Scala CLI to v1.9.0
  - Supports the new Scala 3 nightly Maven repository,
  - Can be used to test Scala 3.8 nightly releases,
  - See the [Scala CLI changelog](https://github.com/VirtusLab/scala-cli/releases/tag/v1.9.0) for additional details 

### The new Maven repository for Scala 3 nightly releases

  Scala 3 nightly releases are no longer published to Maven Central, these can now be found in dedicated `https://repo.scala-lang.org/artifactory/maven-nightlies` repository.

  sbt 1.11.5 or later users can use a helper function to reference new repository in their builds
  ```scala
  resolvers += Resolver.scalaNightlyRepository
  ```
  


For a full list of changes and contributor credits, please refer to the [release notes](https://github.com/scala/scala3/releases/tag/3.7.3).
