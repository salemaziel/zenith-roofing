import React from "react";
import CardImg from 'react-bootstrap/CardImg'
import { SystemsImage } from '../../../../images/index'

class SystemsBoxLeft extends React.Component {
  render() {
    return (
      <div className="box-left">
        {" "}
        <CardImg src={SystemsImage} className="img-fluid" alt='Roofer Working' />{" "}
      </div>
    );
  }
}

export default SystemsBoxLeft;
