import React, { Component } from "react"

import { Link } from "gatsby"
import {
  Service14,
  Service15,
  Service16,
  Service17,
  Service18,
  Service19,
} from "../../../images/index"

import Container from "react-bootstrap/Container"

import serviceStyle from "./services.module.css"

class ServicesGrid extends Component {
  render() {
    return (
      <section className={serviceStyle.ServicesGrid}>
        <Container className={serviceStyle.ContainerServices}>
          {/*<div class="container">*/}
          <div className="row">


            <div className="col-lg-4 col-md-6 col-12">
              <div className={serviceStyle.ServiceBox}>
                <div className={serviceStyle.ServiceImgBox}>
                  <Link rel="preload" to="/services/builtup-roofing">
                    <img
                      src={Service18}
                      alt="Service"
                      className={serviceStyle.ServiceImg}
                    />
                  </Link>
                </div>
                <div className="item-content">
                  <h3 className={serviceStyle.ServiceTitle}>
                    <Link rel="preload" to="/services/builtup-roofing">
                      Built-Up Roofing
                    </Link>
                  </h3>
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
                  <Link
                    rel="preload"
                    to="/services/builtup-roofing"
                    className={serviceStyle.ReadMore}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className={serviceStyle.ServiceBox}>
                <div className={serviceStyle.ServiceImgBox}>
                  <Link
                    rel="preload"
                    to="/services/ethylene-propylene-diene-monomer"
                  >
                    <img
                      src={Service15}
                      alt="Service"
                      className={serviceStyle.ServiceImg}
                    />
                  </Link>
                </div>
                <div className="item-content">
                  <h3 className={serviceStyle.ServiceTitle}>
                    <Link
                      rel="preload"
                      to="/services/ethylene-propylene-diene-monomer"
                    >
                      Ethylene Propylene Diene Monomer (EPDM)
                    </Link>
                  </h3>
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
                  <Link
                    rel="preload"
                    to="/services/ethylene-propylene-diene-monomer"
                    className={serviceStyle.ReadMore}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className={serviceStyle.ServiceBox}>
                <div className={serviceStyle.ServiceImgBox}>
                  <Link rel="preload" to="/services/roof-inspections">
                    <img
                      src={Service18}
                      alt="Service"
                      className={serviceStyle.ServiceImg}
                    />
                  </Link>
                </div>
                <div className="item-content">
                  <h3 className={serviceStyle.ServiceTitle}>
                    <Link rel="preload" to="/services/roof-inspections">
                      Inspections
                    </Link>
                  </h3>
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
                  <Link
                    rel="preload"
                    to="/services/roof-inspections"
                    className={serviceStyle.ReadMore}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className={serviceStyle.ServiceBox}>
                <div className={serviceStyle.ServiceImgBox}>
                  <Link rel="preload" to="/services/roof-maintenance">
                    <img
                      src={Service15}
                      alt="Service"
                      className={serviceStyle.ServiceImg}
                    />
                  </Link>
                </div>
                <div className="item-content">
                  <h3 className={serviceStyle.ServiceTitle}>
                    <Link rel="preload" to="/services/roof-maintenance">
                      Maintenance
                    </Link>
                  </h3>
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
                  <Link
                    rel="preload"
                    to="/services/roof-maintenance"
                    className={serviceStyle.ReadMore}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className={serviceStyle.ServiceBox}>
                <div className={serviceStyle.ServiceImgBox}>
                  <Link rel="preload" to="/services/owens-corning">
                    <img
                      src={Service14}
                      alt="Service"
                      className={serviceStyle.ServiceImg}
                    />
                  </Link>
                </div>
                <div className="item-content">
                  <h3 className={serviceStyle.ServiceTitle}>
                    <Link rel="preload" to="/services/owens-corning">
                      Owens Corning
                    </Link>
                  </h3>
                  {/*  <p>
                Is a system that will warranty your roof for a lifetime, with shingles that can withstand high winds and heavy rains, this will be a system worth installing. Call for more info on this premium warranty!
                </p>*/}
                  <Link
                    to="/services/owens-corning"
                    className={serviceStyle.ReadMore}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6 col-12">
              <div className={serviceStyle.ServiceBox}>
                <div className={serviceStyle.ServiceImgBox}>
                  <Link rel="preload" to="/services/polyvinyl-chloride">
                    <img
                      src={Service14}
                      alt="Service"
                      className={serviceStyle.ServiceImg}
                    />
                  </Link>
                </div>
                <div className="item-content">
                  <h3 className={serviceStyle.ServiceTitle}>
                    <Link rel="preload" to="/services/polyvinyl-chloride">
                      Polyvinyl Chloride (PVC)
                    </Link>
                  </h3>
                  {/*  <p>
                Is a system that will warranty your roof for a lifetime, with shingles that can withstand high winds and heavy rains, this will be a system worth installing. Call for more info on this premium warranty!
                </p>*/}
                  <Link
                    to="/services/polyvinyl-chloride"
                    className={serviceStyle.ReadMore}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6 col-12">
              <div className={serviceStyle.ServiceBox}>
                <div className={serviceStyle.ServiceImgBox}>
                  <Link rel="preload" to="/services/roof-repairs">
                    <img
                      src={Service14}
                      alt="Service"
                      className={serviceStyle.ServiceImg}
                    />
                  </Link>
                </div>
                <div className="item-content">
                  <h3 className={serviceStyle.ServiceTitle}>
                    <Link rel="preload" to="/services/roof-repairs">
                      Roof Repair
                    </Link>
                  </h3>
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
                  <Link
                    rel="preload"
                    to="/services/roof-repairs"
                    className={serviceStyle.ReadMore}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6 col-12">
              <div className={serviceStyle.ServiceBox}>
                <div className={serviceStyle.ServiceImgBox}>
                  <Link rel="preload" to="/services/roof-replacements">
                    <img
                      src={Service19}
                      alt="Service"
                      className={serviceStyle.ServiceImg}
                    />
                  </Link>
                </div>
                <div className="item-content">
                  <h3 className={serviceStyle.ServiceTitle}>
                    <Link rel="preload" to="/services/roof-replacements">
                      Roof Replacement
                    </Link>
                  </h3>
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}

                  <Link
                    rel="preload"
                    to="/services/roof-replacements"
                    className={serviceStyle.ReadMore}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6 col-12">
              <div className={serviceStyle.ServiceBox}>
                <div className={serviceStyle.ServiceImgBox}>
                  <Link rel="preload" to="/services/roof-restorations">
                    <img
                      src={Service17}
                      alt="Service"
                      className={serviceStyle.ServiceImg}
                    />
                  </Link>
                </div>
                <div className="item-content">
                  <h3 className={serviceStyle.ServiceTitle}>
                    <Link rel="preload" to="/services/roof-restorations">
                      Restorations
                    </Link>
                  </h3>
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
                  <Link
                    rel="preload"
                    to="/services/roof-restorations"
                    className={serviceStyle.ReadMore}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>



            <div className="col-lg-4 col-md-6 col-12">
              <div className={serviceStyle.ServiceBox}>
                <div className={serviceStyle.ServiceImgBox}>
                  <Link rel="preload" to="/services/shingle">
                    <img
                      src={Service18}
                      alt="Service"
                      className={serviceStyle.ServiceImg}
                    />
                  </Link>
                </div>
                <div className="item-content">
                  <h3 className={serviceStyle.ServiceTitle}>
                    <Link rel="preload" to="/services/shingle">
                      Shingle
                    </Link>
                  </h3>
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
                  <Link
                    rel="preload"
                    to="/services/shingle"
                    className={serviceStyle.ReadMore}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>



            <div className="col-lg-4 col-md-6 col-12">
              <div className={serviceStyle.ServiceBox}>
                <div className={serviceStyle.ServiceImgBox}>
                  <Link rel="preload" to="/services/skylights">
                    <img
                      src={Service15}
                      alt="Service"
                      className={serviceStyle.ServiceImg}
                    />
                  </Link>
                </div>
                <div className="item-content">
                  <h3 className={serviceStyle.ServiceTitle}>
                    <Link rel="preload" to="/services/skylights">
                      SkyLights
                    </Link>
                  </h3>
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
                  <Link
                    rel="preload"
                    to="/services/skylights"
                    className={serviceStyle.ReadMore}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>



            <div className="col-lg-4 col-md-6 col-12">
              <div className={serviceStyle.ServiceBox}>
                <div className={serviceStyle.ServiceImgBox}>
                  <Link rel="preload" to="/services/solar">
                    <img
                      src={Service16}
                      alt="Service"
                      className={serviceStyle.ServiceImg}
                    />
                  </Link>
                </div>
                <div className="item-content">
                  <h3 className={serviceStyle.ServiceTitle}>
                    <Link rel="preload" to="/services/solar">
                      Solar
                    </Link>
                  </h3>
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
                  <Link
                    rel="preload"
                    to="/services/solar"
                    className={serviceStyle.ReadMore}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>



            <div className="col-lg-4 col-md-6 col-12">
              <div className={serviceStyle.ServiceBox}>
                <div className={serviceStyle.ServiceImgBox}>
                  <Link rel="preload" to="/services/tile">
                    <img
                      src={Service16}
                      alt="Service"
                      className={serviceStyle.ServiceImg}
                    />
                  </Link>
                </div>
                <div className="item-content">
                  <h3 className={serviceStyle.ServiceTitle}>
                    <Link rel="preload" to="/services/tile">
                      Tile
                    </Link>
                  </h3>
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
                  <Link
                    rel="preload"
                    to="/services/tile"
                    className={serviceStyle.ReadMore}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>





            <div className="col-lg-4 col-md-6 col-12">
              <div className={serviceStyle.ServiceBox}>
                <div className={serviceStyle.ServiceImgBox}>
                  <Link rel="preload" to="/services/thermoplastic-polyolefin">
                    <img
                      src={Service16}
                      alt="Service"
                      className={serviceStyle.ServiceImg}
                    />
                  </Link>
                </div>
                <div className="item-content">
                  <h3 className={serviceStyle.ServiceTitle}>
                    <Link rel="preload" to="/services/thermoplastic-polyolefin">
                      Thermoplastic Polyolefin (TPO)
                    </Link>
                  </h3>
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
                  <Link
                    rel="preload"
                    to="/services/thermoplastic-polyolefin"
                    className={serviceStyle.ReadMore}
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
  }
}

export default ServicesGrid
