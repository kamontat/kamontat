import React from "react"
import tw from "twin.macro"

import { BaseOptions } from "../../layout/Base"

const Container = tw.div`
  flex flex-col md:flex-row
`

const Dashboard = ({ children }: BaseOptions): JSX.Element => <Container>{children}</Container>

export default Dashboard
