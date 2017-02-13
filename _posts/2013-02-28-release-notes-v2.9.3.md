---

category: announcement
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

  * for Eclipse 3.7 (Indigo)
  * for Eclipse 3.8/4.2 (Juno)


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
[SI-6932](https://issues.scala-lang.org/browse/SI-6932) | [4897063](https://github.com/scala/scala/commit/4897063) | <notextile>SI-6932 Remove Batchable trait, minor clean-ups, update build</notextile>
[SI-6932](https://issues.scala-lang.org/browse/SI-6932) | [5713c1b](https://github.com/scala/scala/commit/5713c1b) | <notextile> Fix SI-6932 by enabling linearization of callback execution for the internal execution context of Future</notextile>
[SI-6766](https://issues.scala-lang.org/browse/SI-6766) | [0bde246](https://github.com/scala/scala/commit/0bde246) | <notextile>SI-6766 Create a continuations project in eclipse</notextile>
[SI-6766](https://issues.scala-lang.org/browse/SI-6766) | [a802ba9](https://github.com/scala/scala/commit/a802ba9) | <notextile>SI-6766 Makes the -Pcontinuations:enable flag a project specific preference</notextile>
[SI-6536](https://issues.scala-lang.org/browse/SI-6536) | [af03afb](https://github.com/scala/scala/commit/af03afb) | <notextile>SI-6536 Cleanup code around determining accessor requirement</notextile>
[SI-6536](https://issues.scala-lang.org/browse/SI-6536) | [2124b9d](https://github.com/scala/scala/commit/2124b9d) | <notextile>SI-6536 Generates super accessors X.super[Y].blah when Y is a class</notextile>
[SI-5958](https://issues.scala-lang.org/browse/SI-5958), [SI-5958](https://issues.scala-lang.org/browse/SI-5958) | [61862d2](https://github.com/scala/scala/commit/61862d2) | <notextile>SIP-14 backport to 2.9.x</notextile>
[SI-6188](https://issues.scala-lang.org/browse/SI-6188), [SI-6188](https://issues.scala-lang.org/browse/SI-6188) | [32782cd](https://github.com/scala/scala/commit/32782cd) | <notextile>SI-6188 backport (ICodeReader wrongly ignored exception handlers)</notextile>
[SI-5958](https://issues.scala-lang.org/browse/SI-5958) | [98b16a6](https://github.com/scala/scala/commit/98b16a6) | <notextile>SI-5958 This deserves a stable type - backport to 2.9.x</notextile>
[SI-6692](https://issues.scala-lang.org/browse/SI-6692), [SI-6692](https://issues.scala-lang.org/browse/SI-6692) | [c17b9b4](https://github.com/scala/scala/commit/c17b9b4) | <notextile>SI-6692 pickle one more flag bit: EXISTENTIAL</notextile>
[SI-5314](https://issues.scala-lang.org/browse/SI-5314) | [2c00346](https://github.com/scala/scala/commit/2c00346) | <notextile>SI-5314 - CPS transform of return statement fails</notextile>
[SI-6384](https://issues.scala-lang.org/browse/SI-6384) | [1b4af44](https://github.com/scala/scala/commit/1b4af44) | <notextile>SI-6384 - avoid setting owner of function argument explicitly</notextile>
[SI-6384](https://issues.scala-lang.org/browse/SI-6384) | [3281830](https://github.com/scala/scala/commit/3281830) | <notextile>SI-6384 - correct owner of function argument</notextile>
[SI-6384](https://issues.scala-lang.org/browse/SI-6384) | [b3d0a64](https://github.com/scala/scala/commit/b3d0a64) | <notextile>SI-6384 - avoid crash due to optimization in 2.10 CPS plugin</notextile>
[SI-6458](https://issues.scala-lang.org/browse/SI-6458) | [340e28a](https://github.com/scala/scala/commit/340e28a) | <notextile>Deprecated instrumentation API</notextile>
[SI-6505](https://issues.scala-lang.org/browse/SI-6505) | [e90fd5d](https://github.com/scala/scala/commit/e90fd5d) | <notextile>Fixed SI-6505. Respond to ask calls by immediate failure even after compiler shutdown.</notextile>
[SI-2296](https://issues.scala-lang.org/browse/SI-2296), [SI-6245](https://issues.scala-lang.org/browse/SI-6245), [SI-2296](https://issues.scala-lang.org/browse/SI-2296) | [f6a2714](https://github.com/scala/scala/commit/f6a2714) | <notextile>Fix for SI-6245 with workaround for SI-2296.</notextile>
[SI-2296](https://issues.scala-lang.org/browse/SI-2296), [SI-2296](https://issues.scala-lang.org/browse/SI-2296) | [de82f9a](https://github.com/scala/scala/commit/de82f9a) | <notextile>Overcame trait/protected/java limitation.</notextile>
[SI-5708](https://issues.scala-lang.org/browse/SI-5708) | [39d8e5a](https://github.com/scala/scala/commit/39d8e5a) | <notextile>Fix SI-5708. (manually) Cherry-picked from 9d1bc68b78a76a18777a859816bcb1c7f81bf2dd</notextile>
[SI-4807](https://issues.scala-lang.org/browse/SI-4807) | [8e7f44c](https://github.com/scala/scala/commit/8e7f44c) | <notextile>Helping Proxy equal itself.</notextile>
[SI-5632](https://issues.scala-lang.org/browse/SI-5632) | [95f0de0](https://github.com/scala/scala/commit/95f0de0) | <notextile>Fixes SI-5632 (serialization of large HashTables)</notextile>




#### Complete commit list!

sha | Title
---: | ---
[4897063](https://github.com/scala/scala/commit/4897063) | <notextile>SI-6932 Remove Batchable trait, minor clean-ups, update build</notextile>
[5713c1b](https://github.com/scala/scala/commit/5713c1b) | <notextile> Fix SI-6932 by enabling linearization of callback execution for the internal execution context of Future</notextile>
[0bde246](https://github.com/scala/scala/commit/0bde246) | <notextile>SI-6766 Create a continuations project in eclipse</notextile>
[a802ba9](https://github.com/scala/scala/commit/a802ba9) | <notextile>SI-6766 Makes the -Pcontinuations:enable flag a project specific preference</notextile>
[7cd9ce3](https://github.com/scala/scala/commit/7cd9ce3) | <notextile>update mailmap</notextile>
[a224bb7](https://github.com/scala/scala/commit/a224bb7) | <notextile>binary compatibility compensation</notextile>
[af03afb](https://github.com/scala/scala/commit/af03afb) | <notextile>SI-6536 Cleanup code around determining accessor requirement</notextile>
[2124b9d](https://github.com/scala/scala/commit/2124b9d) | <notextile>SI-6536 Generates super accessors X.super[Y].blah when Y is a class</notextile>
[f0bc3f7](https://github.com/scala/scala/commit/f0bc3f7) | <notextile>use consistent scalac args in quick&amp;strap</notextile>
[61862d2](https://github.com/scala/scala/commit/61862d2) | <notextile>SIP-14 backport to 2.9.x</notextile>
[32782cd](https://github.com/scala/scala/commit/32782cd) | <notextile>SI-6188 backport (ICodeReader wrongly ignored exception handlers)</notextile>
[98b16a6](https://github.com/scala/scala/commit/98b16a6) | <notextile>SI-5958 This deserves a stable type - backport to 2.9.x</notextile>
[c17b9b4](https://github.com/scala/scala/commit/c17b9b4) | <notextile>SI-6692 pickle one more flag bit: EXISTENTIAL</notextile>
[b1ed32b](https://github.com/scala/scala/commit/b1ed32b) | <notextile>eclipse project files are now in src/eclipse</notextile>
[f028335](https://github.com/scala/scala/commit/f028335) | <notextile>show developer guidelines on opening pull request</notextile>
[b79e6f2](https://github.com/scala/scala/commit/b79e6f2) | <notextile>Improve doc comment on adaptTypeOfReturn in CPSAnnotationChecker</notextile>
[e25e7ab](https://github.com/scala/scala/commit/e25e7ab) | <notextile>Simplify the adaptation of types of return expressions</notextile>
[007eedf](https://github.com/scala/scala/commit/007eedf) | <notextile>Revert &quot;Add missing cases in tail return transform&quot;</notextile>
[e566ab3](https://github.com/scala/scala/commit/e566ab3) | <notextile>Add missing cases in tail return transform</notextile>
[4c5aa9b](https://github.com/scala/scala/commit/4c5aa9b) | <notextile>Replace CheckCPSMethodTraverser with additional parameter on transformer methods</notextile>
[2c00346](https://github.com/scala/scala/commit/2c00346) | <notextile>SI-5314 - CPS transform of return statement fails</notextile>
[1b4af44](https://github.com/scala/scala/commit/1b4af44) | <notextile>SI-6384 - avoid setting owner of function argument explicitly</notextile>
[3281830](https://github.com/scala/scala/commit/3281830) | <notextile>SI-6384 - correct owner of function argument</notextile>
[b3d0a64](https://github.com/scala/scala/commit/b3d0a64) | <notextile>SI-6384 - avoid crash due to optimization in 2.10 CPS plugin</notextile>
[340e28a](https://github.com/scala/scala/commit/340e28a) | <notextile>Deprecated instrumentation API</notextile>
[e90fd5d](https://github.com/scala/scala/commit/e90fd5d) | <notextile>Fixed SI-6505. Respond to ask calls by immediate failure even after compiler shutdown.</notextile>
[f98198e](https://github.com/scala/scala/commit/f98198e) | <notextile>Fixed instrumentation code so that it can deal with:</notextile>
[ed9e44b](https://github.com/scala/scala/commit/ed9e44b) | <notextile>Changed implementation comments from /** */ to /* */, so ScalaDoc remains reasonable</notextile>
[f6a2714](https://github.com/scala/scala/commit/f6a2714) | <notextile>Fix for SI-6245 with workaround for SI-2296.</notextile>
[be9bab1](https://github.com/scala/scala/commit/be9bab1) | <notextile>Fixes binary repo push for new typesafe repo layouts.</notextile>
[f2caa77](https://github.com/scala/scala/commit/f2caa77) | <notextile>Allow nested calls to `askForResponse` in the presentation compiler.</notextile>
[e8e07aa](https://github.com/scala/scala/commit/e8e07aa) | <notextile>Removed previosuly uncommented code, added more diagnosis output to REPL. (cherry picked from commit bcf1d9a5f5c1d0319b51cd3dcce9ecebdeb12feb)</notextile>
[321d3f5](https://github.com/scala/scala/commit/321d3f5) | <notextile>Made instrumenter more robust by looking at tokens</notextile>
[a082aa2](https://github.com/scala/scala/commit/a082aa2) | <notextile>Removed dead code. (cherry picked from commit c03777b3acb3a4e921a27b58322d198e6d6c58f5)</notextile>
[694037d](https://github.com/scala/scala/commit/694037d) | <notextile>Manual Backport of 3415436b67ae7889a11ce2537576ca49b328aecc.</notextile>
[dc1e21e](https://github.com/scala/scala/commit/dc1e21e) | <notextile>Added more variants to achieve getLinkPos</notextile>
[10c4d82](https://github.com/scala/scala/commit/10c4d82) | <notextile>Two fixes for the worksheet instrumenter</notextile>
[6c54783](https://github.com/scala/scala/commit/6c54783) | <notextile>Backport.</notextile>
[6a8b913](https://github.com/scala/scala/commit/6a8b913) | <notextile>Initial cut at running binary compatibility tests on the 2.9.x series</notextile>
[e3bb6ba](https://github.com/scala/scala/commit/e3bb6ba) | <notextile>Also check that Stream.toSeq gives the right result.</notextile>
[33cdba5](https://github.com/scala/scala/commit/33cdba5) | <notextile>Improve test for Stream.withFilter.{map,flatMap}</notextile>
[15ed4f0](https://github.com/scala/scala/commit/15ed4f0) | <notextile>Cleanup testcase</notextile>
[096a08e](https://github.com/scala/scala/commit/096a08e) | <notextile>Remove commented out code</notextile>
[53130d2](https://github.com/scala/scala/commit/53130d2) | <notextile>Make Stream.withFilter.{map,flatMap} run in constant stack space</notextile>
[4c80b61](https://github.com/scala/scala/commit/4c80b61) | <notextile>worksheet support on 2.9</notextile>
[af26e24](https://github.com/scala/scala/commit/af26e24) | <notextile>Fix for exponential compile time in specialization.</notextile>
[8b8ebaa](https://github.com/scala/scala/commit/8b8ebaa) | <notextile>Revert &quot;Merge pull request #749 from phaller/backport/cps-ticket-1681&quot;</notextile>
[a0ed8c8](https://github.com/scala/scala/commit/a0ed8c8) | <notextile>Backport of fix for CPS ticket 1681</notextile>
[de82f9a](https://github.com/scala/scala/commit/de82f9a) | <notextile>Overcame trait/protected/java limitation.</notextile>
[f0b3613](https://github.com/scala/scala/commit/f0b3613) | <notextile>Removed dead local variable, per @hubertp's comment.</notextile>
[38f114f](https://github.com/scala/scala/commit/38f114f) | <notextile>Don't forget to execute pending interrupt requests when shutting down the presentation compiler.(cherry picked from commit 0d70c22279daa78b3fe58b5ea1be7f87b7079834)</notextile>
[39d8e5a](https://github.com/scala/scala/commit/39d8e5a) | <notextile>Fix SI-5708. (manually) Cherry-picked from 9d1bc68b78a76a18777a859816bcb1c7f81bf2dd</notextile>
[0c99e79](https://github.com/scala/scala/commit/0c99e79) | <notextile>CPS: test case for ticket 1684</notextile>
[ded6e2d](https://github.com/scala/scala/commit/ded6e2d) | <notextile>Backport of the 2.10 continuations plugin to 2.9</notextile>
[8e7f44c](https://github.com/scala/scala/commit/8e7f44c) | <notextile>Helping Proxy equal itself.</notextile>
[4531693](https://github.com/scala/scala/commit/4531693) | <notextile>Bumped build number for future 2.9.x work.</notextile>
[95f0de0](https://github.com/scala/scala/commit/95f0de0) | <notextile>Fixes SI-5632 (serialization of large HashTables)</notextile>
