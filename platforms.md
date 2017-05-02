---
title: Scala Platforms
layout: inner-page-no-masthead
includeTOC: true
---
Scala officially supports three platforms: JVM, JavaScript, and Native. Each platform supports different use cases.

## JVM
The Scalac compiler has allowed for compilation to JVM bytecode since the language's inception in 2004. One of the initial goals was interoperability with Java. This means that teams using Java can gradually transition their codebase to Scala code and take advantage of the expansive ecosystem of Java packages. The JVM can take a second to start but is fast at runtime. Scala on the JVM is most often used for web services and desktop applications.

## JavaScript
The [Scala.js](https://www.scala-js.org/) compiler compiles Scala code to JavaScript, to be run on any JS platform such as web front-ends or Node.js servers. Since the startup times of JS engines are shorter than the JVM, Scala.js can also be used for short-lived processes, such as CLIs and AWS lambda jobs. Scala.js code can use existing JavaScript libraries, and be called from JavaScript code, with all the benefits of static typing: code completion, refactoring, etc. So-called _facade types_ exist for popular JavaScript libraries, such as React, AngularJS and [dozens of others](https://www.scala-js.org/libraries/facades.html). Custom facade types can be written for any other library.

## Native
[Scala Native](http://www.scala-native.org/en/latest/) is an experimental platform which stands out for its fast startup times and interoperability with C libraries. This can be useful when writing short-lived command line applications were a perceivable lag is unacceptable. Many core Java standard libraries have been ported to Scala Native but Java interoperability is not supported. Scala Native can be used on Linux and Mac OS. Windows support is planned for a future release. Binary compatibility is currently supported between patch releases. 
