import React from "react"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { navigate } from "gatsby"

import estimateformStyles from "./estimateform.module.css"
import Container from "react-bootstrap/Container"

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
    <div className={estimateformStyles.formBox}>
      <Container fluid>
        <div className="item-heading">
          <h3 className={estimateformStyles.title}>Get A Free Estimate</h3>
        </div>

        <Form
          method="post"
          data-netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="bot-field" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <Form.Row>
            <Col>
              <Form.Group controlId="HomeEstimate">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder=""
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="HomeEstimateLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder=""
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group controlId="HomeEstimateEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder=""
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="HomeEstimatePhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="tel"
                  placeholder=""
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Group controlId="HomeEsimateJobType">
            <Form.Label>Job Type</Form.Label>
            <Form.Control as="select">
              <option>Residential</option>
              <option>Commercial</option>
              <option>Contractor</option>
              <option>Realtor</option>
            </Form.Control>
          </Form.Group>

          <Button
            className={estimateformStyles.estimateSubmit}
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  )
}
