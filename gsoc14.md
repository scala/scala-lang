---
layout: page
title: "Google Summer of Code 2014 Scala Projects"
---

## Google Summer of Code

**This year the Scala team applied again for the [Google Summer of
  Code](http://www.google-melange.com/gsoc/homepage/google/gsoc2014)
  program to work with enthusiastic students on challenging Scala
  projects**

This page provides a list of project ideas. The suggestions are only a
starting point for students. We expect students to explore the ideas
in much more detail, preferably with their own suggestions and
detailed plans on how they want to proceed. Don't feel constrained by
the provided list! We welcome any of your own challenging ideas, but
make sure that the proposed project satisfies the [main
requirements](#requirements_and_guidelines) mentioned below.

### How to get involved

The best place to propose and discuss your proposals is our
["scala-language"](http://groups.google.com/group/scala-language)
mailing list. This way you will get quickly responses from the whole
Scala community.

### Previous Summer of Code

We encourage you to have a look at our [Summer of Code
2010](http://www.scala-lang.org/gsoc2010#),
[2011](http://www.scala-lang.org/gsoc2011#),
[2012](http://www.scala-lang.org/gsoc2012#) and
[2013](http://www.scala-lang.org/news/2013/03/20/gsoc13.html) page to
get an idea on what we and you can expect while working on Scala.

## Project Ideas

Here are some project ideas for you. The list is non-binding and any
reasonable project related to Scala that is proposed by a student will
be thoroughly reviewed.

* * *

### Miniboxing for Breeze and Spire

A very tricky question in compilers is how to translate high level
generic code, such as classes with type parameters to optimized low
level code. Researchers have proposed many translations in the last 25
years, yet we can't claim to have a perfect solution. This is because
generic code is uniform at a high level, but its low level translation
requires optimized non-uniform representations to obtain good
performance. Thus we have an inherent tension between uniformity and
optimality.

In the context of the Java Virtual Machine, [miniboxing][mb1] is a new
translation that sidesteps the shortcomings of previous approaches,
while maintaing the optimality of the low level non-uniform code. It
builds on the specialization transformation, which is already included
in the [Scala compiler][mb2], but produces too much bytecode to be
useful in practical applications. Although miniboxing is developed for
the Scala language, the same transformation could also be implemented
in [Java][mb3] and in other JVM languages, such as [IBM's X10][mb4],
[JetBrains' Kotlin][mb5]  and [RedHat's Ceylon][mb6].

The miniboxing transformation matches optimal performance in
microbenchmarks, but in order to make a significant impact in the
Scala community, it needs to be prove itself on large benchmarks, such
as the [spire numeric abstractions library][mb7] and the [breeze numeric
processing library][mb8]. In this context, the tasks for this project
are:

- develop the necessary mechanisms around the miniboxing plugin to
  allow running the spire and breeze benchmarks
- identify slowdowns caused by the miniboxing translation and
- propose and implement solutions to improve the performance.

This project requires familiarity with compilers (requirement: having
taken at least one Compilers course), the Scala programming language
(requirement: having taken the [Functional Programming in Scala][mb9]
course) and with [Java bytecode][mb10]. Note that acceptance for this
project is conditioned by the successful completion of a challenge,
which will be explained once you apply for the project. A big plus is
having contributed to OSS software writen in Scala.

#### Resources
- [the miniboxing plugin website][mb1]
- [a paper explaining the generic code translation challenges and the
  miniboxing transformation][mb11]
- [miniboxing plugin on github][mb12] -- a compiler plugin that
  introduces the miniboxing transformation in the compiler pipeline
- [spire numeric abstractions library][mb7] on github
- [breeze numerical processing, machine learning and natural language
  processing library][mb8] on github

Keywords:  generic code translation, miniboxing, specialization

Mentored by [Vlad Ureche][mb13].

[mb1]: http://scala-miniboxing.org/
[mb2]: http://github.com/scala/scala
[mb3]: http://docs.oracle.com/javase/7/docs/technotes/guides/language/index.html
[mb4]: http://x10-lang.org
[mb5]: http://kotlin.jetbrains.org/
[mb6]: http://ceylon-lang.org/
[mb7]: https://github.com/non/spire
[mb8]: https://github.com/scalanlp/breeze
[mb9]: https://www.coursera.org/course/progfun
[mb10]: http://en.wikipedia.org/wiki/Java_bytecode
[mb11]: http://infoscience.epfl.ch/record/188060
[mb12]: https://github.com/miniboxing/miniboxing-plugin
[mb13]: http://people.epfl.ch/vlad.ureche

## Requirements and Guidelines

### General Student Application Requirements

This is the fifth time the Scala project has applied to the Summer of
Code, and from last years experience, increased popularity of the
language and stories of other mentor organizations we expect a high
number of applications. First, be aware of the following:

*   Make sure that you understand, fulfill and agree to the general
    [Google Summer of Code rules](http://www.google-melange.com/gsoc/document/show/gsoc_program/google/gsoc2014/help_page)
*   The work done during GSoC requires some discipline from the
    students as they have to plan their day-to-day activities by
    themselves. Nevertheless we expect regular contact with the
    mentors by the usual forms of communication (mail, chat, phone) to
    make sure that the development is going according to the plan and
    students don't get stuck for weeks at a time (3 months may seem
    long, but in reality it is very easy to run out of time).
*   The [official SoC timetable](http://www.google-melange.com/gsoc/events/google/gsoc2014)
    mentions May 19th as the official start of coding, but if you
    have time you are encouraged to research your proposals even
    before that (and definitely learn the basics of Scala, if you
    haven't done that already).

### Student Application Guidelines

*   Student proposals should be very specific. We want to see evidence
    that you can succeed in the project. Applications with one-liners
    and general descriptions definitely won't make the cut.
*   Because of the nature of our projects students must have at some
    knowledge of the Scala language. Applicants with Scala programming
    experience will be preferred. Alternatively, experience with
    functional programming could suffice, but in your application we
    want to see evidence that you can quickly be productive in Scala.
*   You can think of Google Summer of Code as a kind of independent
    internship. Therefore, we expect you to work full-time during the
    duration. Applicants with other time commitments are unlikely to
    be selected. From our previous experience we know that students'
    finishing their studies (either Bachelor, Master of PhD) are
    likely to be overwhelmed by their final work, so please don't be
    too optimistic and carefully plan your time for the project.
*   If you are unsure whether your proposal is suitable, feel free to
    discuss it on our
    ["scala-language"](http://groups.google.com/group/scala-language)
    mailing list. We have many community members on our mailing list
    who will quickly answer any of your questions regarding the
    project. Mentors are also constantly monitoring the mailing
    list. Don't be afraid of asking questions, we enjoy solving
    puzzles like that!

### General Proposal Requirements

The proposal will be submitted via the standard web-interface at
[http://www.google-melange.com/gsoc/homepage/google/gsoc2014](http://www.google-melange.com/gsoc/homepage/google/gsoc2014),
therefore plain text is the best way to go. We expect your application
to be in the range of 700-1500 words. Anything less than that will
probably not contain enough information for us to determine whether
you are the right person for the job.

Your proposal should contain at least the following information, but
feel free to include anything that you think is relevant:

*   Please include your name (weird as it may be, people do forget
    about it)
*   Title of your proposal
*   Abstract of your proposal
*   Detailed description of your idea including explanation on why is
    it innovative (maybe you already have some prototype?), what
    contribution do you expect to make to the Scala community and why
    do you think your project is needed, a rough plan of your
    development and possible architecture sketches.
*   Description of previous work, existing solutions (links to
    prototypes, bibliography are more than welcome!)
*   Write us about yourself and convince us that you are the right
    person for the job (linking to your resume/CV is good but not
    sufficient)
    *   Mention the details of your academic studies, any previous
        work, internships
    *   Any relevant skills that will help you to achieve the goal
        (programming languages, frameworks)?
    *   Any previous open-source projects (or even previous GSoC) you
        have contributed to?
    *   Do you plan to have any other commitments during SoC that may
        affect you work? Any vacations/holidays planned? Please be
        specific as much as you can.
*   Contact details (**very important!**)