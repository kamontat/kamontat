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
import { I18NOptions } from "./i18n"
import { IntlOptions } from "./intl"
import { GraphqlCodegenOptions } from "./graphqlgen"

export type PluginMapping = {
  "gatsby-source-filesystem": FileSystemOptions
  "gatsby-source-contentful": ContentfulOptions

  "gatsby-plugin-react-helmet": ReactHelmetOptions
  "gatsby-plugin-manifest": ManifestPluginOptions
  "gatsby-plugin-emotion": EmotionOptions
  "gatsby-plugin-google-tagmanager": GTMOptions
  "gatsby-plugin-image": DefaultPluginOption
  "gatsby-plugin-sharp": DefaultPluginOption
  "gatsby-plugin-graphql-codegen": GraphqlCodegenOptions
  "gatsby-plugin-netlify": NetlifyOptions
  "gatsby-plugin-sentry": SentryOptions
  "gatsby-plugin-sitemap": SitemapOptions
  "gatsby-plugin-i18n": I18NOptions
  "gatsby-plugin-intl": IntlOptions

  "gatsby-transformer-sharp": DefaultPluginOption
}
