import React, { Component } from 'react';

import { ProgressBg } from '../../../images/index'


class AboutSection3 extends Component {
  render() {
    return (
      <>
        <section className="why-choose-wrap-layout1">
          <div className="container">
            <div className="heading-layout1">
              <div className="item-subtitle">Our Speciality</div>
              <h2>Why Choose Us</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="why-choose-box-layout1">
                  <div className="item-img">
                    <img
                      src="img/figure/why-choose.jpg"
                      alt="why choose"
                    />
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">
                      {' '}
                      <a href="#">Innovation</a>
                    </h3>
                    <p>
                      When an unknown printer took a galley of type
                      and scrambled it to make a type specimen book.
                      It has survived not only five centuries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="why-choose-box-layout1">
                  <div className="item-img">
                    <img
                      src="img/figure/why-choose1.jpg"
                      alt="why choose"
                    />
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">
                      {' '}
                      <a href="#">Commitment to Quality</a>
                    </h3>
                    <p>
                      When an unknown printer took a galley of type
                      and scrambled it to make a type specimen book.
                      It has survived not only five centuries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 d-block d-md-none d-lg-block">
                <div className="why-choose-box-layout1">
                  <div className="item-img">
                    <img
                      src="img/figure/why-choose2.jpg"
                      alt="why choose"
                    />
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">
                      {' '}
                      <a href="#">Core Values</a>
                    </h3>
                    <p>
                      When an unknown printer took a galley of type
                      and scrambled it to make a type specimen book.
                      It has survived not only five centuries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default AboutSection3;
