---
layout: blog-detail
post-type: blog
by: The Scala Center team
title: Scala 3 - A community powered release
---
## Scala 3 - A community powered release

After 8 years of research, experimenting, trying out, discussing, numerous contributions from academic & community collaborators, the Dotty project will finally graduate in fall 2020, by becoming Scala 3. This blog aims to capture what it takes to coordinate the Scala 3 release efforts and to invite you to help us make it a success! 

### Current situation?

We are coordinating around 52 projects, between less than 20 people, spread around multiple organisations, and four months to go.

Rough categories within those 52 projects are: 
* Language features
* Tools
* Migration 
* Performance
* Documentation


Project roadmaps and updates are published on [Contributors discourse under the “Scala 3 release projects”](https://contributors.scala-lang.org/c/scala3-release/26); more are being published every so often. Please join the forum to share your thoughts, ideas, and learn more about each project.

### Who is involved in the release?

* Prof. Martin Odersky and his research lab ([LAMP](https://www.epfl.ch/labs/lamp/staff/)) are at the forefront and a driving force behind the development of Dotty and Scala 3 release efforts. Note: they are a team of 8 people who are not working only on Dotty, but also on their research as well as teaching obligations.


* [Scala Center](https://scala.epfl.ch/), the Scala language foundation, recently stepped in as a main coordinating body for the Scala 3 release efforts and dedicated significant engineering, education, communication and project management resources. Note: The Scala Center [team](https://scala.epfl.ch/team.html) has 9 members, 5 of whom joined (very) recently. 


* The Scala Center Advisory Board [companies](https://scala.epfl.ch/#advisory-board-member-list) are supporting the Scala 3 release in different manners & capacities. All of them shared their advice and encouraged the Scala Center to take part, and some of them (such as Lightbend, VirtusLab, Lunatech, 47 Degrees) with additional engineering resources and day-to-day logistics.


* VirtusLab powers the efforts around [Scala3Doc](https://contributors.scala-lang.org/t/scala3doc-doctool-for-scala-3/4477) implementation and [Metals](https://scalameta.org/metals/) (IDE supporting Dotty via LSP). They have also recently got involved in the compiler (porting Scala 2 backend changes into Dotty for now) and [Scala Native](https://scala-native.readthedocs.io/en/v0.3.9-docs/) development & maintenance (road to supporting first Scala 2.12 and eventually Dotty). VirtusLab will continue its involvement in Metals / Dotty until the very release of Dotty and later on for the foreseeable future.



* Typelevel is coordinating with its ecosystem to strive for fully source-compatible, Dotty-native releases of all related major projects within their current major (binary compatible) lineage. In theory, any downstream applications fully within the Typelevel ecosystem should be able to update to Scala 3 as easily as updating from 2.12 to 2.13. Additionally, Cats Effect is targeting end-of-year for its 3.0 release (a major overhaul of its core semantics). This release is, itself, closely coordinated downstream, meaning that many projects in the Typelevel ecosystem will be making two major Scala 3 compatible releases around the end-of-year timeframe: one for Cats Effect 2 (source-compatible with current 2.13 versions) and one for Cats Effect 3 (which will also have 2.12 and 2.13 builds).


* Many other orgs and individual contributors who are investing their free time, to whom we are all incredibly thankful - your enthusiasm & love for Scala is very inspiring!

### Where to follow the development?
(or: the credible sources)

[Scala-lang.org](https://www.scala-lang.org/)<br>
Twitter: [@scala_lang](https://twitter.com/scala_lang) and [@odersky](https://twitter.com/odersky)<br>
[Contributors discourse](https://contributors.scala-lang.org/)<br>
Scala Center and LAMP team members <br>

### What to expect?

We are facing a global uncertainty in all areas of our life, so setting expectations would not be resonable, to say the least. We are, however, determined to have a Scala 3 release candidate before 2020 ends. Each contribution, good word, cheer is welcome now more than ever - and we thank you in advance for bearing with us! 

### What can I do today?


You can already take a look at the [Migration Guide](https://scalacenter.github.io/scala-3-migration-guide/) and maybe try it out or add/share your experience. If you are interested in any of the projects that appear on the [Contributors forum](https://contributors.scala-lang.org/c/scala3-release/26), contact the project lead and ask him/her/them how best to use your time/expertise.

