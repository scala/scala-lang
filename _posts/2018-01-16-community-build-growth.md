---
layout: blog-detail
post-type: blog
by: Seth Tisue
title: "Scala community build grows to 141 projects, 2.8 million lines of code"
---

We on the Scala team would like to call some attention to a
lesser-known but crucial component of the development effort behind
Scala.  It's called the Scala community build.

## What is it?

It's a collection of open-source Scala code that includes many of the
most-used libraries in the Scala ecosystem.

But it's more than just a big pile of code; we actually compile all of
these codebases, run their test suites, and rewire their builds to
depend on each other, so only freshly built code, built by freshly
built Scala, is involved.

## What's it for?

Having the community build as a backstop and testbed means we can
confidently assess the impact of proposed changes to the Scala
language, compiler, and standard library.

Our Jenkins cluster runs the community build every day against the
latest Scala nightly build.

We often also run the community build against individual pull requests
in the [scala/scala repo](https://github.com/scala/scala) to assess
the impact of the PR and detect regressions before the PR is merged.

## How big is it?

The community build has been growing steadily since 2013.
These days it includes:

### 2.8 million lines of code

That's a lot!

The build uses a
[custom compiler plugin](https://github.com/sethtisue/cloc-plugin) to
make sure that only code that is actually compiled is counted.
[cloc](https://github.com/AlDanial/cloc), the standard tool for counting
lines of code, takes care of filtering out blank lines and comments.

### 141 projects

There are now 141 projects in the community build, as listed in the
[config file](https://github.com/scala/community-builds/blob/2.12.x/configs/project-refs.conf).
They are: acyclic, akka, akka-contrib-extra, akka-http,
akka-http-cors, akka-http-session, akka-persistence-cassandra,
algebra, ammonite, argonaut, atto, autowire, base64, better-files,
blaze, breeze, cachecontrol, case-app, catalysts, cats, cats-effect,
circe, circe-config, conductr-lib, coursier, discipline, dispatch,
doodle, elastic4s, fansi, fastparse, fs2, genjavadoc, geny, gigahorse,
github4s, http4s, http4s-websocket, jackson-module-scala, jawn-fs2,
jawn, json4s, kind-projector, kxbmap-configs, lagom, lift-json,
lightbend-emoji, log4s, machinist, macro-compat, macro-paradise,
meta-paradise, metaconfig, mima, minitest, monix, monocle, multibot,
nscala-time, nyaya, paiges, paradox, parboiled, parboiled2, pcplod,
play, play-doc, play-json, play-webgoat, play-ws, pprint, pureconfig,
sbinary, sbt-io, sbt-librarymanagement, sbt-testng, sbt, sbt-util,
scala-async, scala-collections-laws, scala-continuations,
scala-debugger, scala-gopher, scala-java8-compat, scala-js,
scala-json-ast, scala-logging, scala-parser-combinators,
scala-partest-interface, scala-partest, scala-records,
pscala-refactoring, scala-ssh, scala-stm, scala-swing, scala-xml-quote,
scalacheck, scalacheck-shapeless, scalafix, scalafmt, scalaj-http,
scalachess, scaladex, scalalib, scalameta, scalameter, scalamock,
scalapb-lenses, scalapb, scalaprops, scalariform, scalastyle,
scalatags, scalatest, scalatex, scalaz, scalikejdbc, scallop,
scodec-bits, scodec, scopt, scoverage, semanticdb-sbt, shapeless,
simulacrum, sjson-new, sksamuel-exts, slick, sourcecode, specs2,
spire, spray-json, ssl-config, tut, twirl, twitter-util, twotails,
unfiltered, upickle, utest, zinc.

Interested in adding a library?  See our
[eligibility guidelines](https://github.com/scala/community-builds/wiki/Eligibility).

## Learning more, getting involved

The community build is documented in a
[wiki](https://github.com/scala/community-builds/wiki).  Many of the
questions you might have are already answered there.

If you have a question or want to get involved in the community
build or in open source work on Scala more generally, come to the Scala
contributors [forum](https://contributors.scala-lang.org) or
[chat room](https://gitter.im/scala/contributors).

Especially involved or specialized discussions about the community
build can move to the community build's own
[Gitter room](https://gitter.im/scala/community-builds) and
[GitHub issues](https://github.com/scala/community-builds/issues).

## Credits

The main
[contributors](https://github.com/scala/community-builds/graphs/contributors)
have been myself (Seth Tisue), Adriaan Moors, Grzegorz Kossakowski,
Jason Zaugg, and Toni Cunei, all of whom are current or former
employees of Lightbend.  Toni is also the primary author of
[dbuild](https://github.com/lightbend/dbuild), the meta-build tool
that makes the community build possible.

The community build also couldn't exist without continual help and
advice from the maintainers of the included projects.  You are
marvelous!

## Related projects

You might also like to investigate the nascent
[Dotty community build](https://github.com/lampepfl/dotty-community-build)
and [sbt community build](https://github.com/sbt/sbt-standalone-build).
