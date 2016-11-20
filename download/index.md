---
layout: downloadpage
title: Download
release_version: 2.12.0
release_date: "November 3, 2016"
show_resources: "true"
other_releases: [
  ["development_version", "Current 2.12.x release", 2.12.0, "November 3, 2016"],
  ["maintenance_version", "Latest 2.11.x maintenance release", 2.11.8, "March 8, 2016"],
  ["maintenance_version", "Last 2.10.x maintenance release", 2.10.6, "September 18, 2015"],
  ["maintenance_version", "Last 2.9.x maintenance release", 2.9.3, "February 28, 2013"]
]
requirements: "Scala 2.12 requires version 8 of the <a href='http://www.java.com/'>Java platform</a>. Older Scala versions are compatible with Java 6 and up. Java 9 is not yet supported."
resources: [
  ["-main-unixsys", "scala-2.12.0.tgz", "http://downloads.lightbend.com/scala/2.12.0/scala-2.12.0.tgz", "Mac OS X, Unix, Cygwin", "19.24M"],
  ["-main-windows", "scala-2.12.0.msi", "http://downloads.lightbend.com/scala/2.12.0/scala-2.12.0.msi", "Windows (msi installer)", "117.78M"],
  ["-non-main-sys", "scala-2.12.0.zip", "http://downloads.lightbend.com/scala/2.12.0/scala-2.12.0.zip", "Windows", "19.28M"],
  ["-non-main-sys", "scala-2.12.0.deb", "http://downloads.lightbend.com/scala/2.12.0/scala-2.12.0.deb", "Debian", "137.14M"],
  ["-non-main-sys", "scala-2.12.0.rpm", "http://downloads.lightbend.com/scala/2.12.0/scala-2.12.0.rpm", "RPM package", "117.39M"],
  ["-non-main-sys", "scala-docs-2.12.0.txz", "http://downloads.lightbend.com/scala/2.12.0/scala-docs-2.12.0.txz", "API docs", "50.74M"],
  ["-non-main-sys", "scala-docs-2.12.0.zip", "http://downloads.lightbend.com/scala/2.12.0/scala-docs-2.12.0.zip", "API docs", "100.40M"],
  ["-non-main-sys", "scala-sources-2.12.0.tar.gz", "https://github.com/scala/scala/archive/v2.12.0.tar.gz", "Sources", ""]
]
---

<h3>Additional information</h3>

You can find the links to prior versions or the latest development version below.
To see a detailed list of changes for each version of Scala please refer to the <a href="{{ site.baseurl }}/download/changelog.html">changelog</a>.
Note that different major releases of Scala (e.g. Scala 2.11.x and Scala 2.12.x) are not binary compatible with each other.

<ul>
  {% for release in page.other_releases %}
  <li><a href="/download/{{ release[2] }}.html">{{ release[1] }} - Scala {{ release[2] }}</a></li>
  {% endfor %}
  <li><a href="/files/archive/nightly/">Nightly builds</a></li>
  <li><a href="changelog.html">Changelog</a></li>
  <li><a href="all.html">All previous releases</a></li>
</ul>
