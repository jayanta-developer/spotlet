import React from 'react'
import { Box, TextField, Typography } from '@mui/material'

import "./nav.css";

import companyLogo from "../../Assets/images/companyNavlogo.png";
import SearchIcon from '../../Assets/images/search-normal.svg';
import bail from "../../Assets/images/red bail.png"
import star from "../../Assets/images/red star.png"
import message from "../../Assets/images/red message.png";

import Avatar from "../../Assets/images/Avatarprofile.png"
import DownArrow from "../../Assets/images/downArrow.svg"


export default function NavBar() {

  return (
    <>
      <Box className="navBar">
        <Box className="companyLogo">
          <img src={companyLogo} />
        </Box>

        <Box className="searchBar">
          <Box className="searchField">
            <img style={{ width: "22px", position: "relative", left: "44px" }} src={SearchIcon} />
            <TextField className='searchInput' sx={{ width: "100%" }} placeholder='   Enter Location' />
          </Box>
        </Box>

        <Box className="notificationIcons">
          <img src={bail} />
          <img src={message} />
          <img src={star} />
        </Box>

        <Box className="host">
          <Typography className='poppins'>Become a Host</Typography>
        </Box>
        <Box className="booking">
          <Typography className='poppins' sx={{ color: "#EA4335" }}>Bookings</Typography>
        </Box>
        <Box className="profile">
          <Box className="profileTab">
            <Box className="avatarBox">
              <img style={{ width: "100%" }} src={Avatar} />
            </Box>
            <Typography ml={2} mr={1.5}>Krish Bhasin</Typography>
            <img src={DownArrow} />

          </Box>

        </Box>
      </Box>
    </>
  )
}
