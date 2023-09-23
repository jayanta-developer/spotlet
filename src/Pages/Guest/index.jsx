import React from "react";
import { Box, Typography, Button, Rating } from "@mui/material";
import "./style.css";

import bannerPhoto from "../../Assets/images/guest-banner.png";
import joinbg from "../../Assets/images/join-bg.png";

import guestimg01 from "../../Assets/images/guest-img01.png";
import guestimg02 from "../../Assets/images/guest-img02.png";
import guestimg03 from "../../Assets/images/guest-img03.png";

import icon01 from "../../Assets/images/icon-compass.png";
import icon02 from "../../Assets/images/icon-rupee.png";
import icon03 from "../../Assets/images/icon-booking.png";
import icon18 from "../../Assets/images/icon-18.svg";
import icon19 from "../../Assets/images/icon-19.svg";
import icon20 from "../../Assets/images/icon-20.svg";
import icon21 from "../../Assets/images/icon-21.svg";


//Components
import NavBar from "../NavBar";
import Footer from "../Footer";
import GuestTestimonials from "../GuestTestimonials";

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
          <Box className="welcome-content">
            <figure>
              <img src={guestimg01} />
            </figure>
            <article>
              <Typography variant="h2" gutterBottom>
                Welcome to SpotLet: Find Your Perfect Space
              </Typography>
              <Typography variant="h6" gutterBottom>
                Discover Exciting Spaces for Every Occasion
              </Typography>
              <Typography variant="body1">
                Are you in search of the perfect space to host your next event,
                shoot, or celebration? Look no further than SpotLet! We're your
                ultimate destination for uncovering unique and stunning spaces
                that suit your needs and inspire your creativity.
              </Typography>
            </article>
          </Box>
          <Box className="why-choose">
            <h2>Why Choose SpotLet?</h2>
            <Box className="step-container">
              <Box className="step-box">
                <figure>
                  <img src={icon01} />
                </figure>
                <Typography variant="h5" gutterBottom>
                  Explore Endless Possibilities
                </Typography>
                <Typography variant="body1">
                  Whether it's a family reunion, a corporate retreat, or a photo
                  shoot, SpotLet offers a diverse range of spaces that cater to
                  all your requirements.
                </Typography>
              </Box>
              <Box className="step-box">
                <figure>
                  <img src={icon02} />
                </figure>
                <Typography variant="h5" gutterBottom>
                  Transparency in Pricing
                </Typography>
                <Typography variant="body1">
                  Say goodbye to hidden fees. With SpotLet, you'll only pay for
                  what you need, ensuring a cost-effective solution for your
                  space needs.
                </Typography>
              </Box>
              <Box className="step-box">
                <figure>
                  <img src={icon03} />
                </figure>
                <Typography variant="h5" gutterBottom>
                  Hassle-Free Booking
                </Typography>
                <Typography variant="body1">
                  We've simplified the booking process so you can secure your
                  dream space on the go, within minutes. No more lengthy
                  contracts or complicated legalities.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="what-provides">
            <Box className="what-container">
              <article>
                <Typography variant="h2" gutterBottom>
                  What SpotLet Provides
                </Typography>
                <Box className="icon-content">
                  <Box className="icon">
                    <img src={icon18} />
                  </Box>
                  <Box className="content">
                    <Typography variant="subtitle1">Safety First </Typography>
                    <Typography variant="body1">
                      At SpotLet, your safety is our priority. We conduct
                      thorough background checks to ensure that all properties
                      listed on our platform are safe and secure for you, your
                      team, and your guests.
                    </Typography>
                  </Box>
                </Box>
                <Box className="icon-content">
                  <Box className="icon">
                    <img src={icon19} />
                  </Box>
                  <Box className="content">
                    <Typography variant="subtitle1">
                      Savings You'll Love
                    </Typography>
                    <Typography variant="body1">
                      When you book with SpotLet, you're not just getting a
                      remarkable space – you're also getting incredible value.
                      You can save up to 20% compared to traditional location
                      agencies, all while enjoying budget-friendly prices.
                    </Typography>
                  </Box>
                </Box>
                <Box className="icon-content">
                  <Box className="icon">
                    <img src={icon20} />
                  </Box>
                  <Box className="content">
                    <Typography variant="subtitle1">Endless Variety</Typography>
                    <Typography variant="body1">
                      From picturesque wedding venues to state-of-the-art film
                      shooting locations, our platform offers an extensive
                      selection of spaces that cater to your every need. With
                      SpotLet, you're bound to find the perfect fit.
                    </Typography>
                  </Box>
                </Box>
                <Box className="icon-content">
                  <Box className="icon">
                    <img src={icon21} />
                  </Box>
                  <Box className="content">
                    <Typography variant="subtitle1">
                      Unforgettable Experiences
                    </Typography>
                    <Typography variant="body1">
                      We're committed to providing you with a seamless and
                      memorable experience. From the moment you start browsing
                      to the day of your event, our platform and our hosts are
                      here to ensure everything goes smoothly.
                    </Typography>
                  </Box>
                </Box>
              </article>
              <figure>
                <img src={guestimg02} />
              </figure>
            </Box>
          </Box>
          <Box className="testimonials">
            <Typography mb={3} variant="h2" gutterBottom>
              SpotLet Testimonials
            </Typography>
            <Box className="testimonialsSlideContainer">
            <Box className="testimonials-Container">
              <GuestTestimonials />
            </Box>
            </Box>
          </Box>
          <Box className="join-us">
            <Box className="join-content">
              <img src={joinbg} className="image-overlay" />
              <article>
                <Typography variant="h2" gutterBottom>
                  Explore Your Options Today!
                </Typography>
                <Typography variant="body1">
                  Ready to discover incredible spaces that match your vision?
                  Let SpotLet guide you to the most exciting locations for your
                  events, shoots, and celebrations. Your journey starts here.
                </Typography>
              </article>
              <aside>
                <Button className="readmore" variant="contained" size="large">
                  Browse Spaces
                </Button>
              </aside>
            </Box>
          </Box>
          <Box className="join-community">
            <figure>
              <img src={guestimg03} />
            </figure>
            <article>
              <Typography variant="h2" gutterBottom>
                Join Our Community
              </Typography>
              <Typography variant="body1">
                At SpotLet, we're not just a platform; we're a community of
                like-minded individuals who share a passion for exceptional
                spaces. Join us in celebrating happiness, togetherness, and
                unforgettable moments.
              </Typography>
              <Button className="readmore" variant="contained" size="large">
                Become a Part of SpotLet
              </Button>
            </article>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
