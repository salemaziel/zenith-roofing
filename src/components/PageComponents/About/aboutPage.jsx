import React, { Component } from 'react';



import AboutHeader from './aboutheader'
import AboutSection1 from './aboutSection1';
import AboutSection3 from './aboutSection3';
import AboutSectionParallax from './aboutSectionParallax';

import ActionBanner2 from './actionBanner2'

import aboutStyle from './about.module.css'
//import './about.css'

class AboutPage extends Component {
    render() {
    return (
        <>
        <AboutHeader />
        <div className={aboutStyle.AboutBody} >
        <AboutSection1 />
        {/*<AboutSectionParallax />*/}
        <AboutSection3 />
        </div>
        <ActionBanner2 />
        
      
      </>
    );
  }
}

export default AboutPage

