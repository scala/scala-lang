---
optionId: js-dom-api
scastieLink: 'https://scastie.scala-lang.org/gyNudjdITL2irc9ni0kRxA'
codeTitle: 'Target the Web with Scala.js on the frontend'
description: "Share code full-stack, interact with the DOM or use any JS library."
---

```scala
val counter = Var(0)

// create a counter button that increments on-click
def counterButton() = button(
  tpe := "button",
  "count is ",
  child.text <-- counter,
  onClick --> { event => counter.update(c => c + 1) },
)
val app = dom.document.getElementById("app")
render(app, counterButton())
```
