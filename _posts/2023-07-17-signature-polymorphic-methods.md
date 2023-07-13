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
blog post. Thanks to this recent work, **Scala 3 users can now access
the entire Java reflection API**, as of Scala 3.3.0.

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
now has the support too, as of Scala 3.3.0.

The initial Scala 2 implementation was done by [Jason Zaugg] in 2014
and refined later by [Lukas Rytz]. The latest version, with all fixes,
landed in Scala 2.12.16 (released June 2022).

Recently, [Dale Wijnand] ported the feature to Scala 3, with the
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

There is a formal description in [JLS 15.12.3], but a more readable
version is in the [Javadoc for
`MethodHandle`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/invoke/MethodHandle.html).
It says:

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

[JLS 15.12.3]: https://docs.oracle.com/javase/specs/jls/se17/html/jls-15.html#jls-15.12.3

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
surely I should avoid using reflection entirely?

The real reason these methods need to be fast is to aid efficient
implementation of dynamic languages on the JVM. `MethodHandle` was
added to the JVM at the same time as `invokeDynamic`, as part of
[JSR-292], which aimed to support efficient implementation of JRuby
and other alternative JVM languages. (`invokeDynamic` is additionally
used for implementing lambdas; see [this writeup on Stack Overflow].)

[JSR-292]: https://www.infoq.com/articles/invokedynamic/
[this writeup on Stack Overflow]: https://stackoverflow.com/questions/30002380/why-are-java-8-lambdas-invoked-using-invokedynamic

## How is this implemented in Scala 2?

Jason Zaugg describes his initial JDK 7 implementation in [PR 4139]
and shows how the resulting bytecode looks.

See also these well-documented followups: [PR 5594] for JDK 9,
[PR 9530] for JDK 11, and [PR 9930] for JDK 17.

[PR 4139]: https://github.com/scala/scala/pull/4139
[PR 5594]: https://github.com/scala/scala/pull/5594
[PR 9530]: https://github.com/scala/scala/pull/9530
[PR 9930]: https://github.com/scala/scala/pull/9930

## What's different in the Scala 3 version?

We had to work harder in Scala 3 because it wasn't enough to have an
an in-memory representation for signature polymorphic call sites.  The
call sites must also have a representation in TASTy, so we had to add
a new TASTy node type. (Scala 2 pickles only represent method
signatures; in contrast, TASTy represents method bodies too.)

To represent a signature polymorphic call site internally, we
synthesize a method type based on the types at the call site.  One can
imagine the original signature-polymorphic method as being infinitely
overloaded, with each individual overload only being brought into
existence as needed.

For details, see [the pull
request](https://github.com/lampepfl/dotty/pull/16225).

### The path not taken

Along the way we explored an alternative approach, suggested by Jason,
which involved rewriting each call site to include a cast to a
structural type containing an appropriately typed method.

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
pointed out, although this approach avoided adding a new TASTy tag, it
also gave new semantics to existing tags that older compilers wouldn't
understand. Therefore the work still couldn't ship until the next
minor version of the compiler.  Besides, avoiding the new tag
complicated the implementation.

## Questions? Discussion?

These are welcome on the Scala Contributors forum thread at:

* (TODO Discourse link, with link back to this post)
