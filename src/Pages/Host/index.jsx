import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "./style.css";

import bannerPhoto from "../../Assets/images/host-banner.png";
import joinbg from "../../Assets/images/join-bg.png";
import hostimg01 from "../../Assets/images/host-img01.png";
import icon01 from "../../Assets/images/icon-map.png";
import icon02 from "../../Assets/images/icon-puzzle.png";
import icon03 from "../../Assets/images/icon-rupee.png";

//Components
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Host() {
  return (
    <>
      <NavBar />
      <Box className="hostContainer">
        <Box className="host-bg">
          <img src={bannerPhoto} className="image-overlay" />
          <Box className="banner-content">
            <Typography variant="h1" gutterBottom>
              {" "}
              <span className="span700">Enjoy a Second</span> Source of Income.
              Host with <span className="span700">SpotLet</span>
            </Typography>
            <Typography variant="subtitle1">
              We assure you of no hidden fees in all our properties. Pay for
              what you need and find the most cost-effective spaces for your
              requirements.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="host-content">
        <Box className="host-welcome">
          <figure>
            <img src={hostimg01} />
          </figure>
          <article>
            <Typography variant="h2" gutterBottom>
              Become a Host and Unlock Your Property's Potential
            </Typography>
            <Typography variant="body1">
              Join the SpotLet community and turn your property into a
              sought-after venue for film shoots, corporate events, and personal
              celebrations. As a host, you have the power to showcase your
              unique space to a diverse audience seeking exceptional locations.
              Whether it's a picturesque mansion, a modern loft, or a cozy
              garden, your property can become the backdrop for unforgettable
              experiences.
            </Typography>
          </article>
        </Box>
        <Box className="three-steps">
          <Typography variant="h2" gutterBottom>
            Become a Host in just 3 Simple Steps
          </Typography>
          <Box className="step-container">
            <Box className="step-box">
              <figure>
                <img src={icon01} />
              </figure>
              <Typography variant="h5" gutterBottom>Add Location Details</Typography>
              <Typography variant="body1">Share property specifics to attract potential guests.</Typography>
            </Box>
            <Box className="step-box">
              <figure>
                <img src={icon02} />
              </figure>
              <Typography variant="h5" gutterBottom>Complete your Features</Typography>
              <Typography variant="body1">Highlight unique amenities and features of your space.</Typography>
            </Box>
            <Box className="step-box">
              <figure>
                <img src={icon03} />
              </figure>
              <Typography variant="h5" gutterBottom>Set your Price</Typography>
              <Typography variant="body1">Choose a competitive rate to start hosting exceptional events.</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="why-hosts"></Box>
        <Box className="testimonials"></Box>
        <Box className="join-us">
          <Box className="join-content">
            <img src={joinbg} className="image-overlay" />
            <article>
              <Typography variant="h2" gutterBottom>
                Join Us on this Journey
              </Typography>
              <Typography variant="body1">
                SpotLet is more than a service - it's a movement that celebrates
                creativity, connection, and the magic of spaces. Whether you're
                a guest seeking the perfect location or a host eager to showcase
                your property, you're part of our story. Join us on this
                exhilarating journey as we continue to reshape the way spaces
                are perceived, experienced, and shared.
              </Typography>
            </article>
            <aside>
              <Button className="readmore" variant="contained" size="large">
                Explore Our Spaces
              </Button>
            </aside>
          </Box>
        </Box>
        <Box className="faq-section"></Box>
        <Box className="get-in-touch"></Box>
      </Box>
      <Footer />
    </>
  );
}
