import React from "react";
import SystemsBoxLeft from "./SystemsBoxLeft";
import SystemsBoxRight from "./SystemsBoxRight";

import { Row, Card } from 'reactstrap'


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
