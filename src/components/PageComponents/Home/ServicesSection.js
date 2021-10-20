import React from "react"
import ServiceBoxesArea from "./ServicesDir/ServiceBoxesArea"

import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

import { SectionService, topText, Title, Subtitle } from './servicessection.module.css'

import Fade from 'react-reveal/Fade'

const ServicesSection = () => (
      <section className={SectionService}>
        <Container>
          <Row>
            <div className="col-md-12">
              <div className={topText}>
                <Fade bottom>
                <h2
                className={Title}>
                  What we do</h2>
                <h3
                className={Subtitle}
                >Services we offer</h3>
                </Fade>
              </div>
            </div>
          </Row>
        </Container>
        <ServiceBoxesArea />
      </section>
    )


export default ServicesSection
