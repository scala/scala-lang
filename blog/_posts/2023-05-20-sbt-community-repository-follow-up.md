---
layout: blog-detail
post-type: blog
by: Julien Richard-Foy, Scala Center
title: "sbt Community Repository (Follow-Up)"
---

[Last month]({% link blog/_posts/2023-04-20-sbt-plugins-community-repository.md %}), we published a blog article where we described the sbt community repository. In this follow-up article, we present our plan to strengthen the infrastructure that supports the sbt ecosystem.

This blog article is also an initial response to the related Advisory Board proposal [SCP-029 sbt community repository](https://github.com/scalacenter/advisoryboard/blob/main/proposals/029-sbt-community-repository.md), which has been approved by the Advisory Board during the meeting of the [27th of April](https://github.com/scala/scala.epfl.ch/blob/main/minutes/_posts/2023-04-27-april-27-2023.md).

## Current State

The sbt community repository was set up a couple of years ago with two primary purposes:
1. To host the sbt plugins that were published before 2021 so that the Scala projects that use on them continue to work today and in the future
2. To give some time to the ecosystem of sbt plugins to migrate to Maven Central

Firstly, I would like to again thank JFrog for their continued support of the sbt project and the Scala ecosystem.

On average, the community repository serves 6 TB of data per month and 700 requests per second. These numbers are not huge, but I think they are higher than they should be, especially when we take into account the fact that the content delivered by the community repository is usually downloaded once per client and then cached indefinitely. 

The reason why these numbers are so high is that the migration to Maven Central did not completely happen and many sbt plugins still have their latest stable version on the community repository.
As a consequence, any new developer joining a Scala project or any continuous integration system building a Scala project with a fresh cache will probably download artifacts from the community repository, even if the project has up-to-date dependencies.

The event of the [7th of April]({% link blog/_posts/2023-04-20-sbt-plugins-community-repository.md %}) has shown that the sbt community repository plays a critical role in the ecosystem. Therefore, we need to increase our safety margins.

## Action Plan

Our goal is to ensure all the Scala projects can be built in the future regardless of which versions of sbt plugins they use.

To achieve this, we will:

1. Accelerate the migration of the actively used sbt plugins to Maven Central. This will reduce the load on the community repository and make it easier to host mirrors of it. We will need the help of the plugin authors to make this happen.
2. Host the Linux packages of sbt releases in a separate place. This will avoid the need to create regular backups of the community repository since all its content will be read-only.

Concretely, we have already collected a backup of the content of the community repository, and set up a backup server hosting a mirror of the repository. We are currently investigating which plugins are actively used and should be migrated to Maven Central. The next step is to explore alternative solutions to host the Linux packages of sbt releases.

## Conclusion

The sbt community repository is currently hosted by the company JFrog, which generously provides an Artifactory instance. We are taking steps to reduce the load on their infrastructure in order to both make sure our partnership with JFrog will continue, and to reduce the costs for making the repository redundant.
