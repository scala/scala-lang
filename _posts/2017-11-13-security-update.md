---
category: announcement
permalink: /news/security-update-nov17
title: "Security update: 2.12.4, 2.11.12, 2.10.7 (CVE-2017-15288)"
---

A privilege escalation vulnerability (CVE-2017-15288) has been identified in the Scala compilation daemon.

The compile daemon is started explicitly by the `fsc` command, or implicitly by executing
a Scala source file as a script (e.g `scala MyScript.scala`). The Scala REPL, started by `scala` is not affected as it does not use the compilation daemon, nor is running a pre-compiled class using the `scala` command.

We recommend upgrading to the latest versions of Scala:
  - [Scala 2.12.4](https://github.com/scala/scala/releases/tag/v2.12.4);
  - [Scala 2.11.12](https://github.com/scala/scala/releases/tag/v2.11.12);
  - [Scala 2.10.7](https://github.com/scala/scala/releases/tag/v2.10.7).

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