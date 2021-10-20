import React from "react"
import Container from 'react-bootstrap/Container'


import { Section, sidebarPageContainer } from '../page.module.css'

import SideBar from "../sidebar"

import {
  Service14,
  Service15,
  Service18,
  Service19,
  BUR1,
  EPDM1,
  Restorations1,
  Solar1,
  Skylight2,
  Shingle1,
  OwensCorning1,
  Tile1,
  TPO1,
} from '../../../../images/index'

const Section1 = () => (
      <>



        <section className={Section}>
          <div className={sidebarPageContainer}>
            <Container>
              <SideBar
              title="Roof Restorations"
              image={Restorations1}
              body={
                <>
                <p>
                Roof restorations are a great option if you do not want to tear off your roof, have a lot of AC units, pipes or penetrations. It provides a water seamless waterproof system. The only downside of restoring your roof is you are not able to see if there is wood damage below. You can still repair wood in the areas where the roof is leaking however sometimes there is trapped moisture in between the roof and deck  that hasn't shown through. Other than that, restoring your roof can help prevent leaks for 10 years which provides peace of mind. Best restoration coating is silicone. Tropical Roofing Products #924 along side with its seam sealer #9400 is the silicone we recommend to do any roof restoration. 
                </p>  
                <p>
                The reason we like to use silicone as opposed to its competitor Elastomeric is elastomeric peels. We have inspected roofs with elastomeric roof coating and they usually peel in the low spots. Most elastomeric products are water based that is why they are way less than silicone. When elastomeric expands and contracts the sealant tears and allows mixture to get underneath the coating. Moisture build up eventually causes blistering or bubbling on your elastomeric coating surface. 
                </p> 
                <p>
                Another downside about elastomeric coatings is that they need to be applied on a hot day for 48 hours to cure. That being said, any condensation at night will ruin your coating roof restoration. This is often missed by the installer. As opposed to silicone which will be dry to touch within 2-8 hours. 
                </p> 
                </>
              }


              />
            </Container>
          </div>
        </section>
      </>
    )

export default Section1
