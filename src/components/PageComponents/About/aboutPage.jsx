import React, { Component } from 'react';



import AboutHeader from './aboutheader'
import AboutSection1 from './aboutSection1';
import AboutSection3 from './aboutSection3';
import AboutSectionParallax from './aboutSectionParallax';

import ActionBanner2 from './actionBanner2'

//import './about.css'

class AboutPage extends Component {
    render() {
    return (
        <>
        <AboutHeader />
        <AboutSection1 />
        {/*<AboutSectionParallax />*/}
        <AboutSection3 />
        <ActionBanner2 />
        
      
      </>
    );
  }
}

export default AboutPage

