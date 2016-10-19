---
layout: blog
post-type: blog
by: Julien Richard-Foy
title: "scalajs-bundler has been released"
---

This week we have released a first version of [`scalajs-bundler`](https://scalacenter.github.io/scalajs-bundler), a tool aiming to provide an integrated developer experience for
[Scala.js](https://www.scala-js.org/) projects that use [npm](https://www.npmjs.com/) packages.

## Motivation

npm is the most popular JavaScript package registry. How can Scala.js applications benefit from
the many libraries published on npm? First, this requires to resolve these libraries, as well as
their transitive dependencies, from the npm registry and to download them. Then, the artifacts
need to be somehow “linked” with the Scala.js code. This latter step is more subtle than it seems
because the linking process might vary according to the target execution environment. For instance,
Node.js expects artifacts to be conform to the CommonJS format, whereas this format is not compatible
with the execution from a Web browser. Furthermore, in the case of Web development, when the
application is shipped to production it is better to pack all the code and its dependencies into a
single bundle whose format is executable by Web browsers.

## Existing solutions

There are mainly two existing approaches to tackle these challenges: using
[WebJars](http://www.webjars.org/) or combining two build systems (one for the Scala
world and one for the npm world). Both of them require extra efforts from developers
or have limitations (you can find more details about that in scalajs-bundler’s
[documentation](https://scalacenter.github.io/scalajs-bundler/motivation.html)).

## Vision, current state and future work

The last release of Scala.js brought support for
[CommonJS modules](https://www.scala-js.org/doc/project/module.html), thus opening new
possibilities.

scalajs-bundler aims to make npm dependencies management as easy as JVM dependencies
management.

Basically, the idea is that if an application needs to depend on an
npm package `foo`, all we have to do is to add a line like the following:

~~~ scala
npmDependencies in Compile += "foo" -> "1.0"
~~~

And then the `run` and `test` sbt commands just work.

The 0.1 release contains an sbt plugin that:

- lets developers define their npm dependencies (as in the above example),
- keeps track of transitive npm dependencies between Scala.js artifacts,
- fetches these dependencies from the npm registry,
- provides tasks to bundle the application into a single artifact executable by Web browsers.

The plugin uses [npm](https://www.npmjs.com/) itself and [webpack](https://webpack.github.io/)
under the hood.

We also provide a second sbt plugin that sets up a seamless integration with
[sbt-web-scalajs](https://github.com/vmunier/sbt-web-scalajs): it basically turns bundles
into sbt-web assets.

There is still some work to do (in particular to shorten the duration of the bundling process
in the context of live reloading workflows) and we expect to release a
[0.2 version](https://github.com/scalacenter/scalajs-bundler/milestone/1) soon, but this
first release is already usable, so don’t hesitate to
[give it a try](https://scalacenter.github.io/scalajs-bundler/getting-started.html), we’d love
to get your feedback!
