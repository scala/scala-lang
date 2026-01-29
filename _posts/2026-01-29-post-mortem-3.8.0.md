---
category: blog
permalink: /blog/post-mortem-3.8.0.html
redirect_from: /news/post-mortem-3.8.0.html
title: "Postmortem of scala/scala3#24994"
by: Scala Core Team
---


Incident Date: _January 13th, 2026_  
Nature of the incident: _The Scala 3.8.0 artifacts contain invalid references to private fields_

## The TL;DR
The Scala 3.8.0 artifacts were released with invalid references to private fields in its standard library.
The bug, while severe, only affects a very limited group of users.
A hotfix was implemented and included in a subsequent 3.8.1 release. 
Both releases were then announced simultaneously 
(link to the announcement can be found [here](https://scala-lang.org/news/3.8/)).

## Recommendations
- Upgrade directly to Scala 3.8.1, or 3.8.2 once it becomes available. 
- Scala 3.8.0 is discouraged from being used because of the issue described in this document.
- The issue is not flagged by the compiler, it manifests in a NoSuchFieldError thrown at runtime. 
  We believe the exposure is very limited, and it's unlikely for users to be affected.
  Libraries compiled and published with Scala 3.8.0 are not corrupted and can be used safely.

## Timeline

On Tuesday, 13th of January 2026 Scala 3.8.0 artifacts were published with a (at the time unknown) 
contract-breaking bug in its bytecode. The issue only got reported on Thursday, 15th of January, 
in the `scalacenter/sbt-missinglink` SBT plugin bug tracker 
under [scalacenter/sbt-missinglink#54](https://github.com/scalacenter/sbt-missinglink/issues/54). 
This was re-raised in the Scala 3 compiler bug tracker a day later, on Friday, 16th of January, 
at [scala/scala3#24994](https://github.com/scala/scala3/issues/24994). The issue was identified as severe enough 
to be treated as an incident and postpone the release announcement until due investigation. 
A hotfix was proposed on Monday, 19th of January 
under [scala/scala3#25008](https://github.com/scala/scala3/pull/25008) and then merged on the next day, 
Tuesday, 20th of January.

The [Scala Core Team](https://www.scala-lang.org/scala-core/) decided not to cancel Scala 3.8.0.
While the bug is severe, it would affect a very limited number of users. Moreover, libraries successfully compiled 
and published with 3.8.0 are not corrupted and can safely be used in the ecosystem.
Scala 3.8.0 and 3.8.1 (containing the hotfix) were announced simultaneously on Thursday, 22th of January 2026 
(link to the announcement can be found [here](https://scala-lang.org/news/3.8/)), 
with advice for users to upgrade directly to 3.8.1.

## What exactly happened?
If you are interested in the full technical details behind this incident, read on.

Scala 3.8 series, with 3.8.0 being its first release, introduces a standard library compiled with Scala 3, 
rather than depending on the Scala 2.13 standard library. This change is, however, under the restriction of 
being fully backward compatible with the old `scala-library` from Scala 2.13, 
as per [standard compatibility guarantees of Scala 3](https://scala-lang.org/development/#scala-3-semantic-versioning). 
That proves difficult with classes, traits and methods annotated as `@specialized`, 
since Scala 3 does not currently support specialization.

The solution was to copy and adjust `.class` files for those cases from the library built by Scala 2.13. 
This allowed the team to preserve binary compatibility, 
which was then checked against the combined artifacts of Scala 2.13.16 and 3.7.4.

The actual issue lies in the fact that the standard library of Scala 2.13 is 
processed by its [JVM Bytecode Optimizer](https://docs.scala-lang.org/overviews/compiler-options/optimizer.html). 
The tool can inline references to private fields. For example, in the case of `private[this] val _empty`, 
it does not have an accessor generated, but rather is accessed directly and then used by `@inline def empty[T]`. 
This then caused the library to have an inlined, direct reference to a private field, 
which has a different qualified name when compiled using Scala 3, and causes the failure.

Several similar cases were found during the investigation.

## Examples

### Empty Range.grouped
Note: Scala 3.8.0 throws an exception, where it should return a Boolean.
```scala
println(Range(0,0).grouped(1).hasNext
```
- Scala 2.13.18: 
```
false
```
- Scala 3.7.4:
```
false
```
- Scala 3.8.0:
```scala
Exception in thread "main" java.lang.NoSuchFieldError: Class scala.collection.Iterator$ does not have member field 'scala.collection.Iterator scala$collection$Iterator$$_empty'
	at scala.collection.immutable.Range.grouped(Range.scala:550)
	at snippet$_.<init>(snippet:1)
	at snippet_sc$.script$lzyINIT1(snippet:15)
	at snippet_sc$.script(snippet:15)
	at snippet_sc$.main(snippet:19)
	at snippet_sc.main(snippet)
```
- Scala 3.8.1:
```
false
```

### ArrayOps.ReverseIterator
Note: Scala 3.8.0 throws a different exception.
```scala
println(Array.empty[Int].reverseIterator.next)
```
- Scala 2.13.18
```scala
Exception in thread "main" java.util.NoSuchElementException: next on empty iterator
	at scala.collection.Iterator$$anon$19.next(Iterator.scala:980)
	at scala.collection.Iterator$$anon$19.next(Iterator.scala:978)
	at scala.collection.ArrayOps$ReverseIterator$mcI$sp.next$mcI$sp(ArrayOps.scala:151)
	at scala.collection.ArrayOps$ReverseIterator$mcI$sp.next(ArrayOps.scala:150)
	at scala.collection.ArrayOps$ReverseIterator$mcI$sp.next(ArrayOps.scala:147)
	at snippet$.delayedEndpoint$snippet$1(snippet:1)
	at snippet$delayedInit$body.apply(snippet:65534)
	at scala.Function0.apply$mcV$sp(Function0.scala:42)
	at scala.Function0.apply$mcV$sp$(Function0.scala:42)
	at scala.runtime.AbstractFunction0.apply$mcV$sp(AbstractFunction0.scala:17)
	at scala.App.$anonfun$main$1(App.scala:98)
	at scala.App.$anonfun$main$1$adapted(App.scala:98)
	at scala.collection.IterableOnceOps.foreach(IterableOnce.scala:630)
	at scala.collection.IterableOnceOps.foreach$(IterableOnce.scala:628)
	at scala.collection.AbstractIterable.foreach(Iterable.scala:936)
	at scala.App.main(App.scala:98)
	at scala.App.main$(App.scala:96)
	at snippet$.main(snippet:65534)
	at snippet.main(snippet)
```
- Scala 3.7.4
```scala
Exception in thread "main" java.util.NoSuchElementException: next on empty iterator
	at scala.collection.Iterator$$anon$19.next(Iterator.scala:973)
	at scala.collection.Iterator$$anon$19.next(Iterator.scala:971)
	at scala.collection.ArrayOps$ReverseIterator$mcI$sp.next$mcI$sp(ArrayOps.scala:151)
	at scala.collection.ArrayOps$ReverseIterator$mcI$sp.next(ArrayOps.scala:150)
	at scala.collection.ArrayOps$ReverseIterator$mcI$sp.next(ArrayOps.scala:147)
	at snippet$_.<init>(snippet:1)
	at snippet_sc$.script$lzyINIT1(snippet:15)
	at snippet_sc$.script(snippet:15)
	at snippet_sc$.main(snippet:19)
	at snippet_sc.main(snippet)
```
- Scala 3.8.0
```scala
Exception in thread "main" java.lang.NoSuchFieldError: Class scala.collection.Iterator$ does not have member field 'scala.collection.Iterator scala$collection$Iterator$$_empty'
	at scala.collection.ArrayOps$ReverseIterator.next(ArrayOps.scala:151)
	at snippet$_.<init>(snippet:1)
	at snippet_sc$.script$lzyINIT1(snippet:15)
	at snippet_sc$.script(snippet:15)
	at snippet_sc$.main(snippet:19)
	at snippet_sc.main(snippet)
```
- Scala 3.8.1
```scala
Exception in thread "main" java.util.NoSuchElementException: next on empty iterator
	at scala.collection.Iterator$$anon$19.next(Iterator.scala:991)
	at scala.collection.Iterator$$anon$19.next(Iterator.scala:991)
	at scala.collection.ArrayOps$ReverseIterator$mcI$sp.next$mcI$sp(ArrayOps.scala:151)
	at scala.collection.ArrayOps$ReverseIterator$mcI$sp.next(ArrayOps.scala:150)
	at scala.collection.ArrayOps$ReverseIterator$mcI$sp.next(ArrayOps.scala:147)
	at snippet$_.<init>(snippet:1)
	at snippet_sc$.script$lzyINIT1(snippet:15)
	at snippet_sc$.script(snippet:15)
	at snippet_sc$.main(snippet:19)
	at snippet_sc.main(snippet)
```

## How was this fixed?

The solution was still to copy `.class` files for sources with the `@specialized` annotation from the library 
built by Scala 2.13. The difference in the approach is that this time, they were not processed 
with the JVM Bytecode Optimizer. Additionally, the Scala 2 library class files being used are now built in 
the Scala 3 compiler repository to ensure full control over how these artifacts are produced. 
This proved to solve the problem, as can be tested with Scala 3.8.1.

## Why did it happen?

The issue was introduced due to a number of factors:
- Copying of `.class` files the way it happened was necessary due to specialization 
  (via the `@specialized` annotation or otherwise) never being implemented in Scala 3. 
  While it was discussed in the past, it was decided the old approach was in need of a redesign 
  and the necessary work was large in scope. As a result, it was delayed until an unspecified future.
- While porting the standard library, its JUnit tests were not ported at the same time.
  We have since shown that the JUnit tests would not have caught this particular incident.
  Nevertheless, it was a risky bet, and we have now successfully run all the JUnit tests on the new library.
  (It is also worth pointing out that JUnit tests constitute a very small part of the unit tests applicable to the library.)
- Despite an exceptionally long RC period, the issue was not discovered earlier. 
  3.8.0-RC1 was released as early as the 14th of November 2025. It took almost 2 months 
  to discover the problem in user code. This is perhaps a reasonable argument for the problem being rather niche.
  - For further context, the RC period is around 1 month, by default.
- The difference introduced to the `.class` files of the old Scala 2.13 standard library by the JVM Bytecode Optimizer 
  in comparison to the unprocessed files is, in the end, a nuance, a detail easy to miss in the grand scope of things. 
  While in retrospect it is clear what should have been done, human error seems to be the biggest factor. 

## How do we stop it from repeating?

All things considered, this incident is a unique occurrence.
That being said, [the maintenance team](https://www.scala-lang.org/maintainers/) spent the time on due investigation. 
Every step of the way has been re-thought and re-checked. Dedicated tests were implemented to catch 
similar incompatibilities in the future, so that no adjacent problem could happen unnoticed 
as the standard library is developed.

`scalacenter/sbt-missinglink`, the SBT plugin for which a bug report initially caught the issue, 
has proved valuable to include in the compiler testing pipeline.

The topic of implementing specialization in Scala 3 (even in a limited capacity) or working around the limitations 
of lacking thereof will be revisited in the future.

## Further reading

- [Scala 3.8 announcement](https://scala-lang.org/news/3.8/)
- [earliest report of the incident at scalacenter/sbt-missinglink\#54](https://github.com/scalacenter/sbt-missinglink/issues/54)
- [the main ticket tracking this incident at scala/scala3#24994](https://github.com/scala/scala3/issues/24994)
- [hotfix pull request at scala/scala3#25008](https://github.com/scala/scala3/pull/25008)
- [JVM Bytecode Optimizer](https://docs.scala-lang.org/overviews/compiler-options/optimizer.html)
- [ticket tracking working around limitations imposed by the lack of specialization in Scala 3](https://github.com/scala/scala3/issues/25011)
- [Scala development guarantees (including compatibility requirements)](https://scala-lang.org/development/#scala-3-semantic-versioning)

