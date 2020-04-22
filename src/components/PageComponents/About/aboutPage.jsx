import React, { Component } from 'react';



import AboutHeader from './aboutheader'
import AboutSection1 from './aboutSection1';
import AboutSection2 from './aboutSection2';
import AboutSection3 from './aboutSection3';
import AboutSection4 from './aboutSection4';

//import './about.css'

class AboutPage extends Component {
    render() {
    return (
        <>
        <AboutHeader />
        <AboutSection1 />
        <AboutSection2 />
        <AboutSection3 />
        <AboutSection4 />
      
      </>
    );
  }
}

export default AboutPage

