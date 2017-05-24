---
layout: blog
post-type: blog
by: Martin Duhem, Guillaume Massé and Denys Shabalin
title: "What's new with Scala Native?"
---

It has been a little bit more than two months since Scala Native 0.1 has been
released. What's new in Scala Native? What should you expect for future
releases?

## Scala Native 0.2

In April, [Scala Native 0.2 was released][scala-native-0.2-release]. The main
focus of this release was to increase the coverage of classes from
the JDK, such that that more programs can be ported to Scala Native without any further
effort.

### Improvements to the standard library

* Support for file I/O APIs from `java.io` was added by [@Duhemm][@Duhemm]
  from the Scala Center with help from [@cedricviaccoz][@cedricviaccoz] and
  [@Korf74][@Korf74] in [#574][#574]. Scala Native now supports enough to read
  and write files.

  ```scala
  import java.io.{DataInputStream, File, FileInputStream}
  val fis = new FileInputStream(new File("hello.txt"))
  val dis = new DataInputStream(fis)
  println(dis.readLine())
  ```

* In [#588][#588], [@MasseGuillaume] from the Scala Center added support for
  regular expressions. This implementation relies on Google's RE2 engine and
  [uses a syntax slightly different from the JDK][scala-native-doc-regular-expressions].

  ```scala
  import java.io.{DataInputStream, File, FileInputStream}
  val fis = new FileInputStream(new File("hello.txt"))
  val dis = new DataInputStream(fis)
  println(dis.readLine())
  ```

* [@densh][@densh] added initial support for Scala's Futures in [#618][#618],
  using an implementation similar to that of Scala.js, where Futures will be
  completed after the `main` method is executed.

  ```scala
  import java.util.concurrent.Future
  import scala.concurrent.ExecutionContext.Implicits.global

  object Test {
    def main(args: Array[String]): Unit = {
      println("Start")
      Future {
        println("Hello from the Future")
      }.foreach(_ => ())
      println("End")
    }
  }
  ```

* Scala Native now supports pointer subtraction. This work has been
  contributed by [@jonas][@jonas] in [#624][#624].

  ```scala
  val carr: Ptr[CChar] = toCString("abcdefg")
  val cptr: Ptr[CChar] = string.strchr(carr, 'd')
  println(cptr - carr) // prints '3'
  ```

* [@ekrich][@ekrich] extended Scala Native's implementation of `String` to
  support `toUpperCase` and `toLowerCase` in [#573][#573].
* The implementation of `java.lang.Character` was extended to support
  `Character.Subset` and `Character.UnicodeBlock` by [@densh][@densh] in
  [#651][#651].
* [@asoltysik][@asoltysik] implemented support for system properties in
  [#591][#591].

  ```scala
  println(System.getProperty("java.version"))   // prints '1.8'
  println(System.getProperty("file.separator")) // '\' on Windows,
                                                // '/' elsewhere
  ```
* Scala Native can now read environment variables using `System.getEnv`,
  thanks to [@jonas][@jonas]' efforts in [#606][#606].
* `stdin` and `stdout` can reliably be read from and written to, thanks to
  [@fduraffourg][@fduraffourg] and [@densh][@densh] in [#622][#622] and
  [#659][#659].

### Bugfixes

* A bugfix has been contributed by [@jonas][@jonas] to `String.replace`,
  fixing one broken benchmark at the same time. His work can be found in
  [#616][#616].
* `System.nanoTime` was fixed by [@brad-rathke][@brad-rathke] in [#549][#549].
* [@xuwei-k][@xuwei-k] fixed `nativeAvailableDependencies` which didn't work
   in the `test` configuration in [#565][#565].

### Improvements to the tooling and integration

* [@MasseGuillaume][@MasseGuillaume] and [@densh][@densh]
  worked on refactoring Scala Native's sbt plugin to make it more idiomatic in
  [#568][#568] and [#630][#630], which lead to fixing [#562][#562].
* Follow up fixes were contributed by [@jonas][@jonas], and include [#639][#639]
  and [#653][#653].

### Preparing for a better garbage collector

In this release, [@LukasKellenberger][@LukasKellenberger] introduced in
[#539][#539] a new setting in the sbt plugin that lets users select what
implementation of the garbage collector should be used. Currently, it lets you
select Boehm GC, or disable the garbage collector altogether.

This work was done in preparation for [the improved GC that will be shipped
with Scala Native 0.3][#726]!


## A community effort

As shown, many of the improvements that were brought by Scala Native 0.2 have
been contributed by members of the vibrant community that is developing itself
around Scala Native. Thank you!

The combination of these improvements was enough to get a prototype of
`scalafmt` running on Scala Native by [@olafurpg][@olafurpg], showing a blazing
fast startup time!

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en">
  <p lang="en" dir="ltr">
    <a href="https://twitter.com/adriaanm">@adriaanm</a>
    <a href="https://twitter.com/den_sh">@den_sh</a>
    <a href="https://twitter.com/scala_native">@scala_native</a> OMG IT WORKS :D 30x faster!
    <a href="https://t.co/M7V9udU5bT">pic.twitter.com/M7V9udU5bT</a>
  </p>
  &mdash; Ólafur Páll Geirsson (@olafurpg)
  <a href="https://twitter.com/olafurpg/status/857559907876433920">April 27, 2017</a>
</blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## What to expect for Scala Native 0.3?

The plans for the next release of Scala Native include a new garbage collector,
a better integration with sbt and more addition to the standard library.

### Improved garbage collector

The first releases of Scala Native use Boehm GC. A new and improved garbage
collector has been under development by [@LukasKellenberger][@LukasKellenberger]
and will be presented at Scala Days during Denys' talk. Stay tuned for more
more details to come soon!

The pull request introducing the new garbage collector can be found in
[#726][#726].

### Running tests from sbt

Currently, testing frameworks such as utest or scalacheck cannot be used with
Scala Native. An effort to enable support for sbt-compatible testing
frameworks has been undertaken by [@Duhemm][@Duhemm] from the Scala Center and
is expected to land in Scala Native's third release.

### Support for `java.nio`, `java.util.{jar, zip}`

The existing I/O capabilities of Scala Native have been extended in this
release by adding support for the classes defined in the packages `java.nio`,
`java.util.jar` and `java.util.zip`.

### Smaller binaries

In [#686][#686], [@densh][@densh] started work to reduce the size of the
binaries compiled by Scala Native, using a technique called selector-based
row displacement.

These improvements make the dispatch table up to 10 times smaller, on some
codebases in the wild.

## 0.4 and beyond

Some features are already in the works for Scala Native 0.4.

### Windows support

[@muxanick][@muxanick] has been working on a port of Scala Native to Windows.
The advancement of his work can be consulted in [#691][#691].

### Automatic binding generation

A prototype of [automatic binding generation][#642] is in development by
[@jonas][@jonas]. The goal is to be able to generate automatically bindings
for C libraries. For instance, given the following C header `test.h`:

```C
enum color {
  RED = 1,
  GREEN,
  BLUE = 100
};
typedef int SomeInt;
char *strchr(const char *s, int c);
```

We want to generate the following definitions:

```scala
@extern
object Test {
  object color {
    val RED = 1
    val GREEN = 2
    val BLUE = 100
  }
  type SomeInt = CInt
  def strchr(s: CString, c: CInt): CString = extern
}
```

Ultimately, this tool will make it much easier to providing bindings for C's
stdlib and external libraries.

[scala-native-0.2-release]: https://github.com/scala-native/scala-native/releases/tag/v0.2.0
[@asoltysik]: https://github.com/asoltysik
[@brad-rathke]: https://github.com/brad-rathke
[@cedricviaccoz]: https://github.com/cedricviaccoz
[@densh]: https://github.com/densh
[@Duhemm]: https://github.com/Duhemm
[@ekrich]: https://github.com/ekrich
[@fduraffourg]: https://github.com/fduraffourg
[@jonas]: https://github.com/jonas
[@Korf74]: https://github.com/Korf74
[@LukasKellenberger]: https://github.com/LukasKellenberger
[@MasseGuillaume]: https://github.com/MasseGuillaume
[@muxanick]: https://github.com/muxanick
[@olafurpg]: https://github.com/olafurpg
[@xuwei-k]: https://github.com/xuwei-k

[scala-native-doc-regular-expressions]: http://scala-native.readthedocs.io/en/latest/lib/javalib.html?highlight=regex#regular-expressions-java-util-regex

[#539]: https://github.com/scala-native/scala-native/pull/539
[#549]: https://github.com/scala-native/scala-native/pull/549
[#562]: https://github.com/scala-native/scala-native/pull/562
[#565]: https://github.com/scala-native/scala-native/pull/565
[#568]: https://github.com/scala-native/scala-native/pull/568
[#573]: https://github.com/scala-native/scala-native/pull/573
[#574]: https://github.com/scala-native/scala-native/pull/574
[#588]: https://github.com/scala-native/scala-native/pull/588
[#591]: https://github.com/scala-native/scala-native/pull/591
[#606]: https://github.com/scala-native/scala-native/pull/606
[#616]: https://github.com/scala-native/scala-native/pull/616
[#618]: https://github.com/scala-native/scala-native/pull/618
[#621]: https://github.com/scala-native/scala-native/pull/621
[#622]: https://github.com/scala-native/scala-native/pull/621
[#624]: https://github.com/scala-native/scala-native/pull/624
[#630]: https://github.com/scala-native/scala-native/pull/630
[#639]: https://github.com/scala-native/scala-native/pull/639
[#642]: https://github.com/scala-native/scala-native/pull/642
[#651]: https://github.com/scala-native/scala-native/pull/651
[#653]: https://github.com/scala-native/scala-native/pull/653
[#659]: https://github.com/scala-native/scala-native/pull/659
[#686]: https://github.com/scala-native/scala-native/pull/686
[#691]: https://github.com/scala-native/scala-native/pull/691
[#726]: https://github.com/scala-native/scal-anative/pull/726
