import React from "react"

import { serviceBoxesAreas, boxes, textBoxes, textTitles  } from "../home.module.css"

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

const ServiceBoxesArea = () => (
      <div className={serviceBoxesAreas}>
        <Row style={{marginLeft: '0', marginRight: '0'}}>
          <div className="col-md-4 col-6 p-0">
          <Link rel="preload" to="/services/roof-repairs/">
              {" "}
              <Card >
                <div className={boxes}>
                  {" "}
                  <Card.Img src={Repair} className="img-fluid" alt="" />
                  <Card.ImgOverlay>
                  <div className={textBoxes}>
                    <Card.Title>
                      {" "}
                      <div className={textTitles}>
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
            <Link rel="preload" to="/services/skylights/">
              {" "}
              <Card >
                <div className={boxes}>
                  {" "}
                  <Card.Img src={Skylights} className="img-fluid" alt="" />
                  <Card.ImgOverlay>
                  <div className={textBoxes}>
                    <Card.Title>
                      {" "}
                      <div className={textTitles}>Skylights</div>{" "}
                    </Card.Title>
                  </div>{" "}
                  </Card.ImgOverlay>
                </div>
              </Card>
            </Link>
          </div>
          <div className="col-md-4 col-6 p-0">
            <Link rel="preload" to="/services/solar/">
              {" "}
              <Card >
                <div className={boxes}>
                  {" "}
                  <Card.Img src={Solar} className="img-fluid" alt="" />
                  <Card.ImgOverlay>
                  <div className={textBoxes}>
                    <Card.Title>
                      {" "}
                      <div className={textTitles}>Solar</div>{" "}
                    </Card.Title>
                  </div>{" "}
                  </Card.ImgOverlay>
                </div>
              </Card>{" "}
            </Link>
          </div>
          <div className="col-md-4 col-6 p-0">
            <Link rel="preload" to="/services/roof-restorations/">
              {" "}
              <Card >
                <div className={boxes}>
                  {" "}
                  <Card.Img
                    src={Restorations}
                    className="img-fluid" alt=""
                  />
                  <Card.ImgOverlay>
                  <div className={textBoxes}>
                    <Card.Title>
                      {" "}
                      <div className={textTitles}>
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
            <Link rel="preload" to="/services/roof-inspections/">
              {" "}
              <Card >
                <div className={boxes}>
                  {" "}
                  <Card.Img
                    src={Inspections}
                    className="img-fluid" alt=""
                  />
                  <Card.ImgOverlay>
                  <div className={textBoxes}>
                    <Card.Title>
                      {" "}
                      <div className={textTitles}>
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
            <Link rel="preload" to="/services/roof-replacements/">
              {" "}
              <Card >
                <div className={boxes}>
                  {" "}
                  <Card.Img src={Replace} className="img-fluid" alt="" />
                  <Card.ImgOverlay>
                  <div className={textBoxes}>
                    <Card.Title>
                      {" "}
                      <div className={textTitles}>
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

export default ServiceBoxesArea
