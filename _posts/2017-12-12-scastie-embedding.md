---
category: blog
by: Guillaume Massé
title: "Announcing Scastie Embedding"
date: 12-12-2017
---

We are excited to announce the availability of a new core feature of Scastie: Embedding.

# What is Scastie?

If you don't know about Scastie yet, here's a recap from our previous announcement.

**Scastie is... Scala + sbt in your browser!** You can:

- use any version of Scala (scalac), or even alternate backends such as Dotty, Scala.js, Scala Native, and Typelevel Scala.
- use any library published on Maven.
- save and share Scala programs/builds with anybody

This is all possible because Scastie is based on sbt, allowing us to support newer
Scala versions and resolve library dependencies on Maven.

Want to see what Scastie can do? Check out this embedding below!

<script src="https://scastie.scala-lang.org/lSGdiSFsQxO1SdqqfN12ug.js"></script>

## How do I embed Scastie in my website/documentation

Since it's possible to use external libraries, Scastie is an excellent tool to add to your library documentation or your blog post. Let's explore the available methods to bootstrap the embedding mode.

You can embed a snippet with two different ways. You can embed a resource that
was previously saved or you can convert code to a snippet.

### Embedded Resources

#### Via HTML

From the Scastie website, once you save a snippet you will have a button that opens some html code you can paste into your document.

<img alt="scastie screenshot" src="/resources/img/blog/scastie-embedded/embedded-button.gif">

Any saved resource can be embedded via a script tag by appending ".js" to its URL.

```html

<!-- Annonymous Resource -->
<script src="https://scastie.scala-lang.org/EdJu5P9fQXK5FXF0aln4zw.js"></script>

<!-- User's Resource -->
<script src="https://scastie.scala-lang.org/MasseGuillaume/KQkojJF7QqC9ShwGtNx7lw.js"></script>
<script src="https://scastie.scala-lang.org/MasseGuillaume/KQkojJF7QqC9ShwGtNx7lw/1.js"></script>
```

The embedding will be inserted at the location of the script tag.

It's also possible to adjust the theme via the GET parameter `theme`. For example:

```html
<script src="https://scastie.scala-lang.org/lSGdiSFsQxO1SdqqfN12ug.js?theme=dark"></script>
```

The theme can be `dark` or `light`. The default value is `light`.

Finally, it's also possible to customize the CSS such that it blends into your website.

Take a look at: [https://codepen.io/MasseGuillaume/pen/oeKoee](https://codepen.io/MasseGuillaume/pen/oeKoee)

#### Via JavaScript

```html

<!-- Embedding Script -->
<div id="resource"></div>
<script src="https://scastie.scala-lang.org/embedded.js"></script>

<script>
window.addEventListener('load', function() {
  scastie.Embedded('#resource', { 
    base64UUID: "Mw37yhwZT72yGvFsHBPktw"
  });
});
</script>
```

Take a look at: [https://codepen.io/MasseGuillaume/pen/aLpzvW](https://codepen.io/MasseGuillaume/pen/aLpzvW)

### Converting Code Into Snippets

It's also possible to convert code into a snippet. The preferred way is to embed
a snippet since it's output is cached. This mode will compile and run the snippet
every time it's accessed.

```html

<pre class="simple">
1 + 1
</pre>

<pre class="scala-js">
import org.scalajs.dom
import org.scalajs.dom.raw.HTMLImageElement

val img = dom.document.createElement("img").asInstanceOf[HTMLImageElement]
img.alt = "such dog" 
img.src = "https://goo.gl/a3Xr41"
img
</pre>

<pre class="full">
  
</pre>

<!-- Embedding Script -->
<script src="https://scastie.scala-lang.org/embedded.js"></script>

<script>
window.addEventListener('load', function() {
  // DOM selector without build options
  scastie.Embedded('.simple');

  // with some options
  scastie.Embedded('.scala-js', { targetType: 'js' });

  // all option
  scastie.Embedded('.full', {
    theme: 'light', // default: 'light'; ('dark' or 'light')
    code: '1 + 1', // default: DOM node content
    worksheetMode: true,
    sbtConfig: 'libraryDependencies += "org.json4s" %% "json4s-native" % "3.5.2"',
    targetType: 'jvm',  // jvm, dotty, typelevel, js
    scalaVersion: '2.12.3'
  });

  // Setting Scala-Native targetType is not yet supported: https://github.com/scalacenter/scastie/issues/50
  // Setting Scala.js version is not yet supported: https://github.com/scalacenter/scastie/issues/228
});
</script>
```

Take a look at: [https://codepen.io/MasseGuillaume/pen/OxbVzm](https://codepen.io/MasseGuillaume/pen/OxbVzm)