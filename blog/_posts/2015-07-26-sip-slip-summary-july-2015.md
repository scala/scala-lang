---
layout: blog
post-type: blog
by: Dick Wall
title: SIP/SLIP Summary, July 27th 2015
---

## SIP/SLIP Summary, July 27th 2015

### Next Committee Meeting:

Thursday August 13th, 4.30pm GMT. [Google Hangout Event](https://plus.google.com/u/1/events/cfh933nkhhq0pe7h23c9v4csk6o)

[Video of last meeting](https://www.youtube.com/watch?v=ndkT5qHZHI0)

## Fixing Either

| Title          | Author(s)          |
|----------------|--------------------|
| [Fixing Either](https://github.com/robcd/scala.github.com/blob/master/sips/pending/_posts/2012-06-29-fixing-either.md) | Rob Dickens |

### Summary

Fix a number of issues with using `Either`, particularly in for expressions. Potentially implement right bias for `map`, `flatMap` and related functions.

### Notes

This is a SIP that has been dormant for a long time. We are reaching out to Rob Dickens to see if he is still interested in pursuing the changes.

Either, and related proposals/ideas such as validation and the `Or` type are currently being discussed by multiple interested parties in the Scala space.

As a result, the likely path forward for this SIP and the related activity/interest will be to attempt to put together an expert group for this work.

Since this change is likely to be contained entirely within library code and not require language changes, the resulting proposal should be a SLIP.

### Related

https://github.com/scala/scala/pull/4547 is a closed pull request against Scala that covers some of the same territory.

### Invitation to Comment

For the time being, until a formal SLIP submission is contributed, please register interest
on the [scala/slip gitter channel](https://gitter.im/scala/slip) with your contact details (preferably email, if you don't want to make that public, contact @dickwall directly on gitter).

## Implicits in For Comprehensions

| Title          | Author(s)          |
|----------------|--------------------|
| [Implicits in For Comprehensions](https://github.com/scala/scala.github.com/pull/417) | Harold Lee |

### Summary

Allow the use of the implicit keyword in for expressions for the definition of
values. The comments indicate that this should likely be broadened to all pattern matches.

### Notes

This will be a SIP if successful since it requires a language change. It will be renumbered
if accepted.

This is a recent SIP and has some useful discussion already on the pull request. Comments prior to the next SIP/SLIP committee meeting on Thursday, August 13th are requested.

### Invitation to comment

Please direct comments to [Pull Request #417](https://github.com/scala/scala.github.com/pull/417).

## Extensions of Futures and Promises

| Title          | Author(s)          |
|----------------|--------------------|
| [Extensions of Futures and Promises](https://docs.google.com/document/d/1Vza2-B3FzgtleX8RNs6rqRbhOn9jotrUfFB77h0DIGU/edit?hl=en_US#heading=h.bu8cg3api4vx) | Anton Kolmakov, Eduard Maltsev |

### Summary

Extension to SIP 14 to provide extra functionality not covered in that SIP, including scheduling, future-local variables, and more functionality on `scala.concurrent.Future`.

### Notes

Another candidate for a SLIP since changes appeared to be contained within libraries.

SLIP number will be assigned if/when accepted.

Need to gauge current level of interest from proposers.

Seeking public comment prior to August 13th meeting.

### Invitation to comment

You can comment on [the proposal document](https://docs.google.com/document/d/1Vza2-B3FzgtleX8RNs6rqRbhOn9jotrUfFB77h0DIGU/edit?hl=en_US#heading=h.bu8cg3api4vx) for notes on the text provided there, or on [pull request #295](https://github.com/scala/scala.github.com/pull/295) for more general comments or concerns.

## Backticks in String Interpolation

| Title          | Author(s)          |
|----------------|--------------------|
| [Backticks in String Interpolation](https://github.com/scala/scala.github.com/pull/297/) | Kevin Wright |

### Summary

Allow backticks to be used to denote identifiers in string interpolation without the need for the surrounding `{` `}`s, or in the enhanced proposal, without the need for `$` either.

### Notes

Needs language changes, hence will continue to be a (renumbered) SIP if/when accepted.

Feeling for this change is mostly negative within the committee at present. Kevin points out that backtick identifiers are already possible if surrounded by `${ }`, so while this would streamline string interpolation, particularly for quasiquoting, it may be a tough sell with regards to risk/reward.

Seeking public comment (and in particular multiple supporters willing to volunteer to push the SIP forward) prior to August 13th meeting.

### Invitation to comment

Comments requested on [pull request #297](https://github.com/scala/scala.github.com/pull/297/). There is more than the usual onus on supporters to back up their support with volunteer effort for this proposal.


## Binary Literals, Underscores in Literals

| Title          | Author(s)          |
|----------------|--------------------|
| [Support _ in numeric literals](https://groups.google.com/forum/#!msg/scala-debate/4-CE9Lpf6CM/UJrhS9cyYcgJ) | Eran Medan |

### Source Material

[Reddit Posting from eranation](https://www.reddit.com/r/scala/comments/3aqlhu/is_there_a_voting_mechanism_for_new_scala_features/)

[Spire Syntax using String Interpolation and Macros](https://github.com/non/spire#syntax)

### Summary

Allow underscores in numeric literals, e.g. `1_000_000_000` instead of `1000000000`. This is a change that Java introduced in Java 7 and the desire of a SIP for this would be to keep Scala in line with Java lexically in this regard.

### Notes

Not yet a formal SIP/SLIP proposal, and status of SIP vs SLIP submission will depend on the proposed implementation: If a library based approach, like that used in Spire, is proposed, a SLIP, if language changes are required, a SIP.

The committee is divided on language changes for this feature, with the leaning tending toward the Spire approach of string interpolation and macros at present, but with Martin supporting the language change to keep in line with Java lexical syntax.

Detractors note that `_` is already used for many different purposes within Scala, and this would introduce another meaning for it.

To move forward in either form, volunteer support from the community will be required.

### Invitation to comment

Since there is no PR or proposal at present upon which to comment, supporters (and detractors) are invited to discuss and register interest on the [scala debate post](https://groups.google.com/forum/#!msg/scala-debate/4-CE9Lpf6CM/UJrhS9cyYcgJ) prior to the August 13th meeting. At that time we will discuss whether to invite the proposal, and in what form (SIP or SLIP).
