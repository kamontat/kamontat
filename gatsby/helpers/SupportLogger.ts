import { env } from "@kcutils/helper"
import { WithLogger, LoggerBuilder, LoggerOptionBuilder, LoggerSettingBuilder } from "@kcutils/logger"

export class SupportLogger extends WithLogger {
  constructor() {
    super(
      LoggerBuilder.initial().withOption(
        LoggerOptionBuilder.initial()
          .withScopes(["gatsby"])
          .withColor()
          .withLevel(env.isProduction() ? "error" : "info")
          .withDatetime("datetime")
          .withSetting("filename", LoggerSettingBuilder.disabled())
      )
    )
  }
}
