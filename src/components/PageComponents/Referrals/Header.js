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
                <h1>Page</h1>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Referral Rewards</li>

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