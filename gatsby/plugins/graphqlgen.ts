import { DefaultPluginOption } from "./base"

export type GraphqlCodegenPluginOption = Record<string, string>

export interface GraphqlCodegenPlugin {
  resolve: string
  options: GraphqlCodegenPluginOption
}

export interface GraphqlCodegenConfig {
  typesPrefix: string
}

export interface GraphqlPluckModule {
  name: string
  identifier: string
}

export interface GraphqlPluckConfig {
  globalGqlIdentifierName?: string
  modules?: GraphqlPluckModule[]
}

export interface GraphqlAdditionalSchemas {
  key: string
  fileName?: string
  documentPaths?: string[]
  pluckConfig?: GraphqlPluckConfig
  schema?: string[]
  codegenConfig?: GraphqlCodegenConfig
  codegenPlugins?: GraphqlCodegenPlugin[]
}

export interface GraphqlCodegenOptions extends DefaultPluginOption {
  codegen?: boolean
  documentPaths?: string[]
  fileName?: string
  codegenDelay?: number
  failOnError?: boolean
  codegenConfig?: GraphqlCodegenConfig
  codegenPlugins?: GraphqlCodegenPlugin[]
  additionalSchemas?: GraphqlAdditionalSchemas[]
}
