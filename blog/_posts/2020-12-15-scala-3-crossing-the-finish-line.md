---
layout: blog-detail
post-type: blog
by: The Scala Center team, and community contributors
title: Scala 3 - Crossing the finish line
---
## Scala 3: Crossing the finish line

#### Buckle up, we are a couple of days away from the Scala 3 Developer’s Preview!

As of 18th December we invite the community (users, contributors, maintainers, library authors, users, companies) to give one last big push of feedback to help the teams working on the Scala 3 release cross the finish line. 

After 8 years of developing Dotty, numerous feedback loops, and improvements, we are entering a “photo finish” phase, transforming Dotty to Scala 3.

The upcoming feedback loop will be the most important, because it is the last one where fundamental choices affecting compatibility can still be adjusted. 
For this reason, we decided to wait another month to hear from you, before we can go forward with confidence. 

Here’s what will help us a lot:

_All Scala Users_


* Fill in this [Scala 3 Developer’s Preview satisfaction survey (3-5 min)](https://docs.google.com/forms/d/e/1FAIpQLSflVmTu9lhrtnSTh2tKAjUGrt3WvEgwlDqZg66O3EVSXd1aJg/viewform?usp=sf_link)  
* Learn about the migration in the [Migration guide](https://scalacenter.github.io/scala-3-migration-guide/) and help us to make it better
* If you are already using Scala 3 in your work, send us your success/failure story - your learnings (scala.center at epfl.ch)

_Contributors (authors and maintainers)_

* Share your opinion on [Contributors forum](https://contributors.scala-lang.org/) (any topic that you deem important)
* Get involved on the [Scala 3 repo](https://github.com/scala/scala3/)

_Companies and organizations who are trying out Scala 3_

* Learn about the migration in the [Migration guide](https://scalacenter.github.io/scala-3-migration-guide/) and help us to make it better
* Get in touch with Scala Center and VirtusLab teams if you have concerns with migration

_Here are some interesting recent stats and experience sharing that can inspire you to get started:_

* More than 130 open source projects have already been ported to Scala 3. You can browse them in [Scaladex](https://index.scala-lang.org/search?q=*&scalaVersions=scala3).

* [Porting an ecosystem from Scala 2 to Scala 3](https://youtu.be/MmFz2iXa8Ks?list=UU3Paf3whkhvbs_ni1amPIeg) by Anatolii Kmetyuk, at Scala in the City, November 2020 

* [Scala 3: Python 3 or Easiest Upgrade Ever? by Daniel Spiewak](https://youtu.be/jWJ5A1irH_E), Weehawken-Lang, December 2020

### The involvement of the Scala community as the core of Scala’s continued success

The following sections will follow the previous update on Scala 3 release efforts, from September 2020 _[Scala 3 - A community powered release](https://www.scala-lang.org/blog/2020/09/15/scala-3-the-community-powered-release.html)_ and aims to:

* acknowledge the questions that were raised, 
* describe the process we see ahead of us, 
* share decisions that we worked on, 
* help us followup easier with our communication on different channels,

but not necessarily give all the answers, mostly because we can’t predict with certainty how things will play out. This is why we need you to continue this exciting journey with us to discover and create the new chapter, and we promise we would be as attentive and responsive as possible.

#### What is “Developer’s Preview”? 

In consultation with community partners and contributors, decided to allow some more time for adjustments before cutting the final Scala 3-RC1, originally scheduled for end of this year.

We will release Scala 3-M3 as a “Developer’s Preview”. Over the coming month, we will invite feedback from developers while striving to keep the API unchanged. If no major problem is raised between 18th Dec 2020 and mid Jan 2021 we will proceed to release RC1, aiming the end of January 2021, with the same API.

![Scala 3 feedback loop](/resources/img/blog/scala-3-feedback-loop.png)

We are aware that we are asking for your time at the busiest moment and just during holidays, but we realized we have to keep the momentum with our teams who are looking forward to this big release — your time is and will be very much appreciated!
#### How will this affect my daily work or side project?

Normally, this step will not affect your day-to-day work much, except if you dedicate some time to test, discuss, report, and help us in the process. You would need to update your side projects for that, but it is no different then from Scala 3-M1 to Scala 3-M2.

The Scala community, in particular library authors, are used to following new Scala releases closely. For example, maintainers started cross-building their code against Scala 2.12 and 2.13 (some even to 2.11), when the first release candidate of Scala 2.13 came out. Some even jumped on the release train much earlier. Scala 3 will be no different: the general mechanics of cross-building are unchanged. Luckily, for most libraries, adding Scala 3 support to your build will be smooth sailing. Despite some syntactic changes, the Dotty compiler has Scala 2 compatibility mode that allows it to process most of the Scala 2 code that is out in the wild. It also offers a `-rewrite` flag that changes syntax in a backward-compatible fashion. The main challenge is macros; those differ significantly between Scala 2 and 3. However, if you don't have hand-rolled macros in your code but use those defined in a library, chances are that the library is already published for Scala 3, so things will just work.

#### When do we expect 3.0? Is there a timeline we can count on? <br>Or: what happens after 18th Dec, and what is the next important date?

The road ahead is clear, and the more feedback we get in the next round the faster we can move forward. Here’s what we would be able to achieve, if no major issues arise:
![Scala 3 timeline](/resources/img/blog/scala-3-timeline.png)
We aim for following timeline:
- Scala 3-RC1 to be released by mid January
- Scala 3.0 to be released by early-mid 2021
#### What do the versions mean? What happens in the 3.x era?
Starting from Scala 3.0.0, our version numbers will reflect the compatibility promises in terms of source, binary (.class files) and TASTy (.tasty files)

As you may know, perhaps from [our previous blog post](https://www.scala-lang.org/blog/2020/11/19/scala-3-forward-compat.html), Scala 3 is backward binary compatible with Scala 2.13, as well as forward compatible under the `-Ytasty-reader` flag of Scala 2.13. We will keep this bidirectional compatibility until an unknown major or minor version of Scala 3 (excluded). We tentatively call that version Scala 3.T, although we would like to call it Scala 4, assuming that, by then, the Scala ecosystem refers to Scala 3 as just "Scala". Up until then, we will make the following compatibility guarantees:
* Patch versions are entirely forward and backward compatible, for source, binaries and TASty.
* Minor versions are backward binary and TASTy compatible. They may break sources in minor ways, in more or less obscure cases (this is similar to how any minor version of a library can potentially break source compatibility by adding a public method, or deprecating a method).
In the early life of Scala 3, we expect to publish minor versions at a fairly quick pace (one every 2-3 months), as we gather more experience with the features introduced in Scala 3. As time passes, minor releases will become scarcer, while we keep publishing patch releases.

At some point, we will have strong confidence that the implementation has stabilized. We blindly estimate that this will take about 2 years. We will then release the version 3.T. This version will break backward binary and TASTy compatibility with earlier versions, including Scala 2.13. The purpose of this breakage will be twofold:
* Stabilize TASTy as a long-term compatibility format, based on the experience gathered until then.
* Redesign parts of the Scala standard library to be a better fit for a Scala 3-only ecosystem, taking advantage of Scala 3 features.
From a user-visible language point of view, 3.T should be unremarkable. It would be similar to how Scala 2.13 was compared to Scala 2.12: an opportunity to review the standard library and internal implementation details, without changing the language itself in any significant way.

Starting from 3.T, versions will evolve in a similar way as before, with frequent compatibility-preserving patch releases, and occasional minor releases. The difference is that we will rely on TASTy as our main medium to provide compatibility; therefore, minor releases will be allowed to break binary compatibility when necessary, although they will always preserve TASTy compatibility.

Eventually, a new era will come, and we will have to break TASTy compatibility to move forward. That is when Scala 4 would come. Our goal is for that to happen at least 10 years from now.

#### Where to next?
Our priority in the next month is to collect, analyze, and respond to the feedback we get from you through the [Scala 3 Developer’s Preview satisfaction survey](https://docs.google.com/forms/d/e/1FAIpQLSflVmTu9lhrtnSTh2tKAjUGrt3WvEgwlDqZg66O3EVSXd1aJg/viewform?usp=sf_link) as well as from different other platforms you may choose to share your input. We thank you again for taking your time and helping Scala advance.
