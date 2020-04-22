import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { navigate } from 'gatsby'

import estimateformStyles from './estimateform.module.css'
import Container from 'react-bootstrap/Container'

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  
  export default function EstimateForm() {
    const [state, setState] = React.useState({})
  
    const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch((error) => alert(error))
    }

      return (
<div className={estimateformStyles.formBox}>
    <Container fluid>
  <div className="item-heading">
    <h3 className={estimateformStyles.title}>Get A Free Estimate</h3>
  </div>

  <Form>
      <Form.Row>
          <Col>
  <Form.Group controlId="EstimateFormFirstName">
    {/*<Form.Label>First Name</Form.Label>*/}
    <Form.Control type="text" placeholder="First Name" />
  </Form.Group>
  </Col>
  <Col>
  <Form.Group controlId="EstimateFormLastName">
   {/* <Form.Label>Last Name</Form.Label>*/}
    <Form.Control type="text" placeholder="Last Name" />
  </Form.Group>
  </Col>
  </Form.Row>

  <Form.Row>
  <Col>
  <Form.Group controlId="EstimateFormEmail">
  {/*  <Form.Label>Email address</Form.Label>*/}
    <Form.Control type="email" placeholder="Email Address" />
  </Form.Group>
  </Col>

  <Col>
  <Form.Group controlId="EstimateFormPhone">
   {/* <Form.Label>Phone</Form.Label>*/}
    <Form.Control type="tel" placeholder="Phone Number" />
  </Form.Group>
  </Col>
  </Form.Row>

  <Form.Group controlId="EsimateFormJobType">
    <Form.Label>Job Type</Form.Label>
    <Form.Control as="select">
      <option>Residential</option>
      <option>Commercial</option>
      <option>Contractor</option>
      <option>Realtor</option>
    </Form.Control>
  </Form.Group>

  <Button variant="primary" className={estimateformStyles.estimateSubmit} type="submit" onClick={handleSubmit}>
    Submit
  </Button>

  </Form>
  </Container>
</div>

)
}