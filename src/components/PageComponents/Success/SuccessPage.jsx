import React from 'react'
import Col from "react-bootstrap/Col"
import { CustomersLoveGuy } from '../../../images/index'
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

import successStyle from "./success.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"



class SuccessPage extends React.Component {
    render() {
      return (
        <section className={successStyle.CLsection}>
          <Container fluid style={{ }}>
            <Row className={successStyle.CLRow}>
              <Col></Col>
              <Col>
                <div className={successStyle.WhyloveUs}>
                  <h1 className={successStyle.WhyTitle}>
                    {" "}
                  </h1>
  
                  <br />
  
                  <h4 className={successStyle.WhySubtitle}>
                    Thanks For Reaching Out! We will contact you within 24 hours
                  </h4>
                </div>
                <br />
                <hr />
                <br />
                <div>
                    <h4 style={{textAlign: 'center'}}>Contant Us Another Way:</h4>
                </div>


                <div className={successStyle.SocialIcons}>
                {" "}
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} className={successStyle.Icon} />
                </a>{" "}
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} className={successStyle.Icon} />
                </a>{" "}
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} className={successStyle.Icon} />
                </a>{" "}
                <a href="#">
                  <FontAwesomeIcon icon={faEnvelope}  className={successStyle.Icon} />
                </a>{" "}
              </div>
                </Col>
  
  
              <Col xs={5} className={successStyle.ColGuy}>
                <div>
                  <img
                    src={CustomersLoveGuy}
                    alt=""
                    className={successStyle.CLGuy}
                  />
                </div>
              </Col>
               </Row>
          </Container>{" "}
          
        </section>
      )
    }
  }
  
  export default SuccessPage
  