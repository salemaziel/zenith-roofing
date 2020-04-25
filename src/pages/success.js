import React from "react"
import Layout from '../components/layout'
import estimateform2Style from "../components/PageComponents/Home/estimateform2.module.css"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import { LogoWshadowDarkVertSm } from "../images/index"

const Success = (props) => (
<Layout>
    <section>
  <div className={estimateform2Style.formBox}>
    <Container fluid>
      <div className="item-heading">
        <h3 className={estimateform2Style.title}>Success/Thank You Page</h3>
      </div>

        <section id="one">
            <Row>
            <header className="major">
              <h1>Success/Thank You Page</h1>
            </header>
            </Row>
            <Row>
            <span className="image main">
              <img src={LogoWshadowDarkVertSm} alt="" className="img-fluid" />
            </span>
            <p>Thank you for contacting us!</p>
          </Row>
        </section>
    </Container>
  </div>
  </section>
  </Layout>
)

export default Success
