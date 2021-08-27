import React from 'react';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Button from "react-bootstrap/Button";
import Modal from "react-modal"

import EstimateForm from './PageComponents/Home/estimateform'


import { homeActionBanner, modalmailingOverlay } from "./PageComponents/Home/home.module.css"
import { actionwraplayout1, ButtonBox, ItemTitle, CTAbutton } from '../css/actioncomponent.module.css'


class ActionBanner extends React.Component {
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
      <section
        className={actionwraplayout1}
      >
        <Container >
          <Row /*className="align-items-center"*/>
            <Col /*className="col-lg-9 col-12"*/ >
              <div className={ButtonBox}>
                <h2 className={ItemTitle}>
                  Get Your Roofing Project Started Today!
                </h2>
              </div>
            </Col>
            <Col /*className="col-lg-3 col-12 d-flex justify-content-lg-end justify-content-center"*/ >
              <div className={ButtonBox}>
                <Button 
                  onClick={this.handleModalOpen}
                  className={CTAbutton}
                >
                  GET A QUOTE
                  <i className="fas fa-angle-right" />
                </Button>
              </div>
            </Col>
          </Row>
          <Modal
              isOpen={this.state.isModalOpen}
              onRequestClose={this.handleModalClose}
              contentLabel="Request A Quote"
              id="homeActionBanner"
              shouldCloseOnOverlayClick={true}
              shouldCloseOnEsc={true}
              shouldReturnFocusAfterClose={true}
              className={homeActionBanner}
              overlayClassName={modalmailingOverlay}
            >
              <Container>
               {/* <LeadFormModal /> */}
               <EstimateForm  />
              </Container>
            </Modal>
        </Container>
      </section>
    );
  }
}

export default ActionBanner
