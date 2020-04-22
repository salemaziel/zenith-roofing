import React, { Component } from 'react';

import {
    Service14,
    Service15,
    Service16,
    Service17,
    Service18,
    Service19,
} from '../../../images/index'

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