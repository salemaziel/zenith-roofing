import React from 'react';



import AboutHeader from './aboutheader'
import AboutSectionHistory from './aboutSection1History';
import AboutSectionPromise from './aboutSection2Promise';

import ActionBanner from '../../actionBanner'
import { AboutBody } from './about.module.css'


      const AboutPage = () => (
        <>
        <AboutHeader />
        <div className={AboutBody} >
        <AboutSectionHistory />
        <AboutSectionPromise />
        </div>
        <ActionBanner />
        
      
      </>
    );


export default AboutPage

