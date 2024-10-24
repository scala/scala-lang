---
category: announcement
permalink: /news/3.6.0
title: "Scala 3.6.0 is now available!"
---

<!-- TODO: Headline image -->

We're happy to announce the next minor release of Scala - 3.6.0 is finally out!

# What’s new in 3.6.0?

Besides multiple bugfixes, this release stabilises multiple experimental features introduced to Scala language after careful review and acceptance by the [Scala Improvement Proposal's Commitee](https://docs.scala-lang.org/sips/). Many of these changes can have a significant impact on the Scala syntax and are introducing new amazing possibilities in writing concise, typesafe as well as easier, and easier to maintain code.

## SIP-47 - Clause Interleaving

The first major feature we're going to cover is the [clause interleaving](https://docs.scala-lang.org/sips/clause-interleaving.html).
With this change to the language, you're able to define multiple type parameter lists or place them after the first arguments list. Clause interleaving would benefit the path-dependent API creators.
It would eliminate the need for intermediate representations introducing runtime overhead or usage of complicated polymorphic functions.

```scala
trait Key { type Value }
trait DB {
  def getOrElse(k: Key)[V >: k.Value](default: V): V // dependent type parameter
}
```

## SIP-58 - Named Tuples

Another stabilized feature in this release are the Named Tuples. These have been introduced as experimental in Scala 3.5.0 and allowed you to give meaningful names to tuple elements and use those names during constructing, destructuring, and pattern matching.

```scala
extension [T](seq: Seq[T])
  def partitionBy(predicate: PartialFunction[T, Boolean]): (matching: Seq[T], unmatched: Seq[T]) =
    seq.partition(predicate.unapply(_).isDefined)

@main def onlySmallRealNumbers =
  List(
    (x = 1, y = 0),
    (x = 2, y = 3),
    (x = 0, y = 1),
    (x = 3, y = 0),
  ).partitionBy:
    case (x = real, y = 0) => real < 5
  .matching.map(_.x)
  .foreach(println)
```

This change also introduces improvements to extractors of case classes. You can now define named extractors for a selection of fields, allowing you to unclutter your code from unused variables.

```scala
case class User(id: Int, name: String, surname: String)

extension (values: Seq[User])
  //  Collect user IDs of every entry that has the name matching argument
  def idsWithName(name: String) = values.collect:
    case User(name = `name`, id = userId) => userId
```

Last, but not least, named tuples are opening a new paradigm of metaprogramming by letting you to compute structural types without need for macros!
The `Selectable` trait now has a `Fields` type member that can be instantiated to a named tuple.

```scala
class QueryResult[T](rawValues: Map[String, Any]) extends Selectable:
  type Fields = NamedTuple.Map[NamedTuple.From[T], Option]
  def selectDynamic(fieldName: String) = rawValues.get(fieldName)
  
case class City(zipCode: Int, name: String)

@main def Test =
  val query: QueryResult[City] = QueryResult(Map("name" -> "Lausanne"))
  assert(query.name.contains("Lausanne"))
  assert(query.zipCode.isEmpty)
```

You can read more about named tuples in the [dedicated section of Scala 3 reference documentation](https://scala-lang.org/api/3.6.0/docs/docs/reference/other-new-features/named-tuples.html).

## SIP-62 - For-Comprehension Improvements

Starting with Scala 3.6.0 you can take advantage of improvements to the for-comprehesnions syntax.
Major user-facing improvement introduced by [SIP-62](https://docs.scala-lang.org/sips/better-fors.html) is ability to start for-comprehension block with aliases:

```scala
for {
  a = 1
  b <- Some(2)
  c <- doSth(a)
  extension (values: Seq[T]) def toSorted: Seq[T] = ???
```

It also introduces changes to how your code is desugared by the compiler, leading to a more optimized code by removing some redundant calls.

## SIP-64 - Improve Syntax for Context Bounds and Givens

This release stabilises the [SIP-64](https://docs.scala-lang.org/sips/sips/typeclasses-syntax.html) introduced as experimental in Scala 3.5.0. These changes provide you with the new syntax for defining type class instances.
The goal of these changes is to simplify and narrow the syntax rules required to create a given instance. To name a few:

- you can now replace the `with` keyword with `:` when defining the simple type classes,
- context bounds can now be named and aggregated using `T : {A, B}` syntax,
- given methods defining requring contextual arguments can now be defined and chained using value
- conditional givens can also be defined with parameters
- by-name givens can be defined using conditional given with empty parameters list

```scala
trait Order[T]:
  extension (values: Seq[T]) def toSorted: Seq[T] = ???
  def compare(x: T, y: T): Int

// No need for `with` keyword
given Order[Int]:
  def compare(x: Int, y: Int): Int = ???

// Named given using named context bound parameter
given listOrdering: [T: Order as elementOrder] => Order[List[T]]:
  def compare(x: List[T], y: List[T]): Int = elementOrder.compare(x.head, y.head)

trait Show[T]:
  extension (value: T) def asString: String

// Aggregated context parameters
def showOrdered[T: {Order as unusedName, Show}](values: Seq[T]): Unit =
  values.toSorted.map(_.asString).foreach(println)

// Conditional givens where a contextual instance of Config is required to create an instance of Factory
trait Config
trait Factory
class MemoizingFactory(config: Config) extends Factory
given (config: Config) => Factory = MemoizingFactory(config)

// By-name given
trait Context
given context: () => Context = ???
```

Other changes to type classes involve the stabilisation of context bounds for type members.
The next mechanism allows to definition of an abstract given instance that needs to be provided by the class implementing trait that defines abstract given.

```scala
trait Collection:
  // abstract member context-bound
  type Element: Order

class List[T: Order] extends Collection:
  type Element = T
  // given Order[Element] = ev$1 // generated by compiler, uses class context bound

class Set[T] extends Collection:
  type Element = T
  override given Order[Element] = ??? // custom implementation provided by the user
```

See the updated [Contextual Abstractions](https://scala-lang.org/api/3.6.0/docs/docs/reference/contextual/givens.html) chapter of the Scala 3 reference guide to learn more about these changes.

_**Note**: It is important not to confuse changes under SIP-64 with the [experimental modularity improvements](https://dotty.epfl.ch/docs/reference/experimental/typeclasses.html) available under `-language:experimental.modularity` and `-source:future`. These changes are still being developed in the experimental phase and would require SIP committee acceptance before stabilisation.

## SIP-56 Amendment: Match types extractors follow aliases and singletons

Scala 3.6.0 also stabilises the improvements of match types previously available under `-language:experimental.betterMatchTypeExtractors`. These changes were amending the match type specification and adjusting the implementation of match types to resolve some of the issues reported by users. Under the new rules, it is possible to correctly resolve aliases and singleton types.

```scala
trait A:
  type T
  type U = T

trait B extends A:
  type T = String

type F[X] = A { type U = X }
type InvF[Y] = Y match
  case F[x] => x

def Test = summon[InvF[B] =:= String] // was error: selector B does not uniquely determine parameter x
```

## Experimental SIP-57 - Replace non-sensical `@unchecked` annotations

One of the new, experimental, features is the implementation of [SIP-57](https://docs.scala-lang.org/sips/replace-nonsensical-unchecked-annotation.html) introducing a `runtimeChecked` extension method replacing some usages of `@unchecked` annotation using a more convenient syntax. A common use case for `runtimeChecked` is to assert that a pattern will always match, either for convenience or because there is a known invariant that the types can not express.

Some typical use cases might be looking up an expected entry in a dynamically loaded dictionary-like structure:

```scala
trait AppConfig:
  def get(key: String): Option[String]
val config: AppConfig = ???

val Some(appVersion) = config.get("appVersion").runtimeChecked
```

# Other notable changes

## Switch mapping of context bounds to using clauses

Until Scala 3.6.0 context bound parameters were always desugared to `implicit` arguments, starting with 3.6.0 these would be mapped to `using` parameters instead.
This change should not affect the majority of users, however, it can lead to differences in how implicits are resolved.
Resolution of implicits can slightly differ depending on whether we're requesting them using `implicit` or `using` parameter, or depending on whether it was defined using `implicit` or `given` keywords. The special behaviours were introduced to a smooth migration from Scala 2 to brand new implicits resolution in Scala 3.
This change might also affect some of the projects that use compiler plugins or macros to inspect the implicit argument lists of the function calls - these might require some minor fixes, eg. when filtering symbols by their flags.

<!-- TODO: Create and link docs describing differences between given/implicit -->

## Work on a better scheme for given prioritization

In the [Scala 3.5.0 release notes](https://scala-lang.org/blog/2024/08/22/scala-3.5.0-released.html) we've announced upcoming changes to givens, due to their peculiar problem with prioritization. Currently, the compiler always tries to select the instance with the most specific subtype of the requested type. In the future, it would change to always selecting the instance with the most general subtype that satisfies the context-bound.

Starting from Scala 3.6.0, code whose behaviour can differ between new and old rules (ambiguity on new, passing on old, or vice versa) will emit warnings, but the old rules will still be applied.
Running the compiler with `-source:3.5` will allow you to temporarily keep using the old rules; with `-source:3.7` or `-source:future` you will get to use the new scheme.

For the detailed motivation of changes with examples of code that will be easier to write and understand, see our recent blog post - Upcoming Changes to Givens in Scala 3.7.

## Require named arguments for Java-defined annotations

Java-defined annotations don't have an exact constructor representation. The compiler previously relied on the order of the fields to create annotation instance. One possible issue with this representation is the reordering of the fields.
Let's take the following example:

```scala
  public @interface Annotation {
    int a() default 41;
    int b() default 42;
  }
```

Reordering the fields is binary-compatible but it might affect the meaning of `@Annotation(1)`
Starting from Scala 3.6.0, named arguments are required for Java-defined annotations.
The compiler can provide you with automatic rewrites introducing now required names, using `-source:3.6-migration, -rewrite` flags. The rewrites are done on a best-effort basis and should be inspected for correctness by the users.

# What’s next?
<!-- TODO: Fill me -->

# Contributors

Thank you to all the contributors who made this release possible 🎉

According to git shortlog -sn --no-merges 3.5.2..3.6.0 these are:

<!-- TODO: Fill me -->
