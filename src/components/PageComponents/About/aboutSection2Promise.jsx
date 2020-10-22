import React, { Component } from "react"

import { 
  WoodFrame,
  RooferOnSlant,
  HouseBuilding

 } from "../../../images/index"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import aboutStyle from "./about.module.css"



    const AboutSectionPromise = (props) => {
    return (
      <>
        <section className={aboutStyle.Section}>
          <Container>
            
              <Row className={aboutStyle.Titlerow}>
                <Col>
              <div className={aboutStyle.Header}>
                <h2 className={aboutStyle.Title}>Our Promise</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                </div>
                </Col>
              </Row>
              <Row className={aboutStyle.Titlerow}>
              <Col>
                <div className={aboutStyle.Box}>
                  <div className={aboutStyle.BoxImg}>
                    <img src={HouseBuilding} alt="why choose" className="img-fluid" />
                  </div>
                  </div>
                  </Col>
                  
                <Col>
              <div className={aboutStyle.Header}>
                    <h3 className={aboutStyle.Subtitles}>
                    Innovation
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className={aboutStyle.Titlerow}>
              
                <Col className={aboutStyle.Nomobile}>
              <div className={aboutStyle.Header}>
                    
                  <h3 className={aboutStyle.Subtitles}>    Commitment to Quality
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                  </div>
                </Col>

                <Col>
              <div className={aboutStyle.Box}>
              <div className={aboutStyle.BoxImg}>
                    <img src={WoodFrame} alt="why choose" className="img-fluid" />
                  </div>
                  </div>
                  </Col>

                  <Col className={aboutStyle.Nodesktop}>
              <div className={aboutStyle.Header}>
                    
                  <h3 className={aboutStyle.Subtitles}>    Commitment to Quality
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                  </div>
                </Col>
                  
              </Row>
              <Row className={aboutStyle.Titlerow}>
              <Col>
              <div className={aboutStyle.Box}>
              <div className={aboutStyle.BoxImg}>
                    <img src={RooferOnSlant} alt="why choose" className="img-fluid" />
                  </div>
                  </div>
                  </Col>
                <Col>
              <div className={aboutStyle.Header}>
                    <h3 className={aboutStyle.Subtitles}>
                      
                      Core Values
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      </p>
                </div>
                </Col>
              </Row>
          </Container>
        </section>
      </>
    )
  }


export default AboutSectionPromise
