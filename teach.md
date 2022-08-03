---
layout: inner-page-no-masthead
title: Teach
includeTOC: true
---

# Scala is a great tool to teach programming

Since Scala embraces several programming paradigms, it can be used to 
introduce many important concepts involved in computational thinking, from 
the most basic ones to the most advanced ones. Its lean syntax makes it
straightforward to map those concepts into code. It is suitable to teach 
programming to beginners, as well as to teach advanced software engineering 
courses. The scalable language also scales for teaching!

> “Scala is a fantastic teaching language as it is less prone to wear down the
> grit of my students compared to other programming languages that I have used
> for teaching introductory computer science.”
> 
> Björn Regnell, Lund University, Sweden.

> “Scala can be taught as a statically typed scripting language. The language
> works really well for programming in the small in CS1 without all the
> drawbacks I feel exist with dynamically typed languages.”
> 
> Mark Lewis, Trinity University, USA.

> “The familiar yet flexible expression-oriented syntax, advanced support for pattern-matching, extensive collections library, powerful type system, and general no-nonsense approach to essential programming constructs are all game changers.”
> 
> Lionel Parreaux, Hong Kong University of Science and Technology, Hong Kong.

Read over to learn good reasons to use Scala to teach programming, to know
where in the world Scala is taught, and to discover teaching tools and materials
used at various levels (from high school to university).

## Why Teach Scala

### Multiple Paradigms

While we learn new concepts, we compare and contrast different but similar
concepts and relate them to what we already know. This is a very important learning
principle and many pedagogical strategies build on contrasting and comparing
while exploring similarities and differences between concepts and ideas. Scala
is an excellent language in supporting this pedagogical principle as it
includes a pragmatic mix of concepts and ideas, ranging from simple to
advanced, that can be contrasted and compared, step by step.

> “One example I use in my teaching is contrasting different ways of solving the
> configuration problem: early on we contrast a global mutable variable versus
> default arguments and later when we get more advanced we contrast default
> arguments with context parameters. This way we can get deep into the more
> general discussion of the tradeoff between flexibility and complexity.”
> 
> Björn Regnell, Lund University, Sweden.

> “We teach how to implement basic interpreters and type checkers. For this
> purpose, algebraic data types with pattern matching and immutable data
> structures, provided by functional languages, are essential.”
> 
> Jaemin Hong, KAIST, South Korea.

> “Scala offers a wide variety of programming language constructs. By
> integrating both OOP and functional aspects into one language, it is a great
> tool to teach both paradigms and compare solutions within the same language.
> At the same time, Scala is a great tool to teach software design: it includes
> a whole spectrum of features ranging from basic constructs to advanced program
> structuring techniques. This allows us to use the same language to discuss
> various strategies to decompose a software into modules.”
> 
> Jonathan Brachthäuser, University of Tübingen, Germany.

### Expressive

Scala has a concise syntax that allows developers to focus on the intent of a
program without being distracted by syntactic noise. Here is a “Hello world”
program in Scala:

~~~
@main def run() = println("Hello, World!")
~~~

> “Scala is a fantastic teaching language for illustrating solutions with
> different tradeoffs between the least complex concept that does the job,
> that might have lower flexibility or is less performant, compared to other
> solutions that may be more difficult to read and maintain.”
> 
> Björn Regnell, Lund University, Sweden.

> “Scala allows us to focus only on interesting domain concepts without dealing
> with tedious low-level implementation issues.”
> 
> Jaemin Hong, KAIST, South Korea.

### Safe

Scala has a static type system that prevents entire classes of bugs from
happening. The compiler helps the students to find bugs before run-time.
If a student had too many difficult-to-hunt-down run-time bugs, this could take
away the joy of learning and cause fatigue such that a student may give up
prematurely and get a feeling of bad self-efficacy and loose motivation.

> “In my experience with Scala, the dialog with the compiler about static
> errors strongly supports conceptual learning and strengthens self-efficacy:
> 'I can do this and I’m getting a grip of it!’.”
> 
> Björn Regnell, Lund University, Sweden.

### Regularity and Principled Constructs

Scala has done away with many of the quirks from C-like languages that still
remain in, for example, Java and C#. There are, for instance, no surprising restrictions
on what can be nested inside what, and no irregular semantic difference between
primitive non-objects and “real” objects.

Best practices recognized by experts (e.g.,
[avoiding the usage of `null`](https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare/),
[manipulating immutable values](https://www.infoq.com/articles/data-oriented-programming-java/))
have been the norm since the inception of Scala.

> “The level of regularity and generality of principled concepts in Scala is
> the best I have seen so far in a multi-paradigm language. Every strange
> irregularity and tricky exception wear down the grit of students and take
> up time in teaching that can be much better spent.”
> 
> Björn Regnell, Lund University, Sweden.

> “After learning Scala, many students don’t want to ever go back to more
> primitive and ad-hoc languages like Java and C++, unless forced by the
> curriculum!”
> 
> Lionel Parreaux, Hong Kong University of Science and Technology, Hong Kong.

### Adoption in the Industry

Scala is used by companies such as Twitter, Netflix, AirBnB, NASA, Lego, 
Spotify (to name a few).

Scala is highly ranked in the [Redmonk Programming Language
Ranking](https://redmonk.com/data/).

### Multiplatform

Scala has been successfully used to implement both backends (running on a JVM)
and frontends (running in the browser).

### Ecosystem

Scala has [thousands of libraries](https://index.scala-lang.org/awesome), and
it has access to the whole Java ecosystem as well as the JavaScript ecosystem.

> “Full access to Java libraries as well as a large environment of Scala
> libraries means that I can give interesting assignments.”
> 
> Mark Lewis, Trinity University, USA.

### Versatile

Scala has been successfully used in domains such as distributed services, 
parallel programming, big data analysis, HTTP servers.

> “In CS2, I’ve had students do a project that involves graphics, networking,
> and multithreading and Scala makes that possible with limited overhead.”
> 
> Mark Lewis, Trinity University, USA.

## Who Is Teaching Scala

Several universities use Scala to teach programming. Discover them on the
following map:

{% include teachers-map.html %}

Want to add yourself to the map? Add your name
[here](https://github.com/scala/scala-lang/edit/main/_data/teachers.yml).

### Teachers Community

[Join the community of teachers](https://teachers.scala-lang.org) and start
a discussion about your teaching setup or your teaching material.

## Educational Material

This section lists popular tools or courses used for teaching programming in
Scala.

### Kojo

<div style="text-align: center">
    <img src="/resources/img/kojo.png" alt="Kojo Logo" style="max-width: 15em" />
    <p>Image credits: Aditya Pant.</p>
</div>

[Kojo](https://kojo.in) is a coding app for kids. Kojo is written in Scala, and
kids do their coding in Scala within the app.

Kojo is in the coding curriculum in one state in India.

You can check out examples of Kojo creations [here](https://codex.kogics.net).

### Scala Bridge

<div style="text-align: center">
    <img src="/resources/img/scalabridge.png" alt="Scala Bridge Logo" style="max-width: 5em"/>
</div>

[Scala Bridge](https://scalabridge.org/) builds an inclusive Scala community
with introductory programming workshops for underrepresented groups.

### Scala Center Online Courses

The [Scala Center](https://scala.epfl.ch) produces
[online courses](https://docs.scala-lang.org/online-courses.html) to learn Scala.
These courses target people with some (non-Scala) programming background.

### Other Online Resources

See [the other online resources](https://docs.scala-lang.org/learn.html).
