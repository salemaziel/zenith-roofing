import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link, navigate, navigateTo } from "gatsby"
import { LogoWshadowDarkVertSm, PhoneNumber } from "../images/index"
//import NavMobile from './NavMobile'


function NavbarCustom(props) {

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
        <Row className="d-flex flex-nowrap">
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

            <Nav
              className="mr-1"
              defaultActiveKey="/"
              onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
              style={{
                marginTop: '1.5rem'
              }}
            >


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
              <NavDropdown
                as={Link}
                href="/serviceAreas"
                to="/serviceAreas"
                eventKey="serviceAreas"
                title="Service Areas"
                id="nav-dropdown-locations"
              >
               <NavDropdown.Item eventKey="/san-diego-county-roofing/carlsbad-roofing">
                  Carlsbad{" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/san-diego-county-roofing/escondido-roofing">
                  Escondido
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/san-diego-county-roofing/oceanside-roofing">
                  {" "}
                  Oceanside{" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/san-diego-county-roofing/san-marcos-roofing">
                  San Marcos{" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/san-diego-county-roofing/vista-roofing">
                  Vista
                </NavDropdown.Item>

              </NavDropdown>

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
                <NavDropdown.Item eventKey="/services/skylights">
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

<Nav.Item>
              <Button
                className="QuoteNav ml-2"
                as={Link}
                rel="preload"
                to="/contact"
              >
                Contact
              </Button>
              </Nav.Item>
            </Nav>
        </Row>
      </Container>
    </Navbar>
  )
}

export default NavbarCustom
