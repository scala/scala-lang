---
layout: blog
post-type: blog
by: Guillaume Massé
title: "Scala Library Index Reaches Beta!"
---

Today, the Scala Center team is very proud to announce that [The Scala Package Index](https://index.scala-lang.org/), or Scaladex for short, has reached beta v1! This means we're now confident that Scaladex is now in state where it is ready for widespread use. Scaladex now supports most major features we planned for it, in addition to serving as an index of the known Scala ecosystem; self-updating, reindexing, user editing of published libraries (keywords, documentation links, and artifact deprecation), and more, even as we work to iron out user experience. In particular we'd like to thank contributors [Ronald Marske](https://github.com/Scyks), and [Rafa Paradela](https://github.com/rafaparadela) and [Israel Pérez](https://github.com/israelperezglez) from [47 Degrees](http://www.47deg.com/) in helping us to reach this milestone!

Here's a quick walkthrough we put together of some of Scaladex's main features:

<iframe width="610" height="315" src="https://www.youtube.com/embed/TBoJivIJsbU" frameborder="0" allowfullscreen></iframe>

## What can I do with the Scala Index?

Scaladex is meant to represent a map of all published Scala libraries. With Scaladex, a developer can now query more than 100,000 releases of Scala libraries. We group those releases into projects, artifacts, targets, and versions. Scaladex indexes over 3,000 individual projects, which can each contain a number of artifacts, or jars.

For example the `akka` project contains multiple artifacts, some that are quite different from one another, such as `akka-actor` and `akka-http`. You can explore all artifacts and versions from the unified project page, for example for the Akka project, the project page can be found at [https://index.scala-lang.org/akka/akka](https://index.scala-lang.org/akka/akka). It's even possible to explore the web of dependencies between artifacts by selecting an artifact on the main project page, for example, the "Artifact Dependents" section of the page shows all of the published artifacts that depend on the current version, 2.4.8, of the `akka-actor` artifact.

You can even search for libraries based on targets such as those compiled for use with Scala.js, Scala 2.11.x, or even Scala 2.12.x.

Projects can also be edited and tagged with keywords, to help in searching, and indexing and to help users identify, at a glance, what a given library might do. Authors can also customize their project by indicating custom documentation to link to per version and artifact, or mark projects as deprecated so users know not to depend on a specific artifact in the future.

The Index is also similar to a DNS (Domain Name Server). With a project or artifact name, you can find the exact release to paste into your sbt, Gradle, or Maven builds.

One can imagine many more features for us to include in Scaladex– for example, an API that tools could query Scaladex for compatibility information between libraries. As always, if you have any ideas or wishes, let us know in our [Gitter channel](https://gitter.im/scalacenter/scaladex)!

## How does it work?

We run a daily process to discover and download published releases (.pom files). We currently index artifacts found on Bintray and Maven Central via the [JCenter repository](https://bintray.com/bintray/jcenter). Scala libraries normally include the Scala compiler major and minor version in the artifact name. We automatically find any library following this convention. (If you don't follow it, you can create a pull request to [add your library to the index](https://github.com/scalacenter/scaladex-data/edit/master/non-standard.json).)

When we have all the release information, we can group them by the GitHub repository they provide and we generate a project page from the combination of info found on GitHub and on Bintray/Maven Central. If you forgot to include your project's GitHub URL you can always [claim your project manually](https://github.com/scalacenter/scaladex-data/edit/master/claims.json) via a pull request.

Scaladex has the advantage of performing well without manual intervention. However, with the help of library owners, we can improve the quality of our data.

So please head on over to [the Scala Library Index](https://index.scala-lang.org/), login with your GitHub account, and start editing your projects! Project keywords, in particular, wanted! :-)

## What's next?

The Scala Center wants you! Ideas and feature requests are welcome on our [Gitter channel](https://gitter.im/scalacenter/scaladex), and there's a list of [low-hanging fruit todos/issues](https://github.com/scalacenter/scaladex/issues?q=is:open+is:issue+label:v2) on our issue tracker that we'd love help on! We love PRs, so, come on in and help us map the Scala ecosystem!