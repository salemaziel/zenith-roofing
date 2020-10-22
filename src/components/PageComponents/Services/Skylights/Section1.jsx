import React, { Component } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import skylightStyle from '../page.module.css'

import { Climbing } from '../../../../images/index'
import SideBar from "../sidebar"


class Section1 extends Component {
  render() {
    return (
      <>


        <section className={skylightStyle.Section}>
          <div className={skylightStyle.sidebarPageContainer}>
            {/*<div className={pageStyle.autoContainer}>*/}
            <Container>
              <SideBar
              Title="Skylights"
              Description="Skylights wear and have an estimated life expectancy of about 15 years depending on which kind of skylight you have installed. There are different options of skylight whether it is a custom size or traditional. They come in acrylic, glass, and even Low-E glass. Operable skylights are available upon request. Schedule an inspection and see if your skylight is a standard size."
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
