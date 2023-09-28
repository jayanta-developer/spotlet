import React, { useState } from "react";
import PropTypes from "prop-types";
import { TypeAnimation } from "react-type-animation";
import VideoStableIcon from "@mui/icons-material/VideoStable";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  Tabs,
  Tab,
  Rating,
  CardMedia,
} from "@mui/material";
import "./style.css";

import bannerPhoto from "../../Assets/images/landing-banner.png";
import filmshootingimg01 from "../../Assets/images/filmshooting-img01.jpg";
import filmshootingimg02 from "../../Assets/images/filmshooting-img02.jpg";
import filmshootingimg03 from "../../Assets/images/filmshooting-img03.jpg";
import filmshootingimg04 from "../../Assets/images/filmshooting-img04.jpg";
import filmshootingimg05 from "../../Assets/images/filmshooting-img05.jpg";
import filmshootingimg06 from "../../Assets/images/filmshooting-img06.jpg";
import filmshootingimg07 from "../../Assets/images/filmshooting-img07.jpg";
import filmshootingimg08 from "../../Assets/images/filmshooting-img08.jpg";
import corporateeventsimg01 from "../../Assets/images/corporateevents-img01.jpg";
import corporateeventsimg02 from "../../Assets/images/corporateevents-img02.jpg";
import corporateeventsimg03 from "../../Assets/images/corporateevents-img03.jpg";
import corporateeventsimg04 from "../../Assets/images/corporateevents-img04.jpg";
import corporateeventsimg05 from "../../Assets/images/corporateevents-img05.jpg";
import corporateeventsimg06 from "../../Assets/images/corporateevents-img06.jpg";
import corporateeventsimg07 from "../../Assets/images/corporateevents-img07.jpg";
import corporateeventsimg08 from "../../Assets/images/corporateevents-img08.jpg";
import individualeventsimg01 from "../../Assets/images/individualevents-img01.jpg";
import individualeventsimg02 from "../../Assets/images/individualevents-img02.jpg";
import individualeventsimg03 from "../../Assets/images/individualevents-img03.jpg";
import individualeventsimg04 from "../../Assets/images/individualevents-img04.jpg";
import individualeventsimg05 from "../../Assets/images/individualevents-img05.jpg";
import individualeventsimg06 from "../../Assets/images/individualevents-img06.jpg";
import individualeventsimg07 from "../../Assets/images/individualevents-img07.jpg";
import individualeventsimg08 from "../../Assets/images/individualevents-img08.jpg";
import icon01 from "../../Assets/images/icon-desired.png";
import icon02 from "../../Assets/images/icon-find.png";
import icon03 from "../../Assets/images/icon-book.png";
import professionalservicesimg01 from "../../Assets/images/professional-services-img01.png";
import professionalservicesimg02 from "../../Assets/images/professional-services-img02.png";
import landingpageimg01 from "../../Assets/images/landingpage-img01.jpg";
import icon08 from "../../Assets/images/icon-08.svg";
import logo from "../../Assets/images/logo.png";
import safespace from "../../Assets/images/icon-safespace.svg";
import chancetosave from "../../Assets/images/icon-chancetosave.svg";
import widerange from "../../Assets/images/icon-widerange.svg";
import memorable from "../../Assets/images/icon-memorable.svg";
import joinbg from "../../Assets/images/join-bg.png";
import free from "../../Assets/images/free.png";
import landingpageimg02 from "../../Assets/images/landingpage-img02.png";

import videodemo from "../../Assets/images/demo.mp4";

//Components
import NavBar from "../NavBar";
import Footer from "../Footer";
import FeaturedProperties from "../FeaturedProperties";
import TopRatedProperties from "../TopRatedProperties";
import RecentlyAddedProperties from "../RecentlyAddedProperties";
import RecentProjects from "../RecentProjects";
import ClientTestimonials from "../ClientTestimonials";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function LandingPage() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState(0);

  const tabhandleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <NavBar />
      <Box className="landingpageContainer">
        <Box className="landingpage-banner">
          <img src={bannerPhoto} className="image-overlay" />
          <Box className="banner-content">
            <Typography variant="h1">
              Kickstart your Next{" "}
              <span className="span700">
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    "Film & TV Shoot",
                    1000,
                    "Corporate Retreat",
                    1000,
                    "Personal Event",
                    1000,
                  ]}
                  speed={{type: 'keyStrokeDelayInMs', value: 150}}
                  repeat={Infinity}
                />
              </span>{" "}
              with SpotLet
            </Typography>
            <Box className="banner-search">
              <ul>
                <li className="select-input">
                  <FormControl>
                    <Select
                      sx={{
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                          {
                            border: 0,
                          },
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            border: 0,
                          },
                      }}
                      className="custom-select"
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">Event</MenuItem>
                    </Select>
                    <FormHelperText className="custom-select-label">
                      Select Event
                    </FormHelperText>
                  </FormControl>
                </li>
                <li className="select-input">
                  <FormControl>
                    <Select
                      sx={{
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                          {
                            border: 0,
                          },
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            border: 0,
                          },
                      }}
                      className="custom-select"
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">Activity</MenuItem>
                    </Select>
                    <FormHelperText className="custom-select-label">
                      Select Activity
                    </FormHelperText>
                  </FormControl>
                </li>
                <li className="select-input">
                  <FormControl>
                    <Select
                      sx={{
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                          {
                            border: 0,
                          },
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            border: 0,
                          },
                      }}
                      className="custom-select"
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">Location</MenuItem>
                    </Select>
                    <FormHelperText className="custom-select-label">
                      Select Location
                    </FormHelperText>
                  </FormControl>
                </li>
                <li className="select-input">
                  <FormControl>
                    <Select
                      sx={{
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                          {
                            border: 0,
                          },
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            border: 0,
                          },
                      }}
                      className="custom-select"
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">City</MenuItem>
                    </Select>
                    <FormHelperText className="custom-select-label">
                      Select City
                    </FormHelperText>
                  </FormControl>
                </li>
                <li className="select-button">
                  <Button
                    className="btn-search"
                    variant="contained"
                    size="large"
                  >
                    Search
                  </Button>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box className="landingpage-content">
          <Box className="film-shooting">
            <Typography className="text-stroke" variant="h2">
              CREATIVE SPACES
            </Typography>
            <Typography className="mar-t60" variant="h2">
              FILM SHOOTING
            </Typography>
            <Box className="tabs-container">
              <Box>
                <Tabs
                  className="tabs-film-shooting"
                  value={value}
                  onChange={tabhandleChange}
                  aria-label="basic tabs example"
                >
                  <Tab
                    className="tab-text"
                    icon={<VideoStableIcon />}
                    iconPosition="start"
                    label="Film Shooting"
                    {...a11yProps(0)}
                  />
                  <Tab
                    className="tab-text"
                    icon={<CorporateFareIcon />}
                    iconPosition="start"
                    label="Corporate Events"
                    {...a11yProps(1)}
                  />
                  <Tab
                    className="tab-text"
                    icon={<PersonIcon />}
                    iconPosition="start"
                    label="Individual Events"
                    {...a11yProps(2)}
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <ul className="tablisting">
                  <li>
                    <img src={filmshootingimg01} />
                    <span>Ad Film Shoot</span>
                  </li>
                  <li>
                    <img src={filmshootingimg02} />
                    <span>Film Shoot</span>
                  </li>
                  <li>
                    <img src={filmshootingimg03} />
                    <span>Web Series Shoot</span>
                  </li>
                  <li>
                    <img src={filmshootingimg04} />
                    <span>Music Album Shoot</span>
                  </li>
                  <li>
                    <img src={filmshootingimg05} />
                    <span>Tv Serial</span>
                  </li>
                  <li>
                    <img src={filmshootingimg06} />
                    <span>PhotoShoot</span>
                  </li>
                  <li>
                    <img src={filmshootingimg07} />
                    <span>Video Shoot</span>
                  </li>
                  <li>
                    <img src={filmshootingimg08} />
                    <span>Green Screen Shoot</span>
                  </li>
                </ul>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <ul className="tablisting">
                  <li>
                    <img src={corporateeventsimg01} />
                    <span>Product Launch</span>
                  </li>
                  <li>
                    <img src={corporateeventsimg02} />
                    <span>Company Anniversary</span>
                  </li>
                  <li>
                    <img src={corporateeventsimg03} />
                    <span>Press Conference</span>
                  </li>
                  <li>
                    <img src={corporateeventsimg04} />
                    <span>Awards Ceremony</span>
                  </li>
                  <li>
                    <img src={corporateeventsimg05} />
                    <span>Trade Show</span>
                  </li>
                  <li>
                    <img src={corporateeventsimg06} />
                    <span>Fashion Show</span>
                  </li>
                  <li>
                    <img src={corporateeventsimg07} />
                    <span>Company Meetings</span>
                  </li>
                  <li>
                    <img src={corporateeventsimg08} />
                    <span>Corporate Party</span>
                  </li>
                </ul>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <ul className="tablisting">
                  <li>
                    <img src={individualeventsimg01} />
                    <span>Birthday Party</span>
                  </li>
                  <li>
                    <img src={individualeventsimg02} />
                    <span>Bachelor Party</span>
                  </li>
                  <li>
                    <img src={individualeventsimg03} />
                    <span>Engagement</span>
                  </li>
                  <li>
                    <img src={individualeventsimg04} />
                    <span>Wedding</span>
                  </li>
                  <li>
                    <img src={individualeventsimg05} />
                    <span>Festive Event</span>
                  </li>
                  <li>
                    <img src={individualeventsimg06} />
                    <span>Baby Shower</span>
                  </li>
                  <li>
                    <img src={individualeventsimg07} />
                    <span>Friends Gathering</span>
                  </li>
                  <li>
                    <img src={individualeventsimg08} />
                    <span>Cocktail Party</span>
                  </li>
                </ul>
              </CustomTabPanel>
            </Box>
          </Box>
          <Box className="simple-3-step">
            <Typography className="text-stroke" variant="h2">
              3 STEP PROCESS
            </Typography>
            <Typography className="mar-t60" variant="h2">
              A SIMPLE 3-STEP BOOKING PROCESS
            </Typography>
            <Box className="step-container">
              <Box className="step-box">
                <figure>
                  <img src={icon01} />
                </figure>
                <Typography variant="h5" gutterBottom>
                  Choose your Desired Interest
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
                  Find the Perfect Spot
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
                  Book your Dates
                </Typography>
                <Typography variant="body1">
                  Choose a competitive rate to start hosting exceptional events.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="featured-properties">
            <Typography className="text-stroke" variant="h2">
              IN INDIA
            </Typography>
            <Typography className="mar-t60" variant="h2">
              FEATURED PROPERTIES
            </Typography>
            <Box className="properties-container">
              <FeaturedProperties />
            </Box>
          </Box>
          <Box className="professional-services">
            <Typography className="text-stroke" variant="h2">
              Professionals
            </Typography>
            <Typography className="mar-t60" variant="h2">
              SpotLet Professional Services
            </Typography>
            <Typography variant="body1">
              Let us take the lead in discovering the hidden locations,
              skillfully negotiating rates, and ensuring your desired dates are
              locked in.
            </Typography>
            <Box className="services-container">
              <Box className="img-txt-panel">
                <img
                  src={professionalservicesimg01}
                  className="image-overlay"
                />
                <Typography variant="h4">
                  SpotLet Professional Services
                </Typography>
                <Typography variant="body1">
                  Let our expert team assist you in discovering your perfect
                  location
                </Typography>
                <Button className="readmore" variant="contained" size="large">
                  Find My Spot
                </Button>
              </Box>
              <Box className="img-txt-panel">
                <img
                  src={professionalservicesimg02}
                  className="image-overlay"
                />
                <Typography variant="h4">
                  Need Assistance with Your Event Planning?
                </Typography>
                <Typography variant="body1">
                  Our experienced team is here to provide you with comprehensive
                  event planning support.
                </Typography>
                <Button className="readmore" variant="contained" size="large">
                  Get Started
                </Button>
              </Box>
            </Box>
          </Box>
          <Box className="top-rated-properties">
            <Typography className="text-stroke" variant="h2">
              Top Rated
            </Typography>
            <Typography className="mar-t60" variant="h2">
              Top Rated Properties
            </Typography>
            <Box className="properties-container">
              <TopRatedProperties />
            </Box>
          </Box>
          <Box className="why-choose-us">
            <Typography className="text-stroke" variant="h2">
              Choose us
            </Typography>
            <Typography className="mar-t60" variant="h2">
              Why Choose Us
            </Typography>
            <Box className="why-container">
              <figure>
                <img src={landingpageimg01} />
                <Typography className="box" variant="subtitle1">
                  lorem ipsum dolor sit amet
                </Typography>
              </figure>
              <article>
                <Box className="icon-content">
                  <Box className="icon">
                    <img src={icon08} />
                  </Box>
                  <Box className="content">
                    <Typography variant="subtitle1">Exciting Spaces</Typography>
                    <Typography variant="body1">
                      Whether you’re hosting a family get-together, planning a
                      corporate event or starting an OTT series, we have the
                      perfect spaces for you to uncover!
                    </Typography>
                  </Box>
                </Box>
                <Box className="icon-content">
                  <Box className="icon">
                    <img src={icon08} />
                  </Box>
                  <Box className="content">
                    <Typography variant="subtitle1">
                      Transparent Prices
                    </Typography>
                    <Typography variant="body1">
                      We assure you of no hidden fees in all our properties. Pay
                      for what you need and find the most cost-effective spaces
                      for your requirements.
                    </Typography>
                  </Box>
                </Box>
                <Box className="icon-content">
                  <Box className="icon">
                    <img src={icon08} />
                  </Box>
                  <Box className="content">
                    <Typography variant="subtitle1">
                      Simplified Bookings
                    </Typography>
                    <Typography variant="body1">
                      Bid goodbye to long messy contracts and legal hassles. Our
                      smooth and simplified booking can be made on the go,
                      within a few minutes!
                    </Typography>
                  </Box>
                </Box>
              </article>
            </Box>
          </Box>
          <Box className="recently-added-properties">
            <Typography className="text-stroke" variant="h2">
              Recently
            </Typography>
            <Typography className="mar-t60" variant="h2">
              Recently Added Properties
            </Typography>
            <Box className="properties-container">
              <RecentlyAddedProperties />
            </Box>
          </Box>
          <Box className="client-testimonials">
            <Typography className="text-stroke" variant="h2">
              Testimonials
            </Typography>
            <Typography className="mar-t60" variant="h2">
              Client Testimonials
            </Typography>
            <Box className="testimonials-Container">
              <ClientTestimonials />
            </Box>
          </Box>
          <Box className="recent-projects">
            <Box className="project-heading">
              <img src={logo} />
              <Typography variant="h4">Recent Projects</Typography>
              <Typography variant="body1">
                "Unlocking Success Through Innovation"
              </Typography>
            </Box>
            <Box className="project-carousel">
              <RecentProjects />
            </Box>
          </Box>
          <Box className="project-video">
            <CardMedia
              className="video-player"
              component="iframe"
              src={videodemo}
              allow="autoPlay"
              loop
              controls
            />
          </Box>
          <Box className="spotlet-provides">
            <Typography className="text-stroke" variant="h2">
              Sporlet
            </Typography>
            <Typography className="mar-t60" variant="h2">
              SpotLet Provides
            </Typography>
            <Box className="provides-container">
              <Box className="icon-text-box">
                <figure>
                  <img src={safespace} />
                </figure>
                <Typography variant="h5">A Safe Space</Typography>
                <Typography variant="body1">
                  We do our background research and ensure that all the
                  properties on our portal are safe for usage amongst crew
                  members, teams, families and friends.
                </Typography>
              </Box>
              <Box className="icon-text-box">
                <figure>
                  <img src={chancetosave} />
                </figure>
                <Typography variant="h5">A Chance to Save</Typography>
                <Typography variant="body1">
                  You can save up to 20% when you book with SpotLet, compared to
                  when you work with a location agency. In addition, our prices
                  are affordable and budget-friendly.
                </Typography>
              </Box>
              <Box className="icon-text-box">
                <figure>
                  <img src={widerange} />
                </figure>
                <Typography variant="h5">A Wide Range of Options</Typography>
                <Typography variant="body1">
                  We invite you to explore our diverse locations for all kinds
                  of shooting, events and celebrations. You’ll always be spoilt
                  for choice!
                </Typography>
              </Box>
              <Box className="icon-text-box">
                <figure>
                  <img src={memorable} />
                </figure>
                <Typography variant="h5">A Memorable Experience</Typography>
                <Typography variant="body1">
                  We promise our customers a smooth, satisfactory and memorable
                  experience during the booking, and our hosts ensure you love
                  your location every time!
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="join-us">
            <Box className="join-content">
              <img src={joinbg} className="image-overlay" />
              <article>
                <Typography variant="h2" gutterBottom>
                  Post your Property for <img src={free} />
                </Typography>
                <Typography variant="body1">
                  Ready to discover incredible spaces that match your vision?
                  Let SpotLet guide you to the most exciting locations for your
                  events.
                </Typography>
              </article>
              <aside>
                <Button className="readmore" variant="contained" size="large">
                  Post Property <div className="spanfree">Free</div>
                </Button>
              </aside>
            </Box>
          </Box>
          <Box className="host-your-spot">
            <Box className="host-container">
              <article>
                <Typography variant="h2" gutterBottom>
                  Host your Spot with U
                </Typography>
                <Typography variant="body1">
                  If you’d like to become a host and list your unique property,
                  we’d be happy to showcase it on our website. We invite you to
                  join our growing family
                </Typography>
                <Button className="readmore" variant="contained" size="large">
                  List Your Space
                </Button>
              </article>
              <figure>
                <img src={landingpageimg02} />
              </figure>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
