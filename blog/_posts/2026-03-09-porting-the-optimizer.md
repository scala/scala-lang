---
layout: blog-detail
post-type: blog
by: Solal Pirelli, EPFL
title: Porting the Scala 2 optimizer to Scala 3
description: Making your high-level maintainable code as fast as low-level harder-to-read code
---

> This post covers work done under the [Sovereign Tech Fund investment](https://www.scala-lang.org/blog/2026/01/27/sta-invests-in-scala.html) umbrella: [Maintenance of the Standard Library/Core Library Modules and APIs]([???](https://contributors.scala-lang.org/t/standard-library-now-open-for-improvements-and-suggestions/7337)). The work is coordinated by the [Scala Center](https://scala.epfl.ch/).

Scala's expressiveness allows you to write what you mean:
```scala
def addOne(a: Array[Int]) = a.map(_ + 1)
```
This is easy to read and maintain, in addition to being shorter to write.

However, a high-level API like `map` is conceptually more complex: it's a function call that is passed another function, and the latter might need a closure to be allocated on the heap if it captures local values. Compiled naïvely, this is leads to more and more complex instructions than the equivalent low-level loop:
```scala
def addOne(a: Array[Int]) =
  var l = a.length
  var r = new Array[Int](l)
  var i = 0
  while i < l do
    r(i) = a(i) + 1
    i += 1
  r
```

You don't want to write this loop, because its purpose is a lot less obvious and it is harder to maintain, but without compiler help, you might have to write it if that function is critical to your application's performance. (Why would adding one to an array be critical to your app's performance? Because you're reading a pedagogical blog post and thus suspending disbelief!)


## Participation

The Scala Center has been entrusted with coordinating the commissioned Scala work for the Sovereign Tech Fund. The Scala Center is an independent, not-for-profit center sponsored by [corporate members and individual backers like you](/blog/2023/09/11/scala-center-fundraising.html) to promote and facilitate Scala. If you would like to participate and/or see more of these types of efforts, please reach out to your manager to see if your company can donate engineering time or membership to the Scala Center.

See [The Scala Center Fundraising Campaign](/blog/2023/09/11/scala-center-fundraising.html) for more details.
