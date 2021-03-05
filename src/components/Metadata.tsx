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

export interface HtmlOptions extends BaseOptions {
  /**
   * page name (will add to head.title)
   */
  pageName: string

  /**
   * title name on specify page
   */
  title?: string

  /**
   * meta content append on head
   */
  meta?: Meta[]

  /**
   * page languages (for i18n)
   */
  lang?: string

  /**
   * theme name (for theme provider)
   */
  themeName?: string
}

export interface SEOOptions extends HtmlOptions {
  description: string
}

export const Html = ({ themeName, lang, pageName, title, meta }: HtmlOptions): React.ReactElement => {
  return (
    <Helmet
      htmlAttributes={{
        lang: lang ?? "unknown",
        theme: themeName ?? "unknown",
      }}
      title={pageName}
      titleTemplate={title ? `%s | ${title}` : `%s`}
      meta={meta ?? []}
    />
  )
}

export default ({ title, pageName, description, meta }: SEOOptions): JSX.Element => {
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

  const metadata = defaultMeta.concat(meta ?? [])

  return <Html pageName={pageName} lang={intl.locale} themeName={theme.name} title={title} meta={metadata} />
}
