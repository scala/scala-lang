val people: Array[Person]
val (minors, adults) = people partition (_.age < 18)
