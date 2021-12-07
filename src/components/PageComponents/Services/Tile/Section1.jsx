import React from "react"
import Container from "react-bootstrap/Container"

import { Section, sidebarPageContainer } from "../page.module.css"

import SideBar from "../sidebar"

import { Tile1 } from "../../../../images/index"

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
            title="Tile"
            image={Tile1}
            body={
              <>
                <p>
                  Tile roofs come in a variety of shapes, styles and colors,
                  from concrete to clay. Whether you would like to reuse your
                  tiles or replace them with new ones, this type of roofing system has the
                  capacity to last about 30 years, after which you'll want to install
                  new underlayment (Felt paper). The exception is if your home was built in a
                  track home setting.
                </p>
                <p>
                  A track home setting is a neighborhood that was built by one
                  contractor. If your home was installed in a track home setting
                  we have seen the roof start to fail as early as 20 years. The
                  reason being is that during construction tiles need to be
                  loaded for the structure to settle with the roof weight. Once
                  loaded the rafters will settle with the weight of the tiles.
                  This is very important for General Builders because sticco or
                  windows will crack if tiles are loaded after. While stucco
                  windows and paint are being performed the roof is on standby
                  until every trade is done. The underlayment is not switched
                  out and has already had foot traffic stucco spills and UV
                  exposure. Roofing underlayment can only be exposed for weather
                  for 6 months before it starts to lose its life expectancy.
                </p>
                <p>
                  A tile roof system is built with metal flashing, underlayment,
                  and tiles. Each component is important to the system and
                  cannot be missing one of the three.
                </p>
                <p>
                  The purpose for roof flashing/metal is to divert water away
                  from a penetration, prevent water from entering behind a
                  chimney or keeping water within a metal channel.
                </p>
                The underlayment protects the home from water intrusions in case
                of a broken tile water overload, or faulty flashing.
                <p>
                  Tiles are meant to protect the underlayment from UV rays and
                  limit the amount of water from getting onto the underlayment.
                </p>
                <p>
                  One of the common reasons for roof leaks is because there are
                  broken tiles on the roof or tiles that were glued together
                  have slid down from the sealant shrinking. It is very
                  important that you check your roof if you are not the original
                  owner. This can prevent costly roof leaks that can damage the
                  interior This inspection can be done by us.
                </p>
              </>
            }
            /*gallery={
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
