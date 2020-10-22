import React from 'react';
import { Link } from 'gatsby'


  const Header = (props) => {
    return(
      <section
      className="inner-page-banner servicesBanner"
      >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumbs-area">
              <h1>{props.Service}</h1>
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

    )
  }


export default Header