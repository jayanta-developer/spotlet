import React from 'react'
import { Box, Typography } from '@mui/material'

import "./do.css"
import "../../Overview/overview.css";

import DontIcon from "../../../Assets/images/Dont.png";
import rightArrow from "../../../Assets/images/rightArrow.svg"

export default function Dont() {
  return (
    <>
      <Box className="mainItemBox dontContainer">
        <Box className="featuresHeader">
          <Box ml={2} mr={2} className="descriptionIconBox">
            <img style={{ width: "100%" }} src={DontIcon} />
          </Box>
          <Typography className='descriptionHeaderText'>Do’s & Don’ts</Typography>
          <Box sx={{ paddingLeft: "49%" }} className="seeMoreBtn">
            <Typography pl={2} className='seeMoreText amenitiesSeeMoreBtn'>+ SEE MORE</Typography>
          </Box>
        </Box>

        <Box className="doTextBox">
          <Box className="doBox">
            <Box className="doBoxHeader sideBorder">
              <Typography>Do’s</Typography>
            </Box>
            <Box className="doBoxText sideBorder">
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

              </Box>

            </Box>

          </Box>

          <Box className="doBox">
            <Box className="doBoxHeader">
              <Typography>Don’ts</Typography>
            </Box>
            <Box className="doBoxText">

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

              </Box>

            </Box>
          </Box>

        </Box>


      </Box>
    </>
  )
}
