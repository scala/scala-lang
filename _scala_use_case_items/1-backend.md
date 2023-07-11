---
shortTitle: "Server-side"
shortDescription: "High-throughput HTTP servers and clients. Safe, scalable, and principled concurrency. Reliable data validation with powerful transformations."
expandText: "Creating Services"
anchorTarget: "creating-services"
icon: "icon5.svg"
---

<div class="scala-row">
  <div class="scala-code">
      <div class="scala-text scala-text-large">
          <h3>Principled Concurrency</h3>
          <p class="emph">Scala's expressivity and compiler-enforced safety makes it easier to construct reliable concurrent code.</p>
          <p>With Scala, your programs take full advantage of multi-core and distributed architectures, ensure safe access to resources, and apply back-pressure to data producers according to your processing rate.</p>
          <p>One popular open-source option for managing concurrency in Scala is <a href="https://typelevel.org/cats-effect/" target="_blank" rel="none">Cats Effect</a>, combined with <a href="https://http4s.org" target="_blank" rel="none">http4s</a> for defining servers and routing. Click below to see other solutions.</p>
          <a class="button button_call-to-action" href="https://index.scala-lang.org/awesome#asynchronous-and-concurrent-programming" target="_blank" rel="none">libraries for Concurrency and distribution</a>
      </div>
  </div>
  <div class="scala-code">
      <div class="code-element dark">
          <div class="bar-code"><span>Express high-level concurrency with http4s and Cats Effect</span></div>
          <pre><code class="language-scala">// HTTP server routing definition
val service = HttpRoutes.of:
  case GET -> Root / "weather" => // route '/weather'
    for
      winner   <- fetch1.race(fetch2).timeout(10.seconds)
      response <- Ok(WeatherReport.from(winner))
    yield
      response

def fetch1 = fetchWeather(server1) // expensive Network IO
def fetch2 = fetchWeather(server2) // expensive Network IO
</code></pre>
      </div>
  </div>
</div>
<div class="scala-row">
  <div class="scala-code">
      <div class="scala-text scala-text-large">
          <h3>A Mature Ecosystem of Libraries</h3>
          <p class="emph">Use the best of Scala, or leverage libraries from the Java and JavaScript ecosystems.</p>
          <p>Build with monolithic or microservice architectures. Retain resource-efficiency. Persist your data to any kind of database. Transform, validate, and serialize data into any format (JSON, protobuf, Parquet, etc.).</p>
          <p>Whether you compile for the Node.js or Java platform, Scala's interop with both gives you access to even more widely-proven libraries.</p>
          <a class="button button_call-to-action" href="https://index.scala-lang.org/awesome" target="_blank" rel="none">Find the right library for your next Scala project</a>
      </div>
  </div>
  <div class="scala-code">
      <div class="code-element dark">
          <div class="bar-code"><span>Compute accross distributed nodes with Akka actors</span></div>
          <pre><code class="language-scala">def Device(lastTemp: Option[Double]): Behavior[Message] =
  Behaviors.receiveMessage:
    case RecordTemperature(id, value, replyTo) =>
      replyTo ! TemperatureRecorded(id)
      Device(lastTemp = Some(value))

    case ReadTemperature(id, replyTo) =>
      replyTo ! RespondTemperature(id, lastTemp)
      Behaviors.same
</code></pre>
      </div>
  </div>
</div>
<div class="scala-row">
  <div class="scala-code">
      <div class="scala-text scala-text-large">
          <h3>Case Study: Reusable Code with Tapir</h3>
          <p class="emph">Harness the “Code as Data” Paradigm: define once, use everywhere.</p>
          <p>Scala's rich type system and metaprogramming facilities give the power to automatically derive helpful utilities from your code.</p>
          <p>One such example library is <a href="https://tapir.softwaremill.com/en/latest/#" target="_blank" rel="none">Tapir</a>, letting you use Scala as a declarative language to describe your HTTP endpoints. From this single source of truth, you can automatically derive their server implementation, their client implementation, and both human-readable and machine-readable documentation.</p>
          <p>Because everything is derived from a type-safe definition, endpoint invocations are checked to be safe at compile-time, across the frontend and backend.</p>
          <a class="button button_call-to-action" href="https://tapir.softwaremill.com/en/latest/#" target="_blank" rel="none">Read more in the Tapir docs</a>
      </div>
  </div>

  <div class="scala-code">
      <div class="code-element dark">
          <div class="bar-code"><span>Describe service endpoints as data with Tapir</span></div>
          <pre><code class="language-scala">// type-safe endpoint definition
val reportEndpoint =
  endpoint
    .in("api" / "report" / path[String]("reportId"))
    .out(jsonBody[Report])

// derived Docs, Server and Client
val apiDocs = docsReader
  .toOpenAPI(reportEndpoint, "Fetch Report", "1.0.0")
val server = serverBuilder(port = "8080")
  .addEndpoint(reportEndpoint.handle(fetchReport))
  .start()
val client = clientReader
  .toRequest(reportEndpoint, "http://localhost:8080")
val report: Future[Report] =
  client("5ca1a-78fc8d6") // call like any function</code></pre>
      </div>
  </div>
</div>
