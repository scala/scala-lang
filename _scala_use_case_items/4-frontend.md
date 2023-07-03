---
shortTitle: "Frontend Web"
shortDescription: "Reactive UI's backed by types. Use the same Scala libraries across the stack. Integrate with the JavaScript library and tooling ecosystem."
expandText: "build for frontend"
anchorTarget: "explore-scalajs"
icon: "icon8.svg"
---

<div class="scala-row">
    <div class="scala-code">
        <div class="scala-text scala-text-large">
            <h3>Portable Code and Libraries</h3>
            <p class="emph">Write the code once and have it run on the frontend as well as on the backend.</p>
            <p>Reuse the same libraries and testing frameworks on both sides. Write API endpoints that are typechecked across the stack.</p>
            <p>For example: define your data model in a shared module. Then use <a href="https://github.com/softwaremill/sttp" target="_blank" rel="none">sttp</a> to send data to the backend, all while <a href="https://github.com/com-lihaoyi/upickle" target="_blank" rel="none">upickle</a> handles seamless conversion to JSON, and also reads JSON back into your model on the backend.</p>
            <a class="button button_call-to-action" href="https://index.scala-lang.org/search?languages=3.x&languages=2.13&platforms=sjs1&q=*" target="_blank" rel="none">More Scala.js libraries and frameworks</a>
        </div>
    </div>
    <div class="scala-code">
        <div class="code-element dark">
            <div class="bar-code"><span>Share your model code with frontend and backend</span></div>
            <pre><code class="language-scala">enum Pet derives upickle.ReadWriter:
  case Dog(id: UUID, name: String, owner: String)
  case Cat(id: UUID, name: String, owner: String)</code></pre>
            <hr class="code-separator"/>
            <pre><code class="language-scala">// Send an HTTP request to the backend with sttp
val dog = Dog(uuid, name, owner)
val response = quickRequest
  .patch(uri"${site.root}/petstore/$uuid")
  .body(dog)
  .send()
response.onComplete { resp => println(s"updated $dog") }</code></pre>
        </div>
    </div>
</div>
<div class="scala-row">
    <div class="scala-code">
        <div class="scala-text scala-text-large">
            <h3>Interoperability with JavaScript</h3>
            <p class="emph">Call into JS libraries from the npm ecosystem, or export your Scala.js code to other JS modules. Integrate with Vite for instant live-reloading.</p>
            <p>Leverage the JavaScript ecosystem of libraries. Use <a href="https://scalablytyped.org/" target="_blank" rel="none">ScalablyTyped</a> to generate types for JavaScript libraries from TypeScript definitions.</p>
            <a class="button button_call-to-action" href="http://www.scala-js.org/libraries/facades.html" target="_blank" rel="none">Scala.js facades for popular JavaScript libraries</a>
        </div>
    </div>
    <div class="scala-code">
        <div class="code-element dark">
            <div class="bar-code"><span>React component written with Slinky</span></div>
            <pre><code class="language-scala">val Counter = FunctionalComponent[Int] { initial =>
  val (count, setCount) = useState(initial)
  button(onClick := { event => setCount(count + 1) },
    s"You pressed me ${count} times"
  )
}
ReactDOM.render(Counter(0), mountNode)</code></pre>
        </div>
    </div>
</div>
<div class="scala-row">
    <div class="scala-code">
        <div class="scala-text scala-text-large">
            <h3>Poweful User Interface Libraries</h3>
            <p class="emph">Write robust UIs with the Scala.js UI libraries.</p>
            <p>Pick your preferred style: <a href="https://laminar.dev" target="_blank" rel="none">Laminar</a> for a pure Scala solution, <a href="https://slinky.dev" target="_blank" rel="none">Slinky</a> for the React experience, or <a href="https://tyrian.indigoengine.io" target="_blank" rel="none">Tyrian</a> or <a href="https://github.com/japgolly/scalajs-react" target="_blank" rel="none">scalajs-react</a> for the pure FP-minded developers.</p>
            <a class="button button_call-to-action" href="https://index.scala-lang.org/awesome/web-frontend?sort=stars&languages=3.x&languages=2.13&platforms=sjs1" target="_blank" rel="none">See more Scala.js libraries for frontend and UI</a>
        </div>
    </div>
    <div class="scala-code">
        <div class="code-element dark">
            <div class="bar-code"><span>Manage state with Tyrian using the Elm architecture</span></div>
            <pre><code class="language-scala">def view(count: Int): Html[Msg] =
  button(onClick(Msg.Increment))(
    s"You pressed me ${count} times"
  )

def update(count: Int): Update[Msg, Int] =
  case Msg.Increment => (count + 1, Cmd.None)
  case _             => (count,     Cmd.None)</code></pre>
        </div>
    </div>
</div>
