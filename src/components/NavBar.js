import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

//import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import NavDropdown from "react-bootstrap/NavDropdown"
//import { useRouter } from "./../util/router.js";
import { Link, navigate, navigateTo } from "gatsby"
import { LogoWshadowDarkVertSm, PhoneNumber } from "../images/index"
//import NavMobile from './NavMobile'


function NavbarCustom(props) {
  //  const router = useRouter();

  return (
    <Navbar 
    className="fullNav" 
    style={{
      position: 'fixed',
      top: '0',
      right: '0',
      left: '0',
      zIndex: '5',
      border: '1px solid',
      borderColor: 'rgba(0,0,0,0.05)',
      borderRadius: '5px'
    }}
    >
      <Container
        fluid
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <Row style={{display: 'flex', flexWrap: 'nowrap'}}>
          <Link rel="preload" to="/">
            <Navbar.Brand>
              <img
                className="d-inline-block align-top"
                src={LogoWshadowDarkVertSm}
                alt="Logo"
                height="75px"
                width="auto"
              ></img>
              <p
                style={{
                  textAlign: "center",
                  margin: "0 auto",
                  padding: "0 5px 0 0",
                  fontSize: "1rem"
                }}
              >
                Lic# 1036112
              </p>
            </Navbar.Brand>
          </Link>

          <div style={{ margin: "auto", padding: "0" }}>
            <a
              href="tel:8589006163"
              style={{ cursor: "pointer" }}
            >
              <img
                src={PhoneNumber}
                style={{ width: "100%", maxWidth: "150px", minWidth: "100px" }}
                alt="PhoneNumber:8589006163"
                className=""
              />
            </a>
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
        {/*  <Navbar.Collapse
            id="navbar-nav"
            className="justify-content-end"
            className="nav-link"
        > */}
            <Nav
              className="mr-1"
              defaultActiveKey="/"
              onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
              style={{
                marginTop: '1.5rem'
              }}
            >
              {/* <Link rel="preload" className="nav-link" to="/">
              Home
      </Link>*/}

              {/*<NavDropdown
              as={Link}
              to="/services/roofrepairs"
              eventKey="/services/roofrepairs"
              title="Roof Repairs"
              id="nav-dropdown"
            >
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                Something else here
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>*/}

              <NavDropdown
                as={Link}
                href="/services"
                to="/commercial"
                eventKey="commercial"
                title="Commercial"
                id="nav-dropdown-commercial"
              >
                <NavDropdown.Item eventKey="/services/owens-corning">
                  Owens-Corning Systems
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/services/thermoplastic-polyolefin">
                  Thermoplastic Polyolefin (TPO)
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/services/polyvinyl-chloride">
                  {" "}
                  Polyvinyl Chloride (PVC){" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/services/ethylene-propylene-diene-monomer">
                  Ethylene Propylene Diene Monomer (EPDM){" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/services/tile">
                  Tile{" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/services/shingle">
                  Shingle{" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/services/builtup-roofing">
                  Built-up Roofing BUR{" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/services">All Services</NavDropdown.Item>
              </NavDropdown>

              {/*<Link to="/services/roofrepairs" className="nav-link" rel="preload" eventKey="Repairs-Link">
              Roof Repairs
      </Link>*/}

              <NavDropdown
                href="/services"
                as={Link}
                to="/residential"
                title="Residential"
                id="nav-dropdown-residential"
                eventKey="residential"
              >
                <NavDropdown.Item eventKey="/services/roof-maintenance">
                  Roof Maintenance
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/services/sky-lights">
                  Skylights
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/services/solar">
                  Solar
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/services/roof-inspections">
                  Inspections
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/services">All Services</NavDropdown.Item>

              </NavDropdown>
              {/*<Link to="/services" className="nav-link" rel="preload" eventKey="Services-Link">
              Services
          </Link>*/}
<Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                className="nav-link"
                rel="preload"
                eventKey="/about"
              >
                About
              </Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Link
                to="/services/roof-repairs"
                className="nav-link"
                rel="preload"
                eventKey="/services/roof-repairs"
              >
                Roof Repairs{" "}
              </Link>
              </Nav.Item>
              {/*<Link to="/contact" className="nav-link" rel="preload">
              Contact
             </Link>*/}
<Nav.Item>
              <Button
                className="QuoteNav"
                as={Link}
                rel="preload"
                to="/contact"
              >
                Contact
              </Button>
              </Nav.Item>
            </Nav>
          {/*</Navbar.Collapse>*/}
        </Row>
      </Container>
    </Navbar>
  )
}

export default NavbarCustom
