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
              <h1>{props.bannerTitle}</h1>
              <ul>
                <li>
                  <Link to="/" rel="preload">Home</Link>
                </li>
                <li><Link rel="preload" to="/services">Roofing Services</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    )
  }


export default Header