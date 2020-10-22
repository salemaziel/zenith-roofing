import React, { Component } from 'react';



import Header from '../Header'
import RRSection1 from './repairSection1';

import ActionBanner from '../../../actionBanner'

import roofrepairStyle from './rr.module.css'

class RRPage extends Component {
    render() {
    return (
        <>
        <Header 
        Service="Roof Repair"
        />
        <div className={roofrepairStyle.AboutBody} >
        <RRSection1 />
        </div>
        <ActionBanner />
        
      
      </>
    );
  }
}

export default RRPage

