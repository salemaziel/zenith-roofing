import React, { Component } from 'react';

import HeroHeaderSection from './HeroHeaderSection'
import HeroBoxesSection from './HeroBoxesSection'
import CustomerLovesSection from './CustomerLovesSection'
import ServicesSection from './ServicesSection'
import SystemsSection from './SystemsSection'
import TestimonialSection from './TestimonialSection'
import ActionBanner from '../../actionBanner'

import '../../../css/main.css'



class HomeIndex extends Component {
  render() {
    return (
      <>
        <HeroHeaderSection />
        <HeroBoxesSection />
        <CustomerLovesSection />
        <ServicesSection />
        <ActionBanner />
        <SystemsSection />
       <TestimonialSection />
      


      </>
    );
  }
}

export default HomeIndex;
