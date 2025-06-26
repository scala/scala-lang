---
category: highlights
title: Scala Highlights, June 2025 edition
---

Welcome to the second edition of **Scala Highlights**, a newsletter showcasing technical achievements, online resources, and community news.

The newsletter is a joint effort by the Scala Center, LAMP, Akka, and VirtusLab, the four core organizations involved in the Scala language development.
It also covers our collaborations with other parties, such as the Scala Center’s advisory board.

A few of the highlights covered in this issue:

- [Scala Days 2025](#scala-days-2025)
- [Scalar 2025](#scalar-2025)
- [JDK 17 will be the next minimum version required from Scala 3.8 onwards](#jdk-17-will-be-the-next-minimum-version-required-from-scala-38-onwards)
- [Scala 3.9 will be the new LTS](#scala-39-will-be-the-new-lts)
- [Better fors and -preview features](#better-fors-and--preview-features)
- [Model Context Protocol (MCP) for Scala](#model-context-protocol-for-scala)
- [Scalafmt now builds with Scala Native](#scalafmt-now-builds-with-scala-native)

## Community and events

### Scala Days 2025

The [12th edition of Scala Days](https://scaladays.org/) is around the corner.
It will take place August 17-19 in Lausanne, Switzerland.
This year, the conference theme is "Functional Programming and the Real World".
The event will feature keynotes from Evan Czaplicki (creator of Elm), Martin Odersky (lead designer of Scala), and Ralf Jung (Rust core-team member), followed by four tracks across two days, bringing over fifty speakers to the stage.
That is the most comprehensive tour of the Scala ecosystem yet.

Before the main conference, we will begin the week with two-day hands-on workshops.
Scala newcomers will have the opportunity to participate in [ScalaBridge](https://scaladays.org/blog/scalabridge-lausanne/).
If you plan to come to Lausanne by train, check out this fantastic community-organized [Scala Train that runs from London and Paris to Lausanne](https://www.meetup.com/london-scala/events/307435835/).
By travelling together, attendees can enjoy sustainable travel and make connections with each other before the conference begins.
We hope you get inspired and organize your local community in this or another fun way!

[Discover the program](https://scaladays.org/schedule) and [how the program committee selected the talks](https://www.scala-lang.org/blog/2025/05/28/scala-days-2025-announcement.html).
[Buy your tickets now](https://scaladays.org/tickets), and join us for Scala Days 2025.

### Scalar 2025

The latest edition of the [Scalar Conference](https://www.scalar-conf.com/) was held in Warsaw on 27-28th March. The speakers included many known open source authors, including Scala’s creator Martin Odersky.

There were a lot of topics ranging from more beginner focused to more advanced ones involving such things as macros or typed cloud infrastructure.
If you are interested in watching those talks you can still do it on [the YouTube channel of SoftwareMill](https://www.youtube.com/@SoftwareMillCom), who were the organizers of the conference.

## Language and compilers

### JDK 17 will be the next minimum version required from Scala 3.8 onwards

As announced in [a past blog post](https://www.scala-lang.org/news/next-scala-lts-jdk.html), Scala 3 Next will drop earlier JDK versions, making Java 17 a requirement starting with Scala 3.8, which is estimated to arrive in Q4 2025.

We will continue to build Scala 3.3 LTS, 2.12 and 2.13 with JDK 8 for as long as they receive support, as before.

The main motivation for making this change is to address JEP 471 and add support for JDK 25 and above.
However, this also opens the opportunity for taking advantage of all the features and improvements brought by the newer JDK.

### Scala 3.9 will be the new LTS

We expect to release Scala 3.9 in Q2 2026.
It will become the new LTS distribution, succeeding Scala 3.3.

Scala 3.3 will continue to receive support for at least a year after 3.9 is out, giving the community time to migrate the ecosystem.

The aforementioned increase in the required JDK to 17 will be included in the new LTS, along with all the new features and improvements brought in Scala 3 Next versions since 3.3.

### Better fors and -preview features

SIP-62, known as [better fors](https://docs.scala-lang.org/sips/better-fors.html), is well on track to become a standard feature.
Starting with Scala 3.7.0, you may try it out using the brand new `-preview` compiler flag.

Contrary to experimental features, preview features are basically ready to ship.
You may use them with confidence that they are here to stay, even in libraries.
The only catch?
The tooling ecosystem might not be ready for it.
The preview window allows IDE authors, scalameta, and other tools to catch up to the new features before we make them widely available.
Additionally, it provides a last chance to run more tests and iron them out.

Better fors is an ideal flagship feature to introduce this new mechanism.
It is a popular SIP, which addresses long-standing limitations of for comprehensions in Scala.
It dramatically simplifies their desugaring, which will help both how we understand them as humans, and how they are compiled with performance and usability in mind.
In addition, we can now use leading `=` value declarations, as in

```scala
for { x = 1; y <- Some(2) } yield x + y
```

The [motivation and solution sections of the better-for SIP](https://docs.scala-lang.org/sips/better-fors.html) are very well written.
Go check it out if you want to learn more about it.

## Developer experience

### Model Context Protocol for Scala

Those of you following the recent improvements in the LLM space might have noticed a new protocol, called the Model Context Protocol (MCP), that is being embraced by a lot of different companies.
This protocol allows agents, which is a separate and more independent version of the usual chat, to invoke different tools provided by a number of servers.
These can be as simple as providing information about the weather or as complex as providing context about the current workspace.

The latter instance of an MCP server has recently been implemented inside Metals, which is the Scala Language server.
It allows agents to query information about the classpath, compile, run tests, find dependencies and more.
Those tools allow the LLM results to be more precise and suffer less of the typical hallucinations.
To test it, set `metals.startMcpServer` to true in your editor’s settings and it should start up automatically.
For Cursor and Visual Studio Code it will also add proper JSON configuration automatically.
For some editors, you might need to reach out to the scalameta maintainers for help.

This is an initial implementation and might still require a lot of work.
If you have any feedback about the functionalities or would like more tools to be added, let the maintainers know or reach out on the Scala Discord or forums.

### Scalafmt now builds with Scala Native

Thanks to the enormous amount of work done by the maintainers and then followup work from around the Scala Community, Scalafmt now publishes native binaries using Scala Native instead of Native Image.
This allows for smaller binary sizes.
It is already used by the latest versions of Scala CLI.
`scala-cli fmt` will automatically download the proper binaries if they are available.
You can also use the Scala CLI GitHub action to set that automatically:

```yaml
- uses: VirtusLab/scala-cli-setup@v1
- run: scala-cli fmt .
```

## How to support Scala

The Scala Center is the Scala language foundation coordinating Scala governance, community, education, and open source development.
The Center contributes to the core language and to open source Scala tooling and libraries, and it delivers high-quality education materials.
It fosters conversations in the community and coordinates with various parties to unblock and improve the Scala ecosystem.
Joining the Center's Advisory Board is an effective way to participate in Scala governance and have your voice heard, as well as supporting the Center to achieve its goals.

For more information:

- [Scala Center home page](https://scala.epfl.ch/)
- [Joining the Advisory Board](https://scala.epfl.ch/corporate-membership.html)
- [5 Year Impact Report](https://scala.epfl.ch/records/first-five-years/)
