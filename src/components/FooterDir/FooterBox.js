import React from "react"
//import FooterBoxLeft from "./FooterBoxLeft"
//import FooterBoxMiddle from "./FooterBoxMiddle"
//import FooterBoxRight from "./FooterBoxRight"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { Logo } from "../../images/index"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

class FooterBox extends React.Component {
  render() {
    return (
      <div className="col-md-11 white-footer">
        <Row>
          <Col>
            <div className="box-one">
              <div className="logo">
                <img src={Logo} className="img-fluid" alt="" />
              </div>
              <div className="social-icon">
                {" "}
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>{" "}
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>{" "}
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>{" "}
                <a href="#">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>{" "}
              </div>
            </div>
          </Col>
          <Col>
            <div className="box-two">
              <h2>
                {" "}
                <span className="inner-span">Quick Links</span>{" "}
              </h2>
              <div className="nav-list">
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Systems</a>
                  </li>
                  <li>
                    <a href="#">Site Map</a>
                  </li>
                  <li>
                    <a href="#">Referrals</a>
                  </li>
                </ul>
              </div>
            </div>{" "}
          </Col>
        </Row>
      </div>
    )
  }
}

export default FooterBox
