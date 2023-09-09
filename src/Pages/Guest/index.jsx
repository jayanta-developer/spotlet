import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "./style.css";

import bannerPhoto from "../../Assets/images/guest-banner.png";
import joinbg from "../../Assets/images/join-bg.png";

//Components
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Guest() {
  return (
    <>
      <NavBar />
      <Box className="guestContainer">
        <Box className="guest-bg">
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
        <Box className="guest-content">
          <Box className="welcome-content"></Box>
          <Box className="why-choose"></Box>
          <Box className="what-provides"></Box>
          <Box className="testimonials"></Box>
          <Box className="join-us">
            <Box className="join-content">
              <img src={joinbg} className="image-overlay" />
              <article>
                <Typography variant="h2" gutterBottom>
                  Join Us on this Journey
                </Typography>
                <Typography variant="body1">
                  SpotLet is more than a service - it's a movement that
                  celebrates creativity, connection, and the magic of spaces.
                  Whether you're a guest seeking the perfect location or a host
                  eager to showcase your property, you're part of our story.
                  Join us on this exhilarating journey as we continue to reshape
                  the way spaces are perceived, experienced, and shared.
                </Typography>
              </article>
              <aside>
                <Button className="readmore" variant="contained" size="large">
                  Explore Our Spaces
                </Button>
              </aside>
            </Box>
          </Box>
          <Box className="join-community"></Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
