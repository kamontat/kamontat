import { GatsbyConfig } from "gatsby"
import { generic } from "@kcutils/helper"

import { DefaultPluginOption } from "../plugins/base"
import { Builder } from "./Builder"

export type PluginObject = GatsbyConfig["plugins"]
export class PluginBuilder<M extends Record<string, DefaultPluginOption>> implements Builder<PluginObject> {
  private plugins: PluginObject
  constructor() {
    this.plugins = []
  }

  new<K extends keyof M = keyof M, V = M[K]>(k: K, v?: V): this {
    if (generic.isExist(v)) this.plugins.push({ resolve: k as string, options: (v as unknown) as DefaultPluginOption })
    else this.plugins.push(k as string)
    return this
  }

  build(): PluginObject {
    return this.plugins
  }
}
