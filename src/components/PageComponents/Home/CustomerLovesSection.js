import React from "react";
//import { CustomersLove } from '../../../images/index'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { CustomersLoveGuy } from '../../../images/index'

import customerlovesStyle from './customerloves.module.css'

class CustomerLovesSection extends React.Component {
  render() {
    return (
      <section className={customerlovesStyle.CLsection}>
        <Container fluid style={{verticalAlign: 'bottom'}}>
          <Row>
            <Col>
            
            </Col>
            <Col xs={3}>

            </Col>

            <Col>
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
