import React from "react"
import { FaInstagram } from "react-icons/fa"

import { SocialIcon, SocialIconOptions } from "./SocialIcon"

export const Instagram = (args: SocialIconOptions): JSX.Element => {
  return <SocialIcon color={args.color ?? "#E1306C"} Component={FaInstagram} {...args} />
}
