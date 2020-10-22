import React from "react"
import Navbar from "react-bootstrap/Navbar"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import SideNav from "react-simple-sidenav"

import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link, navigate, navigateTo } from "gatsby"
import { LogoWshadowDarkVertSm, PhoneNumber } from "../images/index"
//import NavMobile from './NavMobile'
import { MenuIcon } from "../images/index"

class NavbarCustom extends React.Component {
  constructor() {
    super()

    this.state = {
      showNav: false,
      title: "",
      items: "",
      openFromRight: "",
    }
  }
  render() {
    return (
      <>
        <Navbar
          style={{
            position: "fixed",
            top: "0",
            right: "0",
            left: "0",
            zIndex: "5",
            border: "1px solid",
            borderColor: "rgba(0,0,0,0.05)",
            borderRadius: "5px",
          }}
        >
          <Container
            /*style={{
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              textAlign: "center",
              margin: "auto",
            }}*/
          >
            <Navbar.Brand as={Link} to="/" rel="preload">
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
                  fontSize: "1rem",
                }}
              >
                Lic# 1036112
              </p>
            </Navbar.Brand>
            <div
              className="navbar-toggle mobileNav"
              onClick={() => this.setState({ showNav: true })}
            >
              {" "}
              {/*<div className={navmobileStyles.menu}>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" /> 
          </div>*/}
              <img src={MenuIcon} alt="" className="menuIcon" />
            </div>

            <Nav
              className="mr-auto fullNav"
              defaultActiveKey="/"
              onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
              style={{
                marginTop: "1.5rem",
              }}
            >
              <div style={{ margin: "auto", padding: "0" }}>
                <a href="tel:8589006163" style={{ cursor: "pointer" }}>
                  <img
                    src={PhoneNumber}
                    style={{
                      width: "100%",
                      maxWidth: "150px",
                      minWidth: "100px",
                    }}
                    alt="PhoneNumber:8589006163"
                    className=""
                  />
                </a>
              </div>

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
                <NavDropdown.Item eventKey="/services">
                  All Services
                </NavDropdown.Item>
              </NavDropdown>

              {/*<Nav.Link as ={Link} to="/services/roofrepairs" className="nav-link" rel="preload" eventKey="Repairs-Link">
              Roof Repairs
      </Nav.Link>*/}

              <Nav
                className="mr-auto"
                defaultActiveKey="/"
                onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
              ></Nav>

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
                <NavDropdown.Item eventKey="/services">
                  All Services
                </NavDropdown.Item>
              </NavDropdown>
              {/*<Nav.Link as ={Link} to="/services" className="nav-link" rel="preload" eventKey="Services-Link">
              Services
          </Nav.Link>*/}
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
                <Nav.Link
                  as={Link}
                  to="/services/roofrepairs"
                  className="nav-link"
                  rel="preload"
                  eventKey="/services/roofrepairs"
                >
                  Roof Repairs{" "}
                </Nav.Link>
              </Nav.Item>
              {/*<Nav.Link as ={Link} to="/contact" className="nav-link" rel="preload">
              Contact
             </Nav.Link>*/}
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
          </Container>
        </Navbar>
        <SideNav
          openFromRight={true}
          title={
            <div
              style={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Nav.Link as={Link} to="/">
                <img
                  src={LogoWshadowDarkVertSm}
                  width="100%"
                  alt="Zenith Roofing Logo"
                />
              </Nav.Link>
            </div>
          }
          titleStyle={{
            background: "inherit",
            color: "#black",
            width: "200px",
            margin: "auto",
          }}
          items={[
            <Nav.Item>
              <Nav.Link as={Link} rel="preload" className="nav-link" to="/">
                Home
              </Nav.Link>
            </Nav.Item>,
            <Nav.Item>
              <Nav.Link
                as={Link}
                rel="preload"
                className="nav-link"
                to="/services/roofrepairs"
              >
                Roof Repairs
              </Nav.Link>
            </Nav.Item>,
            <Nav.Item>
              <Nav.Link
                as={Link}
                rel="preload"
                className="nav-link"
                to="/services"
              >
                Commercial
              </Nav.Link>
            </Nav.Item>,
            <Nav.Item>
              <Nav.Link
                as={Link}
                rel="preload"
                className="nav-link"
                to="/services"
              >
                Residential
              </Nav.Link>
            </Nav.Item>,
            <Nav.Item>
              <Nav.Link
                as={Link}
                rel="preload"
                className="nav-link"
                to="/about"
              >
                About Us
              </Nav.Link>
            </Nav.Item>,
            <Nav.Item>
              <a
                className="nav-link"
                href="https://referrals.zenithroofingservices.com"
              >
                Referrals
              </a>
            </Nav.Item>,
            <Nav.Item>
              <Button
                className="QuoteNav"
                rel="preload"
                onClick={() => navigateTo("/contact")}
              >
                Contact Us
              </Button>
            </Nav.Item>,
          ]}
          itemStyle={{
            background: "inherit",
            color: "#fff",
            fontSize: "inherit",
            padding: "0",
            textAlign: "center",
          }}
          navStyle={{ width: "75%" }}
          showNav={this.state.showNav}
          onHideNav={() => this.setState({ showNav: false })}
        />
      </>
    )
  }
}

export default NavbarCustom
