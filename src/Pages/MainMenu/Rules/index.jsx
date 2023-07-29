import React from 'react';
import { Box, Typography } from '@mui/material'

import "./rules.css";
import "../../Overview/overview.css"

import rules from '../../../Assets/images/Rules.png';
import rightArrow from "../../../Assets/images/rightArrow.svg"

export default function Rules({ Rule }) {
  return (
    <>
      <Box ref={Rule} className="mainItemBox rulesContainer">
        <Box className="featuresHeader">
          <Box ml={2} mr={2} className="descriptionIconBox">
            <img style={{ width: "100%" }} src={rules} />
          </Box>
          <Typography className='descriptionHeaderText'>Rules</Typography>
          <Box sx={{ paddingLeft: "61%" }} className="seeMoreBtn">
            <Typography pl={2} className='seeMoreText amenitiesSeeMoreBtn'>+ SEE MORE</Typography>
          </Box>
        </Box>
        <Box className="amenitiesTextBox">
          <Box className="amenities_Text">

            <Box className="amenitiesItem">
              <img src={rightArrow} />
              <Typography ml={1}>Smoking not allowed</Typography>
            </Box>
            <Box className="amenitiesItem">
              <img src={rightArrow} />
              <Typography ml={1}>Pets not allowed</Typography>
            </Box>
            <Box className="amenitiesItem">
              <img src={rightArrow} />
              <Typography ml={1}>Pool closed between 8.00pm 6.00am</Typography>
            </Box>
            <Box className="amenitiesItem">
              <img src={rightArrow} />
              <Typography ml={1}>Smoking not allowed</Typography>
            </Box>
            <Box className="amenitiesItem">
              <img src={rightArrow} />
              <Typography ml={1}>Pets not allowed</Typography>
            </Box>
            <Box className="amenitiesItem">
              <img src={rightArrow} />
              <Typography ml={1}>Pool closed between 8.00pm 6.00am</Typography>
            </Box>

          </Box>
        </Box>

      </Box>
    </>
  )
}
