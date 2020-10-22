import React, { Component } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import shingleStyle from '../page.module.css'

import { Climbing } from '../../../../images/index'
import SideBar from "../sidebar"


class Section1 extends Component {
  render() {
    return (
      <>


        <section className={shingleStyle.Section}>
          <div className={shingleStyle.sidebarPageContainer}>
            {/*<div className={pageStyle.autoContainer}>*/}
            <Container>
              <SideBar
              Title="Shingles"
              Description="Shingles are the most economical choice and come in a variety of colors. Usually last 30-50 years depending on which system you would like to have installed on your roof. It is resistant from high winds and has a nice clean look. The Owens Corning System warranty is by far our best warranty for this system."
              />
            </Container>
            {/*</div>*/}
          </div>
        </section>
      </>
    )
  }
}

export default Section1
