import React from "react"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from "gatsby"

import ActionBanner from "../components/actionBanner"

import { blogPostBG } from "./blogPost.module.css"
import Button from "react-bootstrap/Button"

const BlogPostTemplate = (props) => (
  <>
    <section className={blogPostBG}>
      <Container className="py-5">
        <Row className="justify-content-start">
        <Col xs={12} lg={8}>
          
          </Col>
        </Row>
        <Row className="justify-content-center py-5">
          <Col xs={12} lg={8}>
            <Image
              src={props.blogImage}
              alt={props.blogPostName}
              fluid
              className="pt-5"
            />
          </Col>
        </Row>

        <Row className="justify-content-center pb-5">
          <Col>
            <h1>{props.blogPostName}</h1>
          </Col>
        </Row>

        <Row className="justify-content-center pb-5">
          <Col>
            <p>{props.blogPostBody}</p>
          </Col>
        </Row>
        <Row className="py-5">
          <Col>
        <Button as={Link} to="/blog/" className="px-4 py-2" style={{backgroundColor: '#ff9900', borderColor: '#ff9900', fontSize: '20px', fontWeight: '700', textShadow: '1px 1px 2px black'}}>Back to Blog</Button>
        </Col>
        </Row>
      </Container>

      <ActionBanner />
    </section>
  </>
)

export default BlogPostTemplate
