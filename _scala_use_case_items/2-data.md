---
shortTitle: "Data Processing"
shortDescription: "Pick your favorite notebook. Run massively distributed big data pipelines; train NLP or ML models; perform numerical analysis; visualize data and more."
expandText: "Processing data"
anchorTarget: "processing-data"
icon: "icon11.svg"
---

<div class="scala-row">
    <div class="scala-code">
        <div class="scala-text scala-text-large">
            <h3>Big Data Analysis</h3>
            <p class="emph">Analyse petabytes of data in parallel on single-node machines or on clusters.</p>
            <p>Compute either in batches or in real-time. Execute fast, distributed relational operations on your data, or train machine learning algorithms.</p>
            <p>Work with popular storage and computation engines such as <a href="https://spark.apache.org" target="_blank" rel="none">Spark</a>, <a href="https://kafka.apache.org" target="_blank" rel="none">Kafka</a> <a href="https://hadoop.apache.org" target="_blank" rel="none">Hadoop</a>, <a href="https://flink.apache.org" target="_blank" rel="none">Flink</a>, <a href="https://cassandra.apache.org" target="_blank" rel="none">Cassandra</a>, <a href="https://delta.io" target="_blank" rel="none">Delta Lake</a> and more.</p>
            <a class="button button_call-to-action" href="https://index.scala-lang.org/awesome#big-data" target="_blank" rel="none">Libraries for processing big data</a>
        </div>
    </div>
    <div class="scala-code">
        <div class="code-element dark">
            <div class="bar-code"><span>Analyse data across a cluster with Spark</span></div>
            <pre><code class="language-scala">// Count the number of words in a text source
val textFile = sc.textFile("hdfs://...")
val counts = textFile
  .flatMap(line => line.split(" "))
  .map(word => (word, 1))
  .reduceByKey(_ + _)
counts.saveAsTextFile("hdfs://...")</code></pre>
        </div>
    </div>
</div>
<div class="scala-row">
    <div class="scala-code">
        <div class="scala-text scala-text-large">
            <h3>Notebooks</h3>
            <p class="emph">Explore data in web-based notebooks and produce rich, interactive output.</p>
            <p>Combine code, data, and visualizations in a single document. Make changes and instantly see results. Share and collaborate with others.</p>
            <p>Along many cloud-hosted solutions, open-source notebooks for Scala include the <a href="https://almond.sh" target="_blank" rel="none">almond Jupyter kernel</a>, <a href="https://zeppelin.apache.org" target="_blank" rel="none">Zeppelin</a> and <a href="https://polynote.org/latest/" target="_blank" rel="none">Polynote</a>.</p>
            <a class="button button_call-to-action" href="https://index.scala-lang.org/awesome#big-data" target="_blank" rel="none">Libraries for big data and visualisation</a>
        </div>
    </div>
    <div class="scala-code">
        <div class="scala-text scala-text-large">
            <p><img src="/resources/img/frontpage/notebook.png" alt="Notebook" /></p>
            <!-- TODO: change to polynote? -->
            <!-- <p class="image-caption"><a href="https://zeppelin.apache.org" target="_blank" rel="none">Zeppelin</a></p> -->
        </div>
    </div>
</div>
