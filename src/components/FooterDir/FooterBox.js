import React from "react";
import FooterBoxLeft from "./FooterBoxLeft";
import FooterBoxMiddle from "./FooterBoxMiddle";
import FooterBoxRight from "./FooterBoxRight";

import Row from "react-bootstrap/Row";


class FooterBox extends React.Component {
  render() {
    return (
      <div className="col-md-11 white-footer">
        <Row>
          <div className="col-lg-4">
            <FooterBoxLeft></FooterBoxLeft>
          </div>
          <div className="col-lg-4">
            <FooterBoxMiddle></FooterBoxMiddle>
          </div>
          <div className="col-lg-4">
            <FooterBoxRight></FooterBoxRight>
          </div>
          </Row>
      </div>
    );
  }
}

export default FooterBox;
