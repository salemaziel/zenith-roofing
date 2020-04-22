import React from "react";
import Block1 from '../../../images/featuredblock1.jpg'

class HeroBoxes1 extends React.Component {
  render() {
    return (
      <div className="boxes">
        <img src={Block1} className="img-fluid"  alt=''/>
      </div>
    );
  }
}

export default HeroBoxes1;
