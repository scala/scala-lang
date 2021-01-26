---
layout: blog-detail
post-type: blog
by: Wojciech Mazur, Scala Center
title: Scala Native 0.4.0 is here!
---

If you ever thought about running your Scala code in an environment other than JVM, you've probably already met
Scala Native---a project with a promise of instant startup, low memory usage, interop with C libraries, and competitive performance
thanks to [the Interflow optimizer](https://scala-native.readthedocs.io/en/latest/blog/interflow.html).

The long-awaited release 0.4.0 is here, bringing support for Scala 2.12 and 2.13!

Today we are going to discuss the most exciting new features and major changes coming in this release.
We will start with changes made to the Scala Native compiler plugin, especially supported Scala versions and cross-platform testing.
Next we will talk about changes to C interoperability and to the sbt plugin that need to be taken into account when upgrading to this release.
Last but not least, we will discuss why we needed to break binary compatibility with previous versions.

## Support for latest Scala 2 versions
Until now Scala Native supported only Scala 2.11, which is now perceived by most of the developers as deprecated.
We can proudly announce that Scala Native is now compatible with Scala versions 2.12.13 and 2.13.4, in addition to the 2.11.12 with known bugs fixed.

## Reflective instantiation
The SN plugin removes unused definitions of classes, methods, and variables during the linking stage to reduce the size of the output binary.
This used to make using reflective calls very difficult. Fortunately, this is a thing of the past---with release 0.4.0 we
introduce a subset of reflective operations allowed to be used.

It would not be wise to enable reflective calls to all definitions as we would need to load many more objects and increase the size of the binary.
That’s why you need to signal to the compiler which classes can use this mechanism - it can be done by marking your `trait`, `class`, or `object`
with the `@EnableReflectiveInstantiation` annotation. It will also make all of its descendants able to be reflectively instantiated.

Annotated classes and modules, having a concrete implementation, can be accessed via the provided `scalanative.reflect.Reflect` API.
If you have used Scala.js before, it may seem similar to you, as the new implementation uses exactly the same API.

## Cross-platform testing using JUnit
Until recently, all our internal tests were executed using our own native testing framework, mainly due to lack of proper
reflection support in Scala Native. After getting rid of this blocker, we have decided to use JUnit instead and as a result
implemented the native plugin for this framework. Thanks to this change you are also able to also use it in your own projects.  
Naturally you are still able to use any other testing framework supporting Scala Native. 
As an example Scala Native will soon be supported in [uTest](https://github.com/lihaoyi/utest) and [scalatest](https://github.com/scalatest/scalatest).

To enable Native JUnit tests, add the two following lines to your `build.sbt`.
```scala
addCompilerPlugin("org.scala-native" % "junit-plugin" % nativeVersion cross CrossVersion.full)
libraryDependencies += "org.scala-native" %%% "junit-runtime" % nativeVersion % Test
```

The above settings, when running `sbt test`, would result in the tests being compiled using the SN plugin and executed 
with a native implementation of the JUnit framework. Additionally you can easily run your tests both on JVM and Native 
with a simple adjustment to your build. You can find a guide how to do this in [Scala Native reference](https://scala-native.readthedocs.io/en/latest/)

## Interop changes
### Including Native Code in your Application or Library
Previously, Scala Native used C source files in its build pipeline allowing you to mix the Scala code with native libraries,
it was a great way to use existing native libraries and distribute them with the plugin. 
However, this feature was only reserved for the SN plugin internals.

With the 0.4.0 release you're able to put your C/C++ sources in the `resources/scala-native` directory inside your project,
and they will be linked and compiled inside the SN pipeline.

As an example you can use it to access macro-defined constants and functions or to pass `struct`s from the stack to C functions.
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
Since 0.3.9 it was possible to pass Scala functions to native libraries by defining `CFuncPtrN` - single abstract method traits working as 
a wrapper for Scala functions. Native calls to such functions were done via generated `externForwarder` - method, 
boxing parameters before passing them to the function, and unboxing results. 
On the other hand, if you wanted to use a native function you could declare it as an `extern`.
This design was quite good, but it did not allow working with generic functions passed to Scala Native as `*void`, or `Ptr[Byte]` in SN syntax.

To support the last scenario, this design was extended and changed. 
You no longer need to implement the `CFuncPtrN` trait which is now private for plugin implementation. 
Instead, you can use an implicit conversion from `scala.FunctionN` to `CFuncPtrN`.

```scala
type Callback = CFuncPtr1[CInt,Unit]
def registerCallback(cFn: Callback): Unit = extern
def fn(n: CInt): Unit = ???

registerCallback(CFuncPtr1.fromScalaFunction(fn))
registerCallback(fn)

registerCallback { (n: CInt) => println("hello native") }
```

It is now also possible to work with an arbitrary pointer and convert it to `CFuncPtrN` that can be called in your Scala code, 
or to convert your function to any pointer if your native library needs this.

```scala
import scala.scalanative.unsafe.Ptr
val cFnPtr: CFuncPtr0[CInt]    = ???
val fnPtr: Ptr[Byte]           = CFuncPtr.toPtr(cFnPtr)
val fnFromPtr: CFuncPtr0[CInt] = CFuncPtr.fromPtr[CFuncPtr0[CInt]](fnPtr)
```

## New garbage collector
This release also adds a new garbage collector - Commix, a parallel mark and concurrent sweep GC, based on the well known Immix GC.
It reduces GC pause times by utilizing additional processor cores during mark and sweep phases. It was added soon after
the 0.4.0-M2 release, but was only available via an unofficial snapshot.

While the GC itself will use multiple threads, Scala Native still does not support multi-threading in the application code.
Commix GC was written in C and uses `pthread` to work. In case your application needs concurrency support, you may try the experimental library [scala-native-loop](https://github.com/scala-native/scala-native-loop)

## Sbt plugin changes
### Introducing NativeConfig
This Scala Native release also brings changes to the sbt configuration. We've decided to deprecate the varied set of `NativeX` setting keys, in favor of a single `NativeConfig`.

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
By default, Scala Native has always compiled and optimized the resulting assembly based on host architecture and its operating system.
Although it worked well when you were running a program on the same machine, it caused many problems when trying to run it anywhere else.
With the latest release you're able to define a custom build target for the compiler by providing an [LLVM-style TargetTriple](https://clang.llvm.org/docs/CrossCompilation.html) in your config.

For example, if you're working on Linux and would like to create an executable suitable for MacOS without changing your whole build,
you can use the following sbt setting:
```bash
sbt 'set nativeConfig ~= {_.withTargetTriple("x86_64-apple-darwin<version>")}' myApp/nativeLink
```

We consider changing the target triple as an experimental feature for advanced users, and cannot promise it will currently work with any possible configuration yet.
However, the number of supported architectures and operating systems would definitely grow in the future.

## Changes to the intermediate representation

> NIR (Native Intermediate Representation) is a format used to represent a subset of LLVM instructions, types and values,
> augmented with a number of high-level primitives that are necessary to efficiently compile Scala.
> You can read more about it in the Scala Native [documentation](https://scala-native.readthedocs.io/en/latest/contrib/nir.html).

The new release includes many necessary changes to NIR, starting with the way Strings are stored, 
through adding new literals like `Val.ClassOf` and last, but not least support for default methods. 
The last one was introduced to support Scala 2.12 behavior which compiles trait methods as default methods in Java interfaces.

Although we always try to keep our NIR changes to absolute minimum, the number of removed or no longer used primitives used 
in the previous version forced us to break backward binary compatibility. This decision allows us to remove many known bugs
and will make future maintenance easier. NIR format might still change in following minor releases of Scala Native, but they
are going to be fully backward-compatible within the 0.4.x series.

## How about existing libraries?
Scala Native had many [libraries](https://index.scala-lang.org/search?targetTypes=native&scalaNativeVersions=0.4.0-M2) compatible with SN `0.4.0-M2`.
Unfortunately, the new release is not binary compatible with them, and you'll need to wait until authors republish them using Scala Native 0.4.0.

However, with increasing interest in running the Scala code natively, it should happen quickly after the release.

## Contributing
Contributors are always welcome. You can support the Scala Native project in multiple ways.
The most straightforward way of doing so is by working on the plugin itself. 
Take a look at our [contributors’ guide](https://scala-native.readthedocs.io/en/latest/contrib/index.html).

Making our ecosystem more native-compatible is extremely important too.
Scala Native compiler does not operate on JVM bytecode, but on its own intermediate representation distributed in `*.nir` files in resulting JAR.
Library dependencies not compiled with Scala Native would fail when linking. Therefore, you can help by developing tools
and libraries which do not depend on the Java standard library. For example, you can take a look at [sconfig](https://github.com/ekrich/sconfig) - 
a Scala port of the widely used Lightbend Config library.

## Summary
Scala Native is starting to keep up with the rest of the Scala ecosystem.
We believe it will bloom quickly thanks to this release, resulting in many libraries and tools.
Supporting recent Scala versions makes it much more approachable for the users, and easier testing through JUnit support improves overall usability.

Even though resources allocated into this project were quite limited, we have managed to fulfill all our goals announced 
last year in [Scala Native Next Steps](https://contributors.scala-lang.org/t/scala-native-next-steps/4216). Currently, this
project is developed by a single engineer working full-time, thanks to our cooperation with VirtusLab, and with guidance of Sébastien Doeraene, 
author of Scala.js. We also appreciate and would like to thank our community contributors for the huge amounts of work 
they have done for this project, and a special thanks to a contributor who also donated significant personal funds and propelled our efforts in 2020.

We have many plans for the future of Scala Native. Our top priorities include Scala 3 support and support for more architectures such as ARM
Stay tuned for the next updates...

For more changes coming in Scala Native 0.4.0, check out the [changelog](https://scala-native.readthedocs.io/en/latest/changelog/0.4.0.html).
