---
layout: blog-detail
post-type: blog
by: Sébastien Doeraene
title: Work-in-Progress Scala 3 Specification
description: We published a work-in-progress specification for Scala 3.
---

When learning a language or working on a daily basis, we refer to documentation, tutorials, and help from our peers.
In some situations, it is more appropriate to refer to the *specification* of the language.
For example, when deciding whether a tricky bug report is really a bug or expected behavior; or when evaluating new proposals for language features and their interactions with the existing language.

Until now, Scala 3 did not have any precise specification.
It was only described as [a number of changes](https://docs.scala-lang.org/scala3/reference/) compared to the [Scala 2.13 specification](https://scala-lang.org/files/archive/spec/2.13/).

We now published a work-in-progress [specification for Scala 3](https://scala-lang.org/files/archive/spec/3.4/).
Not all Scala 3 features have been integrated yet, but the fundamentals are ready:

* the new type system, with path-dependent types, higher-kinded types, unions and intersections at its core,
* the majority of syntax changes, including the rules for optional braces,
* `enum`s,
* opaque type aliases, and
* unification of "declarations" and "definitions".

The most important features that are still missing are:

* `extension` methods,
* `given` and `using` contextual abstractions,
* type-class derivation with `derives`,
* behavior of structural types based on `Selectable`,
* meta-programming with `inline def`s and quotes, and
* match types (pending a [Scala Improvement Proposal](https://github.com/scala/improvement-proposals/pull/65) with a full specification).

In the rest of this post, we point out a few interesting aspects of the new specification.

## Path-dependent and higher-kinded first

When learning or teaching Scala, not many people would choose path-dependent types and higher-kinded types as the first concepts to explore.
Yet, in the Scala 3 specification, these are the most fundamental types, which therefore come first.

In Scala 2, the type system was based on *class types* first (including traits and `object` classes), along with *type projections* of the form `T#X`.
Path-dependent types were described as a combination of *singleton types* and type projections.
For example, the meaning of a type like `p.X` was specified in terms of `(p.type) # X`.

In Scala 3, general type projections do not exist anymore, so everything is turned around.
Path-dependent types are the core concept on which the type system is built.
You can see evidence of that in [Chapter 3, Types](https://scala-lang.org/files/archive/spec/3.4/03-types.html#designator-types), starting at "type designators".
For example, we never mention class types without their prefix: `C` is a class but not a type; we use `p.C` everywhere for class types.

The other fundamental difference is about higher-kinded types.
In Scala 2, type lambdas are not first-class types.
Higher-kinded types are treated in special ways, with dedicated handling for their own type parameters.

In Scala 3, higher-kinded types are nothing but regular types upper-bounded by a type lambda.
In fact, we can truly say that the *kind* of a type *is* its bounds.
This makes type lambdas a crucial aspect of the type system, so much so that they are defined at the beginning of the Types chapter, right after `Nothing` and `AnyKind`.
This allows most of the specification to handle higher-kinded types and proper types in a unified way.

For readers who are familiar with the compiler codebase or the macros API, you may also be surprised to discover that `Nothing` and `AnyKind` are *not* classes in the Scala 3 specification.
Instead, they are very special, primordial types: they have their own "entry" in the grammar of [Section 3.1, Internal Types](https://scala-lang.org/files/archive/spec/3.4/03-types.html#internal-types), and they are defined to be the bottom and top types of the type system in [Section 3.2.1, Kinds](https://scala-lang.org/files/archive/spec/3.4/03-types.html#kinds).
`scala.Any`, on the other hand, is a regular class type.

## The simplicity of opaque type aliases

One intriguing detail is how *simple* opaque type aliases are in the specification, compared to their apparent complexity in terms of usage.
The only places of the specification that handle opaque type aliases are the following:

* [Section 4.3, Type Member Definitions](https://scala-lang.org/files/archive/spec/3.4/04-basic-definitions.html#type-member-definitions), defines (among other kinds of type member definitions):
  * the syntax of opaque type aliases
  * the desugaring of polymorphic opaque type aliases
  * the conditions under which the definition is valid (notably that the actual alias conforms to the declared bounds)
* [Section 3.5.3, Member Type](https://scala-lang.org/files/archive/spec/3.4/03-types.html#member-type), concentrates the actual *meaning* of opaque type aliases in a single "if statement":
  > If `m` is an opaque type alias member definition with declared definition `>: L <: H = V`, then
  >  * [its underlying type definition] `U` is `= V` if `p = D.this` or if we are computing `memberType` in a transparent mode,
  >  * `U` is `>: L <: H` otherwise.

That is all there is to it.
`memberType` is the source of truth for who sees the private alias and who only sees the public bounds.
Every interaction between opaque type aliases and other features of the language exclusively depends on that single "if statement".

## The complexity of `enum`s

While opaque type aliases are much simpler in the specification than they appear to users, the converse is true for `enum`s.
We teach enums to beginner Scala programmers.
They were specifically designed to make it much simpler to define abstract data types (ADTs), replacing many uses of `sealed abstract class` hierarchies.

In the specification, however, they get an entire section just for them.
[Section 5.6, Enum Definitions](https://scala-lang.org/files/archive/spec/3.4/05-classes-and-objects.html#enum-definitions) specifies how enums are desugared into sealed abstract classes, case classes and vals, with a surprisingly large amount of details.
The section is longer than those for `class`es and `case class`es combined.

This shows that the specification complexity is not correlated with perceived feature complexity.

## Next steps

Now that the foundations are laid out, we decided to publish our work-in-progress specification.
However, much remains to be done.
In the coming months, we will integrate the missing pieces we mentioned at the beginning of this post.

In the meantime, this specification can already serve as a reference for many core aspects of Scala 3.
We also expect that new Scala Improvement Proposals will be able to provide a specification PR, which will help us better evaluate them.
