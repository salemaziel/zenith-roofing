import React, { Component } from 'react';

import HeroHeaderSection from './HeroHeaderSection'
import HeroBoxesSection from './HeroBoxesSection'
import CustomerLovesSection from './CustomerLovesSection'
import ServicesSection from './ServicesSection'
import SystemsSection from './SystemsSection'
import TestimonialSection from './TestimonialSection'
import HomeActionBanner from './homeactionBanner'
import Preferred from './preferred'

import '../../../css/main.css'



class HomeIndex extends Component {
  render() {
    return (
      <>
        <HeroHeaderSection />
        <HeroBoxesSection />
        <CustomerLovesSection />
        <Preferred />
        <ServicesSection />
        <HomeActionBanner />
        <SystemsSection />
       <TestimonialSection />
      


      </>
    );
  }
}

export default HomeIndex;
