import React from "react"
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'

import { Section, sidebarPageContainer } from "../page.module.css"

import SideBar from "../sidebar"

import { Skylight2, Skylight1, Skylight3, Skylight4, Skylight5, Skylight6, Skylight7 } from "../../../../images/index"

const Section1 = () => {
  const items = [
    {
      image: Skylight1,
      imageAlt: "Built Up roofing",
    },
    {
      image: Skylight3,
      imageAlt: "Built Up roofing",
    },
    {
      image: Skylight5,
      imageAlt: "Built Up roofing",
    },
    {
      image: Skylight6,
      imageAlt: "Built Up roofing",
    },
    {
      image: Skylight7,
      imageAlt: "Built Up roofing",
    },
    {
      image: Skylight2,
      imageAlt: "Built Up roofing",
    },
  ]
  return(
  <>
    <section className={Section}>
      <div className={sidebarPageContainer}>
        <Container>
          <SideBar
            title="Skylights"
            image={Skylight2}
            body={
              <>
                <p>
                  Skylights wear and have an estimated life expectancy of about
                  15 years depending on which kind of skylight you have
                  installed. There are different options of skylight whether it
                  is a custom size or traditional. They come in acrylic, glass,
                  and Low-E glass. Operable skylights are available upon
                  request. Schedule an inspection and see if your skylight is a
                  standard size.
                </p>
                <p>
                  Skylights are usually installed on a curb which can be made
                  out of 2 by 4 lumber or 2 by 6 lumber. Most are
                  interchangeable without even having to open up the roof.
                </p>
                <br />
                <h3>Acrylic Dome Skylights</h3>
                <p>
                  Acrylic dome skylights are the most common and an economical
                  choice. They come in white or bronze color. These Usually last
                  about 15 years when exposed to UV Rays.
                </p>
                <br />
                <h3>Low-E Glass</h3>
                <p>
                  Low-E glass typically lasts about 15 years as well. However
                  there are some benefits to getting a Low-E glass installed.
                  One reason is it has a flat profile as opposed to a curved
                  profile. Another reason is the Low-E technology. The low e
                  technology minimizes UV rays. This makes the area underneath
                  less hot. As some owners know, areas underneath the skylight
                  can create a greenhouse effect and make the room hot. The last
                  one is clarity. Although it does seem to have a slight green
                  tint for the most part it is clear and you can see the sky.
                </p>
                <p>
                  Schedule an inspection and see if your skylight is a standard
                  size. Or if you would like for us to give you a quote for a
                  custom size.
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
