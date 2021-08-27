import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Section, Titlerow, Header, Title } from './about.module.css'




    const AboutSectionHistory = (props) => {
    return (
      <>
        <section className={Section} >
        <Container >
          <Row className={Titlerow}>
            <Col>
              <div className={Header}>
                <h2 className={Title}>
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
        {/*<section className={Section}>
          <Container>
        <Row className={HistoryRow}>
            <Col>
              <div className={Header}>
                <h2 className={Title}>Our History</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </Col>
            <div className="single-item right-item">
              <img loading="lazy" src={Climbing} alt="About Us" className="img-fluid"/>
            </div>
            </Row>
          </Container>
    </section>*/}
      </>
    )
  }


export default AboutSectionHistory
