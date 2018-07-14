package org.scalalang

import org.querki.jquery._
import org.scalajs.dom.document
import org.scalalang.utils.{Logger, RootLogger}

/**
  * This is the main entry point for our application
  *
  * @author dylan.owen
  * @since Jul-2018
  */
object FunctionsApp {
  RootLogger.setTrace()

  private val logger: Logger = Logger[FunctionsApp.type]

  def main(args: Array[String]): Unit = {
    $(document).ready(() => {
      logger.trace("Dom Ready")

      DownloadLinks()
      PositionMarker()
    })
  }
}