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

class ResServicesGrid extends Component {
    render() {
    return (
      <section className={serviceStyle.ServicesGrid}>
        <Container className={serviceStyle.ContainerServices}>
      {/*<div class="container">*/}
        <div className="row">
         <div className="col-lg-4 col-md-6 col-12">
            <div className={serviceStyle.ServiceBox}>
              <div className={serviceStyle.ServiceImgBox}>
              <img src={Service14} alt="Service" className={serviceStyle.ServiceImg} />
               
              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                  <Link rel="preload" to="">
                    Owens Corning
                  </Link>
                </h3>
                <p>
                Is a system that will warranty your roof for a lifetime, with shingles that can withstand high winds and heavy rains, this will be a system worth installing. Call for more info on this premium warranty!
                </p>
                <Link
                  to=""
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
              <Link rel="preload" to="">
                <img src={Service14} alt="Service" className={serviceStyle.ServiceImg} />
                </Link>
              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                  <Link rel="preload" to="">
                    Roof Repair
                  </Link>
                </h3>
                <p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>
                <Link rel="preload" to="#"
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
              <Link rel="preload" to="">
                <img src={Service15} alt="Service" className={serviceStyle.ServiceImg} />
                </Link>


              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                  <Link rel="preload" to="">
                    SkyLights
                  </Link>
                </h3>
                <p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>
                <Link rel="preload" to="#"
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
              <Link rel="preload" to="">
                <img src={Service16} alt="Service" className={serviceStyle.ServiceImg} />
                </Link>



              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                  <Link rel="preload" to="">
                    Solar
                  </Link>
                </h3>
                <p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>
                <Link rel="preload" to="#"
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
              <Link rel="preload" to="">
                <img src={Service17} alt="Service" className={serviceStyle.ServiceImg} />
                </Link>



              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                  <Link rel="preload" to="">
                    Restorations
                  </Link>
                </h3>
                <p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>
                <Link rel="preload" to="#"
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
              <Link rel="preload" to="">
                <img src={Service18} alt="Service" className={serviceStyle.ServiceImg} />
                </Link>



              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                  <Link rel="preload" to="">Inspections</Link>
                </h3>
                <p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>
                <Link rel="preload" to="#"
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
              <Link rel="preload" to="">
                <img src={Service19} alt="Service" className={serviceStyle.ServiceImg} />
               </Link>
              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                  <Link rel="preload" to="">Replacement</Link>
                </h3>
                <p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>
                
              <Link rel="preload" to="#"
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
              <img src={Service14} alt="Service" className={serviceStyle.ServiceImg} />
               
              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                  <Link rel="preload" to="">
                    Roof Replacements
                  </Link>
                </h3>
                <p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>
                <Link rel="preload" to=""
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
              <img src={Service14} alt="Service" className={serviceStyle.ServiceImg} />
               
              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                  <Link rel="preload" to="">
                    Roof Maintenance
                  </Link>
                </h3>
                <p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>
                <Link rel="preload" to=""
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

export default ResServicesGrid