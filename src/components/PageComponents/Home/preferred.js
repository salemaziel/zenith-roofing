import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Media from 'react-bootstrap/Media'

import { PinkPanther, OwensPreferred } from '../../../images/index'
import preferredStyle from './preferred.module.css'


const Preferred = () => (
    <section className={preferredStyle.Section}>
        <Container fluid>
    <Row>
        <Col>
        <Media>
            <div className={preferredStyle.ImgBox}>
                <img src={PinkPanther} alt='' className={preferredStyle.OCPanther} />
            </div>

        <div className={preferredStyle.ImgBox}>
                <img src={OwensPreferred} alt='Owens Corning Preferred Contractor' className={preferredStyle.OCLogo} />
            </div>
            </Media>
        </Col>


    </Row>
    </Container>
    </section>
)

export default Preferred