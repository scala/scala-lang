---

category: announcement
title: "Scala: Next Steps"
permalink: /news/roadmap-next.html
---
As with every living programming language, Scala will continue to evolve. This document describes where the core Scala team sees the language going in the medium term and where we plan to invest our efforts.

In a nutshell, our main goals are to make the language and its libraries simpler to understand, more robust, and better performing. The features described in this document span the next three major releases of the Scala distribution. Naturally, the planning for later releases is more tentative and fluid than for earlier ones.

## Scala 2.12

Scala 2.12’s main theme is Java 8 interoperability. It will support Java 8 lambdas and streams and will allow easy cross calls with these features in both directions. We recently published a [detailed feature list and roadmap](https://www.scala-lang.org/news/2.12-roadmap) for this release.

We have not yet decided on version numbers for the releases beyond 2.12, so for the time being we will use opera names as designators.

## Scala "Aida"

This release focuses on improving the standard library.

1. Cleanups and simplification of the collections library: we plan to reduce the size of the collections library, providing some functionality as separate modules.  Generally, we want to make them even easier to use and structure them so that they are more amenable to optimizations. Where needed, breaking changes will be announced using deprecation in Scala 2.12; regular use of the collections will likely be unaffected, but custom collections may need to be adapted to the simplified hierarchy.
   1. Reduce reliance on inheritance
   2. Make all default collections immutable (e.g. `scala.Seq` will be an alias of `scala.immutable.Seq`)
   3. Other small cleanups that are possible with a rewriting step (e.g. rename mapValues)
2. Added functionality: We’d like to introduce several new modules, including a couple of spin-offs from the collections library.
   1. Lazy collections through improved views, including Java 8 streams interop.
   2. Parallel collections with performance improvements obtained from operation fusion and more efficient parallel scheduling.
   3. An integrated abstraction to handle validation.
3. The (independent) [scala.meta](http://scalamacros.org/news/2014/07/16/roadmap-for-scala-macros.html) project aims to establish a new standard for reflection and macro programming. It will be considered for integration in the standard library once it is mature and stable.
4. As in every Scala release, we’ll also work on improving compiler performance. Since this release focuses on the library, compiler changes will be strictly internal.

Backwards compatibility and migration strategy: The changes to collections might require source code to be rewritten, even though this should be rare. However, we aim to maintain source code compatibility modulo an automatic migration tool (analogous to `go fix` for Go) that can do the rewriting automatically. Ideally, that tool should be robust and expressive enough to support cross-building.

Prototypes of the new collection functionality and meta-programming libraries will be made available as separate libraries in the Scala 2.12 timeframe, so that projects can experiment with the new features early.


## Scala "Don Giovanni"

The main focus for this release is the Scala programming language and its compiler. The new version should provide clear improvements in simplicity, usability and stability, while at the same time staying backwards compatible with current usage of the language.

Areas that will be investigated include the following:

1. **Cleaned-up syntax**: The objective is to more clearly expose Scala's principle of having few orthogonally composable features.
  1. Trait parameters instead of early definition syntax
  2. XML string interpolation instead of XML literals
  3. Procedure syntax is dropped in favor of always defining functions with `=`
  4. Simplified and unified type syntax for all forms of information elision: existential types and partial type applications are both expressed with `_`, forSome syntax is eliminated.
2. **Removing puzzlers**: There are some features in Scala which are known to be prone to puzzlers, and which can be made safer by tweaking the language. In particular, the following changes would help:
  1. Result types are mandatory for implicit definitions.
  2. Inherited explicit result types take precedence over locally-inferred ones.
  3. Universal toString conversion and concatenation via `+` should require explicit enabling.
  4. Avoid surprising behavior of auto-tupling.
3. **Simple foundations**: This continues the strive for simplicity on the type systems side. We will identify formerly disparate features as specific instances of a small set of concepts. This will help in understanding the individual features and how they hang together. It will also reduce unwanted feature interactions. In particular:
  1. A single fundamental concept - type members - can give a precise meaning to generics, existential types, wildcards, and higher-kinded types.
  2. Intersection and union types make member selection more regular and avoid blow-ups when computing tight upper and lower bounds of sets of types.
  3. Tuples can be decomposed recursively, overcoming current limits to tuple size, and leading to simpler, streamlined native support for abstractions like `HList`s or `HMap`s which are currently implemented in some form or other in various libraries.
  4. The type system will have theoretical foundations that are given by a minimal core calculus (DOT).
4. **Better tooling**: We will continue to focus on the tooling side, with the goals to improve batch compiler speed and to make the compiler more adapted to fast incremental compilation and IDE presentation support.
5. **Faster code**: We plan to improve performance of generated code using optimizations including:
  1. Robust specialization using Miniboxing techniques, applied to collections (a preview of this may already be available in Aida).
  2. Improvements to value classes: Can be array elements, can play part in specializations, can be multi-field.
  3. Optimized implementation of thread-local lazy vals.

We will collaborate here with the Java effort in project Valhalla, which has similar goals.

## Backwards compatibility
Since some features are superseded by others, some source code will have to be rewritten. However, using the migration tool described earlier, common Scala code should port automatically. In particular, we aim that all features described in the latest edition of "Programming in Scala" can be ported automatically. However, the porting guarantee will not extend to features that are labelled "experimental". For some of these (e.g. macros and reflection), we aim to have a replacement that can fulfill analogous functionality, but using different notation and APIs.

## Resourcing
Currently, having a feature on the list does not mean that we have already committed the resources to work on this. The roadmap is intended as a framework for the development of future Scala versions. We are happy to take contributions that implement parts of it that are lower on our priority list. Before starting work on a feature not listed here, it must first be accepted for inclusion in the roadmap.

