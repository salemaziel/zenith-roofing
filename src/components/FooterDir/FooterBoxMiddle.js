import React from "react";

class FooterBoxMiddle extends React.Component {
  render() {
    return (
      <div className="box-two">
        <h2>
          {" "}
          <span className="inner-span">Quick Links</span>{" "}
        </h2>
        <div className="nav-list">
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/sitemap.xml">Site Map</a>
            </li>
            <li>
              <a href="https://referrals.zenithroofingservices.com">Referrals</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FooterBoxMiddle;
