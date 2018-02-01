---
category: announcement
permalink: /news/2.13.0-M3
title: "Scala 2.13.0-M3 is now available!"
---

M3 is the last 2.13 milestone with the old collection library! The next (and last) milestone of this series will integrate the new collections incubating at [scala/collection-strawman](https://github.com/scala/collection-strawman/). We will soon provide an easy way to try the new collections in your own project to solicit feedback on how we can simplify the upgrade to 2.13.

Thanks to Miles Sabin's hard work (sponsored by Lightbend), this milestone adds support for [literal types](https://github.com/scala/scala/pull/5310), as well as improving the compiler with better support for typelevel programming, to benefit libraries such as Shapeless. More of this is coming in M4.

Finally, the standard library now adheres to the [compact1](http://openjdk.java.net/jeps/161) profile, 
enabling a [signification reduction of the deployment footprint](https://github.com/scala/bug/issues/10559) of Scala applications.

For more information, see the [full release notes](https://github.com/scala/scala/releases/v2.13.0-M3).



