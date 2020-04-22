import React, { Component } from "react";
import { Link } from 'gatsby'

import { Logo } from '../../images/index'

class NavLogo extends Component {
  render() {
    return (
      <div className="logo-site">
        <Link to="/" rel="preload">
          <img src={Logo} className="img-fluid" alt='Zenith Roofing Logo' />
        </Link>
      </div>
    );
  }
}

export default NavLogo;
