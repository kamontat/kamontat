import { GatsbyConfig } from "gatsby"
import { generic, type } from "@kcutils/helper"

import { Builder } from "./Builder"
import { SupportLogger } from "../helpers/SupportLogger"

export type MetadataObject = GatsbyConfig["siteMetadata"]
export class MetadataBuilder<O extends MetadataObject> extends SupportLogger implements Builder<O> {
  private metadata: O

  constructor(base: O) {
    super()
    this.metadata = base
  }

  load<OO extends MetadataObject>(mt: OO): MetadataBuilder<O & OO> {
    this.metadata = Object.assign(this.metadata, mt) as O & OO
    return this as MetadataBuilder<O & OO>
  }

  new<K extends string, V = unknown>(key: K, value: type.WithUndefined<V>): MetadataBuilder<O & Record<K, V>> {
    if (generic.isExist(this.metadata)) {
      this.logger.print("info", { message: `create new metadata { [${key}]: "${value}" }`, scopes: ["meta"] })
      this.metadata[key] = value as O[K]
    } else {
      this.logger.print("warn", { message: `ignore [${key}] because base metadata is not exist`, scopes: ["meta"] })
    }
    return this as MetadataBuilder<O & Record<K, V>>
  }

  get<K extends keyof O = keyof O, V extends O[K] = O[K]>(key: K): V {
    return this.metadata[key] as V
  }

  build(): O {
    return this.metadata
  }
}
