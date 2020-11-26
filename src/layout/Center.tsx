import React from "react"
import tw from "twin.macro"
import DefaultLayout, { DefaultLayoutOptions } from "./Default"

const FullHeightContainer = tw.div`
  h-full
`

const CenterContainer = tw.div`
  flex flex-col items-center justify-center text-center h-full
`

export default ({ children, pageName, description }: DefaultLayoutOptions): JSX.Element => {
  return (
    <DefaultLayout pageName={pageName} description={description}>
      <FullHeightContainer>
        <CenterContainer>{children}</CenterContainer>
      </FullHeightContainer>
    </DefaultLayout>
  )
}
