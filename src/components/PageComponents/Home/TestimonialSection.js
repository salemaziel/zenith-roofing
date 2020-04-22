import React from "react";
import TestimonialTitles from "./TestimDir/TestimonialTitles";
import TestimonialBox from "./TestimDir/TestimonialBox";
import TestimonialBoxInner from "./TestimDir/TestimonialBoxInner";

import Row from "react-bootstrap/Row";
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
        <div className="container-fluid">
          <Row className="justify-content-center">
            <div className="col-md-10 white-box testmonial-slider">
              <TestimonialBox></TestimonialBox>
             {/*} <TestimonialBox></TestimonialBox>
              <TestimonialBox></TestimonialBox>*/} 
              
            </div>
          </Row>
        </div>
      </section>
    );
  }
}

export default TestimonialSection;
