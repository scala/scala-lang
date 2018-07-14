package org.scalalang.utils

import org.scalajs.dom.window

/**
  * TODO add description
  *
  * @author dylan.owen
  * @since Jul-2018
  */
sealed trait OS {
  val navigator: String
  val label: String
}

object OS {

  private val logger: Logger = Logger[OS.type]

  case object Windows extends OS {
    override val navigator: String = "Win"
    override val label: String = "windows"
  }

  case object Mac extends OS {
    override val navigator: String = "Mac"
    override val label: String = "osx"
  }

  case object Linux extends OS {
    override val navigator: String = "Linux"
    override val label: String = "linux"
  }

  case object Unix extends OS {
    override val navigator: String = "X11"
    override val label: String = "unix"
  }

  def apply(): OS = {
    val appVersion: String = window.navigator.appVersion
    val default: OS = Linux

    val os: OS = Array(Windows, Mac, Linux, Unix)
      .foldLeft(default)((last: OS, os: OS) => {
        if (appVersion.contains(os.navigator)) {
          os
        }
        else {
          last
        }
      })

    logger.info("OS: " + os)

    os
  }
}