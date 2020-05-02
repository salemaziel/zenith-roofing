import React from "react"


import Col from "react-bootstrap/Col"
import { LogoWshadowDarkVertMd, PhoneNumber, PhonenumberHorz } from "../../../images/index"
import Modal from "react-modal"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"


import EstimateForm from './estimateform'


import homeStyles from "./home.module.css"
import "./home.module.css"

class HeroHeaderSection extends React.Component {
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
          <Row>
            <Col>
              {/*<h1>
                {" "}*/}
        <div>
              <img
                src={LogoWshadowDarkVertMd}
                className={homeStyles.Logo}
                alt=""
          
              />
            </div>
            
              {/*{" "}
                Zenith{" "}
              </h1>
    <h2>Roofing</h2>*/}
              <div className={homeStyles.HomeHeroBtns}>
                <Button className={homeStyles.freecall} href="tel:8589006163">
                <FontAwesomeIcon icon={faPhoneAlt} style={{margin: '0 4px 0 0', fontSize: '16px'}}/>
                  
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
              <Container style={{outlineColor: 'none!important'}}>
               <EstimateForm  />
              </Container>
            </Modal>
 {/*           <div style={{ margin: "auto", padding: "0", }}>
          <a
            href="tel:8589006163"
            style={{ cursor: "pointer", lineHeight: "150px" }}
          >
            <img
              src={PhonenumberHorz}
              style={{ margin: 'auto' }}
              alt="PhoneNumber:8589006163"
              className=""
            />
          </a>
  </div>*/}
          </Row>
        </Container>
      </section>
    )
  }
}

export default HeroHeaderSection
