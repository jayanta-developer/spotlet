import { Box, Typography } from '@mui/material'
import React from 'react';

import "./open.css";
import "../../Overview/overview.css"


import TimeIcon from "../../../Assets/images/openingTimeIcon.png"

export default function OpeningTime() {
  return (
    <>
      <Box className="mainItemBox openingBox">
        <Box className="featuresHeader">
          <Box ml={2} mr={2} className="descriptionIconBox">
            <img style={{ width: "100%" }} src={TimeIcon} />
          </Box>
          <Typography className='descriptionHeaderText'>Opening hours</Typography>
        </Box>
        <Box className="openingTimeBox">
          <Box className="weekNames">

            <Box className="weekItem">
              <Typography>Sunday:</Typography>
            </Box>
            <Box className="weekItem">
              <Typography>Monday:</Typography>
            </Box>
            <Box className="weekItem">
              <Typography>Tuesday:</Typography>
            </Box>
            <Box className="weekItem">
              <Typography>Wednesday:</Typography>
            </Box>
            <Box className="weekItem">
              <Typography>Thursday:</Typography>
            </Box>
            <Box className="weekItem">
              <Typography>Friday:</Typography>
            </Box>
            <Box className="weekItem">
              <Typography>Saturday:</Typography>
            </Box>

          </Box>



          <Box className="times">

            <Box className="time">
              <Typography>6:00 AM - 6:00 AM</Typography>
            </Box>
            <Box className="time">
              <Typography>6:00 AM - 6:00 AM</Typography>
            </Box>
            <Box className="time">
              <Typography>6:00 AM - 6:00 AM</Typography>
            </Box>
            <Box className="time">
              <Typography>6:00 AM - 6:00 AM</Typography>
            </Box>
            <Box className="time">
              <Typography>6:00 AM - 6:00 AM</Typography>
            </Box>
            <Box className="time">
              <Typography>6:00 AM - 6:00 AM</Typography>
            </Box>
            <Box className="time">
              <Typography>6:00 AM - 6:00 AM</Typography>
            </Box>

          </Box>

        </Box>

      </Box>
    </>
  )
}
