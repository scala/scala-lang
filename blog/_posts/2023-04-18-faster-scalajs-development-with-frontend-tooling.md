---
layout: blog-detail
post-type: blog
by: Sébastien Doeraene
title: Faster Scala.js development with front-end tooling and new tutorials
description: Using the new vite-plugin-scalajs to better integrate Scala.js with the Vite build tool, and announcing new tutorials for front-end development with Scala.js.
---

In front-end work, it's frustrating if you cannot immediately try out your changes.
In this post, we introduce [`vite-plugin-scalajs`](https://github.com/scala-js/vite-plugin-scalajs), a new plugin that can reduce your Scala.js turnaround time from 10 seconds to under one.

The release of `vite-plugin-scalajs` is part of a larger goal to simplify the developer experience in Scala.js.
The JavaScript ecosystem features a lot of great tooling in that respect.
Together with the release of the plugin, we are publishing a new [tutorial series to get started with Scala.js](https://www.scala-js.org/doc/tutorial/), in order to best leverage front-end tooling with Scala.js.

![vite-plugin-scalajs in action](/resources/img/blog/vite-plugin-scalajs-screencast.gif)

## Past approach: scalajs-bundler

Several years ago, the Scala Center first developed [scalajs-bundler](https://scalacenter.github.io/scalajs-bundler/index.html).
Broadly, its goal was similar to what we present today: to integrate Scala.js with JavaScript tooling, in particular [npm](https://www.npmjs.com/) and [webpack](https://webpack.js.org/).

scalajs-bundler is an sbt plugin that provides settings and tasks to orchestrate npm and webpack invocations.
The main premise was that Scala.js developers would be using Scala tooling first.
JavaScript tooling would only handle dependency management and bundling.
With that premise, scalajs-bundler abstracts away npm and webpack to some extent, and is intended to be used from sbt.

While that approach works well for a while, it does not scale well to deeper front-end development requirements.
Soon enough, scalajs-bundler had to add support for custom webpack configuration files.
Unfortunately, using that feature meant that the webpack configuration was actually spread across sbt- and webpack-style configuration.

Moreover, scalajs-bundler was designed when Scala.js was only able to emit a single JS module.
Supporting a fast refresh cycle required hacks.
Therefore, it was used mainly to produce the final, minified, browser-compatible, bundle.

As time passed, Scala.js got more features, and best practices for Scala.js development evolved.
In particular, the introduction of [module splitting](http://www.scala-js.org/doc/project/module.html#module-splitting) in Scala.js opened the possibility to leverage tools like Vite.
It became more common for Scala.js developers to use front-end tooling first.

## Vite and its usage in the Scala.js community

Last year, we surveyed what the best practices were among professional Scala.js users.
Several front-end build tools were mentioned, but [Vite](https://vitejs.dev/) seemed to be a popular choice.
Vite leverages native support of ECMAScript Modules in browsers to provide fast edit-refresh cycles.
When saving a `.js` source file, Vite detects the change and sends a refresh command to the browser, which only needs to parse the changed files.

Building on ES Modules in this way provides a particularly nice opportunity for integration with Scala.js.
Indeed, Scala.js can turn Scala code into small ES modules.
Even better, we can configure it to provide few large modules for dependencies (which rarely change), and small modules for the application code (which changes often).
Assuming the application lives in the package `my.app`, the required configuration is

```scala
scalaJSLinkerConfig ~= {
  _.withModuleKind(ModuleKind.ESModule)
    .withModuleSplitStyle(
      ModuleSplitStyle.SmallModulesFor(List("my.app")))
}
```

When we edit and save a `.scala` file, a chain of incremental build steps is triggered:

1. The Scala incremental compiler recompiles only that `.scala` file and produces the corresponding `.sjsir` files (the `.class` files of Scala.js).
2. The Scala.js incremental linker picks up the new `.sjsir` files, incrementally re-optimizes the application, and rewrites only the target `.js` modules that have changed.
3. Vite picks up the changed `.js` files and asks the browser to reload them.

In order to reinforce that effect, we brought significant performance improvements to the Scala.js linker in [version 1.13.1](https://www.scala-js.org/news/2023/04/10/announcing-scalajs-1.13.1/), in particular in the incremental case.
Together with all the steps above being fully incremental, updating the UI of your application usually takes less than a second.

Of course, [even performance improvements can break someone's workflow](https://xkcd.com/1172/).
One user complained that they "don't even have time to take a sip of coffee between compiles" anymore.

## Introducing vite-plugin-scalajs

To configure Vite to pick up the output of Scala.js, in `fastLinkJS` for development mode and `fullLinkJS` for production mode, we released [`vite-plugin-scalajs`](https://github.com/scala-js/vite-plugin-scalajs).
It is a plugin for Vite that directly connects it with a Scala.js sbt project (support for other Scala build tools will come later).

After installing with

```shell
$ npm install -D @scala-js/vite-plugin-scalajs@1.0.0
```

and enabling it in `vite.config.js` as follows:

```javascript
import { defineConfig } from "vite";
import scalaJSPlugin from "@scala-js/vite-plugin-scalajs";

export default defineConfig({
  plugins: [scalaJSPlugin()],
});
```

we can import the output of Scala.js from `.js` or `.ts` files as follows:

```javascript
import 'scalajs:main.js';
```

`npm run dev`, the development mode of Vite, will automatically use the output of `fastLinkJS` in the Scala.js project.
Its production commands `npm run build` and `npm run preview` will use the output of `fullLinkJS`.

With this first version, a separate shell must be opened with sbt running `~fastLinkJS` for development mode.
As the plugin gets more usage, we will enhance it so that it can keep the `~fastLinkJS` itself in the background.

## New tutorial series

Together with the release of the plugin, we are also publishing a new [tutorial series to get started with Scala.js](https://www.scala-js.org/doc/tutorial/).
This series covers the basics of starting a Scala.js project using Vite and the following technologies:

* [Laminar](https://laminar.dev/), a UI framework for Scala.js based on Functional Reactive Programming, and
* [ScalablyTyped](https://scalablytyped.org/), a tool to automatically leverage TypeScript type definitions from Scala.js code.

If you prefer to watch content in video format, we have you covered:

* [Getting started with Scala js and Vite](https://www.youtube.com/watch?v=dv7fPmgFTNA)
* [Getting started with Scala.js, Laminar and ScalablyTyped](https://www.youtube.com/watch?v=UePrOa_1Am8)

If you always wanted to test Scala.js but were afraid of getting started, now is a good time to try!
We also have a community of friendly and helpful people in the `#scala-js` channel of the [Scala Discord server](https://discord.com/invite/scala).

## Conclusion

We presented [`vite-plugin-scalajs`](https://github.com/scala-js/vite-plugin-scalajs), a new plugin for Vite that wires it up with a Scala.js application.
Through nothing more than enabling the plugin in the Vite configuration, we can `import 'scalajs:main.js'` to get access to the output of Scala.js.
Vite's focus on module-based incremental updates combines particularly well with Scala's and Scala.js' own focus on incremental compilation and linking.
Together, they provide sub-second save-to-refresh cycles.

In order to help users get started with Scala.js and Vite, we published a [new tutorial series](https://www.scala-js.org/doc/tutorial/).
It shows step by step how to integrate Vite, Scala.js, Laminar and ScalablyTyped to build a front-end application.
