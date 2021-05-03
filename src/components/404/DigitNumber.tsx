import { useTheme } from "@emotion/react"
import React from "react"
import tw, { styled } from "twin.macro"
import { BaseOptions } from "../../layout/Base"

const Container = tw.div`
  grid grid-cols-5 gap-3 grid-rows-5 m-4
`

interface PanelOptions extends BaseOptions {
  isOpen: boolean
}
// const Panel = ({ isOpen }: PanelOptions) => <div tw="w-10 h-10">{isOpen ? "O" : "C"}</div>
const Panel = styled.div<PanelOptions>(({ isOpen, theme }) => [
  tw`w-6 h-6 md:(w-10 h-10)`,
  isOpen && `background-color: ${theme.properties.oppositeBackground}`,
  !isOpen && `background-color: ${theme.properties.secondaryBackground}`,
])

interface DigitNumberOptions extends BaseOptions {
  data: Array<Array<boolean>>
}
export const DigitNumber = ({ data }: DigitNumberOptions): JSX.Element => {
  const theme = useTheme()
  return (
    <Container>
      {data.map((row) => {
        return row.map((elem) => {
          return <Panel isOpen={elem} theme={theme} />
        })
      })}
    </Container>
  )
}

export const number4 = [
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, true, true, true, true],
  [false, false, false, false, true],
  [false, false, false, false, true],
]

export const number0 = [
  [true, true, true, true, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
  [true, true, true, true, true],
]
