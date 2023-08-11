import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'

import "./do.css"
import "../../Overview/overview.css";

import DontIcon from "../../../Assets/images/Dont.png";
import rightArrow from "../../../Assets/images/rightArrow.svg"
import RedCross from "../../../Assets/images/RedCross.svg";


export default function Dont({ DoDon, setShowPopup }) {
  const [dont, setDont] = useState(false)


  return (
    <>
      <Box className="dontBox">
        <Box ref={DoDon} className="dontContainer">
          <Box className="DontHeader">
            <Box ml={2} mr={2} className="descriptionIconBox">
              <img style={{ width: "100%" }} src={DontIcon} />
            </Box>
            <Typography className='descriptionHeaderText'>Do’s & Don’ts</Typography>
          </Box>

          <Box className="doTextBox">
            <Box className="doBox">
              <Box className="doBoxHeader sideBorder sideBorder">
                <Typography>Do’s</Typography>
              </Box>
              <Box className="doBoxText sideBorder bottom_Border">
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
                </Box>
              </Box>
            </Box>

            <Box className="doBox">
              <Box className="doBoxHeader topBorder">
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
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Smoking not allowed</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

          </Box>
          <Box mb={1} className="seeMoreBtn">
            <Typography onClick={() => {
              setDont(true)
              setShowPopup(true)
            }} pl={2} className='seeMoreText amenitiesSeeMoreBtn'>+ SEE MORE</Typography>
          </Box>


        </Box>

        {/* dont popup box */}

        <Box sx={{ display: dont ? "block" : "none" }} className="dontPopUpBox">
          <Box className="DontHeader">
            <Box ml={2} mr={2} className="descriptionIconBox">
              <img style={{ width: "100%" }} src={DontIcon} />
            </Box>
            <Typography className='descriptionHeaderText'>Do’s & Don’ts</Typography>
            <Box className="descriptionIconBox dontRedCrossMargin">
              <img onClick={() => {
                setDont(false)
                setShowPopup(false)
              }} style={{ width: "100%", cursor: "pointer" }} src={RedCross} />
            </Box>
          </Box>

          <Box className="doTextBox">
            <Box className="doBox">
              <Box className="doBoxHeader sideBorder sideBorder">
                <Typography>Do’s</Typography>
              </Box>
              <Box className="doBoxText sideBorder bottom_Border">
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
                    <Typography ml={1}>Smoking not allowed</Typography>
                  </Box>
                  {/* <Box className="amenitiesItem">
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
                  </Box> */}
                </Box>
              </Box>
            </Box>

            <Box className="doBox">
              <Box className="doBoxHeader topBorder">
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
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Smoking not allowed</Typography>
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
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Smoking not allowed</Typography>
                  </Box>
                  {/* <Box className="amenitiesItem">
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
                  </Box> */}
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Smoking not allowed</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

          </Box>

        </Box>

      </Box>
    </>
  )
}
