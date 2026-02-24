---
category: release
permalink: /news/3.8.2/
title: "Scala 3.8.2 is now available!"
by: Wojciech Mazur, VirtusLab
---
# Scala 3.8.2 is now available!

## Release highlights

### Warning for `for` with many `val`s and overloaded `map` ([#25090](https://github.com/scala/scala3/pull/25090))

Scala 3.8’s **betterFors** (available since 3.7 under `-preview`) changes for-comprehension desugaring and removes an intermediate `map` used for consecutive `val` bindings.

The following code snippet behaves differently at runtime depending on Scala version used for compilation. In Scala 3.7.x and earlier it produces `List((43,29), (43,30), (43,31))`, but starting with 3.8 it results in `Map(43 -> 31)`.

```scala
def f(x: Int): (Int, Int) = (1, x)

val result: Iterable[(Int, Int)] =
  for // warning: For comprehension with multiple val assignments may change result type
    (k, v) <- Map(1 -> 1, 2 -> 1, 3 -> 1)
    x      = k + v
    (a, b) = f(x)
    (y, z) <- Map(42 -> 27)
  yield (a + y, b + z)
```

- **Before (3.7):** A synthetic tuple-producing `map` was inserted; that step could make `Map` select a generic `map` overload and become an `Iterable` (e.g. `List`)
- **In 3.8:** That synthetic step is removed, so the conversion no longer happens and a different `map`/`flatMap` path can be selected.

The previous runtime behaviour can be achieved by explicitly converting first `Map` to `Iterable` type or by compilation with `-source:3.7` settings.

The new warning highlights code where this migration risk exists.

## Notable changes

- Support `:dep ...` to add library dependencies in the Scala REPL [#24131](https://github.com/scala/scala3/pull/24131)

- Upgrade to Scala.js 1.20.2 [#24898](https://github.com/scala/scala3/pull/24898)

- Bump Scala CLI to v1.12.2 (was v1.11.0) [#25217](https://github.com/scala/scala3/pull/25217):
  New aliases for RC and nightly Scala versions.
  See the Scala CLI release notes for additional details:
  [v1.12.0](https://github.com/VirtusLab/scala-cli/releases/tag/v1.12.0),
  [v1.12.1](https://github.com/VirtusLab/scala-cli/releases/tag/v1.12.1) and
  [v1.12.2](https://github.com/VirtusLab/scala-cli/releases/tag/v1.12.2)

For the complete list of changes and contributor credits, see the [release notes on GitHub](https://github.com/scala/scala3/releases/tag/3.8.2).
