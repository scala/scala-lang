---
layout: blog-detail
post-type: blog
by: Janek Bogucki
title: "Introducing Scaladoc Tables"
---

Scala 2.12.7 adds support for markdown tables in Scaladoc comments.

### A Simple Example

The markdown for tables follows [GitHub Flavored Markdown](https://github.github.com/gfm/) with some restrictions.

This table shows all three available table elements,

```
| Trait | Implementations |
| ---   | ---             |
| Set   | HashSet, HashTrieSet |
| Seq   | List, Vector, Empty  |
| Map   | HashTrieMap, ListMap |
```

A table is comprised of,

 - A header row
 - A delimiter row
 - Zero or more data rows

This is how the above markdown renders,

![Example Table 1](/resources/img/blog/scaladoc-tables/example-table-1.png)

On an incidental note, there is no requirement to align header and cell markdown pipes. This is done in the examples
to make them easier to scan.

### GitHub Flavored Markdown Conformance

Scaladoc tables support the [GitHub Flavored Markdown Spec Table Extension](https://github.github.com/gfm/#tables-extension-).

There are some restrictions,

* Every row must start and end with the pipe `|`
* Rows markdown must start on the left edge of the Scala comment
* The final row must be followed by a blank line

These restrictions do not restrict the types of tables that can be created but do have the benefit of allowing simple Scaladoc parsing code.

Picking a popular markdown flavor brings several advantages over creating yet another table markdown variation including,
- No need to explain a new approach
- IDEs and documentation tools can take advantage of existing markdown parsing libraries

### Header Cells, Data Cells

Cell content supports the standard inline styling syntax including bold, italic, monospace, underline, superscript, subscript and links.

This two table example includes bold, monospace, italic, superscript and a link,

```
/**
  * | Title | ISBN | Authors |
  * | :---:  | ---  | --- |
  * | '''Structured Programming''' | `0-12-200550-3` | ''Dahl, Dijkstra and Hoare'' |
  * | '''Purely functional data structures'''^1^ | `0-521-66350-4` | ''Okasaki'' |
  *
  * | Note | Comment |
  * | ---: | --- |
  * | 1 | [[https://cambridge.org Cambridge University Press]], 1998|
*/
trait Bibliography
```

Markdown paid, we get this reward,

![Example Table 2](/resources/img/blog/scaladoc-tables/example-table-2.png)

Breaking content over several lines is not supported in GFM tables. Use a `<br/>` tag or go with HTML tables if you have needs beyond the simple tables supported by GFM.

### Column Alignment

Specify column alignments using hyphen and colon patterns.

| Delimiter Cell Content | Alignment Type |
| ---     | --- |
| `---`   | Left |
| `:---`  | Left |
| `---:`  | Right |
| `:---:` | Center |

### Including pipe (`|`) in content.

Scala 2.12.8 will support the [escaping of the cell delimiter in cell content](https://github.com/scala/scala/pull/7247) with `\|`.

### More Examples

For a smorgasbord of examples take a look at [examples](http://janekdb.github.io/scala/PR-7247/scala/test/scaladoc/tables/code/index.html).

### Dotty and Scala 3

With `dotty` now boosting its share of the development horizon it's important to place GFM into a [dottydoc](https://dotty.epfl.ch/docs/usage/dottydoc.html) and hence Scaladoc 3 context.

In overview `dottydoc` supports the current Scaladoc 2.12 MediaWiki flavored markdown, but it also supports more contemporary flavors of markdown.

Within the realm of table markdown `dottydoc` supports some extensions via the [flexmark-java table extension](https://github.com/vsch/flexmark-java/wiki/Tables-Extension).

[flexmark-java](https://github.com/vsch/flexmark-java) allows tables to be defined using a more expressive variant of GFM table markdown. Tables you create now will have a route to being reused for `dottydoc` API documentation.

### Scala 2.11 Compatibility

Table markdown will not be interpreted by Scala 2.11 nor will it interfere with parsing.

Content using pipes will display in the generated Scaladoc with the pipes included as literal characters. Bear this in mind if cross compiling.

### How can I help?

* Use Scaladoc tables
* Share your feedback on [Discourse/Documentation](https://users.scala-lang.org/c/documentation)

