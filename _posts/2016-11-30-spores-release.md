---
layout: blog
category: blog
by: Jorge Vicente Cantero
title: "Releasing spores 0.4.3"
---

Today we at the Scala Center are happy to announce a new release of spores, now
designed to work with Java Serialization. In the August Advisory Board meeting,
IBM proposed that the Scala Center work on [improving the status quo of
serialization in
Scala](https://github.com/scalacenter/advisoryboard/blob/master/proposals/006-compile-time-serializibility-check.md).
The basic idea of the proposal was to pick up work on spores to prevent users
from dealing with serialization runtime errors.

## Spores

[Spores](https://github.com/scalacenter/spores), a project started in 2014
by Heather Miller and Philipp Haller, took a first step towards solving
this problem.

Spores provide a way to control what a closures captures, and thus
hopes to make it easier to operate with them in concurrent and distributed
enviornments. The key idea is to capture more type information than a standard
closure, and to use this type information to have more fine-grained control over
the closures's environment.

One creates a spore like this:

```scala
import scala.spores._
val greeting = “Hello”
val exampleSpore = spore {
  val capturedGreeting = greeting
  (name: String) =>
    println(s"$capturedGreeting, $name!")
}
```

Note that anything which the function in the spore refers to is explicitly
declared after `spore`. Variables that are not explicitly listed here result in
a compilation error. This makes it clear to developers what a function captures
in its environment, and allows the spores framework to check for other
properties for all of the values declared in the environment, such as that each
value is able to be serialized.

Though, wait a second. Java Serialization does all of its checks at runtime. If
spores use type information to figure out whether or not something can be
serialized at compile time, how can this work with Java Serialization?

To achieve this, previously, spores required Scala Pickling to transitively
check the entire enviornment was able to be serialized, statically, at
compile-time. However, we now wish to perform this check instead for Java
Serialization, as Java Serialization is most often used by developers.

## The transitive checker

In order to ensure that captured types only extend `Serializable`, and whose
members are also `Serializable`, spores version 0.4.1 comes with a compiler
plugin that complements the spores macro library. Its goal is to transitively
check that every captured variable, and all of its members, are extend
`Serializable` and are thus serializable at compile time.

Let's see it with an example:

```scala
class NotSerializable(val o: Object) extends Serializable
```

Capturing an instance of `NotSerializable` inside a spore that is going to be
serialized crashes our program with a runtime exception. Although the class
`NotSerializable` extends indeed `java.io.Serializable`, the member `o` of type
`Object` does not and the JVM does not know how to serialize it.

The transitive checker makes sure that examples like the above are detected at
compile-time rather than runtime.

## Getting started

To add spores to your project, add the following keys to your SBT build file:

```scala
libraryDependencies += "ch.epfl.scala" %% "spores" % "0.4.3"
addCompilerPlugin("ch.epfl.scala" %% "spores-serialization" % "0.4.3")
```

For further information on how to use it and a specification of spores, check
the [docs](http://scalacenter.github.io/spores/spores.html).

## Next steps

This stable release is the first step towards the spores and Spark integration.
In the upcoming weeks, we will work with IBM to improve the developer experience
of using spores in Spark and solve reported issues.
