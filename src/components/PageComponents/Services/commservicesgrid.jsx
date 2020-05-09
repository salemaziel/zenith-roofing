import React, { Component } from "react"

import { Link } from "gatsby"
import {
  Service14,
  Service15,
  Service16,
  Service17,
  Service18,
  Service19,
} from "../../../images/index"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import CardDeck from 'react-bootstrap/CardDeck'
import serviceStyle from "./services.module.css"

//class CommServicesGrid extends Component {
//    render() {
//    return (
const CommServicesGrid = () => (
  <section className={serviceStyle.ServicesGrid}>
    <Container className={serviceStyle.ContainerServices}>
      {/*<div class="container">*/}
      <Container>
        <Row>
          <Col>
            <h2 style={{ textAlign: "center", margin: '2rem auto', padding: '0 0 5rem' }}>Commercial Services</h2>
          </Col>
        </Row>
        <Row>
          <Col>
          {/*  <ul>
              <CardDeck >
              <li>
                <Card>
                  <Card.Body>
                    <div>
                      <Card.Title>
                        {" "}
                        <h4>Owens Corning</h4>
                      </Card.Title>
                      <Card.Text>
                        <p>
                          Is a system that will warranty your roof for a
                          lifetime, with shingles that can withstand high winds
                          and heavy rains, this will be a system worth
                          installing. Call for more info on this premium
                          warranty!
                        </p>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </li>

              <li>
              <Card>
                  <Card.Body>
                    <div>
                      <Card.Title>
                        {" "}
                  <h4>Thermoplastic polyolefin (TPO)</h4>
                  </Card.Title>
                      <Card.Text>
                  <p>
                    A single ply membrane that is typically used on low slopes
                    roofs. It is a nice clean look and usually comes in white or
                    tan colors. It is an energy efficient membrane because of
                    its ability to reflect (Ultra Violet) UV rays. It will help
                    reduce energy cost and also complies with Title 24
                    requirements.
                    </p>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </li>

              <li>
              <Card>
                  <Card.Body>
                    <div>
                      <Card.Title>
                        {" "}
                  <h4>Polyvinyl Chloride (PVC)</h4>
                  </Card.Title>
                      <Card.Text>
                  <p>
                    A single ply membrane that is typically used on low slopes
                    roofs. Like TPO It is also an energy efficient membrane
                    because of its ability to reflect (Ultra Violet) UV rays. It
                    will help reduce energy cost and also complies with Title 24
                    requirements.
                    </p>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </li>

              <li>
              <Card>
                  <Card.Body>
                    <div>
                      <Card.Title>
                        {" "}
                  <h4>ethylene propylene diene monomer (EPDM)</h4>
                  </Card.Title>
                      <Card.Text>
                  <p>
                    Is a rubber roof that is usually install on smaller low
                    slope areas. It is usually available in black it is long
                    lasting and lightweight. It is able to withstand hail, high
                    winds and fire resistant.
                    </p>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </li>

              <li>
              <Card>
                  <Card.Body>
                    <div>
                      <Card.Title>
                        {" "}
                  <h4>Tile</h4>
                  </Card.Title>
                      <Card.Text>
                  <p>
                    Comes in a variety of shapes styles and colors, from
                    concrete to clay. Whether you would like to reuse your tiles
                    or replace them with new ones this roof system has the
                    capacity to last about 30 years until you will have to
                    install new underlayment (Felt paper).
                    </p>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </li>

              <li>
              <Card>
                  <Card.Body>
                    <div>
                      <Card.Title>
                        {" "}
                  <h4>Shingles</h4>
                  </Card.Title>
                      <Card.Text>
                  <p>
                    Are the most economical choice and come in a variety of
                    colors. Usually last 30-50 years depending on which system
                    you would like to have installed on your roof. It is
                    resistant from high winds and has a nice clean look. The
                    Owens Corning System warranty is by far our best warranty
                    for this system.
                    </p>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </li>

              <li>
              <Card>
                  <Card.Body>
                    <div>
                      <Card.Title>
                        {" "}
                  <h4>Built-up-Roofing BUR:</h4>
                  </Card.Title>
                      <Card.Text>
                  <p>
                    Is commonly used on low sloped roofs. There are different
                    types of BUR such as hot or cold process. It consist of
                    plies of felts that are layered using asphalt, coal tar
                    pitch, or cold applied adhesive. Rolled cap sheet or
                    aggregates are common to layer over to protect the plies
                    from the UV ray and creates a finished membrane.
                    </p>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </li>

              <li>
              <Card>
                  <Card.Body>
                    <div>
                      <Card.Title>
                        {" "}
                  <h4>Roof maintenance</h4>
                  </Card.Title>
                      <Card.Text>
                  <p>
                    It is recommended to perform preventative maintenance to you
                    roof at least every 10 years depending on which system you
                    have. It is also recommended to schedule before the rainy
                    seasons. Cracked sealant, broken tiles, slipped tiles,
                    flashing, or debris can cause premature wear to your roof
                    and can cause for water intrusions in your home. This can
                    lead to extensive damage in your home, business or building.
                    Schedule an appointment to insure you are ahead of the curve
                    and maintain your roof today.
                    </p>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </li>

              <li>
              <Card>
                  <Card.Body>
                    <div>
                      <Card.Title>
                        {" "}
                  <h4>skylight replacement</h4>
                  </Card.Title>
                      <Card.Text>
                  <p>
                    It is recommended to perform preventative maintenance to you
                    roof at least every 10 years depending on which system you
                    have. It is also recommended to schedule before the rainy
                    seasons. Cracked sealant, broken tiles, slipped tiles,
                    flashing, or debris can cause premature wear to your roof
                    and can cause for water intrusions in your home. This can
                    lead to extensive damage in your home, business or building.
                    Schedule an appointment to insure you are ahead of the curve
                    and maintain your roof today.
                    </p>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </li>

              <li>
              <Card>
                  <Card.Body>
                    <div>
                      <Card.Title>
                        {" "}
                  <h4>Roof maintenance</h4>
                  </Card.Title>
                      <Card.Text>
                  <p>
                    It is recommended to perform preventative maintenance to you
                    roof at least every 10 years depending on which system you
                    have. It is also recommended to schedule before the rainy
                    seasons. Cracked sealant, broken tiles, slipped tiles,
                    flashing, or debris can cause premature wear to your roof
                    and can cause for water intrusions in your home. This can
                    lead to extensive damage in your home, business or building.
                    Schedule an appointment to insure you are ahead of the curve
                    and maintain your roof today.
                    </p>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </li>
              </CardDeck>
            </ul> */}
          </Col>
        </Row>
      </Container>


      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          <div className={serviceStyle.ServiceBox} id="Owenscorning">
            <div className={serviceStyle.ServiceImgBox}>
              <img
                  src={Service14}
                  alt="Service"
                  className={serviceStyle.ServiceImg}
              />
            </div>
            <div className="item-content">
              <h3 className={serviceStyle.ServiceTitle}>
                <Link rel="preload" to="">
                  Owens Corning
                </Link>
              </h3>
              <p>
                Is a system that will warranty your roof for a lifetime, with
                shingles that can withstand high winds and heavy rains, this
                will be a system worth installing. Call for more info on this
                premium warranty!
              </p>
              <Link to="" className={serviceStyle.ReadMore}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className={serviceStyle.ServiceBox} id="TPO">
            <div className={serviceStyle.ServiceImgBox}>
              <img
                  src={Service14}
                  alt="Service"
                  className={serviceStyle.ServiceImg}
              />
            </div>
            <div className="item-content">
              <h3 className={serviceStyle.ServiceTitle}>
                <Link rel="preload" to="">
                Thermoplastic polyolefin (TPO)
                </Link>
              </h3>
              <p>
              A single ply membrane that is typically used on low slopes
                    roofs. It is a nice clean look and usually comes in white or
                    tan colors. It is an energy efficient membrane because of
                    its ability to reflect (Ultra Violet) UV rays. It will help
                    reduce energy cost and also complies with Title 24
                    requirements.
              </p>
              <Link rel="preload" to="" className={serviceStyle.ReadMore}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className={serviceStyle.ServiceBox} id="PVC">
            <div className={serviceStyle.ServiceImgBox}>
              <img
                  src={Service14}
                  alt="Service"
                  className={serviceStyle.ServiceImg}
              />
            </div>
            <div className="item-content">
              <h3 className={serviceStyle.ServiceTitle}>
                <Link rel="preload" to="">
                Polyvinyl Chloride (PVC)
                </Link>
              </h3>
              <p>
              A single ply membrane that is typically used on low slopes
                    roofs. Like TPO It is also an energy efficient membrane
                    because of its ability to reflect (Ultra Violet) UV rays. It
                    will help reduce energy cost and also complies with Title 24
                    requirements.
              </p>
              <Link rel="preload" to="" className={serviceStyle.ReadMore}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className={serviceStyle.ServiceBox} id="EPDM">
            <div className={serviceStyle.ServiceImgBox}>
              <img
                  src={Service14}
                  alt="Service"
                  className={serviceStyle.ServiceImg}
              />
            </div>
            <div className="item-content">
              <h3 className={serviceStyle.ServiceTitle}>
                <Link rel="preload" to="">
                 ethylene propylene diene monomer (EPDM)
                </Link>
              </h3>
              <p>
              Is a rubber roof that is usually install on smaller low
                    slope areas. It is usually available in black it is long
                    lasting and lightweight. It is able to withstand hail, high
                    winds and fire resistant.
              </p>
              <Link to="" className={serviceStyle.ReadMore}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className={serviceStyle.ServiceBox} id="Tile">
            <div className={serviceStyle.ServiceImgBox}>
              <img
                  src={Service14}
                  alt="Service"
                  className={serviceStyle.ServiceImg}
              />
            </div>
            <div className="item-content">
              <h3 className={serviceStyle.ServiceTitle}>
                <Link rel="preload" to="">
                Tile
                </Link>
              </h3>
              <p>
              Comes in a variety of shapes styles and colors, from
                    concrete to clay. Whether you would like to reuse your tiles
                    or replace them with new ones this roof system has the
                    capacity to last about 30 years until you will have to
                    install new underlayment (Felt paper).
              </p>
              <Link rel="preload" to="" className={serviceStyle.ReadMore}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className={serviceStyle.ServiceBox} id="Shingles">
            <div className={serviceStyle.ServiceImgBox}>
              <img
                  src={Service14}
                  alt="Service"
                  className={serviceStyle.ServiceImg}
              />
            </div>
            <div className="item-content">
              <h3 className={serviceStyle.ServiceTitle}>
                <Link rel="preload" to="">
                Shingles
                </Link>
              </h3>
              <p>
              Are the most economical choice and come in a variety of
                    colors. Usually last 30-50 years depending on which system
                    you would like to have installed on your roof. It is
                    resistant from high winds and has a nice clean look. The
                    Owens Corning System warranty is by far our best warranty
                    for this system.
              </p>
              <Link to="" className={serviceStyle.ReadMore}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className={serviceStyle.ServiceBox} id="BUR">
            <div className={serviceStyle.ServiceImgBox}>
              <img
                  src={Service14}
                  alt="Service"
                  className={serviceStyle.ServiceImg}
              />
            </div>
            <div className="item-content">
              <h3 className={serviceStyle.ServiceTitle}>
                <Link rel="preload" to="">
                Built-up-Roofing BUR:
                </Link>
              </h3>
              <p>
              Is commonly used on low sloped roofs. There are different
                    types of BUR such as hot or cold process. It consist of
                    plies of felts that are layered using asphalt, coal tar
                    pitch, or cold applied adhesive. Rolled cap sheet or
                    aggregates are common to layer over to protect the plies
                    from the UV ray and creates a finished membrane.
              </p>
              <Link rel="preload" to="" className={serviceStyle.ReadMore}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className={serviceStyle.ServiceBox} id="Roofrepair">
            <div className={serviceStyle.ServiceImgBox}>
              <Link rel="preload" to="">
                <img
                  src={Service14}
                  alt="Service"
                  className={serviceStyle.ServiceImg}
                />
              </Link>
            </div>
            <div className="item-content">
              <h3 className={serviceStyle.ServiceTitle}>
                <Link rel="preload" to="">
                  Roof Repair
                </Link>
              </h3>
              <p>
                Borem Ipsum is simply text of the printing and type setting
                industry. Lorem Ipsum has been standard community area has
                redummy.
              </p>
              <Link rel="preload" to="#" className={serviceStyle.ReadMore}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className={serviceStyle.ServiceBox} id="Skylights">
            <div className={serviceStyle.ServiceImgBox}>
              <Link rel="preload" to="">
                <img
                  src={Service15}
                  alt="Service"
                  className={serviceStyle.ServiceImg}
                />
              </Link>
            </div>
            <div className="item-content">
              <h3 className={serviceStyle.ServiceTitle}>
                <Link rel="preload" to="">
                  SkyLights
                </Link>
              </h3>
              <p>
                Borem Ipsum is simply text of the printing and type setting
                industry. Lorem Ipsum has been standard community area has
                redummy.
              </p>
              <Link rel="preload" to="#" className={serviceStyle.ReadMore}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className={serviceStyle.ServiceBox} id="Solar">
            <div className={serviceStyle.ServiceImgBox}>
              <Link rel="preload" to="">
                <img
                  src={Service16}
                  alt="Service"
                  className={serviceStyle.ServiceImg}
                />
              </Link>
            </div>
            <div className="item-content">
              <h3 className={serviceStyle.ServiceTitle}>
                <Link rel="preload" to="">
                  Solar
                </Link>
              </h3>
              <p>
                Borem Ipsum is simply text of the printing and type setting
                industry. Lorem Ipsum has been standard community area has
                redummy.
              </p>
              <Link rel="preload" to="#" className={serviceStyle.ReadMore}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className={serviceStyle.ServiceBox} id="Restorations">
            <div className={serviceStyle.ServiceImgBox}>
              <Link rel="preload" to="">
                <img
                  src={Service17}
                  alt="Service"
                  className={serviceStyle.ServiceImg}
                />
              </Link>
            </div>
            <div className="item-content">
              <h3 className={serviceStyle.ServiceTitle}>
                <Link rel="preload" to="">
                  Restorations
                </Link>
              </h3>
              <p>
                Borem Ipsum is simply text of the printing and type setting
                industry. Lorem Ipsum has been standard community area has
                redummy.
              </p>
              <Link rel="preload" to="#" className={serviceStyle.ReadMore}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className={serviceStyle.ServiceBox} id="Inspections">
            <div className={serviceStyle.ServiceImgBox}>
              <Link rel="preload" to="">
                <img
                  src={Service18}
                  alt="Service"
                  className={serviceStyle.ServiceImg}
                />
              </Link>
            </div>
            <div className="item-content">
              <h3 className={serviceStyle.ServiceTitle}>
                <Link rel="preload" to="">
                  Inspections
                </Link>
              </h3>
              <p>
                Borem Ipsum is simply text of the printing and type setting
                industry. Lorem Ipsum has been standard community area has
                redummy.
              </p>
              <Link rel="preload" to="#" className={serviceStyle.ReadMore}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className={serviceStyle.ServiceBox} id="Replacement">
            <div className={serviceStyle.ServiceImgBox}>
              <Link rel="preload" to="">
                <img
                  src={Service19}
                  alt="Service"
                  className={serviceStyle.ServiceImg}
                />
              </Link>
            </div>
            <div className="item-content">
              <h3 className={serviceStyle.ServiceTitle}>
                <Link rel="preload" to="">
                  Replacement
                </Link>
              </h3>
              <p>
                Borem Ipsum is simply text of the printing and type setting
                industry. Lorem Ipsum has been standard community area has
                redummy.
              </p>

              <Link rel="preload" to="#" className={serviceStyle.ReadMore}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
            <div className={serviceStyle.ServiceBox}>
              <div className={serviceStyle.ServiceImgBox}>
              <img src={Service14} alt="Service" className={serviceStyle.ServiceImg} />
               
              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                  <Link rel="preload" to="">
                    Roof Replacements
                  </Link>
                </h3>
                <p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>
                <Link rel="preload" to=""
                  className={serviceStyle.ReadMore}
                >
                  LEARN MORE
                  
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className={serviceStyle.ServiceBox}>
              <div className={serviceStyle.ServiceImgBox}>
              <img src={Service14} alt="Service" className={serviceStyle.ServiceImg} />
               
              </div>
              <div className="item-content">
                <h3 className={serviceStyle.ServiceTitle}>
                  <Link rel="preload" to="">
                    Roof Maintenance
                  </Link>
                </h3>
                <p>
                  Borem Ipsum is simply text of the printing and type
                  setting industry. Lorem Ipsum has been standard
                  community area has redummy.
                </p>
                <Link rel="preload" to=""
                  className={serviceStyle.ReadMore}
                >
                  LEARN MORE
                  
                </Link>
              </div>
            </div>
    </div>
      </div>
    </Container>
  </section>
)

export default CommServicesGrid
