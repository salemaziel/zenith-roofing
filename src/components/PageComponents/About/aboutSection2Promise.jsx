import React from "react"

import { 
  WoodFrame,
  RooferOnSlant,
  HouseBuilding

 } from "../../../images/index"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { Section, Titlerow, Header, Title, Box, BoxImg, Subtitles, Nomobile, Nodesktop } from "./about.module.css"



    const AboutSectionPromise = (props) => {
    return (
      <>
        <section className={Section}>
          <Container>
            
              <Row className={Titlerow}>
                <Col>
              <div className={Header}>
                <h2 className={Title}>Our Promise</h2>
                <p>
Our promise to our customers is to provide the highest level of customer service. We aim to provide straight forward, pleasant experiences for home and business owners alike. We promise that our team has the capability, responsiveness, and power to provide the best and most efficient process for you. </p>
<p>We will be a helpful source for you to collect valuable information and get the most out of your roof and money. At Zenith Roofing Services, we promise to continue our research and advance in technology to help educate ourselves as well as home and business owners about roofing. Our team promises to look at what is in your best interest at the most affordable price for quality work.  
                </p>
                </div>
                </Col>
              </Row>
              <Row className={Titlerow}>
              <Col>
                <div className={Box}>
                  <div className={BoxImg}>
                    <img loading="lazy" src={HouseBuilding} alt="why choose" className="img-fluid" />
                  </div>
                  </div>
                  </Col>
                  
                <Col>
              <div className={Header}>
                    <h3 className={Subtitles}>
                    Innovation
                    </h3>
                    <p>
                    We are committed to research all products old and new and advance with technology so we can provide the best possible roof systems to our clients. Our service will constantly be improving to make your roofing project process be as smooth and efficient as possible. 
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className={Titlerow}>
              
                <Col className={Nomobile}>
              <div className={Header}>
                    
                  <h3 className={Subtitles}>    Commitment to Quality
                    </h3>
                    <p>
                    At Zenith Roofing Services we commit to providing you with quality brands, staff productivity, financing options, and a quality relationship with our company. 
                    </p>
                  </div>
                </Col>

                <Col>
              <div className={Box}>
              <div className={BoxImg}>
                    <img loading="lazy" src={WoodFrame} alt="why choose" className="img-fluid" />
                  </div>
                  </div>
                  </Col>

                  <Col className={Nodesktop}>
              <div className={Header}>
                    
                  <h3 className={Subtitles}>    Commitment to Quality
                    </h3>
                    <p>
                    At Zenith Roofing Services we commit to providing you with quality brands, staff productivity, financing options, and a quality relationship with our company. 
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className={Titlerow}>
              <Col>
              <div className={Box}>
              <div className={BoxImg}>
                    <img loading="lazy" src={RooferOnSlant} alt="why choose" className="img-fluid" />
                  </div>
                  </div>
                  </Col>
                <Col>
              <div className={Header}>
                    <h3 className={Subtitles}>
                      
                      Core Values
                    </h3>
                    <p>
                    We have noticed that most home and business owners are continuously frustrated because they are not receiving the proper information of their roof and paying high prices for low quality materials. They work with roofing contractors that don't do their research or refuse to advance with modern day technology. This can not only be more costly long term but also a safety hazard.
                    <br /> <br />Our core values look at what is in the best interest for our clients. We will provide the best information about roofing because we understand that each roof must be tailored to the likes of each of our clients. Our values lie within our clients, and by giving them as much information as possible, listening to their situation, and implementing a game plan to solve the problem we hope to gain much more than their trust. Our goal is for our clients to have such a great experience with their roofing process that they feel like they are reaching out to family. 
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
