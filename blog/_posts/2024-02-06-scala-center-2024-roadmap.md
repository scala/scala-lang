---
layout: blog-detail
post-type: blog
by: the Scala Center team
title: Scala Center Roadmap for 2024
description: Scala Center Roadmap for 2024.
---

In this post, we share the Scala Center plans for 2024.

## Role of the Scala Center in the Scala Ecosystem

Overall, the mission of the Scala Center is to **improve the experience of becoming and being a Scala developer**, and to **help the community to build a rich ecosystem of libraries**.

The Scala ecosystem is made of the following pillars:

- **Language, compiler, standard library:** they are the core tools that all programmers interact with when they work in Scala.
  The role of the Scala Center is to reduce the number of bugs in the compiler implementation, to help the community to contribute to these tools, and to make sure they evolve in a way that takes into account the needs of the community.
- **Documentation and MOOCs:** this website is the entry point to the ecosystem.
  It showcases the strengths of the language and its use-cases, and it hosts all its documentation.
  The role of the Scala Center is to simplify the structure and the content of the website, to create and maintain high-quality online educational content (including online courses), and to help the community to contribute to the website.
- **Developer experience:** Scala programmers often don’t interact directly with the compiler, but they use a tool (build tool, compile server) that does that for them.
  They also use tools to edit, analyze, navigate through, transform, compile, run, and debug Scala programs.
  The role of the Scala Center is to make sure these tools are as easy to use as possible, that they work reliably for everyone, and deliver a great developer experience.
- **Community and contributor experience:** the last pillar is the result of the work done _outside_ the Scala Center.
  The community has created thousands of projects that bring simple solutions to complex problems.
  The role of the Scala Center is to create the best environment for the emergence of such libraries.

> We would like to use this opportunity to raise awareness about the need for additional funds to keep our mission going.
> Scala Center is a foundation that depends on companies and other donors who understand the importance of reinvesting in the Scala open source ecosystem.
> Due to the global financial crisis that truly hit our organization hard in 2023, we lost six out of eleven supporting companies.
> We are now down to three full-time in-house engineers, one contributing engineer from a sister organization and part-time support staff.
> To continue covering the broad scope and deep work on the Scala infrastructure, which each user depends on, we need your support.
> We opened a fundraising campaign in 2023, which is still ongoing.
> Please check out the [short article](https://scala-lang.org/blog/2023/09/11/scala-center-fundraising.html) and [get in touch](https://airtable.com/appu0c7lWteTaOonJ/shrMKPncLDdVK5cyW).
> The scope of the 2024 roadmap reflects this crisis.
> In order to do more, we need more resources.
>
> -- Darja Jovanovic, executive director

The remainder of this article presents our specific goals for 2024.

## Roadmap for 2024

We have identified the priorities for 2024 through our discussions with the community (online or at conferences), with our [Advisory Board members](https://scala.epfl.ch/#advisory-board-member-list), and with the main organizations that are [behind Scala](https://www.scala-lang.org/community/#whos-behind-scala) ([LAMP](https://lamp.epfl.ch), [Lightbend](https://lightbend.com), and [VirtusLab](https://virtuslab.com)).
We are grateful to all of them.

In the following subsections we remind you of our ongoing and recurring projects, and we present our most important goals as well as some additional stretch goals that would need more resources.

The roadmap we present here is of course subject to adjustments throughout the year.

### Language, Compiler, Standard Library

On the language and compiler side, we participate in the maintenance of several projects, together with LAMP, VirtusLab and Lightbend.
At the Scala Center, we are notably focused on the Scala compiler itself, the language specification, Scala.js, and the TASTy reader in Scala 2.
We also keep stewarding the Scala Improvement Process (SIP).
In addition to those ongoing projects, our Scala Center team plans to work on the following topics this year:

- **Unfreeze the Scala standard library.**
  The standard library has not changed (except for bug fixes or some performance improvements) since Scala 2.13, which was released almost five years ago.
  Dropping the forward binary compatibility requirement would be a first step to allow the introduction of new classes or the addition of new members to the existing classes.
  Some technical changes were first necessary, notably in sbt, Scala Native and Scala.js.
  In 2023, the Scala Center and Lightbend addressed those challenges, so that we are now (almost) ready for the next step.
  This year, we will establish a process—more light-weight than the SIP—to decide what should go in future versions of the library.
- **Scala.js-specific minifier.**
  When emitting ECMAScript modules, Scala.js cannot apply the advanced optimizations of the Google Closure Compiler, due to limitations of the latter.
  This results in bundled .js files that are much larger.
  While JavaScript-only minifiers can somewhat compensate for that, they do not have enough semantic information for the most aggressive optimizations.
  We have started implementing Scala.js-specific minification optimizations that, together with an off-the-shelf JavaScript minifier, will bring back smaller bundles.
- **Improving build times.**
  In 2023, we started an exploratory phase on build pipelining and other compiler performance improvements.
  This year, we intend to polish and release the most promising results.
  We will also continue investigating how we can make the compiler faster, notably through parallelization of some side tasks.

Our stretch goals for this year most notably include deeper parallelization of the compiler.

### Documentation

In addition to maintaining the Scala website and managing our online course learners, we will:

- **Refresh the “getting started” experience, based on the new Scala command.**
  We will create a new learning path for beginners, recommending the new Scala command (SIP 46).
  There will be emphasis on important Scala tooling, and how it helps the developer experience.
- **Add more useful documentation to the standard library API.**
  The API should have more information that helps users decide which choices to make.
  This means adding more description to collection classes, outlining tradeoffs, and addition of complexity guarantees for every operation.
  We will also improve the visibility of references to definitions from the Java standard library.
- **Add more "cookbook" style content to the documentation.**
  Building on the previous work with the Scala Toolkit, we will write more tutorials that help users solve concrete problems in Scala (e.g. writing a HTTP server).
  It is important that the tutorials are easy to find from search engines, and that the information is direct and easy to follow.
  On the side, we will continue to add more libraries to the Scala Toolkit.
  These libraries will be selected from those created by the community and that do not require advanced knowledge of Scala.
- **Improve the Scala 3 macro guide with practical examples that demonstrate the utility of metaprogramming.**
  This will include features like match types, typeclass derivation, and more.
  We should also make sure that new capabilities added to macros/inline are documented.
- **Complete the Scala 3 language specification.**
  We will continue to write specifications of the changes in Scala 3, compared to Scala 2.13.
- **Streamline the documentation.**
  We will remove excessive duplication, and provide a more structured learning experience: a streamlined tour, a comprehensive teaching reference, and a clearer organisation of supplemental material.

Our stretch goals include: use the new Scaladoc UI across the whole documentation website; investigate adding an "agent" that can help users learn Scala; embedding Scastie snippets into documentation; adding more onboarding content for users from other languages; and creating a new Scala course for beginners (with no experience at all in programming).

### Developer Experience

In addition to maintaining some of the core tools of the ecosystem (sbt, Bloop, tasty-query, scaladex), we will:

- **Further the development of sbt 2.**
  Building on the significant effort made by Eugene Yokota in porting sbt to Scala 3, we will actively participate in the development of sbt 2, emphasizing simplifications and performance improvements. We will draw particular attention on testing new developments and ensuring the seamless transition to sbt 2 for plugins and projects alike.
- **Boost the reliability of Metals and Bloop.**
  The open-source team at VirtusLab made a significant improvement in the reporting of crashes and errors in Metals and Bloop. In collaboration with them, we will address the most frequent errors to provide a reliable coding experience in Metals.
- **Port Scalafix rules to Scala 3.**
  We will tackle the porting of the `ExplicitResultType` and `RemoveUnused` rules, ensuring their compatibility with Scala 3.
- **Release new features in the debugger for Metals.**
  Exciting developments await the debugger in Metals, including the pretty stack traces (Scala 3 only), the hot-code reload, and the runtime evaluator. Additionally, we will release the Scala 3 binary decoder, spreading the usage of the pretty stack traces in other tools of the ecosystem, including Scastie, Scala CLI and potentially the IntelliJ debugger.

We will dedicate some of our time to supporting key stakeholders in the tooling ecosystem, including:

- VirtusLab, on releasing the new Scala command.
- JetBrains, on improving the support of Scala 3 in IntelliJ.
- VirtusLab and Lightbend, on improving the coverage support in Scala 3.

Our stretch goals include: supporting pipeline compilation of multi-module projects in Bloop; finalizing the Scala 3 migration of Scalafix to enable writing custom rules in Scala 3; investigating the best approach to create simple multi-module projects, perhaps by building on top of scala CLI; defaulting to sbt as the build server in Metals.

Finally, we acknowledge that many more projects would deserve our attention but we do not have the capacity to support them.
These projects include: notebooks, worksheets, and the Scala support in Bazel.

### Community and Contributor Experience

The Scala Center stays committed to its mission of supporting and developing the Scala community.
In 2024, we will focus on:

- **Google Summer of Code 2024.**
  We are applying to be a part of the program again, helping new Scala programmers get a head start in their careers while bringing fresh contributions to established community projects.
- **Development of the Scala community at EPFL.**
  EPFL is the university we are based at, a major hub for Scala education in particular.
  We will continue our initiatives to give local Scala in Science workshops, as well as pursue a collaboration with Embedded Systems Lab regarding Chisel education at EPFL.
- **Scala Ambassador Program.**
  Historically, the Scala Center has been involved in the organization of a wide variety of events, from sprees to conferences.
  With the Scala Ambassador Program, we are looking to transfer that experience to the Scala Communities all around the world.
  The Scala Ambassador Program will be a combination of a toolkit giving local community leaders a playbook of how to organize an event, as well as an outreach program to find early adopters of the program and help galvanize local communities.
- **Contribution Equals Impact Program finalization.**
  In 2023, we started a program aimed to boost corporate participation in an open source world.
  We interviewed several established companies that use Scala and found out about how they interact with OSS, how they contribute to it and their best practices in doing so.
  You can read the interviews in [our blog](https://www.scala-lang.org/blog/posts/).
  In 2024, we will compile our findings in a concise resource that companies who wish to participate in open source more can use to do so.

## Conclusion

In this article, we have looked at the pillars of the Scala ecosystem, and for each of them we have listed our main goals for 2024.

Thanks to your support, and with the help of all the [people behind Scala](https://www.scala-lang.org/community/#whos-behind-scala), we came this far!
Help us go even further by [supporting the Scala Center](https://scala.epfl.ch/faqs.html).

You can find our detailed roadmap for the current quarter [here](https://scala.epfl.ch/projects.html), and track our progress by looking at our [quarterly reports](https://scala.epfl.ch/records.html), or by browsing the [Scala Center Updates](https://contributors.scala-lang.org/c/scala-center/25) category of the Scala Contributors forum.
