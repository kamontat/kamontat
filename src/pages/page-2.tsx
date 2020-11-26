import React from "react"
import { Link } from "gatsby"

import DefaultLayout from "../layout/Default"

const SecondPage = (): JSX.Element => (
  <DefaultLayout pageName="Page 2">
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </DefaultLayout>
)

export default SecondPage
