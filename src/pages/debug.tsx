import React from "react"
import tw, { styled } from "twin.macro"

import DefaultLayout from "../layout/Default"

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
  const data: KeyValue[] = []
  data.push({ key: "Applicant Information", value: "Personal details and application." })

  data.push({ key: "Full name", value: "Margot Foster" })
  data.push({ key: "Application for", value: "Backend Developer" })
  data.push({ key: "Email address", value: "margotfoster@example.com" })
  data.push({ key: "Salary expectation", value: "$120,000" })
  data.push({
    key: "About",
    value: `Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure
nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.`,
  })

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
