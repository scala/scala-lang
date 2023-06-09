---
optionId: data-definitions
scastieLink: 'https://scastie.scala-lang.org/VcczUlAVT8mHTl7tpGmiJg'
codeTitle: 'Define data types and pattern match on them with ease'
description: "Model domains precisely, and make choices based on the shape of data."
---

```scala
enum Payment:
  case Card(name: String, digits: Long, expires: Date)
  case PayPal(email: String)

def process(kind: Payment) = kind match
  case Card(name, digits, expires) =>
    s"Processing credit card $name, $digits, $expires"
  case PayPal(email) =>
    s"Processing PayPal account $email"

process(Card(name, digits, expires))
```
