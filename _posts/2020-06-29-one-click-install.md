---
layout: blog-detail
post-type: blog
by: Sébastien Doeraene
title: "One-click install for Scala"
---

Installing Scala has always been a task more challenging than necessary, with the potential to drive away beginners.
Should I install Scala itself? sbt? Some other build tools? What about a better REPL like Ammonite? Oh and before all that I need to install Java?

To solve this problem, the Scala Center contracted Alexandre Archambault in January 2020 to add a one-click install of Scala through [coursier](https://get-coursier.io/docs/cli-overview).
For example, on Linux, all we now need is:

```bash
$ curl -fL "$(curl -w "%{url_effective}\n" -I -L -s -S https://git.io/coursier-cli-"$(uname | tr LD ld)" -o /dev/null).gz" | gzip -d > cs && chmod +x cs && ./cs setup 
```

You can find the instructions for macOS and Windows in the [Coursier documentation](https://get-coursier.io/docs/cli-installation).

The command shown above will install all the following software, if not yet installed:

* a JDK
* the build tools [sbt](https://www.scala-sbt.org/) and [mill](https://github.com/com-lihaoyi/mill)
* the [Ammonite](https://ammonite.io/) enhanced REPL
* [scalafmt](https://scalameta.org/scalafmt/), the Scala formatter
* the [coursier](https://get-coursier.io/docs/cli-overview) CLI, to install further Scala-based applications
* the `scala` and `scalac` command-line tools

With all those installed, we are ready to go!
Later, `cs update` can be used to update the installation.

For power users, [the `cs setup` command](https://get-coursier.io/docs/cli-setup) offers more configuration options, such as a non-interactive mode.

With this new simple, all-encompassing installer, we at the Scala Center hope to significantly reduce the burden of getting started with Scala.
