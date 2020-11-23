import { DefaultPluginOption } from "./base"
import { EmotionOptions } from "./emotion"
import { FileSystemOptions } from "./filesystem"
import { GTMOptions } from "./gtm"
import { ReactHelmetOptions } from "./helmet"
import { ManifestPluginOptions } from "./manifest"
import { NetlifyOptions } from "./netlify"
import { SentryOptions } from "./sentry"
import { SitemapOptions } from "./sitemap"
import { ContentfulOptions } from "./contentful"

export type PluginMapping = {
  "gatsby-source-filesystem": FileSystemOptions
  "gatsby-source-contentful": ContentfulOptions

  "gatsby-plugin-react-helmet": ReactHelmetOptions
  "gatsby-plugin-manifest": ManifestPluginOptions
  "gatsby-plugin-emotion": EmotionOptions
  "gatsby-plugin-google-tagmanager": GTMOptions
  "gatsby-plugin-sharp": DefaultPluginOption
  "gatsby-plugin-graphql-codegen": DefaultPluginOption
  "gatsby-plugin-netlify": NetlifyOptions
  "gatsby-plugin-sentry": SentryOptions
  "gatsby-plugin-sitemap": SitemapOptions

  "gatsby-transformer-sharp": DefaultPluginOption
}