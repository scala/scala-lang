---
layout: blog-detail
post-type: blog
by: Jorge Vicente Cantero
title: "Speeding Up Compilation Time with scalac-profiling"
---

In this blog article, I’d like to introduce you to a new tool that we’ve
developed at the Scala Center called scalac-profiling, which aims to help you
better understand what is slowing down compilation in your project.

It turns out that the use of Scala's implicits as well as macros can greatly
increase compilation times, depending on how they are used and how your
codebase is organized. Codebases that make use of libraries like [Shapeless],
or which rely on typeclass derivation, may be particularly prone to these
slow-downs. As of Scala 2.12, typeclass derivation is based on
implicitly-triggered macro expansions.

The goal of this blog post is to help you understand when these things are
happening in your code, so you can remove code that triggers unnecessary
implicit searches or macro expansions.

In this blog post, I walk you through how to reduce these compile times with
scalac-profiling. scalac-profiling is a new Scala Center compiler plugin to
complement my recent work on the compiler statistics infrastructure merged in
2.12.5. I use the plugin to speed up the compile times of a
[Bloop](https://scalacenter.github.io/bloop/) module by **8x**.

The analysis and optimizations here presented can be migrated to any other
Scala project that makes heavy use of typeclass deriving code, implicits,
and/or macros.

After reading the blog post, you should understand:

* How to use `scalac-profiling` to analyze the impact of implicits and macros
  on compile times.
* Why typeclass deriving or Shapeless-based code is prone to slow compilation
  times if not used with care.
* How implicit search and macros interact in unexpected ways that can hurt
  developer productivity and how you can optimize their interaction.

The most important take-away from this guide is that **you should not take
slow Scala compile times for granted**. It's worth investigating why slow
compiles happens as as it is often possible to fix our projects to compile
faster!

### Pointers to read the article

If you want to apply the same technique in your Scala projects or you have no
previous knowledge of the reasons why automatic typeclass derivation is slow,
reading the whole blog post is **highly recommended**.

If you're already familiar with the source of inefficiencies or you don't
have much time, jump directly to the
[detective work](#the-quest-for-optimization) that digs into
the profiling data.

This is a long blog post. Put on your profiling hat and let's get our hands
dirty!

## The codebase

[Bloop](https://github.com/scalacenter/bloop) is a *build-tool-agnostic*
compilation server with a focus on developer productivity that I developed at
the Scala Center together with [Martin Duhem](https://github.com/Duhemm).
It is a compilation server that integrates with sbt and gives you about
~20-25% faster compilation times than sbt.

At around ~10000 lines of Scala code, it has three main submodules:

1. `jsonConfig`: the module that defines the JSON schema of the configuration files.
1. `backend`: the module that defines the compiler-specific data structures and integrations.
1. `frontend`: the high level code that defines the internal task engine and nailgun integration.

The two first modules are lightweight and fast to compile. In a hot compiler,
their batch compilations take 2 or 3 seconds. However, compiling `frontend`
is more than 20x slower. This slowness is surprising given that `frontend` is
only about 6000 LOC, so [in
theory](https://developer.lightbend.com/blog/2017-06-12-faster-scala-compiler/)
it should compile in ~4 seconds.

`frontend` depends on
[`case-app`](https://github.com/alexarchambault/case-app/), a command-line
parsing library for Scala that uses
[Shapeless]. This library is
excellent, but slows our compilation down to 30 seconds.

Waiting 30 seconds for a change to take effect (even under incremental
compilation) is a no-go. It may not seem much, but this kind of wait kills
productivity and gets me out of the zone. That affects my decision-making
process a big deal.

In the past, I've also noticed that a slow workflow discourages me from
adding complete test suites (the more tests I add the more I need to wait to
compile) or making experiments in the code. That has rendered my experience
as a Scala developer less pleasant.

And that deserves putting some time aside to find out how we can make Bloop
compile times faster.

## The setup and workflow

To profile Bloop compilation times, we use Bloop itself to make sure that we
preserve hot compilers across all runs. You should be able to replicate the results
with sbt too, but make sure that every time you `reload` the build you warm
up the compiler at least 10 times.

To set up Bloop as a user, follow the installation instructions in [our
website](https://scalacenter.github.io/bloop/). You only need to install
Bloop and start the server. You then clone the Bloop codebase and generate
the configuration files.

```bash
git clone https://github.com/scalacenter/bloop
cd bloop
git checkout v1.0.0-M10
git submodule update --init
sbt bloopInstall
```

After that, run `bloop projects` in the base directory to check the projects
in your build.

### Compiling the codebase

All we'll do in the next sections is to compile the codebase several times
and see how the compilation times behave after applying our changes.

I recommend cleaning and compiling `frontend` sequentially at least 10 times
to get a stable hot compiler. Every change we'll do to the codebase from now
on will require a full compile (running `clean` before `compile`) to get
stable implicit search and performance results. This methodology will
simplify reading and interpreting the results without taking into account
what incremental compilation is doing.

#### Warm up the compiler

```bash
for i in {1..10}; do
  echo "Warming up the compiler; iteration $i"
  bloop clean frontend
  bloop compile frontend
done
```

## The profiling toolkit and theory

The first step to analyze your compilation times is that you set your
intuitions aside. We're going to look at the raw compiler data with fresh
eyes and see where that leads us.

If you try to validate previously-formed assumptions, it's likely you'll be
misled by the data. I've been there, so don't fall into the same trap.

Profiling compilation times requires dedicated tools. There isn't much we can
get from using profilers like Yourkit or Java Flight Recorder because they show
the result of the inefficiencies, not the cause.

There are cases when knowing the hot methods, inspecting the heap or studying
GC statistics is useful. I've used this data in the past to find and fix
inefficiencies in the compiler. However, this guide is only concerned about
the misuse of language features, and so we need to take a higher-level
profiling approach.

### Compiler statistics

The compiler has built-in support for statistics *from 2.12.5 on*. This work
resulted from [a Scala Center Advisory Board
proposal](https://github.com/scalacenter/advisoryboard/blob/master/proposals/010-compiler-profiling.md)
about compiler profiling. Morgan Stanley, the creator of the document,
proposed the Scala Center to develop tools to help diagnose compilation
bottlenecks.

I was interested in this topic and so the proposal was assigned to me. My
work on the compiler revolved around fixing the broken implementation of
statistics in 2.11.x, creating better profiling tools and reducing the
instrumentation overhead in the statistics engine.

Compiler statistics have both timers and counters that record data about
expensive compiler operations like subtype checks, finding members, implicit
searches, macro expansion, class file loading, et cetera. This data is the
perfect starting point to have a high-level idea of what's going on.

#### Setting statistics up

Enable compiler statistics by adding the `-Ystatistics` compiler flag to the
project you want to benchmark.

*Note that you need to use Scala 2.12.5 or
above*. I **highly** recommend using the latest version. At the moment of
this writing, that's `2.12.6`.

Add the compiler flag to the field `options` inside the
`.bloop/frontend.json` json configuration file. When you save, Bloop will
automatically pick up your changes and add the compiler option without the
need of a `reload`.

If you use sbt, add `scalacOptions in Compile += "-Ystatistics"` to your
project settings. If you want to profile tests scope it to `Test` instead of
`Compile`.

Run `bloop compile frontend -w --reporter scalac` (we use the default scalac
reporter for clarity) and have a look at the data. The output of the
compilation will be [similar to this log](/resources/img/blog/bloop-compile-0.txt).
Check the end of it. You should see a report of compilation time spent per
phase.

```
*** Cumulative timers for phases
#total compile time      : 1 spans, ()32545.975ms
  parser                 : 1 spans, ()65.017ms (0.2%)
  namer                  : 1 spans, ()42.827ms (0.1%)
  packageobjects         : 1 spans, ()0.187ms (0.0%)
  typer                  : 1 spans, ()27432.596ms (84.3%)
  patmat                 : 1 spans, ()1169.028ms (3.6%)
  superaccessors         : 1 spans, ()36.02ms (0.1%)
  extmethods             : 1 spans, ()3.548ms (0.0%)
  pickler                : 1 spans, ()9.449ms (0.0%)
  xsbt-api               : 1 spans, ()159.278ms (0.5%)
  xsbt-dependency        : 1 spans, ()94.846ms (0.3%)
  refchecks              : 1 spans, ()627.633ms (1.9%)
  uncurry                : 1 spans, ()408.305ms (1.3%)
  fields                 : 1 spans, ()414.151ms (1.3%)
  tailcalls              : 1 spans, ()38.455ms (0.1%)
  specialize             : 1 spans, ()184.562ms (0.6%)
  explicitouter          : 1 spans, ()80.488ms (0.2%)
  erasure                : 1 spans, ()624.472ms (1.9%)
  posterasure            : 1 spans, ()63.249ms (0.2%)
  lambdalift             : 1 spans, ()125.944ms (0.4%)
  constructors           : 1 spans, ()47.109ms (0.1%)
  flatten                : 1 spans, ()46.527ms (0.1%)
  mixin                  : 1 spans, ()59.808ms (0.2%)
  cleanup                : 1 spans, ()42.336ms (0.1%)
  delambdafy             : 1 spans, ()47.771ms (0.1%)
  jvm                    : 1 spans, ()714.008ms (2.2%)
  xsbt-analyzer          : 1 spans, ()5.175ms (0.0%)
```

The report suggests that about **84.3% of the compilation time** is spent on
typer. This is an unusual high value. Typechecking a normal project is
expected to take around 50-70% of the whole compilation time.

If you have a higher number than the average, then it most likely means
you're pushing the typechecker hard in some unexpected way, and you should
keep on the exploration.

### Walking into the lion's den

Now that the data signals a bottleneck in typer, let's keep our statistics
log short and enable `-Ystatistics:typer`. That will report only statistics
produced during typing.

We then run compilation again. The logs contain information about timers and
counters of several places in the typechecker. These timers and counters help
you know how you're stressing the compiler.

If the compilation of your program requires an unusual amount of subtype
checks, `time spent in <:<` will be high. There are no normal values for
subtype checks --the time spent here depends on a lot of factors-- but an
abnormal value would be anything above 15% of the whole typechecking time.

The first thing we notice when studying the logs is that typechecking
`frontend` takes 28 seconds. We also see some unusual values for the
following counters:

```json
#class symbols             : 1842246
#typechecked identifiers   : 134734
#typechecked selections    : 225020
#typechecked applications  : 82421
```

The Scala compiler creates almost two million class symbols (!) and
typechecks 134734 identifiers, almost double the selections and half of the
applications. Those are pretty high values. That begs the question: why are
we creating so many classes?

Next, we check time spent in common typechecking operations:

```
time spent in lubs         : 67 spans, ()63.194ms (0.2%) aggregate, 16.29ms (0.1%) specific
time spent in <:<          : 1548620 spans, ()1791.068ms (6.5%) aggregate, 1583.94ms (5.8%) specific
time spent in findmember   : 873498 spans, ()638.792ms (2.3%) aggregate, 592.663ms (2.2%) specific
time spent in findmembers  : 0 spans, ()0.0ms (0.0%) aggregate, 0.0ms (0.0%) specific
time spent in asSeenFrom   : 2541823 spans, ()1299.199ms (4.7%) aggregate, 1238.814ms (4.5%) specific
```

`time spent in lubs` should be high whenever you use lots of pattern matching
or if expressions, and the compiler needs to lub (find the common type of a
sequence of types -- also called finding "least upper bound" among some
types). Eugene Yokota explains it well [in this well-aged blog
post](http://eed3si9n.com/stricter-scala-with-ynolub).

`time spent in findmember` and its sister `time spent in findmembers` should
be up in the profiles whenever you have deep class hierarchies and lots of
overridden methods.

`time spent in asSeenFrom` is high whenever your code makes a heavy use of
dependent types, type projections or abstract types in a more general way.

In the case of `frontend`, the durations of all these operations are
reasonable, which hints us that the inefficiency is elsewhere.

For most of the cases, these timers are unlikely to be high when typechecking
your program. If they are, try to figure out why and file a ticket in
[Scala compiler's issue tracker](https://github.com/scala/bug/) so that either I or the Scala team can look into it.

### The troublemaker

Most of the projects that suffer from compilation times abuse or misuse
either macros (for example, inefficient macro implementations that do a lot
of `typecheck`/`untypecheck`), implicit searches (for example, misplaced
implicit instances that take too long to find) or a combination of both.

It's difficult to miss how long macro expansion and implicit searches take in
the compilation of `frontend`, and how the values seem to be highly
correlated.

```
time spent implicits   : 33609 spans, ()26808.491ms (97.7%)
  successful in scope  : 346 spans, ()71.931ms (0.3%)
  failed in scope      : 33263 spans, ()3195.452ms (11.6%)
  successful of type   : 18286 spans, ()26730.255ms (97.4%)
  failed of type       : 14977 spans, ()17370.235ms (63.3%)
  assembling parts     : 18647 spans, ()374.562ms (1.4%)
  matchesPT            : 136322 spans, ()505.763ms (1.8%)
time spent macroExpand : 44445 spans, ()26451.132ms (96.4%)
```

This is a red flag. We expand around 44500 macro expansions (!) and spend
almost the totality of the macro expansion time searching for implicits.
We have our troublemaker.

### An initial exploration of the data

How do we know which implicit searches are the most expensive? What are the
macro expansions that dominate the compile time?

The data we get from `-Ystatistics` doesn't help us answer these questions,
even though they are fundamental to our analysis. As users, we treat macros
as blackboxes ---mere building blocks of our library or application--- and
now we need to unravel them.

#### A profiling plugin for `scalac`

To answer the previous questions, we're going to use
[scalac-profiling](https://github.com/scalacenter/scalac-profiling), a
compiler plugin that exposes more profiling data to Scala developers.

I wrote the plugin with three goals in mind:

* Expose a common file format that encapsulates all the compilation profiling
  data, called `profiledb`.
* Use visual tools to ease analysis of the data (e.g. flamegraphs).
* Allow third parties to develop tooling to integrate this data in IDEs and editors.
  There is a rough `vscode` prototype working.

The compiler plugin hooks into several parts of the compiler to extract
information related to implicit search and macro expansion. This data will
prove instrumental to understand the interaction between both features.

Install `scalac-profiling` by fetching the `1.0.0` release.

```bash
> $ coursier fetch --intransitive ch.epfl.scala:scalac-profiling_2.12:1.0.0
https://repo1.maven.org/maven2/ch/epfl/scala/scalac-profiling_2.12/6cac8b23/scalac-profiling_2.12-6cac8b23.jar
  100.0% [##########] 4.1 MiB (2.1 MiB / s)
/home/jvican/.coursier/cache/v1/https/oss.sonatype.org/content/repositories/staging/ch/epfl/scala/scalac-profiling_2.12/1.0.0/scalac-profiling_2.12-1.0.0.jar
```

Then open the `frontend`'s bloop configuration file and add the following
compiler options in the `options` field. Note that `-Xplugin` contains the
`$PATH_TO_PLUGIN_JAR` variable which you must replace with the resolved
artifact from coursier. Replace `$BLOOP_CODEBASE_DIRECTORY` by the base
directory of the cloned bloop repository.

```json
  "-Ycache-plugin-class-loader:last-modified",
  "-Xplugin:$PATH_TO_PLUGIN_JAR",
  "-P:scalac-profiling:no-profiledb",
  "-P:scalac-profiling:show-profiles",
  "-P:scalac-profiling:sourceroot:$BLOOP_CODEBASE_DIRECTORY"
```

The first two flags set up the compiler plugin.

The flag `-P:scalac-profiling:no-profiledb` disables the generation of
`profiledb`s and `-P:scalac-profiling:sourceroot` tells the plugin the base
directory of the project. The profiledb is only required when we process the
data with other tools, so by disabling it we keep the overhead of the plugin
to the bare minimum.

The flag `-P:scalac-profiling:show-profiles` displays the following data in
the compilation logs:

* Implicit searches by position. Useful to know how many implicit searches were
  triggered per position.
* Implicit searches by type. Essential data to know how many implicit searches
  were performed for a given type and how much time they took.
* Repeated macro expansions. An optimistic counter that tells us how many of
  the macros returned the same stringified AST nodes and could therefore be
  cached across all use-sites (in the macro implementation).
* Macro data in total, per file and per call-site. The macro data contains how
  many invocations of a macro were performed, how many AST nodes were
  synthesized by the macro and how long it took to perform all the macro
  expansions.

The profiling logs will be large, so make sure the buffer of your terminal is
big enough so that you can browse through them.

When you've added all the compile options to the configuration file and
saved it, the next compilation will output a log [similar to this
one](/resources/img/blog/bloop-compile-0.txt). This is the profiling data we're going to dig
into.

#### The first visual

First thing you notice from the data: compilation time has gone up. Don't
worry, you haven't done anything wrong.

```
#total compile time   : 1 spans, ()46169.708ms
```

Compiler plugins add overhead so the increased compilation time is expected.
In particular, the cost of `scalac-profiling` is high since it instruments
key parts of typer via compiler hooks. Remember that the cost will disappear
as soon as you remove the plugin from the bloop configuration file.

The first thing we need is to get a visual of the implicit searches. To do
that, we're going to create an implicit search flamegraph. Grep for the line
"Writing graph to" in the logs to find the `.flamegraph` file containing the
data.

---

To generate a flamegraph, clone
[scalacenter/scalac-profiling](https://github.com/scalacenter/scalac-profiling),
`cd` into `FlameGraph`, `git submodule update --init` and run the following
script in the repository:

```bash
./flamegraph.pl \
    --hash --countname="μs" \
    --color=scala-compilation \
    $PATH_TO_FLAMEGRAPH_DATA > bloop-profile-initial.svg
```

You can then visualize it with `$BROWSER bloop-profile-initial.svg`.

---

After we're all set up, we'll then get an `svg` file that looks like this:

[![Initial flamegraph of implicit search in `frontend`](/resources/img/blog/bloop-profile-0.png)](/resources/img/blog/bloop-profile-0.svg)

(The flamegraph in the blog post is a png image. You can check the svg by
opening the image in a new tab. Svg images allow you to hover on every stack,
search through the stack entries and check the compilation times of every box.)

We finally have a visual of all the implicit searches our program is doing,
and how their dependencies look like. But before we keep finding out what the
graph represents, let's take a slight detour and learn about common implicit
and macro usage patterns and in which context they are used.

This background information will help us read the flamegraph.

#### Typeclass derivation for the win

Typeclass derivation is a process that synthesizes
[typeclasses](https://en.wikipedia.org/wiki/Type_class) from other types. The
process can be manual (you define an `Encoder` for every node of your GADT)
or automatic (the `Encoder` derivation happens at compile time, i.e. the
compiler generates the code for you).

There are two families of automatic typeclass derivation:

* Automatic: to derive a typeclass for a given type `T`, the compiler will
  materialize any typeclass type `T` needs if it's not in scope.
* Semi-automatic: to derive a typeclass for a given type `T`, all the types `T`
  depends on have to have a derived typeclass in scope.

Typeclass derivation is popular in the Scala community. A few libraries (for
example, `scalatest`) define their own macros to synthesize type classes. The
most common approach, though, is to use Shapeless to guide the type
derivation on the library side, which removes the need for extra macros.

Shapeless is a generic programming library that defines some basic building
blocks (macros) to enable typelevel computations. These computations are
driven by implicit search and happen at compilation time. Shapeless is
popular library for automatic typeclass derivation because it can find out
the generic representation of any `sealed trait`/`case class` you have in
your program. So when the implicit search needs an instance that doesn't
exist in the scope, macros materialize it.

The compilation of `frontend` does automatic typeclass derivation via
`case-app`, which depends on Shapeless. `case-app` derives a
`caseapp.core.Parser` for a GADT defining the commands and parameters that
your command line interface accepts. This derivation relies on the `Lazy`,
`Strict`, `Tagged` and `LabelledGeneric` macros, as well as other Shapeless
data structures like `Coproduct` and `HList`.

These are normal dependencies of any library that uses Shapeless to guide
typeclass derivation.

#### The cost of implicit macros

Automatic and semi-automatic typeclass derivation use macro definitions
defined as `implicit` to guide the typeclass derivation at compile-time. For
example, every time you derive an encoder for an `HList`, say `Encoder`, you
derive it inductively for every element of its generic representation
(`HList` or `Coproduct`).

But how can macro definitions be `implicit` and what are the consequences of
that?

```scala
implicit def foo[T](p: T): Foo[T] = macro fooImpl[T]

// Undefined macro implementation for simplicity
def fooImpl[T: ctx.WeakTypeTag]
  (ctx: blackbox.Context)(p: ctx.Tree): ctx.Tree = ???
```

The code above defines an implicit def that synthesizes a type `Foo` for the
type `T`. The code generation only depends on `p` and the type `T` so there
are no functional dependencies. It is a dummy blackbox macro.

When macros like `foo` are defined in a library and they are eligible for an
implicit search of type `T`, the compiler goes through the list of all
candidates based on the priority of implicit search and gets the first
non-ambiguous match. If the match is a macro like `foo`, the macro is
expanded and the code inlined at the call-site.

This algorithm is correct but problematic for macros. The compiler will
always expand macros that are eligible to the implicit search even if the
resulting trees are thrown away.

On top of that, if several macros are candidates to an implicit search in the
same implicit scope, all of them will be expanded because the compiler needs
to check for ambiguity of implicit instances.

The efficiency of this process worsens when whitebox macros are used. For the
sake of this blog post, let's think of a whitebox macro as a blackbox macro
that can redefine the type of its enclosing definition.

Whitebox macros are powerful and that makes them more expensive than blackbox
macros: [they are typechecked three times by the Scala macro engine](https://github.com/scala/scala/pull/3236).

All kinds of macros eligible for implicit search pose a threat to compile
times and so they need to be used with care.

#### The world of shapeless

Shapeless defines **28 whitebox macros**. The most common whitebox Shapeless
macros are `Generic`, `Lazy`, `Nat`, `Default` and polymorphic function
values `Poly`. These are heavyweight macros that are common in many Scala
projects.

The main problem with these macros is that their use is heavy in automatic
typeclass derivation. When used in that context, it is common that the compiler
repeats the materialization of implicit instances. This is the main source of
inefficiencies.

Travis Brown explains these inefficiencies well in a more high-level manner in
[this talk about Generic
Derivation](https://meta.plasm.us/slides/scalaworld/#65) at Scalaworld.

Once a macro is triggered because an implicit doesn't exist in the scope of
the call-site, the implicit search needs to materialize all the functional
dependencies (all the implicits that are required for another implicit to be
eligible) together with the implicits in scope.

All these materialized instances **cannot be shared** across different
implicit searches since they don't exist in the call-site. Once the macro is
triggered, the code is expanded and typechecked and nothing can be re-used as
the macro code doesn't have access to the previous expansions.

#### Quick derivation example

```scala
sealed trait Base
case class Foo(xs: List[String]) extends Base
case class Bar(xs: List[String], i: Int) extends Base

implicitly[Encoder[Foo]]
implicitly[Encoder[Bar]]
```

For example, the code above illustrates how a hypothetical `Encoder` typeclass
would need to materialize `List[String]` **twice** since its type appears in
both definitions. The second call cannot detect that the first one
synthesizes `Encoder[List[String]]` because for all purposes there isn't an
implicit instance in scope.

The same happens in nested implicit searches and it worsens as more and more
functional dependencies generated by macros and nested types are used and
required in every step of the inductive process.

Remember that `frontend` was expanding 44500 macros and how intense
typechecking was? Well, now we have a faint idea why.


## The quest for optimization

We now have a clearer idea what we're after. `caseapp.core.Parser` is just an
standard typeclass that is automatically materialized by Shapeless
recursively.

The profiling data reveals us that the majority of the time is spent in
macro expansion and implicit searches, so it's likely we should see some of
the repeated materialized instances we discussed about in the previous
section.

Let's look at the profiling data again.

"Implicit searches by position" and "Macro data per file" tell us that almost
all of the work happens in a file called `CliParsers`.

```scala

object CliParsers {
  // Stubs to simplify reading the code
  implicit val inputStreamRead: ArgParser[InputStream] = ???
  implicit val printStreamRead: ArgParser[PrintStream] = ???
  implicit val pathParser: ArgParser[Path] = ???

  implicit val completionFormatRead: ArgParser[Format] = ???
  implicit val propParser: ArgParser[PrettyProperties] = ???

  import caseapp.core.{Messages, Parser}
  val BaseMessages: Messages[DefaultBaseCommand] =
    Messages[DefaultBaseCommand]
  val OptionsParser: Parser[CliOptions] =
    Parser.apply[CliOptions]

  import caseapp.core.{CommandsMessages, CommandParser}
  val CommandsMessages: CommandsMessages[RawCommand] =
    CommandsMessages[RawCommand]
  val CommandsParser: CommandParser[RawCommand] =
    CommandParser.apply[RawCommand]
}
```

The file defines specific parsers for data structures that `frontend`
defines, creates an instance of `caseapp.core.Messages`, a parser for cli
options, and then two instances of `CommandsMessages` and `CommandsParser`.

The two lines that define `CommandsMessages` and `CommandsParser` are the
ones that dominate the compilation time.

`CommandsParser` is creating a parser for all the commands defined in the
`RawCommand` GADT, which you can find in [this source
file](https://github.com/scalacenter/bloop/blob/v1.0.0-M10/frontend/src/main/scala/bloop/cli/Commands.scala#L28).
`RawCommand` has eight subclasses (commands) that specify the inputs required
for every CLI invocation. Each of this commands defines a `@Recurse`
field that allows Shapeless to reuse the parser for `CliOptions`.
`CliOptions` in turn requires the parser of `CommonOptions` in the same
fashion. Materializing this parser takes almost 14 seconds.

`CommandsMessages` does a similar thing but instead of materializing a parser
it materializes a class with a map of all the commands and information about
the parameters (fields) it takes. The materialization of `Messages` takes
around 13 seconds.

Let's come back to the flamegraph. We're now ready to continue our
exploration.

#### Reading the implicit search flamegraph


[![Initial flamegraph of implicit search in `frontend`](/resources/img/blog/bloop-profile-0.png)](/resources/img/blog/bloop-profile-0.svg)

The flamegraph has three colors. Every color has a meaning.

1. Green: a successful implicit search whose result didn't come from a macro (the normal case).
2. Blue (aqua): a successful implicit search whose result came from a macro.
3. Red: a failed implicit search that triggered at least one macro.

Every implicit search in the graph has some metadata at the end of the title.
Depending on the color, we can find:

1. Implicit search id: a number to identify an implicit search and inspect
   its result tree via `-P:scalac-profiling:print-search-result:$SEARCH_ID`.
2. The number of macro expansions triggered by an implicit search. This number
   only covers the direct macro expansions (not the transitive ones).
3. If the result tree comes from a macro, the macro location that expanded it.

Example:

```
shapeless.Strict[caseapp.core.Parser[bloop.cli.Commands.Run]] (id 12121) (expanded macros 3) (tree from `shapeless.LazyMacrosRef.mkStrictImpl`)  (417,117 μs, 3.28%)
```

On every stack trace, you have also the information about the timing. The
unit of time is microseconds. So one million μs is one second. We use
microseconds because flamegraphs cannot display decimal values and we want
to lose as litle time precision as possible.

Beware that an implicit search may not appear in the flamegraph even if it's
performed by `scalac`. There could be implicit searches that are so fast to
do that they take less than 0 μs. Flamegraphs do not show entries whose value
is under 0.

We're not going to use all of this information in the blog post, but it may
turn handy whenever you research on your own. Check the rest of the supported
compiler plugin flags [in the code](https://github.com/scalacenter/scalac-profiling/blob/master/plugin/src/main/scala/ch/epfl/scala/ProfilingPlugin.scala#L33-L40).

After this short intro, let's delve into the data. The first thing that
struck me is how similar all the towers of implicits look (both in shape and
duration). If we hover over all the chunks, the repetition will be obvious;
most bite-sized chunks materialize either `Parser[CommonOptions]` or
`Parser[CliOptions]`, depending at the height of the implicit branch we look
at.

This makes sense. After all, we're not caching these implicits in the call
sites. Let's cache them before the materialization of `CommandsMessages` and
`CommandsParser`.

```scala
implicit val coParser: Parser.Aux[CommonOptions, _] =
  Parser.generic
implicit val cliParser: Parser.Aux[CliOptions, _] =
  Parser.generic
```

The code above calls the materialization entrypoints from `caseapp.Parser`
directly. Type inference and implicit search will figure out the type
parameters that `Parser.generic` needs from the return type we specify
explicitly in the cached implicits.

---

A word of caution when caching implicits: make sure the rhs of the implicit
definition doesn't depend on the implicit you're caching.

It is common that `scalac` detects `coParser` as the candidate for the
implicit search on its rhs. This creates a recursive call that causes a null
pointer exception at runtime. We can reproduce the issue if we redefine
`coParser` as `implicitly[Parser[CommonOptions]]` or
`the[Parser[CommonOptions]]`.

---

Great! Well, let's check the compile time and flamegraphs now.

```
#total compile time  : 1 spans, ()19060.196ms
  typer              : 1 spans, ()13625.005ms (71.5%)
```

[![Flamegraph after cached implicits](/resources/img/blog/bloop-profile-1.png)](/resources/img/blog/bloop-profile-1.svg)

The compile time is 2.5x faster. Not bad for a two line change. The duration
of implicit search accounts for 13 seconds, roughly ~95% of typer.

The flamegraph has slimmed down and doesn't contain the successful implicit
searches for `Parser[CommonOptions]` and `Parser[CliOptions]`. However, there
seems to be quite a few of failed implicit searches that trigger unnecessary
macro expansions that are afterwards discarded because their type doesn't
match the predicate type of the implicit search.

```
caseapp.core.Parser[bloop.cli.CliOptions]{type D = HD} (expanded macros 0)   (278,828 μs, 2.19%)
caseapp.core.Parser[bloop.cli.CommonOptions]{type D = HD} (expanded macros 0)   (189,414 μs, 1.49%)
```

It looks like the implicit search doesn't immediately reuse our cached
parsers for `CommonOptions` and `CliOptions` and first tries to pass in a
explicit refinement type `D` that fails the search. The error seems to happen
when finding an implicit for `HListParser` (which takes type parameters
[inferred from its other functional
dependencies](https://github.com/alexarchambault/case-app/blob/v1.2.0/core/shared/src/main/scala/caseapp/core/Parser.scala#L77-L84)).

Let's further debug this by adding `-Xlog-implicits` to the scalac
options of the bloop configuration file.

This is a good moment to try to minimize the problem. `-Xlog-implicits` will
log a lot of failed searches and we want to be able to see through the noise.
I did minimise the issue
[here](https://github.com/scalacenter/scalac-profiling/pull/23/commits/dbcb8d480e9b402899d21620055bc555b2841382).
Doing `implicitly[Parser[CliOptions]]` also reproduces it.

Among all the logs, this is the one that attracts my attention the most.

```
/data/rw/code/scala/loop/frontend/src/main/scala/bloop/cli/CliParsers.scala:48:37: shapeless.this.Generic.materialize is not a valid implicit value for shapeless.Generic.Aux[bloop.cli.CommonOptions,V] because:
type parameters weren't correctly instantiated outside of the implicit tree: inferred type arguments [String :: java.io.PrintStream :: java.io.InputStream :: java.io.PrintStream :: java.io.PrintStream :: java.io.PrintStream :: bloop.cli.CommonOptions.PrettyProperties :: Int :: shapeless.HNil,Nothing] do not conform to method materializeCoproduct's type parameter bounds [V <: shapeless.Coproduct,R <: shapeless.Coproduct]
    caseapp.core.CommandParser.apply[Commands.RawCommand]
                                    ^
```

The compiler infers `R` to be `Nothing`, which of course cannot be a
`Coproduct`, but that doesn't prevent the macro in `materializeCoproduct` to
materialize and suck up some of our compile times. After all, the implicit
search needs to have the exact return type of the macro.

`Generic` is required by `case-app` via `LabelledGeneric`, which is required
by `HListParser`. However, why is `materializeCoproduct` eligible in this
context if all we want is to derive parsers for all the products of `Command`
(e.g. all the subclasses that extend the `Command` GADT)?

It seems this is bringing us to uncharted territory. We now need to
investigate what the `Generic` macro is doing in the Shapeless codebase.

#### A tour through Shapeless's `Generic`

`Generic` is a macro that will derive the generic representation of a given
product, a type that aggregates other types. A `case class Foo(i: Int, s:
String)` aggregates `Int` and `String` types, whereas a `sealed trait Bar` is
either of all its subclasses.

The source code of `Generic` has two implicit candidates that materialize the
instance depending if the candidate type is a `Product` or a `Coproduct`:
[`materializeProduct`](https://github.com/milessabin/shapeless/blob/a42cd4c1c99e4a7be36e0239d3ee944a6355e321/core/src/main/scala/shapeless/generic.scala#L218-L230)
and
[`materializeCoproduct`](Xhttps://github.com/milessabin/shapeless/blob/a42cd4c1c99e4a7be36e0239d3ee944a6355e321/core/src/main/scala/shapeless/generic.scala#L232-L245).

The problem of incorrect instantiated type arguments we saw before seems
specific to the way the compiler carries out the implicit search. Fixing it
requires most likely changes to the implicit search algorithm, as [a similar
Scala compiler issue](https://github.com/scala/bug/issues/10528) did. I tried porting
these changes to 2.12.x and use `-Xsource:2.13` but the failed macro
expansions didn't go away.

So we need to find a way to fix this in userspace if we want to make the logs
disappear. The root of the issue is that both `materializeProduct` and
`materializeCoproduct` are candidates of the implicit search and both are
tried. The compiler considers both eligible even though
`materializeCoprodunt` should be discarded. As this isn't the case, the
compiler then forces the expansion of all candidates to check for ambiguous
ambiguous implicits in the same scope).

Let's try a trick. Let's move the definition of `materializeCoproduct` to a
trait of low priority implicits that the `Generic` companion extends. This
way, `materializeProduct` (the most common materializer) will always be the
first one to be tried.

Only if that search fails the implicit search will try `materializeCoproduct`
in the lower priority scope that is any super class of the `Generic`
companion class.

After [making the
change](https://github.com/jvican/shapeless/commit/9a6d70cbda92849ff2a9b3d99f2aa4d5d82bf21f)
in the Shapeless codebase, we `coreJVM/package` in the shapeless build and
replace the jar of shapeless 2.3.3 in the classpath by the one we just
created with `package`. We also remove `-Xlog-implicits` and compile.

```
#total compile time  : 1 spans, ()16869.585ms
  typer              : 1 spans, ()13011.067ms (77.1%)
#implicit searches          : 13515
  #plausibly compatible     : 15415 (114.1%)
  #matching                 : 15415 (114.1%)
  #typed                    : 15381 (113.8%)
  #found                    : 8082 (59.8%)
  #implicit improves tests  : 3673 (27.2%)
  #implicit improves cached : 2614 (19.3%)
  #implicit inscope hits    : 348 (2.6%)
  #implicit oftype hits     : 7400 (54.8%)
  from macros               : 12851 (95.1%)
time spent in implicits   : 13515 spans, ()12409.099ms (95.4%)
  successful in scope     : 348 spans, ()78.224ms (0.6%)
  failed in scope         : 13167 spans, ()1363.491ms (10.5%)
  successful of type      : 7400 spans, ()12287.668ms (94.4%)
  failed of type          : 5767 spans, ()8322.049ms (64.0%)
  assembling parts        : 8033 spans, ()237.456ms (1.8%)
  matchesPT               : 79854 spans, ()566.231ms (4.4%)
time spent in macroExpand : 17175 spans, ()11974.695ms (92.0%)
```

[![Implicit flamegraph after shapeless change](/resources/img/blog/bloop-profile-2.png)](/resources/img/blog/bloop-profile-2.svg)

The change had a mild positive effect -- we gained two seconds. This change
seems to have removed the log we saw before and some of the failed implicit
searches from the flamegraph, but most of the other ones still persist.

What is really going on? Our modification fixed the unnecessary expansion for
`Generic`, but there seems to be a more fundamental issue at play.

#### The Strict-Lazy macro doesn't like the aux pattern

It took me a while to find out what was happening, though I couldn't come up
with a fix in the compiler (where I think the real issue is -- though it's
still to be determined). However, I did come up with a fix in the library
side.

---

After looking at the new output of `-Xlog-implicits`, I realized that the
compiler must find a mismatch in the refinement types that are inferred
previously to the search and materialized after the expansion.

The [`Aux`
pattern](https://github.com/milessabin/shapeless/blob/a42cd4c1c99e4a7be36e0239d3ee944a6355e321/core/src/main/scala/shapeless/generic.scala#L120-L148),
a common technique used when declaring typeclasses, relies heavily on
refinement types and all the failed implicit searches seem to be related in
some way or another to the aux pattern of either `HListParser` or `Strict`.

We can have a look at the definition of `Parser` again, which requires the
materialization of `HListParser`. I intuited that the `Strict` macro may be
doing something weird under the hood and causing the type mismatch.

I expanded and pretty-printed some of the implicit logs I found:

```scala
shapeless.Strict[
  caseapp.core.HListParser.Aux[
    shapeless.labelled.FieldType[Symbol with shapeless.tag.Tagged[String("workingDirectory")],String] :: java.io.PrintStream with shapeless.labelled.KeyTag[Symbol with shapeless.tag.Tagged[String("out")],java.io.PrintStream] :: java.io.InputStream with shapeless.labelled.KeyTag[Symbol with shapeless.tag.Tagged[String("in")],java.io.InputStream] :: java.io.PrintStream with shapeless.labelled.KeyTag[Symbol with shapeless.tag.Tagged[String("err")],java.io.PrintStream] :: java.io.PrintStream with shapeless.labelled.KeyTag[Symbol with shapeless.tag.Tagged[String("ngout")],java.io.PrintStream] :: java.io.PrintStream with shapeless.labelled.KeyTag[Symbol with shapeless.tag.Tagged[String("ngerr")],java.io.PrintStream] :: shapeless.HNil,
    Option[String] :: Option[java.io.PrintStream] :: Option[java.io.InputStream] :: Option[java.io.PrintStream] :: Option[java.io.PrintStream] :: Option[java.io.PrintStream] :: shapeless.HNil,
    List[caseapp.Name] :: scala.collection.immutable.Nil.type :: scala.collection.immutable.Nil.type :: scala.collection.immutable.Nil.type :: scala.collection.immutable.Nil.type :: scala.collection.immutable.Nil.type :: shapeless.HNil,
    Option[caseapp.ValueDescription] :: None.type :: None.type :: None.type :: None.type :: None.type :: shapeless.HNil,
    Option[caseapp.HelpMessage] :: None.type :: None.type :: None.type :: None.type :: None.type :: shapeless.HNil,
    Option[caseapp.Hidden] :: Some[caseapp.Hidden] :: Some[caseapp.Hidden] :: Some[caseapp.Hidden] :: Some[caseapp.Hidden] :: Some[caseapp.Hidden] :: shapeless.HNil,
    None.type :: None.type :: None.type :: None.type :: None.type :: None.type :: shapeless.HNil,
    Option[String] :: this.P
  ]
]

does not match expected type

shapeless.Strict[
  caseapp.core.HListParser.Aux[
    shapeless.labelled.FieldType[Symbol @@ String("workingDirectory"),String] :: shapeless.labelled.FieldType[Symbol @@ String("out"),java.io.PrintStream] :: shapeless.labelled.FieldType[Symbol @@ String("in"),java.io.InputStream] :: shapeless.labelled.FieldType[Symbol @@ String("err"),java.io.PrintStream] :: shapeless.labelled.FieldType[Symbol @@ String("ngout"),java.io.PrintStream] :: shapeless.labelled.FieldType[Symbol @@ String("ngerr"),java.io.PrintStream] :: shapeless.ops.hlist.ZipWithKeys.hnilZipWithKeys.Out,
    Option[String] :: Option[java.io.PrintStream] :: Option[java.io.InputStream] :: Option[java.io.PrintStream] :: Option[java.io.PrintStream] :: Option[java.io.PrintStream] :: shapeless.HNil,
    scala.collection.immutable.Nil.type :: scala.collection.immutable.Nil.type :: scala.collection.immutable.Nil.type :: scala.collection.immutable.Nil.type :: scala.collection.immutable.Nil.type :: scala.collection.immutable.Nil.type :: shapeless.HNil,
    None.type :: None.type :: None.type :: None.type :: None.type :: None.type :: shapeless.HNil,
    None.type :: None.type :: None.type :: None.type :: None.type :: None.type :: shapeless.HNil,
    Some[caseapp.Hidden] :: Some[caseapp.Hidden] :: Some[caseapp.Hidden] :: Some[caseapp.Hidden] :: Some[caseapp.Hidden] :: Some[caseapp.Hidden] :: shapeless.HNil,
    None.type :: None.type :: None.type :: None.type :: None.type :: None.type :: shapeless.HNil,
    HD
  ]
]
```

And inspect the generated code by the macro expansion by using
`-P:scalac-profiling:print-search-result:_` and
`-Ymacro-debug-lite`/`-Ymacro-debug-verbose` (which dumps all macro related
logs). That extra inspection gave me some hints.

The issue seems to be in the refinement of `HListParser`. In the previous log the last type parameter of `HListParser.Aux` (the refinement type) was `HD`, an abstract type used
[here](https://github.com/alexarchambault/case-app/blob/v1.2.0/core/shared/src/main/scala/caseapp/core/HListParser.scala#L131-L159),
and the returned refinement type from the macro was `Option[String] ::
this.P`.

We can try to debug and expand all type parameters, see what we get and
continue the exploration from there. But whenever we find such a mysterious
open-ended error, it's difficult to pinpoint what the real problem and fix
should be.

Myself, I had a gut feeling that the `Strict` macro was interacting weirdly
with the aux pattern and followed that hint. The way we can test this hypothesis
is by going to [the definition of
`Parser`](https://github.com/alexarchambault/case-app/blob/v1.2.0/core/shared/src/main/scala/caseapp/core/Parser.scala#L84)
where we remove the `Strict` wrapping `HListParser`, `++2.12.6
coreJVM/package` in the sbt build and replace the new jar by the classpath
entry for case-app core we're using in `frontend.json`. Afterwards we compile.

This change may cause errors since the use of `Strict` and `Lazy` disable the
implicit divergence checks of the compiler, which can give false positives
when working with Shapeless data structures (this is the short story).

```
/data/rw/code/scala/loop/frontend/src/main/scala/bloop/Bloop.scala:22:22:could not find implicit value for parameter parser: caseapp.Parser[bloop.cli.CliOptions]
object Bloop extends CaseApp[CliOptions] {
                     ^
/data/rw/code/scala/loop/frontend/src/main/scala/bloop/Bloop.scala:22:22:not enough arguments for constructor CaseApp: (implicit parser: caseapp.Parser[bloop.cli.CliOptions], implicit messages: caseapp.core.Messages[bloop.cli.CliOptions]) caseapp.CaseApp[bloop.cli.CliOptions].
Unspecified value parameters parser, messages.
object Bloop extends CaseApp[CliOptions] {
                     ^
```

The error can be fixed by importing `coParser` and `cliParser` from
`CliParsers` in the `Bloop.scala` source file. But doing so would change our
baseline (because we're caching `Parser[CliOptions]` in another call-site
that isn't our initial `CliParsers`). So let's remove the new case-app
classpath entry, compile with the old case-app, and then compile again with
the changed version.

```
#total compile time  : 1 spans, ()15972.609ms
  typer              : 1 spans, ()11360.512ms (71.1%)
```

[![New flamegraph baseline](/resources/img/blog/bloop-profile-3.png)](/resources/img/blog/bloop-profile-3.svg)

The new caching only shaves around ~600ms of compile times. Let's check
compiling with our new case-app now.

```
#total compile time  : 1 spans, ()7432.332ms
  typer              : 1 spans, ()5074.836ms (68.3%)
```

[![Flamegraph after case-app change](/resources/img/blog/bloop-profile-4.png)](/resources/img/blog/bloop-profile-4.svg)

Bingo! Most of the time-consuming failed implicit searches are gone and
compilation time has halved. Our hypothesis is confirmed: the `Strict` macro
is doing something suspicious.

We could try to find out what that is, but that would require us to
investigate how the `Strict` macro works and spot why it doesn't behave
correctly.

We're short of time, so our best call is to file a ticket and let others more
experienced with the codebase have a look at it. If we're lucky, someone will
fix this issue upstream soon and we'll benefit from this speed up when we
upgrade.

After discussing this issue with the author of Shapeless, [Miles Sabin](https://github.com/milessabin/), we
both agree the strict/lazy macro is not handling refinement types correctly
and that this performance penalty is a bug. This bug will most likely be fixed
in a future version of Shapeless after 2.3.3 for all its users. Some of these
performance implications will be gone with Scala 2.13, that adds by-name
implicits to the compiler.

#### Deduplicating more expansions

There are still too many repeated tower of implicits in our flamegraph. 
`CommandsParser` and `CommandsMessages` are deriving `Parser`s for every type
in our `Command` GADT twice. Let's cache those too.

```scala
implicit val autocompleteParser: Parser[Commands.Autocomplete] = Parser.generic
implicit val aboutParser: Parser[Commands.About] = Parser.generic
implicit val bspParser: Parser[Commands.Bsp] = Parser.generic
implicit val cleanParser: Parser[Commands.Clean] = Parser.generic
implicit val compileParser: Parser[Commands.Compile] = Parser.generic
implicit val configureParser: Parser[Commands.Configure] = Parser.generic
implicit val helpParser: Parser[Commands.Help] = Parser.generic
implicit val projectsParser: Parser[Commands.Projects] = Parser.generic
implicit val runParser: Parser[Commands.Run] = Parser.generic
implicit val testParser: Parser[Commands.Test] = Parser.generic
```

```
#total compile time  : 1 spans, ()10154.603ms
  typer              : 1 spans, ()7925.156ms (78.0%)
```

[![Flamegraph after more cached parsers](/resources/img/blog/bloop-profile-5.png)](/resources/img/blog/bloop-profile-5.svg)

We're in the right direction, but there doesn't seem to be any
straightforward way of decreasing that compilation time anymore.

The flamegraph may not make obvious how many repeated expansions are
happening in every branch, so let's have a look at the data emitted by
`-P:scalac-profiling:show-profiles`.

The "Macro expansions by type" and "Implicit searches by type" tells us
how many repeated macros and implicit searches we have per type.

For example, let's look at the most important entries from from the "Implicit
searches by type" section.

```
  "caseapp.util.Implicit[caseapp.core.Default[String] :: shapeless.HNil]" -> 20,
  "caseapp.core.Default[String] :: shapeless.HNil" -> 20,
  "caseapp.util.Implicit[Some[caseapp.core.Default[String]] :+: None.type :+: shapeless.CNil]" -> 20,
  "caseapp.core.Default[String]" -> 20,
  "Some[caseapp.core.Default[String]] :+: None.type :+: shapeless.CNil" -> 20,
  "caseapp.util.Implicit[Option[caseapp.core.Default[String]]]" -> 20,
  "caseapp.core.ArgParser[String]" -> 20,
  "caseapp.util.Implicit[Some[caseapp.core.Default[String]]]" -> 20,
  "Option[caseapp.core.Default[String]]" -> 20,
  "shapeless.HNil" -> 21,
  "Some[caseapp.core.Default[Boolean]] :+: None.type :+: shapeless.CNil" -> 35,
  "caseapp.core.Default[Boolean]" -> 35,
  "caseapp.util.Implicit[Some[caseapp.core.Default[Boolean]] :+: None.type :+: shapeless.CNil]" -> 35,
  "caseapp.util.Implicit[caseapp.core.Default[Boolean]]" -> 35,
  "shapeless.Strict[caseapp.core.ArgParser[Boolean]]" -> 35,
  "caseapp.core.Default[Boolean] :: shapeless.HNil" -> 35,
  "caseapp.util.Implicit[Some[caseapp.core.Default[Boolean]]]" -> 35,
  "caseapp.util.Implicit[Option[caseapp.core.Default[Boolean]]]" -> 35,
  "Some[caseapp.core.Default[Boolean]]" -> 35,
  "Option[caseapp.core.Default[Boolean]]" -> 35,
  "caseapp.util.Implicit[caseapp.core.Default[Boolean] :: shapeless.HNil]" -> 35,
  "caseapp.util.Implicit[Option[caseapp.core.Default[java.io.PrintStream]]]" -> 56,
  "caseapp.util.Implicit[Some[caseapp.core.Default[java.io.PrintStream]] :+: None.type :+: shapeless.CNil]" -> 56,
  "Some[caseapp.core.Default[java.io.PrintStream]] :+: None.type :+: shapeless.CNil" -> 56,
  "shapeless.Strict[caseapp.core.ArgParser[java.io.PrintStream]]" -> 56,
  "Option[caseapp.core.Default[java.io.PrintStream]]" -> 56,
  "caseapp.core.Default[java.io.PrintStream]" -> 56,
  "caseapp.util.Implicit[caseapp.core.Default[java.io.PrintStream]]" -> 56,
  "Some[caseapp.core.Default[java.io.PrintStream]]" -> 56,
  "caseapp.util.Implicit[caseapp.core.Default[java.io.PrintStream] :: shapeless.HNil]" -> 56,
  "caseapp.core.Default[java.io.PrintStream] :: shapeless.HNil" -> 56,
  "caseapp.util.Implicit[Some[caseapp.core.Default[java.io.PrintStream]]]" -> 56,
  "None.type" -> 153,
  "caseapp.util.Implicit[None.type]" -> 153,
  "caseapp.util.Implicit[None.type :+: shapeless.CNil]" -> 153,
  "caseapp.util.Implicit[shapeless.HNil]" -> 185
```

Let's cache some more implicits from here, especially the ones we see are
most expensive.

```scala
import shapeless.{HNil, CNil, :+:, ::, Coproduct}
implicit val implicitHNil: Implicit[HNil] = Implicit.hnil
implicit val implicitNone: Implicit[None.type] = Implicit.instance(None)
implicit val implicitNoneCnil: Implicit[None.type :+: CNil] =
  Implicit.instance(Coproduct(None))

implicit val implicitOptionDefaultString: Implicit[Option[Default[String]]] =
  Implicit.instance(Some(caseapp.core.Defaults.string))

implicit val implicitOptionDefaultInt: Implicit[Option[Default[Int]]] =
  Implicit.instance(Some(caseapp.core.Defaults.int))

implicit val implicitOptionDefaultBoolean: Implicit[Option[Default[Boolean]]] =
  Implicit.instance(Some(caseapp.core.Defaults.boolean))

implicit val implicitDefaultBoolean: Implicit[Default[Boolean]] =
  Implicit.instance(caseapp.core.Defaults.boolean)

implicit val implicitOptionDefaultOptionPath: Implicit[Option[Default[Option[Path]]]] =
  Implicit.instance(None)

implicit val implicitOptionDefaultPrintStream: Implicit[Option[Default[PrintStream]]] =
  Implicit.instance(Some(Default.instance[PrintStream](System.out)))

implicit val implicitOptionDefaultInputStream: Implicit[Option[Default[InputStream]]] =
  Implicit.instance(Some(Default.instance[InputStream](System.in)))
implicit val labelledGenericCommonOptions: LabelledGeneric.Aux[CommonOptions, _] =
  LabelledGeneric.materializeProduct
implicit val labelledGenericCliOptions: LabelledGeneric.Aux[CliOptions, _] =
  LabelledGeneric.materializeProduct
```

And now let's check the compilation time.

```
#total compile time  : 1 spans, ()7285.771ms
  typer              : 1 spans, ()5435.895ms (74.6%)
```

[![Flamegraph after all cached implicits](/resources/img/blog/bloop-profile-6.png)](/resources/img/blog/bloop-profile-6.svg)

Great, that reduced compile times by 3 more seconds. You can continue the
same strategy over and over. This is where we stop; we have already cached the
most expensive implicits, so other additions won't have such a big impact.

You get the general idea of the process: read the profiles and optimize
according to what the data shows and your understanding of the codebase is.

We only have one left assignment: removing all those failed implicit searches
in our flamegraph. We saw that wrapping the implicit in `Strict` was
problematic, can we do something about it in our end instead of waiting for a
fix upstream?

The answer is yes. `Strict` or `Lazy` are only required when:

1. We have recursive GADTs.
2. We use an automatic typeclass derivation scheme that increases the number
   of type parameters to be determined by implicit search and thus "diverge" the
   search.

Good, we don't have a recursive GADT (and it's unlikely you will in a CLI
application). But we do have an automatic typeclass derivation process that
meets the previous criteria. We experienced the implicit search failure
before when we removed the `Strict` typeclass from `case-app` and
`Bloop.scala` failed to compile.

Such automatic typeclass derivation, though, doesn't diverge after we cached
the implicits! The divergence only happens when we derive typeclasses for
types transitively (and the transitive typeclasses don't exist). For example,
if the parser for `CliOptions` isn't present in scope and we derive a
`Parser[Compile]`, which has `CliOptions` as a parameter type, it will fail.

So we can remove the uses of `Strict` from `case-app`. Once we cache these
intermediary derivations, the divergence won't happen.

Aside from the change proposed in the previous section, we also remove the
appearance of `Strict` in `HListParser.hconsRecursive`. These changes can be
found in [this `case-app`
diff](https://github.com/jvican/case-app/commit/148ffb0a20226a6224ab53f87a8f7411036cdd3f).

It's worth noting what we're doing here explicitly: we're trading compile
times by ergonomics. Whenever we add a parameter that doesn't have a cached
`Parser` for it in `CliParser`, the implicit search will fail with a `"Not
found implicit instance"` error.

This is a judgement call. Personally, I prefer having faster compile times
than ergonomics, and even more so if the part of the code (the cli) doesn't
change often as it is the case. Let's try out the new change!

```
#total compile time  : 1 spans, ()4511.197ms
  typer              : 1 spans, ()2887.031ms (64.0%)
```

[![Flamegraph after caching + case-app changes](/resources/img/blog/bloop-profile-7.png)](/resources/img/blog/bloop-profile-7.svg)

Great! We now have a compile time under 5 seconds for an application that
still uses a powerful derivation mechanism, it's easy to maintain and it's
over 6000 LOC.

In the flamegraph, we observe that we have removed the most expensive failed
implicit searches, while some negligible searches remain. We can live with
those.

The duration of the typechecker is back to normal levels: 64%, a reasonable
value for the codebase we're working on. We now need to remove the
instrumentation overhead to see what's the final speedup we get.

#### Getting the final results

Let's remove the `scalac-profiling` plugin and all its flags from
`frontend.json`. Run compilation two or three times to get stable results.

```
*** Cumulative timers for phases
#total compile time           : 1 spans, ()4098.49ms
  parser                      : 1 spans, ()18.775ms (0.5%)
  namer                       : 1 spans, ()12.408ms (0.3%)
  packageobjects              : 1 spans, ()0.074ms (0.0%)
  typer                       : 1 spans, ()2612.532ms (63.7%)
  patmat                      : 1 spans, ()286.802ms (7.0%)
  superaccessors              : 1 spans, ()12.026ms (0.3%)
  extmethods                  : 1 spans, ()3.201ms (0.1%)
  pickler                     : 1 spans, ()6.389ms (0.2%)
  xsbt-api                    : 1 spans, ()75.191ms (1.8%)
  xsbt-dependency             : 1 spans, ()54.559ms (1.3%)
  refchecks                   : 1 spans, ()122.441ms (3.0%)
  uncurry                     : 1 spans, ()130.194ms (3.2%)
  fields                      : 1 spans, ()57.397ms (1.4%)
  tailcalls                   : 1 spans, ()13.512ms (0.3%)
  specialize                  : 1 spans, ()105.903ms (2.6%)
  explicitouter               : 1 spans, ()26.837ms (0.7%)
  erasure                     : 1 spans, ()193.214ms (4.7%)
  posterasure                 : 1 spans, ()16.83ms (0.4%)
  lambdalift                  : 1 spans, ()41.906ms (1.0%)
  constructors                : 1 spans, ()11.108ms (0.3%)
  flatten                     : 1 spans, ()14.379ms (0.4%)
  mixin                       : 1 spans, ()15.936ms (0.4%)
  cleanup                     : 1 spans, ()11.516ms (0.3%)
  delambdafy                  : 1 spans, ()26.534ms (0.6%)
  jvm                         : 1 spans, ()224.115ms (5.5%)
  xsbt-analyzer               : 1 spans, ()1.376ms (0.0%)
Done compiling.
```

It is safe to say it out loud now: we have reduced compilation time from 32.5
seconds to 4 seconds. That's an **8x reduction in our compile time**.

A great result taking into account that we've only [modified around 30 lines
of code in Bloop](https://github.com/scalacenter/bloop/pull/509).

## Conclusion

Shapeless is a great library that enables use cases that before were too
difficult for the majority of Scala developers. These use cases save a lot of
boilerplate.

Shapeless has relieved these users from learning macros and getting familiar
with the internals of the compiler to do both basic generic and advanced
typelevel programming in Scala.

However, the techniques used in Shapeless cause slow compilation times and
may give an impression that the Scala compiler is terribly slow. These
techniques are not specific to Shapeless and may happen in other libraries
that use a lot of implicits and macros.

In all these use cases, the slowness is most likely to be caused by a
unintentional misuse of the APIs provided by these frameworks. In this guide,
we have tried to identify what those issues are and how we can get the best
of Shapeless and the compiler without compromising our productivity.

We have learned that automatic typeclass derivation, while powerful and
user-friendly, is likely to materialize implicits for the same type lots of
times.

We have used a new Scala Center tool (`scalac-profiling`) to profile
implicits and macros to reduce the compile times of
[Bloop](https://scalacenter.github.io/bloop/) by **8x**.

Finally, we have gotten a little bit more familiar about the way automatic
typeclass derivation interacts with macro and implicit searches. It is
generally agreed that we need to find a better way to bake generation into
the language to alleviate some of the pitfalls here described.

There's some activity in this area. [Adriaan opened a ticket about it several
months ago](https://github.com/scala/scala-dev/issues/445), and Miles is
backporting the heavy machinery from Shapeless properly into the compiler
(like [by-name
implicits](https://docs.scala-lang.org/sips/byname-implicits.html)). I
applaud these efforts.

I believe we still need to find solutions to some of the fundamental problems
of implicit searches and macros. In particular, being more aggressive in
caching macro generated trees and baking into the compiler all the required
knowledge to invalidate caching depending on the kind of macro and call-site.

There's a bright future ahead of us and we are working hard to get there.

In the meanwhile, this blog post aims to provide all the possible data to
alleviate the compile times of users that leverage automatic typeclass
derivation. I hope this blog post helps make your team more productive with
Scala.

[Shapeless]: https://github.com/milessabin/shapeless
