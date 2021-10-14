import React from "react"
import Container from 'react-bootstrap/Container'


import { Section, sidebarPageContainer } from '../page.module.css'

import SideBar from "../sidebar"


const Section1 = () => (
      <>

        <section className={Section}>
          <div className={sidebarPageContainer}>
            {/*<div className={pageStyle.autoContainer}>*/}
            <Container>
              <SideBar
              title="Roof Maintenance"
              body={
                <>
                <p>
                It is recommended to perform preventative maintenance on your roof at least every 10 years depending on your roofing system.
                </p>
                <p>
                It is also recommended to schedule before the rainy seasons. Cracked sealant, broken tiles, slipped tiles, flashing, or debris can cause premature wear to your roof and can cause for water intrusions in your home. This can lead to extensive damage in your home, business or building. Schedule an appointment to insure you are ahead of the curve and maintain your roof today.
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
