import React from "react"

import { Link } from "gatsby"
import Row from "react-bootstrap/Row"

import Col from "react-bootstrap/Col"
import { Climbing } from "../../../images/index"

import { AsideCategories, sidebarWidget, Categories, active, Title, Description } from "./sidebar.module.css"

const SideBar = (props) => {
  return (
    <>
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
                  >Solar Preparation</Link>
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
            <h2 className={Title}>{props.title}</h2>
            <img loading="lazy" src={Climbing} alt="Roof Repairs" className="img-fluid" />
          </div>
          <div className={Description}>
            {props.body}

          </div>
        </Col>
      </Row>
    </>
  )
}

export default SideBar
