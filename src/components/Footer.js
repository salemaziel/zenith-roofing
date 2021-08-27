import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { Logo } from "../images/index"


import {
FaFacebook,
FaInstagram,
FaTwitter
} from 'react-icons/fa'

import { Link } from "gatsby"

import { FooterRow, ColNoMobile, CenterFooter, LogoStyle, SocialIcon, Icon, Middle, Spacer, LinkBox, QuickLinks } from "./footer.module.css"



  const Footer = (props) => {
    return (
      <footer>
        <Container fluid>
        <Row className={FooterRow}>
          <Col xs={1} className={ColNoMobile}></Col>
          <Col>
          <div className={CenterFooter}>
            <div className={LogoStyle}>
              <img loading="lazy" src={Logo} className="img-fluid" alt="" />
            </div>
            <div className={SocialIcon}>
              {" "}
              <a href="#">
                <FaFacebook
                  className={Icon}
                />
              </a>{" "}
              <a href="#">
                <FaTwitter
                  className={Icon}
                />
              </a>{" "}
              <a href="#">
                <FaInstagram
                  className={Icon}
                />
              </a>{" "}
              {/*} <a href="#">
                  <FontAwesomeIcon icon={faEnvelope} className={Icon} />
    </a>{" "}*/}
            </div>
            </div>
          </Col>
          <Col xs={6}>
            <div className={Middle}>
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
            <div className={Spacer} />
            <div className={LinkBox}>
              <h2>
                {" "}
                <div className={QuickLinks}>Quick Links</div>{" "}
              </h2>

              <div className="nav-list">
                <Col>
                  <ul>
                    <li style={{ padding: "1rem" }}>
                      <Link
                        rel="preload"
                        to="/about"
                        style={{ color: "white" }}
                      >
                        About
                      </Link>
                    </li>

                    <li style={{ padding: "1rem" }}>
                      <Link
                        rel="preload"
                        to="/services"
                        style={{ color: "white" }}
                      >
                        Services
                      </Link>
                    </li>

                    <li style={{ padding: "1rem" }}>
                      <Link
                        rel="preload"
                        to="/contact"
                        style={{ color: "white" }}
                      >
                        Contact
                      </Link>
                    </li>

                 {/*   <li style={{ padding: "1rem" }}>
                      <Link
                        rel="preload"
                        to="/systems"
                        style={{ color: "white" }}
                      >
                        Systems
                      </Link>
                    </li> */}

                    {/*<li style={{padding: '1rem'}}>
                    <Link rel="preload" to="/">Site Map</Link>
                  </li>*/}

                    <li style={{ padding: "1rem" }}>
                      <a
                        rel=""
                        href="https://referrals.zenithroofingservices.com"
                        style={{ color: "white" }}
                      >
                        Referrals
                      </a>
                    </li>
                  </ul>
                </Col>
              </div>
            </div>{" "}
          </Col>
          <Col xs={1} className={ColNoMobile}></Col>
        </Row>
        </Container>
      </footer>
    );
  }


export default Footer;
