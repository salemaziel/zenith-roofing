import React, { Component } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import pageStyle from './page.module.css'

import { Climbing } from '../../../../images/index'


class Section1 extends Component {
  render() {
    return (
      <>
        <section className={pageStyle.Section} >
        {/*<Container >
          <Row className={pageStyle.Titlerow}>
            <Col>
              <div className={pageStyle.Header}>
                <h2 className={pageStyle.Title}>
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
        <section className={pageStyle.Section}>
          <Container>
        <Row className={pageStyle.HistoryRow}>
            <Col>
            <div className={pageStyle.Header}>
                <h2 className={pageStyle.Title}>Roof Maintenance</h2>
            <div className="">
              <img src={Climbing} alt="Roof Repairs" className="img-fluid"/>
            </div>
            <div className="">
                <p>
                It is recommended to perform preventative maintenance to you roof at least every 10 years depending on which system you have. It is also recommended to schedule before the rainy seasons. Cracked sealant, broken tiles, slipped tiles, flashing, or debris can cause premature wear to your roof and can cause for water intrusions in your home. This can lead to extensive damage in your home, business or building. Schedule an appointment to insure you are ahead of the curve and maintain your roof today.
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

export default Section1
