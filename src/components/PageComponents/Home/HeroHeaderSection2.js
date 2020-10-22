import React from "react"

import Col from "react-bootstrap/Col"
import {
  LogoWshadowDarkVertMd,
  FullLogoNoBgMd,
  PhoneNumber,
  PhonenumberHorz,
} from "../../../images/index"
import Modal from "react-modal"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"



import {
  FaPhoneAlt
} from 'react-icons/fa'

import EstimateForm from "./estimateform"

import homeStyles from "./home.module.css"
import "./home.module.css"

class HeroHeaderSection2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      className: "",
      shouldCloseOnOverlayClick: "",
      shouldCloseOnEsc: "",
      shouldReturnFocusAfterClose: "",
      contentLabel: "",
    }
  }

  handleModalOpen = (event) => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: true })
  }

  handleModalClose = (event) => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
  }

  render() {
    return (
      <section className={homeStyles.HeroSection}>
        <Container fluid className={homeStyles.HeroContainer}>
          <Row style={{margin: '10% auto'}}>
            <Col>
              <div>
                <img
                  src={FullLogoNoBgMd}
                  className={homeStyles.Logo}
                  alt="Logo for Zenith Roofing Services Southern California"
                />
                <h1 className={homeStyles.heroTitle}>
                  <span style={{ display: "none" }}>
                    Zenith Roofing Services
                  </span>
                  Serving Southern California
                </h1>
              </div>

              <div className={homeStyles.HomeHeroBtns}>
                <Button className={homeStyles.freecall} href="tel:8589006163">
                  <FaPhoneAlt
                    style={{ margin: "0 4px 0 0", fontSize: "16px" }}
                  />
                  Call Now
                </Button>
                <Button
                  className={homeStyles.getquote}
                  onClick={this.handleModalOpen}
                >
                  Get A Quote
                </Button>
              </div>
            </Col>
            <Col className={homeStyles.FormDesktop}>
              <EstimateForm />
            </Col>
            <Modal
              isOpen={this.state.isModalOpen}
              onRequestClose={this.handleModalClose}
              contentLabel="Request A Quote"
              id="modalmailing"
              shouldCloseOnOverlayClick={true}
              shouldCloseOnEsc={true}
              shouldReturnFocusAfterClose={true}
              className={homeStyles.modalmailing}
              overlayClassName={homeStyles.modalmailingOverlay}
            >
              <Container
                style={{
                  outlineColor: "none!important",
                  padding: "auto 0!important",
                }}
                className={homeStyles.ModalContainer}
              >
                <EstimateForm />
              </Container>
            </Modal>
          </Row>
        </Container>
      </section>
    )
  }
}

export default HeroHeaderSection2
