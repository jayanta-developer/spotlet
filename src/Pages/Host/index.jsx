import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  Rating,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./style.css";

import bannerPhoto from "../../Assets/images/host-banner.png";
import joinbg from "../../Assets/images/join-bg.png";
import hostimg01 from "../../Assets/images/host-img01.png";
import hostimg02 from "../../Assets/images/host-img02.png";
import hostimg03 from "../../Assets/images/host-img03.png";
import hostimg04 from "../../Assets/images/host-img04.png";
import icon01 from "../../Assets/images/icon-map.png";
import icon02 from "../../Assets/images/icon-puzzle.png";
import icon03 from "../../Assets/images/icon-rupee.png";
import icon15 from "../../Assets/images/icon-15.svg";
import icon16 from "../../Assets/images/icon-16.svg";
import icon17 from "../../Assets/images/icon-17.svg";
import blueTik from "../../Assets/images/hexagon-check (1) 1.svg";

//Components
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Host() {
  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const testimonialsCard = () => {
    return (
      <Box className="testimonialsCard">
        <Rating name="size-small" defaultValue={2} />
        <Typography className="testimonialsCardSubText">
          We’re a renowned 5-star hotel in the heart of the city, often booked
          by families and outstation guests. However, we wanted to expand our
          customer base and become a preferred location for corporate events.
          SpotLet allowed us to reach out to our potential customers, and we’re
          doing great business with corporates now!
        </Typography>
        <Box className="userInfoBox">
          <Box className="userProfilePic">
            <p>B</p>
          </Box>
          <Box sx={{ position: "relative" }} ml={2}>
            <img className="blueTik" src={blueTik} />
            <Typography className="User_name">JHON DOE</Typography>
            <Typography className="userRole">Host</Typography>
          </Box>
        </Box>
      </Box>
    );
  };

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
              <Typography variant="h5" gutterBottom>
                Add Location Details
              </Typography>
              <Typography variant="body1">
                Share property specifics to attract potential guests.
              </Typography>
            </Box>
            <Box className="step-box">
              <figure>
                <img src={icon02} />
              </figure>
              <Typography variant="h5" gutterBottom>
                Complete your Features
              </Typography>
              <Typography variant="body1">
                Highlight unique amenities and features of your space.
              </Typography>
            </Box>
            <Box className="step-box">
              <figure>
                <img src={icon03} />
              </figure>
              <Typography variant="h5" gutterBottom>
                Set your Price
              </Typography>
              <Typography variant="body1">
                Choose a competitive rate to start hosting exceptional events.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="why-hosts">
          <Box className="why-container">
            <article>
              <Typography variant="h2" gutterBottom>
                Why Host with SpotLet?
              </Typography>
              <Box className="icon-content">
                <Box className="icon">
                  <img src={icon15} />
                </Box>
                <Box className="content">
                  <Typography variant="subtitle1">Free Listing </Typography>
                  <Typography variant="body1">
                    We don't charge our customers to list their spaces on
                    SpotLet. The only premium charge is if you want to showcase
                    your spaces in the spotlight. Of course, you can always add
                    your property for free on our portal!
                  </Typography>
                </Box>
              </Box>
              <Box className="icon-content">
                <Box className="icon">
                  <img src={icon16} />
                </Box>
                <Box className="content">
                  <Typography variant="subtitle1">
                    High Earning Potential
                  </Typography>
                  <Typography variant="body1">
                    We're reaching out to many new customers every day. As a
                    result, you can earn lots of extra income as you rent spaces
                    for weddings, film shoots or corporate events. Moreover,
                    since you get more business during the downtime, you can
                    look forward to a prosperous future!
                  </Typography>
                </Box>
              </Box>
              <Box className="icon-content">
                <Box className="icon">
                  <img src={icon17} />
                </Box>
                <Box className="content">
                  <Typography variant="subtitle1">Complete Control</Typography>
                  <Typography variant="body1">
                    You can decide how you want to share your space with
                    customers. For example, you can choose to host corporate
                    lunches, film shoots over the weekends or weddings during
                    the season. You can select what's best for you and decide
                    all the details with the renters beforehand.
                  </Typography>
                </Box>
              </Box>
            </article>
            <figure>
              <img src={hostimg02} />
            </figure>
          </Box>
        </Box>
        <Box className="testimonials">
          <Typography mb={3} variant="h2" gutterBottom>
            Host Testimonials
          </Typography>
          <Box className="testimonialsSlideContainer">
            <ArrowBackIosIcon className="testimonialsArrow" />
            {testimonialsCard()}
            {testimonialsCard()}
            <ArrowForwardIosIcon className="testimonialsArrow" />
          </Box>
        </Box>
        <Box className="join-us">
          <Box className="join-content">
            <img src={joinbg} className="image-overlay" />
            <article>
              <Typography variant="h2" gutterBottom>
                Start Hosting Memorable Events Today
              </Typography>
              <Typography variant="body1">
                Your property could be the canvas for someone's masterpiece or
                the backdrop for a successful corporate gathering. Join SpotLet
                and become a part of our growing network of exceptional hosts.
                Unlock the potential of your property now.
              </Typography>
            </article>
            <aside>
              <Button className="readmore" variant="contained" size="large">
                Become a Host
              </Button>
            </aside>
          </Box>
        </Box>
        <Box className="faq-section">
          <figure>
            <img src={hostimg03} />
          </figure>
          <article>
            <Typography variant="h2" gutterBottom>
              Frequently Asked Questions
            </Typography>
            <div>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="faq-heading">
                    {" "}
                    <span className="number">1</span> Who can be a SpotLet Host?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="faq-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className="faq-heading">
                    {" "}
                    <span className="number">2</span> How do I get Paid?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="faq-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography className="faq-heading">
                    {" "}
                    <span className="number">3</span> How Does SpotLet Make
                    Money?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="faq-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <Typography className="faq-heading">
                    {" "}
                    <span className="number">4</span> How Can I get more
                    Customers?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="faq-content">
                    We encourage our hosts to share as much information about
                    the property as possible since it helps close bookings
                    faster. Also, you can try our premium packages to ensure
                    that your space gets the spotlight on our platform. We also
                    support you with marketing and advertising and are
                    constantly increasing our website traffic to boost sales.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5a-content"
                  id="panel5a-header"
                >
                  <Typography className="faq-heading">
                    {" "}
                    <span className="number">5</span> How Does SpotLet Make
                    Money?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="faq-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </article>
        </Box>
        <Box className="get-in-touch">
          <section>
            <Typography variant="h2">Get In Touch</Typography>
            <Typography className="subheading" variant="body1">
              Love your property? Why not List it and Become a Successful
              SpotLet Host?
            </Typography>
            <Box className="form-box">
              <div className="two-column">
                <Typography variant="body1">Your Organization Name</Typography>
                <TextField
                  className="org-input"
                  id="outlined-basic"
                  placeholder="Your Organization Name"
                  variant="outlined"
                />
              </div>
              <div className="two-column">
                <Typography variant="body1">Contact Person Name</Typography>
                <TextField
                  className="name-input"
                  id="outlined-basic"
                  placeholder="Contact Person Name"
                  variant="outlined"
                />
              </div>
            </Box>
            <Box className="form-box">
              <div className="two-column">
                <Typography variant="body1">Mobile Number</Typography>
                <TextField
                  className="mobile-input"
                  id="outlined-basic"
                  placeholder="Mobile Number"
                  variant="outlined"
                />
              </div>
              <div className="two-column">
                <Typography variant="body1">Email Address</Typography>
                <TextField
                  className="email-input"
                  id="outlined-basic"
                  placeholder="Email Address"
                  variant="outlined"
                />
              </div>
            </Box>
            <Box className="form-box">
              <div className="one-column">
                <Typography variant="body1">Message</Typography>
                <TextField
                  className="textarea"
                  id="outlined-basic"
                  placeholder="Message"
                  variant="outlined"
                />
              </div>
            </Box>
            <Box className="form-box">
              <div className="one-column">
                <Button className="submit" variant="contained" size="large">
                  Submit
                </Button>
              </div>
            </Box>
          </section>
          <figure>
            <img src={hostimg04} className="image-overlay" />
          </figure>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
