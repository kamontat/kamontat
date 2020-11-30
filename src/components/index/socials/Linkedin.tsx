import React from "react"
import { FaLinkedinIn } from "react-icons/fa"

import { SocialIcon, SocialIconOptions } from "./SocialIcon"

export const Linkedin = (args: SocialIconOptions): JSX.Element => {
  return <SocialIcon color="#0E76A8" Component={FaLinkedinIn} {...args} />
}
