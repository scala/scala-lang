---
shortTitle: "Seamless Java Interop"
shortDescription: "Scala runs on the JVM, so Java and Scala stacks can be freely mixed for totally seamless integration."
scastieUrl:
---
<div class="wrap">
  <div class="scala-code">
    <div class="code-element dark">
      <div class="bar-code"><span>Author.scala</span></div>
      <pre><code>class Author(val firstName: String,
    val lastName: String) extends Comparable[Author] {

  override def compareTo(that: Author) = {
    val lastNameComp = this.lastName compareTo that.lastName
    if (lastNameComp != 0) lastNameComp
    else this.firstName compareTo that.firstName
  }
}

object Author {
  def loadAuthorsFromFile(file: java.io.File): List[Author] = ???
}</code></pre>
    </div>
    <div class="code-element dark">
      <div class="bar-code"><span>App.java</span></div>
      <pre><code>import static scala.collection.JavaConversions.asJavaCollection;

public class App {
    public List&lt;Author&gt; loadAuthorsFromFile(File file) {
        return new ArrayList&lt;Author&gt;(asJavaCollection(
            Author.loadAuthorsFromFile(file)));
    }

    public void sortAuthors(List&lt;Author&gt; authors) {
        Collections.sort(authors);
    }

    public void displaySortedAuthors(File file) {
        List&lt;Author&gt; authors = loadAuthorsFromFile(file);
        sortAuthors(authors);
        for (Author author : authors) {
            System.out.println(
                author.lastName() + ", " + author.firstName());
        }
    }
}</code></pre>
    </div>
  </div>
  <div class="scala-text">
    <h3>Combine Scala and Java seamlessly</h3>
    <p>Scala classes are ultimately JVM classes. You can create Java objects, call
their methods and inherit from Java classes transparently from Scala.
Similarly, Java code can reference Scala classes and objects.</p>
<br/>
<p>
In this example, the Scala class <code>Author</code> implements the Java
interface <code>Comparable&lt;T&gt;</code> and works with Java
<code>File</code>s. The Java code uses a method from the companion object
<code>Author</code>, and accesses fields of the <code>Author</code> class.
It also uses <code>JavaConversions</code> to convert between Scala collections
and Java collections.
</p>
  </div>
</div>
