import { DefaultPluginOption } from "./base"
import { EmotionOptions } from "./emotion"
import { FileSystemOptions } from "./filesystem"
import { ReactHelmetOptions } from "./helmet"
import { ManifestPluginOptions } from "./manifest"

export type PluginMapping = {
  "gatsby-source-filesystem": FileSystemOptions

  "gatsby-plugin-react-helmet": ReactHelmetOptions
  "gatsby-plugin-manifest": ManifestPluginOptions
  "gatsby-plugin-sharp": DefaultPluginOption
  "gatsby-plugin-graphql-codegen": DefaultPluginOption
  "gatsby-plugin-emotion": EmotionOptions

  "gatsby-transformer-sharp": DefaultPluginOption
}
