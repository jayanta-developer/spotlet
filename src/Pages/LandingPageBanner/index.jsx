import React from "react";
import "./style.css";
import { Box, Typography } from "@mui/material";

//Owl Carousel Libraries and Module
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

// import slide01 from "../../Assets/images/SliderImages/film-tv-shoot.jpg";
// import slide02 from "../../Assets/images/SliderImages/corporate-retreat.jpg";
// import slide03 from "../../Assets/images/SliderImages/personal-event.jpg";


import slide01 from "../../Assets/images/SliderImages/film-tv-shoot2.jpeg";
import slide02 from "../../Assets/images/SliderImages/corporate-retreat2.jpg";
import slide03 from "../../Assets/images/SliderImages/personal-event2.jpeg";

function Autoplay() {
  return (
    <Slider className="landingpageSlider" autoplay={4000}>
      <img src={slide01} className="image-overlay" />
      <img src={slide02} className="image-overlay" />
      <img src={slide03} className="image-overlay" />
    </Slider>
  );
}

export default Autoplay;
