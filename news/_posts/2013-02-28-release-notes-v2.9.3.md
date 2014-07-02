---
layout: news
post-type: announcement
title: "Scala 2.9.3 is now available!"
permalink: /news/2.9.3
---
We are happy to announce the final release of 2.9.3 in the Scala 2.9.x maintenance series!

This release includes the following improvements:

  * a backport of the implementation of SIP-14 to Scala 2.9,
  * numerous fixes that are leveraged by the Scala IDE to improve stability and responsiveness,
  * compiler fixes to allow faster incremental compilation.

<!--break-->

### Scala IDE for Eclipse

You may install the Scala IDE 3.0-RC1 for Scala 2.9.3 through one of the following update-sites:

  * [for Eclipse 3.7 (Indigo)](http://download.scala-ide.org/sdk/e37/scala29/dev/site/)
  * [for Eclipse 3.8/4.2 (Juno)](http://download.scala-ide.org/sdk/e38/scala29/dev/site/)


#### A big thank you to all the contributors!

\# | Author
---: | ---
15 | <notextile>Philipp Haller</notextile>
7 | <notextile>Adriaan Moors</notextile>
7 | <notextile>Martin Odersky</notextile>
6 | <notextile>Iulian Dragos</notextile>
5 | <notextile>Paolo Giarrusso</notextile>
4 | <notextile>James Iry</notextile>
3 | <notextile>Paul Phillips</notextile>
3 | <notextile>Josh Suereth</notextile>
1 | <notextile>David Hall</notextile>
1 | <notextile>Lukas Rytz</notextile>
1 | <notextile>Mirco Dotta</notextile>
1 | <notextile>Viktor Klang</notextile>
1 | <notextile>Miguel Garcia</notextile>
1 | <notextile>Nada Amin</notextile>
1 | <notextile>smessmer</notextile>



#### Commits and the issues they fixed since v2.9.2

Issue(s) | Commit | Message
--- | --- | ---
[https://issues.scala-lang.org/browse/SI-6932](SI-6932) | [https://github.com/scala/scala/commit/4897063](4897063) | <notextile>SI-6932 Remove Batchable trait, minor clean-ups, update build</notextile>
[https://issues.scala-lang.org/browse/SI-6932](SI-6932) | [https://github.com/scala/scala/commit/5713c1b](5713c1b) | <notextile> Fix SI-6932 by enabling linearization of callback execution for the internal execution context of Future</notextile>
[https://issues.scala-lang.org/browse/SI-6766](SI-6766) | [https://github.com/scala/scala/commit/0bde246](0bde246) | <notextile>SI-6766 Create a continuations project in eclipse</notextile>
[https://issues.scala-lang.org/browse/SI-6766](SI-6766) | [https://github.com/scala/scala/commit/a802ba9](a802ba9) | <notextile>SI-6766 Makes the -Pcontinuations:enable flag a project specific preference</notextile>
[https://issues.scala-lang.org/browse/SI-6536](SI-6536) | [https://github.com/scala/scala/commit/af03afb](af03afb) | <notextile>SI-6536 Cleanup code around determining accessor requirement</notextile>
[https://issues.scala-lang.org/browse/SI-6536](SI-6536) | [https://github.com/scala/scala/commit/2124b9d](2124b9d) | <notextile>SI-6536 Generates super accessors X.super[Y].blah when Y is a class</notextile>
[https://issues.scala-lang.org/browse/SI-5958](SI-5958), [https://issues.scala-lang.org/browse/SI-5958](SI-5958) | [https://github.com/scala/scala/commit/61862d2](61862d2) | <notextile>SIP-14 backport to 2.9.x</notextile>
[https://issues.scala-lang.org/browse/SI-6188](SI-6188), [https://issues.scala-lang.org/browse/SI-6188](SI-6188) | [https://github.com/scala/scala/commit/32782cd](32782cd) | <notextile>SI-6188 backport (ICodeReader wrongly ignored exception handlers)</notextile>
[https://issues.scala-lang.org/browse/SI-5958](SI-5958) | [https://github.com/scala/scala/commit/98b16a6](98b16a6) | <notextile>SI-5958 This deserves a stable type - backport to 2.9.x</notextile>
[https://issues.scala-lang.org/browse/SI-6692](SI-6692), [https://issues.scala-lang.org/browse/SI-6692](SI-6692) | [https://github.com/scala/scala/commit/c17b9b4](c17b9b4) | <notextile>SI-6692 pickle one more flag bit: EXISTENTIAL</notextile>
[https://issues.scala-lang.org/browse/SI-5314](SI-5314) | [https://github.com/scala/scala/commit/2c00346](2c00346) | <notextile>SI-5314 - CPS transform of return statement fails</notextile>
[https://issues.scala-lang.org/browse/SI-6384](SI-6384) | [https://github.com/scala/scala/commit/1b4af44](1b4af44) | <notextile>SI-6384 - avoid setting owner of function argument explicitly</notextile>
[https://issues.scala-lang.org/browse/SI-6384](SI-6384) | [https://github.com/scala/scala/commit/3281830](3281830) | <notextile>SI-6384 - correct owner of function argument</notextile>
[https://issues.scala-lang.org/browse/SI-6384](SI-6384) | [https://github.com/scala/scala/commit/b3d0a64](b3d0a64) | <notextile>SI-6384 - avoid crash due to optimization in 2.10 CPS plugin</notextile>
[https://issues.scala-lang.org/browse/SI-6458](SI-6458) | [https://github.com/scala/scala/commit/340e28a](340e28a) | <notextile>Deprecated instrumentation API</notextile>
[https://issues.scala-lang.org/browse/SI-6505](SI-6505) | [https://github.com/scala/scala/commit/e90fd5d](e90fd5d) | <notextile>Fixed SI-6505. Respond to ask calls by immediate failure even after compiler shutdown.</notextile>
[https://issues.scala-lang.org/browse/SI-2296](SI-2296), [https://issues.scala-lang.org/browse/SI-6245](SI-6245), [https://issues.scala-lang.org/browse/SI-2296](SI-2296) | [https://github.com/scala/scala/commit/f6a2714](f6a2714) | <notextile>Fix for SI-6245 with workaround for SI-2296.</notextile>
[https://issues.scala-lang.org/browse/SI-2296](SI-2296), [https://issues.scala-lang.org/browse/SI-2296](SI-2296) | [https://github.com/scala/scala/commit/de82f9a](de82f9a) | <notextile>Overcame trait/protected/java limitation.</notextile>
[https://issues.scala-lang.org/browse/SI-5708](SI-5708) | [https://github.com/scala/scala/commit/39d8e5a](39d8e5a) | <notextile>Fix SI-5708. (manually) Cherry-picked from 9d1bc68b78a76a18777a859816bcb1c7f81bf2dd</notextile>
[https://issues.scala-lang.org/browse/SI-4807](SI-4807) | [https://github.com/scala/scala/commit/8e7f44c](8e7f44c) | <notextile>Helping Proxy equal itself.</notextile>
[https://issues.scala-lang.org/browse/SI-5632](SI-5632) | [https://github.com/scala/scala/commit/95f0de0](95f0de0) | <notextile>Fixes SI-5632 (serialization of large HashTables)</notextile>




#### Complete commit list!

sha | Title
---: | ---
[https://github.com/scala/scala/commit/4897063](4897063) | <notextile>SI-6932 Remove Batchable trait, minor clean-ups, update build</notextile>
[https://github.com/scala/scala/commit/5713c1b](5713c1b) | <notextile> Fix SI-6932 by enabling linearization of callback execution for the internal execution context of Future</notextile>
[https://github.com/scala/scala/commit/0bde246](0bde246) | <notextile>SI-6766 Create a continuations project in eclipse</notextile>
[https://github.com/scala/scala/commit/a802ba9](a802ba9) | <notextile>SI-6766 Makes the -Pcontinuations:enable flag a project specific preference</notextile>
[https://github.com/scala/scala/commit/7cd9ce3](7cd9ce3) | <notextile>update mailmap</notextile>
[https://github.com/scala/scala/commit/a224bb7](a224bb7) | <notextile>binary compatibility compensation</notextile>
[https://github.com/scala/scala/commit/af03afb](af03afb) | <notextile>SI-6536 Cleanup code around determining accessor requirement</notextile>
[https://github.com/scala/scala/commit/2124b9d](2124b9d) | <notextile>SI-6536 Generates super accessors X.super[Y].blah when Y is a class</notextile>
[https://github.com/scala/scala/commit/f0bc3f7](f0bc3f7) | <notextile>use consistent scalac args in quick&amp;strap</notextile>
[https://github.com/scala/scala/commit/61862d2](61862d2) | <notextile>SIP-14 backport to 2.9.x</notextile>
[https://github.com/scala/scala/commit/32782cd](32782cd) | <notextile>SI-6188 backport (ICodeReader wrongly ignored exception handlers)</notextile>
[https://github.com/scala/scala/commit/98b16a6](98b16a6) | <notextile>SI-5958 This deserves a stable type - backport to 2.9.x</notextile>
[https://github.com/scala/scala/commit/c17b9b4](c17b9b4) | <notextile>SI-6692 pickle one more flag bit: EXISTENTIAL</notextile>
[https://github.com/scala/scala/commit/b1ed32b](b1ed32b) | <notextile>eclipse project files are now in src/eclipse</notextile>
[https://github.com/scala/scala/commit/f028335](f028335) | <notextile>show developer guidelines on opening pull request</notextile>
[https://github.com/scala/scala/commit/b79e6f2](b79e6f2) | <notextile>Improve doc comment on adaptTypeOfReturn in CPSAnnotationChecker</notextile>
[https://github.com/scala/scala/commit/e25e7ab](e25e7ab) | <notextile>Simplify the adaptation of types of return expressions</notextile>
[https://github.com/scala/scala/commit/007eedf](007eedf) | <notextile>Revert &quot;Add missing cases in tail return transform&quot;</notextile>
[https://github.com/scala/scala/commit/e566ab3](e566ab3) | <notextile>Add missing cases in tail return transform</notextile>
[https://github.com/scala/scala/commit/4c5aa9b](4c5aa9b) | <notextile>Replace CheckCPSMethodTraverser with additional parameter on transformer methods</notextile>
[https://github.com/scala/scala/commit/2c00346](2c00346) | <notextile>SI-5314 - CPS transform of return statement fails</notextile>
[https://github.com/scala/scala/commit/1b4af44](1b4af44) | <notextile>SI-6384 - avoid setting owner of function argument explicitly</notextile>
[https://github.com/scala/scala/commit/3281830](3281830) | <notextile>SI-6384 - correct owner of function argument</notextile>
[https://github.com/scala/scala/commit/b3d0a64](b3d0a64) | <notextile>SI-6384 - avoid crash due to optimization in 2.10 CPS plugin</notextile>
[https://github.com/scala/scala/commit/340e28a](340e28a) | <notextile>Deprecated instrumentation API</notextile>
[https://github.com/scala/scala/commit/e90fd5d](e90fd5d) | <notextile>Fixed SI-6505. Respond to ask calls by immediate failure even after compiler shutdown.</notextile>
[https://github.com/scala/scala/commit/f98198e](f98198e) | <notextile>Fixed instrumentation code so that it can deal with:</notextile>
[https://github.com/scala/scala/commit/ed9e44b](ed9e44b) | <notextile>Changed implementation comments from /** */ to /* */, so ScalaDoc remains reasonable</notextile>
[https://github.com/scala/scala/commit/f6a2714](f6a2714) | <notextile>Fix for SI-6245 with workaround for SI-2296.</notextile>
[https://github.com/scala/scala/commit/be9bab1](be9bab1) | <notextile>Fixes binary repo push for new typesafe repo layouts.</notextile>
[https://github.com/scala/scala/commit/f2caa77](f2caa77) | <notextile>Allow nested calls to `askForResponse` in the presentation compiler.</notextile>
[https://github.com/scala/scala/commit/e8e07aa](e8e07aa) | <notextile>Removed previosuly uncommented code, added more diagnosis output to REPL. (cherry picked from commit bcf1d9a5f5c1d0319b51cd3dcce9ecebdeb12feb)</notextile>
[https://github.com/scala/scala/commit/321d3f5](321d3f5) | <notextile>Made instrumenter more robust by looking at tokens</notextile>
[https://github.com/scala/scala/commit/a082aa2](a082aa2) | <notextile>Removed dead code. (cherry picked from commit c03777b3acb3a4e921a27b58322d198e6d6c58f5)</notextile>
[https://github.com/scala/scala/commit/694037d](694037d) | <notextile>Manual Backport of 3415436b67ae7889a11ce2537576ca49b328aecc.</notextile>
[https://github.com/scala/scala/commit/dc1e21e](dc1e21e) | <notextile>Added more variants to achieve getLinkPos</notextile>
[https://github.com/scala/scala/commit/10c4d82](10c4d82) | <notextile>Two fixes for the worksheet instrumenter</notextile>
[https://github.com/scala/scala/commit/6c54783](6c54783) | <notextile>Backport.</notextile>
[https://github.com/scala/scala/commit/6a8b913](6a8b913) | <notextile>Initial cut at running binary compatibility tests on the 2.9.x series</notextile>
[https://github.com/scala/scala/commit/e3bb6ba](e3bb6ba) | <notextile>Also check that Stream.toSeq gives the right result.</notextile>
[https://github.com/scala/scala/commit/33cdba5](33cdba5) | <notextile>Improve test for Stream.withFilter.{map,flatMap}</notextile>
[https://github.com/scala/scala/commit/15ed4f0](15ed4f0) | <notextile>Cleanup testcase</notextile>
[https://github.com/scala/scala/commit/096a08e](096a08e) | <notextile>Remove commented out code</notextile>
[https://github.com/scala/scala/commit/53130d2](53130d2) | <notextile>Make Stream.withFilter.{map,flatMap} run in constant stack space</notextile>
[https://github.com/scala/scala/commit/4c80b61](4c80b61) | <notextile>worksheet support on 2.9</notextile>
[https://github.com/scala/scala/commit/af26e24](af26e24) | <notextile>Fix for exponential compile time in specialization.</notextile>
[https://github.com/scala/scala/commit/8b8ebaa](8b8ebaa) | <notextile>Revert &quot;Merge pull request #749 from phaller/backport/cps-ticket-1681&quot;</notextile>
[https://github.com/scala/scala/commit/a0ed8c8](a0ed8c8) | <notextile>Backport of fix for CPS ticket 1681</notextile>
[https://github.com/scala/scala/commit/de82f9a](de82f9a) | <notextile>Overcame trait/protected/java limitation.</notextile>
[https://github.com/scala/scala/commit/f0b3613](f0b3613) | <notextile>Removed dead local variable, per @hubertp's comment.</notextile>
[https://github.com/scala/scala/commit/38f114f](38f114f) | <notextile>Don't forget to execute pending interrupt requests when shutting down the presentation compiler.(cherry picked from commit 0d70c22279daa78b3fe58b5ea1be7f87b7079834)</notextile>
[https://github.com/scala/scala/commit/39d8e5a](39d8e5a) | <notextile>Fix SI-5708. (manually) Cherry-picked from 9d1bc68b78a76a18777a859816bcb1c7f81bf2dd</notextile>
[https://github.com/scala/scala/commit/0c99e79](0c99e79) | <notextile>CPS: test case for ticket 1684</notextile>
[https://github.com/scala/scala/commit/ded6e2d](ded6e2d) | <notextile>Backport of the 2.10 continuations plugin to 2.9</notextile>
[https://github.com/scala/scala/commit/8e7f44c](8e7f44c) | <notextile>Helping Proxy equal itself.</notextile>
[https://github.com/scala/scala/commit/4531693](4531693) | <notextile>Bumped build number for future 2.9.x work.</notextile>
[https://github.com/scala/scala/commit/95f0de0](95f0de0) | <notextile>Fixes SI-5632 (serialization of large HashTables)</notextile>


      