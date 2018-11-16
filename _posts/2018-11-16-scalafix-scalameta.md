---
category: blog
by: Ólafur Páll Geirsson, Eugene Burmako
title: "Build code analyzers with Scalameta and Scalafix"
---

We are excited to announce the release of
[Scalameta v4.0.0](https://github.com/scalameta/scalameta/releases/tag/v4.0.0)
and
[Scalafix v0.9.0](https://github.com/scalacenter/scalafix/releases/tag/v0.8.0-RC1)
introducing new APIs enabling more advanced source code analysis. Scalameta is a
library to read, analyze, transform and generate Scala programs. Scalafix is a
refactoring and linting tool.

This release is the result of a close collaboration between the Scala Center and
Twitter along with contributions from over 30 contributors in the community. Big
thanks to everybody who made this happen!

## Get started with the new documentation

A big focus of this release has been documentation. Scalameta and Scalafix have
new websites with guides, cookbooks and reference documents.

Visit [scalameta.org](https://scalameta.org/) to see the new Scalameta
documentation. Key pages of the site include:

- [SemanticDB specification](https://scalameta.org/docs/semanticdb/specification.html):
  learn the details of the new semantic API.
- [SemanticDB guide](https://scalameta.org/docs/semanticdb/specification.html):
  get started with the SemanticDB command-line tools `metac`, `metacp` and
  `metap`.
- [Trees guide](https://scalameta.org/docs/trees/guide.html): learn how to
  parse, construct, traverse and transform Scala syntax trees.
- [ScalaFiddle playground](https://scalameta.org/docs/trees/scalafiddle.html):
  explore Scalameta APIs directly in the browser with access to code completions
  and fast edit/compile/run feedback. Big thanks to
  [scalafiddle.io](https://scalafiddle.io/) for providing a great service!

Visit
[scalacenter.scalafix.io/scalafix](https://scalacenter.scalafix.io/scalafix/) to
see the new Scalafix documentation. Key pages of the site include:

- [Implementing custom rules tutorial](https://scalacenter.github.io/scalafix/docs/developers/tutorial.html):
  learn all the steps of implementing a custom rewrite or linter rule, starting
  from tests and ending with publishing.
- [Patch reference](https://scalacenter.github.io/scalafix/docs/developers/tutorial.html):
  learn how to programmatically rewrite Scala source code while preserving
  comments and formatting trivia.
- [SymbolInformation cookbook](https://scalacenter.github.io/scalafix/docs/developers/symbol-information.html):
  learn how to query information about symbols such as method parameters and
  class members.
- [SemanticTree cookbook](https://scalacenter.github.io/scalafix/docs/developers/semantic-tree.html):
  learn how to query inferred types.

We hope the new documentation helps more people join the effort in building
developer tools for Scala.

## Query information about Scala and Java symbols

A highlight of this release is the new ability to query information about Scala
and Java symbols on the classpath. Symbol information includes the symbol's kind
(`class`/`trait`/`object`), properties (`final`/`implicit`/`sealed`), signature
(method parameters/class declarations), annotations (`@inline`) and access
modifiers (`private`/`protected`).

In Scalameta, symbol information is documented in the
[SemanticDB specification](https://scalameta.org/docs/semanticdb/specification.html#symbolinformation).
SemanticDB is a data model for semantic information such as symbols and types
about programs in Scala and Java. SemanticDB decouples production and
consumption of semantic information, establishing documented means for
communication between tools.

The SemanticDB specification contains dedicated sections for
[Scala symbols](https://scalameta.org/docs/semanticdb/specification.html#scala-symbolinformation)
and
[Java symbols](https://scalameta.org/docs/semanticdb/specification.html#java-symbolinformation)
with relevant hyperlinks to respective language specifications. The SemanticDB
specification also contains detailed code examples illustrating how Scala and
Java language features map into SemanticDB data structures.

In Scalafix, there is a library API to query information about SemanticDB
symbols. The
[`SymbolInformation` cookbook](https://scalacenter.github.io/scalafix/docs/developers/symbol-information.html#cookbook)
includes small recipes for how to perform a range of tasks such as listing the
parameters of a method or finding all supertypes of a class.

## Inspect inferred implicits and inferred type parameters

A new feature in this release is
[`Synthetic`](https://scalameta.org/docs/semanticdb/specification.html#synthetic),
a data structure that encodes trees that do not appear in the original source
code but are added by the compiler. Examples of synthetics include inferred type
parameters, implicit arguments, or desugarings of for comprehensions.

In Scalameta, synthetics are documented in the
[SemanticDB specification](https://scalameta.org/docs/semanticdb/specification.html#scala-synthetic).
In Scalafix, there is a library API to inspect synthetics via the `.synthetic`
extension method. For example, the code `Some(1)` has a synthetic `*.apply[Int]`
where `*` represents the original `Some` tree node and `apply` resolves to the
symbol `scala/Option.apply().`. Consult the new
[`SemanticTree` docs](https://scalacenter.github.io/scalafix/docs/developers/semantic-tree.html#look-up-inferred-type-parameter)
to learn more about using synthetics in the Scalafix API.

Synthetics were contributed by [Max Ovsiankin](http://github.com/maxov) during
his internship at Twitter this summer. Max did a great job and synthetics
represent only a fraction of his contributions this summer.

## Share your code analyzer

A new functionality in this release is the ability to easily install and run
custom Scalafix rules. For sbt users, custom rules can be installed with the
`scalafixDependencies` setting and discovered from the sbt shell via tab
completions. For rule authors, a Scalafix rule is published to Maven Central as
an ordinary library.

Within a day after the Scalafix release,
[Eugene Yakota](https://github.com/eed3si9n/) had already published a Scalafix
rule `NoInfer`.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">wrote &#39;stricter Scala with -Xlint, -Xfatal-warnings, and Scalafix&#39;.<br><br>I am so excited about the Scalafix 0.8.0-RC1 that came out today that I wrote a custom Scalafix rule scalafix-noinfer. <a href="https://twitter.com/hashtag/scala?src=hash&amp;ref_src=twsrc%5Etfw">#scala</a> <a href="http://eed3si9n.com/stricter-scala-with-xlint-xfatal-warnings-and-scalafix">http://eed3si9n.com/stricter-scala-with-xlint-xfatal-warnings-and-scalafix</a> <a href="https://t.co/RNLfUBTOo4">pic.twitter.com/RNLfUBTOo4</a></p>&mdash; eugene yokota (@eed3si9n) <a href="https://twitter.com/eed3si9n/status/1042976853315780608?ref_src=twsrc%5Etfw">September 21, 2018</a></blockquote>

[Julien Tournay](https://github.com/jto) has also shared Scalafix migration
rewrites for Scio v0.7, a Scala library from Spotify for Apache Beam and Google
Cloud Dataflow.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Thanks to <a href="https://twitter.com/hashtag/scalafix?src=hash&amp;ref_src=twsrc%5Etfw">#scalafix</a>, upgrading to <a href="https://twitter.com/hashtag/scio?src=hash&amp;ref_src=twsrc%5Etfw">#scio</a> 7 will be a mostly automated process. <a href="https://t.co/K3jZZ9lf9b">https://t.co/K3jZZ9lf9b</a>. Kudos to <a href="https://twitter.com/gabro27?ref_src=twsrc%5Etfw">@gabro27</a> <a href="https://twitter.com/olafurpg?ref_src=twsrc%5Etfw">@olafurpg</a> and the other contributors!</p>&mdash; Julien Tournay (@skaalf) <a href="https://twitter.com/skaalf/status/1052516884225056769?ref_src=twsrc%5Etfw">October 17, 2018</a></blockquote>

[Alessandro Marrella](https://github.com/amarrella) also contributed migration
rewrites for http4s, a typeful, functional, streaming HTTP library for Scala.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">New releases:<br>* v0.18.21: bugfix<br>* v0.20.0-M2: too much for a tweet. Notably, a scalafix to ease upgrading from v0.18.<br>* v0.20.0 is targeted for November 12. <a href="https://t.co/d0VB3NPC5A">https://t.co/d0VB3NPC5A</a></p>&mdash; http4s (@http4s) <a href="https://twitter.com/http4s/status/1059840385021853698?ref_src=twsrc%5Etfw">November 6, 2018</a></blockquote>

Big thanks to Eugene, Julien and Alessandro for trying out Scalafix and sharing
their rules!

---