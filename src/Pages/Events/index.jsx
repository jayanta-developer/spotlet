import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Button,
  Rating,
  TextField,
  Tabs,
  Tab,
} from "@mui/material";
import "./style.css";

import bannerPhoto from "../../Assets/images/events-banner.png";
import blueTik from "../../Assets/images/hexagon-check.svg";
import eventsimg01 from "../../Assets/images/eventsimg01.png";
import eventsimg02 from "../../Assets/images/eventsimg02.png";
import eventsimg04 from "../../Assets/images/events-img04.png";

import galleryimg01 from "../../Assets/images/gallery-img01.png";
import galleryimg02 from "../../Assets/images/gallery-img02.png";
import galleryimg03 from "../../Assets/images/gallery-img03.png";
import galleryimg04 from "../../Assets/images/gallery-img04.png";

//Components
import NavBar from "../NavBar";
import Footer from "../Footer";
import EventsGallery from "../EventsGallery";
import EventsTestimonials from "../EventsTestimonials";

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

export default function Events() {
  const [value, setValue] = React.useState(0);

  const tabhandleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <NavBar />
      <Box className="eventContainer">
        <Box className="events-bg">
          <img src={bannerPhoto} className="image-overlay" />
          <Box className="banner-content">
            <Typography variant="h1" gutterBottom>
              Elevate Your Corporate Events
            </Typography>
            <Typography variant="subtitle1">
              At SpotLet, we specialize in creating memorable corporate events
              that leave a lasting impression. Whether you're planning a
              conference, seminar, product launch, team-building retreat, or any
              corporate gathering, our experienced team is here to make it a
              success
            </Typography>
          </Box>
        </Box>
        <Box className="events-content">
          <Box className="events-welcome">
            <Typography variant="h2" gutterBottom>
              Corporate Events with SpotLet
            </Typography>
            <Typography variant="body1">
              Welcome to SpotLet Events, where we bring your corporate
              gatherings to life with exceptional locations, meticulous event
              planning, and seamless execution. Whether you're organizing a
              conference, seminar, team-building event, or any corporate
              gathering, we've got you covered. Our comprehensive event services
              encompass everything from finding the perfect venue to expert
              event management, ensuring a remarkable and stress-free experience
              for you and your guests.
            </Typography>
            <Button className="readmore" variant="contained" size="large">
              Read about us
            </Button>
          </Box>
          <Box className="events-tabs">
            <Typography variant="h2" gutterBottom>
              Corporate Events with SpotLet
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
                    className="tab-text-event"
                    label="Unique Locations"
                    {...a11yProps(0)}
                  />
                  <Tab
                    className="tab-text-event"
                    label="Event Planning"
                    {...a11yProps(1)}
                  />
                  <Tab
                    className="tab-text-event"
                    label="Customization"
                    {...a11yProps(2)}
                  />
                  <Tab
                    className="tab-text-event"
                    label="Seamless Execution"
                    {...a11yProps(3)}
                  />
                  <Tab
                    className="tab-text-event"
                    label="Technology and Support"
                    {...a11yProps(4)}
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <Box className="tabs-content">
                  <article>
                    <Typography variant="h6">Corporate Events</Typography>
                    <Typography variant="h2" gutterBottom>
                      Unique Locations:
                    </Typography>
                    <Typography variant="body1">
                      Elevate your corporate event by choosing from our diverse
                      selection of unique and inspiring venues. From elegant
                      banquet halls to picturesque outdoor settings, our
                      portfolio offers a wide range of options that can be
                      tailored to your specific requirements.
                    </Typography>
                  </article>
                  <figure>
                    <img src={eventsimg02} />
                  </figure>
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Box className="tabs-content">
                  <article>
                    <Typography variant="h6">Corporate Events</Typography>
                    <Typography variant="h2" gutterBottom>
                      Event Planning
                    </Typography>
                    <Typography variant="body1">
                      Elevate your corporate event by choosing from our diverse
                      selection of unique and inspiring venues. From elegant
                      banquet halls to picturesque outdoor settings, our
                      portfolio offers a wide range of options that can be
                      tailored to your specific requirements.
                    </Typography>
                  </article>
                  <figure>
                    <img src={galleryimg01} />
                  </figure>
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <Box className="tabs-content">
                  <article>
                    <Typography variant="h6">Corporate Events</Typography>
                    <Typography variant="h2" gutterBottom>
                      Customization
                    </Typography>
                    <Typography variant="body1">
                      Elevate your corporate event by choosing from our diverse
                      selection of unique and inspiring venues. From elegant
                      banquet halls to picturesque outdoor settings, our
                      portfolio offers a wide range of options that can be
                      tailored to your specific requirements.
                    </Typography>
                  </article>
                  <figure>
                    <img src={galleryimg02} />
                  </figure>
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                <Box className="tabs-content">
                  <article>
                    <Typography variant="h6">Corporate Events</Typography>
                    <Typography variant="h2" gutterBottom>
                      Seamless Execution
                    </Typography>
                    <Typography variant="body1">
                      Elevate your corporate event by choosing from our diverse
                      selection of unique and inspiring venues. From elegant
                      banquet halls to picturesque outdoor settings, our
                      portfolio offers a wide range of options that can be
                      tailored to your specific requirements.
                    </Typography>
                  </article>
                  <figure>
                    <img src={galleryimg03} />
                  </figure>
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={4}>
                <Box className="tabs-content">
                  <article>
                    <Typography variant="h6">Corporate Events</Typography>
                    <Typography variant="h2" gutterBottom>
                      Technology and Support
                    </Typography>
                    <Typography variant="body1">
                      Elevate your corporate event by choosing from our diverse
                      selection of unique and inspiring venues. From elegant
                      banquet halls to picturesque outdoor settings, our
                      portfolio offers a wide range of options that can be
                      tailored to your specific requirements.
                    </Typography>
                  </article>
                  <figure>
                    <img src={galleryimg04} />
                  </figure>
                </Box>
              </CustomTabPanel>
            </Box>
          </Box>
          <Box className="events-why-choose">
            <figure>
              <img src={eventsimg01} />
            </figure>
            <article>
              <Typography variant="h2" gutterBottom>
                Why Choose SpotLet for Corporate Events?
              </Typography>
              <Typography variant="h5">Experienced Team:</Typography>
              <Typography variant="body1" gutterBottom>
                Our event planners have a wealth of experience in organizing
                corporate events, ensuring that every detail is thoughtfully
                planned and executed.
              </Typography>
              <Typography variant="h5">Diverse Venues:</Typography>
              <Typography variant="body1" gutterBottom>
                Choose from a wide range of venues that suit your event's size,
                style, and theme, providing a unique backdrop for your
                gathering.
              </Typography>
              <Typography variant="h5">Personalized Approach:</Typography>
              <Typography variant="body1" gutterBottom>
                We understand that every company is unique. Our team will tailor
                every aspect of the event to match your company's culture and
                objectives.
              </Typography>
              <Typography variant="h5">Efficiency:</Typography>
              <Typography variant="body1" gutterBottom>
                With SpotLet, you can expect efficient event management,
                allowing you to focus on your guests and the purpose of the
                event.
              </Typography>
              <Typography variant="h5">Seamless Integration:</Typography>
              <Typography variant="body1" gutterBottom>
                We seamlessly integrate technology, branding, and logistics to
                ensure a cohesive and impressive event.
              </Typography>
            </article>
          </Box>
          <Box className="events-gallery">
            <Typography variant="h2" gutterBottom>
              Our Gallery
            </Typography>
            <Box className="gallery-container">
              <EventsGallery />
            </Box>
          </Box>
          <Box className="testimonials">
            <Typography mb={3} variant="h2" gutterBottom>
              SpotLet Testimonials
            </Typography>
            <Box className="testimonials-Container">
              <EventsTestimonials />
            </Box>
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
                  <Typography variant="body1">
                    Your Organization Name
                  </Typography>
                  <TextField
                    className="org-input"
                    id="outlined-basic"
                    label="Your Organization Name"
                    variant="outlined"
                  />
                </div>
                <div className="two-column">
                  <Typography variant="body1">Contact Person Name</Typography>
                  <TextField
                    className="name-input"
                    id="outlined-basic"
                    label="Contact Person Name"
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
                    label="Mobile Number"
                    variant="outlined"
                  />
                </div>
                <div className="two-column">
                  <Typography variant="body1">Email Address</Typography>
                  <TextField
                    className="email-input"
                    id="outlined-basic"
                    label="Email Address"
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
                    label="Message"
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
              <img src={eventsimg04} className="image-overlay" />
            </figure>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
