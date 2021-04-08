---
layout: blog-detail
post-type: blog
by: Adrien Piquerez, Scala Center
title: Scala 3 in sbt 1.5
---

We are delighted to announce that sbt 1.5.0 supports Scala 3 out-of-the-box.

From the sbt user viewpoint, Scala 3 is just another Scala version, since every default task and setting works the same.

Yet Scala 3 changes the picture of compatibility in the ecosystem and is going to change our way of dealing with Scala versions and library dependencies.
That new reality is reflected in sbt by the `scalaBinaryVersion` setting and by the new `CrossVersion.for3Use2_13` and `CrossVersion.for2_13Use3`.

Scala 3 early adopters, we encourage you to jump to sbt 1.5.0 and to drop the soon-to-be deprecated sbt-dotty plugin.

## Just another Scala version

Using Scala 3 in sbt is as short as:

```scala
// project/build.properties
sbt.version=1.5.0
```

```scala
// build.sbt
ThisBuild / scalaVersion := "3.0.0-RC2"
```

All the default tasks and settings are supported.
You can manage dependencies, compile, test, run, package and publish your program or library. 

Most sbt plugins should work the same, as long as they do not rely on a Scala 2 compiler plugin or a Scala 2-specific option.

### The doc tasks

On a Scala 3 project, the `doc` task invokes the [new Scaladoc tool](https://medium.com/virtuslab/the-future-of-scaladoc-8bf78a4e2988) which uses TASTy files to generate the documentation.

For your own curiosity, you can run the `show tastyFiles` command to see the TASTy files of your Scala 3 project.

### Porting a Scala 2 project

You can change the `scalaVersion` of your project or you can add Scala 3 to the `crossScalaVersions` setting.

```scala
crossScalaVersions := Seq("2.13.5", "3.0.0-RC2")
```

It is likely that you need to upgrade some dependencies, to change some compiler options or to remove some compiler plugins. Read the [Scala 3 migration tutorial](https://scalacenter.github.io/scala-3-migration-guide/docs/tutorials/sbt-migration.html) to learn more about those steps.

## A new compatibility era

Scala 3 introduces TASTy, an intermediate representation of Scala programs, that is designed for stability during the lifetime of Scala 3.
The current state of TASTy makes us confident that all Scala 3 minor versions are going to be **backward binary compatible**.
Thus we will be able to apply the [Semantic Versioning scheme](https://semver.org/) to the Scala compiler.

Concretely it means your Scala 3.x project can depend on libraries compiled with Scala 3.y, where y is lower or equal to x.

This is materialized in sbt by the `scalaBinaryVersion` setting which is set to "3" on all Scala 3 versions (starting from 3.0.0).

Let's take an example:

```scala
// build.sbt
lazy val hello = project.in(file("."))
  .settings(
    scalaVersion := "3.0.0",
    libraryDependencies += "org.typelevel" %% "cats-core" % "x.y.z"
  )
```

We can print the `scalaBinaryVersion`:

```shell
sbt:hello> show hello / scalaBinaryVersion
[info] 3
```

As a consequence, the `cats-core` dependency will be resolved to `cats-core_3`.

If I bump the `scalaVersion` to 3.1.0, then the exact same `cats-core_3` artifact will be used and it will still be compatible.

Suppose now that I publish the project as a library, it will be published as `hello_3` and be available for all projects whose Scala version is greater than 3.1.0.

This is good news for Scala 3 library maintainers, who will not be pressured to release for the latest Scala 3.x version.

For application developers it allows you to use the most recent Scala 3.x version, without worrying about the availability of your dependencies. 

## A smooth transition

While the state described above is an undeniable improvement, it does not make the transition from Scala 2.13 to Scala 3 easier.
Yet we claim this transition will be smoother than ever thanks to the interoperability between the two versions of the language.

> #### *Disclaimer for library maintainers*
> 
> *Using the interoperability between Scala 2.13 and Scala 3 in a published library is generally not safe for your end-users.*
> *Unless you know exactly what you are doing, it is discouraged to publish a Scala 3 library that depends on a Scala 2.13 library (the scala-library being excluded) or vice versa.*
> *The reason is to prevent library users from ending up with two conflicting versions `foo_2.13` and `foo_3` of the same foo library in their classpath, this problem being unsolvable in some cases.*

### Using Scala 2.13 libraries in Scala 3

The Scala 3 compiler is able to type check Scala 2.13 types and to resolve Scala 2.13 implicits.
It means you can safely use Scala 2.13 libraries in a Scala 3 application.

This feature has been extensively tested in the Scala 3 community build for more than a year.
It is now natively available in sbt by using `CrossVersion.for3Use2_13`:

```scala
// build.sbt
lazy val hello = project.in(file("."))
  .serttings(
    scalaVersion := "3.0.0-RC2",
    libraryDependencies +=
      ("org.typelevel" %% "cats-core" % "x.y.z").cross(CrossVersion.for3Use2_13)
  )
```

Here sbt resolves `cats-core_2.13` instead of `cats-core_3` (or more precisely `cats-core_3.0.0-RC2`), and it can compile and run the project successfully.

The story is different for macros since the Scala 3 compiler cannot expand a Scala 2.13 macro.
If you run into this case the compiler will clearly state that it is not possible.

### Use Scala 3 libraries in Scala 2.13

Conversely, the Scala 2.13 compiler is able to type check most Scala 3 types (not the most exotic ones such as match types) and to resolve Scala 3 given instances.

This is made possible by the Scala 2.13 TASTy reader, contributed by Jamie Thompson at the Scala Center.
You can learn about it in the [Forward Compatibility](https://www.scala-lang.org/blog/2020/11/19/scala-3-forward-compat.html) article.

The TASTy reader was introduced in `2.13.4` and is still an experimental feature.
You can  enable it with the `-Xtasty-reader` compiler option.

In a Scala 2.13 project, you can declare a Scala 3 dependency using `CrossVersion.for2_13Use3`:

```scala
// build.sbt
lazy val hello = project.in(file("."))
  .settings(
    scalaVersion := "2.13.5",
    scalacOptions += "-Xtasty-reader",
    libraryDependencies +=
      ("org.typelevel" %% "cats-core" % "x.y.z").cross(CrossVersion.for2_13Use3)
  )
```

Notice here that sbt will try to resolve `cats-core_3`, which does not exist at the time of writing.
But you can try the TASTy reader on `cats-core_3.0.0-RC1` by setting:

```scala
libraryDependencies += "org.typelevel" % "cats-core_3.0.0-RC1" % "x.y.z"
```

The macro story is the same here: the Scala 2.13 compiler cannot expand a Scala 3 macro.

### The sandwich pattern

During the transition from 2.13 to 3, you can have a Scala 3 module layered in between two Scala 2.13 modules.

![The sandwich pattern](/resources/img/blog/scala-3-sandwich.png)

```scala
lazy val main = project.in(file("main"))
  .settings(
    scalaVersion := "2.13.5",
    scalacOptions += "-Ytasty-reader"
  )
  .dependsOn(middle)

lazy val middle = project.in(file("middle"))
  .settings(scalaVersion := "3.0.0")
  .dependsOn(core)

lazy val core = project.in(file("core"))
  .settings(scalaVersion := "2.13.5")
```

Here the classpath of the `main` application contains the Scala 3 compiled classes of the `middle` module which itself depends on the Scala 2.13 classes of the `core` module.

Such a thing is possible as long as all modules depend on the same binary artifacts of their library dependencies.
Having `foo_2.13` and `foo_3`, for some library foo, under the same classpath is fraught with problems and it won't be permitted by sbt resolvers.

This example shows that it is possible to migrate a big Scala application one module at a time, while running the tests continuously to progress confidently.

The inverted sandwich, with 2.13 being in the middle, is also possible.

## FAQ

### What about incremental compilation?

Scala 3 is compatible with Zinc, the Scala incremental compiler.
We benefit from incremental compilation in sbt out-of-the-box.

### What about Scala.js?

The Scala.js plugin version 1.5.0 is already compatible with Scala 3 and sbt 1.5.

You can also use `for3Use2_13` and `for2_13Use3` in a Scala.js project.

```scala
// project/plugins.sbt
addSbtPlugin("org.scala-js" % "sbt-scalajs" % "1.5.0")
```

```scala
// build.sbt
lazy val hello = project.in(file("."))
  .enablePlugins(ScalaJSPlugin)
  .settings(
    scalaVersion := "3.0.0-RC2",
    libraryDependencies +=
      ("org.typelevel" %%% "cats-core" % "x.y.z").cross(CrossVersion.for3Use2_13)
  )
```

Here sbt resolves the `cats-core_sjs1_2.13` artifact.

### What about Scala Native?

Scala Native is not yet compatible with Scala 3.

## Wrapping up

Using Scala 3 in sbt 1.5.0 is simpler than ever.
It is supported out-of-the-box and should interact well with the existing plugins of the sbt ecosystem.

With Scala 3.0.0-RC2, the second release candidate before the final version, you can give Scala 3 a try, experiment with the new features and test the interoperability with Scala 2.13 both ways.
