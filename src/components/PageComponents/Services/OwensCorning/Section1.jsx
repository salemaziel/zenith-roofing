import React, { Component } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import owensStyle from '../page.module.css'

import { Climbing } from '../../../../images/index'
import SideBar from "../sidebar"


class Section1 extends Component {
  render() {
    return (
      <>

        <section className={owensStyle.Section}>
          <div className={owensStyle.sidebarPageContainer}>
            {/*<div className={pageStyle.autoContainer}>*/}
            <Container>
              <SideBar
              Title="Owens-Corning"
              Description="An Owens-Corning system will warranty your roof for a lifetime, with shingles that can withstand high winds and heavy rains, this will be a system worth installing. Call for more info on this premium warranty! "
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
