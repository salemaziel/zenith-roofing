import React from "react"
import {  Helmet } from 'react-helmet'

import Layout from "../components/layout"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
  <Helmet title={'404 Page'} />   
  <Container>
    <Row>
      <Col />
      <Col>

   <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

    </Col>
    <Col />

    </Row>
    </Container>
  </Layout>
)

export default NotFoundPage
