import { DefaultPluginOption } from "./base"

// Copy from import { FileSystemOptions } from "gatsby-source-filesystem"
// because path is conflict
export interface FileSystemOptions extends DefaultPluginOption {
  name: string
  path: string
  ignore?: string[]
}
