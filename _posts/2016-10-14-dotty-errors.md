---
layout: blog
category: blog
by: Felix Mulder
title: "Awesome Error Messages for Dotty"
---

One thing that really excites me about being part of the core group of
developers working on [Dotty](http://dotty.epfl.ch/) is my chance to
impact usability. A lot of thought has gone into designing Dotty to be as fast
and structurally sound as possible.  Now comes the next step - adding a new
level of usability for the compiler and the surrounding tools.

We've looked at how other modern languages like
[Elm](http://elm-lang.org/blog/compiler-errors-for-humans) and
[Rust](https://blog.rust-lang.org/2016/08/10/Shape-of-errors-to-come.html)
handle compiler warnings and error messages, and come to realize that Dotty is
actually in great shape to provide comprehensive and easy to understand error
messages in the same spirit.

Let's dive right into some examples, let's say you have this code:

    try {
      foo()
    }

It doesn't really make sense to put this in a `try`-block for two reasons:

1. It doesn't throw an exception
2. It doesn't have a `catch` or `finally` clause

So let's say we compile this file using scalac, we get something like:

<pre>
test.scala:2: warning: A try without a catch or finally is equivalent to putting
its body in a block; no exceptions are handled.
     try {
       ^
       one warning found
</pre>

This is helpful, but it has a couple of drawbacks:

1. If we have a bazillion errors, it will be hard to read
2. If we don't know about `catch` or `finally` blocks - we don't know how to
   solve this (yes I know, most people do know what these are but - toy
   example!)

So what do you get with Dotty? This:

![try-error](http://i.imgur.com/vNE706E.png)

All errors are now visually separated, and the output is colorized so that you
can find your mistakes quickly.

Another one of our goals is to be able to properly explain things when asked.
As such, if you pass the flag `-explain` when compiling the example above,
you'll get a more verbose explanation:

![try-error2](http://i.imgur.com/pNhgsdf.png)

Mistyping members
-----------------
Sometimes, especially when you're in a rush - you might mistype some members.
Currently we offer you the following support when selecting on a type:

    class Foo {
      def bar = ???
    }

    val foo = new Foo()
    foo.barr

Will yield:

![mistype](http://i.imgur.com/iDnpB9O.png)

In the future we want to be able to offer you these types of suggestions on
other things like missing imports.

Type diffs
----------
Sometimes when working with complex types - it's hard to see exactly where the
error occurs. The Dotty compiler will in these cases give you a colored diff:

![mismatch](http://i.imgur.com/vlmwrmD.png)

It will not do this however if the differences are huge - but it will syntax
highlight the found and expected type anyway.

We want you!
------------
To make the transition to these new error messages as quick and pain-free as
possible - we need help! This is a perfect entry-point into hacking on the
compiler as you'll need to create semantic objects that contain the relevant
information for the error or warning.

So - this is what you do:

1. Go to the [Error messages issue](https://github.com/lampepfl/dotty/issues/1589)
2. Read the howto on error messages
3. Choose an error message you want to help with and post a comment saying
   which one(s)
4. Get hacking
5. Submit a PR!
