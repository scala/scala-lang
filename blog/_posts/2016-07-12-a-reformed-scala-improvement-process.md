---
layout: blog
post-type: blog
by: Heather Miller
title: A Reformed Scala Improvement Process
---

This past May, we held our first [advisory board meeting](http://scala-lang.org/blog/2016/05/30/scala-center-advisory-board.html), to discuss some of the areas that the newly-formed Scala Center should focus on.

One initiative put forward by the members of the committee, and unanimously voted as an initiative that the Scala Center should _immediately_ undertake was to clarify the governance of Scala, and to in particular focus on ensuring that there is an open, collaborative process in place for evolving the language and standard libraries.

In pursuit of this goal, today, we've published a reformed [Scala Improvement Specification and Submission Process](http://docs.scala-lang.org/sips/sip-submission.html).

One major goal in reforming this process is to ensure that all submitted SIPs are reviewed in a timely manner, and that SIP authors receive regular feedback on how to improve their proposals. We've been hard at work in the past month collecting feedback from the community on what we could do to improve this process, and most feedback pointed to the tendency of submitted SIPs to get stuck in the queue— for example, regarding a particular SIP, the SIP committee may have unclarified concerns, and the SIP author, though willing to improve the proposal, may be unclear on what those concerns are, or on what concrete steps she should take next. Therefore, the new SIP process includes many provisions to guarantee that progress is made both on the side of the committee and on the side of the SIP author.

To briefly list a few highlights of the new SIP process; in the new process, each SIP will receive a reviewer who is a member of the SIP committee. This reviewer will analyze the submitted proposal, list pros and cons, raise important questions, and she will present the submitted SIP along with her analysis to the SIP committee. The new SIP process requires the SIP committee to adhere to a number of deadlines and possible states in which to categorize a SIP, along with the requirement to provide feedback to the SIP author on what she can do to move the SIP to the next stage of the process. More details can be found in the reformed [Scala Improvement Specification and Submission Process](http://docs.scala-lang.org/sips/sip-submission.html).

We hope that with the new process will enable a more straightforward path forward for both Scala core maintainers, and current or prospective SIP authors interested in collaborating on evolving the language and standard libraries.

Importantly, the new SIP process creates a _SIP process lead_ role, who's responsible for enforcing and shaping these guidelines _in the broader interest of all Scala users/contributors_. To fill that role, the Scala Center is happy to announce that we've hired [Jorge Vicente Cantero](github.com/jvican). So far, Jorge is responsible for having collected community feedback on the current process, and for proposing the new and improved SIP process. Jorge will be taking over the reigns from the capable hands of Seth Tisue and previously Dick Wall, who created the SLIP process and spearheaded the SIP/SLIP process throughout much of 2015. We're immensely grateful to Dick for kicking off this effort, and hope to make him proud with our additions in the future!

#### Attend the next SIP meeting!

Our first SIP meeting with the revised process will take place tomorrow. It's open for anyone to watch or to participate in (it's possible to ask questions, live!), via Google on-air Hangouts. Want to watch and/or participate? Just head over to our [G+ event](https://plus.google.com/events/c11vhomo86lkejevfkrm6uls900) and indicate that you'd like to attend.

**July 2016 SIP Meeting**: Wednesday, July 13, 17:00 CEST (European) / 8:00 PDT (Pacific)

#### What will happen to the SLIP process?

Starting next month, that too will see a reformed process mostly due to the fact that we hope to soon realize the split of the Scala standard library into `core` and `platform` modules, where `platform` can be considered a "batteries included" Scala distribution, full of helpful libraries.

#### Talk to us!

Ideas? Questions? Concerns? Come on over to the [Scala Center gitter channel](gitter.im/scala/center) and holler at us! Or just come say hi :)