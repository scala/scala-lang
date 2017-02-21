---
layout: blog
post-type: blog
by: Julien Richard-Foy
title: Redesign of Scala 2.13’s collections
---

Following the [SCP-007](https://github.com/scalacenter/advisoryboard/blob/master/proposals/007-collections.md) proposal of the Scala Center advisory board, Martin Odersky, Stefan
Zeiger, Rex Kerr and I started working on a new standard collections design for
Scala 2.13. Since our design begins to stabilize we think it is time to share more
information about it with the community. You can follow our progress in
[this Github repository](https://github.com/scala/collection-strawman).

## Context and goals

The current Scala collections have been introduced with Scala 2.8. They have been quite
successful but they also came under fire for a few reasons:

- Complex code base (common collections like `List` have a huge list of super classes) ;
- Too much inheritance between mutable and immutable collections making the code base
  fragile and the user facing API confusing ;
- Lazy collections (e.g. `Stream` or views) could accidentally be evaluated.

The goal of the redesign is to address these issues while minimizing the migration
effort from Scala 2.12’s collections and still keeping most of their features.

## Main challenges and design decisions

This section describes some major design decisions we have taken.

### Simplified class hierarchy

Our goal was to simplify the inheritance graph while keeping a familiar
type hierarchy. `Iterable` is still the
base type of all the collections and is specialized by
“kinds” of collections like `Seq`, `Set` and `Map`. These kinds of
collections are then specialized further by concrete implementations
such as `List`, `HashSet` and `HashMap`.

One reason to keep these
inheritance relationships is that it makes interoperability easier between
distinct collection implementations, including third-party implementations.

Our simplified inheritance graph still uses several intermediate
traits, though. In addition to
traits defining common operations inherited by concrete collections, each
collection kind is defined by two traits. For instance the `Map` collection
kind is defined by the traits `Map` and `MapLike`. The former, `Map`, is
intended to be used by end-users, while the latter, `MapLike` is useful for
collection implementers (it is notably used to fix the return type of
transformation methods to the concrete collection type — e.g. `HashMap` —
instead of the generic `Map` type).

As a result, we removed `Traversable` and `Gen`-prefixed classes of from
the hierarchy. Furthermore, mutable collections do not anymore inherit from
immutable operations that prepend or append elements by returning a modified
copy of the collection.

### Explicit `View` type

Views have been reified into a `View[A]` type. All transformation operations
(`take`, `drop`, `filter`, `map`, `flatMap`, etc.) performed on views
are lazy. Evaluating a `View` is explicitly performed when calling
a terminal operation (e.g. `foldLeft`) or converting it into another
collection type (e.g. `xs.to(List)`).

### Simpler type signature of common methods (no more `CanBuildFrom`)

The type signature of methods transforming a collection to another
collection with a different type of elements are no longer cluttered
with an additional `CanBuildFrom` implicit parameter.

The definition of `map` for a collection type `C[A]` is simply:

~~~ scala
def map[B](f: A => B): C[B]
~~~

That being said, `CanBuildFrom` was an interesting solution to
the two following problems:

- Ordered collections need to be passed the `Ordering[B]` instance of
  the the elements of the target collection to build ;
- The `Map[K, V]` collection type takes two type parameters and is therefore
  incompatible with the generic `C[_]` shape shown above.

We tried [several](https://github.com/scala/collection-strawman/pull/23)
[alternative](https://github.com/scala/collection-strawman/compare/poly-transforms#diff-e325090939d0c05b24284230016c77e7R286)
designs but finally settled on a solution based on overloading: `Map[K, V]` inherits
from the `map` method of `Iterable` but also defines an additional `map` method like
so:

~~~ scala
def map[K2, V2](f: ((K, V)) => (K2, V2)): Map[K2, V2]
~~~

At use site, calling `map` with an effective function `f` returning a tuple
resolves to the overload returning a `Map`, otherwise it fallbacks to the
inherited version that returns an `Iterable`.

### `scala.Seq` will be immutable

The default `scala.Seq` type alias will refer to the `scala.collection.immutable.Seq`
type, for consistency with other default collections (e.g. `scala.Map` and `scala.Set`).

### In place transformations for mutable collections

Finally, we also enriched mutable collections with useful transformation
methods that update the collection in place instead of returning a modified
collection. These methods are suffixed with `InPlace`:

~~~ scala
val xs = ArrayBuffer(1, 2, 3)
xs
  .filterInPlace(_ % 2 == 0)
  .mapInPlace(_ * 2)
println(xs) // ArrayBuffer(4)
~~~

## How to use them?

The current implementation targets Scala 2.12. We publish snapshots on Sonatype
and plan to publish a 0.1 version soon.

Add the following to your build:

~~~ scala
scalaVersion := "2.12.1"

resolvers += Resolver.sonatypeRepo("snapshots")

libraryDependencies += "ch.epfl.scala" %% "collection-strawman" % "0.1-SNAPSHOT"
~~~

The collection classes live in the `strawman.collection` package:

~~~ scala
import strawman.collection.immutable.List

List(1, 2, 3).map(x => x + 1)
~~~

We consider the current design to be rather stable and would
love to get your feedback on it. Feel free to drop a message
on the [gitter channel](https://gitter.im/scala/collection-strawman)
or to post issues in the [Github repository](https://github.com/scala/collection-strawman)!

