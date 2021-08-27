import React from "react"

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

import { GridSection, ContainerServices, ServiceBox, ServiceImgBox, ServiceImg, ServiceTitle, ReadMore } from "./services.module.css"

const ServicesGrid = () => (
      <section className={GridSection}>
        <Container className={ContainerServices}>
          {/*<div class="container">*/}
          <div className="row">


            <div className="col-lg-4 col-md-6 col-12">
              <div className={ServiceBox}>
                <div className={ServiceImgBox}>
                  <Link rel="preload" to="/services/builtup-roofing">
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
                      src={Service15}
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
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
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
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
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
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
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
                      src={Service14}
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
                  {/*  <p>
                Is a system that will warranty your roof for a lifetime, with shingles that can withstand high winds and heavy rains, this will be a system worth installing. Call for more info on this premium warranty!
                </p>*/}
                  <Link
                    to="/services/owens-corning"
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
                  <Link rel="preload" to="/services/polyvinyl-chloride">
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
                    <Link rel="preload" to="/services/polyvinyl-chloride">
                      Polyvinyl Chloride (PVC)
                    </Link>
                  </h3>
                  {/*  <p>
                Is a system that will warranty your roof for a lifetime, with shingles that can withstand high winds and heavy rains, this will be a system worth installing. Call for more info on this premium warranty!
                </p>*/}
                  <Link
                    to="/services/polyvinyl-chloride"
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
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
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
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}

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
                      src={Service17}
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
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
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
                      src={Service18}
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
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
                  <Link
                    rel="preload"
                    to="/services/shingle"
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
                  <Link rel="preload" to="/services/skylights">
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
                  <Link rel="preload" to="/services/solar">
                    <img
                      loading="lazy"
                      src={Service16}
                      alt="Service"
                      className={ServiceImg}
                    />
                  </Link>
                </div>
                <div className="item-content">
                  <h3 className={ServiceTitle}>
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
                  <Link rel="preload" to="/services/tile">
                    <img
                      loading="lazy"
                      src={Service16}
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
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
                  <Link
                    rel="preload"
                    to="/services/tile"
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
                  <Link rel="preload" to="/services/thermoplastic-polyolefin">
                    <img
                      loading="lazy"
                      src={Service16}
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
                  {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
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
