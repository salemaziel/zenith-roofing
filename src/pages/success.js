import React from "react"
import Layout from '../components/layout'
import estimateform2Style from "../components/PageComponents/Home/estimateform2.module.css"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//import CustomerLovesSection from '../components/PageComponents/Home/CustomerLovesSection'
import SuccessPage from '../components/PageComponents/Success/SuccessPage'

import { LogoWshadowDarkVertSm } from "../images/index"

const Success = (props) => (
<Layout>
    {/*<section>

    <Container fluid>
      <div className="item-heading">
        <h1 className={estimateform2Style.title}>Success/Thank You Page</h1>
      </div>

        <section id="one">
<Container>
            <Row>
            <Col />
              <Col>
              <div style={{display: 'block', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
            <img src={LogoWshadowDarkVertSm} alt='' />
            <p>Thank you for contacting us!</p>
            </div>
            </Col>
            <Col />
          </Row>
          </Container>
        </section>
        <CustomerLovesSection />
    </Container>
    </section>*/}
    <SuccessPage />
  </Layout>
)

export default Success
