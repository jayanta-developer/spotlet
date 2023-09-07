import React from 'react';
import { Box } from '@mui/material';
import "./style.css";

//Components
import NavBar from '../NavBar';
import Footer from '../Footer';

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <Box className="aboutUsContainer">
        About us
      </Box>
      <Footer />
    </>

  )
}
