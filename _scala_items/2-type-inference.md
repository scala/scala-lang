---
shortTitle: "Type Inference"
shortDescription: "So the type system doesn’t feel so static. Don’t work for the type system. Let the type system work for you!"
---
<div class="wrap">
  <div class="scala-code">
    <div class="code-element">
      <div class="bar-code"><span>Type inference</span></div>
      <script src="https://scastie.scala-lang.org/WXus7JWEQdCkQRVOIrkH1g.js?theme=dark"></script>
    </div>
  </div>
  <div class="scala-text">
    <h3>Let the compiler figure out the types for you</h3>
    <p>The Scala compiler is smart about static types. Most of the time, you need not tell it the types of your variables. Instead, its powerful type inference will figure them out for you.</p>
  </div>
</div>

{% comment %}
val answer = 42

println(answer)

case class MyPair[A, B](x: A, y: B)

val myPair = MyPair(1, "scala")

println(myPair)
{% endcomment %}