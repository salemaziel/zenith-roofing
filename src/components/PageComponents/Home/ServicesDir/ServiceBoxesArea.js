import React from "react"
//import ServiceBox1 from "./ServiceBox1"
//import ServiceBox2 from "./ServiceBox2"
//import ServiceBox3 from "./ServiceBox3"
//import ServiceBox4 from "./ServiceBox4"
//import ServiceBox5 from "./ServiceBox5"
//import ServiceBox6 from "./ServiceBox6"
import homeStyles from "../home.module.css"

import {
  Repair,
  Replace,
  Inspections,
  Restorations,
  Solar,
  Skylights,
} from "../../../../images/index"

import { Link } from "gatsby"

import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"

class ServiceBoxesArea extends React.Component {
  render() {
    return (
      <div className={homeStyles.serviceBoxesAreas}>
        <Row style={{marginLeft: '0', marginRight: '0'}}>
          <div className="col-md-4 col-6 p-0">
          <Link rel="preload" to="/services/roof-repairs">
              {" "}
              <Card >
                <div className={homeStyles.boxes}>
                  {" "}
                  <Card.Img src={Repair} className="img-fluid" alt="" />
                  <Card.ImgOverlay>
                  <div className={homeStyles.textBoxes}>
                    <Card.Title>
                      {" "}
                      <div className={homeStyles.textTitles}>
                        Roof Repairs
                      </div>{" "}
                    </Card.Title>
                  </div>{" "}
                  </Card.ImgOverlay>
                </div>
              </Card>
            </Link>
          </div>
          <div className="col-md-4 col-6 p-0">
            <Link rel="preload" to="/services/skylights">
              {" "}
              <Card >
                <div className={homeStyles.boxes}>
                  {" "}
                  <Card.Img src={Skylights} className="img-fluid" alt="" />
                  <Card.ImgOverlay>
                  <div className={homeStyles.textBoxes}>
                    <Card.Title>
                      {" "}
                      <div className={homeStyles.textTitles}>Skylights</div>{" "}
                    </Card.Title>
                  </div>{" "}
                  </Card.ImgOverlay>
                </div>
              </Card>
            </Link>
          </div>
          <div className="col-md-4 col-6 p-0">
            <Link rel="preload" to="/services/solar">
              {" "}
              <Card >
                <div className={homeStyles.boxes}>
                  {" "}
                  <Card.Img src={Solar} className="img-fluid" alt="" />
                  <Card.ImgOverlay>
                  <div className={homeStyles.textBoxes}>
                    <Card.Title>
                      {" "}
                      <div className={homeStyles.textTitles}>Solar</div>{" "}
                    </Card.Title>
                  </div>{" "}
                  </Card.ImgOverlay>
                </div>
              </Card>{" "}
            </Link>
          </div>
          <div className="col-md-4 col-6 p-0">
            <Link rel="preload" to="/services/roof-restorations">
              {" "}
              <Card >
                <div className={homeStyles.boxes}>
                  {" "}
                  <Card.Img
                    src={Restorations}
                    className="img-fluid" alt=""
                  />
                  <Card.ImgOverlay>
                  <div className={homeStyles.textBoxes}>
                    <Card.Title>
                      {" "}
                      <div className={homeStyles.textTitles}>
                        Restorations
                      </div>{" "}
                    </Card.Title>
                  </div>{" "}
                  </Card.ImgOverlay>
                </div>
              </Card>{" "}
            </Link>
          </div>
          <div className="col-md-4 col-6 p-0">
            <Link rel="preload" to="/services/roof-inspections">
              {" "}
              <Card >
                <div className={homeStyles.boxes}>
                  {" "}
                  <Card.Img
                    src={Inspections}
                    className="img-fluid" alt=""
                  />
                  <Card.ImgOverlay>
                  <div className={homeStyles.textBoxes}>
                    <Card.Title>
                      {" "}
                      <div className={homeStyles.textTitles}>
                        Inspections
                      </div>{" "}
                    </Card.Title>
                  </div>
                  </Card.ImgOverlay>
                </div>
              </Card>{" "}
            </Link>
          </div>
          <div className="col-md-4 col-6 p-0">
            <Link rel="preload" to="/services/roof-replacements">
              {" "}
              <Card >
                <div className={homeStyles.boxes}>
                  {" "}
                  <Card.Img src={Replace} className="img-fluid" alt="" />
                  <Card.ImgOverlay>
                  <div className={homeStyles.textBoxes}>
                    <Card.Title>
                      {" "}
                      <div className={homeStyles.textTitles}>
                        Roof Replacement
                      </div>{" "}
                    </Card.Title>
                  </div>
                  </Card.ImgOverlay>
                </div>
              </Card>{" "}
            </Link>
          </div>
        </Row>
      </div>
    )
  }
}

export default ServiceBoxesArea
