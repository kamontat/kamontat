import React from "react"
import tw from "twin.macro"
import { IntlContextConsumer, changeLocale, Link } from "gatsby-plugin-intl"

import { BaseOptions } from "../Base"
import { IntlDropdown } from "./IntlDropdown"
import { ThemeDropdown } from "./ThemeDropdown"
import { Dropdown } from "./Dropdown"
import { getLanguageName } from "../../features/intl"
import { Theme, useTheme } from "@emotion/react"
import { ThemeName } from "../../features/theme"

const Navbar = tw.nav`
  flex items-center justify-between flex-wrap p-3
`

const NavTitleContainer = tw.div`
  flex items-center flex-shrink-0 mr-6
`

const NavTitle = tw(Link)`
  font-semibold text-xl tracking-tight
`

const NavBodyContainer = tw.div`
  w-auto flex-grow flex items-center
`

const NavBodyLeftContainer = tw.div`
  flex-grow
`

const NavBodyRightContainer = tw.div`
  flex items-center
`

interface HeaderOptions extends BaseOptions {
  title: string | undefined
}

export const Header = ({ title }: HeaderOptions): JSX.Element => {
  const IntlConsumer: React.Consumer<{ languages: string[]; language: string }> = IntlContextConsumer
  const theme = useTheme()

  return (
    <Navbar>
      <NavTitleContainer>
        <NavTitle to={"/"}>{title || "Unknown"}</NavTitle>
      </NavTitleContainer>
      <NavBodyContainer>
        <NavBodyLeftContainer></NavBodyLeftContainer>
        <NavBodyRightContainer>
          <IntlConsumer>
            {({ languages, language }) => {
              return (
                <Dropdown
                  current={language}
                  choices={languages}
                  equally={(c, o) => c == o}
                  toName={(t) => getLanguageName(t as string)}
                  onMenu={(t) => changeLocale(t as string)}
                />
              )
            }}
          </IntlConsumer>

          <Dropdown
            current={theme}
            choices={[ThemeName.DARK, ThemeName.BLACK, ThemeName.WHITE]}
            equally={(c, o) => (c as Theme).name == o}
            toName={(t) => (t as Theme)?.name ?? t}
            onMenu={(t) => theme.newTheme({ name: t as ThemeName })}
          />
        </NavBodyRightContainer>
      </NavBodyContainer>
    </Navbar>
  )
}
