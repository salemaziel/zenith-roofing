import React, { Component } from 'react';



import Header from '../Header'
import Section1 from './Section1';

import ActionBanner from '../../../actionBanner'

import pageStyle from '../page.module.css'

const OwensCorningPage = () => (
        <>
        <Header
        Service="Thermoplastic Polyolefin (TPO)"
        />
        <div className={pageStyle.AboutBody} >
        <Section1 />
        </div>
        <ActionBanner />
      </>
    );


export default OwensCorningPage

