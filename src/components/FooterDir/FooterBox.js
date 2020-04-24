import React from "react";
import FooterBoxLeft from "./FooterBoxLeft";
import FooterBoxMiddle from "./FooterBoxMiddle";
import FooterBoxRight from "./FooterBoxRight";

import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'


class FooterBox extends React.Component {
  render() {
    return (
      <div className="col-md-11 white-footer">
        <Row>
          <Col>
            <FooterBoxLeft></FooterBoxLeft>
          </Col>
          <Col>
            <FooterBoxMiddle></FooterBoxMiddle>
          </Col>
          {/*<div className="col-lg-4">
            <FooterBoxRight></FooterBoxRight>
    </div>*/}
          </Row>
      </div>
    );
  }
}

export default FooterBox;
