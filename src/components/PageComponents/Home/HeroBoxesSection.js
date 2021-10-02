import React from 'react';
import {
  Block1,
  Block2,
  Block3
} from '../../../images/index'

import Working from '../../../images/sept-30-2021/2020-11-06_16-59-44_UTC.jpg'
import Working2 from '../../../images/sept-30-2021/2021-01-06_00-40-32_UTC_1.jpg'
import Working3 from '../../../images/sept-30-2021/2020-10-17_00-41-14_UTC_3.jpg'

import Row from "react-bootstrap/Row";

const HeroBoxesSection = () => (
      <section className="hero-image-boxes">
        <div className="container-fluid">
          <Row style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="col-4">
              <div className="boxes">
                <img loading="lazy" src={Working} className="img-fluid" alt='' />
              </div>
            </div>
            <div className="col-4">
              <div className="boxes">
                <img loading="lazy" src={Working2} className="img-fluid" alt='' />
              </div>
            </div>
            <div className="col-4">
              <div className="boxes">
                <img loading="lazy" src={Working3} className="img-fluid" alt='' />
              </div>
            </div>
          </Row>
        </div>
      </section>
    );


export default HeroBoxesSection;
