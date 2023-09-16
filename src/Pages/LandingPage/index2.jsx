import React, { useState, useRef } from "react";

import gsap from "gsap";
import PropTypes from "prop-types";
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

import buildingIcon from "../../Assets/images/properitiseImage/BildingIcon.png";
import FilmIcon from "../../Assets/images/properitiseImage/FlimBoxIcon.png";
// import PersonIcon from "../../Assets/images/properitiseImage/PersonIcon.png";

import Pimage1 from "../../Assets/images/properitiseImage/2021-10-23.jpg";
import Pimage2 from "../../Assets/images/properitiseImage/Banquet-Hall-Gallery-15.jpeg";
import Pimage3 from "../../Assets/images/properitiseImage/IMG-20221120-WA0148.jpg";

//Components
import NavBar from "../NavBar";
import Footer from "../Footer";
import { propertiesCard } from "../../Component/PropertiesCard";

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

  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);
  const [scrolLeftEnd, setScrolLeftEnd] = useState(false);

  const slide = (shift) => {
    if (scrl.current.scrollLeft === 0) {
      setScrolLeftEnd(true);
    } else {
      setScrolLeftEnd(false);
    }

    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const anim = (e) => {
    gsap.from(e.target, { scale: 1 });
    gsap.to(e.target, { scale: 1.5 });
  };
  const anim2 = (e) => {
    gsap.from(e.target, { scale: 1.5 });
    gsap.to(e.target, { scale: 1 });
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  // const handleVideoBoxScroll = () => {
  //   const videosBox = document.getElementById('videosBox');
  //   videosBox.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <>
      <NavBar />
      <Box className="landingpageContainer">
        <Box className="landingpage-banner">
          <img src={bannerPhoto} className="image-overlay" />
          <Box className="banner-content">
            <Typography variant="h1">
              Kickstart your Next{" "}
              <span className="span700">Film & Tv Shoot</span> with SpotLet
            </Typography>
            <Box className="banner-search">
              <ul>
                <li className="select-input">
                  <FormControl>
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">Event</MenuItem>
                    </Select>
                    <FormHelperText>Select Event</FormHelperText>
                  </FormControl>
                </li>
                <li className="select-input">
                  <FormControl>
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">Activity</MenuItem>
                    </Select>
                    <FormHelperText>Select Activity</FormHelperText>
                  </FormControl>
                </li>
                <li className="select-input">
                  <FormControl>
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">Location</MenuItem>
                    </Select>
                    <FormHelperText>Select Location</FormHelperText>
                  </FormControl>
                </li>
                <li className="select-input">
                  <FormControl>
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">City</MenuItem>
                    </Select>
                    <FormHelperText>Select City</FormHelperText>
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
                    icon={<VideoStableIcon />}
                    iconPosition="start"
                    label="Film Shooting"
                    {...a11yProps(0)}
                  />
                  <Tab
                    icon={<CorporateFareIcon />}
                    iconPosition="start"
                    label="Corporate Events"
                    {...a11yProps(1)}
                  />
                  <Tab
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
              <Box className="YouTubeContent" ref={scrl} onScroll={scrollCheck}>
                {propertiesCard(
                  Pimage1,
                  "#SWISS23808",
                  "INR. 4000",
                  "Cafe",
                  "Sri Ram Nagar",
                  [buildingIcon, PersonIcon]
                )}
                {propertiesCard(
                  Pimage1,
                  "#SWISS23808",
                  "INR. 4000",
                  "Cafe",
                  "Sri Ram Nagar",
                  [buildingIcon, PersonIcon]
                )}
                {propertiesCard(
                  Pimage1,
                  "#SWISS23808",
                  "INR. 4000",
                  "Cafe",
                  "Sri Ram Nagar",
                  [buildingIcon, PersonIcon]
                )}
                {propertiesCard(
                  Pimage1,
                  "#SWISS23808",
                  "INR. 4000",
                  "Cafe",
                  "Sri Ram Nagar",
                  [buildingIcon, PersonIcon]
                )}
                {propertiesCard(
                  Pimage1,
                  "#SWISS23808",
                  "INR. 4000",
                  "Cafe",
                  "Sri Ram Nagar",
                  [buildingIcon, PersonIcon]
                )}
                {propertiesCard(
                  Pimage1,
                  "#SWISS23808",
                  "INR. 4000",
                  "Cafe",
                  "Sri Ram Nagar",
                  [buildingIcon, PersonIcon]
                )}
              </Box>

              <Box className="arrowBox">
                <Box
                  className={`ScrollBtn${scrolLeftEnd ? " arrowDisabled" : ""}`}
                  onClick={() => slide(-300)}
                  onMouseEnter={(e) => anim(e)}
                  onMouseLeave={(e) => anim2(e)}
                >
                  <img style={{ width: "40px" }} src={icon01} />
                </Box>
                <Box
                  className={`ScrollBtn${scrolEnd ? " arrowDisabled" : ""}`}
                  onClick={() => slide(+300)}
                  onMouseEnter={(e) => anim(e)}
                  onMouseLeave={(e) => anim2(e)}
                >
                  <img style={{ width: "40px" }} src={icon02} />
                </Box>
              </Box>
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
          </Box>
          <Box className="top-rated-properties">
            <Typography className="text-stroke" variant="h2">
              Top Rated
            </Typography>
            <Typography className="mar-t60" variant="h2">
              Top Rated Properties
            </Typography>
          </Box>
          <Box className="why-choose-us">
            <Typography className="text-stroke" variant="h2">
              Choose us
            </Typography>
            <Typography className="mar-t60" variant="h2">
              Why Choose Us
            </Typography>
          </Box>
          <Box className="recently-added-properties">
            <Typography className="text-stroke" variant="h2">
              Recently
            </Typography>
            <Typography className="mar-t60" variant="h2">
              Recently Added Properties
            </Typography>
          </Box>
          <Box className="client-testimonials">
            <Typography className="text-stroke" variant="h2">
              Testimonials
            </Typography>
            <Typography className="mar-t60" variant="h2">
              Client Testimonials
            </Typography>
          </Box>
          <Box className="recent-projects"></Box>
          <Box className="project-video"></Box>
          <Box className="spotlet-provides">
            <Typography className="text-stroke" variant="h2">
              Sporlet
            </Typography>
            <Typography className="mar-t60" variant="h2">
              SpotLet Provides
            </Typography>
          </Box>
          <Box className="post-property"></Box>
          <Box className="host-your-spot"></Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
