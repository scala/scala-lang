---
layout: blog-detail
post-type: blog
title: Status of the Collections
by: Julien Richard-Foy
---

This post gives a short update about the
[new collections](https://github.com/scala/collection-strawman/) status.

We have published a
[0.4.0](https://index.scala-lang.org/scala/collection-strawman/collection-strawman/0.4.0?target=_2.13.0-M2)
release a few days ago, which:

- gets closer to feature parity with the standard collections, with the addition
  of the `TrieMap` collection type as well as several operations (`withFilter`, `distinct`,
  `patch`, `:++`, to name a few);
- comes with a
  [migration tool](https://github.com/scala/collection-strawman#migrating-from-the-standard-collections-to-the-strawman)
  to adapt existing code bases from the standard collections to the strawman;
- benefits from internal improvements (optimizations, bug fixes, test coverage).

Most of these changes have been contributed by external developers, which I am very
grateful to: @EPronovost, @marcelocenerine, @nicolasstucki, @odd, @olafurpg, @smarter
@xavier-fernandez.

## Next Steps

Stefan Zeiger is currently working on replacing the current collections of the
standard library with the strawman and then making the compiler use it.

Rex Kerr is working on increasing the tests coverage by introducing property-based
tests based on [collections-laws](https://github.com/scala/scala-collections-laws).

As you can see in the list of issues planned for the
[next release](https://github.com/scala/collection-strawman/milestone/4),
we continue to implement missing collection types (e.g. `LinkedHashMap`)
and operations but we also start introducing new operations (such as `intersperse`
or `lazyFoldRight`). I’m going to write more developer documentation to explain
the internals of the new design, so that, in case you want to suggest adding something that
you feel is missing, it will be easier to contribute!

