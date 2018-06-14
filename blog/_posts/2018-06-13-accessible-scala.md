---
layout: blog-detail
post-type: blog
by: Guillaume Massé
title: Introducing Accessible Scala
---

  Scala is proudly a welcoming environment for all. The Scala Center is demonstrating this by supporting 
the development of Accessible Scala, a tool for blind and partially-sighted developers (see [SCP-016]).
One of its goals is to remove the noise introduced by various delimiters. For example, we could read the 
following expression: `class S[+T]` as `class S parameterized with covariant T`. Since there is more than one way
to pronounce Scala source code, we are open to the community proposition. You can find an extensive test case
here: [DescribeTest.scala]. If you find that descriptions could be improved, send us a pull request with the 
expected form.

  Reading Scala out loud make some of its syntactic elements less intimidating for beginners. There is no more 
need to mentally associate the syntax `+T` with its concept `co-variant`. Notice on the example above, how the type parameter delimiters: `[` and `]` are absent from the verbal description. It call also help sighted developers to describe Scala orally, for example in the context of pair programming. However, when expressions get more complex, the audible form can become ambiguous or difficult to decypher. 

  To overcome the limitation of verbal description, we created a technique called the Cursor. The idea is simple:
from your cursor location, you can navigate the abstract syntax tree of the source code. From a node, you can
navigate to the parent node, to the siblings (left or right) or the first child. As you navigate the code,
it's described verbally and selected. Here is an illustrated example, the arrows (→ exp ←) repesents the highlighted text and <kbd>Alt</kbd> + <kbd>Arrow</kbd> the keyboard shorcut applied to navigate. 

```

→ private ← class A { // speaks: "private"
  val a = 1
}
```

<kbd>Alt</kbd> + <kbd>Right</kbd>

```
private class → A ← { // speaks: "A"
  val a = 1
}
```

<kbd>Alt</kbd> + <kbd>Down</kbd>

```
private class A {
  → val a = 1 ← // speaks: "val a equals 1"
}
```

We created an online demo (adjust your volume!) to let you try the cursor 
technique and hear the descriptions.

# Want to try it?

We created an [online demo]. You can try it now! (Tip: It works best on google-chrome! )

We also created a [vscode extension], so you can try on your project. Search for `Accessible Scala` in the 
extension manager

<div style="margin: 20px auto; width: 560px;">
  <iframe style="margin: 20px auto; display: block;" width="560" height="315" src="https://www.youtube.com/embed/Y7xz0-KkBOU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

  <i>Hello world demo</i>

  <iframe style="margin: 20px auto; display: block;" width="560" height="315" src="https://www.youtube.com/embed/Up2ytnrsX6s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

  <i>Coverage demo</i>
</div>


# What's next?

We hope you are excited as we are by the online demo. We would like to hear your feedback on the verbal 
descriptions. We would like to invite the Scala community to improve the quality of the project and join the
effort. Another area where we would need help
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
