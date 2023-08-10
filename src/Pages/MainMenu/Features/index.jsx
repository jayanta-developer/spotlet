import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import "./features.css"
import "../../Overview/overview.css";

import feature from "../../../Assets/images/FeturesIcon.png"
import rightArrow from "../../../Assets/images/rightArrow.svg"

import RedCross from "../../../Assets/images/RedCross.svg";


export default function Features({ Feature }) {
  const [features, setFeatures] = useState(false);

  return (
    <>
      <Box className="featuresBox">
        <Box ref={Feature} className="Amenities mainItemBox">

          <Box className="amenitiesHeader">
            <Box ml={2} mr={2} className="AmenitiesIconBox">
              <img style={{ width: "100%" }} src={feature} />
            </Box>
            <Typography className='descriptionHeaderText'>Features</Typography>
          </Box>

          <Box className="amenitiesTextBox">
            <Box className="amenitiesTextArya">
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

              <Box className="amenitiesText leftMargin">
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
            </Box>

            <Box className="seeMoreBtn featuresSeeMoreBtn">
              <Typography
                onClick={() => setFeatures(true)}
                pl={2}
                className='seeMoreText amenitiesSeeMoreBtn'>+ SEE MORE</Typography>
            </Box>
          </Box>
        </Box>



        <Box sx={{ display: features ? "flex" : "none" }} className="featuresPopupBox">
          <Box className="amenitiesHeader">
            <Box ml={2} mr={2} className="AmenitiesIconBox">
              <img style={{ width: "100%" }} src={feature} />
            </Box>
            <Typography className='descriptionHeaderText'>Features</Typography>
            <Box className="descriptionIconBox featuresRedCrossMargin">
              <img onClick={() => setFeatures(false)} style={{ width: "100%", cursor: "pointer" }} src={RedCross} />
            </Box>
          </Box>

          <Box className="amenitiesScrollBox">

            <Box pt={2.5} sx={{ display: "flex" }} className="amenitiesTextArya">
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

              <Box className="amenitiesText leftMargin">
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
            </Box>
          </Box>
        </Box>
      </Box>



    </>
  )
}
