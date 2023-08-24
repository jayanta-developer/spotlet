import React from 'react';
import { Box, TextField, Typography } from '@mui/material'

import "./style.css"

//Component 
import NavBar from '../NavBar';
import Footer from '../Footer';

export default function CreateCoupon() {
  return (
    <>
      <NavBar />
      <Box className="couponContainer">
        <Box className="CreateCouponBox">

        </Box>
      </Box>
      <Footer />
    </>
  )
}
