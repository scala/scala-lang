---
layout: blog
post-type: blog
by: Jorge Vicente Cantero
title: "September SIP Meeting Results: Scalameta, trailing commas, and more!"
---

On September 20, the Scala Improvement Process (SIP) Committee [met again](http://docs.scala-lang.org/sips/minutes/sip-20th-september-minutes.html)
to discuss the future of Scala. This month, four interesting proposals were on
the table, one out of which was recently submitted: Scala Meta. The Committee
is excited to kick start the discussions about its design and [latest
developments](https://twitter.com/softwaremill/status/775353344474943488), as
well as to congratulate Dale for his recently accepted [trailing commas
proposal](http://docs.scala-lang.org/sips/pending/trailing-commas.html)!

During the meeting, the Committee discussed the following proposals:

-   [SIP-28 and SIP-29](http://docs.scala-lang.org/sips/pending/inline-meta.html).
		The future of metaprogramming in Scala is just around the corner!
    The Scalameta SIP has been split into two different proposals: *inline* and
    *meta*. In practice, these two new proposals get different proposal numbers.
    Although they are not completely independent and meta builds upon
    assumptions of inline, the Committee has decided to study them separately,
    in an attempt to understand and analyze them better. To ensure that inline
    provides all the machinery for meta to work, though, they will be accepted
    together. [Inline](https://github.com/lampepfl/dotty/pull/1492) has already
    been implemented in Dotty. Iulian Dragos and Josh Suereth, the reviewers of
    the proposal, explain the Committee's reaction [here]().
-   [SIP-21: Spores](http://docs.scala-lang.org/sips/pending/spores.html).
    Originally proposed in 2013, spores are functions that allow programmers to
    control the captured environment. Among several advantages, they allow
    coarse-grained control over safe closure serialization. This proposal,
    reviewed by Martin Odersky, was in its first review iteration. A follow-up
    iteration will take place within two months, when the authors (Heather
    Miller and Philipp Haller) are expected to update the proposal and look into
    a more thorough environment analysis.  Martin and Seth have left their
    impressions on spores [here](http://disq.us/p/1c66wxe).
-   [SIP-26: Unsigned Integer Data Types](http://docs.scala-lang.org/sips/rejected/unsigned-integers.html).
    Proposed by Sébastien Doeraene and Denys Shabalyn, unsigned integers have
    been greatly discussed [here](https://github.com/scala/slip/pull/30) and
    [here](https://github.com/scala/scala.github.com/pull/548). Three months
    ago, when the proposal was numbered, Sébastien Doeraene convinced the
    Committee to try to improve the performance hit in the provided
    implementation, for which he asked for two months. Unfortunately, after some
    work during two months, a 6% performance hit remained. As a result,
    Sébastien proposed to reject the proposal, whose motion was unanimously
    approved by the Committee. For more information, have a look at his full
    report [here](https://github.com/scala/scala.github.com/pull/548).
-   [SIP-27: Trailing Commas](http://docs.scala-lang.org/sips/pending/trailing-commas.html).
		The trailing commas proposal was acknowledged and numbered by the Committee
		three months ago. This time, Dale Wijnand, his author, was invited as a
		guest and took part in the discussion. After some insightful discussions by the community
		[here](https://github.com/scala/scala.github.com/pull/533) and
		[there](https://gitter.im/scala/slip), and much more debate in our
		meetings, the Committee has accepted the proposal. As releasing is not part
		of the new process, the Committee hands it over to the Compiler team which,
		based on the compiler compatibility guarantees, will pick the closest Scala
		release in which trailing commas can be shipped.

Do you want to know more about our latest meeting? Check our [minutes](http://docs.scala-lang.org/sips/minutes/sip-20th-september-minutes.html).

Overall, we're also excited to announce the first accepted proposal since
our major rethink of the SIP process. Three months ago, The Scala Center
released the new Scala Improvement Process with two main features in mind:
shortening the duration of proposal reviews and making it easier for authors to
contribute and get involved. We're particularly happy to see that such efforts
have been useful for the community and the future of the language. We hope to
see more community involvement in the upcoming months, and we encourage any
Scala developer with interesting ideas to
[participate](http://docs.scala-lang.org/sips/sip-submission.html)!

Next month, we’ll discuss four more proposals, including
[SIP-20: Improved lazy val initialization](http://docs.scala-lang.org/sips/pending/improved-lazy-val-initialization.html) and
[SIP-24: Repeated by-name parameters](http://docs.scala-lang.org/sips/pending/repeated-byname.html).
If you want to read all our previous minutes, head out to [the official website](http://docs.scala-lang.org/sips/minutes-list.html).

Did you know that each month, we conduct these SIP meetings
on-air? You can tune in and ask questions to the SIP committee, and have
them answered live. Videos of the meetings are then [archived on
YouTube](https://plus.google.com/+ScalaProcess/posts). Check the minutes of this
meeting [in the SIP website](http://docs.scala-lang.org/sips/minutes/sip-10th-august-minutes.html).
