import { Box, Typography } from '@mui/material'
import React from 'react';

import "./map.css"

import locationIcon from "../../../Assets/images/locationIcon.png"

export default function Map() {
  return (
    <>
      <Box className="mapContainer">
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
          <Box className="mapBody">
          </Box>
        </Box>

      </Box >
    </>
  )
}
