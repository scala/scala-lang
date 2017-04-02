---
shortTitle: "Type Inference"
shortDescription: "So the type system doesn’t feel so static. Don’t work for the type system. Let the type system work for you!"
scastieUrl: 
---
<div class="wrap">
                                <div class="scala-code">
                                    <div class="code-element">
                                        <div class="bar-code"><span>Type inference</span></div>
                                        <pre><code>scala> class Person(val name: String, val age: Int) {
     |   override def toString = s"$name ($age)"
     | }
defined class Person

scala> def underagePeopleNames(persons: List[Person]) = {
     |   for (person &lt;- persons; if person.age &lt; 18)
     |     yield person.name
     | }
underagePeopleNames: (persons: List[Person])List[String]

scala> def createRandomPeople() = {
     |   val names = List("Alice", "Bob", "Carol",
     |       "Dave", "Eve", "Frank")
     |   for (name &lt;- names) yield {
     |     val age = (Random.nextGaussian()*8 + 20).toInt
     |     new Person(name, age)
     |   }
     | }
createRandomPeople: ()List[Person]

scala> val people = createRandomPeople()
people: List[Person] = List(Alice (16), Bob (16), Carol (19), Dave (18), Eve (26), Frank (11))

scala> underagePeopleNames(people)
res1: List[String] = List(Alice, Bob, Frank)</code></pre>
                                    </div>
                                </div>
                                <div class="scala-text">
                                    <h3>Let the compiler figure out the types for you</h3>
                                    <p>The Scala compiler is smart about static types. Most of the time, you need
not tell it the types of your variables. Instead, its powerful type inference
will figure them out for you.</p>
<p>
In this interactive REPL session (Read-Eval-Print-Loop), we define a
class and two functions. You can observe that the compiler infers the result
types of the functions automatically, as well as all the intermediate values.
</p>
                                </div>
                            </div>