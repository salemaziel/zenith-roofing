import React from 'react'
import Col from "react-bootstrap/Col"
import { CustomersLoveGuy } from '../../../images/index'
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

import { CLsection, CLRow, WhyloveUs, WhyTitle, WhySubtitle, SocialIcons, Icon, ColGuy, CLGuy } from "./success.module.css"



import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  faEnvelope
} from 'react-icons/fa'




      const SuccessPage = () => (
        <section className={CLsection}>
          <Container fluid style={{ }}>
            <Row className={CLRow}>
              <Col></Col>
              <Col>
                <div className={WhyloveUs}>
                  <h1 className={WhyTitle}>
                    {" "}
                  </h1>
  
                  <br />
  
                  <h4 className={WhySubtitle}>
                    Thanks For Reaching Out! We will contact you within 24 hours
                  </h4>
                </div>
                <br />
                <hr />
                <br />
                <div>
                    <h4 style={{textAlign: 'center'}}>Contant Us Another Way:</h4>
                </div>


                <div className={SocialIcons}>
                {" "}
                <a href="#">
                  <FaFacebook className={Icon} />
                </a>{" "}
                <a href="#">
                  <FaTwitter className={Icon} />
                </a>{" "}
                <a href="https://www.instagram.com/zenithroofingservices_ca/">
                  <FaInstagram className={Icon} />
                </a>{" "}
                <a href="mailto:admin@zenithroofingca.com">
                  <faEnvelope className={Icon} />
                </a>{" "}
              </div>
                </Col>
  
  
              <Col xs={5} className={ColGuy}>
                <div>
                  <img
                    src={CustomersLoveGuy}
                    alt=""
                    className={CLGuy}
                  />
                </div>
              </Col>
               </Row>
          </Container>{" "}
          
        </section>
      )

  
  export default SuccessPage
  