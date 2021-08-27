import React from 'react';

import HeroHeaderSection from './HeroHeaderSection'
import HeroBoxesSection from './HeroBoxesSection'
import CustomerLovesSection from './CustomerLovesSection'
import ServicesSection from './ServicesSection'
import SystemsSection from './SystemsSection'
import TestimonialSection from './TestimonialSection'
import HomeActionBanner from './homeactionBanner'
import Preferred from './preferred'

import '../../../css/main.css'



const HomeIndex = () => (
      <>
        <HeroHeaderSection
        heroHiddenTitle="Zenith Roofing Services"
        heroVisibleTitle="Serving Southern California"
        callButton="Call Now"
        quoteButton="Get A Quote"
        />
        <HeroBoxesSection />
        <CustomerLovesSection />
        <Preferred />
        <ServicesSection />
        <HomeActionBanner />
        <SystemsSection />
       <TestimonialSection />
      


      </>
    );


export default HomeIndex;
