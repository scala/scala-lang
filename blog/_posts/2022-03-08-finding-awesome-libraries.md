---
layout: blog-detail
post-type: blog
by: Adrien Piquerez, Scala Center
title: Finding awesome Scala libraries
---

The Scala ecosystem is vast. It contains many tools, libraries and frameworks built over many years by numerous organizations, companies and individuals.
Their availability empowers Scala programmers to build fast, safe and scalable applications.

The Scala Center aims to help Scala programmers find the tools and libraries that are right for you. In this blog post we introduce the new "Awesome Scala" page, powered by Scaladex.
Check it out here: [https://index.scala-lang.org/awesome](https://index.scala-lang.org/awesome).

![Awesome Scala](/resources/img/blog/scaladex/awesome-scala.png)

Our aim is to give newcomers a good understanding of the state of the Scala ecosystem: what they can build, on which platform, using which version of the language.
We also hope that it will be used by experienced Scala programmers to refresh their knowledge of the ecosystem and discover some new promising libraries.

Library authors can actively contribute to this Awesome Scala list by tagging their projects in Scaladex.

## A multi-dimensional ecosystem

Over the years, the Scala ecosystem has grown from a few powerful frameworks like Spark, Play and Akka to a vast collection of thousands of libraries solving a large spectrum of problems in many domains.

At the same time, the Scala language itself has evolved quite rapidly.
New programming constructs inspired the community to build new libraries with more expressive APIs, as much as new libraries pushed the boundaries of the language, encouraging the experimentation of new language features.
In the process, some libraries that paved the way of what the ecosystem is today were left behind by their authors and replaced by simpler, more expressive libraries. 

In recent years, the ecosystem has become multi-platform.
Scala.js and Scala Native make existing libraries usable in more scenarios and have inspired the creation of brand new libraries too.

The ecosystem is a multi-dimensional space:
- Some libraries are generic to all kinds of applications and others are very use-case specific.
- Some libraries support all the versions of the language while some others are completely new in Scala 3.
- Some libraries support all three platforms while some others are specific to one or two. For instance web frontend libraries only support Scala.js.

How can we make it easier for newcomers to discover the Scala ecosystem in all its dimensions?
How can we help experienced Scala programmers find new libraries that solve their problems in different ways?

## Awesome Scala

Open source software, similarly to commercial ones, will not thrive unless it reaches new users, sponsors and contributors.
Aware of this issue, open source communities started to compile “awesome” lists of open source projects organized by topics.
Some examples are [vinta/awesome-python](https://github.com/vinta/awesome-python), [akullp/awesome-java](https://github.com/akullpp/awesome-java), [veggiemonk/awesome-docker](https://github.com/veggiemonk/awesome-docker) and many many more (see [bayandin/awesome-awesomeness](http://bayandin/awesome-awesomeness)).

The high number of stars of these GitHub repositories show how popular they are in the world of open source software.

The Scala ecosystem is no exception, it has its own very popular awesome repository.
Created by Lauris Dzilums in 2014 and maintained by a few community members, [lauris/awesome-scala](https://github.com/lauris/awesome-scala) has accumulated more than 8.3K stargazers over 8 years.
That makes it one of the top 20 Scala projects on GitHub!

So why build a new Awesome Scala?

First, because it is really hard to map the full picture of the Scala ecosystem, its richness and complexity, in a static page.
Second, because we want to reduce the maintenance burden of gathering new libraries, updating old ones and re-organizing the list in a meaningful way.

We believe we can achieve these goals using Scaladex.

Scaladex is powered by a database of more than 7000 Scala projects, allowing us to explore them with filters (e.g., Scala versions and platforms) and sorting criteria (e.g., GitHub stars).

In addition, it is fully automated: it receives new Scala POMs from Maven Central and fetches their corresponding projects from GitHub.
It is also connected to the GitHub authentication service to grant library authors the permission to edit their project settings.
Thus we were able to integrate an “Awesome Scala” experience in Scaladex, that is updated automatically, loaded dynamically and managed by the library authors (with no intervention from the administrators).

## Call to action

As a library author, you can help people find your library in the “Awesome Scala” tool by tagging your project with one of the proposed categories.

To do so, log in with your GitHub credentials, go to your project page and click the "Edit" button.

The list of categories was largely inspired by [lauris/awesome-scala](https://github.com/lauris/awesome-scala) but also by some “awesome” lists of other popular languages.
We tested it on more than 800 projects.

Nonetheless, it is likely that some projects will not fall into any of these categories.
If that is the case please open an issue on [scalacenter/scaladex](https://github.com/scalacenter/scaladex/issues) describing the main purpose of your library.

For general discussions and feedback about the categorization, you are invited to open a discussion in [scalacenter/scaladex/discussions](https://github.com/scalacenter/scaladex/discussions).

## Limitations and going further

### Learning resources

In contrast with [lauris/awesome-scala](https://github.com/lauris/awesome-scala), Scaladex does not list any learning resources like books, courses, tutorials, blogs, videos and podcasts.
This is a limitation of the current nature of Scaladex: an index of GitHub repositories and Maven Central artifacts.

It is in part compensated by the list of [Community-Powered Learning Resources](https://scala-lang.org/community/#community-powered-learning-resources) on scala-lang.org.
We encourage community members to submit pull requests with additions and updates to that page.

### Trending libraries

We use GitHub stars as our primary sorting criteria in Scaladex.
But this metric can only grow over time and consequently it favors old projects over new ones.

To also promote new libraries we would like to use some time-framed metrics such as the number of downloads or the number of new GitHub stars over a sliding period of time.
Thus we would be able to show trending libraries over a month or a year.

This is the next feature in the pipeline.
We hope it will be powerful enough for new libraries to gain traction from the community and be more successful.

## Wrapping up

Check out the new [Awesome Scala page](https://index.scala-lang.org/awesome) in Scaladex and let us know what you think at [scalacenter/scaladex/discussions](https://github.com/scalacenter/scaladex/discussions).
