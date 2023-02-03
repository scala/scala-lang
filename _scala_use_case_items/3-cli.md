---
shortTitle: "Command Line"
shortDescription: "Superpower your scripts with the Scala command. Get hands-on with the Scala Toolkit. Easily add libraries. Build CLI apps with instant startup."
expandText: "Building Utilities"
anchorTarget: "build-scala-tools"
icon: "icon4.svg"
---

<div class="scala-row">
    <div class="scala-code">
        <div class="scala-text scala-text-large">
            <h3>The power of Scala in one file</h3>
            <p class="emph">Scala CLI gives all the tools you need to create simple Scala projects.</p>
            <p>Import your favorite libraries, write your code, run it, create unit tests, share it as a gist, or publish it to Maven Central.</p>
            <p>Scala CLI is fast, low-config, works with IDEs, and follows well-known conventions.</p>
            <a class="button button_call-to-action" href="https://scala-cli.virtuslab.org" target="_blank" rel="none">read more on the Scala CLI website</a>
        </div>
    </div>
    <div class="scala-code">
        <div class="code-element dark">
            <div class="bar-code"><span>Create simple scripts and utilities with Scala CLI</span></div>
            <pre><code class="language-scala">//> using dependency com.lihaoyi::os-lib:0.9.1

// Sort all the files by size in the working directory
os.list(os.pwd).sortBy(os.size).foreach(println)</code></pre>
            <hr class="code-separator"/>
            <pre><code class="language-bash">$ scala-cli list_files.sc
/home/user/example/list_files.sc
...</code></pre>
        </div>
    </div>
</div>

<div class="scala-row">
    <div class="scala-code">
        <div class="scala-text scala-text-large">
            <h3>Get productive with the Scala Toolkit</h3>
            <p class="emph">The Scala Toolkit is a good fit for writing a script, prototyping, or bootstrapping a new application.</p>
            <p>Including a selection of approachable libraries to perform everyday tasks, Toolkit helps you work with files and processes, parse JSON, send HTTP requests and unit test code.</p>
            <p>Toolkit libraries work great on the JVM, JS and Native platforms, all while leveraging a simple code style.</p>
            <a class="button button_call-to-action" href="https://docs.scala-lang.org/toolkit/introduction.html" target="_blank" rel="none">find useful snippets in the Toolkit Tutorials</a>
        </div>
    </div>
    <div class="scala-code">
        <div class="code-element dark">
            <div class="bar-code"><span>Make web-requests, encode JSON and write to file</span></div>
            <pre><code class="language-scala">//> using toolkit latest

// A JSON object
val json = ujson.Obj("name" -> "Peter", "age" -> 23)

// Send an HTTP request
import sttp.client4.quick.*
val response = quickRequest
  .put(uri"https://httpbin.org/put")
  .body(ujson.write(json))
  .send()

// Write the response to a file
os.write(os.pwd / "response.json", response.body)</code></pre>
        </div>
    </div>
</div>
<div class="scala-row">
    <div class="scala-code">
        <div class="scala-text scala-text-large">
            <h3>Compile to native, then deploy easily</h3>
            <p class="emph">Package your apps to native binaries for instant startup time.</p>
            <p>Deploy to Docker images, JS scripts, Spark or Hadoop jobs, and more.</p>
            <a class="button button_call-to-action" href="https://scala-cli.virtuslab.org/docs/commands/package" target="_blank" rel="none">other ways to package applications</a>
        </div>
    </div>
    <div class="scala-code">
        <div class="code-element dark">
            <div class="bar-code"><span>Compile natively for instant startup</span></div>
            <pre><code class="language-bash">$ scala-cli --power package \
    --native-image \
    --output my-tool \
    my-tool.sc
Wrote /home/user/example/my-tool, run it with ./my-tool</code></pre>
        </div>
    </div>
</div>
