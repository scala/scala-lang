---
shortTitle: "Concurrency & Distribution"
shortDescription: "Use data-parallel operations on collections, use actors for concurrency and distribution, or futures for asynchronous programming."
scastieUrl: 
---
<div class="wrap">
                                <div class="scala-code">
                                    <div class="code-element">
                                        <div class="bar-code"><span>Concurrent/Distributed</span></div>
                                        <pre><code>val x = Future { someExpensiveComputation() }
val y = Future { someOtherExpensiveComputation() }
val z = for (a &lt;- x; b &lt;- y) yield a*b
for (c &lt;- z) println("Result: " + c)
println("Meanwhile, the main thread goes on!")</code></pre>
                                    </div>
                                </div>
                                <div class="scala-text">
                                    <h3>Go Concurrent or Distributed with Futures &amp; Promises</h3>
                                    <p>In Scala, futures and promises can be used to process data <i>asynchronously</i>, making it easier to parallelize or even distribute your application.</p>
<p>
In this example, the <code>Future{}</code> construct evaluates its argument asynchronously, and returns
a handle to the asynchronous result as a <code>Future[Int]</code>.
For-comprehensions can be used to register new callbacks (to post new things to do) when the future is
completed, i.e., when the computation is finished.
And since all this is executed asynchronously, without blocking, the main
program thread can continue doing other work in the meantime.
</p>
                                </div>
                            </div>
