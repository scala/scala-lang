---
category: blog-detail
post-type: blog
by: Vincenzo Bazzucchi, Scala Center
title: "Scala GSoC 2021 is finished: meet the team!"
---

Google Summer of Code (further: GSoC) 2021 edition is completed 🎉

In this post we want to celebrate the students and mentors who made Scala GSoC
2021 a success!

GSoC is an international annual program in which Google awards stipends to
University students who successfully contribute to open source projects. The
goal is to help open source projects identify and bring in new developers by
offering students the opportunity to gain real-world software development
experience.

## Scala GSoC 2021: Introducing students and projects

The Scala Center had the honor to organize Scala GSoC 2021 and the pleasure to
help coordinate 4 brilliant students and their mentors. In this section we
introduce and welcome them in our Community!

### Add synthetics and symbol information for semanticdb in Scala 3

Student: **Rikito Taniguchi**

Mentors: Tomasz Godzik, Chris Kipp, Jamie Thompson, Aleksander Boruch-Gruszecki

SemanticDB is a data model for semantic information such as symbols and types in
Scala programs. It is widely used for developing Scala's devtools such as
scalafix and Metals. However, the SemanticDB extractor for Scala3 was a work in
progress, and some features in devtools were unavailable for Scala3. This
project focuses on enriching SemanticDB with additional information from the
Scala3 compiler in order to improve the developer experience of Scala 3
developers You can read more
[here](https://github.com/tanishiking/gsoc-2021/blob/main/README.md)


> Rikito's work enables a huge amount of features in tools used for working with
> he Scala 3 code including Metals and Scalafix.  There is nothing currently that
> think Rikito can improve as his work has been completely stellar.

cit. Tomasz

### Cross compiling “Shapeless 2” to Scala 3

Student: **Katrix**

Mentors:  Julien Richard-Foy, Aleksander Boruch-Gruszecki

Shapeless is a crucial dependency of many popular Scala libraries. This project
explores how the Scala 2 version of the library could be cross-built for Scala 3
by porting some parts to Scala 3. It aims at helping library maintainers to
adopt Scala 3 faster.  You can read more
[here](https://github.com/milessabin/shapeless/pull/1200)

> Congratulations for your work on Shapeless, especially for being so autonomous
> in this project!

cit. Julien

### Implement support for ScalaPy in Scala 3

Student: **Mykola Medynskyi**

Mentors: Shadaj Laddad, Anatolii Kmetiuk

ScalaPy is a library that enables Scala programs to use Python libraries. This
project brings support for Scala 3 to the library to enable users to leverage
all the new cool features that the new language versions ships while relying on
powerful and well known Python libraries.  You can read more
[here](https://gist.github.com/jlareck/7268918d28b0c6a0efebeafa11011e3c)

> Mykola's contributions bringing support for Scala 3 are really impressive and
> will enable many new research and production use cases in the future!

A special thanks goes to **Zhendong Ang** who co-menthored Mykola and
collaborated on the project for his semester project at EPFL.

### A Python - Scala integrated environment with Almond, Ammonite and ScalaPy

Mentors: Anatolii Kmetiuk, Alexandre Archambault

ScalaPy is a library that enables Scala programs to use Python libraries. This
project focuses on improving developer experience by simplifying the setup
process, providing autocomplete functionalities in Almond and Ammonite,
enriching the documentation and object displays.  You can read more
[here](https://gist.github.com/kiendang/e6c2fc41448fabba6f1e6ae34cf65c49)

> This work kick-started a better integration of the ScalaPy library in Scala
> notebooks, making it easier to use Python libraries from there, and helping the
> future prospects of both Scala notebooks and the use of Python libraries from
> Scala.

cit. Alexandre

## Thank you, Mentors!

Scala GSoC 2021 would not have been possible without our Mentors that dedicated
their time and energy as volunteers to guide new contributors.  Thank you
mentors for the great work we hope to see you in the next edition(s)! 

Here are a few of the comments that students submitted:

> Both mentors are very helpful to me in this project and I learned a lot from
> them (Hi Alex and Toli!)

> Thank you so much Tomasz for mentoring me [..]  Thank you so much for helping me
> with communication: pinging to reviewers, inviting Jamie to the call, and always
> trying to move the project forward. I admire your communication skill. and thank
> you so much Jamie for reviewing my Pull Requests!

> Shadaj Laddad and Anatolii Kmetiuk are great mentors. Anatolii is incredibly
> skilled in explanations. He perfectly explained in 30 minutes the basics of
> metaprogramming in Scala which I could not understand for a month before it by
> reading Scala docs and I am very thankful to him for this. Shadaj is an
> excellent coordinator. He has a great vision of the whole project, possible
> problems in it, and how to fix them. Also, his code reviews helped me to learn
> how to make my code better and I am also very thankful to him. It is a pleasure
> to work with them.

We also want to thank our candidate Mentors who accepted the call of the Scala
Center to propose interesting project ideas and who volunteered their time:

 - Wojciech Mazur
 - Sébastien Doeraene
 - Adrien Piquerez
 - Eric Loots
 - Meriam Lachkar
 - Dale Wijnand
 - Fengyun Liu
 - Lars Hupel
 - Krzysztof Romanowski
 - Mateusz Ziarko
 - Felix Mulder
 - Noel Welsh

## How to get involved in Scala GSoC 2022

Google has not disclosed information about the 2022 edition of GSoC yet. We can
however learn from previous editions how to prepare for it and, if it follows
the same general organization of 2021, the event might start **as soon as February
2022, so it’s not too soon to start**. Here is how:

###  For Open Source Project Maintainers

First and foremost it is important to keep an updated list of project ideas:
open source projects willing to be part of the GSoC should maintain GitHub
issues, project boards or simple text files containing proposals for students.
To make your project more approachable, offer projects with different levels of
complexity and various topics.  You can find useful information about project
proposals at
https://google.github.io/gsocguides/mentor/defining-a-project-ideas-list 

You should also identify at least one mentor and one backup mentor for each
proposal. This will speed up the application process but also make the project
visible to students before the event starts, increasing the chances that
motivated students will not miss the opportunity to work on your repository.

Communication is fundamental too: candidate mentors are encouraged to
communicate about their participation in GSoC and about project ideas throughout
the year. Be responsive to students approaching you on the project
channels (GitHub issues, Discord, Gitter, Twitter…) 

If you maintain a Scala library and would like to be part of Scala GSoC 2022
with the help of the Scala Center, do not hesitate to contact us at
[scala-gsoc@epfl.ch](mailto:scala-gsoc@epfl.ch) !

### For Students

If you are a student and want to be involved in Scala GSoC 2022, get in touch
with the maintainers of the projects that you would like to contribute to. The
GitHub repo or project site will contain information about communication media
such as Discord, Gitter, Twitter or good-old email.

Remember that most maintainers volunteer their free time for open source, so do
not expect immediate replies. You can find some tips about making first contact
at https://google.github.io/gsocguides/student/making-first-contact 

You can also start to think about project proposals (you can find a lot of
useful info at https://google.github.io/gsocguides/student/writing-a-proposal)
and discuss them with project maintainers.

Feel free to contact us at [scala-gsoc@epfl.ch](mailto:scala-gsoc@epfl.ch) if
you get stuck along the way, we are happy to help within our capacities.

## Even more: Brief history, stats, and goals

The Scala organization has been involved in GSoC for many years thanks to the
efforts of [Martin Odersky’s lab (called LAMP) at
EPFL](https://www.epfl.ch/labs/lamp/): 

![Student participations by year](/resources/img/blog/lamp-gsoc-students.png)

In 2021 the Scala Center decided to
revive this long tradition of successful projects (only 2 students in 9 editions
did not complete their projects) with help of the maintainers of open source
Scala libraries.

For this year’s edition we gathered [28 project
ideas](https://github.com/scalacenter/GoogleSummerOfCode2021) and 20 candidate
mentors motivated to support students with such ideas.  We received 10
applications and after reviewing proposals and assigning students to mentors, we
retained 4 projects to enter the programme.

For the 2022 Scala GSoC edition we are aiming to attract at least **10 new
students** and we invite you to help us by 

 - offering to be a mentor 
 - letting us know if you have a student interested to participate 
 - spreading the word!
