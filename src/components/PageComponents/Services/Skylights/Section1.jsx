import React from "react"
import Container from 'react-bootstrap/Container'


import { Section, sidebarPageContainer } from '../page.module.css'

import SideBar from "../sidebar"

import {
  Skylight2
} from '../../../../images/index'


const Section1 = () => (
      <>


        <section className={Section}>
          <div className={sidebarPageContainer}>
            <Container>
              <SideBar
              title="Skylights"
              image={Skylight2}
              body={
                <p>
Skylights wear and have an estimated life expectancy of about 15 years depending on which kind of skylight you have installed. There are different options of skylight whether it is a custom size or traditional. They come in acrylic, glass, and even Low-E glass. Operable skylights are available upon request. Schedule an inspection and see if your skylight is a standard size
                  </p>
              }
              />
            </Container>
          </div>
        </section>
      </>
    )


export default Section1
