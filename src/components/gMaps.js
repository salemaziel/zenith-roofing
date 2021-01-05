import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const containerStyle = {
  width: 'auto',
  height: '400px'
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

export default GMaps