import React from "react"
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'

import { Section, sidebarPageContainer } from "../page.module.css"

import SideBar from "../sidebar"

import {
  BUR1,
  BUR2,
  BUR3,
  BUR4,
  BUR5,
  BUR6,
  BUR7,
  BUR8,
  BUR9,
  BUR10,
  BUR11,
  BUR12,
  BUR13,
} from '../../../../images/index'


const Section1 = () => {
    const items = [
      {
        image: BUR5,
        imageAlt: "Built Up roofing",
      },
      {
        image: BUR6,
        imageAlt: "Built Up roofing",
      },
      {
        image: BUR7,
        imageAlt: "Built Up roofing",
      },
      {
        image: BUR8,
        imageAlt: "Built Up roofing",
      },
      {
        image: BUR9,
        imageAlt: "Built Up roofing",
      },
      {
        image: BUR10,
        imageAlt: "Built Up roofing",
      },
      {
        image: BUR11,
        imageAlt: "Built Up roofing",
      },
      {
        image: BUR12,
        imageAlt: "Built Up roofing",
      },
      {
        image: BUR13,
        imageAlt: "Built Up roofing",
      },
    ]
    return(
  <>
    <section className={Section}>
      <div className={sidebarPageContainer}>
        {/*<div className={pageStyle.autoContainer}>*/}
        <Container>
          <SideBar
            title="Built Up Roofing"
            image={BUR1}
            body={
              <>
                <p>
                  Built Up-Roofing (BUR) is commonly used on low sloped roofs. It consists of plies of felts that are layered using asphalt,
                  coal tar pitch, or cold applied adhesive. Rolled cap sheet or
                  aggregates are common to layer over to protect the plies from
                  the UV ray and creates a finished membrane.                  
                </p>
                <p>
                  {" "}
                  There are different types of BUR, such as hot process and cold process.
                  We specialize in installing cold process systems. We do like to install these
                  types of roofs in the summer for the cold process adhesive has
                  to cure in order to be waterproof. Each layer of felt needs to be open
                  and allowed to cure for 48 hours.
                  </p>
                  <p> A cold process system
                  consists of 4 layers. The first layer is a nail down base
                  sheet. Unlike the other layers, nail down base sheets do not have to cure for 48 hours, as this is simply
                   a base sheet to start your water proofing plies. The mext two
                  layers will be base sheets rolled over cold process lap cement
                  and will need 48 hours to cure. Finally, the 4th layer is a cap
                  sheet also rolled over lap cement, and similarly will also need 48
                  hours to cure in order to be fully waterproof and allow your roof to be ready for the rain.
                </p>
                <p>
                  There are other options we provide for a waterproofing
                  membrane that dont need a 48 hour cure time. TPO or modified
                  bitumen can be installed and not need time to cure because
                  these membranes are heat welded.
                </p>
              </>
            }
            gallery={
              <Container className="text-center">
                <Row>
                {items.map((item, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <img
                    className="img-fluid rounded"
                    src={item.image}
                    alt={item.imageAlt}
                  />
                </div>
              ))}
              </Row>
                </Container>
            }
          />

        </Container>
      </div>
    </section>
  </>
)
}

export default Section1
