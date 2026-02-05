---
layout: blog-detail
post-type: blog
by: Tomasz Godzik, VirtusLab
title: Scala Standard Library Process
---

# Contributing to Scala Standard Library

After a long freeze, the Scala 3 standard library is again open to
contributions. The main place for contributing is now the
Scala 3 repository.

Certain specific improvements might be eligible for backporting to Scala 2,
but this will be the exception rather than the norm. To
access most new functionality, you need to migrate to Scala 3.

# The Process

The Scala 3 standard library is hosted in the
[scala/scala3](https://github.com/scala/scala3) repository. Any changes that
influence the standard library API should follow [this process](https://github.com/scala/scala3/blob/main/docs/_docs/contributing/procedures/contributing-to-stdlib.md). If the changes are only internal, the process is 
the standard pull request one.

The person responsible for coordinating the process is the Scala Core Coordinator. 
Current Coordinator can be found on the [Scala Core Team page](https://www.scala-lang.org/scala-core/). 