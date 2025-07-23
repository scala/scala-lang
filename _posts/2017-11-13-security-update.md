---
category: blog
permalink: /blog/security-update-nov17.html
redirect_from: /news/security-update-nov17.html
title: "Security update: 2.12.4, 2.11.12, 2.10.7 (CVE-2017-15288)"
---

A privilege escalation vulnerability ([CVE-2017-15288](https://cve.mitre.org/cgi-bin/cvename.cgi?name=2017-15288)) has been identified in the Scala compilation daemon.

We recommend upgrading to the latest versions of Scala ([Scala 2.12.4](https://github.com/scala/scala/releases/tag/v2.12.4), [Scala 2.11.12](https://github.com/scala/scala/releases/tag/v2.11.12) or [Scala 2.10.7](https://github.com/scala/scala/releases/tag/v2.10.7)).

<!-- break -->

The compile daemon is started explicitly by the `fsc` command, or implicitly by executing
a Scala source file as a script (e.g `scala MyScript.scala`). The Scala REPL, started by `scala` is not affected as it neither uses the compilation daemon nor runs a pre-compiled classes using the `scala` command.


# Impact

While the compile daemon is running, an attacker with local access to the machine can
execute code as the user that started the compile daemon, and can write arbitrary
class files to any location on the filesystem that the user has access to.

# Affected Versions

  - Scala 2.1.6-2.10.6; 2.11.0-2.11.11; 2.12.0-2.12.3

# Mitigation

  - Use `scala -nocompdaemon MyScript.scala` rather than `scala MyScript.scala` to
    disable the implicit startup and use of the daemon.
  - Avoid explicitly starting `fsc`
  - Upgrade to Scala 2.10.7 2.11.12, 2.12.4 or higher which restricts the sensitive file to be
    readable only by the owner. These releases also change the location of the sensitive
    file: it is written in the directory `$HOME/.scalac`.

# Feedback

Please post any comments on [Discourse](https://users.scala-lang.org/t/security-update-2-12-4-2-11-12-2-10-7-cve-2017-15288/1922). For details on the fix, the relevant PRs are: [#6108 (2.11.12)](https://github.com/scala/scala/pull/6108), [#6120 (2.12.4)](https://github.com/scala/scala/pull/6120), [#6128 (2.10.7)](https://github.com/scala/scala/pull/6128).
