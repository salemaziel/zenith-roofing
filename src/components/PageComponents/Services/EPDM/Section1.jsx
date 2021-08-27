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
              Title="Ethylene Propylene Diene Monomer (EPDM)"
              Description="Ethylene Propylene Diene Monomer (EPDM) s a rubber roof that is usually install on smaller low slope areas. It is usually available in black it is long lasting and lightweight. It is able to withstand hail, high winds and fire resistant."
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
