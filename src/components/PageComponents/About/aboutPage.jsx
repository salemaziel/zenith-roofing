import React, { Component } from 'react';



import AboutHeader from './aboutheader'
import AboutSectionHistory from './aboutSection1History';
import AboutSectionPromise from './aboutSection2Promise';

import ActionBanner from '../../actionBanner'
import aboutStyle from './about.module.css'


      const AboutPage = () => (
        <>
        <AboutHeader />
        <div className={aboutStyle.AboutBody} >
        <AboutSectionHistory />
        <AboutSectionPromise />
        </div>
        <ActionBanner />
        
      
      </>
    );


export default AboutPage

