import React, { useState } from "react"
import tw, { styled } from "twin.macro"
import { useTheme } from "@emotion/react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

import { BaseOptions } from "../Base"

import { ThemeContextObject } from "../../features/theme"
import { ThemeName } from "../../features/theme"
import { getLanguageName } from "../../features/intl"

type IntlConsumer = React.Consumer<{ languages: string[]; language: string }>

const RootContainer = tw.div`
  relative
`

const LanguageTitle = tw.button`
  block overflow-hidden focus:outline-none px-4 py-2 leading-none hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0
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

interface LanguageDropdownOptions extends BaseOptions {
  lang: string
  current: string
}

const Dropdown = ({ current, lang }: LanguageDropdownOptions): JSX.Element => {
  return (
    <DropdownElement onClick={() => changeLocale(lang)} hidden={current === lang}>
      {getLanguageName(lang)}
    </DropdownElement>
  )
}

export const IntlDropdown = (): JSX.Element => {
  const [onDropdown, toggle] = useState(false)
  const Consumer: IntlConsumer = IntlContextConsumer

  return (
    <Consumer>
      {({ languages, language: currentLocale }) => {
        return (
          <RootContainer onClick={() => toggle((t) => !t)}>
            <LanguageTitle>{getLanguageName(currentLocale)}</LanguageTitle>
            <DropdownContainer hidden={!onDropdown}>
              {languages.map((lang) => {
                return <Dropdown key={lang} current={currentLocale} lang={lang}></Dropdown>
              })}
            </DropdownContainer>
          </RootContainer>
        )
      }}
    </Consumer>
  )
}
