import React from "react"
import Container from 'react-bootstrap/Container'
import {Link} from 'gatsby'

import { Section, sidebarPageContainer } from '../page.module.css'

import SideBar from "../sidebar"
import {
  Service14,
  Service15,
  Service18,
  Service19,
  BUR1,
  EPDM1,
  Restorations1,
  Solar1,
  Skylight2,
  Shingle1,
  OwensCorning1,
  Tile1,
  TPO1,

} from '../../../../images/index'

const Section1 = () => (
      <>

        <section className={Section}>
          <div className={sidebarPageContainer}>
            {/*<div className={pageStyle.autoContainer}>*/}
            <Container>
              <SideBar
              title="Ethylene Propylene Diene Monomer (EPDM)"
              image={EPDM1}
              body={
                <>
                  <p>
                  Ethylene Propylene Diene Monomer (EPDM) is a rubber roof that is usually installed on smaller low slope areas. It is usually available in black it is long lasting and lightweight. It is able to withstand hail, high winds and is fire resistant. Typically we only install this product for spec jobs, as this material is not available in the San Diego County region unless special ordered. 
                  </p>
                  <p>
                  However, we do offer other waterproofing membranes such as <Link to="/services/builtup-roofing">Cold Process Built Up Roofs</Link>, <Link to="/services/thermoplastic-polyolefin"> Thermoplastic Polyolefin (TPO)</Link>, and Modified BItumen Torch down. 

                  </p>
                  </>
              }


              />
            </Container>
            {/*</div>*/}
          </div>
        </section>
      </>
    )


export default Section1
