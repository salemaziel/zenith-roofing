import React from "react";
import { Systemslogo } from '../../../../images/index'


class SystemsBoxRight extends React.Component {
  render() {
    return (
      <div className="box-right">
        <h2>
          {" "}
          <img src={Systemslogo} className="img-system" alt='' />{" "}
          <span>Systems</span> We Work With{" "}
        </h2>
        <ul>
          <li>Composition Shingles</li>
          <li>Concrete Tile</li>
          <li>Clay S Tile</li>
          <li>Two-Piece Tile</li>
          <li>Single-Ply Membrane</li>
          <li>Torch-Applied Modified Bitumen</li>
        </ul>
      </div>
    );
  }
}

export default SystemsBoxRight;
