import * as React from "react"

import Layout from "../components/layout/Index.js"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesnt exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
