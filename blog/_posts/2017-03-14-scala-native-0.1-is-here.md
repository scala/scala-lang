---
layout: blog
post-type: blog
by: Denys Shabalin
title: "Scala Native v0.1 is here!"
---

We're excited to announce the first release of
[Scala Native](http://www.scala-native.org), an optimising ahead-of-time
compiler for Scala built on top of the [LLVM](http://llvm.org) compiler
infrastructure.

Unlike the reference implementation of Scala which generates bytecode that
runs on top of the Java Virtual Machine, Scala Native toolchain produces
stand-alone native executables. This opens the door for Scala to be used in
environments where full-blown virtual machine is usually an overkill:
command-line tools, resource-constrained hardware applications, video games etc.

To achieve this goal we've developed a whole-program optimising compiler
that generates [LLVM intermediate representation](
http://llvm.org/docs/LangRef.html). This representation is then
used to generate efficient platform-dependent machine code.

The project has reached a point of feature completeness in terms of the
coverage of the Scala language. We support the whole language including
the more advanced features such as method dispatch via structural types and
even macros.

## What's included

Here are some of the exciting features that got into 0.1:

* Support for the whole Scala language with negligible semantic differences
* Effortless zero-cost interoperability with native code
* Out-of-the-box support for existing Scala IDEs
* Seamless integration with sbt build tool
* Cross-publishing infrastructure against JVM, JS and Native platforms
* Support for the core subset of the JDK base libraries

More information is available on our
[website](http://www.scala-native.org).

## Road ahead

A list of known issues and upcoming features is available via
[GitHub issues](https://github.com/scala-native/scala-native/issues).

## Brought to you by

This project is brought to you by collaboration of [LAMP](http://lamp.epfl.ch)
and [Scala Center](https://scala.epfl.ch).
