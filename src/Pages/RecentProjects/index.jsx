import React from "react";
import "./style.css";
import { Box, Typography } from "@mui/material";

//Owl Carousel Libraries and Module
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import projectimg01 from "../../Assets/images/project-img01.png";
import projectimg02 from "../../Assets/images/project-img02.png";
import projectimg03 from "../../Assets/images/project-img03.png";

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
      items: 1.5,
    },
    1000: {
      items: 2,
    },
    1170: {
      items: 3,
    },
  },
};
class App extends React.Component {
  render() {
    return (
      <div>
        <OwlCarousel
          className="recent-projects-carousel owl-carousel"
          {...options}
        >
          <div className="item">
            <Box className="project-box">
              <figure>
                <img src={projectimg01} />
              </figure>
              <article>
                <Typography variant="h5">Anna Kendrick</Typography>
                <Typography variant="h6">FILM SHOOTING</Typography>
              </article>
            </Box>
          </div>
          <div className="item">
            <Box className="project-box">
              <figure>
                <img src={projectimg02} />
              </figure>
              <article>
                <Typography variant="h5">Anna Kendrick</Typography>
                <Typography variant="h6">FILM SHOOTING</Typography>
              </article>
            </Box>
          </div>
          <div className="item">
            <Box className="project-box">
              <figure>
                <img src={projectimg03} />
              </figure>
              <article>
                <Typography variant="h5">Anna Kendrick</Typography>
                <Typography variant="h6">FILM SHOOTING</Typography>
              </article>
            </Box>
          </div>
          <div className="item">
            <Box className="project-box">
              <figure>
                <img src={projectimg01} />
              </figure>
              <article>
                <Typography variant="h5">Anna Kendrick</Typography>
                <Typography variant="h6">FILM SHOOTING</Typography>
              </article>
            </Box>
          </div>
          <div className="item">
            <Box className="project-box">
              <figure>
                <img src={projectimg02} />
              </figure>
              <article>
                <Typography variant="h5">Anna Kendrick</Typography>
                <Typography variant="h6">FILM SHOOTING</Typography>
              </article>
            </Box>
          </div>
          <div className="item">
            <Box className="project-box">
              <figure>
                <img src={projectimg03} />
              </figure>
              <article>
                <Typography variant="h5">Anna Kendrick</Typography>
                <Typography variant="h6">FILM SHOOTING</Typography>
              </article>
            </Box>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}
export default App;
