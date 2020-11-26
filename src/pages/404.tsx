import React from "react"

import CenterLayout from "../layout/Center"

const NotFoundPage = (): JSX.Element => (
  <CenterLayout pageName="404: Not found">
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </CenterLayout>
)

export default NotFoundPage
