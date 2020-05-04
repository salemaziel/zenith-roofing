import React, { Component } from 'react';


import ServicesGrid from './servicesgrid'
import ResServicesHeader from './resservicesheader'
import './services.css'


class ResServicesPage extends Component {
    render() {
    return (
        <>
        <ResServicesHeader />
        <ServicesGrid />
      
      </>
    );
  }
}

export default ResServicesPage