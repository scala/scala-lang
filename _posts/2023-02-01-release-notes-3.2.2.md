---
category: announcement
permalink: /news/3.2.2
title: "Scala 3.2.2 is now available!"
---
[Scala 3.2.2](https://github.com/lampepfl/dotty/releases/tag/3.2.2) is now available!

This version not only fixes bugs but also brings two new flags:

- `-Vrepl-max-print-characters` allows you to configure how many characters can be printed in the REPL before truncating the output. The default limit was also raised from 1,000 to 50,000 characters.
- `-Ylightweight-lazy-vals` enables new lazy vals implementation. It can be much more performant, especially in cases of parallel access. However, it can cause problems when used inside of GraalVM native image. We will make the new implementation the default one as soon as we fix those problems.

## Contributors

Thank you to all the contributors who made the release of 3.2.2 possible 🎉

According to `git shortlog -sn --no-merges 3.2.1..3.2.2`, they are:

```
    86 Martin Odersky
    24 Yichen Xu
    23 Quentin Bernet
    19 Dale Wijnand
    18 Michael Pollmeier
    13 Paweł Marks
     8 Fengyun Liu
     7 Guillaume Raffin
     7 Som Snytt
     6 Szymon Rodziewicz
     5 Kacper Korban
     4 Chris Kipp
     3 Matt Bovel
     3 Rikito Taniguchi
     2 Ben Hutchison
     2 Florian3k
     2 Guillaume Martres
     2 Jamie Thompson
     2 João Costa
     2 Julien Richard-Foy
     2 Lukas Rytz
     2 Sébastien Doeraene
     1 Anton Sviridov
     1 Gabriel Volpe
     1 Liang Yan
     1 Noah Rosamilia
     1 Ondra Pelech
     1 Seth Tisue
     1 Tomasz Godzik
     1 Vadim Chelyshov
     1 nmc.borst
     1 nmcb
     1 olsdavis
```
