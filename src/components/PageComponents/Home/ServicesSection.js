import React from "react"
import ServiceBoxesArea from "./ServicesDir/ServiceBoxesArea"

import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

import servicessectionStyle from './servicessection.module.css'

class ServicesSection extends React.Component {
  render() {
    return (
      <section className={servicessectionStyle.SectionService}>
        <Container>
          <Row>
            <div className="col-md-12">
              <div className={servicessectionStyle.topText}>
                <h2
                className={servicessectionStyle.Title}>
                  What we do</h2>
                <h3
                className={servicessectionStyle.Subtitle}
                >Services we offer</h3>
              </div>
            </div>
          </Row>
        </Container>
        <ServiceBoxesArea />
      </section>
    )
  }
}

export default ServicesSection
