import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <div class="Header">
    <div class="HeaderGroup">
      <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" / ></Link>
      <Link to="/about">About</Link>
      <Link to="/writing">Writings</Link>
      <Link to="/work">Work</Link>
      <Link to="/art">Art</Link>
      <Link to="/contact"><button>Contact</button></Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
