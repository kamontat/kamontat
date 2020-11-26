import React from "react"
import Redirect from "../components/Redirect"
import { BaseOptions } from "../layout/Base"

type RedirectorOptions = BaseOptions<{
  link: string
  second?: number
}>

const ExternalRedirectPage = ({ pageContext }: RedirectorOptions): JSX.Element => {
  return <Redirect link={pageContext?.link} second={pageContext?.second} />
}

export default ExternalRedirectPage
