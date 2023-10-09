import React from "react";
import "./style.css";

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
  animateIn: "fadeIn",
  animateOut: "fadeOut",
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
          </div>
          <div className="item">
            <img src={slide02} className="image-overlay darken" />
          </div>
          <div className="item">
            <img src={slide03} className="image-overlay darken" />
          </div>
        </OwlCarousel>
      </div>
    );
  }
}
export default App;
