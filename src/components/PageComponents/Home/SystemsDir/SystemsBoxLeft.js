import React from "react";
import CardImg from 'react-bootstrap/CardImg'
import { SystemsImage } from '../../../../images/index'

const SystemsBoxLeft = () => (
      <div className="box-left">
        {" "}
        <CardImg src={SystemsImage} className="img-fluid" alt='Roofer Working' />{" "}
      </div>
    );


export default SystemsBoxLeft;
