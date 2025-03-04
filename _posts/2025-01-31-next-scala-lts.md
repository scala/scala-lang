---
category: blog
permalink: /blog/next-scala-lts.html
redirect_from: /news/next-scala-lts.html
title: "Next Scala 3 LTS series will increase minimum required JDK version"
by: Tomasz Godzik, VirtusLab & Scala Core Team
---

**TL;DR**

The Scala 3 Next minors in 2025 Q4 and the next LTS will drop JDK 8 support. We
are seeking feedback on whether the new minimum JDK should be 11 or 17.

## Immediate motivation

The memory-access methods in `sun.misc.Unsafe` are scheduled for removal in a
future JDK, as stated in the recent [JEP 471](https://openjdk.org/jeps/471).
Currently, Scala 3 uses `sun.misc.Unsafe` in its implementation of `lazy val`.
In order to support JDK 25+, we will need to drop usage of `Unsafe`. We are
investigating the required changes under
[this issue](https://github.com/scala/scala3/issues/9013).

It then started to dawn on the compiler team that we might consider dropping
support for JDK 8 altogether in a future release of Scala 3.

## Long term motivation

Switching to a newer version of the JDK would allow both the compiler and the
Scala ecosystem to start using new features and standard library improvements
brought in by JDK 9+. This might include a number of JEPs (JDK Enhancement
Proposals), which the compiler team will investigate during the coming year. To
check the current status, take a look at the issues marked with the
[JEP label](https://github.com/scala/scala3/issues?q=is%3Aissue+is%3Aopen+label%3Acompat%3Ajava%3Ajep).

Some of the features that might be interesting to the Scala community are:

- [JEP 181](https://github.com/scala/scala3/issues/22292) will allow classes
  that are logically connected, to access each other's private members. This
  could be useful for representing nested classes and companion objects.
  (Currently, the Scala compiler has to insert public bridge methods to broaden
  the accessibility of those members.)
- [JEP 409](https://github.com/scala/scala3/issues/22298) introduces sealed
  classes. It would allow the compiler to better represent Scala's sealed trait
  hierarchies.
- [JEP 441](https://github.com/scala/scala3/issues/22450) introduces new
  bytecode shapes for pattern matching in Java. With them, we may be able to
  optimize the code resulting from Scala pattern matches.
- [JEP 471](https://github.com/scala/scala3/issues/9013) adds a new API for
  memory access. We will use it to replace the usage of `sun.misc.Unsafe` in
  Scala 3.

Dropping JDK 8 will reduce the maintenance burden on tooling and library
authors. They currently have to take into account a large number of different
versions, both for correctness and performance. Thus, the benefits of this
change will be felt ecosystem-wide.

JDK 8 was first published in 2014, over 10 years ago. JDKs have advanced greatly
since then. In order to stay competitive, using those advancements is a must. A
lot of the existing distributions, including
[Oracle's own](https://www.oracle.com/java/technologies/java-se-support-roadmap.html),
have already stopped or will soon stop updating JDK 8 with security and other
fixes. It is of course possible not to update your libraries and compiler
version, to avoid having to switch to a newer JDK. However, that is highly
discouraged, as it will make you vulnerable to potential security risks.

Some larger projects in the Java and Scala ecosystems have already dropped JDK 8
support in favor of JDK 11 or even 17.

Java examples include:

- [Spring 6](https://spring.io/blog/2022/11/16/spring-framework-6-0-goes-ga)
  requires JDK 17
- [Hibernate](https://hibernate.org/orm/releases/6.6/) requires JDK 11 and the
  next version will require JDK 17
- [Jetty](https://jetty.org/docs/jetty/12/index.html) requires JDK 17
- [Logback](https://logback.qos.ch/dependencies.html) requires JDK 11
- [JavaFX](https://gluonhq.com/products/javafx/) requires JDK 21
- [Vaadin](https://github.com/vaadin/platform/releases/tag/24.6.0) requires JDK
  17
- [Quarkus](https://quarkus.io/blog/quarkus-3-7-released/) requires JDK 17
- [TensorFlow](https://github.com/tensorflow/java) requires JDK 11

Scala examples include:

- [Spark 4](https://github.com/apache/spark/pull/43005#issuecomment-1731344040)
  will require JDK 17
- [Play Framework](https://github.com/playframework/playframework/issues/11078)
  requires JDK 11 and
  [will require JDK 17](https://github.com/playframework/playframework/issues/12179)
  in the next major release
- [Akka](https://github.com/akka/akka/pull/32127) requires JDK 11
- [Apache Kafka](https://kafka.apache.org/documentation/#java) requires JDK 11
- [ZIO](https://github.com/zio/zio/pull/8434) requires JDK 11
- [Li Haoyi's ecosystem](https://github.com/com-lihaoyi) requires JDK 11 across
  the board

This shows that the rest of the industry is already moving away from JDK 8.

## Plan for making the switch

The current plan is to drop support of JDK 8 in one of the future minor releases
of Scala 3 and in the next LTS. The new minimum JDK will be either 11 or 17,
depending on the community feedback and our investigations. The current estimate
for the next LTS is Q4 2025.

One major challenge will be to preserve backward compatibility. As we change the
encoding of `lazy val`s, we must still be able to use libraries compiled with
earlier Scala 3 versions.

## How does it affect me?

The current line of LTS under 3.3.x will be supported for at least another year
after the release of the next LTS version. That should give you plenty of time
to migrate. After that, no more security fixes will be available for Scala 3
versions supporting JDK 8.

If you are using Scala 3 on JDK 8, do let us know! If it is not possible for you
to switch, be sure to send us your feedback so that we can figure out a way to
help you migrate.

## Discussions and further reading

You can track the current work related to lazy values under
[this issue](https://github.com/scala/scala3/issues/9013).

Discussion on the topic of dropping JDK 8 support is available on the
[Scala contributors forum](https://contributors.scala-lang.org/t/next-scala-3-lts-version-will-increase-minimum-required-jdk-version)
