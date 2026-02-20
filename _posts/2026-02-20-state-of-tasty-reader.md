---
category: blog
permalink: /blog/state-of-tasty-reader.html
title: "State of the TASTy reader and Scala 2.13 ↔ Scala 3 compatibility"
by: Wojciech Mazur, VirtusLab
---

With the release of [Scala 3.8](https://scala-lang.org/news/3.8/), Scala 2.13 and Scala 3 interoperability is no longer bidirectional.

Every **Scala 3 version supports consuming Scala 2.13** artifacts. There are no reasons or plans to change that state.

The **Scala 2.13 TASTy reader** (`-Ytasty-reader`) remains useful for migrations and consuming Scala 3 artifacts, but it **will never be able to consume Scala 3.8** and later artifacts. 
Scala 3.7 is the last minor version whose artifacts will remain consumable from Scala 2.

This post summarizes the current state, the compatibility boundaries, and the recommended publishing strategy for teams that still need Scala 2.13 to consume Scala 3 libraries.

## What is the TASTy reader?

[TASTy](https://docs.scala-lang.org/scala3/guides/tasty-overview.html) (Typed Abstract Syntax Trees) is the high-level interchange format used by Scala 3.
Every Scala 3 compilation produces `.tasty` files alongside `.class` files.
While `.class` files lose type information due to JVM type erasure (e.g. `List[String]` becomes `List[Object]`), TASTy files preserve the complete type information — generic types, union types, intersection types, and more.

The **TASTy reader** is a feature built into the Scala 2.13 compiler, enabled with the `-Ytasty-reader` flag.
It allows a Scala 2.13 project to depend on libraries only published for Scala 3, by reading their `.tasty` files to reconstruct the precise type signatures that `.class` files alone cannot convey.

The TASTy reader was designed as a **migration aid** — not a permanent compatibility layer.
It addressed a critical chicken-and-egg problem during the Scala 3 ecosystem bootstrap: library authors wanted to publish for Scala 3 but couldn't abandon Scala 2.13 users, while application developers on Scala 2.13 couldn't migrate until their dependencies were available.
The TASTy reader broke this deadlock by enabling a [forward-compatibility](https://www.scala-lang.org/blog/2020/11/19/scala-3-forward-compat.html#forward-compatibility) path, allowing Scala 2.13 projects to consume Scala 3-only libraries directly.


## Technical limitations of the Scala 2 TASTy reader

Even though both Scala 2 and Scala 3 share most of the language features, some features of each cannot be used by the other.
As an example, macros or existential types produced by Scala 2 cannot be represented or consumed by Scala 3.

The Scala 2 TASTy reader is able to consume the Scala 3 TASTy format, but is not able to correctly represent an increasing amount of language features in a semantically correct way. Some of the unsupported features include:
- `inline` (including Scala 3 macros)
- Union types
- Match types
- Context functions
- Polymorphic function types
- Trait parameters

The classpath compatibility guide documents which Scala 3 features are or are not representable for Scala 2 consumption:
[Scala 3 migration guide - classpath compatibility](https://docs.scala-lang.org/scala3/guides/migration/compatibility-classpath.html).

## What changed in Scala 3.8

Scala 3.8 introduced a major ecosystem change by publishing `scala-library` artifacts compiled using Scala 3, instead of reusing the Scala 2.13 standard library. As a result, it introduced a major new dependency that needs to be covered by the TASTy reader when consuming from Scala 2.

What's more, Scala 3 contained a mechanism to patch parts of the Standard Library to improve its performance, with its `scala3-library_3` replacements. One such example is [`scala.Predef.assert`](https://github.com/scala/scala3/blob/3.8.1/library/src/scala/Predef.scala#L314-L333), defined as a normal method in Scala 2 but replaced with a `transparent inline` variant in Scala 3. Inlines are one of the features that Scala 2 cannot support.
Starting with Scala 3.8, this mechanism was removed and replaced with direct standard library modifications after ensuring both source and binary backward compatibility.

The standard library of Scala 3 is now compiled with enabled support for explicit-nulls and capture-checking. Unless explicitly enabled, this change is not visible to users. However, at the TASTy level, each of these introduces additional features that cannot be represented in a Scala 2 compatible way: union types and capture checking.

As a result, the old "Scala 2.13 ↔ Scala 3 sandwich" is no longer bidirectional at the classpath level.

## Compile Classpath incompatibilities

Both Scala 2 and Scala 3 make strict assumptions about what's available on the classpath and assume usage of `scala-library` artifacts matching **exactly** the version of `scala-compiler`. This is required for correct emission of references to members of the Scala Standard Library.
Usage of an incompatible version can lead to severe problems resulting in compilation crashes. On the Scala 2 side, it can trigger bytecode optimizer failures, as described in the [Scala 3.8.0 post-mortem](https://scala-lang.org/blog/post-mortem-3.8.0.html). On the Scala 3 side, it can lead to [references to members not yet introduced](https://github.com/scala/scala3/issues/22890) or already removed from the actively developed standard library.
This requirement can easily be violated due to eviction rules of third-party dependencies and transitive dependencies on different versions of the Standard Library.

Eviction of the Standard Library can also affect build tools. As an example, `sbt` has always ensured the use of matching versions of `scala-compiler`, `scala-library`, and `scala-reflect` to ensure their compatibility. Their perspective was recently documented in the sbt 1.12.3 release notes ["Smørrebrød - the end of Scala 2.13-3.x sandwich"](https://eed3si9n.com/sbt-1.12.3#sm%C3%B8rrebr%C3%B8d---the-end-of-scala-213-3x-sandwich).
In that scenario, a Scala 2.13 project can pull in `scala-library:3.8.x` through `for2_13Use3`, while sbt still needs aligned Scala 2 compiler artifacts for the 2.13 side.
That leads resolution to attempt `org.scala-lang:scala-reflect:3.8.x` (and `scala-compiler:3.8.x`), but these artifacts do not exist.
The result is the well-known sbt update error: `Error downloading org.scala-lang:scala-reflect:3.8.x`.

## Hard compatibility guarantee

**Scala 3 consuming Scala 2.13 artifacts will remain supported for the foreseeable future.**

That direction of compatibility is a hard requirement and remains part of the Scala 3 migration model.
The no-longer-supported direction is specifically Scala 2.13 consuming Scala 3.8+ artifacts through the TASTy reader.

## Stable TASTy reader compatibility (Scala 2.13.6+)

The table below starts at Scala 2.13.6 and covers stable, non-experimental TASTy support milestones.

| Scala 2.13 release | Scala 3 minor version supported via `-Ytasty-reader` |
|---|---|
| 2.13.6 | 3.0 |
| 2.13.7 | 3.1 |
| 2.13.9 | 3.2 |
| 2.13.11 | 3.3 |
| 2.13.13 | 3.4 |
| 2.13.15 | 3.5 |
| 2.13.16 | 3.6 |
| 2.13.17 | 3.7 |

Each Scala 2.13 release can consume artifacts from all Scala 3 versions up to and including the one listed in its row. For example, Scala 2.13.17 can consume artifacts published with Scala 3.0 through 3.7, but not forward-incompatible 3.8 or later. Intermediate Scala 2.13 releases between these milestones follow the most recent support level above.

## Recommendations

### For Scala 2.13 users

1. Keep TASTy-reader-based dependencies on versions published using Scala 3.7 or below.
2. Prefer dependencies published on Scala 3.3 LTS when available.
3. Plan migration of remaining Scala 2.13 modules to Scala 3 to remove reliance on the TASTy compatibility layer.

### For Scala 3 library authors supporting Scala 2.13 users

We recommend cross-compilation of libraries for Scala 2.13 and Scala 3 so that each series can be natively consumed.

However, if that's not possible we recommend for library authors:
1. Publish Scala 3 artifacts on **Scala 3.3 LTS** for that compatibility path.
2. Scala 3.3 LTS will remain actively supported until at least Q2 2027 (at least one year after Scala 3.9 LTS is released), making it the safest choice for the transition period.
3. Prefer publishing library using Scala 3.3 LTS - Scala 3.7 is not expected to receive further releases. Use Scala 3 Next series only if access to their features features is necessary.
4. Plan and communicate potential dropping of Scala 2.13 support with the users, before migrating to Scala 3.9 LTS.

## Summary

The TASTy reader remains a migration bridge for Scala 2.13 with Scala 3.0 to 3.7 artifacts.
That bridge does not extend to Scala 3.8+ artifacts.

At the same time, one direction is unchanged and guaranteed:
**Scala 3 consuming Scala 2.13 artifacts is always supported.**

For mixed ecosystems that still need Scala 2.13 consumers, Scala 3.3 LTS is the recommended publishing baseline, with newer lines used only when post-3.3 features are required.
