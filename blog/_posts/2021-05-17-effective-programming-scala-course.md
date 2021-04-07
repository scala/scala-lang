---
layout: blog-detail
post-type: blog
by: Julien Richard-Foy
title: "New Online Course: Effective Programming in Scala"
---

We are excited to announce that our new MOOC “Effective Programming in Scala” is now
live on Coursera! We are also happy to share that most of our existing courses have already
been updated to Scala 3.

## Effective Programming in Scala

The [Effective Programming in Scala] course aims to teach non-Scala programmers everything
they need to become professional Scala 3 programmers in six weeks. This course shows you how
to embrace both functional programming and object-oriented programming in a simple and
practical way to write software at scale. It explains how to achieve typical programming
tasks in Scala, such as modeling business domains, breaking down complex problems into
simpler problems, manipulating data, or running parallel tasks. Throughout the course, you
will also learn the best practices for writing high-quality Scala code that scales to large
applications, how to handle errors, how to write tests, and how to leverage a productive
development environment.

The course features six auto-graded programming assignments, which have been designed to
be both fun and close to real-world programs. Topics covered by the assignments include
graphical animations, web applications, property-based testing, generic programming,
and parallel data processing.

Each week contains several video lectures of ~10 minutes each. Lectures are focused on
a specific skill or concept, and they are generally followed by a quiz so that you
can immediately assess your understanding of the lesson.

The syllabus is organized as follows:

- week 1: basics of the language, and how to model business
  domains with sealed traits and case classes,
- week 2: manipulate collections of data with the standard library,
  and write business logic,
- week 3: tooling around the Scala language (IDE, build tools,
  debuggers), organize large programs into modules,
- week 4: reason about code, write unit tests, property-based tests, and
  integration tests in Scala,
- week 5: contextual abstractions (aka “implicits” in Scala 2),
- week 6: error handling, data validation, and concurrent programming.

The course has been co-designed by myself (Julien Richard-Foy) and [Noel Welsh].
Noel Welsh has a long experience in teaching Scala, both in the industry and
within the [Scala Bridge] project.

Check out this video for more details about the course Effective Programming in Scala:

<div style="text-align: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/MSDJ7ehjrqo" title="Effective Programming in Scala teaser" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Other Scala Courses

The Scala Center and Martin Odersky have also been working hard to update all our
existing courses to Scala 3 (except the courses that use Spark, which still use
Scala 2.12).

This is a huge effort, and some parts are still in progress. Here is the current
status, at the time this blog is written:

- The [Scala Specialization] is a suite of five courses that teach Scala and
  data processing (possibly in parallel or distributed),
  - [Functional Programming Principles in Scala]: all the lectures and
    assignments have been updated to Scala 3,
  - [Functional Program Design]: all the lectures and assignments have been
    updated to Scala 3,
  - [Parallel Programming]: only the assignments have been updated to Scala 3,
  - [Big Data Analysis with Scala and Spark]: still on Scala 2.12,
  - [Functional Programming in Scala Capstone]: still on Scala 2.12,
- [Programming Reactive Systems]: only the assignments have been updated to Scala 3.

We will update our Spark courses to Scala 3 as soon as there is a stable release of
Spark that supports Scala 3.

The [Scala Specialization] always points to the latest version of the courses (we
will roll out the Scala 3 versions in the coming weeks).
Nevertheless, in case you want to access the Scala 2 version of the courses, they
are still available here:

- [Functional Programming Principles in Scala (Scala 2 version)]
- [Functional Program Design in Scala (Scala 2 version)]
- [Parallel Programming (Scala 2 version)]
- [Programming Reactive Systems (Scala 2 version)]

[Effective Programming in Scala]: https://www.coursera.org/learn/effective-scala
[Noel Welsh]: https://noelwelsh.com/
[Scala Bridge]: https://scalabridge.org/
[Scala Specialization]: https://www.coursera.org/specializations/scala
[Functional Programming Principles in Scala]: https://www.coursera.org/learn/progfun1
[Functional Program Design]: https://www.coursera.org/learn/progfun2
[Parallel Programming]: https://www.coursera.org/learn/parprog1
[Big Data Analysis with Scala and Spark]: https://www.coursera.org/learn/scala-spark-big-data
[Functional Programming in Scala Capstone]: https://www.coursera.org/learn/scala-capstone
[Programming Reactive Systems]: https://www.coursera.org/learn/scala-akka-reactive
[Functional Programming Principles in Scala (Scala 2 version)]: https://www.coursera.org/learn/scala2-functional-programming
[Functional Program Design in Scala (Scala 2 version)]: https://www.coursera.org/learn/scala2-functional-program-design
[Parallel Programming (Scala 2 version)]: https://www.coursera.org/learn/scala2-parrallel-programming
[Programming Reactive Systems (Scala 2 version)]: https://www.coursera.org/learn/scala2-akka-reactive
