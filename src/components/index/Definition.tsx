import React from "react"
import tw, { styled } from "twin.macro"

import { BaseOptions } from "../../layout/Base"

interface DefinitionOptions extends BaseOptions {
  message?: string
}

const Message = styled.h2(() => [tw`pb-3 font-sans text-lg`])

export const Definition = ({ message }: DefinitionOptions): JSX.Element => {
  if (message) return <Message>{message}</Message>
  else return <span></span>
}
