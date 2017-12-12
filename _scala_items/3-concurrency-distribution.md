---
shortTitle: "Concurrency & Distribution"
shortDescription: "Use data-parallel operations on collections, use actors for concurrency and distribution, or futures for asynchronous programming."
---
<div class="wrap">
  <div class="scala-code">
    <div class="code-element">
      <div class="bar-code"><span>Concurrent/Distributed</span></div>
      <script src="https://scastie.scala-lang.org/VOzeye3rTl2uLhgWWLixSw.js?theme=dark"></script>
    </div>
  </div>
  <div class="scala-text">
    <h3>Go Concurrent or Distributed with Futures &amp; Promises</h3>
    <p>In Scala, futures and promises can be used to process data <i>asynchronously</i>, making it easier to parallelize or even distribute your application.</p>
    <p>In this example, the <code>Future{}</code> construct evaluates its argument asynchronously and returns a handle to the asynchronous result as a <code>Future[Int]</code>. For-comprehensions can be used to register new callbacks (to post new things to do) when the future is completed, i.e., when the computation is finished. And since all this is executed asynchronously, without blocking, the main program thread can continue doing other work in the meantime.</p>
  </div>
</div>

{% comment %}
import scala.concurrent._
implicit val executor = 
  ExecutionContext.global

val x: Future[Int] = Future {
  someExpensiveComputation() 
}
val y: Future[Int] = Future {
  someOtherExpensiveComputation() 
}

val z = for (a <- x; b <- y) yield a * b

for (c <- z) println("Result: " + c)

println("Meanwhile, the main thread goes on!")

def someExpensiveComputation(): Int = {
  Thread.sleep(10)
  42
}

def someOtherExpensiveComputation(): Int = {
  Thread.sleep(20)
  1
}
{% endcomment %}