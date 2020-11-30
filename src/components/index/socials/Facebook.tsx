import React from "react"
import { FaFacebookF } from "react-icons/fa"

import { SocialIcon, SocialIconOptions } from "./SocialIcon"

export const Facebook = (args: SocialIconOptions): JSX.Element => {
  return <SocialIcon color="#3B5999" Component={FaFacebookF} {...args} />
}
