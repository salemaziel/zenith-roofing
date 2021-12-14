import React from "react"
import Col from "react-bootstrap/Col"
import { CustomersLoveGuy } from "../../../images/index"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

import {
  CLsection,
  CLRow,
  WhyloveUs,
  WhyTitle,
  WhySubtitle,
  SocialIcons,
  Icon,
  ColGuy,
  CLGuy,
} from "./success.module.css"

import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa"
import { Link } from "gatsby"

const SuccessPage = () => (
  <section className={CLsection}>
    <Container fluid style={{}}>
      <Row className={CLRow}>
        <Col></Col>
        <Col>
          <div className={WhyloveUs}>
            <h1 className={WhyTitle}> </h1>

            <br />

            <h4 className={WhySubtitle}>
              Thanks For Reaching Out! We will contact you within 24 hours
            </h4>
          </div>
          <div className="justify-content-center text-center">
          <Link to="/" className="bg-warning text-white py-4 px-4 font-weight-bold" style={{borderRadius: `5px`}}>Go Back to Homepage</Link>
          </div>
          <br />
          <hr />
          <br />
          <div>
            <h4 style={{ textAlign: "center" }}>Contact Us Another Way:</h4>
          </div>

          <div className={SocialIcons}>
            {" "}
            <a
              href="https://www.facebook.com/zenithroofingservicesca/"
              target="_blank"
              rel="noreferrer noopener me"
            >
              <FaFacebook className={Icon} color="orange" />
            </a>{" "}
            <a
              href="https://www.instagram.com/zenithroofingservices_ca/"
              target="_blank"
              rel="noreferrer noopener me"
            >
              <FaInstagram className={Icon} color="orange"/>
            </a>{" "}
            <a href="mailto:admin@zenithroofingca.com">
              <FaEnvelope className={Icon} color="orange" />
            </a>{" "}
          </div>
        </Col>

        <Col xs={5} className={ColGuy}>
          <div>
            <img src={CustomersLoveGuy} alt="" className={CLGuy} />
          </div>
        </Col>
      </Row>
    </Container>{" "}
  </section>
)

export default SuccessPage
