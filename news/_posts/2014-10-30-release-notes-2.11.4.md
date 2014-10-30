---
layout: news
post-type: announcement
title: "Scala 2.11.4 is now available!"
---
We are very pleased to announce the release of Scala 2.11.4!

* Get started with the [Hello Scala 2.11 template](https://typesafe.com/activator/template/hello-scala-2_11) in [Typesafe Activator](https://typesafe.com/platform/getstarted)
* Download a distribution from [scala-lang.org](http://scala-lang.org/download/2.11.4.html)
* Obtain it via [Maven Central](http://search.maven.org/?search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.11.2%22#search%7Cga%7C1%7Cg%3A%22org.scala-lang%22%20AND%20v%3A%222.11.4%22)

Scala 2.11.4 is a bugfix release that is binary compatible with previous releases in the Scala 2.11 series.
The changes include:

* Scala shell (REPL) is more friendly to Crtl+D. It leaves your terminal in a clean state and suggests using `:quit` the next
time (see [#3902](https://github.com/scala/scala/pull/3902). Kudos to [@gourlaysama](https://github.com/gourlaysama)!
* REPL uses different colors when printing references to vals and types. Pass `-Dscala.color` to enable that behavior (see [#3993](https://github.com/scala/scala/pull/3993)). Thanks to [@puffnfresh](https://github.com/puffnfresh)!
* [Scala specification](http://www.scala-lang.org/files/archive/spec/2.11/) received a fair amount of love and became much more beatiful.  It has got syntax highlighting ([#3984](https://github.com/scala/scala/pull/3984)), linkable headers, and a side bar with TOC ([#3996](https://github.com/scala/scala/pull/3996)). A few final touches has been merged that fix typos and mistakes stemming from automatic Latex to Markdown conversion we've done a while ago. Thanks attention for details [@gourlaysama](https://github.com/gourlaysama), [@som-snytt](https://github.com/som-snytt) and [roberthoedicke](https://github.com/roberthoedicke)!
* Non-deterministic pattern matching warnings has been fixed ([SI-7746](https://issues.scala-lang.org/browse/SI-7746)). Many thanks to [@gbasler](https://github.com/gbasler) for diving deep ([#3954](https://github.com/scala/scala/pull/3954])) into logical formulas constructed by our pattern matcher implementation!

Compared to 2.11.2, this release resolves [54 issues](https://issues.scala-lang.org/issues/?jql=project%20%3D%20SI%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20in%20(%22Scala%202.11.3%22%2C%20%22Scala%202.11.4%22)%20ORDER%20BY%20component%20ASC%2C%20priority%20DESC). We reviewed and merged 120 [pull](https://github.com/scala/scala/pulls?q=is%3Apr+milestone%3A2.11.3) [requests](https://github.com/scala/scala/pulls?q=is%3Apr+milestone%3A2.11.4).

The next minor Scala 2.11 release will be available in about a month, or sooner if prompted by a serious issue.

### Note on Scala 2.11.3 release

The Scala 2.11.3 release has been declared dead on arrival and have been never announced to general public. Right after preparing the release we received reports about broken binary compatibility in the Scala 2.11.3 standard library. The breakage was caused by a human mistake when we decided to disable binary compatibility for one of the pull requests. Check [this](https://groups.google.com/d/msg/scala-internals/SSD9BNJaFbU/rACBkHrs2JEJ) report for details and plans on improving our infrastructure so such mistake can be caught in time in the future. The Scala 2.11.4 release is essentially Scala 2.11.3 release plus a couple of fixes for critical issues found in the Scala 2.11.3 release.

### Available Libraries and Frameworks

A large number of Scala projects have been released against Scala 2.11. Please refer to the list of [libraries and frameworks available for Scala 2.11](https://github.com/scala/make-release-notes/blob/2.11.x/projects-2.11.md).

A release of the Scala IDE that includes Scala 2.11.2 will be available shortly [on their download site](http://scala-ide.org/download/sdk.html).

### Release Notes for the Scala 2.11 Series

The release notes for the Scala 2.11 series, which also apply to the current minor release, are available in the [release notes for Scala 2.11.1](http://scala-lang.org/news/2.11.1). They contain important information such as:

* The specification of binary compatibility between minor releases.
* Details on new features, important changes and deprecations in Scala 2.11.

### Contributors

A big thank you to everyone who's helped improve Scala by reporting bugs, improving our documentation, participating in mailing lists and other public fora, and submitting and reviewing pull requests!
You are all awesome.

According to `git shortlog -sn --no-merges v2.11.2..v2.11.4`, 35 people contributed code to this minor release:
Lukas Rytz, Adriaan Moors, Antoine Gourlay, A. P. Marki, Jason Zaugg, Robert Hoedicke, Eugene Burmako, Rex Kerr, Max Bileschi, Brian McKenna, Grzegorz Kossakowski, Maks Atygaev, Evgeny Vereshchagin, Simon Ochsenreither, Dominik Gruntz, Masato Sogame, Gerard Basler, Dan Garrette, Artem Stasuk, David Turner, Iulian Dragos, Jeroen ter Voorde, Kato Kazuyoshi, Konstantin Fedorov, Krystian Nowak, Lukas Elmer, Malte Isberner, Paolo Giarrusso, Paweł Wiejacha, Robert Hoedicke, dgruntz, Roman Janusz, harryhuk, Michał Pociecha.


#### A big thank you to all the contributors!

\# | Author
---: | ---
43 | <notextile>Lukas Rytz</notextile>
37 | <notextile>Adriaan Moors</notextile>
24 | <notextile>Antoine Gourlay</notextile>
19 | <notextile>A. P. Marki</notextile>
19 | <notextile>Jason Zaugg</notextile>
8 | <notextile>roberthoedicke</notextile>
6 | <notextile>Eugene Burmako</notextile>
5 | <notextile>Rex Kerr</notextile>
5 | <notextile>Max Bileschi</notextile>
4 | <notextile>Brian McKenna</notextile>
3 | <notextile>Grzegorz Kossakowski</notextile>
3 | <notextile>jxcoder</notextile>
2 | <notextile>Masato Sogame</notextile>
2 | <notextile>Dominik Gruntz</notextile>
2 | <notextile>Gerard Basler</notextile>
2 | <notextile>Evgeny Vereshchagin</notextile>
2 | <notextile>Dan Garrette</notextile>
2 | <notextile>Simon Ochsenreither</notextile>
1 | <notextile>Konstantin Fedorov</notextile>
1 | <notextile>Robert Hoedicke</notextile>
1 | <notextile>dgruntz</notextile>
1 | <notextile>harryhuk</notextile>
1 | <notextile>Kato Kazuyoshi</notextile>
1 | <notextile>Lukas Elmer</notextile>
1 | <notextile>Iulian Dragos</notextile>
1 | <notextile>ghik</notextile>
1 | <notextile>Malte Isberner</notextile>
1 | <notextile>David Turner</notextile>
1 | <notextile>Paweł Wiejacha</notextile>
1 | <notextile>Maks Atygaev</notextile>
1 | <notextile>Jeroen ter Voorde</notextile>
1 | <notextile>Krystian Nowak</notextile>
1 | <notextile>Paolo Giarrusso</notextile>
1 | <notextile>terma</notextile>
1 | <notextile>mpociecha</notextile>



#### Commits and the issues they fixed since v2.11.2

Issue(s) | Commit | Message
--- | --- | ---
[SI-8900](https://issues.scala-lang.org/browse/SI-8900), [SI-8900](https://issues.scala-lang.org/browse/SI-8900) | [347f01d](https://github.com/scala/scala/commit/347f01d) | <notextile>SI-8900 Don't assert !isDelambdafyFunction, it may not be accurate</notextile>
[SI-8928](https://issues.scala-lang.org/browse/SI-8928), [SI-8926](https://issues.scala-lang.org/browse/SI-8926) | [fa40ff3](https://github.com/scala/scala/commit/fa40ff3) | <notextile>SI-8926 default visbility RUNTIME for java annotations</notextile>
[SI-8899](https://issues.scala-lang.org/browse/SI-8899), [SI-8899](https://issues.scala-lang.org/browse/SI-8899), [SI-8627](https://issues.scala-lang.org/browse/SI-8627) | [38587c5](https://github.com/scala/scala/commit/38587c5) | <notextile>[nomerge] SI-8899 Revert &quot;SI-8627 make Stream.filterNot non-eager&quot;</notextile>
[SI-8907](https://issues.scala-lang.org/browse/SI-8907), [SI-8907](https://issues.scala-lang.org/browse/SI-8907) | [e96d1a4](https://github.com/scala/scala/commit/e96d1a4) | <notextile>SI-8907 Don't force symbol info in isModuleNotMethod</notextile>
[SI-8894](https://issues.scala-lang.org/browse/SI-8894) | [ff051e2](https://github.com/scala/scala/commit/ff051e2) | <notextile>SI-8894 dealias when looking at tuple components</notextile>
[SI-8890](https://issues.scala-lang.org/browse/SI-8890) | [4902c84](https://github.com/scala/scala/commit/4902c84) | <notextile>SI-8890 handle reference to overload with error</notextile>
[SI-4788](https://issues.scala-lang.org/browse/SI-4788), [SI-5948](https://issues.scala-lang.org/browse/SI-5948) | [c14e053](https://github.com/scala/scala/commit/c14e053) | <notextile>SI-4788/SI-5948 Respect RetentionPolicy of Java annotations</notextile>
[SI-7041](https://issues.scala-lang.org/browse/SI-7041) | [ea0d4e4](https://github.com/scala/scala/commit/ea0d4e4) | <notextile>Avoid ClassfileAnnotation warning for @SerialVersionUID</notextile>
[SI-8843](https://issues.scala-lang.org/browse/SI-8843) | [964a197](https://github.com/scala/scala/commit/964a197) | <notextile>SI-8843 AbsFileCL acts like a CL</notextile>
[SI-6502](https://issues.scala-lang.org/browse/SI-6502) | [e720bab](https://github.com/scala/scala/commit/e720bab) | <notextile>SI-6502 Repl reset/replay take settings args</notextile>
[SI-6502](https://issues.scala-lang.org/browse/SI-6502) | [2529010](https://github.com/scala/scala/commit/2529010) | <notextile>SI-6502 Remove cp command as unworkable</notextile>
[SI-8731](https://issues.scala-lang.org/browse/SI-8731) | [0c25979](https://github.com/scala/scala/commit/0c25979) | <notextile>SI-8731 warning if @switch is ignored</notextile>
[SI-8888](https://issues.scala-lang.org/browse/SI-8888) | [1ee6352](https://github.com/scala/scala/commit/1ee6352) | <notextile>SI-8888 Avoid ClassFormatError under -Ydelambdafy:method</notextile>
[SI-7746](https://issues.scala-lang.org/browse/SI-7746) | [179419c](https://github.com/scala/scala/commit/179419c) | <notextile>SI-7746 patmat: fix non-determinism, infeasible counter examples Fixes non-deter</notextile>
[SI-6192](https://issues.scala-lang.org/browse/SI-6192) | [4df7057](https://github.com/scala/scala/commit/4df7057) | <notextile>SI-6192  Range: to, until and end are confusing</notextile>
[SI-8291](https://issues.scala-lang.org/browse/SI-8291) | [a87db21](https://github.com/scala/scala/commit/a87db21) | <notextile>SI-8291 Fix implicitNotFound message with type aliases</notextile>
[SI-8845](https://issues.scala-lang.org/browse/SI-8845) | [922a9fc](https://github.com/scala/scala/commit/922a9fc) | <notextile>SI-8845 Control flow pot-pourri crashes GenASM, but not -BCode</notextile>
[SI-8267](https://issues.scala-lang.org/browse/SI-8267) | [ee2b7d6](https://github.com/scala/scala/commit/ee2b7d6) | <notextile>SI-8267 Avoid existentials after polymorphic overload resolution</notextile>
[SI-8217](https://issues.scala-lang.org/browse/SI-8217) | [0d8ca1f](https://github.com/scala/scala/commit/0d8ca1f) | <notextile>SI-8217 allow abstract type members in objects</notextile>
[SI-8869](https://issues.scala-lang.org/browse/SI-8869) | [84d4671](https://github.com/scala/scala/commit/84d4671) | <notextile>SI-8869 Prevent ill-kindedness in type lambdas</notextile>
[SI-8870](https://issues.scala-lang.org/browse/SI-8870) | [fc874ad](https://github.com/scala/scala/commit/fc874ad) | <notextile>SI-8870 Fix markup errors in the Types section of the spec</notextile>
[SI-8624](https://issues.scala-lang.org/browse/SI-8624) | [6826a04](https://github.com/scala/scala/commit/6826a04) | <notextile>SI-8624 PriorityQueue documentation is not clear enough</notextile>
[SI-2511](https://issues.scala-lang.org/browse/SI-2511), [SI-8087](https://issues.scala-lang.org/browse/SI-8087) | [6346c6b](https://github.com/scala/scala/commit/6346c6b) | <notextile>SI-8087 keep annotations on mixed-in private[this] fields</notextile>
[SI-8774](https://issues.scala-lang.org/browse/SI-8774) | [c048e19](https://github.com/scala/scala/commit/c048e19) | <notextile>Don't remove elements from a map during iteration.</notextile>
[SI-6622](https://issues.scala-lang.org/browse/SI-6622), [SI-8445](https://issues.scala-lang.org/browse/SI-8445), [SI-6622](https://issues.scala-lang.org/browse/SI-6622) | [ac4662d](https://github.com/scala/scala/commit/ac4662d) | <notextile>SI-8445, SI-6622 test cases, already fixed</notextile>
[SI-8708](https://issues.scala-lang.org/browse/SI-8708), [SI-8868](https://issues.scala-lang.org/browse/SI-8868) | [bcd1e4f](https://github.com/scala/scala/commit/bcd1e4f) | <notextile>SI-8868 Fix unpickling of local dummy symbols</notextile>
[SI-7756](https://issues.scala-lang.org/browse/SI-7756) | [0022dcc](https://github.com/scala/scala/commit/0022dcc) | <notextile>[backport] SI-7756 Uncripple refchecks in case bodies</notextile>
[SI-8459](https://issues.scala-lang.org/browse/SI-8459) | [7c81959](https://github.com/scala/scala/commit/7c81959) | <notextile>SI-8459 fix incorrect positions for incomplete selection trees</notextile>
[SI-8852](https://issues.scala-lang.org/browse/SI-8852) | [17a1abb](https://github.com/scala/scala/commit/17a1abb) | <notextile>SI-8852 Support joint compilation of Java interfaces w. statics</notextile>
[SI-8283](https://issues.scala-lang.org/browse/SI-8283), [SI-8844](https://issues.scala-lang.org/browse/SI-8844) | [a8a31e9](https://github.com/scala/scala/commit/a8a31e9) | <notextile>SI-8844 Fix regression with existentials + type aliases</notextile>
[SI-8680](https://issues.scala-lang.org/browse/SI-8680) | [039f3e3](https://github.com/scala/scala/commit/039f3e3) | <notextile>SI-8680  Stream.addString is too eager</notextile>
[SI-8815](https://issues.scala-lang.org/browse/SI-8815) | [1da69e8](https://github.com/scala/scala/commit/1da69e8) | <notextile>SI-8815  mutable.LongMap makes different choices for splitAt vs etc.</notextile>
[SI-8806](https://issues.scala-lang.org/browse/SI-8806) | [c9ec916](https://github.com/scala/scala/commit/c9ec916) | <notextile>SI-8806 Add lower bound check to Any lint</notextile>
[SI-8568](https://issues.scala-lang.org/browse/SI-8568) | [01f5435](https://github.com/scala/scala/commit/01f5435) | <notextile>SI-8568 unreachable test now passes in GenBCode</notextile>
[SI-7470](https://issues.scala-lang.org/browse/SI-7470) | [0c5dd9e](https://github.com/scala/scala/commit/0c5dd9e) | <notextile>[backport] SI-7470 implements fundep materialization</notextile>
[SI-8817](https://issues.scala-lang.org/browse/SI-8817) | [b416dc6](https://github.com/scala/scala/commit/b416dc6) | <notextile>SI-8817 Correct scaladoc for scala.sys.addShutdownHook</notextile>
[SI-8398](https://issues.scala-lang.org/browse/SI-8398) | [24ccfa0](https://github.com/scala/scala/commit/24ccfa0) | <notextile>SI-8398 - unused warning reports lazy val as a method</notextile>
[SI-8764](https://issues.scala-lang.org/browse/SI-8764) | [e01b461](https://github.com/scala/scala/commit/e01b461) | <notextile>[nomaster] SI-8764 fix return type of case class productElement under Xexperimen</notextile>
[SI-5254](https://issues.scala-lang.org/browse/SI-5254) | [9519eb0](https://github.com/scala/scala/commit/9519eb0) | <notextile>SI-5254 running an empty scala script should succeed</notextile>
[SI-8474](https://issues.scala-lang.org/browse/SI-8474) | [3d64dee](https://github.com/scala/scala/commit/3d64dee) | <notextile>SI-8474  Inconsistent behavior of patch method</notextile>
[SI-8803](https://issues.scala-lang.org/browse/SI-8803) | [f324ca5](https://github.com/scala/scala/commit/f324ca5) | <notextile>SI-8803 generate super accessor for super[A], if A is outer superclass</notextile>
[SI-8786](https://issues.scala-lang.org/browse/SI-8786) | [e9a6fbb](https://github.com/scala/scala/commit/e9a6fbb) | <notextile>SI-8786 disable part of test that's failing the jdk8 build</notextile>
[SI-8498](https://issues.scala-lang.org/browse/SI-8498) | [984025b](https://github.com/scala/scala/commit/984025b) | <notextile>SI-8498 @compileTimeOnly should be aware of bridge methods.</notextile>
[SI-8810](https://issues.scala-lang.org/browse/SI-8810) | [2b5ac5a](https://github.com/scala/scala/commit/2b5ac5a) | <notextile>SI-8810 scaladoc: fixed code block indentation normalization</notextile>
[SI-8113](https://issues.scala-lang.org/browse/SI-8113) | [d153cee](https://github.com/scala/scala/commit/d153cee) | <notextile>SI-8113 allow a newline between a link target and title</notextile>
[SI-8410](https://issues.scala-lang.org/browse/SI-8410) | [6076d61](https://github.com/scala/scala/commit/6076d61) | <notextile>SI-8410 Summarize if warnings and not disabled</notextile>
[SI-8410](https://issues.scala-lang.org/browse/SI-8410) | [7f21475](https://github.com/scala/scala/commit/7f21475) | <notextile>SI-8410 Don't warn fatally on disabled flag</notextile>
[SI-8787](https://issues.scala-lang.org/browse/SI-8787) | [8876227](https://github.com/scala/scala/commit/8876227) | <notextile>[backport] SI-8787 Backport Regex doc</notextile>
[SI-8542](https://issues.scala-lang.org/browse/SI-8542), [SI-7710](https://issues.scala-lang.org/browse/SI-7710) | [fceae70](https://github.com/scala/scala/commit/fceae70) | <notextile>[backport] SI-7710 fix memory performance of RegexParsers in jdk7u6+</notextile>
[SI-8314](https://issues.scala-lang.org/browse/SI-8314) | [b6c00d6](https://github.com/scala/scala/commit/b6c00d6) | <notextile>Prevent SI-8314 by adding a test</notextile>
[SI-8589](https://issues.scala-lang.org/browse/SI-8589) | [099a426](https://github.com/scala/scala/commit/099a426) | <notextile>SI-8589 Performance improvement for ArrayCharSequence.toString</notextile>
[SI-8828](https://issues.scala-lang.org/browse/SI-8828) | [997ef56](https://github.com/scala/scala/commit/997ef56) | <notextile>SI-8828 fix regression in Xlint visibility warning for sealed classes</notextile>
[SI-7931](https://issues.scala-lang.org/browse/SI-7931) | [20daa00](https://github.com/scala/scala/commit/20daa00) | <notextile>SI-7931 fix Dscala.repl.vids and some string interpolation typos</notextile>
[SI-8823](https://issues.scala-lang.org/browse/SI-8823) | [f6467d0](https://github.com/scala/scala/commit/f6467d0) | <notextile>SI-8823 Exclude specialized methods from extension method rewrite</notextile>
[SI-8627](https://issues.scala-lang.org/browse/SI-8627) | [9276a12](https://github.com/scala/scala/commit/9276a12) | <notextile>SI-8627 make Stream.filterNot non-eager</notextile>
[SI-5691](https://issues.scala-lang.org/browse/SI-5691) | [756e551](https://github.com/scala/scala/commit/756e551) | <notextile>SI-5691 lint warning when a type parameter shadows an existing type.</notextile>
[SI-8128](https://issues.scala-lang.org/browse/SI-8128), [SI-8149](https://issues.scala-lang.org/browse/SI-8149), [SI-8793](https://issues.scala-lang.org/browse/SI-8793) | [a16a635](https://github.com/scala/scala/commit/a16a635) | <notextile>SI-8793 Fix patmat regression with extractors, existentials</notextile>
[SI-5227](https://issues.scala-lang.org/browse/SI-5227) | [066d102](https://github.com/scala/scala/commit/066d102) | <notextile>SI-5227 make fsc notify its client upon compiler crash</notextile>
[SI-1264](https://issues.scala-lang.org/browse/SI-1264) | [6f54b1d](https://github.com/scala/scala/commit/6f54b1d) | <notextile>SI-1264 fsc compiler output should go to stderr, like scalac</notextile>
[SI-8787](https://issues.scala-lang.org/browse/SI-8787) | [f98c53c](https://github.com/scala/scala/commit/f98c53c) | <notextile>SI-8787 Addressing feedback, additional periods.</notextile>
[SI-8787](https://issues.scala-lang.org/browse/SI-8787) | [0e26910](https://github.com/scala/scala/commit/0e26910) | <notextile>SI-8787 Update doc for Regex</notextile>
[SI-8787](https://issues.scala-lang.org/browse/SI-8787) | [cd2394e](https://github.com/scala/scala/commit/cd2394e) | <notextile>SI-8787 If you love nulls, so does Regex</notextile>
[SI-8512](https://issues.scala-lang.org/browse/SI-8512) | [606a553](https://github.com/scala/scala/commit/606a553) | <notextile>SI-8512 Infer Any for the q</notextile>
[SI-8512](https://issues.scala-lang.org/browse/SI-8512) | [2e3583b](https://github.com/scala/scala/commit/2e3583b) | <notextile>SI-8512 Infer a type for f&quot;$args&quot;</notextile>
[SI-4563](https://issues.scala-lang.org/browse/SI-4563) | [ed9dfee](https://github.com/scala/scala/commit/ed9dfee) | <notextile>SI-4563 friendlier behavior for Ctrl+D in the REPL</notextile>
[SI-6476](https://issues.scala-lang.org/browse/SI-6476) | [eff9a58](https://github.com/scala/scala/commit/eff9a58) | <notextile>SI-6476 Unitize ALL the procedures!</notextile>
[SI-6476](https://issues.scala-lang.org/browse/SI-6476) | [ccbb84b](https://github.com/scala/scala/commit/ccbb84b) | <notextile>SI-6476 Unitize procedures, readability</notextile>
[SI-6476](https://issues.scala-lang.org/browse/SI-6476) | [b4f5067](https://github.com/scala/scala/commit/b4f5067) | <notextile>SI-6476 Documentation</notextile>
[SI-6476](https://issues.scala-lang.org/browse/SI-6476), [SI-6476](https://issues.scala-lang.org/browse/SI-6476) | [abb58dc](https://github.com/scala/scala/commit/abb58dc) | <notextile>SI-6476 Improve error on escapement</notextile>
[SI-8672](https://issues.scala-lang.org/browse/SI-8672) | [e54b772](https://github.com/scala/scala/commit/e54b772) | <notextile>[backport] Did not know of the fix for SI-8672. Followed the recommendation give</notextile>
[SI-8705](https://issues.scala-lang.org/browse/SI-8705) | [1c96ed5](https://github.com/scala/scala/commit/1c96ed5) | <notextile>[backport] SI-8705   Added example to Option.contains method.</notextile>
[SI-8781](https://issues.scala-lang.org/browse/SI-8781) | [1f3319c](https://github.com/scala/scala/commit/1f3319c) | <notextile>SI-8781 Avoid double-expansion under -Ymacro-expand:discard</notextile>
[SI-8743](https://issues.scala-lang.org/browse/SI-8743) | [926585a](https://github.com/scala/scala/commit/926585a) | <notextile>SI-8743 Fix crasher with poly-methods annotated with @varargs</notextile>




#### Complete commit list!

sha | Title
---: | ---
[a87af27](https://github.com/scala/scala/commit/a87af27) | <notextile>Bump version number in build.number to 2.11.4</notextile>
[347f01d](https://github.com/scala/scala/commit/347f01d) | <notextile>SI-8900 Don't assert !isDelambdafyFunction, it may not be accurate</notextile>
[fa40ff3](https://github.com/scala/scala/commit/fa40ff3) | <notextile>SI-8926 default visbility RUNTIME for java annotations</notextile>
[38587c5](https://github.com/scala/scala/commit/38587c5) | <notextile>[nomerge] SI-8899 Revert &quot;SI-8627 make Stream.filterNot non-eager&quot;</notextile>
[e96d1a4](https://github.com/scala/scala/commit/e96d1a4) | <notextile>SI-8907 Don't force symbol info in isModuleNotMethod</notextile>
[3bbf5e4](https://github.com/scala/scala/commit/3bbf5e4) | <notextile>Update 04-basic-declarations-and-definitions.md</notextile>
[ae65b95](https://github.com/scala/scala/commit/ae65b95) | <notextile>Update 12-the-scala-standard-library.md</notextile>
[79b375c](https://github.com/scala/scala/commit/79b375c) | <notextile>Update 10-xml-expressions-and-patterns.md</notextile>
[550a481](https://github.com/scala/scala/commit/550a481) | <notextile>Update 08-pattern-matching.md</notextile>
[cbfcb66](https://github.com/scala/scala/commit/cbfcb66) | <notextile>Update 06-expressions.md</notextile>
[a95c97d](https://github.com/scala/scala/commit/a95c97d) | <notextile>Update 04-basic-declarations-and-definitions.md</notextile>
[b7ce9e4](https://github.com/scala/scala/commit/b7ce9e4) | <notextile>Update 03-types.md</notextile>
[d46c024](https://github.com/scala/scala/commit/d46c024) | <notextile>Update 03-types.md</notextile>
[db33bbd](https://github.com/scala/scala/commit/db33bbd) | <notextile>Update 02-identifiers-names-and-scopes.md</notextile>
[ff051e2](https://github.com/scala/scala/commit/ff051e2) | <notextile>SI-8894 dealias when looking at tuple components</notextile>
[33fd418](https://github.com/scala/scala/commit/33fd418) | <notextile>Use color REPL after writing a def</notextile>
[8a560a2](https://github.com/scala/scala/commit/8a560a2) | <notextile>Add color to severity in REPL reporter</notextile>
[9902ae5](https://github.com/scala/scala/commit/9902ae5) | <notextile>Color REPL under -Dscala.color</notextile>
[4902c84](https://github.com/scala/scala/commit/4902c84) | <notextile>SI-8890 handle reference to overload with error</notextile>
[5f29a26](https://github.com/scala/scala/commit/5f29a26) | <notextile>Make Scaladoc actually exit with non-zero exit code in case of errors, as its do</notextile>
[c14e053](https://github.com/scala/scala/commit/c14e053) | <notextile>SI-4788/SI-5948 Respect RetentionPolicy of Java annotations</notextile>
[ea0d4e4](https://github.com/scala/scala/commit/ea0d4e4) | <notextile>Avoid ClassfileAnnotation warning for @SerialVersionUID</notextile>
[964a197](https://github.com/scala/scala/commit/964a197) | <notextile>SI-8843 AbsFileCL acts like a CL</notextile>
[efbef1e](https://github.com/scala/scala/commit/efbef1e) | <notextile>Update stripPrefix/StringLike docs to talk about no op case</notextile>
[e720bab](https://github.com/scala/scala/commit/e720bab) | <notextile>SI-6502 Repl reset/replay take settings args</notextile>
[2529010](https://github.com/scala/scala/commit/2529010) | <notextile>SI-6502 Remove cp command as unworkable</notextile>
[0c25979](https://github.com/scala/scala/commit/0c25979) | <notextile>SI-8731 warning if @switch is ignored</notextile>
[1ee6352](https://github.com/scala/scala/commit/1ee6352) | <notextile>SI-8888 Avoid ClassFormatError under -Ydelambdafy:method</notextile>
[34b42d8](https://github.com/scala/scala/commit/34b42d8) | <notextile>Cleanup `LinkedHashSet` fixes and replace them with `Set` (i.e., back to initial</notextile>
[179419c](https://github.com/scala/scala/commit/179419c) | <notextile>SI-7746 patmat: fix non-determinism, infeasible counter examples Fixes non-deter</notextile>
[a9f4981](https://github.com/scala/scala/commit/a9f4981) | <notextile>Increase REPL startup timeout to avoid test failures</notextile>
[4df7057](https://github.com/scala/scala/commit/4df7057) | <notextile>SI-6192  Range: to, until and end are confusing</notextile>
[1122e9e](https://github.com/scala/scala/commit/1122e9e) | <notextile>Revert &quot;Disable flaky presentation compiler test.&quot;</notextile>
[a87db21](https://github.com/scala/scala/commit/a87db21) | <notextile>SI-8291 Fix implicitNotFound message with type aliases</notextile>
[922a9fc](https://github.com/scala/scala/commit/922a9fc) | <notextile>SI-8845 Control flow pot-pourri crashes GenASM, but not -BCode</notextile>
[ee2b7d6](https://github.com/scala/scala/commit/ee2b7d6) | <notextile>SI-8267 Avoid existentials after polymorphic overload resolution</notextile>
[0d8ca1f](https://github.com/scala/scala/commit/0d8ca1f) | <notextile>SI-8217 allow abstract type members in objects</notextile>
[84d4671](https://github.com/scala/scala/commit/84d4671) | <notextile>SI-8869 Prevent ill-kindedness in type lambdas</notextile>
[fc874ad](https://github.com/scala/scala/commit/fc874ad) | <notextile>SI-8870 Fix markup errors in the Types section of the spec</notextile>
[6826a04](https://github.com/scala/scala/commit/6826a04) | <notextile>SI-8624 PriorityQueue documentation is not clear enough</notextile>
[159ca83](https://github.com/scala/scala/commit/159ca83) | <notextile>Better ant / junit interaction</notextile>
[6346c6b](https://github.com/scala/scala/commit/6346c6b) | <notextile>SI-8087 keep annotations on mixed-in private[this] fields</notextile>
[c048e19](https://github.com/scala/scala/commit/c048e19) | <notextile>Don't remove elements from a map during iteration.</notextile>
[ac4662d](https://github.com/scala/scala/commit/ac4662d) | <notextile>SI-8445, SI-6622 test cases, already fixed</notextile>
[bcd1e4f](https://github.com/scala/scala/commit/bcd1e4f) | <notextile>SI-8868 Fix unpickling of local dummy symbols</notextile>
[65eb42f](https://github.com/scala/scala/commit/65eb42f) | <notextile>spec: a header that links to the index, with a scala logo</notextile>
[e95d91e](https://github.com/scala/scala/commit/e95d91e) | <notextile>spec: a print stylesheet to remove the TOC when printing</notextile>
[3a72a9d](https://github.com/scala/scala/commit/3a72a9d) | <notextile>spec: generated TOC with linkable headers</notextile>
[3059afb](https://github.com/scala/scala/commit/3059afb) | <notextile>Cleanup a few flags in test/files/</notextile>
[5320424](https://github.com/scala/scala/commit/5320424) | <notextile>Bump timeout in interactive tests from 10s -&gt; 30s.</notextile>
[dc54894](https://github.com/scala/scala/commit/dc54894) | <notextile>Avoid test fragility to changes in Predef</notextile>
[0022dcc](https://github.com/scala/scala/commit/0022dcc) | <notextile>[backport] SI-7756 Uncripple refchecks in case bodies</notextile>
[ea2ec79](https://github.com/scala/scala/commit/ea2ec79) | <notextile>Get rid of Platform.doLoad method.</notextile>
[ea589ea](https://github.com/scala/scala/commit/ea589ea) | <notextile>Rename ClassPath.findSourceFile to ClassPath.findClassFile</notextile>
[48caed5](https://github.com/scala/scala/commit/48caed5) | <notextile>Make compiler.properties fall back to prefixed</notextile>
[fab1ffc](https://github.com/scala/scala/commit/fab1ffc) | <notextile>HasSet to HashSet typo fix</notextile>
[92692e6](https://github.com/scala/scala/commit/92692e6) | <notextile>Particular formatting improvement in the spec</notextile>
[d24ad90](https://github.com/scala/scala/commit/d24ad90) | <notextile>spec: fix broken links and anchors, including examples</notextile>
[3b0c71d](https://github.com/scala/scala/commit/3b0c71d) | <notextile>spec: remove trailing whitespace everywhere</notextile>
[bca19f3](https://github.com/scala/scala/commit/bca19f3) | <notextile>spec: fix latex formatting all over the place</notextile>
[6e19162](https://github.com/scala/scala/commit/6e19162) | <notextile>spec: add syntax highlighting for scala code with highlight.js</notextile>
[e11fe9b](https://github.com/scala/scala/commit/e11fe9b) | <notextile>spec: use the yaml title as the HTML title</notextile>
[7c81959](https://github.com/scala/scala/commit/7c81959) | <notextile>SI-8459 fix incorrect positions for incomplete selection trees</notextile>
[17a1abb](https://github.com/scala/scala/commit/17a1abb) | <notextile>SI-8852 Support joint compilation of Java interfaces w. statics</notextile>
[3b35177](https://github.com/scala/scala/commit/3b35177) | <notextile>This ensures that typechecking custom unapplications in silent mode doesn't leak</notextile>
[a8a31e9](https://github.com/scala/scala/commit/a8a31e9) | <notextile>SI-8844 Fix regression with existentials + type aliases</notextile>
[039f3e3](https://github.com/scala/scala/commit/039f3e3) | <notextile>SI-8680  Stream.addString is too eager</notextile>
[1da69e8](https://github.com/scala/scala/commit/1da69e8) | <notextile>SI-8815  mutable.LongMap makes different choices for splitAt vs etc.</notextile>
[c9ec916](https://github.com/scala/scala/commit/c9ec916) | <notextile>SI-8806 Add lower bound check to Any lint</notextile>
[63207e1](https://github.com/scala/scala/commit/63207e1) | <notextile>isAnonymousClass/Function for delambdafy classes is not true</notextile>
[9132efa](https://github.com/scala/scala/commit/9132efa) | <notextile>Address review feedback.</notextile>
[59070cc](https://github.com/scala/scala/commit/59070cc) | <notextile>Remove stale local variables and exception handlers after DCE</notextile>
[01f5435](https://github.com/scala/scala/commit/01f5435) | <notextile>SI-8568 unreachable test now passes in GenBCode</notextile>
[630bd29](https://github.com/scala/scala/commit/630bd29) | <notextile>Clarify why we emit ATHROW after expressions of type Nothing</notextile>
[35c53af](https://github.com/scala/scala/commit/35c53af) | <notextile>Tools to run the compiler in JUnit tests</notextile>
[44b5c26](https://github.com/scala/scala/commit/44b5c26) | <notextile>JUnit tests for dead code elimination.</notextile>
[d3cfbb1](https://github.com/scala/scala/commit/d3cfbb1) | <notextile>-Yopt mulit-choice flag</notextile>
[90781e8](https://github.com/scala/scala/commit/90781e8) | <notextile>Eliminate unreachable code in GenBCode</notextile>
[a3dfb43](https://github.com/scala/scala/commit/a3dfb43) | <notextile>Removed empty class, unused imports</notextile>
[5966a11](https://github.com/scala/scala/commit/5966a11) | <notextile>-Xfundep-materialization =&gt; -Yfundep-materialization</notextile>
[364c8e9](https://github.com/scala/scala/commit/364c8e9) | <notextile>pull request feedback</notextile>
[0c5dd9e](https://github.com/scala/scala/commit/0c5dd9e) | <notextile>[backport] SI-7470 implements fundep materialization</notextile>
[b416dc6](https://github.com/scala/scala/commit/b416dc6) | <notextile>SI-8817 Correct scaladoc for scala.sys.addShutdownHook</notextile>
[9ba986e](https://github.com/scala/scala/commit/9ba986e) | <notextile>moves the impl of quasiquotes to scala.reflect</notextile>
[24ccfa0](https://github.com/scala/scala/commit/24ccfa0) | <notextile>SI-8398 - unused warning reports lazy val as a method</notextile>
[e01b461](https://github.com/scala/scala/commit/e01b461) | <notextile>[nomaster] SI-8764 fix return type of case class productElement under Xexperimen</notextile>
[8e531d3](https://github.com/scala/scala/commit/8e531d3) | <notextile>Fix broken URL for MathJAX Javascript dependency.</notextile>
[9519eb0](https://github.com/scala/scala/commit/9519eb0) | <notextile>SI-5254 running an empty scala script should succeed</notextile>
[3d64dee](https://github.com/scala/scala/commit/3d64dee) | <notextile>SI-8474  Inconsistent behavior of patch method</notextile>
[1ea6843](https://github.com/scala/scala/commit/1ea6843) | <notextile>Make MultiChoiceSetting.compute easier to understand</notextile>
[861ad72](https://github.com/scala/scala/commit/861ad72) | <notextile>Address PR feedback, fix MultiChoiceSetting.contains</notextile>
[7655a70](https://github.com/scala/scala/commit/7655a70) | <notextile>Use Enumeration for MultiChoiceSetting</notextile>
[b562d96](https://github.com/scala/scala/commit/b562d96) | <notextile>-Ystatistics accepts a list of phases, cleanups in MultiChoiceSetting</notextile>
[0a6dd09](https://github.com/scala/scala/commit/0a6dd09) | <notextile>Fix assertThrows, and the behaviors that it shadowed</notextile>
[f324ca5](https://github.com/scala/scala/commit/f324ca5) | <notextile>SI-8803 generate super accessor for super[A], if A is outer superclass</notextile>
[e9a6fbb](https://github.com/scala/scala/commit/e9a6fbb) | <notextile>SI-8786 disable part of test that's failing the jdk8 build</notextile>
[984025b](https://github.com/scala/scala/commit/984025b) | <notextile>SI-8498 @compileTimeOnly should be aware of bridge methods.</notextile>
[2b5ac5a](https://github.com/scala/scala/commit/2b5ac5a) | <notextile>SI-8810 scaladoc: fixed code block indentation normalization</notextile>
[d153cee](https://github.com/scala/scala/commit/d153cee) | <notextile>SI-8113 allow a newline between a link target and title</notextile>
[6076d61](https://github.com/scala/scala/commit/6076d61) | <notextile>SI-8410 Summarize if warnings and not disabled</notextile>
[7f21475](https://github.com/scala/scala/commit/7f21475) | <notextile>SI-8410 Don't warn fatally on disabled flag</notextile>
[8876227](https://github.com/scala/scala/commit/8876227) | <notextile>[backport] SI-8787 Backport Regex doc</notextile>
[36379cf](https://github.com/scala/scala/commit/36379cf) | <notextile>[backport] transformers no longer ignore UnApply.fun</notextile>
[fceae70](https://github.com/scala/scala/commit/fceae70) | <notextile>[backport] SI-7710 fix memory performance of RegexParsers in jdk7u6+</notextile>
[b6c00d6](https://github.com/scala/scala/commit/b6c00d6) | <notextile>Prevent SI-8314 by adding a test</notextile>
[099a426](https://github.com/scala/scala/commit/099a426) | <notextile>SI-8589 Performance improvement for ArrayCharSequence.toString</notextile>
[997ef56](https://github.com/scala/scala/commit/997ef56) | <notextile>SI-8828 fix regression in Xlint visibility warning for sealed classes</notextile>
[20daa00](https://github.com/scala/scala/commit/20daa00) | <notextile>SI-7931 fix Dscala.repl.vids and some string interpolation typos</notextile>
[f6467d0](https://github.com/scala/scala/commit/f6467d0) | <notextile>SI-8823 Exclude specialized methods from extension method rewrite</notextile>
[2256753](https://github.com/scala/scala/commit/2256753) | <notextile>Small cleanup in toTypeKind.</notextile>
[e310746](https://github.com/scala/scala/commit/e310746) | <notextile>Fix InnerClass / EnclosingMethod attributes</notextile>
[2606bd9](https://github.com/scala/scala/commit/2606bd9) | <notextile>Don't traverse all trees in delambdafy phase if delambdafy:inline</notextile>
[3bcad9a](https://github.com/scala/scala/commit/3bcad9a) | <notextile>Fix indentation in delambdafy</notextile>
[2229583](https://github.com/scala/scala/commit/2229583) | <notextile>Integrate CoreBTypes by composition (not inheritance), non-var fields</notextile>
[53437e6](https://github.com/scala/scala/commit/53437e6) | <notextile>Minor cleanups, integrating review feedback</notextile>
[c3752d7](https://github.com/scala/scala/commit/c3752d7) | <notextile>Add the ACC_DEPRECATED flag in javaFlags, instead of each call site.</notextile>
[f73f026](https://github.com/scala/scala/commit/f73f026) | <notextile>Remove Tracked, add type information to ClassBType</notextile>
[bdc3ff9](https://github.com/scala/scala/commit/bdc3ff9) | <notextile>Set currentUnit while generating bytecode.</notextile>
[9276a12](https://github.com/scala/scala/commit/9276a12) | <notextile>SI-8627 make Stream.filterNot non-eager</notextile>
[756e551](https://github.com/scala/scala/commit/756e551) | <notextile>SI-5691 lint warning when a type parameter shadows an existing type.</notextile>
[a16a635](https://github.com/scala/scala/commit/a16a635) | <notextile>SI-8793 Fix patmat regression with extractors, existentials</notextile>
[ca9f64d](https://github.com/scala/scala/commit/ca9f64d) | <notextile>Encapsulate creating SilentResultValue/SilentTypeError.</notextile>
[e21096f](https://github.com/scala/scala/commit/e21096f) | <notextile>Separate statistics from functional code; optimize.</notextile>
[3a4c6db](https://github.com/scala/scala/commit/3a4c6db) | <notextile>Towards more privacy for _reporter.</notextile>
[e131424](https://github.com/scala/scala/commit/e131424) | <notextile>Work around weird AbstractMethodError</notextile>
[5d00b59](https://github.com/scala/scala/commit/5d00b59) | <notextile>Cleanup ContextReporter hierarchy</notextile>
[9707e1d](https://github.com/scala/scala/commit/9707e1d) | <notextile>s/reportBuffer/reporter</notextile>
[258d95c](https://github.com/scala/scala/commit/258d95c) | <notextile>Remove dead code: mode setting</notextile>
[725c5c9](https://github.com/scala/scala/commit/725c5c9) | <notextile>Encapsulate reporting mode as class of reportBuffer.</notextile>
[f0fdcc0](https://github.com/scala/scala/commit/f0fdcc0) | <notextile>Clarify that ThrowErrors is the default</notextile>
[ff7c467](https://github.com/scala/scala/commit/ff7c467) | <notextile>repl depends on jline-2.12</notextile>
[cdee835](https://github.com/scala/scala/commit/cdee835) | <notextile>Configure `checking` mode in `rootContext`.</notextile>
[064bc5e](https://github.com/scala/scala/commit/064bc5e) | <notextile>Remove `def error(pos: Position, err: Throwable)`</notextile>
[43da1db](https://github.com/scala/scala/commit/43da1db) | <notextile>Introduce `AbsAmbiguousTypeError`.</notextile>
[c6bee64](https://github.com/scala/scala/commit/c6bee64) | <notextile>Untangle reporting of ambiguous errors.</notextile>
[5e62c59](https://github.com/scala/scala/commit/5e62c59) | <notextile>Reduce Context iface: remove dead code.</notextile>
[03baff7](https://github.com/scala/scala/commit/03baff7) | <notextile>Reduce Context iface: make contextMode mutators private.</notextile>
[1f1c131](https://github.com/scala/scala/commit/1f1c131) | <notextile>Reduce Context iface: inline internally.</notextile>
[dc955c9](https://github.com/scala/scala/commit/dc955c9) | <notextile>Reduce Context iface: encapsulate buffer manipulation.</notextile>
[474141f](https://github.com/scala/scala/commit/474141f) | <notextile>Reduce Context iface: inline complex forwarders.</notextile>
[338cfff](https://github.com/scala/scala/commit/338cfff) | <notextile>Reduce Context iface: inline trivial forwarders.</notextile>
[ecda101](https://github.com/scala/scala/commit/ecda101) | <notextile>Make more explicit that TypeError is being thrown.</notextile>
[dda3f24](https://github.com/scala/scala/commit/dda3f24) | <notextile>Rely less on intricacies of `contextMode`-based reporting.</notextile>
[b8503f6](https://github.com/scala/scala/commit/b8503f6) | <notextile>Restrict `contextMode` fiddling to `Context`</notextile>
[543bb3e](https://github.com/scala/scala/commit/543bb3e) | <notextile>Encapsulate `TryTwice` as a class, move to `Context`.</notextile>
[ac6dcad](https://github.com/scala/scala/commit/ac6dcad) | <notextile>Extract the `makeNonSilent` method.</notextile>
[a740746](https://github.com/scala/scala/commit/a740746) | <notextile>Clarify divergentError comment</notextile>
[3fd4f47](https://github.com/scala/scala/commit/3fd4f47) | <notextile>Add errorCount to wean partest off Reporter$Severity</notextile>
[5895e10](https://github.com/scala/scala/commit/5895e10) | <notextile>Concretize diagnostics: one boolean suffices for now.</notextile>
[67651e2](https://github.com/scala/scala/commit/67651e2) | <notextile>Simplify (ambiguous) error issuing.</notextile>
[2aa1f1e](https://github.com/scala/scala/commit/2aa1f1e) | <notextile>Remove another redundant forwarder</notextile>
[64ebac2](https://github.com/scala/scala/commit/64ebac2) | <notextile>Move more parsing hooks out of reporting.</notextile>
[638b4c3](https://github.com/scala/scala/commit/638b4c3) | <notextile>Regularize `comment` hook method</notextile>
[4b333fb](https://github.com/scala/scala/commit/4b333fb) | <notextile>Minor cleanup in AbstractReporter.</notextile>
[8f25a51](https://github.com/scala/scala/commit/8f25a51) | <notextile>Eclipse project: repl depends on compiler/lib projects</notextile>
[066d102](https://github.com/scala/scala/commit/066d102) | <notextile>SI-5227 make fsc notify its client upon compiler crash</notextile>
[6f54b1d](https://github.com/scala/scala/commit/6f54b1d) | <notextile>SI-1264 fsc compiler output should go to stderr, like scalac</notextile>
[42f8a96](https://github.com/scala/scala/commit/42f8a96) | <notextile>Add support for running a specific Junit test/method.</notextile>
[f98c53c](https://github.com/scala/scala/commit/f98c53c) | <notextile>SI-8787 Addressing feedback, additional periods.</notextile>
[0e26910](https://github.com/scala/scala/commit/0e26910) | <notextile>SI-8787 Update doc for Regex</notextile>
[cd2394e](https://github.com/scala/scala/commit/cd2394e) | <notextile>SI-8787 If you love nulls, so does Regex</notextile>
[606a553](https://github.com/scala/scala/commit/606a553) | <notextile>SI-8512 Infer Any for the q</notextile>
[2e3583b](https://github.com/scala/scala/commit/2e3583b) | <notextile>SI-8512 Infer a type for f&quot;$args&quot;</notextile>
[0270972](https://github.com/scala/scala/commit/0270972) | <notextile>test for InnerClass and EnclosingMethod attributes</notextile>
[bb2c246](https://github.com/scala/scala/commit/bb2c246) | <notextile>a few missing deprecations in proxy collections.</notextile>
[ed9dfee](https://github.com/scala/scala/commit/ed9dfee) | <notextile>SI-4563 friendlier behavior for Ctrl+D in the REPL</notextile>
[eff9a58](https://github.com/scala/scala/commit/eff9a58) | <notextile>SI-6476 Unitize ALL the procedures!</notextile>
[ccbb84b](https://github.com/scala/scala/commit/ccbb84b) | <notextile>SI-6476 Unitize procedures, readability</notextile>
[b4f5067](https://github.com/scala/scala/commit/b4f5067) | <notextile>SI-6476 Documentation</notextile>
[abb58dc](https://github.com/scala/scala/commit/abb58dc) | <notextile>SI-6476 Improve error on escapement</notextile>
[7717244](https://github.com/scala/scala/commit/7717244) | <notextile>[backport] Rewrite explanation of doc-source-url option more clearly, and fix en</notextile>
[40beefb](https://github.com/scala/scala/commit/40beefb) | <notextile>[backport] Update javadoc tag to new scaladoc tags.</notextile>
[5cb672b](https://github.com/scala/scala/commit/5cb672b) | <notextile>[backport] Fixes cut sentences in the generated scaladocs</notextile>
[2b78c32](https://github.com/scala/scala/commit/2b78c32) | <notextile>[backport] Refactored example to Option.collect method.</notextile>
[cb2cfc0](https://github.com/scala/scala/commit/cb2cfc0) | <notextile>[backport] Fixed mathematically wrong statement in the documentation of scala.ma</notextile>
[b70b074](https://github.com/scala/scala/commit/b70b074) | <notextile>[backport] Fix scaladoc typo</notextile>
[e54b772](https://github.com/scala/scala/commit/e54b772) | <notextile>[backport] Did not know of the fix for SI-8672. Followed the recommendation give</notextile>
[9ef3d29](https://github.com/scala/scala/commit/9ef3d29) | <notextile>[backport] Fixes first sentence delimiters</notextile>
[3b7a989](https://github.com/scala/scala/commit/3b7a989) | <notextile>[backport] [scaladoc] Changed align of example code to Option.contains and Optio</notextile>
[1c96ed5](https://github.com/scala/scala/commit/1c96ed5) | <notextile>[backport] SI-8705   Added example to Option.contains method.</notextile>
[f18db59](https://github.com/scala/scala/commit/f18db59) | <notextile>[backport] Added example to Option.collect method.</notextile>
[c52bceb](https://github.com/scala/scala/commit/c52bceb) | <notextile>[backport] Change StringContext scaladoc</notextile>
[730f311](https://github.com/scala/scala/commit/730f311) | <notextile>[backport] som-snytt's update to wording</notextile>
[165d21e](https://github.com/scala/scala/commit/165d21e) | <notextile>[backport] Revised comment to appeal to lchoran's and som-snytts comments</notextile>
[70d8aaa](https://github.com/scala/scala/commit/70d8aaa) | <notextile>[backport] Update PartialFunction documentation to include the fact that the cal</notextile>
[f7e7f70](https://github.com/scala/scala/commit/f7e7f70) | <notextile>[backport] Update PartialFunction documentation to include the fact that the cal</notextile>
[5321b1b](https://github.com/scala/scala/commit/5321b1b) | <notextile>[backport] Make comment consistent with code</notextile>
[7bcb316](https://github.com/scala/scala/commit/7bcb316) | <notextile>[backport] Update AnyVals.scala</notextile>
[199ae26](https://github.com/scala/scala/commit/199ae26) | <notextile>Orphan check file</notextile>
[9e13f7e](https://github.com/scala/scala/commit/9e13f7e) | <notextile>remove jline sources from src/ now that we use a released jline.</notextile>
[1f3319c](https://github.com/scala/scala/commit/1f3319c) | <notextile>SI-8781 Avoid double-expansion under -Ymacro-expand:discard</notextile>
[ee665e2](https://github.com/scala/scala/commit/ee665e2) | <notextile>Also update jline.version when update.versions is set during build</notextile>
[c436048](https://github.com/scala/scala/commit/c436048) | <notextile>Better error message than 'bad symbolic reference'.</notextile>
[ef427b2](https://github.com/scala/scala/commit/ef427b2) | <notextile>Bump versions for Scala 2.11.2</notextile>
[0f5580e](https://github.com/scala/scala/commit/0f5580e) | <notextile>Fixed incorrect example in StringContext.raw doc</notextile>
[7a1863e](https://github.com/scala/scala/commit/7a1863e) | <notextile>Remove &quot;throws InvalidEscapeException&quot; from StringContext.raw doc</notextile>
[41507ba](https://github.com/scala/scala/commit/41507ba) | <notextile>Remove invalidation from Global.scala</notextile>
[a8c88b1](https://github.com/scala/scala/commit/a8c88b1) | <notextile>Documentation for isModuleClass</notextile>
[ee706b8](https://github.com/scala/scala/commit/ee706b8) | <notextile>Support writing classfile of version 52</notextile>
[0ccdb15](https://github.com/scala/scala/commit/0ccdb15) | <notextile>Clean up and document some usages of flags in the backend</notextile>
[1bed39a](https://github.com/scala/scala/commit/1bed39a) | <notextile>Pattern matching on ClassBType extracts the inernalName</notextile>
[57de87e](https://github.com/scala/scala/commit/57de87e) | <notextile>Remove unnessecary check when computing InnerClass attribute flags</notextile>
[91c7be1](https://github.com/scala/scala/commit/91c7be1) | <notextile>Comment summarizing the JVM spec for InnerClass / EnclosingMethod</notextile>
[4c2217e](https://github.com/scala/scala/commit/4c2217e) | <notextile>Minor cleanups and comments in GenBCode</notextile>
[926585a](https://github.com/scala/scala/commit/926585a) | <notextile>SI-8743 Fix crasher with poly-methods annotated with @varargs</notextile>


      