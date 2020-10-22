import React from "react"

import { Link } from "gatsby"
import Row from "react-bootstrap/Row"

import Col from "react-bootstrap/Col"
import { Climbing } from "../../../images/index"

import sidebarStyles from "./sidebar.module.css"
import { Nav, NavLink } from "react-bootstrap"

const SideBar = (props) => {
  return (
    <>
      {/*<div className={sidebarStyles.sidebarPageContainer}>
        <div className={sidebarStyles.autoContainer}>*/}
      <Row>
        {/*Sidebar Side*/}
        <div className="sidebar-side col-lg-3 col-md-4 col-sm-12 col-xs-12">
          <aside className={sidebarStyles.AsideCategories}>
            {/*Blog Category Widget*/}
            <div className={sidebarStyles.sidebarWidget}>
              <ul className={sidebarStyles.Categories}>
                <li>
                  <Link
                    to="/services/builtup-roofing"
                    activeClassName={sidebarStyles.active}
                  >
                    Built-Up Roofing (BUR)
                  </Link>
                </li>
                <li>
                  <Link 
                  to="/services/ethylene-propylene-diene-monomer"
                  activeClassName={sidebarStyles.active}
                  >
                    Ethylene Propylene Diene Monomer (EPDM)
                  </Link>
                </li>
                <li>
                  <Link 
                  to="/services/roof-inspections"
                  activeClassName={sidebarStyles.active}
                  >Inspections</Link>
                </li>
                <li>
                  <Link 
                  to="/services/roof-maintenance"
                  activeClassName={sidebarStyles.active}
                  >Maintenance</Link>
                </li>
                <li>
                  <Link 
                  to="/services/owens-corning"
                  activeClassName={sidebarStyles.active}
                  >Owens-Corning</Link>
                </li>

                <li>
                  <Link 
                  to="/services/polyvinyl-chloride"
                  activeClassName={sidebarStyles.active}
                  >
                    Polyvinyl Chloride (PVC)
                  </Link>
                </li>

                <li>
                  <Link 
                  to="/services/roof-repairs"
                  activeClassName={sidebarStyles.active}
                  >Roof Repair</Link>
                </li>
                <li>
                  <Link 
                  to="/services/roof-replacements"
                  activeClassName={sidebarStyles.active}
                  >Roof Replacement</Link>
                </li>

                <li>
                  <Link 
                  to="/services/roof-restorations"
                  activeClassName={sidebarStyles.active}
                  >
                    Roof Restorations
                  </Link>
                </li>


                <li>
                  <Link 
                  to="/services/shingle"
                  activeClassName={sidebarStyles.active}
                  >Shingle</Link>
                </li>
                <li>
                  <Link 
                  to="/services/skylights"
                  activeClassName={sidebarStyles.active}
                  >Skylights</Link>
                </li>

                <li>
                  <Link 
                  to="/services/solar"
                  activeClassName={sidebarStyles.active}
                  >Solar</Link>
                </li>

                <li>
                  <Link 
                  to="/services/tile"
                  activeClassName={sidebarStyles.active}
                  >Tile</Link>
                </li>
                <li>
                  <Link 
                  to="/services/thermoplastic-polyolefin"
                  activeClassName={sidebarStyles.active}
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
            <h2 className={sidebarStyles.Title}>{props.Title}</h2>
            <img src={Climbing} alt="Roof Repairs" className="img-fluid" />
          </div>
          <div className={sidebarStyles.Description}>
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
