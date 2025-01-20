---
category: announcement
permalink: /news/3.6.3/
title: "Scala 3.6.3 is now available!"
---
Scala 3.6.3 is now available!

The new feature introduced in this release is `-Yprofile-trace` compiler option enabling the generation of trace events in a standard JSON format. These can be used by tooling to graphically inspect the amount of time needed to process sources in each compilation phase.

To use this feature run compilation with `-Yprofile-enabled` and `-Yprofile-trace:path/to/compiler.trace` to specify where traces should be saved. You can also optionally define `-Yprofile-destination:path/to/profiler.output` to redirect other profiler outputs that would be printed on the standard output otherwise. The final result file can rendered in the web browser using <https://ui.perfetto.dev>.
For more details [refer to the Scala 3 PR](https://github.com/scala/scala3/pull/19897) or its [original Scala implementation](https://github.com/scala/scala/pull/7364).

For a full list of changes and contributor credits, please refer to the [release notes](https://github.com/scala/scala3/releases/tag/3.6.3).
