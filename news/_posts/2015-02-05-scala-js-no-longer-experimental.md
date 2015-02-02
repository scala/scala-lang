---
layout: blog
post-type: blog
by: Sébastien Doeraene
title: Scala.js no longer experimental
---

Today, we [announced the release of Scala.js v0.6.0](http://www.scala-js.org/news/2015/02/05/announcing-scalajs-0.6.0/), the Scala to JavaScript compiler, and dropped the experimental flag associated to it.
Yes, you read it right: Scala.js is no longer experimental!
After exactly 2 years of development, we can finally call it production-ready.

Note that Scala.js is not part of the Typesafe Reactive platform.
Therefore, although we call it production-ready, Typesafe does not provide any commercial support for Scala.js.

## More than a compiler, an entire ecosystem

At its core, Scala.js is a compiler from Scala to JavaScript.
It compiles .scala files to a single optimized and minimized .js file per application.
The resulting JavaScript code is plain old ECMAScript 5.1, and hence works everywhere: on any OS, any browser, or even on Node.js.
Just like regular Scala, you get all the powerful language features that we know and love: type inference, classes, traits and objects, pattern matching, the collections library, implicits, and your personal favorite.
And, as Scala is fully interoperable with Java, so is Scala.js with JavaScript, in a statically-typed way, or falling back to dynamically-typed code if you want.

A compiler would be nothing without an ecosystem of libraries and tools, though, and we've got that covered too.

On the tooling side, you get to use your favorite IDE to develop in Scala.js: IntelliJ IDEA and Eclipse are known to work well, but there is no reason that any other editor wouldn't work.
You get syntax highlighting, code completion (even for JavaScript libraries and the DOM!), jump-to-definition, and pretty much everything you could think of.
After all, *Scala.js is just Scala*.
Your IDE won't be able to run or debug Scala.js code, though; for that, you can use a browser, and you can even step through your Scala code because Scala.js emits [source maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/).

To build Scala.js libraries and applications, there is an sbt plugin, which gives you the same comfort and development speed as with Scala/JVM.
It can even run unit tests automatically with either Rhino, Node.js or PhantomJS, according to your needs.

Scala.js also has a growing ecosystem of libraries, which you can depend on through Maven dependencies (`libraryDependencies` in sbt).
They cover UI frameworks, statically-typed client-server communication, reactive extensions, and so on.
Even some of the popular Scala libraries such as Shapeless and Scalaz cross-compile with Scala.js.

Finally, Scala.js has a thriving community of nice and helpful people.
Ask questions [on StackOverflow](http://stackoverflow.com/questions/tagged/scala.js), discuss [on the mailing list](https://groups.google.com/forum/#!forum/scala-js), and come hang around [in the Gitter chat room](https://gitter.im/scala-js/scala-js).

## Why Scala.js is awesome

We've asked developers who use Scala.js daily why they think Scala.js is awesome.
Here is a distilled version of what they have answered, in decreasing order of how many people mentioned it.
You can read [the entire discussion on the mailing list](https://groups.google.com/forum/#!topic/scala-js/_1Sfb5Nj08w).

* 5 Share code between client and server
* 4 Strong typing, including for JavaScript libraries
* 4 Tooling: IDE support, sbt integration, dependency, unit testing, stack traces and source maps, cross-compiling projects
* 4 Portability: bring Scala to environments powered by JavaScript, most importantly the browsers, but also others, such as the brand new [React Native](https://www.youtube.com/watch?v=KVZ-P-ZI6W4)
* 3 Integration with JavaScript
* 2 Fast compilation cycle (wrt other compile-to-JS options such as GWT)
* 2 Statically-checked client-server RPC with Autowire
* 2 The Scala Standard library
* 2 It's not a toy
* 2 Great community, welcoming to new users and helpful
* 1 Very good documentation

Here are also a few selected quotes from the mailing list discussion.

> It's mostly about the strong typing for me.
> Nothing revolutionary about that idea, but it's just as true on the client as on the server:
> having the compiler type-check your code makes it *much* quicker to get complex, sophisticated systems up and running.
>
> Also, having the same language, end-to-end, is fabulous.
> [...]
> With Scala.js, for the first time ever, I have a single solid, strongly-typed language that I can use throughout the system -- from the fiddly details of the UI, through the API definitions and the front-end web server, to the Akka middleware and the database back end.
> That's really kind of amazing.
> It is also why I personally think Scala.js is the killer app for Scala as a language.
> -- <cite>Justin du Cœur</cite>

<p></p>

> In a lot of ways, Scala.js frees your Scala code from the confines of the headless Linux server that it's been running on for years.
> Scala might be a nice language, but you've never been able to use it to make anything cool that a non-backend-systems person would understand.
> [...]
> With Scala.js, you can easily create small Scala applications and email the tiny 100kb executables (or just the link to them) to anyone, who can run them on any modern device, even smartphones.
> Made a cute game? A fun visualization? An animated sequence? Now you can show the world. 
>
> Scala's no longer just for distributed systems people and type-theorists!
> -- <cite>Li Haoyi</cite>

<p></p>

> Before Scala.js I did investigate using [Opa](http://opalang.org/) as another approach to get "End-to-End" type safety.
> The problem I had there was that to do JavaScript interop, I had to drop down from Opa into Ocaml and write out manual bindings to the JavaScript library I wanted to use.
> Scala.js' approach is infinitely better.
> Despite how much better I think typed libraries are, that does not negate the fact that there are good and useful JS libraries out there, and the ability to "hack" it into Scala.js code effortlessly with `js.Dynamic` or add a typed facade if desired is fantastic.
> -- <cite>Nick Childers</cite>

<p></p>

> I have done some work with [GWT](http://www.gwtproject.org/) before and compared to that the first thing you will notice is that Scala.js is FAST.
> It compiles 100 times faster, yet it still outputs JavaScript that is both faster and smaller.
> -- <cite>Baldur Norddahl</cite>

<p></p>

> Scala.js has very good tooling and very good documentation.
> If you already write JVM flavoured Scala you can be up and running in no time and write JS flavoured Scala.
> -- <cite>Guillaume Belrose</cite>

<p></p>

> [...] Scala.js has one of the smartest and most responsive communities I have ever seen.
> You, Li Haoyi, and many other posters here have contributed to making this platform welcoming to newcomers.
> The help I've received here has encouraged me to learn Scala proper, as well as many interesting functional programming concepts.
> -- <cite>Travis Good</cite>

<p></p>

> One of the biggest awesomeness of Scala.js is the core team's steady hands.
> Right from the get go, Scala.js showed a mature engineering approach where each release made a meaningful difference to user projects, vetted release-to-release compatibility, communicated breaking changes well in advance, maintained useful associated libraries, and let pragmatism win over everything else.
> As a result, even though this is such a new project, it doesn't feel risky to use it in real projects.
> -- <cite>Ramnivas Laddad</cite>

<p></p>

> Scala.js is simply the best option available on browsers today, if you're looking for a language with a powerful yet flexible type system.
> -- <cite>Xavier Cho</cite>

## Why removing the experimental flag now?

Many Scala.js users would say that it has been production-ready for quite some time, now.
Possibly as early as 0.5.0, which was released in June 2014.
So why do we choose to remove the experimental flag now?
What has changed?

The big difference is *stability* in terms of several aspects:

* The semantics of the language are settled. They may still evolve in a backward compatible way (defining previously undefined behaviors), but will otherwise not change anymore.
* The standard library of Scala.js (the `scala.scalajs.js` package) will remain backward source and binary compatible.
* The sbt builds will remain backward source compatible.

Of course, we must still be able to evolve the library and the builds, so things might become deprecated, and eventually removed, but will do so on a very slow pace.

All things considered, this means that the code you write today, for Scala.js 0.6.0, will continue to work throughout 0.6.x and 1.x.y unchanged.

"So why isn't it 1.0.0 already?
It seems like these properties satisfy to the requirements of a 1.0.0 version.
What are you hiding?"

If, on all the user-visible aspects, everything is now stable, it is still not true for one almost-implementation detail: the format of the intermediate files of Scala.js, the `.sjsir` files.
These files are basically the Scala.js equivalent of `.class` files for the JVM.
We're not yet completely sure of their format, and we suspect we might still want to change it in the couple coming months.
Now, changing this format means breaking binary compatibility (by definition), and therefore would require a change in major version number.
So we're reserving ourselves a last chance of modifying these without jumping straight to 2.0.0.

But otherwise, every other aspect of Scala.js is as stable as it get before getting widespread adoption.

### Getting started

There are three main ways to get started with Scala.js:

* [The tutorial](http://www.scala-js.org/doc/tutorial.html)
* The free e-book [Hands-on Scala.js](http://lihaoyi.github.io/hands-on-scala-js/)
* The online sandbox [Scala.jsFiddle](http://www.scala-js-fiddle.com/)

So go ahead!
Use it, love it, and build the Web applications of the future!
