import React from "react"
import Container from 'react-bootstrap/Container'


import { Section, sidebarPageContainer } from '../page.module.css'

import SideBar from "../sidebar"


const Section1 = () => (
      <>

        <section className={Section}>
          <div className={sidebarPageContainer}>
            <Container>
              <SideBar
              title="Owens-Corning Systems"
              body={
                <>
                <p>
                An Owens-Corning system will warranty your roof for a lifetime, with shingles that can withstand high winds and heavy rains, this will be a system worth installing. Call for more info on this premium warranty! 
                </p>
                <div
 className="oc_shingle_view"
 data-shingle="trudefinition-duration"
 data-view="shingle"
 data-layout="stacked" 
 data-style="default"
>
</div>
                </>
                
              }


              />
            </Container>
          </div>
        </section>
      </>
    )


export default Section1
