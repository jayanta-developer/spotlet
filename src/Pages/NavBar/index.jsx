import React from 'react'
import { Box, TextField, Typography } from '@mui/material'

import "./nav.css";

import companyLogo from "../../Assets/images/companyNavlogo.png";
import SearchIcon from '../../Assets/images/search-normal.svg';
import bail from "../../Assets/images/red bail.png"
import star from "../../Assets/images/red star.png"
import message from "../../Assets/images/red message.png";
import redHeart from "../../Assets/images/redHartLogo.png"


import Avatar from "../../Assets/images/Avatarprofile.png"
import DownArrow from "../../Assets/images/downArrow.svg"


export default function NavBar() {

  return (
    <>
      <Box className="navBar">
        <Box className="companyLogo">
          <img className='pointer' src={companyLogo} />
        </Box>

        <Box className="searchBar">
          <Box className="searchField">
            <img className='pointer' style={{ width: "22px", position: "relative", left: "44px", zIndex: "9" }} src={SearchIcon} />
            <TextField className='searchInput' sx={{ width: "100%" }} placeholder='   Enter Location' />
          </Box>
        </Box>

        <Box className="notificationIcons">
          <img src={bail} />
          <img src={message} />
          <img style={{ width: "19px", height: "17px", marginBottom: "2px" }} src={redHeart} />
        </Box>

        <Box className="host NavTextVisibility">
          <Typography className='poppins pointer'>Become a Host</Typography>
        </Box>
        <Box className="booking NavTextVisibility">
          <Typography className='poppins pointer' sx={{ color: "#EA4335" }}>Bookings</Typography>
        </Box>
        <Box className="profile pointer">
          <Box className="profileTab">
            <Box className="avatarBox">
              <img style={{ width: "100%" }} src={Avatar} />
            </Box>
            <Typography className='profileNameVisibility' ml={2} mr={1.5}>Krish Bhasin</Typography>
            <img className='profileTabDownarrow' src={DownArrow} />

          </Box>

        </Box>
      </Box>
    </>
  )
}
