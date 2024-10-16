---
category: announcement
permalink: /news/new-governance
title: "Scala: a mature open-source project"
---

In over twenty years of developing Scala, we’ve learned that good project governance is the key to the maturity, resilience, and health of any open-source project, even more so for a project of the size and complexity of Scala. We learned that governance is iterative and ever-evolving, to follow the project’s development needs and adjust to them. We also learned that transparency is very important to build trust and stability. These are the guiding principles for the Scala teams at LAMP, Lightbend, Scala Center, and VirtusLab, [the organisations that drive Scala development](/governance/#whos-behind-scala).

## The journey so far

We started working on the Scala governance redesign in the wake of the [Scala 3 release](https://scala-lang.org/blog/2021/05/14/scala3-is-here.html) in May 2021\.

The vast landscape of Scala governance was mapped out and presented in a [keynote at ScalaCon 2022](https://www.youtube.com/watch?v=svWnwU5PXxE) by Darja Jovanovic and Adam Goodman. It includes areas like development and  release coordination, community management, knowledge transfer, SIP, IT security, Scala Tooling and more. We are proud of the great progress achieved on these fronts in the last three years, and we will continue to grow and evolve these efforts further.

In 2022 we also announced the first major milestone, the updated [Scala Improvement Process](https://www.scala-lang.org/blog/2022/07/13/scala-improvement-process-reloaded.html) to openly and collaboratively evolve the Scala language by accepting and evaluating formal proposals.

In 2023 we held two Tooling Summits to consolidate the tooling ecosystem and ensure a better user experience across the board, as described in the [Lausanne gathering](https://www.scala-lang.org/blog/2023/04/11/march-2023-scala-tooling-summit.html) from March ’23.

And today we are proud and delighted to announce the following additions: 

* [Updated governance structure and processes](/governance)  
  outlines the organisation and decision-making bodies, as well as individuals and organisations working on Scala language releases and development, and

* [Scala development guiding policies and guarantees](/development)  
  gives a detailed overview about the key policies, best practices, and guarantees that guide Scala development, ensuring consistency, reliability, and maintainability. 

If you are interested in going deeper in these topics, we invite you to read the pages mentioned above.

If you are wondering how these matters impact your daily life as a Scala programmer or a company who uses Scala, keep reading this blog post.

## 5 key improvements every Scala user will benefit from

### Product-driven decision making process

One of the most significant updates was the paradigm shift from treating Scala 3 as an open-source project to approaching it as an open-source product. Scala 3 is developed with predictable release cycles, issue reports are consistently prioritised and added to a milestone, and the roadmap for new features and improvements is well-defined. This focus on product success is fully reflected in the governance model and structure, led by the Product Manager, Piotr Chabelski from the Scala team at VirtusLab. This approach was inspired by the Scala 2 era and its ongoing success.

### Well defined Scala distributions

Scala 3.x releases are always backward compatible, but not the opposite to allow evolving and improving the language. This creates a complex challenge of aligning the library ecosystem on a baseline version, which was resolved with introducing two parallel distributions, as designed by Paweł Marks from the Scala team at VirtusLab:

* Scala Next is the default line that is actively developed by the compiler team, and is the preferred target version for all non-library projects.   
* Scala LTS (long term support) is the preferred target version for libraries.

This is explained further in [Scala development guarantees](/development).

As before, Scala 2 has stable 2.13 and 2.12 distributions.

### Predictable and frequent releases

The new governance model and structure improved the coordination between different teams working on Scala development and releases. We have been testing the model since February 2024 and we are confident that technical decisions around Scala releases and distributions are now synchronised and running smoothly. As a result, Scala 3 users experience [predictable, well-managed releases](/development/#schedule-iterations-and-roadmap), typically at six to twelve week intervals.

### Standardised backlog management on the Scala repo

One big hurdle in the Scala 3 journey was the backlog of issues on the Scala repo. Users and contributors were reporting bugs, but there were more open issues than the team could manage. Now, a clear and efficient process is in place to triage, validate, and label issues within a week of their submission.

### Easier access to Scala maintainers

You can now find a list of Scala maintainers and their roles on the updated Governance page, under [“Teams Behind Scala”](/governance/#gov-scala). We invite Scala users and contributors to tag maintainers on Scala related issues, according to their expertise and role, to further help responsiveness. Also, we encourage everyone to follow and engage with maintainers on official [GitHub discussions](https://github.com/scala/scala3/discussions), [Users](https://users.scala-lang.org/) and [Contributors](https://contributors.scala-lang.org/) forums, [Discord chat rooms](https://discord.com/invite/scala).

### Conclusion

Following the major Scala 3 release in May 2021, the Scala teams faced many challenges. To name a few: Would Scala 3 succeed? How would the ecosystem migrate, and how long would it take? Who would provide and coordinate the resources necessary to operate and advance this big project? At the time of the release, the pool of Scala 3 experts was quite small and existing governance was not adapted to absorb the big change. With significant engineering and time commitment, financial investment and expertise from companies backing Scala, incredible support from the community contributors, and various community driven Scala organisations, we have overcome these challenges and delivered a stable and reliable Scala project.

## Acknowledgments

We have the pleasure to recognise those organisations and individuals who have significantly contributed to bringing the Scala project to this stage.

To each and every person who worked at the **Programming Methods Laboratory at Ecole Polytechnique Fédérale de Lausanne** (or: LAMP at EPFL) for their extraordinary contributions to the world of programming through Scala, and especially to:

* **Martin Odersky**, Scala language designer, from creating the language to continuously inventing and pushing the boundaries of what’s possible, Martin’s vision and dedication have shaped not just Scala, but modern programming itself. His commitment to driving innovation has had an immeasurable impact on both the community and the future of software development.   
* **Fabien Salvi**, System Admin, for patiently and diligently taking care of both the Scala infrastructure and for his technical assistance to each person that has ever worked in Martin’s lab and Scala Center over the last twenty years.  
* **Nicolas Stucki**, Compiler Engineer, for his outstanding work on metaprogramming in Scala 3, his contributions in the Scala governance project, and mentoring on the Scala 3 compiler.  
* **Matt Bovel**, PhD student, for stepping in as the LAMP representative in the Core team for crucial six months, contributing to community building by consistently hosting Scala Issue Sprees over the last year and a half, and for providing valuable feedback throughout.  
* **Hamza Remmal**, Compiler Engineer and Infrastructure Manager, for his critical role in centralising documentation, maintaining the infrastructures, and implementing new security policies.

**Lightbend** for their diligent efforts in overseeing and maintaining Scala 2 for more than a decade. Their stewardship has been a crucial reason Scala is a trusted brand. In addition to maintaining Scala 2 and the standard library, the team is a core participant in Scala 3 governance and development. The team is led by **Lukas Rytz**. The other current, longtime members are **Jason Zaugg**, **Seth Tisue**, and **Dale Wijnand**. We thank them, past members, and the team’s founder, **Adriaan Moors**.

To all the **Scala Center** team members since its founding in 2016 for their work on coordinating projects with the stakeholders and community, keeping educational materials and documentation up to date, developing essential migration tools, and enhancing the compiler and tooling ecosystem.  A special thanks goes to:

* **Heather Miller**, first Executive Director, for her founding vision, putting Scala Center on the map and bringing the key stakeholders to collaboratively push the Scala project  forward.  
* **Darja Jovanovic**, Executive Director, for her outstanding leadership and for creating a neutral and safe space while coordinating delicate processes across multiple organisations and stakeholder groups over several years, ultimately enabling the Scala teams in delivering a strong, updated governance model. She coordinated the Scala 3 release process, spearheaded the governance project, and played a crucial role in designing and implementing the key governance bodies.  
* **Sébastien Doeraene**, Principal Engineer, for his long history of taking part in the Scala Improvement Process and its transformations, and for consistently controlling backward output compatibility guarantees, the technological means that allows Scala Next to use libraries built with Scala LTS and earlier, and   
* **Guillaume Martres**, Compiler Engineer, for his decade of regular contributions (top 3 contributor) and mentoring on the Scala 3 compiler, for making the type system more robust both theoretically and practically, and for his work as SIP member over the years.  
* **Julien Richard-Foy**, former Technical Director, for co-authoring the new Scala Improvement Process and being the first chair and setting its protocols and standards. For his work on Scala MOOCs, both managing and creating new ones.  
* **Anatolii Kmetiuk**, Developer Relationship, co-managing the Scala 3 release, setting and optimising internal processes, and his contributions as a chair of the SIP committee.

**VirtusLab** for their continued support of Scala 3 and the tooling ecosystem for the last 5 years. They have been fundamental pillars of the open source community with their work especially on the compiler, Metals language server and Scala CLI. Special thanks goes to:

* **Krzysztof Romanowski** who is the author of the vision of VirtusLab being a company behind Scala 3, for starting and managing the engagement between EPFL and VirtusLab throughout the years.   
* **Paweł Marks**, former lead of the Scala team at VirtusLab, for his stellar work on leading Scala releases from 3.0.2 to 3.5.0 and authoring the Scala distribution lines. He was instrumental in formalising the specific governance bodies around the Scala release process, defining roles and responsibilities, as well as onboarding the Product Manager.   
* **Piotr Chabelski**, Senior Scala Engineer, for taking on the big role of the Scala Product Manager as of Scala 3.4.2 release, earlier this year. We thank him for his exceptional effort on preparing detailed release plans, coordinating between teams, being the first responder on issue reports, and keeping a hand on the pulse of users' feedback.  
* **Wojciech Mazur**, Senior Scala Engineer, for developing and managing the Scala Open Community Build, leading Scala Native development and taking on the Release Officer role for Scala Next. Without his constant work, maintaining compatibility guarantees and releasing LTS would be impossible.

Additionally, a big thanks to **Adam Goodman**, Director of the Center for Leadership, Northwestern University, who was instrumental in guiding the governance project setup and mentorship of the project leaders.

To all the individuals who have contributed to Scala, engaged in language design discussions, fostered a welcoming Scala community, and championed Scala’s adoption in the industry—thank you for your trust and efforts, we’re excited to continue building Scala’s future together\!
