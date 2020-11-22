import { GatsbyConfig } from "gatsby"
import { generic } from "@kcutils/helper"

import { Builder } from "./Builder"

export type MetadataObject = GatsbyConfig["siteMetadata"]
export class MetadataBuilder<O extends MetadataObject> implements Builder<O> {
  private metadata: O

  constructor(base: O) {
    this.metadata = base
  }

  load<OO extends MetadataObject>(mt: OO): MetadataBuilder<O & OO> {
    this.metadata = Object.assign(this.metadata, mt) as O & OO
    return this as MetadataBuilder<O & OO>
  }

  new<K extends string, V = unknown>(key: K, value: V): MetadataBuilder<O & Record<K, V>> {
    if (generic.isExist(this.metadata)) this.metadata[key] = value as O[K]
    return this as MetadataBuilder<O & Record<K, V>>
  }

  get<K extends keyof O = keyof O, V extends O[K] = O[K]>(key: K): V {
    return this.metadata[key] as V
  }

  build(): O {
    return this.metadata
  }
}
