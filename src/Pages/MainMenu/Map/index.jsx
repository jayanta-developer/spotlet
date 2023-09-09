import { Box, Typography } from '@mui/material'
import React from 'react';
import GoogleMap from '../../../Component/GoogleMap';


import "./map.css"

import locationIcon from "../../../Assets/images/locationIcon.png"

export default function Map({ Location }) {
  const latitude = 28.230553471285813
  const longitude = 75.97394025062951


  return (
    <>
      <Box ref={Location} className="mapContainer">
        <Box className="LocationHeader">
          <Box ml={2} mr={2} className="locationIconBox">
            <img style={{ width: "100%" }} src={locationIcon} />
          </Box>
          <Box className="locationHeaderTextBox">

            <Typography className='locationHeaderText'>Location</Typography>
            <Typography className='locationSubText'>Lonavala, Maharashtra, India</Typography>
          </Box>
        </Box>

        <Box className="mapBodyBox">
          {/* <Box className="mapBody"> */}
          <GoogleMap latitude={latitude} longitude={longitude} />

          {/* </Box> */}
        </Box>

      </Box >
    </>
  )
}
