---
shortTitle: "Higher-order functions"
shortDescription: "Functions are first-class objects. Compose them with guaranteed type safety. Use them anywhere, pass them to anything."
scastieUrl:
---
<div class="wrap">
              <div class="scala-text scala-text-large">
                <h3>Go Functional with Higher-Order Functions</h3>
                <p>In Scala, functions are values, and can be defined as anonymous functions
  with a concise syntax.</p>
              </div>
              <div class="scala-code">
                <div class="code-element dark">
                  <div class="bar-code"><span>Scala</span></div>
                  <pre><code>val people: Array[Person]

// Partition `people` into two arrays `minors` and `adults`.
// Use the anonymous function `(_.age &lt; 18)` as a predicate for partitioning.
val (minors, adults) = people partition (_.age &lt; 18)</code></pre>
                </div>
              </div>
              <div class="scala-code">
                <div class="code-element dark">
                  <div class="bar-code"><span>Java</span></div>
                  <pre><code>List&lt;Person&gt; people;

List&lt;Person&gt; minors = new ArrayList&lt;Person&gt;(people.size());
List&lt;Person&gt; adults = new ArrayList&lt;Person&gt;(people.size());
for (Person person : people) {
    if (person.getAge() &lt; 18)
        minors.add(person);
    else
        adults.add(person);
}</code></pre>
                </div>
              </div>
              </div>
