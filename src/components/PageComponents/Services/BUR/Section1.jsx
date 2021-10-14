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
            title="Built Up Roofing"
            body={
              <p>
                Built Up-Roofing (BUR) commonly used on low sloped roofs. There
                are different types of BUR such as hot or cold process. It
                consist of plies of felts that are layered using asphalt, coal
                tar pitch, or cold applied adhesive. Rolled cap sheet or
                aggregates are common to layer over to protect the plies from
                the UV ray and creates a finished membrane.
              </p>
            }
          />
        </Container>
        {/*</div>*/}
      </div>
    </section>
  </>
)

export default Section1
