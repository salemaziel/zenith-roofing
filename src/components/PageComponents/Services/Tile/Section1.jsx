import React, { Component } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import tileStyle from '../page.module.css'

import { Climbing } from '../../../../images/index'
import SideBar from "../sidebar"


class Section1 extends Component {
  render() {
    return (
      <>

        <section className={tileStyle.Section}>
          <div className={tileStyle.sidebarPageContainer}>
            {/*<div className={pageStyle.autoContainer}>*/}
            <Container>
              <SideBar
              Title="Tile"
              Description="Tile roofs come in a variety of shapes styles and colors, from concrete to clay. Whether you would like to reuse your tiles or replace them with new ones this roof system has the capacity to last about 30 years until you will have to install new underlayment (Felt paper)."
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
