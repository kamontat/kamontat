import React from "react"
import { IconContext } from "react-icons"
import tw from "twin.macro"

import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl"

import { Document } from "@contentful/rich-text-types"
import { Randoms, Seeds } from "@kcutils/random"

import { BaseOptions } from "../layout/Base"
import CenterLayout from "../layout/Center"

import RichText from "../components/ContentfulRichText"

import { Avatar } from "../components/index/Avatar"
import { Title } from "../components/index/Title"
import { Definition } from "../components/index/Definition"
import { SocialMedia, SocialObject } from "../components/index/SocialMedia"

import { IndexPageQueryQuery } from "../../types/gatsby-graphql"

export const query = graphql`
  query IndexPageQuery($language: String) {
    information: contentfulInformation(node_locale: { eq: $language }) {
      name
      shortName
      definition
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
    fluid?: FluidObject
    title?: string
  }

  name?: string
  shortName?: string
  definition?: string

  summary?: Document
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
          {image && <Avatar key={image.id} fluid={image?.fluid} alt={image?.title} />}

          <Title name={name} shortname={shortName} />
          <Definition message={definition} />

          {summary && <RichText css={[tw`text-center`]} json={summary} />}

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

  const summary: Document = data?.information?.summary?.json ?? undefined

  // TODO: Make this more easier to read
  const socials =
    data?.information?.socials
      ?.map((a) => {
        if (!a) return undefined
        if (!a.name || !a.url) return undefined
        return {
          key: a.key,
          name: a.name,
          url: a.url,
          username: a.username ?? undefined,
        }
      })
      .filter<SocialObject>((a): a is SocialObject => a !== undefined) ?? []

  return (
    <IndexPage
      pageName={pageName}
      image={{
        id: profileImage?.id,
        title: profileImage?.title ?? undefined,
        fluid: (profileImage?.fluid ?? undefined) as FluidObject | undefined,
      }}
      name={name}
      shortName={shortName}
      definition={definition}
      summary={summary}
      socials={socials}
    ></IndexPage>
  )
}
