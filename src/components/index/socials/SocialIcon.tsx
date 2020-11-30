import React from "react"
import { IconType } from "react-icons"
import { Link } from "gatsby-plugin-intl"

import tw from "twin.macro"
import styled from "@emotion/styled/macro"

import { BaseOptions } from "../../../layout/Base"

export interface SocialIconOptions extends BaseOptions {
  type: string
  name: string
  url: string
  title?: string
}

export interface SocialIconRootOptions extends SocialIconOptions {
  name: string
  color: string

  Component: IconType
}

const Tooltip = styled.span`
  ${tw`absolute bottom-0 z-2 px-2 py-3 rounded-xl shadow-lg`}
  ${tw`text-lg font-bold whitespace-no-wrap`}
  ${tw`opacity-0 pointer-events-none`}
  ${tw`transition-all duration-300 ease-popup`}

  ${({ theme, color }) => `
    color: ${theme.properties.background};
    border-color: ${color};
    background-color: ${color};
  `}

  &:before {
    content: "";
    top: -6px;
    left: 50%;

    ${tw`absolute w-3 h-3 z-1`}
    ${tw`transform -translate-x-1/2 rotate-135`}
    ${tw`transition-all duration-300 ease-popup`}

    ${({ color }) => `background-color: ${color};`}
  }
`

const IconContainer = styled.div`
  ${tw`flex flex-col items-center justify-center relative`}
  ${tw`mt-6 mx-5 text-center cursor-pointer z-10`}

  &:hover ${Tooltip} {
    bottom: -70px;
    opacity: 1;
    pointer-events: auto;
  }
`

const IconWrapper = styled(Link)`
  ${({ theme }) => `background-color: ${theme.properties.secondaryText};`}
  ${({ theme }) => `color: ${theme.properties.secondaryBackground};`}
  ${tw`p-3 rounded-full z-10 shadow-lg`}
  ${tw`transition duration-300 ease-popup`}

  ${({ theme, color }) => `
    &:hover {
      color: ${theme.properties.background};
      background-color: ${color};
      border-color: ${color};
    }
  `}
`

// TODO Support color base on color theme mode
export const SocialIcon = ({ Component, type, name, color }: SocialIconRootOptions): JSX.Element => {
  const goPath = `/go/${type ?? name}`
  return (
    <IconContainer key={type}>
      <IconWrapper to={goPath} color={color}>
        <Component title={name} />
      </IconWrapper>
      <Tooltip color={color}>{name}</Tooltip>
    </IconContainer>
  )
}
