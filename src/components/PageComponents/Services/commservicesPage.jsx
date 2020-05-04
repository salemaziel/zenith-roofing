import React, { Component } from 'react';


import ServicesGrid from './servicesgrid'
import CommServicesHeader from './commservicesheader'
import './services.css'


class CommServicesPage extends Component {
    render() {
    return (
        <>
        <CommServicesHeader />
        <ServicesGrid />
      
      </>
    );
  }
}

export default CommServicesPage