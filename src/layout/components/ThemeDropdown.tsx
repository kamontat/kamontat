import React, { useState } from "react"
import tw, { styled } from "twin.macro"
import { BaseOptions } from "../Base"

import { ThemeContextObject } from "../../features/theme"
import { ThemeName } from "../../features/theme"
import { useTheme } from "@emotion/react"

const RootContainer = tw.div`
  relative
`

const ThemeTitle = tw.button`
  block overflow-hidden focus:outline-none px-4 py-2 leading-none hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0
`

const DropdownContainer = styled.div(({ hidden }) => [
  tw`absolute right-0 mt-1 py-2 rounded-lg shadow-xl`,
  hidden && `visibility: hidden`,
  hidden && `display: none`,
])

const DropdownElement = styled.a(({ hidden }) => [
  tw`block px-4 py-2 cursor-pointer hover:bg-indigo-500 hover:text-white`,
  hidden && `visibility: hidden`,
  hidden && `display: none`,
])

interface ThemeDropdownOptions extends BaseOptions {
  name: ThemeName
  context: ThemeContextObject
}

// TODO: Fix dropdown border and shadow is invisible in dark/black mode
const Dropdown = ({ name, context }: ThemeDropdownOptions): JSX.Element => {
  return (
    <DropdownElement onClick={() => context.newTheme({ name })} hidden={context.name === name}>
      {name}
    </DropdownElement>
  )
}

export const ThemeDropdown = (): JSX.Element => {
  const [onDropdown, toggle] = useState(false)
  const theme = useTheme()

  return (
    <RootContainer onClick={() => toggle((t) => !t)}>
      <ThemeTitle>{theme.name}</ThemeTitle>
      <DropdownContainer hidden={!onDropdown}>
        <Dropdown name={ThemeName.DARK} context={theme}></Dropdown>
        <Dropdown name={ThemeName.LIGHT} context={theme}></Dropdown>
        <Dropdown name={ThemeName.BLACK} context={theme}></Dropdown>
        <Dropdown name={ThemeName.WHITE} context={theme}></Dropdown>
      </DropdownContainer>
    </RootContainer>
  )
}
