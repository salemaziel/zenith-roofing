import React from 'react';



import Header from '../Header'
import RRSection1 from './repairSection1';

import ActionBanner from '../../../actionBanner'

import { AboutBody } from './rr.module.css'

const RRPage = () => (
        <>
        <Header 
        Service="Roof Repair"
        />
        <div className={AboutBody} >
        <RRSection1 />
        </div>
        <ActionBanner />
        
      
      </>
    );

export default RRPage

