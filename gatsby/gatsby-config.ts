import { config as envConfig } from "dotenv"

import { GatsbyConfig } from "gatsby"
import { TSConfigSetupOptions } from "gatsby-plugin-ts-config"

import { ConfigBuilder } from "./builders/ConfigBuilder"
import { MetadataBuilder } from "./builders/MetadataBuilder"
import { PluginBuilder } from "./builders/PluginBuilder"
import { ConfigHelper } from "./helpers/ConfigHelper"

import { MetadataMapping } from "./metadata"
import { PluginMapping } from "./plugins"
import { constants } from "./constants"

import metaJson from "../data/metadata.json"

export default ({ projectRoot }: TSConfigSetupOptions): GatsbyConfig => {
  const helper = new ConfigHelper(projectRoot ?? process.cwd())
  envConfig({
    debug: true,
    path: helper.joinRootPath(".env"),
    encoding: "utf-8",
  })
  // helper.error({ message: envResult.error.message })

  const metaBuilder = new MetadataBuilder<MetadataMapping>(metaJson)
    .new("description", helper.getPackageJson("description"))
    .new("author", helper.getPackageJson("author"))
    .new("env", helper.getEnv(constants.NODE_ENV))
    .new("package", {
      name: helper.getPackageJson("name"),
      version: helper.getPackageJson("version"),
    })

  const pluginBuilder = new PluginBuilder<PluginMapping>()

  // https://www.gatsbyjs.org/packages/gatsby-source-filesystem
  pluginBuilder.new("gatsby-source-filesystem", { name: "images", path: helper.joinRootPath("src", "images") })

  // https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet
  pluginBuilder.new("gatsby-plugin-react-helmet")

  // https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/
  pluginBuilder.new(`gatsby-plugin-sharp`)

  // https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/
  pluginBuilder.new(`gatsby-transformer-sharp`)

  // https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/
  pluginBuilder.new(`gatsby-plugin-manifest`, {
    name: metaBuilder.get("title"),
    short_name: metaBuilder.get("shortName"),
    start_url: `/`,
    background_color: metaBuilder.get("color").light,
    theme_color: metaBuilder.get("color").light,
    display: `minimal-ui`,
    icon: helper.joinRootPath("src", "images", "gatsby-icon.png"),
  })

  // https://www.gatsbyjs.org/packages/gatsby-plugin-graphql-codegen
  pluginBuilder.new("gatsby-plugin-graphql-codegen", {
    fileName: helper.joinPath("types", "gatsby-graphql.ts"),
    documentPaths: [helper.joinPath("src", "**", "*.{ts,tsx}")],
  })

  // https://www.gatsbyjs.org/packages/gatsby-plugin-google-tagmanager
  pluginBuilder.new("gatsby-plugin-google-tagmanager", {
    id: helper.getEnv(constants.GTM_ID),
    includeInDevelopment: false,

    defaultDataLayer: { platform: "gatsby" },
    routeChangeEventName: "gatsby-route-change",
  })

  // https://www.gatsbyjs.org/packages/gatsby-source-contentful
  pluginBuilder.disabled().new(`gatsby-source-contentful`, {
    host: "cdn.contentful.com",
    spaceId: helper.getEnv(constants.CONTENTFUL_SPACE_ID),
    accessToken: helper.getEnv(constants.CONTENTFUL_DELIVERY_ACCESS_TOKEN),
    downloadLocal: true,
  })

  // https://www.gatsbyjs.org/packages/gatsby-plugin-netlify
  pluginBuilder.new("gatsby-plugin-netlify", {
    headers: {
      "/*": [
        `X-Application-Name: ${helper.getPackageJson("name")}`,
        `X-Application-Version: ${helper.getPackageJson("version")}`,
      ],
    },
  })

  // https://www.gatsbyjs.org/packages/gatsby-plugin-sentry
  pluginBuilder.new(`gatsby-plugin-sentry`, {
    dsn: helper.getEnv(constants.SENTRY_DSN),
    enabled: helper.isProd(),
    debug: false,
    environment: "production",
    release: `${helper.getPackageJson("name")}@v${helper.getPackageJson("version")}`,
    maxBreadcrumbs: 50,
  })

  // TODO: remove babel config in gatsby-config.js and remove @babel/plugin-proposal-decorators @emotion/babel-plugin-jsx-pragmatic after gatsby-plugin-emotion already support emotion 11

  // https://www.gatsbyjs.org/packages/gatsby-plugin-emotion
  pluginBuilder.disabled().new(`gatsby-plugin-emotion`, {
    cssPropOptimization: true,
    sourceMap: helper.isDev(),
    autoLabel: helper.isDev(),
    labelFormat: helper.isDev() ? "[filename]-[local]" : "",
  })

  // https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap
  pluginBuilder.new("gatsby-plugin-sitemap")

  return ConfigBuilder.new().apply("siteMetadata", metaBuilder).apply("plugins", pluginBuilder).build()
}
