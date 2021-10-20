import React from "react"
import Container from "react-bootstrap/Container"


import { Section, sidebarPageContainer } from "../page.module.css"


import SideBar from "../sidebar"

import {
  TPO1
} from '../../../../images/index'

const Section1 = () => (
      <>
        <section className={Section}>
          <div className={sidebarPageContainer}>
            <Container>
              <SideBar
              title="Thermoplastic Polyolefin (TPO) Roofs"
              image={TPO1}
              body={
                <p>
Thermoplastic polyolefin (TPO) is single ply membrane that is typically used on low slopes roofs. It is a nice clean look and usually comes in white or tan colors. It is an energy efficient membrane because of its ability to reflect (Ultra Violet) UV rays. It will help reduce energy cost and also complies with Title 24 requirements.
                  </p>
              }
              />
            </Container>
          </div>
        </section>
      </>
    )


export default Section1
