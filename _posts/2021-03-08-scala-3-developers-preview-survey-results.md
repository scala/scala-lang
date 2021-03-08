---
layout: blog-detail
post-type: blog
by: Scala Center
title: Scala 3 Developer’s Preview Survey Results
---

In December, we published a survey sharing the status of the Scala 3 release and asking 
the Scala community to give us their opinions, concerns and advice. 
Today, we are pleased to share what we learned with you.

## Context

After 8 years of development, the Dotty project is well on its way to become the new Scala compiler,
known in the community as Scala 3.

Since announcing this news (ScalaDays Berlin 2018), it has taken a good 2+ years to finalize the changes,
sync the community’s efforts, publish migration paths, and create a new ecosystem of tools and libraries.
We are very near to being able to take the final step - releasing Scala 3.0.
We are still not there yet but are closer than ever.

Scala 3 release teams were ready to move forward but still needed
a final feedback loop from the community to do so. We published a blog on December 15th 2020,
sharing the status of the Scala 3 release, and to ask the Scala community 
to give us their opinions, concerns and advice.

Today, we are pleased to share what we learned with you.
First, we want to thank everyone who participated and selflessly poured
in such a rich amount of insights and knowledge our way! Based on this survey,
we will take actions and lead conversations. So, keep following and sharing,
the quality of Scala development depends on your feedback.

Below, we will present our findings in 3 sections:
1. _**About the survey**_ - contains all information about 
   creating the survey and collecting data, and methodology for our analysis.
2. _**Presenting the data**_ - summarizes the data we received, mostly quantifiable
3. _**Conclusions**_ - this is the part that shows 
   how we read the data and what steps we will take based on our reading.


Conclusions are open to interpretation, which is why we offer full
access to our methodology and data, so feel free to make your own and share it with us.

## 1 - About the Survey
The survey had a simple design:
- A total of 4 questions and a free field at the end
- Each question contained a “closed” and an “open” part
  Please check what it looks like [here](https://docs.google.com/forms/d/e/1FAIpQLSflVmTu9lhrtnSTh2tKAjUGrt3WvEgwlDqZg66O3EVSXd1aJg/viewform).

The survey questions focused on Scala 3 features, tooling, migration, and communication.
We chose this format for several reasons:
- Simple and short - we wanted the participants to have a “quick but detailed” experience, 
  in order to get as many answers as possible, and be as detailed as possible
- Allow our teams to quantify and qualify the answers
- Allow our teams to identify areas of improvement
- Can point to important conversations our teams should open/pay attention to
- Within the framework we provided, we can easily cross-reference/compare 
  results with other platforms where community shares their views

Our aim was to maximise our reach towards potential participants 
within the Scala community. To achieve this, the main channels of distribution were: 
the above-mentioned blog article, Twitter (scala_lang), the Contributors forum, various Slack channels, and mailing lists.

Here’s the graph exporting the timestamp of the answer activity so far:
![Answers' activity](/resources/img/blog/scala-3-developers-preview-survey-results/answers-activity.svg)

We have received, to this date (11th February 2021), 578 answers, 
including a total of 413 comments across 5 comment sections: 4 distinct categories and 1 free.

We identify several threats to validity:
- **Format of questions:** measuring excitement may not be representative in those cases 
  where a person is not familiar with a certain feature, tool, and such;
- **During the collecting period (timespan):** there were a couple of discussions about additional 
  changes introduced, which could influence the “mood”, especially in answers from the second half of January;
- **Sample:** distribution methods were as wide as we had at our disposal, 
  but there’s always a possibility that a certain “group” of users are not represented.

With all that said, our approach to analyse the results is as follows:
- Presenting the quantifiable data
- Categorizing comments to provide further insight into the topics discussed; 
  the purpose of the comment, such as: ‘advice’, ‘concern’, ‘request’; 
  overall tone: either positive or negative; to prioritise what needs addressing/fixing 
  before RC1 or at later time, e.g. ‘critical’ or ‘good to have’.
- Cross-referencing comments with other sources on the same topic.
- Finally, creating a list of important topics that need to be addressed.

## 2 - Presenting data
### Features
![Feature result survey](/resources/img/blog/scala-3-developers-preview-survey-results/features-survey.svg)
We asked participants the question “How excited are you about the upcoming Scala 3 language Features”, 
the results of which are displayed in the above chart. 
It is sorted in descending order based on the counts for the Excited response.

We can see from the given responses that the features with the most excitement include Enums (**85.8% Excited**), 
Union/Intersection Types (**83.9% Excited**), Extension Methods (**79.4% Excited**), 
and Type Class Derivation (**74.0% Excited**).

The features with the most responses were Enums (12 unanswered) and Optional Braces (12 unanswered); 
from this we can infer that respondents were most familiar with these changes.
![Optional braces](/resources/img/blog/scala-3-developers-preview-survey-results/optional-braces.svg)

The most controversial feature found in the responses was Optional Braces, 
with 28.2% Neutral responses being the smallest proportion of answered responses.

#### Potential issues with the poll
In hindsight, we should have requested feedback directly about generic tuples in Scala 3. 
Otherwise, their excitement can not be judged separately from the utility they bring 
to features such as Typeclass Derivation, Match Types, and Inline.

#### Comments From Participants
Overall we got 75 comments (from 578 total participants) about language features in Scala 3, 
mostly they did discuss features of Scala 3, but some expressed meta comments about how the poll 
was conducted, and the approach taken by the participant to answer the question.

We analysed the comments to derive their topic, tone, intention, and extract usable points to improve upon, 
the results are presented in the following chart:
![Comments](/resources/img/blog/scala-3-developers-preview-survey-results/comments-features.svg)
Above, we see derived information from comments provided about language features in Scala 3, 
subdivided by topic (i.e. the features discussed),
and intent (derived from subjective interpretation of reading the comment).
The chart is sorted by the total number of comments for each topic.

Some special topic categories are listed as follows:
* **mixed** comments discuss multiple topics specifically, this influences 
  the chart by reducing the skew of the specific topics mentioned in the comment.
* **general** comments refer to no feature in particular, but to Scala 3 as a whole.
* **foundations comments** address the design of the compiler and new theoretical underpinnings.
* **n/a** comments are unrelated to the discussion of features, 
  typically to express feedback about the poll question itself, or comment on the respondents internal thought process.

Additionally, the labels for “intent” are described as follows:
- **praise:** comment shows overwhelming support.
- **concern:** comment expresses concern with a feature, without suggesting how to improve the situation.
- **troll:** comment shows unnecessary hostility and does not offer any advice.
- **n/a:** comment is unrelated to the discussion of features, such as to give feedback on the question format
- **request:** comment expresses a concern that also suggests a change to address that concern
- **mixed:** comment shows praise for some features and concern for others.

We can also see comments split only by intent in the following chart:
![Comments Intent](/resources/img/blog/scala-3-developers-preview-survey-results/comments-features-intent.svg)
The majority (58%) of comments were in the concern, troll and request categories, 
which can be seen as overall concern, countered by 28% of comments showing praise. 
However it must be considered that only a small sample (13%) of total participants made comments in the features section.

### Tooling
![Tooling result survey](/resources/img/blog/scala-3-developers-preview-survey-results/tooling-survey.svg)
We asked participants the question “How important is it for you that the following tooling supports Scala 3?”, 
the results of which are displayed in the above chart. 
It is sorted in descending order based on the total counts for the Very Important and Important responses.

From the responses, participants have ranked the highest priority 
tooling to support Scala 3 as: sbt (**89% overall important**), 
IntelliJ (**84% overall important**), Scalafmt (**68% overall important**) 
and VS Code (**55% overall important**). Both sbt and IntelliJ also had 
the most responses from participants (**1.6% and 1.7% Unanswered**).

#### Comments From Participants
Overall, we received 31 comments (from 578 total participants) in the tooling section:
- 23 comments requested better support for some specific tools considered as critical 
  for the day to day usage of Scala. The IDE support comes first with 9 comments,
  then build tools with 5, finally the last 9 comments are about different topics: 
  missing tools in the survey, Scala.js and Scala Native, and formatting and linting tools in general.
- 6 comments express a personal opinion about this importance of tooling for Scala 3 success.
- 2 comments report that they would have appreciated an additional choice: “I don’t know”. 

### Migration
![Migration result survey](/resources/img/blog/scala-3-developers-preview-survey-results/migration-survey.svg)
We asked participants the question “How concerned are you about the following aspects of migrating to Scala 3?”, 
the results of which are displayed in the above chart. It is sorted in descending order based on the total counts 
for the **Very Concerned** and **Concerned responses**.

From the responses, participants have ranked their highest concerns in migrating 
to Scala 3 as: lack of library support (**73% total concern**), runtime performance (**52% total concern**), 
compiler performance (**43% total concern**) and compatibility between Scala 2.13 and 3 (**38% total concern**).

The aspects with the most responses were: concern for lack of library support (**2.9% Unanswered**), 
and concern for breaking changes (**3.6% Unanswered**).

#### Comments From Participants
Overall, we received a total of 63 comments (from 578 total participants) in the migration section:
- 28 comments express a concern, either broad or precise, mild or serious
- 40 comments contain one or more requests
- 6 comments were positive feedback
- 2 comments were negative feedback

The lack of Scala 3 support in libraries is by far the biggest concern of the community. 
Some specific frameworks or libraries are mentioned in the comments:
- Spark appears in 7 comments, 2 of them expressing the concern that it is late behind Scala 3.
- The Akka framework is mentioned 5 times.
- The Play framework is mentioned 2 times.

About 52% of the participants are concerned by the runtime performance of Scala 3. 
No specific regression is reported in the comments but 3 participants are insisting 
on the importance of runtime performance and stability.

About 43% of the participants are concerned by the performance of the Scala 3 compiler. 
Three participants have expressed their wish for compile time improvements.

The new macro features is a concern for only 32% of the participants. 
3 of them have requested a more extensive documentation, in particular of the reflect API, and more examples.

About 70% of the participants are neutral or not concerned about the 
removed macro annotations. 3 participants have said that the lack of macro
annotations is blocking the migration of their code, or part of their code. 
3 participants are wishing for a replacement of the newtype library which is based on macro annotations.

About 75% of the participants are neutral or not concerned about the lack 
of support of Scala 2 compiler plugins. However we received 7 requests for 
the support of better-monadic-for in Scala 3, many suggesting that it should 
become native in the compiler. At least 3 participants are very concerned about it.

About 80% of the participants are neutral or not concerned about the missing 
compiler options. However we received 7 requests for the `-Xlint` options, 
3 requests for the `-Yimports` option and 2 requests for the `-V` and the `-W` options.


### Communication
![Communication result survey](/resources/img/blog/scala-3-developers-preview-survey-results/communication-survey.svg)
We asked participants the question “How frequently do you use the following c
ommunication channels to stay up-to-date on the latest changes in Scala?”, 
the results of which are displayed in the above chart. It is sorted in descending 
order based on the total counts for the Very Often and Often responses.

From the responses, participants have ranked the most popular sources for the 
latest changes Scala as: scala-lang.org blog (**51% overall often**), Twitter (**42% overall often**), 
GitHub releases (**33% overall often**) and Reddit (**27% overall often**).

The scala-lang.org blog appears to be most familiar with participants, 
with the most overall responses (**2.9% Unanswered**).

#### Comments From Participants
Overall, we received 87 comments (from 578 participants) in the communication section:
- 60 comments identified the ScalaTimes newsletter as one of their sources for 
  information about Scala, this was the most common comment.
- 13 comments were sharing their habits.
- 4 comments shared their dislike of certain channels.
- Other comments identified sources of information, including: O'Reilly learning 
  books, Telegram communities, ZIO newsletter, Medium blogs, and SIP.
- 2 comments showed no significant contribution.


### Free Comment
The final section of the survey asked for any comments from the participant, 
without constraining the subject (other than relating to Scala 3).

Overall we received 157 comments (out of 578 responses). Out of these comments:
- 81 comments praised the efforts so far of everyone involved in Scala 3.
- 70 comments made suggestions for improvements.

From these comments making suggestions, there were requests for language feature changes, 
documentation improvements, fulfilling missing library support and tooling improvements, 
a selection of the kinds of requests can be summarised here:
- 2 requested more support for Scala Native.
- 4 wanted improvements to IntelliJ support for Scala 3.
- 1 suggested moving community discussions to Slack.
- 2 requested Maven support for Scala 3.
- 3 requested support for program specialisation in Scala 3.
- Suggestions for library support included numerics; big data; job queues; 
  microservices on Scala Native; and more simple libraries for beginners.

## 3 - Conclusions and next steps
### Features
When looking at excitement for features in Scala 3, we can identify:
- Over three quarters of responses are excited for enums, union and intersection types, and extension methods.
- Over two thirds of responses are excited for opaque type aliases and type class derivation.
- Over half of responses are excited for explicit nulls, given/using, match types, top level definitions, 
  polymorphic function types, and multiversal equality.

It is also clear that the optional braces feature is seen as more controversial, 
  standing as an outlier: it was the only feature that had more “not-excited” responses than “neutral”. 
  This was also reflected in the comment section, where the majority of comments criticised the feature.
In the rest of the comments, many showed how excited the respondent was for 
  all the changes in Scala 3, and the rest were concerned with bugs 
  or outlined the internal thought process of the respondent. 

### Tooling
We can identify several categories that are important for Scala 3:
- Build tools: sbt remains the most used build tool and the most critical for Scala 3 adoption. 
  Nevertheless, all build tools are important and need to support Scala 3. The comments also 
  emphasize this with 5 comments reporting the criticality of Maven, Gradle or Bazel support.  
- IDE support: IntelliJ comes second in the survey. Comments emphasize the need of a great 
  IDE experience for the adoption of Scala 3, and especially IntelliJ.
- Formatting and linting tools: Scalafmt and Scalafix are the most used and most 
  reported as very important in this survey. The comments bring attention 
  also to other tools like Scapegoat or Scalariform.
Other: Scala.js, Scala Native and Ammonite.

### Migration
The survey shows that the individual members of the community are 
more concerned about the availability of their library dependencies 
than they are concerned about the migration of their own code base. 
Indeed it will require some time and effort from the community to progressively move the existing ecosystem to Scala 3.

While in most cases the migration will not be harder than it 
was between 2.11, 2.12 and 2.13, special care should be taken for 
translating the macro libraries and for replacing the available macro annotations. 
The success of this undertaking will depend on the quality of the available documentation and resources for learning.

The survey points out that better-monadic-for is an important piece 
of software that is currently missing in Scala 3. Some compiler options, 
such as `-Xlint`, `-Yimports`, `-V` and `-W` options are not crucial but they are nonetheless very useful.

Last but not least, the survey reminds us of the importance of compile 
time and runtime performance. They are essential to the success of Scala 3.

### Communication
Things that stood out clearly:
- scala_lang.org is the most used source of information
- Even though 75% of responders responded that they don’t use newsletters/emails as their source, 60 people
  commented that they do appreciate one specific newsletter: ScalaTimes
- Twitter showed up to be the most used source (also judging by comments) 
  to stay updated on new developments in Scala.
- The survey respondents expressed wide opinions about their platform preferences 
  as well as their “habitats”, ranging from, for example: “... No time for more newsletters, 
  my email inbox is flooded already” vs “... I think it's important to notice that 
  there are still people out there not using social media to stay up to date about tech stuff.”

Based on the overall survey, we identified topics that should be more prominent and better followed up on, see other sections.

General conclusion we draw from this survey:
- Frequent summarizing updates are highly appreciated (like ScalaTimes); due to a variety of channels and platforms.
- People default to Twitter as a first point of discovering new developments in Scala.
- certain topics need to be better represented;
- There are many opportunities for improvement going forward.

The survey exposed many interesting trends, and the Scala Center team will use 
these results as a base when discussing & creating our general strategy going forward. 
We will also wish to keep the conversations going, so please don’t stop sharing.

Thanks to everyone who participated!
