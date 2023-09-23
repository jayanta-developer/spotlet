import React from "react";
import "./style.css";
import { Box, Typography, Rating } from "@mui/material";

//Owl Carousel Libraries and Module
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import blueTik from "../../Assets/images/hexagon-check.svg";

//Owl Carousel Settings
const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  autoplay: true,
  loop: true,
  navText: ["", ""],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 2,
    },
    1170: {
      items: 2,
    },
  },
};
class App extends React.Component {
  render() {
    return (
      <div>
        <OwlCarousel
          className="clienttestimonials-carousel owl-carousel"
          {...options}
        >
          <div className="item">
            <Box className="testimonials-Card-grey">
              <Rating name="size-small" defaultValue={2} />
              <Typography className="testimonialsCardSubText">
                We’re a renowned 5-star hotel in the heart of the city, often
                booked by families and outstation guests. However, we wanted to
                expand our customer base and become a preferred location for
                corporate events. SpotLet allowed us to reach out to our
                potential customers, and we’re doing great business with
                corporates now!
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
          </div>
          <div className="item">
            <Box className="testimonials-Card-grey">
              <Rating name="size-small" defaultValue={2} />
              <Typography className="testimonialsCardSubText">
                We’re a renowned 5-star hotel in the heart of the city, often
                booked by families and outstation guests. However, we wanted to
                expand our customer base and become a preferred location for
                corporate events. SpotLet allowed us to reach out to our
                potential customers, and we’re doing great business with
                corporates now!
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
          </div>
        </OwlCarousel>
      </div>
    );
  }
}
export default App;
