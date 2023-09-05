import React from "react";
import "./style.css";
import { Box, TextField, Typography, Radio } from "@mui/material";

import bannerPhoto from "../../Assets/images/blog-banner.png";

//Components
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Blog() {
  return (
    <>
      <NavBar />
      <Box className="blogContainer">
        <Box className="blog-bg">
          <img src={bannerPhoto} className="image-overlay" />
          <Box className="banner-content">
            <Typography variant="h1" gutterBottom>
              Blog
            </Typography>
            <Typography variant="subtitle1">
              We assure you of no hidden fees in all our properties. Pay for
              what you need and find the most cost-effective spaces for your
              requirements.
            </Typography>
          </Box>
        </Box>
        <Box className="blog-content"></Box>
      </Box>
      <Footer />
    </>
  );
}
