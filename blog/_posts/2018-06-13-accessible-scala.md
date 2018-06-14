---
layout: blog-detail
post-type: blog
by: Guillaume Massé
title: Introducing Accessible Scala
---

  Have you found yourself where you had to verbally describe code? For example, while pair-programming
or talking about work during lunch. Verbally describing code is not an easy task, fortunately for you the
Scala Center is working on this. [SCP-016]: Accessible Scala, was submitted to provide industry-leading support
for blind and partially-sighted developers. It's also an opportunity to formalize a spoken Scala. For example,
how do you pronounce: `Map[K, V]`? Perhaps `Map of K V`, or maybe `Map taking K and V`.

  Reading Scala out loud make some of its syntactic elements less intimidating for beginners. When we read the
following expression: `class S[+T]` as `class S parameterized with covariant T`, we don't need to mentally
associate the syntax `+T` with its concept `co-variant`.

  One of the goals of the proposal is to remove the noise introduced by various delimiters. Notice how the type
parameter delimiters: `[` and `]` are absent from the verbal description. However, with more complex expressions, 
this can make the audible form ambiguous, for example, with nested types: `Either[Wobble[T], Option[Wobble[S]]]`
becomes: `Either applied to types Wobble of T, Option of Wobble of S`.
  
  To overcome the limitation of verbal description, we created a technique called the Cursor. The idea is simple:
from your cursor location, you can navigate the abstract syntax tree of the source code. From a node, you can
navigate to the parent node, to the siblings (left or right) or the first child. As you navigate the code,
it's described and selected. We created an online demo (adjust your volume!) to let you try the cursor 
technique and hear the descriptions.

# Want to try it?

We created an [online demo]. You can try it now! (Tip: It works best on google-chrome! )

We also created a [vscode extension] so you can try on your project. Search for `Accessible Scala` in the 
extension manager

<iframe style="margin: 20px auto; display: block;" width="560" height="315" src="https://www.youtube.com/embed/Up2ytnrsX6s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

# What's next?

We hope you are excited as we are by the online demo. We would like to hear your feedback on the verbal 
descriptions. We would like to invite the Scala community to improve the quality of the project and join the
effort. You can find an extensive test case here: [DescribeTest.scala]. If you find that descriptions could
be improved, send us a pull request with the expected form. Another area where we would need help
is to create an integration with [Emacspeak]. It's an emacs plugin widely used by blind developers. If you
know emacs lisp well and want to participate, please reach out to us!

# Talk to us!

Thoughts or opinions about Accessible Scala? Join us over on [Scala Contributors] to contribute to the discussion.
We also have a [gitter] channel.

[SCP-016]: https://github.com/scalacenter/advisoryboard/blob/master/proposals/016-verbal-descriptions.md
[vscode extension]: https://marketplace.visualstudio.com/items?itemName=scala-center.accessible-scala
[online demo]: https://scalacenter.github.io/accessible-scala-demo/
[DescribeTest.scala]: https://github.com/scalacenter/accessible-scala/blob/master/tests/unit/src/test/scala/ch.epfl.scala.accessible/DescribeTest.scala
[Emacspeak]: https://github.com/tvraman/emacspeak
[gitter]: https://gitter.im/scalacenter/accessible-scala
[Scala Contributors]: https://contributors.scala-lang.org/TBD
