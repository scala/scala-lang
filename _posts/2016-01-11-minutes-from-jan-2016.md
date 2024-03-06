---

category: blog
by: Hamish Dickson
title: Minutes from Jan 2016 SIP/SLIP Meeting
---

## SIP/SLIP meeting, January 2016

[A video recording of this meeting](https://www.youtube.com/watch?v=Kp4Ev-2xjWU) is available.

## Welcomes and apologies

Today we have [@SethTisue](https://github.com/SethTisue), [@sjrd](https://github.com/sjrd), [@heathermiller](https://github.com/heathermiller), [@non](https://github.com/non) and [@odersky](https://github.com/odersky)

## January milestone issues

### SIP for supporting named type arguments and partial type argument lists

Link to SIP: [https://github.com/scala/scala.github.com/pull/456](https://github.com/scala/scala.github.com/pull/456)

Proposal by [@ahmadsalim](https://github.com/ahmadsalim)

Notes:

- The SIP is a design proposal about the syntax and what the semantics of these features might be, but at this point has no code.
- This idea has come up a few times over the years and is based on those previous discussions.

This proposal and [dotty](https://github.com/scala/scala3):

[@odersky](https://github.com/odersky):

- have considering something like this in [dotty](https://github.com/scala/scala3). Doing this involves considering quite a few rules (and their corner cases), which this SIP doesn't cover.
- generally sympathetic, but not sure this has the format for a SIP.

[@odersky](https://github.com/odersky) thinks there should be a wider discussion about this, involving:

- for partial type application how do we want to support this?
- named parameters one way to do this, but there are possibly other ways and we want to use the same approach.
- for example another way of doing this is [kind-projector](https://github.com/non/kind-projector), do we want to put something like that in the language (and if yes, under what syntax?)?

Conclusion:

[@odersky](https://github.com/odersky) thinks this is promising, but needs to be fleshed out for a SIP. He also notes that [dotty](https://github.com/scala/scala3) wants to do this, so we might want to wait and synchronize rather than have [@ahmadsalim](https://github.com/ahmadsalim) spend a lot of time working on this, only to find a different approach has been made in dotty.

[@non](https://github.com/non), it's good to be clear that there are two things people want here:

- partial application
- partial specification, where want to apply all the types but only want to specify some of them and infer the rest

[@SethTisue](https://github.com/SethTisue) sums up:

- partial application part could go in Scala before dotty
- the named type parameter feature would need to be tried in dotty first (it's much more experimental) before any back port.

Actions:

Ask [@ahmadsalim](https://github.com/ahmadsalim) to talk to the [dotty](https://github.com/scala/scala3) team about this.
