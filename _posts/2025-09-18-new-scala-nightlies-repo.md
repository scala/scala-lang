---
category: blog
permalink: /news/new-scala-nightlies-repo.html
title: A new repository for Scala nightlies
by: Piotr Chabelski, Hamza Remmal & Scala Core Team
---

Recently, we introduced a new repository to which nightlies of Scala will be published. From now on, the place to look for nightly versions will be [https://repo.scala-lang.org/](https://repo.scala-lang.org/). This also applies to nightly versions published before the change.

Both Scala 2 and Scala 3 nightly versions are available on the new repository.

## Why was the change made?

As a result of a number of features to be delivered in Scala 3.8, chief among them the standard library built with Scala 3, the size of the average Scala 3 release has increased considerably. Based on that fact, we have decided it is no longer suitable to publish them to Maven Central alongside stable releases, and a dedicated hosting space should be used instead.

## What exactly was changed?

Under the hood, it is only Scala 3 nightlies which are now published to a new repository. They used to be published to Maven Central until `3.8.0-RC1-bin-20250822-658c8bd-NIGHTLY` (or until the 23rd of August, 2025). All versions that followed have been published to [https://repo.scala-lang.org/](https://repo.scala-lang.org/). Versions from before the change are still available on [https://repo.scala-lang.org/](https://repo.scala-lang.org/), which also serves as a proxy to Maven Central.

At the time of writing of this blog post, only Scala 3.8 nightlies are published directly to the new repository. The change is planned to be backported to Scala 3.3 LTS.

Scala 2 nightlies have been published to [a dedicated repository](https://scala-ci.typesafe.com/artifactory/scala-integration/) for a long time and this, in fact, did not and likely will not change. The new repository does, however, serve as a proxy to [the Scala 2 nightly repository](https://scala-ci.typesafe.com/artifactory/scala-integration/), so from a user’s perspective, everything is in one place now.

## How does it affect users?

If you want to try out Scala nightly versions, it is now advised to use [https://repo.scala-lang.org/](https://repo.scala-lang.org/), regardless whether you are interested in Scala 3 Next, Scala 3.3 LTS, Scala 2.13 or Scala 2.12.

To use the newest Scala 3 Next nightlies, it is now necessary to use the new repository.
This can be achieved by adding [https://repo.scala-lang.org/artifactory/maven-nightlies](https://repo.scala-lang.org/artifactory/maven-nightlies) as a resolver (details in examples provided in a later section of this blog post).

If you have existing builds testing Scala 2.13 and 2.12 nightlies, you don’t really need to do anything, as there is no change to how these nightlies are published. The new repository serves only as a proxy for them.

When using Scala 3 nightlies predating 23.08.2025, no change is necessary, either.

Even if the change isn’t necessary for the nightly you need, we now advise to always rely on the new repository for simplicity and easy issue reproduction’s sake

## Usage with tooling

As mentioned above, additional configuration of a resolver for the new repository is necessary for some tools in the ecosystem. Check the examples below.

### Scala CLI

Scala CLI v1.9.0 or newer (provided in Scala 3 installations since 3.7.3) is necessary to use the new nightly repository.

No additional resolver has to be configured, the CLI adds it implicitly when a nightly version is used.

Nightly versions can be provided from the command line:

```bash
scala -e 'println("Hello") -S 3.nightly
scala -e 'println("Hello") -S 3.3.nightly
scala -e 'println("Hello") -S 2.13.nightly
scala -e 'println("Hello") -S 2.nightly # same as 2.13.nightly
scala -e 'println("Hello") -S 2.12.nightly
```

…or via `//> using` directives, as before:

```scala
//> using scala 3.nightly
//> using scala 3.3.nightly
//> using scala 2.nightly
//> using scala 2.13.nightly
//> using scala 2.12.nightly
```

See [this Scala CLI doc page](https://scala-cli.virtuslab.org/docs/commands/compile/#scala-nightlies) for details.

### SBT

A util has been added in SBT 1.11.5 for easy configuration of the resolver for the new nightly repository. It can be found under `Resolver.scalaNightlyRepository`.

Here’s an example `build.sbt` file:

```scala
ThisBuild / scalaVersion := "3.8.0-RC1-bin-20250916-eb1bb73-NIGHTLY"
ThisBuild / resolvers += Resolver.scalaNightlyRepository
lazy val root = (project in file("."))
  .settings(name := "sbt-with-scala-nightlies")
```

### Mill

Mill 1.0.5 or newer is necessary to use Scala 3.8 (and as a result, all the new nightlies).

Here’s an example `build.mill` file:

```scala
package build
import mill.*
import mill.api.*
import scalalib.*

def scalaNightlyRepo = "https://repo.scala-lang.org/artifactory/maven-nightlies"

object project extends ScalaModule {
  def jvmWorker = ModuleRef(CustomJvmWorkerModule)
  override def scalaVersion = "3.8.0-RC1-bin-20250916-eb1bb73-NIGHTLY"
  override def repositories = Task { super.repositories() ++ Seq(scalaNightlyRepo)}
}

object CustomJvmWorkerModule extends JvmWorkerModule, CoursierModule {
  override def repositories = Task { super.repositories() ++ Seq(scalaNightlyRepo)}
}
```

Note how the custom `JvmWorkerModule` is necessary with the added repository. It is not enough to just define it as a repository for the module dependencies. Refer to [this Mill documentation page](https://mill-build.org/mill/javalib/dependencies.html#_repository_config ) for more details regarding this syntax.

### Other tools

In most cases it should be sufficient to add a resolver for [https://repo.scala-lang.org/artifactory/maven-nightlies](https://repo.scala-lang.org/artifactory/maven-nightlies) to the build configuration before using a Scala nightly version. If you encounter any issues, be sure to raise them with tool maintainers.

## Further reading

We have updated [the nightly version documentation](https://docs.scala-lang.org/overviews/core/nightlies.html).

Other relevant documentation:
- [Scala CLI on nightly versions](https://scala-cli.virtuslab.org/docs/commands/compile/#scala-nightlies)
- [SBT docs on resolvers](https://www.scala-sbt.org/1.x/docs/Resolvers.html)
- [Mill docs on repository config](https://mill-build.org/mill/javalib/dependencies.html#_repository_config)