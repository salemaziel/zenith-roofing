import React, { Component } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import repairStyle from './rr.module.css'

import { Climbing } from '../../../images/index'


class RRSection1 extends Component {
  render() {
    return (
      <>
        <section className={repairStyle.Section} >
        {/*<Container >
          <Row className={repairStyle.Titlerow}>
            <Col>
              <div className={repairStyle.Header}>
                <h2 className={repairStyle.Title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>*/}
        </section>
        <section className={repairStyle.Section}>
          <Container>
        <Row className={repairStyle.HistoryRow}>
            <Col>
            <div className={repairStyle.Header}>
                <h2 className={repairStyle.Title}>How to Repair Your Roof</h2>
          {/*  <div className="">
              <img src={Climbing} alt="Roof Repairs" className="img-fluid"/>
      </div>*/}
            <div className="">
              <h5>There are several causes for a roof leak from improper flashing install, broken tiles, Storm damage, wind damage, or roof is passed its life expectancy. It is important to have your roof look at by a specialized professional. Here are the necessary steps to approach your leaky roof.</h5>
                <p>
                Step One: Fill out the the contact info on the phone screen or give us a call to schedule a free estimate for owners. 
                </p>

                <p>
                Step Two: Sourcing the leak from the inside to pin point water intrusion.
                </p>

                <p>
                Step three: Receive a proposal, sign up and we will take care of the rest, with warranty options.

                </p>
                </div>
              </div>
            </Col>

            </Row>
          </Container>
        </section>
      </>
    )
  }
}

export default RRSection1
