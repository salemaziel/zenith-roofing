import React from "react"
import { navigate } from "gatsby-link"
import "./contact.css"

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"

import ContactHeader from "./contactheader"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function ContactPage() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error))
  }

  return (
    <div>

      <ContactHeader />
      <section className="section-contact">
        <div className="container py-5">
          <div
            className="row pb-5"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <div className="col-12 col-md-8">
              {/* Form */}
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/success"
              >
                <div
                  className="row mt-5 mb-4"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={handleChange} />
                    </label>
                  </p>
                  <div className="col-12">
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder="Your Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Your Phone"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  <div className="col-12">
                    <button
                      type="submit"
                      className="form button"
                      onChange={handleSubmit}
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </form>
              {/* End Form */}
            </div>
            <div className="col-12 col-md-4 mb-5 mb-md-0 mt-5 mt-md-0">
              <aside className="pb-md-5">
                <div className="contact_info">
                  {/**<p className="mb-2">Phone</p>
                                                <p className="mb-2"><a href="tel:#">760-555-5555</a></p>**/}
                  <h4 className="mb-2">Email</h4>
                  <p className="mb-2">
                    <a href="mailto:admin@zenithroofingca.com">
                    admin@zenithroofingca.com
                    </a>
                  </p>
                </div>
                <div className="contact_info">
                  {/**<p className="mb-2">Phone</p>
                                                <p className="mb-2"><a href="tel:#">760-555-5555</a></p>**/}
                  <h4 className="mb-2">Phone</h4>
                  <p className="mb-2">
                    <a href="tel:8589006163">
                    (858) 900-6163
                    </a>
                  </p>
                </div>
                <div className="contact_info">
                <div className="mb-2 pb-3">
                <h4 className="followus">Follow Us</h4>

                  <a href="https://www.facebook.com/zenithroofingservicesca/" target="_blank" rel="noreferrer noopener">
                    <FaFacebook size="2rem" color="blue"/>
                  </a>
                  <a href="https://www.instagram.com/zenithroofingservices_ca/"                 target="_blank" rel="noreferrer noopener">
                    <FaInstagram size="2rem" color="purple" />
                  </a>
                  <a href="https://www.youtube.com/channel/UC4XWWL-_WfuIrokcD3KkuFQ/videos" target="_blank" rel="noreferrer noopener">
                <FaYoutube size="2rem" color="red"
                />
              </a>{" "}
              </div>
                </div>
                <div className="contact_info">
                  <div className="py-3">
                  <h4 className="mb-2">Main Office:</h4>
                  <p className="mb-2">
                    1537 Simpson Way <br />
                    Escondido, CA 92029
                  </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
