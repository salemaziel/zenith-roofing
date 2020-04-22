import React from "react";
import ServicesTitles from "./ServicesDir/ServicesTitles";
import ServiceBoxesArea from "./ServicesDir/ServiceBoxesArea";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class ServicesSection extends React.Component {
  render() {
    return (
      <section className="service-offer">
        <Container className="service-offer">
          <Row>
            <div className="col-md-12">
              <ServicesTitles />
            </div>
          </Row>
        </Container>
        <ServiceBoxesArea />
      </section>
    );
  }
}

export default ServicesSection;
