import React from "react";
import "./style.css";
import { Box, Typography } from "@mui/material";
import ReactTyped from "react-typed";

//Owl Carousel Libraries and Module
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import slide01 from "../../Assets/images/SliderImages/film-tv-shoot2.jpeg";
import slide02 from "../../Assets/images/SliderImages/corporate-retreat2.jpg";
import slide03 from "../../Assets/images/SliderImages/personal-event2.jpeg";

//Owl Carousel Settings
const options = {
  margin: 0,
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
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
      items: 1,
    },
    1000: {
      items: 1,
    },
    1170: {
      items: 1,
    },
  },
};
class App extends React.Component {
  render() {
    return (
      <div>
        <OwlCarousel className="banner-carousel owl-carousel" {...options}>
          <div className="item">
            <img src={slide01} className="image-overlay darken" />
            <Box className="banner-container">
              <Typography variant="h1">
                Kickstart your Next{" "}
                <span className="span700">
                  Film & Tv Shoot
                  {/* <ReactTyped strings={["Film &amp; Tv Shoot"]}
                    typeSpeed={150}
                    loop
                    backSpeed={50}
                    cursorChar="|"
                    showCursor={true} /> */}
                </span>{" "}
                with SpotLet
              </Typography>
            </Box>
          </div>
          <div className="item">
            <img src={slide02} className="image-overlay darken" />
            <Box className="banner-container">
              <Typography variant="h1">
                Jumpstart  your Next{" "}
                <span className="span700">
                  Corporate Retreat
                  {/* <ReactTyped strings={["Corporate Retreat"]}
                    typeSpeed={150}
                    loop
                    backSpeed={20}
                    cursorChar="|"
                    showCursor={true} /> */}
                </span>{" "}
                with SpotLet
              </Typography>
            </Box>
          </div>
          <div className="item">
            <img src={slide03} className="image-overlay darken" />
            <Box className="banner-container">
              <Typography variant="h1">
                Upstart your Next{" "}
                <span className="span700">Personal Event
                  {/* <ReactTyped strings={["Personal Event"]}
                    typeSpeed={150}
                    loop
                    backSpeed={20}
                    cursorChar="|"
                    showCursor={true} /> */}
                </span>{" "}
                with SpotLet
              </Typography>
            </Box>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}
export default App;