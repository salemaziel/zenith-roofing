import React from 'react';
//import NavListItem from "./NavListItem";
import NavListItemRequestQuote from './NavListItemRequestQuote';

import { Nav, NavLink, NavItem } from 'reactstrap';
import { Link } from 'gatsby';

class NavPages extends React.Component {
  render() {
    return (
      <Nav
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        {/*<NavItem><NavLink className="nav-link" to="/" tag={Link} style={{ fontSize: 18, fontStyle: 'bold',  }}>HOME</NavLink></NavItem>*/}
        <NavItem>
          <NavLink
            className="nav-link"
            to="/about"
            tag={Link}
            /*style={{ fontSize: '1.5em', fontStyle: 'bold' }}*/
          >
            ABOUT
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="nav-link"
            to="/services"
            tag={Link}
            /*style={{ fontSize: '1.5em', fontStyle: 'bold' }}*/
          >
            SERVICES
          </NavLink>
          
            {/*<NavLink 
              to="/services/repairs"
              tag={Link}>
                Roof Repairs
              </NavLink>
          
          
            <NavLink 
              to="/services/skylights"
              tag={Link}>
                SkyLights
            </NavLink>*/}
              </NavItem>
        <NavItem>
          <NavLink
            className="nav-link"
            to="/systems"
            tag={Link}
            /*style={{ fontSize: '1.5em', fontStyle: 'bold' }}*/
          >
            SYSTEMS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="nav-link"
            to="/contact"
            tag={Link}
            /*style={{ fontSize: '1.5em', fontStyle: 'bold' }}*/
          >
            CONTACT
          </NavLink>
        </NavItem>
        <NavListItemRequestQuote />
      </Nav>
    );
  }
}

export default NavPages;
