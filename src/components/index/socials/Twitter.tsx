import React from "react"
import { FaTwitter } from "react-icons/fa"

import { SocialIcon, SocialIconOptions } from "./SocialIcon"

export const Twitter = (args: SocialIconOptions): JSX.Element => {
  return <SocialIcon color="#46C1F6" Component={FaTwitter} {...args} />
}
