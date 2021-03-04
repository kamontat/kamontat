import { generic, array } from "@kcutils/helper"
import { Actions } from "gatsby"
import { join, resolve } from "path"
import { SupportLogger } from "../helpers/SupportLogger"

interface GoPathOptions {
  path: string[] | string
  url: string
  second?: number
}

type GoPathCreator<T> = (t: T) => GoPathOptions
export class PageBuilder extends SupportLogger {
  constructor(private action: Actions) {
    super()
  }

  goPath<T>(data: T | undefined | null, fn: GoPathCreator<T>): this {
    if (generic.nonEmpty(data)) {
      const options = fn(data)
      const fullpath = "/" + join("go", ...array.toArray(options.path).map((v) => v.toLowerCase()))
      const redirector = resolve("./src/templates/redirector.tsx")
      const context = {
        link: options.url,
        second: options.second ?? 0,

        // Create `intl` object so `gatsby-plugin-intl` will skip
        // generating language variations for this page
        intl: {
          language: "",
          defaultLanguage: "",
          languages: [],
          messages: [],
          routed: true,
          originalPath: options.url,
          redirect: false,
        },
      }

      this.logger.print("info", {
        message: `redirect ${fullpath} to ${context.link} in ${context.second} second(s)`,
        scopes: ["path"],
      })
      this.action.createPage({
        matchPath: fullpath,
        path: fullpath,
        component: redirector,
        context,
      })
    } else {
      this.logger.print("warn", { message: `Input data is '${data}' which is falsely value`, scopes: ["path"] })
    }

    return this
  }

  goPaths<T>(array: T[], fn: GoPathCreator<T>): this {
    if (array && array.length > 0) {
      array.map((v) => this.goPath(v, fn))
    } else {
      this.logger.print("warn", { message: `Cannot create path because input array is empty`, scopes: ["path"] })
    }

    return this
  }
}
