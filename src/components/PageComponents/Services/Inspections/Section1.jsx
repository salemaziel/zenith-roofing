import React, { Component } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import inspectionStyle from '../page.module.css'

import { Climbing } from '../../../../images/index'
import SideBar from "../sidebar"


class Section1 extends Component {
  render() {
    return (
      <>


        <section className={inspectionStyle.Section}>
          <div className={inspectionStyle.sidebarPageContainer}>
            {/*<div className={pageStyle.autoContainer}>*/}
            <Container>
              <SideBar
              Title="Inspections"
              Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              Description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
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
