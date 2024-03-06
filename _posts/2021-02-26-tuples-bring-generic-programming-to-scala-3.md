---
layout: blog-detail
post-type: blog
by: Vincenzo Bazzucchi, Scala Center
title: Tuples bring generic programming to Scala 3
---

Tuples allow developers to create new types by associating existing types. In
doing so, they are very similar to case classes but unlike them they retain
only the structure of the types (e.g., which type is in which order) rather
than giving each element a name.  A tuple can also be seen as a *sequence* and
therefore a collection of objects, however, whereas *homogeneous* collections
such as `List[A]` or `Set[A]` accumulate elements retaining only one type
(`A`), tuples are capable of storing data of different types while preserving
the type of each entry.

In Scala 3, tuples gain power thanks to new operations, additional type safety
and fewer restrictions, pointing in the direction of a construct called
**Heterogeneous Lists** (HLists), one of the core data structures in generic
programming.

In this post I will take you on a tour of the new Tuple API before looking at
how a new language feature, dependent match types, allows to implement such
API.  I hope that through the two proposed examples, you will develop an
intuition about the usage and power of a few new exciting features of Scala 3.

# Why generic programming?

HLists and case classes can both be used to define products of types. However
HLists do not require the developer to declare class or field names.  This
makes them more convenient in some scenarios, for example in return types.  If
we consider `List`, you can see that `def splitAt(n: Int)` produces a
`(List[A], List[A])` and not a `case class SplitResult(left: List[A], right:
List[A])` because of the cognitive cost of introducing new names
(`SplitResult`, `left` and `right`).

Moreover, there are infinitely many case classes which share a common
structure, which means that they have the same number and type of fields. We
might want to apply the same transformations to them, so that such
transformations can be defined only once.  [The Type Astronaut's Guide to
Shapeless](https://underscore.io/books/shapeless-guide/) proposes the following
simple example:

```scala
case class Employee(name: String, number: Int, manager: Boolean)
case class IceCream(name: String, numCherries: Int, inCone: Boolean)
```

If you are implementing an operation such as serializing instances of these
types to CSV or JSON, you will realize that the logic is exactly the same and
you will want to implement it only once. This is equivalent to defining the
serialization algorithm for the `(String, Int, Boolean)` HList, assuming that
you can map both case classes to it.

# A simple CSV encoder

Let's consider a simple CSV encoder for our `Employee` and `IceCream` case classes.
Each record, or line, of a CSV file is a sequence of values separated by a
delimiter, usually a comma or a semicolon. In Scala we can represent each value
as text, using the `String` type, and thus each record can be a list of values,
with type `List[String]`. Therefore, in order to encode case classes to CSV, we
need to extract each field of the case class and to turn it into a `String`,
and then collect all the fields in a list.  In this setting, `Employee` and
`IceCream` could be treated in the same way, because they can be simply be seen
as a `(String, Int, Boolean)` which needs to be transformed into a
`List[String]`.  We will first see how to handle this simple scenario before
briefly looking at how to obtain a tuple from a case class.

Assuming that we know how to transform each element of a tuple into a
`List[String]`, can we transform any tuple into a `List[String]`?

The answer is yes, and this is possible because Scala 3 introduces types `*:`,
`EmptyTuple` and `NonEmptyTuple` but also methods `head` and `tail` which allow
us to define recursive operations on tuples.

## Set up

Let's define the `RowEncoder[A]` type-class, which describes the capability of
values of type `A` to be converted into `Row`. To encode a type to `Row`, we
first need to convert each field of the type into a `String`: this capability
is defined by the `FieldEncoder` type-class.

```scala
trait FieldEncoder[A]:
  def encodeField(a: A): String

type Row = List[String]

trait RowEncoder[A]:
  def encodeRow(a: A): Row
```

We can then add some instances for our base types:

```scala
object BaseEncoders:
  given FieldEncoder[Int] with
    def encodeField(x: Int) = x.toString

  given FieldEncoder[Boolean] with
    def encodeField(x: Boolean) = if x then "true" else "false"

  given FieldEncoder[String] with
    def encodeField(x: String) = x // Ideally, we should also escape commas and double quotes
end BaseEncoders
```

## Recursion!

Now that all these tools are in place, let's focus on the hard part:
implementing the transformation of a tuple with an arbitrary number of elements
into a `Row`. Similarly to how you may be used to recurse on lists, on
tuples we need to manage two scenarios: the base case (`EmptyTuple`) and the
inductive case (`NonEmptyTuple`).

In the following snippet, I prefer to use the [context bound
syntax](https://dotty.epfl.ch/docs/reference/contextual/context-bounds.html)
even if I need a handle for the instances because it concentrates all the
constraints in the type parameter list (and I do not need to come up with any
name). After this personal preference disclaimer, let's see the two cases:

```scala
object TupleEncoders:
  // Base case
  given RowEncoder[EmptyTuple] with
    def encodeRow(empty: EmptyTuple) =
      List.empty

  // Inductive case
  given [H: FieldEncoder, T <: Tuple: RowEncoder]: RowEncoder[H *: T] with
    def encodeRow(tuple: H *: T) =
      summon[FieldEncoder[H]].encodeField(tuple.head) :: summon[RowEncoder[T]].encodeRow(tuple.tail)
end TupleEncoders
```

If the tuple is empty, we produce an empty list. To encode a non-empty tuple we
invoke the encoder for the first element and we prepend the result to the `Row`
created by the encoder of the tail of the tuple.

We can create an entrypoint function and test this implementation:
```scala
def tupleToCsv[X <: Tuple : RowEncoder](tuple: X): List[String] =
  summon[RowEncoder[X]].encodeRow(tuple)

tupleToCsv(("Bob", 42, false)) // List("Bob", "42", "false")
```

## How to obtain a tuple from a case class?

Scala 3 introduces the `Mirror` type class,
which provides type-level information about the components and labels of types.
For typical case classes, `Mirror` instances are generated automatically by the compiler
(see [here](https://docs.scala-lang.org/scala3/reference/contextual/derivation.html#mirror-1) for more details).

That's why we can obtain a tuple from a case class using:
```scala
val bob: Employee = Employee("Bob", 42, false)
val bobTuple: (String, Int, Boolean) = Tuple.fromProductTyped(bob)
```
But that is also why we can revert the operation:
```scala
val bobAgain: Employee = summon[Mirror.Of[Employee]].fromProduct(bobTuple)
```

# New tuples operations
In the previous example, we saw that we can use `.head` and `.tail` on tuples,
but Scala 3 introduces many other operations, here is a quick overview:

| Operation  | Example                                                     | Result                                               |
|------------|-------------------------------------------------------------|------------------------------------------------------|
| `size`     | `(1, 2, 3).size`                                            | `3`                                                  |
| `head`     | `(3 *: 4 *: 5 *: EmptyTuple).head`                          | `3`                                                  |
| `tail`     | `(3 *: 4 *: 5 *: EmptyTuple).tail`                          | `(4, 5)`                                             |
| `*:`       | `3 *: 4 *: 5 *: 6 *: EmptyTuple`                            | `(3, 4, 5, 6)`                                       |
| `++`       | `(1, 2, 3) ++ (4, 5, 6)`                                    | `(1, 2, 3, 4, 5, 6)`                                 |
| `drop`     | `(1, 2, 3).drop(2)`                                         | `(3)`                                                |
| `take`     | `(1, 2, 3).take(2)`                                         | `(1, 2)`                                             |
| `apply`    | `(1, 2, 3)(2)`                                              | `3`                                                  |
| `splitAt`  | `(1, 2, 3, 4, 5).splitAt(2)`                                | `((1, 2), (3, 4, 5))`                                |
| `zip`      | `(1, 2, 3).zip(('a', 'b'))`                                 | `((1 'a'), (2, 'b'))`                                |
| `toList`   | `(1, 'a', 2).toList`                                        | `List(1, 'a', 2) : List[Int | Char]`                 |
| `toArray`  | `(1, 'a', 2).toArray`                                       | `Array(1, '1', 2) : Array[AnyRef]`                   |
| `toIArray` | `(1, 'a', 2).toIArray`                                      | `IArray(1, '1', 2) : IArray[AnyRef]`                 |
| `map`      | `(1, 'a').map[[X] =>> Option[X]]([T] => (t: T) => Some(t))` | `(Some(1), Some('a')) : (Option[Int], Option[Char])` |


# Under the hood: Scala 3 introduces match types

All the operations in the above table use very precise types. For example, the
compiler ensures that `3 *: (4, 5, 6)` is a `(Int, Int, Int, Int)` or that the
index provided to `apply` is strictly inferior to the size of the tuple.

How is this possible?

The core new feature that allows such a flexible implementation of tuples are
**match types**.  I invite you to read more about them
[here](http://dotty.epfl.ch/docs/reference/new-types/match-types.html).

Let's see how we can implement the `++` operator using this powerful construct.
We will call our naive version `concat`.

## Defining tuples

First let's define our own tuple:

```scala
enum Tup:
  case EmpT
  case TCons[H, T <: Tup](head: H, tail: T)
```

That is a tuple is either empty, or an element `head` which precedes another
tuple. Using this recursive definition we can create a tuple in the following
way:

```scala
import Tup.*

val myTup = TCons(1, TCons(2,  EmpT))
```
It is not very pretty, but it can be easily adapted to provide the same ease of
use as the previous examples.  To do so we can use another Scala 3 feature:
[extension
methods](http://dotty.epfl.ch/docs/reference/contextual/extension-methods.html)

```scala
import Tup.*

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
import Tup.*

def concat[L <: Tup, R <: Tup](left: L, right: R): Tup =
  left match
    case EmpT => right
    case TCons(head, tail) => TCons(head, concat(tail, right))
```

Let's analyze the algorithm line by line: `L` and `R` are the type of the left
and right tuple. We require them to be a subtype of `Tup` because we want to
concatenate tuples.  Then we proceed recursively by case: if the left tuple is
empty, the result of the concatenation is just the right tuple.  Otherwise the
result is the current head followed by the result of concatenating the tail
with the other tuple.

If we test the function, it seems to work:
```scala
val left = 1 *: 2 *: EmpT
val right = 3 *: 4 *: EmpT

concat(left, right) // TCons(1,TCons(2,TCons(3, TCons(4,EmpT))))
```

So everything seems good. However we can ask the compiler to verify that the
function behaves as expected.  For instance the following code type-checks:

```scala
def concat[L <: Tup, R <: Tup](left: L, right: R): Tup = left
```

More problematic is the fact that this signature prevents us from using a more
specific type for our variables or methods:
```scala
// This does not compile
val res: TCons[Int, TCons[Int, TCons[Int, TCons[Int, EmpT.type]]]] = concat(left, right)
```

Because the returned type is just a tuple, we do not check anything else.  This
means that the function can return an arbitrary tuple, the compiler cannot
check that returned value consists of the concatenation of the two tuples. In
other words, we need a type to indicate that the return of this function is all
the types of `left` followed by all the types of the elements of `right`.

Can we make it so that the compiler verifies that we are indeed returning a
tuple consisting of the correct elements?

In Scala 3 it is now possible, without requiring external libraries!

## A new type for the result of `concat`

We know that we need to focus on the return type. We can define it exactly as
we have just described it.  Let's call this type `Concat` to mirror the name of
the function.

```scala
type Concat[L <: Tup, R <: Tup] <: Tup = L match
  case EmpT.type => R
  case TCons[headType, tailType] => TCons[headType, Concat[tailType, R]]
```

You can see that the implementation closely follows the one above for the
method. The syntax can be read in the following way: the `Concat` type is a
subtype of `Tup` and is obtained by combining types `L` and `R` which are both
subtypes of `Tup`.  To use it we need to massage a bit the method
implementation and to change its return type:

```scala
def concat[L <: Tup, R <: Tup](left: L, right: R): Concat[L, R] =
  left match
    case _: EmpT.type => right
    case cons: TCons[_, _] => TCons(cons.head, concat(cons.tail, right))
```

We use here a combination of match types and a form of dependent types called
*dependent match types* (docs
[here](http://dotty.epfl.ch/docs/reference/new-types/match-types.html) and
[here](http://dotty.epfl.ch/docs/reference/new-types/dependent-function-types.html)).
There are some quirks to it as you might have noticed: using lower case types
means using type variables and we cannot use pattern matching on the object. I
think however that this implementation is extremely concise and readable.

Now the compiler will prevent us from making the above mistake:

```scala
def wrong[L <: Tup, R <: Tup](left: L, right: R): Concat[L, R] = left
// This does not compile!
```

We can use an extension method to allow users to write `(1, 2) ++ (3, 4)`
instead of `concat((1, 2), (3, 4))`, similarly to how we implemented `*:`.

We can use the same approach for other functions on tuples, I invite you to
have a look at the [source code of the standard
library](https://github.com/scala/scala3/blob/87102a0b182849c71f61a6febe631f767bcc72c3/library/src-bootstrapped/scala/Tuple.scala)
to see how the other operators are implemented.
