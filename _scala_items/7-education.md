---
shortTitle: "Ideal for teaching"
shortDescription: "Scala is ideal for teaching programming to beginners as well as for teaching advanced software engineering courses."
---

<div class="wrap">
  <div class="scala-text scala-text-large">
    <h3>Readable and Versatile</h3>
    <p>
      Most of the concepts involved in software design directly map
      into Scala constructs. The concise syntax of Scala allows the teachers
      and the learners to focus on those interesting concepts without dealing
      with tedious low-level implementation issues.
    </p>
    <p>
      The example in file <code>HelloWorld.scala</code> below shows how a “hello
      world” program looks like in Scala. In <code>Modeling.scala</code>, we show an
      example of structuring the information of a problem domain in Scala. In
      <code>Modules.scala</code>, we show how straightforward it is to implement software modules with Scala classes. Last, in <code>Algorithms.scala</code>, we show how the
      standard Scala collections can be leveraged to implement algorithms with
      few lines of code.
    </p>
    <p>
      Learn more in the dedicated page about
      <a href="{% link teach.md %}">Teaching</a>.
    </p>
  </div>

  <div class="scala-code">

    <div class="code-element dark">
      <div class="bar-code"><span>HelloWorld.scala</span></div>
      <pre><code>@main def run() = println("Hello, World!")</code></pre>
    </div>

    <div class="code-element dark">
      <div class="bar-code"><span>Modules.scala</span></div>
      <pre><code>// A module that can access the data stored in a database
class DatabaseAccess(connection: Connection):
  def readData(): Seq[Data] = ???

// An HTTP server, which uses the `DatabaseAccess` module
class HttpServer(databaseAccess: DatabaseAccess):
  // The HTTP server can call `readData`, but it cannot
  // access the underlying database connection, which is
  // an implementation detail
  databaseAccess.readData()</code></pre>
    </div>

  </div>

  <div class="scala-code">

    <div class="code-element dark">
      <div class="bar-code"><span>Modeling.scala</span></div>
      <pre><code>/** A Player can either be a Bot, or a Human.
  * In case it is a Human, it has a name.
  */
enum Player:
  case Bot
  case Human(name: String)</code></pre>
    </div>

    <div class="code-element dark">
      <div class="bar-code"><span>Algorithms.scala</span></div>
      <pre><code>// Average number of contacts a person has according to age
def contactsByAge(people: Seq[Person]): Map[Int, Double] =
  people
    .groupMap(
      person => person.age
    )(
      person => person.contacts.size
    )
    .map((age, contactCounts) =>
      val averageContactCount =
        contactCounts.sum.toDouble / contactCounts.size
      (age, averageContactCount)
    )</code></pre>
    </div>

  </div>
</div>
