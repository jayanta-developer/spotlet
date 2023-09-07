import React from 'react';
import { Box } from '@mui/material'
import "./style.css";


//Components
import NavBar from '../NavBar';
import Footer from '../Footer';

export default function BlogDetails() {
  return (
    <>
      <NavBar />
      <Box className="BlogDetailsContainer">
        Blog details
      </Box>
      <Footer />
    </>
  )
}
