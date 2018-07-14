name := "scala-lang"

organization in ThisBuild := "com.scala"
version in ThisBuild := "0.1"
scalaVersion in ThisBuild := "2.12.6"
scalacOptions in ThisBuild ++= Seq(
  "-feature",
  "-deprecation"
)

lazy val functions = project in file("js-src/functions")

lazy val root: Project = project.in(file("."))
  .aggregate(functions)