---
layout: blog-detail
post-type: blog
by: Jamie Thompson, Scala Center
title: Forward Compatibility for the Scala 3 Transition
---
# Forward Compatibility for the Scala 3 Transition
Scala 3 is coming, with a release candidate slated for the end of 2020.
With that knowledge comes the inevitable question:
should I migrate, and what is the potential cost?

For maintainers of projects, the migration process may become easier
with the upcoming release of Scala 2.13.4, which comes with a new preview feature:
reading and compiling against Scala 3 dependencies.

## Overview

With a guided tutorial, we will show you how Scala 2.13.4 makes the following
scenarios easier:
>  1. You have an application consisting of many subprojects that may depend on
>     each other, built with Scala 2.13, and would like to transition each one
>     independently to Scala 3.0
>  2. You have an application, built with Scala 2.13, and want to use some
>     new features of a library that has migrated to Scala 3.0

The tutorial will proceed as follows:
- We will take a small multi-module project of two sub-projects, a `shared` module,
containing simple data structures, and an `app` module that depends on `shared`.
- We will in turn migrate each sub-project to Scala 3, and show that it does not
matter in which order you migrate the projects, as `app` will continue
to build and run.
- To finish, we will add a library dependency on the Scala 3 version of ScalaCheck,
and use it from Scala 2 to validate data structures in the `shared` module.

A reader applying the steps in the tutorial to their own project should note that not
all features of Scala 3 are forward compatibile with Scala 2, such as `inline` methods.
Consequently, we recommend that the user limits their usage of Scala 3 exclusive
features when migrating incrementally. More information is provided in the
[forward compatibility](#forward-compatibility) section.

In addition, we provide a [troubleshooting](#troubleshooting) section for the reader,
which aims to suggest steps to take when applying this guide to their own projects
and a problem occurs.

### Status of the Tasty Reader

>As a quick aside, If you would like to know how it is possible to mix
>dependencies between the two compilers, watch the talk
>[Taste the Difference with Scala 3](https://www.youtube.com/watch?v=YQmVrUdx8TU).
>
>To summarise: Scala 3 stores meta information about the code it compiles in
>TASTy files, and Scala 2.13 can read these files to learn, for example,
>which terms, types and implicits are defined in a given dependency,
>and what code needs to be generated to use them correctly. The part of
>the compiler that manages this is known as the Tasty Reader.

Currently, reading Scala 3 dependencies from Scala 2 requires the compiler
flag `-Ytasty-reader`. The Tasty Reader feature is currently released as a
preview for users to evaluate and we invite them to
[give feedback](https://contributors.scala-lang.org/t/roadmap-for-the-tasty-reader-for-scala-2/4231)
and [report any bugs](https://github.com/scala/bug).
As Scala 3 reaches release, we hope to enable the Tasty Reader by default.

## Scenarios

The [overview](#overview) section describes two scenarios that we will guide you through
in this blog:
  - Migrating multi-module projects incrementally from Scala 2 to Scala 3
  - Taking advantage of new features in a library that is published for Scala 3.

Let's look at each scenario in turn:

### 1. Migrate a Multi-Module Project in Any Order

If you want to migrate a multi module project to Scala 3,
it does not matter in which order you migrate the modules, they will be
able to depend on each other regardless of whether they are compiled with
Scala 2.13 or Scala 3.

To illustrate this scenario, we will start with an empty directory and
build an sbt project with Scala 2.13 that has two modules, `shared`,
which has some common domain model data structures, and `app`,
which uses those data structures.

For this project, we will pick
[sbt 1.4.3](https://github.com/sbt/sbt/releases/tag/v1.4.3),
this allows you to mix projects of different Scala versions with very
little extra effort (thanks to Eugene Yokota).

To begin, our project looks like the following:

```scala
// project/build.properties
sbt.version=1.4.3
```

```scala
// build.sbt
ThisBuild / scalaVersion := "2.13.4"

lazy val shared = project

lazy val app = project
  .dependsOn(shared)
```

```scala
// shared/src/main/scala/example/Cat.scala
package example

sealed trait Cat extends Product with Serializable
object Cat {
  case object Lion    extends Cat
  case object Tiger   extends Cat
  case object Cheetah extends Cat
}
```

```scala
// app/src/main/scala/example/Main.scala
package example

object Main extends App {
  println(Cat.Tiger)
}
```

We can run this application with `sbt app/run` which will output the following:

```
[info] Compiling 1 Scala source to blog/shared/target/scala-2.13/classes ...
[info] Compiling 1 Scala source to blog/app/target/scala-2.13/classes ...
[info] running example.Main
Tiger
```

At this point we can try something exciting, compile either subproject with
Scala 3 and see if it works.

First, add the dotty plugin (this helps with managing and inspecting the
`scalaVersion` setting with Scala 3)

```scala
// project/plugins.sbt
addSbtPlugin("ch.epfl.lamp" % "sbt-dotty" % "0.4.5")
```

Then we can change the `scalaVersion` of `app`:

{% highlight diff %}
 // build.sbt
 ThisBuild / scalaVersion := "2.13.4"

 lazy val shared = project

 lazy val app = project
   .dependsOn(shared)
+  .settings(scalaVersion := "3.0.0-M1")
{% endhighlight %}

To recap, `app` is now compiled by Scala 3 and depends on `shared`,
which is compiled by Scala 2.13.

If we do `sbt app/run` we should see the `app` project recompile
and it will run as before.

Now lets try the other way around, in this case we also have to enable
reading Scala 3 dependencies in Scala 2 with the flag `-Ytasty-reader`:

{% highlight diff %}
 // build.sbt
 ThisBuild / scalaVersion := "2.13.4"

 lazy val shared = project
+  .settings(scalaVersion := "3.0.0-M1")

 lazy val app = project
   .dependsOn(shared)
-  .settings(scalaVersion := "3.0.0-M1")
+  .settings(scalacOptions += "-Ytasty-reader")
{% endhighlight %}

Here we have the opposite, `app` is compiled by Scala 2.13 and depends
on `shared`, which is compiled by Scala 3. We can see this more clearly using
the command `sbt 'show app/dependencyTree'`, which outputs the following:

```
app:app_2.13:0.1.0-SNAPSHOT [S]
  +-shared:shared_3.0.0-M1:0.1.0-SNAPSHOT
    +-org.scala-lang:scala3-library_3.0.0-M1:3.0.0-M1 [S]
```

If we then try `sbt app/run` both `shared` and `app` subprojects will recompile
and it should work as it always has. If in your own project there are issues
in changing the Scala versions, check out the
[troubleshooting](#troubleshooting) section.

To summarise this part, we have shown that it is possible to migrate subprojects
to Scala 3 from Scala 2.13 in any order, gradually, and continue to build and
run them if they mix versions.

### 2. Using a Scala 3 Library Dependency

In the section above, we have seen how it is possible for a subproject compiled
with Scala 2.13 to depend on a subproject compiled with Scala 3. The same
relationship extends to library dependencies.

To demonstrate using a third party library dependency, we will create a test suite for our
`example.Cat` data structure, using ScalaCheck. Here we add it as a library dependency:

{% highlight diff %}
 // build.sbt
 ThisBuild / scalaVersion := "2.13.4"

 lazy val shared = project
   .settings(scalaVersion := "3.0.0-M1")

 lazy val app = project
   .dependsOn(shared)
   .settings(scalacOptions += "-Ytasty-reader")
+  .settings(
+    libraryDependencies += "org.scalacheck" % "scalacheck_3.0.0-M1" % "1.15.0"
+  )
{% endhighlight %}

Notice that in the above snippet, we are using the Scala 3 version of ScalaCheck.
To force a specific Scala version, we take a standard module id and change it as so:

{% highlight diff %}
-"org.scalacheck" %% "scalacheck" % "1.15.0"
+"org.scalacheck" % "scalacheck_3.0.0-M1" % "1.15.0"
{% endhighlight %}

By replacing `%%` with `%`, we can then manually specify the binary version,
leading us to add `_3.0.0-M1` to the name of the module.

As a preliminary, now that `Cat` is compiled with Scala 3, we will change the
definition of `Cat` to an enumeration, giving us convenient ways to reflect
over its members:

{% highlight diff %}
 // shared/src/main/scala/example/Cat.scala
 package example

-sealed trait Cat extends Product with Serializable
-object Cat {
+enum Cat {
-  case object Lion    extends Cat
-  case object Tiger   extends Cat
-  case object Cheetah extends Cat
+  case Lion, Tiger, Cheetah
 }
{% endhighlight %}

Let's now make our test suite. As a demonstration we will check two properties:
- given two `example.Cat` with the same label, they should refer to the same object.
- given two `example.Cat` that refer to the same object, they should have the same label.

Here is the source code:

```scala
// app/src/test/scala/example/CatSpecification.scala
package example

import org.scalacheck.{Properties, Gen}
import org.scalacheck.Prop.forAll

object CatSpecification extends Properties("Cat") {

  val allCats = Cat.values

  val genCat: Gen[Cat] =
    for (x <- Gen.choose(0, 100)) yield allCats(x % allCats.length)

  property("`sameName -> identical`") = forAll(genCat, genCat) { (a: Cat, b: Cat) =>
    a.productPrefix != b.productPrefix || a.eq(b)
  }

  property("`identical -> sameName`") = forAll(genCat, genCat) { (a: Cat, b: Cat) =>
    a.ne(b) || a.productPrefix == b.productPrefix
  }

}
```

If we then use the command `sbt app/test` we should see the following output:
```
[info] + Cat.`identical -> sameName`: OK, passed 100 tests.
[info] + Cat.`sameName -> identical`: OK, passed 100 tests.
```

If we then run again `sbt 'show app/dependencyTree'` we see the following:

```
app:app_2.13:0.1.0-SNAPSHOT [S]
  +-org.scalacheck:scalacheck_3.0.0-M1:1.15.0
  | +-org.scala-lang:scala3-library_3.0.0-M1:3.0.0-M1 [S]
  | +-org.scala-sbt:test-interface:1.0
  |
  +-shared:shared_3.0.0-M1:0.1.0-SNAPSHOT
    +-org.scala-lang:scala3-library_3.0.0-M1:3.0.0-M1 [S]
```

To summarise, in this section we have shown how it is possible to use a
third party library dependency, compiled with Scala 3, from Scala 2.13.
If there are issues with changing the binary version of a particular
dependency you have, check out the [troubleshooting](#troubleshooting) section.

## Forward Compatibility
When migrating a subproject to Scala 3, where downstream consuming subprojects are likely to be on Scala 2.13, we would recommend restricting the usage of new features in Scala 3. This will maximise compatibility as you migrate each subproject. However, it is possible to start using some features of Scala 3 without issue, this is due to a limited forward compatibility in Scala 2.13 with some new Scala 3 features.

Forward compatibility means that many definitions created by using new Scala 3 features
can be used from Scala 2.13, however they will be remapped to features
that exist in Scala 2.13. For example,
[extension methods](http://dotty.epfl.ch/docs/reference/contextual/extension-methods.html)
can only be used as ordinary methods. So for cross-compatible code we recommend
to continue using implicit classes to encode extension methods.

On the other hand, some features of Scala 3 are not mappable to features in Scala 2.13,
and will cause a compile-time error when using them. A longer list can be seen in the
migration guide, describing [how Scala 2 reacts to different Scala 3 features](https://scalacenter.github.io/scala-3-migration-guide/docs/compatibility.html#the-scala-2-tasty-reader).

For unsupported features, a best effort is made
to report errors at the use-site that is problematic. For example,
[match types](http://dotty.epfl.ch/docs/reference/new-types/match-types.html)
are not supported. If we define in the `shared` project the type `Elem`:

```scala
// shared/src/main/scala/example/MatchTypes.scala
package example

object MatchTypes {
  type Elem[X] = X match {
    case List[t] => t
    case Array[t] => t
  }
}
```

and then try to use it in the `app` project:

```scala
// app/src/main/scala/example/TestMatchTypes.scala
package example

object TestMatchTypes {
  def test: MatchTypes.Elem[List[String]] = "hello"
}
```

we get the following error when calling `sbt app/run`:

```
[error] TestMatchTypes.scala:5:25: Unsupported Scala 3 match type in bounds of type Elem; found in object example.MatchTypes.
[error]   def test: MatchTypes.Elem[List[String]] = "hello"
[error]                        ^
[error] one error found
```

The error is standard for all unsupported Scala 3 features, naming the feature,
the location of the definition and the location where it is used.

## Troubleshooting
There are some situations where the steps described in the sections above do
not work out of the box for your own project, and some other considerations
need to be made.

For the multi module project scenario, let's say you have two subprojects
`A` and `B`, where `B` depends on `A`, both compiled with Scala 2.13.

### Source Incompatibilities When Changing to Scala 3
If you change the `scalaVersion` of `A` to Scala 3 and `A` fails to build,
and the error is not due to a missing dependency, the source code of `A` may
be incompatible with Scala 3 and you will have to make some changes.
You can consult the [Scala 3 Migration Guide](https://scalacenter.github.io/scala-3-migration-guide/)
to see what changes may be required.

### Missing Scala 3 Dependencies
If you change the `scalaVersion` of `A` to Scala 3 and `A` fails to build
due to a missing dependency, you can try to use the Scala 2.13 version of
the dependency. The sbt-dotty plugin provides
[helper methods](https://github.com/lampepfl/dotty-example-project#getting-your-project-to-compile-with-dotty)
for this.

### Scala 3 Dependencies That Break Compilation

If you successfully migrate subproject `A` to Scala 3, but now `B` fails
to compile, there are several likely possibilities:

1. `A` has made a deliberate but [forward compatible](#forward-compatibility)
change to its API, and `B` needs to update to use the new API.
2. `A`, or a transitive dependency of `A`, uses a feature of Scala 3 that
is not [forwards compatible](#forward-compatibility) with Scala 2.13.
2. `A`, or a transitive dependency of `A`, defines a Scala 3
macro but does not provide an equivalent Scala 2 macro (see an
[example project](https://github.com/scalacenter/mix-macros-scala-2-and-3)
here for how to provide macros to Scala 2.13 from Scala 3.)
4. There is a bug in the implementation of reading Scala 3 dependencies
in Scala 2.13. [Please report here](https://github.com/scala/bug).

### Scala 3 Dependencies that Break Runtime Behaviour

If you successfully migrate subproject `A` to Scala 3, and `B` compiles
successfully, but now fails at runtime, there are two likely possibilities:

1. The definitions in the Scala 3 dependency were correctly read, but
perhaps the API changed subtly, so the code of `B` must adapt.
For example, perhaps a default implicit value has been replaced, or other
code has changed its implementation while using the same signature.
2. There is a bug in the implementation of reading Scala 3 dependencies
in Scala 2.13. [Please report here](https://github.com/scala/bug).

### Third Party Scala 3 Dependencies that Break Compilation/Runtime
If depending on a third party library, compiled with Scala 3, breaks
compilation, or disrupts runtime behaviour, please consider the above
troubleshooting topics, but instead assume that `A` is the third party
library, and `B` is your Scala 2.13 project that depends on it.

## Contributing

If you have found an issue with Scala 3 dependencies in Scala 2.13 and want to try
fixing it in the Scala 2 compiler, you can see a summary of how to work on the
implementation here:
[Working with the Tasty Reader](https://github.com/scala/scala/blob/2.13.x/doc/internal/tastyreader.md#working-with-the-code)

## Summary

In this blog, we have outlined how it is possible to incrementally migrate a
project to Scala 3 while continuing to use all the parts together during the
transition. We encourage you to try out this process and let us know of any
issues with using Scala 3 dependencies from Scala 2.13.

## Important Links

- [Scala 3 Migration Guide](https://scalacenter.github.io/scala-3-migration-guide/)
- [Doc: Working with the Tasty Reader](https://github.com/scala/scala/blob/2.13.x/doc/internal/tastyreader.md#working-with-the-code)
- [Talk: Taste the Difference with Scala 3](https://www.youtube.com/watch?v=YQmVrUdx8TU)
- [Scala 2 issue tracker](https://github.com/scala/bug)
- [Tasty Reader discussion thread](https://contributors.scala-lang.org/t/roadmap-for-the-tasty-reader-for-scala-2/4231)
