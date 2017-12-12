---
shortTitle: "Higher-order functions"
shortDescription: "Functions are first-class objects. Compose them with guaranteed type safety. Use them anywhere, pass them to anything."
---
<div class="wrap">
  <div class="scala-code">
    <div class="code-element">
      <div class="bar-code"><span>Scala</span></div>
      <script src="https://scastie.scala-lang.org/h9lbdn87Qc20m04uKlcAug.js?theme=dark"></script>
    </div>
  </div>
  <div class="scala-text scala-text-large">
    <h3>Go Functional with Higher-Order Functions</h3>
    <p>In Scala, functions are values and can be defined as anonymous functions with a concise syntax.</p>
  </div>
</div>

{% comment %}
case class Person(
  name: String,
  age: Int
)

val people = 
  List(
    Person("Alice Foo", 11),
    Person("Bob Foo", 12),
    Person("Ted Bar", 35),
    Person("Eve Baz", 16),
    Person("Olivia Qux", 86)
  )

val (minors, adults) = people.partition(_.age < 18)

println(minors)

println(adults)
{% endcomment %}