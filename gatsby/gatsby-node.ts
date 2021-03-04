/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

import { GatsbyNode } from "gatsby"
import { env } from "@kcutils/helper"

import { DataQueryQuery } from "../types/gatsby-graphql"
import { PageBuilder } from "./builders/PageBuilder"

type CreatePages = GatsbyNode["createPages"]

export const createPages: CreatePages = async ({ graphql, actions }) => {
  const builder = new PageBuilder(actions)
  const { data } = await graphql<DataQueryQuery>(`
    query DataQuery {
      social: allContentfulSocial(filter: { node_locale: { eq: "en-US" } }) {
        accounts: nodes {
          name
          url
        }
      }

      file: allContentfulDocument(filter: { node_locale: { eq: "en-US" } }) {
        documents: nodes {
          name
          file {
            data: file {
              url
            }
          }
        }
      }
    }
  `)

  builder
    .goPaths(data.social.accounts, (a) => ({ url: a.url, path: a.name }))
    .goPaths(data.file.documents, (d) => ({
      path: d.name,
      url: d.file.data.url,
    }))
    .goPath(env.read("CONTENTFUL_SPACE_ID", ""), (id) => ({
      path: "cms",
      url: `https://app.contentful.com/spaces/${id}/home`,
    }))
}
