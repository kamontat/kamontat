import { GatsbyConfig } from "gatsby"
import { TSConfigSetupOptions } from "gatsby-plugin-ts-config"

import { ConfigBuilder } from "./builders/ConfigBuilder"
import { MetadataBuilder } from "./builders/MetadataBuilder"
import { PluginBuilder } from "./builders/PluginBuilder"
import { ConfigHelper } from "./helpers/ConfigHelper"

import { MetadataMapping } from "./metadata"
import { PluginMapping } from "./plugins"

import metaJson from "../data/metadata.json"

export default ({ projectRoot }: TSConfigSetupOptions): GatsbyConfig => {
  const helper = new ConfigHelper(projectRoot ?? process.cwd())
  const metaBuilder = new MetadataBuilder<MetadataMapping>(metaJson)
    .new("description", helper.getPackageJson("description"))
    .new("author", helper.getPackageJson("author"))
    .new("env", helper.getEnv("NODE_ENV"))
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
    background_color: `#663399`,
    theme_color: `#663399`,
    display: `minimal-ui`,
    icon: helper.joinRootPath("src", "images", "gatsby-icon.png"),
  })

  // https://www.gatsbyjs.org/packages/gatsby-plugin-graphql-codegen
  pluginBuilder.new("gatsby-plugin-graphql-codegen", {
    fileName: helper.joinPath("types", "gatsby-graphql.ts"),
    documentPaths: [helper.joinPath("src", "**", "*.{ts,tsx}")],
  })

  // @todo #1 remove babel config in gatsby-config.js and remove @babel/plugin-proposal-decorators @emotion/babel-plugin-jsx-pragmatic after gatsby-plugin-emotion already support emotion 11
  // pluginBuilder.new(`gatsby-plugin-emotion`, {
  //   cssPropOptimization: true,
  //   sourceMap: helper.isDev(),
  //   autoLabel: helper.isDev(),
  //   labelFormat: helper.isDev() ? "[filename]-[local]" : "",
  // })

  return ConfigBuilder.new().apply("siteMetadata", metaBuilder).apply("plugins", pluginBuilder).build()
}
