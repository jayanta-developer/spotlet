import React, { useState } from 'react';
import { Box, Typography } from '@mui/material'

import "./rules.css";
import "../../Overview/overview.css"

import rules from '../../../Assets/images/Rules.png';
import rightArrow from "../../../Assets/images/rightArrow.svg"

export default function Rules({ Rule }) {
  const [rule, setRule] = useState(false)

  return (
    <>
      <Box ref={Rule} className={rule ? "rulesOpenContainer" : "rulesContainer"}>
        <Box className={rule ? "rulesHeader" : "rulesHeader bottomBorder"}>
          <Box ml={2} mr={2} className="descriptionIconBox">
            <img style={{ width: "100%" }} src={rules} />
          </Box>
          <Typography className='descriptionHeaderText'>Rules</Typography>

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
            <Box sx={{ display: rule ? "block" : "none" }}>
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
        <Box className="seeMoreBtn">
          <Typography onClick={() => setRule(!rule)} pl={2} className='seeMoreText amenitiesSeeMoreBtn'>{rule ? "+ SEE LESS" : "+ SEE MORE"}</Typography>
        </Box>

      </Box>
    </>
  )
}
