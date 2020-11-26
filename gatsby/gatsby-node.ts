/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

import { resolve } from "path"
import { GatsbyNode } from "gatsby"

import { DataQueryQuery } from "../types/gatsby-graphql"

type CreatePages = GatsbyNode["createPages"]

const generatePath = (name: string, url?: string) => {
  return {
    matchPath: `/go/${name.toLowerCase()}`,
    path: `/go/${name.toLowerCase()}`,
    component: resolve("./src/templates/redirector.tsx"),
    context: {
      link: url,
    },
  }
}

export const createPages: CreatePages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql<DataQueryQuery>(`
    query DataQuery {
      social: allContentfulSocial(filter: { node_locale: { eq: "en-US" } }) {
        accounts: nodes {
          name
          url
        }
      }
    }
  `)

  if (data) {
    data.social.accounts.forEach(({ url, name }) => createPage(generatePath(name, url)))
  }
}
