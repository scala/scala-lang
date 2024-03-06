---
layout: blog-detail
post-type: blog
by: Chris Kipp and the Scala Center team
title: March 2023 - Scala Tooling Summit
description: A recap of the recent Scala Tooling Summit in Lausanne, Switzerland.
---

<img style="max-height: 350px; display: block; margin: auto; width: auto;" src="{{ site.baseurl }}/resources/img/march-2023-tooling-summit-stairs.jpg" alt="Scala stairs with people standing on the stairs">

Tooling is a pivotal part of the developer experience. Often when someone asks
about a new language or how another developer enjoys working in a certain
language, it’s not long before the topic of tooling comes up. Questions like
“what’s the build tool like?” and “how’s the editor support?” are often some of
the first questions asked, after talking about language features.

Earlier this year when the Center published the [2023 Scala Center
Roadmap](https://scala-lang.org/blog/2023/01/31/scala-center-2023-roadmap.html)
we mentioned our plans for a tooling summit this year. In the last few years a
global pandemic prohibited us from meeting in person and an all-consuming Scala
3 release effort that required extra effort on tooling identified a deep need
for something like this summit — to touch base, to map out current issues and
opportunities in the tooling ecosystem, and to re-lay the groundwork for ongoing
collaboration.

With all this in mind, we’d like to share some updates from the recent summit
hosted by the [Scala Center](https://scala.epfl.ch/) at
[EPFL](https://scala.epfl.ch/) in Lausanne, Switzerland.

## Who was there

What originally started out as a plan to better sync between those working on
the compiler and core tools at the Scala Center with those working on [IntelliJ
IDEA](https://www.jetbrains.com/idea/) at JetBrains eventually blossomed into an
event with over 40 attendees from around the world representing all sorts of
companies and organization actively involved in the development and maintenance
of core tooling in the Scala ecosystem. Below you will find a list of some of
those companies and orgs:

- [com-lihaoyi](https://github.com/com-lihaoyi)
- [EPFL](https://www.epfl.ch/en/)
- [Gradle](https://gradle.org/)
- [JetBrains](https://www.jetbrains.com/)
- [Lightbend](https://lightbend.com)
- [Lunatech](https://lunatech.com/)
- [Netflix (Netflix Algorithms Engineering)](https://netflix.com/)
- [sbt](https://www.scala-sbt.org/)
- [Scala Center](https://scala.epfl.ch/)
- [Scalameta](https://github.com/scalameta/)
- [VirtusLab](https://virtuslab.com/)
- [Xebia Functional](https://www.47deg.com/)

## What we talked about

The Tooling Summit was spread over three full days of sessions around teamwork,
de-duplication efforts, stabilization, and discussing the future of Scala
tooling. Much of this time was spent brainstorming, discussing, and even hacking
on various ideas that originated from a set of topics scheduled throughout the
summit. You can find a list of these topics below:

- Ensure tooling can use structured diagnostics
- JetBrains / Scala Center education collaboration
- Scope and syntax of scala-cli using directives
- Debugging in Scala 3
- Bazel and Scala
- Standardizing Scala worksheet implementations
- The state of editor support for scala-cli
- A discussion around BSP
- Making tooling more robust
- Limiting the ways to import a project into your IDE
- Porting Scalameta to Scala 3
- IDE support in “polyglot” projects that contain Scala
- Tasty Query and its use-cases
- Planning for sbt 2
- Bringing the Compiler Academy format to tooling
- Shared publishing implementations for build tools
- Merge Bloop mainline and scala-cli’s fork of Bloop

Many of these topics resulted in issues being created, PRs being started, and
new discussions and ideas popping up all around GitHub. Here’s a small overview
and summary of the topics and their outcomes:

### Ensure tooling can use structured diagnostics

We had a session on ensuring that the tooling around the ecosystem could
properly consume and utilize structured diagnostics that come straight from the
compiler. There was a talk on this subject during the past [ScalaIO
conference](https://scala.io/) by Chris Kipp called [The Journey of a Dotty
diagnostic](https://youtu.be/ttJ58l-SVAk). While
[scala-cli](https://scala-cli.virtuslab.org/) already has some actionable
diagnostics that allow you to update an outdated using directive, during the
summit we talked about various “quick fixes” that the compiler could produce and
even had a rough prototype to illustrate this using IntelliJ by the end of the
summit!

The idea would be that fixes like this can come directly from the compiler
ensuring that all tooling that interacts with it can benefit. You can follow the
progress on this work in [this Dotty mega issue on structured
diagnostics](https://github.com/scala/scala3/issues/14904).

### JetBrains / Scala Center education collaboration

Both the Scala Center and JetBrains have educational efforts around helping
newcomers to Scala get familiar with the language and the ecosystem. They’re not
alone in this effort as multiple other companies like [Xebia
Functional](https://www.47deg.com/technologies/scala/) also have courses and
exercises to that end. As a result of this conversation there is a more concrete
focus on communicating around the ecosystem about educational initiatives and
also efforts to look more into utilizing tools like the [JetBrains Educations
Plugin](https://plugins.jetbrains.com/plugin/10081-jetbrains-academy).

### Scope and syntax of scala-cli using directives

As scala-cli has is well on it’s way to becoming the new [default
`scala`command](https://contributors.scala-lang.org/t/sip-46-scala-cli-as-default-scala-command/5996/53),
discussions around using directives continually come up. Questions such as what
should or shouldn’t be allowed, what format they should take, and what their
scope is are commonplace.  Here’s some links that were referenced around this
topic and some that were a result of this discussion:

- [SIP 46 scala-cli as the default Scala command](https://contributors.scala-lang.org/t/sip-46-scala-cli-as-default-scala-command/5996/1)
- [The using_directives library](https://github.com/VirtusLab/using_directives)
- [Syntax issue around quoted strings](https://github.com/VirtusLab/scala-cli/issues/1954)
- [Camel case issue](https://github.com/VirtusLab/scala-cli/issues/1958)
- [Target directive renaming issue](https://github.com/VirtusLab/scala-cli/issues/1959)

### Debugging in Scala 3

Debugging in Scala is a complex domain. This makes it all the more important to
ensure we’re de-duplicating efforts where we can. The emergence of the
[scala-debug-adapter](https://github.com/scalacenter/scala-debug-adapter) is a
great example of de-duplicating the efforts around debugging for various tools.
As a result of this conversation there will be more work towards utilizing the
scala-debug-adapter in other tools that aren’t yet using it and also potentially
[inlining](https://github.com/scalacenter/scala-debug-adapter/issues/396) things
like the Scala 3 expression evaluator right into the Dotty codebase. Here are a
handful of other items that either came out of the discussion t the summit or
were referenced:

- [Better expose and publish the Scala 3 step filter](https://github.com/scalacenter/scala-debug-adapter/issues/395)
- [Explore an interpreting evaluator](https://github.com/scalacenter/student-projects/issues/9)
- [Start the debugger in Metals instead of the build server](https://github.com/scalameta/metals/issues/4445)
- [A collection formatter](https://github.com/scalacenter/scala-debug-adapter/issues/397)
- [goto definition for functions](https://github.com/scalacenter/scala-debug-adapter/issues/398)

### Bazel and Scala

Many larger companies that use Scala are increasing their usage of
[Bazel](https://bazel.build/) for their polyglot mono-repo codebases. Many of
these companies have specific needs unique to very large codebases that often
result in bespoke solutions. The goal of this sessions was to discuss a few
different aspects of this by focusing on the following areas:

- Why use Bazel?
- Competing implementations of rules_scala
    - https://github.com/bazelbuild/rules_scala
    - https://github.com/higherkindness/rules_scala
- Difficult IDE support compared to other tools like sbt or Gradle
- Deployment strategies

While no concrete action has been taken yet, the conversation has started and
will be sure to continue moving forward.

### Standardizing Scala worksheet implementations

Currently in the Scala ecosystem we have 3 different approaches to worksheets:

- IntelliJ worksheets (plain and interactive mode) which re-use functionality from the Scala REPL
- Metals worksheets using [mdoc](https://scalameta.org/mdoc/) as an engine
- Scastie which uses a custom macro implementation

This presents another great opportunity to de-duplicate the efforts here and
provide a solution that is closer to the compiler that can be re-used by other
tools. Here are a few outputs of the discussion:

- A thread on
  [youtrack](https://youtrack.jetbrains.com/issue/SCL-21099/Modern-worksheets)
  has been created about modern worksheets in IntelliJ.
- There will also be some research going into what a shared interface or
  worksheets could look like inside of the Scala 3 compiler.
- There will be some work to try and unify the way dependencies and scala
  options are included in worksheets to better align with using directives [for
  example](https://github.com/scalameta/metals-feature-requests/issues/308).
- The [VS Code Notebook
  API](https://code.visualstudio.com/api/extension-guides/notebook) will be
  explored to see if it can produce better output than the current Metals
  implementation with VS Code. 

### The state of editor support for scala-cli

Since [scala-cli](https://scala-cli.virtuslab.org/) is still quite new, much of
the conversation during this topic was getting all parties involved on the same
page about how scala-cli works, what limitations currently exist, and how we can
collectively tackle them. Here are a few action items and links from the
discussion:

- [scala-cli support in IntelliJ Scala
  Plugin](https://youtrack.jetbrains.com/issue/SCL-19718)
- We’d like to ensure syntax highlighting works for using directives in all the
  normal places you’d expect them to
- We’d like to ensure there is solid single-file support in various editors when
  using scala-cli. This is being looked into both in IntelliJ and Metals

### A discussion around BSP

The [Build Server Protocol (BSP)](https://build-server-protocol.github.io/) was
envisioned as a unified way to compile, run, test, etc your code in a way that
doesn’t make build clients or servers re-implement integrations for every tool
similar to how the Language Server Protocol
[(LSP)](https://microsoft.github.io/language-server-protocol/) works with language
servers and your favorite text editor. While this started small with a single
client (IntelliJ) and server (Bloop), we now have multiple client and server
implementations for sbt, Mill, Bazel, Bloop, and more even extending to other
languages outside of the JVM. In order to ensure a healthy future for BSP we’ve
gone ahead and formalized the [team
structure](https://github.com/build-server-protocol/build-server-protocol/pull/465)
a bit, are in the process of migrating to a
[Smithy](https://smithy.io/2.0/index.html) as a [source of
truth](https://github.com/build-server-protocol/build-server-protocol/pull/426),
and are actively exploring a smoother [BSP
Discovery](https://build-server-protocol.github.io/docs/overview/server-discovery)
process.

### Making tooling more robust

Having your tooling not work as expected is frustrating. Not knowing why it’s
not working is even more frustrating. This conversation surrounds ideas and
topics like:

- Better logging
- Telemetry
- Fault tolerance
- Stress testing

As a result of these conversations the Metals team will be exploring usage of
[Sentry](https://sentry.io/welcome/) to better track when things are going
wrong. The idea here would be to provide an experience similar to IntelliJ’s
[Exception Analyzer](https://blog.jetbrains.com/yole/archives/000072.html).
[LSP](https://microsoft.github.io/language-server-protocol/) also has a
[telemetry](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#telemetry_event)
event that could be utilized, but more research needs to be done here.

### Limiting the ways to import a project into your IDE

Both Metals and IntelliJ users have multiple ways to import projects. This could
be simply choosing your build server in Metals, or choosing to use BSP at all in
IntelliJ. There are ongoing discussions and work going on in both of these tools
to make the getting started experience on a project more seamless no matter the
tool or project. For example you can see the discussion choosing a default build
server for metals
[here](https://github.com/scalameta/metals/discussions/4505#discussioncomment-4571546).

### Porting Scalameta to Scala 3

[Scalameta](https://scalameta.org/) is a core part of the tooling ecosystem
being utilized by tools like Metals, Scalafmt, Scalafix, and mdoc. While
Scalameta can handle parsing Scala 3 code, it can’t be used as a library in
Scala 3 projects. The main hiccup in this effort is the extensive use of macros,
which aren’t easily migrated. The main outcome of this discussion was simply
better understanding the challenges involved, so that if someone is willing to
put in the time here, we have a [starting
point](https://github.com/scalameta/scalameta/issues/2485) and some research
done.

### IDE support in “polyglot” projects that contain Scala

Traditionally IntelliJ has been the leader in this front offering great support
for mixed JVM-language projects. However this is made trickier with tools that
may not always be well-supported in this context like sbt or Mill. There is a
new upcoming BSP plugin for IntelliJ this may offer a better level of support
for using Mill or sbt server for multi-language projects. On the Metals side,
this is made even more trickier as LSP isn’t traditionally used for mixed
multi-language projects. There will be some more research on seeing if it’s
possible to better integrate with the Java language servers. There is an ongoing
thread about this that can be followed
[here](https://github.com/scalameta/metals-feature-requests/issues/5).

### Tasty Query and its use-cases

[Tasty Query](https://github.com/scalacenter/tasty-query) is a newer tool in the
ecosystem that is a compiler-independent way to semantically analyze TASTy
files. Some concrete actions items that came out of this session to be worked on
are below:

- [Add a way to render trees and types as Scala code](https://github.com/scalacenter/tasty-query/issues/272)
- [Identify/document which APIs are safe to use without a full classpath](https://github.com/scalacenter/tasty-query/issues/273)

### Planning for sbt 2

[sbt](https://www.scala-sbt.org/) is the most widely used build tool for Scala,
spanning small to giant projects. Many Scala developers daily interact with this
tool and its plethora of plugins. Due to this, a lot of effort has been going
into ensuring a smooth transition to sbt 2 which will boast a handful of new
features focused on simplicity, interactivity, and stability. [Eugene
Yokota](https://eed3si9n.com/) has put a ton of effort into this so far, so
here’s a dump of relevant blogs and discussion around this that may interest
you.

- [sbt 2.0 ideas blog post](https://eed3si9n.com/sbt-2.0-ideas)
- [sbt 2.0 ideas discussion](https://github.com/sbt/sbt/discussions/7174)
- [RFC-1: sbt cache ideas blog post](https://eed3si9n.com/sbt-cache-ideas/)
- [sbt cache ideas discussion](https://github.com/sbt/sbt/discussions/7180)
- [RFC-2: sbt 2.0 RFC process blog post](https://eed3si9n.com/sbt-2.0-rfc-process)
- [RFC process discussion](https://github.com/sbt/sbt/discussions/7188)
- [RFC-3: drop custom config blog post](https://eed3si9n.com/sbt-drop-custom-config/)
- [drop custom config discussion](https://github.com/sbt/sbt/discussions/7189)

### Bringing the Compiler Academy format to tooling

The [Compiler Academy](https://compileracademy.carrd.co/) has been an ongoing
effort to help onboard new contributors to the Scala 3 compiler. While the
format has been a success, it’s been difficult to get the amount of compiler
maintainers necessary to participate in the sprees. The discussion at the summit
focused on how to continue the effort to get more active participants in the
Scala 3 compiler development and also to look into taking the same format and
applying it to other tools in the Scala ecosystem.

### Shared publishing implementations for build tools

Across the ecosystem many tools have their own implementation to publish an
artifact. For example, sbt, Mill, and scala-cli all use their own
implementations. During this topic
[coursier/publish](https://github.com/coursier/publish) was mentioned as a
possible library that could be utilized across the ecosystem. There were
multiple questions that would need to be answered first about the reality of
this possibility that are being tracked
[here](https://github.com/coursier/publish/issues/14).

### Merge Bloop mainline and scala-cli’s fork of Bloop

For most users [Bloop](https://scalacenter.github.io/bloop/) should just be an
implementation detail. However, in the ecosystem we’ve frequently seen questions
and comments about how it works, and questions about why it works a certain way.
Some of the answers to these questions has led scala-cli to fork Bloop resulting
in 2 bloop servers often running on a user’s machine if they are a Metals user.
In order to combat this and provide a smoother Bloop experience for all users,
we discussed what would need to happen in order to merge the fork of Bloop back
inline. You can follow a thread on this effort
[here](https://github.com/VirtusLab/scala-cli/issues/1971).

## What comes next?

Overall, we consider the summit a success. With positive feedback from
participants and movement already visible on the topics above, we feel confident
that these efforts will result in a more stable, feature-rich, and unified
tooling ecosystem. The Scala Center will be continuing to facilitate and plan
further collaboration related to these topics and efforts.

We’re also looking ahead to another summit that will coincide with the upcoming
[Scala Days](https://scaladays.org/) in Madrid. We’ll follow up on the
discussion topics above and also dive into new ones.

There will be a discussion surrounding the content of this post on the
[contributors forum](https://contributors.scala-lang.org/), so please engage
with questions or comments.
