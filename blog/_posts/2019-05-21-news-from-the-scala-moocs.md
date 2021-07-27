---
layout: blog-detail
post-type: blog
by: Julien Richard-Foy
title: "News from the Scala MOOCs"
---

In this article, I want to share with you the current state of our online Scala courses (MOOCs) and introduce our plans
for the future.

## How it all started

We stepped into the world of MOOCs with the **Functional Programming Principles in Scala** course. It was launched
in 2012 and was a success, with more than 100,000 participants in the first two years, and a notably high completion
rate ([Miller *et. al.*](https://infoscience.epfl.ch/record/190022/))!

We believe that we were able to manage this load of learners because our assignments grading system was an automated
process: when a learner submitted his/her work, our grading infrastructure analyzed the submission’s source code, ran
the tests and produced detailed feedback for each observed error. In addition to this automated infrastructure, our
team of (human!) teaching assistants was present on the discussion forums to answer other requests.

Encouraged by this success, one year later we launched our second course: Principles of Reactive Programming.

## Where we are

We currently have 6 running courses, ranging from the basics of the language to more specific programming techniques:
- [Functional Programming Principles in Scala](https://www.coursera.org/learn/scala-functional-programming) (Martin Odersky): still our
  most popular course, introduces both the Scala language and the functional programming paradigm,
- [Functional Program Design](https://www.coursera.org/learn/scala-functional-program-design) (Martin Odersky): shows how to apply functional
  programming techniques to design large applications,
- [Parallel Programming](https://www.coursera.org/learn/scala-parallel-programming) (Viktor Kuncak, Aleksandar Prokopec): teaches
  programming techniques for leveraging multicore machines,
- [Big Data Analysis with Scala and Spark](https://www.coursera.org/learn/scala-spark-big-data) (Heather Miller):
  teaches how to process datasets that don’t fit into the computer’s memory,
- [Scala Specialization Capstone Project](https://www.coursera.org/learn/scala-capstone/) (Julien Richard-Foy): the
  four previous courses are grouped in a [specialization](https://www.coursera.org/specializations/scala), and this
  course invites students to apply the previously learned skills by implementing a large project,
- [Programming Reactive Systems](https://www.edx.org/course/programming-reactive-systems) (Roland Kuhn, Konrad
  Malawski, Julien Richard-Foy, Martin Odersky): teaches programming techniques for implementing scalable, resilient,
  and responsive systems.

In practice, we are able to deploy our grading infrastructure on both the [Open edX](https://open.edx.org/) and the
[Coursera](https://www.coursera.org) platforms. The benefits are twofold: we can test and improve our next courses
internally at EPFL on [an Open edX based platform](https://courseware.epfl.ch/) before making them public, and we
believe that by having more freedom on where we eventually publish our courses ([edX](https://www.edx.org/) or
[Coursera](https://www.coursera.org)) you will be more likely to get the best online learning experience.

The content of our courses is available for free. In addition, a paid version allows you to receive a grade for the whole
course as well as a certificate of completion. Statistics revealed that this paid version is mostly used by companies
to train their employees. The MOOCs revenues allow us to pay one engineer (myself) and a team of teaching assistants.

## What we plan to do

Our goal is to **ease the adoption of Scala** and, beyond the language, to turn new, **innovative**, programming
techniques into **familiar** practices.

We will keep making our material accessible for free and we will continue selling certificates of completion to
sustain our activity.

More concretely, the next steps in our roadmap are the following:
- teach more advanced concepts (implicits, path-dependent types, etc.),
- give ready-to-use recipes for common programming tasks (manipulate files, perform HTTP requests, etc.),
- update the material to recent Scala versions and Dotty.

And you, what would be your expectations for our next MOOCs? Please share your thoughts on the
following [discussion thread](https://users.scala-lang.org/t/what-s-up-with-the-scala-moocs-request-for-feedback/4557).
