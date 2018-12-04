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
                <div class="code-element">
                  <div class="bar-code"><span>Scala</span></div>
                  <pre><code>val people: Array[Person]

// Partition `people` into two arrays `minors` and `adults`,
// using the anonymous function `(_.age &lt; 18)` as
// a predicate for partitioning.
val (minors, adults) = people.partition(_.age &lt; 18)</code></pre>
                </div>
              </div>
              <div class="scala-code">
                <div class="code-element">
                  <div class="bar-code"><span>Java</span></div>
                  <pre><code>List&lt;Person&gt; people;

Map&lt;Boolean, List&lt;Person&gt;&gt; result =
    people.stream().collect(Collectors.partitioningBy(p -&gt; p.age &lt; 18));
List&lt;Person&gt; minors = result.get(Boolean.TRUE);
List&lt;Person&gt; adults = result.get(Boolean.FALSE);</code></pre>
                </div>
              </div>
</div>
