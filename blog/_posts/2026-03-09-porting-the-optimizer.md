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
def addOneMap(a: Array[Int]) = a.map(_ + 1)
```
This is easy to read and maintain, in addition to being shorter to write.

However, a high-level API like `map` is conceptually more complex: it's a function call that is passed another function, and the latter might need a closure to be allocated on the heap if it captures local values. Compiled naïvely, this is leads to slower code than the equivalent low-level loop:
```scala
def addOneLoop(a: Array[Int]) =
  val l = a.length
  val r = new Array[Int](l)
  var i = 0
  while i < l do
    r(i) = a(i) + 1
    i += 1
  r
```
You don't want to write this loop, because its purpose is a lot less obvious and it is harder to maintain, but without compiler help, you might have to write it if that function is critical to your application's performance. (Why would adding one to an array be critical to your app's performance? Because you're reading a pedagogical blog post and thus suspending disbelief!)

If you've ever written a `map` function yourself, you may recognize the loop above as being fairly close to how such a function is implemented, though the actual implementation is a little more complex than you'd think because it needs to handle the JVM's erased generics:
```scala
def map[B](a: Array[A], f: A => B)(implicit ct: ClassTag[B]): Array[B] =
  val len = a.length
  val r = new Array[B](len)
  var i = 0
  (a: Any @unchecked) match
    case a: Array[AnyRef]  => while (i < len) { r(i) = f(a(i).asInstanceOf[A]); i = i+1 }
    case a: Array[Int]     => while (i < len) { r(i) = f(a(i).asInstanceOf[A]); i = i+1 }
    /* ... 7 cases omitted for brevity ...  */
  r
```
This method's complexity is necessary to handle every possible array you can throw at it. You could also implement it with less code by using reflection to handle any possible array, but that leads to an even slower runtime.
But in our `addOne` case, we only need the `Array[Int]` part. Type-checking the array isn't needed, nor is casting `a(i)` inside the loop, and the whole `ClassTag` machinery could go away too.

## Optimizing for the best of both worlds

How can we get the best of both worlds? By having an _optimizer_ in the compiler that simplifies code and heuristically determines when it is beneficial to _inline_ code to enable further simplifications. Scala 2 has had such an optimizer for years now, and it's finally time to port it to Scala 3! Let's see why it works in a little more detail.

The optimizer takes care of turning our single-line `addOneMap` example into our fast `addOneLoop` version. 
The key technique to perform this is _inlining_: expanding the code of `map` into the function where it is called.
This allows the optimizer to then remove redundant branches and operations. The `match` is simplified to just one of its branches, the `asInstanceOf` and `ClassTag` disappear, and we end up with the fast version.

Inlining is powerful but can also have big drawbacks. For starters, your CPU keeps frequently-executed code in an "instruction cache" that is very fast to access. When common functions get bigger, fewer of them fit in that cache, so execution might become slower because fetching the code is slower even if the code itself has fewer function calls.

Furthermore, inlining is not always possible. A classic case is recursion: you cannot infinitely inline a function into itself. Some more tricky problems include the fact that you cannot inline a method that accesses a class's private fields outside of that class. (At least not on the JVM; ScalaJS does not have that problem.)

In this case, there is a heuristic modeling the fact that if a function call uses a function literal as argument, inlining it is probably worth it. There are other heuristics, such as one related to generic array operations in general, one that forces inlining of "forwarder" functions that merely call another function with minor changes to their arguments, and so on.

## Limitations

Heuristics mostly lead to better performance, but performance is such a complex topic that no set of heuristics can guarantee improvements. It's possible that enabling the optimizer on your specific codebase could regress some scenarios, which is why you should benchmark any performance-related change just as you would test any correctness-related change. You can override the heuristics with `@inline` and `@noinline` annotations, but these should be a last-resort solution that you re-evaluate frequently as the compiler and the JVM improve.

The other key limitation of the optimizer is that you can only use it if you know your dependencies at runtime are the same as the ones you had at compile time. For instance, if you compile against library `example` version `1.3.6`, and tomorrow the maintainers of `example` release version `1.3.7` that fixes a bug in a small function, this bugfix only has an effect if your code actually calls this function, not if the optimizer inlined it into your code.

Thus, the optimizer targets _application_ code as well as the _standard library_, and is an opt-in compiler setting. You should not use it for _library_ code unless you carefully select what inlining is allowed, see below.

## Using the optimizer

_This section is for Scala 3.9+ only, not the currently released 3.8.x branch._

Pass the flag `-opt` to the compiler to enable non-inlining optimizations, and `-opt-inline:...` arguments to allow it to inline calls to various packages.

For instance, `-opt-inline:**,!java.**,!org.example.*` tells the optimizer that inlining is allowed for all functions except those anywhere in the `java` package and those directly in the `org.example` package. More details are available with `-opt-inline:help`.

## Future directions

Now that the optimizer is at feature parity with its Scala 2 incarnation, we hope to bring further optimizations to Scala 3.
For instance, `Range`-based abstractions cannot always be fully eliminated today, but could with further work on the optimizer.
If you're interested, you can contribute either by participating as described below, or by [contributing](https://github.com/scala/scala3/blob/main/CONTRIBUTING.md) to the compiler itself!


## Participation

The Scala Center has been entrusted with coordinating the commissioned Scala work for the Sovereign Tech Fund. The Scala Center is an independent, not-for-profit center sponsored by [corporate members and individual backers like you](/blog/2023/09/11/scala-center-fundraising.html) to promote and facilitate Scala. If you would like to participate and/or see more of these types of efforts, please reach out to your manager to see if your company can donate engineering time or membership to the Scala Center.

See [The Scala Center Fundraising Campaign](/blog/2023/09/11/scala-center-fundraising.html) for more details.
