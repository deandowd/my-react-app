import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Good day to you!</h1>
          <p>Welcome to the website of Dean Dowd. I'm a UX Designer living around Portland, Oregon. Here you'll find samples of my work aside my musings about User Experience, leadership, productivity and hopefully some recreational, random life stuff. </p>
          <p>Welcome to my show, kick back and enjoy.</p>
          <a>Watch the Video</a>
        </div>
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
