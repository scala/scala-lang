---
layout: blog-detail
post-type: blog
by: Johanna Reichen (Scala Center)
title: "Contribution Equals Impact: A Spotlight on Spotify - Quality over Quantity and the Importance of Community Contributions"
description: "Contribution Equals Impact is a series of blog posts highlighting how companies and organizations contribute to OSS, their best practices and vision for the future."
---

The [Scala Center](https://scala.epfl.ch/) champions a responsible, sustainable, and resilient open source ecosystem. It firmly believes that every meaningful contribution, no matter how small, has an impact and can reinforce symbiotic relationships within the Scala community, contributing to the ecosystem's longevity and resilience. As part of this endeavor, the Scala Center is keen to share success stories of organizations that have effectively implemented open source contribution processes in the interview series “[Impact of Contribution in the Scala Ecosystem](https://scala-lang.org/blog-detail/2023/03/02/sustainability.html)”. The goal is to create best practice guidelines that enable more organizations to engage and contribute, optimizing the process for the entire community and positioning Scala as a leader in sustainability and responsibility in its domain.

Welcome to our latest success story, where we'll uncover Spotify's relationship with the Scala ecosystem and its commitment to open source. We had the opportunity of speaking to [Michel Davit](https://www.linkedin.com/in/micheldavit/?originalSubdomain=ch), a dedicated Scala developer who has been with Spotify for over 3.5 years. The  conversation offers a glimpse into the intricacies of Spotify's innovative approach and its effective application of Scala in the open source landscape.

From its inception, Spotify has woven open source deeply into its identity, leading to a fruitful symbiosis between the organization and the wider developer community. Let's explore how Spotify's embrace of open source has shaped its journey, its policies, and its thriving culture of innovation.

## Spotify, Open Source, and the Scala Landscape: A Partnership for Progress

Since 2018, Spotify has demonstrated its commitment to the Scala ecosystem by serving on the Scala Center's Advisory Board, initially with one representative. This representation was expanded to two members (with 1 vote) in 2020, reflecting Spotify's growing involvement and influence within the community.

In the digital entertainment landscape, Spotify is also a leading example of leveraging the Scala ecosystem. Central to Spotify's unique user experience are their sophisticated, data-processing algorithms, which are developed in Scala. Many developers at Spotify, with their deep expertise in Scala, have significantly contributed to this endeavor, shaping the personalized and enhanced user experience that the company prides itself on.

As an organization, Spotify's dedication to open source has been clear since its inception, fostered by an engineering team passionate about leveraging and contributing to the open source community. Over time, this has evolved into an integrated system with established policies and legal frameworks. Today, Spotify is not just a consumer of open source but an active contributor, boasting about 150 published projects, including its most notable contribution - [Backstage](https://backstage.io/). A dedicated team of over 40 developers tirelessly works on Backstage, reflecting the company's commitment to nurturing its open source projects.

Our interviewee, Michel, was attracted to Spotify precisely because of its fervent open source culture. In recent times, the company has professionalized its open source initiatives by creating the Free and Open Source Software board (FOSS board). It aims to promote good practices and citizenship within the open source community, assist in legal/business issues and ensure the delivery of high-quality software. This step is part of Spotify's shift towards prioritizing quality over quantity in its open source contributions. The company's dedication to supporting the open source ecosystem extends beyond its walls with the launch of the [FOSS Fund](https://engineering.atspotify.com/2023/10/announcing-the-recipients-of-the-2023-spotify-foss-fund/). This fund is dedicated to financially support the maintainers of independent projects. This ambitious initiative is aimed at nurturing a more sustainable open source ecosystem for everyone to benefit from.

In addition, Spotify has a dedicated page showcasing all its [open source projects](https://spotify.github.io/). They also actively share updates and progress through blog posts and have established mechanisms to gauge the quality of their projects, such as tracking the repository activity, known vulnerabilities and the community interest with star ratings on Github.

Join us as we explore deeper into Spotify's journey and its symbiotic relationship with the open source world. We'd like to share some of Spotify's own experiences - the highs and the lows - of contributing to the Scala ecosystem.

## Scala Ecosystem Contributions: Success Stories from Spotify

One inspiring story emerged during Spotify's migration to Google Cloud Platform (GCP). The team identified a gap in the available tools when they decided to transition from [Scalding](https://github.com/twitter/scalding) (Twitter’s open source project for MapReduce in Scala) on a self-hosted Hadoop cluster to using Dataflow, Google's big data managed service. While Google provided a Python and a Java SDK for Dataflow, the Spotify team, already comfortable with Scala, felt that moving to Java would be a step backward. Hence, Spotify built [Scio](https://spotify.github.io/scio/), their most significant open source Scala project, to bring a user-friendly Scala API for Dataflow and later for Beam.

Spearheaded by Neville Li and supported by an internal 'Scala expert' team, Scio's adoption rapidly grew both inside and outside of Spotify. Its quick success was largely due to Scio's unique offerings: a functional Scala API, integrating with numerical/ML libraries, and Scala macros for automatic modeling and transformations.

While Scio remains in a pre-stable (0.x) release cycle, it has significantly evolved. The range of connectors has expanded beyond Spotify's needs, many of them implemented by developers from the open source community.

Among them, there can be a mention for the recent [Neo4J](https://neo4j.com/) graph database connector. Conceptualizing and building it was a result of a fruitful collaboration between the Scio user who opened the pull-request, a Neo4j specialist and Scio maintainers.


However, the journey wasn't all smooth sailing. Early on, the relatively small development team found themselves unable to promptly address certain issues or pull requests, giving a poor impression of their commitment to support external initiatives and to general maintenance. They also struggled to effectively communicate their roadmap and upcoming releases to external users.

The departure of Neville Li, one of Spotify's most influential data engineers, coincided with a contraction in the team size. This meant that the team working on Scio became more internally focused. Despite these challenges, they learned valuable lessons on diligence, transparency, and the importance of a well-defined process.

Looking ahead, Spotify acknowledges the importance of archiving projects that are no longer active. They also recognize the need for improvement in their roadmap exposition to external contributors and users, and believe that a standardized process could be a solution.

This fascinating journey, complete with its success stories and stumbling blocks, perfectly illustrates how anyone can make meaningful contributions to the Scala ecosystem. By sharing these experiences, Spotify hopes to motivate and inspire greater involvement in the vibrant and rewarding world of open source Scala projects.

## Weighing the Impact: Benefits, Barriers, and Measurements at Spotify

We now turn our attention towards understanding how Spotify measures the investment, rewards, and challenges that come with contributing to open source projects. Every organization has to find a balance between potential hindrances like workload, expenses, and risks, and the advantages derived from open source engagement.

Historically, Spotify didn't operate under a clear framework for open source involvement. If someone felt passionate about contributing to an open source project, they were usually encouraged to do so. However, things have evolved, and now open source initiatives need to be meaningful from a business perspective and be owned by a team or squad, rather than an individual.

Workload and prioritization associated with open source involvement have largely been left to the discretion of the supporting team. One area that could use improvement is the communication of product maturity / development lifecycle for open source projects. External contributors often express confusion about how to proceed or when to expect new releases. Despite the high adoption of Spotify's open source projects, external contributions are still relatively rare.

One challenge Spotify currently faces is the lack of KPIs to measure the impact of its open source involvement. However, the company does anticipate that open source involvement positively impacts the brand image, aiding in attracting new talent.

Michel shared insights about a new open source product, Backstage, which has gained a lot of traction with numerous commercial plugins. Open source engagement played a significant role in its successful launch.

At Spotify, there's also a concept called 'hack time', where employees dedicate time to work on what they want, internally or in the OSS world. While there are no strict rules, if a project or task is beneficial or meaningful to Spotify, team members are encouraged to take it on. These initiatives often depend on the individual's motivation rather than managerial instruction, but open discussions with managers can help push the company towards more open source engagements.

## Establishing a Blueprint: Standardizing Open Source Processes at Spotify

Next, we delve into the value of standardizing processes and contributions within open source projects. This aspect is pivotal for organizations venturing into open source. A standardization of contribution protocols ensures consistent and efficient collaboration, aiding aspiring contributors as they move towards open-sourcing their own Scala projects.

Spotify established a four-point checklist that projects need to validate before being open sourced:

1. **Purpose:** The team needs to identify the intent behind releasing the project. Questions to consider include why they want to release this code in the open, and how it impacts their brand, hiring, and team's growth.
2. **Suitability:** The project's relevance to the broader community needs to be assessed. Does it depend heavily on Spotify's internal infrastructure? Or does it solve a very Spotify-specific problem?
3. **Compliance:** Ensuring the project can be licensed under Apache is a crucial step. This involves making sure all the required project assets and documentation are in place, and the project doesn't contain any confidential elements.
4. **Maintenance:** Having dedicated maintainers is a key aspect. The project team and manager need to be on board with open sourcing the code. They should be able to estimate how much time can be dedicated to the project each week, define their goals and plans for releasing the project, and identify the team that will own the project.

Michel explains the importance of maximizing quality over quantity. In the past, Spotify open sourced numerous projects without the bandwidth to adequately maintain them. Today, they carefully assess criteria to decide whether a project should be open sourced. Once a project is shared, it's up to the respective team to maintain it and communicate the vision. At the very least, they should provide the development lifecycle to build trust with the community.

## Spotify's Vision: Shaping the Future of Open Source

In conclusion, Spotify's future vision in the expanding open source landscape is defined by its strategy to build a FOSS-first mindset, invest in areas that make sense for them, reducing the risk in consuming open source either through contribution of hours or financial backing. They plan to focus on selected lighthouse open source projects in areas where they lead, like Backstage, continuing to experiment and learn along the way.

A key part of their strategy is to stop pursuing initiatives that no longer make sense and invest in those that do. Michel emphasizes the need to minimize disappointment, properly share the product vision, and ensure that their open source processes are clearly communicated.

Michel further pointed out that Spotify has a [Slack workspace](https://slackin.spotify.com), where everyone can discuss or get support on the open source projects they maintain. Most of these projects are also advertised in Spotify’s [developer blog posts](https://engineering.atspotify.com/).

Their advice for companies looking to enter the open source space is to invest time in open source initiatives. It's an invaluable learning tool for developers, helping them grow as they navigate the intricacies of creating general-purpose software.

Looking ahead, Michel suggests setting up processes for maintenance that align everyone on the team and in the community, a strategy that will prove crucial in the dynamic world of open source development.

The stories and insights shared by Spotify, one of the entities in the Scala ecosystem, emphasizes the potential of open source projects in driving innovation, fostering collaboration, and boosting developer growth. As we've learned from their experiences, open source engagement is not just about contributing code; it's about building a sustainable and diverse community that advances together.

## Follow the Spotify Path

Spotify's effective engagement with the Scala ecosystem and open source community serves as a guide for other organizations. Their strategic approach includes a clear commitment to open source through initiatives like the Free and Open Source Software Fund, a dedicated maintenance team for projects, and transparent communication methods. Notable contributions like the creation of Scio highlight their ability to identify and fill gaps in the ecosystem. Their shift from individual to team-owned projects that align with business goals presents a model for managing open source initiatives. With a systematic protocol examining purpose, suitability, compliance, and maintenance for open-sourcing projects, Spotify underscores the importance of quality and sustainability. Their advice for companies looking to engage in the open source space stresses investment of time and maintenance processes, emphasizing the learning and growth potential for developers in these initiatives.

We encourage you to contribute to the growing Scala ecosystem and share your unique insights. Embrace the open source philosophy, learn from the journeys of others, and start making your own impact today. Remember, every positive contribution, no matter how small, is a step forward in this collaborative journey. Let's shape the future of Scala together!

Share your contribution story [here](https://airtable.com/shr5mUxTqQs1zZ228)!

## Related Content and Further Reading

Spotify Official Website [https://open.spotify.com/](https://open.spotify.com/)

Spotify FOSS Fund 2022 [https://engineering.atspotify.com/2022/04/announcing-the-spotify-foss-fund/](https://engineering.atspotify.com/2022/04/announcing-the-spotify-foss-fund/)

Spotify FOSS Fund 2023

[https://engineering.atspotify.com/2023/10/announcing-the-recipients-of-the-2023-spotify-foss-fund/](https://engineering.atspotify.com/2023/10/announcing-the-recipients-of-the-2023-spotify-foss-fund/)

Spotify Engineering Blog on OSS [https://engineering.atspotify.com/opensource/](https://engineering.atspotify.com/opensource/)

Spotify Open Source Projects [https://spotify.github.io/](https://spotify.github.io/)

External Contribution on the connector Sacio PR [https://github.com/spotify/scio/pull/4488](https://github.com/spotify/scio/pull/4488)

Spotify OSS Lead blog post on “Open Source Work is Work” [https://engineering.atspotify.com/2022/10/open-source-work-is-work/](https://engineering.atspotify.com/2022/10/open-source-work-is-work/)

Become a Scala Contributor [https://docs.scala-lang.org/contribute/](https://docs.scala-lang.org/contribute/)

Support the Scala Center [https://scala.epfl.ch/donate.html](https://scala.epfl.ch/donate.html)

Become an affiliate member of the Scala Center [https://scala.epfl.ch/corporate-membership.html](https://scala.epfl.ch/corporate-membership.html)

You can also share this post with your professional network and social circles to amplify the reach of this series.
