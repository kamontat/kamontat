/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useIntl } from "gatsby-plugin-intl"

import { BaseOptions } from "../layout/Base"
import { useTheme } from "@emotion/react"

export type Meta = JSX.IntrinsicElements["meta"]

export interface SEOOptions extends BaseOptions {
  description: string
  meta?: Meta[]
  /**
   * page name
   */
  pageName: string
  /**
   * website title from graphql
   */
  title?: string
}

function SEO({ title, pageName, description, meta }: SEOOptions): JSX.Element {
  const intl = useIntl()
  const theme = useTheme()
  const defaultMeta: Meta[] = [
    {
      name: "title",
      content: title,
    },
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang: intl.locale,
        theme: theme.name,
      }}
      title={pageName}
      titleTemplate={title ? `%s | ${title}` : `%s`}
      meta={defaultMeta.concat(meta ?? [])}
    />
  )
}

export default SEO
