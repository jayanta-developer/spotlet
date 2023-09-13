import React from "react";
import PropTypes from "prop-types";
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

import VideoStableIcon from '@mui/icons-material/VideoStable';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PersonIcon from '@mui/icons-material/Person';

import bannerPhoto from "../../Assets/images/landing-banner.png";

//Components
import NavBar from "../NavBar";
import Footer from "../Footer";

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
                <Tabs className="tabs-film-shooting"
                  value={value}
                  onChange={tabhandleChange}
                  aria-label="basic tabs example"                 >
                  <Tab icon={<VideoStableIcon />} iconPosition="start" label="Film Shooting" {...a11yProps(0)} />
                  <Tab icon={<CorporateFareIcon />} iconPosition="start" label="Corporate Events" {...a11yProps(1)} />
                  <Tab icon={<PersonIcon />} iconPosition="start" label="Individual Events" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                Item One
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                Item Two
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Item Three
              </CustomTabPanel>
            </Box>
          </Box>
          <Box className="simple-3-step"></Box>
          <Box className="featured-properties"></Box>
          <Box className="professional-services"></Box>
          <Box className="top-rated-properties"></Box>
          <Box className="why-choose-us"></Box>
          <Box className="recently-added-properties"></Box>
          <Box className="client-testimonials"></Box>
          <Box className="recent-projects"></Box>
          <Box className="project-video"></Box>
          <Box className="spotlet-provides"></Box>
          <Box className="post-property"></Box>
          <Box className="host-your-spot"></Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
