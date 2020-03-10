---
layout: blog-detail
post-type: blog
by: Julien Richard-Foy
title: "Functional Program (Re)Design"
---

We are excited to announce the release of a new version of the online course
[Functional Program Design].

As a reminder, the Scala Center runs freely accessible [online courses] that have
been completed by more than 5700 learners in 2019. Optionally, a paid version
delivers a certificate of completion.

## Why a New Version?

The previous version of the course was made of parts of older courses mashed
up together and the end result was not always consistent. Furthermore, the
part about asynchronous programming with `Future` overlapped with our other
course [Programming Reactive Systems], which covers this topic and more.

Last but not least, an important language feature was previously absent from our
online courses: programming with _implicits_.

The new version of [Functional Program Design] fixes these issues by replacing
the old material about `Future` with an entire week of new material dedicated to
implicits.

## Syllabus of the New Version

The syllabus of the new version of the course is the following:

- Week 1: Learn how to use “for expressions” to traverse collections and other data
  structures. See how for expressions are “desugared” into calls to higher-order
  functions by the Scala compiler. Discover what monads are and how to verify that
  their laws are satisfied for a number of examples.
- Week 2: Understand what lazy evaluation is and how it can be leveraged to write
  efficient algorithms. Reason about and prove properties on inductive data structures.
- Week 3: Learn how to use implicit parameters and how to write implicit definitions.
  Understand the rules used by the compiler to search for implicit values and to
  assign a higher priority to an implicit definition. Discover the type class pattern.
  Leverage type-directed programming to let the compiler “implement” data types
  serializers and deserializers for you.
- Week 4: Learn programming patterns for managing state and side-effects in large
  programs. Understand the implications of using `var` on the ability to reason about
  code.
- Week 5: Discover important programming patterns via examples, starting with the
  observer pattern, and then going on to functional reactive programming.

## All Our Online Courses

In total, we have 6 running courses, ranging from the basics of the language to more specific
programming techniques:

- [Functional Programming Principles in Scala] (Martin Odersky): our most popular course,
  introduces both the Scala language and the functional programming paradigm,
- [Functional Program Design] (Martin Odersky): shows how to apply functional programming
  techniques to design large applications,
- [Parallel Programming] (Viktor Kuncak, Aleksandar Prokopec): teaches programming techniques
  for leveraging multicore machines,
- [Big Data Analysis with Scala and Spark] (Heather Miller): teaches how to process datasets
  that don’t fit into the computer’s memory,
- [Scala Specialization Capstone Project] (Julien Richard-Foy): the four previous courses
  are grouped in a [specialization], and this course invites learners to apply the previously
  learned skills by implementing a large project,
- [Programming Reactive Systems] (Roland Kuhn, Konrad Malawski, Julien Richard-Foy, Martin
  Odersky): teaches programming techniques for implementing scalable, resilient, and responsive systems.

Our next goals are to update the courses to Scala 3 and to publish a new self-contained
course targeting beginners and aiming at delivering practical skills (how to model a
business domain, how to process and validate data, how to use a build tool, etc.).

[online courses]: https://docs.scala-lang.org/learn.html
[Functional Programming Principles in Scala]: https://www.coursera.org/learn/progfun1
[Functional Program Design]: https://www.coursera.org/learn/progfun2
[Parallel Programming]: https://www.coursera.org/learn/parprog1
[Big Data Analysis with Scala and Spark]: https://www.coursera.org/learn/scala-spark-big-data
[Scala Specialization Capstone Project]: https://www.coursera.org/learn/scala-capstone/
[specialization]: https://www.coursera.org/specializations/scala
[Programming Reactive Systems]: https://www.edx.org/course/programming-reactive-systems
