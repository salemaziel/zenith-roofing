import React from 'react'

import Header from '../Services/Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import cityPageStyle from '../Services/page.module.css'
import cityStyle from './cityPage.module.css'
//import GMaps from '../../gMaps'

import ActionBanner from '../../actionBanner'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';







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
        googleMapsApiKey="AIzaSyCla58vpy3VE1Y72g5ONm3DEP5R5o_pRe0"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
        >
            <Marker
            position={position2}
  
            />
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
      </>
    )
  }




const CityPage = (props) => {
    let cityName={cityName}
    return(
        <>
          <Header service={props.cityName} />

          <div className={cityPageStyle.AboutBody} >
            <section id="" className="py-5">
                <Container className="py-5">
                    <Row className="justify-content-center text-left">
                        <Col>
                            <GMaps />
                        </Col>
                        <Col>
                            <div className="text-center">
                                <h1 className="">
                                    {props.cityName}
                                </h1>
                                <br />
                                <h2 className="">
                                    {props.subDescription}
                                </h2>
                            </div>
                            <article className={cityStyle.article}>
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