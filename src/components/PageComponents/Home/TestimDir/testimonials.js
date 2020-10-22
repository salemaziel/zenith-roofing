import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Card from "react-bootstrap/Card"
import Media from "react-bootstrap/Media"
import Col from "react-bootstrap/Col"

import { Avatar } from "../../../../images/index"



import {
  FaStar
} from 'react-icons/fa'

import testimonialStyle from "./testimonial.module.css"
import Slider from "react-slick"

/*const testimonies = [
  {
    Review:
      "We had 5 or 6 contractors come out over a 2 year period, that gave us quotes ranging from $900 to $7000. When we finally made a decision on a company (Protecta Roofing, estimate $1500), they didn't show up on the scheduled day, then called me a week later (when it was raining) and asked if they could come out that day to do the work. We immediately hired a 2nd company (SRS Roofing, estimate $1900), who called me the day after they were scheduled to do the work, and told me that the quote was too low and that they would send me a new quote, but never did. I was ready to give up on Angie's List all together because the contractors seem so flaky. When we got Zenith out to do a quote, I was very pleased with Bryan's knowledge, explanations, timeline and quote ($1100). He got to work a couple days later (in between rain), he cleaned the roof and sealed it, and provided us with a 2 year warranty. I highly recommend Zenith for a no bull, well done job.",
    Reviewer: "Denise G.",
    Avatar: "",
    Source: "Angies List",
    SourceIcon: "",
    SourceLink: "https://www.angieslist.com/companylist/san-diego/roofing.htm",
  },
  {
    Review:
      "We had 5 or 6 contractors come out over a 2 year period, that gave us quotes ranging from $900 to $7000. When we finally made a decision on a company (Protecta Roofing, estimate $1500), they didn't show up on the scheduled day, then called me a week later (when it was raining) and asked if they could come out that day to do the work. We immediately hired a 2nd company (SRS Roofing, estimate $1900), who called me the day after they were scheduled to do the work, and told me that the quote was too low and that they would send me a new quote, but never did. I was ready to give up on Angie's List all together because the contractors seem so flaky. When we got Zenith out to do a quote, I was very pleased with Bryan's knowledge, explanations, timeline and quote ($1100). He got to work a couple days later (in between rain), he cleaned the roof and sealed it, and provided us with a 2 year warranty. I highly recommend Zenith for a no bull, well done job.",
    Reviewer: "Denise G.",
    Avatar: "",
    Source: "Angies List",
    SourceIcon: "",
    SourceLink: "https://www.angieslist.com/companylist/san-diego/roofing.htm",
  },
]*/

class Testimonials extends React.Component {
  render() {
    const settings = {
      dots: false,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "10px",
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }

    return (
      <>
        <Slider {...settings}>
          <div className={testimonialStyle.CardOutline}>
            <Card className={testimonialStyle.CardStyle}>
              <Card.Body>
                <Media>
                  {/* <Card.Img 
                  
                    variant="bottom" */}
                  <img
                    src={Avatar}
                    className={testimonialStyle.cardImg}
                    alt="Reviewer Profile Pic"
                  />
                  <Col>
                    <Card.Title>Fred B. in San Diego, CA</Card.Title>
                    <Card.Subtitle>HomeAdvisor</Card.Subtitle>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "5px 0px",
                        color: "orange",
                      }}
                    >
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>{" "}
                  </Col>
                </Media>

                <Card.Text>
                  I had a roof leak and Bryan from Zenith came right out and we
                  agreed to replace the under layment on the half of the roof
                  was leaking. They were prompt and quick and finished the job
                  in one before it rained again. They even reset my gutters that
                  were leaking without me asking them to do that. No leaks now,
                  prompt service and quality job along with the clean up. And
                  all at a very reasonable price. I highly recommend them like a
                  neighbor did for me.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className={testimonialStyle.CardOutline}>
            <Card className={testimonialStyle.CardStyle}>
              <Card.Body>
                <Media>
                  {/*   <Card.Img
                    variant="bottom" */}
                  <img
                    src={Avatar}
                    className={testimonialStyle.cardImg}
                    alt="Reviewer Profile Pic"
                  />
                  <Col>
                    <Card.Title>Frank C. in Poway, CA</Card.Title>
                    <Card.Subtitle>HomeAdvisor</Card.Subtitle>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "5px 0px",
                        color: "orange",
                      }}
                    >
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </Col>
                </Media>

                <Card.Text>
                  Bryan is GREAT!! Exception from start to finish! Easy to deal
                  with. Exceptional quality!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className={testimonialStyle.CardOutline}>
            <Card className={testimonialStyle.CardStyle}>
              <Card.Body>
                <Media>
                  {/*   <Card.Img
                    variant="bottom" */}
                  <img
                    src={Avatar}
                    className={testimonialStyle.cardImg}
                    alt="Reviewer Profile Pic"
                  />
                  <Col>
                    <Card.Title>Brooke G. in Carlsbad, CA</Card.Title>
                    <Card.Subtitle>HomeAdvisor</Card.Subtitle>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "5px 0px",
                        color: "orange",
                      }}
                    >
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </Col>
                </Media>

                <Card.Text>
                Bryan is a true professional. He responded to my request immediately and was at my house the next day to give me a free estimate. His suggestions were spot on and I felt his prices were fair.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className={testimonialStyle.CardOutline}>
            <Card className={testimonialStyle.CardStyle}>
              <Card.Body>
                <Media>
                  {/*   <Card.Img
                    variant="bottom" */}
                  <img
                    src={Avatar}
                    className={testimonialStyle.cardImg}
                    alt="Reviewer Profile Pic"
                  />
                  <Col>
                    <Card.Title>Hanh T. in Escondido, CA</Card.Title>
                    <Card.Subtitle>Thumbtack</Card.Subtitle>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "5px 0px",
                        color: "orange",
                      }}
                    >
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </Col>
                </Media>

                <Card.Text>
                Bryan came out the same day to look at my leaking roof. Explained his scope of work and provided a quote in a timely manner. He was super friendly throughout the process.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className={testimonialStyle.CardOutline}>
            <Card className={testimonialStyle.CardStyle}>
              <Card.Body>
                <Media>
                  {/*   <Card.Img
                    variant="bottom" */}
                  <img
                    src={Avatar}
                    className={testimonialStyle.cardImg}
                    alt="Reviewer Profile Pic"
                  />
                  <Col>
                    <Card.Title>James N. in Encinitas, CA</Card.Title>
                    <Card.Subtitle>HomeAdvisor</Card.Subtitle>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "5px 0px",
                        color: "orange",
                      }}
                    >
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </Col>
                </Media>

                <Card.Text>
                Professional. Responsive. Fair bid. Completed job before other companies even got back to me. Maybe a HomeAdvisor issue? Completed job quickly. No BS or upsell.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className={testimonialStyle.CardOutline}>
            <Card className={testimonialStyle.CardStyle}>
              <Card.Body>
                <Media>
                  {/*   <Card.Img
                    variant="bottom" */}
                  <img
                    src={Avatar}
                    className={testimonialStyle.cardImg}
                    alt="Reviewer Profile Pic"
                  />
                  <Col>
                    <Card.Title>Connor B. in Vista, CA</Card.Title>
                    <Card.Subtitle>HomeAdvisor</Card.Subtitle>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "5px 0px",
                        color: "orange",
                      }}
                    >
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </Col>
                </Media>

                <Card.Text>
                Brian got back to me incredibly fast. I had to have a roof inspection ASAP to close a real estate transaction. He was on time, courteous and extremely knowledge. I will use him in the future. I would give him 6 stars if I could.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className={testimonialStyle.CardOutline}>
            <Card className={testimonialStyle.CardStyle}>
              <Card.Body>
                <Media>
                  {/*   <Card.Img
                    variant="bottom" */}
                  <img
                    src={Avatar}
                    className={testimonialStyle.cardImg}
                    alt="Reviewer Profile Pic"
                  />
                  <Col>
                    <Card.Title>Carlene Y. in Escondido, CA</Card.Title>
                    <Card.Subtitle>HomeAdvisor</Card.Subtitle>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "5px 0px",
                        color: "orange",
                      }}
                    >
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </Col>
                </Media>

                <Card.Text>
                Bryan was very professional and prompt ! The work was done on time. They were very respectful of my property and cleaned every thing up before leaving.. Would definitely recommend Zenith Roofing Services !
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className={testimonialStyle.CardOutline}>
            <Card className={testimonialStyle.CardStyle}>
              <Card.Body>
                <Media>
                  {/*   <Card.Img
                    variant="bottom" */}
                  <img
                    src={Avatar}
                    className={testimonialStyle.cardImg}
                    alt="Reviewer Profile Pic"
                  />
                  <Col>
                    <Card.Title>Cindy R in Escondido, CA</Card.Title>
                    <Card.Subtitle>Thumbtack</Card.Subtitle>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "5px 0px",
                        color: "orange",
                      }}
                    >
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </Col>
                </Media>

                <Card.Text>
                Bryan was punctual, professional and very responsive. The price was reasonable and he really exceeded our expectations. I would definitely use them again.

                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/*      <div className={testimonialStyle.CardOutline}>
            <Card className={testimonialStyle.CardStyle}>
              <Card.Body>
                <Media>
                  <Card.Img
                    variant="bottom"
                    src={Avatar}
                    className={testimonialStyle.cardImg}
                    alt="Reviewer Profile Pic"
                  />

                  <Card.Title>Deborah J.</Card.Title>
                </Media>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div> */}
          {/*        <div className={testimonialStyle.CardOutline}>
            <Card className={testimonialStyle.CardStyle}>
              <Card.Body>
                <Media>
                  <Card.Img
                    variant="bottom"
                    src={Avatar}
                    className={testimonialStyle.cardImg}
                    alt="Reviewer Profile Pic"
                  />

                  <Card.Title>Deborah J.</Card.Title>
                </Media>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div> */}
          {/*     <div className={testimonialStyle.CardOutline}>
            <Card className={testimonialStyle.CardStyle}>
              <Card.Body>
                <Media>
                  <Card.Img
                    variant="bottom"
                    src={Avatar}
                    className={testimonialStyle.cardImg}
                    alt="Reviewer Profile Pic"
                  />

                  <Card.Title>Deborah J.</Card.Title>
                </Media>

                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div> */}
          {/*   <div className={testimonialStyle.CardOutline}>
            <Card className={testimonialStyle.CardStyle}>
              <Card.Body>
                <Media>
                  <Card.Img
                    variant="bottom"
                    src={Avatar}
                    className={testimonialStyle.cardImg}
                    alt="Reviewer Profile Pic"
                  />

                  <Card.Title>Deborah J.</Card.Title>
                </Media>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>*/}
        </Slider>
      </>
    )
  }
}

export default Testimonials
