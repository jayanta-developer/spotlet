import { Box, Typography } from '@mui/material'
import React from 'react';
import "./properties.css"

import Pimage1 from "../../Assets/images/properitiseImage/2021-10-23.jpg"
import Pimage2 from "../../Assets/images/properitiseImage/Banquet-Hall-Gallery-15.jpeg"
import Pimage4 from "../../Assets/images/properitiseImage/IMG-20221120-WA0148.jpg"
import Pimage5 from "../../Assets/images/properitiseImage/WhatsApp Image 2023-07-15 at 12.29.22.jpeg"

import buildingIcon from "../../Assets/images/properitiseImage/BildingIcon.png"
import FilmIcon from "../../Assets/images/properitiseImage/FlimBoxIcon.png"
import PersonIcon from "../../Assets/images/properitiseImage/PersonIcon.png"
import LocationIcon from "../../Assets/images/properitiseImage/locationIcon.png"

import GrayStar from "../../Assets/images/properitiseImage/GrayStar.png"


export default function Properties() {

  const propertiesCard = () => {
    return (
      <Box className="propertiesCard">
        <Box className="imageBox">
          <img style={{ width: "100%" }} src={Pimage1} />
        </Box>
        <Box className="logo_Box">
          <img style={{ width: "25px", height: "25px" }} src={FilmIcon} />
        </Box>
        <Box className="CardTextBox">
          <Box className="cardText">
            <Typography className='cardText1stHeader'>#SWISS23808</Typography>
            <Typography className='cardSubText'>₹ 32000/8 hrs</Typography>
          </Box>

          <Box className="cardText cardText2nd">
            <Box className="cardStarBox">
              <img style={{ width: "15px", height: "15px" }} src={GrayStar} />
              <img style={{ width: "15px", height: "15px" }} src={GrayStar} />
              <img style={{ width: "15px", height: "15px" }} src={GrayStar} />
              <img style={{ width: "15px", height: "15px" }} src={GrayStar} />
              <img style={{ width: "15px", height: "15px" }} src={GrayStar} />
              <span>(0)</span>
            </Box>
            <Typography className='cardLocationHeader'>Cafe</Typography>
            <Box className="cardLocationBox">
              <img style={{ width: "10px", height: "14px" }} src={LocationIcon} />
              <span>Puppalguda, Sri Ram Nagar Colony</span>
            </Box>
          </Box>
        </Box>
        <Box className="CardTextBox">
          <Box className="cardText">
            <Typography className='cardText1stHeader'>#SWISS23808</Typography>
            <Typography className='cardSubText'>₹ 32000/8 hrs</Typography>
          </Box>
          <Box className="cardText cardText2nd">
            <Box className="cardStarBox">
              <img style={{ width: "15px", height: "15px" }} src={GrayStar} />
              <img style={{ width: "15px", height: "15px" }} src={GrayStar} />
              <img style={{ width: "15px", height: "15px" }} src={GrayStar} />
              <img style={{ width: "15px", height: "15px" }} src={GrayStar} />
              <img style={{ width: "15px", height: "15px" }} src={GrayStar} />
              <span>(0)</span>
            </Box>
            <Typography className='cardLocationHeader'>Cafe</Typography>
            <Box className="cardLocationBox">
              <img style={{ width: "10px", height: "14px" }} src={LocationIcon} />
              <span>Puppalguda, Sri Ram Nagar Colony</span>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }



  return (
    <>
      <Box className="propertiesContainer">
        <Box className="propertiesHeader">
          <Typography>Similar Properties</Typography>
        </Box>
        <Box className="propertiesBox">
          <Box className="propertiesRenderBox">
            {propertiesCard()}
            {propertiesCard()}
            {propertiesCard()}
            {propertiesCard()}

          </Box>
        </Box>

      </Box>
    </>
  )
}
