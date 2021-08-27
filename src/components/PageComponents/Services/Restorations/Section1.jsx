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
              Title="Roof Restorations"
              Description="There are several causes for a roof leak from improper flashing install, broken tiles, Storm damage, wind damage, or roof is passed its life expectancy. It is important to have your roof look at by a specialized professional. Here are the necessary steps to approach your leaky roof."
              Description2="Step One: Fill out the the contact info on the phone screen or give us a call to schedule a free estimate for owners."
              Description3="Step Two: Sourcing the leak from the inside to pin point water intrusion."
              Description4="Step three: Receive a proposal, sign up and we will take care of the rest, with warranty options."


              />
            </Container>
            {/*</div>*/}
          </div>
        </section>
      </>
    )

export default Section1
