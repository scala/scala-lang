---
layout: blog
post-type: blog
by: Julien Richard-Foy
title: Redesigned collections v0.2.0
---

We are happy to announce the
[0.2.0 release](https://index.scala-lang.org/scala/collection-strawman/collection-strawman/0.2.0)
of the redesigned collections!

You can read more about our effort to redesign the standard collections in this previous
[blog post](http://www.scala-lang.org/blog/2017/02/28/collections-rework.html).

## Current status

The goal of this release is to provide a drop-in replacement of the current collections
for most use cases: the main collection types (`Seq`, `Set` and `Map`, mutable or
immutable, sorted or not sorted) are implemented
and support the most common operations. You can see a detailed list of the current
implementation status
[here](https://github.com/scala/collection-strawman#implemented-collection-types).

To use it in your project, add the following dependency:

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
the `strawman` namespace. That should automate most of the adaptation work.

## Next steps

From a user point of view, little should have changed, even though internally, lots
have changed (we will write more about that in a future post)! Consequently,
we encourage you to give a try to the new collections and to
[report](https://github.com/scala/collection-strawman/issues) any issue you encounter.

From now on, we will cut new releases every month. The goals of the
[next release](https://github.com/scala/collection-strawman/milestone/2) are to
implement a little bit more operations, to polish some internal implementation details,
and to integrate a stronger test suite.
