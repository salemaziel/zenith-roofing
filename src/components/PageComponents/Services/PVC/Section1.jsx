import React from "react"
import Container from "react-bootstrap/Container"

import { Section, sidebarPageContainer } from "../page.module.css"

import SideBar from "../sidebar"

import {

  PVC1,
} from "../../../../images/index"

import { Link } from "gatsby"

const Section1 = () => (
  <>
    <section className={Section}>
      <div className={sidebarPageContainer}>
        <Container>
          <SideBar
            title="Polyvinyl Chloride (PVC) Roofs"
            image={PVC1}
            body={
              <>
                <p>
                  Polyvinyl Chloride (PVC) is a single ply membrane that is
                  typically used on low slopes roofs. It is a nice clean look
                  and usually comes in white or tan colors. Like{" "}
                  <Link to="/services/thermoplastic-polyolefin">TPO</Link> it is
                  an energy efficient membrane because of its ability to reflect
                  (Ultra Violet) UV rays. It will help reduce energy cost and
                  also complies with Title 24 requirements. Like TPO It is also
                  an energy efficient membrane because of its ability to reflect
                  (Ultra Violet) UV rays. It will help reduce energy cost and
                  also complies with Title 24 requirements.
                </p>
                <p>
                  Most commercial property owners and roofing companies are
                  transitioning to this type of waterproofing membrane as
                  opposed to Built up Roofing systems.
                </p>
                <br />
                <h3>How To Install PVC:</h3>

                <p>
                  PVC can be installed using Magnets, Plates, or adhering. To
                  install PVC, you need to have a Class A fire rating membrane
                  or material on the plywood. This can simply be the existing
                  built up roof which you can go over, or a roof insulation you
                  can install onto the deck if you are tearing off the old roof.
                  The insulation can be installed using Magnets, Plates, or
                  Adhesive.
                </p>
                <p>
                  If you are going over an existing roof you want to make sure
                  you still separate the membrane from the old roof using
                  fanfold insulation or ISO insulation.
                </p>
                <p>
                  After the insulation has been installed you can now install
                  the Single Ply PVC membrane. SIngle ply means 1 layer. Yes,
                  this means the layer you see is the actual waterproof
                  membrane. Not like a built up roof that consists of 3
                  waterproofing layers and one nail down layer. The PVC has to
                  be attached with either Magnets, Plates, or Adhesive.
                </p>
                <p>
                  To attach the membrane, follow instructions for the
                  manufacturer specifications as they will vary depending on the
                  system you use.
                </p>
                <p>
                  Finally, all seams of the PVC roof will be heat welded using a
                  hot air gun or automatic welding machine. After applying heat
                  and pressure the PVC system is welded together, providing a
                  waterproof system.
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
