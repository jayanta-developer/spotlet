import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Breadcrumbs,
  Typography,
  Link,
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import "./style.css";

import iconauthor from "../../Assets/images/icon-author.png";
import icondate from "../../Assets/images/icon-date.png";
import iconlike from "../../Assets/images/icon-like.png";
import iconshare from "../../Assets/images/icon-share.png";
import blogPhoto01 from "../../Assets/images/blog-img-01.png";
import closeicon from "../../Assets/images/icon-close.png";
import blogbig from "../../Assets/images/blog-big.png";
import blogimg01 from "../../Assets/images/blog-01.png";
import blogimg02 from "../../Assets/images/blog-02.png";
import blogimg03 from "../../Assets/images/blog-03.png";
import avatar from "../../Assets/images/avatar.png";

//Components
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function BlogDetails() {
  return (
    <>
      <NavBar />
      <Box className="BlogDetailsContainer">
        <Box className="Breadcrumbs-content">
          <Breadcrumbs separator=">" aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/blog">
              Blog
            </Link>
            <Typography color="text.primary">Blog Details</Typography>
          </Breadcrumbs>
        </Box>
        <Box className="BlogDetails-content">
          <Box className="Blogleft-panel">
            <figure>
              <img src={blogbig} />
            </figure>
            <Typography variant="h2" gutterBottom>
              Why are New Jersey Educators Dissatisfied?
            </Typography>
            <Typography className="meta" variant="body1" gutterBottom>
              <ul>
                <li>
                  <img src={iconauthor} /> By Admin
                </li>
                <li>
                  <img src={icondate} /> December 2, 2019
                </li>
                <li>
                  <img src={iconlike} /> 20
                </li>
                <li>
                  <img src={iconshare} /> Share
                </li>
              </ul>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Nam porta congue tortor, ut {" "}
            <span className="span600">tempor purus facilisis rhoncus</span>{" "}. Nunc
              sodales eleifend euismod. Nunc enim nunc, rutrum ut magna at,
              gravida lacinia leo. Aenean iaculis massa augue, ac bibendum purus
              egestas nec. Nullam tristique diam at nisi imperdiet dapibus.
              Nullam commodo leo libero.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Suspendisse {" "}
            <span className="span600">mollis tortor at dolor dignissim</span>, vel volutpat felis
              tincidunt. Ut laoreet tellus lacus, sed eleifend eros mollis in.
              Mauris non leo rutrum nisi gravida tristique. Mauris tempus arcu
              nec nunc varius, in tempus magna ultricies. Cras feugiat dui eget
              ante finibus tempus.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Praesent a ante ac mi pretium lobortis. Phasellus luctus lacus at
              tellus iaculis aliquam. Nam eu metus vel est rhoncus sollicitudin.
              {" "}
            <span className="span600">Aenean accumsan sit amet</span> augue eget ultricies. Aenean lobortis,
              libero ac viverra laoreet, tellus lectus volutpat ipsum, et dictum
              ligula ipsum vitae leo. Curabitur elementum faucibus erat vitae
              vestibulum. Nunc sodales eleifend euismod.
            </Typography>
            <Box className="double-image">
              <figure>
                <img src={blogimg01} />
              </figure>
              <figure>
                <img src={blogimg02} />
              </figure>
            </Box>
            <Typography variant="body1" gutterBottom>
              Nam porta congue tortor, ut {" "}
            <span className="span600">tempor purus facilisis rhoncus</span>. Nunc
              sodales eleifend euismod. Nunc enim nunc, rutrum ut magna at,
              gravida lacinia leo. Aenean iaculis massa augue, ac bibendum purus
              egestas nec. Nullam tristique diam at nisi imperdiet dapibus.
              Nullam commodo leo libero.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Suspendisse {" "}
            <span className="span600">mollis tortor at dolor dignissim</span>, vel volutpat felis
              tincidunt. Ut laoreet tellus lacus, sed eleifend eros mollis in.
              Mauris non leo rutrum nisi gravida tristique. Mauris tempus arcu
              nec nunc varius, in tempus magna ultricies. Cras feugiat dui eget
              ante finibus tempus.
            </Typography>
            <Typography variant="h2" gutterBottom>
              Why are New Jersey Educators Dissatisfied?
            </Typography>
            <Typography className="lists" variant="body1" gutterBottom>
              <ul>
                <li>
                  But nothing the copy said could convince her and so it didn’t
                  take long until a few insidious Copy Writers ambushed her.
                </li>
                <li>
                  Made her drunk with Longe and Parole and dragged her into
                  their agency.
                </li>
                <li>
                  Where they abused her for their projects again and again.
                </li>
              </ul>
            </Typography>
            <Box className="single-image">
              <figure>
                <img src={blogimg03} />
              </figure>
            </Box>
            <Typography variant="body1" gutterBottom>
              Separated they live in {" "}
            <span className="span600">Bookmarksgrove</span> right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia.
            </Typography>
            <Typography variant="body1" gutterBottom>
              It is a paradisematic country, in which {" "}
            <span className="span600">roasted parts of sentences</span> fly into your mouth. Even the all-powerful Pointing has no control
              about the blind texts it is an almost unorthographic life One day
              however a small line of blind text by the name of Lorem Ipsum
              decided to leave for the far World of Grammar.
            </Typography>
            <Typography variant="body1" gutterBottom>
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli,
              but the Little Blind Text didn’t listen. She packed her seven
              versalia, put her initial into the belt and made herself on the
              way. When she reached the first hills of the Italic Mountains, she
              had a last view back on the skyline of her hometown
              Bookmarksgrove.
            </Typography>
            <Box className="Comments-panel">
              <Typography variant="h2" gutterBottom>
                Comments
              </Typography>
              <Box className="Comment-box">
                <Avatar alt="" src={avatar} />
                <article>
                  <Typography variant="body1" gutterBottom>
                    Jonathan Doe, on June 15, 2021
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    There is no universally accepted definition of a mountain.
                    Elevation, volume, relief, steepness, spacing and continuity
                    have been used as criteria for defining a mountain.
                  </Typography>
                  <Button className="reply" variant="contained" size="large">
                    Reply
                  </Button>
                </article>
              </Box>
              <Typography variant="h2" gutterBottom>
                Leave a Reply
              </Typography>
              <Box className="form-box">
                <div className="one-column">
                  <Typography variant="body1">Comments</Typography>
                  <TextField className="textarea"
                    id="outlined-basic"
                    label="Comments"
                    variant="outlined"
                  />
                </div>
              </Box>
              <Box className="form-box">
                <div className="two-column">
                  <Typography variant="body1">Name</Typography>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                  />
                </div>
                <div className="two-column">
                  <Typography variant="body1">Email</Typography>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                </div>
              </Box>
              <Box className="form-box">
                <div className="one-column">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Save my name, email, and website in this browser for the next time I comment."
                  />
                </div>
              </Box>
              <Box className="form-box">
                <div className="one-column">
                  <Button className="submit" variant="contained" size="large">
                    Post Comments
                  </Button>
                </div>
              </Box>
            </Box>
          </Box>
          <Box className="Blogright-panel">
            <Box className="recent-posts">
              <Typography variant="h3" gutterBottom>
                Recent posts
              </Typography>
              <Card className="post">
                <CardMedia
                  className="figure"
                  component="img"
                  width="100"
                  height="100"
                  image={blogPhoto01}
                  alt=""
                />
                <CardContent className="article">
                  <Typography variant="h2" gutterBottom>
                    Why are New Jersey Educators Dissatisfied?
                  </Typography>
                  <Typography className="meta" variant="body1" gutterBottom>
                    <ul>
                      <li>
                        <img src={iconauthor} /> By Admin
                      </li>
                      <li>
                        <img src={icondate} /> December 2, 2019
                      </li>
                      <li>
                        <img src={iconlike} /> 20
                      </li>
                      <li>
                        <img src={iconshare} /> Share
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
              <Card className="post">
                <CardMedia
                  className="figure"
                  component="img"
                  width="100"
                  height="100"
                  image={blogPhoto01}
                  alt=""
                />
                <CardContent className="article">
                  <Typography variant="h2" gutterBottom>
                    Why are New Jersey Educators Dissatisfied?
                  </Typography>
                  <Typography className="meta" variant="body1" gutterBottom>
                    <ul>
                      <li>
                        <img src={iconauthor} /> By Admin
                      </li>
                      <li>
                        <img src={icondate} /> December 2, 2019
                      </li>
                      <li>
                        <img src={iconlike} /> 20
                      </li>
                      <li>
                        <img src={iconshare} /> Share
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
              <Card className="post">
                <CardMedia
                  className="figure"
                  component="img"
                  width="100"
                  height="100"
                  image={blogPhoto01}
                  alt=""
                />
                <CardContent className="article">
                  <Typography variant="h2" gutterBottom>
                    Why are New Jersey Educators Dissatisfied?
                  </Typography>
                  <Typography className="meta" variant="body1" gutterBottom>
                    <ul>
                      <li>
                        <img src={iconauthor} /> By Admin
                      </li>
                      <li>
                        <img src={icondate} /> December 2, 2019
                      </li>
                      <li>
                        <img src={iconlike} /> 20
                      </li>
                      <li>
                        <img src={iconshare} /> Share
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
              <Card className="post">
                <CardMedia
                  className="figure"
                  component="img"
                  width="100"
                  height="100"
                  image={blogPhoto01}
                  alt=""
                />
                <CardContent className="article">
                  <Typography variant="h2" gutterBottom>
                    Why are New Jersey Educators Dissatisfied?
                  </Typography>
                  <Typography className="meta" variant="body1" gutterBottom>
                    <ul>
                      <li>
                        <img src={iconauthor} /> By Admin
                      </li>
                      <li>
                        <img src={icondate} /> December 2, 2019
                      </li>
                      <li>
                        <img src={iconlike} /> 20
                      </li>
                      <li>
                        <img src={iconshare} /> Share
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box className="tags">
              <Typography variant="h3" gutterBottom>
                Tags
              </Typography>
              <Typography className="tag-list" variant="body1" gutterBottom>
                <ul>
                  <li>
                    Location{" "}
                    <span className="close">
                      <img src={closeicon} />
                    </span>
                  </li>
                  <li>
                    Events{" "}
                    <span className="close">
                      <img src={closeicon} />
                    </span>
                  </li>
                  <li>
                    Hosts{" "}
                    <span className="close">
                      <img src={closeicon} />
                    </span>
                  </li>
                  <li>
                    Film Shooting{" "}
                    <span className="close">
                      <img src={closeicon} />
                    </span>
                  </li>
                  <li>
                    Corporate Events{" "}
                    <span className="close">
                      <img src={closeicon} />
                    </span>
                  </li>
                </ul>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
