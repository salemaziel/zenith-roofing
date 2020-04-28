import React from "react";
import TestimonialTitles from "./TestimDir/TestimonialTitles";

import Testimonials from './TestimDir/testimonials'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Container from "react-bootstrap/Container";

class TestimonialSection extends React.Component {
  render() {
    return (
      <section className="testmonial">
        <Container className="top-text">
            <div className="col-md-12">
              <TestimonialTitles></TestimonialTitles>
            </div>
        </Container>
       {/*} <Container fluid>
          <Row className="justify-content-center">
            <div className="col-md-10 white-box testmonial-slider">
              <TestimonialBox></TestimonialBox>
             {/*} <TestimonialBox></TestimonialBox>
              <TestimonialBox></TestimonialBox>* /} 
              
            </div>
          </Row>
        </Container>*/}
        <Container fluid>
          <Row className="justify-content-center" style={{margin: '0'}}>
            <Col className="white-box testmonial-slider">
              <Testimonials />

              
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default TestimonialSection;
