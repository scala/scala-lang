---
layout: news
post-type: announcement
title: "Announcing Scala.js v0.1"
by: "Sébastien Doeraene"
---

We're excited to announce the first release of [Scala.js](http://www.scala-js.org/), v0.1!
Scala.js was introduced during the 4th Scala Days in June 2013, and has now
reached relative stability. While we don't yet feel that Scala.js is production-ready, we
think that it nonetheless deserves its first non-snapshot release.

Scala.js is a compiler from Scala to JavaScript. It allows you to write your entire
web application in Scala and simply compile to JavaScript!

## Get started!

All information on how to get started with Scala.js is available
[on the Website](http://www.scala-js.org/).
Documentation, a mailing list, third-party libraries and tools, are all available.

## Noteworthy features

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
