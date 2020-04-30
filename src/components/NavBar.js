import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
//import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import NavDropdown from 'react-bootstrap/NavDropdown'
//import { useRouter } from "./../util/router.js";
import { Link, navigate, navigateTo } from "gatsby"
import { LogoWshadowDarkVertSm,PhoneNumber } from "../images/index"
//import NavMobile from './NavMobile'



function NavbarCustom(props) {
  //  const router = useRouter();

  return (
    <Navbar className="fullNav">
      <Container style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center', textAlign: 'center'}}>
        <Link rel="preload" to="/">
          <Navbar.Brand>
            <img
              className="d-inline-block align-top"
              src={LogoWshadowDarkVertSm}
              alt="Logo"
              height="110"
            ></img>
                    <p
            style={{textAlign: 'center', margin: '0 auto', padding: '0 5px 0 0', }}
            >Lic# 1036112</p>
          </Navbar.Brand>
        </Link>
        <div style={{margin: 'auto', padding: '0', maxWidth: '50px'}}>
         <a href="tel:8589006163" style={{cursor: 'pointer', lineHeight:'150px',}}><img src={PhoneNumber}  style={{width: '100%', maxWidth: '200px', minWidth: '170px'}} alt="PhoneNumber:8589006163" className='' /></a> 
        </div>


        {/*<div
          aria-controls="navbar-nav"
          className="border-0 navbar-toggle"
          onClick={() => this.setState({showNav: true})}>
          {" "}
         
          <span className="icon-bar" /> 
          <span className="icon-bar" />{" "}
          <span className="icon-bar" />{" "}
        
        </div>*/}
        <Navbar.Collapse id="navbar-nav" className="justify-content-end" className="nav-link">
          <Nav 
          className="mr-1"
          defaultActiveKey="/"
          onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
          >
         {/* <Link rel="preload" className="nav-link" to="/" >
              Home
      </Link> */}

            <NavDropdown as={Link} to="/services/roofrepairs" eventKey="services/roofrepairs" title="Roof Repairs" id="nav-dropdown"> 
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>

            {/*<Link to="/services/roofrepairs" className="nav-link" rel="preload" eventKey="Repairs-Link">
              Roof Repairs
      </Link>*/}

<NavDropdown as={Link} to="/services" title="Services" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
          {/*<Link to="/services" className="nav-link" rel="preload" eventKey="Services-Link">
              Services
    </Link>*/}


            <Link to="/about" className="nav-link" rel="preload" eventKey="About-Link">
              About
            </Link>





            {/*<Link to="/contact" className="nav-link" rel="preload">
              Contact
             </Link>*/}

            <Button className="QuoteNav" as={Link} rel="preload" to="/contact">
              Contact
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarCustom
