---
layout: page
title: What is Scala?
---
Scala is an elegant general-purpose programming language on the JVM. As a programmer Scala allows you to express your thoughts in an easy way and thereby makes programming fun again. As a project manager Scala 
makes your developers significantly more productive. Scala is designed for building scalable and reliable applications. You can bet your company on Scala, its community and its ecosystem. Twitter, FourSquare, 
LinkedIn, UBS and many others do. It is fully compatible with your existing Java code base and allows for co-existence or smooth, gradual migration. Typesafe, "the Scala Company" provides commercial support.

Scala gets its outstanding qualities from its unique combination of features, some of which we introduce here.

##Type-safety, concise syntax and type inference
Scala's clean syntax reminds of dynamic languages like Python. Unlike those languages it provides strong type-safety like Java, but unlike Java, Scala does not require you to write down the types yourself. The 
compiler is smart enough to figure them out for you from the context using a technique called type-inference. Scala code is usually smaller than equivalent Java code by a factor of two.

    // define a variable l and assign a list of integers. Type List[Int] of l is inferred automatically.
    var l = List( 1, 2, 3, 4 )

    // a common pattern: define a class with a primary constructor and assign its arguments to public members
    class Person( var name : String, var age : Int )
    val p = new Person( "John Doe", 34 )
    println( s"${p.name} is ${p.age} years old" ) // this uses string interpolation


##Fusion of object-orientation and functional programming
Scala allows you to choose from both worlds and combine them in smart ways. For example, you can structure your software architecture in an object-oriented way, while writing your algorithms and APIs using the 
appeal of functional programming. Scala offers familiar features like polymorphism, inheritance, sanely restricted multiple-inheritance, higher-order functions, pattern matching and a lot more. A good example of 
the fusion is Scala's collection library. Instead of writing loops over the elements to change them or assign them to a new collection, Scala allows you to express those changes in a more compact way as 
transformations:

    var employees = List( new Person( "Frank", 18 ), new Person( "Joachim", 62 ), new Person( "Maria", 48 ), new Person( "Lisa", 36 ) )

    // name and age of all people above 21 in order of their age.
    employees.filter( p => p.age > 21 )
             .sortBy( p => p.age )
             .map   ( p => s"${p.name} is ${p.age} years old" )
             .mkString(". ")
    // results in "Lisa is 36 years old. Maria is 48 years old. Joachim is 62 years old"


##Immutability
Scala allows you to be mutable, whenever you want, but gives you the tools to enforce immutability to eliminate mutability side-effects as a source of bugs. Scala offers immutable variables and a rich library of 
immutable collection classes. Methods like add, remove or filter leave the original collection untouched and return an adjusted copy instead. Thereby, if you pass an immutable collection to a method you can be certain that this 
method does not change it in any way.

    val x = 5 // val prevents reassignment, use var instead to get a mutable variable

    // filter just returns a modified copy, it does not change the original
    assert( employees.size == 4 )
    assert( (employees :+ p).size == 5 )
    assert( employees.filter( p => p.age > 21 ).size == 3 )
    assert( employees.size == 4 )

##Parallelization and Distribution
Scala provides innovative solutions to the software parallelization and distribution problem. In the following the `.par` method converts the employees into a parallel collection, which makes the subsequent map 
call to be executed in parallel on your different cores. Scala's parallel collections use smart, adaptive algorithms to provide a performant distribution.

    scala> { val t = System.nanoTime
         |   val r = employees.par.map ( p => { /* work */ Thread.sleep(1000); p.age } ).sum
         |   println( f"${(System.nanoTime-t)/1e6}%.1fms used" ); r
         | }
    1004.1ms used
    res0: Int = 164

The popular Akka library offers an enterprise-grade message passing implementation for parallel and distributed computing. It is inspired by Erlang's well respected actor model and is often a better alternative 
to manual handling of shared memory and the debugging challenges that come with it.

##DSLs
Scala allows libraries to be embedded deeply into Scala, feeling very close to having language support. This provides a very good basis for creating domain specific languages embedded into and interacting with a 
fully-fledged programming language. For example, the message-passing actors library defines a method `receive` to handle incoming messages. The following example shows, that it feels just like a control structure 
supported by the language when it is actually purely library defined.

    receive {
      case SomeMessage      => doSomething()
      case SomeOtherMessage => doSomethingElse()
    }

The BDD library specs allows you to write specifications using legal Scala code, such as the following.

    class helloWorld extends Specification {
      "'hello world' matches 'h.* w.*'" in {
         "hello world" must be matching("h.* w.*")
      }
    }

In Scala libraries can even perform compile-time checks to guarantee certain properties statically, either using Scala's implicit arguments or the new experimental macros feature in Scala 2.10.
