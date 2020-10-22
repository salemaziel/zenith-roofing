import React, { Component } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import tpoStyle from "../page.module.css"

import { Climbing } from "../../../../images/index"

import SideBar from "../sidebar"

class Section1 extends Component {
  render() {
    return (
      <>
        <section className={tpoStyle.Section}>
          <div className={tpoStyle.sidebarPageContainer}>
            {/*<div className={pageStyle.autoContainer}>*/}
            <Container>
              <SideBar
              Title="Thermoplastic Polyolefin (TPO)"
              Description="Thermoplastic polyolefin (TPO) is single ply membrane that is typically used on low slopes roofs. It is a nice clean look and usually comes in white or tan colors. It is an energy efficient membrane because of its ability to reflect (Ultra Violet) UV rays. It will help reduce energy cost and also complies with Title 24 requirements."
              />
            </Container>
            {/*</div>*/}
          </div>
        </section>
      </>
    )
  }
}

export default Section1
