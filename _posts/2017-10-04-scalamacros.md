---
category: blog
by: Ólafur Páll Geirsson
title: "Roadmap towards non-experimental macros"
---

This week, the Scala Center joins the multi-year efforts of Eugene Burmako and
his collaborators to establish a non-experimental and portable macro system for
Scala.
With Eugene's blessing, I will be taking the lead on behalf of the Scala Center
to develop this project in close collaboration with the Scala community, the
Dotty team at EPFL, Scala compiler team at Lightbend and the IntelliJ Scala
Plugin team at Jetbrains.
This initiative follows [SCP-014], a proposal that was approved two weeks ago
with an overwhelming majority of the Scala Center Advisory Board.

## Brief history
Before diving into the roadmap of this new exciting development, I'd like to
briefly summarize and recognize the efforts that have been made so far towards
establishing a standard, non-experimental macro system for Scala.
I'll try to keep it short here, for a more comprehensive coverage please refer
to the list of [papers written by Eugene Burmako][papers], the founder of Scala
Macros, in particular his PhD thesis [Unification of Compile-Time and Runtime
Metaprogramming in Scala][thesis].

If you want the TL;DR, see [next steps](#next-steps).

### v1: scala.reflect

Scala.reflect-based macros are an integral part of the Scala 2.x ecosystem.
Well-known libraries like ScalaTest, Sbt, Spark, Circe, Slick, Shapeless,
Spire and others use scala.reflect macros to achieve previously unreachable
standards of expressiveness, type safety and performance.

Unfortunately, scala.reflect-based macros have also gained notoriety as an
arcane and brittle technology.
The most common criticisms of scala.reflect is its sub-par tooling support
and non-portable metaprogramming API based on Scala 2.x compiler internals.
Even five years after their introduction, scala.reflect macros still can't
expand in IntelliJ, leading to proliferation of spurious red squiggles -
sometimes in pretty simple code.

Quoting Eugene Burmako, the author of Scala macros, in [SIP-16] on
self-cleaning macros

> While trying to fix these problems via evolutionary changes to the current
> macro system, we have realized that most of them are caused by the decision
> to use scala.reflect as the underlying metaprogramming API. Modelled after
> compiler internals, scala.reflect inherits many of its peculiar design
> choices. Extensive use of desugarings and existence of multiple independent
> program representations may have worked well for compiler development, but
> they turned out to be inadequate for a public API.

As a result of these known limitations, the language committee has decided to
retire the scala.reflect-based macro system.
Another justification for retiring the scala.reflect-based macro system was
that a new macro system based on Scalameta was "just around the corner".

### v2: scala.meta

The [Scalameta] project was founded to become a better macro system for Scala,
with the vision to replace scala.reflect as the de-facto metaprogramming
toolkit for Scala.

With Scalameta, we managed to support macro annotations in
[Scala 2.x](http://scalameta.org/paradise/),
[IntelliJ Scala plugin](https://blog.jetbrains.com/scala/2016/11/11/intellij-idea-2016-3-rc-scala-js-scala-meta-and-more/)
and
[Dotty](https://github.com/liufengyun/eden).
The novelty with Scalameta macros was that they converted compiler-specific
ASTs into the [Scalameta AST], which is a large collection "dumb" data
containers that leak no implementation details from the compiler.
The details of this approach are explained in more detail in [SIP-29], a
proposal to use Scalameta as the foundation for building macros in Scala.

In Scalafmt, I use Scalameta macro annotations to generate readers for
over 
[90 different configuration options](http://scalameta.org/scalafmt/#Configuration)
into a single case class
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">New style &quot;inline/meta&quot; macro merged into scalafmt, Dotty-ready macros are happening and they are amazing! <a href="https://twitter.com/hashtag/scala?src=hash">#scala</a> <a href="https://github.com/scalameta/scalafmt/pull/459">scalameta/scalafmt#459</a> <a href="https://t.co/ZvjdWE0Gp3">pic.twitter.com/ZvjdWE0Gp3</a></p>&mdash; Ólafur Páll Geirsson (@olafurpg) <a href="https://twitter.com/olafurpg/status/779372897198637057">September 23, 2016</a></blockquote>

Many other OSS Scala libraries also use Scalameta macro annotations to
to maximize type safety, expressiveness and performance:
- [Freestyle](http://frees.io/):  cohesive & pragmatic framework of FP centric
  Scala libraries
- [Stalagmite](https://vovapolu.github.io/scala/stalagmite/perf/2017/09/02/stalagmite-performance.html):
  effective and customizable replacement of conventional case classes with
  convenient optimizations.
- [Mainecoon](http://kailuowang.com/mainecoon/): A library for transforming and
  composing tagless final algebras
- [Dilate](https://github.com/vitorsvieira/dilate) /
  [Newtypes](https://github.com/alexknvl/newtypes): better value
  classes/newtypes for Scala.
- [Example.scala](https://static.javadoc.io/com.thoughtworks.example/unidoc_2.12/2.0.0/com/thoughtworks/example.html):
  Generate unit tests from Scaladoc strings

The Scala community is indeed creative and eager to explore new metaprogramming
facilities.

Scalameta macro annotations are far from perfect, they suffer from integration
problems with Scaladoc, Scala IDE/presentation compiler, 
Scala REPL and other compiler plugins such as Scoverage.
Most importantly however, we discovered several drawbacks with the converter-based
approach while adding support for def macros with access to the semantic API.
The issues we encountered are documented in more detail in section 3 of the
technical report ["Two Approaches to Portable Macros"].

Nevertheless, we learned a few important lessons

- Users and macro authors care a lot about IDE support, in particular IntelliJ
  support.
- Building a portable macro system with ASTs that don't leak compiler
  implementation details is possible.
- Eagerly converting between the compiler and scalameta ASTs introduces
  a lot of problems that can be avoided by implementing macros in terms of
  extractor/constructor methods on *abstract syntax*.

With these lessons learned, we decided to retire our efforts to build a macro
system on top of Scalameta.
From now on, Scalameta's primary focus is to support building developer tools
such as Scalafmt, Scalafix and Metadoc.

### v3: scala.macros

In winter and spring 2017, Eugene Burmako at Twitter and Liu Fengyun at EPFL
worked on a new macro system to address the limitations of scala.reflect-based
and scala.meta-based macros.
This third iteration of Scala Macros builds on top of the strengths of the
scala-reflect API with the following distinction, it's

- smaller, the API exposes as little as possible from the compiler
  while still being able to support most interesting macro applications.
- more robust, common pitfalls in scala.reflect-based macros are guarded by
  the type system with separation of typed and untyped trees.

The design of this approach is explained in more detail in
section 4 "The Syntax-Based approach" of the technical report
["Two approaches to portable macros"].
The latest implementation of this design is hosted at [scalacenter/macros].
I want to thank Twitter for allowing Eugene Burmako to share this
implementation, that he created during work-hours, under a BSD 3 license.
This repository has a working prototype that we can base our future work on.

One paint point in macros v1 that macros v3 does not address is the separate
compilation restriction.
Macro definitions must still be compiled in a separate project from where they
are used.
Nevertheless, we believe that v3 represents a significant enough improvement to
forgive this restriction, which is admittedly an inconvenience for macro authors
but arguably not a blocker for adoption.

## Next steps

As the history above shows, establishing a stable macro system for Scala is a
large undertaking.
It has taken many years to reach where we are today, involving a collaboration
between many different parties.
We still have a long way to go to reach the level of expressiveness, robustness
and simplicity that we seek in a stable macro system.

Here below is a rough estimated roadmap for macros v3

- in Scala 2.12, we experiment with compiler plugins
- in Dotty, Liu Fengyun at EPFL will work on integrations
- in IntelliJ, Mikhail Mutcianko from the Scala Plugin team at Jetbrains will
  work on integrations
- in Scala 2.13, we continue to experiment via compiler plugins and compiler
  feature flags in later minor releases
- in Scala 2.14 macros v3 become no longer “experimental” and scala.reflect is
  deprecated

Following the recommendation of the Scala Center Advisory Board, the work on
macros v3 will be an iterative processes between

-  implementing macro features that have been approved for inclusion into
   macros v3
-  gathering feedback from the community on what macro features merit inclusion
   in macros v3

As for the first part, we immediately begin development to support a limited
subset of blackbox def macros.

### Blackbox def macros

Blackbox def macros have non-controversially proven themselves to be invaluable
for the Scala community.
Examples of blackbox def macros include: `CaseClass.fieldNames` above,
ScalaTest `assert` and Play/Circe JSON automatic readers/writers.
Blackbox def macros share the following attributes:

- they're invoked at compile-time instead of runtime
- they can query the compiler for semantic information such as types and symbols.
- they faithfully respect their declared type signatures, making their
  implementation irrelevant to understand their behavior. From the end user's
  perspective, they look and behave much like regular Scala methods excluding
  the ability to emit compiler errors/warnings

These attributes of blackbox def macros enable them to mix naturally into
Scala codebases and make them prime for inclusion in the Scala Language
Specification.

### SIP proposal

Alongside prototyping preliminary support for a limited set of blackbox def
macros, we will immediately begin preparing a SIP proposal to include macros
v3 into the Scala Language Specification.
We plan to address the valuable reviews made to [SIP-29] on inline/meta in a
new proposal, so that SIP-29 can be rejected.
In addition, we will document how we we aim to solve hygiene using an
innovation discovered by the collaboration of Liu Fengyun and Eugene Burmako.
Hygiene plagues most macro tutorials and was previously considered to be out of
scope for SIP-29

### Documentation

Currently, there is no official guide for exploring the wide landscape of
metaprogramming facilities that are available to Scala developers.
While discussing macros with members of the OSS community and industry,
I repeatedly receive questions such as:
should I use def macros, annotations, shapeless, a compiler plugin or scripted
code generation?
There is no silver bullet, each solution comes with a set of trade-offs.

We plan to document the trade-offs of these different metaprogramming
solutions.
Especially, we want to document which use-cases macros are suitable for, and
which use-cases they're either overkill, or insufficient.
Macros should in general be used as a last resort.
We care deeply to know what you'd like to see covered in this documentation
effort.
Please share your thoughts.

### Share your thoughts
The current set of approved features in macros v3 does not reach feature parity
with the scala.reflect-based macro system.
Some scala.reflect macros rely on advanced capabilities beyond what
blackbox macros support.
Most notably, these features include (but are not limited to) whitebox def
macros and macro annotations.

By not supporting these advanced features, we put ourselves a fragile situation
where we risk forcing Scala users to remain on old versions of the compiler.
Such a situation is undesirable for both Scala users and those who wish to
evolve the language.
We must debate together as a community whether these advanced features
merit inclusion in the language specification or if they can be replaced
with alternative metaprogramming techniques.

To initiate this debate, I have started two [Scala Contributors] threads:
one on whitebox def macros and another on macro annotations.
In my posts, I try to reflect on the pros and cons of each feature in
an unbiased manner.
I look forwards to hearing your thoughts.
In particular, we should try to explore

- towards what end do you use these advanced features?
- why are the macros enabled by these features important for you and your
  users?
- can you use alternative metaprogramming techniques such as
  code generation scripts or compiler plugins to achieve the same
  functionality? How would that refactoring impact your macro?

I plan to include the results of these discussions in the SIP proposal for
macros v3.
The end result, I hope, will be a simpler Scala language with yet very capable
metaprogramming facilities.

## Acknowledgements

I want to express my great gratitude to Eugene Burmako and his relentless
efforts to make macros in Scala as capable and popular as they are today.
Eugene has been a steward of macros in Scala for over 6 years.
During both professional and personal time, he has generously worked on
exploring new metaprogramming paradigms, mentored dozens of people (including
myself!) and communicated his findings with the Scala community both online and
offline.
I am honored to take the lead from your solid guidance.
I look forward to continuing our fruitful collaboration and I hope we, together
as a community, can stand up to the challenge to complete this project to end.

[Scalameta AST]: https://github.com/scalamacros/scalamacros/blob/master/core/src/main/scala/scala/macros/trees/Trees.scala
[Scalameta]: https://infoscience.epfl.ch/search?ln=en&p=Burmako%2C+Eugene&jrec=1&f=author
[papers]: https://infoscience.epfl.ch/search?ln=en&p=Burmako%2C+Eugene&jrec=1&f=author
[thesis]: https://infoscience.epfl.ch/record/226166/files/EPFL_TH7159.pdf
[Scala Contributors]: https://contributors.scala-lang.org/
[fundep materialization]: https://docs.scala-lang.org/overviews/macros/implicits.html#fundep-materialization
[anonymous type providers]: http://docs.scala-lang.org/overviews/macros/typeproviders.html#anonymous-type-providers
[extractor macros]: http://docs.scala-lang.org/overviews/macros/extractors.html
[public type provider]: http://docs.scala-lang.org/overviews/macros/typeproviders.html#public-type-providers
[Scala Macros]: https://github.com/scalamacros/scalamacros
[scalamacros/scalamacros]: https://github.com/scalamacros/scalamacros
[scalacenter/macros]: https://github.com/scalamacros/scalamacros
[Stalactite]: https://gitlab.com/fommil/stalactite
[minutes]: https://scala.epfl.ch/minutes/2017/09/12/september-12-2017.html
[SCP-014]: https://scala.epfl.ch/minutes/2017/09/12/september-12-2017.html#scp-014-production-ready-scalamacrosscalamacros
[SIP-16]: https://github.com/scala/docs.scala-lang/pull/57#issuecomment-239210760
[SIP-29]: https://docs.scala-lang.org/sips/inline-meta.html#losing-whiteboxity
[SIP]: https://docs.scala-lang.org/sips/index.html
["Two Approaches to Portable Macros"]: https://www.dropbox.com/s/2xzcczr3q77veg1/gestalt.pdf
