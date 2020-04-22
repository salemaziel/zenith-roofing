import React from "react";
import { CardImg } from 'reactstrap'
import { SystemsImage } from '../../../../images/index'

class SystemsBoxLeft extends React.Component {
  render() {
    return (
      <div className="box-left">
        {" "}
        <CardImg src={SystemsImage} className="img-fluid" />{" "}
      </div>
    );
  }
}

export default SystemsBoxLeft;
