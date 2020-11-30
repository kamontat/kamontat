import React from "react"
import { FaYoutube } from "react-icons/fa"

import { SocialIcon, SocialIconOptions } from "./SocialIcon"

export const Youtube = (args: SocialIconOptions): JSX.Element => {
  return <SocialIcon color="#DE463B" Component={FaYoutube} {...args} />
}
