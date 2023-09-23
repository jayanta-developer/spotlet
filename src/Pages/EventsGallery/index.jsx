import React from "react";
import "./style.css";

//Owl Carousel Libraries and Module
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import galleryimg01 from "../../Assets/images/gallery-img01.png";
import galleryimg02 from "../../Assets/images/gallery-img02.png";
import galleryimg03 from "../../Assets/images/gallery-img03.png";
import galleryimg04 from "../../Assets/images/gallery-img04.png";

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
      items: 2,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1170: {
      items: 4,
    },
  },
};
class App extends React.Component {
  render() {
    return (
      <div>
        <OwlCarousel
          className="events-gallery-carousel owl-carousel"
          {...options}
        >
          <div className="item">
            <img src={galleryimg01} />
          </div>
          <div className="item">
            <img src={galleryimg02} />
          </div>
          <div className="item">
            <img src={galleryimg03} />
          </div>
          <div className="item">
            <img src={galleryimg04} />
          </div>
        </OwlCarousel>
      </div>
    );
  }
}
export default App;
