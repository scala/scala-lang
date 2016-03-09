---
layout: news
post-type: announcement
permalink: /news/2.11.8
title: "Scala 2.11.8 is now available!"
---

We are pleased to announce the availability of Scala 2.11.8!

Significant changes since 2.11.7 include:

* The Scala REPL now has robust and flexible tab-completion (details below)
* An assortment of bugs have been fixed

Compared to 2.11.7, this release resolves [44 issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20in%20%28%22Scala%202.11.8%22%29%20ORDER%20BY%20component%20ASC%2C%20priority%20DESC).  We merged [175 pull requests](https://github.com/scala/scala/pulls?q=is%3Apr+is%3Amerged+milestone%3A2.11.8).

As usual for minor releases, Scala 2.11.8 is binary compatible with other releases in the Scala 2.11 series.

The last planned 2.11.x release will be 2.11.9 in late 2016.

### New tab-completion in the Scala REPL

The implementation of tab-completion in the Scala REPL has been rewritten and now uses the same infrastructure as for example Scala IDE and ENSIME.

There are a number of improvements:

* Reliable completion, also in partial expressions and syntactically incorrect programs: try `class C { def f(l: List[Int]) = l.<TAB>`
* CamelCase completion: try `(l: List[Int]).rro<TAB>`, it expands to `(l: List[Int]).reduceRightOption`
* Show desugarings performed by the compiler by adding `//print`: try `for (x <- 1 to 10) println(x) //print<TAB>`
* Complete bean getters without typing `get`: try `(d: java.util.Date).day<TAB>`
* Find members by typing any CamelCased part of the name: try `classOf[String].typ<TAB>` to get `getAnnotationsByType`, `getComponentType` and others
* Complete non-qualified names, including types: try `def f(s: Str<TAB>`
* Press tab twice to see the method signature: try `List(1,2,3).part<TAB>`, which completes to `List(1,2,3).partition`; press tab again to display `def partition(p: Int => Boolean): (List[Int], List[Int])`

Thanks to @retronym and @som-snytt for their fruitful collaboration on this work!

### Contributors

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, spreading kindness in mailing lists and other public fora, and submitting and reviewing pull requests! You are all magnificent.

According to `git shortlog -sn --no-merges v2.11.7..v2.11.8`, 44 people contributed to this minor release: Seth Tisue, Jason Zaugg, Janek Bogucki, Lukas Rytz, Stefan Zeiger, A. P. Marki, Rex Kerr, Performant Data LLC, wpopielarski, Adriaan Moors, Vlad Ureche, Rui Gonçalves, vsalvis, martijnhoekstra, todesking, Li Yao, Frank S. Thomas, Igor Racic, Michał Pociecha, Kenji Yoshida, Tomas Janousek, dk14, jvican, stusmall, kirillkh, Alexey Romanov, Antoine Gourlay, Arnout Engelen, Eitan Adler, Felix Mulder, Gerard Basler, Jan Bessai, JoeRatt, Kirill Khazan, Linas Medziunas, Marconi Lanna, Mariot Chauvin, Michael, Parambir Singh, Paul Draper, Ryan Zhang, Simon Schäfer, Sébastien Doeraene, Tim Vergenz.

### Obtaining Scala

Scala releases are available through a variety of channels, including (but not limited to):

* Download a distribution from [scala-lang.org](http://scala-lang.org/download/2.11.8.html)
* Bump the `scalaVersion` setting in your SBT-based project
* Obtain JARs via [Maven Central](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.11.8%22)
* Try the [Hello Scala 2.11 template](https://www.lightbend.com/activator/template/hello-scala-2_11) in [Lightbend Activator](https://www.lightbend.com/activator/download)

### Scala 2.11 Notes

The [release notes for Scala 2.11.1](http://scala-lang.org/news/2.11.1) have important information applicable to the whole 2.11 series, such as:

* Details on new features, important changes and deprecations since Scala 2.10.
* The specification of binary compatibility between minor releases.
