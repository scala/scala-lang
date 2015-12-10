---
layout: news
post-type: announcement
title: "2016 Scala Release Schedule update"
permalink: /news/2016-schedule
---

With 2016 rapidly approaching, it's time for an update on our plans for Scala next year!

**Scala 2.11:** We expect to conclude the 2.11.x series with 2.11.8 in Q1 2016 and 2.11.9 in Q3 2016.

**Scala 2.12:** Our current focus is to have 2.12.0-RC1 out by the end of Q2. First, we'll have two more 2.12 milestones:
M4 by the end of January (new trait encoding!), and M5 before Scala Days NYC (feature freeze).
Our [GitHub milestones page](https://github.com/scala/scala/milestones) has projected dates,
and will be updated with milestone details as they develop.

[Big compiler changes](http://scala-lang.org/news/2.12-roadmap) are underway, between the new encodings for
lambdas and traits that take full advantage of Java 8, and the new optimizer. Both milestones will be an excellent
opportunity to give 2.12 a spin before we cut RC1 (expected end of May). We're eager to hear your experience with 2.12,
both online and in person at Scala Days NYC and Berlin!


## Participation
As always, getting new Scala versions out the door is a collective effort between Typesafe, EPFL, and the Scala user community.

Areas where participation is welcome include:

 - Library authors: we encourage you to publish your libraries for 2.12.0-M3 and later milestones.
    If you do publish, please [list your library](https://github.com/scala/make-release-notes/blob/2.12.x/projects-2.12.md).
 - Library authors: if (the latest version of) your library isn't included in the 2.12 community build,
    we have [documented](https://github.com/scala/community-builds/wiki) how to add it. We’ll be happy to help,
    as the community build is helping us catch more regressions than ever. As always, we're counting on your help with testing
    before we go into RC mode! (The [2.12 community build config](https://github.com/scala/community-builds/blob/2.12.x/common.conf) 
    lists which version of each built project, and whether its test suite is being exercised.)
 - Reviewing [pull requests in the Scala repository](https://github.com/scala/scala/pulls), where 2.12.x is now the default branch.
    Strong motivation will be needed before we merge anything but important bug fixes to the 2.11.x branch.
 - Documentation updates and reviewing help are much appreciated at the [scala-lang](https://github.com/scala/scala-lang/pulls) 
    and [docs.scala-lang](https://github.com/scala/scala.github.com/pulls) repos.

You can talk to us about 2.12 on the [scala-internals mailing list](https://groups.google.com/forum/%23!forum/scala-internals) 
and the [scala/contributors Gitter room](https://gitter.im/scala/contributors).
(An [expanded community page](http://www.scala-lang.org/community/) on the Scala site lists these and other forums and resources.)

Your feedback will inform any revisions needed to the schedule described here.
We'll keep you informed as we continue to refine [our release schedule](https://github.com/scala/scala/milestones).


## Timing
Below is a recap of our timeline, future and past. The 2.12.x milestones follow 2.11.x's schedule,
with about a year for development between M1 and RC1. Because 2.11.x will be the last release that supports Java 6,
we've worked extra hard to improve 2.11.x before shifting our focus to 2.12.x, with a half dozen releases in one year
(the same number of 2.10.x releases took twice as long). For a while now, 2.11.x has had to take a back seat while we
make the last push to complete 2.12.0-RC1 according to this schedule.



### Future 2.12.x

 - 2.12.0-M4   Jan 25, 2016 (ca. 12 work-weeks after M3)
 - 2.12.0-M5   Apr 25, 2016 (one year after M1, as in 2.11.x)
 - 2.12.0-RC1  May 30, 2016 (one month after last milestone, between Scala Days NYC and Berlin)

### Future 2.11.x

 - 2.11.8      Feb 8,  2016 (tentative date -- definitely between 2.12.0-M4 and M5)
 - 2.11.9      Q3,     2016 (last planned 2.11.x release, >2 years after 2.11.1)

### Past 2.12.x

 - 2.12.0-M1   May 4,  2015
 - 2.12.0-M2   Jul 15, 2015
 - 2.12.0-M3   Oct 6,  2015

### Past 2.11.x

 - 2.11.0-M1   Jan 7,  2013
 - 2.11.0-M7   Nov 18, 2013
 - 2.11.0-M8   Jan 21, 2014 (one year after M1)
 - 2.11.0-RC1  Feb 28, 2014 (one month after last milestone)
 - 2.11.0      Apr 16, 2014 (six weeks after RC1)
 - 2.11.1      May 20, 2014
 - 2.11.7      Jun 23, 2015 (just one year after 2.11.1; 2.10.1-2.10.5 took two years)

### 2.10.x

 - 2.10.0 Dec 19, 2012
 - 2.10.1 Mar 12, 2013
 - 2.10.2 Jun 6,  2013
 - 2.10.3 Sep 27, 2013
 - 2.10.4 Mar 18, 2014
 - 2.10.5 Mar 4,  2015 (EOL two years after 2.10.1)
 - 2.10.6 Sep 18, 2015 (resolve license incompatibility)