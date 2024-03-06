---
layout: blog-detail
post-type: blog
by: Jamie Thompson (Scala Center)
title: "Tell us which errors bug you the most"
description: "Feedback is wanted on confusing or unhelpful error messages"
---

### Give your feedback to improve error reporting

![example error message for a non-exhaustive pattern in a for-comprehension]({{ site.baseurl }}/resources/img/blog/2023-10-error-messages/splash-image.jpg)
**TL;DR: [click here][issue-template] to tell the Scala 3 core maintainers which error messages are unhelpful, confusing or otherwise suboptimal.**

### Why are we asking you

From [suggesting to import missing extension methods](https://docs.scala-lang.org/scala3/book/ca-extension-methods.html#import-extension-method) and more, Scala 3 tries to improve the ways that warnings and errors are reported to the user.
The idea being that when the user engages with reported problems, it should feel like having a conversation with a helpful tutor. By helping users to get back on track, we can make Scala easier to learn, friendlier to newcomers, and also keep experienced users more productive.

We know there is much more that can be done to continually improve the situation. As well as working to [expose diagnostics programatically](https://github.com/scala/scala3/issues/14904), we are starting a new campaign to seek out confusing, annoying or unhelpful error/warning messages.

As compiler authors, we do try to provide good messages, but it is possible for there to be shortcomings.
For example, the message may correctly report a problem, but not provide enough information to actually help the user.

A good example is reported in [this issue][lambda-issue], which documents how to improve the following sub-optimal error message:
```scala
val f: (Int, Int) => Int = Integer.compare(_ + 1, _)
//                         ^^^^^^^^^^^^^^^^^^^^^^^^^
//                         Wrong number of parameters, expected: 2
```

### How you can help

To help collect problematic errors, we have made a [new issue template][issue-template] to fill in on the Scala 3 repository.

The template helps you to write the report, by asking what was so confusing/unhelpful about the message, and then gives the option for you to suggest what would make the error more helpful, actionable, etc.

The improvement may be anywhere from more explicit explanation of the source of error, to even [adding a quick fix](https://github.com/scala/scala3/pull/18314) that can be applied automatically. Again you can read [this issue][lambda-issue] for inspiration.

**Please [click here][issue-template] to open a new issue!**

### Results so far

We also opened similar threads last week on [Scala Users](https://users.scala-lang.org/t/feedback-wanted-confusing-or-unhelpful-error-messages/9553/5) and [Scala Contributors](https://contributors.scala-lang.org/t/feedback-wanted-confusing-unhelpful-error-messages/6346/2), asking for feedback. So far since we have received four reports from the community:
1. [scala/scala3#18686: Better error message when accessing private members](https://github.com/scala/scala3/issues/18686)
2. [scala/scala3#18685: lazy val parameters and overrides](https://github.com/scala/scala3/issues/18685)
3. [scala/scala3#18684: confusing "Not found" error when I change "def foo()" to "val foo()"](https://github.com/scala/scala3/issues/18684)
4. [scala/scala3#18682: Can we have "did you mean..." for top-level names rather than just methods](https://github.com/scala/scala3/issues/18682)

<br/>
And we already have a fix for `1.` thanks to Nicolas Stucki from EPFL, [see PR scala/scala3#18690](https://github.com/scala/scala3/pull/18690).

[lambda-issue]: https://github.com/scala/scala3/issues/18657
[issue-template]: https://github.com/scala/scala3/issues/new?assignees=&labels=itype%3Aenhancement%2C+area%3Areporting%2C+better-errors%2C+stat%3Aneeds+triage&projects=&template=improve-error.md&title=
