import React from "react"
import SEO from "./seoNew"
import NavMobile from "./NavMobile"
import NavbarCustom from "./NavBar"
//class Header extends React.Component {
//  constructor() {
//    super()

//    this.state = {
//      showNav: false,
//      title: "",
//      items: "",
//      openFromRight: "",
//    }
//  }

//  render() {
//  return (
const Header = () => (
  <>
    <NavbarCustom />
    <NavMobile />
    <SEO />
  </>
)
//  }
//}

export default Header
