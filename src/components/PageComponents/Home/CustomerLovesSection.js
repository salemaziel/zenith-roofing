import React from "react"
//import { CustomersLove } from '../../../images/index'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import {
  CustomersLoveGuy,
  BadgeHAbest2019,
  BadgeHAelite,
  BadgeHAtoprated,
} from "../../../images/index"

import Fade from 'react-reveal/Fade'

import customerlovesStyle from "./customerloves.module.css"

class CustomerLovesSection extends React.Component {
  render() {
    return (
      <section className={customerlovesStyle.CLsection}>
        <Container>
          <Row>
            <Col>
              <div className={customerlovesStyle.Intro} >
                <Fade top>
                <h1 className={customerlovesStyle.IntroTitle} >
                  Zenith Roofing Services proudly serves the following Southern California Counties: <br /> San Diego, Temecula, Orange, Riverside and Los Angeles.{" "}
                </h1>
                </Fade>
                <Fade top>
                <p className={customerlovesStyle.IntroText}>
                  With years of experience serving the greater Southern California
                  area, Zenith Roofing Services is
                  the solution for all your roofing needs. </p>

                  <p className={customerlovesStyle.IntroText}>
                  We take great pride in our work and prioritize extreme
                  professionalism, timeliness, and superior customer service on
                  every job. We strive to develop lasting relationships with all of our
                  customers by getting the job done so well, the next time
                  roofing service is needed, there is is no question who to call.
                </p>

                <p className={customerlovesStyle.IntroText}>
                  Contact us today so we can discuss your needs and make a plan
                  that fits your budget.<br /> <strong> Satisfaction guaranteed!</strong>
                </p>
                </Fade>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid style={{}}>
          <Row className={customerlovesStyle.CLRow}>
            <Col className="Nomobile"></Col>
            <Col>
              <div className={customerlovesStyle.WhyloveUs}>
                <Fade top>
                <h1 className={customerlovesStyle.WhyTitle}>
                  {" "}
                  Why Choose Zenith Roofing?
                </h1>

                <br />

                <h2 className={customerlovesStyle.WhySubtitle}>
                  Our Customers Love Us!
                </h2>

                <p>
                  Check out our 5 star reviews from happy customers! Call us
                  today so we can discuss your needs and make a plan that fits
                  your budget. Satisfaction guaranteed!
                </p>
                </Fade>
              </div>
            </Col>
            <Col className="Nomobile"/>
          </Row>
          <Row>
            <Col>
              <div className={customerlovesStyle.Badgesbox}>
                <img
                  src={BadgeHAtoprated}
                  alt=""
                  className={customerlovesStyle.Badges}
                />
                <img
                  src={BadgeHAelite}
                  alt=""
                  className={customerlovesStyle.Badges}
                />
                <img
                  src={BadgeHAbest2019}
                  alt=""
                  className={customerlovesStyle.Badges}
                />
              </div>
            </Col>

            <Col xs={5} className={customerlovesStyle.ColGuy}>
              <div>
                <img
                  src={CustomersLoveGuy}
                  alt=""
                  className={customerlovesStyle.CLGuy}
                />
              </div>
            </Col>
          </Row>
        </Container>{" "}
        {/*<img src={CustomersLove} className="img-fluid" alt='' />{" "}*/}
      </section>
    )
  }
}

export default CustomerLovesSection
