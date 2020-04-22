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
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Systems</a>
            </li>
            <li>
              <a href="#">Site Map</a>
            </li>
            <li>
              <a href="#">Referrals</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FooterBoxMiddle;
