import React from 'react';
import { Link } from 'gatsby'

const AboutHeader = () => (
      <section
        className="inner-page-banner servicesBanner"
        >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>About Us</h1>
                <ul>
                  <li>
                    <Link rel="preload" to="/">Home</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

export default AboutHeader