import React from "react";
import "./style.css";
import {
  Box,
  TextField,
  Typography,
  Pagination,
  Card,
  CardMedia,
  CardContent,
  Button
} from "@mui/material";

import bannerPhoto from "../../Assets/images/blog-banner.png";
import iconauthor from "../../Assets/images/icon-author.png";
import icondate from "../../Assets/images/icon-date.png";
import iconlike from "../../Assets/images/icon-like.png";
import iconshare from "../../Assets/images/icon-share.png";

import blogPhoto01 from "../../Assets/images/blog-img-01.png";

//Components
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Blog() {
  return (
    <>
      <NavBar />
      <Box className="blogContainer">
        <Box className="blog-bg">
          <img src={bannerPhoto} className="image-overlay" />
          <Box className="banner-content">
            <Typography variant="h1" gutterBottom>
              Blog
            </Typography>
            <Typography variant="subtitle1">
              We assure you of no hidden fees in all our properties. Pay for
              what you need and find the most cost-effective spaces for your
              requirements.
            </Typography>
          </Box>
        </Box>
        <Box className="blog-content">
          <Box className="blog-top">
            <Typography variant="h2" gutterBottom>
              Our Latest Blog
            </Typography>
            <Box className="blogfilter">
              <Box className="search">
                <TextField
                  id="outlined-basic"
                  label="Search Here"
                  variant="outlined"
                />
              </Box>
              <Box className="filter" sx={{ maxWidth: 150 }}>
                <TextField
                  id="outlined-basic"
                  label="Filter"
                  variant="outlined"
                />
              </Box>
              <Box className="sortby" sx={{ maxWidth: 150 }}>
                <TextField
                  id="outlined-basic"
                  label="Sort By"
                  variant="outlined"
                />
              </Box>
            </Box>
          </Box>
          <Box className="blog-mid">
            <Card className="blog">
              <CardMedia
                className="figure"
                component="img"
                width="320"
                height="320"
                image={blogPhoto01}
                alt=""
              />
              <CardContent className="article">
                <Typography variant="h2" gutterBottom>
                  Far far away, behind the word mountains
                </Typography>
                <Typography className="meta" variant="body1" gutterBottom>
                  <ul>
                    <li><img src={iconauthor} /> By Admin</li>
                    <li><img src={icondate} /> December 2, 2019</li>
                    <li><img src={iconlike} /> 20</li>
                    <li><img src={iconshare} /> Share</li>
                  </ul>
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden…
                </Typography>
                <Button className="readmore" variant="contained" size="large">Keep Reading</Button>
              </CardContent>
            </Card>
            <Card className="blog">
              <CardMedia
                className="figure"
                component="img"
                width="320"
                height="320"
                image={blogPhoto01}
                alt=""
              />
              <CardContent className="article">
                <Typography variant="h2" gutterBottom>
                  Far far away, behind the word mountains
                </Typography>
                <Typography className="meta" variant="body1" gutterBottom>
                  <ul>
                    <li><img src={iconauthor} /> By Admin</li>
                    <li><img src={icondate} /> December 2, 2019</li>
                    <li><img src={iconlike} /> 20</li>
                    <li><img src={iconshare} /> Share</li>
                  </ul>
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden…
                </Typography>
                <Button className="readmore" variant="contained" size="large">Keep Reading</Button>
              </CardContent>
            </Card>
            <Card className="blog">
              <CardMedia
                className="figure"
                component="img"
                width="320"
                height="320"
                image={blogPhoto01}
                alt=""
              />
              <CardContent className="article">
                <Typography variant="h2" gutterBottom>
                  Far far away, behind the word mountains
                </Typography>
                <Typography className="meta" variant="body1" gutterBottom>
                  <ul>
                    <li><img src={iconauthor} /> By Admin</li>
                    <li><img src={icondate} /> December 2, 2019</li>
                    <li><img src={iconlike} /> 20</li>
                    <li><img src={iconshare} /> Share</li>
                  </ul>
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden…
                </Typography>
                <Button className="readmore" variant="contained" size="large">Keep Reading</Button>
              </CardContent>
            </Card>
            <Card className="blog">
              <CardMedia
                className="figure"
                component="img"
                width="320"
                height="320"
                image={blogPhoto01}
                alt=""
              />
              <CardContent className="article">
                <Typography variant="h2" gutterBottom>
                  Far far away, behind the word mountains
                </Typography>
                <Typography className="meta" variant="body1" gutterBottom>
                  <ul>
                    <li><img src={iconauthor} /> By Admin</li>
                    <li><img src={icondate} /> December 2, 2019</li>
                    <li><img src={iconlike} /> 20</li>
                    <li><img src={iconshare} /> Share</li>
                  </ul>
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden…
                </Typography>
                <Button className="readmore" variant="contained" size="large">Keep Reading</Button>
              </CardContent>
            </Card>
          </Box>
          <Box className="blog-bot">
            <Pagination count={5} variant="outlined" />
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
