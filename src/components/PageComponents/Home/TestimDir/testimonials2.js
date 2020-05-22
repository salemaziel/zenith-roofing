import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Card from "react-bootstrap/Card"
import Media from "react-bootstrap/Media"

import { Avatar } from "../../../../images/index"

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

class Testimonials2 extends React.Component {
  render() {
    const settings = {
      dots: false,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "3px",
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
          <div className="">
            <Card className={testimonialStyle.CardStyle}>
              <Card.Body>
                <Media>
                  <Card.Img
                    variant="bottom"
                    src={Avatar}
                    className={testimonialStyle.cardImg}
                    alt="Reviewer Profile Pic"
                  />
                  <Card.Title>Fred B. in San Diego, CA</Card.Title>
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
          <div className="">
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
          </div>
          <div className="">
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
          </div>
          <div className="">
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
          </div>
          <div className="">
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
          </div>
          <div className="">
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
          </div>
        </Slider>
      </>
    )
  }
}

export default Testimonials2
