import React from 'react';

import { Link } from 'gatsby'

class ContactHeader extends React.Component {
  render() {
    return (
      <section
        className="inner-page-banner contactBanner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>Contact</h1>
                <ul>
                  <li>
                  <Link rel="preload" to="/">Home</Link>
                  </li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactHeader