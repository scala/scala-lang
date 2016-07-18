---
layout: blog
post-type: blog
by: Lukas Rytz
title: Performance of trait methods
disqus: true
---

# Performance of using default methods to compile Scala trait methods

Recently we observed that [33e7106](https://github.com/scala/scala/commit/33e7106) causes a 20%
slowdown of the Scala compiler. This post logs what we learned in trying to understand the cause of
this regression.

Thanks to [Dmitry Petrashko](https://twitter.com/darkdimius) and
[Jason Zaugg](https://twitter.com/retronym) for reviews, inputs, ideas, hints, suggestions and
references.

If you have any feedback please post a comment below or [contact me](http://lrytz.flavors.me/#about)
directly.

## Bytecode formats for trait methods

In Scala 2.12, bodies of methods defined in traits will be compiled to default methods in the
interface classfile. In short, we have the following bytecode formats for concrete trait methods:

- 2.11.x: trait method bodies are in static methods in the trait's `T$impl` class. Classes
  extending a trait get a virtual method that implements the abstract method in the interface and
  forwards to the static implementation method.
- 2.12.0-M4: trait method bodies are in (non-static) interface default methods, subclasses get an
  virtual method (overridding the default method) that forwards to that default method using
  `invokespecial` (a `super` call).
- [33e7106](https://github.com/scala/scala/commit/33e7106): in most cases, no more forwarders are
  generated in subclasses as they are not needed: the JVM will resolve the correct method.
  Concrete trait methods are invoked either using `invokeinterface` (if the static receiver type
  is the trait) or `invokevirtual` (if the static receiver type is the subclass).
- 2.12.0-M5: trait method bodies are emitted in static methods in the interface classfile. The
  default methods forward to the static methods.

## Performance measurements

Scala is unfortunately still lacking a proper infrastructure for montioring performance of the
compiler and the bytecode it generates. Improving this situation will be one of the main tasks once
Scala 2.12.0 out the door. But for now we are left with measuring performance and identifying
regressions by hand.

In the particular case we were measuring the cold performance of the Scala compiler, i.e., the time
it takes to run the compiler on a fresh JVM and compile some code. We tested by compiling the source
code of [better-files](https://github.com/pathikrit/better-files): the code is small, has no
dependencies and compiles on 2.10, 2.11 and 2.12.

Measurements were performed by simply running the Scala compiler in a loop:

    for i in {1..10}; do time /path/to/scala/bin/scalac @files; done

The numbers for various Scala versions are in
[this spreadsheet](https://docs.google.com/spreadsheets/d/12-GILZectCueVLeyC0HjOlnlQRZPBcTADGf9sVmGAW0/edit#gid=37831420).

Besides the 20% regression introduced in 33e7106, there are a number of other changes in compiler
performance that we cannot explain at this point. For example, we don't know why 2.12.0-M5 is 13%
faster than 33e7106. We will continue to work on this during the Scala 2.12 release candidate cycle.

In this post we take a look at the changes introduced by 33e7106. A first observation is that the
slowdown is not due to additional logic in the compiler, but the change in the bytecode of the
compiler itself. This can be easily verified: a compiler built from revision 33e7106 using its
parent (b932419) as STARR has no slowdown. Building it with itself as STARR, the resulting compiler
runs slower.

This means that any Scala applications using concrete trait methods is likely to be affected by
this problem.

## Some details on the HotSpot compiler

This section explains some details of the HotSpot optimizer. It assembles information from various
sources and own observations; it might contain mistakes and misunderstandings. It is certainly
simplified and incomplete. More details are available in the linked resources.

### JITing

My recommended reference for this first section is the talk "JVM Mechanics" by Doug Hawkins
([video](https://www.youtube.com/watch?v=E9i9NJeXGmM),
[slides](http://www.slideshare.net/dougqh/jvm-mechanics-when-does-the)).

First of all, JVM 8 uses two JIT compilers: C1 and C2. C1 is fast but performs only basic
optimizations, in particular it does not perform speculative optimizations based on profiling
(frequency of branches, type profiles at callsites). C2 is profile-guided and speculative but
slower.

The JVM starts by interpreting the program. It only compiles methods that are either called often
enough or that have long enough loops. There are two counters for each method:

- the number of times it is invoked, and
- the number of times a backwards branch is executed.

The decision to compile a method is based on these counters. A simplified (ignoring backwards
branches), typical scenario: after 2000 invocations a method gets compiled by C1, after 15000 it
gets re-compiled by C2 (see [this answer on SO](http://stackoverflow.com/a/35614237/248998) for more
details). Note that the C1-generated assembly is instrumented to update the two counters (and also
to collect other profiling data that will be used by the C2 optimizer). After compiling a method,
new invocations of the method will use the newly generated assembly.

The above works well for a method that is invoked many times, but what happens to a long-running
method that is invoked only once, but has a long loop? The decision to compile this method is taken
when the counter of backwards branches passes a threshold. Once compilation is done, the JVM
performs a so-called on-stack replacement (OSR): the stack frame of the running method is modified
as necessary and execution continues using the new assembly.

An OSR / loop compilation of a method is always tied to a specific loop: the entry point of the
generated assembly is at the end of the loop (locations are referred to by the index in the jvm
bytecode, called "bytecode index" / `bci`). If there are multiple hot loops within a method, the
same method may get multiple OSR compiled versions. More details on this can be found in
[this post](https://gist.github.com/rednaxelafx/1165804#osr) by Krystal Mok which explains the
many details of the `-XX:+PrintCompilation` output.

### Inlining

For this section my reference s Aleksey Shipilёv's extensive post
[The Black Magic of (Java) Method Dispatch](http://shipilev.net/blog/2015/black-magic-method-dispatch/).

Inlining is fundamental because it acts as an enabler for most other optimizations. The reason is
that inlining duplicates the code of a method into a specific environment, which allows the
optimizer to specialize the code. As Aleksey says in the conclusion: "inlining actually broadens the
scope of other optimizations, and that alone is, in many cases, enough reason to inline".

Both C1 and C2 perform inlining. The policy whether to inline a method is non-trivial and uses
several heuristics (implemented in
[bytecodeInfo.cpp](http://hg.openjdk.java.net/jdk8u/jdk8u/hotspot/file/f22b5be95347/src/share/vm/opto/bytecodeInfo.cpp),
methods `should_inline`, `should_not_inline` and `try_to_inline`). A simplified summary:

- Trivial methods (6 bytes by default, `MaxTrivialSize`) are always inlined.
- Methods up to 35 bytes (`MaxInlineSize`) invoked between 1 and 250 (`MinInliningThreshold`) are
  inlined.
- Methods up to 325 bytes (`FreqInlineSize`) are inlined if the callsite is "hot" (or "frequent"),
  which means it is invoked more than 20 times (no command-line flag in release versions) per one
  invocation of the caller method.
- The inlining depth is limited (9 by default, `MaxInlineLevel`).
- No inlining is performed if the callsite method is already very large.

The procedure is the same for C1 and C2, it uses the invocation counter that is also used for
compilation decisions (previous section).

Dmitry points out that a method being inlined might already be compiled, in which case the compiled
assembly will be inlinied. The size limits for inlining are controlled by a different parameter in
this case, see
[this thread](https://groups.google.com/forum/#!msg/mechanical-sympathy/8ARGnMds7tU/p4rxkhi-vgcJ)
and [this ticket](https://bugs.openjdk.java.net/browse/JDK-6316156) for reference.

### Inlining virtual methods

In C1, a method can only be inlined if it can be statically resolved. This is the case for static
and private methods, for constructors, but also for virtual methods that are never overridden. The
JVM has full knowledge on code of the program it is executing. If a method is virtual and could
in principle be overridden in a subclass, but no such subclass has been loaded (so far), an
invocation of the method can only resolve to that single definition.

The process of analyzing the hierarchy of classes currently loaded in the VM is called "class
hierarchy analysis" (CHA). Both C1 and C2 use the information computed by CHA to inline calls to
virtual methods that are not overridden.

When the JVM loads a new class, a virtual method that was statically not overridden by CHA may get
an override. All assembly code that made use of the now invalid assumption is discarded and
execution of the corresponding methods is again performed by the interpreter. This process is called
deoptimization. In case a deoptimized method is currently being executed, passing control to the
interpreter requires adapting the stack frame from compiled code to what the interpreter expects.
This process is similar to on-stack replacement, but in reverse.

If the stack frame contains return addresses that point to invalidated code, those addresses are
re-written to code that will perform the deoptimization and pass control to the interpreter.

In addition to using CHA, the C2 compiler performs speculative inlining of virtual methods based on
the type profiles gathered by the interpreter and the C1-generated assembly. If the receiver type
at a callsite is always the same (the callsite is "monomorphic") the method is inlined. The assembly
contains a type test to validate the assumption, if it breaks the method gets deoptimized.

C2 will also inline bi-morphic callsites: the code of both callees is inlined, a type test is used
to branch to the correct one (or to bail out). Finally, if the type profile shows a clear bias to
a specific receiver type (for example 90%), its method is inlined and virtual dispatch is used for
the other cases (shown in Aleksey's post).

If a callsite has 3+ receiver types without a clear bias, C2 does not inline and an ordinary method
lookup is performed at runtime.

Note that C2 performs other speculative optimizations than profile-based inlining, for example
profile-based branch elimination, and it has a graph-coloring register allocator.


## Understanding the performance regression

With the above knowledge at hand (I wish I had it when I started) we try to identify what causes
the slowdown of eliminating forwarder methods.

### Call performance

In a first step we measured the call performance of the various trait encodings.

The first
[benchmark `CallPerformance`](https://github.com/lrytz/benchmarks/blob/master/src/main/java/traitEncodings/CallPerformance.java)
has roughly the following structure:

    interface I {
        default int addDefault(int a, int b) { return a + b; }
    
        static int addStatic(int a, int b) { return a + b; }
        default int addDefaultStatic(int a, int b) { return addStatic(a, b); }
    
        default int addForwarded(int a, int b) { return a + b; }
    
        int addInherited(int a, int b);
    
        int addVirtual(int a, int b);
    }
    
    static abstract class A implements I {
        public int addInherited(int a, int b) { return a + b; }
    }
    
    static class C1 extends A implements I {
        public int addForwarded(int a, int b) { return I.super.addForwarded(a, b); }
    
        public int addVirtual(int a, int b) { return a + b; }
    }

There are identical copies of `C1` (`C2`, ...). The example encodes the following formats (we
don't test the 2.11.x format):

- `addDefault` for 33e7106
- `addDefaultStatic` for 2.12.0-M5
- `addForwarded` for 2.12.0-M4

The methods `addInherited` and `addVirtual` don't represent trait method encodings, they are for
comparison. We test all encodings in a monomorphic callsite (receiver is always `C1`) and in a
polymorphic one.

#### Monomorphic case

In the monomorphic case all trait encodings are inlined and perform the same (there are tiny
differences, if you are interested check Aleksey's blog post).

If we annotate all methods with JMH's `DONT_INLINE` directive, encodings with a forwarder (either
M4-style forwarder invoking the trait default method, or the upcoming M5-style default method
forwarding to static) are a bit slower (so a default method without a forwarder is faster).
The penalty for having either forwarder is similar.

#### Polymorphic case

If the callsite is polymorphic:

- The M4 encoding (`addForwarded`) is slow because the forwarder cannot beinlined. This the known
  issue of trait methods leading to megamorphic callsites that exists in Scala 2.11.x and older.
- The 33e7106 (`addDefault`) and M5 (`addDefaultStatic`) encodings are also slow: the default
  method is not inlined (checked with `-XX:+PrintInlining` and by comparing with a method marked
  `DONT_INLINE`). We will explore this in detail later.

For comparison, an invocation of `addInherited` is inlined and therefore much faster. So an
inherited virtual method is not treated in the same way as an inherited default method. The next
section goes into details why this is the case.

*Note:* for the question why the 33e7106 ecoding causes a 20% performance regression, this cannot be
the reason. We found out that `addDefault` is slower than it could be in the polymorphic case, but
it is not slower than the M4 encoding.


### CHA and default methods

The reason `addDefault` is not inlined while `addInherited` in the previous example has to do with
CHA: in fact, CHA is disabled altogether for default methods. This is logged in the JVM bugtracker
under [JDK-8036580](https://bugs.openjdk.java.net/browse/JDK-8036580). It was disabled in order to
fix [JDK-8036100](https://bugs.openjdk.java.net/browse/JDK-8036100) which lead to the wrong method
being inlined. (It was @retronym who initially suggested these tickets could be relevant).

The reason for `addInherited` being inlined is that the VM knows (from CHA) the method is not
overridden in any of the loaded classes. This is tested in the
[`InliningCHA` benchmark](https://github.com/lrytz/benchmarks/blob/master/src/main/java/traitEncodings/InliningCHA.java).

The first benchmark measures a megamorphic call to `addInherited`, just like in the previous
section. This call is inlined. The second benchmark performs the exact same operation but makes sure
that new subclass `CX` is loaded which overrides `addInherited`. CHA no longer returns a single
target for the method and the call is not inlined. Note that no instance of `CX` is created.

This seems to be a shortcoming in C2's inliner implementation: based on the type profiling data,
C2 knows that the only types reaching the callsites are `C1`, `C2`, `C3` and `C4`. Using CHA it
could in principle find out that there is a single implementation of `addInherited`.


### Method lookup in classes implementing many interfaces

We are still searching for an answer why 33e7106 caused a performance regression. Martin Thompson
notes in a
[blog post](http://mechanical-sympathy.blogspot.ch/2012/04/invoke-interface-optimisations.html)
(dated 2012):

  > I have observed that when a class implements multiple interfaces, with multiple methods,
  > performance can degrade significantly because the method dispatch involves a linear search of
  > method list

We can reproduce this in the
[benchmark `InterfaceManyMembers`](https://github.com/lrytz/benchmarks/blob/master/src/main/java/traitEncodings/InterfaceManyMembers.java).
The basic example is the following:

    interface I1 { default int a1 ... }
    interface I2 { default int b1 ... ; default int b2 ... }
    ...
    
    class A1 implements I1 { }
    class A2 implements I2 { }
    ...
    
    class B1 implements I1 { }
    class B2 implements I1, I2 { }
    ...

In the benchmark, every class (`A1`, `A2`, `B1`, ...) exists in four copies to make sure the
callsite is megamorphic. We measure how much time an invocation of one default method takes:

- The number of default methods in an interface does not matter, so `A1.a1` and `A2.b1` perform
  the same.
- The number of implemented interfaces matters, there's a penalty for every additional interface.
  So `B1.a1` is faster than `B2.b1`, etc.

Adding an overriding forwarder method to the subclasses does not change this result, the slowdown
per additional interface remains. So this seems not to be the reason for the performance regression.

### Back to default methods

Googling a little bit more about the performance of default methods, I found a relevant
[post on SO](http://stackoverflow.com/questions/30312096/java-default-methods-is-slower-than-the-same-code-but-in-an-abstract-class)
containing a nice benchmark.

I simplified the example into the
[benchmark `DefaultMethodPreventsOptimization`](https://github.com/lrytz/benchmarks/blob/master/src/main/java/traitEncodings/DefaultMethodPreventsOptimization.java),
which is relatively small:

    interface I {
        int getV();
        default int accessDefault() { return getV(); }
    }
    
    abstract class A implements I {
        public int accessVirtual() { return getV(); }
        public int accessForward(){ return I.super.accessDefault(); }
    }
    
    class C extends A implements I {
        public int v = 0;
        public int getV() { return v; }
    }

The benchmark shows that `c.v = x; c.accessDefault()` is 3x slower than
`c.v = x; c.accessVirtual()` or `c.v = x; c.accessForward()`.

#### A look at the assembly

(This section was revised later, thanks to [Paolo Giarrusso](https://twitter.com/blaisorblade) for
his feedback!)

As noted in comments on the StackOverflow thread, everything is inlined in all three benchmarks,
so the difference is not due to inlining. We can observe that the assembly generated for the
`accessDefault` case is less optimized than in the other cases. Here is the output of JMH's
`-prof perfasm` feature, it includes the assembly of the hottest regions:

- for [accessDefault](https://gist.github.com/lrytz/f1c24e685b871639d7e618b56325e102#file-adefault-txt)
- for [accessVirtual](https://gist.github.com/lrytz/f1c24e685b871639d7e618b56325e102#file-bvirtual-txt)
- for [accessForward](https://gist.github.com/lrytz/f1c24e685b871639d7e618b56325e102#file-cforward-txt)

In fact, the assembly for the `accessVirtual` and `accessForward` cases is identical.

One answer on the SO thread suggests that lack of CHA for the default method case prevents
eliminating a type guard, which in turn prevents optimizations on the field write and read. A later
comment points out that this does not seem to be the case.

The benchmark basically measures the following loop:

    int r = 0;
    for (int x = 0; x < N; x++) {
      c.v = x;
      r += c.v // field acces either through a default or a virtual method
    }

Comparing the assembly code of the loop when using the default method or the virtual method, Paolo
identified one interesting difference. When using the default method, the loop body consists of the
following instructions:

    mov  %edi,0x10(%rax)   ;*putfield v
    add  0x10(%r13),%edx   ;*iadd
    inc  %edi              ;*iinc

By default the JVM outputs the AT&T assembly syntax, so instructions have the form
`mnemonic src dst`. The `%edi` register contains the loop counter `x`, `%edx` contains the result
`r`.

- The first instruction writes `x` into the field `c.v`: `%rax` contains the address of object
  `c`, the field `v` is located at offset `0x10`.
- The second instruction reads the field `c.v` and adds the value to `x`. Note that this time,
  register `%r13` is used to access object `c`. There are two registers that contain the same
  object address, but the JIT compiler does not seem to know this fact.
- The last line increases the loop counter.

Comparing that to the loop body assembly when using a virtual method to access the field:

    mov  %r8d,0x10(%r10)   ;*putfield v
    add  %r8d,%edx         ;*iadd
    inc  %r8d              ;*iinc

Here, `%r8d` contains the loop counter `x`. Note that there is only one memory access: the JIT
compiler identified that the memory read accesses the same location that was just written, so it
uses the register already containing the value.

The full assembly code is actually a lot larger than just a loop around the three instructions shown
above. For one, there is infrastructure code added by JMH to measure times and to make sure values
are consumed. But the main reason is loop unrolling. The faster assembly (when using the virtual
method) contains the following loop:

    ↗ add    %r8d,%edx
    │ add    %r8d,%edx
    │ add    %r8d,%edx
    │ add    %r8d,%edx
    │ add    %r8d,%edx
    │ add    %r8d,%edx
    │ add    %r8d,%edx
    │ add    %r8d,%edx
    │ add    %r8d,%edx
    │ add    %r8d,%edx
    │ add    %r8d,%edx
    │ add    %r8d,%edx
    │ add    %r8d,%edx
    │ add    %r8d,%edx
    │ add    %r8d,%edx
    │ add    %r8d,%edx
    │ mov    %r8d,%r11d
    │ add    $0xf,%r11d
    │ mov    %r11d,0x10(%r10)   ;*putfield v
    │ add    $0x78,%edx         ;*iadd
    │ add    $0x10,%r8d         ;*iinc
    │ cmp    $0x3d9,%r8d
    ╰ jl     <loop-start>

This code does the following:

- The register `%r8d` still contains the loop counter `x`, so the loop adds `x` to `r` (`%edx`)
  16 times (without increasing `x` in between).
- Then it stores the value of `x` into `%r11d`, adds the constant `0xf` (decimal 15) to make up
  for the folded iterations and stores that value into the field `c.v`.
- The constant `0x78` (decimal 120) is added to the result `r` to make up for the fact that the
  loop counter was not increased (0 + 1 + 2 + ... + 15 = 120).
- The loop counter is increased by the constant `0x10` (decimal 16), corresponding to the 16
  unfolded iterations.
- The loop counter is compared against `0x3d9` (decimal 985): if it is smaller, another round of
  the unfolded loop can be executed (the loop ends at 1000). Otherwise execution continues in
  a different location that performs single loop iterations.

The interesting observation here is that the field `c.v` is only written once per 16 iterations.

The slower assembly (when using the default method) also contains an unfolded loop, but the memory
location `c.x` is written **and** read in every iteration (instead of only written in every 16th).
Again, the problem seems to be that the JIT compiler does not know that two registers contain the
same memory address for object `c`. The unfolded loop also uses a lot of registers, it even seems to
make use of SSE registers (`%xmm1`, ...) as 32 bit registers.

## Summary

We found a few interesting behaviors of the JVM optimizer.

- There are two possibilities for a method to be inlined:

  1. The method is not overridden in any of the classes currently loaded, as determined by CHA. In
     this case the method can be inlined by C1 and C2.
  1. The type profile shows that the receiver type at the callsite has a clear bias towards one or
     two types. In this case C2 will inline the corresponding implementation(s) speculatively.

  Because CHA is not available for default methods, default methods can only be inlined by C2,
  based on type profiling. This means that a default method at a megamorphic callsite is never
  inlined, even if the method does not have any overrides.

- The JIT does not combine the knowledge of type profiles and CHA. Assume a type profile shows that
  a certain callsite has 3 receiver types at run-time, so it is megamorphic. Also assume that there
  exist multiple versions (overrides / implementations) of the selected method, but CHA shows that
  method resolution for the 3 types in question always yields the same implementation. In principle
  the method could be inlined in this case, but this is not currently implemented.

- Interface method lookup slows down by the number of interfaces a class implements.

- The JVM fails to perform certain optimizations when default methods are used. We could show in a
  benchmark that moving a method from a parent class into a parent interface can degrade performance
  significantly. Adding an override to a subclass which invokes the default method using a `super`
  call restores the performance.

  The assembly code reveals that the JVM fails to eliminate memory accesses when using the default
  methods.

While we can reproduce certain slowdowns when using default methods in micro-benchmarks, this does
not answer definitively why we observe a 20% performance regression when running the Scala compiler on
default methods without forwarders. The fact that the JIT compiler fails to perform certain
optimizations may be the reason, but we don't have any evidence or proof to relate the two
observations.

## References

Besides the [post](http://shipilev.net/blog/2015/black-magic-method-dispatch/) already mentioned,
Aleksey Shipilёv's [blog](http://shipilev.net/) is an excellent resource for Java and JVM
intrinsics.

The talk "JVM Mechanics" by Doug Hawkins was also mentioned above
([video](https://www.youtube.com/watch?v=E9i9NJeXGmM),
[slides](http://www.slideshare.net/dougqh/jvm-mechanics-when-does-the)),
it is a great overview on the JIT, inliner and optimizer. For an overview I can also recommend a
[longer blog post](http://middlewaresnippets.blogspot.ch/2014/11/java-virtual-machine-code-generation.html)
by René van Wijk and a
[shorter one](https://www.lmax.com/blog/staff-blogs/2016/03/05/observing-jvm-warm-effects/)
by Mark Price focussing on the JIT compilers.

The JVM has an excessive number of flags for logging and tweaking:

- Some flags are [documented here](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html)
- Many others are not documented, run `java -XX:+PrintFlagsFinal` to get a list of all flags

Some flags used in the examples of this post:

- `-XX:TieredStopAtLevel=1` to disable C2
- `-XX:+PrintCompilation` logs methods being compiled (and deoptimized)
- `-XX:+PrintInlining` logs callsites being inlined (or not), best used together with the above

[JITWatch](https://github.com/AdoptOpenJDK/jitwatch) is a GUI tool that helps understanding what the
JIT is doing (I haven't tried it yet).

A
[thread](http://mail.openjdk.java.net/pipermail/hotspot-compiler-dev/2015-April/thread.html#17649)
on the hotspot-compiler-dev mailing list on why CHA is disabled for interfaces. Seems to discuss
the situation before default methods were a common thing.

A [gist](https://gist.github.com/rednaxelafx/1165804#file-notes-md) by Krystal Mok explaining many
details of the `-XX:+PrintCompilation` output and other details of the JIT process.

The [glossary](http://openjdk.java.net/groups/hotspot/docs/HotSpotGlossary.html) on the HotSpot
wiki contains some useful nomenclature.

Finally, a [slide deck](https://www.cs.princeton.edu/picasso/mats/HotspotOverview.pdf) by Paul
Hohensee that covers many details of HotSpots internals.

# Discussion
