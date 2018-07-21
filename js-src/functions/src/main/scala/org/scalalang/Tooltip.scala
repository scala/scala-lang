package org.scalalang

import org.querki.jquery._
import org.scalajs.dom.Element

import scala.scalajs.js

/**
  * This renders tooltips for any .masterTooltip class element
  */
object Tooltip {
  def apply(): Unit = {
    $(".masterTooltip")
      .hover(
        (tooltip: Element) => {
          // make sure we have a title
          $(tooltip).attr("title").toOption.foreach((title: String) => {
            // create our tooltip and place it on the body
            $("<p class=\"tooltip\"></p>")
              .text(title)
              .appendTo("body")
              .fadeIn("slow")
          })
        },
        () => {
          // remove our tooltip when we mouse off
          $(".tooltip").remove()
        }
      )
      .mousemove((e: JQueryEventObject) => {
        val mouseX: Int = e.pageX + 20 //Get X coordinates
        val mouseY: Int = e.pageY + 10 //Get Y coordinates

        $(".tooltip").css(js.Dictionary[js.Any](
          "left" -> mouseX,
          "top" -> mouseY
        ))
      })
  }
}
