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
            <Box className="testimonials-Card">
            <Rating name="size-small" defaultValue={4} />
              <Typography className="testimonialsCardSubText">
                "SpotLet made finding our dream wedding venue a breeze. We were
                able to shortlist and connect with hosts in no time. Thank you
                for making our special day even more special!
              </Typography>
              <Box className="userInfoBox">
                <Box className="userProfilePic">
                  <p>E</p>
                </Box>
                <Box sx={{ position: "relative" }} ml={2}>
                  <img className="blueTik" src={blueTik} />
                  <Typography className="User_name">Emily and James</Typography>
                  <Typography className="userRole">Guest</Typography>
                </Box>
              </Box>
            </Box>
          </div>
          <div className="item">
            <Box className="testimonials-Card">
            <Rating name="size-small" defaultValue={4} />
              <Typography className="testimonialsCardSubText">
                Our corporate event was a huge success thanks to SpotLet. We
                found the perfect retreat center that aligned with our needs and
                budget. Highly recommended!
              </Typography>
              <Box className="userInfoBox">
                <Box className="userProfilePic">
                  <p>A</p>
                </Box>
                <Box sx={{ position: "relative" }} ml={2}>
                  <Typography className="User_name">Alex</Typography>
                  <Typography className="userRole">
                    CEO of TechNex Corp
                  </Typography>
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
