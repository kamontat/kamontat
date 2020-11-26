import React from "react"
import { Helmet } from "react-helmet"
import { BaseOptions } from "../layout/Base"

import { Meta } from "./Metadata"

interface RedirectOptions extends BaseOptions {
  link?: string
  second?: number
}

const Redirect = ({ link, second }: RedirectOptions): JSX.Element => (
  <Helmet
    meta={[{ "http-equiv": "refresh", content: `${second ?? 0}; url=${link ?? "/?error=true"}` } as Meta]}
  ></Helmet>
)

export default Redirect
