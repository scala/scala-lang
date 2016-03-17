---
layout: blog
post-type: blog
by: Felix Mulder
title: Getting into Scaladoc Development
disqus: true
---

Over the past months I've been working on the new Scaladoc - and it's coming
along nicely. Together with
[@heathercmiller](http://twitter.com/heathercmiller) and
[@vladureche](http://twitter.com/vladureche) we've overhauled the overall look
of Scaladoc as well as having added a bunch of useful features - like complete
member search!

With the new Scala Center recently announced, one of the things discussed has
been how to lower the entry barrier on important open source projects. This blog
post aims to do exactly that for Scaladoc. There are a lot of things we want
to do with the docs - and we'd love help! If that piques your interest - read on.

## Scaladoc for 2.12.x ##
The new major version of Scala is scheduled for later this year, and currently
its doc tool generates sites like this one:

![Scala Collections](http://i.imgur.com/TOkD4JF.png)

The new search functionality allows you to not only look for so called
"top-level entities" (`class`, `trait`, `object` and `package`) but members like
methods and even `val` and `var`s. The new search is not at all taxing, on a
big library like the collections - the results are shown almost
instantaneously. Nevertheless, we've got a progress bar showing you something's
actually happening:

![Scala Collections](http://imgur.com/jLxcRpx.png)

## How does Scaladoc work? ##
The Scaladoc tool is quite easy to understand - there are basically three things
that happen once you've specified what you want documented:

1. Scaladoc compiles the sources using the first step of the compiler (the
   frontend). This will fill a tree structure known as `Universe` with all the
   information about the sources (classes, members, doc string etc).

   **See:** [DocFactory.scala](https://github.com/scala/scala/blob/2.12.x/src/scaladoc/scala/tools/nsc/doc/DocFactory.scala)

2. Copy all needed assets to out location (i.e. scripts and CSS-files)

   **See:** [HtmlFactory.scala](https://github.com/scala/scala/blob/2.12.x/src/scaladoc/scala/tools/nsc/doc/html/HtmlFactory.scala).

3. Traverse the `Universe` tree and for each top-level entity create an
   HTML-page using the `Entity` class.

   **See:** [Entity.scala](https://github.com/scala/scala/blob/2.12.x/src/scaladoc/scala/tools/nsc/doc/html/page/Entity.scala)

The bulk of these steps are carried out inside the `HtmlFactory` class in
[HtmlFactory.scala](https://github.com/scala/scala/blob/2.12.x/src/scaladoc/scala/tools/nsc/doc/html/HtmlFactory.scala).
Have a look there for a more complete overview.

## How do I generate the docs? ##

Simple:

```bash
$ git clone git@github.com:scala/scala.git && cd scala
$ ant docs # "ant docs.lib" if you just want the standard library
```

## Where to begin ##

The markup of the entity page is defined in
[Entity.scala](https://github.com/scala/scala/blob/2.12.x/src/scaladoc/scala/tools/nsc/doc/html/page/Entity.scala).
If you're looking to change the HTML that's where you will want to look first.

If you want to add some static asset, remember that `HtmlFactory` needs to copy
it to the destination. So be sure to add your new resource to `libResources` in
[HtmlFactory.scala](https://github.com/scala/scala/blob/2.12.x/src/scaladoc/scala/tools/nsc/doc/html/HtmlFactory.scala).

All the current static assets are located in the
[lib](https://github.com/scala/scala/tree/2.12.x/src/scaladoc/scala/tools/nsc/doc/html/resource/lib) directory.
That's where you'd want to put new things (it is also where `index.js` etc live!)

**How can I see my changes?** You have two options, if you changed the markup -
you'll need to regenerate the docs:

```bash
$ ant docs.clean && ant docs
```

When the changes are to scripts or style sheets I use a small `Makefile` in the
root of the project. This makefile will simply copy the resources to the same location
as the generated docs:

```make
all:
    cp src/scaladoc/scala/tools/nsc/doc/html/resource/lib/{index.css,index.js,template.css,template.js,diagrams.css,diagrams.js} build/scaladoc/library/lib/
```

Regenerating the docs all the time is a pain - if you just want to generate
them for a single file, do this:

```bash
$ ant quick.bin
$ build/quick/bin/scaladoc path/to/source/File.scala
```

Lastly, before you open your pull request - test your changes!

```bash
$ ant test.scaladoc
```

## Where to really begin ##

There's still a lot of things to do before this can be considered release ready.
Here's a laundry list of things we need to do:

* General
    - Async all the things! We should be able to parallelize the generation of
      the doc pages
    - CSS cleanup! There are a lot of things not necessary anymore, these could
      simply be deleted
* Mobile, the docs look decent on mobile - but there's still a ton to do!
    - Landscape kills some of our layout
    - There is no good package overview (list on the right) - ideas welcome!
* Desktop
    - Keyboard navigation on entity pages (i.e. between members)
    - Better keyboard navigation on search results
    - Minor layout issues
    - Showing existence of companion `class`/`trait`/`object` (maybe *"You
      won't believe who* `Companion object Boolean` *is going home with
      tonight!"*)

The full list of ideas and things to do can be found on
[scala-dev](https://github.com/scala/scala-dev/issues/84). Comment on the issue
or reach out to one of us (@felixmulder, @heathermiller, @vladureche) on the
[scala/contributors gitter](https://gitter.im/scala/contributors) if you're
interested in knowing more!
