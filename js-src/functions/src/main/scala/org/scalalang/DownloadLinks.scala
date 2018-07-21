package org.scalalang

import org.querki.jquery._
import org.scalajs.dom.{Element, document}
import org.scalalang.utils.{JsUtils, OS}

/**
  * This updates our download links based on the OS of the client
  */
object DownloadLinks {

  def apply(): Unit = {
    setupBinariesElement()
    setupMainDownload()
  }

  private def setupBinariesElement(): Unit = JsUtils.findElement("#download-binaries").foreach((binariesElmnt: JQuery) => {
    val os: OS = OS()
    val osLabel: String = os.label

    var anchor: Element = document.getElementById("#link-main-unixsys")
    if (os == OS.Windows) {
      anchor = document.getElementById("#link-main-windows")
    }
    if (anchor == null) {
      anchor = document.getElementById("#link-main-one4all")
    }
    val link: String = anchor.getAttribute("href")

    binariesElmnt.attr("href", link).addClass(osLabel)
    $("#users-os").text(osLabel)
  })

  private def setupMainDownload(): Unit = JsUtils.findElement(".main-download").foreach(_ => {
    val osLabel: String = OS().label

    val intelliJlink: String = $("#intellij-" + osLabel).text()
    val sbtLink: String = $("#sbt-" + osLabel).text()
    val stepOneContent: String = $("#stepOne-" + osLabel).html()

    $("#download-intellij-link").attr("href", intelliJlink)
    $("#download-sbt-link").attr("href", sbtLink)
    $("#download-step-one").html(stepOneContent)
  })
}
