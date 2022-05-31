# scala-lang.org

This repository contains the source for the [scala-lang.org](https://scala-lang.org) web site.

It does not contain the source for the [docs.scala-lang.org](https://docs.scala-lang.org) subdomain. You can visit the [docs.scala-lang repository](https://github.com/scala/docs.scala-lang) if you are interested in contributing to the Scala documentation site.

The source for the Scala compiler and standard library are at https://github.com/scala/scala. Bug reports are at https://github.com/scala/bug.

## Dependencies

To build the site you can either use [Compose](https://github.com/docker/compose) or [Bundler](https://github.com/bundler/bundler). Compose is a good option if you are just getting
started and want something simple. If you are already familiar with the Ruby ecosystem then Bundler
might be the most comfortable for you.

Either way the site is built with [Jekyll](https://github.com/jekyll/jekyll) and is typeset mostly in
Markdown.

## Building the site
Make sure you are in the root directory of the cloned repository.
### With `docker-compose`:
```
docker-compose up
```

When the website dependencies change (the content of the `Gemfile`),
you have to re-build the Docker image:

```
docker-compose up --build
```

### With Bundler:

Install bundler first:

```
sudo gem install bundler
```

Then:

```
bundle install
bundle exec jekyll serve --incremental
```

## Viewing the site

Regardless of your method of running Jekyll, the generated site is available at `http://localhost:4000`.

## Editing the Site

### YAML Front Matter

The "YAML Front Matter" is nothing more than the header on each page that you intend for Jekyll to parse. It contains information such as the name of the HTML template (layout) chosen for the specific document, and the title of the document. An example YAML front matter might look like:

    ---
    layout: page
    title: My page title
    ---

You can use these fields in the YAML front matter later in your document. For example, to make a header with the title of the document, in Markdown you would write:

    ---
    layout: page
    title: My page title
    ---

    # {{ page.title }}

    Body text here...

`# {{ page.title }}` would be rendered in HTML as, `<h1>My page title</h1>`.

### Recommended Markdown Editor

[Visual Studio Code](https://github.com/Microsoft/vscode) has great support for Scala, Git, and Markdown.

### Linking to internal pages

The least error-prone way to make links is to use this format: `[link text]({{ site.baseurl }}/path/to/page/page.html)`

`{{ site.baseurl }}` is a site-wide variable that represents the root directory of the static site. So, to display the Scala logo image you can simply write: `![Img alt text]({{ site.baseurl }}/resources/img/scala-logo.png)`

### Permalinks

We try to follow a [pretty permalink](https://jekyllrb.com/docs/permalinks/) style, so that any generated page will have a link finishing in a slash character (`/`). This will tell Jekyll to build that particular page as an `index.html` inside a folder with a name as specified in the provided permalink. i.e.: if a page has a permalink as follows:

`permalink: /what-is-scala/`

This will tell Jekyll to create a `what-is-scala` directory, with an `index.html` file inside. Links to this page will refer to the `{{site.baseurl}}/what-is-scala/`.

### Custom collections and data

Every [collection](https://jekyllrb.com/docs/collections/) is a directory starting with an underscore character (`_`), containing a Markdown file for each member of the collection. These Markdown files start with a YAML front matter containing the data for this item, and can optionally contain markdown text to be rendered as html.

Right now there are no collections being rendered as specific pages in the site. They are only consumed internally as data. In the future this can be changed by specifying the global `output: true` variable in the `_config.yml` custom collections section. You will also need to specify a layout by using the `defaults` settings in the `_config.yml` file. i.e.:

```
defaults:
  - scope:
      path: ""
      type: collection_name
    values:
      layout: layout_name
```

To access data from a custom collection refer to `site.<collection-name>`. The collection's name will be the name of it's directory without the underscore character. i.e.: to access the data inside `_downloads`, use `site.downloads`.

Some of our data has been modelled as YAML files inside the `_data` folder. We generally do this for data that is used throughout the whole site. For example we do this for the navigation bar links.

## The Backend

On every commit to the `scala/scala-lang` repository a [jenkins job](https://scala-webapps.epfl.ch/jenkins/view/All/job/production_scala-lang.org-builder/) will generate the site using jekyll and copy the resulting files to the webserver. **NOTE**: the `rsync` of this job also deletes whatever is in the webserver directory **with explicit exceptions**: we need to keep the files listed below. Kind of a hack.

There are additional files on the webserver:

  - Subdirectory `scala-lang.org/old` is a static copy of the old website. It was generated once and copied there, and it stays like that.
  - Most of the files in `/home/linuxsoft/archives/scala/` (on chara, accessible through ssh with your LAMP account) are synchronized to the subdirectory `scala-lang.org/files/archive` by another [hourly jenkins job](https://scala-webapps.epfl.ch/jenkins/view/All/job/production_scala-lang.org-scala-dist-archive-sync/). This folder is used by the nightly and release jenkins jobs to publish scala releases:
    - distribution files (tarballs etc) in `/`
      - older distribution files, RCs in `/old/` (not sure how exactly this is split up..)
    - api docs for distributions in `/api/`
    - nightly builds in `/nightly/distributions/`
    - nightly api builds in `/nightly/docs-xxx/`
    - nightly pdf builds (spec etc) in `/nightly/pdfs`
