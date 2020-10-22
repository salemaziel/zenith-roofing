import React, { Component } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import repairStyle from '../page.module.css'

import { Climbing } from '../../../../images/index'
import SideBar from "../sidebar"


class RRSection1 extends Component {
  render() {
    return (
      <>



        <section className={repairStyle.Section}>
          <div className={repairStyle.sidebarPageContainer}>
            {/*<div className={pageStyle.autoContainer}>*/}
            <Container>
              <SideBar
              Title="Roof Repairs"
              Description="There are several causes for a roof leak from improper flashing install, broken tiles, Storm damage, wind damage, or roof is passed its life expectancy. It is important to have your roof look at by a specialized professional. Here are the necessary steps to approach your leaky roof."
              Description2="Step One: Fill out the the contact info on the phone screen or give us a call to schedule a free estimate for owners."
              Description3="Step Two: Sourcing the leak from the inside to pin point water intrusion."
              Description4="Step three: Receive a proposal, sign up and we will take care of the rest, with warranty options."


              />
            </Container>
            {/*</div>*/}
          </div>
        </section>
      </>
    )
  }
}

export default RRSection1
