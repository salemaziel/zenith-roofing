import React, { Component } from 'react';


import ServicesGrid from './servicesgrid'
import ServicesHeader from './servicesheader'
import './services.css'


class ServicesPage extends Component {
    render() {
    return (
        <>
        <ServicesHeader />
        <ServicesGrid />
      
      </>
    );
  }
}

export default ServicesPage