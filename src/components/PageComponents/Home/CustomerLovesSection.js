import React from "react";
//import { CustomersLove } from '../../../images/index'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { 
  CustomersLoveGuy,
  BadgeHAbest2019,
  BadgeHAelite,
  BadgeHAtoprated,
 } from '../../../images/index'

import customerlovesStyle from './customerloves.module.css'

class CustomerLovesSection extends React.Component {
  render() {
    return (
      <section className={customerlovesStyle.CLsection}>
        <Container fluid style={{verticalAlign: 'bottom'}}>
          <Row className={customerlovesStyle.CLRow}>
 
            <Col xs={2}>


            </Col>
            <Col >
            <div className={customerlovesStyle.WhyloveUs}>
              <h1 
              className={customerlovesStyle.WhyTitle}
              > Why Choose Zenith Roofing?
              </h1>

              <br />

              <h2
                className={customerlovesStyle.WhySubtitle}>
                Our Customers Love Us!</h2>

            </div>
            <div className={customerlovesStyle.Badgesbox}>
            <img src={BadgeHAtoprated} alt='' className={customerlovesStyle.Badges} />
            <br />
            <img src={BadgeHAelite} alt='' className={customerlovesStyle.Badges}/>
            <br />
            <img src={BadgeHAbest2019} alt='' className={customerlovesStyle.Badges} />
            
            
            </div>
            </Col>

            <Col xs={5}>
              <div>
                 <img src={CustomersLoveGuy} alt='' className={customerlovesStyle.CLGuy} />
              </div>
            </Col>
          </Row>
        </Container>
        {" "}
        {/*<img src={CustomersLove} className="img-fluid" alt='' />{" "}*/}
      </section>
    );
  }
}

export default CustomerLovesSection;
