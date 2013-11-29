---
layout: news
post-type: announcement
title: "Announcing Scala.js v0.1"
by: "Sébastien Doeraene"
---

It is my great pleasure to announce [Scala.js](http://www.scala-js.org/) v0.1.
Introduced to the world during the 4th Scala Days in June 2013, Scala.js has
reached relative stability (although it is not production-ready!) that deserves
its first non-snapshot release.

Scala.js is a compiler from Scala to JavaScript. It allows you to write your
Web application entirely in Scala!

## Get started!

Find all information on how to get started with Scala.js
[on the Website](http://www.scala-js.org/).
You will also find there: documentation, mailing list, third-party libraries
and tools, and so on.

## Outstanding features

*   Support all of Scala (including macros!),
    modulo [a few semantic differences](http://www.scala-js.org/doc/semantics.html)
*   Very good [interoperability with JavaScript code](http://www.scala-js.org/doc/js-interoperability.html).
    For example, use jQuery and HTML5 from your Scala.js code, either in a
    typed or untyped way. Or create Scala.js objects and call their methods
    from JavaScript.
*   Integrated with [sbt](http://www.scala-sbt.org/)
    (including support for dependency management and incremental compilation)
*   Can be used with your favorite IDE for Scala
*   Generates [Source Maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
    for a smooth debugging experience (step through your Scala code from within
    your browser supporting source maps)
*   Integrates [Google Closure Compiler](https://developers.google.com/closure/compiler/)
    for producing minimal code for production.

## Known issues

You may consult (and report)
[issues on GitHub](https://github.com/scala-js/scala-js/issues).
