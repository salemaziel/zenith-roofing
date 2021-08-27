import React from 'react'
import Layout from '../../components/layout'
import CityPage from '../../components/PageComponents/CityPages/CityPage'

import { RooferOnSlant, OwensPreferred, Solar } from "../../images/index"
import {  Helmet } from 'react-helmet'
/*import {
    Oceanside11,
    Oceanside2,
    Oceanside3,
    Oceanside4,
    Oceanside5,
    Oceanside6,
  } from "../../images/index"
  */


const Oceanside = () => (
    <Layout>
                <Helmet title={'Oceanside Roof Repair & Roof Replacement Service'} />

        <CityPage
        iframeURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106801.52160796218!2d-117.3875816479452!3d33.22595592766106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc655e605b7705%3A0x19ecb3f398f9f87!2sOceanside%2C%20CA!5e0!3m2!1sen!2sus!4v1612262413646!5m2!1sen!2sus"
        bannerTitle="Oceanside Roofing Specialists"
        cityName="Oceanside"
        cityState="Oceanside, California"
        subDescription="Commercial and Residential Roofing in Oceanside, California"
        article1="Without a roof, a house is just four walls. It's what keeps you safe, dry, and protected from the outside elements. You don't want to trust your roofing in Oceanside, California, to just anyone. Our roofers in North County San Diego are experts in installing, repairing, and replacing roofs. With our years of experience on the job, we create the safest, most secure, and aesthetically pleasing homes."
        article2="Whether you need an inspection, maintenance, or a new roof installation, don't work with anyone but the best."
        article3=" "
        article4=""
        article5=""
        article6=""
        textArea2="You work with only the best roofers in Oceanside when you choose Zenith Roofing Services. Not only do we have years of experience in your local area, but we are also one of the few roofers in North County San Diego to receive recognition as an Owens Corning Preferred Contractor."
        textArea3="To meet this qualification, roofers must be members of the Owens Corning Contracting Network. The company must carry all required licenses and permits and hold a business rating that is satisfactory to the Owens Corning brand."
        textArea4="If you'd like an Owen's-Corning Roof, Zenith Roofing Services is your go-to contractor."
        textArea5=""
        cityPic={OwensPreferred}
        cityPicAlt="Roofing in Oceanside California"
        cityPic2={Solar}
        cityPic2Alt="Roofing in Oceanside California"
        cityPic3={RooferOnSlant}
        cityPic3Alt="Roofing in Oceanside California"
        gallery1=""
        gallery2=""
        gallery3=""
        gallery4=""
        gallery5=""
        gallery6=""
        
        
        />

    </Layout>
)

export default Oceanside