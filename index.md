---
layout: frontpage

# Header texts
headerTitle: "The Scala Programming Language"
headerSubtitle: "Scala combines object-oriented and functional programming in one concise, high-level language. Scala's static types help avoid bugs in complex applications, and its JVM and JavaScript runtimes let you build high-performance systems with easy access to huge ecosystems of libraries."
headerButtonTitle: "Learn More"
headerButtonUrl: "/what-is-scala/"

# Links of the Download / API Docs sections
gettingStarted:
  mainTitle: "Scala 3.0.2"
  mainUrl: "/download/scala3.html"
  subtitle: "Documentation"
  subtitleLink: "https://docs.scala-lang.org/scala3"
  links:
    - title: "New in Scala 3"
      url: "https://docs.scala-lang.org/scala3/new-in-scala3.html"
    - title: "Scala 3 Book"
      url: "https://docs.scala-lang.org/scala3/book/introduction.html"
    - title: "Language Reference"
      url: "https://docs.scala-lang.org/scala3/reference/overview.html"
    - title: "Migration Guide"
      url: "https://docs.scala-lang.org/scala3/guides/migration/compatibility-intro.html"
apiDocs:
  mainTitle: "Scala 2.13.6"
  mainUrl: "/download/scala2.html"
  subtitle: "Documentation"
  subtitleLink: "https://docs.scala-lang.org"
  links:
    - title: "Current API Docs"
      url: "https://www.scala-lang.org/api/current/?_ga=1.241039811.1310790544.1468501313"
    - title: "API Docs (other versions)"
      url: "https://scala-lang.org/files/archive/api/"
    - title: "Language Specification"
      url: "https://scala-lang.org/files/archive/spec/2.13/"
    - title: "All Previous Releases"
      url: "/download/all.html"


# Scala backends
scalaBackends:
  - icon: /resources/img/frontpage/java-logo.png
    description: on the JVM
  - icon: /resources/img/frontpage/js-logo.png
    description: on JavaScript in your browser
    link: https://www.scala-js.org/
  - icon: /resources/img/frontpage/llvm-logo.png
    description: natively with LLVM
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
# Scala ecosystem
ecosystemTitle: "Scala ecosystem"
ecosystemDescription: "The Scala Library Index (or Scaladex) is a representation of a map of all published Scala libraries. With Scaladex, a developer can now query more than 175,000 releases of Scala libraries. Scaladex is officially supported by Scala Center."
---
