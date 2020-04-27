import React from "react"
//import Form from "react-bootstrap/Form"
//import Col from "react-bootstrap/Col"
//import Button from "react-bootstrap/Button"
//import { navigate } from "gatsby"

import estimateformStyles from "./estimateform.module.css"
import Container from "react-bootstrap/Container"

const EstimateForm2 = (props) => (
  <div className={estimateformStyles.formBox}>
         <Container fluid>
        <div className="item-heading">
          <h3 className={estimateformStyles.title}>Get A Free Estimate</h3>
        </div>
    {" "} 
      <section>
        <form
          name="contact"
          method="post"
          action="/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />

          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" required></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section>

    </Container>
</div>
)

export default EstimateForm2
