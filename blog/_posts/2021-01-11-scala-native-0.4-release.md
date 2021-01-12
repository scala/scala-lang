---
layout: blog-detail
post-type: blog
by: Wojciech Mazur, Scala Center
title: A sneak peek into upcoming Scala Native 0.4 release
---

If you ever thought about running your perfect Scala code in an environment other than JVM, you've probably already met
Scala Native---a project with a promise of instant startup, low memory usage, interop with C libraries, and competitive performance
thanks to [Interflow optimizer](https://scala-native.readthedocs.io/en/latest/blog/interflow.html).

However, since there have been no release in over a year, you may ask yourself---is this project even alive?<br>
With the long-awaited release it proves it is! Today we are going to discuss the most impacting new features and changes 
coming in this new major release. We will start with changes according to Scala Native compiler plugin, especially supported Scala versions and cross-platform testing.
Next we will talk about changes to C interoperability and SBT build that need to be taken into account since when working this release.
Last, but not least we will discuss why we needed to break binary compatibility with previous versions.


## Support for latest Scala 2 versions
Scala Native finally starts catching up with the rest of the Scala ecosystem, because until now there was only support for Scala 2.11,
which is now perceived by most of the developers as deprecated. We can proudly announce that Scala Native is now 
compatible with Scala versions up to 2.12 and 2.13.
We also continue to support Scala 2.11 for which we have added new features and fixed known bugs.

## Cross-platform testing using JUnit
Scala Native now comes with JUnit support out of the box, this means that you can write tests in the same way you would do for a Java project.
To enable JUnit tests, all you need to do is to add the two following lines to your `build.sbt`.

```scala
addCompilerPlugin("org.scala-native" % "junit-plugin" % SNVersion cross CrossVersion.full)
enablePlugins(ScalaNativePlugin)
```

The above settings, when running `sbt test`, would result in the tests being compiled using the SN plugin and executed 
with a native implementation of the JUnit framework. What is more you can easily run your tests both on JVM and Native 
with a simple adjustment to your build, you can find guide how to do this in [Scala Native reference]("https://scala-native.readthedocs.io/en/latest/")

Unfortunately, SN is still single-threaded, so if your tests are using concurrency you will need to add the `junit-async`
runtime to your build. It would use the default `ExecutionContext` on the JVM and it would mock concurrent execution in an
event loop in Native - each `Runnable` would be run in order of invocation after finishing the main thread.

```scala
// for JVM submodule
libraryDependencies += "org.scala-native" %% "junit-async" % SNVersion

// for Native submodule
libraryDependencies += "org.scala-native" %%% "junit-async-native" % SNVersion
```

> Scala Native assumes single-threaded execution by default and does not provide multi-threaded programming, 
> however it’s possible to use C libraries to get access to multi-threading and synchronization primitives. 
> You need to remember it is not officially supported at the moment.

## Reflective instantiation
The SN plugin removes unused definitions of classes, methods, and variables during the linking stage to reduce the size of the output binary.
This used to make using reflective calls very difficult. Fortunately, this is a thing of the past---with release 0.4.0 we
introduced a subset of reflective operations allowed to be used.

It would not be wise to enable reflective calls to all definitions as we would need to load many more objects and increase the size of the binary.
That’s why you need to signal to the compiler which classes can use this mechanism - it can be done by marking your `trait`, `class`, or `object`
with the `@EnableReflectiveInstantation` annotation.
It will also make all of its descendants able to be reflectively instantiated.

For definitions marked with this annotation Scala Native plugin would generate definitions of static class initializers
and invoke them just before the `main` method in your final program.
This step would register `LoadableModuleClass` and `InstantiableClass` instances for objects and classes
accordingly - they could be accessed later via the provided `scalanative.reflect.Reflect` object methods in your code.


## Interop changes
### Including Native Code in your Application or Library
Previously, Scala Native used C source files in its build pipeline allowing to mix Scala code with native libraries,
it was a great way to use existing native libraries and distribute them with the plugin. 
However, this feature was only reserved for the SN plugin internals.

With the 0.4.0 release you're able to put your C/C++ sources in the `resources/scala-native` directory inside your project,
and they will be linked and compiled inside the SN pipeline.

As an example you can use it to access macro defined constants and functions or to pass `struct`s from the stack to C functions.
```c
// src/resources/scala-native/example.c
typedef int (*Callback0) (void);

const int EXAMPLE_CONSTANT = 42;

int exec(Callback0 f) {
 return f();
};

```

```scala
// src/main/example.scala
@extern
object example {
 def exec(cb: CFuncPtr0[CInt]): ExecResult = extern

 @name("EXAMPLE_CONSTANT")
 final val someConstant: Int = extern
}
```

### Better interop for functions
Since 0.3.9 it was possible to pass Scala functions to native libraries by defining `CFuncPtrN` - SAM traits working as 
a wrapper for Scala functions. Native calls to such functions were done via generated `externForwarder` - method, 
boxing parameters before passing them to function, and unboxing results. 
On the other hand, if you wanted to use a native function you could declare it as an `extern`.
This design was quite good, but it did not allow working with generic functions passed to Scala Native as `*void`, or `Ptr[Byte]` in SN syntax.

To support the last scenario, this design was extended and changed. 
You no longer need to implement the `CFuncPtrN` trait which is now private for plugin implementation. 
Instead, you can use an implicit conversion method taking arbitrary `scala.FunctionN` and returning `CFuncPtrN`.

```scala
type Callback = CFuncPtr1[CInt,Unit]
def registerCallback(cFn: Callback) = extern
def fn(n: CInt): Unit = ???

registerCallback(CFuncPtr1.fromScalaFunction(fn))
registerCallback(fn)

registerCallback{n: CInt => println("hello native")}
```

It is now also possible to work with an arbitrary pointer and convert it to `CFuncPtrN` that can be called in your Scala code, 
or to convert your function to any pointer if your native library needs this.

```scala
import scala.scalanative.unsafe.Ptr
val cFnPtr: CFuncPtr0[CInt] = ???
val fnPtr: Ptr[Byte]    = CFuncPtr.toPtr(cFnPtr)
val fnFromPtr:       = CFuncPtr.fromPtr[CFuncPtr0[CInt]](fnPtr)
```

## New Garbage Collector
This release also adds a new Garbage Collector - Commix, a parallel mark, and concurrent sweep GC, based on the well known Immix GC.
It reduces GC pause times by utilizing additional processor cores during mark and sweep phases. It was added soon after 
the 0.4.0-M2 release, but was only available via an unofficial snapshot.

Remember, it **does not** mean Scala Native is starting to officially support multi-threading! 
Commix GC was written in C and uses `pthread` to work. In case if your application needs concurrency support you may try experimental library [scala-native-loop](https://github.com/scala-native/scala-native-loop)

## Sbt plugin changes
### The introduction of the NativeConfig
Upcoming Scala Native release would also bring changes to the sbt configuration. We've decided to make a sparse set of `NativeX` setting keys deprecated in favor of a single `NativeConfig`.

```scala
nativeConfig ~= (
 _.withMode(build.Mode.releaseFast)
  .withGC(build.GC.immix)
  .withLTO(build.LTO.full)
  .withOptimize(true)
  .withCompileOptions(Nil)
  .withLinkingOptions(Nil)
 )
```

Old style settings keys are still supported, but with lower priority than the new config. They will be removed at some point in the future. In the following example resulting `LTO` setting would be set to `thin`

```scala
nativeConfig := nativeConfig.value
 .withLTO(build.LTO.thin)

nativeLTO := "none"
```

### Cross compiling
By default Scala Native has always compiled and optimized the resulting assembly based on host architecture and its operating system.
Although it worked well when you were running a program on the same machine, it caused many problems when trying to run it anywhere else.
With the latest release you're able to define a custom target for compiler by providing [LLVM style TargetTriple](https://clang.llvm.org/docs/CrossCompilation.html) in your config.

For example, if you're working on Linux and would like to create perfectly suited assembly for some specific version of MacOS without changing your whole build,
you can use ad-hoc sbt setting:
```bash
sbt 'set nativeConfig ~= {_.withTargetTriple("x86_64-apple-darwin<version>")}' myApp/nativeLink
```

We consider changing target triple as a feature for advanced users, and cannot promise it would currently work with any possible configuration yet.
However, the number of supported architectures and operating systems would definitely grow in the future.

> Upcoming release will no longer support SBT 0.13.x

## Changes to intermediate representation
The new release includes many necessary changes to NIR, starting with the way Strings are stored, 
through adding new literals like `Val.ClassOf` and last, but not least support for default methods. 
The last one was introduced to support Scala 2.12 behavior which compiles trait methods as default methods in Java interfaces.

Although we always try to keep our NIR changes to absolute minimum, the number of removed or no longer used primitives used 
in the previous version forced us to break backward binary compatibility. This decision allows us to remove number of known bugs
and easier maintenance in the future. NIR format might still change in following minor releases of Scala Native, but they
would be fully backward-compatible since now on.

> NIR (Native Intermediate Representation) is a format used to represent a subset of LLVM instructions, types and values, 
> augmented with a number of high-level primitives that are necessary to efficiently compile Scala,
> you can read more about in Scala Native [documentation](https://scala-native.readthedocs.io/en/latest/contrib/nir.html).

## How about existing libraries?
Scala Native had many [libraries](https://index.scala-lang.org/search?targetTypes=native&scalaNativeVersions=0.4.0-M2) compatible with SN `0.4.0-M2`.
Unfortunately, the new release is not binary compatible with them, and you'll need to wait until authors will republish them with the new SN version.

However, with increasing interest in running the Scala code natively, it should happen quickly after the release.

## Summary
I think you can agree with me now, that Scala Native is starting to keep up with the rest of the Scala ecosystem.
We are expecting it would bloom short after the release with a lot of libraries and tools.
With introduced support for recent Scala versions it is much more approachable for the users, and combined with easier testing 
may improve its overall quality.

Even though resources allocated into this project were quite limited, we have managed to fulfill all our goals announced 
last year in [Scala Native Next Steps](https://contributors.scala-lang.org/t/scala-native-next-steps/4216). Currently, this
project is developed by a single engineer working full-time, thanks to our cooperation with VirtusLab. 
We also appreciate and would like to thank our community contributorsfor the huge amounts of work they have done for this project.

There are many plans for the future of Scala Native, few things you can expect is for sure integration with the Scala 3 
and better support for different architectures, like ARM. Stay tuned for next updates...

## Contributing
Contributors are always welcome, you can support the Scala Native project in multiple ways. 
The most straightforward way of doing so is by working on the plugin itself, take a look at our [contributors’ guide](https://scala-native.readthedocs.io/en/latest/contrib/index.html). 

More importantly however, it is to make our ecosystem more native-compatible, this means developing tools and libraries that are not dependent from Java internals.
For example, you can take a look at [sconfig](https://github.com/ekrich/sconfig) - a Scala port of the widely used Lightbend Config

> Only Scala source files can be used by the Scala Native plugin.
> Distributed libraries contain `.nir` files in their JARs which are crucial in making the SN plugin able to link them correctly.

## Early Access
If you’d like to try the upcoming release of Scala Native by yourself, unfortunately, snapshots of SN are not published yet, but you can build them locally. You're only 3 steps away:
1. Download latest build form [Scala Native Repo](https://github.com/scala-native/scala-native)
2. Run `sbt +publishLocal`
3. Add SN plugin as described in the [docs](https://scala-native.readthedocs.io/en/latest/) with `0.4.0-SNAPSHOT` version or the one you've optionally set within `build.sbt`

...and you are ready to start hacking :) 
