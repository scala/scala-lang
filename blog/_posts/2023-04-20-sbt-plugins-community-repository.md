---
layout: blog-detail
post-type: blog
by: Julien Richard-Foy, Scala Center
title: "sbt Plugins Community Repository"
---

On the 7th of April 2023, many Scala builds stopped working because an outage affected the sbt community repository.
In this blog post, we explain what the sbt community repository is and what it stores, report on the incident,
and outline what we can do to avoid such problems in the future.

## The Incident

On the 7th of April 2023, many projects of the Scala ecosystem could not anymore resolve
sbt plugins from the community repository `repo.scala-sbt.org` (examples
[here](https://github.com/sbt/sbt-dynver/issues/239#issuecomment-1499791434),
[here](https://github.com/playframework/playframework/issues/11675#issuecomment-1499869916),
[here](https://github.com/sbt/sbt/issues/7204), and
[here](https://github.com/spray/sbt-revolver/issues/112)).

## Retrospective

To understand what happened, here is some background information. sbt plugins are packaged
as modules published to Ivy or Maven repositories. Historically, sbt plugins used to be
published primarily to the sbt community repository hosted on Bintray. However, in 2021,
JFrog has [sunsetted the Bintray
service](https://jfrog.com/blog/into-the-sunset-bintray-jcenter-gocenter-and-chartcenter/).
Since then, JFrog has granted the Scala Center a cloud-hosted Artifactory instance for free.
As it was explained in the [release notes of sbt
1.5.1](https://eed3si9n.com/bintray-to-jfrog-artifactory-migration-status-and-sbt-1.5.1),
this Artifactory instance has been used as a read-only repository to host all the sbt
plugins that were published to the community repository at that time, but the recommendation
to plugin authors was to switch to the Maven Central repository.

In practice, the Artifactory instance sponsored by JFrog expires automatically after a
year, and we have to explicitly ask for renewal. What happened the [7th of
April](https://github.com/sbt/sbt/issues/7202) is that the instance expired without
prior notice. Thankfully, Eugene Yokota, the maintainer of sbt, promptly asked JFrog to
renew the Artifactory instance, which they generously did. After a couple more technical
steps, everything was back to normal.

## Current State

Thanks to the efforts of Eugene Yokota and the support from the company JFrog, the situation
is now back to normal: the read-only repository `repo.scala-sbt.org` backed by an Artifactory
instance works again and all the Scala builds should be able to resolve their plugin
dependencies as before.

However, as mentioned by Seth Tisue in [a
comment](https://github.com/sbt/sbt/issues/7202#issuecomment-1500220344), the event
highlighted a weakness in the Scala ecosystem infrastructure.

In practice, what do we rely on the sbt community repository for?

The sbt community repository is primarily used for two purposes:

1. It hosts “old” versions of sbt plugins that may still be used today in Scala projects.
   It is important to note that those sbt plugins are not necessarily that old. Some of
   them are stable and they simply didn't get a new release in the past two years,
   meaning that they had no chance to migrate to Maven Central.
2. It also hosts the Linux packages (deb and rpm) of sbt releases. Note that that part
   is not read-only: Eugene Yokota still publishes new sbt releases there. These
   packages are used by all the Scala developers who install `sbt` via a Linux package
   manager (and by many Docker images that provide `sbt`).

Lastly, it also hosts old releases of sbt (before the 1.x era) and Play framework.

For the record, here is the exhaustive list of URLs and their respective content:

- `https://repo.scala-sbt.org/scalasbt/sbt-plugin-releases` - sbt plugins for sbt 1.x, 0.13.x, 0.12.x etc.
- `https://repo.typesafe.com/typesafe/ivy-releases` - sbt main artifacts prior to sbt 1.x, and other artifacts such as Play.
- `https://repo.scala-sbt.org/scalasbt/debian` - sbt DEB installers.
- `https://repo.scala-sbt.org/scalasbt/rpm` - sbt RPM installers.

## Next Steps

The outage lasted less than 24 hours and impacted many developers. In
response to the incident, several members of the community started investigating
solutions.

[Matthias Kurz](https://github.com/sbt/sbt/issues/7202#issuecomment-1500657923)
looked at the sbt plugins that are used in his machine and that are currently
hosted only on `repo.scala-sbt.org`. He then created issues on the corresponding
GitHub repositories to migrate them to the Maven Central, and even
submitted pull requests to perform that migration for some of those projects.

[Johannes Rudolph](https://github.com/spray/sbt-revolver/issues/100#issuecomment-1500841604),
[Eugene Yokota](https://github.com/sbt/sbt-sdlc/pull/5),
and [Chris Kipp](https://github.com/sbt/sbt-license-report/pull/52)
followed up by migrating the projects `sbt-revolver`, `sbt-sdlc`, and
`sbt-license-report` to Maven Central.

Eugene Yokota, who is also the [community
representative](https://github.com/scalacenter/advisoryboard/pull/120) of the
Scala Center Advisory Board, submitted a
[proposal to plan and manage the sbt community
repository](https://github.com/scalacenter/advisoryboard/pull/120/files).
While the proposal has not yet been approved by the Advisory Board, we,
the Scala Center, have started our own investigations to ensure
the continuity of the sbt ecosystem. We will let you know as soon as we settle
on a plan.
