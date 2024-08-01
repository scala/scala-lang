---
layout: blog-detail
post-type: blog
by: Oliver Bračevac, EPFL
title: "Changes to Givens Prioritization in Scala 3.5"
---

## Motivation

Starting with Scala 3.5, the prioritization of givens has been
improved to better handle inheritance triangles, resulting in enhanced
typeclass support.

Consider a scenario with the following inheritance triangle of type classes:
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
case, it chooses `a:Functor[List]`.

Inheritance triangles like this are common in practice, and the
prioritization change in Scala 3.5 makes working with them more
intuitive and straightforward.

## Tips for Migrating to 3.5

Based on our evaluation using the [open community
build](https://github.com/VirtusLab/community-build3), the impact of
this change on existing Scala 3 projects has been minimal. However,
there may still be cases where the behavior of existing programs
changes due to the new prioritization of givens.

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

To detect such "silent" changes, we recommend compiling under Scala
3.5 with the `-source:3.6-migration` flag:
```bash
scalac client.scala -source:3.6-migration
```
This will issue warnings when the choice of `given` has changed:
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

### Explicit Parameters

If the pre-3.5 behavior is preferred, you can explicitly pass the
desired given:
```scala
@main def run = printComponent(using libComponent)
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
@main def run: Unit = printComponent(libComponent)
...
```

### Outlook

We are considering adding `-rewrite` rules that automatically insert
explicit parameters when a change in choice is detected.
