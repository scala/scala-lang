---
layout: blog
post-type: blog
by: Julien Richard-Foy
title: Redesigned collections v0.2.0
---

We are happy to announce the
[0.2.0 release](https://index.scala-lang.org/scala/collection-strawman/collection-strawman/0.2.0)
of the collection strawman!

The collection strawman aims to be a replacement of the existing collections for the
Scala 2.13 standard library. Essentially, the goal is to make the API simpler, the
implementation more maintainable and to have better lazy collections. You can read more
about this effort in
[this blog post](http://www.scala-lang.org/blog/2017/02/28/collections-rework.html).

## Current status

The goal of this milestone is to be feature compatible with the current collections
for the most common use cases.

The following collection types are implemented:

- `List` and `ListBuffer`,
- `Vector` and `ArrayBuffer`,
- `Range` and `NumericRange`,
- `LazyList` (equivalent to the existing `Stream`),
- mutable and immutable `HashSet` and `BitSet`,
- mutable and immutable `HashMap`,
- mutable and immutable `TreeSet` and `TreeMap`.

Also, most of the operations of the current `Traversable`, `Iterable`, `Seq`
and `Set` collection types are implemented in the strawman.

For reference, a detailed list of the current implementation status is available
[here](https://github.com/scala/collection-strawman#implemented-collection-types).

To experiment with this milestone, just add the following dependency:

~~~ scala
"ch.epfl.scala" %% "collection-strawman" % "0.2.0"
~~~

The collection strawman is compatible with Scala 2.13 and Dotty (Scala 2.12 is
also supported though you might encounter type inference issues with it).

Since these collections have to coexist with the actual standard collections, they live in
a separate package, `strawman.collection` (instead of `scala.collection`):

~~~ scala
import strawman.collection.immutable.List

println(List(1, 2, 3).map(x => x + 1))
~~~

In order to make this release a real “drop-in” replacement of the current collections,
we are working on a
[rewrite tool](https://github.com/scala/collection-strawman/compare/master...olafurpg:scalafix)
(available soon) that takes care of changing the imports of an existing project to use
the `strawman` namespace. This tool should automate most of the adaptation work by
unimporting the existing collections and importing the strawman instead, by
renaming collection types that have changed (e.g. `Stream` into `LazyList`), and by
adapting some constructs that are not yet supported in the strawman (e.g. `0 until 10`
has to be written `Range(0, 10)`).

## Next steps

We encourage you to give a try to the new collections and to
[report](https://github.com/scala/collection-strawman/issues) any issue you encounter.
We expect common usage to still work with the strawman with no or little modifications
on your code.

Because the internal implementation is different from the existing collections, you
might get some surprises in advanced use cases: for instance, now the `view` method
returns a `View[A]` type ; there is no `CanBuildFrom`. We will explain these
(yet undocumented) changes in future posts.

From now on, we will cut new releases every month. The goals of the
[next release](https://github.com/scala/collection-strawman/milestone/2) are to
implement a little bit more operations, to polish some internal implementation details,
and to integrate a stronger test suite.
