import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import { Section, sidebarPageContainer } from "../page.module.css"

import SideBar from "../sidebar"

import {
  Solar1,
  Solar2,
  Solar3,
  Solar4,
  Solar5,
  Solar6,
  Solar7,
  Solar8,
  Solar9,
  Solar10,
} from "../../../../images/index"

const Section1 = () => {
  const items = [
    {
      image: Solar2,
      imageAlt: "preparation for solar panels",
    },
    {
      image: Solar3,
      imageAlt: "preparation for solar panels",
    },
    {
      image: Solar4,
      imageAlt: "preparation for solar panels",
    },
    {
      image: Solar5,
      imageAlt: "preparation for solar panels",
    },
    {
      image: Solar6,
      imageAlt: "preparation for solar panels",
    },
    {
      image: Solar7,
      imageAlt: "preparation for solar panels",
    },
    {
      image: Solar8,
      imageAlt: "preparation for solar panels",
    },
    {
      image: Solar9,
      imageAlt: "preparation for solar panels",
    },
    {
      image: Solar10,
      imageAlt: "preparation for solar panels",
    },
  ]
  return (
    <>
      <section className={Section}>
        <div className={sidebarPageContainer}>
          <Container>
            <SideBar
              title="Solar Preparation"
              image={Solar1}
              body={
                <>
                  <p>
                    If you are thinking about installing solar on your roof, it
                    is best to schedule a roof inspection before you make a
                    decision to proceed with a solar contractor. PV Solar
                    Systems should last about 25 years, so you want to ensure
                    the roofing underneath the solar panels will last the same
                    amount of time.
                  </p>
                  <p>
                    Most solar companies are not willing to come out to the job
                    for two visits,
                    <strong>
                      <em> although it is the best option for the homeowner</em>
                    </strong>
                    . Solar companies’ main competitor is the company you pay
                    your electricity bill to, and their main goal is to beat the
                    electric companies prices. Two visits can increase their
                    cost so typically they would just like to do one visit. Two
                    visits is the best option for the homeowner because the
                    solar legs/mounts need to be installed on the rafters of the
                    home or property to be able to be supported properly.
                  </p>
                  <p>
                    Once the roof is torn off to the plywood it is easy to see
                    where the rafters are located. This two visit process is to
                    have the solar contractor come out to install the
                    legs/mounts when the roof is torn off. The roof will then be
                    installed by the roofing contractor with proper flashing
                    around the leg/mounts, 1 flashing per leg/mount for shingle
                    roofs or 2 flashings per leg/stanchion/mount for tile roofs.
                    Then the solar company comes back out to install the solar
                    panels.
                  </p>
                  <p>
                    Some solar contractors will install panels on a roof that
                    will only last 10 years, meaning you would have to remove
                    them to replace the roof, then have the panels reinstalled.
                    This can cost the homeowner or property owner thousands to
                    remove and reinstall the system. Solar companies will charge
                    the property owner to provide this service.
                  </p>
                  <p>
                    Additionally, you want to make sure the mounting/racking
                    system that is installed has flashings.A flashing, also
                    known as a roof jack, is a metal that prevents water
                    intrusions by directing water away from the penetration.
                    They are commonly manufactured with a collar to make a seam
                    higher than the roof level.
                  </p>
                  <p>
                    The primary reason you would need flashing on your roof is
                    because on pitched roofs of 4/12 or (18.43°, 33.33 %) and
                    above, roofs are built for water shedding products such as
                    shingles, slate, shake, or tiles. All of these systems are
                    manufactured to shed water. They are not waterproof
                    membranes as you would have on flat roofs. Water shedding
                    products rely on overlapping material to help shed water off
                    of the roof. Flashings are also needed around pipes and
                    penetrations to help shed water off of the roof.
                  </p>
                  <p>
                    Brackets are screwed into the roof shingle, tile, or slate
                    etc. and provide only sealant to fill the hole of the screw.
                    Sealant shrinks throughout weather exposure and eventually
                    becomes brittle. Since the penetration is actually on the
                    roof line water will find a path easily. A solar
                    leg/stanchion/mount brings the joint higher than the flow of
                    water. You still want to apply sealant to the joint however,
                    since the penetration is above the flow of water the chances
                    of water making its way into your home are less.
                  </p>
                  <p>
                    Some solar companies try to convince the homeowner to lean
                    towards bracket mounts or don’t even mention the racking
                    system at all. Bracket mounts require only 1 visit and that
                    is why they would prefer using bracket mounts. When we
                    receive a request to install the roof we let the homeowner
                    know that we require stanchions/legs on our roof. A common
                    response we receive when we work with solar companies is
                    that the bracket manufacturer they use has a 25 year
                    warranty, and that the brackets have a rubber gasket to
                    prevent water intrusions. However, as a roofing contractor
                    we have seen how long a rubber can hold against UV rays,
                    weather and heat.
                  </p>
                  {/*[Picture of the rubber flashing is in the nextcloud titled rubber flashing]. */}
                  <p>
                    Even if there is a rubber gasket at the bottom of the
                    bracket, the rubber will crack as seen above. Yes the
                    manufacturer may have a 25 year warranty, unfortunately the
                    most bracket manufacturers the only cover is their product
                    meaning the bracket itself. Not the labor. Your home will
                    still have a water leak and will still have to be fixed
                    which will cost extra money. Manufacturers do not cover
                    labor or damage.
                  </p>
                  <p>
                    Common practice here in San Diego or southern california is
                    solar companies are installing brackets as opposed to using
                    a solar stanchion with a flashing.
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
