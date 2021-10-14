import React from "react"
import Container from 'react-bootstrap/Container'


import { Section, sidebarPageContainer } from '../page.module.css'

import SideBar from "../sidebar"


const Section1 = () => (
      <>


        <section className={Section}>
          <div className={sidebarPageContainer}>
            <Container>
              <SideBar
              title="Solar Preparation"
              body={
                <>
                <p>
                If you are thinking about installing solar on your roof, it is best to schedule a roof inspection before you make a decision to proceed with a solar contractor. PV Solar Systems should last about 25 years, so you want to ensure the roofing underneath the solar panels will last the same amount of time. 
                  </p>
                  <p>
                  Some solar contractors will install panels on a roof that will only last 10 years, meaning you would have to remove them to replace the roof, then have the panels reinstalled. This can cost the homeowner or property owner thousands to remove and reinstall the system. Solar companies will charge the property owner to provide this service. 
</p>
<p>
Additionally, you want to make sure the mounting/racking system that is installed has flashings.
</p>
<p>

</p>
<p>

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
