import React from "react"
import SEO from './seoNew'

class Header extends React.Component {
  constructor() {
    super()

    this.state = {
      showNav: false,
      title: "",
      items: "",
      openFromRight: "",
    }
  }

  render() {
    return (
      <>
        <SEO />
      </>
    )
  }
}

export default Header
