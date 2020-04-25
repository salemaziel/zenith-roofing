import React from "react"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { navigate } from "gatsby"

import estimateformStyles from "./estimateform.module.css"
import Container from "react-bootstrap/Container"

/*
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
*/
/*export default function EstimateForm() {
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

  return ( */
const EstimateForm = (props) => (
  <>
  <div className={estimateformStyles.formBox}>
    <Container fluid>
      <div className="item-heading">
        <h3 className={estimateformStyles.title}>Get A Free Estimate</h3>
      </div>
      <Form>
        <form
          name="EstimateForm2"
          method="post"
          action="/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <Form.Row>
            <Col>
              <Form.Group>
                <label htmlFor="name">First Name</label>
                <input type="text" name="firstname" id="firstname" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <label htmlFor="name">Last Name</label>
                <input type="text" name="lastname" id="lastname" required />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group>
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
              <label htmlFor="tel">Phone</label>
                  <input type="tel" name="phone" id="phone" required />
              </Form.Group>
            </Col>
          </Form.Row>


          <Button
            className={estimateformStyles.estimateSubmit}
          >
             Submit
            <input type="submit" value="" />
           
          </Button>
        </form>
      </Form>
    </Container>
  </div>
  </>
)

export default EstimateForm
