---
layout: blog-detail
post-type: blog
by: Bill Venners (Artima, Inc.)
title: Coaxing quality output from generative AI
description: Practical techniques for getting high-quality results from generative AI.
---

> This post covers work done under the [Sovereign Tech Fund investment](https://www.scala-lang.org/blog/2026/01/27/sta-invests-in-scala.html). The work is coordinated by the [Scala Center](https://scala.epfl.ch/). The work described in this post was done by Bill Venners and Chua Chee Seng of [Artima](https://www.artima.com).

One of the tasks funded under the STA project is to improve Scala's API documentation. Such a task looks like a natural fit for generative AI, because the work is repetitive and the code to document is nearby in the source. But handing the work to an AI raises two challenges. The first is quality: an AI model will readily produce documentation, but it may be mediocre or wrong. The second challenge is managing human review time: someone will have to check all that output. This post is a report on how we approached these problems when using AI to improve API documention of Scala's standard library: what we tried and how it worked out.

Quality writing requires iteration. You write a draft, review it (or have someone else review it), then improve it. You repeat this process until you're happy with the quality. One way to achieve quality with generative AI, therefore, is to delegate the writing part to the AI model and review it yourself, but this doesn't scale. An AI model can generate content at a much greater rate than you can review it. Because of this, we decided to use the ["LLM as a judge"](https://en.wikipedia.org/wiki/LLM-as-a-Judge) technique in an attempt to raise the quality of the output as high as possible prior to asking humans to review it.

Another way we tried to raise the quality of the AI output prior to human review is to use _harnesses_ to orchestrate the AI work. First, we wrote a `todo-writer` application that reformatted doc comments for consistency and inserted text markers in the standard library source to precisely indicate where we wanted an AI to insert focused documentation. Then we created a script to drive the filling-in process. Finally, we attempted to keep the review tasks for humans to a reasonable size. The rest of this post describes these techniques in more detail.

## Technique 1: Push work onto deterministic code

The [first pull request](https://github.com/scala/scala3/pull/24754) we submitted, which made the style of existing documentation more consistent, was done simply by asking an AI model to find and make the changes, and then reviewing the results. This prompting technique worked fine given the limited scope of those changes.

Next, we wrote and ran a Scala application to convert wikidoc to markdown, the recommended markup language for Scala 3, and ran it across the entire standard library. We hoped this would make the documentation in the source code nicer for humans to work with. We also felt it would provide a more consistent canvas on which into ask AI models to fill in missing documentation. This resulted in our [second pull request](https://github.com/scala/scala3/pull/25113). The application we used was [`todo-writer`](https://github.com/artimahub/scala3/tree/feature-todo-writer/todo-writer), run with the `--migrate-markdown` command line argument.

We next ran `todo-writer` across the standard library to insert `TODO FILL IN` markers wherever existing documentation was missing any `@param`, `@tparam`, or `@return` tags. Here's an example:

```scala
/** Creates a new map obtained by updating this map with a given key/value pair.
 *  @tparam V1 TODO FILL IN
 *  @param key TODO FILL IN
 *  @param value TODO FILL IN
 *  @return TODO FILL IN
 */
def updated[V1 >: V](key: K, value: V1): CC[K, V1]
```

Each `TODO FILL IN` is one precise marker, which turned the AIs' job from the open-ended "find and improve the documentation" into the mechanical "replace this text with the right content." We could now focus the models on exactly those spots, with nothing about where to write or what needed writing left to their judgment.

The principle underneath this technique is to use determinism wherever you can. Lean on a deterministic program for every part of the job that does not genuinely require judgment, and strip out any nondeterminism that is not essential. _Every piece of the job you hand to deterministic code is a piece the AI cannot get wrong._

## Technique 2: Enforce a deterministic process

Another way we used determinism was by defining and enforcing a _process_ through a shell script that called into the AI model, rather than asking an AI to run the entire task. This kind of orchestration is often called an "AI harness," which both implies that an AI workhorse is being constrained as well as being put to productive use.

Our harness used two git branches. Once `todo-writer` had inserted the `TODO FILL IN` markers, we committed its output one file at a time, so that every file landed in its own commit, each carrying the same message: `Todo-writer added TODOs for @param, @tparam, and @return tags.` A small helper, [`commit-each-file.sh`](https://github.com/artimahub/scala3/blob/b8eb945dd37192706a88fa645475b7fd97182b0f/todo-writer/commit-each-file.sh), did this slicing. The effect was to turn the whole task into an ordered queue of single-file commits on a *source* branch, with nothing else mixed in.

The loop itself, [`fill-todos-loop.sh`](https://github.com/artimahub/scala3/blob/384855e9c3e900796590a7ed44a4bdcc133b9a0d/todo-writer/fill-todos-loop.sh), drained that queue onto a separate working branch. It listed the source commits not yet present on the working branch, oldest first, and handled them one at a time. For each commit it did five things. It cherry-picked the single-file change onto the working branch, so the file arrived with its TODO markers as one isolated commit. It ran a writer model ([`writer-prompt.txt`](https://github.com/artimahub/scala3/blob/384855e9c3e900796590a7ed44a4bdcc133b9a0d/todo-writer/prompts/writer-prompt.txt)) that replaced the TODOs in that one file with real documentation. It ran a reviewer model ([`reviewer-prompt.txt`](https://github.com/artimahub/scala3/blob/384855e9c3e900796590a7ed44a4bdcc133b9a0d/todo-writer/prompts/reviewer-prompt.txt)) that inspected the result and returned a structured JSON verdict. It ran the writer once more ([`refinement-prompt.txt`](https://github.com/artimahub/scala3/blob/384855e9c3e900796590a7ed44a4bdcc133b9a0d/todo-writer/prompts/refinement-prompt.txt)) to act on that verdict. And finally it amended the cherry-picked commit, so that the file's single commit now held finished documentation instead of placeholders.

The cherry-picking played a critical role: it was the loop's iterator. Each source commit was exactly one unit of work, so cherry-picking popped the next file off the queue in order. The AI model never had to decide for itself which files needed attention or in what sequence, because that was settled when the queue was built. It also guaranteed that the output kept the same clean shape as the input, one commit per file, which later let us regroup the finished commits into review-sized pull requests. And because a file that had already been processed no longer appeared in the not-yet-applied range, the run was naturally restartable and could proceed in batches.

The benefit of this harness was to keep the AIs focused on small, isolated tasks inside a fixed create, review, and refine process. That process takes time, but not my time: I ran it overnight while I slept, with deliberate pauses between files to spread out my token usage. If you need a task to finish faster in wall-clock terms, you can design processes that run in parallel.

## Technique 3: Give the AI a fresh, focused context

Our script gave the AI a fresh context for every step, not just for every file. For a single file the writer filled the TODOs in a fresh context, the reviewer judged the result in a second fresh context, and the refiner applied the review in a third, with nothing carried between them except the file itself and the reviewer's written feedback. I kept each of those contexts as small as possible for two reasons: as context length increases, model quality often declines; and a larger context consumes more tokens on every turn. Although I was on a monthly subscription, I still did not want to burn more tokens than necessary.

That is also what gave the review step its independence. Because the reviewer started fresh, it never saw the reasoning the writer had used, so it came to the documentation cold even though it was the exact same AI model. Another approach is to use a different model for review, to reduce the chance that the reviewer shares the writer's blind spots.

## Technique 4: Separate the review from the decision

I used the same AI model for every step, and though it may have been a better choice to use a different model for review, the results showed that one model is sufficient, so long as each step runs in its own fresh context and is handed a single, clearly defined role. Across the loop that same model played three tightly focused roles, never more than one at a time:

1. **The writer** received a file full of `TODO FILL IN` markers and a single instruction: replace them with real documentation.

2. **The reviewer** examined the writer's output and offered suggestions, emitting its findings as structured JSON. The reviewer's only job was to critique and suggest; it changed nothing and decided nothing.

3. **The refiner** read the reviewer's JSON alongside the file and made the call, deciding which suggestions to accept and which to ignore, and editing the documentation accordingly.

Separating these roles is the whole point. The reviewer never was given the opportunity to act on its own opinions; a separate session weighed those opinions against the file and decided what to do. And although a single model sat behind all three roles, each came to its task cold, with no memory of having written or judged the very thing in front of it. The model stayed the same; the role, and the context, were different every time.

## Technique 5: Size the pull requests to the human

When it was time for human review, we packaged the changes into multiple PRs to make it more manageable. Although it was far better than one massive pull request containing all changes, the PRs we submitted still stretched what can be reasonably reviewed by humans.

The first pass shipped as twelve pull requests, split by area of the library: [#25371](https://github.com/scala/scala3/pull/25371), [#25372](https://github.com/scala/scala3/pull/25372), [#25373](https://github.com/scala/scala3/pull/25373), [#25374](https://github.com/scala/scala3/pull/25374), [#25375](https://github.com/scala/scala3/pull/25375), [#25376](https://github.com/scala/scala3/pull/25376), [#25377](https://github.com/scala/scala3/pull/25377), [#25378](https://github.com/scala/scala3/pull/25378), [#25379](https://github.com/scala/scala3/pull/25379), [#25380](https://github.com/scala/scala3/pull/25380), [#25381](https://github.com/scala/scala3/pull/25381), and [#25996](https://github.com/scala/scala3/pull/25996). Not all of them were comfortably human-sized; some were large enough that reviewing them in a single sitting was a slog. The humans slogged through anyway, and the work needed it: reviewers caught real problems in the generated documentation - inconsistencies across files, edits to text that should have been left untouched, broken Scaladoc markup, and some outright factual mistakes - and we fixed those within the same pull requests before they were merged.

A second round of pull requests followed, for a different reason. During the initial review, we found and fixed bugs in `todo-writer` itself: the earlier version had skipped some declarations that should have received tags, such as higher-kinded type parameters and multi-parameter-list constructors. Once those bugs were fixed, we re-ran the improved tool across the library, which surfaced the spots the original pass had missed. The newly added tags went into nine cleanup pull requests: [#26119](https://github.com/scala/scala3/pull/26119), [#26120](https://github.com/scala/scala3/pull/26120), [#26121](https://github.com/scala/scala3/pull/26121), [#26122](https://github.com/scala/scala3/pull/26122), [#26123](https://github.com/scala/scala3/pull/26123), [#26124](https://github.com/scala/scala3/pull/26124), [#26125](https://github.com/scala/scala3/pull/26125), [#26126](https://github.com/scala/scala3/pull/26126), and [#26127](https://github.com/scala/scala3/pull/26127).

## What's next

Everything described here filled in tags on declarations that already had a Scaladoc comment. The larger job still ahead is to document the declarations that have none at all, and there are many: 5,894 program entities in the standard library currently have no Scaladoc comment whatsoever. That is a harder problem than supplying a missing `@param` or `@return`, because there is no existing summary to build on, so reaching high quality will take more than the single create, review, and refine pass we relied on here.

For that next batch I want to elaborate the review side of the loop. Instead of a single reviewer, I plan to run several reviews of each change, including reviews by different AI models, so that more eyes, and more kinds of eyes, weigh in before any human does. The aim is the same as before: push the quality as high as the machines can take it, so that by the time a human takes over, the documentation is already good.

## About the author

Bill Venners is president of [Artima, Inc.](https://www.artima.com) He is the lead developer of the ScalaTest and Scalactic open source libraries and coauthor of [Programming in Scala, Fifth Edition](https://www.artima.com/shop/programming_in_scala_5ed) and [Advanced Programming in Scala, Fifth Edition](https://www.artima.com/shop/advanced_programming_in_scala_5ed).

## About the Scala Center

The Scala Center has been entrusted with coordinating the commissioned Scala work for the Sovereign Tech Fund. The Scala Center is an independent, not-for-profit center sponsored by [corporate members and individual backers like you](/blog/2023/09/11/scala-center-fundraising.html) to promote and facilitate Scala. If you would like to participate and/or see more of these types of efforts, please reach out to your manager to see if your company can donate engineering time or membership to the Scala Center.

See [The Scala Center Fundraising Campaign](/blog/2023/09/11/scala-center-fundraising.html) for more details.
