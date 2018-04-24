---
layout: blog-detail
post-type: blog
by: Janek Bogucki
title: "Introducing Scaladoc Tables"
---

TODO: Add release version

Scala 2.12.?? adds support for defining tables in Scaladoc comments.

### A Simple Example

This table includes all three aspects a table can have,

 - A caption
 - A header row
 - Some content rows

```
{|
|+Collections
!Trait!Implementations!
|Set|HashSet, HashTrieSet|
|Seq|List, Vector, Empty|
|Map|HashTrieMap, ListMap|
|}
```

<img alt="Example Table 1"
     src="/resources/img/blog/scaladoc-tables/example-table-1.png">

### Header Cells, Content Cells

TODO: Mention inline styles.

Cell content supports the standard inline styling syntax including bold, italic, monospace, underline, superscript, subscript and links.

Using multiline support you can also use paragraph breaks.

### Table Captions

TODO

### Multiline Content

Scaladoc table markdown allows you to include cell content spread over multiple lines with paragraphs breaks. The key here is the use of cell delimiter \| as a trailing terminator.

```
{|
!Title!ISBN!Authors!
|Structured Programming|0-12-200550-3|Dahl
                                          
Dijkstra
                                          
Hoare|
|Purely functional data structures
                                          
Cambridge University Press, 1998
|0-521-66350-4|Okasaki|
|}
```

<img alt="Example Table 1"
     src="/resources/img/blog/scaladoc-tables/example-table-3.png">

### Including Cell Markdown In Content

Content cells are bracketed by \| characters. What do you do if you want to include \| in your content?

The answer is simple. Redefine the cell delimitation markdown by repeating \| as many times as necessary at the start of the line.

```
{|
!   Syntax               !   Example !
||  Bitwise AND          ||  val flags = PRIVATE | PROTECTED | LOCAL ||
||| Logical shortcircuit ||| i < 0 || i > 10 |||
|}
```

The proof of the dog food is in the eating,

<img alt="Including cell separator in cell content"
     src="/resources/img/blog/scaladoc-tables/example-table-4.png">

In the bitwise example we need to show \| so we define the cell markdown to be \|\|, and to avoid \|\|
being parsed as cell markdown we define as \|\|\|.

The same approach works for header cells as shown here,

```
{|
!! Library !! Secret Tip! !!
| content  |  content |
| content  |  content |
|}
```

Header cells are separated by ! instead of \|.

BTW, the is no requirement to align header and cell markdown. This is done in the examples
to make them easier to scan.

For a smorgasbord of examples take a look at [examples](http://janekdb.github.io/scala/PR-6043/scala/test/scaladoc/tables/code/index.html)

<img alt="Example Table 2"
     src="/resources/img/blog/scaladoc-tables/example-table-2.png">


### TODO

 - Cell content limitations
 - Requirement to block markdown to left margin
 - Areas for improvement

### How can I help?

Try using Scaladoc tables and share your feedback on [Discourse/Documentation](https://users.scala-lang.org/c/documentation).


### What's next for Scaladoc tables

 - Support for code blocks in cells
 - Per column alignment options
 - Column and row merging


