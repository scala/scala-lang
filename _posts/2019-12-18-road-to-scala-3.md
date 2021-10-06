---
layout: blog-detail
post-type: blog
by: Lukas Rytz, Adriaan Moors, Martin Odersky
title: "Scala 2 Roadmap Update: the Road to Scala 3"
isHighlight: true
---

Together with the Scala 3 team at EPFL (aka the Dotty team), led by Martin Odersky, we have decided that, rather than developing Scala 2.14, our efforts should go to Scala 3 instead.

While we're very excited to shift our focus to Scala 3, we will continue to maintain Scala 2.13 to ensure the community has ample time to carefully transition to Scala 3.

We had long assumed that a 2.14 release would be necessary to assure a smooth transition to 3. After a great deal of study and discussion, we are now confident that 2.14 simply isn't needed. We believe that's good news for everyone! The benefit we see is twofold:

* Scala 3 will be ready for production faster! There's a lot of work to be done on polishing the compiler and upgrading our tooling. We will also help the ecosystem upgrade.

* The Scala library and tooling ecosystem will not need to be rebuilt for 2.14, freeing up maintainers' time to prepare for Scala 3 instead.

Our primary goal is to provide a smooth and incremental migration path from Scala 2 to 3. To accomplish this, Scala 2.13 and 3.0 will use the same standard library, and their compiler back-ends will emit bytecode in the same way. The following paragraphs explain these features in a bit more detail.

**Shared standard library**

Sharing the standard library eliminates a major potential difference between Scala 2.13 and 3 and helps migration.

However, it also means that binary incompatible changes to the standard library will have to wait until later in the Scala 3.x series, when we have tooling to remedy binary incompatibilities (see notes on TASTy below). More specifically, since Scala 2.13 is, and will remain, forwards and backwards binary compatible within its series, no classes or methods can be added or removed.

We might eventually still opt to release a Scala 2.14, if during the Scala 2 to 3 migration period, there's a compelling need for evolving the standard library outside of these constraints.

**Shared ABI**

By also sharing the "ABI" (the "application binary interface", that is, the way traits, lazy vals, etc. are represented in bytecode and the IR of Scala.js/Native), Scala 3.0 and 2.13 artifacts can co-exist on the classpath and interoperate seamlessly. This enables gradual migration and simplifies testing.

Scala 3 is already backwards compatible today: it can consume libraries built with Scala 2.13 (except for libraries that define macros, see the Q&A on macros below). To achieve forwards compatibility, the Scala 3 compiler will provide a mechanism to ensure that the public interface is in the common language subset, so that it can be consumed from Scala 2.13. This means that, as a library author, you can adopt (some of) Scala 3 without requiring your users to upgrade from Scala 2.13.

Besides technical interoperability, we will invest in testing and improve tooling to ensure a smooth migration. For example, migration warnings originally scheduled for 2.14 will be implemented in 2.13. We do not rule out backporting certain Scala 3 features to 2.13 under a flag, but this will not be a priority. For more details, read the Q&A section below.

We're looking forward to an exciting 2020, working with all of the community to make Scala 3 a success!

## Q&A

* [When will Scala 3.0 be released?](#when-will-scala-30-be-released)
* [How is the standard library going to evolve?](#how-is-the-standard-library-going-to-evolve)
* [What is TASTy?](#what-is-tasty)
* [How is binary compatibility handled in Scala 3?](#how-is-binary-compatibility-handled-in-scala-3)
* [What about macros?](#what-about-macros)
* [What breaking changes are in Scala 3, besides macros?](#what-breaking-changes-are-in-scala-3-besides-macros)
* [What about performance?](#what-about-performance)
* [What can I expect from tooling?](#what-can-i-expect-from-tooling)
* [I'm reminded of Python 2 / 3. Should I be worried?](#im-reminded-of-python-2--3-should-i-be-worried)
* [How can I contribute?](#how-can-i-contribute)

### When will Scala 3.0 be released?

We're working towards a first release candidate by the end of 2020. We'll have regular milestones throughout the year. Your feedback and our experience in testing, benchmarking and helping port the ecosystem will guide the decision on when to cut the first release candidate. We will keep you informed as we refine the release timeline.

### How is the standard library going to evolve?

Scala 3.0 will use the same standard library as Scala 2.13.x, the same binary jar. This simplifies the migration to Scala 3 by avoiding an entire area of potential differences, and it enables Scala 3.0 and 2.13 artifacts to co-exist on the classpath.

Like any Scala 2 release, the Scala 2.13 standard library is, and will remain, backwards and forwards binary compatible. This restricts the changes that can be performed: no public classes or methods can be added or removed. (Backwards compat prevents removals; forward compat prevents additions.)

Nevertheless, it is possible to implement significant improvements in the implementation of existing classes while remaining binary compatible. For example, there is an [open pull request](https://github.com/scala/scala/pull/8534) with a complete rewrite of `collection.immutable.Vector` that is binary compatible. Currently, adding overrides in the collections library often leads to binary incompatibilities, but there is [a proposal](https://github.com/scala/bug/issues/11804) to address this issue.

Using the Scala 2.13 standard library is only a starting point. It does not apply to the entire Scala 3.x series. A later Scala 3 release, perhaps 3.2, will ship with its own standard library. From this point on, Scala 3.x releases will only be backwards compatible. This will allow adding new classes and methods in minor releases. Even before that, it is possible to release extensions of the 2.13 library in 3.0 or 3.1. Libraries using these extensions would be restricted to Scala 3 users.

Every library compiled with Scala 3 includes TASTy, which allows bridging binary encoding changes between minor versions (see Q&A on TASTy below). This enables code compiled with the eventual Scala 3-only standard library to work with any newer Scala 3.x. This improves the maintainability of the standard library. Instead of requiring binary compatibility (which depends on bytecode encoding details), changes to existing classes only have to be TASTy API compatible.

Any semantic and structural change to the standard library has to wait until Scala 4. But that day needn't be far in the future. New major releases will become more frequent, mainly driven by improvements to the standard library that cannot be implemented in a backwards-compatible fashion.

### What is TASTy?

The Scala 3 compiler serializes every program that it compiles in a compact representation called TASTy. The name TASTy stands for "Typed Abstract Syntax Trees (y)", which hints at the representation format: it is the full program code in the form of syntax trees, which is what the compiler uses internally, and it's fully typed. This means that names are resolved, types are inferred and checked, overloads are resolved, and implicits are inserted. All of this information is serialized.

Today, TASTy is used for separate compilation: when a source file uses `Foo.method` where `Foo` is a class on the classpath, the compiler will read the TASTy of `Foo` in order to know what is the type of `method`. Looking at the class file `Foo.class` would not work because Scala-specific features such as union types cannot be represented in class files. Scala 2 uses a very similar mechanism, but instead of serializing the full program code, it only serializes the types, which is sufficient for separate compilation.

In the future, TASTy mitigates "accidental" binary incompatibilities caused by the way Scala-specific features must be encoded in JVM class files. Because TASTy precisely captures the result of the frontend (after the typechecker has fully qualified all names, inferred types and implicits, resolved overloads, expanded syntactic sugar, etc), the Scala compiler backend can be rerun automatically to derive new class files from TASTy serialized by a previous run. It's a promising compromise between the brittleness of bytecode and the complexity of recompiling from source. See also the Q&A on binary compatibility.

TASTy will also serve as a basis for new or updated tooling in the future (code analysis, IDE support, generating documentation).

### How is binary compatibility handled in Scala 3?

Evolving Scala libraries in a binary compatible fashion is difficult because Scala features have to be encoded in JVM class files. In Java, there's a direct correspondence between source and binary compatibility. TASTy aims to bring the same to Scala, without developing a Scala specific VM, by determining compatibility at the level of (fully-typed and elaborated) sources, rather than compiled binaries. Currently, the nature of the class file encoding means that backwards compatible changes at the source level, such as adding a field to a trait, actually break binary compatibility.

It's important to note that TASTy is not a silver bullet: it cannot fix breaking changes to APIs – those can only be resolved by (potentially automated) refactorings.

By re-compiling an existing library from its TASTy, its class files are regenerated to work correctly with a new version of its dependencies. For example, a library that was compiled against the Scala 3.2 standard library can be safely used with Scala 3.4. There is no need for library maintainers to re-publish when a new Scala 3.x minor release becomes available.

### What about macros?

While Scala 3 can generally consume libraries built with Scala 2.13, this does not work for macros. Macro methods defined in 2.13 libraries cannot be used in Scala 3, because the Scala 3 compiler cannot execute the macro at compile-time.

The macro system from Scala 2 is deeply tied to the internals of the Scala 2 compiler and cannot be migrated in a compatible fashion to Scala 3. Instead, Scala 3 ships with a [new macro system](https://docs.scala-lang.org/scala3/reference/metaprogramming.html). This means that macro definitions have to be re-written when migrating a codebase to Scala 3. Cross-building is possible by having separate source files for Scala 2 and 3 macro definitions.

Libraries that define macros can be made available for both Scala 2.13 and Scala 3 by cross-compiling. 

### What breaking changes are in Scala 3, besides macros?

The Scala 3 compiler supports almost all of the Scala 2 language. For a detailed overview, see [this page](https://dotty.epfl.ch/docs/reference/features-classification.html#dropped-constructs). Language features that have been dropped are [early initializers](https://dotty.epfl.ch/docs/reference/dropped-features/early-initializers.html), [existential types](https://dotty.epfl.ch/docs/reference/dropped-features/existential-types.html), [weak conformance](https://dotty.epfl.ch/docs/reference/dropped-features/weak-conformance.html) and [`DelayedInit`](https://dotty.epfl.ch/docs/reference/dropped-features/delayed-init.html). (Some of these removals are still pending SIP committee approval.)

### What about performance?

There are multiple aspects of performance:

* **Compiler performance**. The performance of the Scala 3 compiler is being monitored continuously to prevent regressions (https://dotty-bench.epfl.ch). We will work on enabling benchmarks that compare the compiler performance between Scala 2.13 and Scala 3.

* **Runtime performance of generated code**. The code generation phase of the Scala 3 compiler is the same as in Scala 2.13, and also the ABI (the way Scala features are encoded in class files) in Scala 3.0 will be the same. We expect that code compiled with Scala 3 will perform the same, and we will work with the community to verify that this is the case. The Scala 2 optimizer will also be available in Scala 3.

* **Performance-oriented language features**. While value classes continue to work, Scala 3 brings [opaque type aliases](https://dotty.epfl.ch/docs/reference/other-new-features/opaques.html) that provide type abstraction without any overhead. [Inline methods](https://dotty.epfl.ch/docs/reference/metaprogramming/inline.html) can be used for methods that are guaranteed to be inlined at compile-time. Scala 3 currently does not implement specialization. We will work with maintainers of performance-sensitive projects to find out what variants of specialization need to be supported. This work will likely land in a Scala 3.x minor release.

### What can I expect from tooling?

We consider the availability of core tooling to be an integral part of the Scala 3 release.

* **Build tools**: incremental compilation through zinc is supported already, sbt support is currently implemented in a plugin. Additional work will be needed to support re-compilation of libraries from TASTy.

* **Compatibility Checker**: [MiMa](https://github.com/lightbend/migration-manager) is a tool used by library authors to verify binary compatibility of new releases. For Scala 3, once TASTy support has matured, binary compatibility will no longer be relevant. Instead, a new tool will check TASTy API compatibility.

* **IDEs**: The support for Scala 3 in Visual Studio Code is [available](https://dotty.epfl.ch/docs/usage/ide-support.html) and used by the compiler developers, and we will continue to improve it. IntelliJ has been experimenting with Dotty support [for a while](https://blog.jetbrains.com/scala/2017/03/23/scala-plugin-for-intellij-idea-2017-1-cleaner-ui-sbt-shell-repl-worksheet-akka-support-and-more/) and their team is determined to support Scala 3 when it becomes available.

* **Syntax**: Scala 3 might allow [optional braces](https://dotty.epfl.ch/docs/reference/other-new-features/indentation.html) and [a new syntax for control structures](https://dotty.epfl.ch/docs/reference/other-new-features/control-syntax.html) – these features are currently labelled experimental and being evaluated. To ensure a consistent code style, we will ensure the release includes a robust formatting and syntax conversion tools.

### I'm reminded of Python 2 / 3. Should I be worried?

In a word, "no". We believe that Scala's static type system and the compatibility decisions and guarantees described in this document will allow the transition to Scala 3 to be both quicker and less painful than Python's was.

However, we remain vigilant and appreciate any feedback on how we can improve our upgrade strategy. 

Our strategy for making your upgrade predictable and manageable comprises:

1. There will be no "silent" breaking changes in run-time behavior. The standard library is shared. The ABI of Scala 2.13 and 3.0 will be the same: the encoding of key language constructs, such as traits and lazy vals, are shared.

2. Scala 3 is backwards compatible with Scala 2, except for a few deprecated features that are being dropped. The Scala standard library already cross-compiles between the two versions. So can your project.

3. As always, the type checker has your back: changes are often caught by the compiler as type errors or migration warnings.

### How can I contribute?

Perhaps you've been waiting for the design of Scala 3 to settle down before diving in.  That settling-down is now largely complete, so now is an excellent time to get involved. If you're a Dotty first-timer, read the [getting started page](https://dotty.epfl.ch/docs/usage/getting-started.html).

There are two basic ways you can help Scala 3 happen:

1. Help the ecosystem migrate.

2. Participate in the development of Scala itself.

Details on both options follow.

#### Migrating the ecosystem

The biggest thing Scala 3 needs from the community is for everyone to begin porting their code. For established projects, the logical first step would be to start cross-building against the latest  Scala 3 milestone, when they become available (or use a Dotty milestone right now!). We expect this to be a common scenario during the transition period. Or, you can jump straight in and upgrade your code to Scala 3 and try out some of the new features!

We're especially interested in knowing if something blocks you completely, but other kinds of feedback are welcome as well.

Every Scala user can participate, but it's especially helpful for maintainers of open-source libraries and tooling to begin moving.  If you are a maintainer, then as an initial step, please consider adding Dotty to your project's cross-build.

In the simplest cases, you just need to:

* add sbt-dotty to `project/plugins.sbt`

* add the latest Dotty version to `crossScalaVersions` and `.travis.yml`

* perhaps adjust your compiler flags, according to `isDotty.value`, e.g. to pass `-language:Scala2` to Dotty

If you have upstream dependencies, there is an easy way to use the Scala 2.13 binaries. The [dotty-example-project explains how to do this](https://github.com/lampepfl/dotty-example-project#getting-your-project-to-compile-with-dotty).

If you don't have time to do a cross-build yourself, consider asking your users and contributors to volunteer.

#### Working on Scala itself

The Dotty team welcomes contributors, including first-time Scala contributors.  Scala 3 has already benefited considerably from years of active external participation [on GitHub](https://github.com/lampepfl/dotty). For guidance and getting-started help, there is an active [chat room on Gitter](https://gitter.im/lampepfl/dotty).  There are many ways to be helpful that don't require large time outlays or a background in compiler hacking.

If you are already a Scala 2 contributor, you are welcome to move to the new repo, but you might also choose to stay focused on Scala 2 for now if you prefer. Scala 2 will be maintained for several more years, and many kinds of improvements remain possible and desirable in the 2.13 series, subject to the usual compatibility constraints.  Standard library fixes are directly applicable to both versions; back end improvements benefit both compilers; improved linting could help Scala 2 users get their codebases ready for 3.

As always when a compiler version is in maintenance mode, we will not accept changes to the language in 2.13.x. Due to our focus on migration, we will be stricter than usual in the assessment of the potential for regression, and changes must decrease the gap between 2 and 3. We continue to welcome changes to the user experience outside of the language definition (e.g., the REPL). Generally speaking, whenever possible, enhancements should first happen in Scala 3 and then be backported to 2.

