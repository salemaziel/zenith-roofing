import React from "react"

import {
  Service14,
  Service15,
  Service16,
  Service17,
  Service18,
  Service19,
} from "../../../images/index"

import Grid from "./grid"

import sectionGridStyle from "./services.module.css"

const SectionGrid = (props) => {
  return( 
  <section className={sectionGridStyle.ServicesGrid}>
      <Grid
        items={[
            {
                title:"Built-Up Roofing",
                image:Service18,
                link:"/services/builtup-roofing",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"Ethylene Propylene Diene Monomer (EPDM)",
                image:Service15,
                link:"/services/ethylene-propylene-diene-monomer",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"Inspections",
                image:Service18,
                link:"/services/roof-inspections",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"Maintenance",
                image:Service15,
                link:"/services/roof-maintenance",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"Owens Corning",
                image:Service14,
                link:"/services/owens-corning",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"Polyvinyl Chloride (PVC)",
                image:Service14,
                link:"/services/polyvinyl-chloride",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"Roof Repair",
                image:Service14,
                link:"/services/roof-repairs",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"Roof Replacement",
                image:Service19,
                link:"/services/roof-replacements",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"Restorations",
                image:Service17,
                link:"/services/roof-restorations",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"Shingle",
                image:Service18,
                link:"/services/shingle",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"SkyLights",
                image:Service15,
                link:"/services/skylights",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"Solar",
                image:Service16,
                link:"/services/solar",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"Tile",
                image:Service16,
                link:"/services/tile",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"Thermoplastic Polyolefin (TPO)",
                image:Service16,
                link:"/services/thermoplastic-polyolefin",
                description:"",
                buttonText:"LEARN MORE",
            },

        ]} />
  </section>
  )
}

export default SectionGrid
