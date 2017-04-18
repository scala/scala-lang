---
layout: downloadpage
title: Download
release_version: 2.12.2
release_date: "April 18, 2017"
show_resources: "true"
other_releases: [
  ["development_version", "Current 2.13.x milestone", 2.13.0-M1, "April 18, 2017"],
  ["maintenance_version", "Last 2.11.x maintenance release", 2.11.11, "April 18, 2017"],
  ["maintenance_version", "Last 2.10.x maintenance release", 2.10.6, "September 18, 2015"]
]
requirements: "Scala 2.12 requires version 8 of the <a href='http://www.java.com/'>Java platform</a>. Older Scala versions are compatible with Java 6 and up. Java 9 is not yet supported."
resources: [
  ["-main-unixsys", "scala-2.12.2.tgz", "https://downloads.lightbend.com/scala/2.12.2/scala-2.12.2.tgz", "Mac OS X, Unix, Cygwin", "18.69M"],
  ["-main-windows", "scala-2.12.2.msi", "https://downloads.lightbend.com/scala/2.12.2/scala-2.12.2.msi", "Windows (msi installer)", "126.44M"],
  ["-non-main-sys", "scala-2.12.2.zip", "https://downloads.lightbend.com/scala/2.12.2/scala-2.12.2.zip", "Windows", "18.73M"],
  ["-non-main-sys", "scala-2.12.2.deb", "https://downloads.lightbend.com/scala/2.12.2/scala-2.12.2.deb", "Debian", "145.14M"],
  ["-non-main-sys", "scala-2.12.2.rpm", "https://downloads.lightbend.com/scala/2.12.2/scala-2.12.2.rpm", "RPM package", "125.88M"],
  ["-non-main-sys", "scala-docs-2.12.2.txz", "https://downloads.lightbend.com/scala/2.12.2/scala-docs-2.12.2.txz", "API docs", "56.51M"],
  ["-non-main-sys", "scala-docs-2.12.2.zip", "https://downloads.lightbend.com/scala/2.12.2/scala-docs-2.12.2.zip", "API docs", "109.80M"],
  ["-non-main-sys", "scala-sources-2.12.2.tar.gz", "https://github.com/scala/scala/archive/v2.12.2.tar.gz", "Sources", ""]
]
---

<h3>Other Releases</h3>

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
