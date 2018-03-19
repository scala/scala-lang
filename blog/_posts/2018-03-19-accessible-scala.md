---
layout: blog-detail
post-type: blog
by: Jon Pretty
title: "Accessibility of the Scala Compiler"
---

In 2001, as a university undergraduate, a friend and I were lucky enough to get
the opportunity to meet the physicist Stephen Hawking at a small private
reception after he gave a public lecture in Cambridge.

Whilst the lecture was itself deeply interesting, two things struck me more
than anything else from that evening: the first was the warmth of Prof Hawking,
who went from that lecture theatre having spoken to an audience awed by his
explanations of black holes and
[branes](https://en.wikipedia.org/wiki/Brane_cosmology) in eleven-dimensional
spacetime, to join us in a quiet side-room where he talked to my friend, also a
wheelchair-user, about the availability of ramps and general accessibility in
different buildings in the university; some of the most mundane practicalities
of his daily life.

The other thing I observed was the ergonomics of Prof Hawking's computer, as I
stood alongside him and watched him slowly compose sentences, before completing
them, and having them spoken. Presented with a monochrome screen with
alternating selections of words, he had no greater physical capability than to
synchronize several clicks of the computer's single button to select one word
at a time and append it to a sentence he gradually built up. It felt
frustratingly slow for the rest of us, all too accustomed to the ease of
speech, but for him it was an enabler through which he was able to make huge
contributions to scientific research, and through which the rest of us were
able to see through a small window into his great—and now sadly lost—intellect.


It is a reminder how easy it is for many of us to take our experience of
programming for granted: we can quickly glance over source code or compiler
errors on our screens to spot bugs or understand functionality. For blind
programmers, the screen is usually replaced by a text-to-speech system, which
linearly renders source code and error messages as spoken text.

Unfortunately, for a language like Scala, that audible representation is
presented very verbosely, and can be painful to use. An engine such as "espeak"
may render a definition like,
```
def foo[A: Bar](s: String): Int = ...
```
as,
```
def space foo space open square bracket capital a colon space bar close square
bracket open bracket s colon space string close bracket colon space int equals
```
whereas that same information could be conveyed more expediently as,
```
def foo
type a context bar
from s string to int
```

During the [Scala Center](https://scala.epfl.ch/) Advisory Board last week, a
proposal authored and strongly advocated by [Sam
Halliday](https://gitlab.com/fommil), with help from [Rui
Batista](https://github.com/ragb), was accepted as a recommendation by the
board, with a unanimously positive vote from all the members, including [47
Degrees](https://www.47deg.com/), [IBM](https://www.ibm.com/us-en/), [Goldman
Sachs](http://www.goldmansachs.com/), [Lightbend](https://www.lightbend.com/),
[Morgan Stanley](https://www.morganstanley.com/), [SAP](https://www.sap.com/),
[Twitter](https://about.twitter.com/) and
[Verizon](https://www.verizon.com/about/).

The Scala Center will work towards making Scala more accessible. This effort
has already received some open-source contributions, and the Scala Center will
work hard to ensure that these contributions are seen through to completion, as
we experiment with effective ways to improve the output from the compiler
through a screenreader. This work will be not be tied to any particular
choice of screenreader technology or editor.

This also presents an interesting area of research for improving the ergonomics
of programming in an advanced statically-typed language for blind and
partially-sighted users, which is by no means a "solved problem", and offers
much room for improvement.


Most of the work the Scala Center does contributes small differences to the
lives of many developers in the Scala community. This proposal is different in
that it provides a potentially enormous difference to the experience of
programming in Scala to a small number of users.

But more than that, it furthers our goal of inclusivity; that Scala is a
language which rightly knows the importance of supporting *all* its users,
regardless of physical disability; to make it easier, in particular, for blind
and partially-sighted people to become Scala developers, working productively
alongside sighted developers, and having the greatest opportunity possible to
share their valuable contributions in the field of software development.

Read this proposal here: **"[SCP-016: Accessible Scala](https://github.com/scalacenter/advisoryboard/blob/master/proposals/016-verbal-descriptions.md)"**.
