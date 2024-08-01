---
layout: blog-detail
post-type: blog
by: Oliver Bračevac, EPFL
title: "Changes to Givens in Scala 3.5"
---

## New Prioritization of Givens

Starting with Scala 3.5, the prioritization of givens has been
improved to better handle inheritance triangles, resulting in enhanced
typeclass support.

Consider a scenario with the following inheritance triangle of type
classes:
```scala
trait Functor[F[_]]:
  extension [A, B](x: F[A]) def map(f: A => B): F[B]
trait Monad[F[_]] extends Functor[F] { ... }
trait Traverse[F[_]] extends Functor[F] { ... }
```
and corresponding instances:
```scala
given a:Functor[List]  = ...
given b:Monad[List]    = ...
given c:Traverse[List] = ...
```
Now, let’s use these in the following context:
```scala
def fmap[F[_] : Functor, A, B](c: F[A])(f: A => B): F[B] = c.map(f)
fmap(List(1,2,3))(_.toString)
// ^ rejected by Scala < 3.5, now accepted by Scala 3.5
```

Before Scala 3.5, the compiler would reject the `fmap` call due to
ambiguity. Since it prioritizes the `given` instance with the _most
specific_ subtype of the context bound `Functor`, both `c` and `b` are
valid candidates for `Functor[List]`, but neither is more specific
than the other. However, all we really need is the functionality of
`a:Functor[List]`!

In Scala 3.5, the compiler now selects the instance with the _most
general_ subtype that satisfies the context bound of `fmap`. In this
case, it chooses the desired `a:Functor[List]`.

Inheritance triangles like this are common in practice, and the
prioritization change in Scala 3.5 makes working with them more
intuitive and straightforward.

### Community Impact

Based on our evaluation using the [open community
build](https://github.com/VirtusLab/community-build3), the impact of
this change on existing Scala 3 projects has been minimal. However,
there may still be cases where the behavior of existing programs
changes due to the new prioritization of givens. Cf. below for
tips to migrate to Scala 3.5.


## Tips for Migrating to the New Prioritization


In some cases, the new prioritization might silently select the wrong
`given`. For example, consider a library that provides a default
`given` for a component:
```scala
// library code
class LibComponent:
    def msg = "library-defined"

// default provided by library
given libComponent: LibComponent = LibComponent()

def printComponent(using c:LibComponent) = println(c.msg)
```

Clients of the library might have relied on the “most specific”
prioritization to override the default given with a user-defined one:
```scala
// client code
class UserComponent extends LibComponent:
    override def msg = "user-defined"

given userComponent: UserComponent = UserComponent()

@main def run = printComponent 
// Scala < 3.5: prints "user-defined"
// Scala 3.5: prints "library-defined"
```

Scala 3.5 will automatically issue
warnings when the choice of `given` has changed:

```scala
-- Warning: client.scala:11:30 ------------------------------------------
11 |@main def run = printComponent
   |                              ^
   |           Given search preference for LibComponent between alternatives
   |             (userComponent : UserComponent)
   |           and
   |             (libComponent : LibComponent)
   |           has changed.
   |           Previous choice          : the first alternative
   |           New choice from Scala 3.6: the second alternative
```


### Useful Compiler Options

In future releases (Scala 3.6+), automatic warnings related to changes
in the selection of givens, as described above, will no longer be
issued by default. However, these warnings can be reactivated using
the `-source:3.5` option with `scalac`.

Additionally, combining Scala 3.5 with the `-source:3.6` option can be
useful to verify that implicit search results will not be ambiguous in
future versions or to test your application at runtime with the new
rules in effect.

### Resorting to Explicit Parameters

If the pre-3.5 behavior is preferred, you can explicitly pass the
desired given:
```scala
@main def run = printComponent(using userComponent)
```

To determine the correct explicit parameter (which could involve a
complex expression), it can be helpful to compile with Scala 3.4 (or
earlier) using the `-Xprint:typer` flag:
```scala
scalac client.scala -Xprint:typer
```
This will output all parameters explicitly:
```scala
...
@main def run: Unit = printComponent(userComponent)
...
```

### Explicit Prioritization by Owner

One effective way to ensure that the most specific given instance is
selected -— particularly useful when migrating libraries to Scala 3.5 -—
is to leverage the inheritance rules as outlined in point 8 of [the
language
reference](https://docs.scala-lang.org/scala3/reference/changed-features/implicit-resolution.html):

```scala
class General
class Specific extends General

class LowPriority:
  given a:General()

object NormalPriority extends LowPriority:
  given b:Specific()

def run =
  import NormalPriority.given
  val x = summon[General]
  val _: Specific = x // <- b was picked
```

The idea is to enforce prioritization through the inheritance
hierarchies of classes that provide `given` instances. By importing the
`given` instances from the object with the highest priority, you can
control which instance is selected by the compiler.

### Outlook

We are considering adding `-rewrite` rules that automatically insert
explicit parameters when a change in choice is detected.


## Towards Context Bounds as Givens

We are gradually phasing out remaining uses of Scala 2 style
`implicit`s in favor of the `given`/`using` syntax.  Scala 3.5 marks
the first step in transitioning context bounds on type parameters to
givens, with this transition expected to be completed in the upcoming
Scala 3.6 release.

Currently, context bounds on type parameters still desugar into
`implicit` parameters:

```scala
def f[Element : Eq : Ordering] = summon[Eq[Element]].toOrdering 
// expands to:
def f[Element >: Nothing <: Any](implicit evidence$1: Eq[Element],
      implicit evidence$2: Order[Element]): Ordering[Element] =
      evidence$2.toOrdering
```

Prior to Scala 3.5, it was possible to pass `implicit` arguments
explicitly for context bounds as if they were regular arguments. In
Scala 3.5, however, these parameters must be qualified with `using`:

```scala
val eq: Eq[Int] = ???
val ord: Order[Int] = ???
f(eq, ord)       // ok in Scala < 3.5, error in 3.5
f(using eq, ord) // ok in Scala 3.5
```

At this stage, the change does not affect the expansion of functions
like `f` above, which still rely on `implicit` parameters. However,
this is a crucial step towards facilitating the eventual transition to
`given`s for context bounds in Scala 3.6.

To assist with the migration to explicit `using` clauses, Scala 3.5
provides an error message and offers automatic rewrites:

```scala
-- Error: bounds.scala:10:2 ----------------------------------------------
10 |  f(eq, ord)  // error
   |  ^
   |Context bounds will map to context parameters.
   |A `using` clause is needed to pass explicit arguments to them.
   |This code can be rewritten automatically under -rewrite -source 3.4-migration.
```
