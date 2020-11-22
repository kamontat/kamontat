import { GatsbyConfig } from "gatsby"
import { generic } from "@kcutils/helper"

import { DefaultPluginOption } from "../plugins/base"
import { Builder } from "./Builder"
import { SupportLogger } from "../helpers/SupportLogger"

export type PluginObject = GatsbyConfig["plugins"]
export class PluginBuilder<M extends Record<string, DefaultPluginOption>>
  extends SupportLogger
  implements Builder<PluginObject> {
  private plugins: PluginObject
  private disabledToggle: boolean

  constructor() {
    super()
    this.plugins = []
    this.disabledToggle = false
  }

  disabled(): this {
    this.disabledToggle = true
    return this
  }

  new<K extends keyof M = keyof M, V = M[K]>(k: K, v?: V): this {
    if (this.disabledToggle) {
      this.disabledToggle = false
      return this
    }

    if (generic.isExist(v)) this.plugins.push({ resolve: k as string, options: (v as unknown) as DefaultPluginOption })
    else this.plugins.push(k as string)

    this.logger.print("info", { message: `New ${k} plugin added`, scopes: ["plugin"] })
    return this
  }

  build(): PluginObject {
    return this.plugins
  }
}
