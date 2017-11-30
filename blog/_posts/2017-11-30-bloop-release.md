---
layout: blog-detail
post-type: blog
by: Jorge Vicente Cantero and Martin Duhem
title: "Meet bloop, a fast tool to compile and test your project"
---

Martin and I are excited to introduce `bloop`, a new tool that we have been working on at the Scala
Center during the past three weeks.

## What is bloop?

Bloop is a command-line tool for fast edit/compile/test workflows. Its primary goal is to compile
and test your project as fast as possible, offering a snappy developer experience.

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
APIs). For example, `Gradle`, `Maven`, `Leiningen`, and `CBT` have not yet been
migrated to Zinc 1.0, [which offers faster incremental compilations than its
predecessor](https://www.scala-lang.org/blog/2017/11/03/zinc-blog-1.0.html).
As a result, users of these tools are not benefiting from the latest state of
the art, and that's hurting their developer productivity.

`bloop` aims to fix both problems. It only supports the most common build tasks (`compile`, `test`
and `console`), and allows other build tools to integrate with it.

In practice, this means that when users are only going to compile and test their project, they can
use `bloop` instead of a full-blown resource-hungry build tool; and that generic build tools can
delegate to `bloop` to compile and test users' projects instead of creating their own Scala and Java
integrations, which are hard to maintain.

## The current status

As of this announcement, `bloop` is capable of compiling and testing your project, and it integrates
with `sbt`. It supports all the test frameworks sbt supports (`JUnit`, `Scalatest`, `Scalacheck`,
`utest` and more).

`bloop` is a young project with only three weeks of life. That means that there's some work left
before we support all different platforms and needs. In our next release, we want to focus on:

- Rethinking from scratch the internal APIs and stabilize the project.
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
faster than a hot
compiler](https://scala-ci.typesafe.com/grafana/dashboard/db/scala-benchmark?var-branch=2.12.x&var-source=vector&var-bench=HotScalacBenchmark.compile&var-host=scalabench@scalabench@).

Keeping a hot compiler in the background is crucial if one takes compilation speed and productivity
seriously. This is often difficult and takes space of mind. For example, `sbt` throws away a hot
compiler every time users quit (`Ctrl-C`) and restart, but also when they do `reload` after several
executions of `compile`. By this rule, the more users modify their sbt build, the less productive
they are.

Current sbt users can indeed avoid quitting and prefer suspending (`Ctrl-Z`), but they will always
be punished for modifying their builds. In our experience, changing habits is hard, so we have
preferred to add a built-in nailgun integration in `bloop` that addresses this problem at its root
rather than changing people's habits, which is hard and time consuming.

### How does it work?

When `bloop` starts up, it loads a build from a configuration directory passed in by the user, which
defaults to `.bloop-config`. This directory contains a configuration file per every project, and
every configuration file contains basic information about the project: name, base directory,
classpath, source directories, classes directory, Scala and Java options and a few more.

`bloop` comes with an sbt plugin that allows you to generate these configuration files with the
execution of a command. When the command is done, you can run your build with `bloop`.

This configuration file is a properties file that we plan on migrating from. In the next weeks, we'd
like to come up with the design of a configuration file that we can reuse across different tools in
the Scala ecosystem. Given how common this kind of information is required, we believe that settling
on an agreed upon configuration format is the way to go.

In the future, we want to explore making `bloop` a server you can ask compilation and test-related
information from different language servers, presentation compilers and linters.

## Numbers on compilation performance

`bloop` has been created out of the observation that Scala compile times slow down within `sbt` in
comparison with isolated benchmarks. This observation was at the beginning just an intuition, but
when we sat down to measure a prototype we did see a significant difference.

<blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr"> Scala Tooling has got to
a point where people say "compiler performance" and what they really mean is "sbt performance".
</p>&mdash; Jorge (@jvican) <a href="https://twitter.com/jvican/status/928601470232129536">9th November 2017</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

We'd like to share some of our numbers with you.

| Project name      | sbt (version) | bloop | speedup |
| ----------------- | ------------- | ----- | ------- |
| sbt/sbt           | 21s (1.0.4)   | 15s   | 1.17    |
| guardian/frontend | 37s (0.13.16) | 28s   | 1.32    |
| apache/spark      | 159s (0.13.16)| 107s  | 1.4     |
| scala/scala       | 65s (0.13.16) | 50s   | 1.14    |

These numbers have been obtained in an isolated machine, measuring at the fifth hot clean-compile
iteration (of all the projects and subprojects of the build without counting the tests) and with 2
gigabytes of heap for both sbt and bloop. When benchmarking sbt, we have made sure that dependency
resolution and formatting are not measured.

There are two important observations to make from these numbers:

- In practice, sbt is slower than the previous numbers because dependency resolution is often
  triggered by compilation, slowing down the start of the compile.
- Some of the benchmarked builds use sbt `0.13.16` instead of `1.0.4`. `bloop` would be even faster
  if these builds were migrated to `1.0.4`. The refined precision that Zinc 1.0 offers in its
  incremental mode has a price of ~3% compared to Zinc 0.13.16.

## Conclusion

We're happy to announce `bloop`, a tool with which sbt users can compile their projects faster and
execute tests without being tied to an sbt instance. Users of other build tools will get support for
`bloop` in the upcoming weeks.

`Bloop` is quickly improving to deliver a snappy developer experience to those developers writing
Scala code. With this effort, the Scala Center continues its commitment to improve the tooling used
in the Scala ecosystem and helping open source developers and companies alike be more productive.

If you have a question or want to get involved, come to [the Scala Center Gitter
channel](https://gitter.im/scala/center2) to chat!

[scalacenter/bloop]: https://github.com/scalacenter/bloop
[nailgun]: https://github.com/facebook/nailgun/
