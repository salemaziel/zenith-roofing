import React from 'react';


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
                <h1>Owens-Corning</h1>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Commercial</li>
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