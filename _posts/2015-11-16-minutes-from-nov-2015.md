---
layout: blog
category: blog
by: Hamish Dickson
title: Minutes from Nov 2015 SIP/SLIP Meeting
---

## SIP/SLIP meeting, November 2015

[A video recording of this meeting](https://www.youtube.com/watch?v=RJAwDhB3Vr8) is available.

## Welcomes and apologies
Today we have [@dickwall](http://github.com/dickwall), [@sjrd](http://github.com/sjrd), [@SethTisue](http://github.com/SethTisue), [@heathermiller](http://github.com/heathermiller), [@non](http://github.com/non) and [@odersky](http://github.com/odersky).

[@jsuereth](http://github.com/jsuereth) is unable to make it.

## November milestone issues

### Adding scala.io.Target
Link to SLIP: [https://github.com/scala/slip/pull/2](https://github.com/scala/slip/pull/2)

Notes:

- nothing has changed on this one, [@dickwall](http://github.com/dickwall) suggests hibernate tag
- believe this has been replaced/deprecated by the larger IO library discussion

### Unsigned integer data types
Link to SLIP: [https://github.com/scala/slip/pull/30](https://github.com/scala/slip/pull/30)

Owner: [@sjrd](http://github.com/sjrd)

Notes:

[@sjrd](http://github.com/sjrd) covers the idea and motivation:

- the general idea is to introduce 4 new data types corresponding to the unsigned integers
- motivation is mainly coming from Scala.js and the hope is that this will resolve some Scala.js weirdness along with the fact that there is currently no way to represent a type of value unsigned integer from javascript point of view

[@dickwall](http://github.com/dickwall) asks what the size of the implementation will be. [@sjrd](http://github.com/sjrd) has two approaches at the moment:

One is to limit compiler changes as much as possible

- this would lead to a "one line" change
- the change would also prevent optimization where things are boxed at runtime (which is very close to the compiler), all other changes are library based
- main drawback is performance for equality is impacted. For the simple implementation so far investigated, it's about a 3 x hit on performance [@odersky](http://github.com/odersky) thinks that's a show stopper, but [@sjrd](http://github.com/sjrd) points out that they are still working on this
- problem is Scala Number is a class, AnyVals can't extend classes, which is why we have to mangle with boxes at runtime

The second option is to change the compiler

Actions:

- [@dickwall](http://github.com/dickwall) put this into public review for a month - let people comment on the SLIP/add suggestions
- [@dickwall](http://github.com/dickwall) will create a tag for public review and add it to this SLIP


###  Implicits in for comprehensions/pattern matches SIP tracking
Link to SLIP: [https://github.com/scala/slip/issues/6](https://github.com/scala/slip/issues/6)

Notes:

- [@som-snytt](http://github.com/som-snytt) has an implementation for this now, so good progress
- hibernating tag removed

Next steps:

[@SethTisue](http://github.com/SethTisue) update:

- [@som-snytt](http://github.com/som-snytt) has code that looks like it works and does what this SLIP says it should
- the next question is is this good enough? Does this need to be taken further? The issue is that now implicits can behave differently in for comprehensions than outside. The committee are concerned about corner cases and would like Scala's features to be consistent
- it's decided that this needs to be extended to a general pattern, and [@odersky](http://github.com/odersky) is keen on that work being done
- [@SethTisue](http://github.com/SethTisue) doesn't know what the likelihood of [@som-snytt](http://github.com/som-snytt) taking the rest of this work on - the for comprehension might be the only version that he has time for. If he doesn't have time, then hopefully the community will be able to help

Open question:

- [@odersky](http://github.com/odersky) in Dotty, want to enforce that every implicit has an explicitly given type because it's very confusing that implicits get lost due to the order of local type inference
- how will that work in a `for`? The natural thing would be for an implicit not to have a result type.. will we have to enforce that?

Actions:

- [@SethTisue](http://github.com/SethTisue) to post instructions on the SLIP PR on how to use a specific Scala build so people can try out the current implementation


### Implicit enrichment of `scala.util.Either` to support monadic bias
Link to SLIP: [https://github.com/scala/slip/pull/20](https://github.com/scala/slip/pull/20)

Notes:

- The way we left this from last time, we were unsure where it stood, but [@swaldman](https://github.com/swaldman) has gone ahead and provided a proposal for this
- [@SethTisue](http://github.com/SethTisue) should consider this SLIP in the context of other SLIPs going on at the moment

Actions:

- [@swaldman](https://github.com/swaldman) to co-ordinate this with other SLIPs

### Collections overhaul
Link to SLIP: [https://github.com/scala/slip/issues/27](https://github.com/scala/slip/issues/27)

Notes:

- not much activity this month
- active, hold fire until next meeting

### scala-parser-combinators vs fastparse
Link to SLIP: [https://github.com/scala/slip/issues/24](https://github.com/scala/slip/issues/24)

Notes:

- nothing has happened, no updates here
- [@SethTisue](http://github.com/SethTisue) impression from [@lihaoyi](https://github.com/lihaoyi) is that he's ok with FastParse going into the standard module, but he probably doesn't have the time
- [@odersky](http://github.com/odersky) agrees we're blocked until someone can do this really

### SLIP 27 Tracking
Link to SLIP: [https://github.com/scala/slip/issues/23](https://github.com/scala/slip/issues/23)

Notes:

- [@jsuereth](http://github.com/jsuereth) is out for this meeting - he is really the one that can update us on this issue
- hold this until next month
- this issue is linked to the collection overhaul and it needs to be decided if this should be done separately or if it should be rolled into a larger change

### Scala IO fix-up/overhaul
Link to SLIP: [https://github.com/scala/slip/issues/19](https://github.com/scala/slip/issues/19)

Notes:

- calmed down a bit here, not much has happened
- [@dickwall](http://github.com/dickwall) is nearly done with his blog post, discussed in the last meeting
- not ready for hibernate just yet

### Establish a fair survey mechanism for SLIPs?
Link to SLIP: [https://github.com/scala/slip/issues/29](https://github.com/scala/slip/issues/29)

Notes:

- this came from a large SLIP discussion about the JSON AST (see below), with no obvious outcome other than: no one wants a survey mechanism that is too simplistic

- [@dickwall](http://github.com/dickwall) suggests we close this SLIP, [@non](http://github.com/non) agrees pointing out that creating the proposal was the right thing to do

[@odersky](http://github.com/odersky) talks about how Haskell deals with this issue and suggests we adopt parts of that for Scala:

- if something is proposed to the Haskell platform, then everybody who has a module in the platform can vote on that
- we can have a more restrictive model than this, where you have core committers who decide what goes in there and they are the power brokers
- alternative is to have a more general system where everybody who contributes to the system can vote (that's what Haskell does)
- [@odersky](http://github.com/odersky) thinks people should be at least committers to vote

[@dickwall](http://github.com/dickwall) closes issue, but happy for it to be reopened as and when it's needed

### Gather, list, contact interested parties for an Either/Or/Xor/Validation etc SLIP and possible expert group
Link to SLIP: [https://github.com/scala/slip/issues/5](https://github.com/scala/slip/issues/5)

Notes:

- [@non](http://github.com/non) no update on this, know people are to do research on this, but it hasn't happened yet (people get busy)
- not given hibernated tag

### SIP: Auto-uncurry n-ary functions

There is no SIP tracking issue as yet, but information can be found here: [https://github.com/lampepfl/dotty/issues/897](https://github.com/lampepfl/dotty/issues/897)

No issue created as yet, but [@odersky](http://github.com/odersky) will create one if needed

### SIP for supporting named type arguments and partial type argument lists
Link to SLIP: [https://github.com/scala/scala.github.com/pull/456](https://github.com/scala/scala.github.com/pull/456)

Notes:

- most of the committee hasn't read this
- [@dickwall](http://github.com/dickwall) suggests it should go out for public review, [@SethTisue](http://github.com/SethTisue) points out that the committee should read it first and then decide if that's a good idea (this is agreed)

Homework:

- SLIP committee reads the proposal
- review in December SLIP meeting



## JSON AST, Scala standard library, and the SLIP process
Link to issue and document: [https://github.com/scala/slip/issues/31](https://github.com/scala/slip/issues/31)

[A SLIP proposing a standard JSON AST](https://github.com/scala/slip/pull/28) deviated quickly from the purpose of the SLIP and started a long discussion about what should and should not be in a Scala standard library. This and other discussions seem to really stem from the fact that it isn't clear what should go where in the Scala ecosystem.

[@odersky](http://github.com/odersky) has since created a document on this topic called "What should go into the standard library" (link above) which proposes a new structure for Scala and it's libraries. Comments are invited.

The document proposes a solution similar to Haskell:

- a "core": which consists only what the compiler needs and not more ([@odersky](http://github.com/odersky) thinks for Scala this should be explained slightly)
- a "platform": can vary and be much bigger. The platform would be maintained by a different set of people from the core (and have it's own committee), it would be handled by the people who contribute modules to the platform

[@odersky](http://github.com/odersky) thinks this would be a good model for us as well - the SLIP/SIP committee would look after the core and language, leave the platform to those who work on the platform. The SLIP committee would probably need to jumpstart the platform process in the beginning, but would like to hand over it's running to the community as soon as possible

Conversation over the proposal:

- [@dickwall](http://github.com/dickwall) points out there is scope to have the "EPFL Scala platform" as well as other platforms, including more functional ones
- suggests we borrow from Ubuntu model with "umbrella dependencies" that you bring in letting you group things. Haskell has this too - where you can use different platforms
- idea behind the SLIP process is was to get library developers to work together, not to work on things just for the standard library. It sounds like this process would achieve that
- users would also know they are going to get a certain quality of library

[@non](http://github.com/non) good vision, but questions/comments:

- core is very large, bringing it down would be very hard to migrate things out. Think we are a long way from being able to do this (although that doesn't mean we shouldn't aim for it)
- likes the idea of a platform, but the thing that's hard is the Scala namespace... the idea that the platform can have some stuff in the Scala namespace and some stuff that's not, that's a challenge
- The JSON AST discussions raised a good question: should we create a shared platform library and make it good, or should we create a good library and make that a platform library later? People had good points for both sides of this argument
- once you say something is in the Scala namespace, then you're saying it's going to be the thing because it's been blessed in some way. We say there is one platform, but if there are things in another namespace (eg Akka) those have a fundamentally different status than something in Scala namespace
- typically (eg in Python), maintainers maintain their module (not everything) make micro decisions about that module, but have larger committee who decides what's in or out or when there is going to be a new version or there is a difference of opinion they deal with that
- does [@odersky](http://github.com/odersky) see it like that? Would there be a gatekeeper - if so will that keep this from taking off?

[@dickwall](http://github.com/dickwall):

- we have to be able to trust that the user can find a high quality implementation of a library
- [@dickwall](http://github.com/dickwall) points out that even he sometimes has problems finding libraries sometimes
- [@dickwall](http://github.com/dickwall)points out that if something is in the Scala namespace, it's rightly or wrongly considered to have some elevated level of quality beyond "some random thing that I've put together"


[@odersky](http://github.com/odersky) discovery is important, but lets not discuss that now, concentrate on Scala namespace and Scala platform

[@dickwall](http://github.com/dickwall) is there a place for high quality libraries to live? (not SLIP)

- [@odersky](http://github.com/odersky) thinks this should be left to the community
- [@odersky](http://github.com/odersky) for the Scala namespace/platform one answer would be is that's a question for the platform team has to decide - to what degree they want to leverage the Scala namespace

[@odersky](http://github.com/odersky) Scala namespace is most useful when it's not very big and is important for common standards

- for example it was not good to continue with several versions of Futures, instead putting a standard version in the Scala namespace made sense, since it's not very big and should be a standard
- what should and should not be in the Scala namespace should be a discussion and not a hard and fast set of rules.

Splitting out core:

- [@odersky](http://github.com/odersky) thinks we should appeal to the community to help, since even Typesafe can't do all of this on it's own
- [@SethTisue](http://github.com/SethTisue) splitting the library up was already on Typesafe's plate for Scala 2.13. Could use help from the community, since disentangling the compiler from everything else involves a lot of work
- [@dickwall](http://github.com/dickwall) thinks this should be tracked through the SIP/SLIP site - SIP/SLIPs are much more than adding new things to the language



[@sjrd](http://github.com/sjrd):

- there is a contradiction saying platform maintainers should decide what goes into the Scala namespace and the wish to have several platforms
- if you want the best part to be something different and you have Several groups of people organizing platforms, everyone in these groups will decide what to put in "their" Scala namespace and that's not the point of a namespace
- [@heathermiller](http://github.com/heathermiller) assume other platforms (other than the Scala.org platform) would have to use another namespace
- [@odersky](http://github.com/odersky) Scala namespace really just another module in the platform that exits to be general and a common base

Actions:

- [@dickwall](http://github.com/dickwall) created new issue to track this: https://github.com/scala/slip/issues/31
- The community should read [@odersky](http://github.com/odersky)'s document and let the SLIP know their thoughts/questions/comments

### ... so what about JSON AST question/discussion
Link to SLIP: [https://github.com/scala/slip/pull/28](https://github.com/scala/slip/pull/28)

Notes:

- [@SethTisue](http://github.com/SethTisue) from the SLIP meeting point of view, shall we give it a number and essentially encourage this being discussed?
- [@dickwall](http://github.com/dickwall) points out that this shouldn't have been initially submitted with a SLIP number (some misunderstanding there on the SLIP discussion)

note, the implementation of this isn't completely finished yet.


- [@non](http://github.com/non) we can all agree this is interesting enough/there has been enough debate for this to be given a SLIP number and become "active"
- [@dickwall](http://github.com/dickwall) given number 28, but won't be "accepted" until some conclusion can be reached on where it's position is

people think this is a good idea, but it would be a platform library change in the new set up

From the SLIP discussion, there seem to be 3 different ideas/wants for this

- to create something for JSON like what Python has: something dead simple and you can use it to parse JSON without thinking
- a common AST for inner-op, for example the Spray people liked that (original idea for SLIP)
- a really high quality JSON parsing in the standard library (all edge cases etc)

a discussion needs to happen around that

Also, should this go into the Scala namespace?

[@SethTisue](http://github.com/SethTisue) points out that part the reason the reaction of this was hard to gauge was it wasn't clear if people realized this wasn't for core (it's not).

[@heathermiller](http://github.com/heathermiller) even we are confused about what is and isn't core

[@odersky](http://github.com/odersky) suggests for the issue of "bless and then make good" vs "good and then bless" we could adopt a package alias to bless things and bring them into the Scala namespace and solve the naming problem

Actions:

- SLIP give a number (28)


## AOB
- Sadly, [@dickwall](http://github.com/dickwall) is to step aside from the committee meetings but will continue to help with some of the process work. This is [@dickwall](http://github.com/dickwall)'s last committee meeting
- [@SethTisue](http://github.com/SethTisue) will set up and moderate the December meeting
- all agree [@dickwall](http://github.com/dickwall) has done a great job and thank him
- [@odersky](http://github.com/odersky) how do we find a new moderator? Suggests they email the other SLIP members to see if they can find a new moderator/find volunteers
