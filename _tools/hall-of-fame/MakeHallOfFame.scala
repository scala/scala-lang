/** This script makes the Hall of Fame for the elapsed month.
 *  It should be run every 1st day of the month, in the working tree, and
 *  then a commit with the changes should be pushed to scala-lang.
 */

import java.net.URL

import scala.annotation.switch

import scala.io.Source
import scala.util.parsing.json._

object MakeHallOfFame {
  object Category extends Enumeration {
    val Typesafe, EPFL, Community = Value
  }
  type Category = Category.Value

  // TODO Expand (and maintain) that list - or fetch it from some source
  val TypesafePeople = Set(
      "adriaanm",
      "dragos",
      "gkossakowski",
      "JamesIry",
      "jsuereth",
      "paulp",
      "phaller",
      "retronym",
      "huitseeker",
      "jboner",
      "viktorklang",
      "patriknw",
      "rkuhn",
      "bantonsson",
      "pvlugter",
      "henrikengstrom",
      "szeiger"
  )

  // TODO Expand (and maintain) that list - or fetch it from some source
  val EPFLPeople = Set(
      "axel22",
      "heathermiller",
      "hubertp",
      "lrytz",
      "magarciaEPFL",
      "namin",
      "odersky",
      "TiarkRompf",
      "VladUreche",
      "xeno-by",
      "namin",
      "cvogt",
      "manojo",
      "vjovanov",
      "sjrd",
      "sstucki"
  )

  class Author(val username: String, val gravatar: String) {
    val category: Category =
      if (TypesafePeople(username)) Category.Typesafe
      else if (EPFLPeople(username)) Category.EPFL
      else Category.Community

    var commits: Int = 0
    var linesAdded: Int = 0
    var linesDeleted: Int = 0

    var isNewContributor: Boolean = false
  }

  var thisYear: Int = 0
  var thisMonth: Int = 0
  var thisMonthStr: String = ""

  def isWeekOfThisMonth(week: String): Boolean =
    week startsWith thisMonthStr

  def main(args: Array[String]) {
    val (year, month) = {
      if (args.size >= 2) (args(0).toInt, args(1).toInt)
      else getYearAndMonth()
    }
    thisYear = year
    thisMonth = month
    thisMonthStr = "%04d-%02d" format (year, month)

    progress(s"Building data for $thisMonthStr")

    val sourceDataString = loadSourceDataString()
    val sourceData = parseSourceData(sourceDataString)
    val authors = buildDataFromJSON(sourceData)

    progress("Sorting by category")
    val byCategory = authors.groupBy(_.category)
    val sorted = byCategory.mapValues(_.sortBy(-_.commits))

    val output = buildOutput(sorted)
    writeOutputToFile(output)
  }

  def progress(msg: String) {
    Console.err.println(msg)
  }

  def getYearAndMonth(): (Int, Int) = {
    import java.util.Calendar._
    val cal = new java.util.GregorianCalendar
    cal.set(DAY_OF_MONTH, 0) // this will wrap to the Month (and Year if necessary)
    (cal.get(YEAR), cal.get(MONTH)+1)
  }

  def timestampToDateStr(timestamp: Long): String = {
    import java.util.Calendar._
    val date = new java.util.Date(timestamp)
    val cal = new java.util.GregorianCalendar()
    cal.setTime(date)
    "%04d-%02d-%02d" format (cal.get(YEAR), cal.get(MONTH)+1, cal.get(DAY_OF_MONTH))
  }

  def loadSourceDataString(): String = {
    progress("Downloading source data")
    val source = Source.fromURL(new URL(
        "https://github.com/scala/scala/graphs/contributors-data"))
    try source.mkString
    finally source.close()
  }

  def parseSourceData(str: String): Any = {
    progress("Parsing JSON in source data")
    JSON.parseFull(str) getOrElse {
      throw new Exception("Parse error")
    }
  }

  def buildDataFromJSON(jsonAuthors: Any): List[Author] = {
    progress("Building my data")
    val L(authors) = jsonAuthors
    val all = for {
      M(author0) <- authors
      M(authorData) = author0("author")
      S(username) = authorData("login")
      S(gravatar) = authorData("avatar")
      I(totalCommits) = author0("total")
      L(jsonWeeks) = author0("weeks")
    } yield {
      val author = new Author(username, gravatar)

      for {
        M(week) <- jsonWeeks
        D(dateTimestamp) = week("w")
        date = timestampToDateStr(dateTimestamp.toLong * 1000)
        if isWeekOfThisMonth(date)
        I(commits) = week("c")
        I(added) = week("a")
        I(deleted) = week("d")
      } yield {
        author.commits += commits
        author.linesAdded += added
        author.linesDeleted += deleted
      }

      author.isNewContributor = author.commits == totalCommits
      author
    }
    all filter (_.commits != 0)
  }

  def buildOutput(authorsByCategory: Map[Category, List[Author]]) = {
    progress("Outputting")

    val result = new scala.collection.mutable.ListBuffer[String]
    def outln(line: String) = result += line

    val thisMonthText = getMonthName(thisMonth)

    outln("---")
    outln("layout: famearchive")
    outln("title: Contributors of " + thisMonthText + " " + thisYear)
    outln("fame-year: " + thisYear)
    outln("fame-month: " + thisMonth)
    outln("fame-month-str: " + thisMonthText)
    outln("fame-categories:")

    for {
      category <- Seq(Category.Typesafe, Category.EPFL, Category.Community)
    } {
      outln("  - category: " + category.toString())
      outln("    authors:")
      var rank = 0
      var rankCommits = -1
      for (author <- authorsByCategory.getOrElse(category, Nil)) {
        if (author.commits != rankCommits) {
          rank += 1
          rankCommits = author.commits
        }

        outln("    - username: " + author.username)
        outln("      gravatar: " + author.gravatar)
        outln("      commits: " + author.commits)
        outln("      linesAdded: " + author.linesAdded)
        outln("      linesDeleted: " + author.linesDeleted)
        outln("      rank: " + rank)
        outln("      newContributor: " + author.isNewContributor)
      }
    }

    outln("---")

    result.toList
  }

  def writeOutputToFile(output: List[String]) {
    val (postYear, postMonth) = {
      import java.util.Calendar._
      val cal = new java.util.GregorianCalendar(thisYear, thisMonth-1, 1)
      cal.add(MONTH, 1)
      (cal.get(YEAR), cal.get(MONTH)+1)
    }
    val postDateStr = "%04d-%02d-01" format (postYear, postMonth)

    val fileName = s"../../contribute/scala-fame-data/_posts/${postDateStr}-scala-fame-${thisMonthStr}.md"

    progress("Writing output to " + fileName)

    val writer = new java.io.PrintWriter(fileName)
    try output foreach writer.println
    finally writer.close()
  }

  def getMonthName(month: Int): String = (month: @switch) match {
    case 1 => "January"
    case 2 => "February"
    case 3 => "March"
    case 4 => "April"
    case 5 => "May"
    case 6 => "June"
    case 7 => "July"
    case 8 => "August"
    case 9 => "September"
    case 10 => "October"
    case 11 => "November"
    case 12 => "December"
  }

  // JSON extractors
  class CC[T] {
    def unapply(a: Any): Option[T] = Some(a.asInstanceOf[T])
  }

  object M extends CC[Map[String, Any]]
  object L extends CC[List[Any]]
  object S extends CC[String]
  object D extends CC[Double]
  object B extends CC[Boolean]

  object I {
    def unapply(a: Any): Option[Int] = Some(a.asInstanceOf[Double].toInt)
  }
}
