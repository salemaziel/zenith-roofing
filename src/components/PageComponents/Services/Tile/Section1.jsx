import React from "react"
import Container from "react-bootstrap/Container"

import { Section, sidebarPageContainer } from "../page.module.css"

import SideBar from "../sidebar"

import {
  Tile1,
} from '../../../../images/index'

const Section1 = () => (
  <>
    <section className={Section}>
      <div className={sidebarPageContainer}>
        <Container>
          <SideBar
            title="Tile"
            image={Tile1}
            body={
              <p>
                Tile roofs come in a variety of shapes styles and colors, from
                concrete to clay. Whether you would like to reuse your tiles or
                replace them with new ones this roof system has the capacity to
                last about 30 years until you will have to install new
                underlayment (Felt paper).
              </p>
            }
          />
        </Container>
      </div>
    </section>
  </>
)

export default Section1
