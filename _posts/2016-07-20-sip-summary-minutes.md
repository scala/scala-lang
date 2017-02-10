---
layout: blog
category: blog
by: Jorge Vicente Cantero
title: "SIP Meeting Results: 2 SIPs Numbered and 3 SIPs Updated"
---

Last week, the Scala Center ran its first SIP meeting under the [newly reformed SIP
process](http://docs.scala-lang.org/sips/sip-submission.html), and we're happy
to report that several SIPs saw long-awaited decisions made, or received
detailed feedback from the SIP committee!

In the new SIP process, each SIP is assigned a reviewer, who must be someone
sitting on the SIP committee. The reviewer's job is to carefully read and
understand the SIP, and to present the SIP before the SIP committee. The
reviewer must also present their analysis of the SIP to the committee, and then
the floor is opened up for discussion on the SIP. An explicit goal of the new
SIP process is for a decision and next steps to be determined for each SIP
discussed.

The SIP committee went through five SIPs in the queue. Two new SIPs received a
number, meaning they passed the first phase of acceptance – that is, the change
to Scala is accepted in theory, so long as the the committee's design and
implementation concerns can be adequately addressed in subsequent discussions on
the SIP. The two SIPs which received numbers (first-round accepted) include:

* **[SIP-26 Unsigned Integer Data Types](https://github.com/scala/slip/pull/30)**, Reviewer: Martin Odersky ([review comments](https://github.com/scala/slip/pull/30#issuecomment-232399052))
* **[SIP-27 Trailing Commas](https://github.com/scala/scala.github.com/pull/533)**, Reviewer: Eugene Burmako ([review comments](https://github.com/scala/scala.github.com/pull/533#issuecomment-232959066))

Two other passed their first iteration as proposed by [the new
process](http://docs.scala-lang.org/sips/sip-submission.html):

* **[SIP-25 Trait Parameters](http://docs.scala-lang.org/sips/pending/trait-parameters.html)**, Reviewer: Adriaan Moors ([review comments](https://github.com/scala/scala.github.com/pull/428#issuecomment-233401911))
* **[SIP-20 Improved Lazy Val Initialization](http://docs.scala-lang.org/sips/pending/improved-lazy-val-initialization.html)**, Reviewer: Sébastien Doeraene ([review comments](https://github.com/scala/scala.github.com/pull/206#issuecomment-232939781))

The final SIP discussed one was postponed at the request of the authors:

* **[SIP-22 Async](http://docs.scala-lang.org/sips/pending/async.html)**, Reviewer: Eugene Burmako ([review comments](https://github.com/scala/scala.github.com/pull/213#issuecomment-232940053))

In the case of SIP-22, the authors will reopen it when they feel like taking up
the proposal again, and addressing the issues they must look into next; in
particular, figuring out how async/await can be used inside of a try/catch
block.

Overall, we're happy to report that progress was made on a number of SIPs in the
queue. In particular, we're excited that 2 SIPs received a first-phase of
acceptance in receiving their numbers, and look forward to the addition of these
proposals to Scala soon!

Next month, we will propose a reformed SLIP process focused on shaping this new
notion of the Scala "platform," with a completely new committee, consisting of
Scala community members. Keep an eye out for developments on the Scala library
front this August!

Did you know that each month, we conduct our SIP meetings on-air? You can tune
in and ask questions to the SIP committee, and have them answered live! You can
even watch [past SIP meetings](https://plus.google.com/+ScalaProcess) at any
time!

Check out the full meeting minutes from the July 13 SIP meeting
[here](http://docs.scala-lang.org/sips/minutes/sip-minutes.html), or watch the
video of the meeting
[here](https://plus.google.com/events/c11vhomo86lkejevfkrm6uls900).
