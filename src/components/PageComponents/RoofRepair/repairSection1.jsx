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
        <Container >
          <Row className={repairStyle.Titlerow}>
            <Col>
              <div className={repairStyle.Header}>
                <h2 className={repairStyle.Title}>
                  We Won The ‘Best Roofing Company’ Award 2019 &amp; Tightly
                  Connected with our communities.
                </h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        </section>
        <section className={repairStyle.Section}>
          <Container>
        <Row className={repairStyle.HistoryRow}>
            <Col>
              <div className={repairStyle.Header}>
                <h2 className={repairStyle.Title}>Our History</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </Col>
            <div className="single-item right-item">
              <img src={Climbing} alt="Roof Repairs" className="img-fluid"/>
            </div>
            </Row>
          </Container>
        </section>
      </>
    )
  }
}

export default RRSection1
