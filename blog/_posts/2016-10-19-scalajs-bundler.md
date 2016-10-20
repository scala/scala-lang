---
layout: blog
post-type: blog
by: Julien Richard-Foy
title: "Use npm packages in Scala.js with scalajs-bundler"
---

This week we release the first version of
[*scalajs-bundler*](https://scalacenter.github.io/scalajs-bundler), a tool that makes it easier
to use [npm](https://www.npmjs.com/) packages for [Scala.js](https://www.scala-js.org/)
developers. This effort follows a Scala Center Advisory Board
[proposal](https://scala.epfl.ch/minutes/2016/06/06/may-9-2016.html#proposal-scp-005-ensurance-of-continuity-of-scalajs-project):
“ensurance of continuity of the Scala.js project”.

## Vision

Our goal is to make npm dependencies management as easy as JVM dependencies management.

Basically, if your application needs to use an npm package `foo`, all you have to do is to
add to your build a line like the following:

~~~ scala
npmDependencies in Compile += "foo" -> "1.0"
~~~

And then the usual `run` and `test` sbt commands just work.

## Challenge

npm is the most popular JavaScript package registry. How can Scala.js applications benefit from
the many libraries published on npm? First, this requires to resolve and download these libraries
including their transitive dependencies. Then, the artifacts
need to be *linked* with the Scala.js code. This last step is subtler than it seems
because the linking process varies according to the target execution environment. For instance,
Node.js expects artifacts to conform to the CommonJS format, whereas this format is not compatible
with the execution from a web browser. Furthermore, in the case of web development, when the
application is shipped to production it is better to pack all the code and its dependencies into a
single bundle whose format is executable by web browsers.

## Existing solutions

There are mainly two existing approaches to tackle these challenges: using
[WebJars](http://www.webjars.org/) or combining two build systems (one for the Scala
world and one for the npm world). Both of them require extra efforts from developers
or have limitations (you can find more details about that in scalajs-bundler’s
[documentation](https://scalacenter.github.io/scalajs-bundler/motivation.html)).

## Current state

*scalajs-bundler* leverages the
[CommonJS modules support](https://www.scala-js.org/doc/project/module.html) brought by the latest
Scala.js release.

The 0.1 release contains an sbt plugin that:

- lets developers define their npm dependencies (as in the introductory example),
- keeps track of transitive npm dependencies between Scala.js artifacts,
- fetches these dependencies from the npm registry,
- provides tasks to bundle the application into a single artifact executable by web browsers.

The plugin uses [npm](https://www.npmjs.com/) and [webpack](https://webpack.github.io/)
under the hood.

We also provide a second sbt plugin that integrates with
[sbt-web-scalajs](https://github.com/vmunier/sbt-web-scalajs): it basically turns bundles
into sbt-web assets.

## Future work

There is still some work to do (in particular to shorten the duration of the bundling process
in the context of live reloading workflows) and we expect to release a
[0.2 version](https://github.com/scalacenter/scalajs-bundler/milestone/1) soon, but this
first release is already usable, so don’t hesitate to
[give it a try](https://scalacenter.github.io/scalajs-bundler/getting-started.html), we’d love
to get your feedback!
