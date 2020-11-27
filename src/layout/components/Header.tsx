import React from "react"
import tw from "twin.macro"

import { BaseOptions } from "../Base"
import { IntlDropdown } from "./IntlDropdown"
import { ThemeDropdown } from "./ThemeDropdown"

const Navbar = tw.nav`
  flex items-center justify-between flex-wrap p-3
`

const NavTitleContainer = tw.div`
  flex items-center flex-shrink-0 mr-6
`

// TODO: Support link to home page
const NavTitle = tw.span`
  font-semibold text-xl tracking-tight
`

const NavBodyContainer = tw.div`
  w-auto flex-grow flex items-center
`

const NavBodyLeftContainer = tw.div`
  flex-grow
`

const NavBodyRightContainer = tw.div`
  flex
`

interface HeaderOptions extends BaseOptions {
  title: string | undefined
}

export const Header = ({ title }: HeaderOptions): JSX.Element => {
  return (
    <Navbar>
      <NavTitleContainer>
        <NavTitle>{title || "Unknown"}</NavTitle>
      </NavTitleContainer>
      <NavBodyContainer>
        <NavBodyLeftContainer></NavBodyLeftContainer>
        <NavBodyRightContainer>
          <IntlDropdown />
          <ThemeDropdown />
        </NavBodyRightContainer>
      </NavBodyContainer>
    </Navbar>
  )
}
