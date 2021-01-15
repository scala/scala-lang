---
layout: blog-detail
post-type: blog
by: Meriam Lachkar, Vincenzo Bazzucchi, Scala Center
title: Explicit term inference with Scala 3
---

# Explicit term inference with Scala 3

One of the most striking changes for developers adopting Scala 3 is the introduction
of a new syntax to replace the implicit mechanism used in previous Scala versions.

The motivation behind the new syntax is that the same `implicit` keyword was
used for different purposes and patterns and thus it became a way to express *how* to implement
patterns. This means that when encountering this ambiguous incantation, users need to decipher what
the intent of the developer was: is this a conversion? Does this avoid parameter repetition?
Is this an extension of a type? Is this a typeclass? How do I import this?

Seeing how pervasive implicits became in libraries and projects, Scala 3 aims at reducing confusion and cognitive load by using new keywords that convey the intent of the developer.

This post briefly introduces the new syntax and semantics available to Scala 3 programmers by analysing the
most common use cases and patterns: extension methods, implicit parameters, implicit conversions and typeclasses.

## Compatibility disclaimer

While we believe that the new syntax represents an improvement, it is very important to highlight
that older code using `implicit` is still perfectly valid for the Scala 3.0 compiler, even if it will be deprecated in future releases.
You do not need to port your codebase right away, it can be an incremental and gradual process.

## Extension methods

When you do not have control over a type but you need to extend its capabilities with a new method,
Scala 3 allows you to define an *extension method*.

Assume that you are working with `List[Try[String]]` and that you often need to retrieve
the elements for which the computation succeeded.

Then you can extend this type to have a `collectSucceded` method:

```scala
// ListTryOps.scala

import scala.util.{Try, Success}

extension (ls: List[Try[String]]) def collectSucceeded: List[String] =
  ls.collect { case Success(x) => x }
```
To remember the syntax, notice how `collectSucceeded` follows the object on which it will be available: `ls.collectSucceeded`.
Extension methods can have type parameters as well:

```scala
extension [A] (ls: List[Try[A]]) def collectSucceeded: List[A] =
  ls.collect { case Success(x) => x }
```

Finally, you can add several methods without repeating the `extension` declaration:

```scala
extension [A] (ls: List[Try[A]])
  def collectSucceeded: List[A] =
    ls.collect { case Success(x) => x }
  def getIndexOfFirstFailure: Option[Int] =
    ls.zipWithIndex.find((t, _) => t.isFailure)
      .map(_._2)
```

Extensions can be imported by name or using the `_` wildcard:

```scala
// Main.scala
import scala.util.Try
// import ListTryOps._ // Using wildcard
import ListTryOps.collectSucceeded

def getLastTweet(username: String): Try[String] = ???

@main def main =
  val niceTweets = List(getLastTweet("scala_lang"), getLastTweet("odersky")).collectSucceeded
  println(niceTweets)
```

### How was this done in Scala 2?

This pattern was particularly cumbersome to implement prior to Scala 3.
A typical approach would be the following:

```scala
implicit class ListTryExtension[A](private val ls: List[Try[A]]) extends AnyVal {
  def collectSucceeded: List[A] = ls.collect { case Success(a) => a }
  def getIndexOfFirstFailure: Option[Int] =
    ls.zipWithIndex.find { case (t, _) => t.isFailure }
      .map { case (_, index) => index }
}
```
Note that you need to define a name for the class, even if this is probably never going to be used besides the import statement.
You also need to understand what `AnyVal` is, why it is good practice to extend it and
what its limitations are.

Some experience is required when reading this code to understand that its only goal is to
add a couple of methods to `List[Try[A]]`.

### Find out more

You can find more information about extension methods on [the dedicated documentation page](https://dotty.epfl.ch/docs/reference/contextual/extension-methods.html).
We also suggest that you read how they complement another new Scala 3 feature: [opaque types](https://dotty.epfl.ch/docs/reference/other-new-features/opaques.html).
Later in this post we will see how they simplify a very common pattern: typeclasses.

## Avoiding repetition with contextual parameters

Similarly to other programming languages, Scala allows you to omit the type of a variable as the
compiler can perform *type inference*. For example we can write

```scala
val x = 3
val y = x + 1
```
instead of
```scala
val x: Int = 3
val y: Int = x + 1
```

In this case we declared the value and the compiler inferred the corresponding type.
One of the distinctive features of Scala is being able to infer values when the type is specified.

Consider the `Future` abstraction in the standard library. Each time you create a `Future` by
providing a computation, you need to specify on which `ExecutionContext` the computation will
be evaluated:

```scala
import scala.concurrent._

def factorial(n: Int): Int = ???
def fibonacci(n: Int): Int = ???

@main def main =
  val executor: ExecutionContext = ExecutionContext.global

  val fact100 = Future(factorial(100))(executor)
  val fibo100 = Future(fibonacci(100))(executor)
  // ...
```

As you can see, the repetition of `executor` quickly becomes a tedious task.
We can declare that this parameter is common to the current context and avoid its repetition:

```scala
@main def main =
  given executor as ExecutionContext = ExecutionContext.global
  val fact100 = Future(factorial(100))
  val fibo100 = Future(fibonacci(100))
```

This works because the `apply` method of future could be declared as follows:

```scala
// scala.concurrent.Future.scala
object Future {
    // ..
    def apply[T](body: => T)(using executor: ExecutionContext): Future[T] = // ...
}
```
We see here the other half of the syntax: if we declare a parameter as `using`, the compiler
will search the current scope at call sites for `given` values with a compatible type.

Note that the `executor` identifier is never used, so we can omit it:

```scala
given ExecutionContext = ExecutionContext.global
```
the same is possible for the `using` parameter:
```scala
def apply[T](body: => T)(using ExecutionContext): Future[T] = // ...
```
Note that in Scala 3 the type of a `given` definition must be explicit.

Another important aspect is how we import these values. For example, if you had a
more involved definition for the `ExecutionContext` that is used in multiple
files, you could refactor it into a different file:

```scala
// Context.scala
import scala.concurrent.ExecutionContext
import java.util.concurrent.Executors

object Context:
  given ExecutionContext =
    ExecutionContext.fromExecutor(Executors.newFixedThreadPool(5))
```

Then you can import it using a wildcard:

```scala
import Context.given
```
Or by making the type that you are bringing in scope explicit:
```scala
import Context.{given ExecutionContext}
```
This allows you to have more control over imports without relying on instance names.

### Find out more

You can learn more about `using` / `given` and about the rules of resolution in
[the documentation](https://dotty.epfl.ch/docs/reference/contextual/motivation.html).

### How was this done in Scala 2?

In Scala 2 this pattern was achieved by marking both the value and the parameter with the
`implicit` keyword. The previous example would look like this:

```scala
// Main.scala
import scala.concurrent._
object Main extends App
  implicit val ec: ExecutionContext = ExecutionContext.global
  Future(println("Hello World"))
}

// scala.concurrent.Future.scala
object Future {
    // ..
    def apply[T](body: => T)(implicit executor: ExecutionContext): Future[T] = // ...
}
```

We note again that we had to provide a name which might not be used for the variable. The `implicitly` function from Scala 2 is renamed to `summon` in Scala 3.

Finally the special import syntax allows users to explicitly import `given` instances by type rather than by name. This makes more sense since we usually refer to them by type as well.

The context bound syntax remains unchanged.

## Automatically converting values between types

The implicit conversion feature is dangerous. For this reason, in Scala 3, the compiler
will warn you every time it is used. You can disable the warning at your own risk by
explicitly importing the feature into the current scope.

The Java standard library provides an `Optional` type which is very similar to `Option`.
If you are working with a Java library which produces a lot of objects with this type,
but you also have many `Option`s around, you might want to define an automatic conversion.

This is done by extending a new trait defined in the standard library:
```scala
abstract class Conversion[-T, +U] extends (T => U)
```

In Scala 3 you can define it in this way:

```scala
// OptionalConversion.scala
import java.util.Optional

object OptionalConversion:

  given [A]: Conversion[Optional[A], Option[A]] with
    def apply(in: Optional[A]): Option[A] =
      if in.isPresent then Some(in.get())
      else None
```

You can then use the syntax described above for the import:

```scala
import java.util.Optional
import OptionalConversion.given

@main def main =
  val opt: Option[Int] = Optional.empty[Int]()
```

As mentioned above, the compiler will warn you about this dangerous feature:
```
Use of implicit conversion class given_Conversion_Optional_Option in object OptionalConversion should be enabled
by adding the import clause 'import scala.language.implicitConversions'
or by setting the compiler option -language:implicitConversions.
See the Scala docs for value scala.language.implicitConversions for a discussion
why the feature should be explicitly enabled.
```
The warning can be silenced by adding `import scala.language.implicitConversions`, as
the message suggests.

### Find out more

You can learn more about this feature in the [documentation](https://dotty.epfl.ch/docs/reference/contextual/conversions.html).

### How was this done in Scala 2?

Scala 2 relied on `implicit` defs and `implicit` function values to implement this pattern:

```scala
import java.util.Optional

object OptionalConversion {
  implicit def optionalToOption[A](in: Optional[A]): Option[A] =
    if (in.isPresent) Some(in.get())
    else None
}
```

which could then be imported:
```scala
import OptionalConversion._
```

Note that at a glance, it is not clear that the definition is intended as an automatic conversion to an expected type:
 - the name of the method can be a hint, but this is merely a convention that
   other developers might not share
 - the implicit def may be intended give you extension methods on its parameter type, depending on its result
 - there is not straightforward way to verify that this function will not be used as implicit
   argument for a function with an implicit parameter list

The `Conversion` trait makes the definition explicit and more readable.


## A common pattern revisited in Scala 3: Typeclasses

This pattern is fundamental to Scala functional programming libraries such as [Cats](https://typelevel.org/cats/). In Scala 2 we used to heavily rely on `implicit` conversions to add methods
and on `implicit` parameters to propagate instances, which was a bit cryptic to beginners who were maybe already struggling with new concepts in functional programming.

In Scala 3, this pattern becomes simpler thanks to the new syntax.
Let's consider a simple typeclass such as `Show` which describes the capability of types to have a `String` representation.

We first describe the interface that all instances of this typeclass should implement:

```scala
// Show.scala
trait Show[A]:
  extension (a: A) def show: String
```
We can then add a companion object to provide a couple of auxiliary methods and instances
that make instance creation less tedious:
```scala
// Show.scala
object Show:
  def from[A](f: A => String): Show[A] = new Show[A]:
    extension (a: A) def show: String = f(a)

  given[A: Show]: Show[List[A]] with
    extension (ls: List[A]) def show: String = ls.map(_.show).mkString(", ")
```

To use it we need to import the interface and define an instance:
```scala
// Main.scala
import Show.{_, given}

case class Mountain(name: String, height: Int)

given Show[Mountain] =
  Show.from((m: Mountain) => s"${m.name} is ${m.height} meters high")

@main def main =
  val mountains = List(Mountain("Mont Blanc", 4808), Mountain("Matterhorn", 4478))
  println(mountains.show)
```
As the extension method is defined inside the trait, there is no additional import statement required contrarily to what used to happen in Scala 2, as you will see in the following section.

### How was this done in Scala 2?

In Scala 2 there was more boilerplate code involved. It all starts with defining the interface:

```scala
// Show.scala
trait Show[A] {
  def show(a: A): String
}
```
The second step was to define the extension method which relies on two implicits:
```scala
// ShowOps.scala
object ShowOps {
  implicit class showOps[A](in: A) extends AnyVal {
    def show(implicit instance: Show[A]): String =
      instance.show(in)
  }
}
```
And finally we can define the auxiliary methods in the companion object:
```scala
// Show.scala
object Show {
  def from[A](f: A => String): Show[A] = new Show[A] {
    def show(a: A): String = f(a)
  }

  // Either this or import ShowOps and use context bound
  implicit def showList[A](ls: List[A])(implicit instance: Show[A]) =
    ls.map(instance.show).mkList(",")
}
```
which brings us to the main definition:
```scala
// Main.scala
import Show._
import ShowOps._

case class Mountain(name: String, height: Int)

object Main extends App {
  implicit val mountainShow: Show[Mountain] =
    Show.fromFunction((m: Mountain) => s"The ${m.name} is ${m.height} meters high")

  val mountains = List(Mountain("Mont Blanc", 4808), Mountain("Matterhon", 4478))
  println(mountains.show)
}
```
We believe that this example shows how `implicit` was used to achieve different goals
and, in doing so, used to be more confusing:
 - if you need to add methods, use `extension` rather than an implicit class
 - If you need an implicit parameters, use `using` to declare what you will need
 - If you are providing an implicit instance, use `given` to declare that the value is now available
 - If you need an implicit conversion, make it explicit for future readers
 - If you are never going to refer to a value by its name, do not provide one

### Find out more

Read more about typeclass implementation in Scala 3 in the [documentation](https://dotty.epfl.ch/docs/reference/contextual/type-classes.html).

Another extremely interesting, yet more advanced, feature in Scala 3 related to contextual abstractions are [Context Functions](https://dotty.epfl.ch/docs/reference/contextual/context-functions.html).

## Conclusion

We went over the main use cases of `implicit` in Scala 2 and offered a quick glance of what
they would look like in Scala 3. While the final result is almost the same, code is more
explicit and readable so that you can focus on solving your business problems rather than on
syntax.

This is part of a larger set of usability and ergonomy improvements for Scala 3 that we believe
will make the language easier and more fun to use and we are very excited to see what the
community will create with them.

