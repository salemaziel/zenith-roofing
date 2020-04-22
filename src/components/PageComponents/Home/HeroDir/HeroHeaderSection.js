import React from "react";
import HeroBtnCallNow from "./HeroBtnCallNow";
import HeroBtnGetQuote from "./HeroBtnGetQuote";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import RoofOnly from '../../../../images/index'

class HeroHeaderSection extends React.Component {
  render() {
    return (
      <section className="hero-section">
        <Container>
          <Row>
            <div className="col-md-12">
              <h1>
                {" "}
                <img
                  src={RoofOnly}
                  className="heroLogo"
                />{" "}
                Zenith{" "}
              </h1>
              <h2>Roofing</h2>
              <div className="HomeHeroBtns">
              <HeroBtnCallNow></HeroBtnCallNow>{" "}
              <HeroBtnGetQuote></HeroBtnGetQuote>{" "}
              </div>
            </div>
          </Row>
          </Container>
      </section>
    );
  }
}

export default HeroHeaderSection;
