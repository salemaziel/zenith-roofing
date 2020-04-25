import React from "react";

import { Logo } from '../../images/index'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
            <FontAwesomeIcon icon={faFacebook} />
          </a>{" "}
          <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
          </a>{" "}
          <a href="#">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>{" "}
          <a href="#">
          <FontAwesomeIcon icon={faEnvelope} />
          </a>{" "}
        </div>
      </div>
    );
  }
}

export default FooterBoxLeft;
