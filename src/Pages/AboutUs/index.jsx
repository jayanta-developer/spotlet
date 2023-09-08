import React from "react";
import { Box, Typography, Stack, Avatar, Button } from "@mui/material";
import "./style.css";

import bannerPhoto from "../../Assets/images/about-banner.png";
import aboutimg01 from "../../Assets/images/about-img-01.png";
import aboutimg02 from "../../Assets/images/about-img-02.png";
import aboutimg03 from "../../Assets/images/about-img-03.png";
import avatarguests from "../../Assets/images/avtar-guests.png";
import avatarhosts from "../../Assets/images/avatar-hosts.png";
import icon01 from "../../Assets/images/icon-01.svg";
import icon02 from "../../Assets/images/icon-02.svg";
import icon03 from "../../Assets/images/icon-03.svg";
import icon04 from "../../Assets/images/icon-04.svg";
import icon05 from "../../Assets/images/icon-05.svg";
import icon06 from "../../Assets/images/icon-06.svg";
import icon07 from "../../Assets/images/icon-07.svg";
import joinbg from "../../Assets/images/join-bg.png";
import vision from "../../Assets/images/icon-vision.png";
import mission from "../../Assets/images/icon-mission.png";

//Components
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <Box className="aboutUsContainer">
        <Box className="about-bg">
          <img src={bannerPhoto} className="image-overlay" />
          <Box className="banner-content">
            <Typography variant="h1" gutterBottom>
              We Celebrate{" "}
              <span className="span700">
                Happiness and Togetherness
              </span>{" "}
              Every Day
            </Typography>
            <Typography variant="subtitle1">
              We assure you of no hidden fees in all our properties. Pay for
              what you need and find the most cost-effective spaces for your
              requirements.
            </Typography>
          </Box>
        </Box>
        <Box className="about-content">
          <Box className="about-company">
            <article>
              <Typography variant="h2" gutterBottom>
                About Us
              </Typography>
              <Typography variant="h4" gutterBottom>
                Unveiling the World of Unique Spaces
              </Typography>
              <Typography variant="body1" gutterBottom>
                Welcome to SpotLet, a groundbreaking online platform that
                redefines how people discover and share spaces. We're not just a
                service; we're a community built around the idea of connecting
                hosts with incredible spaces to individuals seeking the perfect
                backdrop for their events, shoots, and celebrations. Our vision
                is simple yet transformative: to be the go-to destination for
                finding, booking, and showcasing remarkable spaces in India.
              </Typography>
              <Typography variant="h4" gutterBottom>
                Our Unique Concept
              </Typography>
              <Typography variant="body1" gutterBottom>
                SpotLet emerged from the recognition that spaces hold stories,
                and every space has the potential to become a canvas for
                experiences that are both meaningful and unforgettable. We're
                the pioneers of a novel concept - offering a one-stop solution
                for all your space-related needs. Whether you're an aspiring
                filmmaker scouting for the perfect location, a business in
                search of a dynamic event venue, or an individual planning a
                personal celebration, SpotLet is here to guide you.
              </Typography>
            </article>
            <figure>
              <img src={aboutimg01} />
            </figure>
          </Box>
          <Box className="guests-hosts">
            <Stack className="for-guests">
              <Box className="heading">
                <figure>
                  <Avatar alt="" src={avatarguests} />
                </figure>
                <article>
                  <Typography variant="h3">
                    For Guests: <span>Discover and Create</span>{" "}
                  </Typography>
                </article>
              </Box>
              <Box className="title">Discover</Box>
              <Box className="content content0">
                <Typography variant="body1">
                  Explore a treasure trove of unique spaces that you won't find
                  anywhere else. From grand ballrooms to intimate gardens, we
                  have the perfect setting for every occasion.
                </Typography>
              </Box>
              <Box className="title">Create</Box>
              <Box className="content content0">
                <Typography variant="body1">
                  Your events and projects deserve more than just a backdrop.
                  They deserve a stage. With SpotLet, you can create memorable
                  experiences in spaces that resonate with your vision.
                </Typography>
              </Box>
              <Button className="readmore" variant="contained" size="large">
                Explore our Spaces
              </Button>
            </Stack>
            <Stack className="for-hosts">
              <Box className="heading">
                <figure>
                  <Avatar alt="" src={avatarhosts} />
                </figure>
                <article>
                  <Typography variant="h3">
                    For Hosts: <span>Share and Shine</span>{" "}
                  </Typography>
                </article>
              </Box>
              <Box className="title">Share</Box>
              <Box className="content">
                <Typography variant="body1">
                  If you own an exceptional property, become a SpotLet host and
                  open your doors to a world of possibilities. Share your space
                  with individuals & businesses seeking venues that inspire &
                  captivate.
                </Typography>
              </Box>
              <Box className="title">Shine</Box>
              <Box className="content">
                <Typography variant="body1">
                  With our platform, your space gets the attention it deserves.
                  We provide tools and support to showcase your property to a
                  wide audience, ensuring that it shines in the spotlight.
                </Typography>
              </Box>
              <Button className="readmore" variant="contained" size="large">
                Become a Host
              </Button>
            </Stack>
          </Box>
          <Box className="company-difference">
            <figure>
              <img src={aboutimg02} />
            </figure>
            <article>
              <Typography variant="h2" gutterBottom>
                The SpotLet Difference
              </Typography>
              <Box className="icon-content">
                <Box className="icon">
                  <img src={icon01} />
                </Box>
                <Box className="content">
                  <Typography variant="subtitle1">Curated Spaces:</Typography>
                  <Typography variant="body1">
                    We handpick and curate each space to ensure it meets our
                    high standards of uniqueness, quality, and safety.
                  </Typography>
                </Box>
              </Box>
              <Box className="icon-content">
                <Box className="icon">
                  <img src={icon02} />
                </Box>
                <Box className="content">
                  <Typography variant="subtitle1">Transparency:</Typography>
                  <Typography variant="body1">
                    Our commitment to transparency extends to pricing, booking
                    process, and interactions. What you see is what you get.
                  </Typography>
                </Box>
              </Box>
              <Box className="icon-content">
                <Box className="icon">
                  <img src={icon03} />
                </Box>
                <Box className="content">
                  <Typography variant="subtitle1">
                    Supportive Community:
                  </Typography>
                  <Typography variant="body1">
                    SpotLet is more than a platform; it's a community of hosts,
                    guests, and creatives who share a common passion for
                    remarkable spaces.
                  </Typography>
                </Box>
              </Box>
              <Box className="icon-content">
                <Box className="icon">
                  <img src={icon04} />
                </Box>
                <Box className="content">
                  <Typography variant="subtitle1">Innovation: </Typography>
                  <Typography variant="body1">
                    We're not just an online portal; we're constantly innovating
                    to make the experience of discovering, booking, and sharing
                    spaces seamless and delightful.
                  </Typography>
                </Box>
              </Box>
            </article>
          </Box>
          <Box className="world-opportunities">
            <Box className="company-opportunities">
              <article>
                <Typography variant="h2" gutterBottom>
                  A World of Opportunities
                </Typography>
                <Typography className="opportunitiesSubText" variant="body1" gutterBottom>
                  At SpotLet, we're revolutionizing how spaces are discovered
                  and shared. Our platform caters to a wide range of needs:
                </Typography>
                <Box className="icon-content">
                  <Box className="icon">
                    <img src={icon05} />
                  </Box>
                  <Box className="content">
                    <Typography variant="subtitle1">Film Shoots: </Typography>
                    <Typography variant="body1">
                      Our extensive range of film shooting locations provides
                      filmmakers with the canvas they need to bring their vision
                      to life.
                    </Typography>
                  </Box>
                </Box>
                <Box className="icon-content">
                  <Box className="icon">
                    <img src={icon06} />
                  </Box>
                  <Box className="content">
                    <Typography variant="subtitle1">
                      Corporate Events:
                    </Typography>
                    <Typography variant="body1">
                      Businesses looking for event spaces to host conferences,
                      seminars, workshops, and team-building activities can find
                      the ideal setting on SpotLet.
                    </Typography>
                  </Box>
                </Box>
                <Box className="icon-content">
                  <Box className="icon">
                    <img src={icon07} />
                  </Box>
                  <Box className="content">
                    <Typography variant="subtitle1">
                      Individual Celebrations:{" "}
                    </Typography>
                    <Typography variant="body1">
                      Whether it's a wedding, a birthday, or any other special
                      event, SpotLet offers a curated selection of spaces that
                      add charm and elegance to your celebrations.
                    </Typography>
                  </Box>
                </Box>
              </article>
              <figure>
                <img src={aboutimg03} />
              </figure>
            </Box>
          </Box>
          <Box className="join-us">
            <Box className="join-content">
              <img src={joinbg} className="image-overlay" />
              <article>
                <Typography variant="h2" gutterBottom>
                  Join Us on this Journey
                </Typography>
                <Typography variant="body1">
                  SpotLet is more than a service – it's a movement that
                  celebrates creativity, connection, and the magic of spaces.
                  Whether you're a guest seeking the perfect location or a host
                  eager to showcase your property, you're part of our story.
                  Join us on this exhilarating journey as we continue to reshape
                  the way spaces are perceived, experienced, and shared.
                </Typography>
              </article>
              <aside>
                <Button className="readmore" variant="contained" size="large">
                  Explore Our Spaces
                </Button>
              </aside>
            </Box>
          </Box>
          <Typography className="text-center" variant="h2" gutterBottom>
            Vision and Mission
          </Typography>
          <Box className="vision-mission">
            <Box className="box">
              <img src={vision} />
              <Typography variant="h3" gutterBottom>
                Vision
              </Typography>
              <Typography variant="body1">
                To be the pioneering platform that empowers hosts to unlock the
                potential of their spaces for Film Shootings, Corporate Events,
                and Individual Events, while enabling guests to craft
                unforgettable experiences in settings that align with their
                unique visions.
              </Typography>
            </Box>
            <Box className="box">
              <img src={mission} />
              <Typography variant="h3" gutterBottom>
                Mission
              </Typography>
              <Typography variant="body1">
                To transform the way Film Shootings, Corporate Events, and
                Individual Events are envisioned and executed by connecting hosts
                with exceptional spaces to guests seeking the perfect backdrop for
                their creative endeavors and celebrations.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
