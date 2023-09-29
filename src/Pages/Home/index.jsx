import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Divider, Menu, MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom';

import "./home.css"

import locationIcon from "../../Assets/images/Group 54.svg"
import starIcon from "../../Assets/images/star-48.png"
import ImageIcon from "../../Assets/images/galleryImages/icons8-gallery-48.png"

///Components
import NavBar from "../NavBar";
import TopTabs from "../../Component/TopTabs"
import Gallery from "../../Component/Gallery"
import Overview from "../Overview";
import Properties from "../SimilarProperties";
import Footer from "../Footer";

import ImageSlider from "../../Component/CoverImageSlider"
import coverPhoto from "../../Assets/images/galleryImages/cover photo.jpeg"



export default function Home() {
  const [showGallery, setShowGallery] = useState(false);
  const [propertyNameVisibility, setPropertyNameVisibility] = useState(false)
  const ref = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = (event) => {

    if (ref.current && !ref.current.contains(event.target)
      && event.target.id !== "Print"
      && event.target.id !== "PrintImg"
      && event.target.id !== "PrintText"

    ) {
    } if (event.target.id === "printBox") {
    }
  };

  const handleClickOutsideShareBox = (event) => {
    if (ref.current && !ref.current.contains(event.target)
      && event.target.id !== "share"
      && event.target.id !== "shareText"
    ) {
    }
  };

  const openGallery = () => {
    setShowGallery(true);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('click', handleClickOutsideShareBox);
    return () => {
      // Remove the click event listener when the component unmounts
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('click', handleClickOutsideShareBox);
    };
  }, []);



  return (
    <>
      <NavBar />
      <Box className="homeContainer">
        <Box sx={{ display: showGallery ? "block" : "none" }} className="showGalleryBox">
          <Gallery setShowGallery={setShowGallery} showGallery={showGallery} />
        </Box>
        <TopTabs
          favoriteDisplay="true"
          absolute={true}
          homePage={true}
          top="20px"
        />

        <Box className="coverContainer">
          <Box className="coverGallerySlider">
            <ImageSlider />
          </Box>

          <Box className="coverGallery">
            <img style={{ width: "100%", height: "100%" }} src={coverPhoto} />
          </Box>
          <Box className="ShowGalleryTabBox">
            <Box onClick={openGallery} className="ShowGalleryTab">
              <img src={ImageIcon} />
              <Typography ml={1}>Show ALL (18)</Typography>
            </Box>
          </Box>

          <Box className="venueLocation">
            <Box mb={1.5} className="locationHeader">
              <Typography className='poppinsBold' variant='h5'>#AJ5K4B5B3E</Typography>
              {/* <Typography sx={{ marginLeft: "10px", }} className='poppinsBold' variant='h5'>Serendipity Labs</Typography> */}
              <Box onClick={() => setPropertyNameVisibility(true)} className="ClickHereTab">
                <Typography id='clickHereText'>Click Here</Typography>
              </Box>
            </Box>
            <Typography sx={{ display: propertyNameVisibility ? "block" : "none" }} className='locationId'>
              Coworking Space: Serendipity Labs
            </Typography>
            <Typography className='locationId'>
              Restaurant
            </Typography>
            <Box className="locationSubText">
              <Box className="locationLogo"></Box>
              <Box className="CityLocation">
                <Box className="cityLocationTextBox">
                  <img src={locationIcon} style={{ marginRight: "15px" }} />
                  <Typography className='poppins'>Lonavala, Maharashtra, India</Typography>
                </Box>
                <Divider className='divider' sx={{ margin: "0px 10px" }} orientation="vertical" flexItem />
                <Box className="cityLocationTextBox">
                  <Box sx={{ marginRight: "10px" }} className="startLogos">
                    <img src={starIcon} />
                    <img src={starIcon} />
                    <img src={starIcon} />
                    <img src={starIcon} />
                    <img src={starIcon} />
                  </Box>
                  <Typography className='poppins' sx={{ color: "#888888" }}>4.0 (3377 Reviews)</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box >
      <Overview />
      <Properties />
      <Footer />
    </>
  )
}
