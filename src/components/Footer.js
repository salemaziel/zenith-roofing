import React from "react";
import FooterBox from "./FooterDir/FooterBox";

import RContainer from "react-bootstrap/Container";
import Container from "react-bootstrap/Container";


class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Container fluid>
            <FooterBox></FooterBox>
        </Container>
      </footer>
    );
  }
}

export default Footer;
