import React from "react"
import Container from "react-bootstrap/Container"


import { Section, sidebarPageContainer } from "../page.module.css"


import SideBar from "../sidebar"

import {
  TPO1
} from '../../../../images/index'

const Section1 = () => {
/*  const items = [
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
  */
  return(
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
             /* gallery={
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
              }*/
              />
            </Container>
          </div>
        </section>
      </>
    )
            }

export default Section1
