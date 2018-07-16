import org.scalajs.core.tools.linker.backend.OutputMode

enablePlugins(ScalaJSPlugin)

name := "functions"

libraryDependencies ++= Seq(
  "org.scala-js" %%% "scalajs-dom" % Versions.Dom,
  "org.querki" %%% "jquery-facade" % Versions.JQuery
)

// move our output folder to static
artifactPath in(Compile, fastOptJS) := baseDirectory.value / ".." / ".." / "resources" / "js" / s"scala-${name.value}.js"
artifactPath in(Compile, fullOptJS) := baseDirectory.value / ".." / ".." / "resources" / "js" / s"scala-${name.value}.js"
scalaJSOptimizerOptions in (Compile, fullOptJS) ~= { _.withUseClosureCompiler(true) }

scalaJSUseMainModuleInitializer := true
emitSourceMaps := false