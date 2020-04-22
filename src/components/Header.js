import React from "react"
import NavBarCustom from "./NavBar"
//import NavbarRowFull from "./NavRowFull"
//import SideNav from "react-simple-sidenav"
import { Link } from 'gatsby'
import { LogoWshadowDarkVertSm } from '../images/index'


//const Header = () => (
class Header extends React.Component {
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
      <header>
        <div className="container-fluid">
          {/*<NavBarCustom />*/}
          {/*<div
            className="navbar-toggle mobileNav"
            onClick={() => this.setState({ showNav: true })}
          >
            {" "}
            <span className="icon-bar" />
            <span className="icon-bar" /> 
            <span className="icon-bar" />{" "}
          </div>
          <SideNav 
              openFromRight={true}
              title={<div><Link><img src={LogoWshadowDarkVertSm} width="100%" alt=''
               /></Link></div>} 
              titleStyle={{ background: 'inherit', color: '#black'}}
              items={[
                <Link rel="preload" className="nav-link" to='/'>Home</Link>,
                <Link rel="preload" className="nav-link" to='/about'>About</Link>,
                <Link rel="preload" className="nav-link" to='/services'>Services</Link>,
                <Link rel="preload" className="nav-link" to='/systems'>Systems</Link>,
                <Link rel="preload" className="nav-link" to='/contact'>Contact</Link>,
                ]} 
              itemStyle = {{background: 'inherit', color: '#fff', fontSize: 'inherit', padding: '0.5rem 0'}}
              showNav = {this.state.showNav}
              onHideNav = {() => this.setState({showNav: false})} />*/}
              </div>
      </header>
    )
  }
}

export default Header
