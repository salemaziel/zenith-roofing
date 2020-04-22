import React, { Component } from 'react';
import { ProgressBg } from '../../../images/index'


class AboutSection4 extends Component {
  render() {
    return (
      <>
        <section
          className="progress-wrap-layout2 parallax-window"
          data-parallax="scroll"
          data-image-src={ProgressBg}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="progress-box-layout1">
                  <div className="progress-content">
                    <div className="item-icon">
                      <i className="flaticon-apartment" />
                    </div>
                    <div className="item-content">
                      <div
                        className="counter count-number"
                        data-num={1050}
                      >
                        1050
                      </div>
                      <div className="count-title">
                        Residential Projects
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="progress-box-layout1">
                  <div className="progress-content">
                    <div className="item-icon">
                      <i className="flaticon-industry" />
                    </div>
                    <div className="item-content">
                      <div
                        className="counter count-number"
                        data-num={1250}
                      >
                        1250
                      </div>
                      <div className="count-title">
                        Commertial Projects
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="progress-box-layout1">
                  <div className="progress-content">
                    <div className="item-icon">
                      <i className="flaticon-helmet" />
                    </div>
                    <div className="item-content">
                      <div
                        className="counter count-number"
                        data-num={650}
                      >
                        650
                      </div>
                      <div className="count-title">
                        Hard Working People
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="progress-box-layout1">
                  <div className="progress-content">
                    <div className="item-icon">
                      <i className="flaticon-happy" />
                    </div>
                    <div className="item-content">
                      <div
                        className="counter count-number"
                        data-num={3659}
                      >
                        3659
                      </div>
                      <div className="count-title">
                        Our Satisfied Clinets
                      </div>
                    </div>
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

export default AboutSection4;
