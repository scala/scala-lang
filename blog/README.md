# Adding a blog entry to scala-lang

Adding a blog entry to scala-lang is simple – we use Jekyll (see the README in
the root of this repository for Jekyll setup instructions in case you don't
have Jekyll installed.)

## What kinds of entries exist?

There are three:

* `category: release` for Scala release announcements
* `category: highlights` for issues of the Scala Highlights newsletter
* `category: blog` for everything else

## Workflow

- Create a markdown file in the `/blog/_posts` directory of this repository (or the `/_posts/` directory for release announcements) named according to the convention: `YYYY-MM-DD-name-for-your-article.md`
- Add some YAML frontmatter. For example:

```
    ---
    layout: blog-detail
    category: blog
    by: Joe Schmoe
    title: My Uber Cool Scala Article
    ---
```

- Write your post in markdown following the front matter.
- Run Jekyll locally and double-check your article for formatting and correctness! To do so, simply run `jekyll serve --watch` from the root of the repository. Note that the `--watch` option enables incremental rebuilding, so each time you change a file, the site is regenerated and re-served. To visit your blog article, go to: `localhost:4000/path/to/your/article`
- Make a pull request!
