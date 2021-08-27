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
              Title="Solar"
              Description=""
              />
            </Container>
            {/*</div>*/}
          </div>
        </section>
      </>
    )

export default Section1
