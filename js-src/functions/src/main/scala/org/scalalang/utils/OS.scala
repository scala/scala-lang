package org.scalalang.utils

import org.scalajs.dom.window

/**
  * Find which OS our client is running
  */
sealed abstract class OS(val navigator: String, val label: String)

object OS {

  case object Windows extends OS("Win", "windows")

  case object Mac extends OS("Mac", "osx")

  case object Linux extends OS("Linux", "linux")

  case object Unix extends OS("X11", "unix")

  def apply(): OS = {
    val appVersion: String = window.navigator.appVersion
    val default: OS = Linux

    val os: OS = Array(Windows, Mac, Linux, Unix)
      .find(os => appVersion.contains(os.navigator))
      .getOrElse(default)

    println("OS: " + os)

    os
  }
}