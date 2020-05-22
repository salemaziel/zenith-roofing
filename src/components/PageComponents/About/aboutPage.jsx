import React, { Component } from 'react';



import AboutHeader from './aboutheader'
import AboutSection1 from './aboutSection1';
import AboutSection3 from './aboutSection3';

import ActionBanner from '../../actionBanner'
import aboutStyle from './about.module.css'

class AboutPage extends Component {
    render() {
    return (
        <>
        <AboutHeader />
        <div className={aboutStyle.AboutBody} >
        <AboutSection1 />
        <AboutSection3 />
        </div>
        <ActionBanner />
        
      
      </>
    );
  }
}

export default AboutPage

