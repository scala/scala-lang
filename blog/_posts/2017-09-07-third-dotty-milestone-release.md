---
layout: blog-detail
post-type: blog
title: Announcing Dotty 0.3.0-RC2, with improved stability and IDE support
by: Allan Renucci
---

Today, we are excited to release Dotty version 0.3.0-RC2. This release
serves as a technology preview that demonstrates new language features
and the compiler supporting them.

If you’re not familiar with Dotty, it's a platform to try out new language concepts and compiler
technologies for Scala. The focus is mainly on simplification. We remove extraneous syntax
(e.g. no XML literals), and try to boil down Scala’s types into a smaller set of more fundamental
constructors. The theory behind these constructors is researched in
[DOT](https://infoscience.epfl.ch/record/215280), a calculus for dependent object types.
You can learn more about Dotty on our [website](https://dotty.epfl.ch).

<!--more-->

This is our third scheduled release according to our 6-week release schedule.
The [previous technology preview](/blog/2017/07/12/second-dotty-milestone-release.html) improved
stability and reliability:
 - substantial improvement of quality of generated code for pattern matching
 - improvements in VS Code IDE stability
 - support Windows in VS Code IDE
 - improved compatibility with scalac
 - initial support for reproducible builds

## What’s in the 0.3.0-RC2 technology preview?
This technology preview further improves stability and reliability. Some highlighted PRs are:
 - IDE bug fixes:
 [#2986](https://github.com/scala/scala3/pull/2986),
 [#2932](https://github.com/scala/scala3/pull/2932),
 [#2885](https://github.com/scala/scala3/pull/2885),
 [#2876](https://github.com/scala/scala3/pull/2876),
 [#2870](https://github.com/scala/scala3/pull/2870),
 [#2872](https://github.com/scala/scala3/pull/2872) by [@odersky] and [@smarter].


## How can you try it out?
We ship with tools that help you try out the Dotty platform:

  - IDE features for Visual Studio Code
  - [sbt support, including retro-compatibility with Scala 2](https://github.com/lampepfl/dotty-example-project)


You have several alternatives; use the `sbt-dotty` plugin, get a standalone
installation, or try it online on [Scastie].

### sbt
Using sbt 0.13.13 or newer, do:

```
sbt new lampepfl/dotty.g8
```

This will set up a new sbt project with Dotty as compiler. For more details on
using Dotty with sbt, see the
[example project](https://github.com/lampepfl/dotty-example-project).

### Standalone installation
Releases are available for download on the _Releases_
section of the Dotty repository:
[https://github.com/scala/scala3/releases](https://github.com/scala/scala3/releases)

We also provide a [homebrew](https://brew.sh/) package that can be installed by running:

```
brew install lampepfl/brew/dotty
```

In case you have already installed Dotty via brew, you should instead update it:

```
brew upgrade dotty
```

### Scastie
[Scastie], the online Scala playground, supports Dotty.
You can try it out there without installing anything.


## What are the next steps?
Over the coming weeks and months, we plan to work on the following topics:

 - [Add support for using Dotty generated classes with Scala 2.12](https://github.com/scala/scala3/pull/2827)
 - [Add Language-level support for HMaps and HLists](https://github.com/scala/scala3/pull/2199);
 - Upstream more optimizations from Dotty Linker
 - [Add support for existing in the same classpath with Scala 2.12](https://github.com/scala/scala3/pull/2827)
 - [Add native Dotty REPL](https://github.com/scala/scala3/pull/2991)

## Questions / Reporting Bugs
If you have questions or any sort of feedback, feel free to send us a message on our
[Gitter channel](https://gitter.im/lampepfl/dotty). If you encounter a bug, please
[open an issue on GitHub](https://github.com/scala/scala3/issues/new).

## Contributing
Thank you to all the contributors who made this release possible!

According to `git shortlog -sn --no-merges 0.2.0-RC1..0.3.0-RC2` these are:

```
   138  Martin Odersky
    36  Nicolas Stucki
    12  Guillaume Martres
     7  Dmitry Petrashko
     5  liu fengyun
     4  Allan Renucci
     4  Felix Mulder
     2  Lorand Szakacs
     1  Lukas Ciszewski
     1  Max Ovsiankin
     1  Lanny Ripple
     1  Serhii Pererva
     1  Georg Schmid
```

If you want to get your hands dirty with any of this, now is a good moment to get involved!
You can have a look at our [Getting Started page](https://dotty.epfl.ch/docs/contributing/getting-started.html),
our [Awesome Error Messages](https://scala-lang.org/blog/2016/10/14/dotty-errors.html) or some of
the simple [Dotty issues](https://github.com/scala/scala3/issues?q=is%3Aissue+is%3Aopen+label%3Aexp%3Anovice).
They make perfect entry-points into hacking on the compiler.

We are looking forward to having you join the team of contributors.

## Library authors: Join our community build

Dotty now has a set of libraries that are built against every nightly snapshot.
Currently this includes scalatest, squants and algebra.
Join our [community build](https://github.com/lampepfl/dotty-community-build)
to make sure that our regression suite includes your library.


To get started, see [https://github.com/scala/scala3](https://github.com/scala/scala3).


[Scastie]: https://scastie.scala-lang.org/?target=dotty

[@odersky]: https://github.com/odersky
[@DarkDimius]: https://github.com/DarkDimius
[@smarter]: https://github.com/smarter
[@felixmulder]: https://github.com/felixmulder
[@nicolasstucki]: https://github.com/nicolasstucki
[@liufengyun]: https://github.com/liufengyun
[@OlivierBlanvillain]: https://github.com/OlivierBlanvillain
[@OlivierBlanvillain]: https://github.com/OlivierBlanvillain
[@biboudis]: https://github.com/biboudis
[@biboudis]: https://github.com/biboudis
[@allanrenucci]: https://github.com/allanrenucci
