import React from "react"
import Form from "react-bootstrap/Form"
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { navigate } from "gatsby"

import estimateformStyles from "./estimateform.module.css"
import Container from "react-bootstrap/Container"

///const EstimateForm = (props) => (

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function EstimateForm() {
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
    <>
      <div className={estimateformStyles.formBox}>
        <Container fluid>
          <div className="item-heading">
            <h3 className={estimateformStyles.title}>Get A Free Estimate</h3>
          </div>
          <form
            name="EstimateForm"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="EstimateForm" />

            <Form.Row>
              <Col>
                <Form.Group>
                  <label style={{display: 'none'}} htmlFor="name">First Name</label>
                  <input type="text" name="firstname" id="firstname" placeholder="First Name" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <label htmlFor="name" style={{display: 'none'}} >Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    required
                    onClick={handleChange}
                  />
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col>
                <Form.Group>
                  <label htmlFor="email" style={{display: 'none'}}>Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <label htmlFor="tel" style={{display: 'none'}}>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col>
            <Form.Group>
                  <label htmlFor="streetname" style={{display: 'none'}}>Street Address</label>
                  <input
                    type="text"
                    name="streetname"
                    id="streetname"
                    placeholder="123 Your Street"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row>
              <Col>
            <Form.Group>
                  <label htmlFor="city" style={{display: 'none'}}>City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                </Col>
                <Col xs={2}>
            <Form.Group>
                  <label htmlFor="state" style={{display: 'none'}}>State</label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value="CA"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                </Col>
                <Col>
            <Form.Group>
                  <label htmlFor="address" style={{display: 'none'}}>Zip Code</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    placeholder="Zip Code"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                </Col>
            </Form.Row>

            <Form.Group>
              <ul className="actions">
                <li>
                  <Button
                    type="submit"
                    value="Send Message"
                    className="special"
                    className={estimateformStyles.estimateSubmit}
                    onChange={handleSubmit}
                  >
                    Submit{" "}
                  </Button>
                </li>
              </ul>
            </Form.Group>
          </form>
        </Container>
      </div>
    </>
  )
}
