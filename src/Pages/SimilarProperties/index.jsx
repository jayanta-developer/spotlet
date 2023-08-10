import { Box, Typography } from '@mui/material'
import React from 'react';
import "./properties.css"
import { propertiesCard } from "../../Component/PropertiesCard"

import Pimage1 from "../../Assets/images/properitiseImage/2021-10-23.jpg"
import Pimage2 from "../../Assets/images/properitiseImage/Banquet-Hall-Gallery-15.jpeg"
import Pimage3 from "../../Assets/images/properitiseImage/IMG-20221120-WA0148.jpg"
import Pimage4 from "../../Assets/images/properitiseImage/WhatsApp Image 2023-07-15 at 12.29.22.jpeg"

import buildingIcon from "../../Assets/images/properitiseImage/BildingIcon.png";
import FilmIcon from "../../Assets/images/properitiseImage/FlimBoxIcon.png";
import PersonIcon from "../../Assets/images/properitiseImage/PersonIcon.png";


export default function Properties() {

  return (
    <>
      <Box className="propertiesContainer">
        <Box className="propertiesBox">
          <Box className="propertiesHeader">
            <Typography>Similar Properties</Typography>
          </Box>
          <Box className="propertiesRenderBox">
            {propertiesCard(
              Pimage1,
              "#SWISS23808",
              "INR. 4000",
              "Cafe",
              "Puppalguda, Sri Ram Nagar Colony",
              [buildingIcon, PersonIcon]
            )}
            {propertiesCard(
              Pimage2,
              "#FUNLA36332",
              "INR. 4000",
              "Banquets Hall",
              "Miyapur, Indira Nagar Colony",
              [FilmIcon, PersonIcon]
            )}
            {propertiesCard(
              Pimage3,
              "#SUPRE95269",
              "INR. 4000",
              "GYM",
              "Hyderabad, Sri Krishna Nagar",
              [FilmIcon, buildingIcon]
            )}
            {propertiesCard(
              Pimage4,
              "#FILMN33108",
              "INR. 4000",
              "Studio Floors",
              "Hyderabad, Film Nagar",
              [buildingIcon, FilmIcon, PersonIcon]
            )}

          </Box>
        </Box>

      </Box>
    </>
  )
}
