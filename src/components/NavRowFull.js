import React from "react"
import NavLogo from "./NavDir/NavLogo"
import NavPages from "./NavDir/NavPages"
import Row from "react-bootstrap/Row";
import { NavLink } from "reactstrap"
import SideNav from "react-simple-sidenav"
import { Link } from 'gatsby'
import { LogoWshadowDarkVert } from "../images/index"


class NavRowFull extends React.Component {
  constructor() {
    super();

    this.state = {
      showNav: false,
      title: '',
      items: '',
      openFromRight: '',


      
    }
  }
  render() {
    return (
      <Row className="d-flex flex-row">
        <div className="col-md-4 my-auto">
          <Row className="d-flex flex-row">
            <div className="col-8 my-auto">
              <NavLogo />
            </div>
            <div className="col-4 text-right my-auto">
            

              <div 
                className="navbar-toggle"
                onClick={() => this.setState({showNav: true})}>
                {" "}
               
                <span className="icon-bar" /> 
                <span className="icon-bar" />{" "}
                <span className="icon-bar" />{" "}
              </div>
              </div>
          </Row>
        </div>
        <div className="col-lg-8 my-auto navigation">
          <div className="col-md-8 my-auto">
            <NavPages />
            
          </div>
        </div>
       <SideNav 
              openFromRight={true}
              title={<div><NavLink><img src={LogoWshadowDarkVert} width="100%" alt=''
               /></NavLink></div>} 
              titleStyle={{ background: 'inherit', color: '#black'}}
              items={[
                <NavLink tag={Link} to='/'>Home</NavLink>,
                <NavLink tag={Link} to='/about'>About</NavLink>,
                <NavLink tag={Link} to='/services'>Services</NavLink>,
                <NavLink tag={Link} to='/systems'>Systems</NavLink>,
                <NavLink tag={Link} to='/contact'>Contact</NavLink>,
                ]} 
              itemStyle = {{background: 'inherit', color: '#fff', fontSize: 'inherit', padding: '0.5rem 0'}}
              showNav = {this.state.showNav}
              onHideNav = {() => this.setState({showNav: false})} />
      </Row>
    )
  }
}

export default NavRowFull
