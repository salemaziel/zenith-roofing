import React from "react";
import SystemsBox from "./SystemsDir/SystemsBox";

import Row from "react-bootstrap/Row";

class SystemsSection extends React.Component {
  render() {
    return (
      <section className="system-we-work">
        <div className="container-fluid">
          <Row className="justify-content-center">
            <SystemsBox></SystemsBox>
          </Row>
        </div>
      </section>
    );
  }
}

export default SystemsSection;
