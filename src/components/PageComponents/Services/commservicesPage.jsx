import React, { Component } from 'react';


import CommServicesGrid from './commservicesgrid'
import CommServicesHeader from './commservicesheader'
import './services.css'


class CommServicesPage extends Component {
    render() {
    return (
        <>
        <CommServicesHeader />
        <CommServicesGrid />
      
      </>
    );
  }
}

export default CommServicesPage