import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import tw, { styled } from "twin.macro"

import { BaseOptions } from "../../layout/Base"

interface AvatarOptions extends BaseOptions {
  alt?: string
  image?: IGatsbyImageData
}

const Image = styled(GatsbyImage)(() => [tw`w-64 h-auto mx-auto`, tw`rounded md:rounded-lg`])

export const Avatar = ({ image, alt }: AvatarOptions): JSX.Element => {
  if (image) return <Image image={image} alt={alt ?? "unknown"} />
  else return <div />
}
