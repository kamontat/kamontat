import React from "react"
import tw from "twin.macro"
import { IconContext } from "react-icons"
import { Randoms, Seeds } from "@kcutils/random"

import { graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { useIntl } from "gatsby-plugin-intl"

import { BaseOptions } from "../layout/Base"
import CenterLayout from "../layout/Center"

import RichText from "../components/ContentfulRichText"
import { Avatar } from "../components/index/Avatar"
import { Title } from "../components/index/Title"
import { Definition } from "../components/index/Definition"
import { SocialMedia, SocialObject } from "../components/index/SocialMedia"

import { IndexPageQueryQuery } from "../../types/gatsby-graphql"

import { builder } from "../features/builders/social"

export const query = graphql`
  query IndexPageQuery($language: String) {
    information: contentfulInformation(node_locale: { eq: $language }) {
      name
      shortName
      definition
      summary {
        raw
      }
      images {
        id
        title
        gatsbyImageData(formats: AUTO, width: 500, placeholder: BLURRED)
      }
      socials {
        key
        name
        username
        url
      }
    }
  }
`

const Index = tw.div`px-2 md:px-8 lg:px-12 max-w-prose`

interface IndexPageOptions extends BaseOptions {
  pageName: string
  image: {
    id?: string
    title?: string
    gatsbyImageData?: IGatsbyImageData
  }

  name?: string
  shortName?: string
  definition?: string

  summary?: string
  socials: SocialObject[]
}

const IndexPage = ({
  pageName,
  image,
  name,
  shortName,
  definition,
  summary,
  socials,
}: IndexPageOptions): JSX.Element => {
  return (
    <CenterLayout pageName={pageName}>
      <IconContext.Provider value={{ style: tw`w-8 h-8 block relative` }}>
        <Index>
          {image && <Avatar key={image.id} image={image?.gatsbyImageData} alt={image?.title} />}

          <Title name={name} shortname={shortName} />
          <Definition message={definition} />

          {summary && <RichText css={[tw`text-center`]} raw={summary} />}

          <SocialMedia social={socials} />
        </Index>
      </IconContext.Provider>
    </CenterLayout>
  )
}

interface RootOptions extends BaseOptions {
  data: IndexPageQueryQuery
}

const random = new Randoms.Xoshiro128PP(new Seeds.Timestamp())
export default ({ data }: RootOptions): JSX.Element => {
  const intl = useIntl()

  const pageName = intl.formatMessage({ id: "indexPage.pageName", defaultMessage: "Home" })
  const profileImage = data.information?.images && random.pick(data.information.images)

  const name = data?.information?.name ?? undefined
  const shortName = data?.information?.shortName ?? undefined
  const definition = data?.information?.definition ?? undefined

  const summary = data?.information?.summary?.raw ?? undefined

  const socials = builder(data?.information?.socials)

  return (
    <IndexPage
      pageName={pageName}
      image={{
        id: profileImage?.id,
        title: profileImage?.title ?? undefined,
        gatsbyImageData: (profileImage?.gatsbyImageData ?? undefined) as IGatsbyImageData | undefined,
      }}
      name={name}
      shortName={shortName}
      definition={definition}
      summary={summary}
      socials={socials}
    ></IndexPage>
  )
}
