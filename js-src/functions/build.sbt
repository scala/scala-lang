enablePlugins(ScalaJSPlugin)

name := "functions"

libraryDependencies ++= Seq(
  "org.scala-js" %%% "scalajs-dom" % Versions.Dom,
  "org.querki" %%% "jquery-facade" % Versions.JQuery
)

// move our output folder to static
artifactPath in(Compile, fastOptJS) := baseDirectory.value / ".." / ".." / "resources" / "js" / s"scala-${name.value}.js"
artifactPath in(Compile, fullOptJS) := baseDirectory.value / ".." / ".." / "resources" / "js" / s"scala-${name.value}.js"

scalaJSUseMainModuleInitializer := true
scalaJSLinkerConfig ~= { _.withSourceMap(false) }