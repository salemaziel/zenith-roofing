import React from "react";
import Card from 'react-bootstrap/Card'
import CardImg from 'react-bootstrap/CardImg'
import { Reviewer2 } from '../../../../images/index'

class TestimonialBox extends React.Component {
  render() {
    return (
      <Card className="white-box-inner">
        <div className="profile-area">
          <div className="profile-img">
            <CardImg src={Reviewer2} className="img-fluid" alt='' />
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
      </Card>
    );
  }
}

export default TestimonialBox;
