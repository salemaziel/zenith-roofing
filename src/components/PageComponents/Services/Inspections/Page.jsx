import React, { Component } from 'react';



import Header from '../Header'
import Section1 from './Section1';

import ActionBanner from '../../../actionBanner'

import pageStyle from '../page.module.css'

class Page extends Component {
    render() {
    return (
        <>
        <Header
        Service="Inspections"
        />
        <div className={pageStyle.AboutBody} >
        <Section1 />
        
        </div>
        <ActionBanner />
        
      
      </>
    );
  }
}

export default Page

