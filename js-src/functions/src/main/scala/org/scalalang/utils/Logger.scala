package org.scalalang.utils

import org.scalajs.dom.console

import scala.reflect.ClassTag
import scala.scalajs.js

/**
  * TODO add description
  *
  * @author dylan.owen
  * @since Mar-2017
  */
object Logger {

  type Level = Int

  object Level {
    val Error: Level = 1
    val Warn: Level = 3
    val Info: Level = 5
    val Debug: Level = 7
    val Trace: Level = 9
  }

  def apply[C](implicit clazz: ClassTag[C]): Logger = {
    Logger(clazz.runtimeClass.getName, RootLogger)
  }

  def apply(prefix: String, parentLogger: LoggerUtil = RootLogger): Logger = {
    new Logger(prefix + ":\t", parentLogger)
  }
}

trait LoggerUtil {

  import Logger.Level

  protected var logLevel: Level = Level.Trace

  @inline
  def logAndThrow(message: String, t: String => Throwable = new RuntimeException(_)): Nothing = {
    throw logAndGet(message, t)
  }

  @inline
  def logAndThrow(message: String, t: Throwable): Nothing = {
    error(message, t.getMessage)

    throw t
  }

  @inline
  def logAndThrow(t: Throwable): Nothing = {
    error(t.getMessage)

    throw t
  }

  @inline
  def logAndGet(message: String, t: String => Throwable = new RuntimeException(_)): Throwable = {
    error(message)

    t(message)
  }

  @inline
  def log(logLevel: Level, message: => js.Any, optionalMessages: js.Any*): Unit = logLevel match {
    case Level.Trace => trace(message, optionalMessages)
    case Level.Debug => debug(message, optionalMessages)
    case Level.Info => info(message, optionalMessages)
    case Level.Warn => warn(message, optionalMessages)
    case Level.Error => error(message, optionalMessages)
  }

  @inline
  def warn(t: Throwable): Unit = {
    warn(t.getMessage)
  }

  @inline
  def error(t: Throwable): Unit = {
    error(t.getMessage)
    t.printStackTrace()
  }

  @inline
  def trace(message: => js.Any, optionalMessages: js.Any*): Unit = {
    internalLog(console.log, Level.Trace, message, optionalMessages)
  }

  @inline
  def debug(message: => js.Any, optionalMessages: js.Any*): Unit = {
    internalLog(console.log, Level.Debug, message, optionalMessages)
  }

  @inline
  def info(message: => js.Any, optionalMessages: js.Any*): Unit = {
    internalLog(console.info, Level.Info, message, optionalMessages)
  }

  @inline
  def warn(message: => js.Any, optionalMessages: js.Any*): Unit = {
    internalLog(console.warn, Level.Warn, message, optionalMessages)
  }

  @inline
  def error(message: => js.Any, optionalMessages: js.Any*): Unit = {
    internalLog(console.error, Level.Error, message, optionalMessages)
  }

  @inline
  private[utils] def internalLog(logger: (js.Any, Seq[js.Any]) => Unit,
                                 level: Level,
                                 lazyMessage: => js.Any,
                                 optionalMessages: Seq[js.Any]): Unit

  def setTrace(): Unit = this.logLevel = Level.Trace

  def setDebug(): Unit = this.logLevel = Level.Debug

  def setInfo(): Unit = this.logLevel = Level.Info

  def setWarn(): Unit = this.logLevel = Level.Warn

  def setError(): Unit = this.logLevel = Level.Error
}

class Logger private(prefix: String, private val parentLogger: LoggerUtil) extends LoggerUtil {

  import Logger._

  override private[utils] def internalLog(logger: (js.Any, Seq[js.Any]) => Unit,
                                          level: Level,
                                          lazyMessage: => js.Any,
                                          optionalMessages: Seq[js.Any]): Unit = {
    if (logLevel >= level) {
      parentLogger.internalLog(logger, level, {
        prefix + lazyMessage
      }, optionalMessages)
    }
  }
}

object RootLogger extends LoggerUtil {

  import Logger.Level

  logLevel = Level.Info

  @inline
  override private[utils] def internalLog(logger: (js.Any, Seq[js.Any]) => Unit,
                                          level: Level,
                                          lazyMessage: => js.Any,
                                          optionalMessages: Seq[js.Any]): Unit = {
    if (logLevel >= level) {
      val message: js.Any = lazyMessage
      logger(message, optionalMessages)
    }
  }
}