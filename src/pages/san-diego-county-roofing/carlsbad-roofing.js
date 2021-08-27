import React from 'react'
import Layout from '../../components/layout'
import CityPage from '../../components/PageComponents/CityPages/CityPage'

import { RooferOnSlant, OwensPreferred, Solar } from "../../images/index"

import {  Helmet } from 'react-helmet'
import {
    Carlsbad11,
    Carlsbad2,
    Carlsbad3,
    Carlsbad4,
    Carlsbad5,
    Carlsbad6,
  } from "../../images/index"

const Carlsbad = () => (
    <Layout>
        <Helmet title={'Carlsbad Roof Repair & Roof Replacement Services'} />

        <CityPage
        iframeURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106928.8846635975!2d-117.35784204782998!3d33.12149995902835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc73453f3bee59%3A0xa4cb5592fcf65d2f!2sCarlsbad%2C%20CA!5e0!3m2!1sen!2sus!4v1611901951874!5m2!1sen!2sus"
        bannerTitle="Carlsbad Roofing Specialists"
        cityName="Carlsbad"
        cityState="Carlsbad, California"
        subDescription="Commercial and Residential Roofing in Carlsbad, California"
        article1="Without a roof, a house is just four walls. It's what keeps you safe, dry, and protected from the outside elements. You don't want to trust your roofing in Carlsbad, California, to just anyone. Our roofers in North County San Diego are experts in installing, repairing, and replacing roofs. With our years of experience on the job, we create the safest, most secure, and aesthetically pleasing homes."
        article2="Whether you need an inspection, maintenance, or a new roof installation, don't work with anyone but the best."
        article3=" "
        article4=""
        article5=""
        article6=""
        textArea2="You work with only the best roofers in Carlsbad when you choose Zenith Roofing Services. Not only do we have years of experience in your local area, but we are also one of the few roofers in North County San Diego to receive recognition as an Owens Corning Preferred Contractor."
        textArea3="To meet this qualification, roofers must be members of the Owens Corning Contracting Network. The company must carry all required licenses and permits and hold a business rating that is satisfactory to the Owens Corning brand."
        textArea4="If you'd like an Owen's Corning Roof, Zenith Roofing Services is your go-to contractor."
        textArea5=""
        cityPic={OwensPreferred}
        cityPicAlt="Roofing in Carlsbad California"
        cityPic2={Solar}
        cityPic2Alt="Roofing in Carlsbad, California"
        cityPic3={RooferOnSlant}
        cityPic3Alt="Roofing in Carlsbad California"
        gallery1={Carlsbad11}
        gallery2={Carlsbad2}
        gallery3={Carlsbad3}
        gallery4={Carlsbad4}
        gallery5={Carlsbad5}
        gallery6={Carlsbad6}
        
        
        />

    </Layout>
)

export default Carlsbad