import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import Footer2 from "./Footer2"
//import SideNav from "react-simple-sidenav"
//import { Link } from 'gatsby'
//import { LogoWshadowDarkVertSm } from '../images/index'
import NavMobile from './NavMobile'
import NavbarCustom from "./NavBar"


import "bootstrap/dist/css/bootstrap.min.css"
import '../css/main.css'

import "./layout.css"


const Layout = ({ children, hideFooter }) => (
  /*const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author {
		name
	 }
        }
      }
    }
  `)*/
    <>
      <Header /*siteTitle={data.site.siteMetadata.title}*/ />
      <NavbarCustom />
      <NavMobile />

      {children}
      {!hideFooter && <Footer2 />}
    </>
  )

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

export default Layout
