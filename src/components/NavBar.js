import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
//import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
//import { useRouter } from "./../util/router.js";
import { Link } from 'gatsby'
import { LogoWshadowDarkVertSm } from '../images/index'
//import NavMobile from './NavMobile'

function NavbarCustom(props) {
//  const router = useRouter();

  return (
    <Navbar className="fullNav">
      <Container >
        <Link rel="preload" to="/">
          <Navbar.Brand>
            <img
              className="d-inline-block align-top"
              src={LogoWshadowDarkVertSm}
              alt="Logo"
              height="100"
            ></img>
          </Navbar.Brand>
        </Link>

        {/*<div
          aria-controls="navbar-nav"
          className="border-0 navbar-toggle"
          onClick={() => this.setState({showNav: true})}>
          {" "}
         
          <span className="icon-bar" /> 
          <span className="icon-bar" />{" "}
          <span className="icon-bar" />{" "}
        
        </div>*/}
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="mr-1">

          <Link to="/services" className="nav-link" rel="preload">
             Services
            </Link>

            {/*<Link to="/systems" className="nav-link" rel="preload">
              Systems
      </Link>*/}

            <Link to="/about" className="nav-link" rel="preload">
              About
            </Link>

            <Link to="/contact" className="nav-link" rel="preload">
              Contact
            </Link>

            <Button
              className="QuoteNav"
              /*onClick={() => {
                router.push("/auth/signup");
              }}*/
            >
              Get A Quote
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
