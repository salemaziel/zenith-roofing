import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Media from 'react-bootstrap/Media'

import { PinkPanther, OwensPreferred } from '../../../images/index'
import { Section, ImgBox, OCPanther, OCLogo } from './preferred.module.css'


const Preferred = () => (
    <section className={Section}>
        <Container fluid>
    <Row>
        <Col>
        <Media>
            <div className={ImgBox}>
                <img loading="lazy" src={PinkPanther} alt='' className={OCPanther} />
            </div>

        <div className={ImgBox}>
                <img loading="lazy" src={OwensPreferred} alt='Owens Corning Preferred Contractor' className={OCLogo} />
            </div>
            </Media>
        </Col>


    </Row>
    </Container>
    </section>
)

export default Preferred