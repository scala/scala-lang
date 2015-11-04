---
layout: blog
post-type: blog
by: Hamish Dickson
title: Minutes from Oct 2015 SIP/SLIP Meeting
---

# SIP/SLIP meeting, October 2015

Thanks to [@hamishdickson](http://github.com/hamishdickson) for compiling these extensive minutes.

[A video recording of this meeting is available](https://www.youtube.com/watch?v=vonlAh2tmnw).

# Welcomes and apologies

- Welcome to [@sjrd](http://github.com/sjrd) who joins us
- [@odersky,](http://github.com/odersky,) [@jsuereth,](http://github.com/jsuereth,) [@dickwall](http://github.com/dickwall) and [@SethTisue](http://github.com/SethTisue) are all there
- [@dickwall](http://github.com/dickwall) gloats about his holiday
- [@non](http://github.com/non) has the flu
- [@heathermiller](http://github.com/heathermiller) is "otherwise engaged"

# 1. New Google Calendar

[@dickwall](http://github.com/dickwall) has set up a google calendar for slip:

- So far it only has the monthly meetings on there, but that will grow
- It's public so people can know when the next slip meeting is
- The scalaslip@gmail.com calendar which you can add in google calendars under the "add a friends calendar" option

# 2. Expert groups

## 2.1 Getting updates from expert groups
[@dickwall](http://github.com/dickwall) can't email everyone for expert groups, it's simply not a goer. One idea is to create an event
in the new Google calendar (probably the Friday before the meeting) and ask an expert group representative
to come to that and provide an update before the next slip meeting.

## 2.2 Role of expert groups
[@dickwall](http://github.com/dickwall) raises a point that was brought up on the IO overhaul discussion, where people feel they have
been assigned to an expert group and given work to do without asking. This is entirely not what anyone
intended and [@dickwall](http://github.com/dickwall) is going to write a blog post about the aim of expert groups, how they are formed
and what we would like them to do.

Ideally, an expert group should be self-formed from people with the desire, knowledge and skills to work
on a task, then go and do it.

Actions:

- [@dickwall](http://github.com/dickwall) to create a blog post about this issue, he will send it to the Scala elders first so they
  can voice any opinions
- someone should check if misconstruisem is a word


# 3. SLIPs without recent activity
Some SLIPs have had no activity in the last couple of months, it would be good if we can somehow track
this. [@dickwall](http://github.com/dickwall) suggests are create a github tag to track SLIP issues like this. His initial idea is to
use "dormant", but thinks this is too passive-aggressive. People agree and [@odersky](http://github.com/odersky) suggests "hibernate"
(which sticks).

# 4. October milestone issues

## Scala Parser Combinators vs FastParse
Link to issue: https://github.com/scala/slip/issues/24

Notes:

- Parser Combinators is not in the standard library, but is a standard module and while good, it has
some issues.
- [@lihaoyi](http://github.com/lihaoyi) has a lib called FastParse (https://github.com/lihaoyi/fastparse), fairly similar in design
to Parser Combinators but faster and currently better maintained.
- [@odersky](http://github.com/odersky) has invited [@lihaoyi](http://github.com/lihaoyi) to submit it as a candidate for becoming a standard module
- Currently waiting for [@lihaoyi](http://github.com/lihaoyi) to decide if he wants this to happen and if so to submit a SLIP for it
- Anton Gullett (I can't find him on github) the maintainer of the Parser Combinators module, should be
consulted to see if FastParse meets all the needs met by Parser Combinators.
- [@odersky](http://github.com/odersky) points out that Parser Combinators isn't a central module, meaning we could actually have
both modules for a while
- Note Parser Combinators are mainly community maintained, not primarily maintained by Typesafe or EPFL
(obv retain an interest)

Actions:
- Talk to [@gourlaysama](http://github.com/gourlaysama) about FastParse doing everything required by Parser Combinators
- Invite [@lihaoyi](http://github.com/lihaoyi) to take action if he wants to


## SLIP 27
Link to issue: https://github.com/scala/slip/issues/23

Owner: [@jsuereth](http://github.com/jsuereth)

Notes:

- [@jsuereth](http://github.com/jsuereth) spent weekend on [@odersky](http://github.com/odersky)'s strawman proposal (as did Daniel)
- there are a few comments to take care of
- wants to get a fuller proposal out, comments from [@DarkDimius](http://github.com/DarkDimius) (Dmitry)
- wants to flesh out what he has, but it's on a good path
- collections - [@jsuereth](http://github.com/jsuereth) wants to do something similar to Java's collector which is a parallel reduction
abstraction as the basis, on top of that have the iterator sequential base collections. [@jsuereth](http://github.com/jsuereth) needs to
spend more time on it, [@odersky](http://github.com/odersky) is keen to see it
- re Views, [@odersky](http://github.com/odersky) thinks we need more data on if it should be iterator based or transducer based -
partly why he tried an iterator base
- iterator seems to be more general
- [@jsuereth](http://github.com/jsuereth) figured out how to do Zip with transducers - required rhs to be an iterator
- [@jsuereth](http://github.com/jsuereth)'s proposal works on existing collections is fold based, wants to get that in place so we can
deprecate the existing set of views asap and focus on longer term collections with less restrictions for
view [@odersky](http://github.com/odersky) says that's reasonable
- [@sjrd](http://github.com/sjrd) points out scala-js optimization issues

Actions:

- [@jsuereth](http://github.com/jsuereth) and [@sjrd](http://github.com/sjrd) to take scala-js optimization issues offline
- [@dickwall](http://github.com/dickwall) to create a new issue to track optimization issue

## SLIP 22 - Async
Link to issue: https://github.com/scala/slip/issues/22

Owner: [@retronym](http://github.com/retronym)

Notes:

- [@SethTisue](http://github.com/SethTisue) is going to ask what [@retronym](http://github.com/retronym) actually wanted/intended to happen with async with regards to
the standard library, i.e. if he wanted to include it.
- [@dickwall](http://github.com/dickwall) thinks he heard something about issues on Windows, but no one else knew about this.
- [@retronym](http://github.com/retronym) thinks it's not quite ready for a SLIP yet. He has a round of work planned over the next
few months that will include technical improvements to the lib and improved documentation.
- This is on hold for now, but expected to be in better shape in a few months.

Actions:
None discussed

## Revisit by-name parameters
Link to issue: https://github.com/scala/slip/issues/21

Notes:
- [@dickwall](http://github.com/dickwall) has had no time to look at it
- [@dickwall](http://github.com/dickwall) mentions he is wary of being perceived as the SLIP manager and working on issues. Could be seen
as a conflict of interest

Actions:
None discussed

## Scala IO fix/overhaul
Link to issue: https://github.com/scala/slip/issues/19

Notes:

- This is a long thread. All agree that's a good thing
- [@lihaoyi](http://github.com/lihaoyi) came up with a good set of questions - first real step in getting this slip going

Actions:

- [@dickwall](http://github.com/dickwall) will reach out to someone and say "can you actually answer these questions?", maybe [@lihaoyi](http://github.com/lihaoyi)
or someone else in the thread
- [@dickwall](http://github.com/dickwall) to put all this in a blog post


## SIP 24 and 25 - trait parameters and repeating by-names
Link to issue: https://github.com/scala/slip/issues/12

Notes:

- nothing changed - on hold

Actions:
None discussed

## Possible SIP for changes to escapes in string interpolation (double quotes inside of a string interpolation)
Link to issue: https://github.com/scala/slip/issues/10

Notes:

- There has been little movement on this issue mainly for motivational reasons. It sounds like there
are varying opinions about what the ideal outcome of this issue is.
- [@SethTisue](http://github.com/SethTisue) pointed out that escaping quotes in string interpolation is a common newbie FAQ, so there is
probably value in completing this SLIP, but exactly what the right change is (if any) is unknown
- [@jsuereth](http://github.com/jsuereth) pointed out that perhaps we should aim to solve the new person experience rather than solve the
whole world's problems.
- Note, there two similar issues here, one to do with quotes and another to do with backticks

Actions:

- Allocate hibernate tag
- [@jsuereth](http://github.com/jsuereth) will reach out to [@som-snytt](http://github.com/som-snytt) to talk about the next steps here

## Binary Literals, Underscores in Literals SIP/SLIP tracking
Link to issue: https://github.com/scala/slip/issues/8

Owner: [@non](http://github.com/non)

Notes:

- General aim is to see what we can pull in from the Spire library (https://github.com/non/spire)

Actions

- Allocate hibernate tag
- Probably an update from [@non](http://github.com/non) would be good

## Implicits in for comprehensions/pattern matches SIP tracking
Link to issue: https://github.com/scala/slip/issues/6

Owner: [@haroldl](http://github.com/haroldl)

Notes:

- [@haroldl](http://github.com/haroldl) is still keen on this
- nothing specific heard about progress, give the hibernate tag until more is known

Actions:

- [@dickwall](http://github.com/dickwall) to reach out and chat to [@haroldl](http://github.com/haroldl) and see how things are going

## Gather, list, contact interested parties for an Either/Or/Xor/Validation etc SLIP and possible expert group
Link to issue: https://github.com/scala/slip/issues/5

Notes:

- Either all the way through to validation
- From last meeting, the expert group had an action item of trying out each others libraries. This hasn't
happened due to holidays etc, carry this over

Actions:

- Expert group to try out each other's libraries

# AOB

- collections doesn't have any tracking - [@dickwall](http://github.com/dickwall) to set something up and ping him with any links/info on
Gitter and he will collect them and put them into an issue with some links. Expects lots of discussion
- [@jsuereth](http://github.com/jsuereth) theory: things will die down or start an expert group and actively working on it
- will be fun to analyse trade offs and performance
- issue will have experimentation label
- [@jsuereth](http://github.com/jsuereth) - call for help, for some sort of source compatibility checker for these libs where you can shove in
these new libs and see if things still compile to give us a notion of what we're breaking
- [@dickwall](http://github.com/dickwall) - can we take existing unit tests for collections, clone them off and use them for new collection lib
- [@Ichoran](http://github.com/Ichoran) (Rex Kerr) has a collection test suite for Typesafe so he's on that - should be on expert group
