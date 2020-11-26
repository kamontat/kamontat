import React from "react"
import Base, { BaseOptions } from "./Base"

export default ({ children }: BaseOptions): JSX.Element => {
  return <Base>{children}</Base>
}
