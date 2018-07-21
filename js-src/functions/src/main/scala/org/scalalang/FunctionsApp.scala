package org.scalalang

import org.querki.jquery._
import org.scalajs.dom.document

/**
  * This is the main entry point for our application
  */
object FunctionsApp {
  def main(args: Array[String]): Unit = {
    $(document).ready(() => {
      println("Dom Ready")

      Tooltip()
      DownloadLinks()
      PositionMarker()
    })
  }
}