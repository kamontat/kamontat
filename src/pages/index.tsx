import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import CenterLayout from "../layout/Center"
import { IndexPageQueryQuery } from "../../types/gatsby-graphql"
import RichText from "../components/ContentfulRichText"

const IndexPage = (): JSX.Element => {
  const intl = useIntl()
  const { summary } = useStaticQuery<IndexPageQueryQuery>(graphql`
    query IndexPageQuery {
      summary: contentfulInformationSummaryRichTextNode {
        json
      }
    }
  `)

  return (
    <CenterLayout pageName={intl.formatMessage({ id: "indexPage.pageName", defaultMessage: "Home" })}>
      {summary?.json && <RichText json={summary.json} />}
    </CenterLayout>
  )
}

export default IndexPage
