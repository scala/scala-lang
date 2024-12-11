---
layout: inner-page-no-masthead
title: Scala development guarantees
permalink: /development/
includeTOC: true
---

## Scala 3 TL;DR

1. There are 2 distribution lines of Scala 3: **Scala Next** and **Scala LTS**.
2. The **Scala Next** line is the **default** to be used by most users,
   containing the latest features, bug fixes and improvements.
3. The **Scala LTS** line is advised to be used for publishing **libraries**.
   (Some especially conservative users might also choose it over Scala Next.)
4. Bug fixes and usability improvements from the Scala Next line are regularly
   backported to the currently supported LTS lines.
5. Scala minor releases (3.x) are backwards compatible, meaning libraries built
   with older versions can be consumed by newer versions. Patch releases (3.5.x)
   are backwards and forwards compatible.
6. Thus, existing source code continues to compile when upgrading to a new
   version, except for rare situations when a bugfix requires breaking source
   compatibility.

## Scala 2 TL;DR

Maintenance of Scala 2.13 will continue indefinitely.

Minimal maintenance of Scala 2.12 will continue as long as
sbt 1 remains in wide use.

## The role of the Scala Center

The [Scala Center](https://scala.epfl.ch) is a not-for-profit foundation that stewards the Scala programming language. The Scala Center is funded mainly by corporate sponsorships and donations. It is vital for the future of Scala to ensure the continued existence and health of the Scala Center.

Companies interested in the continued maintenance of Scala 3 and Scala 2 should help to fund the Scala Center by joining the Center’s advisory board, or through direct donations.

When you support the Center, make sure to keep the Center appraised of what Scala versions are of concern to your company.

To learn more about supporting the Center, read this September 2023 blog post, [The Scala Center Fundraising Campaign](https://www.scala-lang.org/blog/2023/09/11/scala-center-fundraising.html).

If you’d like for your organization to work with us more closely, please contact
scala.center (at) epfl.ch to discuss possible collaboration.

## Contribute to Scala

Scala is and always has been an open source effort. It is a collaboration
between multiple entities (business, nonprofits, individuals) and relies on
community contributions as much as the work of its maintainers.

If you are interested in contributing to Scala, be sure to start by visiting
[the GitHub repository of the compiler](https://github.com/scala/scala3) (or the
[standard library](https://github.com/scala/scala/tree/2.13.x/src/library)).

## Scala 3 semantic versioning

Scala 3 follows [Semantic Versioning](https://semver.org/). Each version number
has a well-defined meaning, following the `major.minor.patch` scheme, with each
component representing a subset of our compatibility guarantees.

### Patch versions

`Patch` versions increase the patch component of the version scheme. Examples
are 3.3.3 \-\> 3.3.4 or 3.5.0 \-\> 3.5.1.

These are generally focused on bug fixes. They may also include usability
improvements (such as better error messages), performance enhancements or
internal changes (refactorings, optimizations). Patch releases can also add
experimental features intended for trial and evaluation by interested users;
such features are never enabled by default, only via explicit opt-in.

**Patch versions are guaranteed to be both forward and backward compatible.**
This means a library compiled with, for example, Scala 3.3.3 can be consumed by
a project built with any other past for future Scala 3.3.x version, and vice
versa.

### Minor versions

Minor versions increase the `minor` component of the version scheme. Examples
are 3.3.4 \-\> 3.4.0 or 3.4.3 \-\> 3.5.0.

They are generally focused on features, with the limitation that any new feature
has to be backward compatible. Those features could be bigger usability
improvements (like adding linting in 3.3.0), loosening implementation
restrictions (like allowing exports in extension clauses in 3.2.0), adding new
tools (like adding Scala CLI as the new `scala` runner in 3.5.0) and others. We
take utmost care to not change the existing semantics of any working code
whenever it is avoidable. Some changes might be possible, but if detected they
will be announced properly beforehand.

Language changes requiring the SIP Committee approval usually have to be
delivered in a minor version.

**Minor versions are guaranteed to be backwards TASTy and binary compatible.**
This means that code compiled with Scala 3.2.x can still be used in Scala 3.3.x,
3.4.x, 3.5.x or any other future version, indefinitely. However, the opposite is
not true. Code compiled with Scala 3.5.x cannot be used in a Scala 3.4.x
project. Allowing this would not be considered safe. For instance, the Scala 3.5
code might want to access a library method which did not exist in 3.4.

### Major versions

**Only major versions could, theoretically, introduce both backwards and
forwards incompatible changes.** However, **we do not plan to increase a new
major version of Scala in the currently foreseeable future**. There is currently
no Scala 4 on the horizon. The major version of the language remains final and
immutable until announced otherwise.

### Output compatibility

The guarantees described above are called output compatibility. They encompass
binary compatibility (compatibility on the level of generated bytecode) and
TASTy compatibility (the possibility for the newer versions to read well-defined
and structured metadata describing the original source code necessary for
correct linking).

Thanks to the output compatibility guarantees, a published library can be used
with any future version of Scala, without the need for cross-publishing or any
other intervention from the maintainers.

This is especially useful when a critical security problem is found in an older
version of the library that was compiled with an older version of the language.
If the maintainers follow the standard practice of only bumping the minor
compiler version in minor library releases, they can fix the bug without needing
to bump the compiler version and then release the fix in a patch release. All
projects that depend on a problematic version of the library can switch to the
newly-released patch, no matter what version of the language they are using.

### Source compatibility

Source compatibility means that a developer can change the version of the
compiler they are using without making any changes in the source code and still
receive a program that will function in the same way. As with output
compatibility, we (slightly counterintuitively) can say that two versions of the
compiler are backward source compatible if the code created for an older version
works with a newer version. The reverse, when the developer is downgrading the
compiler, is called forward compatibility.

In the compiler team, we are paying attention to source compatibility and
ensuring that code compiling today should compile with future versions of the
compiler. We cannot always guarantee that. Like any other compiler and any other
piece of software, the Scala compiler can have bugs. In very rare cases, the
fact that some code is considered correct may be the result of a bug in the
compiler. Fixing this bug may result in code that was previously compiling to
stop doing so in a newer version. Moreover, sometimes improving type inference
for some code snippets may degrade it for another snippet, causing problems like
failures related to implicit search.

There is a multi-layer safety net to catch source incompatibilities early so
they do not make it into the stable versions of the compiler.

The first layer is obviously an extensive
[set of compiler tests](https://github.com/scala/scala3/tree/main/tests) run on
each PR.

The second layer is an integration test that builds over 70 popular Scala
libraries. Failures of compilation or tests in any of those libraries also block
merging of the PR.

The last layer is the **Open Community Build**, introduced around the release of
Scala 3.2. It runs weekly, building the entire Scala 3 open-source ecosystem.
Every failure here is investigated and treated as a high-priority bug. For more
information on how to add your project to the community build consult
[the README](https://github.com/VirtusLab/community-build3)

We also run the Open Community Build for every RC version, as well as some Pull
Requests deemed to require closer scrutiny. We analyze all regressions detected
by the Open Community Build to ascertain their impact on the ecosystem. If
necessary, we may prolong the RC period and delay a release to give ourselves
time to fix a particularly troublesome regression.

## Scala 3 distributions

Scala 3 is currently developed in 2 parallel **distributions** (or **lines**),
code-named **Scala LTS** (for **Long Term Support**) and **Scala Next**.

More information about why we decided on this specific release cadence can be
found in an
[earlier blogpost](/blog/2022/08/17/long-term-compatibility-plans.html), but the
relevant information can be found below.

### Scala 3 LTS

**Scala 3 LTS** is a designated **minor** version that is the **preferred target
version for libraries**. Currently, it is the Scala 3.3.x series.

It is possible to use a library if it was published with the same minor version
(x in 3.x.y) or lower than the one you use. There are 2 main reasons for
preferring LTS for building libraries: extended support and source compatibility
guarantees. Any other minor Scala version receives patches with bug fixes and
small usability improvements only until the release of the next minor version.
For example, Scala 3.1 will forever remain on the 3.1.3 patch, and all later
fixes were available only in Scala 3.2.0 and later versions. The LTS line
receives patches with bug fixes and usability improvements ported from the newer
versions. **Those patches are guaranteed until at least a year after the release
of the next LTS line**. Moreover, **we ensure that there will be no new LTS line
for at least two years after the first release of the current LTS line**. This
means guaranteed patch releases for a period longer than three years after the
initial release.

### Scala Next

**Scala Next** is the default line that the Scala 3 compiler team actively develops. It
is the **preferred target version for all non-library projects**. If the API of
your project is not meant to be consumed by other Scala projects, we advise to
use Scala Next rather than LTS.

Do not be confused; **there is nothing experimental or unstable about Scala
Next**. The difference to LTS is that Scala Next is the target for language
changes (after approval by the SIP Committee), larger new features and
occasional bugfixes that may affect source compatibility. All of our testing and
maintenance practices apply in the same way to Scala Next and LTS.

## Scala 3 schedule, iterations and roadmap

Scala 3 is developed in iterations, according to a roadmap as designed by its
Product Manager and governed by the [Scala Core Team](/scala-core). Each
iteration is tied to a given Scala Next release.

The Scala Compiler Team aims for a set schedule. However, we work on a
best-effort basis, delays and extensions may happen. The Scala Core Team
reserves the right to readjust the schedule as deemed necessary, with the
language users’ best interest in mind.

### Scala Next iterations

The length of an iteration is normally between 6 and 12 weeks. We default to 6
weeks for cycles devoted to a patch version and 8 weeks for a minor version. The
length of a given iteration and its type (minor or patch) is decided by the
Scala Core Team at the end of the previous one. It takes into account the
current team capacity, recent developments and the contents of the roadmap.
Under normal circumstances, there should be at least 2 patch versions between
consecutive minor versions in the Scala Next line. For example, after the
release of Scala 3.5.0, we are unlikely to work on Scala 3.6.0 before 3.5.1 and
3.5.2 are out. The aim is to hold to a schedule which allows for delivering
stable and timely releases, with a fresh batch of enhancements and fixes for the
Scala Next and LTS lines, while holding technical debt at a healthy minimum.

### Scala Next releases

At the end of each Scala Next iteration, an RC (Release Candidate) version is
published for the community to test and the next development iteration starts.
If no regressions are detected in a given RC for **at least a week**, it is
deemed suitable to be re-released as the new stable version.

Otherwise, a new RC is released until either no more regressions are known, or
the iteration for the next version ends. At this point, the most stable RC is
released and remaining problems are listed in the release notes. Of course we
will not release a final version if it has critical known issues.

As a result, we expect to release **a new Scala Next stable version every 6 to
12 weeks**.

### Scala LTS iterations

There are no dedicated iterations for working on Scala LTS. Scala LTS is tied to
Scala Next iterations instead. Any relevant bug fixes introduced in Scala Next
are successively backported to the LTS. Each PR merged that is included in the
current Next version will be analyzed for compatibility and merged if possible
to the current LTS branch.

### Scala LTS releases

We expect to publish a release candidate of a new Scala LTS patch version around
the time Scala Next `3.<current-minor>.2` is out. Then (with possible
intermediary release candidates) that should turn into a stable LTS release
around the time Scala Next `3.<next-minor>.0` is out. For example, we would
release Scala LTS 3.3.6-RC1 together with Scala Next 3.6.2, and then we should
have a stable Scala LTS 3.3.6 by the time Scala Next 3.7.0 is out.

As a result, we expect to release **a new Scala LTS patch every 3 to 6 months**.

## Scala 2 maintenance

This section answers the questions:

* What versions of Scala 2 are maintained?
* How long will maintenance last?

### Scala 2.13 maintenance

Scala 2.13 maintenance is expected to continue indefinitely.

"Indefinitely" means as long into the future as anyone can possibly anticipate, certainly for years to come. The Scala Center has no plan and no desire to retire the Scala 2.13 series.

This means that:

* Security vulnerabilities will be addressed.
* Compatibility with new JVM versions will be ensured.
* Interoperability with Scala 3 will continue and migration to Scala 3 will be supported.
* Pull requests will be reviewed and, when feasible, merged.
* Releases will continue indefinitely, typically every 3 to 6 months. (This cadence may slow down over time.)

Most Scala 2 maintenance is done by the Scala team at [Akka](https://akka.io) (the company formerly known as Lightbend), in coordination with the Scala Center and the Scala 3 team.

These remarks apply to Scala 2 itself, that is, the compiler and standard library. Making effective use of Scala 2 also depends on a healthy tooling and library ecosystem. Much of that ecosystem is outside of our direct control, but we help maintainers as much as we can.

### Scala 2.12 maintenance

Scala 2.12 will remain fundamental to the Scala ecosystem for as long as sbt 1.x (which requires 2.12) remains in wide use.

Therefore, there is no plan to end-of-life Scala 2.12 entirely. Maintenance will continue, so that:

* Security vulnerabilities will be addressed.
* Compatibility with new JVM versions will be ensured.
* Occasional releases will continue as-needed.

But compared to 2.13, maintenance of 2.12 is already minimal and will remain so.

### Scala 2.11 status

Scala 2.11 reached end-of-life in 2016.

It remains available and it is usable in some contexts, but it is no longer maintained.

## Commercial support for Scala

Akka offers [commercial support](https://akka.io) for Scala. The Scala team at Akka are the primary maintainers of Scala 2. They are very active in Scala 3 development as well. The Akka libraries are fully supported on both Scala 2 and Scala 3.

VirtusLab offers [commercial support](https://virtuslab.com/expertise/scala/) for Scala as well. Their team manages Scala 3 releases and development. VirtusLab provides services to modernise Scala projects, including Scala 3 migration.
