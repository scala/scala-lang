---
layout: blog-detail
post-type: blog
by: Eugene Yokota
title: "Last mile towards sbt 2"
---

> This post covers work done under the [Sovereign Tech Fund investment](https://www.scala-lang.org/blog/2026/01/27/sta-invests-in-scala.html) umbrella: [sbt 2 Stable Release and Maintenance](https://contributors.scala-lang.org/t/sbt-2-production-ready-roadmap/7351). The work is coordinated by the [Scala Center](https://scala.epfl.ch/).

At conferences or on social media, the question we get most often is:

> When is sbt 2 coming out?

We'll discuss the plan in this post. But let's go over the status first.

## What's new in sbt 2?

sbt 2 is a new major version of sbt. If you're familiar with sbt 1.x, hopefully the jump is not too far, but we have pushed sbt to a more modern standard. The headline features are:

- sbt 2.x uses Scala 3.x (rather than Scala 2.12) for build definitions and plugins (Both sbt 1.x and 2.x are capable of building Scala 2.x and 3.x)
- Embraces a simpler build.sbt via common settings
- `test` changed to an incremental test
- Local and remote cache system that is Bazel-compatible
- Uses sbtn (native-image client) for shell
- Project matrix that can cross build subprojects in parallel

<br>
For more details, please check out the Scala Days 2025 talk [sbt 2.0: go big](https://www.youtube.com/watch?v=GM2ywMb4z7A) that I gave in August 2025.

To share the progress thus far, we released the [sbt 2.0 ideas](https://eed3si9n.com/sbt-2.0-ideas) post in 2023, with sbt 2.0.0-alpha7. After a few more years of development, we released a beta version [sbt 2.0.0-RC2](https://eed3si9n.com/sbt-2.0.0-RC2) that's ready for testing, around Scala Days 2025. Since then, we have been releasing more beta versions with both bug fixes and community-contributed feature enhancements. Perhaps surprising to some, sbt 2.x already started the binary compatibility from the RC series. This gave us a head start on repopulating the plugin ecosystem.

## Repopulating the plugin ecosystem

Thanks to the community effort, we already have [60+ plugins](https://www.scala-sbt.org/2.x/docs/en/community-plugins.html) ported to sbt 2.x. This is amazing for a build tool that hasn't been released yet. Special thanks to Kenji Yoshida for pull requests, preparing and porting many plugins to sbt 2.

Under the sbt 2 workstream, Anatolii from Scala Center has created [the sbt2-compat plugin](/blog/2026/03/02/sbt2-compat.html), which bridges the source-level differences between sbt 1.x and 2.x. This allows cross-building of a plugin, aiding the migration process. Also under the STA workstream, Rikito Taniguchi from VirtusLab has created a pull request to [cross build Scala.JS plugin to sbt 2.x (scala-js#5314)](https://github.com/scala-js/scala-js/pull/5314).

Independently, Play (see [playframework#13319](https://github.com/playframework/playframework/issues/13319)) and Scala Native (see [scala-native#4768](https://github.com/scala-native/scala-native/pull/4768)) projects have been working towards sbt 2.x support as well.

## Tooling support and documentation

Both IntelliJ Scala Plugin and Metals have published sbt plugins to import sbt 2.x projects.

Documentation has been reorganized and partly rewritten as [The book of sbt](https://www.scala-sbt.org/2.x/docs/en/), which has also been translated to [Japanese](https://www.scala-sbt.org/2.x/docs/ja/) and [Chinese](https://www.scala-sbt.org/2.x/docs/zh-cn/).

## Locking down to 2.0.x branch

- We have now created the `2.0.x` branch, so by default, all pull requests will target sbt 2.1. Only the critical bug fixes will be backported to the `2.0.x` branch.
- On March 26, we released [sbt 2.0.0-RC10](https://eed3si9n.com/sbt-2.0.0-RC10), kicking off the last mile process.
- On April 7, we released [sbt 2.0.0-RC11](https://eed3si9n.com/sbt-2.0.0-RC11).

**Next steps**: Please try using [the latest RC](https://github.com/sbt/sbt/releases) on your projects, and check out the newly updated documentation. If you find bugs or missing documentation, please let us know by creating [an issue on GitHub](https://github.com/sbt/sbt/issues).

We will likely release a few more release candidates, but if no critical bugs are found, we will graduate one of them to the final release. So when is sbt 2 coming out? Depending on the bugs we discover, I think it would be in the order of `n * 2` weeks, where `n` is 2, 3, 4...

## Participation

The Scala Center has been entrusted with coordinating the commissioned Scala work for the Sovereign Tech Fund. The Scala Center is an independent, not-for-profit center sponsored by [corporate members and individual backers like you](/blog/2023/09/11/scala-center-fundraising.html) to promote and facilitate Scala. If you would like to participate and/or see more of these types of efforts, please reach out to your manager to see if your company can donate engineering time or membership to the Scala Center.

See [The Scala Center Fundraising Campaign](/blog/2023/09/11/scala-center-fundraising.html) for more details.
