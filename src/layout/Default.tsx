import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import tw, { GlobalStyles, styled } from "twin.macro"

import Base, { BaseOptions } from "./Base"

import SEO from "../components/Metadata"
import { Header } from "./components/Header"

import { DefaultLayoutQueryQuery } from "../../types/gatsby-graphql"

const RootContainer = styled.div([
  tw`flex flex-col float-left w-screen`,
  tw`mx-auto px-4 md:px-10 py-4`,
  `height: 100vh`,
  `max-height: 100vh`,
])

const Main = tw.main`
  h-full p-3
`

// const Footer = tw.footer``

export interface DefaultLayoutOptions extends BaseOptions {
  pageName: string
  description?: string
}

export default ({ children, pageName, description }: DefaultLayoutOptions): JSX.Element => {
  const { site } = useStaticQuery<DefaultLayoutQueryQuery>(graphql`
    query DefaultLayoutQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const title = site?.siteMetadata?.title ?? undefined
  const updatedDescription = description ?? site?.siteMetadata?.description ?? "none"

  return (
    <Base>
      <GlobalStyles />
      <SEO pageName={pageName} title={title} description={updatedDescription}></SEO>
      <RootContainer>
        <Header title={title} />
        <Main>{children}</Main>
        {/* <Footer>Footer</Footer> */}
      </RootContainer>
    </Base>
  )
}
