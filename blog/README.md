# Adding a blog entry to scala-lang

Adding a blog entry to scala-lang is simple – we use Jekyll (see the README in
the root of this repository for Jekyll setup instructions in case you don't
have Jekyll installed.)

## What's the difference between a blog entry and a news item?

A blog article is a larger instructional/opinion/informational original piece.
An example is the blog article that we published about running our first
Coursera course in December 2012,
_[Functional Programming Principles in Scala: Impressions and Statistics](http://docs.scala-lang.org/news/functional-programming-principles-in-scala-impressions-and-statistics.html)_.
News items
or announcements on the other hand are just that – short news flashes
announcing something, whether it be a new release, a new project, a new
course, or anything in between.

If you realize you should be writing a news item instead of a blog article,
see the README in the `/news` directory of this repository for instructions on
how to add a news item to our feed (both blog articles and news items show up
in the same place on the front page of scala-lang.org)

## Workflow

- Create a markdown file in the `/blog/_posts` directory of this repository named according to the convention: `YYYY-MM-DD-name-for-your-article.md`
- Add some YAML frontmatter. For example:

```
    ---
    layout: blog
    post-type: blog
    by: Joe Schmoe
    title: My Uber Cool Scala Article
    ---
```

- Write your post in markdown following the front matter.
- Run Jekyll locally and double-check your article for formatting and correctness! To do so, simply run `jekyll serve --watch` from the root of the repository. Note that the `--watch` option enables incremental rebuilding, so each time you change a file, the site is regenerated and re-served. To visit your blog article, go to: `localhost:4000/path/to/your/article`
- Make a pull request!
