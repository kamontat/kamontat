import React from "react"
import { Helmet } from "react-helmet"
import { BaseOptions } from "../layout/Base"

import { Meta } from "./Metadata"

interface RedirectOptions extends BaseOptions {
  link?: string
  second?: number
}

const Redirect = ({ link, second }: RedirectOptions): JSX.Element => {
  const option = {
    second: second ?? 0,
    link: link ?? "/?redirect=failed",
  }

  const meta = {
    "http-equiv": "refresh",
    content: `${option.second}; url=${option.link}`,
  } as Meta

  return <Helmet meta={[meta]} />
}

export default Redirect
