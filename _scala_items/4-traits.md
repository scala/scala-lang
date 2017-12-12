---
shortTitle: "Traits"
shortDescription: "Combine the flexibility of Java-style interfaces with the power of classes. Think principled multiple-inheritance."
---


<div class="wrap">
  <div class="scala-code">
    <div class="code-element">
      <div class="bar-code"><span>Traits</span></div>
      <script src="https://scastie.scala-lang.org/1SxcBd5BQkyw1t9nyhQOdg.js?theme=dark"></script>
    </div>
  </div>
  <div class="scala-text">
    <h3>Flexibly Combine Interface &amp; Behavior</h3>
    <p>In Scala, <i>multiple traits</i> can be mixed into a class to combine their interface and their behavior.</p>
    <p>Here, a <code>StarCruiser</code> is a <code>Spacecraft</code> with a <code>CommandoBridge</code> that knows how to engage the ship (provided a means to speed up) and a <code>PulseEngine</code> that specifies how to accelerate.</p>
  </div>
</div>

{% comment %}
// Borrowed from http://gleichmann.wordpress.com/2009/10/21/scala-in-practice-composing-traits-lego-style/

abstract class Spacecraft {
  def engage(): Spacecraft
}

trait CommandoBridge
  extends Spacecraft {

  def engage(): Spacecraft = {
    for (_ <- 1 to 3)
      speedUp()
    
    this
  }
  def speedUp(): Spacecraft
}

trait PulseEngine extends Spacecraft {
  val maxPulse: Int
  var currentPulse: Int = 0
  def speedUp(): Spacecraft = {
    if (currentPulse < maxPulse)
      currentPulse += 1
    
    this
  }
}
class StarCruiser extends Spacecraft
                     with CommandoBridge
                     with PulseEngine {
  val maxPulse = 200
                       
  override def toString: String = s"StarCruiser ($currentPulse/$maxPulse)"
}

val cruiser = new StarCruiser

println(cruiser)
println(cruiser.engage())
println(cruiser.speedUp())
println(cruiser.currentPulse)
{% endcomment %}