import React, { Component } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import maintenanceStyle from '../page.module.css'

import { Climbing } from '../../../../images/index'
import SideBar from "../sidebar"


class Section1 extends Component {
  render() {
    return (
      <>

        <section className={maintenanceStyle.Section}>
          <div className={maintenanceStyle.sidebarPageContainer}>
            {/*<div className={pageStyle.autoContainer}>*/}
            <Container>
              <SideBar
              Title="Maintenance"
              Description="It is recommended to perform preventative maintenance on your roof at least every 10 years depending on your roofing system."
              Description2="It is also recommended to schedule before the rainy seasons. Cracked sealant, broken tiles, slipped tiles, flashing, or debris can cause premature wear to your roof and can cause for water intrusions in your home. This can lead to extensive damage in your home, business or building. Schedule an appointment to insure you are ahead of the curve and maintain your roof today."
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
