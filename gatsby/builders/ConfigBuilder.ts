import { GatsbyConfig } from "gatsby"
import { Builder } from "./Builder"

export class ConfigBuilder {
  static new(debugMode = false): ConfigBuilder {
    return new ConfigBuilder(debugMode)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private builder: Record<string, Builder<any>>
  private constructor(private debugMode: boolean) {
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
      const obj = { [key]: this.builder[key].build() }
      if (this.debugMode) {
        console.debug(obj)
      }

      return Object.assign(p, obj)
    }, obj)
  }
}
