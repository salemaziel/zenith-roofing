import React from "react"

import { Link } from "gatsby"
import Row from "react-bootstrap/Row"

import Col from "react-bootstrap/Col"
import { Climbing } from "../../../images/index"

import { AsideCategories, sidebarWidget, Categories, active, Title, Description } from "./sidebar.module.css"

const SideBar = (props) => {
  return (
    <>
      {/*<div className={sidebarPageContainer}>
        <div className={autoContainer}>*/}
      <Row>
        {/*Sidebar Side*/}
        <div className="sidebar-side col-lg-3 col-md-4 col-sm-12 col-xs-12">
          <aside className={AsideCategories}>
            {/*Blog Category Widget*/}
            <div className={sidebarWidget}>
              <ul className={Categories}>
                <li>
                  <Link
                    to="/services/builtup-roofing"
                    activeClassName={active}
                  >
                    Built-Up Roofing (BUR)
                  </Link>
                </li>
                <li>
                  <Link 
                  to="/services/ethylene-propylene-diene-monomer"
                  activeClassName={active}
                  >
                    Ethylene Propylene Diene Monomer (EPDM)
                  </Link>
                </li>
                <li>
                  <Link 
                  to="/services/roof-inspections"
                  activeClassName={active}
                  >Inspections</Link>
                </li>
                <li>
                  <Link 
                  to="/services/roof-maintenance"
                  activeClassName={active}
                  >Maintenance</Link>
                </li>
                <li>
                  <Link 
                  to="/services/owens-corning"
                  activeClassName={active}
                  >Owens-Corning</Link>
                </li>

                <li>
                  <Link 
                  to="/services/polyvinyl-chloride"
                  activeClassName={active}
                  >
                    Polyvinyl Chloride (PVC)
                  </Link>
                </li>

                <li>
                  <Link 
                  to="/services/roof-repairs"
                  activeClassName={active}
                  >Roof Repair</Link>
                </li>
                <li>
                  <Link 
                  to="/services/roof-replacements"
                  activeClassName={active}
                  >Roof Replacement</Link>
                </li>

                <li>
                  <Link 
                  to="/services/roof-restorations"
                  activeClassName={active}
                  >
                    Roof Restorations
                  </Link>
                </li>


                <li>
                  <Link 
                  to="/services/shingle"
                  activeClassName={active}
                  >Shingle</Link>
                </li>
                <li>
                  <Link 
                  to="/services/skylights"
                  activeClassName={active}
                  >Skylights</Link>
                </li>

                <li>
                  <Link 
                  to="/services/solar"
                  activeClassName={active}
                  >Solar</Link>
                </li>

                <li>
                  <Link 
                  to="/services/tile"
                  activeClassName={active}
                  >Tile</Link>
                </li>
                <li>
                  <Link 
                  to="/services/thermoplastic-polyolefin"
                  activeClassName={active}
                  >
                    Thermoplastic Polyolefin (TPO)
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <Col className="justify-content-center">
          <div
            style={{
              margin: "auto",
              padding: "0 2rem",
            }}
          >
            <h2 className={Title}>{props.Title}</h2>
            <img loading="lazy" src={Climbing} alt="Roof Repairs" className="img-fluid" />
          </div>
          <div className={Description}>
            <p>{props.Description}</p>
            <p>{props.Description2}</p>
            <p>{props.Description3}</p>

            <p>{props.Description4}</p>

            {/*<p>
                  2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

                <p>
                  3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                </p>*/}
          </div>
        </Col>
      </Row>
      {/*</div>
      </div>*/}
    </>
  )
}

export default SideBar
