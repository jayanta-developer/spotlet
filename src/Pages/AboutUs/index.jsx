import React from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
import "./style.css";

import bannerPhoto from "../../Assets/images/about-banner.png";
import aboutimg01 from "../../Assets/images/about-img-01.png";

//Components
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <Box className="aboutUsContainer">
        <Box className="about-bg">
          <img src={bannerPhoto} className="image-overlay" />
          <Box className="banner-content">
            <Typography variant="h1" gutterBottom>
              We Celebrate{" "}
              <span className="span700">
                Happiness and Togetherness Every Day
              </span>{" "}
            </Typography>
            <Typography variant="subtitle1">
              We assure you of no hidden fees in all our properties. Pay for
              what you need and find the most cost-effective spaces for your
              requirements.
            </Typography>
          </Box>
        </Box>
        <Box className="about-content">
          <Box className="about-company">
            <article>
              <Typography variant="h2" gutterBottom>
                About Us
              </Typography>
              <Typography variant="h4" gutterBottom>
                Unveiling the World of Unique Spaces
              </Typography>
              <Typography variant="body1" gutterBottom>
                Welcome to SpotLet, a groundbreaking online platform that
                redefines how people discover and share spaces. We're not just a
                service; we're a community built around the idea of connecting
                hosts with incredible spaces to individuals seeking the perfect
                backdrop for their events, shoots, and celebrations. Our vision
                is simple yet transformative: to be the go-to destination for
                finding, booking, and showcasing remarkable spaces in India.
              </Typography>
              <Typography variant="h4" gutterBottom>
                Our Unique Concept
              </Typography>
              <Typography variant="body1" gutterBottom>
                SpotLet emerged from the recognition that spaces hold stories,
                and every space has the potential to become a canvas for
                experiences that are both meaningful and unforgettable. We're
                the pioneers of a novel concept – offering a one-stop solution
                for all your space-related needs. Whether you're an aspiring
                filmmaker scouting for the perfect location, a business in
                search of a dynamic event venue, or an individual planning a
                personal celebration, SpotLet is here to guide you.
              </Typography>
            </article>
            <figure>
              <img src={aboutimg01} />
            </figure>
          </Box>
          <Box className="guests-hosts">
            <Stack className="for-guests">sfsd</Stack>
            <Stack className="for-hosts">sdfs</Stack>
          </Box>
          <Box className="company-difference">The SpotLet Difference</Box>
          <Box className="world-opportunities">
            <Container>A World of Opportunities</Container>
          </Box>
          <Box className="join-us">Join Us on this Journey</Box>
          <Box className="vision-mission">Join Us on this Journey</Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
