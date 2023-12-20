---
layout: blog-detail
post-type: blog
by: Anatolii Kmetiuk, Scala Center
title: "Google Summer of Code 2023 Report"
---
We've just wrapped up another fruitful iteration of the Google Summer of Code initiative. This program is a key component of the Scala Center's approach to encouraging more newcomers to contribute to the Scala language, reinforcing its commitment to making Scala contributions more accessible to beginners.

This time around, we had the pleasure of welcoming 6 contributors. Their contributions were directed toward various projects, including data visualization, type-level and asyncronous programming, metaprogramming and more. This article provides a brief overview of their achievements, along with links for further details.

## Unlocking the Full Potential of Scala Web Development
Akseli Ristola worked on integrating Scala 3 support into a [web development template](https://github.com/wiringbits/scala-webapp-template/commits?author=akseliristola) project under the supervision of Alexis Hernandez. This project focused on leveraging the advanced features of Scala 3 to enhance web application development, addressing current limitations and exploring new potentials in Scala-based web frameworks.

Akseli successfully completed two major milestones in this project. The first involved developing a robust integration process for Scala 3, ensuring compatibility and efficiency. The second milestone was the implementation of new features and optimizations specific to Scala 3, which are expected to significantly improve the performance and scalability of web applications developed using Scala.

## http4s Ember WebSocket Client
In this project, Dang Trung Hieu worked under the mentorship of Arman Bilge, Christopher Davenport and Diego Alonso to implement a [WebSocket client](https://github.com/http4s/http4s/pull/7196) for the [http4s](https://github.com/http4s/http4s) Ember backend. The goal was to extend the capabilities of the http4s library, a Scala HTTP library, with robust WebSocket support to enable real-time communication features in web applications.

The project's success lies in the development of a fully functional WebSocket client that integrates seamlessly with the existing http4s Ember framework. This integration enhances the library's utility in building modern, real-time web applications, thereby enriching the Scala ecosystem.

## Data Visualization with Doodle
Danylo Ostapchenko worked on this project under the mentorship of Noel Welsh to enhance the [Doodle library](https://www.creativescala.org/doodle/), a tool for compositional vector graphics in Scala. The aim was to improve the library's data visualization capabilities, making it more versatile and user-friendly for developers.

Danylo's work led to significant enhancements in the Doodle library, including new features and optimizations that make data visualization more intuitive and powerful. These improvements are expected to benefit developers seeking to integrate complex graphical representations into their Scala applications. You can read more about Danylo's work in his [final report](https://danielost.github.io/posts/gsoc23/)

## Async-Shifted High-Level APIs
Olena Kravchenko worked under the mentorship of Ruslan Shevchenko on a project focused on the automatic generation of 'async-shifted' version of high-order functions in Scala. The project aimed to streamline asynchronous programming in Scala by making high-level APIs easier to use in asynchronous contexts. During this project, Olena pushed the boundaries of the dotty-cps-async library, which provides a framework for asynchronous programming in Scala based on the CPS algebra. You can read more about her work in the [project overview](https://github.com/rssh/dotty-cps-async/discussions/79) and [final report](https://docs.google.com/document/d/1V5harGKumEVvD1975IV-YVEKzyTW1heACfMCg-TdROM/).

## Enhancing Scala 3's Macro System
Yuito Murase worked under the mentorship of Nicolas Stucki to enhance the macro system in Scala 3, specifically in the area of pattern matching. The project's goal was to improve quote pattern matching in Scala 3 macros to add better support for matching against types.

Yuito's efforts led to significant improvements in the Scala 3 macro system, particularly in making pattern matching more versatile and robust. These enhancements are crucial for developers who utilize metaprogramming in Scala, allowing for more sophisticated and efficient code generation. You can read more about the work that was done in the [final report](https://gist.github.com/zeptometer/ad414dda221a9f9f99e4135b6b5c1c3c).

## Breaking the Thread Barrier: Boosting I/O Performance in Scala
Antonio Jimenez worked under the mentorship of Arman Bilge, Fred Honório, Daniel Spiewak, and Christopher Davenport to solve the task of enhancing the asynchronous I/O performance on the JVM for Scala applications as a part of the [fs2-io_uring](https://github.com/armanbilge/fs2-io_uring) project. This project aimed to address the limitations of current asynchronous I/O implementations, focusing on breaking the thread barrier to achieve higher performance and efficiency.

Antonio's work resulted in the first implementation of a fully non-blocking I/O model. This groundbreaking development not only promises significant performance boosts for Scala applications but also sets a new standard in asynchronous programming on the JVM. The successful implementation demonstrates a profound understanding of JVM internals and Scala's capabilities, paving the way for future advancements in this area.

## Conclusion
The efforts exerted during GSoC 2023 have enhanced Scala's performance in specific aspects, broadened the array of tools available for Scala educators, and improved the experience of Scala migration and development.

Thanks to the program, the Scala community has expanded with 6 additional contributors. We extend our gratitude to the students we guided this year – Akseli Ristola, Dang Trung Hieu, Danylo Ostapchenko, Olena Kravchenko, Yuito Murase, and Antonio Jimenez – for their dedication to maintaining Scala's excellence.

Our thanks also go to the mentors – Alexis Hernandez, Arman Bilge, Christopher Davenport, Diego Alonso, Noel Welsh, Ruslan Shevchenko, Nicolas Stucki, Daniel Spiewak, and Fred Honório – for their commitment and expertise in acquainting the students with the projects and the community.

Scala Center is planning to apply for GSoC in 2024 as well! If you're interested in being a part of it, either as a mentor or a student, stay tuned to our [LinkedIn](https://www.linkedin.com/company/28358960), [X](https://twitter.com/scala_lang) and [Mastodon](https://fosstodon.org/@scala_lang) for the latest updates on the upcoming edition of GSoC. Additionally, you might find it helpful to review the [timeline](https://developers.google.com/open-source/gsoc/timeline) for GSoC 2024.
