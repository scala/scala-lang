---
category: announcement
permalink: /news/2.12.5
title: "Scala 2.12.5 is now available!"
---
[Scala 2.12.5](https://github.com/scala/scala/releases/tag/v2.12.5) is now available.

Main highlights:

  - On Java 9 or higher, the new `-release N` flag changes the compilation classpath to match the JDK version N.
  - With the new `-Ybackend-parallelism N` compiler flag, the backend can now run in parallel on N threads.
  - String interpolation compiles to better bytecode
  - New flags allow caching classloaders for compiler plugins and macro definitions, speeding up builds.

The [full release notes](https://github.com/scala/scala/releases/tag/v2.12.5) are on GitHub.

## Known issues

There is a regression since 2.12.4 when compiling code on Java 9 that uses macros. Running on Java 9 isn’t affected, only compiling. Details: https://github.com/scala/scala-dev#480

There is no workaround. You must either compile on Java 8 or wait for 2.12.6.
