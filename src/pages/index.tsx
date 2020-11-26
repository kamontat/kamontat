import React from "react"
import { Link } from "gatsby"

import DefaultLayout from "../layout/Default"
import Image from "../components/image"

const IndexPage = (): JSX.Element => (
  <DefaultLayout pageName="Home">
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </DefaultLayout>
)

export default IndexPage
