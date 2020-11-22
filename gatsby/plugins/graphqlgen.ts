import { string } from "@kcutils/helper"
import { DefaultPluginOption } from "./base"

export interface GraphqlCodegenOptions extends DefaultPluginOption {
  codegen?: boolean
  documentPaths?: string[]
  fileName?: string
  codegenDelay?: number
  failOnError?: boolean
  codegenPlugins?: string[]
  additionalSchemas?: string[]
}
