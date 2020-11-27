---
layout: blog-detail
post-type: blog
by: Lukas Rytz
title: "Configuring and suppressing warnings in Scala"
isHighlight: true
---

Scala 2.13.2 and 2.12.13 introduced the `-Wconf` compiler flag to globally configure reporting of warnings, and the `@nowarn` annotation to locally suppress them. Having more control over compiler warnings makes them a lot more valuable:

* In projects where the build log shows a lot of warnings that are mostly ignored, new helpful warnings can easily go undetected. The new functionality can be used to clean up the build log with manageable efforts and potentially enable fatal warnings (`-Werror` in 2.13, `-Xfatal-warnings` in 2.12). This has happened for example in the Scala compiler and standard library projects in the past few months – thank you, [@NthPortal](https://github.com/NthPortal)!
* Projects that already use fatal warnings get better utilities to work around corner cases where a warning cannot be avoided. This can allow further `-Xlint` checks to be enabled.

In this post we go through the mechanics of configuring warnings and also look at the new `@nowarn` annotation.

## Warnings from the Scala compiler

We start off by recapping some of the most common scenarios where the Scala compiler emits warnings. A first category is suspicious code that is likely the result of a programming mistake:

```scala
scala> 1 == ""
         ^
       warning: comparing values of types Int and String using `==` will always yield false

scala> def f(x: Int) = { x; x }
                         ^
       warning: a pure expression does nothing in statement position;
       multiline expressions might require enclosing parentheses

scala> def f(x: Int): Unit = return x + 1
                             ^
       warning: enclosing method f has result type Unit: return value of type Int discarded
```

Warnings about non-exhaustive pattern matches and uncheckable type arguments are also issued by default:

```scala
scala> def get[T](o: Option[T]): T = o match { case Some(t) => t }
                                     ^
       warning: match may not be exhaustive.
       It would fail on the following input: None

scala> def f(l: List[Any]) = l match { case l: List[Int] => l.sum; case _ => l.length }
                                               ^
       warning: non-variable type argument Int in type pattern List[Int]
       is unchecked since it is eliminated by erasure
```

Annotating the scrutinee with `@unchecked` disables exhaustivity checking: `(o: @unchecked) match ...`. Similarly, unchecked warnings are not issued for annotated type arguments: `case l: List[Int @unchecked] => ...`.

Warnings about using deprecated features or APIs are not issued individually by default, but counted and summarized. The same applies to feature warnings, which warn about using advanced language features that are not generally encouraged.

```scala
$> scalac Test.scala
warning: 1 deprecation (since 2.13.0)
warning: 1 deprecation (since 2.13.3)
warning: 2 deprecations in total; re-run with -deprecation for details
warning: 1 feature warning; re-run with -feature for details
4 warnings
```

Using `-deprecation` and `-feature` these warnings are reported individually. As we will see later, these two flags are shorthands for changing the `-Wconf` configurarion.

```scala
$> scalac Test.scala -deprecation -feature
Test.scala:2: warning: method → in class ArrowAssoc is deprecated (since 2.13.0): Use `->` instead [...]
  def f() = 1 → 2
              ^
Test.scala:3: warning: Auto-application to `()` is deprecated [...]
  def g = f._1
          ^
Test.scala:4: warning: reflective access of structural type member method bar [...]
  def h(x: { def bar: Int }) = x.bar
                                 ^
3 warnings
```

The Scala compiler supports additional compile-time checks that are not enabled by default to identify potential programming errors or discouraged code patterns. These checks are enabled using compiler flags and result in additional warnings being issued:

* `-Wunused` (`-Ywarn-unused` in 2.12) warns about unused entities, for example unused local variables or unused imports. Run `scalac -Wunused:help` (`-Ywarn-unused:help` in 2.12) for details.
* `-Xlint` enables a number of additional checks, for example when a type argument is inferred to `Any`. See `scalac -Xlint:help` for details.
* `scalac -W` (`-Y` in 2.12) lists a few additional warnings, such as `-Wdead-code` (`-Ywarn-dead-code` in 2.12).

Finally, warnings can be globally disabled using `-nowarn` or turned into errors with `-Werror` (`-Xfatal-warnings` in 2.12). The new `-Wconf` compiler option allows for  more fine-grained configuration.

## Configuring warnings

The `-Wconf` compiler option allows filtering compiler warnings and applying an action to messages matching the filter. For example, the default configuration

```
-Wconf:cat=deprecation:ws,cat=feature:ws,cat=optimizer:ws
```

defines that warnings with category `deprecation` should be summarized as a single warning (`ws`, which means `warning-summary`), and the same for feature and optimizer warnings.

Running `scalac -Wconf:help` explains how to specify a configuration, but we take a detailed look in the following sections. Generally, the syntax is `-Wconf:<filters>:<action>,<filters>:<action>,...`.

### Actions

The `<action>` defines how warnings matching a filter are handled:

* `error` / `e` reports them as errors.
* `warning` / `w` reports them as warnings (this is the default).
* `info` / `i` reports them without counting them as warnings, and without causing `-Werror` to fail.
* `silent` / `s` ignores them.

Like deprecations and feature warnings, a group of `warning`s and `info`s can be reported as a single summary (`warning-summary` / `ws` and `info-summary` / `is`). Specifying `-Wconf:cat=deprecation:w` overrides the default and reports every deprecation warning individually – this is exactly what the `-deprecation` flag does internally.

Warnings and infos can be issued in verbose mode (`warning-verbose` / `wv` and `info-verbose` / `iv`). This displays additional information about the warning that is helpful for writing filters. For example:

```scala
$> scalac -Wconf:any:wv Test.scala
Test.scala:4: warning: [deprecation @ my.app.C.f | origin=scala.Predef.ArrowAssoc.→ | version=2.13.0] method → in class ArrowAssoc is deprecated [...]
  def f() = 1 → 2
              ^
```

Here, the warning message includes the following additional information:

* the warning category `deprecation`
* the site where the warning is issued `my.app.C.f`
* the origin of the deprecation `scala.Predef.ArrowAssoc.→`
* the `since` version of the deprecation `2.13.0`

### Filters

The actions explained above are always applied to a set of warnings selected by a filter expression. The following filters are available:

* `any` matches every message.
* `cat=deprecation` filters according to the message category, for example deprecations (details below). 
* `msg=regex` applies if some part of the message matches the regex.
* `site=my\.package\..*` filters on the site where the warning is triggered. The regex must match the entity's full name (`package.Class.method`). Note that `.` in a regex matches any character while `\.` matches a single period.
* `src=src_managed/.*` filters warnings issued in a source file (details below).
* Deprecation warnings can be filtered on two additional criteria:
  * `origin=external\.package\..*` filters on full name of the deprecated entity.
  * `since<1.24` filters on the `since` annotation argument of the deprecated entity (details below).

Multiple filters can be combined using `&` to narrow down the selection. For example, the following configuration turns deprecation warnings for `scala.Predef` into errors:

```scala
$> scalac '-Wconf:cat=deprecation&origin=scala\.Predef\..*:e' Test.scala
Test.scala:4: error: method → in class ArrowAssoc is deprecated [...]
  def f() = 1 → 2
              ^
1 error
```

Note that the `-Wconf:...` compiler argument is between quotes (`'`) in the command line, which prevents the shell from interpreting characters like `&` or `*`.

For some of the filters the syntax is not trivial, so we look at them in more detail.

* **Message category**: Every message has a category that is displayed in verbose mode (`-Wconf:any:wv`). The `-Wconf:help` option displays the full list of available categories. For example, every `-Xlint` warning has its own category (`lint-infer-any`), the super-category `lint` matches all lint warnings.
* **Source file**: By default, the source file filter is a regex that must match the file path relative to any path segment. For example, `b/.*Test.scala` matches `/a/b/XTest.scala` but not `/ab/Test.scala`. If the `-rootdir` compiler option is specified, the regex must match the file path relative to that root directory.
* **Since version for deprecations**: In a `since<1.24` filter expression, valid operators are `<`, `=` and `>` and valid version numbers are `N`, `N.M` and `N.M.P`. Because the `since` annotation argument can contain arbitrary text, the first version number found in the text is used for the comparison, for example `1.2.3` in `@deprecated("", "some lib 1.2.3-foo")`.

## Local warning suppression using `@nowarn`

The [`@nowarn` annotation](https://www.scala-lang.org/api/current/scala/annotation/nowarn.html) allows suppressing warnings locally within a source file. It can be applied to method or class definitions, or to individual expressions using the ascription syntax `expression: @nowarn`.

```scala
scala> @deprecated def dpr = 0
def dpr: Int

// don't issue any warnings for code in method `f`
scala> @annotation.nowarn def f = { 1; dpr }
def f: Int

// don't issue the "a pure expression does nothing in statement position" warning
scala> def f = {
     |   1: @annotation.nowarn 
     |   dpr
     | }
         ^
       warning: method dpr is deprecated
def f: Int
```


The `@nowarn` annotation has an optional value parameter to silence warnings selectively, where the syntax is the same as a filter expression of the `-Wconf` compiler option.

```scala
scala> @annotation.nowarn("msg=pure expression does nothing") def f = { 1; dpr }
                                                                           ^
       warning: method dpr is deprecated
def f: Int
```

To ensure that `@nowarn` annotations actually suppress warnings, enable `-Xlint:unused` or `-Wunused:nowarn`.

## Credits

The `@nowarn` annotation is heavily inspired from the fantastic [silencer compiler plugin](https://github.com/ghik/silencer) by [Roman Janusz](https://github.com/ghik), so I thank Roman for inventing, implementing and maintaining this feature before it was adopted by the compiler.
