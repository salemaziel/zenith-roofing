import React, { Component } from 'react';



import Header from './Header'
import Section1 from './Section1';
import Section2 from './Section2';

import ActionBanner from '../../../actionBanner'
import pageStyle from './page.module.css'

class Page extends Component {
    render() {
    return (
        <>
        <Header />
        <div className={pageStyle.AboutBody} >
        <Section1 />
        {/*<Section2 />*/}
        </div>
        <ActionBanner />
        
      
      </>
    );
  }
}

export default Page

