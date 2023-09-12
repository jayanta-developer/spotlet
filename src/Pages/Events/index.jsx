import React from "react";
import { Box, Typography } from "@mui/material";
import "./style.css";

import bannerPhoto from "../../Assets/images/guest-banner.png";

//Components
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Events() {
  return (
    <>
      <NavBar />
      <Box className="eventContainer">
        <Box className="events-bg">
          <img src={bannerPhoto} className="image-overlay" />
          <Box className="banner-content">
            <Typography variant="h1" gutterBottom>
              Guest
            </Typography>
            <Typography variant="subtitle1">
              We assure you of no hidden fees in all our properties. Pay for
              what you need and find the most cost-effective spaces for your
              requirements.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
