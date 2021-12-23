---
category: blog-detail
post-type: blog
by: Sébastien Doeraene, Adrien Piquerez
title: "The state of the log4j CVE in the Scala ecosystem"
---

Two very widespread vulnerabilities in log4j v2 are wreaking havoc in the JVM ecosystem.
The vulnerabilities are registered as [CVE-2021-44228](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44228) and [CVE-2021-45046](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-45046).

The vulnerability allows unauthenticated remote code execution, and it is triggered when a specially crafted string provided by the attacker through a variety of different input vectors.
For further technical guidance, see [Guidance for preventing, detecting, and hunting for CVE-2021-44228 Log4j 2 exploitation](https://www.microsoft.com/security/blog/2021/12/11/guidance-for-preventing-detecting-and-hunting-for-cve-2021-44228-log4j-2-exploitation/) for example.

A project is affected by the log4j vulnerabilities if it contains a vulnerable version of a log4j artifact on its classpath.

You may find below a non-comprehensive list of core Scala tools and libraries known to be affected by the vulnerability, and in which version (if any) it is addressed.

We also give some useful tasks and settings to address the vulnerabilities in applications built with sbt, Mill or Maven.

## State of core tools and libraries

### Disclaimer

The following information is provided AS IS, without any warranty of any kind, for your convenience.
A proper security assessment of any CVE, including the log4j vulnerabilities, remains your sole responsibility.

### Affected tools and libraries with an available fix

The following core tools and libraries have versions affected by the log4j vulnerability, but have published newer versions with the appropriate patches.
It is recommended that you upgrade to these versions as soon as possible.

If this is not possible, for libraries, see the tip below on how to force the dependency of log4j.

#### Tools

| Tool name | Affected versions | Fixed in version |
|-----------|-------------------|------------------|
| sbt | 1.x < 1.5.8 | 1.5.8 |

Log4j is not enabled by default since sbt 1.4.0, but all users are recommended to upgrade to the latest fixed version.
Any organization using sbt as part of CI/CD (continuous integration and delivery), automated publishing, and projects that expose a TCP/IP entry point during testing may be most vulnerable to an exploit.

#### Libraries

| Organization | Artifact name | Fixed in version |
|--------------|---------------|------------------|
| TBD |  |  |

### Affected tools and libraries without a known available fix

The following core tools and libraries are affected by the log4j vulnerability, and have not yet published an updated version with the appropriate patches.
Consult the CVEs to use any other applicable mitigation that may apply in your case.

It may also be possible to force the dependency of log4j, as explained below.

| Organization | Artifact name |
|--------------|---------------|
| none known so far | |

## Useful sbt tasks and settings

If your application is built with sbt, which is common in the Scala ecosystem, here is some information on how to determine the classpath of your application, and how to force an upgrade of the log4j dependencies.

### `fullClasspath`

The task `fullClasspath`, properly scoped to a project and a configuration, gives the final, full classpath with which your project is executed.
A typical invocation looks like

```
$ sbt
> show myProject/Compile/fullClasspath
[info] * Attributed(.../myProject/target/scala-2.12/sbt-1.0/classes)
...
[info] * Attributed(.../.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/logging/log4j/log4j-api/2.11.2/log4j-api-2.11.2.jar)
[info] * Attributed(.../.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/logging/log4j/log4j-core/2.11.2/log4j-core-2.11.2.jar)
[info] * Attributed(.../.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/logging/log4j/log4j-slf4j-impl/2.11.2/log4j-slf4j-impl-2.11.2.jar)
[info] * Attributed(.../.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-sbt/librarymanagement-core_2.12/1.5.3/librarymanagement-core_2.12-1.5.3.jar)
[info] * Attributed(.../.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-sbt/librarymanagement-ivy_2.12/1.5.3/librarymanagement-ivy_2.12-1.5.3.jar)
[info] * Attributed(.../.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-sbt/compiler-interface/1.5.7/compiler-interface-1.5.7.jar)
...
[success] Total time: 0 s, completed Dec 16, 2021 11:07:28 AM
```

Prior to sbt 1.1.0, the command looks like

```
$ sbt
> show myProject/compile:fullClasspath
```

`fullClasspath` is the most accurate task, but requires to build the project and its dependencies.
In very large builds, you may want to use `externalClasspath` instead, although that may miss dependencies introduced by your build or by sbt plugins in a non-standard way.

The version numbers found there for log4j (2.11.2) are the ones that are used when running the program.
This is a vulnerable version, so we should upgrade.

### Upgrading transitive dependencies

In the above example, our program does not directly depend on log4j.
It comes from a transitive dependency.
Fortunately, in the Maven ecosystem, we do not need to wait for upstream libraries to upgrade to new versions of vulnerable libraries.
We can force the upgrade of transitive libraries right from our build.

In the above project, we add the following sbt setting in the appropriate `.settings()` call to force an upgrade of log4j:

```scala
libraryDependencies ++= Seq(
  "org.apache.logging.log4j" % "log4j-api" % "2.17.0",
  "org.apache.logging.log4j" % "log4j-core" % "2.17.0",
  "org.apache.logging.log4j" % "log4j-slf4j-impl" % "2.17.0",
),
```

Reloading the build and displaying the `fullClasspath`, we can confirm that the fixed version of log4j is used:

```
$ sbt
> show myProject/Compile/fullClasspath
...
[info] * Attributed(.../.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/logging/log4j/log4j-api/2.17.0/log4j-api-2.17.0.jar)
[info] * Attributed(.../.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/logging/log4j/log4j-core/2.17.0/log4j-core-2.17.0.jar)
[info] * Attributed(.../.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/logging/log4j/log4j-slf4j-impl/2.17.0/log4j-slf4j-impl-2.17.0.jar)
...
[success] Total time: 0 s, completed Dec 16, 2021 11:20:44 AM
```

## Useful Mill commands

Using Mill, you can show the full classpath of a project using the following command:

```
$ mill show myProject.runClasspath
```

You can also force an upgrade of transitive dependencies with additional entries in your `ivyDeps`:

```scala
def ivyDeps = Agg(
  ivy"org.apache.logging.log4j:log4j-api:2.17.0",
  ivy"org.apache.logging.log4j:log4j-core:2.17.0",
  ivy"org.apache.logging.log4j:log4j-slf4j-impl:2.17.0",
)
```

## Useful Maven commands

Similarly to the above, you can show the full classpath of a Maven project using the following command:

```
$ mvn dependency:build-classpath
```

More information can be found [in this StackOverflow answer](https://stackoverflow.com/a/27451672/1829647).

Like in sbt, you can force an upgrade of transitive dependencies of log4j using `<dependency>` entries:

```xml
<dependency>
  <groupId>org.apache.logging.log4j</groupId>
  <artifactId>log4j-api</artifactId>
  <version>2.17.0</version>
</dependency>
<dependency>
  <groupId>org.apache.logging.log4j</groupId>
  <artifactId>log4j-core</artifactId>
  <version>2.17.0</version>
</dependency>
<dependency>
  <groupId>org.apache.logging.log4j</groupId>
  <artifactId>log4j-slf4j-impl</artifactId>
  <version>2.17.0</version>
</dependency>
```

## Other tools

The following (unvetted) third-party tools may help you identify and remediate the log4j vulnerabilities in your applications:

* Stripe's [log4j-remediation-tools](https://github.com/stripe/log4j-remediation-tools)

## Conclusion

The log4j vulnerabilities shook our community and reminded us how dependent we all are on open source software.
We are grateful to the maintainers and contributors of Scala open source tools and libraries who reacted quickly to protect their users and to the people behind the tools that enabled such a quick response.

Please do not hesitate to update this post with libraries and tools vulnerable to the CVEs and to propose tools to help address them.
