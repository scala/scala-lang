---
layout: blog-detail
post-type: blog
by: Frank S. Thomas
title: "Keep your projects up-to-date with Scala Steward"
---

I'm excited to announce version 0.3 of [Scala Steward][scala-steward] and to introduce it
to the Scala community! Scala Steward is a robot that helps you keep dependencies,
sbt, and sbt plugins up-to-date by automatically creating pull requests on GitHub, GitLab,
or Bitbucket that bump outdated version numbers.

## How to use it

You can use it with any public Scala project on GitHub that uses sbt simply by adding it
to [this file][repos] and then wait for the first pull requests to come in a few hours
later. Over 500 projects are already using this public instance of Scala Steward which
I'm running as a free service for the whole Scala OSS ecosystem. Since Sep 9, 2018,
when Scala Steward created [its first pull request][first_pr], it has created more than
[11 900 pull requests][created_prs] of which over [8 300][merged_prs] are already merged!

Here is a screenshot of one of Scala Steward's pull requests:
![screenshot of a Scala Steward pull request](https://user-images.githubusercontent.com/141252/60855361-e48b4200-a1f2-11e9-8173-1a53eacffd92.png)

Receiving automatic pull requests that bump versions of dependencies reduces maintenance
if your code compiles without warnings and errors with the new version. In many cases, it
is enough to review the changelog of the new version and to check that your automated
tests pass before merging such pull requests. If you are adventurous, you can even let
[Scala Steward's pull requests be merged automatically][auto-merge].

[scala-steward]: https://scala-steward.org
[repos]: https://github.com/fthomas/scala-steward/blob/master/repos.md
[first_pr]: https://github.com/fthomas/datapackage/pull/1
[created_prs]: https://github.com/search?o=desc&q=author%3Ascala-steward+is%3Apr&s=created&type=Issues
[merged_prs]: https://github.com/search?o=desc&q=author%3Ascala-steward+is%3Amerged+sort%3Aupdated-desc&s=created&type=Issues
[auto-merge]: https://github.com/fthomas/scala-steward/blob/master/docs/faq.md#how-can-scala-stewards-prs-be-merged-automatically

## Running your own instance

You can also run your own instance of Scala Steward for your private repositories and
join the [companies][community] that are already doing this. Unfortunately this isn’t
[well documented][docs-running] yet. Improving the documentation would make a great
first contribution after you have figured out how to set it up.

[community]: https://github.com/fthomas/scala-steward#community
[docs-running]: https://github.com/fthomas/scala-steward/blob/master/docs/running.md

## Automatic code migrations with Scalafix

What if a new version of your dependencies contains breaking changes so that your
code does not compile without errors or warnings anymore? In these cases automatic
version bumps only notify you of a new version and make you aware that human
intervention is needed to fix errors and warnings and to adapt the code to the new
version.

Fortunately, we can improve on this situation by combining Scala Steward with the
excellent [Scalafix][scalafix] tool. Scalafix is a refactoring and linting tool that
allows to rewrite code based on user-supplied rules. You can read more about Scalafix
[here][scalafix-blog1] and [here][scalafix-blog2]. Scalafix rules can also be used
for version migrations to help users updating to new versions and some
libraries (like [Cats](https://github.com/typelevel/cats/tree/v1.6.1/scalafix),
[FS2](https://github.com/functional-streams-for-scala/fs2/tree/v1.0.5/scalafix), or
[http4s](https://github.com/http4s/http4s/tree/v0.20.3/scalafix)) are already
providing such migrations. With Scala Steward, we now have the possibility to apply
Scalafix migrations automatically to create
[pull requests like this][scalafix-example-pr]: 

```diff
diff --git a/build.sbt b/build.sbt
--- a/build.sbt
+++ b/build.sbt
 libraryDependencies := List(
-  "org.typelevel" %% "cats-core" % "0.9.0"
+  "org.typelevel" %% "cats-core" % "1.6.1"
 )

diff --git a/src/main/scala/cats_1_0_0.scala b/src/main/scala/cats.scala
--- a/src/main/scala/cats.scala
+++ b/src/main/scala/cats.scala
 object cats {
-  (Option(1) |@| Option(2) |@| Option(3)).map(_ + _ + _)
+  (Option(1), Option(2), Option(3)).mapN(_ + _ + _)
 }
```

Besides bumping the Cats version number, the Scalafix migration took care of the
breaking changes that were introduced between Cats 0.9.0 and Cats 1.0.0 and updated
the code so that it compiles cleanly with the new version. These automatic
migrations have the potential to significantly reduce maintenance costs of version
updates that contain breaking changes or deprecations.

[scalafix]: https://scalacenter.github.io/scalafix/
[scalafix-blog1]: https://www.scala-lang.org/blog/2016/10/24/scalafix.html
[scalafix-blog2]: https://www.scala-lang.org/blog/2018/11/16/scalafix-scalameta.html
[scalafix-example-pr]: https://github.com/fthomas/scalafix-test/pull/9/files

## Get involved

Scalafix migrations are great but we haven't yet solved the problem of writing them
automatically for version updates. **:-)** That means there are plenty of opportunities
for new contributors to help library maintainers writing Scalafix migrations. And by
integrating them into Scala Steward, their value is amplified by the number of
projects that use Scala Steward. Even small contributions can already benefit a
large chunk of the Scala ecosystem.

After you have written a Scalafix migration for your favorite library,
Scala Steward needs to be made aware that it exists and for which version update it
should be applied. Instructions for adding them to Scala Steward and more details about
the Scalafix integration in Scala Steward can be found [here][scalafix-migrations].
Once the migration has been added and the new version of the library is released, you
can enjoy watching Scala Steward creating pull requests with changes from your Scalafix
migration!

There are also enough opportunities to [improve Scala Steward itself][scala-steward-issues].
The Scalafix integration, for example, has only been added recently and is still rough around
the edges.

[scalafix-migrations]: https://github.com/fthomas/scala-steward/blob/master/docs/scalafix-migrations.md
[scala-steward-issues]: https://github.com/fthomas/scala-steward/issues
[scala-steward-contributors]: https://github.com/fthomas/scala-steward#contributors

## Recap

Scala Steward: 

* Can create automatic pull requests that bump dependency versions. This saves a lot of time.
* In addition to the version bumps, it can migrate the code with Scalafix.
* You can help the whole Scala ecosystem by writing Scalafix migrations.

[Try out Scala Steward][quickstart] now!

[quickstart]: https://github.com/fthomas/scala-steward#quick-start-guide

## Credits

Scala Steward wouldn't exist without Roman Timushev's great [sbt-updates][sbt-updates]
which is an integral part of Scala Steward. A special shout-out also goes to
[@impurepics][@impurepics] who created the cute and iconic logo!

And many thanks to the 20+ contributors who made Scala Steward to what it is today:
Alex,
Arulselvan Madhavan,
Bayram Kiran,
Cédric Chantepie,
Christopher Davenport,
Dale Wijnand,
Daniel Pfeiffer,
David Francoeur,
Fabian,
Filipe Regadas,
Jakub Kozłowski,
JCollier,
Jeff Martin,
kenji yoshida,
Mark Canlas,
Michael Wizner,
Philippus Baalman,
Piotr Gabara,
Renato Cavalcanti,
sullis,
TATSUNO Yasuhiro,
Thomas Heslin, and
Thomas Kaliakos.

I'd also like to thank Andrea Magnorsky, David Francoeur, Lars Hupel,
Seth Tisue, and Yifan Xing for proofreading this post.

[sbt-updates]: https://github.com/rtimush/sbt-updates
[@impurepics]: https://twitter.com/impurepics/
