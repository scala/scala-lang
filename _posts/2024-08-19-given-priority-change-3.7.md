---
layout: blog-detail
post-type: blog
by: Oliver Bračevac, EPFL
title: "Upcoming Changes to Givens in Scala 3.7"
---

## New Prioritization of Givens in Scala 3.7

Scala 3.7 will introduce changes to how `given`s are resolved, which can
affect program behavior when multiple `given`s are present.

For example, consider a library that provides a default
`given` for a component:
```scala
// library code
class LibComponent:
    def msg = "library-defined"

// default provided by library
given libComponent: LibComponent = LibComponent()

def printComponent(using c:LibComponent) = println(c.msg)
```

Up until Scala 3.6, clients of the library could override
`libComponent` with a user-defined one through subtyping

```scala
// client code
class UserComponent extends LibComponent:
    override def msg = "user-defined"

given userComponent: UserComponent = UserComponent()

@main def run = printComponent
```

Let's run the example:

```scala
run // Scala <= 3.6: prints "user-defined"
    // Scala 3.7: prints "library-defined"
```

What happened? In Scala 3.6 and earlier, the compiler prioritizes the
`given` with the _most specific_ compatible subtype
(`userComponent`). However, in Scala 3.7, it selects the value with the
_most general_ subtype instead (`libComponent`).


### Motivation: Better Handling of Inheritance Triangles & Typeclasses

Why change the priority to the `given` with the most general subtype?
This adjustment makes working with inheritance triangles more
intuitive.

For example, functional programmers will recognize the following
inheritance triangle of common typeclasses:

```scala
trait Functor[F[_]]:
  extension [A, B](x: F[A]) def map(f: A => B): F[B]
trait Monad[F[_]] extends Functor[F] { ... }
trait Traverse[F[_]] extends Functor[F] { ... }
```
Now, suppose we have corresponding instances of these typeclasses for `List`:
```scala
given Functor[List]  = ...
given Monad[List]    = ...
given Traverse[List] = ...
```
Let’s use these in the following context:
```scala
def fmap[F[_] : Functor, A, B](c: F[A])(f: A => B): F[B] = c.map(f)

fmap(List(1,2,3))(_.toString)
// ^ rejected by Scala < 3.7, now accepted by Scala 3.7
```

Before Scala 3.7, the compiler would reject the `fmap` call due to
ambiguity. Since it prioritized the `given` instance with the most
specific subtype of the context bound `Functor`, both `Monad[List]` and
`Traverse[List]` were valid candidates for `Functor[List]`, but neither
was more specific than the other. However, all that’s required is the
functionality of `Functor[List]`, the _most general_ instance, which Scala
3.7 correctly picks.

This change aligns the behavior of the compiler with the practical
needs of developers, making the handling of common triangle inheritance
patterns more predictable.

## Migrating to the New Prioritization

### Community Impact

We have conducted experiments on the [open community
build](https://github.com/VirtusLab/community-build3) that showed that
the proposed scheme will result in a more intuitive and predictable
given resolution. The negative impact on the existing projects is very
small. We have tested 1500 open-source libraries, and new rules are
causing problems for less than a dozen of them.

### Roadmap

The new `given` resolution scheme, which will be the default in Scala
3.7, can already be explored in Scala 3.5. This early access allows
the community ample time to test and adapt to the upcoming changes.

**Scala 3.5**

Starting with Scala 3.5, you can compile with `-source 3.6` to receive
warnings if the new `given` resolution scheme would affect your
code. This is how the warning might look:

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
   |           New choice from Scala 3.7: the second alternative
```

Additionally, you can compile with `-source 3.7` or `-source future`
to fully enable the new prioritization and start experiencing its
effects.

**Scala 3.6**

In Scala 3.6, these warnings will be on by default.

**Scala 3.7**

Scala 3.7 will finalize the transition, making the new given
prioritization the standard behavior.

#### Suppressing Warnings

If you need to suppress the new warning related to changes in `given`
search preference, you can use Scala’s facilities for configuring
warnings. For example, you can suppress the warning globally via the
command line:

```bash
scalac file.scala "-Wconf:msg=Given search preference:s"
```

It is also possible to selectively suppress the warning
using the  [`@nowarn` annotation](https://www.scala-lang.org/api/current/scala/annotation/nowarn.html):

```scala
import scala.annotation.nowarn

class A
class B extends A

given A()
given B()

@nowarn("msg=Given search preference")
val x = summon[A]
```

For more details, you can consult the guide on [configuring and suppressing warnings]({{ site.baseurl }}/2021/01/12/configuring-and-suppressing-warnings.html).

**Caution**: Suppressing warnings should be viewed as a temporary
workaround, not a long-term solution. While it can help address rare
false positives from the compiler, it merely postpones the inevitable
need to update your codebase or the libraries your project depends
on. Relying on suppressed warnings may lead to unexpected issues when
upgrading to future versions of the Scala compiler.

###  Workarounds

Here are some practical strategies to help you smoothly adapt to the
new given resolution scheme:

#### Resorting to Explicit Parameters

If the pre-3.7 behavior is preferred, you can explicitly pass the
desired given:
```scala
@main def run = printComponent(using userComponent)
```

To determine the correct explicit parameter (which could involve a
complex expression), it can be helpful to compile with an earlier
Scala version using the `-Xprint:typer` flag:
```scala
scalac client.scala -Xprint:typer
```
This will output all parameters explicitly:
```scala
...
@main def run: Unit = printComponent(userComponent)
...
```

#### Explicit Prioritization by Owner

One effective way to ensure that the most specific given instance is
selected -— particularly useful when migrating libraries to Scala 3.7 -—
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



