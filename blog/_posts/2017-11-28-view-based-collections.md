---
layout: blog-detail
post-type: blog
by: Julien Richard-Foy
title: Let Them Be Lazy!
---

One of the main changes in the new design of the collections is that operations have
“view based” default implementations rather than “builder based”. This blog article
explains what this means as well as what it means for a collection to be lazy or
strict, how the view based design allows us to support both types of collections,
and finally why this is an improvement over the current design of the collections.

More background information about the collections redesign can be found in
[this blog post](http://www.scala-lang.org/blog/2017/02/28/collections-rework.html). The
source code is available in
[this GitHub repository](https://github.com/scala/collection-strawman).

## Background: Lazy vs Strict Collections

We can classify collections into two categories: those that evaluate their elements when
they are created, and those that evaluate their elements when they are needed only.

An example of the first category is `List[A]`: when we create a list we compute all
its elements, when we transform a list (e.g. using `map`) we compute all the elements
of the resulting list. We say that list is a **strict** collection type.

An example of the second category is `Stream[A]`: we can create and transform streams
without computing their elements. Those might never be computed unless we iterate
through them. We say that streams are **lazy**.

Laziness allows us to create fancy infinite collections without blowing the memory:
`Stream.continually(42)`. In practice, lazy collections are particularly useful to
describe successive transformation operations without evaluating intermediate
transformations. Typically, if we want to transform the first `n` elements of
a list using `map` we will probably write something like `xs.take(n).map(f)`.
Unfortunately, this expression will create an intermediate collection (resulting from
the `.take(n)` call) although we are only interested in the result of the `map` call.
Creating this intermediate collection can be an expensive operation that we can
avoid by using a view, which is a lazy collection: `xs.view.take(n).map(f)`.

## What’s Wrong With Views?

Unfortunately, the current support of views in the standard library suffers from
two issues.

### Operations Default Implementations Break Laziness

In the current collections, the default implementations of operations that return
new collections (e.g. `map`, `filter`, `++`) are based on strict builders.
Consequently, when these operations are inherited by lazy collections they break
their laziness. Therefore, these operations have to carefully be overridden by lazy
collections to disable the default behaviour and preserve laziness instead.
From a maintainer point of view, this is a headache.

### `CanBuildFrom` Doesn’t Work With Views

Unfortunately, views not only cause trouble for the standard library maintainers
but also end users. Indeed, the primary mechanism to extend the collections
with new operations, namely `CanBuildFrom`, is incompatible with views. This means
that users that use an implicit `CanBuildFrom` instance to build a collection will
get a runtime exception if that instance has been resolved for a view.
This is because `CanBuildFrom`, as its name suggests, also uses a strict
“builder based” approach. Therefore no sensible implementation of its methods can
be provided for lazy collections.

## Summary

We have seen that on one hand views are useful to avoid unnecessary computations but
the other hand they give pain to maintainers and are dangerous for end users.

The collections redesign is an opportunity to fix these issues, as
explained in the remainder of this article.

## “View Based” Default Implementations

Essentially, in the new collections we reversed the situation.
Instead of having strict by default operations, they are now lazy by default and
concrete collection types decide whether to evaluate their result or not. For instance,
here is the implementation of `map`:

~~~ scala
trait IterableOps[A, CC[_], C] {
  def map[B](f: A => B): CC[B] = fromIterable(View.Map(this, f))
}
~~~

(where `CC[_]` is `List` or `Vector`)

We can break down this implementation into two steps.

First, we create a lazy `View` that “records” that the `map` operation has been applied.
Constructing such a view is a cheap operation, here is the implementation of
`View.Map`:

~~~ scala
object View {
  case class Map[A, B](underlying: Iterable[A], f: A => B) extends View[B] {
    def iterator = underlying.iterator.map(f)
  }
}
~~~

As you can see, unless we actually iterate on the view we don’t evaluate the elements
of the `underlying` collection or the mapped elements.

Second, we build the resulting collection from the view by calling `fromIterable`. This operation
is abstract in `IterableOps` and is implemented by leaf classes of the hierarchy (e.g.
`List`, `Vector`, etc.). Here is the implementation of `fromIterable` in `List`,
for instance:

~~~ scala
trait List[A] extends IterableOps[A, List, List[A]] {
  def fromIterable[E](it: Iterable[E]): List[E] = (List.newBuilder[E]() ++= it).result()
}
~~~

This implementation creates a new list and adds all the elements of the passed `Iterable[E]`
to it. By doing so, it necessarily computes the elements of the source collection
and the resulting collection: `List` is a strict collection type.

Now let’s have a look at the `fromIterable` implementation in `View`:

~~~ scala
trait View[A] extends IterableOps[A, View, View[A]] {
  def fromIterable[E](it: Iterable[E]): View[E] =
    new View[E] {
      def iterator = it.iterator
    }
}
~~~

Here we return a view that will only evaluate its elements (by delegating to the
`underlying` collection elements) when it is actually iterated: `View` is a lazy
collection type.

Let’s take a step back and consider again the implementation of the `map` operation:

~~~ scala
trait IterableOps[A, CC[_], C] {
  def map[B](f: A => B): CC[B] = fromIterable(View.Map(this, f))
}
~~~

The first part of the implementation creates a lazy view of the transformed elements,
and the second part of the implementation (the call to `fromIterable`) turns this view
into the resulting collection (which can be done either in a lazy or strict way, as
we’ve just seen).

Note that in practice, the `map` operation has been overridden in `List` (for performance
reasons) so we don’t actually use the default implementation, but the reasoning presented
above still applies to most operations.

## Conclusion

We have classified collections type into two categories: strict collections eagerly evaluate
their elements (examples of such collections are `List`, `Vector`, etc.), whereas lazy
collections evaluate their elements only when they are needed (examples are `Stream` and
`View`).

In the new collections, the default implementations of transformation operations preserve
laziness: when they are applied to a strict collection they are strict, and when they are
applied to a lazy collection they are lazy. To achieve this we switched from a
builder based approach to a view based approach to create collections.

More precisely, the new pattern to implement an operation consists in decoupling the
logic of the operation and the evaluation mode of the underlying collection type.
The logic of the operation is captured in a `View` and the evaluation mode is
defined by the `fromIterable` method implementation in leaf collection types.
