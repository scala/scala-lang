---
layout: blog-detail
post-type: blog
by: Zelenya
title: "Scala 3: My migration journey"
description: I want to share my journey from Scala 2 to Scala 3 and discuss migration to Scala 3
---

My name is Jay, I am a software engineer and developer advocate. We've recently migrated a major project from Scala 2 to Scala 3 at $WORK. In this article, I'd like to share the lessons we learned as well as some tips.

## Implicit context

Before doing any actual personal work, based on Internet discussions, I had the impression that switching to Scala 3 would be quite painful. In practice, it was pretty straightforward.

In retrospect, our experience was determined by the technology stack and tools that I (and my team) use: a microservice architecture, the Typelevel stack, VS Code with Metals, and, most importantly, no macros. It might not have been as smooth if any of these wasn't the case.

Let’s first explore our experience given that setup, follow the primary migration steps, and then we will talk about what to do if your setup and stack differ.

## Step 0. What does “migration” mean in your case?

Before you can jump into the action, you (and your team) have to answer a couple of questions.

If you are actively writing Scala, I’d expect that you don’t choose to stay on Scala 2. Why would anyone want to miss out on all the new features and improvements? Who wouldn’t want to rewrite everything to Scala 3? The reality is not so simple. Some people have monoliths, some use Spark ([which you can already run with Scala 3](https://xebia.com/blog/using-scala-3-with-spark/)), some have no time, and so on.

There is no one way to do the migration. Decide what’s possible and worthwhile to you (and your company).

Should you rewrite one service at a time? In what order? Or should you leave the old services untouched and write all the new services in Scala 3? What about internal libraries? How much time and resources can you allocate? The latter question might be the hardest.

It’s also an excellent time to discuss the benefits and trade-offs. Keep it fair. For example, if you just want a new syntax, is it worth disturbing an old service that hasn’t been touched in years? Well, it’s up to you to decide.

We decided to write all the new services in Scala 3 (where most of the future work will happen) while keeping the existing ones on Scala 2. Consequently, onboarding new developers without prior Scala experience is one of my biggest challenges. When they switch from a Scala 3 service to Scala 2, they bump into hurdles — some of the “intuitive” concepts don’t work as expected anymore. This requires more explanation; they seem to have to learn some things twice.

## Step 1. Analyze and plan

Even if we decide not to touch the existing services, we need to review our codebase:

- Do we have any shared internal libraries? Would we need to use them in new services?
- What external libraries do we use? Do they have a Scala3-compatible release?

Other questions you might need to consider:

- How many services do you need to migrate?
- What Scala version(s) does each service use?

Thanks to the [interoperability](https://docs.scala-lang.org/scala3/guides/migration/compatibility-source.html) between Scala 3 and Scala 2.13, it might be more accessible or crucial to upgrade to Scala 2.13 first. You have to keep this in mind.

*By this point, we knew that all our services were on 2.13; we knew how many internal libraries needed to be used from both Scala versions and what external libraries had no Scala 3 support: what the status is, what is missing, and what we can do to deal with it. For example, a couple of libraries got a Scala 3 release by the time we were done with the investigation, and one `circe` ”extras” library was replaced with two lines of boilerplate.*

## Step 2. Draw the rest of the owl

After all the meetings and/or write-ups comes the time to do the actual work. When you have concrete questions or action items, remember that [Scala 3 migration guides](https://docs.scala-lang.org/scala3/guides/migration/compatibility-intro.html) are your friends. For example, they cover how to port compiler options and build configurations. They are a great reference resource.

> Note that you can find further help from the community on the [Scala Discord](https://discord.com/invite/scala).

### Internal libraries

There are multiple ways of sharing a library between Scala 2 and Scala 3 services.

**The good news** is that you can use Scala 2.13 libraries from Scala 3 app and Scala 3 libraries from Scala 2.13 app.

**The bad news** is that you can’t do it directly if you have shared transitive dependencies.

**The good news** is that it’s pretty easy to deal with.

Imagine you have an internal library (e.g., authentication handling, a specific database connector, a peculiar API) used by your existing Scala 2 services that will also be used by Scala 3 services. If your library on Scala 2 uses the `ducks` library and your Scala 3 application uses `ducks` as well, you get two conflicting versions `ducks_2.13` and `ducks_3`.

To solve this, with sbt, you can cross-publish your library to both versions by adding one line to your build:

```scala
+ crossScalaVersions := List("2.13.12", "3.3.1")
```

To build against all versions listed in `crossScalaVersions`, prefix the action to run with `+`. For example:

```
sbt> + compile
```

*At least, that’s what we did — everything else just worked. Your mileage may vary.*

> For more information, see the guides on [ClassPath compatibility](https://docs.scala-lang.org/scala3/guides/migration/compatibility-classpath.html) and [Cross-building (sbt)](https://www.scala-sbt.org/1.x/docs/Cross-Build.html) or [Cross Builds (mill)](https://mill-build.com/mill/0.9.12/Cross_Builds.html)

### Dependencies

If all the libraries you use are actively maintained and published for Scala 3, there is nothing for you to worry about.

Otherwise, you might need [to help them](https://docs.scala-lang.org/contribute/) with migration or eliminate the dependency. Some libraries can be redundant on Scala 3 (because, for instance, Scala 3 has support for [Type Class Derivation](https://docs.scala-lang.org/scala3/reference/contextual/derivation.html)), and some have new alternatives.

*For example, at this stage, we’ve discovered [Iron](https://github.com/Iltotore/iron), [a great lightweight library](https://www.youtube.com/watch?v=4pq1elOap9k&ab_channel=ImpurePics) for type constraints, which replaced refined and newtype libraries in one go.*

### Plugins

Similarly to dependencies, some plugins support Scala 3, while some others are redundant and can be dropped.

The first plugin we were happy to retire was `better-monadic-for`, because Scala 3 already gives me better for-comprehensions. For example, we can define implicit values inside for-comprehensions:

```scala
// Scala 3
for
  given Logger[IO] <- makeLoggerOrSomething 
  result <- doX
yield doY(result)
```

```scala
// Scala 2 with better-monadic-for
for
  implicit0(logger: Logger[IO]) <- makeLoggerOrSomething 
  result <- doX
yield doY(result)
```

The second one is `kind-projector`. Scala 3 has [built-in type lambda syntax](https://docs.scala-lang.org/scala3/reference/new-types/type-lambdas-spec.html) and [kind-projector compatible syntax](https://docs.scala-lang.org/scala3/reference/changed-features/wildcards.html).

> For even more information, see the [Kind Projector migration guide](https://docs.scala-lang.org/scala3/guides/migration/plugin-kind-projector.html).

### Finally, code

Much of the Scala 2.13 code is still valid in Scala 3. If you want, you can use [the migration tools](https://docs.scala-lang.org/scala3/guides/migration/tooling-tour.html). Otherwise, if it sounds too boring, you can copy-paste the code over and fix whatever’s red.

> You can review the incompatibilities in the [Incompatibility Table](https://docs.scala-lang.org/scala3/guides/migration/incompatibility-table.html). 

You might be wondering about all the new concepts and changes. For example, what should be done about `implicit` splits or enums? You don’t have to rewrite everything right away. Here and there, you can keep using the `implicit` keyword instead of `given` and `using`. The same applies to enums: you can keep using ADTs in the form of sealed traits with case classes and refactor to the new enums later.

However, it’s an exceptional opportunity to think about the style, patterns, and consistency. The code tends to replicate and spread around via copy-paste. You must decide whether to pay upfront or take shortcuts and do a more significant refactoring later.

Scala-3-rewrite allows you to get rid of the old workarounds as well as challenge and improve on your established Scala 2 patterns. *For instance, I was happy to try [error-handling](https://gvolpe.com/blog/error-handling-scala3/) with [union types](https://docs.scala-lang.org/scala3/book/types-union.html) and use new deriving mechanisms, but I’m still trying to find a more ergonomic usage for enums.*

## Side quests

### What to do about IDEs / IntelliJ IDEA

*I might not be the best person you should ask about IDEs, but I am still quite biased when it comes to tooling. I vividly remember a few years ago when the functional code (with `cats`) was primarily red. Also, I haven’t touched any Java IDEs in years; I mainly work with unpopular functional languages and am happy with syntax (plus error) highlighting and go-to-definitions. And if I don’t need to restart the LSP server a few times a day, I’m in heaven.*

To me, using VS Code with Metals and Scala 3 doesn’t feel different from using these with Scala 2 a couple of years ago. And it’s only getting better.

[IntelliJ IDEA 2023.2](https://blog.jetbrains.com/scala/2023/07/26/intellij-scala-plugin-2023-2-is-out/) brought enhanced Scala 3 support, and the team is constantly working on improvements ([IntelliJ IDEA 2023.3](https://blog.jetbrains.com/scala/2023/12/07/intellij-scala-plugin-2023-3-is-out/) was released just when I was writing this). [Metals](https://scalameta.org/metals/) has regular [releases](https://scalameta.org/metals/blog/) driven by the [Scala Center](https://scala.epfl.ch/), [VirtusLab](https://virtuslab.com/), and contributors from the community. So, if you haven’t recently tried either, now is a good time.

### What to do about macros (and other issues)

First, as discussed earlier, you should ask whether macros live in a separate service? Can you leave these services alone for now and rewrite them later? Or can you extract the usage of the macros into an independent service or a library?

If the macros rewrite is unavoidable but unattainable, consider asking for help. For instance, [VirtusLab](https://virtuslab.com/) offers [free support with migration](https://virtuslab.com/scala-3-support-and-migration/).

## Next steps

I hope this clears up and demystifies some things. 

I’d also encourage you to share your migration stories even if they seem boring. Also, remember that the IntelliJ Scala plugin team asks for [feedback](https://blog.jetbrains.com/scala/2023/09/21/intellijscala-scala-days-2023-madrid/), and the [Scala Center](https://scala.epfl.ch/) regularly collects feedback.
