---
layout: blog-detail
post-type: blog
by: Jorge Vicente Cantero and Martin Duhem
title: "Meet bloop, a fast tool to compile and test your project"
---

Martin Duhem and I are happy to announce [Bloop](https://github.com/scalacenter/bloop), a tool that Scala developers
can use to compile and test their projects faster without being tied to their
stock build tool.

We started this project after the feedback we got from this tweet, in which some of you encouraged
us to work on compiler/build performance:

<blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr">
If the Scala Center had 1 engineer free for 1 month what is the most meaningful thing we could do to help your day-to-day Scala development?
</p>&mdash; Scala (@scala_lang) <a href="https://twitter.com/scala_lang/status/928242963091808256">8th November 2017</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## What is bloop?

[Bloop](https://github.com/scalacenter/bloop) is a command-line tool for fast edit/compile/test workflows. Its primary
goal is to give you the fastest possible experience specifically in the
edit/compile/test loop. Bloop is not meant to replace your current build
system. The name stands for "build loop".

## Why `bloop`?

Build tools are complex applications that need to cover a wide range of use cases, from building and
testing your project to deploying it, integrating with external tools, resolving dependencies and
any build-related tasks.

Such a vast array of requirements make build tools like `sbt`, `Maven` and `Gradle` create their own
configuration models and DSLs to be customizable, whether that is programmatically or declaratively.
It is easy that in the process of creating a build tool, performance is sacrificed by ease of
customization, readability or maintenance.

On the other hand, there is also the problem that build tools move slowly and
have a hard time upgrading to new changes upstream (for example, in compiler
APIs). As a result, `Gradle`, `Maven`, `Leiningen`, and `CBT` have not yet been
migrated to Zinc 1.0, [which offers faster incremental compilations than its
predecessor](https://www.scala-lang.org/blog/2017/11/03/zinc-blog-1.0.html). As
a result, users of these tools are not benefiting from the latest state of the
art.

`bloop` aims to fix both problems:

1. It's specialized on only providing as fast as possible edit/compile/test
   workflows, rather than covering all of the needs of general build tool like
   sbt.
2. It allows other build tools to integrate with it.

You can think of `bloop` as a powered CLI for Zinc, rather than as a brand new
build tool -- `bloop` does not aim to replace your stock build tool, rather
complement it.

In practice, this means that when users are only going to compile and test their project, they can
use `bloop` instead of a full-blown resource-hungry build tool; and that generic build tools can
delegate to `bloop` to compile and test users' projects instead of creating their own Scala and Java
integrations, which are hard to maintain.

## Numbers on compilation performance

We created `bloop` because we observed that Scala compile times slow down when
within sbt compared to isolated benchmarks. This observation was at the
beginning just an intuition, but when we sat down to measure a prototype we did
see a significant difference.

<blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr"> Scala Tooling has got to
a point where people say "compiler performance" and what they really mean is "sbt performance".
</p>&mdash; Jorge (@jvican) <a href="https://twitter.com/jvican/status/928601470232129536">9th November 2017</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Next, we introduce you some numbers that compare compilation times between
`sbt` and `bloop` in different medium-to-large open-source projects. In all of
them, `bloop` is significantly faster than sbt at compiling and testing your
project.

| Project name      | sbt (version) | bloop | speedup |
| ----------------- | ------------- | ----- | ------- |
| sbt/sbt           | 21s (1.0.4)   | 15s   | 1.17    |
| guardian/frontend | 37s (0.13.16) | 28s   | 1.32    |
| apache/spark      | 159s (0.13.16)| 107s  | 1.4     |
| scala/scala       | 65s (0.13.16) | 50s   | 1.14    |

These numbers have been obtained on an isolated machine, measuring at the fifth hot clean-compile
iteration (of all the projects and subprojects of the build without counting the tests) and with 2
gigabytes of heap for both sbt and bloop (the shell, not the nailgun
integration). When benchmarking sbt, we have made sure that dependency
resolution and formatting are not measured.

To put those numbers into context, the speedup observed in `apache/spark` is
equal to the compilation speedup that Jason Zaugg introduced in the 2.12.x
series. That means that when Spark developers migrate to 2.12 and use `bloop`,
they will experience a compilation speedup close to 60% (40% from upgrading to Scala 2.12.x, 40%
from using `bloop`).

There are two important observations to make from these numbers:

- In practice, sbt is slower than the previous numbers because dependency resolution is often
  triggered by compilation, slowing down the start of the compile.
- Some of the benchmarked builds use sbt `0.13.16` instead of `1.0.4`. `bloop` would be even faster
  if these builds were migrated to `1.0.4`. The refined precision that Zinc 1.0 offers in its
  incremental mode has a price of ~3% compared to Zinc 0.13.16.

## The current status

As of this announcement, `bloop` is capable of compiling and testing your project, and it integrates
with `sbt`. It supports all the test frameworks sbt supports (`JUnit`, `Scalatest`, `Scalacheck`,
`utest` and more).

`bloop` is a young project with only three weeks of life. That means that
there's a lot of work left before we support all different platforms and needs.
In our next release, we want to focus on:

- Stabilizing the internals of the project.
- Supporting `console`, [a faster `testQuick`](https://github.com/scalacenter/bloop/issues/61), and
  [built-in file watching](https://github.com/scalacenter/bloop/issues/7).
- Making more performance improvements to our integration, to be even faster.
* Exploring integrations with other build tools like `Maven` and `Gradle`.
- Supporting Dotty and out-of-the-box cross-compilation to
  [Scala.js](https://github.com/scala-js/scala-js/) and [Scala
  Native](https://github.com/scala-native/scala-native).

### First beta release `0.1`

The first beta version of bloop can be used following the instructions in [scalacenter/bloop][].

### Preserving hot compilers

An important feature of `bloop` is its [nailgun][] integration. Nailgun is a client, protocol, and
server for running Java programs from the command line without incurring the JVM startup overhead.
With it, `bloop` ensures that you always have a hot compiler in the background to compile your
project. This brings significant improvements indeed: [a hot compiler can compile up to 18 times
faster than a cold
compiler](https://scala-ci.typesafe.com/grafana/dashboard/db/scala-benchmark?var-branch=2.12.x&var-source=vector&var-bench=HotScalacBenchmark.compile&var-host=scalabench@scalabench@).

Keeping a hot compiler in the background is crucial if one takes compilation speed and productivity
seriously. This is often difficult and takes space of mind. For example, `sbt` throws away a hot
compiler every time users quit (`Ctrl-C`) and restart, but also when they do `reload` after several
executions of `compile`. By this rule, the more users modify their sbt build or
have bad habits, the less productive they are.

In an effort to address the problem at its root, we have preferred to add
a built-in nailgun integration to bloop that always keeps hot compilers in the
background.

### How does it work?

When `bloop` starts up, it loads a build from a configuration directory passed in by the user, which
defaults to `.bloop-config`. This directory contains a configuration file per every project, and
every configuration file contains basic information about the project: name, base directory,
classpath, source directories, classes directory, Scala and Java options and a few more.

`bloop` comes with an sbt plugin that allows you to generate these
configuration files from your existing, functional sbt build. When the
generation is done, you will have a `.bloop-config` in the base directory of
your sbt project. With this configuration, you can close your sbt instance and
run your build with `bloop`.

You will need to reach out to `sbt` again in the following scenarios:

- You have changed your build (a library dependency, a project name, a scalac option). In which
  case, you need to rerun the generation of configuration files.
- You need to execute build tasks unrelated to compilation and test execution.

This configuration file is currently a Java properties file. In the next weeks, we'd like to migrate
from it to a more established configuration format. As this information is often required by other
developer tools (for example, language servers, presentation compilers, linters), we would like
the authors of these tools to agree on a configuration file that all these can understand.

In the future, we want to explore making `bloop` a server you can ask compilation and test-related
information from different language servers, presentation compilers and linters. We're also
interested in rethinking our configuration files and agree with the tooling community on a
configuration schema that all the tools in the ecosystem (language servers, build tools,
presentation compilers and linters) can use. We believe these initiatives can make tooling much
easier to install and upgrade in the future.

## Conclusion

We're happy to announce `bloop`, a tool with which sbt users can compile their
projects faster and execute tests without being tied to an sbt instance. Users
of other build tools will get support for `bloop` in the upcoming weeks.

`Bloop`'s end goal is to deliver a snappy developer experience to those
developers writing Scala code. With this effort, the Scala Center continues its
commitment to improve the tooling in the Scala ecosystem and help open source
developers and companies alike be more productive.

If you have a question or want to get involved, come to our forums and chat rooms
to talk!

[scalacenter/bloop]: https://github.com/scalacenter/bloop
[nailgun]: https://github.com/facebook/nailgun/
