package org.scalalang.utils

import org.querki.jquery._

/**
  * TODO add description
  *
  * @author dylan.owen
  * @since Feb-2017
  */
object JsUtils {
  /**
    * @param element the element we wish to find
    * @return the returned jquery element will have > 1 elements
    */
  @inline
  def findElement(element: ElementDesc): Option[JQuery] = {
    Option($(element)).filter(_.length > 0)
  }
}
