---
category: release
permalink: /news/3.10.1/
title: "Scala 3.10.1 is now available!"
by: Wojciech Mazur, VirtusLab
---

Scala 3.10.1, the first patch release in the [Scala 3.10 series]({{ site.baseurl }}/news/3.10/), is now available.

## Release highlights

### JDK 28 support ([#27347](https://github.com/scala/scala3/pull/27347))

The compiler now supports JDK 28, including target version `28` for `-release` and `-java-output-version`. The target version cannot exceed the JDK version running the compiler. ASM has also been updated to 9.11.1 ([#27363](https://github.com/scala/scala3/pull/27363)), enabling support for JDK 28 class files.

The compiler now warns when `synchronized` is called on an instance of a Java value-based class ([#27128](https://github.com/scala/scala3/pull/27128)). JDK 28 rejects such calls. Use a dedicated lock object instead.

### Upgrade to Scala CLI 1.18.0 ([#27255](https://github.com/scala/scala3/pull/27255))

The bundled Scala CLI has been upgraded from 1.17.1 to **1.18.0**. Highlights include:

- Scala CLI itself now requires Java 17 or newer. You can still compile and run your code using older JVMs, for example with `--jvm 8` or `--jvm 11`.
- `scala fix` removes deprecated comma separators from `//> using` directives.
- Java snippets, Java source read from standard input, and Java blocks in Markdown now support `enum`s, `record`s, package-private classes, and JEP 512 compact source files.

See the [Scala CLI 1.18.0 release notes](https://github.com/VirtusLab/scala-cli/releases/tag/v1.18.0) for the full list of changes.

### Experimental SIP-77: method block end markers ([#24251](https://github.com/scala/scala3/pull/24251))

Method block end markers make it easier to see where nested argument blocks end. [Experimental SIP-77](https://github.com/scala/improvement-proposals/pull/77) lets you close an argument block introduced by `:` with a named `end` marker. The marker must name the method as it is written at the call site, so a mismatched name is an error.

This feature is experimental and may change or be removed depending on the SIP Committee’s decision. We welcome feedback from users who try it. Enable it with `import scala.language.experimental.methodBlockEndMarkers` or `-language:experimental.methodBlockEndMarkers`.

```scala
//> using scala 3.10.1
//> using options -language:experimental.methodBlockEndMarkers

def test(name: String)(body: => Unit): Unit =
  println(s"Running test: $name")
  body

def repeat(times: Int)(body: => Unit): Unit =
  for _ <- 1 to times do body

test("repeated greeting"):
  repeat(3):
    println("Hello!")
  end repeat
end test
```

For an implicit `apply` call, the end marker uses the name at the call site (`Foo:` … `end Foo`). For an explicit `apply` call, use `end apply` (`Foo.apply:` … `end apply`). See the [reference](https://scala-lang.org/api/3.10.1/docs/experimental/method-block-end-markers.html) for details on nested calls and invalid end markers.

## Other notable changes

- `-Wunreasonable-catch` (also enabled by `-Wall`) warns when a `catch` clause catches `Throwable`, `Error`, or a subclass of `Error`, or uses a catch-all pattern such as `case _`. Catching `Exception` or `NonFatal` does not trigger this warning ([#26794](https://github.com/scala/scala3/pull/26794)).
- `@deprecatedName` accepts a `Symbol` as well as a string: `@deprecatedName(Symbol("x"))` ([#27048](https://github.com/scala/scala3/pull/27048)).
- `@throws` is rejected on members that are neither methods nor constructors ([#27064](https://github.com/scala/scala3/pull/27064)).
- The REPL accepts `//> using resource` and a `:resource` command. Adding dependencies with `:jar` or `:dep` no longer resets the REPL session ([#27073](https://github.com/scala/scala3/pull/27073), [#27072](https://github.com/scala/scala3/pull/27072)).
- Generic signatures for tuples with more than 22 elements are restored ([#27120](https://github.com/scala/scala3/pull/27120)).
- Under `language.experimental.modularity`, `derives` works for type classes with a `Self` member ([#26719](https://github.com/scala/scala3/pull/26719)).
- Pattern matching on a sealed Java class no longer fails when a member type cannot be loaded ([#27069](https://github.com/scala/scala3/pull/27069)).

The release also includes fixes for inlining and macros, the presentation compiler, Scaladoc, and the sbt compiler bridge.

---

As always, the full changelog is available in the [release notes on GitHub](https://github.com/scala/scala3/releases/tag/3.10.1).

## Credits

This release was made possible by the joint work of [EPFL](https://www.epfl.ch/), [VirtusLab](https://virtuslab.com/expertise/scala) and the [Scala Center](https://scala.epfl.ch/), together with the wider Scala community. Thank you to everyone who contributed.

<p style="margin-bottom: 4px; line-height: 0;"><a href="https://virtuslab.com/expertise/scala"><img src="{{ site.baseurl }}/resources/img/orgs/virtuslab-logo.png" alt="VirtusLab" style="height: 64px; width: auto; margin: 0;"></a></p>

**About VirtusLab**

VirtusLab is a software engineering company and a long-term core contributor to the Scala ecosystem. Its engineers help maintain the Scala 2 and Scala 3 compilers, manage their releases, and build key tools including Scala CLI, the Metals language server and the Open Community Build. Learn more at [virtuslab.com/expertise/scala](https://virtuslab.com/expertise/scala).

<p style="margin-top: 10px; margin-bottom: 4px; line-height: 0;"><a href="https://www.epfl.ch/"><img src="{{ site.baseurl }}/resources/img/epfl-logo.svg" alt="EPFL" style="height: 48px; width: auto; margin: 0 2.5em 0 0; vertical-align: middle;"></a><a href="https://scala.epfl.ch/"><img src="{{ site.baseurl }}/resources/img/orgs/scala-center-logo.png" alt="Scala Center" style="height: 48px; width: auto; margin: 0; vertical-align: middle;"></a></p>

**About EPFL and the Scala Center**

Scala was created at EPFL in Lausanne, Switzerland, by Martin Odersky's research group. EPFL still leads much of the language's design and compiler research. The Scala Center, a not-for-profit centre at EPFL, supports Scala's open-source ecosystem, tooling and education. Learn more at [scala.epfl.ch](https://scala.epfl.ch).
