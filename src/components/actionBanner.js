import React from 'react';
import Button from "react-bootstrap/Button";
import { Link } from 'gatsby'

import '../css/actioncomponent.css'

class ActionBanner extends React.Component {
  render() {
    return (
      <section
        className="action-wrap-layout1 bg-common"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 col-12">
              <div className="action-box-layout1">
                <h2 className="item-title">
                  Get Your Roofing Project Started Today!
                </h2>
              </div>
            </div>
            <div className="col-lg-3 col-12 d-flex justify-content-lg-end justify-content-center">
              <div className="">
                <Button 
                  tag={Link}
                  to="#"
                  className="CTAbutton"
                >
                  GET A QUOTE
                  <i className="fas fa-angle-right" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ActionBanner
