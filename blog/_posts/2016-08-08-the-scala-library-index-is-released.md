---
layout: blog
post-type: blog
by: Guillaume Massé
title: "The Scala Library Index Is Released"
---

![Background](/resources/img/blog/scaladex/head-project-background.png)

The Scala Center team is really proud to announce the release of <a href="https://index.scala-lang.org/" target="_blank">The Scala Package Index</a>, or Scaladex for short. We would like to thanks our open source contributors: <a href="https://github.com/Scyks" target="_blank">Ronald Marske</a> and <a href="http://www.47deg.com/" target="_blank">47 Degrees</a>.

<iframe width="610" height="315" src="https://www.youtube.com/embed/TBoJivIJsbU" frameborder="0" allowfullscreen></iframe>

## Why do we need an index for Scala ?

With this new tool, a developer can query more than 100,000 Scala library releases. We group those releases into projects, artifacts, targets, and versions.

The Index is similar to a DNS (Domain Name Server). With a project or artifact name, you can find the exact release to paste into your build.

The Index is also similar to a catalog. You will find new projects or new releases for existing projects. Authors can edit their project's entry to improve the search experience, for example by adding keywords.

## How does it work ?

We run a daily process to discover and download published releases (.pom files). We currently support Bintray repository and Maven Central via the <a href="https://bintray.com/bintray/jcenter" target="_blank">JCenter repository</a>. Scala libraries normally include the Scala compiler major and minor version in the artifact name. We automatically find any library following this convention. (If you don't follow it, you can create a pull request to <a href="https://github.com/scalacenter/scaladex-data/edit/master/non-standard.json" target="_blank">add your library</a>.)

When we have all the release information, we can group them by the GitHub repository they provide. If you forgot to include this information you can <a href="https://github.com/scalacenter/scaladex-data/edit/master/claims.json" target="_blank">claim your project</a> via a pull request.

Scaladex has the advantage of performing well without manual intervention. However, with the help of library owners, we can improve the quality of our data. We kindly invite you to login to GitHub and start editing your projects.

## What's next ?

The Scala Center has a limited amount of resources and an impressive amount of upcoming projects. We want to work with the Scala community to go far beyond our current reach. We have identified a [set of tasks](https://github.com/scalacenter/scaladex/issues?q=is:open+is:issue+label:v2) that could be resolved with the help of the community. We are also open to new ideas to improve the index in general.
