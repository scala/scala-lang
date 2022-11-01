---
layout: blog-detail
post-type: blog
by: Anatolii Kmetiuk, Scala Center
title: "Google Summer of Code 2022: How It Was"
---
We've recently completed another successful Google Summer of Code program. Designed to bring more beginners into programming communities, the program is a part of Scala Center's strategy to make the Scala language more newcomer-friendly.

This year, we welcomed four students guided by five mentors. They contributed to projects such as Scala Native, Creative Scala, Scalafix, and Metals. In this article, you can find a short summary of what was done as well as the links to find out more.

## Scala Native: Linker Optimization
Scala Native is an optimizing ahead-of-time compiler and runtime for Scala. It enables the programmer to compile Scala to native code that does not require a JVM for its execution. Scala Native is great for performance-critical applications – think embedded software – that require tight memory control while allowing all the type-safety and compile-time verification advantages that come with Scala.

During GSoC 2022, Liangyong Yu, mentored by Wojciech Mazur, was working on making Scala Native faster and more memory-efficient. He introduced incremental compilation that reduced the build time by 21% on average. Also, he developed a benchmarking infrastructure to measure the performance of Scala Native builds. Considerable work was done on the optimizer of Scala Native which resulted in decreased memory consumption.

Overall, Liangyong's work makes Scala Native builds even more performant time- and memory-wise, which will be especially interesting for the developers of large codebases. You can find out more in Liangyong's [report](https://github.com/yuly16/Scala-Native-GSoC-Report).

## Doodle Explore
[Scala Doodle](https://github.com/creativescala/doodle) is a compositional graphics library for generative art in Scala that enables users to declaratively create art pieces and other visualizations. A Doodle graphic is generally parameterized by one or more variables such as stroke width and background color, or sometimes something more domain-specific like the magnitude of gravity or iterations of a fractal. In any of these cases, the creator of a graphic may want to use a GUI for changing the parameters to fine-tune the art piece or provide a means to make the graphic interactive.

Mikail Khan, mentored by Noel Welsh, developed such a GUI during the Summer of 2022 – have a look at this [documentation microsite](https://creativescala.github.io/doodle-explore/) for a quick demo.

The project will be especially interesting for Scala educators. For experienced and novice programmers alike, it's important to quickly get feedback on what your code is doing – this is how we learn. Even more so it is important for people who have just started their journey in programming. Having a visual feedback you can play with is a great feature that can be used to teach Scala to newcomers.

The final report for this project is available [here](https://static.mikail-khan.com/gsoc-report/).

## Towards Scalafix cross-compilation to Scala 3
Scalafix is a linting, code completion, and rewriting tool for Scala codebases. It is an important migration tool that makes it easier for Scala 2 users to migrate to Scala 3.

Scalafix currently cross-compiles for Scala 2.11, 2.12, and 2.13. Having it cross-compile to Scala 3 is challenging for a number of reasons but is important. Cross-compilation to Scala 3 would mean that the rules written in Scala 3 will be compatible and compilable in Scala 2.

Razvan Vacaru, mentored by Brice Jaglin and Meriam Lachkar made a significant progress in this area by making it possible for a couple of Scalafix modules to cross-compile to Scala 3. You can find a detailed report [here](https://github.com/rvacaru/GsoC-2022-Scalafix).

## Semantic Highlighting in Metals
Semantic Highlighting is a part of the default LSP (Language Server Protocol – what connects Metals to your favorite code editor to bring all nice developer experience to you) spec, which is not yet supported by Metals. This would allow the highlighting of tokens (keywords etc.) based on the semantic information about the code. This is especially useful with things like soft keywords in Scala 3, but not only.

Semantic Highlighting is a long-standing [feature request](https://github.com/scalameta/metals-feature-requests/issues/57) in Metals. Having a finer-grained, smarter code highlighting would enhance the developer experience, making Scala even more pleasant to work with.

Shintaro Sasaki, mentored by Tomasz Godzik, has been working on the project during the Summer of 2022. Currently, the project is still a work-in-progress – you can follow its development at the following [PR](https://github.com/scalameta/metals/pull/4444).

## Conclusion
A lot of important work was done during this installment of Google Summer of Code. This work makes Scala even more performant in certain areas, brings even more options for Scala educators to teach Scala, and enhances the Scala migration and development experience.

The Scala community has gained four more contributors as a result of the program. We would like to thank the students whom we mentored this year – Liangyong Yu, Mikail Khan, Razvan Vacaru, Shintaro Sasaki – for their contribution to keeping Scala awesome.

We would also like to thank the mentors – Brice Jaglin, Meriam Lachkar, Noel Welsh, Tomasz Godzik, Wojciech Mazur – for the time and knowledge they invested in getting the students up to speed with the projects and the community.

Scala Center is intended to participate in GSoC 2023 as well! If you are interested in joining, either as a mentor or a student – keep an eye on our LinkedIn and Twitter for updates on the future installment of GSoC. You can also consult the [timeline](https://developers.google.com/open-source/gsoc/timeline) for 2022 to have some idea on the timeframes of the previous installment and have some idea on when to expect things to come into motion in 2023.
