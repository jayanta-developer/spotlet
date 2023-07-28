import { Box, Typography, Divider } from '@mui/material'
import React from 'react'

import "./home.css"

//Gallery Images
import imageA from "../../Assets/images/galleryImages/Mask group.png"
import imageB from "../../Assets/images/galleryImages/12.jpg"
import imageC from "../../Assets/images/galleryImages/22.jpg"
import imageD from "../../Assets/images/galleryImages/32.jpg"
import imageE from "../../Assets/images/galleryImages/42.jpg"

//white tab logo
import print from "../../Assets/images/printerLogo.svg";
import share from "../../Assets/images/share.svg";


import locationIcon from "../../Assets/images/Group 54.svg"
import starIcon from "../../Assets/images/star-48.png"

export default function index() {
  return (
    <>
      <Box className="homeContainer">

        <Box className="topTabs">
          <Box className="topTabBox">
            <Box className="topWhiteTab">
              <img className='topTabLogo' src={print} />
              <Typography>Print</Typography>
            </Box>

            <Box sx={{ width: "90px" }} className="topWhiteTab">
              <img style={{ width: "16px", height: "16px", marginBottom: "3px" }} className='topTabLogo' src={starIcon} />
              <Typography>Favorite</Typography>

            </Box>

            <Box className="topWhiteTab">
              <img className='topTabLogo' src={share} />
              <Typography>Share</Typography>
            </Box>
          </Box>

        </Box>

        <Box className="coverGallery">
          <Box className="firstGBox">
            <img className='galleryImage' src={imageA} />
          </Box>
          <Box className="secondGBox">
            <Box className="secondSBox">
              <Box className="BgBox subImageBox"> <img className='galleryImage' src={imageE} /></Box>
              <Box className="CgBox subImageBox"><img className='galleryImage' src={imageC} /></Box>
            </Box>
            <Box className="secondSBox">
              <Box className="DgBox subImageBox"><img className='galleryImage' src={imageD} /></Box>
              <Box className="EgBox subImageBox"><img className='galleryImage' src={imageB} /></Box>
            </Box>
          </Box>
        </Box>



        <Box className="venueLocation">
          <Box mb={1.5} className="locationHeader">
            <Typography sx={{ fontSize: "25px" }} className='poppinsBold' variant='h5'>Coworking Space: </Typography>
            <Typography sx={{ marginLeft: "10px", fontSize: "25px" }} className='poppinsBold' variant='h5'>Serendipity Labs</Typography>
          </Box>
          <Box className="locationSubText">
            <Box className="locationLogo"></Box>
            <Box className="CityLocation">
              <img src={locationIcon} style={{ marginRight: "15px" }} />
              <Typography className='poppins'>Lonavala, Maharashtra, India</Typography>
              <Divider sx={{ margin: "0px 10px" }} orientation="vertical" flexItem />
              <Box sx={{ marginRight: "10px" }} className="startLogos">
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
                <img src={starIcon} />
              </Box>
              <Typography className='poppins' sx={{ color: "#888888" }}>4.0 (3377 Reviews)</Typography>

            </Box>
            <Box className="venueRetting">

            </Box>

          </Box>

        </Box>

      </Box>
    </>
  )
}
