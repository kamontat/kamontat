import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import tw, { styled } from "twin.macro"

import DefaultLayout from "../layout/Default"
import { DebugQueryQuery } from "../../types/gatsby-graphql"

const Container = styled.div(({ theme }) => [
  tw`shadow overflow-hidden sm:rounded-lg`,
  `background-color: ${theme.properties.secondaryBackground}`,
])
const TitleContainer = tw.div`px-4 py-5 sm:px-6`
const Title = tw.h3`text-lg font-medium`
const Description = styled.p(({ theme }) => [tw`mt-1 max-w-2xl text-sm`, `color: ${theme.properties.secondaryText}`])

const TableContainer = styled.div(({ theme }) => [tw`border-t`, `border-color: ${theme.properties.background}`])
const Table = tw.dl``
const Row = styled.div(({ key, theme }) => [
  tw`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`,
  !!key && parseInt(key.toString()) % 2 === 0 ? `color: ${theme.properties.secondaryBackground}` : ``,
])
const RowTitle = tw.dt`text-sm font-medium`
const RowDescription = styled.dd(({ theme }) => [
  tw`mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2`,
  `color: ${theme.properties.secondaryText}`,
])

type KeyValue = { key: string; value: string }

const DebugPage = (): JSX.Element => {
  const { site } = useStaticQuery<DebugQueryQuery>(graphql`
    query DebugQuery {
      site {
        buildTime
        siteMetadata {
          env
          nodeVersion
          npmVersion
          yarnVersion
          package {
            name
            version
          }
          netlify {
            id
            deployID
            context
          }
          git {
            repo
            branch
            commit
            previousCommit
            prID
          }
        }
      }
    }
  `)

  const data: KeyValue[] = []

  // if (siteBuildMetadata) {
  //   if (siteBuildMetadata.buildTime) {
  //     data.push({ key: siteBuildMetadata.id, value: siteBuildMetadata.buildTime })
  //   }
  // }

  if (site) {
    if (site.siteMetadata) {
      if (site.siteMetadata.env) {
        data.push({ key: "Environment", value: site.siteMetadata.env })
      }

      if (site.siteMetadata.package) {
        if (site.siteMetadata.package.name) {
          data.push({ key: "Website name", value: site.siteMetadata.package.name })
        }

        if (site.siteMetadata.package.version) {
          data.push({ key: "Website version", value: site.siteMetadata.package.version })
        }
      }

      if (site.siteMetadata.nodeVersion) {
        data.push({ key: "Node version", value: site.siteMetadata.nodeVersion })
      }

      if (site.siteMetadata.npmVersion) {
        data.push({ key: "NPM version", value: site.siteMetadata.npmVersion })
      }

      if (site.siteMetadata.yarnVersion) {
        data.push({ key: "Yarn version", value: site.siteMetadata.yarnVersion })
      }

      if (site.siteMetadata.netlify) {
        if (site.siteMetadata.netlify.id) {
          data.push({ key: "Build ID", value: site.siteMetadata.netlify.id })
        }

        if (site.siteMetadata.netlify.deployID) {
          data.push({ key: "Deploy ID", value: site.siteMetadata.netlify.deployID })
        }

        if (site.siteMetadata.netlify.context) {
          data.push({ key: "Context", value: site.siteMetadata.netlify.context })
        }
      }

      if (site.siteMetadata.git) {
        if (site.siteMetadata.git.repo) {
          data.push({ key: "Git repository", value: site.siteMetadata.git.repo })
        }

        if (site.siteMetadata.git.branch) {
          data.push({ key: "Git branch", value: site.siteMetadata.git.branch })
        }

        if (site.siteMetadata.git.commit) {
          data.push({ key: "Git commit", value: site.siteMetadata.git.commit })
        }

        if (site.siteMetadata.git.previousCommit) {
          data.push({ key: "Git previous commit", value: site.siteMetadata.git.previousCommit })
        }

        if (site.siteMetadata.git.prID) {
          data.push({ key: "Git PR ID", value: site.siteMetadata.git.prID })
        }
      }
    }

    if (site.buildTime) {
      data.push({ key: "Build time", value: site.buildTime })
    }
  }

  return (
    <div>
      <Container>
        <TitleContainer>
          <Title>Applicant Information</Title>
          <Description>Personal details and application.</Description>
        </TitleContainer>
        <TableContainer>
          <Table>
            {data.map((kv, index) => (
              <Row key={index}>
                <RowTitle>{kv.key}</RowTitle>
                <RowDescription>{kv.value}</RowDescription>
              </Row>
            ))}
          </Table>
        </TableContainer>
      </Container>
    </div>
  )
}

export default (): JSX.Element => {
  return (
    <DefaultLayout pageName="Debug">
      <DebugPage />
    </DefaultLayout>
  )
}
