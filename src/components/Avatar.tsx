import React from "react"
import Img, { FluidObject } from "gatsby-image"
import tw, { styled } from "twin.macro"

import { BaseOptions } from "../layout/Base"

interface AvatarOptions extends BaseOptions {
  alt?: string
  fluid?: FluidObject
}

const Image = styled(Img)(() => [tw`w-64 h-auto`])

export const Avatar = ({ fluid, alt }: AvatarOptions): JSX.Element => {
  if (fluid) return <Image fluid={fluid} alt={alt ?? "unknown"} />
  else return <div />
}
