---
layout: blog
category: blog
by: Dick Wall
title: Minutes from Sept SIP/SLIP Meeting
---

## SIP/SLIP Meeting, Sept 10th 2015

#### Next Committee Meeting:

Monday Oct 12th, 4.30pm GMT. [Google Hangout Event](https://plus.google.com/u/5/events/ci1hc0tn9jf0v45a9qdd7a520j8)

#### Video of Sept Meeting
[Video of last meeting](https://plus.google.com/u/5/events/cvv4in7eq5tf4rus2ve0jodvo5c)

## Opening Matters

### New Meeting Day
Due to scheduling conflicts in the committee, future meetings will be held monthly on the **second Monday** of each month, starting on Monday October 12th. The time has not changed and is still 4.30pm GMT.

### SIP/SLIP/Contributor Calendar
There is now a shared Google calendar with upcoming meetings (and eventually other items of interest to contributors) on it. Please feel free to add it to your Google calendar. The calendar is simply scalaslip@gmail.com if you want to add it.

### Scala Release Schedule
Several people asked prior to the meeting about the schedule of release dates for 2.12 and 2.13. We will attempt to get more accurate deadlines in place in the next meeting, but for now the feeling is that the time for 2.12 changes is now! 2.13 is still at least a year away and will probably be the target for most SIPs/SLIPs giving plenty of time for careful implementation, testing and trials.

## SIP/SLIP Summary

A number of SIPs and SLIPs were considered, with the following decisions:

* The [Backticks in String Interpolation SIP](https://github.com/scala/slip/issues/3) failed to get sufficient support and has been declined (will not be assigned a SIP number). See the video record of the meeting for the arguments for/against that. However, Kevin is invited to coordinate with Som Snytt for SIP 26 (below) to see if anything can be done there.
* The [Escaped Quotes in String Interpolation](https://github.com/scala/slip/issues/10) SIP has been assigned SIP number 26, and will be shepherded by Josh Suereth.
* [SIP 24](http://docs.scala-lang.org/sips/pending/repeated-byname.html) and [SIP 25](http://docs.scala-lang.org/sips/pending/trait-parameters.html) are both to be deferred until implementations are available before being considered further. Tracking for these SIPs can be found in [Issue 12](https://github.com/scala/slip/issues/12)
* Related to By-name functions (SIP 24). Josh and Dick both noted encountering common eagerness bugs in code using the current by-names in Scala, and wanted to open an investigation into by-names in general to see if those might be tackled. [A new issue 21](https://github.com/scala/slip/issues/21) tracks that activity.
* [SLIP 22 - Async](https://github.com/scala/slip/blob/master/text/0022-async.md) is tracked in [Issue 22](https://github.com/scala/slip/issues/22). Seth is to obtain more info about the status of SLIP 22 for the next meeting.
* Either/Validation is proceeding but no SLIP proposal or number yet. Progress can be tracked in [Issue 5](https://github.com/scala/slip/issues/5)
* Scala IO improvements likewise are just getting started, but can be tracked in [Issue 19](https://github.com/scala/slip/issues/19)
* [SLIP 27](https://github.com/scala/slip/blob/master/text/0027-collection-view-redesign.md) has been assigned to a Views redesign proposed by Josh Suereth. Please note that this SLIP is now open for public review for the period of at least one month. This does not block implementation work in the meantime, but may require changes based on the outcome of the public review. The progress of this SLIP will be tracked under [Issue 23](https://github.com/scala/slip/issues/23).
