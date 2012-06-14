---
layout: page
title: Learning Scala
---

[ref-books]: http://www.scala-lang.org/node/959 "Books on Scala"
[ref-tools]: http://www.scala-lang.org/node/91#ide_plugins "IDE and Editor plugis"
[ref-downloads]: http://www.scala-lang.org/downloads# "Scala Distribution"
[ref-java-to-scala-with-experts]: http://www.scala-lang.org/node/960 "Java to Scala with experts"
[ref-tour-of-scala]: http://docs.scala-lang.org/tutorials/ "A Tour of Scala"
[ref-code-examples]: http://www.scala-lang.org/node/219 "Code Examples"
[ref-tutorial]: http://www.scala-lang.org/docu/files/ScalaTutorial.pdf "Scala Tutorial"
[ref-scala-by-example]: http://www.scala-lang.org/docu/files/ScalaByExample.pdf# "Scala by Example"
[ref-scala-overview]: http://www.scala-lang.org/docu/files/ScalaOverview.pdf# "Scala Overview"
[ref-scala-reference]: http://www.scala-lang.org/docu/files/ScalaReference.pdf# "Scala Language Specification"
[ref-community]: http://www.scala-lang.org/node/1707 "Scala Community"
[ref-docs]: http://www.scala-lang.org/node/197 "Scala Documentation"
[ref-research]: http://www.scala-lang.org/node/143 "Language Research"


The best way to learn Scala depends on what you know already and the way
you prefer to learn things. You will find there are a variety of
different resources you can use to speed up the whole process. These
include books, tutorials, training courses, presentations, and of course
the Scala compiler for practice. Many people find a good combination is
to have one of the Scala books at hand and to start right away trying
the examples with the Scala Compiler. On the other hand, you may want to
get started without a book or take a Scala training course. In that
case, you will find on this website resources to help you get right on
with the task but, as you may expect, in a somewhat more disjointed way.

As your knowledge of Scala grows, you will find there is more advanced
material and a very friendly Scala community at hand to help you. They
all share a passion for Scala and welcome newcomers warmly. Many have
written helpful material for programmers new to Scala, will respond to
emails asking for help or are sharing neat new techniques, advanced
concepts or tools in one of several Scala forums or personal blogs.
Perhaps join a [Scala user group close by](http://www.scala-tribes.org).

To know more, just select one of the options below according to your
existing experience:

-   [Several years of Java programming](#Java)
-   [Some Scala programming](#Scala)
-   [Several years experience of C++, Ruby, Python, Visual Basic,
    etc](#CRuby)
-   [Experience of a functional language like Haskell, ML, F\#, Lisp,
    Clojure etc as well as an imperative one](#Func).
-   [Researcher in Computer Languages](#Research)
-   [Beginner, never programmed in any language](#Begin)

<a id="Java"></a>Java Programmer
================================

Many things you already know from your Java experience directly carry
over to the Scala environment. Scala programs run on the Java VM and are
bytecode compatible with Java, so you can make full use of existing Java
libraries or existing application code. You can call Scala from Java and
you can call Java from Scala, the integration is quite seamless.
Moreover, you will also be able to use familiar development tools,
[Eclipse, NetBeans, or Intellij][ref-tools] for example,
all of which support Scala. So you have far less to learn.

Many top-notch programmers and industry leaders have been captivated by
Scala. They have already created a growing range of [books on
Scala][ref-books] for you to choose from. Many
people prefer the organised structure of a good book to guide them
through their learning process but typically like to complement this
with hands on practice running the code examples with the Scala
compiler. To do this you will need to install the [Scala
compiler][ref-downloads].

Scala supports OO and Functional programming styles. You do not need to
know any functional programming languages in order to learn Scala. Most
of the books and learning materials will introduce you to the concept of
passing functions to methods just like other variables, and other
functional language features, like immutability, that make the support
of multi-core concurrency much easier.

### <a id="Resources"></a>Resources

While you wait for a book you will find the following resources useful:

-   [**Video Talk on Scala by Martin
    Odersky**](http://ftp.heanet.ie/mirrors/fosdem-video/2009/maintracks/scala.xvid.avi)  
    This talk was given by Martin Odersky, the creator of Scala, at the
    [FODEM](http://www.fosdem.org/2009/about/fosdem) conference. It
    provides an excellent introduction to the language features and much
    of the rationale behind its design. You can find this [copy of his
    slides and a
    transcription](http://www.slideshare.net/Odersky/fosdem-2009-1013261)
    of his talk handy.
      
-   [**Try Simply Scala**](http://www.simplyscala.com/)  
    [Simply Scala](http://www.simplyscala.com/) is a web site where you
    can interactively try Scala. There you will find a tutorial that
    gives a rapid overview of the basic language features, the syntax,
    examples you can run and the ability to try your own code with an
    interactive interpreter.
      
-   [**Scala Training
    Courses**](http://www.typesafe.com/products/training)  
    [Typesafe](http://www.typesafe.com/) and its partners provide
    regular Scala training courses and Scala consulting in many
    locations world-wide. They provide expert teachers, including Martin
    Odersky, Iulian Dragos, Heiko Seeberger and other certified Scala
    trainers, to take you through the Scala language in a systematic way
    either in group classes at their facilities or on your own site.
      
-   [**Free On-Line Books on
    Scala**](http://programming-scala.labs.oreilly.com/)  
    A free sample of [Scala for the
    Impatient](http://typesafe.com/resources/scala-for-the-impatient), a
    book written by Cay Horstmann is available from Typesafe for
    download. A very practical book for developers with Java experience
    learning Scala. O'Reilly has made [Programming
    Scala](http://programming-scala.labs.oreilly.com/), a book written
    by Alex Payne and Dean Wampler freely available on-line. This
    comprehensive book will appeal to experienced programmers wanting to
    learn Scala. It is packed with examples and clearly explains in a
    pragmatic way most of the more advanced features of Scala.
      
-   [**"Programming in
    Scala,"**](http://www.artima.com/shop/programming_in_scala_2ed) 2nd
    ed., by Martin Odersky, Lex Spoon, and Bill Venners  
    This is the award winning, authoritative book co-written by Scala's
    designer. The second edition comes with more than 100 pages of new
    material covering new features in 2.8, while the first edition of
    the book has been made [freely
    available](http://www.artima.com/pins1ed/). For more on this and
    other books, see [the list of available Scala books][ref-books].
      
-   [**Try Kojo**](http://kogics.net/kojo-download)  
    [Kojo](http://kogics.net/kojo-download) is a Scala development
    environment designed for use in schools. It comes with a Scala
    tutorial that gives a rapid overview of the basic language features,
    the syntax, examples you can run and the ability to try your own
    code. It is simple to [download and
    install](http://kogics.net/kojo-download).
      
-   [**Java to Scala with the Help of
    Experts**][ref-java-to-scala-with-experts]  
    A collection of some of the almost endless supply of tips available
    for Java programmers new to Scala. There are also mini-blog series
    designed to take you through many of the important features of the
    Scala language in a friendly way.
      
-   [**Brief Scala Tutorial**][ref-tutorial]  
    A 20 page introduction to scala and some of the basic concepts and
    a good place to start. You will find more code examples
    [here][ref-code-examples].
      
-   [**Scala By Example**][ref-scala-by-example]  
    Takes you through the Scala features with many examples. It does
    assume that you are already familiar with the basic Scala syntax and
    a basic understanding of functional programming. It is an excellent
    way to expand your knowledge and skill.
      
-   [**Scala Overview**][ref-scala-overview]  
    This is a paper summarizing the features of the Scala Language in a
    formal and concise way. An excellent reference for language
    researchers or advanced programmers.
      
-   [**Tour of Scala**][ref-tour-of-scala]  
    Here is a more descriptive, yet formal, summary of the Scala
    language features with many code examples. A great language
    reference for programmers needing to check correct use of a specific
    Scala feature or its correct syntax. Once you have mastered the
    basic Scala syntax then this is a good place to look to learn
    specific features.


<a id="Scala"></a>Scala Programmer
==================================

If you are a Scala programmer looking for more examples and help, you
will a list of useful resources by following [this link](#Resources).
You may want to check out the [community resources][ref-community] 
too, or browse the list of the available documentation on [this
page][ref-docs].



<a id="CRuby"></a>C++, C\#, Ruby, Python, Visual Basic, etc Programmer
======================================================================

If you have no Java experience and are coming from these languages, then
you will need to learn about the Java ecosystem. However, many concepts
such as closures, passing functions, type inferencing or generics will
already be familiar to you. Since Scala makes full use of the Java
libraries and runs on the JVM you would probably find it useful to have
a book on Java and the Java libraries handy: Scala code can call Java
code and Java code can call Scala code, and some of the basic concepts
and APIs in the two are related. In order to discover Scala and its
features, you will probably need one of the [Scala books][ref-books],
and the [Scala compiler][ref-downlads]. You will also find
useful some of the [introductory resources](#Resources) available on
this website.

If you are a C\# programmer, you may find the series "Scala for C\#
programmers" by Ivan Towlson on flatlander quite helpful:

-   [Part 1 Mixins and
    Traits](http://hestia.typepad.com/flatlander/2009/01/scala-for-c-programmers-part-1-mixins-and-traits.html)
-   [Part 1a Mixins and Traits, Behind the
    scenes](http://hestia.typepad.com/flatlander/2009/01/scala-for-c-programmers-part-1a-mixins-and-traits-behind-the-scenes.html)
-   [Part 2
    Singletons](http://hestia.typepad.com/flatlander/2009/01/scala-for-c-programmers-part-2-singletons.html)
-   [Part 3 Pass by
    Name](http://hestia.typepad.com/flatlander/2009/01/scala-for-c-programmers-part-3-pass-by-name.html)
-   [Part 4 Multiple return
    values](http://hestia.typepad.com/flatlander/2009/02/scala-for-c-programmers-part-4-multiple-return-values.html)
-   [Part 5
    Implicits](http://hestia.typepad.com/flatlander/2009/03/scala-for-c-programmers-part-5-implicits.html)
-   [Part 6 Infix
    Operators](http://hestia.typepad.com/flatlander/2009/03/scala-for-c-programmers-part-6-infix-operators.html)



<a id="Func"></a>From Haskell, ML, F\#, Lisp, Clojure, etc Programmer
=====================================================================

If you come to Scala from a functional programming background, you will
find most of the more advanced functional programming style familiar.
Scala integrates OO and functional programming together into one uniform
language environment. By the very nature of this integration, the syntax
is a little more complex than in pure functional languages. Scala
supports OO programming in a very natural way, and you can use a purely
functional programming style if you prefer. Since Scala makes full use
of the Java libraries and runs on the JVM, you will probably find it
useful to have a book on Java and the Java libraries handy: Scala code
can call Java code and Java code can call Scala code, and some of the
features of the two are related. In order to discover Scala and its
features, you will need one of the [Scala books][ref-books], and the 
[Scala compiler][ref-downloads]. You will also find the
[introductory resources](#Resources) available on this website.



<a id="Research"></a>Computer Language Researcher
=================================================

If you are a language researcher, you will find ["Programming in
Scala"][ref-books], the book by Martin Odersky
et al, a good place to obtain a general overview of the language. You
will find papers, talks, and other academic-related material on Scala,
including in-depth discussion of the formal and theoretical aspects of
the language, as well as implementation details, in the [Language
Research][ref-research] section of this website.
More introductory material on Scala can be found in the
[resources](#Resources) section of this page, above. For an in-depth
view of the technical details of the language, you may also find of
interest the [Scala Language Specification][ref-scala-reference].



<a id="Begin"></a>Beginner Programmer
=====================================

Nearly all of the material existing for Scala assume that you already
have some programming experience and are familiar with the basic jargon.
If you have never done any programming, you may like to consider
starting with Java first, as there is a large amount of beginner
material available. You may then want to progress to Scala from there.
If you're impatient, however, it is entirely possible to start directly
to Scala; in that case, we would recommend you find someone to help you
setting up the Scala compiler and an IDE on your computer. The book
"Beginning in Scala" would then be a good companion to start with; you
can find further details on that and the other books [here][ref-books].
