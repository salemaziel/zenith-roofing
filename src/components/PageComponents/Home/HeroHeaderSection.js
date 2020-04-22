import React from "react"
//import HeroBtnCallNow from "./HeroDir/HeroBtnCallNow";
//import HeroBtnGetQuote from "./HeroDir/HeroBtnGetQuote";

//import { Container, Row } from 'reactstrap'
import Col from "react-bootstrap/Col"
//import { RoofOnly } from "../../../images/index"
import { LogoWshadowDarkVertMd } from "../../../images/index"
//import Modal from "react-modal"
import { Link } from "gatsby"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
//import LeadFormModal from "./LeadFormModal"


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
        <Container className={homeStyles.HeroContainer}>
          <Row>
            <Col>
              {/*<h1>
                {" "}*/}
              <img
                src={LogoWshadowDarkVertMd}
                className={homeStyles.Logo}
                alt=""
              />
              {/*{" "}
                Zenith{" "}
              </h1>
    <h2>Roofing</h2>*/}
              <div className={homeStyles.HomeHeroBtns}>
                <Button tag={Link} className={homeStyles.freecall}>
                  Call Us Now
                </Button>
                <Button
                  tag={Link}
                  className={homeStyles.getquote}
                  onClick={this.handleModalOpen}
                >
                  Get A Quote
                </Button>
              </div>
            </Col>
            <Col>
              <EstimateForm />
            </Col>
            {/*<Modal
              isOpen={this.state.isModalOpen}
              onRequestClose={this.handleModalClose}
              contentLabel="Request A Quote"
              id="modalmailing"
              shouldCloseOnOverlayClick={true}
              shouldCloseOnEsc={true}
              shouldReturnFocusAfterClose={true}
              className="modalmailing"
              overlayClassName="modalmailingOverlay"
            >
              <Container>
                <LeadFormModal />
              </Container>
            </Modal>*/}
          </Row>
        </Container>
      </section>
    )
  }
}

export default HeroHeaderSection
