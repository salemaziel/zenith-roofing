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
              Title="Polyvinyl Chloride (PVC)"
              Description="Polyvinyl Chloride (PVC) is a single ply membrane that is typically used on low slopes roofs. Like TPO It is also an energy efficient membrane because of its ability to reflect (Ultra Violet) UV rays. It will help reduce energy cost and also complies with Title 24 requirements."
              Description2=""
              Description3=""
              Description4=""


              />
            </Container>
            {/*</div>*/}
          </div>
        </section>
      </>
    )

export default Section1
