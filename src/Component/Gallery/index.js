import React, { useEffect } from "react";
import { Box, Typography, Divider } from "@mui/material";
import ImageSlider from "../CoverImageSlider";
import { useNavigate } from "react-router-dom";

import "./style.css";

import NavBar from "../../Pages/NavBar";
import TopTabs from "../../Component/TopTabs";

export default function Gallery({ setShowGallery, showGallery }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (showGallery) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showGallery]);

  return (
    <>
      <Box className="galleryContainer">
        <Box className="galleryHeader">
          <Box onClick={() => setShowGallery(false)} className="back_Button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="17"
              viewBox="0 0 11 17"
              fill="none"
            >
              <path
                d="M10 1L2 8.5L10 16"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <Typography>BACK</Typography>
          </Box>
          <Box className="GalleryPropertyName">
            <Typography>Coworking Space: Serendipity Labs</Typography>
          </Box>
          <Box>
            <TopTabs favoriteDisplay={true} absolute={false} />
          </Box>
        </Box>
        <Box className="coverGallery_Slider">
          <ImageSlider thumbnail={true} />
        </Box>
      </Box>
    </>
  );
}
