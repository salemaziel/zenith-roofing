import React, { Component } from 'react';



import RepairHeader from './repairHeader'
import RRSection1 from './repairSection1';
import RRSection2 from './repairSection2';

import ActionBanner2 from '../About/actionBanner2'

import roofrepairStyle from './rr.module.css'

class RRPage extends Component {
    render() {
    return (
        <>
        <RepairHeader />
        <div className={roofrepairStyle.AboutBody} >
        <RRSection1 />
        {/*<RRSection2 />*/}
        </div>
        <ActionBanner2 />
        
      
      </>
    );
  }
}

export default RRPage

