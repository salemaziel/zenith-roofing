import React, { Component } from 'react';

import { Link } from 'gatsby'
import {
    Service14,
    Service15,
    Service16,
    Service17,
    Service18,
    Service19,
} from '../../../images/index'

import Container from "react-bootstrap/Container";

import serviceStyle from './services.module.css'

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
              <Link rel="preload" to="/services/owenscorning">

                <img src={Service14} alt="Service" className={serviceStyle.ServiceImg} />
                </Link>

              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                  <Link rel="preload" to="/services/owenscorning">
                    Owens Corning
                  </Link>
                </h3>
              {/*  <p>
                Is a system that will warranty your roof for a lifetime, with shingles that can withstand high winds and heavy rains, this will be a system worth installing. Call for more info on this premium warranty!
                </p>*/}
                <Link
                  to="/services/owenscorning"
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
              <Link rel="preload" to="/services/roofmaintenance">

                <img src={Service15} alt="Service" className={serviceStyle.ServiceImg} />
                </Link>

              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                  <Link rel="preload" to="/services/roofmaintenance">
                    Roof Maintenance
                  </Link>
                </h3>
                {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
                <Link rel="preload" to="/services/roofmaintenance"
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

                <img src={Service16} alt="Service" className={serviceStyle.ServiceImg} />
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
                <Link rel="preload" to="/services/thermoplastic-polyolefin"
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
              <Link rel="preload" to="/services/roofrepair">
                <img src={Service14} alt="Service" className={serviceStyle.ServiceImg} />
                </Link>
              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                  <Link rel="preload" to="/services/roofrepair">
                    Roof Repair
                  </Link>
                </h3>
                {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
                <Link rel="preload" to="/services/roofrepair"
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
              <Link rel="preload" to="services/skylights">
                <img src={Service15} alt="Service" className={serviceStyle.ServiceImg} />
                </Link>


              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                <Link rel="preload" to="services/skylights">
                    SkyLights
                  </Link>
                </h3>
                {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
              <Link rel="preload" to="services/skylights"
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
                <img src={Service16} alt="Service" className={serviceStyle.ServiceImg} />
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
              <Link rel="preload" to="/services/solar"
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
              <Link rel="preload" to="/services/ethylene-propylene-diene-monomer">

                <img src={Service15} alt="Service" className={serviceStyle.ServiceImg} />
                </Link>

              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                  <Link rel="preload" to="/services/ethylene-propylene-diene-monomer">
                  Ethylene Propylene Diene Monomer (EPDM)
                  </Link>
                </h3>
                {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
                <Link rel="preload" to="/services/ethylene-propylene-diene-monomer"
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

                <img src={Service14} alt="Service" className={serviceStyle.ServiceImg} />
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
              <Link rel="preload" to="/services/tile">

                <img src={Service16} alt="Service" className={serviceStyle.ServiceImg} />
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
                <Link rel="preload" to="/services/tile"
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
              <Link rel="preload" to="/services/roofrestorations">
                <img src={Service17} alt="Service" className={serviceStyle.ServiceImg} />
                </Link>
              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                <Link rel="preload" to="/services/roofrestorations">
                    Restorations
                  </Link>
                </h3>
                {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
              <Link rel="preload" to="/services/roofrestorations"
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
              <Link rel="preload" to="/services/inspections">
                <img src={Service18} alt="Service" className={serviceStyle.ServiceImg} />
                </Link>



              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                <Link rel="preload" to="/services/inspections">
                    Inspections</Link>
                </h3>
                {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
              <Link rel="preload" to="/services/inspections"
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
              <Link rel="preload" to="/services/roofreplacements">
                <img src={Service19} alt="Service" className={serviceStyle.ServiceImg} />
               </Link>
              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                <Link rel="preload" to="/services/roofreplacements">
                    Replacement</Link>
                </h3>
                {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
                
                <Link rel="preload" to="/services/roofreplacements"
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
              <Link rel="preload" to="/services/inspections">
                <img src={Service18} alt="Service" className={serviceStyle.ServiceImg} />
                </Link>



              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                <Link rel="preload" to="/services/shingle">
                    Shingles</Link>
                </h3>
                {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
              <Link rel="preload" to="/services/shingle"
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
              <Link rel="preload" to="/services/builtup-roofing">
                <img src={Service18} alt="Service" className={serviceStyle.ServiceImg} />
                </Link>



              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                <Link rel="preload" to="/services/builtup-roofing">
                    Inspections</Link>
                </h3>
                {/*<p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>*/}
              <Link rel="preload" to="/services/builtup-roofing"
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
    );
  }
}

export default ServicesGrid