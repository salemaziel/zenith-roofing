import React from 'react';

import { Link } from 'gatsby'

class ResServicesHeader extends React.Component {
  render() {
    return (
      <section
        className="inner-page-banner servicesBanner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>Residential Services</h1>
                <ul>
                  <li>
                    <Link rel="preload" to="/">Home</Link>
                  </li>
                  <li>
                    <Link rel="preload" to="/residential/services">Residential</Link>
                  </li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ResServicesHeader