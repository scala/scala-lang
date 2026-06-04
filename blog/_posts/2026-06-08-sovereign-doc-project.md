---
layout: blog-detail
post-type: blog
by: Seth Tisue, Scala Core Team
title: Improving Scala's docs and website
description: Our plans for improving Scala's documentation and website, based on community feedback.
---

> This post covers work done under the [Sovereign Tech Fund investment](https://www.scala-lang.org/blog/2026/01/27/sta-invests-in-scala.html). The work is coordinated by the [Scala Center](https://scala.epfl.ch/).

We have collected possible documentation tasks from three sources:

* Tasks in the **original proposal** we made to the Sovereign Tech Agency
* Tasks collected in **internal discussions** since then
* Tasks from **community suggestions** on [this Contributors forum thread](https://contributors.scala-lang.org/t/scala-documentation-web-sites-what-should-be-improved/7354)

This blog post **summarizes** what we have collected, **identifies tasks** that we have chosen to tackle, and **describes work** that is already underway.

## Project goals

We aim to identify documentation, both API documentation (Scaladoc) and the docs on the Scala website, that is:

* Outdated, or
* Incomplete or poor quality, or
* Missing entirely

And we want to address those shortcomings, to aid both:

* New users coming to Scala
* Existing users of Scala

## Project scope

A major focus will be on the **Scaladoc for the standard library**. We will update and expand it. Along the way, if we find that limitations of the Scala 3 Scaladoc tool are causing quality issues in the doc, improving the tool is in scope.

The project scope also includes the **documentation on our website** such as the Scala language specification, getting-started docs, language tour, features guides, Scala Toolkit documentation, and so forth.

**Scala 3 is the primary focus**, but we can also make especially important improvements on the Scala 2 side.

## What’s not in scope?

**Third-party** tools, libraries, and publications are not in scope.

That said, it is sometimes appropriate for our website and docs to **describe and link to** third-party documentation and resources. Examples of such documentation that is in scope for improvement include: the Scala [community page](https://www.scala-lang.org/community/), the Scala [IDEs page](https://docs.scala-lang.org/getting-started/scala-ides.html), the Scala [Toolkit documentation](https://docs.scala-lang.org/toolkit/introduction.html) (because the Toolkit includes third-party libraries), and the Scala [books page](https://docs.scala-lang.org/books.html).

## What did we initially propose?

In the Center’s original proposal we identified the following areas or “work packages”.

Any work we do must fit in at least one of these areas, and we must do some work in all of the areas. Note that the “Website” area is especially broad and can cover a wide variety of documentation tasks.

**Work Package F: Documentation**

* F.1: Scaladoc: Core classes including collections
* F.2: Scaladoc: Other classes
* F.3: Scaladoc: Scala 3-specific classes
* F.4: Website
* F.5: Scaladoc: Individual methods

F.1/F.2/F.3 are for class-level documentation, F.5 for the methods within those classes.

## What work is ongoing?

Work on **improving our API documentation** (Scaladoc) is already well underway. A series of PRs has already been merged. These PRs were created with the help of AI-based tooling developed by Bill Venners and Chua Chee Seng. The process of doing this work with AI assistance will be documented in a future blog post by Bill.

Thanks to work done by the Scala 3 compiler team, the infrastructure is now in place for **compiler checking of code samples** in the standard library Scaladoc and Scala 3 language. Many of the already-merged PRs take advantage of this new checking capability.

The goals of the API doc work are:

* Ensure all code samples in the documentation are checked by the compiler.
* Ensure every class has at least basic class-level documentation.
* Ensure every method has at least basic documentation.
* Further improve and expand any especially important or especially low-quality documentation.
* Strive for all documentation to include applied, practical examples.
* Make sure method-level documentation meets minimum standards such as including `@param`, `@return`, and `@throws` annotations.

## What else is planned?

We have chosen tasks that seem highest priority while also being feasible this year with the funding we have and suitable for the people we have available. After considering the community’s input, we’ve chosen the following work items for this year in **roughly descending order of importance**:

**Essential**

* Improve **issue reporting** for documentation problems.
* Reduce **backlog of unhandled** PRs and issues on website repos.
* Document what **language features** debuted or progressed in what Scala versions.
* Document all **compiler options**.

**Also important**

* Write a new guide on **Scala/Java interoperability**.
* Write a new guide on **the REPL and its features**.
* Revise language reference to **center Scala 3** rather than centering 2-to-3 migration.
* Update **language tour** for Scala 3.
* Ensure **language reference** isn’t missing any features.
* **Be consistent** about where features are documented.
* Update **language specification**.

**If possible**

* **Add links** from beginner pages to in-depth docs.
* **Add links** from reference docs to language spec.
* Adopt Martin's **"common Scala style"** proposal in examples.
* Improve **appearance and functionality of Scaladoc** pages.
* Improve Scala 3 **syntax highlighting** on websites.

Of course we can’t promise this will all get done, but we intend to at least make progress on the above.

The brief descriptions are not completely self-explanatory. There is more information about all of these items in the following detailed forum post:

* [https://contributors.scala-lang.org/t/scala-documentation-web-sites-what-should-be-improved/7354/35](https://contributors.scala-lang.org/t/scala-documentation-web-sites-what-should-be-improved/7354/35)

And here is an additional forum post in which we responded to the rest of the suggestions received and explain why they were not selected in this round:

* [https://contributors.scala-lang.org/t/scala-documentation-web-sites-what-should-be-improved/7354/34](https://contributors.scala-lang.org/t/scala-documentation-web-sites-what-should-be-improved/7354/34)

This second group of ideas remains open for volunteers to tackle. It’s also possible we might be able to address them in some future round of funding.

## Participation

Scala Center team members on the documentation project are: Seth Tisue (team lead), Bill Venners, Chua Chee Seng, Guillaume Martres. Others may get involved later.

We welcome community participation as well.

The Scala Center has been entrusted with coordinating the commissioned Scala work for the Sovereign Tech Fund. The Scala Center is an independent, not-for-profit center sponsored by [corporate members and individual backers like you](/blog/2023/09/11/scala-center-fundraising.html) to promote and facilitate Scala. If you would like to participate and/or see more of these types of efforts, please reach out to your manager to see if your company can donate engineering time or membership to the Scala Center.

See [The Scala Center Fundraising Campaign](/blog/2023/09/11/scala-center-fundraising.html) for more details.
