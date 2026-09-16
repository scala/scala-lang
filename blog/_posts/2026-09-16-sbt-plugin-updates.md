---
layout: blog-detail
post-type: blog
by: Eugene Yokota
title: "Reforesting the sbt plugin ecosystem and sbt 2.1.0 beta"
---

> This post covers work done under the [Sovereign Tech Fund investment](https://www.scala-lang.org/blog/2026/01/27/sta-invests-in-scala.html) umbrella: [sbt 2 Stable Release and Maintenance](https://contributors.scala-lang.org/t/sbt-2-production-ready-roadmap/7351). The work is coordinated by the [Scala Center](https://scala.epfl.ch/).

## Plugin as an ecosystem

Out of the box, sbt handles basic functionality like building and testing Scala code. Once you get used to the basics, the build can be extended further by using community plugins. Plugins range from simple utilities to support for new programming languages.

One aspect of a plugin project is that it can be created and developed without waiting for a release of sbt, so it's a great way to try new ideas or collaborate across the community. If you want to discover plugins two sources are:

- **[Community Plugins](https://www.scala-sbt.org/2.x/docs/en/community-plugins.html)** page
- **[Scaladex](https://index.scala-lang.org/search?platform=sbt2)**

### Preparing for reforestation

Since the ecosystem is an essential element of the user experience, the health of the plugin ecosystem is always our concern. This is especially so when we release a new major version, which _burns the old forest_. All plugins need to be cross built, and re-published, like new saplings springing from the ash. There are several strategies we adopted to aid the reforestation.

- Over the years, we have centralized major plugins to [GitHub sbt](https://github.com/sbt) organization. This lets us add new maintainers to the plugin who can review the PRs.
- Created the [sbt 2.x plugin migration](https://github.com/sbt/sbt/wiki/sbt-2.x-plugin-migration) wiki page to coordinate the migration effort.
- We locked down the ABI for 2.x with 2.0.0-RC1, which was released in August 2025. This gave a head start for the plugin authors to cross publish before sbt 2.0 came out.
- In March 2026, Anatolii created [sbt2-compat plugin](/blog/2026/03/02/sbt2-compat.html), which absorbs the changes between sbt 1.x and 2.x.
- Beyond tooling, we've actively sent pull requests to migrate the plugins.

I'm happy to report that as of this writing (September 2026), [Scaladex](https://index.scala-lang.org/search?platform=sbt2) lists **172 plugins** available for sbt 2.x. Many thanks for the community effort by volunteers like Kenji Yoshida and many others.

In this post, I'd like to highlight some of the most notable plugin updates.

## Plugin updates

### Scala.js 1.22.0

[Scala.js 1.22.0](https://www.scala-js.org/news/2026/06/20/announcing-scalajs-1.22.0/) shipped with sbt 2.x support. Rikito Taniguchi (VirtusLab) sent [scala-js#5314](https://github.com/scala-js/scala-js/pull/5314) on behalf of the sbt project to port the plugin to sbt 2.x.

**Side note**: A test included in the pull request mentions the fact that in sbt 2.x `%%%` operator is no longer needed, which is nice:

```scala
// In sbt 2, %% resolves to the Scala.js artifact (scalajs-dom_sjs1_3)
// for Scala.js projects. This replaces the %%% operator from sbt 1.
libraryDependencies += "org.scala-js" %% "scalajs-dom" % "2.8.0"
```

### sbt-matrix-sources 0.1.0

There's a new plugin for sbt 2.x called [sbt-matrix-sources](https://github.com/sbt/sbt-matrix-sources), created by Albert Meltzer ([@kitbellew](https://github.com/kitbellew)). This plugin adds `<platform_part>/src/main/<language_part>` to the source directory like `js/src/main/scala`. This provide an sbt-crossproject emulation on top of the project matrix to smooth out the sbt 2.x migration.

### sbt-git 3.0.0-RC1

[sbt-git 3.0.0-RC1](https://github.com/sbt/sbt-git/releases/tag/v3.0.0-RC1) was published recently for sbt 1.x and 2.x. sbt-git 3.x features a shift to use system `git` by default as opposed to JGit. This was contributed by Matthias Kurz, from the Play framework project.

### sbt-buildinfo 0.13.2

[sbt-buildinfo 0.13.2](https://github.com/sbt/sbt-buildinfo/releases/tag/v0.13.2) was published recently for sbt 1.x and 2.x. sbt-buildinfo is a small code generator that I created a while back to give project code access to information in the build definition. sbt-buildinfo 0.13.2 features a bug fix contributed by Lukas Rytz (VirtusLab) that should avoid running the tasks out-of-graph on sbt 2.x.

### sbt-github-actions 0.32.0

[sbt-github-actions 0.32.0](https://github.com/sbt/sbt-github-actions/releases/tag/v0.32.0) was released a few weeks ago for sbt 1.x and 2.x. sbt-github-actions generates GitHub Actions YAML files from the build. sbt-github-actions 0.32.0 features an update that I sent to use actions/setup-java v6.

### sbt-assembly 2.5.0

[sbt-assembly 2.5.0](https://github.com/sbt/sbt-assembly/releases/tag/v2.5.0) was released a few weeks ago for sbt 1.x and 2.x. Recent contributions include an update to make shading errors fail the build, by Stas Shevchenko (Evolution), and artifact caching, by Dmitrii Naumenko (JetBrains).

### sbt-salad-days 0.2.0

[sbt-salad-days](https://eed3si9n.com/reducing-scaladoc-file-size-with-sbt-salad-days/) is a plugin I created to reduce the Scaladoc JAR size for Maven Central publishing.

### sbt-site 1.8.0

[sbt-site 1.8.0](https://github.com/sbt/sbt-site/releases/tag/v1.8.0) was cross published for sbt 1.x and 2.x last month. sbt-site is an sbt plugin originally created by Josh Suereth to generate project websites. I sent [sbt-site#224](https://github.com/sbt/sbt-site/pull/224) to cross build it.

### sbt-testng 3.2.0

[sbt-testng 3.2.0](https://github.com/sbt/sbt-testng/releases/tag/v3.2.0) was cross published for sbt 1.x. and 2.x recently. I'm not sure how popular testng is, but I sent [sbt-testng#30](https://github.com/sbt/sbt-testng/pull/30) to aid Slick migrating to sbt 2.x.

### sbt-pgp 2.3.2

[sbt-pgp 2.3.2](https://github.com/sbt/sbt-pgp/releases/tag/v2.3.2) was released last month for sbt 1.x and 2.x, with a fix to ensure compatibility with sbt 2.1.0.

## Towards sbt 2.1.0 + Scala 3.9.0 LTS

Recently we published [sbt 2.1.0-M1](https://eed3si9n.com/sbt-2.1.0-beta), kicking off the beta release of sbt 2.1.x series. Among the headline feature of sbt 2.1.0 is Scala 3.9.0 LTS on the metabuild. Since both sbt 2.x and Scala 3.x are backward compatible, generally  existing plugins should continue to work.

1. Since sbt 2.1.0 removes Apache Ivy as its dependency, any plugins that were using internal Ivy code should migrate to using the LM API (available since sbt 1.0), which abstracts over Ivy and Coursier.
2. Since Scala 3.9.x will be better supported as Long Term Support (LTS), we should adopt it once sbt 2.1.0 becomes available. Until then, plugins must stick with Scala 3.8.x.

## Participation

The Scala Center has been entrusted with coordinating the commissioned Scala work for the Sovereign Tech Fund. The Scala Center is an independent, not-for-profit center sponsored by [corporate members and individual backers like you](/blog/2023/09/11/scala-center-fundraising.html) to promote and facilitate Scala. If you would like to participate and/or see more of these types of efforts, please reach out to your manager to see if your company can donate engineering time or membership to the Scala Center.

See [The Scala Center Fundraising Campaign](/blog/2023/09/11/scala-center-fundraising.html) for more details.
