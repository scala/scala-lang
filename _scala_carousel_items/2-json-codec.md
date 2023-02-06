---
optionId: json-codec
scastieLink: 'https://scastie.scala-lang.org/WNnVCqZeR1ufyXxyqsiqag'
codeTitle: "Encode and decode custom data types to JSON"
description: "The pluggable derivation system gives custom types new capabilities."
---

```scala
case class Pet(
  name: String,
  kind: String
) derives Codec // enable coding Pet to and from text

val coco = Pet(name = "Coco", kind = "Cat")

val message = writeJson(coco)
//  ^^^^^^^ contains the text: {"name":"Coco","kind":"Cat"}

readJson[Pet](message) // convert message back to a Pet!
```
