import React, { Component } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import epdmStyle from '../page.module.css'

import { Climbing } from '../../../../images/index'
import SideBar from "../sidebar"


class Section1 extends Component {
  render() {
    return (
      <>

        <section className={epdmStyle.Section}>
          <div className={epdmStyle.sidebarPageContainer}>
            {/*<div className={pageStyle.autoContainer}>*/}
            <Container>
              <SideBar
              Title="Ethylene Propylene Diene Monomer (EPDM)"
              Description="Ethylene Propylene Diene Monomer (EPDM) s a rubber roof that is usually install on smaller low slope areas. It is usually available in black it is long lasting and lightweight. It is able to withstand hail, high winds and fire resistant."
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
