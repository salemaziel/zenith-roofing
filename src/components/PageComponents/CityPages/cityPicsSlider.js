import React, { Component } from "react"
import Slider from "react-slick"

import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from "react-icons/fa"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Container, Row, Col } from "react-bootstrap"

export default class CityPicsSlider extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  render() {
    const settings = {
      dots: false,
      className: "center",
      centerPadding: "50px",
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      swipeToSlide: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <>
        <div className="py-5 mb-5">
          <Container>
            <Row>
              <Col>
                <Slider ref={c => (this.slider = c)} {...settings}>
                  {/* <div className="col-11 col-md-4 mb-3 mb-md-0"> */}
                  <div key={1}>
                    <div className="px-3">
                      <img
                        className="rounded"
                        width="320px"
                        src={this.props.gallery1}
                        alt
                      />
                    </div>
                    {/* </div> */}
                  </div>
                  {/* <div className="col-11 col-md-4 mb-3 mb-md-0"> */}
                  <div key={2}>
                    <div className="px-3">
                      <img
                        className="rounded"
                        width="320px"
                        src={this.props.gallery2}
                        alt
                      />
                    </div>
                    {/* </div> */}
                  </div>
                  {/* <div className="col-11 col-md-4">*/}
                  <div key={3}>
                    <div className="px-3">
                      <img
                        className="rounded"
                        width="320px"
                        src={this.props.gallery3}
                        alt
                      />
                    </div>
                    {/* </div> */}
                  </div>
                  {/* <div className="col-11 col-md-4 mb-3 mb-md-0"> */}
                  <div key={4}>
                    <div className="px-3">
                      <img
                        className="rounded"
                        width="320px"
                        src={this.props.gallery4}
                        alt
                      />
                    </div>
                    {/* </div> */}
                  </div>
                  {/* <div className="col-11 col-md-4 mb-3 mb-md-0"> */}
                  <div key={5}>
                    <div className="px-3">
                      <img
                        className="rounded"
                        width="320px"
                        src={this.props.gallery5}
                        alt
                      />
                    </div>
                    {/* </div> */}
                  </div>
                  {/* <div className="col-11 col-md-4"> */}
                  <div key={6}>
                    <div className="px-3">
                      <img
                        className="rounded"
                        width="320px"
                        src={this.props.gallery6}
                        alt
                      />
                    </div>
                    {/* </div> */}
                  </div>
                </Slider>
                <div className="w-25 d-flex mx-auto mt-5 position-relative">
                  <a
                    className="carousel-control-prev"
                    role="button"
                    data-slide="prev"
                    onClick={this.previous}                    
                  >
                    <FaChevronCircleLeft
                      size="2rem"
                      color="orange"
                      aria-hidden="true"                      
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next ml-auto"
                    role="button"
                    data-slide="next"
                    onClick={this.next}
                  >
                    <FaChevronCircleRight
                      size="2rem"
                      color="orange"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    )
  }
}
