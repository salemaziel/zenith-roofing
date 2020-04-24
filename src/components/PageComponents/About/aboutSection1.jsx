import React, { Component } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class AboutSection1 extends Component {
  render() {
    return (
      <>
        <section className="about" />
        <Container>
          <Row className="justify-content-center">
            <Col /*className="col-xl-10 col-12"*/>
              <div className="heading-layout1">
                <h2>
                  We Won The ‘Best Roofing Company’ Award 2019 &amp; Tightly
                  Connected with our communities.
                </h2>
                <p>
                  {" "}
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not
                  only five centuries but also the leap into electronic
                  typesetting, remaining essentially unchanged.{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default AboutSection1
