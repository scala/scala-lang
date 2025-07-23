---
layout: blog-detail
category: blog
by: Martin Odersky and Haoyi Li
title: "Evolving Scala"
---

There is always ongoing discussion about the future direction of the Scala language.
How fast should it move?
What needs to be improved?
Should the language change at all?
This article discusses how **Scala must keep evolving**, why that evolution is necessary, and what directions we expect that evolution to take.
We hope that this will cover many of the frequently asked questions on the direction of the Scala language, and help the community understand where the language will go in the months and years to come.

## Summary

Although Scala is no longer riding the wave of hype it had in the mid-2010s, by most surveys the language maintains its position just outside the list of mainstream languages.
From a technical perspective, the core language and ecosystem have improved greatly over the past decade.
In many ways Scala is on much better foundations today than it was 10 years ago.

Scala has a history of leading the way for the rest of the programming field.
In exchange for a bit less polish and stability than mainstream languages, people chose Scala to get next decade’s language features today.
The value of Scala has always been the unique combination of *safety* and *convenience* that these language features have enabled, and its fusion of *object oriented* and *functional* programming ideas that can elegantly accommodate these features.

But other languages are also improving, and so Scala must continue to innovate, improving on both its strengths and weaknesses with a particular focus on the newcomer onboarding experience.
There are of course ongoing issues, especially around IDE support and the learnability of the ecosystem, and there will always be concerns about tooling, compatibility, and migration cost as a language evolves.
But Scala has no choice but to move forward if it is to maintain its appeal and relevance in the years to come.

## Where Scala stands today

Although the hype has died down, popularity-wise Scala is about where it has always been: not quite in the mainstream, but with far greater adoption than more niche languages.
For example, the RedMonk Language Rankings had Scala in [14th place in 2014](https://redmonk.com/sogrady/2014/06/13/language-rankings-6-14/) and [still in 14th place 10 years later in 2024](https://redmonk.com/sogrady/2024/09/12/language-rankings-6-24/).
In those years, the programming landscape changed significantly: Swift replacing Objective C, the emergence of Go and Kotlin and Dart and Rust, the decline of CoffeeScript and Perl.
Yet throughout this Scala’s place remains unchanged.
Although individuals in the community come and go, Scala as a whole seems to be holding strong with a solid base of enthusiasts.

Technically, Scala is on stronger foundations than it was 10 years ago.
The ecosystem has matured and the various Reactive or Pure-FP styles have found their audiences.
Alternative styles like the [Scala Toolkit](https://docs.scala-lang.org/toolkit/introduction.html) and the [com.lihaoyi](https://github.com/com-lihaoyi) platform are now available.
New build tools like [Scala-CLI](https://scala-cli.virtuslab.org/) and [Mill](https://mill-build.org) have emerged, and developer tools like [Scalafmt](https://github.com/scalameta/scalafmt) and [Scalafix](https://github.com/scalacenter/scalafix) have become widely used.
IDEs remain a pain point, but we expect them to improve over the course of 2025.
Heavy use of symbolic operators has thankfully fallen out of style.

Scala has always been a language on the leading edge, proving the viability of language features like lambdas, records, and pattern matching that were adopted 10–15 years later by Java, Python, and other mainstream languages.
It remains to be seen which current Scala features the mainstream languages will adopt 10-15 years from now.

## Where is Scala going?

In this section, we will discuss some areas where the core Scala developers will focus their efforts.

### Safety and convenience: pick two

Scala has always been a hybrid language.
The fusion of object-oriented and functional styles was often talked about.
But its other fusion has been of *safety* and *convenience.*
Traditionally, “scripting” languages like Python were unsafe but convenient, while “application” languages like Java were safe but inconvenient.
Scala was the first to prove that you can do both in the same language.
More modern languages like Swift or Kotlin have progressed in this direction as well, the idea was unheard of when Scala first started.

However, the programming landscape has not stood still for the last two decades.
Much of what used to be unique to Scala is now common.
All modern languages provide generics, type inference, lambdas, records, pattern matching, and other such features.
To continue to attract users, Scala must continue to innovate in both directions:

1. **Increasing safety** without compromising convenience: features like [capture checking](https://docs.scala-lang.org/scala3/reference/experimental/cc.html), [explicit nulls](https://docs.scala-lang.org/scala3/reference/experimental/explicit-nulls.html), [safe initialization](https://docs.scala-lang.org/scala3/reference/other-new-features/safe-initialization.html), [multiversal equality](https://docs.scala-lang.org/scala3/book/ca-multiversal-equality.html).
2. **Increasing convenience** without compromising safety: features like [enums](https://docs.scala-lang.org/scala3/reference/enums/enums.html), [optional braces](https://docs.scala-lang.org/scala3/reference/other-new-features/indentation.html), [named tuples](https://dotty.epfl.ch/docs/reference/other-new-features/named-tuples.html).
   A discussion about [aggregate data literals](https://contributors.scala-lang.org/t/pre-sip-a-syntax-for-aggregate-literals/6697) has sparked a lot of interest, although it is still too early to see what will come out of it.

The Scala ecosystem is broad and diverse, but we think these twin goals are the common thread.
Whether you are building a backend service using [Akka](https://akka.io/) actors on the JVM, web UIs in the browser via [Scala.js](https://www.scala-js.org/), or custom silicon chips via [Chisel](https://www.chisel-lang.org/), Scala’s safety and convenience is why people choose the language.

Other languages are also pursuing these goals, but we believe that Scala delivers better than most: its type system, pattern matching, collections library, multiple-inheritance system, etc. are all best-in-class even if other languages have their own offerings.
So it is possible to simply execute and combine features better than others do, with a design that unifies these features in a clean and principled way instead of grafting them on ad-hoc.

Going forward, Scala must continue to pursue these twin goals of safety and convenience.
Tomorrow’s popular frameworks may be different from those of today, which are different from those of years past.
But developers have wanted safety and convenience for the past several decades, and we expect it to continue being in demand in the years to come.

### Sanding off rough edges

Scala is no longer a new language.
A lot of things seemed like good ideas two decades ago, but not all such decisions panned out.
Although long-time Scala developers may have gotten used to these idiosyncrasies, Scala-the-language needs to continually polish off such rough edges:

1. Some features like [scala-actors](https://docs.scala-lang.org/overviews/core/actors.html), [scala-parser-combinators](https://github.com/scala/scala-parser-combinators), or [scala-xml](https://github.com/scala/scala-xml) have since been removed.
   They are now in separate libraries, which you may use or not use as you desire, but are no longer a core part of the language or standard library.
   Other such cleanups include the [Scala 2.13 collections overhaul](https://www.scala-lang.org/blog/2018/06/13/scala-213-collections.html).
2. More issues are being dealt with as we speak: `@unroll` to avoid binary-compatibility issues with default parameters and `case class`es is experimental ([SIP-61](https://github.com/scala/improvement-proposals/pull/78)), and `for`-comprehension improvements is in preview ([SIP-62](https://github.com/scala/improvement-proposals/pull/79)), and should help both resolve long-standing issues in using these Scala language features to their fullest.
3. Some other long-standing issues have yet to be dealt with, but are being discussed: [flexible varargs](https://github.com/scala/improvement-proposals/pull/105), [unpack](https://contributors.scala-lang.org/t/unpacking-classes-into-method-argument-lists/6329), [other warts](https://github.com/scala/scala3/issues/2573) involving for-comprehension syntax, and so on.

Programming has changed a lot in the past 20 years, with languages like Swift, Kotlin, Java, C#, and Python all evolving rapidly.
Sometimes discovering new approaches, sometimes converging on similar solutions for common use cases.
Just because Scala made a design decision back in 2005 that we lived with for 20 years does not mean that decision is still optimal in 2025.
Sometimes, we can and should do better.

Scala’s core has always been its fusion of OO and FP features and fusion of safety and convenience, but everything else is up for debate.
For example, Scala has cycled through three collections libraries to get to where we are today, and the language is better off for it despite the churn.
What long-standing annoyances can we fix today that we will be grateful to have fixed 5–10 years down the road?
What features and conventions can we adopt from other languages, rather than re-inventing the wheel in our own idiosyncratic manner?

### An easier language for newcomers

We believe Scala can be made easier for newcomers to pick up.
All advanced Scala users were newcomers at some point.
All the big Scala projects you’ve heard about today started off as a bunch of newcomers:

* University students trying out a language for their research project
* Python/Ruby folks trying out a language to improve the stability of their production systems
* Java veterans wanting more flexibility, power, and rapid development

We support advanced users and advanced frameworks, but advanced users by definition are able to take care of themselves: solve their own issues, write their own docs, and propose their own language changes.
Advanced users of Scala have always been submitting their own patches and improvements — `scala.concurrent.Future` coming from Akka world, [partial unification](https://github.com/typelevel/cats/issues/2948), [generic tuples](https://www.scala-lang.org/2021/02/26/tuples-bring-generic-programming-to-scala-3.html), and [kind-projector](https://github.com/typelevel/kind-projector) coming from the pure-FP world — and we hope they will continue to do so.
In contrast, newcomers must rely on the core Scala maintainers to ensure they have a good experience.

Practically this means:

1. Prioritizing code and documentation support for simpler, easier libraries like the [Scala Toolkit](https://docs.scala-lang.org/toolkit/introduction.html) and the [com.lihaoyi](https://github.com/com-lihaoyi) platform.
2. Aligning Scala syntax with other languages where it diverges unnecessarily.
   [Wildcard imports](https://docs.scala-lang.org/scala3/reference/changed-features/imports.html) via `import foo.*` and [vararg splices](https://docs.scala-lang.org/scala3/reference/changed-features/vararg-splices.html) via `foo*` have already landed (the latter replacing the old [snail operator](https://stackoverflow.com/questions/46418559/extractor-not-compiling-in-scala/46420376) `foo@_*`).

The next big Scala projects will likely be started by newcomers picking up the language to solve a problem that nobody before had thought of solving.
They will be smart, but they won’t be experts pushing the limits of the Scala language, and they won’t be using the most sophisticated language features or design patterns.
They will know Java or Python or JavaScript because that’s what they learned in school.
That is who we need to make sure has an easy on-ramp to the Scala language.

## Considered alternatives

There are always differing opinions about where Scala should go.
We’ll discuss two ideas that repeatedly come up around the direction of the language.

### Why not go all in on Framework X?

One common request from the community is to go “all in” on some framework or toolchain in the Scala community.
For example:

1. Going all in on Scala as a pure functional programming language
2. Going all in on IO monads as the way to structure applications

These ideas are reasonable to discuss; after all the Scala sub-communities using it for pure functional programming with IO monads have been healthy and vibrant.
However, there are a few issues with this approach when analyzed more deeply:

1. Scala is by design a flexible and expressive language.
   This enables innovation, as history shows: a decade ago, [Akka](https://github.com/akka/akka) and [Scalaz](https://github.com/scalaz/scalaz) were the popular frameworks.
   Scalaz gave way to newer functional libraries like [ZIO](https://github.com/zio/zio), [Cats-Effect](https://github.com/typelevel/cats-effect), [Monix](https://github.com/monix/monix) and [FS2](https://github.com/typelevel/fs2).
   [Kyo](https://github.com/getkyo/kyo) seems to have promise but is still young.
   The Scala language must be general enough to support this natural evolution, and cannot commit itself to specific frameworks that rise and fall over the years.
2. The core Scala developers are not framework experts.
   They were not experts in the actor model when Akka was popular, and they are not experts in IO monads today.
   Thus we need the advanced users in those sub-communities to advocate for themselves and drive the improvements in the language that their community needs.

As such, Scala has to remain general by building features that any framework or library can benefit from.
We encourage framework enthusiasts to propose improvements to the Scala language: although not every specific idea may be accepted, the feedback drives language changes that benefit all frameworks.

### Why not freeze all feature development?

Another common request is to “stop implementing features”.
This comes up regularly in language discussions from people who are dissatisfied: with tooling support, the job market, or other things.
These sentiments are understandable.
But realistically, freezing feature development would doom the Scala language.

Scala has always been more featureful with less polish and stability than languages like Java.
The core value proposition for Scala was that in exchange, you received language features from the future that other languages didn’t have and would only get 10–15 years later:

* Apache Spark picked Scala in 2014 as a language with lambdas and pattern matching on the JVM.
* Akka picked Scala because it was a concise, performant language with support for lightweight concurrency with Futures or Actors.
* Scalaz and Cats picked Scala as a concise language with a rich type system.

Other languages picking up these features puts pressure on Scala to innovate.
In 2025, basically every language in the [RedMonk top 20](https://redmonk.com/sogrady/2024/09/12/language-rankings-6-24/) has lambdas, pattern matching, lightweight concurrency, and type systems!
So why would any project pick Scala?

Scala cannot compete with mainstream languages on stability and polish alone, so if we halt feature development today, Scala would end up as a language with worse features, worse polish and stability, and no reason to exist.
Scala thus needs a steady stream of improvements to sustain it, to give people and projects a reason to pick the language.
We might get things wrong — there is no guaranteed path to success — but a feature freeze is a guaranteed path to stagnation and failure.

## Open problems in the Scala ecosystem

The Scala ecosystem is not without its issues.
Here we will briefly cover what we think are the biggest challenges that Scala faces today, and what we have done or will do about them going forward.

### Tooling: IDEs

“Tooling” was the biggest area for improvement highlighted in the last [VirtusLab Scala Survey](https://scalasurvey2023.virtuslab.com/).
This primarily means IDEs (IntelliJ and VSCode) and build tooling (such as sbt), which are the tools that everyone writing Scala must also interact with.

The two primary IDEs used in the Scala community are IntelliJ and VSCode.
The aforementioned survey has ~80% of respondents using IntelliJ and ~50% using VSCode, with some using both.

#### IntelliJ

IntelliJ support for Scala 3 still has some catching up to do with the quality of support it has traditionally had for Scala 2.
Nevertheless, there is steady progress, and the recent improvements show an accelerated pace.

1. Scala 3 has recently introduced the concept of “preview” features: features that have stabilized from experimental, but have not yet gained support in IDEs and the rest of the ecosystem.
   This is intended to help give IntelliJ and other IDEs time to catch so it does not fall behind as the language evolves.
2. [JetBrains is now a member of the Scala Center advisory board](https://blog.jetbrains.com/scala/2024/05/13/jetbrains-joins-the-scala-center-advisory-board/).
   This has already improved communication and coordination between JetBrains and the Scala compiler team and helped avoid the problems seen in the past where IntelliJ takes time to catch up with changes in Scala.
3. Recent language changes have been making their way into IntelliJ relatively promptly: [SIP-64 Improved Given Syntax](https://docs.scala-lang.org/sips/sips/typeclasses-syntax.html) and [SIP-58 Named Tuples](https://docs.scala-lang.org/sips/named-tuples.html) already work since IntelliJ 2024.3, while [SIP-62 For Comprehension Improvements](https://docs.scala-lang.org/sips/better-fors.html) will be available in 2025.1.

We acknowledge that there is still work to do.
The IntelliJ team is working hard on bringing the best support for Scala 3, and you can expect more improvements in the following months.

#### Metals - the Scala Language Server

Metals is most often used with VSCode, but also supports other editors.
Metals has different challenges than IntelliJ: it has always used the actual Scala compiler for its code intelligence, and so it is always in sync with the actual language.
But it has had problems with stability (e.g. [#6478](https://github.com/scalameta/metals/issues/6478)), some of which stem from the complexity of its multi-process architecture, others from of its newer integrations with Scala 3 (e.g. [#6628](https://github.com/scalameta/metals/issues/6628)).
The Metals maintainers are currently focusing on fixing most prominent problems, but if you are aware of any problems within your codebase please open an issue at [https://github.com/scalameta/metals/issues](https://github.com/scalameta/metals/issues) and the team at VirtusLab would be happy to take a look (even signing NDAs if necessary).

The Scala 3 compiler developers already heavily use both IntelliJ and Metals, and we are aware of the problems developers face using both IDEs.
We will continue to report issues as they are found, and we will work with the maintainers of both IntelliJ and Metals to improve the integration between the compiler and the IDEs.
But we also need people from the community to take an active role in reporting problems so the IDE maintainers can investigate and fix them.

### Build tooling

The complexity of the build tool sbt has been a long-standing problem in the Scala community for the past decade or more.
However, we think there is light at the end of the tunnel:

1. [**Scala-CLI**](https://scala-cli.virtuslab.org/) **has become popular**.
   It is now the default Scala launcher (since Scala [3.5.0](https://github.com/scala/scala3/releases/tag/3.5.0)).
   The last [VirtusLab Scala Survey](https://scalasurvey2023.virtuslab.com/) had 35% of folks enjoying using it and another 35% wanting to learn it.
   While not suitable for large multi-module projects, Scala-CLI has virtually everything needed for almost any single-module project.
   It is also a great tool for exploratory coding on small projects and experiments.
2. **Alternatives such as [Mill](https://mill-build.org) exist**.
   The survey found 10% of Scala developers enjoyed using [Mill](https://mill-build.org), but almost 50% wanting to learn it, and foundational projects like [Scala-CLI](https://eed3si9n.com/sbt-remote-cache/) and [Coursier](https://github.com/coursier/coursier) are built using Mill.
   We think that Mill provides larger projects with a great alternative to sbt.
   [Bleep](https://github.com/oyvindberg/bleep), while still young, offers a different take in the build tool space that also shows a lot of promise.
3. **sbt itself has improved greatly over time**.
   The last few years have seen improvements like the [Unified Slash Syntax](https://github.com/sbt/sbt/pull/3434), [sbt Project-Matrix](https://github.com/sbt/sbt-projectmatrix), and the upcoming [sbt 2.0](https://www.scala-sbt.org/2.x/docs/en/changes/sbt-2.0-change-summary.html) release is bringing [build queries](https://eed3si9n.com/sudori-part6/), [remote caching](https://eed3si9n.com/sbt-remote-cache/), and other improvements.
   While still not perfect, the experience using sbt in 2025 is greatly improved from the experience of a decade ago.
4. [**Maven**](https://github.com/davidB/scala-maven-plugin) and [**Gradle**](https://docs.gradle.org/current/userguide/scala_plugin.html) can also be used.
   These build tools have long been popular and familiar in Java shops.
   While not as popular in the open source community, we see them being used in many commercial Scala codebases.

Overall we expect this problem will sort itself out going forward: both by sbt itself improving over time, and by projects choosing other tools that provide great alternatives.

### Ecosystem learnability

The third biggest issue we see in the Scala language is the learnability of the ecosystem.

1. The Scala ecosystem has always had frameworks for sophisticated users: [Akka](https://akka.io/), [Cats-Effect](https://typelevel.org/cats-effect/), [ZIO](https://zio.dev/), and others.
   But it has lacked a platform for less-sophisticated users: e.g. your student semester project, your new-grad startup codebase, your devops or data-analysis scripts maintained by non-engineers.
   These are areas where Scala *frameworks* have not been a good fit, but the Scala *language* could be.
2. Documentation in the Scala ecosystem has also traditionally been a problem.
   This compounds the problem above: learning a powerful framework or library is difficult enough, but doing it with poor documentation makes learning even more difficult than it needs to be.

Traditionally, although someone may like the Scala *language*, the moment they reach out to do something simple like “make a HTTP request” or “start a server” they hit a wall where they suddenly have to learn about Actors, IO monads or other advanced topics, with insufficient documentation or learning materials.

But here too we see reasons for optimism:

1. The [Scala Toolkit](https://docs.scala-lang.org/toolkit/introduction.html) and the heavily overlapping [com-lihaoyi](https://github.com/com-lihaoyi) platform, which include many of the same libraries.
   These provide close to a complete and usable “newcomer friendly” platform.
   It may not have all the bells and whistles of more sophisticated frameworks, but it is certainly enough for many production deployments, and with an easy transition to more sophisticated frameworks if and when they become necessary.
2. The recent [partnership of the Scala Center with Rock the JVM](https://www.scala-lang.org/blog/2025/02/25/rock-the-jvm-partnership.html) promises to help improve the pedagogical side of Scala.
   Daniel Ciocîrlan from Rock the JVM has always been an excellent educator and creator of high-quality educational materials.
   We hope this partnership will help expand the reach of Rock the JVM and help Scala newbies discover and benefit from his excellent videos and courses.

This is an area where we have been slowly making progress, and we hope this “newcomer friendly” Scala style will grow over time: not at the expense of the more advanced frameworks, but in tandem with them as the increased number of newcomers leads to more people picking up the more sophisticated frameworks if and when the need arises.

## How you can help

Scala is a community effort; there is no huge corporate sponsor driving Scala development like there is in other languages.
We thus need help from the community to help drive the language forward.
This help can come in a variety of ways.

### Financially

If you want to support Scala financially, there are two main groups you can support:

#### The Scala Center

The Scala Center supports two things:

1. The development of the core Scala language and compiler: exploration, prototyping, implementation, maintenance and debugging.
2. Support for the Scala community.
   This includes the Scala Days conference, the Scala Ambassador program, and the tooling summits.

You can donate to the Scala center in two ways:

* Individually donate or get your company to donate to the Scala Center [https://scala.epfl.ch/donate.html](https://scala.epfl.ch/donate.html)
* You can encourage your company to join the Scala Center advisory board to fund it on an ongoing basis.

Donate to the Scala Center if you want to support the core Scala language and community work.
Much of their work is not glamorous, but it plays a key role in helping ensure the ongoing health of the Scala ecosystem.

#### VirtusLab

VirtusLab does the core development on much Scala *tooling*:

* Metals and VSCode Metals plugin
* Scala-CLI
* Scala 3 LTS, release process and general project management for Scala
* Tools within Scalameta organization

If you are hitting issues with Metals or Scala-CLI and would like to help fund fixes or improvements, you should reach out to VirtusLab at [scala@virtuslab.com](mailto:scala@virtuslab.com).

### Code

Most of the Scala ecosystem is open source.
This means you can directly dig into the code and make the fixes or improvements you yourself want:

* You can fix bugs in [Scala3](https://github.com/scala/scala3), [IntelliJ](https://github.com/JetBrains/intellij-scala), and [Metals](https://github.com/scalameta/metals) yourself.
  Although the codebases are large, it’s not unheard of that someone can dive in and make the fixes necessary for their own use case
* A [Compiler Spree](https://docs.scala-lang.org/contribute/#so-you-want-to-improve-the-scala-3-compiler) and a [Tooling Spree](https://scalameta.org/scala-tooling-spree/) are run every three weeks.
  These are remote coding sessions where you can collaborate with core Scala language and tooling contributors on bite-sized bugs and acquire the skills and knowledge to tackle more ambitious issues.

Contributing fixes and improvements to tooling and infrastructure is not easy, but neither is it impossible.
Most of the Scala toolchain is open source and has received drive-by contributions many times in the past by individuals and corporations who just needed something fixed.
Submitting pull requests to these projects is no different from the kind of work any professional software engineer already does every day, and could help improve your own experience using Scala on a regular basis.

### Language Design

The [Scala Improvement Process](https://docs.scala-lang.org/sips/) is not limited to the core Scala contributors.
Anyone can propose one, e.g. [SIP-42 Binary Integer Literals](https://github.com/scala/improvement-proposals/pull/40), [SIP-61 @unroll default arguments for binary compatability](https://github.com/scala/improvement-proposals/pull/78), [SIP-67 Improved strict equality](https://github.com/scala/improvement-proposals/pull/97).
If the core Scala team is not prioritizing what you want, you can always step in and propose improvements to the language yourself. After all, you know your own needs better than anyone else!

SIPs are not easy to get into the language.
There is no guarantee a SIP will be accepted.
Even SIPs that do make it through typically take months or even a year to go through the whole process of review, implementation, and experimentation and finally land in a Scala release.
Conversely, even ideas that were initially rejected may find their way in later, perhaps after months or years of additional experimentation and refinement.
But we need more contributors here proposing changes, rather than it being limited to Martin Odersky and the folks at EPFL.

If you have ideas to propose but need help with the implementation and have money to pay for it, please contact [scala.center@epfl.ch](mailto:scala.center@epfl.ch) and we can help find the expertise to contract.

## Conclusion

Language development is an indirect process.
The core Scala team cannot build the next big Scala success story themselves, nor will it happen overnight.
What we can do is improve the Scala experience in all aspects: language, tooling, and community, and hope someone out there somewhere will pick Scala for a new project that could become the “next big thing”.

We believe the core appeal of the Scala language is its combination of safety and convenience.
The strong type system and compiler guard against mistakes, provide excellent runtime performance, while the concise syntax and type inference make it feel as flexible and expressive as any scripting language.
No doubt other languages are aiming for the same goals, and we think Scala with its unique hybrid functional-object-oriented design can do it better in enough ways to attract and retain users.

But the details of the Scala language and ecosystem will evolve over time, and we should not be overly attached to the incidental complexity we have grown accustomed to.
Just as the Scala [collections were greatly simplified in 2.13](https://www.scala-lang.org/blog/2018/06/13/scala-213-collections.html), and type-level gymnastics were replaced with simpler [generic tuples](https://www.scala-lang.org/2021/02/26/tuples-bring-generic-programming-to-scala-3.html) and [other type-system features](https://docs.scala-lang.org/scala3/reference/new-types/index.html) in Scala 3, we expect to continue to find areas where we can make changes to improve Scala.
There will always be concerns around backwards compatibility, migration, and teachability, but nevertheless Scala needs to continually and critically inspect itself and draw upon what other languages have learned over the past two decades to improve the developer experience.

Scala has always been a community project, and we need the community to help drive it forward: whether financially, with pull requests, or in language design.
We hope everyone in the community is able to contribute in their own way and help drive the language forward.
