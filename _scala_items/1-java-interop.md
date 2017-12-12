---
shortTitle: "Java Interop"
shortDescription: "Scala runs on the JVM, so Java and Scala stacks can be freely mixed."
---
<div class="wrap">
  <div class="scala-code">
    <div class="code-element">
      <div class="bar-code"><span>A.scala</span></div>
      <script src="https://scastie.scala-lang.org/mtZaEAr8RA2Z3v9bQ75yTw.js?theme=dark"></script>
    </div>
  </div>
  <div class="scala-text">
    <h3>Combine Scala and Java</h3>
    <p>Scala benefits a lot from the java ecosystems and library. It's probably one of the reasons of its widespread adoption. Here we show how to read and write to a file using the Java standard library.</p>
  </div>
</div>

{% comment %}
import scala.collection.JavaConverters._
import java.nio.file._

val content = 
  """Oh noes, here goes annother
    word count example!"""

val myFile = Paths.get("file.txt")

val saved = Files.write(myFile, content.getBytes)

val result = Files.readAllLines(myFile).asScala

val wordCount = result.flatMap(_.split(' ')).size

println("words: " + wordCount)
{% endcomment %}