---
layout: blog
post-type: blog
by: Julien Richard-Foy
title: Tribulations of CanBuildFrom
---

[`CanBuildFrom`](/api/2.12.2/scala/collection/generic/CanBuildFrom.html) is probably the most
infamous abstraction of the current collections. It is mainly criticised for making scary type
signatures.

Our ongoing [collections redesign](https://github.com/scala/collection-strawman) is an opportunity
to  try alternative designs. This blogposts explains the (many!) problems solved by `CanBuildFrom`
and the alternative solutions implemented in the new collections.

## Transforming the elements of a collection

It’s useful to think of `String` as a collection of `Char` elements: you can then use
the common collection operations like `++`, `find`, etc. on `String` values.

However the `map` method is challenging because this one
transforms the `Char` elements into something that might or might not be `Char`s.
Then, what should be the return type of the `map` method on `String` values? Ideally,
we want to get back a `String` if we transform each `Char` into another `Char`, but we
want to get some `Seq[B]` if we transform each `Char` into a different type `B`. And this
is the way it currently works:

~~~
Welcome to Scala 2.12.2 (OpenJDK 64-Bit Server VM, Java 1.8.0_131).
Type in expressions for evaluation. Or try :help.

scala> "foo".map(c => c.toInt)
res1: scala.collection.immutable.IndexedSeq[Int] = Vector(102, 111, 111)

scala> "foo".map(c => c.toUpper)
res2: String = FOO
~~~

This feature is not limited to the `map` method: `flatMap`, `collect`, `concat` and a few
others also work the same. Moreover, `String` is not the only
collection type that needs this feature: [`BitSet`](/api/2.12.2/index.html?search=bitset)
and [`Map`](/api/2.12.2/index.html?search=map) are other examples.

The current collections rely on `CanBuildFrom` to implement this feature. The `map`
method is defined as follows:

~~~ scala
def map[B, That](f: Char => B)(implicit bf: CanBuildFrom[String, B, That]): That
~~~

When the implicit `CanBuildFrom` parameter is resolved it fixes the return type `That`.
The resolution is driven by the actual `B` type: if `B` is `Char` then `That` is fixed
to `String`, otherwise it is `immutable.IndexedSeq`.

The drawback of this solution is that the type signature of the `map` method looks cryptic.

In the new design we solve this problem by defining two overloads of the `map`
method: one that handles `Char` to `Char` transformations, and one that handles other
transformations. The type signatures of these `map` methods are straightforward:

~~~ scala
def map(f: Char => Char): String
def map[B](f: Char => B): Seq[B]
~~~

Then, if you call `map` with a function that returns a `Char`, the first overload is
selected and you get a `String`. Otherwise, the second overload is selected and you
get a `Seq[B]`. Before Scala 2.12 such a solution would not have worked well: users
would have been required to explicitly write the type of the argument of the supplied
`f` function. In Scala 2.12 type inference has been improved so that it is not
anymore necessary.

Thus, we got rid of the cryptic method signatures while still supporting the feature
of returning a different type of result according to the type of the transformation function.

## Collections’ type constructors with different arities

The collections are hierarchically organized. Essentially, the most generic collection
is `Iterable[A]`, and then we have three main kinds of collections: `Seq[A]`, `Set[A]`
and `Map[K, V]`.

![](/resources/img/blog/collections-hierarchy.svg)

It is worth noting that `Map[K, V]` takes two type parameters (`K` and `V`) whereas the
other collection types take only one type parameter. This makes it difficult to
generically define, at the level of `Iterable[A]`, operations that will
return a `Map[K, V]` when specialized.

For instance, consider again the case of the `map` method. We want to generically define
it on `Iterable[A]`, but which return type should we use? When this method will
be inherited by `List[A]` we want its return type to be `List[B]`, but when
it will be inherited by `HashMap[K, V]`, we want its return type to be `HashMap[L, W]`.
It is clear that we want to abstract over the type constructor of the concrete collections,
but the difficulty is that they don’t always take the same number of type parameters.

That’s a second problem solved by `CanBuildFrom` in the current collections.
Look again at the type signature of the (generic) `map` method on `Iterable[A]`:

~~~ scala
def map[B, That](f: A => B)(implicit bf: CanBuildFrom[Repr, B, That]): That
~~~

The return type `That` is inferred from the resolved `CanBuildFrom` instance at call-site.
Both the `Repr` and `B` types actually drive the implicit resolution: when `Repr` is `List[_]`
the parameter `That` is fixed to `List[B]`, and when `Repr` is `HashMap[_, _]` and `B` is a
tuple `(K, V)` then `That` is fixed to `HashMap[K, V]`.

In the new design we solve this problem by defining two “branches” in the hierarchy:

- `IterableOps` for collections whose type constructor takes one parameter,
- `MapOps` for collections whose type constructor takes two parameters.

Here is a simplified version of `IterableOps`:

~~~ scala
trait IterableOps[A, CC[_]] {
  def map[B](f: A => B): CC[B]
}
~~~

The `CC` type parameter stands for *C*ollection type *C*onstructor. Then, the `List[A]`
concrete collection extends `IterableOps[A, List]` to set its correct self-type constructor.

Similarly, here is a simplified version of `MapOps`:

~~~ scala
trait MapOps[K, V, CC[_, _]] extends IterableOps[(K, V), Iterable] {
  def map[L, W](f: ((K, V)) => (L, W)): CC[L, W]
}
~~~

And then the `HashMap[K, V]` concrete collection extends `MapOps[K, V, HashMap]` to set
its correct self-type constructor. Note that `MapOps` extends `IterableOps`: consequently it
inherits from its `map` method, which will be selected when the transformation function
passed to `map` does not return a tuple.

## Sorted collections

The third challenge is about sorted collections (like `TreeSet` and `TreeMap`, for instance).
These collections define their order of iteration according to an ordering relationship for the
type of their elements.

As a consequence, when you transform the type of the elements (e.g. by using the -- now familiar! --
`map` method), an implicit ordering instance for the new type of elements has to be available.

With `CanBuildFrom`, the solution relies (again) on the implicit resolution mechanism:
the implicit `CanBuildFrom[TreeSet[_], X, TreeSet[X]]` instance is available for some
type `X` only if an implicit `Ordering[X]` instance is also available.

In the new design we solve this problem by introducing a new branch in the hierarchy.
This one defines transformation operations that require an ordering instance for the element
type of the resulting collection:

~~~ scala
trait SortedIterableOps[A, CC[_]] {
  def map[B : Ordering](f: A => B): CC[B]
}
~~~

However, as mentioned in the previous section, we need to also abstract over the kind of the
type constructor of the concrete collections. Consequently we have in total four branches:

kind        | not sorted  | sorted
------------|-------------|-------------------
`CC[_]`     |`IterableOps`|`SortedIterableOps`
`CC[_, _]`  |`MapOps`     |`SortedMapOps`

In summary, instead of having one `map` method that supports all the use cases described in
this section and the previous ones, we specialized the hierarchy to have overloads of
the `map` method, each one supporting a specific use case. The benefit is that the type
signatures immediately tell you the story: you don’t have to have a look at the actual
implicit resolution to know the result you will get from calling `map`.

## Implicit builders

In the current collections, the fact that `CanBuildFrom` instances are available in the
implicit scope is useful to implement, separately from the collections, generic operations
that work with any collection type.

Examples of use cases are:

- [`Future.traverse`](https://github.com/scala/scala/blob/92ffe04070f25452b8d48ee7fbced587ddafbf6d/src/library/scala/concurrent/Future.scala#L822-L840)
- type-driven builders (e.g. in [play-json](https://github.com/playframework/play-json/blob/8642c485c79e32263b7bef5f991abb486523b3ef/play-json/shared/src/main/scala/Reads.scala#L144-L170), or [slick](https://github.com/slick/slick/blob/51e14f2756ed29b8c92a24b0ae24f2acd0b85c6f/slick/src/main/scala/slick/jdbc/PositionedResult.scala#L150-L154))
- extension methods (e.g. in [scala-extensions](https://github.com/cvogt/scala-extensions/blob/master/src/main/scala/collection.scala#L14-L28))

In the new design we are still experimenting with solutions to support these features. So far
the decision is to not put implicit builders in the collections implementation. We might
provide them as an optional dependency instead, but it seems that most of these use cases
could be supported even without implicit builders: you could just use an existing collection
instance and navigate through its companion object (providing the builder), or you could just
use the companion object directly to get a builder.

## `breakOut` escape hatch

As we have previously seen, in the current collections when we want to transform some
collection into a new collection, we rely on an available implicit `CanBuildFrom`
instance to get a builder for the target collection. The implicit search is
driven by the type of the initial collection and the type of elements of the target
collection. The available implicit instances have been designed to make sense in the most
common cases.

However, sometimes this default behavior is not what you want. For instance, consider the
following program:

~~~ scala
val xs: List[Int] = 1 :: 2 :: 3 :: Nil
val xsWithSquares: Map[Int, Int] =
  xs.map(x => (x, x * x))
~~~

If you try to compile it you will get a compile error because the implicitly
resolved builder produces a `List[(Int, Int)]` instead of the desired `Map[Int, Int]`.
We could convert this `List[(Int, Int)]` into a `Map[Int, Int]` but that
would be inefficient for large collections.

We can fix this issue by using the `breakOut` escape hatch:

~~~ scala
val xs: List[Int] = 1 :: 2 :: 3 :: Nil
val xsWithSquares: Map[Int, Int] =
  xs.map(x => (x, x * x))(collection.breakOut)
~~~

`breakOut` selects a `CanBuildFrom` instance irrespective of the initial collection type.
This requires the target type to be known, in this case via an explicit type ascription.

In the new design we have no direct equivalent of `breakOut`. The solution of the
above example consists in using a `View` to avoid the construction of an
intermediate collection:

~~~ scala
val xs: List[Int] = 1 :: 2 :: 3 :: Nil
val xsWithSquares: Map[Int, Int] =
  xs.view.map(x => (x, x * x)).to(Map)
~~~

In practice, we expect that most usages of `breakOut` could be adapted to the new design by using
a `View` followed by an explicit `to` call. However, this is an area that remains to explore.

## Summary

In this article we have reviewed the features built on top of `CanBuildFrom` and explained
the design decision we made for the new collections to support most of these features
without `CanBuildFrom`.
