---
category: announcement
permalink: /news/post-mortem-3.6.0.html
title: "Postmortem of Scala 3.6.0"
by: Scala Core Team
---

Incident Date: _October 18th, 2024_  
Nature of the incident: _Accidental release of 3.6.0-RC1 under 3.6.0 on Maven
Central_

On Friday, 18th of October 2024, during the publication process of **3.6.0-RC1**
an incident occurred that ended up in publishing Scala **3.6.0** instead. After
an internal investigation, we pinpointed the incident to be technical in nature.

Within one hour of the issue being reported, the
[Scala Core Team](https://scala-lang.org/scala-core/) mitigated the problem by
starting the Scala **3.6.1** release – which is to be treated like an RC; it has
been available since Saturday 19th October. Scala **3.6.0** was abandoned and
promptly announced to the public as broken.

We apologize to the Scala users for any inconvenience it might have caused. We
are working on better understanding what led up to this accident and ensuring it
doesn’t happen again.

We invite you to follow the recommendations below and find out more details
about our findings of what happened and what is done to prevent future accidents
of this kind.

## Recommendations

Use version 3.5.2, the current stable Next version, recommended for general
use.  
Use version 3.6.1 as an RC version, to be used only for testing.  
DO NOT USE 3.6.0, not for testing, not for anything, it’s considered broken.

We are working on 3.6.2 as the new stable release, which will be available
sometime in the second half of November.

## How does it affect users?

Scala 3.6.0 is a broken release \- it should never be used by users of Scala.
The results of the compilation might not be consumable by stable versions of the
compiler or TASTy based tooling.  
Tooling that automatically uses the latest available version of Scala will use
the hot-fix release 3.6.1, which should be treated as a Release Candidate
version. We don’t encourage most users to upgrade yet, unless for testing
purposes. Instead, use the stable 3.5.2 and wait to upgrade until 3.6.2 is out.

## What happened?

During the publication of Scala **3.6.0-RC1** to the Sonatype Maven repository,
a mistake occurred and we released **a misconfigured 3.6.0** instead. As a
result, the released version of the compiler produces TASTy files in the
experimental version that cannot be consumed by stable TASTy consumers (e.g. the
Scala compiler, tasty-query, Scaladoc). Setting the TASTy version to an
experimental one is a standard procedure when releasing a new release candidate
of a minor version of Scala 3.

## What immediate steps were taken?

On the evening of Friday the 18th of October 2024 the internal compiler team was
informed of the erroneous release and the following immediate steps were taken:

- We announced on social media that Scala 3.6.0 was released unintentionally and
  is discouraged from being used.
- We prevented `scala-steward` from automatically upgrading repositories using
  Scala Next to the 3.6.x line.
- We followed up with a hotfix release in the form of Scala 3.6.1 on the
  following day.

## Why did we need 3.6.1?

Some tools in the Scala ecosystem can refer to the latest stable Scala version
that’s been published on Maven Central. Those include:

- Scala CLI / the `scala` runner (via `-S 3` from the command line or with the
  `//> using scala 3` using directive)
- coursier (with `cs setup` and `cs install scala` sub-commands)
- potentially other tooling integrating with `coursier`

We were concerned Scala users might use this unknowingly broken version of the
compiler to produce artifacts with the experimental version of TASTy. In
particular, we wanted to prevent publishing Scala libraries from being published
to the (immutable) Maven repository using a broken Scala release. It could also
potentially affect applications using Scala 3.6.0 that would try to use
libraries produced by Scala 3.6.1 or later.

We decided to publish Scala 3.6.1 as a follow-up ASAP so that the most recent
version doesn’t include the experimental TASTy flag nor RC settings. With 3.6.1
we ensured tooling will, at the very least, refer to a Scala version that
actually could be considered reasonably stable.

We don’t yet encourage users to upgrade to Scala 3.6.1 on their own, except for
testing purposes. Users should wait with upgrades until a future announcement.
For now we advise users to stay on Scala 3.5.2 until further notice.

## Why did it happen?

The accidental release under the incorrect version happened due to a combination
of multiple factors:

- Scala 3 uses an `sbt` plugin to automatically release artifacts to Sonatype
  Maven repositories. The automation happens without manual confirmation of the
  release. This factor prevented us from auditing published artifacts and
  removing the artifacts from the staging repository. Removing artifacts from
  Maven Central after they’ve been published is also essentially impossible.
- We introduced changes to the algorithm for calculating versions of the
  compiler to mitigate problems with creating `.msi` installer files. As the
  change did not alter SNAPSHOT/NIGHTLY behavior, we did not detect the issue in
  time. We now realize similar changes require extra testing procedures, which
  will be implemented as an improvement. The change was added in
  [scala3\#21011](https://github.com/scala/scala3/pull/21011).
- The change introducing the issue was merged on the 11th of July. Now, three
  months later, at the time of the release the side effects were not properly
  considered as in the meantime there was a change in staff coupled with
  insufficient documentation.
- We experienced unrelated downtime on the side of our infrastructure, which
  delayed the (as it was meant to be) release of 3.6.0-RC1 from Wednesday 16th
  to Friday 18th of October. Given that it was an RC, we continued the queued
  job on Friday. We now realize we should have postponed it further until Monday
  21st. Resolving the incident would have been a lot easier for the Core and
  Compiler teams on a weekday rather than on a Friday night.

## How do we stop it from repeating?

In conclusion, after all that we learned from this incident, we are introducing
the following processes as preventative measures:

- Extra checks to the release procedure to ensure the correct versioning of
  published Scala artifacts.
- Any changes related to either release scripts or compiler versioning will be
  tested using a custom Maven repository before the start of a public release.
- Additional, manual approval of published artifacts to the staging Maven
  repository.
- We will be mindful of the day of week for releases, and avoid Thursdays and
  Fridays.
- We will ensure that every change associated with the release process is well
  documented internally.
