import React from "react"
import tw, { styled } from "twin.macro"

import { BaseOptions } from "../../layout/Base"

interface TitleOptions extends BaseOptions {
  name?: string
  shortname?: string
}

// const Name = styled.h1(() => [tw`font-sans text-xl lg:text-2xl `])
const Name = styled.h1(() => [tw`pt-4 m-1`, tw`font-serif text-xl lg:text-2xl`])
const Highlight = styled.span(() => [tw`font-semibold hover:font-bold`])

export const Title = ({ name, shortname }: TitleOptions): JSX.Element => {
  if (name && shortname)
    return (
      <Name>
        <Highlight>{name}</Highlight> ({shortname})
      </Name>
    )
  else if (name) {
    return (
      <Name>
        <Highlight>{name}</Highlight>
      </Name>
    )
  } else if (shortname) {
    return <Name>{shortname}</Name>
  } else {
    return <span></span>
  }
}
