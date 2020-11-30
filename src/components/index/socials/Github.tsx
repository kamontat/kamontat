import React from "react"
import { FaGithubAlt } from "react-icons/fa"

import { SocialIcon, SocialIconOptions } from "./SocialIcon"

export const Github = (args: SocialIconOptions): JSX.Element => {
  return <SocialIcon color="#24292E" Component={FaGithubAlt} {...args} />
}
