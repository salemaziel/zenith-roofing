import React from "react"
import Container from "react-bootstrap/Container"


import { Section, sidebarPageContainer } from "../page.module.css"


import SideBar from "../sidebar"

const Section1 = () => (
      <>
        <section className={Section}>
          <div className={sidebarPageContainer}>
            {/*<div className={pageStyle.autoContainer}>*/}
            <Container>
              <SideBar
              Title="Thermoplastic Polyolefin (TPO)"
              Description="Thermoplastic polyolefin (TPO) is single ply membrane that is typically used on low slopes roofs. It is a nice clean look and usually comes in white or tan colors. It is an energy efficient membrane because of its ability to reflect (Ultra Violet) UV rays. It will help reduce energy cost and also complies with Title 24 requirements."
              />
            </Container>
            {/*</div>*/}
          </div>
        </section>
      </>
    )


export default Section1
