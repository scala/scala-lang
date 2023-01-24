---
layout: blog-detail
post-type: blog
by: Julien Richard-Foy and the Scala Center team
title: Scala Center Roadmap for 2023 and Beyond
description: Highlights of the achievements of the Scala Center in 2022, and roadmap for 2023.
---

In this post, we summarize the achievements of the Scala Center in 2022, and share our plans going forward to
ensure the longevity of Scala.

## Role of the Scala Center in the Scala Ecosystem

Overall, the mission of the Scala Center is to **improve the experience of becoming and being a Scala developer**, and
to **help the community to build a rich ecosystem of libraries**.

The Scala ecosystem is made of the following pillars:

- **Language, compiler, standard library:** they are the core tools that all programmers interact with when they
  work in Scala. The role of the Scala Center is to reduce the number of bugs in the compiler implementation, to help
  the community to contribute to these tools, and to make sure they evolve in a way that takes into account the needs
  of the community.
- **Documentation and MOOCs:** this website is the entry point to the ecosystem. It showcases the strengths of the
  language and its use-cases, and it hosts all its documentation. The role of the Scala Center is to simplify the
  structure and the content of the website, to create and maintain high-quality online educational content (including
  online courses), and to help the community to contribute to the website.
- **Developer experience:** Scala programmers often don’t interact directly with the compiler, but they use a tool
  (build tool, compiler server) that does that for them. They also use tools to edit, analyze, navigate through,
  transform, compile, run, and debug Scala programs. The role of the Scala Center is to make sure these tools are as
  easy to use as possible, that they work reliably for everyone, and deliver a great developer experience.
- **Community and contributor experience:** the last pillar is the result of the work done _outside_ the Scala Center.
  The community has created thousands of projects that bring simple solutions to complex problems. The role of the
  Scala Center is to create the best environment for the emergence of such libraries.

The remainder of this article summarizes our achievements in those four areas in 2022, and then presents our goals
going forward.

## Highlights of 2022

In this section, we highlight our main achievements in 2022. You can find our complete activity reports on
[our website](https://scala.epfl.ch/records.html).

### Language, Compiler, Standard Library

**We overhauled and restarted the [Scala Improvement Process](https://docs.scala-lang.org/sips/).** Since last
summer, the SIP Committee members meet monthly to decide the evolution of the language. As we explained
in the [announcement]({% link blog/_posts/2022-07-13-scala-improvement-process-reloaded.md %}), the main changes of
the new process are the following. First, the proposals are thoroughly discussed by a team of three reviewers, publicly
on [GitHub](https://github.com/scala/improvement-proposals) before the whole Committee votes on them during their
monthly meetings. Second, there is a new stage where proposals are accepted as experimental features before the Committee
votes again to promote them to stable features.

**We improved meta-programming, especially [generic Mirror](https://docs.scala-lang.org/scala3/reference/contextual/derivation.html#mirror)
synthesis.** Mirrors are critical to metaprogramming in Scala 3, they enable implementation of type class derivation without
advanced metaprogramming techniques such as macros. Mirror synthesis now supports more cases
([generic tuples](https://github.com/lampepfl/dotty/pull/15250),
[local and inner classes](https://github.com/lampepfl/dotty/pull/15847)), is more reliable
([dotty#15279](https://github.com/lampepfl/dotty/pull/15279),
[dotty#15404](https://github.com/lampepfl/dotty/pull/15404),
[dotty#15814](https://github.com/lampepfl/dotty/pull/15814)), and provides
[more detailed explanations in case of failure](https://github.com/lampepfl/dotty/pull/15164).

**We generalized the definition of methods in Scala** by allowing type parameters to be interleaved with regular parameters.
This change notably allows methods to take type parameters whose bounds depend on value parameters. You can learn more
about the motivation behind this change in the proposal document:
[SIP-47 - Clause Interleaving](https://docs.scala-lang.org/sips/clause-interleaving.html). Last, we lifted a current
language restriction that prevents eta-expansion to be applied to polymorphic methods. You can learn more about this
change in the proposal document:
[SIP-49 - Polymorphic Eta-Expansion](https://docs.scala-lang.org/sips/polymorphic-eta-expansion.html). Both proposals
have been accepted by the SIP Committee and are under development in the compiler.

### Documentation and MOOCs

**We improved the usability of the Scala website (this website).** The website had not seen a major rework since 2013,
and it does not represent the full picture that we would like Scala newcomers to see. To this effect, we have removed
the split of Scala 2 vs Scala 3 on [the landing page](https://github.com/scala/scala-lang/pull/1344) and on
[the documentation](https://github.com/scala/docs.scala-lang/pull/2430), consolidated the “Getting Started” instructions
([scala-lang#1344](https://github.com/scala/scala-lang/pull/1344),
[scala-lang#1348](https://github.com/scala/scala-lang/pull/1348),
[scala-lang#1352](https://github.com/scala/scala-lang/pull/1352),
[scala-lang#1373](https://github.com/scala/scala-lang/pull/1373),
[docs.scala-lang#2388](https://github.com/scala/docs.scala-lang/pull/2388),
[docs.scala-lang#2520](https://github.com/scala/docs.scala-lang/pull/2520)), improved the
[contributing guide](https://github.com/scala/docs.scala-lang/pull/2350), and created an infrastructure to show both
Scala 2 and Scala 3 versions of code examples in the documentation
([docs.scala-lang#2450](https://github.com/scala/docs.scala-lang/pull/2450)). We created an
[issue](https://github.com/scala/docs.scala-lang/issues/2481) to coordinate the update of the whole documentation to
always show both Scala 2 and Scala 3 code examples when possible.

**We offered individualized support to our MOOCs’ learners.** We published the course “Effective Programming in Scala”
to the [Extension School platform](https://www.extensionschool.ch/learn/effective-programming-in-scala). This
platform allows the learners to have regular 1-on-1 meetings with our instructors along their learning journey. If you
need to learn Scala, or if your company needs to train developers, the Extension School provides a cost-effective way
to be trained by the Scala Center team. Learn
more about the motivation in the previous [announcement]({% link blog/_posts/2022-06-08-learn-scala-at-epfl-extension-school.md %}).

### Developer Experience

**We improved the debugger for Scala 3.** The Metals’ debugger is now able to evaluate arbitrary Scala 3 expressions
while the debugger is paused in the middle of a program. Step-by-step execution now automatically skips the methods
generated by the compiler (e.g. mix-in forwarders, getters, setters, bridge methods, and synthetic methods of case
classes). Learn more in [this video](https://www.youtube.com/watch?v=UePrOa_1Am8).

**We fixed the apps installed by the [setup instructions](https://docs.scala-lang.org/getting-started).** The
command-line apps `sbt` and `scala` now behave consistently regardless of the installation process (`cs install` vs
manual download of the release artifacts).

### Community and Contributor Experience

**We co-organized the [ScalaCon](https://www.scalacon.org/) online conference.** We were in charge of the program and
the program committee. The talk videos are available online [here](https://www.youtube.com/playlist?list=PL3t6y1EktOPhflaXB28Kw7kwRb30K0W-P).

**We published videos about Scala 3.** [Let’s Talk About Scala 3](https://www.youtube.com/playlist?list=PLTx-VKTe8yLxYQfX_eGHCxaTuWvvG28Ml)
is a series of videos where we share interesting, useful, and cool things related to Scala 3. We published 4 new
videos in 2022.

**We improved the code editing experience in [Scastie](https://scastie.scala-lang.org).** Scastie is the online Scala
code editor that is used every day by one thousand developers to share code snippets in the community. We have 
implemented “IDE features” such as autocompletion and showing type information under the mouse pointer. Under the hood,
we reused some components of Metals.

**We mentored new contributors to the Scala 3 compiler.** The Compiler
Academy organizes online pair-programming events to mentor new contributors on the compiler codebase. You can learn
more about the Compiler Academy in [this blog article]({% link blog/_posts/2022-11-02-compiler-academy.md %}).

**We implemented the building blocks of a new tool to detect incompatibilities between programs.** Guaranteeing the
absence of incompatibilities between library dependencies is the cornerstone of a seamless Scala ecosystem. We have
implemented a prototype of a new tool to detect incompatibilities between two versions of a program (like
[MiMa](https://github.com/lightbend/mima), but based on the TASTy representation of programs instead of JVM bytecode).
Our work is based on [TASTy Query](https://github.com/scalacenter/tasty-query), which will be the basis of tools to
perform static analysis of Scala programs (it is already used by the Metals debugger).

## Roadmap for 2023 (and Beyond)

It is now time to look forward and present our goals for 2023. Our mission remains the same: improve the experience of
becoming and being a Scala developer, and help the community to build a rich ecosystem of libraries. Ultimately, our
work will ensure the longevity of Scala by creating a reliable and resilient ecosystem.

We have identified the priorities for 2023 through our discussions with the community (online or at conferences),
with our [Advisory Board members](https://scala.epfl.ch/#advisory-board-member-list), and with the
main organizations that are [behind Scala](https://www.scala-lang.org/community/#whos-behind-scala)
([LAMP](https://lamp.epfl.ch), [Lightbend](https://lightbend.com), and [VirtusLab](https://virtuslab.com)). We are
grateful to all of them.

In the following subsections we remind you of our ongoing and recurring projects, and we present our most important goals as
well as some additional stretch goals that would need more resources.

The roadmap we present here is of course subject to adjustments throughout the year.

### Language, Compiler, Standard Library

In addition to keeping the Scala Improvement Process going, and reducing the number of bugs in the compiler and standard
library, we will:

- **Make the compiler error messages clearer and more actionable.** The compiler should help developers write correct code
  instead of “just complaining” about incorrect code. The compiler should also guide you to write maintainable code (ie,
  it should provide linting features). You can find a list of related issues
  [here](https://github.com/lampepfl/dotty/issues?q=is%3Aopen+is%3Aissue+label%3Aarea%3Areporting).
- **Bring the compiler’s suggestions into the IDEs.** Instead of emitting only text output, the compiler
  will produce structured output that IDEs (Metals and IntelliJ) will be able to read to automatically provide “quick
  fixes” to the users. This should reduce the implementation (and maintenance) costs on the IDE side.
- **Unfreeze the Scala standard library.** The standard library has not changed (except for bug fixes or some performance
  improvements) since Scala 2.13, which was released almost four years ago. [Dropping the forwards binary compatibility
  requirement](https://github.com/scala/improvement-proposals/pull/54) would be a first step to allow the introduction
  of new classes or the addition of new members to the existing classes. Then, we will create a process to validate
  what should be in the standard library and what should stay outside of it.
- **Clarify and communicate the Scala 3 roadmap.** We will coordinate with the compiler team to clarify what will
  go into the [Long-Term Support version]({% link blog/_posts/2022-08-17-long-term-compatibility-plans.md %})
  of Scala 3, and make sure that roadmap is well communicated. We will focus primarily on the items that will
  enable more users to migrate from Scala 2 to Scala 3 (e.g., missing compiler options).

Our stretch goals include: publish a formal specification for Scala 3, investigate opportunities for reducing
compilation times, implement multi-threading in Scala Native, and remove the dependency to the Google Closure
Compiler in Scala.js.

### Documentation and MOOCs

In addition to maintaining the Scala website and managing our online course learners, we will:

- **Add “task-oriented” content to the documentation.** Currently, the documentation is rather “language features oriented”,
  but it does not really help solve concrete problems. We will select a set of libraries (the “Scala Toolkit”) and we
  will write tutorials showing how to perform common programming tasks (working with JSON, writing tests, etc.).
  We will use libraries created by the community and that do not require advanced knowledge of Scala. Last, we will
  help the authors of those libraries to perform the usual maintenance tasks.
- **Improve the content of the course
  [Effective Programming in Scala](https://docs.scala-lang.org/online-courses.html#effective-programming-in-scala).**
  We will address the feedback we received from the learners of the course to smooth the learning curve.

Our stretch goals include: update our [Spark course](https://docs.scala-lang.org/online-courses.html#scala-specialization),
teach Scala to first year Bachelor students at EPFL, and create a new Scala course for beginners (with no experience at
all in programming).

### Developer Experience

In addition to maintaining some core tools of the ecosystem (Bloop, Coursier, sbt, scala-debug-adapter), we will:

- **Streamline the distribution of `cs` (Coursier).** The current setup process is not well integrated with the various
  operating systems. There are no packages for Linux distributions, no MSI installer for Windows, and no PKG or DMG
  installer for macOS.
- **Reduce the number of ways to import Scala projects in IDEs.** Currently, IDEs support several ways for importing
  Scala projects (via sbt or via a build server, which itself can be provided by bloop or the underlying build tool).
  This is a source of confusion for the users, and it increases the maintenance costs.
- **Make Metals work with more versions of Scala.** By creating a stable interface for the presentation compiler,
  Metals will be less tied to the release cycles of the compiler, and it will easier to use it to develop the
  compiler itself.
- **Improve the Scala 3 support on Metals and IntelliJ.** We heard many developers stating that the Scala 3 support
  in IDEs was not at the same level as Scala 2, and that is one of the blockers to migrate to Scala 3. We will
  identify and put weigh on the main issues that currently degrade the developer experience on Scala 3 projects.

Our stretch goals include: support standalone .scala files out of the box in Metals and IntelliJ (including support
for Scala CLI configuration directives), investigate opportunities to reduce build times, reduce the maintenance costs
of implementing the `debugSession/start` endpoint in all the build servers by running the debug server in Metals,
update scalameta to Scala 3, publishing sbt 2, implement a Scala 2 expression evaluator in scala-debug-adapter,
be able to choose a specific build target in Metals, make sure Scala programs are easy to deploy especially in IaaS,
and provide TASTy trees to semantic rules in Scalafix.

### Community and Contributor Experience

In addition to continuing co-organizing [Scala Days](https://scaladays.org/), participating to conferences, publishing positive content about
Scala, leading the Compiler Academy, and maintaining tools for contributors ([Scastie](https://scastie.scala-lang.org),
[Scaladex](https://index.scala-lang.org), [scalafix](https://scalacenter.github.io/scalafix/)), we will:

- **Add support for standalone Scala programs in Scastie.** Currently, Scastie creates an sbt project for every snippet.
  This adds a performance overhead, and makes it impossible to just copy-paste a snippet to run it locally (because
  you also need to re-create the sbt configuration locally). We will fix this issue by supporting a “standalone” mode
  where the configuration will be defined via Scala CLI directives.
- **Publish TASTy-MiMa.** This tool will be able to detect incompatibilities between two versions of a program, based
  on their TASTy representation. We will complete its implementation and make it available to the community.
- **Streamline the way to publish the documentation of Scala libraries.** Currently, there are many tools one can use
  to publish documentation about their open-source projects (Scaladoc, Paradox, Laika, Docusaurus, etc.). Developers
  should not have to study or experiment with many tools to produce the documentation they need. We will simplify how
  to produce API documentation, how to “typecheck” the code examples, how to keep multiple versions of the documentation
  online, and how to define custom “template directives” in Scala.

Our stretch goals include: coordinate Google Summer of Code, create a Scala Center online shop, stabilize and document
the HTTP API of Scaladex, make it easy to find projects to contribute to in Scaladex, implement GitHub [precise code
navigation](https://docs.github.com/en/repositories/working-with-files/using-files/navigating-code-on-github#precise-and-search-based-navigation)
for Scala, and simplify the usage of remote caching techniques in continuous integration systems.

## Conclusion

In this article, we have looked at the pillars of the Scala ecosystem, and for each of them we have listed the main
outcome of our work in 2022, and our main goals for 2023.

Achieving these goals is possible only with your [support](https://scala.epfl.ch/faqs.html) and with the help of all
the [people behind Scala](https://www.scala-lang.org/community/#whos-behind-scala). Thank you all!

You can find our detailed roadmap for the current quarter [here](https://scala.epfl.ch/projects.html),
and track our progress by looking at our [quarterly reports](https://scala.epfl.ch/records.html), or by browsing the
[Scala Center Updates](https://contributors.scala-lang.org/c/scala-center/25) category of the Scala Contributors forum.
