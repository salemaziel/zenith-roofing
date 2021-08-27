import React from "react"

import Header from "./Header"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

//import cityPageStyle from '../Services/page.module.css'
//import cityStyle from './cityPage.module.css'

import { AboutBody } from "../Services/page.module.css"
import { article, gMap } from "./cityPage.module.css"

//import GMaps from '../../gMaps'

import CityPicsSlider from "./cityPicsSlider"
import ActionBanner from "../../actionBanner"

//import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';



/*
const containerStyle = {
    width: 'auto',
    height: '600px'
  };
  
  const center = {
    lat: 33.1258211,
    lng: -117.0751905,
  };
  
  const position1 = {
      lat: 33.1274971,
      lng: -117.0781394,
  }
  
  const position2 = {
      lat: 33.1211559,
      lng: -117.0878358,
  }



  function GMaps(props) {
    return (
        <>
  
      <LoadScript
        googleMapsApiKey={process.env.GATSBY_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
        >
            <Marker
            position={position2}
  
            />
          { /* Child components, such as markers, info windows, etc. * / }
          <></>
        </GoogleMap>
      </LoadScript>
      </>
    )
  }


*/

const CityPage = (props) => {
  return (
    <>
      <Header bannerTitle={props.bannerTitle} />

      <div className={AboutBody}>
        <section id="" className="py-5 py-lg-3">
          <Container className="pt-5 pb-1 ">
            <Row className="justify-content-center text-lg-center pb-5">
              <Col>
                <div className="text-center">
                  {/*<h1 className="">
                                    {props.cityName}
                                </h1>
    <br />*/}
                  <h2 className="">{props.subDescription}</h2>
                </div>
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
                <article className={article}>
                  <div className="">
                    <p className="">{props.article1}</p>
                    <p className="">{props.article2}</p>
                    <p className="">{props.article3}</p>
                    <p className="">{props.article4}</p>
                  </div>
                </article>
              </Col>
            </Row>
          </Container>
        </section>

        <CityPicsSlider
          gallery1={props.gallery1}
          gallery2={props.gallery2}
          gallery3={props.gallery3}
          gallery4={props.gallery4}
          gallery5={props.gallery5}
          gallery6={props.gallery6}
        />

        {/*</div>
          </div>
            </div>*/}

        <section>
          <Container>
            <Row className="justify-content-center text-left">
              <Col xs={12} lg={4}>
                {/*<GgMaps />*/}
                <iframe
                  src={props.iframeURL}
                  width="auto"
                  height=""
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title={props.iframeTitle}
                  sameSite="Secure"
                  className={gMap}
                />
              </Col>
              <Col>
                {/*<article className={cityStyle.article}>
                                <div className="">
                                    <p className="">
                                        {props.article1}
                                    </p>
                                    <p className="">
                                        {props.article2}
                                    </p>
                                    <p className="">
                                        {props.article3}
                                    </p>
                                    <p className="">
                                        {props.article4}
                                    </p>
                                    <p className="">
                                        {props.article5}
                                    </p>
                                    <p className="">
                                        {props.article6}
                                    </p>
                                </div>

</article>*/}
                <article className={article}>
                  <h3 className="text-center">
                    Zenith Roofing Services Offered:
                    {props.s2Title}
                  </h3>
                  <p className="">
                    We are proud to offer a wide variety of services for roofing
                    in {props.cityState}. Of the many services we offer, you can
                    choose to work with our contractors on:
                  </p>
                  <ul className="">
                    <li className="">
                      <strong>Roof Inspections</strong> — Not sure how much life
                      your roof has left in it? Schedule an inspection with one
                      of our local experts. We'll give you a full update on
                      damage, lifespan, and next steps for repair or
                      replacement.
                    </li>
                    <li className="">
                      <strong>Maintenance</strong> — Keep your roof in tip-top
                      shape with annual maintenance appointments. Our
                      technicians can clean out gutters, remove debris, and
                      ensure your draining system is working correctly.
                    </li>
                    <li className="">
                      <strong>Roof Replacement</strong> — Sometimes, you need to
                      replace the whole roof to preserve the integrity of your
                      home. We can offer reasonable pricing, great timelines,
                      and reliable results.
                    </li>
                    <li className="">
                      <strong>Roof Restorations</strong> — Need to restore part
                      of your roof, but not ready for a full replacement? We can
                      do partial repairs and restorations to get your roof back
                      in tip-top shape.
                    </li>
                  </ul>
                </article>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="my-5 my-lg-3 mx-auto py-3">
          <Container>
            <Row>
              <Col xs={12} lg={8}>
                <article className={article}>
                  <h3 className="text-center">
                    Work with the Best
                    {props.s3Title}
                  </h3>

                  <p className="">{props.textArea2}</p>
                  <p className="">{props.textArea3}</p>
                  <p className="">{props.textArea4}</p>
                  <p className="">{props.textArea5}</p>
                </article>
              </Col>

              <Col>
                <figure>
                  <img
                    src={props.cityPic}
                    alt={props.cityPicAlt}
                    className="w-100"
                  />
                </figure>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="my-5 my-lg-3 mx-auto py-3">
          <Container>
            <Row>
              <Col xs={12} md={4}>
                <figure>
                  <img
                    src={props.cityPic2}
                    alt={props.cityPic2Alt}
                    className="w-100"
                  />
                </figure>
              </Col>

              <Col>
                <article className={article}>
                  <h3 className="text-center">Materials We Work With:</h3>
                  <p className="">
                    Our roofers in {props.cityName} work with the following
                    materials. We are happy to speak with you about the best
                    materials for your home in {props.cityState}.
                  </p>
                  <Row>
                    <Col>
                      <ul className="list-style-disc">
                        <li className="">
                          <strong>Built-Up Roofing</strong>
                        </li>
                        <li className="">
                          <strong>Ethyl Propylene Diene Monomer (EPDM)</strong>
                        </li>

                        <li className="">
                          <strong>Owen's Corning</strong>
                        </li>
                        <li className="">
                          <strong>Polyvinyl Chloride (PVC)</strong>
                        </li>
                      </ul>
                    </Col>
                    <Col>
                      <ul className="">
                        <li className="">
                          <strong>Shingles</strong>
                        </li>

                        <li className="">
                          <strong>Skylights</strong>
                        </li>
                        <li className="">
                          <strong>Solar</strong>
                        </li>
                        <li className="">
                          <strong>Thermoplastic Polyolefin (TPO)</strong>
                        </li>
                        <li className="">
                          <strong>Tile</strong>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </article>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="my-5 py-5">
          <Container>
            <Row>
              <Col>
                <article className={article}>
                  <h3 className="text-center mb-5">
                    Your Local Roofers in North County San Diego
                  </h3>
                  <p className="">
                    When you need roofing in {props.cityName}, Zenith Roofing
                    Services makes sure to do the job right the first time. We
                    always keep professionalism, timeliness, and customer
                    experience at the heart of everything we do. 
                  </p>
                  <p className="">
                    We hope to build and maintain lifelong relationships with
                    every one of our clients. It's why we provide nothing less
                    than high-quality roofs and repairs that last. 
                  </p>
                  <p className="">
                    Get an estimate by clicking the button below or by calling
                    our office at <a href="tel:8589006163">(858) 900-6163</a> at
                    your earliest convenience. We look forward to hearing from
                    you!
                  </p>
                </article>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      <ActionBanner />
    </>
  )
}

export default CityPage
