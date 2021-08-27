import React from "react"

import Header from "../CityPages/Header"

import { pricingAboutBody } from "../Services/page.module.css"
//import cityStyle from './cityPage.module.css'
//import GMaps from '../../gMaps'

import ActionBanner from "../../actionBanner"

//import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const PricingPage = (props) => {
  return (
    <>
      <Header bannerTitle={props.bannerTitle} />

      <div className={pricingAboutBody}></div>

      <ActionBanner />
    </>
  )
}

export default PricingPage
