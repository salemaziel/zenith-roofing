import React, { Component } from 'react';



import Header from './Header'
import Section1 from './Section1';
import Section2 from './Section2';

import ActionBanner2 from '../About/actionBanner2'

import pageStyle from './page.module.css'

const TPOPage = () => (
        <>
        <Header />
        <div className={pageStyle.AboutBody} >
        <Section1 />
        {/*<Section2 />*/}
        </div>
        <ActionBanner2 />
      </>
    );


export default TPOPage

