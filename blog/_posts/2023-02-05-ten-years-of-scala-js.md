---
layout: blog-detail
post-type: blog
by: Sébastien Doeraene
title: "10 years of Scala.js"
description: An overview and celebration of the past 10 years of Scala.js
---

10 years ago, on February 5, 2013, we made the [first commit to Scala.js](https://github.com/scala-js/scala-js/commit/9ad7627c2418e5d345375705ca087a60e3aa2c22).
When it started, compiling Scala to JavaScript was a dream.
Today, it has become everyday reality.
[Scala.js](https://www.scala-js.org/) is a mature technology with a rock-solid core, a vibrant ecosystem of dedicated libraries, and an enthusiastic community of users and contributors.

As we celebrate its 10-year anniversary, let us look back at what made it possible.

## How it started

When we first started developing Scala.js, it was a one-person project at [LAMP, EPFL](https://www.epfl.ch/labs/lamp/)--the research lab led by Martin Odersky.

Generating JavaScript from Scala was not a new idea.
There had already been several attempts at doing so, both at LAMP ([Scala+GWT](https://scalagwt.github.io/), [JS Scala](https://infoscience.epfl.ch/record/179888/)) and in the community ([s2js](https://github.com/alvaroc1/s2js), [JScala](https://github.com/nau/jscala)).
It felt like Mission Impossible at the time, which was exactly the motivation we needed to get started.

Scala.js was met with enthusiasm when it was first shown off at Scala Days in June 2013--despite a 16 MB "Hello world" output.
A small group of early enthusiasts gathered on a mailing list and started exchanging their pet projects, providing valuable early feedback to the project.
The one-person project quickly grew into a two-person core team along with a few dozen enthusiasts.

## Building on solid ground

By the time we released version 0.1 in November 2013, the fundamental design goals of Scala.js were already firmly established:

* interoperability with JavaScript: the ability to directly represent and manipulate JavaScript values as normal values from Scala.js,
* portability with respect to Scala/JVM: compiling the semantics of Scala/JVM as accurately as possible to JavaScript, with [very few compromises](https://www.scala-js.org/doc/semantics.html) for the sake of interoperability, and
* compatibility with IDEs, build tools, and other tooling: every valid Scala.js program must also typecheck as a valid Scala/JVM program, not to confuse tooling.

These core design goals still govern the overarching decisions about the evolution of Scala.js today.
An additional goal of good run-time performance emerged during the 0.5.x era, in 2014.
We also try to reduce generated code size as much as possible, but that concern yields to the above core design goals.

In order to guarantee these goals, the Scala.js project has grown strong standards in terms of quality and stability.

Scala.js was one of the first large projects in the Scala ecosystem to commit to multi-year backward binary compatibility, along with Akka and sbt.
Version 0.6.0 had been built as a stepping stone for v1, with an expected lifetime of 6 months.
Instead, it evolved while staying backward binary compatible for 5 years, before yielding to Scala.js 1.0.0 in February 2020.

With such long compatibility windows, eventually Scala.js outlives the support lifetime of the underlying Scala version lines.
Recently, we dropped support for Scala 2.11, which had been declared end-of-life 5 years earlier.
Ironically, [the corresponding request for comments issue](https://github.com/scala-js/scala-js/issues/4759) was by far the most upvoted issue of the Scala.js issue tracker, with more than 100 upvotes.

Scala.js is also known for being rock solid, owing to a strong code quality and testing discipline.
Since the release of Scala.js 1.7.0 in August 2021, every version ships with zero known bugs.
That covers the entire core repository: the compiler back-end and linker, the Scala.js-specific language features, the Scala.js standard library, and our partial implementation of the JDK.

This solid ground is maintained by the core team, but it is only one piece of the success of Scala.js.

## A vibrant community

If Scala.js is where it is today, it is mostly thanks to all the users who have devoted their time to its ecosystem.
Writing libraries, developing tooling, giving talks, and directly helping fellow Scala.js users through StackOverflow, Gitter and now Discord, are the main activities that build up a community and ecosystem.

During the first two years, most libraries of the existing Scala ecosystem did not support Scala.js.
A few dedicated users built the first new libraries and testing frameworks with Scala.js in mind.
As Scala.js matured, it became clear that we needed better support for cross-compiling libraries.
This led to the concept of a `crossProject`, added in Scala.js 0.6.0.

From there, and with [the announcement that Scala.js 0.6.0 was no longer experimental](https://www.scala-lang.org/blog/2015/02/05/scala-js-no-longer-experimental.html), adoption of Scala.js significantly grew.
In particular, a growing number of libraries from the Scala ecosystem started supporting Scala.js.
The pull requests were mostly coming from Scala.js users, yet the maintainers chose to accept them, and the maintenance burden that comes with it.
As Scala.js maintainers, we could only try to make it as painless as possible to support cross-building.
We can never thank the library maintainers enough for providing that support.
Today, most libraries that are not specifically targeting JVM-only features are cross-published for Scala/JVM and Scala.js.

Meanwhile, Scala.js users experimented with the best designs for UI libraries.
While new designs are still being explored, there are a few libraries that have taken firm ground within the community.
We would like to mention [Laminar](https://laminar.dev/) as a recommended Scala-only default.
[Slinky](https://slinky.dev/) and [scalajs-react](https://github.com/japgolly/scalajs-react) are popular alternatives for users who prefer to leverage their React knowledge.

There are many other kinds of contributions, and we can never name them all.
We thank all the people who have made the Scala.js community and ecosystem what it is today.
You are amazing!

## Where we are now

Today, Scala.js is a mature language and ecosystem.
We estimate that it is used by hundreds of thousands of developers.
The [Jetbrains Developer Ecosystem 2022 Survey](https://www.jetbrains.com/lp/devecosystem-2022/scala/#what-are-your-compilation-targets-) and the [State of Scala 2022 Survey](https://www.scala-lang.org/blog/2022/12/14/scala-developer-survey-results-2022.html) respectively report 12% and 17% of Scala.js users among Scala developers.
Maven Central statistics report more than 100,000 downloads per month for the core artifact.

The success of Scala.js is far above what we could have imagined 10 years ago.
While the core team builds its foundations, ultimately the community of users and contributors is the true source of that success.
Once again, thank you to everyone who contributed some of their time, in one way or another, to our ecosystem.
We look forward to building the next ten years of Scala.js with you.
