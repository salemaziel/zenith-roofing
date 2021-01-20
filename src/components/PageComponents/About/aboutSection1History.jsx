import React, { Component } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import aboutStyle from './about.module.css'

import { Climbing } from '../../../images/index'



    const AboutSectionHistory = (props) => {
    return (
      <>
        <section className={aboutStyle.Section} >
        <Container >
          <Row className={aboutStyle.Titlerow}>
            <Col>
              <div className={aboutStyle.Header}>
                <h2 className={aboutStyle.Title}>
                  Zenith Roofing Services is about getting the job done right.
                </h2>
                <p>
                  {" "}
                  With years of experience serving the area, we are your solution for all your roofing needs. We take great pride in our extreme professionalism, timeliness and superior customer service on every job. We strive to develop a lasting relationship with our customers by delivering consistent quality work, so that the next time service is needed there will be no question on who to call. 
                  </p>
                  <h3 style={{color: '#ff9900', textAlign: 'center'}}>
                    Satisfaction guaranteed!{" "}
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
        </section>
        {/*<section className={aboutStyle.Section}>
          <Container>
        <Row className={aboutStyle.HistoryRow}>
            <Col>
              <div className={aboutStyle.Header}>
                <h2 className={aboutStyle.Title}>Our History</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </Col>
            <div className="single-item right-item">
              <img src={Climbing} alt="About Us" className="img-fluid"/>
            </div>
            </Row>
          </Container>
    </section>*/}
      </>
    )
  }


export default AboutSectionHistory
