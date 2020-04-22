import React from "react";
import { Button, NavItem } from 'reactstrap'
import { Link } from 'gatsby'

class NavListItemRequestQuote extends React.Component {
  render() {
    return (
      <NavItem className="request">
        <Button 
        className="QuoteNav"
        tag={Link}
        to="/requestaquote">
          
          Request a<br />
          Quote
        </Button>
      </NavItem>
    );
  }
}

export default NavListItemRequestQuote;
