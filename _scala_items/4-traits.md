---
shortTitle: "Traits"
shortDescription: "Combine the flexibility of Java-style interfaces with the power of classes. Think principled multiple-inheritance."
scastieUrl: 
---
{% comment %}
Borrowed from
https://gleichmann.wordpress.com/2009/10/21/scala-in-practice-composing-traits-lego-style/
{% endcomment %}
<div class="wrap">
                                <div class="scala-code">
                                    <div class="code-element">
                                        <div class="bar-code"><span>Traits</span></div>
                                        <pre><code>abstract class Spacecraft {
  def engage(): Unit
}
trait CommandoBridge extends Spacecraft {
  def engage(): Unit = {
    for (_ &lt;- 1 to 3)
      speedUp()
  }
  def speedUp(): Unit
}
trait PulseEngine extends Spacecraft {
  val maxPulse: Int
  var currentPulse: Int = 0
  def speedUp(): Unit = {
    if (currentPulse &lt; maxPulse)
      currentPulse += 1
  }
}
class StarCruiser extends Spacecraft
                     with CommandoBridge
                     with PulseEngine {
  val maxPulse = 200
}</code></pre>
                                    </div>
                                </div>
                                <div class="scala-text">
                                    <h3>Flexibly Combine Interface &amp; Behavior</h3>
                                    <p>
In Scala, <i>multiple traits</i> can be mixed into a class to combine their interface and their
behavior.</p>
<p>Here, a <code>StarCruiser</code> is a <code>Spacecraft</code> with a <code>CommandoBridge</code> that knows how to
engage the ship (provided a means to speed up) and a <code>PulseEngine</code> that
specifies how to speed up.
</p>
                                </div>
                            </div>