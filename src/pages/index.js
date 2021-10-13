import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/Seo";
import Hero from "../components/hero/index";
import Trips from "../components/trips";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    <Trips/>
  </Layout>
)

export default IndexPage
