---
layout: blog-detail
post-type: blog
by: Julien Richard-Foy, Scala Center
title: Import Suggestions in Scala 3
---

Implicits let the compiler “write” significant parts of a program for you.
For instance, the compiler can summon JSON serializers and deserializers for
a complete type hierarchy.

However, working with implicits can be a difficult experience. Thankfully, the
Scala 3 compiler dramatically
improves the quality of the error messages shown in case of missing implicits so
that it is easier to see _where_ an implicit argument could not be inferred
by the compiler, and _how_ to fix the problem.

This article shows these improvements in action in concrete examples of code.

## Motivation

In the [2018 Scala developer survey], the word “implicit” showed
up in the question “In learning Scala, what was the biggest challenge you
faced?”

![cloud of words](/resources/img/blog/implicit-challenge.png)

We also saw that 35% of the respondents of the [2019 developer survey] signaled
that dealing with missing implicits was a main pain point in their daily
workflow. Furthermore, they signaled that the two most painful issues they had
when working with implicits were “finding which parameters have been inferred”,
and “fixing 'implicit not found' errors”. Last but not least, the
word that was most mentioned by the respondents to describe their other pain points
related to implicits is the word “import”.

A few months ago, Jamie Thompson engaged a [discussion with the community] to
understand better the problem. We identified that “conditional” implicits
were probably involved in most of the issues. Conditional implicits are
implicit definitions that themselves take implicit parameters. For instance,
an implicit `Ordering[List[A]]` instance requiring that there is an implicit
`Ordering[A]` instance:

~~~
implicit def orderingList[A](implicit orderingA: Ordering[A]): Ordering[List[A]]
~~~

Consider what happens when you call a method that requires an implicit
`Ordering[List[Int]]`. The compiler searches for such an implicit definition
and finds that the implicit definition `orderingList` could be a good
candidate provided that there is an implicit instance of type `Ordering[Int]`.
The compiler searches for such an implicit definition (which it finds in the
`Ordering` companion object) and summons the initial `Ordering[List[Int]]`
implicit argument by supplying the `Ordering[Int]` instance to the implicit
definition `orderingList`. In this example we have only two implicit
definitions involved, but in practice conditional implicit definitions can
form longer chains.

Now, let’s have a look at what happens in Scala 2 if something fails somewhere
in the chain. For example, when we call a method that requires an implicit
`Ordering[List[Foo]]` but there is no implicit `Ordering[Foo]` instance:

~~~
class Foo

List(List(new Foo)).sorted
~~~

The Scala 2 compiler produces the following error:

~~~
No implicit Ordering defined for List[Foo].
~~~

The error message says that no implicit `Ordering` instance for type
`List[Foo]` could be found. However, this message is not very
precise. The actual reason of the failure is that there was no implicit
`Ordering` instance for type `Foo`. Because of that, no implicit `Ordering`
instance for type `List[Foo]` could be summoned by the compiler.

This is the first concrete problem we identified: error messages don’t
tell precisely **where** in the chain was the missing implicit.

The second problem we identified is that issues related to implicits are
often due to missing imports, but finding **what** to import is hard.

The next sections show how Scala 3 addresses both issues by providing more
detailed error messages and actionable feedback.

## Showing Where the Problem Is

In case an implicit argument could not be found in a chain of implicit definitions,
the Scala 3 compiler now shows the complete chain it could build until an argument
could not be found. Here is an example that mimics the `Ordering[List[A]]` problem
mentioned above:

~~~
// `Order` type class definition, similar to the `Ordering` type class of
// the standard library
trait Order[A] {
  def compare(a1: A, a2: A): Int
}

object Order {
  // Provides an implicit instance of type `Order[List[A]]` under the condition
  // that there is an implicit instance of type `Order[A]`
  implicit def orderList[A](implicit orderA: Order[A]): Order[List[A]] = ???
}

// Sorts a `list` of elements of type `A` with their implicit `order` relation
def sort[A](list: List[A])(implicit order: Order[A]): List[A] = ???

// A class `Foo`
class Foo

// Let’s try to sort a `List[List[Foo]]`
sort(List(List(new Foo)))
~~~

The Scala 3 compiler gives the following error message:

~~~
Error:
|    sort(List(List(new Foo)))
|                             ^
|no implicit argument of type Order[List[Foo]] was found for parameter order of method sort.
|I found:
|
|    Order.orderList[A](/* missing */implicitly[Order[Foo]])
|
|But no implicit values were found that match type Order[Foo].
~~~

The error message now shows how far the compiler went by chaining
implicit definitions, and where it eventually stopped because an
implicit argument could not be found. In our case, we see that the
compiler tried the definition `orderList` but then didn’t find an
implicit `Order[Foo]`. So, we know that to fix the problem we need
to implement an implicit `Order[Foo]`.

> For the record, the idea of showing the complete chain of implicits was
> pioneered by Torsten Schmits in the [splain] compiler plugin, which is
> available in Scala 2.

## Suggesting How to Fix the Problem

In case the missing implicit arguments are defined somewhere but need to
be imported, the Scala 3 compiler suggests to you `import` clauses that might
fix the problem.

Here is an example that illustrates this:

~~~
// A class `Bar`
class Bar

// An implicit `Order[Bar]`
// (note that it is _not_ in the `Bar` companion object)
object Implicits {
  implicit def orderBar: Order[Bar] = ???
}

// Let’s try to sort a `List[Bar]`
sort(List(new Bar))
~~~

The compiler produces the following error:

~~~
Error:
|    sort(List(new Bar))
|                       ^
|no implicit argument of type Order[Bar] was found for parameter order of method sort
|
|The following import might fix the problem:
|
|  import Implicits.orderBar
~~~

Instead of just reporting that an implicit argument was not found, the Scala 3 compiler
looks for implicit definitions that could have provided the missing argument. In our case,
the compiler suggests importing `Implicits.orderBar`, which does fix the compilation error.

## A More Sophisticated Example

An iconic example is the operation `traverse` from the library [cats]. This
operation is defined as a _conditional extension method_ on any type `F[A]`
for which there exists an implicit `Traverse[F]` instance. The operation
takes a function `A => G[B]` and an implicit parameter of type `Applicative[G]`.

In practice, this very generic operation is used in various specific contexts. For
instance, to turn a list of validation results into a single validation result
containing a list, or to turn an optional asynchronous result into an
asynchronous optional result. However, because it is a conditional extension method,
and because it takes an implicit parameter, finding the correct imports to make it work
can be difficult.

You don’t need to be familiar with the type classes `Traverse` and `Applicative` to
understand the remaining of this article. There are only two things to know
about the operation `traverse`:

1. it is available on a value of type `List[A]` if there is an
   implicit instance of type `Traverse[List]` (it is a _conditional_ extension method),
2. the operation itself takes an implicit parameter of type `Applicative`.

This can be modeled as follows in Scala 3, using [extension methods]:

~~~
// The `Traverse` type class, which provides a `traverse` operation as an extension method
trait Traverse[F[_]] {
  def [G[_], A, B](fa: F[A]).traverse(f: A => G[B])(implicit applicative: Applicative[G]): G[B]
}

// The applicative type class (its actual definition does not matter for the example)
trait Applicative[F[_]]
~~~

Let’s assume that a given instance of type `Traverse[List]` and a given instance
of type `Applicative[Option]` are defined in an object `Givens` (given instances
are the new way to define implicit instances in Scala 3):

~~~
object Givens {
  given traverseList as Traverse[List] = ???
  given applicativeOption as Applicative[Option] = ???
}
~~~

Now that we have set the context, let’s see a concrete example of use of `traverse`.

First, consider a function `parseUser`, that parses a `User`
from a `String` (e.g., containing a JSON object):

~~~
def parseUser(string: String): Option[User]
~~~

The return type of the function is `Option[User]`, which can represent a
parsing failure with `None`, or a parsing success with `Some`.

We can use the operation `traverse` and the function `parseUser` (which
parses _one_ user) to implement a function `parseUsers`, which parses
a _list_ of users. The signature of this function is the following:

~~~
def parseUsers(strings: List[String]): Option[List[User]]
~~~

Again, the result type is `Option[List[User]]` so that a parsing failure can
be represented (it returns `None` if any of the strings failed to be parsed).

The function can be implemented as follows:

~~~
def parseUsers(strings: List[String]): Option[List[User]] =
  strings.traverse(parseUser)
~~~

However, if we try to compile this code with Scala 2 we get the following
error:

~~~
value traverse is not a member of List[String]
did you mean reverse?
~~~

The error message doesn’t help to find a solution.

Compiling with Scala 3, on the other hand, provides much better assistance:

~~~
[E008] Not Found Error:
|    strings.traverse(parseUser)
|    ^^^^^^^^^^^^^^^^
|value traverse is not a member of List[String], but could be made available as an extension method.
|
|The following import might make progress towards fixing the problem:
|
|  import Givens.traverseList
~~~

Let’s apply the suggestion and import `Givens.traverseList`. Now, the compiler
provides the following error:

~~~
Error:
|    strings.traverse(parseUser)
|                               ^
|no implicit argument of type Applicative[Option] was found for parameter applicative of method traverse in trait Traverse
|
|The following import might fix the problem:
|
|  import Givens.applicativeOption
~~~

If we apply the new suggestion (importing `Givens.applicativeOption`) our
program compiles!

The Scala 3 compiler first suggested importing `Givens.traverseList`, so
that the extension method `traverse` becomes available. Then, it suggested
importing `Givens.applicativeOption`, which was required to call the `traverse`
operation. 

## Summary

Dealing with “implicit not found” errors in Scala 2 can be difficult, in particular
because developers don’t see precisely which implicit argument could not be found
in a chain of implicit definitions, or because they don’t know what are the required
imports to add to their program.

Scala 3 addresses these two pain points by:

- providing more precise error messages, showing exactly which implicit argument
  could not be found in a chain of implicit definitions,
- providing actionable feedback, suggesting `import` clauses that might provide
  the missing implicits.

You can already try this feature in Dotty 0.24.0-RC1.

[2018 Scala developer survey]: https://contributors.scala-lang.org/t/preliminary-developer-survey-results/2681
[2019 developer survey]: https://scalacenter.github.io/scala-developer-survey-2019/#what-are-the-main-pain-points-in-your-daily-workflow
[discussion with the community]: https://contributors.scala-lang.org/t/better-implicit-search-errors-problematic-cases-wanted/3587
[splain]: https://github.com/tek/splain
[cats]: https://github.com/typelevel/cats
[extension methods]: https://dotty.epfl.ch/docs/reference/contextual/extension-methods.html
