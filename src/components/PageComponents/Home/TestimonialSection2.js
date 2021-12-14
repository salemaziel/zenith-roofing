import React from "react"

import { Avatar } from "../../../images/index"
import { FaStar } from "react-icons/fa"

const TestimonialSection2 = (props) => {
  const items = [
    {
      avatar: `${Avatar}`,
      username: "Frank C.",
      city: "Poway, CA",
      source: "Thumbtack",
      review:
        "Bryan is GREAT!! Exception from start to finish! Easy to deal with. Exceptional quality!",
    },
    {
      avatar: `${Avatar}`,
      username: "Brook G.",
      city: "Carlsbad, CA",
      source: "HomeAdvisor",
      review:
        "Bryan is a true professional. He responded to my request immediately and was at my house the next day to give me a free estimate. His suggestions were spot on and I felt his prices were fair.",
    },
    {
      avatar: `${Avatar}`,
      username: "Carlene Y.",
      city: "Escondido, CA",
      source: "HomeAdvisor",
      review:
        "Bryan was very professional and prompt ! The work was done on time. They were very respectful of my property and cleaned every thing up before leaving.. Would definitely recommend Zenith Roofing Services !",
    },
    {
      avatar: `${Avatar}`,
      username: "Hanh T.",
      city: "Escondido, CA",
      source: "Thumbtack",
      review:
        "Bryan came out the same day to look at my leaking roof. Explained his scope of work and provided a quote in a timely manner. He was super friendly throughout the process.",
    },
    {
      avatar: `${Avatar}`,
      username: "James N.",
      city: "Encinitas, CA",
      source: "HomeAdvisor",
      review:
        "Professional. Responsive. Fair bid. Completed job before other companies even got back to me. Maybe a HomeAdvisor issue? Completed job quickly. No BS or upsell.",
    },
    {
      avatar: `${Avatar}`,
      username: "Connor B.",
      city: "Vista, CA",
      source: "HomeAdvisor",
      review:
        "Brian got back to me incredibly fast. I had to have a roof inspection ASAP to close a real estate transaction. He was on time, courteous and extremely knowledge. I will use him in the future. I would give him 6 stars if I could.",
    },
  ]
  return (
    <section className="py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-lg-8 mx-auto text-center">
            {/*<span className="text-muted">Lorem ipsum</span>*/}
            <h2 className="display-5 fw-bold mt-2 mb-3">
              Lorem ipsum dolor sit amet consectutar domor at elis
            </h2>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
              aliquet orci.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          {items.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
              <div className="p-4 bg-light rounded">
                <p className="lead text-muted mb-5">{item.review}</p>
                <img
                  className="img-fluid mb-3"
                  src={item.avatar}
                  alt
                  style={{ width: 48, height: 48 }}
                />
                <h4 className="fw-bold">{item.username}</h4>
                <p className="text-muted">{item.city}</p>
              </div>
            </div>
          ))}

         {/* <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="p-4 bg-light rounded">
              <p className="lead text-muted mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                dignissim quam ultricies, placerat tellus sed, laoreet orci.
                Duis luctus quam ac metus gravida sodales. Sed a ex accumsan,
                pellentesque sem eget, scelerisque dolor.
              </p>
              <img
                className="img-fluid mb-3"
                src="bootstrap5-plain-assets/images/blue-400-avatar.png"
                alt
                style={{ width: 48, height: 48 }}
              />
              <h4 className="fw-bold">Danny Bailey</h4>
              <p className="text-muted">CEO &amp; Founder</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="p-4 bg-light rounded">
              <p className="lead text-muted mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                dignissim quam ultricies, placerat tellus sed, laoreet orci.
                Duis luctus quam ac metus gravida sodales. Sed a ex accumsan,
                pellentesque sem eget, scelerisque dolor.
              </p>
              <img
                className="img-fluid mb-3"
                src="bootstrap5-plain-assets/images/blue-400-avatar.png"
                alt
                style={{ width: 48, height: 48 }}
              />
              <h4 className="fw-bold">Danny Bailey</h4>
              <p className="text-muted">CEO &amp; Founder</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="p-4 bg-light rounded">
              <p className="lead text-muted mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                dignissim quam ultricies, placerat tellus sed, laoreet orci.
                Duis luctus quam ac metus gravida sodales. Sed a ex accumsan,
                pellentesque sem eget, scelerisque dolor.
              </p>
              <img
                className="img-fluid mb-3"
                src="bootstrap5-plain-assets/images/blue-400-avatar.png"
                alt
                style={{ width: 48, height: 48 }}
              />
              <h4 className="fw-bold">Danny Bailey</h4>
              <p className="text-muted">CEO &amp; Founder</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-md-0">
            <div className="p-4 bg-light rounded">
              <p className="lead text-muted mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                dignissim quam ultricies, placerat tellus sed, laoreet orci.
                Duis luctus quam ac metus gravida sodales. Sed a ex accumsan,
                pellentesque sem eget, scelerisque dolor.
              </p>
              <img
                className="img-fluid mb-3"
                src="bootstrap5-plain-assets/images/blue-400-avatar.png"
                alt
                style={{ width: 48, height: 48 }}
              />
              <h4 className="fw-bold">Danny Bailey</h4>
              <p className="text-muted">CEO &amp; Founder</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="p-4 bg-light rounded">
              <p className="lead text-muted mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                dignissim quam ultricies, placerat tellus sed, laoreet orci.
                Duis luctus quam ac metus gravida sodales. Sed a ex accumsan,
                pellentesque sem eget, scelerisque dolor.
              </p>
              <img
                className="img-fluid mb-3"
                src="bootstrap5-plain-assets/images/blue-400-avatar.png"
                alt
                style={{ width: 48, height: 48 }}
              />
              <h4 className="fw-bold">Danny Bailey</h4>
              <p className="text-muted">CEO &amp; Founder</p>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection2
