---
optionId: collections-ops
scastieLink: 'https://scastie.scala-lang.org/S0bkCiXkQiuOMXnlhWn46g'
codeTitle: 'Functional programming with immutable collections'
description: "High-level operations avoid the need for complex and error-prone loops."
---

```scala
val fruits =
  List("apple", "banana", "avocado", "papaya")

val countsToFruits = // count how many 'a' in each fruit
  fruits.groupBy(fruit => fruit.count(_ == 'a'))

for (count, fruits) <- countsToFruits do
  println(s"with 'a' × $count = $fruits")
// prints: with 'a' × 1 = List(apple)
// prints: with 'a' × 2 = List(avocado)
// prints: with 'a' × 3 = List(banana, papaya)
```
