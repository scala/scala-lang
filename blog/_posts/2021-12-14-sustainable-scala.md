---
layout: blog-detail
post-type: blog
by: Julien Richard-Foy, Wojciech Mazur
title: "Sustainable Scala"
---

To what extent do programming languages affect the energy consumption of 
programs? How does Scala compare to the other programming languages? Does that 
matter for building an environmentally sustainable digital world?

We found out that the most important lever to reduce the energy 
consumption of the IT sector is to **extend the lifetime of hardware**. 
Nevertheless, the energy consumption due to **running software** is 
important, and it **varies significantly between programming languages**.
Scala is well positioned for a high-level language, and **writing low-level 
imperative code** can make a difference.

## The world is warming, what about the digital world?

According to [climate experts], it is urgent to assess the environmental 
impact of our decisions (in all areas) to significantly reduce the 
greenhouse-gas (GHG) emissions of human activities.

In 2019, the sector of IT was responsible for 3.5% of the worldwide GHG 
emissions [^1] [^2], which is similar to the aviation sector. More 
importantly, this number is growing exponentially, and it is expected to 
double between now and 2025 [^1]. This trajectory is obviously not 
sustainable. The GHG emissions of the IT sector must decrease.

In that regard, good news is that more and more IT companies are committing to 
targeting carbon neutrality, including Scala companies such as [Netflix], 
[Zalando], and [Stripe].

Where do we start? If we break down the GHG emissions within the IT sector, 
we observe that most of them happen during the manufacturing process of 
hardware rather than during the usage of hardware [^1] [^3]. Therefore, the 
first action point is to **extend the lifetime of hardware**.

Then, we can have a look at the emissions due to using hardware, namely
the emissions due to running software.

## Do programming languages affect energy consumption?

The GHG emissions due to running software are caused by the energy 
consumption of computers. Obviously, the more computations are performed, the 
more energy is consumed. Said otherwise, the nature of the program is more 
important than the language in which it is written.

That being said, if we implemented the exact same program in various 
languages, would we observe significant differences in energy consumption, 
solely due to intrinsic _language overhead_? This is the question [Rui 
Pereira _et. al._ try to answer][energy-efficiency-languages].

They compared the execution time, energy consumption, and memory consumption 
of running 10 different programs each implemented in 27 programming languages
[^4]. Caution needs to be taken when interpreting benchmark results, but 
some general trends emerged.

Notably, **the energy consumption does vary by factors up to 80 between 
programming languages**. On average, C and Rust programs are the most energy 
efficient. Java programs consume about 2 times more energy than C programs. 
JavaScript/TypeScript programs consume between 4 to 20 times more energy 
than C programs. Finally, Python programs are black sheeps, with an energy
consumption 75 times higher than C programs.

Where does Scala stand in this picture? Unfortunately, Scala was not 
included in this study.

## Including Scala in the energy benchmarks

The code used by the study is [open source][energy-language-repo]. It reuses 
the benchmarks of the [Computer Language Benchmarks Game], and measures not 
only the execution time and memory consumption, but also the energy 
consumption (via [perf tools]).

In order to include Scala, we had the following plan:

- take [old Scala implementations] of the benchmarks (which were written at 
  a time where Scala was part of the Computer Language Benchmarks Game, and 
  which are now sitting in an archived Git repository),
- adapt the infrastructure created by the study to run Java benchmarks to 
  also run Scala benchmarks.

However, things were not that simple in practice. First, we discovered that the 
existing infrastructure was not properly warming-up the JVM before running the 
benchmarks, leading to an over-estimation of about 30% of their energy 
consumption. Second, and more importantly, we noticed that the different 
implementations of the same benchmarks (one per programming language) were 
sometimes using different algorithms, making things obviously less comparable.

We managed to find a solution to the first issue by implementing a [JVM-based 
runner] for the benchmarks. Our runner implements the classic scheme of 
running several warming-up iterations before doing measurements. It measures 
the energy consumption by using [jRAPL].

Dealing with the second issue was a bit less satisfactory. We don’t have the 
capacity of checking and fixing the 50 benchmark implementations to use 
comparable algorithms. Consequently, we only focused on the Java and Scala 
benchmarks whose performance was too far behind their C counterpart. We 
modified them, when necessary, to use the same algorithm as the C 
implementation of the benchmark.

After several days of work, we had 10 Scala implementations of the 
benchmarks as well as an infrastructure properly warming-up the JVM before 
measuring their execution time, memory consumption, and energy consumption. 

## What about day-to-day code?

Heavily optimized code may be different from idiomatic code 
that we write day-to-day, and the results we would get from running the 
benchmarks may not be applicable to idiomatic Scala code.

For this reason, we also created "more idiomatic" versions of the Scala
benchmarks. The usage of the double quotes is justified because 1) what is 
qualified as idiomatic is fairly subjective, and 2) due to our limited 
resources, we did not completely overhaul the implementations, but we 
only changed some patterns that we believe are typically non-idiomatic.

For instance, the "optimized" version of the `binary-trees` benchmark models 
an empty tree as tree whose branches are `null`:

~~~ scala
final case class Tree(left: Tree, right: Tree) {
  def checkSum: Int =
    left match {
      case null => 1
      case tl   => 1 + tl.checkSum + right.checkSum
    }
}

object Tree {
  final val EmptyTree = Tree(null, null)
}
~~~

Whereas the idiomatic one uses a class hierarchy:

~~~ scala
sealed trait Tree {
  def checkSum: Int
}

case class NonEmptyTree(left: Tree, right: Tree) extends Tree {
  def checkSum: Int = 1 + left.checkSum + right.checkSum
}

case object EmptyTree extends Tree {
  def checkSum: Int = 1
}
~~~

Does this change impact performance? Keep reading to know the answer.

Another example of difference between idiomatic and optimized versions is the 
usage of Scala collections instead of Java `Array`s, and the usage of `for` 
loop instead of `while` loops.

### Protocol

We compared the energy consumption of 10 benchmarks, each written in C, Scala, 
Java, JavaScript, and Python. To achieve this, we executed each benchmark 10 
times (after 5 warm-up iterations), on an Intel i9-7900X @ 3.30 GHz with 20 
CPUs and 128 GB of memory, with OpenJDK 17, Node 10.19.0, and Python 3.8.10.

You can find the source code of the benchmarks in the following Git repository:
[https://github.com/WojciechMazur/Energy-Languages](https://github.com/WojciechMazur/Energy-Languages/tree/feature/scala-develop).

### Results

To visualize better how the languages compare (regardless of the nature of 
the benchmarks), we normalized the measurements, using C as a baseline.

The figure below shows the normalized average energy consumption for each 
benchmark, for the languages C, Java, and Scala (lower is better):

![](/resources/img/blog/sustainable-scala/c-java-scala-1.png)
![](/resources/img/blog/sustainable-scala/c-java-scala-2.png)

We observe that the Scala benchmarks were sometimes consuming a similar 
amount of energy as the C benchmark (this is the case for `binary-trees`, 
`fannkuch-redux`, `fasta`, and `n-body`), and sometimes a significantly higher 
amount of energy (up to 12 times more energy for `regex-redux`).

The figure below shows the same information, but it now includes JavaScript 
and Python:

![](/resources/img/blog/sustainable-scala/c-java-scala-js-python-1.png)
![](/resources/img/blog/sustainable-scala/c-java-scala-js-python-2.png)

Compared to C, the Python benchmarks consumed between 4 to 339 times more 
energy, and the JavaScript benchmarks consumed between 2 to 12 times 
more energy.

Last, the figure below compares C, Java, Scala, and "idiomatic" Scala 
benchmarks:

![](/resources/img/blog/sustainable-scala/c-java-scala-idiomatic-1.png)
![](/resources/img/blog/sustainable-scala/c-java-scala-idiomatic-2.png)

For some benchmarks, the idiomatic version performs as well as the optimized 
one (for `binary-trees`, the idiomatic version performs even slightly better 
than the -- supposedly -- optimized one). However, for some other benchmarks,
the idiomatic version consumes significantly more energy than the optimized 
one (up to 7 times more energy for `k-nucleotide`).

## Discussion

Within a language, we observe a high variability between benchmarks (e.g., 
Python consumed between 4 to 300 times more energy than C, depending on 
which benchmark we look at). This makes it hard to draw general conclusions 
like "language X consumes N times more energy than language Y". That being 
said, we believe that computing, for every language, their average energy 
consumption relative to C provides an order of magnitude of how the 
language may perform. The table below shows the average energy consumption 
relative to C, as well as the standard deviation:

| Language | Average energy consumption (normalized) | Standard Deviation |
|---|---|---|
| C | 1.00 | 0.00 |
| Java | 2.04 | 1.45 |
| **Scala** | **3.71** | **3.67** |
| **Scala (idiomatic)** | **6.99** | **4.87** |
| JavaScript | 7.63 | 3.62 |
| Python | 89.33 | 113.79 |

A similar table was shown by Rui Pereira _et. al_ [^4]. While we did not get 
exactly the same numbers, the orders of magnitude remain the same.

We now have an answer to our initial question, “where does Scala 
stand in the picture?” According to these benchmarks, Scala is well positioned 
within high-level programming languages.

Also, we see that in Scala, two implementations of the same benchmark can 
easily show different performances, depending on your code style. For 
instance, the energy consumption of the `k-nucleotide` benchmark was between 
2 to 13 times higher than the C implementation. The differences between both 
versions are mainly the usage of immutable Scala collections and `for` loops in 
the idiomatic version, as opposed to `Array`s and `while` loops in the 
optimized version (this observation is consistent with the results of 
another study ran by Rui Pereira _et. al._ [^5]).

We believe that the fact that Scala embraces several programming paradigms 
is a strength. It makes it easy to write high-level code that reads well, 
and it also makes it easy to write low-level code that performs well.

## Next steps

This work measured the performance of Scala on the JVM platform only. What 
about Scala.js and Scala Native? Including those platforms could be 
achieved in a follow-up study.

The Scala Center started this work to get a first rough idea of what it 
entails to reduce the GHG emissions of running software written in Scala, 
but also, and more importantly, to see if there is any interest from 
companies that use Scala into consolidating the methodology and [tools] to 
reach their [sustainable development goals]. Please get in touch with
[us](mailto:scala@epfl.ch?subject=Sustainable%20Scala) if you want to be 
part of it!

[^1]: The Shift Project. (2021, March). Impact environnemental du numérique. https://theshiftproject.org/article/impact-environnemental-du-numerique-5g-nouvelle-etude-du-shift/
[^2]: Freitag, C., Berners-Lee, M., Widdicks, K., Knowles, B., Blair, G., & Friday, A. (2021). The climate impact of ICT: A review of estimates, trends and regulations. arXiv preprint arXiv:2102.02622.
[^3]: Gupta, U., Kim, Y. G., Lee, S., Tse, J., Lee, H. H. S., Wei, G. Y., ... & Wu, C. J. (2021, February). Chasing Carbon: The Elusive Environmental Footprint of Computing. In 2021 IEEE International Symposium on High-Performance Computer Architecture (HPCA) (pp. 854-867). IEEE.
[^4]: Rui Pereira, Marco Couto, Francisco Ribeiro, Rui Rua, Jácome Cunha, João Paulo Fernandes, and João Saraiva. 2017. Energy efficiency across programming languages: how do energy, time, and memory relate? In Proceedings of the 10th ACM SIGPLAN International Conference on Software Language Engineering (SLE 2017). Association for Computing Machinery, New York, NY, USA, 256–267. DOI:https://doi.org/10.1145/3136014.3136031
[^5]: Pereira, R., Couto, M., Ribeiro, F., Rua, R., Cunha, J., Fernandes, J. P., & Saraiva, J. (2021). Ranking programming languages by energy efficiency. Science of Computer Programming, 205, 102609.

[climate experts]: https://www.ipcc.ch/sr15/chapter/spm/
[energy-efficiency-languages]: https://sites.google.com/view/energy-efficiency-languages
[energy-language-repo]: https://github.com/greensoftwarelab/Energy-Languages
[Computer Language Benchmarks Game]: https://benchmarksgame-team.pages.debian.net/benchmarksgame/
[old Scala implementations]: https://salsa.debian.org/benchmarksgame-team/archive-alioth-benchmarksgame/-/tree/master/contributed-source-code/benchmarksgame
[perf tools]: https://en.wikipedia.org/wiki/Perf_(Linux)
[Netflix]: https://about.netflix.com/en/news/net-zero-nature-our-climate-commitment
[Zalando]: https://corporate.zalando.com/en/newsroom/news-stories/zalando-goes-carbon-neutral
[Stripe]: https://stripe.com/blog/first-negative-emissions-purchases
[JVM-based runner]: https://github.com/WojciechMazur/Energy-Languages/blob/cd9a9d6d8e40911af6f823b1ecc4f6173c51c36c/Scala/sRAPL/sRAPL.scala#L9-L26
[jRAPL]: https://github.com/WojciechMazur/jRAPL
[tools]: https://github.com/WojciechMazur/Energy-Languages/blob/7cf02bffe6d3b9af39f23e1d0edc0cb24c1e450c/Scala/sRAPL/sRAPL.scala
[sustainable development goals]: https://www.un.org/sustainabledevelopment/
