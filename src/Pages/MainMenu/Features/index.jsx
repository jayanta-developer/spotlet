import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import "./features.css"
import "../../Overview/overview.css";

import feature from "../../../Assets/images/FeturesIcon.png"
import rightArrow from "../../../Assets/images/rightArrow.svg"


export default function Features({ Feature }) {
  const [features, setFeatures] = useState(false);

  return (
    <>
      <Box ref={Feature} className={features ? "mainItemOpenBox" : "featuresContainer mainItemBox"}>
        <Box className={features ? "features_Header" : "features_Header bottomBorder"}>
          <Box ml={2} mr={2} className="descriptionIconBox">
            <img style={{ width: "100%", height: "100%" }} src={feature} />
          </Box>
          <Typography className='descriptionHeaderText'>Features</Typography>
          <Box sx={{ paddingLeft: "56%" }} className="seeMoreBtn">
            <Typography
              onClick={() => setFeatures(!features)}
              pl={2}
              className='seeMoreText amenitiesSeeMoreBtn'>{features ? "+ SEE LESS" : "+ SEE MORE"}</Typography>
          </Box>
        </Box>


        <Box className={features ? "amenitiesMainOpenBox" : "amenitiesMainBox"}>
          <Box className={features ? "amenitiesTextOpenBox" : "amenitiesTextBox"}>
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
                <Typography ml={1}>Tableware Heat</Typography>
              </Box>
              <Box className="amenitiesItem">
                <img src={rightArrow} />
                <Typography ml={1}>Heat</Typography>
              </Box>
              <Box className="amenitiesItem">
                <img src={rightArrow} />
                <Typography ml={1}>Conference Phone</Typography>
              </Box>
              <Box className="amenitiesItem">
                <img src={rightArrow} />
                <Typography ml={1}>Stage</Typography>
              </Box>
              <Box className="amenitiesItem">
                <img src={rightArrow} />
                <Typography ml={1}>Green Screen</Typography>
              </Box>
              <Box className="amenitiesItem">
                <img src={rightArrow} />
                <Typography ml={1}>Grill</Typography>
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


          <Box className={features ? "amenitiesTextOpenBox" : "amenitiesTextBox"}>
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
                <Typography ml={1}>Tableware Heat</Typography>
              </Box>
              <Box className="amenitiesItem">
                <img src={rightArrow} />
                <Typography ml={1}>Heat</Typography>
              </Box>
              <Box className="amenitiesItem">
                <img src={rightArrow} />
                <Typography ml={1}>Conference Phone</Typography>
              </Box>
              <Box className="amenitiesItem">
                <img src={rightArrow} />
                <Typography ml={1}>Stage</Typography>
              </Box>
              <Box className="amenitiesItem">
                <img src={rightArrow} />
                <Typography ml={1}>Green Screen</Typography>
              </Box>
              <Box className="amenitiesItem">
                <img src={rightArrow} />
                <Typography ml={1}>Grill</Typography>
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


      </Box>

    </>
  )
}
