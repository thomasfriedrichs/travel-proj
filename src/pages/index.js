import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/Seo"
import Hero from "../components/hero/index"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
  </Layout>
)

export default IndexPage
