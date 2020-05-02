import React from "react"
//import FooterBoxLeft from "./FooterBoxLeft"
//import FooterBoxMiddle from "./FooterBoxMiddle"
//import FooterBoxRight from "./FooterBoxRight"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { Logo } from "../../images/index"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"

import footerStyle from "./footer.module.css"
import Nav from "react-bootstrap/Nav"

class FooterBox extends React.Component {
  render() {
    return (
      <>
        <Row className={footerStyle.FooterRow}>
          <Col xs={1} className={footerStyle.ColNoMobile}></Col>
          <Col>
            <div className={footerStyle.Logo}>
              <img src={Logo} className="img-fluid" alt="" />
            </div>
            <div className={footerStyle.SocialIcon}>
              {" "}
              <a href="#">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={footerStyle.Icon}
                />
              </a>{" "}
              <a href="#">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={footerStyle.Icon}
                />
              </a>{" "}
              <a href="#">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={footerStyle.Icon}
                />
              </a>{" "}
              {/*} <a href="#">
                  <FontAwesomeIcon icon={faEnvelope} className={footerStyle.Icon} />
    </a>{" "}*/}
            </div>
          </Col>
          <Col xs={6}>
            <div className={footerStyle.Middle}>
              <p>
                Zenith Roofing Services provides Service to Escondido, San
                Marcos, Vista, Oceanside, Rancho Bernardo, Poway, Temecula,
                Leucadia, Encinitas, Rancho Penasquitos, Carlsbad, Mira Mesa,
                downtown San Diego, and the rest of the Greater County of San
                Diego.
              </p>
            </div>
          </Col>
          <Col>
            <div className={footerStyle.Spacer} />
            <div className={footerStyle.LinkBox}>
              <h2>
                {" "}
                <div className={footerStyle.QuickLinks}>Quick Links</div>{" "}
              </h2>
             
              <div className="nav-list">
              <Col>
                <ul>
                  
                    <li style={{padding: '1rem'}}>
                      <Link rel="preload" to="/about ">
                        About
                      </Link>
                    </li>
                  

                  
                    <li style={{padding: '1rem'}}>
                      <Link rel="preload" to="/services">
                        Services
                      </Link>
                    </li>
                  

                  
                    <li style={{padding: '1rem'}}>
                      <Link rel="preload" to="/contact">
                        Contact
                      </Link>
                    </li>
                  

                  
                    <li style={{padding: '1rem'}}>
                      <Link rel="preload" to="/systems">
                        Systems
                      </Link>
                    </li>
                  

                  {/*<li style={{padding: '1rem'}}>
                    <Link rel="preload" to="/">Site Map</Link>
                  </li>*/}
                  
                    <li style={{padding: '1rem'}}>
                      <Link rel="preload" to="/">
                        Referrals
                      </Link>
                    </li>
                  
                </ul>
                </Col>
              </div>
            </div>{" "}
          </Col>
          <Col xs={1} className={footerStyle.ColNoMobile}></Col>
        </Row>
      </>
    )
  }
}

export default FooterBox
