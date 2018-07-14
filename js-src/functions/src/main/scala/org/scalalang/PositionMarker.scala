package org.scalalang

import org.querki.jquery._
import org.scalajs.dom.window
import org.scalalang.utils.JsUtils

/**
  * This renders / updates the position marker on the front page
  *
  * @author dylan.owen
  * @since Jul-2018
  */
object PositionMarker {

  private val imageWidth: Int = 1680

  // where our position should be on the image
  private val targetX: Int = 1028
  private val targetY: Int = 290

  def apply(): Unit = JsUtils.findElement("#position-marker")
    .foreach((pointer: JQuery) => {
      val updater: () => Unit = updatePointer(pointer)

      // register on window resize
      $(window).resize(updater)

      // initialize
      pointer.css("top", targetY)
      updater()
    })

  private def updatePointer(pointer: JQuery): () => Unit = () => {
    val windowWidth: Double = $(window).width()

    val xScale: Double = windowWidth / imageWidth

    pointer.css("left", (targetX * xScale).toInt)
  }
}
