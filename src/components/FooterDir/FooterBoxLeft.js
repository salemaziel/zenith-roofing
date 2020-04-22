import React from "react";

import { Logo } from '../../images/index'

class FooterBoxLeft extends React.Component {
  render() {
    return (
      <div className="box-one">
        <div className="logo">
          <img src={Logo} className="img-fluid" alt=''/>
        </div>
        <div className="social-icon">
          {" "}
          <a href="#">
            <span className="fa fa-facebook-f" />
          </a>{" "}
          <a href="#">
            <span className="fa fa-twitter" />
          </a>{" "}
          <a href="#">
            <span className="fa fa-pinterest-p" />
          </a>{" "}
          <a href="#">
            <span className="fa fa-envelope" />
          </a>{" "}
        </div>
      </div>
    );
  }
}

export default FooterBoxLeft;
