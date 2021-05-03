import { GatsbyConfig } from "gatsby"

import { SupportLogger } from "../helpers/SupportLogger"
import { Builder } from "./Builder"

export type FlagObject = GatsbyConfig["flags"]

export class FlagBuilder extends SupportLogger implements Builder<FlagObject> {
  private flags: FlagObject

  constructor() {
    super()
    this.flags = {}
  }

  enable(name: string): this {
    this.flags[name] = true
    return this
  }

  disable(name: string): this {
    this.flags[name] = true
    return this
  }

  build(): FlagObject {
    return this.flags
  }
}
