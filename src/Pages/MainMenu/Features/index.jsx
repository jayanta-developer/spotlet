import { Box, Typography } from '@mui/material'
import React from 'react'
import "./features.css"
import "../../Overview/overview.css";

import features from "../../../Assets/images/FeturesIcon.png"
import rightArrow from "../../../Assets/images/rightArrow.svg"


export default function Features() {
  return (
    <>
      <Box className="featuresContainer mainItemBox">
        <Box className="featuresHeader">
          <Box ml={2} mr={2} className="descriptionIconBox">
            <img style={{ width: "100%" }} src={features} />
          </Box>
          <Typography className='descriptionHeaderText'>Features</Typography>
          <Box sx={{ paddingLeft: "56%" }} className="seeMoreBtn">
            <Typography pl={2} className='seeMoreText amenitiesSeeMoreBtn'>+ SEE MORE</Typography>
          </Box>
        </Box>

        <Box className="amenitiesTextBox">
          <Box className="amenitiesText">
            <Box className="amenitiesItem">
              <img src={rightArrow} />
              <Typography ml={1}>Kitchen</Typography>
            </Box>
            <Box className="amenitiesItem">
              <img src={rightArrow} />
              <Typography ml={1}>Bathrooms </Typography>
            </Box>
            <Box className="amenitiesItem">
              <img src={rightArrow} />
              <Typography ml={1}>Sink </Typography>
            </Box>
            <Box className="amenitiesItem">
              <img src={rightArrow} />
              <Typography ml={1}>Large table</Typography>
            </Box>
            <Box className="amenitiesItem">
              <img src={rightArrow} />
              <Typography ml={1}>Sound System</Typography>
            </Box>
            <Box className="amenitiesItem">
              <img src={rightArrow} />
              <Typography ml={1}>Wifi</Typography>
            </Box>
            <Box className="amenitiesItem">
              <img src={rightArrow} />
              <Typography ml={1}>Air Conditioning</Typography>
            </Box>
          </Box>
          <Box className="amenitiesText">
            <Box className="amenitiesItem">
              <img src={rightArrow} />
              <Typography ml={1}>Whiteboard</Typography>
            </Box>
            <Box className="amenitiesItem">
              <img src={rightArrow} />
              <Typography ml={1}>Photography Lighting</Typography>
            </Box>
            <Box className="amenitiesItem">
              <img src={rightArrow} />
              <Typography ml={1}>Power Tie-in</Typography>
            </Box>
            <Box className="amenitiesItem">
              <img src={rightArrow} />
              <Typography ml={1}>Projector and Screen / TV</Typography>
            </Box>
            <Box className="amenitiesItem">
              <img src={rightArrow} />
              <Typography ml={1}>Private Entrance</Typography>
            </Box>
          </Box>
        </Box>



      </Box>

    </>
  )
}
