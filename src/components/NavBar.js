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
    <Navbar className="fullNav">
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
        <Row>
          <Link rel="preload" to="/">
            <Navbar.Brand>
              <img
                className="d-inline-block align-top"
                src={LogoWshadowDarkVertSm}
                alt="Logo"
                height="110"
                width="135"
              ></img>
              <p
                style={{
                  textAlign: "center",
                  margin: "0 auto",
                  padding: "0 5px 0 0",
                }}
              >
                Lic# 1036112
              </p>
            </Navbar.Brand>
          </Link>

          <div style={{ margin: "auto", padding: "0" }}>
            <a
              href="tel:8589006163"
              style={{ cursor: "pointer", lineHeight: "150px" }}
            >
              <img
                src={PhoneNumber}
                style={{ width: "100%", maxWidth: "200px", minWidth: "170px" }}
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
          <Navbar.Collapse
            id="navbar-nav"
            className="justify-content-end"
            className="nav-link"
          >
            <Nav
              className="mr-1"
              defaultActiveKey="/"
              onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
            >
              {/* <Link rel="preload" className="nav-link" to="/">
              Home
      </Link>*/}

              {/*<NavDropdown
              as={Link}
              to="/services/roofrepairs"
              eventKey="services/roofrepairs"
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
                to="/commercial"
                eventKey="commercial"
                title="Commercial"
                id="nav-dropdown-commercial"
              >
                <NavDropdown.Item eventKey="commercial/services#Owenscorning">
                  Owens-Corning Systems
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="commercial/services#TPO">
                  Thermoplastic Polyolefin (TPO)
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="commercial/services#PVC">
                  {" "}
                  Polyvinyl Chloride (PVC){" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="commercial/services#EPDM">
                  Ethylene Propylene Diene Monomer (EPDM){" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="commercial/services#Tile">
                  Tile{" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="commercial/services#Shingle">
                  Shingle{" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="commercial/services#BUR">
                  Built-up Roofing BUR{" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="commercial/services">Services</NavDropdown.Item>
              </NavDropdown>

              {/*<Link to="/services/roofrepairs" className="nav-link" rel="preload" eventKey="Repairs-Link">
              Roof Repairs
      </Link>*/}

              <NavDropdown
                as={Link}
                to="/residential"
                title="Residential"
                id="nav-dropdown-residential"
                eventKey="residential"
              >
                <NavDropdown.Item eventKey="residential/page">
                  Roof Maintenance
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="residential/page">
                  Skylights
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="residential/services">Services</NavDropdown.Item>

              </NavDropdown>
              {/*<Link to="/services" className="nav-link" rel="preload" eventKey="Services-Link">
              Services
          </Link>*/}

              <Link
                to="/about"
                className="nav-link"
                rel="preload"
                eventKey="aboutLink"
              >
                About
              </Link>

              <Link
                to="/services/roofrepairs"
                className="nav-link"
                rel="preload"
                eventKey="repairLink"
              >
                Roof Repairs{" "}
              </Link>

              {/*<Link to="/contact" className="nav-link" rel="preload">
              Contact
             </Link>*/}

              <Button
                className="QuoteNav"
                as={Link}
                rel="preload"
                to="/contact"
              >
                Contact
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  )
}

export default NavbarCustom
