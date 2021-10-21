import React from "react"
import Container from "react-bootstrap/Container"

import { Section, sidebarPageContainer } from "../page.module.css"

import SideBar from "../sidebar"
import { OwensCorning1 } from "../../../../images/index"
import { Link } from "gatsby"

const Section1 = () => (
  <>
    <section className={Section}>
      <div className={sidebarPageContainer}>
        <Container>
          <SideBar
            title="Owens-Corning Systems"
            image={OwensCorning1}
            body={
              <>
                <p>
                  Owens-Corning is a roofing shingle manufacturing company based
                  in the USA and is our preferred choice of manufacturer. We love
                  their surenail technology, the training and support they
                  provide for contractors, and their business philosophy that
                  manufacturers and contractors should work together as a team.
                </p>

                <p>
                  The Owens-Corning company first began reinforcing their
                  shingles with fiberglass in 1977. Each year they inspect one
                  of our warranty inputs and see if we need correction. Although we install other roofing
                  shingle manufacturers, the shingle we suggest is Owens
                  Corning.
                </p>
                <p>
                  Not only for shingles, but for underlayments too. The Owens-Corning manufactured Titanium
                  UDL underlayments are the majority of underlayments we
                  install, from Titanium 30 UDL for shingle roofs, to Titanium 50UDL
                  for tile roofs. We trust this product and has saved us from flash
                  flood rains. {/*Recently in 2021 San Diego had thunderstorms that
                  appeared without warning and with Titanium UDL underlayment
                  installed on a pitched roof 4/12 or greater your roof will not
                  have water intrusions.*/}
                </p>
                <p>
                  An Owens-Corning system will warranty your roof for a
                  lifetime, with shingles that can withstand high winds and
                  heavy rains, this will be a system worth installing. 
                </p>
                <p>
                  As an{" "}
                  <a
                    href="https://www.owenscorning.com/en-us/roofing/contractors/contractor-profile/230828"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Owens-Corning certified Preferred Contractor
                  </a>{" "}
                  Zenith Roofing Services is able to provide You with the
                  Owens-Corning Preferred Warranty.
                </p>
                <p>
                <Link to="/contact">Contact us </Link> for more info on this premium warranty!
                </p>
                <div
                  className="oc_shingle_view"
                  data-shingle="trudefinition-duration"
                  data-view="shingle"
                  data-layout="stacked"
                  data-style="default"
                ></div>
              </>
            }
          />
        </Container>
      </div>
    </section>
  </>
)

export default Section1
