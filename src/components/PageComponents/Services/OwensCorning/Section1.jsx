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
              Title="Owens-Corning"
              Description="An Owens-Corning system will warranty your roof for a lifetime, with shingles that can withstand high winds and heavy rains, this will be a system worth installing. Call for more info on this premium warranty! "
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
