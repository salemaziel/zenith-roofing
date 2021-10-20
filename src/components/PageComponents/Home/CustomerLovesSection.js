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

import Fade from "react-reveal/Fade"

import { CLsection, Intro, IntroTitle, IntroText, CLRow, WhyloveUs, WhyTitle, WhySubtitle, Badges, Badgesbox, ColGuy, CLGuy  } from "./customerloves.module.css"

const CustomerLovesSection = () => (
      <section className={CLsection}>
        <Container>
          <Row>
            <Col>
              <div className={Intro}>
                <Fade top>
                  <h1 className={IntroTitle}>
                    Zenith Roofing Services proudly serves the following
                    Southern California Counties: <br /> San Diego, Temecula,
                    Orange, Riverside and Los Angeles.{" "}
                  </h1>
                </Fade>
                <Fade bottom>
                  <p className={IntroText}>
                    With years of experience serving the greater Southern
                    California area, Zenith Roofing Services is the solution for
                    all your roofing needs.{" "}
                  </p>

                  <p className={IntroText}>
                    We take great pride in our work and prioritize extreme
                    professionalism, timeliness, and superior customer service
                    on every job. We strive to develop lasting relationships
                    with all of our customers by getting the job done so well,
                    the next time roofing service is needed, there is no
                    question who to call.
                  </p>

                  <p className={IntroText}>
                    Contact us today so we can discuss your needs and make a
                    plan that fits your budget.
                    <br /> <strong> Satisfaction guaranteed!</strong>
                  </p>
                </Fade>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid style={{}}>
          <Row className={CLRow}>
            <Col className="Nomobile"></Col>
            <Col>
              <div className={WhyloveUs}>
                <Fade bottom>
                  <h1 className={WhyTitle}>
                    {" "}
                    Why Choose Zenith Roofing?
                  </h1>

                  <br />

                  <h2 className={WhySubtitle}>
                    Our Customers Love Us!
                  </h2>
                  </Fade>
                  <Fade bottom>
                  <p>
                    Check out our 5 star reviews from happy customers! Call us
                    today so we can discuss your needs and make a plan that fits
                    your budget. Satisfaction guaranteed!
                  </p>
                </Fade>
              </div>
              <Row>
              <Col>

              <a
                style={{ display: "flex" }}
                href="https://roofinginsights.com/directory/"
                className={Badges}
                              >
                <img
                  loading="lazy"
                  /*style={{ maxWidth: 200, height: "auto" }}*/
                  alt="roofers near me, roofing near me, roofing contractor near me, roofing directory, roofers directory, trusted roofers"
                  src="https://roofinginsights.com/wp-content/uploads/2020/05/certified-contractor-roofing-directory-roofers-near-me.png?e2a1a8&e2a1a8"
                  className={Badges}
                />
              </a>
              </Col>
            </Row>
            </Col>
            <Col className="Nomobile" />
          </Row>
          <Row>
            <Col>

              <div className={Badgesbox}>
                <img
                  loading="lazy"
                  src={BadgeHAtoprated}
                  alt=""
                  className={Badges}
                />
                <img
                  loading="lazy"
                  src={BadgeHAelite}
                  alt=""
                  className={Badges}
                />
                <img
                  loading="lazy"
                  src={BadgeHAbest2019}
                  alt=""
                  className={Badges}
                />
              </div>

            </Col>

            <Col xs={5} className={ColGuy}>
              <div>
                <img
                  loading="lazy"
                  src={CustomersLoveGuy}
                  alt=""
                  className={CLGuy}
                />
              </div>
            </Col>
          </Row>
        </Container>{" "}
        {/*<img loading="lazy" src={CustomersLove} className="img-fluid" alt='' />{" "}*/}
      </section>
    )


export default CustomerLovesSection
