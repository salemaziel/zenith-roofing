import React from "react"
import Container from 'react-bootstrap/Container'


import { Section, sidebarPageContainer } from '../page.module.css'

import SideBar from "../sidebar"
import {
  Shingle1
} from '../../../../images/index'

const Section1 = () => (
      <>


        <section className={Section}>
          <div className={sidebarPageContainer}>
            <Container>
              <SideBar
              title="Shingles"
              image={Shingle1}
              body={
                <p>
Shingles are the most economical choice and come in a variety of colors. Usually last 30-50 years depending on which system you would like to have installed on your roof. It is resistant from high winds and has a nice clean look. The Owens Corning System warranty is by far our best warranty for this system.
                  </p>
              }
              />
            </Container>
          </div>
        </section>
      </>
    )


export default Section1
