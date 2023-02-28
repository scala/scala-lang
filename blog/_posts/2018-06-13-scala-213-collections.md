---
layout: blog-detail
post-type: blog
by: Julien Richard-Foy
title: Scala 2.13’s Collections
---

One more article about the standard collections, really? Indeed, during the last
18 months a lot of work has been done on the collections side and we’ve published
several blog articles and given several talks to explain the various changes or
challenges we were facing. This article summarizes **what is going
to change from an end-user perspective**.

In case you’ve thoroughly followed our previous blog posts and talks, you might
not learn much from this article. Otherwise, this is the perfect opportunity
to catch up on the topic in a few minutes!

The next section presents the changes that are internal to the collections implementation
but that might have some visible impact on the surface. Then, I will show why I think
that the removal of `CanBuildFrom` made the API more beginner friendly. Next, I
will introduce some new operations available in the collections. Finally, I
will mention the main deprecations, the motivations behind them, and their
recommended replacements.

## Under The Hood: A Cleaner Ground

![iceberg](/resources/img/blog/iceberg.jpeg)

The most important change in the new collections framework is that transformation
operations (such as `map` or `filter`) are now implemented in a way that works with both
strict collections (such as `List`) and non-strict collections (such as `Stream`).
This is a change because this was not the case before. Indeed, the previous
implementations were strict (they eagerly evaluated the collection elements) and had
to be overridden by non-strict collection types. You can find more details about that in
[this blog post](/blog/2017/11/28/view-based-collections.html).

The good news is that the new design is more **correct** in the sense that you can
now implement custom non-strict collection types without having to worry about
re-implementing a ton of operations. (Some operations, though, still eagerly evaluate
the collection elements (e.g. `groupBy`) and will be clearly documented.) Another benefit
is that transformation operations defined outside of the collections (like in the
[cvogt/scala-extensions](https://github.com/cvogt/scala-extensions) project)
now work with non-strict collections (such as `View` or `Stream`).

Speaking of non-strict collections, the `View` type has been redesigned and
views should behave in a more predictable way. Also, `Stream` has been
deprecated in favor of `LazyList` (see the last section).

## Life Without `CanBuildFrom`

I think the most visible change for end-users is that transformation operations
don’t use `CanBuildFrom` anymore. I believe this will be quite visible despite our previous
efforts to *hide* `CanBuildFrom` from the API documentation of the collections.
Indeed, if you take a look at the
[old 2.12 `List` API](https://www.scala-lang.org/api/2.12.6/scala/collection/immutable/List.html), the signature
shown for the `map` operation does not mention `CanBuildFrom`:

![there is no CanBuildFrom](/resources/img/blog/scaladoc-list-map.png)

However, if you use this operation in your code, then your IDE reveals its actual signature:

![what is That](/resources/img/blog/ij-list-map.png)

As you can see, the type signature shown in the API documentation has been “simplified”
to make it more approachable, but I believe that this is probably introducing more
confusion to the users. Especially when you look at the
[`TreeMap[A, B]` API](https://www.scala-lang.org/api/2.12.6/scala/collection/immutable/TreeMap.html):

![wtf](/resources/img/blog/scaladoc-treemap-map.png)

This type signature makes no sense: the result type can not be `TreeMap[B]` since
`TreeMap` takes *two* type parameters (the type of keys and the type
of values). Also, the function `f` actually takes a *key-value pair* as parameter,
not just a key (as incorrectly indicated by the type `A`).

`CanBuildFrom` was used for good reasons, in particular the type `That` shown
in the above screenshot was *computed* according to the type of the source
collection and the type of elements of the new collection. The case of `TreeMap`
is compelling: in case you transform your key-value pairs into other key-value
pairs for which the type of keys has an implicit `Ordering` instance, then `map`
returns a `TreeMap`, but if there is no such `Ordering` instance then the best
collection type that can be returned is `Map`. And if you transform the key-value
pairs into something that is not even a pair, then the best collection type
that can be returned is `Iterable`. These three cases were supported by
a single operation implementation, and `CanBuildFrom` was used to abstract over
the various possible return types.

In the new collections we wanted to have simpler type signatures so that we
can show their actual signature in the API documentation, and auto-completion
provided by IDEs is not scary. We achieve that by using overloading, as
explained in more detail in
[this blog article](/blog/2017/05/30/tribulations-canbuildfrom.html).

In practice, this means that the new `TreeMap` has three overloads of the
`map` operation:

![](/resources/img/blog/scaladoc-new-treemap-map.png)

These type signatures are the actual ones and they essentially translate
“in types” what I’ve written above about the possible result types of `map`
according to the type of elements returned by the transformation function `f`.
We believe that the new API is simpler to understand.

## New And Noteworthy

We have introduced a few new operations. The following sections
present some of them.

### `groupMap`

A common pattern with the old 2.12 collections is to use `groupBy`
followed by `mapValues` to transform the groups. For instance,
this is how we can index the names of a collection of users by
their age:

~~~ scala
case class User(name: String, age: Int)

def namesByAge(users: Seq[User]): Map[Int, Seq[String]] =
  users.groupBy(_.age).mapValues(users => users.map(_.name))
~~~

There is a subtlety in this code. The static return type is `Map`
but the `Map` implementation actually returned is lazy and evaluates
its elements each time it is traversed (ie the `users => users.map(_.name)`
function is evaluated each time the `Map` is traversed).

In the new collections the return type of `mapValues` is a `MapView` instead
of a `Map`, to clearly indicate that its contents is evaluated each time it
is traversed.

Furthermore, we have introduced an operation named `groupMap`
that both groups elements and transforms the groups. The above code
can be rewritten as follows to take advantage of `groupMap`:

~~~
def namesByAge(users: Seq[User]): Map[Int, Seq[String]] =
  users.groupMap(_.age)(_.name)
~~~

The returned `Map` is strict: it eagerly evaluates its elements
once. Also, the fact that it is implemented as a single operation
makes it possible to apply some optimizations that make it
~1.3x faster than the version that uses `mapValues`.

### `InPlace` Transformation Operations

Mutable collections have a couple of new operations for transforming
their elements in place: instead of returning a new collection (like
`map` and `filter` do) they mutate the source collection. These
operations are suffixed with `InPlace`. For instance, to remove
users whose name start with the letter `J` from a buffer and then
increment their age, one can now write:

~~~ scala
val users = ArrayBuffer(…)
users
  .filterInPlace(user => !user.name.startsWith("J"))
  .mapInPlace(user => user.copy(age = user.age + 1))
~~~

## Deprecations For Less Confusion

A consequence of cleaning and simplifying the collections framework
is that several types or operations have been deprecated in Scala 2.13
and will be removed in 2.14.

### `Iterable` Is The Top Collection Type

We felt that having a distinction between `Traversable` and `Iterable` was not
worth it, so we removed `Traversable` (it is now an alias to `Iterable[A]`).

`Iterable[A]` is now the collection type at the top of the hierarchy.
Its only abstract member is `def iterator: Iterator[A]`.

### `LazyList` Is Preferred Over `Stream`

`Stream` is deprecated in favor of `LazyList`. As its name suggests,
a `LazyList` is a linked list whose elements are lazily evaluated. An
important semantic difference with `Stream` is that in `LazyList` both
the head and the tail are lazy, whereas in `Stream` only the tail is lazy.

### Insertion And Removal Operations Are Not Available On Generic Collections

In the old 2.12 framework, the `scala.collection.Map` type has a `+` and a `-` operations
to add and remove entries. The semantics of these operations is to return a new collection
with the added or removed entries, without changing the source collection.

These operations are then inherited by the mutable branch of the collections. But the mutable
collection types also introduce their own insertion and removal operations, namely `+=` and `-=`,
which modify the source collection in place. This means that the `scala.collection.mutable.Map` type
has `+` and `+=`, as well as `-` and `-=`.

Having all these operations can be handy in some cases but can also introduce confusion. If you want
to use `+` or `-`, then you probably wanted to use an immutable collection type in the first place…
Consequently, `+`, `-` and `updated` have been moved from `scala.collection.Map` to `scala.collection.immutable.Map`,
and `+` and `-` have been moved from `scala.collection.Set` to `scala.collection.immutable.Set`

We think that by deprecating these insertion and removal operations from generic collection
types and by having distinct operations between the `mutable` and `immutable` branches we make
the situation clearer.
 
## Summary

In summary, the changes for end-users are the following:

- non-strict collections (such as views) are safer to use and simpler implement,
- type signatures of transformation operations (such as `map`) are simpler
  (no implicit `CanBuildFrom` parameter),
- new cool operations have been added,
- the type hierarchy is simpler (no `Traversable`),
- mutable collection types do not inherit immutable insertion and removal operations.
