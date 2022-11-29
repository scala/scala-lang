---
category: blog-detail
post-type: blog
by: Seth Tisue, Lightbend
title: "Signature polymorphic methods in Scala"
---

Java 7 introduced a curious and little-known feature to the Java
Virtual Machine: "signature polymorphic" methods. These methods have
strangely malleable types.

This blog post explains the feature and why it exists. We also delve
into how it is specified and implemented in both Scala 2 and Scala 3.

The Scala 3 implementation is new, and that's the occasion for this
blog post. Thanks to this recent work, Scala 3 users can now access
the entire Java reflection API, as of Scala 3.3.0-RC1.

## Should I keep reading?

Signature polymorphism is admittedly an obscure feature. When you need
it you need it, but the need doesn't arise in ordinary Scala
code. Thus, the remaining material may be of interest primarily to JVM
aficionados, Scala and Java language mavens, and compiler hackers.

## When is signature polymorphism needed?

Compiler support is needed when you use some portions of the Java
reflection API, namely `MethodHandle` (since Java 7) and `VarHandle`
(since Java 11).

`MethodHandle` provides reflective access to methods on JVM classes,
regardless of whether the methods were defined in Java, Scala, or some
other JVM language. `VarHandle` does the same, but for fields.

The polymorphism of these methods makes them more efficient, by
avoiding boxing overhead when primitive values are passed, returned,
or stored.

## Is signature polymorphism supported in Scala?

Yes: since Scala 2.11.5, and more fully since Scala 2.12.16.  Scala 3
now has the support too, as of Scala 3.3.0-RC1.

The initial Scala 2 implementation was done by [Jason Zaugg] in 2014
and refined later by [Lukas Rytz]. The latest version, with all fixes,
landed in Scala 2.12.16 (released June 2022).

Just recently, [Dale Wijnand] ported the feature to Scala 3, with the
assistance of [Guillaume Martres] and myself, [Seth Tisue].

Jason, Lukas, Dale, and myself are members of the Scala compiler team
at [Lightbend]. We maintain Scala 2 and also contribute to Scala 3.
Guillaume has worked on the Scala 3 compiler for some years, previously
at [LAMP] and now at the [Scala Center].

[Jason Zaugg]: https://github.com/retronym
[Lukas Rytz]: https://github.com/lrytz
[Dale Wijnand]: https://github.com/dwijnand
[Seth Tisue]: https://github.com/SethTisue
[Guillaume Martres]: https://github.com/smarter
[Lightbend]: https://lightbend.com
[LAMP]: https://www.epfl.ch/labs/lamp/
[Scala Center]: https://scala.epfl.ch

## What signature polymorphic methods exist?

You may already have run into this feature if you have used the
`MethodHandle` and `VarHandle` classes from the Java reflection API in
the Java standard library.

In fact, `MethodHandle` and `VarHandle` are the _only_ places you
could possibly have run into this feature!

That's because users are not allowed to define their own signature
polymorphic methods. Only the Java standard library can do that, and
so far, the creators of Java have only used the feature in these two
classes.

## What does "signature polymorphism" mean, exactly?

As the [Javadoc for `MethodHandle`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/invoke/MethodHandle.html) says,

> A signature polymorphic method is one which can operate with any of
> a wide range of call signatures and return types.

and:

> In source code, a call to a signature polymorphic method will
> compile, regardless of the requested symbolic type descriptor. As
> usual, the Java compiler emits an invokevirtual instruction with the
> given symbolic type descriptor against the named method. The unusual
> part is that the symbolic type descriptor is derived from the actual
> argument and return types, not from the method declaration.

Note that generics are not sufficient to express this level of
flexibility, for two reasons:

First, Java generics only work on reference types, not primitive
types.  Scala does not have this limitation, but pays for it by
incurring boxing at run-time when primitive types are used in generic
contexts.

Second, methods (in both languages) may only have a fixed number of
type parameters.

The following example should help make all of this clearer.

## How do I call a signature polymorphic method from Scala?

Take `MethodHandle` for example. It provides an `invokeExact`
method. Its signature as seen from Scala is:

    def invokeExact(args: AnyRef*): AnyRef

Signature polymorphism means that the `AnyRef`s here are just
placeholders for types to be supplied later.

To see this work in practice, let's adapt an example from
the Javadoc. From Scala, we'll make a reflective call to the `replace`
method on a `String`:

    import java.lang.invoke._
    val mt = MethodType.methodType(
      classOf[String], classOf[Char], classOf[Char])
    val mh = MethodHandles.lookup.findVirtual(
      classOf[String], "replace", mt)
    val s = mh.invokeExact("daddy", 'd', 'n'): String

If we paste this into the Scala REPL (2 or 3), we see:

    val s: String = nanny

Signature polymorphism helped us here in two ways:

* The arguments `d` and `n` will not be passed as `Object` or boxed to
  `java.lang.Character` at runtime, but will be passed directly as
  primitive `Char`s.
* The result comes back as a `String` without needing to be checked
  or cast at runtime.

## Are these methods good for anything else?

Great question!

Doesn't it seem puzzling that Oracle would go to so much trouble to
make Java reflection faster? If I care so much about performance,
surely I should avoid using reflection at all?

The real reason these methods need to be fast is to aid efficient
implementation of lambdas, in both Java and Scala. Additionally, they aid
efficient implementation of dynamic languages on the
JVM. `MethodHandle` was added to the JVM at the same time as
`invokeDynamic`, which serves those same two purposes.

> TODO: Is this actually accurate? I suspect it is, but I should
> dig around and confirm it, and perhaps add links.)

> TODO: I should improve the bit about "efficient implementation
> of lambdas". Adam Vandervorst wrote:
> > I'm a bit confused by the "Are these methods good for anything else" section
> > I deduce Java only uses it in "MethodHandle and VarHandle" and Scala just gained the barebones implementation.
> I replied:
> That's a good point. I will try to improve that section. In order to improve it properly, I need to dig a little deeper into how MethodHandle and VarHandle are used internally in the Java and Scala compilers.
> Jason (et al) definitely used MethodHandle when adding lambda support to the compiler back end for Scala 2.12, but I need to dig and see whether we are specifically using the signature polymorphic methods.
> I don't want to get too deep into it in the blog post itself, but I would like to expand it a bit and need to do a bit more research in order to make the expansion accurate.

> TODO: I might rethink how I'm presenting the issue of speed here. As I wrote to
> Adam:
> that's kind of what I was getting at with the " If I care so much about performance, surely I should avoid using reflection at all?"
> if I understand correctly, if you aren't a language implementer, then boxing overhead in reflection is probably the least of your worries
> but the methods are signature polymorphic regardless
> so we need the compiler support in Scala in order for the methods to even be callable at all by users who don't care about speed
> it's a bit tricky to convey this without making the post overlong

## How is this implemented in Scala 2?

> TODO -- keep it brief

illustrates the following compiler internals/techniques:

> TODO

For details, see [PR 4139](), [PR 5594](), [PR 9530](), and [PR 9930]().

[PR 4139]: https://github.com/scala/scala/pull/4139
[PR 5594]: https://github.com/scala/scala/pull/5594
[PR 9530]: https://github.com/scala/scala/pull/9530
[PR 9930]: https://github.com/scala/scala/pull/9930

## What's different in the Scala 3 version?

We had to work harder in Scala 3 because it wasn't enough to have an
an in-memory representation for signature polymorphic call sites.  The
call sites must also have a representation in TASTy. (Scala 2
pickles only represent method signatures; in contrast, TASTy
represents method bodies too.)

Our initial implementation plan was to add a new node type to TASTy,
and that's what we ended up doing.

> TODO: point out what's interesting

For details, see [the pull request](https://github.com/lampepfl/dotty/pull/16225).

### The path not taken

Along the way we explored an alternative approach, suggested by Jason
Zaugg, which involved rewriting each call site to include a
cast to a structural type containing an appropriately typed method.

In that version, the `replace` call-site in the example above was
rewritten from:

    mh.invokeExact("daddy", 'd', 'n'): String

to:

    mh.asInstanceOf[
      MethodHandle {
        def invokeExact(a0: String, a1: Char, a2: Char): String
      }
    ].invokeExact("daddy", 'd', 'n')

(The actual rewrite was applied to in-memory ASTs, rather than to
source code.)

The transformed code could be written and read as TASTy without
trouble. Later in compilation, we detected which call sites are the
product of this transform, drop the cast, and emit the correct
bytecode.

In the end, we didn't go with this approach. As Sébastien Doeraene
pointed out, we avoided a new tag but we gave new semantics to
existing tags that older compilers wouldn't understand. Therefore the
work still couldn't ship until the next minor version of the compiler.
Besides, avoiding the new tag complicated the implementation.

## Questions? Discussion?

These are welcome on the Scala Contributors forum thread at:

* (Discourse link, with link back to this post)

> TODO: find the JEP and any design discussions;
> VarHandle JEP https://openjdk.org/jeps/193
> hmm wait, did MethodHandle actually land in JDK 7?
> yes! https://docs.oracle.com/javase/7/docs/api/java/lang/invoke/MethodHandle.html
>   references signature polymorphism

> TODO: link to something that explains what Java reflection even is?

> TODO:
> cover the type ascription vs cast design issue?
> (Java has casts, in Scala type ascription is more idiomatic)?