import React, { Component } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import burStyle from '../page.module.css'

import { Climbing } from '../../../../images/index'
import SideBar from "../sidebar"


class Section1 extends Component {
  render() {
    return (
      <>

        <section className={burStyle.Section}>
          <div className={burStyle.sidebarPageContainer}>
            {/*<div className={pageStyle.autoContainer}>*/}
            <Container>
              <SideBar
              Title="Built Up Roofing"
              Description="Built Up-Roofing (BUR) commonly used on low sloped roofs. There are different types of BUR such as hot or cold process. It consist of plies of felts that are layered using asphalt, coal tar pitch, or cold applied adhesive. Rolled cap sheet or aggregates are common to layer over to protect the plies from the UV ray and creates a finished membrane."
              Description2=""
              Description3=""
              Description4=""


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
