---
layout: blog-detail
post-type: blog
by: Adrien Piquerez, Scala Center
title: Secure the Dependencies of your Scala Project on Github
---

We released [sbt-dependency-submission][sbt-dependency-submission], a GitHub action that submits the dependencies of sbt builds to the [GitHub Dependency submission API](https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api) (currently in beta).
This action, once installed in a Github workflow, allows you to view the [Dependency graph](https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph) in Github and to receive regular security reports from [Dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).

A similar action for the Mill build tool, the [mill-dependency-submission][mill-dependency-submission] action, developed by Chris Kipp, is also available.
Other solutions are available for Maven and Gradle as well.

The next sections explain the motivation behind this project, show how to get started, compare Dependabot and Scala Steward, and list similar solutions for other build tools.

## GitHub Dependabot and the Scala ecosystem

Last year, the [Log4j CVE](https://scala-lang.org/blog-detail/2021/12/16/state-of-log4j-in-scala-ecosystem.html) reminded us of the importance of staying alert to security vulnerabilities.
Fixing all known vulnerabilities once does not make your project secure, since critical vulnerabilities can always be found and exploited in open source libraries, even the most widely used ones.
Being able to identify new vulnerabilities and to respond to them quickly reduces the risk of exposure to its minimum.
But the task can be time consuming, unless we automate it.

GitHub Dependabot is an automation tool that helps us secure our projects.
Its initial approach is to scan static configuration files such as POM files or package-lock.json files to extract the dependencies of a repository and cross reference them with a database of vulnerabilities.
But some build definitions, such as build.sbt files, are programs that cannot be statically analyzed.
A few weeks ago, GitHub released the beta version of the Dependency submission API, a REST API that we can use in CI workflows to submit complete snapshots of dependencies when they are resolved at build-time.

As a large part of the Scala community uses GitHub to host their projects, we developed sbt-dependency-submission, a GitHub action that can extract the graphs of dependencies of sbt projects, for Dependabot to analyze them and report any vulnerability.
With this tool, we hope to contribute to building a more secure Scala open source ecosystem.

## Setting up the workflow

Before installing the dependency submission action, you need to ensure that the `Dependency graph` view is enabled in the `Settings > Code security and analysis` tab of your GitHub repository.
You should also consider enabling `Dependabot alerts`.

![Dependency graph](/resources/img/blog/github/dependency-graph.jpg)

To install the action, add a new workflow in the `.github/workflows` folder, with the following definition:

```yaml
# .github/workflows/dependency-graph.yml
name: Update Dependency Graph

on:
  push:
    branches:
      - main # default branch of the project

jobs:
  update-graph:
    name: Update Dependency Graph
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: scalacenter/sbt-dependency-submission@v2
        with:
          ## Optional: Define the working directory of your build.
          ## It should contain the build.sbt file.
          working-directory: './'
```

This default definition should work in many sbt builds out-of-the-box.
Given a valid sbt build, the action installs an sbt plugin that will extract all transitive library dependencies from all subprojects on all Scala versions.

For troubleshooting, please refer to the [documentation](https://github.com/marketplace/actions/sbt-dependency-submission) of the action.

## Scala Steward and GitHub Dependabot

[Scala Steward](https://github.com/scala-steward-org/scala-steward) is a tool that helps you keep the dependencies of your project up-to-date by opening pull requests on GitHub (and other hosting services).
It is used in more than a thousand open-source repositories and many proprietary ones and contributes to a large extent to the security of the Scala ecosystem.

Dependabot and Scala Steward can be used as complementary tools.
Scala Steward, as a preventive tool, can help you keep your dependencies up-to-date, which reduces the risk of security vulnerabilities.
Dependabot, as a monitoring tool, can notify you when a vulnerability is found, so that you can act quickly.

Dependabot can also send PRs to update dependencies, but in static configuration files only.
It can update the actions in your Github workflows, or the Maven dependencies in your POM files, but not the dependencies in the `build.sbt` or `build.sc` files.

## Other supported build tools

You can use Dependabot with other Scala-compatible build tools.

### Maven

Dependabot supports Maven through static analysis of POM files.
You can enable the Dependency graph view and Dependabot in the `Settings > Code security and analysis` page.

### Mill
The [mill-dependency-submission][mill-dependency-submission] action, developed by Chris Kipp, can extract the dependencies of a Mill build.

To install it:
 - Enable the `Dependency graph` view, and optionally the `Dependabot alerts`, in the `Settings > Code security and analysis` page of your repository.
 - Add this workflow in you repository:

```yaml
# .github/workflows/dependency-graph.yml
name: Update Dependency Graph

on:
  push:
    branches:
      - main # default branch of the project

jobs:
  update-graph:
    name: Update Dependency Graph
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: coursier/cache-action@v6
      - uses: actions/setup-java@v3
        with:
          distribution: 'temurin'
          java-version: '17'
      - uses: ckipp01/mill-dependency-submission@v1
```
### Gradle

Gradle users can use the [gradle-dependency-submission][gradle-dependency-submission] action.

## Summary

In Github, it is now possible to use pre-made actions, like [sbt-dependency-submission][sbt-dependency-submission] or [mill-dependency-submission][mill-dependency-submission], to extract full graphs of dependencies at build time.
This allows Dependabot to analyze the dependencies and publish regular reports of vulnerabilities.
Only project administrators, organization owners and users with explicit access can see the Dependabot reports.

The sbt-dependency-submission action is a fresh tool that relies on the beta Dependency submission API, but the cost of trying it is low and it will help you secure your sbt builds.
Give it a try and report any bug at [scalacenter/sbt-dependency-submission](https://github.com/scalacenter/sbt-dependency-submission).

[sbt-dependency-submission]: https://github.com/marketplace/actions/sbt-dependency-submission
[mill-dependency-submission]: https://github.com/marketplace/actions/mill-dependency-submission
[gradle-dependency-submission]: https://github.com/marketplace/actions/gradle-dependency-submission
