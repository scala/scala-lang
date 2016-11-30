---
layout: blog
post-type: blog
by: Jorge Vicente Cantero
title: "Releasing spores 0.4.1"
---

Today we’re announcing the release of spores and its transitive serializable
checker. In the last Advisory Board meeting, IBM proposed the Scala Center to
work on [improving the status quo of serialization in
Scala](https://github.com/scalacenter/advisoryboard/blob/master/proposals/006-compile-time-serializibility-check.md).
The basic idea of the proposal was to integrate spores with Spark to prevent
users from dealing with serialization runtime errors. This would remove a burden
from Spark developers that depend on Java-based serialization libraries.
  
# Spores
  
[Spores](https://github.com/scalacenter/spores), a macro library started by Heather
Miller and Philipp Haller in 2013, set on solving this problem. Spores enable a
safer use of closures in concurrent and distributed environments. It allows
Scala developers to guarantee properties of functions based on types, having
more control over the function's environment.
  
In a nutshell, a spore is a function with an explicitly-defined environment (set
of non-local captured variables that are used throughout the logic of a
function). You can write it as:
  
```scala
import scala.spores._
val greeting = “Hello”
val exampleSpore = spore {
  val capturedGreeting = greeting
  (name: String) =>
    println(s"$greeting, $name!")
}
```
  
With a spore, the use of variables that are not explicitly captured result in a
compilation error. This gives developers a principled way to write the logic of
their functions, knowing what's being used and what's not. Among the potential
benefits of this approach, we can find that spores prevent memory leaks, race
conditions and runtime serialization errors.
  
However, these approaches rely on an intensive use of types. Is there any way we
could force the spore to capture only types that extend `Serializable` and whose
members are also `Serializable`? Could these checks prove the absence of runtime
errors?
  
# The transitive checker
  
In order to provide this functionality, the spores version 0.4.1 comes with a
compiler plugin that complements the spores macro library. Its goal is to check
the serializability of all the transitive dependencies of every captured
variable. Let's see it with an example:
  
```scala
class NotSerializable(val o: Object) extends Serializable
```
  
Capturing an instance of `NotSerializable` inside a spore that is going to be
serialized crashes our program with a runtime exception. Although the class
`NotSerializable` extends indeed `java.io.Serializable`, the member `o` of type
`Object` does not and the JVM does not know how to serialize it.
  
The transitive checker makes sure that examples like the above are detected at
compile-time rather than runtime.
  
# Getting started
  
To add spores to your project, add the following keys to your SBT build file:
  
```scala
libraryDependencies += "ch.epfl.scala" %% "spores" % "0.4.1"
addCompilerPlugin("ch.epfl.scala" %% "spores-serialization" % "0.4.1")
```
  
For further information on how to use it and a specification of spores, check
the [docs](http://scalacenter.github.io/spores/spores.html).
  
# Next steps
  
This stable release is the first step towards the spores and Spark integration.
In the upcoming weeks, we will work with IBM to improve the developer experience
of using spores in Spark and solve reported issues.
