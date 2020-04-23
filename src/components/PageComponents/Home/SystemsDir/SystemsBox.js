import React from "react";
import SystemsBoxLeft from "./SystemsBoxLeft";
import SystemsBoxRight from "./SystemsBoxRight";

import Row from "react-bootstrap/Row"
//import Container from "react-bootstrap/Container"
//import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"


class SystemsBox extends React.Component {
  render() {
    return (
      <Card className="col-md-11 box">
        <Row className="d-flex flex-row">
          <div className="col-lg-6 my-auto">
            <SystemsBoxLeft></SystemsBoxLeft>
          </div>
          <div className="col-lg-6 my-auto">
            <Row className="justify-content-center">
              <div className="col-lg-10">
                <SystemsBoxRight></SystemsBoxRight>
              </div>
            </Row>
          </div>
        </Row>
      </Card>
    );
  }
}

export default SystemsBox;
