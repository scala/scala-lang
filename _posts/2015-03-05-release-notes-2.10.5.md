---

category: announcement
permalink: /news/2.10.5
title: "Scala 2.10.5 is now available!"
---
With pride and a pang of nostalgia, we announce the availability of Scala 2.10.5 -- the last release in the 2.10.x series.

We'd like to encourage you to upgrade to 2.11.6 as soon as possible. (Please note that this announcement does not affect Typesafe's commercial support offering.)

Scala 2.10.5 is the final maintenance release in this series, and is binary compatible with previous releases in the Scala 2.10 series. We would like to highlight the following change:

 - We [fixed a cross-site scripting vulnerability](https://github.com/scala/scala/pull/4351) in Scaladoc's JavaScript. Many thanks to @todesking for discovering this, suggesting a fix, and for delaying disclosure until this release! This bug could be used to access sensitive information on sites hosted on the same domain as Scaladoc-generated documentation. All previous versions of Scaladoc are affected (Scala 2.11.6 includes the fix as well). We do recommend, as a general precaution, to host Scaladoc documentation on its own domain.

Compared to 2.10.4, this release resolves [10 issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20in%20%28%22Scala%202.10.5%22%29%20ORDER%20BY%20component%20ASC%2C%20priority%20DESC). Out of 23, we [merged 18 pull requests](https://github.com/scala/scala/pulls?q=is%3Apr+is%3Amerged+milestone%3A2.10.5). Before upgrading, please also check the [known issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20status%3Dopen%20AND%20affectedVersion%20%3D%20%22Scala%202.10.5%22%20and%20fixVersion%20%3E%3D%20%22Scala%202.10.5%22%20ORDER%20BY%20component%20ASC%2C%20priority%20DESC) for this release.

### Scala IDE
The current release of Scala IDE supports any 2.10.x release, and is available on the [download site](http://scala-ide.org/download/sdk.html).

### Changes since 2.10.4

#### Library
 - [SI-7710](https://issues.scala-lang.org/browse/SI-7710) fix memory performance of RegexParsers in jdk7u6+  ([fceae7084c](https://github.com/scala/scala/commit/fceae7084c))
 - [SI-8589](https://issues.scala-lang.org/browse/SI-8589) Performance improvement for ArrayCharSequence.toString  ([099a426dd6](https://github.com/scala/scala/commit/099a426dd6))
 - [SI-8689](https://issues.scala-lang.org/browse/SI-8689) Avoid internal error in Promise after sequence of completions  ([bf20737faa](https://github.com/scala/scala/commit/bf20737faa))
 - [SI-8787](https://issues.scala-lang.org/browse/SI-8787) Backport Regex doc  ([887622759d](https://github.com/scala/scala/commit/887622759d))

#### XML Support
 - [SI-4339](https://issues.scala-lang.org/browse/SI-4339) Event errors and attribute fix ([fe7867f8a7](https://github.com/scala/scala/commit/fe7867f8a7))
 - [SI-9027](https://issues.scala-lang.org/browse/SI-9027) xml parser fix ([736293ab09](https://github.com/scala/scala/commit/736293ab09))
 - [SI-9060](https://issues.scala-lang.org/browse/SI-9060) Backpatch fifth-edition names ([b4e3becbf3](https://github.com/scala/scala/commit/b4e3becbf3))

#### Compiler
 - [SI-7753](https://issues.scala-lang.org/browse/SI-7753) substitution broken for dependent types ([2f5ff595fd](https://github.com/scala/scala/commit/2f5ff595fd))
 - [SI-7756](https://issues.scala-lang.org/browse/SI-7756) Uncripple refchecks in case bodies ([0022dccfde](https://github.com/scala/scala/commit/0022dccfde))
 - [SI-8442](https://issues.scala-lang.org/browse/SI-8442) Ignore stub annotation symbols in `AnnotationInfo#matches` ([8262ed2fc6](https://github.com/scala/scala/commit/8262ed2fc6))
 - [SI-8596](https://issues.scala-lang.org/browse/SI-8596) Fix rangepos crasher with defaults, poly methods ([d288790429](https://github.com/scala/scala/commit/d288790429))

#### Scaladoc
 - [SI-8479](https://issues.scala-lang.org/browse/SI-8479) Fix constructor default args under scaladoc ([c4561c1d49](https://github.com/scala/scala/commit/c4561c1d49))
 - Scaladoc js location synch more robust ([f95b5b9b80](https://github.com/scala/scala/commit/f95b5b9b80))

#### Macros/Reflection
 - [SI-7470](https://issues.scala-lang.org/browse/SI-7470) implements fundep materialization ([0c5dd9e02f](https://github.com/scala/scala/commit/0c5dd9e02f))
 - [SI-8196](https://issues.scala-lang.org/browse/SI-8196) Runtime reflection robustness for STATIC impl details ([7b72f95a9e](https://github.com/scala/scala/commit/7b72f95a9e))
 - -Xfundep-materialization => -Yfundep-materialization ([5966a11ae1](https://github.com/scala/scala/commit/5966a11ae1))
 - transformers no longer ignore UnApply.fun ([36379cf8af](https://github.com/scala/scala/commit/36379cf8af))
 - no longer warns on calls to vampire macros ([db300d4d9e](https://github.com/scala/scala/commit/db300d4d9e))
 - typecheck(q"class C") no longer crashes ([3314d76ceb](https://github.com/scala/scala/commit/3314d76ceb))

### Release Notes for the Scala 2.10 Series

The release notes for the Scala 2.10 series, which also apply to the current minor release, are available in the [release notes for Scala 2.10.4](http://scala-lang.org/news/2.10.4). They contain important information such as:

* The specification of binary compatibility between minor releases.
* Details on new features, important changes and deprecations in Scala 2.10.

### Contributors

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, spreading kindness in mailing lists and other public fora, and submitting and reviewing pull requests! You are all magnificent.

According to `git shortlog -sn --no-merges v2.10.4..v2.10.5`, the following people contributed to this minor release:
Jason Zaugg, Eugene Burmako, A. P. Marki, Adriaan Moors, Grzegorz Kossakowski, Antoine Gourlay, Jeroen ter Voorde, Kato Kazuyoshi, Miles Sabin, and Viktor Klang. Thank you!