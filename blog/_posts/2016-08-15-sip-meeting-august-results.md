---
layout: blog
post-type: blog
by: Jorge Vicente Cantero
title: "August SIP Meeting Results: 2 SIPs Rejected and 2 SIPs Updated"
---

On August 10, the Scala Improvement Process (SIP) Committee held
their monthly meeting to discuss and give feedback on four proposals,
both new and old. We're happy that these discussions sparked so much
interest and participation in the community. It's comforting to see the
new SIP process becoming fruitful!

Of the four discussed proposals, two were unanimously rejected.
The other two progressed and will have a follow-up iteration.

The rejected proposals were:

-   [SIP-12: Uncluttering Scala's syntax for control structures](https://www.google.com/url?q=http://docs.scala-lang.org/sips/pending/uncluttering-control.html&sa=D&ust=1471267730820000&usg=AFQjCNG3DYLvNqYpPCoHtaiW1hXOdhug7Q).
    Originally proposed in 2011. The proposal suggested syntax changes
    in if's, for and while loops, moving Scala's syntax away from Java
    and C-like languages. Whereas such changes may be arguably more
    beautiful, the Committee agreed that would give more problems
    than benefits. Seth Tisue, the appointed reviewer, fully explains
    the Committee's reaction [here](https://www.google.com/url?q=https://github.com/scala/scala.github.com/issues/555&sa=D&ust=1471267730820000&usg=AFQjCNG4JGI1cZHNDsaDTVyOQvtWmfU6fw).
-   [SIP-16: Self-cleaning macros](https://www.google.com/url?q=http://docs.scala-lang.org/sips/pending/self-cleaning-macros.html&sa=D&ust=1471267730821000&usg=AFQjCNFWboX_S1u5YHQR0NpRBnnebTYWGw).
    Originally proposed in 2012. Macros add a whole new dimension to the
    Scala language. Their experimental implementation was adopted by a
    lot of Scala libraries and were immensely useful for the creation
    and evolution of first-class Scala tools. As described by his
    creator and reviewer, Eugene Burmako, they turned out to be a good
    experiment, but one that could be improved if major downsides in the
    design were addressed. With the intention of letting scala.meta
    eventually replace the old macros, he proposed rejecting SIP-16 to
    revisit its basic foundations and create a new proposal that would
    considerably enhance the metaprogramming experience in Scala. In the
    meantime, the experimental implementation will remain in place. If
    you're interested in Eugene's explanation, follow [this](https://www.google.com/url?q=https://github.com/scala/scala.github.com/pull/57&sa=D&ust=1471267730822000&usg=AFQjCNH6qjT0FtFJzEAEI-VQoMgDYJFnNw).

The two proposals that made it to the next iteration are
[SIP-23: Literal-based singleton types](https://www.google.com/url?q=http://docs.scala-lang.org/sips/pending/42.type.html&sa=D&ust=1471267730823000&usg=AFQjCNF90th1pN8-gyB7P22ncN_Ub66CWQ) (reviewer:
Adriaan Moors) and [SIP-27: Trailing
Commas](https://www.google.com/url?q=https://github.com/scala/scala.github.com/pull/533%23issuecomment-239422098&sa=D&ust=1471267730823000&usg=AFQjCNGsyp_hsiXJrICtFf97TDPIPRD0kg) (reviewer:
Eugene Burmako). The reviewers and committee members provided more feedback to
iterate on. Both proposals already have
provisional implementations and will continue to be discussed for
inclusion in the language.

Overall, we're happy to report these results and see Scala
continue to move forward! We're excited to see the Scala community
speaking up and collaborating with the process—your vibrant
responses will greatly enrich our future deliberations.

Next month, we’ll discuss five more proposals, including
[SIP-21: Spores](https://www.google.com/url?q=http://docs.scala-lang.org/sips/pending/spores.html&sa=D&ust=1471267730824000&usg=AFQjCNFlCctwJBwDf4bnV60GLv99KUM9pw) and
[SIP-24: Repeated by-name
parameters](https://www.google.com/url?q=http://docs.scala-lang.org/sips/pending/repeated-byname.html&sa=D&ust=1471267730825000&usg=AFQjCNEO61d_W_BiBOiLunpO6tFN7ObmHw).
We hope to finish off the list of old proposals in the queue and focus
ourselves on the most recent proposals and the ones that are to
come!

Did you know that each month, we conduct these SIP meetings
on-air? You can tune in and ask questions to the SIP committee, and have
them answered live. Videos of the meetings are then [archived on
YouTube](https://www.google.com/url?q=https://plus.google.com/%2BScalaProcess/posts&sa=D&ust=1471267730825000&usg=AFQjCNHPeEpKuqg2APBcuXU7T_l4u2PTnA).
