---
layout: blog-detail
post-type: blog
by: Darja Jovanovic, Scala Center
title: Scala Improvement Process - Evolving Scala openly and collaboratively
---

The [Scala Improvement Process](https://docs.scala-lang.org/sips) is a process for submitting changes to the Scala language, hosted by the Scala Center. It aims to evolve Scala openly and collaboratively. The process was paused between March 2020 and July 2022, while we prioritized the release and stabilization of Scala 3. We took this time to examine and improve the process itself and invite a new set of Committee members to lead the process forward.

**Today, we are excited to announce that the Scala Improvement Process is officially restarting and we welcome your proposals.**

In short, the Scala Improvement Process defines a Committee that approves or rejects language feature proposals, and decides which experimental features should become stable. Proposals are submitted in the form of pull requests in a [GitHub repository](https://github.com/scala/improvement-proposals), after an initial discussion in the [contributors.scala-lang.org](https://contributors.scala-lang.org/) forum.

In the following sections we invite you to discover the new SIP Committee and its responsibilities, and we explain the differences between the two process editions.

## Meet the New SIP Committee Members

One of the main goals of the new SIP is to ensure that the best decisions are being made based on the interest of all the stakeholders. We achieve this by having a committee made of various kinds of stakeholders: language designers, compiler engineers, university teachers, tooling engineers, community enthusiasts and companies using Scala.

It is our pleasure to present the new SIP Committee members:

* Björn Regnell, Lund University
* Chris Andrews, Morgan Stanley
* Gabriele Petronella, buildo
* Guillaume Martres, EPFL
* Iulian Dragos, Databricks
* Lukas Rytz, Lightbend
* Martin Odersky, EPFL
* Oron Port, DFiant Inc
* Paweł Marks, VirtusLab
* Raúl Raja, 47 Degrees
* Sébastien Doeraene, Scala Center

The committee chair is Julien Richard-Foy, Scala Center.

The members are invited to serve 1- or 2-year terms. Thereafter, they may be re-invited, but not for more than 2 full terms. Afterwards, they would need to have a break before they can be re-invited again. We hope to have many great Scala contributors being a part of the SIP committee in the upcoming years, to share their experience and enrich the Scala language in the process.

### Setting expectations

The SIP Committee will meet once a month, for 10 months out of a year, to make decisions on the proposals. Between the meetings, there will be public discussions on the repository and a team of 3 committee members will be assigned to fully examine and present each proposal to the Committee. All the decisions will be communicated on the [pull requests](https://github.com/scala/improvement-proposals/pulls) corresponding to the proposals, and a list of all the proposals and their status is shown [on the Scala website](https://docs.scala-lang.org/sips/all.html).

We expect that we would be able to cover about three proposals every month, but we will only know more as time goes by.

## Difference with the previous SIP

In this section we would like to share a bit about what we learned from the SIP that was running since 2016 and how we integrated those learnings in the new process.

For more details, please find the [specification](https://docs.scala-lang.org/sips/process-specification.html) of the new process and a [submission tutorial](https://docs.scala-lang.org/sips/sip-tutorial.html) on the Scala website.

We used to discuss the proposals during live meetings, every month. We identified the following drawbacks:

* Most of the discussions happened during the meetings, and not much progress was made in-between the meetings. It could take a very long time before we reached a conclusion for a proposal.
* Writing and publishing the meeting minutes was very time-consuming, which slowed down the whole process.
* The fact that every proposal was always discussed by the whole committee was a bottleneck.

In the new process, the proposals are reviewed publicly, on GitHub. There is no need to wait for the next SIP meeting to make progress on the proposals. The regular SIP meetings will still happen every month, but they won’t be live, nor public. After the meeting, the outcome of the votes will be communicated on the corresponding proposals, directly on GitHub. Last, the review process now happens in two steps: a group of three reviewers performs a first deep review of the proposal, and only when it is well specified they present it to the whole committee for approval.

As with any decision, we had to look at the tradeoffs, and these changes were made in favor of ensuring that the proposals get processed, and decisions made regularly and frequently.

Other pain points of the previous edition of the process were:
* The voting process was based on complicated rules. Now, a proposal is accepted if more than 50% of the committee members present in the meeting vote to accept it.
* Proposal authors had few guidelines on how to turn their ideas into good language specifications. We have extended the [SIP template](https://github.com/scala/improvement-proposals/blob/main/sip-template.md) to provide more hints.

Things that did not change are:
* A “pre-SIP discussion” is still the recommended way to start proposing a change. The goal of this step is to gather feedback and support from the community.
* Once a year, the committee will meet in person during a “retreat”.
* Discussions on the proposals are welcome. The only difference is that they now happen on GitHub.

In short, we overhauled the process to make it more sustainable. This work was not done solely by the Scala Center. We would like to thank Adam Goodman, Director of the Center for Leadership, Northwestern University, who, for 6 months, guided us to:
* Learn from our experience of the Scala 2 Improvement Process,
* Engage with main stakeholders and integrate their needs,
* Restructure the process around the learnings,
* Create a stronger process for the future we want to build.

## Conclusion

We aim to create the best possible structure to support both authors and committee members, in order for the process to run smoothly and committee members to regularly make decisions. We will continue to adjust the process itself, as we continue to learn along the way. Please let us know if you have any suggestions by writing to [scala.improvement@epfl.ch](mailto:scala.improvement@epfl.ch).
