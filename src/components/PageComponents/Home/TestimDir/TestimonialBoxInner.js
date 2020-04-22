import React from "react";

class TestimonialBoxInner extends React.Component {
  render() {
    return (
      <div className="white-box-inner">
        <div className="profile-area">
          <div className="profile-img">
            <img src="images/customersloveus.png" className="img-fluid" alt='' />
          </div>
          <h2>Mark Steven</h2>
          <h3>Architecture</h3>
          <div className="star">
            {" "}
            <span className="fa fa-star" /> <span className="fa fa-star" />{" "}
            <span className="fa fa-star" /> <span className="fa fa-star" />{" "}
            <span className="fa fa-star" />{" "}
          </div>
        </div>
        <p>
          {" "}
          Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem
          Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem
          Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum{" "}
        </p>
      </div>
    );
  }
}

export default TestimonialBoxInner;
