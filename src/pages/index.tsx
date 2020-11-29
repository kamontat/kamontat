import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FluidObject } from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl"
import { Randoms, Seeds } from "@kcutils/random"

import CenterLayout from "../layout/Center"
import RichText from "../components/ContentfulRichText"
import { Avatar } from "../components/Avatar"

import { IndexPageQueryQuery } from "../../types/gatsby-graphql"
import { BaseOptions } from "../layout/Base"

export const query = graphql`
  query IndexPageQuery($language: String) {
    information: contentfulInformation(node_locale: { eq: $language }) {
      summary {
        json
      }
      images {
        id
        title
        fluid(maxWidth: 500) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

interface IndexPageOptions extends BaseOptions {
  data: IndexPageQueryQuery
}

const random = new Randoms.Xoshiro128PP(new Seeds.Timestamp())
const IndexPage = ({ data }: IndexPageOptions): JSX.Element => {
  const intl = useIntl()

  const avatar = data.information?.images && random.pick(data.information.images)

  return (
    <CenterLayout pageName={intl.formatMessage({ id: "indexPage.pageName", defaultMessage: "Home" })}>
      {avatar && (
        <Avatar key={avatar.id} fluid={(avatar?.fluid ?? undefined) as FluidObject} alt={avatar?.title ?? undefined} />
      )}
      {/* {summary?.json && <RichText json={summary.json} />} */}
    </CenterLayout>
  )
}

export default IndexPage
