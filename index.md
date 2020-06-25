---
layout: frontpage

# Header texts
headerTitle: "The Scala Programming Language"
headerSubtitle: "Scala combines object-oriented and functional programming in one concise, high-level language. Scala's static types help avoid bugs in complex applications, and its JVM and JavaScript runtimes let you build high-performance systems with easy access to huge ecosystems of libraries."
headerButtonTitle: "Learn More"
headerButtonUrl: "/what-is-scala/"

# Links of the Download / API Docs sections
gettingStarted:
  mainTitle: "Download"
  mainUrl: "/download"
  subtitle: "Getting Started"
  subtitleLink: "https://docs.scala-lang.org/getting-started.html"
  links:
    - title: "Milestones, nightlies, etc."
      url: "/download/index.html#other-releases"
    - title: "All Previous Releases"
      url: "/download/all.html"
apiDocs:
  mainTitle: "API Docs"
  mainUrl: "https://www.scala-lang.org/api/?_ga=1.178639076.1310790544.1468501313"
  subtitle: "Current API Docs"
  subtitleLink: "https://www.scala-lang.org/api/current/?_ga=1.241039811.1310790544.1468501313"
  links:
    - title: "API Docs (other versions)"
      url: "https://scala-lang.org/files/archive/api/"
    - title: "Scala Documentation"
      url: "https://docs.scala-lang.org/"
    - title: "Language Specification"
      url: "https://scala-lang.org/files/archive/spec/2.13/"

currentScalaVersion: "2.13.3"

# Scala backends
scalaBackends:
  - icon: /resources/img/frontpage/java-logo.png
    description: JVM
  - icon: /resources/img/frontpage/js-logo.png
    description: JavaScript in your browser
    link: https://www.scala-js.org/
  - icon: /resources/img/frontpage/llvm-logo.png
    description: Natively with LLVM
    link: https://scala-native.readthedocs.io/
    beta: 1

# Scala IDEs
scalaIDEs:
  - name: IntelliJ IDEA
    icon: /resources/img/frontpage/intelliJ.png
    metals: false
    url: "https://www.jetbrains.com/idea/"
  - name: VS Code
    icon: /resources/img/frontpage/vs_code.png
    metals: true
    url: "https://scalameta.org/metals/docs/editors/vscode.html"
  - name: GNU Emacs
    icon: /resources/img/frontpage/emacs-logo.svg
    metals: true
    url: "https://scalameta.org/metals/docs/editors/emacs.html"
  - name: Vim
    icon: /resources/img/frontpage/vim-logo.svg
    metals: true
    url: "https://scalameta.org/metals/docs/editors/vim.html"
  - name: Sublime Text
    icon: /resources/img/frontpage/sublime.png
    metals: true
    url: "https://scalameta.org/metals/docs/editors/sublime.html"
  - name: Atom
    icon: /resources/img/frontpage/atom.png
    metals: true
    url: "https://scalameta.org/metals/docs/editors/atom.html"
# Scala ecosystem
ecosystemTitle: "Scala ecosystem"
ecosystemDescription: "The Scala Library Index (or Scaladex) is a representation of a map of all published Scala libraries. With Scaladex, a developer can now query more than 175,000 releases of Scala libraries. Scaladex is officially supported by Scala Center."
---
