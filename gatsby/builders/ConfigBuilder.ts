import { GatsbyConfig } from "gatsby"
import { Builder } from "./Builder"

export class ConfigBuilder {
  static new(): ConfigBuilder {
    return new ConfigBuilder()
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private builder: Record<string, Builder<any>>
  private constructor() {
    this.builder = {}
  }

  apply<K extends keyof GatsbyConfig = keyof GatsbyConfig, V extends GatsbyConfig[K] = GatsbyConfig[K]>(
    key: K,
    builder: Builder<V>
  ): this {
    this.builder[key] = builder
    return this
  }

  build(): GatsbyConfig {
    const obj: GatsbyConfig = {}
    const keys = Object.keys(this.builder) as Array<keyof GatsbyConfig>
    return keys.reduce((p, key) => {
      return Object.assign(p, { [key]: this.builder[key].build() })
    }, obj)
  }
}
