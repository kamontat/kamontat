import React from "react"

import { Link } from "gatsby-plugin-intl"

import Dashboard from "../components/404/Dashboard"
import { DigitNumber, number4, number0 } from "../components/404/DigitNumber"

import CenterLayout from "../layout/Center"

const NotFoundPage = (): JSX.Element => (
  <CenterLayout pageName="404: Not found">
    <Dashboard>
      <DigitNumber data={number4} />
      <DigitNumber data={number0} />
      <DigitNumber data={number4} />
    </Dashboard>
    <p>
      You just hit a route that doesn&#39;t exist... the sadness. (<Link to="/">back</Link>)
    </p>
  </CenterLayout>
)

export default NotFoundPage
