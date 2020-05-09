import React, { Component } from 'react';


import ResServicesGrid from './resservicesgrid'
import ResServicesHeader from './resservicesheader'
import './services.css'


class ResServicesPage extends Component {
    render() {
    return (
        <>
        <ResServicesHeader />
        <ResServicesGrid />
      
      </>
    );
  }
}

export default ResServicesPage