---
layout: blog-page
title: Scala in a (Tasty) Nutshell
author: Martin Odersky and Nicolas Stucki
authorImg: /images/martin.jpg
date: 2018-03-05
---

One of the biggest open questions for migrating to Scala 3 is what to do about macros. In this blog post we give our current thinking, which is to try to achieve full alignment between macros and Tasty.

## What is TASTY?

Tasty is the high-level interchange format for Scala 3. It is based on <u>t</u>yped <u>a</u>bstract <u>s</u>yntax <u>t</u>rees. These trees contain in a sense all the information present in a Scala program. They represent the syntactic structure of programs in every detail and also contain the complete information about types and positions. The Tasty "snapshot" of a code file is taken after type checking (so that all types are present and all implicits are elaborated) but before any transformations (so that no information is lost or changed). The file representation of these trees is heavily optimized for compactness, which means that we can generate full Tasty trees on every compiler run and rely on nothing else for supporting separate compilation.

The information present in TASTY trees can be used for many purposes.

 - The compiler uses it to support separate compilation.
 - A language server for an IDE uses it to support hyperlinking, command completion, or documentation.
 - A build tool can use it to cross-build on different platforms and migrate code from one
   version to another.
 - Optimizers and analyzers can use it for deep code analysis and advanced code generation

Of these usages, the first two work today. The other two are worthwhile possibilities to pursue in the future.

OK, but what is Tasty _exactly_? An up-to-date version of the Tasty file format is described in file
[TastyFormat.scala](https://github.com/lampepfl/dotty/blob/master/compiler/src/dotty/tools/dotc/core/tasty/TastyFormat.scala)
of the `dotc` compiler for Scala 3.

## What Does it Have to Do with Macros?

It turns out that Tasty also makes an excellent foundation for a new generation of reflection-based macros.

The first problem with the current `scala.reflect` macros is that they that they are completely dependent on the current Scala compiler (internally named `nsc`). In fact, `scala.reflect` macros are nothing but a thin veneer on top of `nsc` internals. This makes them very powerful but also fragile and hard to use. Because of this, they have had "experimental" status for their whole lifetime. Since Scala 3 uses a different compiler (`dotc`), the old reflect-based macro system cannot be ported to it, so we need something different, and hopefully better.

Another way to look at `scala.reflect` macros was that they were lacking _foundations_. Scala 3 has already some kind of meta programming facility, with well explored foundations. [Principled Meta Programming](http://dotty.epfl.ch/docs/reference/principled-meta-programming.html) is a way to support staging by adding just two operators to the language: Quote (`'`) to represent code expressions, and splice (`~`) to insert one piece of code in another. The inspiration for our approach [comes from temporal logic](https://ieeexplore.ieee.org/abstract/document/561317/).  A somewhat similar system is used for staging in [MetaOCaml](http://okmij.org/ftp/ML/MetaOCaml.html).
We obtain a very high level _macro system_ by combining the two temporal operators `'` and `~` with Scala 3's `inline` feature. In a nutshell:

 - `inline` copies code from definition site to call site
 - `(')` turns code into syntax trees
 - `(~)` embeds syntax trees in other code.

This approach to macros is very elegant, and has surprising expressive power. But it might a little bit too principled. There are still many bread and butter tasks one cannot do with it. In particular:

 - Syntax trees are "black boxes", we are missing a way to decompose them and analyze their structure and contents.
 - We can only quote and splice expressions, but not other program structures such as definitions or parameters.

We were looking for a long time for ways to augment principled meta programming by ways to decompose and flexibly reconstruct trees. The main problem here is choice paralysis - there is basically an infinite number of ways to expose the underlying structure. Quasi-quotes or syntax trees? Which constructs should be exposed exactly? What are the auxiliary types and operations?

If we make some choice here, how do we know that this will be the right choice for users today? How to guarantee stability of the APIs in the future? This embarrassment of riches was essentially what plagued `scala.reflect`. To solve this dilemma, we plan to go "bottom-up" instead of "top-down". We establish the following principle:

  _The reflective layer of macros will be isomorphic to Tasty._

This has several benefits:

 - **Completeness**. Tasty is Scala 3's interchange format, so basing the reflection API on it means no information is lost.
 - **Stability**. As an interchange format, Tasty will be kept stable. Its evolution will be carefully managed with a strict versioning system. So the reflection API can be evolved in a controlled way.
 - **Compiler Independence**. Tasty has been designed to be independent of the actual Scala compilers supporting it.
So the reflection API can be easily ported to new compilers. If a compiler supports Tasty as the interchange format, it can be made to support the reflection API at the same time.

## Scala in a Nutshell

As a first step towards this goal, we are working on a representation of Tasty in terms of a suite of compiler-independent data structures. The [current status](https://github.com/lampepfl/dotty/blob/master/tests/pos/tasty/definitions.scala) gives high-level data structures for all aspects of a Tasty file. With currently 192 lines of data definitions it reflects every piece of information that is contained in a Scala program after type checking. 192 lines is larger than a definition of mini-Lisp, but much, much smaller than the 30'000 lines or so of a full-blown compiler frontend!

## Next Steps

The next step, currently under way, is to connect these definitions to the Tasty file format. We plan to do this by rewriting them as [extractors](https://docs.scala-lang.org/tour/extractor-objects.html) that implement each data type in terms of the data structures used by the `dotc` compiler which are then pickled and unpickled in the Tasty file format. An interesting alternative would be to write Tasty picklers and unpicklers that work directly with reflect trees. The extractor-based approach was alredy pioneered in [ScalaMeta](http://scalameta.org) and [Gestalt](https://github.com/liufengyun/gestalt)

Then, we need to define and implement semantic operations such as

 - what are the members that can be selected on this expression?
 - which subclasses are defined for a sealed trait?
 - does this expression conform to some expected type?

Finally, we need to connect the new reflection layer to the existing high-level macro system. This looks not very difficult. In essence, we need to define a pair of mappings between high level trees of type `scala.quoted.Expr[T]` and lower-level Tasty trees of type `tasty.Term`. Mapping a high-level tree to a low-level one simply means exposing its structure. Mapping a a low-level tree to a high-level tree of type `scala.quoted.Expr[T]` means checking that the low-level tree has indeed the given type `T`. That should be all.

## Future Macros

Adopting this scheme gives already some idea what Scala 3 macros will look like. First, they will run after the typechecking phase is finished because that is when Tasty trees are generated and consumed. This means macros will be blackbox - a macro expansion cannot influence the type of the expanded expression as seen from the typechecker. A long as that constraint is satisfied we should be able to support both `def` macros and annotation macros.

We might support some forms of whitebox macros by allowing macros in the types themselves. These macros would be highlevel only, and would integrate with implicit search. A sketch of such as system is outlined in [Dotty PR 3844](https://github.com/lampepfl/dotty/pull/3844]).

The Scala 3 language should also directly incorporate some constructs that so far required
advanced macro code to define. For instance:

 - We model lazy implicits directly using
[by-name parameters](http://dotty.epfl.ch/docs/reference/implicit-by-name-parameters.html) instead of through a complicated macro.
 - Native [type lambdas](http://dotty.epfl.ch/docs/reference/type-lambdas.html) reduce the need for
   [kind projector](https://github.com/non/kind-projector).
 - We also plan to offer the basic building blocks for [generic programming](https://github.com/milessabin/shapeless) and [typeclass derivation](https://github.com/propensive/magnolia).

## Please Give Us Your Feedback!

What do you think of the macro roadmap? Your feedback would be much appreciated. There is also lots of scope to shape the future by contributing to the development.
