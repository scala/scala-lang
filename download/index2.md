---
layout: page
title: Download
path: "/files/archive/"
stable_scala: "scala"
stable_docs: "scala-docs"
stable_sources: "scala-sources"
stable_version: 2.10.0
stable_date: "January 4, 2013"
maintenance_version: 2.9.3
maintenance_date: "February 28, 2013"
rc_version: 2.10.1-RC2
rc_date: "February 28, 2013"

---

We provide different Scala versions for download below. Our
[changelog](changelog.html) contains the list of changes for each
version.  The Scala distribution is released under a
[BSD-like license]({{ site.baseurl }}/download/license.html).  New users might want to read the
[Getting Started]({{ site.baseurl }}/documentation/getting-started.html) guide.


## Current Stable Release

<table><tbody>
  <tr>
    <td style="text-align: center;"><a href="{{ page.path }}{{ page.stable_scala }}-{{ page.stable_version}}.tgz" class="btn small"><img src="/resources/img/logos/Apple_logo_black.png"><img src="/resources/img/logos/Tux_BW.png"><img src="/resources/img/logos/Bsd_daemon_BW.png"></br> Download for </br> Mac OS X, Unix, Cygwin, etc.</a></td>
    <td style="text-align: center;"><a href="{{ page.path }}{{ page.stable_scala }}-{{ page.stable_version}}.msi" class="btn small"><img src="/resources/img/logos/Windows_BW.png"></br> Download for </br> Windows</a></td>
  </tr>
</tbody></table>

The current version of Scala is **{{ page.stable_version }}**.
Released on April 14, 2012.

| Archive     |       System |         Size |
|:-----------:|:------------:|-------------:|
| [{{ page.stable_scala }}-{{ page.stable_version }}.tgz]({{ page.path }}{{ page.stable_scala }}-{{ page.stable_version }}.tgz) ([md5]({{ page.path }}{{ page.stable_scala }}-{{ page.stable_version }}.tgz.md5)) | Max OS X, Unix, Cygwin | 23.9 MB
| [{{ page.stable_scala }}-{{ page.stable_version }}.msi]({{ page.path }}{{ page.stable_scala }}-{{ page.stable_version }}.msi) ([md5]({{ page.path }}{{ page.stable_scala }}-{{ page.stable_version }}.msi.md5)) | Windows (msi installer) | 43.3 MB
| [{{ page.stable_scala }}-{{ page.stable_version }}.zip]({{ page.path }}{{ page.stable_scala }}-{{ page.stable_version }}.zip) ([md5]({{ page.path }}{{ page.stable_scala }}-{{ page.stable_version }}.zip.md5)) | Windows (zip) | 23.9 MB
| [{{ page.stable_scala }}-{{ page.stable_version }}.deb]({{ page.path }}{{ page.stable_scala }}-{{ page.stable_version }}.deb) ([md5]({{ page.path }}{{ page.stable_scala }}-{{ page.stable_version }}.deb.md5)) | Debian | 21.0 MB
| [{{ page.stable_scala }}-{{ page.stable_version }}.rpm]({{ page.path }}{{ page.stable_scala }}-{{ page.stable_version }}.rpm) ([md5]({{ page.path }}{{ page.stable_scala }}-{{ page.stable_version }}.rpm.md5)) | RPM package | 21.0 MB
| [{{ page.stable_docs }}-{{ page.stable_version }}.txz]({{ page.path }}{{ page.stable_docs }}-{{ page.stable_version }}.txz) ([md5]({{ page.path }}{{ page.stable_docs }}-{{ page.stable_version }}.txz.md5)) | API docs | 1.8 MB
| [{{ page.stable_docs }}-{{ page.stable_version }}.zip]({{ page.path }}{{ page.stable_docs }}-{{ page.stable_version }}.zip) ([md5]({{ page.path }}{{ page.stable_docs }}-{{ page.stable_version }}.zip.md5)) | API docs | 21.3 MB
| [{{ page.stable_sources }}-{{ page.stable_version }}.tgz]({{ page.path }}{{ page.stable_sources }}-{{ page.stable_version }}.tgz) ([md5]({{ page.path }}{{ page.stable_sources }}-{{ page.stable_version }}.tgz.md5)) | sources | 37.6 MB


## Current Maintenance Releases

<table><tbody>
  <tr>
    <td style="text-align: center;"><a href="{{ page.path }}scala-{{ page.maintenance_version }}.tgz" class="btn small"><img src="/resources/img/logos/Apple_logo_black.png"><img src="/resources/img/logos/Tux_BW.png"><img src="/resources/img/logos/Bsd_daemon_BW.png"></br> Download for </br> Mac OS X, Unix, Cygwin, etc.</a></td>
    <td style="text-align: center;"><a href="{{ page.path }}scala-{{ page.maintenance_version }}.msi" class="btn small"><img src="/resources/img/logos/Windows_BW.png"></br> Download for </br> Windows</a></td>
  </tr>
</tbody></table>

Scala **{{ page.maintenance_version }}** was released on
{{ page.maintenance_date }}. This version is provided as a
binary-compatible update to our previous Scala 2.9.x series; we
recommend our most recent stable version (currently Scala
{{ page.stable_version }}) for all new developments.

| Archive    |       System |         Size |
|:-----------:|:------------:|-------------:|
| [scala-{{ page.maintenance_version }}-installer.jar]({{ page.path }}{{ page.stable_scala }}-{{ page.maintenance_version }}-installer.jar) ([md5]({{ page.path }}{{ page.stable_scala }}-{{ page.maintenance_version }}-installer.jar.md5)) | lzPack (all platforms )| 39.2 MB
| [scala-{{ page.maintenance_version }}.tgz]({{ page.path }}{{ page.stable_scala }}-{{ page.maintenance_version }}.tgz) ([md5]({{ page.path }}{{ page.stable_scala }}-{{ page.maintenance_version }}.tgz.md5)) | Max OS X, Unix, Cygwin | 20.0 MB
| [scala-{{ page.maintenance_version }}.zip]({{ page.path }}{{ page.stable_scala }}-{{ page.maintenance_version }}.zip) ([md5]({{ page.path }}{{ page.stable_scala }}-{{ page.maintenance_version }}.zip.md5)) | Windows (zip) | 20.0 MB
| [scala-{{ page.maintenance_version }}-devel-docs.tgz]({{ page.path }}scala-{{ page.maintenance_version }}-devel-docs.tgz) ([md5]({{ page.path }}scala-{{ page.maintenance_version }}-devel-docs.tgz.md5)) | API docs | 13.5 MB
| [scala-{{ page.maintenance_version }}-sources.tgz]({{ page.path }}scala-{{ page.maintenance_version }}-sources.tgz) ([md5]({{ page.path }}scala-{{ page.maintenance_version }}-sources.tgz.md5)) | sources | 40.6 MB


<!--
The txz archives can be expanded by using tar xfJ (GNU tar 1.22 or
later).

If you are looking for packages for common distributions (Debian,
Fedora, MacPorts, openSUSE) please look here. You may also obtain the
Scala distribution by using one of the IDEs that support Scala.

The Scala API is available online. A local copy can be obtained by
downloading the API archive above.
-->

### Software Requirements

The Scala software distribution can be installed on any Unix-like or
Windows system. It requires the Java runtime version 1.6 or later,
which can be downloaded [here](http://www.java.com/).


### Latest Release Candidate


Released on {{ page.rc_date }}.

| Archive    |       System |         Size |
|:-----------:|:------------:|-------------:|
| [{{ page.stable_scala }}-{{ page.rc_version }}.tgz]({{ page.path }}{{ page.stable_scala }}-{{ page.rc_version }}.tgz) ([md5]({{ page.path }}{{ page.stable_scala }}-{{ page.rc_version }}.tgz.md5)) | Max OS X, Unix, Cygwin | 26.9 MB
| [{{ page.stable_scala }}-{{ page.rc_version }}.msi]({{ page.path }}{{ page.stable_scala }}-{{ page.rc_version }}.msi) ([md5]({{ page.path }}{{ page.stable_scala }}-{{ page.rc_version }}.msi.md5)) | Windows (msi installer) | 50.3 MB
| [{{ page.stable_scala }}-{{ page.rc_version }}.zip]({{ page.path }}{{ page.stable_scala }}-{{ page.rc_version }}.zip) ([md5]({{ page.path }}{{ page.stable_scala }}-{{ page.rc_version }}.zip.md5)) | Windows (zip) | 26.9 MB
| [{{ page.stable_docs }}-{{ page.rc_version }}.txz]({{ page.path }}{{ page.stable_docs }}-{{ page.rc_version }}.txz) ([md5]({{ page.path }}{{ page.stable_docs }}-{{ page.rc_version }}.txz.md5)) | API docs | 2.3 MB
| [{{ page.stable_docs }}-{{ page.rc_version }}.zip]({{ page.path }}{{ page.stable_docs }}-{{ page.rc_version }}.zip) ([md5]({{ page.path }}{{ page.stable_docs }}-{{ page.rc_version }}.zip.md5)) | API docs | 24.8 MB
| [{{ page.stable_sources }}-{{ page.rc_version }}.tgz]({{ page.path }}{{ page.stable_sources }}-{{ page.rc_version }}.tgz) ([md5]({{ page.path }}{{ page.stable_sources }}-{{ page.rc_version }}.tgz.md5)) | sources | 40.0 MB

