import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/Footer'
import './layout.css';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, keywords'},
      ]}
    />
    <Header />
    {children()}
    {data.allContentfulLink.edges.map(edge => (
      <a href={edge.node.url}>{edge.node.title}</a>
    ))}
    <Footer links={data.allContentfulLink.edges}>
      Backgrounds made in Cinema 4D, iOS app in Swift, site in React. <a href="mailto:support@designcode.io">Email us</a> to ask anything. © 2018
    </Footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          title
          url
          createdAt
        }
      }
    }
  }
`