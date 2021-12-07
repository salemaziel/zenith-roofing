import React from "react"
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'

import { Section, sidebarPageContainer } from "../page.module.css"

import SideBar from "../sidebar"
import { Shingle1, Shingle2, Shingle3, Shingle4, Shingle5, Shingle6, Shingle7, Shingle8, Shingle9, Shingle10 } from "../../../../images/index"

const Section1 = () => {
  const items = [
    {
      image: Shingle1,
      imageAlt: "Shingle roofs",
    },
    {
      image: Shingle3,
      imageAlt: "Shingle roofs",
    },
    {
      image: Shingle4,
      imageAlt: "Shingle roofs",
    },
    {
      image: Shingle6,
      imageAlt: "Shingle roofs",
    },
    {
      image: Shingle7,
      imageAlt: "Shingle roofs",
    },
    {
      image: Shingle10,
      imageAlt: "Shingle roofs",
    },
  ]
  return(
  <>
    <section className={Section}>
      <div className={sidebarPageContainer}>
        <Container>
          <SideBar
            title="Shingles"
            image={Shingle1}
            body={
              <>
                <p>
                  Shingles are the most economical choice and come in a variety
                  of colors. Usually last 30-50 years depending on which system
                  you would like to have installed on your roof. It is resistant
                  from high winds and has a nice clean look. The Owens Corning
                  System warranty is by far our best warranty for this system.
                </p>
                <p>
                  Out of multiple manufacturers that want us to install their
                  products, we chose Owens Corning began reinforcing their
                  shingles with fiberglass since 1977. They are also made in the
                  USA. We love their surenail technology and training they
                  provide for us. Each year they inspect one of our warranty
                  inputs and see if we need correction. They truly care because
                  they know contractors and manufacturers are supposed to work
                  as a team. Although we install other roofing shingle
                  manufacturers, the shingle we suggest is Owens Corning.
                </p>
                <p>
                  Not only for shingles but for underlayments too. The Titanium
                  UDL underlayments are the majority of underlayments we
                  install. From Titanium 30 UDL for shingles to Titanium 50UDL
                  for tiles. We trust this product and has saved us from flash
                  flood rains. Recently in 2021 San Diego had thunderstorms that
                  appeared without warning and with Titanium UDL underlayment
                  installed on a pitched roof 4/12 or greater your roof will not
                  have water intrusions.
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
