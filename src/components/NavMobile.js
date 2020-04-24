import React from "react"
import SideNav from "react-simple-sidenav"
import { Link } from "gatsby"
//import { LogoWshadowDarkVertSm } from '../images/index'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { LogoWshadowDarkVertSm } from "../images/index"

import navmobileStyles from "./navmobile.module.css"
import { MenuIcon } from "../images/index"

class NavMobile extends React.Component {
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
      <Container
        fluid
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Row className="mobileNavRow">
          <Col />

          <Col
            xs={6}
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Link to="/" rel="preload">
              <img
                src={LogoWshadowDarkVertSm}
                alt="Logo"
                className="mobileLogo"
              />
            </Link>
          </Col>
          <Col
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <div className="mobilespace"></div>
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
                <img src={MenuIcon} alt='' className="menuIcon" />
            </div>
          </Col>
        </Row>
        <SideNav
          openFromRight={true}
          title={
            <div>
              <Link>
                <img src={LogoWshadowDarkVertSm} width="100%" alt="" />
              </Link>
            </div>
          }
          titleStyle={{ background: "inherit", color: "#black" }}
          items={[
            <Link rel="preload" className="nav-link" to="/">
              Home
            </Link>,
            <Link rel="preload" className="nav-link" to="/about">
              About
            </Link>,
            <Link rel="preload" className="nav-link" to="/services">
              Services
            </Link>,
            <Link rel="preload" className="nav-link" to="/contact">
              Contact
            </Link>,
          ]}
          itemStyle={{
            background: "inherit",
            color: "#fff",
            fontSize: "inherit",
            padding: "0.5rem 0",
            textAlign: "center",
          }}
          navStyle={{ width: "75%" }}
          showNav={this.state.showNav}
          onHideNav={() => this.setState({ showNav: false })}
        />
      </Container>
    )
  }
}

export default NavMobile
