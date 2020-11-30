---
layout: blog-detail
post-type: blog
by: Vincenzo Bazzucchi, Scala Center
title: Flexible and safe tuples in Scala 3
---

# Flexible and safe tuples in Scala 3

Tuples are completely revisited in Scala 3.
They are more **flexible**, more dynamic and support a **new range of operations**.
This is enabled by new and powerful features in the Scala 3 compiler.

In this post we will explore the new capabilities of tuples before
looking under the hood to learn how the improvements in the Scala 3
compiler enable to implement type safe operations on tuples.

# The basics: what are tuples?

In the Python programming language, tuples are a simple concept:
they are immutable collections of objects. As such, they are opposed
to lists, which are mutable.

In Scala both `List`s and tuples are immutable, so why do we care
about tuples?

Scala being a statically typed programming language, the difference between
list and tuples is in the type. Lists are *homogeneous* collections while
tuples are *heterogeneous*. In simpler terms, a tuple collects items maintaining
the type of each element, while a list collects objects retaining a common type
for all the elements.

This is better explained with an example:
```scala
scala> List(1, "2", 3.0, List(4))
val res0: List[Any] = List(1, 2, 3.0, List(4))
```
We see that the compiler tries to infer a common supertype for the elements of the list,
in this case `Any`.

If do the same with tuples, the elements maintain their individual and specific type:
```scala
scala> (1, "2", 3.0, List(4))
val res0: (Int, String, Double, List[Int]) = (1, 2, 3.0, List(4))
```
This behavior is desirable in many cases, for example when
we want a function to return two or more values or when we want
to use types to decide which transformation to apply to each
value.

# How do tuples evolve in Scala 3?

## Size limit

Probably the most well known limitation of tuples in Scala 2 was the
restriction to 22 for the number of elements.

```scala
scala> (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23)
    error: tuples may not have more than 22 elements, but 23 given
```

In Scala 3 the previous tuple is perfectly legal.

## Element accessor

The only way to retrieve an element of a tuple in Scala 2 was to
use the (1-based) `._i` attribute. For example:

```scala
("First", "Second")._2 // "Second"
```

In Scala 3, we can use the `apply` method with a 0-based argument:

```scala
("First", "Second")(1) // "Second"
```

As most of indexes are 0 based in Scala, this brings more consistency
to codebases. It also provides more flexibility. We can, for example,
*iterate* on any tuple to print each element on a line:

```scala
val someStuff = (1, "2", 3.0, List(4))
for (i <- 0 until someStuff.size)
  println(someStuff(i))
```

The argument provided to `apply` is checked at compile time. This means that
**`someStuff(-1)` or `someStuff(4)` will result in a compilation error**.

This was possible in Scala 2 with the `productIterator` although this
produced a value of type `Iterator[Any]` which means that we had to pattern
match or eventually cast the type of the elements.

This brings us to the conceptual change that we will explore in the
next change: tuples become a collection of data that we can manipulate
and program against.

## New operations

A lot of operations are now available on tuples out of the box!

Many of these were possible only using third-party libraries such
as Shapeless in Scala 2, which was a complicated task for new
Scala developers.

These operations are now available in the standard library, they
are safe and preserve the individual types of each element.

The first one was already introduced: `.size` retrieves the number
of elements in the tuple.

### Tuples can grow

We can add an element to a tuple using the `*:` operator,
which is very similar to the `::` operator available on `List`.

```scala
val fourElements = (1, "2", 3.0, List(4))
val evenWeirder = 1 *: "2" *: 3.0 *: List(4) *: Tuple()

val thisIsTrue = fourWeirdElements == evenWeirder // true

val fiveWeirdElements = Set(0) *: evenWeirder // (Set(0),1,2,3.0,List(4))
```

When we use a tuple as argument of `*:`, it is prepended as a single element:
```scala
val notGood: ((Int, Int), Int, Int) = (1, 2) *: (3,4) // ((1, 2), 3, 4)
```
So how can we concatenate two tuples ?
The `++` is there exactly for this purpose:
```scala
val better: (Int, Int, Int, Int) = (1, 2) ++ (3, 4) // (1, 2, 3, 4)
```

### Tuples can shrink

Similarly to operators available on lists, we can retrieve a subset of
a tuple. Here is a quick overview:

 - `drop` allows to ignore the first *n* elements of the tuple, returning
   an empty tuple when the number of elements is smaller than *n*:
```scala
(1, "2", 3.0, List(4)).drop(2) // (3.0, List(4))
(1, "2", 3.0, List(4)).drop(10) // ()
```
 - `take` retrieves the first *n* elements of the tuple, returning the original
   tuple when the number of elements is smaller than *n*
```scala
(1, "2", 3.0, List(4)).take(2) // (1, "2")
(1, "2", 3.0, List(4)).take(10) // (1, "2", 3.0, List(4))
```
 - `splitAt` creates two tuples, the first of which contains the first *n* elements
   of the original tuple and the second contains the remaining elements
```scala
(Set(0), 1, "2", 3.0, List(4)).splitAt(3) // ((Set(0), 1, "2", 3.0), (3.0, List(4)))
```

### Tuples can transform

Again, similarly to conversion methods on collections, it is possible to
transform a tuple into another collection.

We have to pay attention to the type of the resulting collection.
Let's start with the simple case: as its name might hint,
`toArray` produces an array. The type of its elements will always be
`Object`. This makes it easy to reason about this method although it
forgets the type of the elements.
It is also possible to use `.toIArray` which has exactly the same behavior
but produces an `IArray` where the `I` stands for immutable.
```scala
scala> (1, "2").toArray
val res0: Array[Object] = Array(1, 2)
```

I believe however that the most interesting conversion is `toList`
which produces yes a list, but not a `List[Any]`.
Instead it creates `List[U]` where `U` is the union type of the types
of the elements of the tuple.
That is:

```scala
(1, "2", 3.0)
val res0: List[Int | String | Double] = (1, "2", 3.0).toList
```
This is interesting because the type information is somehow maintained.
We can iterate over `list` and use pattern matching to apply the
correct transformation, knowing exactly how many and what cases to
treat:

```scala
// The compiler tells he cannot help with checking:
// Non-exhaustive match
(1, "2").toArray.map {
  case i: Int => (i * 2).toString
  case j: String => j
}

// The code compiles without errors or warning
// the compile verified that we handled all possible cases
(1, "2").toList.map {
  case i: Int => (i + 2).toString
  case j: String => j
}
```
Read more about [Union types here](https://dotty.epfl.ch/docs/reference/new-types/union-types.html).

We can also transform a tuple by appling a function to each element.
The method, similarly to what we are used to with collections, is called
`map`. The difference from collections (or functors) is however
that they expect a `f: A => B` where `A` is the type of the elements
of the collection.
With tuples each element has a different type!
How can we generalize the concept of a function whose argument type is
not fixed ?
We can use a **`PolyFunction`**. This is a more advanced syntax:

```scala
(1, 'a', "dog", 3.0).map[[X] =>> Option[String]]([T] => (t: T) => t match {
  case i: String => i.toUpperCase
  case j: Int => j.toString
})
```

## Tuples can compose

The last operator allows to pair the elements of two tuples.
You might have guessed, it is called `zip`. If the two tuples have
different lengths, the extra elements of the longest will be
ignored:

```scala
val numbers = (1, 2, 3, 4, 5)
val letters = ('a', 'b', 'c')

numbers.zip(letters) // ((1, 'a'), (2, 'b'), (3, 'c'))
```

# Under the hood: new type operators of Scala 3

I believe that the core new features that allows such a flexible
implementation of tuples are **match types**.
I invite you to read more about them [here](http://dotty.epfl.ch/docs/reference/new-types/match-types.html).

Let's see how we can implement the `++` operator using this powerful
construct. We will naively call our version `concat`

DISCLAIMER: This section is a bit more advanced !

## Defining tuples

First let's define our own tuple:

```scala
enum Tup:
  case EmpT
  case TCons[H, T <: Tup](head: H, tail: T)
```

That is a tuple is either empty, or an element `head` which precedes
another tuple. Using this recursive definition we can create
a tuple as follow:

```scala
import Tup._

val myTup = TCons(1, TCons(2,  EmpT))
```
It is not very pretty, but it can be easily adapted to provide
the same ease of use as the previous examples.
To do so we can use another exciting new Scala 3 feature: [extension methods](http://dotty.epfl.ch/docs/reference/contextual/extension-methods.html)

```scala
import Tup._

extension [A, T <: Tup] (a: A) def *: (t: T): TCons[A, T] =
  TCons(a, t)
```
So that we can write:

```scala
1 *: "2" *: EmpT
```

## Concatenating tuples

Now let's focus on `concat`, which could look like this:
```scala
import Tup._

def concat[L <: Tup, R <: Tup](left: L, right: R): Tup =
  left match
    case EmpT => right
    case TCons(head, tail) => TCons(head, concat(tail, right))
```

Let's analyze the algorithm line by line:
`L` and `R` are the type of the left and right tuple. We require
them to be a subtype of `Tup` because we want to concatenate tuples.
Why not using `Tup` directly? Because in this way we receive more specific
information about the two arguments.
Then we proceed recursively by case: if the left tuple is empty,
the result of the concatenation is just the right tuple.
Otherwise the result is the current head followed by the result of
concatenating the tail with the other tuple.

If we test the function, it seems to work:
```scala
val left = 1 *: 2 *: EmpT
val right = 3 *: 4 *: EmpT

concat(left, right) // *:(1,*:(2,*:(3,*:(4,EmpT))))
```

So everything seems good. However we can have more safety.
For instance the following code is perfectly fine:
```scala
def concat[L <: Tup, R <: Tup](left: L, right: R): Tup = left
```
Because the returned type is just a tuple, we do not check anything else.
This means that the function can return an arbitrary tuple,
the compiler cannot check that returned value consists of the concatenation
of the two tuples. In other words, we need a type to indicate that
the return of this function is all the types of `left` followed
by all the types of the elements of `right`.

Can we make it so that the compiler verifies that we are indeed
returning a tuple consisting of the correct elements ?

In Scala 3 it is now possible, without requiring external libraries!

## A new type for the result of `concat`

We know that we need to focus on the return type. We can define this the return
type exactly as we have just described it.
Let's call this type `Concat` to mirror the name of the function.

```scala
type Concat[L <: Tup, R <: Tup] <: Tup = L match
  case EmpT.type => R
  case TCons[h, t] => TCons[h, Concat[t, R]]
```

You can see that the implementation closely follows the one
above for the method.
To use it we need to massage a bit the method implementation and
to change its return type:

```scala
def concat[L <: Tup, R <: Tup](left: L, right: R): Concat[L, R] =
  left match
    case _: EmpT.type => right
    case cons: TCons[head, tail] => TCons(cons.head, concat(cons.tail, right))
```

We use here a combination of match types and a form of dependent types called
*dependently match types*. There are some quirks to it as you might have noticed:
using lower case types means using type variables and we cannot use pattern matching
on the object. I think however that this implementation is extremely concise and readable.

Now the compiler will prevent us from doing mistakes:

```scala
def malicious[L <: Tup, R <: Tup](left: L, right: R): Concat[L, R] = left
// This does not compile!
```

We can use an extension method to allow users to write `(1, 2) ++ (3, 4)` instead
of `concat((1, 2), (3, 4))`, I believe that you now know how to do this too.

We can use the same approach for other functions on tuples, I invite you to have
a look at the source code of the standard library to see how the other operators are
implemented.

# Conclusion

We had a look at the new operations that are available on tuples in Scala 3 and at
how a more flexbile type system provides the fundamental tools to implement safer
and more readable code.

This shows how advanced type combinators in Scala 3 allow to create
APIs that benefit developers no matter their level of proficiency in the language:
an expert-oriented feature such as dependently match types allow to build a safe
and simple operation such as tuple concatenation.
