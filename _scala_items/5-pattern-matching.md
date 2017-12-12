---
shortTitle: "Pattern Matching"
shortDescription: "Think “switch” on steroids. Match against class hierarchies, sequences, and more."
---

<div class="wrap">
  <div class="scala-code">
    <div class="code-element">
      <div class="bar-code"><span>Pattern matching</span></div>
      <script src="https://scastie.scala-lang.org/nqnrJN0MT4OHn9ufdz4oOw.js?theme=dark"></script>
    </div>
  </div>
  <div class="scala-text">
    <h3>Switch on the structure of your data</h3>
    <p>In Scala, <em>case classes</em> are used to represent structural data types. They implicitly equip the class with meaningful <code>toString</code>, <code>equals</code> and <code>hashCode</code> methods, as well as the ability to be deconstructed with <em>pattern matching</em>.</p>
    <br/>
    <p>In this example, we define a small set of case classes that represent binary trees of integers (the generic version is omitted for simplicity here). In <code>inOrder</code>, the <code>match</code> construct chooses the right branch, depending on the type of <code>t</code>, and at the same time deconstructs the arguments of a <code>Node</code>.</p>
  </div>
</div>

{% comment %}
// Define a set of case classes
// for representing binary trees.
sealed abstract class Tree
case class Node(
  elem: Int,
  left: Tree,
  right: Tree) extends Tree
case object Leaf extends Tree

// Return the in-order traversal sequence of a given tree.
def inOrder(t: Tree): List[Int] = t match {
  case Node(e, l, r) => inOrder(l) ::: List(e) ::: inOrder(r)
  case Leaf          => List()
}

val tree = Node(9, Node(6, Node(4, Leaf, Leaf), Node(8, Node(7, Leaf, Leaf), Leaf)),Node(14, Leaf, Node(19, Leaf, Leaf)))

/*
      9
    /   \
  6      14
 /  \       \
4    8       19
    /
   7
*/

println(inOrder(tree))
{% endcomment %}