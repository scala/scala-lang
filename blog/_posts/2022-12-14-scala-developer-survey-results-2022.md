---
layout: blog-detail
post-type: blog
by: Scala Center team
title: Scala Developer Survey 2022 Results
description: A glance at the results of the 2022 Scala Developer Survey. We'll dive into how we collected the data, briefly look at some takeaways, and share some interesting statistics.
---

The Scala Developer Survey 2022 was launched in October, and in ten days it attracted over 2200 responses. Today we are pleased to share the results with you.

## Context

Scala 3 was released in May 2021, and we captured the community's expectations at the time in the ["Scala Developer’s Preview Survey"][dev-preview-blog]. For the Scala team, the last year and a half was quite dynamic - figuring out the long-term compatibility ([blog][compat-blog]), restarting the Scala Improvement Process ([blog][sip-blog]), and releasing many new versions, most recently Scala 3.2.1 ([blog][release-3.2.1]). All this work has influenced the Scala ecosystem, from tooling to education and more - but in which ways?

This year’s State of Scala Survey is one of the sources that will inform the Scala team, answer that question, and help decide which should be its priorities in 2023.

## At glance: main take-aways

Looking between 2019 and today, it is exciting to see the shift in adoption of each major Scala release. 2.13 has traded places with 2.12 to become the majority Scala version (**80%** as reported in the survey) and 2.12 (**35%**) has swapped with 2.11, such that 2.11 is now a significant minority (**7%**).

It is also great news to see such high adoption (**40%**) of Scala 3. In May 2021, the Scala community anticipated the release of Scala 3.0.0. There were many concerns about if the ecosystem could catch up, and if migration would be difficult. We hope that confidence to adopt was boosted thanks to our collaboration with library maintainers; support in tools such as [Scala 2.13-3.x forward compatibility][forward-compat-mode]; and migration assistants such as the [migration guide](https://docs.scala-lang.org/scala3/guides/migration/compatibility-intro.html) and the [scala3-migrate](https://index.scala-lang.org/scalacenter/scala3-migrate) tool.

Most recently, we have even seen established community-lead projects, such as Lichess, adopt Scala 3. Which after a minor setback, is now smoothly running Scala 3 in production (see their [blog post](https://lichess.org/@/thibault/blog/lichess--scala-3/y1sbYzJX)).

What else? The survey has given us a great overview of the libraries used in the ecosystem, and respondents' confidence in them (read the [**VirtusLab blog post**](https://virtuslab.com/blog/scala-survey-2022) for an analysis of this). Further, we invite you to try [Scaladex](https://index.scala-lang.org/awesome) to discover all the awesome Scala libraries that are available.

We are also excited to see that **20.6%** of respondents are looking forward to further development in Scala Native, which we are actively developing - that will also address concerns such as memory usage (**25%** reported) and cloud services support (**9%** reported).

In the next two sections we will share more:

1. About the survey
  - contains all information about creating the survey and collecting data.
2. Presenting the data
  - highlighting five questions in this blog post, while the rest can be downloaded as a PDF file.

We encourage you to read on to learn how the survey was constructed and see the results, this way you can draw your own conclusions.

<a class="button" href="/resources/img/blog/survey-2022-results/scala_survey_2022_results.pdf" download><i class="fa fa-download"></i> Download the results PDF</a>

## Survey details and results

Thank you each and everyone who participated, we value your time and input! Read further to see the results and learn more about the state of Scala in 2022.

### About the Survey

The survey was open between October 10th and October 21st 2022, and we received a total of 2236 responses. The format of the survey was as follows:

- 35 closed questions, non-mandatory
- 3 question formats:
  - Multiple choice to a prompt (often with >1 choice allowed)
  - Rating:
    - How often you use a Scala language feature or paradigm (0-5)
    - Familiarity and likelihood to try or reuse a tool/library

This format was inspired by surveys in other language ecosystems, most notably the popular "State of JavaScript" survey. We chose this format for several reasons:

- Short: we wanted the participants to be able to answer as quickly as possible to each question, to get as many answers as possible.
- Closed questions to allow our teams to quantify the answers.
- Non-mandatory: If a question is not relevant, allow the respondent to skip, rather than receive low-quality responses.
- Reusable year-over-year: in order to study the evolution of our ecosystem over the years, we used questions that are repeatable.

There are of course threats to the validity of our approach:
- Only closed questions: since we did not propose any "Other" free-form edits, it is possible that we missed some high quality libraries or tools.
- The binary choice between "would use again" and "would not use again" cannot express nuances, such as "will use again because I have no choice, but would rather not".
- Sample: we used as many distribution methods as we had at our disposal, but there is always a possibility that certain groups of users were under-represented.

### Presenting the Data

In the following section, we present a selection of 5 from 35 questions that we found particularly interesting, with analysis. The rest of the result data can be found in the **results PDF (see above)**. We have not processed any of the results before aggregation.

The majority of respondents self-reported as being Scala developers (**88.5%**). Out of all participants of the survey, **40.8%** work primarily in projects with 10k to 100k lines of code and **22.9%** work in companies with 101 to 1000 employees. The top 5 countries of respondents (representing **50.1%** of the total) were the United States (**19.1%**), the United Kingdom (**8.9%**), Poland (**8.1%**), Germany (**7.7%**) and France (**6.8%**).

#### Scala Versions in use

![](/resources/img/blog/survey-2022-results/major-versions-results.svg)

We asked participants the question “*What major versions of Scala are you using?*”, the results of which are in the above chart. It was answered by all 2236 participants. Please note that participants could give more than one answer.

We can see from the given responses that **79.9%** used “Scala 2.13”, this is an increase from [**56%** in the 2019 survey](https://scalacenter.github.io/scala-developer-survey-2019/). **40.1%** used “Scala 3.x”, an increase from [**6%** in the 2019 survey](https://scalacenter.github.io/scala-developer-survey-2019/). **34.8%** were using “Scala 2.12”, this is a decrease from [**78%** in the 2019 survey](https://scalacenter.github.io/scala-developer-survey-2019/). **6.8%** were using “Scala 2.11”, this is a decrease from [**33%** in the 2019 survey](https://scalacenter.github.io/scala-developer-survey-2019/). **1.1%** were using “Scala 2.10”, this is a decrease from [**5%** in the 2019 survey](https://scalacenter.github.io/scala-developer-survey-2019/). The “other” option received **0.18%** of responses, these were answered by participants who report not using Scala at all.

In appears that since 2019, the majority of respondents have switched from 2.12 to 2.13, and that Scala 2.11 usage has significantly decreased. However historically usage of old Scala versions has been hard to quantify due to the reach of of the survey and the places where these old Scala versions are often used.

The drop in Scala 2.11 usage matches our expectations, as many community projects are publicly discussing whether support should be dropped, such as Scala.js and Scala Native.

We can see that a large number of respondents (**40%**) report using Scala 3.x. From this survey it is unclear if this is “in production” usage, or just personal testing, the question should be more precise next time. We can however identify confidence from the community in migrating to Scala 3 in production, e.g. [the recent Lichess migration](https://lichess.org/@/thibault/blog/lichess--scala-3/y1sbYzJX).

#### Scala Platforms in use

![](/resources/img/blog/survey-2022-results/platforms-results.svg)

We asked respondents the question “*What platforms do you target?*” seen in the above chart.
Again, respondents could pick more than one option. This was answered by 2234 out of 2236 participants.

We see that **99.7%** use “Scala on JVM”; **17.6%** use “Scala.js”, an increase from [**13%** in the 2019 survey](https://scalacenter.github.io/scala-developer-survey-2019/); and **6.9%** use “Scala Native”, an increase from [**5.6%** in the 2019 survey](https://scalacenter.github.io/scala-developer-survey-2019/). The “other” option received **0.6%** of responses, some of the responders listed as follows, in no particular order:

GraalVM Native Image, Cardano Plutus, Android.

In general it appears that JVM usage remains stable, but that more participants are trying Scala.js and Scala Native. Again it is hard to know the common use cases associated with each platform, which could be useful to ask next time.

#### Aspects of Scala development to improve

![](/resources/img/blog/survey-2022-results/which-aspects-to-improve-results.svg)

We asked participants “*Let's say that you are given the power to choose which parts of the Scala ecosystem are being improved. Please select up to 3 of the following aspects of working with Scala, you would like to see improved*”.
The results of which are presented above. 2189 out of 2236 (**98%**) participants answered, and were allowed to select 3 options.

The top 5 options selected were “compile/build speed” with **57.1%** of responses; “tooling” with **50.9%** of responses; “memory usage” with **25.0%** of responses; “dependency management” with **21.2%** of responses; and “Scala Native” with **20.7%** of responses.

We see respondents are also concerned about “CPU usage”, “educational materials”, “binary compatibility”, and having “more out of the box utilities (batteries included)”.

Less concern is given to issues such as “Scala.js”. This is likely due to the relatively low adoption of the Scala.js platform. However, the  “Scala Native” option is significantly greater, despite having the lowest adoption as a platform. Perhaps this indicates that many Scala JVM users anticipate switching to Scala Native when the platform matures.

Also of less concern were “Java interop”, “security” and “linters”: this could indicate that these are successful aspects, supported by high usage of Scala on JVM and in Web services. This could however also mean that build times, memory usage, etc. are that much more of a priority.


#### Domains that Scala is used in

![](/resources/img/blog/survey-2022-results/types-programs-results.svg)

We asked respondents “*What types of programs do you use Scala most often for*”, answered by 2208 out of 2236 (**99%**) of respondents. More than one option could be selected.

The top 6 options selected were “web/API/RPC services” with **88.0%** of responses; “data processing” with **59.2%** of responses, “libraries/frameworks” with **50.1%** of responses; “CLI programs” with **18.8%** of responses; “Automation/Scripting” with **18.2%** of responses; and “web frontend” with **13.4%** of responses.

Under the field “other”, receiving **1.9%** of responses, some of the responders listed as follows, in no particular order:  Blockchain, backend, compiler, mathematical optimisation.

#### Learning resources for Scala

![](/resources/img/blog/survey-2022-results/resources-learn-scala-results.svg)

We asked respondents “*Which types of resources did you use to learn Scala?*”, answered by 2206 out of 2236 (**99%**) of participants. Again this question allowed multiple options to be selected.

We see that **78.1%** of respondents chose “books”; **77.5%** chose the [official documentation](https://docs.scala-lang.org); **77.21%** chose “online courses”; **8.43%** chose “university courses”; **3.72%** chose “bootcamps”.

**16.7%** of respondents chose “other” which is significantly more compared to the rest of the  questions in the survey with the same field. Here’s what came up, in no particular order:
Work experience, hackathons, local user groups, youtube tutorials, internal company training, blogs, Stackoverflow, and more.

Going forward it would be useful to reinclude some of the “other” options in the main questions, and further determine which books/docs/courses were useful.


[dev-preview-blog]: /2021/03/08/scala-3-developers-preview-survey-results.html
[compat-blog]: /blog/2022/08/17/long-term-compatibility-plans.html
[sip-blog]: /blog/2022/07/13/scala-improvement-process-reloaded.html
[release-3.2.1]: /blog/2022/11/07/scala-3.2.1-released.html
[forward-compat-mode]: https://docs.scala-lang.org/scala3/guides/migration/compatibility-classpath.html#the-scala-213-tasty-reader
