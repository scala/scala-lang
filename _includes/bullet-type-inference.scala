// Define a variable `xs` and assign it a list of integers.
// Type `List[Int]` of `xs` is inferred automatically.
val xs = List(1, 2, 3, 4)

// A common pattern:
// Define a class with a primary constructor and assign its arguments
// to public members.
class Person(val name: String, val age: Int)
val p = new Person("John Doe", 34)
println(s"${p.name} is ${p.age} years old")  // uses string interpolation
