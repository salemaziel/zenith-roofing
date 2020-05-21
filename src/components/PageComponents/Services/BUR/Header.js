import React from 'react';
import { Link } from 'gatsby'

class PageHeader extends React.Component {
  render() {
    return (
      <section
        className="inner-page-banner servicesBanner"
        >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>Built-Up Roofing (BUR) </h1>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li><Link rel="preload" to="/services"> Services</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PageHeader