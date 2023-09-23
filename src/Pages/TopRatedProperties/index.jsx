import React from "react";
import "./style.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Typography, Rating } from "@mui/material";

//Owl Carousel Libraries and Module
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import iconverified from "../../Assets/images/icon-verified.svg";
import iconwishlist from "../../Assets/images/wishlist.svg";
import iconfilm from "../../Assets/images/icon-film.svg";
import iconcorporate from "../../Assets/images/icon-corporate.svg";
import iconindividual from "../../Assets/images/icon-individual.svg";
import propertiesimg05 from "../../Assets/images/properties-img05.png";
import propertiesimg06 from "../../Assets/images/properties-img06.png";
import propertiesimg07 from "../../Assets/images/properties-img07.png";
import propertiesimg08 from "../../Assets/images/properties-img08.png";

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
        <OwlCarousel className="properties-carousel owl-carousel" {...options}>
          <div className="item">
            <Box className="properties-box">
              <figure>
                <img src={propertiesimg05} />
              </figure>
              <div className="verified">
                <img src={iconverified} /> Verified
              </div>
              <div className="wishlist">
                <a href="#">
                  <img src={iconwishlist} />
                </a>
              </div>
              <div className="tags-icon">
                <a href="#">
                  <img src={iconfilm} />
                </a>
                <a href="#">
                  <img src={iconcorporate} />
                </a>
                <a href="#">
                  <img src={iconindividual} />
                </a>
              </div>
              <article>
                <div className="name-price">
                  <Typography variant="h2">#SPEED41606</Typography>
                  <Typography variant="h3">INR. 4000/hr</Typography>
                </div>
                <div className="other-info">
                  <Typography className="rating" variant="subtitle1">
                    <Rating name="size-small" defaultValue={4} /> 4.1 (484)
                  </Typography>
                  <Typography className="namepro" variant="subtitle2">
                    Pant House
                  </Typography>
                  <Typography
                    className="proaddress"
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    <LocationOnIcon className="red" /> Maruthi Nagar, Hyderabad
                  </Typography>
                </div>
              </article>
            </Box>
          </div>
          <div className="item">
            <Box className="properties-box">
              <figure>
                <img src={propertiesimg06} />
              </figure>
              <div className="verified">
                <img src={iconverified} /> Verified
              </div>
              <div className="wishlist">
                <a href="#">
                  <img src={iconwishlist} />
                </a>
              </div>
              <div className="tags-icon">
                <a href="#">
                  <img src={iconfilm} />
                </a>
                <a href="#">
                  <img src={iconcorporate} />
                </a>
                <a href="#">
                  <img src={iconindividual} />
                </a>
              </div>
              <article>
                <div className="name-price">
                  <Typography variant="h2">#SPEED41606</Typography>
                  <Typography variant="h3">INR. 4000/hr</Typography>
                </div>
                <div className="other-info">
                  <Typography className="rating" variant="subtitle1">
                    <Rating name="size-small" defaultValue={4} /> 4.1 (484)
                  </Typography>
                  <Typography className="namepro" variant="subtitle2">
                    Pant House
                  </Typography>
                  <Typography
                    className="proaddress"
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    <LocationOnIcon className="red" /> Maruthi Nagar, Hyderabad
                  </Typography>
                </div>
              </article>
            </Box>
          </div>
          <div className="item">
            <Box className="properties-box">
              <figure>
                <img src={propertiesimg07} />
              </figure>
              <div className="verified">
                <img src={iconverified} /> Verified
              </div>
              <div className="wishlist">
                <a href="#">
                  <img src={iconwishlist} />
                </a>
              </div>
              <div className="tags-icon">
                <a href="#">
                  <img src={iconfilm} />
                </a>
                <a href="#">
                  <img src={iconcorporate} />
                </a>
                <a href="#">
                  <img src={iconindividual} />
                </a>
              </div>
              <article>
                <div className="name-price">
                  <Typography variant="h2">#SPEED41606</Typography>
                  <Typography variant="h3">INR. 4000/hr</Typography>
                </div>
                <div className="other-info">
                  <Typography className="rating" variant="subtitle1">
                    <Rating name="size-small" defaultValue={4} /> 4.1 (484)
                  </Typography>
                  <Typography className="namepro" variant="subtitle2">
                    Pant House
                  </Typography>
                  <Typography
                    className="proaddress"
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    <LocationOnIcon className="red" /> Maruthi Nagar, Hyderabad
                  </Typography>
                </div>
              </article>
            </Box>
          </div>
          <div className="item">
            <Box className="properties-box">
              <figure>
                <img src={propertiesimg08} />
              </figure>
              <div className="verified">
                <img src={iconverified} /> Verified
              </div>
              <div className="wishlist">
                <a href="#">
                  <img src={iconwishlist} />
                </a>
              </div>
              <div className="tags-icon">
                <a href="#">
                  <img src={iconfilm} />
                </a>
                <a href="#">
                  <img src={iconcorporate} />
                </a>
                <a href="#">
                  <img src={iconindividual} />
                </a>
              </div>
              <article>
                <div className="name-price">
                  <Typography variant="h2">#SPEED41606</Typography>
                  <Typography variant="h3">INR. 4000/hr</Typography>
                </div>
                <div className="other-info">
                  <Typography className="rating" variant="subtitle1">
                    <Rating name="size-small" defaultValue={4} /> 4.1 (484)
                  </Typography>
                  <Typography className="namepro" variant="subtitle2">
                    Pant House
                  </Typography>
                  <Typography
                    className="proaddress"
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    <LocationOnIcon className="red" /> Maruthi Nagar, Hyderabad
                  </Typography>
                </div>
              </article>
            </Box>
          </div>
          <div className="item">
            <Box className="properties-box">
              <figure>
                <img src={propertiesimg05} />
              </figure>
              <div className="verified">
                <img src={iconverified} /> Verified
              </div>
              <div className="wishlist">
                <a href="#">
                  <img src={iconwishlist} />
                </a>
              </div>
              <div className="tags-icon">
                <a href="#">
                  <img src={iconfilm} />
                </a>
                <a href="#">
                  <img src={iconcorporate} />
                </a>
                <a href="#">
                  <img src={iconindividual} />
                </a>
              </div>
              <article>
                <div className="name-price">
                  <Typography variant="h2">#SPEED41606</Typography>
                  <Typography variant="h3">INR. 4000/hr</Typography>
                </div>
                <div className="other-info">
                  <Typography className="rating" variant="subtitle1">
                    <Rating name="size-small" defaultValue={4} /> 4.1 (484)
                  </Typography>
                  <Typography className="namepro" variant="subtitle2">
                    Pant House
                  </Typography>
                  <Typography
                    className="proaddress"
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    <LocationOnIcon className="red" /> Maruthi Nagar, Hyderabad
                  </Typography>
                </div>
              </article>
            </Box>
          </div>
          <div className="item">
            <Box className="properties-box">
              <figure>
                <img src={propertiesimg06} />
              </figure>
              <div className="verified">
                <img src={iconverified} /> Verified
              </div>
              <div className="wishlist">
                <a href="#">
                  <img src={iconwishlist} />
                </a>
              </div>
              <div className="tags-icon">
                <a href="#">
                  <img src={iconfilm} />
                </a>
                <a href="#">
                  <img src={iconcorporate} />
                </a>
                <a href="#">
                  <img src={iconindividual} />
                </a>
              </div>
              <article>
                <div className="name-price">
                  <Typography variant="h2">#SPEED41606</Typography>
                  <Typography variant="h3">INR. 4000/hr</Typography>
                </div>
                <div className="other-info">
                  <Typography className="rating" variant="subtitle1">
                    <Rating name="size-small" defaultValue={4} /> 4.1 (484)
                  </Typography>
                  <Typography className="namepro" variant="subtitle2">
                    Pant House
                  </Typography>
                  <Typography
                    className="proaddress"
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    <LocationOnIcon className="red" /> Maruthi Nagar, Hyderabad
                  </Typography>
                </div>
              </article>
            </Box>
          </div>
          <div className="item">
            <Box className="properties-box">
              <figure>
                <img src={propertiesimg07} />
              </figure>
              <div className="verified">
                <img src={iconverified} /> Verified
              </div>
              <div className="wishlist">
                <a href="#">
                  <img src={iconwishlist} />
                </a>
              </div>
              <div className="tags-icon">
                <a href="#">
                  <img src={iconfilm} />
                </a>
                <a href="#">
                  <img src={iconcorporate} />
                </a>
                <a href="#">
                  <img src={iconindividual} />
                </a>
              </div>
              <article>
                <div className="name-price">
                  <Typography variant="h2">#SPEED41606</Typography>
                  <Typography variant="h3">INR. 4000/hr</Typography>
                </div>
                <div className="other-info">
                  <Typography className="rating" variant="subtitle1">
                    <Rating name="size-small" defaultValue={4} /> 4.1 (484)
                  </Typography>
                  <Typography className="namepro" variant="subtitle2">
                    Pant House
                  </Typography>
                  <Typography
                    className="proaddress"
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    <LocationOnIcon className="red" /> Maruthi Nagar, Hyderabad
                  </Typography>
                </div>
              </article>
            </Box>
          </div>
          <div className="item">
            <Box className="properties-box">
              <figure>
                <img src={propertiesimg08} />
              </figure>
              <div className="verified">
                <img src={iconverified} /> Verified
              </div>
              <div className="wishlist">
                <a href="#">
                  <img src={iconwishlist} />
                </a>
              </div>
              <div className="tags-icon">
                <a href="#">
                  <img src={iconfilm} />
                </a>
                <a href="#">
                  <img src={iconcorporate} />
                </a>
                <a href="#">
                  <img src={iconindividual} />
                </a>
              </div>
              <article>
                <div className="name-price">
                  <Typography variant="h2">#SPEED41606</Typography>
                  <Typography variant="h3">INR. 4000/hr</Typography>
                </div>
                <div className="other-info">
                  <Typography className="rating" variant="subtitle1">
                    <Rating name="size-small" defaultValue={4} /> 4.1 (484)
                  </Typography>
                  <Typography className="namepro" variant="subtitle2">
                    Pant House
                  </Typography>
                  <Typography
                    className="proaddress"
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    <LocationOnIcon className="red" /> Maruthi Nagar, Hyderabad
                  </Typography>
                </div>
              </article>
            </Box>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}
export default App;
