import React from "react"
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container"

import { Section, sidebarPageContainer } from "../page.module.css"

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
  Climbing,
} from '../../../../images/index'

const Section1 = () => (
  <>
    <section className={Section}>
      <div className={sidebarPageContainer}>
        <Container>
          <SideBar
            title="Roof Replacements"
            image={Climbing}
            body={
              <>
                <p>
                  Zenith Roofing Services, INC replaces most roof systems for
                  Flat roofs, pitched roofs, and mansard roofs. These include
                  roof systems such as composition shingles, Concrete tile
                  roofs, clay tile roofs, two piece clay tile roofs, slate,
                  presidential shingles, TPO, PVC, Torch down Modified Bitumen,
                  Standing Seam Metal.
                </p>
                <h3>If my roof leaks, should I replace my roof? </h3>
                <p>
                  A good rule of thumb is if your roof is leaking at the ¾ of
                  the life expectancy mentioned above, we recommend replacing.
                  If it is below the ¾ life expectancy mark, then we recommend
                  repairing it, but to begin budgeting for a new roof.
                </p>
                <h3>When should I replace my roof?</h3>
                <p>
                  Roof life expectancy can vary widely depending on the region
                  you live in. In San Diego county and the greater Southern
                  California area, the average life expectancy for a new roof is
                  approximately 30 years.
                </p>

                <h3>
                  What is a roof's life expentancy in Southern California?
                </h3>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Roof Type</th>
                      <th>New Roof</th>
                      <th>Over Existing Roof</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Architectural Shingle Roof</td>
                      <td>30 years</td>
                      <td>15 years</td>
                    </tr>
                    <tr>
                      <td>3 Tab Shingle Roof</td>
                      <td>20 years</td>
                      <td>10 years</td>
                    </tr>
                    <tr>
                      <td>Concrete Tile Roof</td>
                      {/*<td colSpan="2">Larry the Bird</td>*/}
                      <td colSpan="2">30 years</td>
                    </tr>
                    <tr>
                      <td>TPO Roof</td>
                      <td colSpan="2">30 years</td>
                    </tr>
                    <tr>
                      <td>PVC Roof</td>
                      <td colSpan="2">20 years</td>
                    </tr>
                    <tr>
                      <td>Built-Up Roof</td>
                      {/*<td colSpan="2">Larry the Bird</td>*/}
                      <td colSpan="2">
                        20-30 years, until you have to restore your roof with
                        coatings or maintenance around penetrations. With proper
                        maintenance and restoration Built up roofs can last up
                        to 50 years
                      </td>
                    </tr>
                    <tr>
                      <td>Modified Bitumen Torch Down Roof Single Layer</td>
                      <td colSpan="2">10-15 years</td>
                    </tr>
                    <tr>
                      <td>
                        Modified Bitumen Torch down Roofs Double Layer or
                        Two-Ply
                      </td>
                      <td colSpan="2">
                        20-40 years until you have to restore your roof with
                        coatings or maintenance around penetrations. With proper
                        maintenance and restoration 2 layer torch down roofs can
                        last up to 40 years until replacement.
                      </td>
                    </tr>
                    <tr>
                      <td>Metal</td>
                      <td colSpan="2">50 years</td>
                    </tr>
                  </tbody>
                </Table>
              </>
            }
          />
        </Container>
      </div>
    </section>
  </>
)

export default Section1
