import React from 'react';



import Header from '../Header'
import Section1 from './Section1';

import ActionBanner from '../../../actionBanner'

import { AboutBody } from '../page.module.css'

const TPOPage = () => (
        <>
        <Header
        Service="Thermoplastic Polyolefin (TPO)"
        />
        <div className={AboutBody} >
        <Section1 />
        </div>
        <ActionBanner />
      </>
    );


export default TPOPage

