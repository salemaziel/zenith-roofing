import React from "react"

import { Link } from "gatsby"
import {
  Service14,
  Service15,
  Service18,
  Service19,
  BUR1,
  EPDM1,
  PVC1,
  Restorations1,
  Solar1,
  Skylight2,
  Shingle1,
  OwensCorning1,
  Tile1,
  TPO1,
} from "../../../images/index"

import Container from "react-bootstrap/Container"

import {
  GridSection,
  ContainerServices,
  ServiceBox,
  ServiceImgBox,
  ServiceImg,
  ServiceTitle,
  ReadMore,
} from "./services.module.css"
import { Col, ListGroup, Row } from "react-bootstrap"

const ServicesGrid = () => (
  <section className={GridSection}>
    <Container>
      <Row>
        <Col>
          <h2 className="text-center pb-4">Roofing Services</h2>
          {/*<ListGroup variant="flush" horizontal="md" className="py-4">
            <Col>
            <ListGroup.Item action href="#bur">
              Built-Up Roofing
            </ListGroup.Item>
            <ListGroup.Item action href="#epdm" >
            Ethylene Propylene Diene Monomer (EPDM)
            </ListGroup.Item>
            <ListGroup.Item action href="#inspections" >
              Inspections
            </ListGroup.Item>
            <ListGroup.Item action href="#maintenance">
              Maintenance
            </ListGroup.Item>
            <ListGroup.Item action href="#owenscorning" >
            Owens-Corning
            </ListGroup.Item>
            <ListGroup.Item action href="#pvc" >
            Polyvinyl Chloride (PVC)
            </ListGroup.Item>
            <ListGroup.Item action href="#repair">
              Roof Repair
            </ListGroup.Item>
            </Col>
            <Col>
            <ListGroup.Item action href="#replacement" >
            Roof Replacement
            </ListGroup.Item>
            <ListGroup.Item action href="#restorations" >
              Restorations
            </ListGroup.Item>
            <ListGroup.Item action href="#shingle">
              Shingle
            </ListGroup.Item>
            <ListGroup.Item action href="#skylights" >
           Skylights
            </ListGroup.Item>
            <ListGroup.Item action href="#solar" >
              Solar Preparation
            </ListGroup.Item>
            <ListGroup.Item action href="#tile">
              Tile
            </ListGroup.Item>
            <ListGroup.Item action href="#tpo" >
            Thermoplastic Polyolefin (TPO)
            </ListGroup.Item>
            </Col>
</ListGroup>*/}
        </Col>
      </Row>
    </Container>
    <Container className={ContainerServices}>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          <div className={ServiceBox} id="bur">
            <div className={ServiceImgBox}>
              <Link rel="preload" to="/services/builtup-roofing">
                <img
                  
                  loading="lazy"
                  src={BUR1}
                  alt="Service"
                  className={ServiceImg}
                />
              </Link>
            </div>
            <div className="item-content">
              <h3 className={ServiceTitle}>
                <Link rel="preload" to="/services/builtup-roofing">
                  Built-Up Roofing
                </Link>
              </h3>

              <Link
                rel="preload"
                to="/services/builtup-roofing"
                className={ReadMore}
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className={ServiceBox}>
            <div className={ServiceImgBox}>
              <Link
                rel="preload"
                to="/services/ethylene-propylene-diene-monomer"
              >
                <img
                  loading="lazy"
                  src={EPDM1}
                  alt="Service"
                  className={ServiceImg}
                />
              </Link>
            </div>
            <div className="item-content">
              <h3 className={ServiceTitle}>
                <Link
                  rel="preload"
                  to="/services/ethylene-propylene-diene-monomer"
                >
                  Ethylene Propylene Diene Monomer (EPDM)
                </Link>
              </h3>

              <Link
                rel="preload"
                to="/services/ethylene-propylene-diene-monomer"
                className={ReadMore}
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className={ServiceBox}>
            <div className={ServiceImgBox}>
              <Link rel="preload" to="/services/roof-inspections">
                <img
                  loading="lazy"
                  src={Service18}
                  alt="Service"
                  className={ServiceImg}
                />
              </Link>
            </div>
            <div className="item-content">
              <h3 className={ServiceTitle}>
                <Link rel="preload" to="/services/roof-inspections">
                  Inspections
                </Link>
              </h3>

              <Link
                rel="preload"
                to="/services/roof-inspections"
                className={ReadMore}
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className={ServiceBox}>
            <div className={ServiceImgBox}>
              <Link rel="preload" to="/services/roof-maintenance">
                <img
                  loading="lazy"
                  src={Service15}
                  alt="Service"
                  className={ServiceImg}
                />
              </Link>
            </div>
            <div className="item-content">
              <h3 className={ServiceTitle}>
                <Link rel="preload" to="/services/roof-maintenance">
                  Maintenance
                </Link>
              </h3>

              <Link
                rel="preload"
                to="/services/roof-maintenance"
                className={ReadMore}
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className={ServiceBox}>
            <div className={ServiceImgBox}>
              <Link rel="preload" to="/services/owens-corning">
                <img
                  loading="lazy"
                  src={OwensCorning1}
                  alt="Service"
                  className={ServiceImg}
                />
              </Link>
            </div>
            <div className="item-content">
              <h3 className={ServiceTitle}>
                <Link rel="preload" to="/services/owens-corning">
                  Owens Corning
                </Link>
              </h3>
              <Link to="/services/owens-corning" className={ReadMore}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className={ServiceBox}>
            <div className={ServiceImgBox}>
              <Link rel="preload" to="/services/polyvinyl-chloride">
                <img
                  loading="lazy"
                  src={PVC1}
                  alt="Service"
                  className={ServiceImg}
                />
              </Link>
            </div>
            <div className="item-content">
              <h3 className={ServiceTitle}>
                <Link rel="preload" to="/services/polyvinyl-chloride">
                  Polyvinyl Chloride (PVC)
                </Link>
              </h3>

              <Link to="/services/polyvinyl-chloride" className={ReadMore}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className={ServiceBox}>
            <div className={ServiceImgBox}>
              <Link rel="preload" to="/services/roof-repairs">
                <img
                  loading="lazy"
                  src={Service14}
                  alt="Service"
                  className={ServiceImg}
                />
              </Link>
            </div>
            <div className="item-content">
              <h3 className={ServiceTitle}>
                <Link rel="preload" to="/services/roof-repairs">
                  Roof Repair
                </Link>
              </h3>

              <Link
                rel="preload"
                to="/services/roof-repairs"
                className={ReadMore}
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className={ServiceBox}>
            <div className={ServiceImgBox}>
              <Link rel="preload" to="/services/roof-replacements">
                <img
                  loading="lazy"
                  src={Service19}
                  alt="Service"
                  className={ServiceImg}
                />
              </Link>
            </div>
            <div className="item-content">
              <h3 className={ServiceTitle}>
                <Link rel="preload" to="/services/roof-replacements">
                  Roof Replacement
                </Link>
              </h3>

              <Link
                rel="preload"
                to="/services/roof-replacements"
                className={ReadMore}
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className={ServiceBox}>
            <div className={ServiceImgBox}>
              <Link rel="preload" to="/services/roof-restorations">
                <img
                  loading="lazy"
                  src={Restorations1}
                  alt="Service"
                  className={ServiceImg}
                />
              </Link>
            </div>
            <div className="item-content">
              <h3 className={ServiceTitle}>
                <Link rel="preload" to="/services/roof-restorations">
                  Restorations
                </Link>
              </h3>

              <Link
                rel="preload"
                to="/services/roof-restorations"
                className={ReadMore}
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className={ServiceBox}>
            <div className={ServiceImgBox}>
              <Link rel="preload" to="/services/shingle">
                <img
                  loading="lazy"
                  src={Shingle1}
                  alt="Service"
                  className={ServiceImg}
                />
              </Link>
            </div>
            <div className="item-content">
              <h3 className={ServiceTitle}>
                <Link rel="preload" to="/services/shingle">
                  Shingle
                </Link>
              </h3>

              <Link rel="preload" to="/services/shingle" className={ReadMore}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className={ServiceBox}>
            <div className={ServiceImgBox}>
              <Link rel="preload" to="/services/skylights">
                <img
                  loading="lazy"
                  src={Skylight2}
                  alt="Service"
                  className={ServiceImg}
                />
              </Link>
            </div>
            <div className="item-content">
              <h3 className={ServiceTitle}>
                <Link rel="preload" to="/services/skylights">
                  SkyLights
                </Link>
              </h3>

              <Link rel="preload" to="/services/skylights" className={ReadMore}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className={ServiceBox}>
            <div className={ServiceImgBox}>
              <Link rel="preload" to="/services/solar">
                <img
                  loading="lazy"
                  src={Solar1}
                  alt="Service"
                  className={ServiceImg}
                />
              </Link>
            </div>
            <div className="item-content">
              <h3 className={ServiceTitle}>
                <Link rel="preload" to="/services/solar">
                  Solar Preparation
                </Link>
              </h3>

              <Link rel="preload" to="/services/solar" className={ReadMore}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className={ServiceBox}>
            <div className={ServiceImgBox}>
              <Link rel="preload" to="/services/tile">
                <img
                  loading="lazy"
                  src={Tile1}
                  alt="Service"
                  className={ServiceImg}
                />
              </Link>
            </div>
            <div className="item-content">
              <h3 className={ServiceTitle}>
                <Link rel="preload" to="/services/tile">
                  Tile
                </Link>
              </h3>

              <Link rel="preload" to="/services/tile" className={ReadMore}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className={ServiceBox}>
            <div className={ServiceImgBox}>
              <Link rel="preload" to="/services/thermoplastic-polyolefin">
                <img
                  loading="lazy"
                  src={TPO1}
                  alt="Service"
                  className={ServiceImg}
                />
              </Link>
            </div>
            <div className="item-content">
              <h3 className={ServiceTitle}>
                <Link rel="preload" to="/services/thermoplastic-polyolefin">
                  Thermoplastic Polyolefin (TPO)
                </Link>
              </h3>

              <Link
                rel="preload"
                to="/services/thermoplastic-polyolefin"
                className={ReadMore}
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
)

export default ServicesGrid
