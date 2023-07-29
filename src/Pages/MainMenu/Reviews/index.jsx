import React from 'react';
import { Box, Typography } from '@mui/material'

import "./reviews.css";
import "../../Overview/overview.css";

import starIcon from "../.././../Assets/images/Start.png"
import starYIcon from "../.././../Assets/images/star-48.png"
import TimeIcon from "../../../Assets/images/TimeIcon.svg"

export default function Reviews({ Review }) {


  const reviewCard = (clientImgT, clientImgBkg, clientName, reviewTitle, reviewSubText, reviewTime) => {
    return (
      <Box className="review_box">
        <Box className="userInfo">
          <Box className="userImgBox">
            <Box sx={{ background: clientImgBkg }} className="userImg">
              <Typography>{clientImgT}</Typography>
            </Box>
          </Box>
          <Box className="userNameBox">
            <Typography className='userName'>{clientName}</Typography>
            <Box sx={{ marginRight: "10px" }} className="startLogos">
              <img src={starYIcon} />
              <img src={starYIcon} />
              <img src={starYIcon} />
              <img src={starYIcon} />
              <img src={starYIcon} />
            </Box>
          </Box>
        </Box>

        <Box className="reviewTitle">
          <Typography className='reviewTitleText'>{reviewTitle}</Typography>
        </Box>

        <Box className="review_Text">
          <Typography>{reviewSubText}</Typography>
        </Box>
        <Box className="reviewTime">
          <img src={TimeIcon} />
          <Typography ml={1.5}>{reviewTime}</Typography>
        </Box>
      </Box>
    )
  }





  return (
    <>
      <Box ref={Review} className="reviewContainer mainItemBox">
        <Box className="reviewHeader">
          <Box ml={2} mr={2} className="descriptionIconBox">
            <img style={{ width: "100%" }} src={starIcon} />
          </Box>
          <Typography mr={1.5} className='descriptionHeaderText'>Reviews (7)</Typography>

          <Box sx={{ marginRight: "10px" }} className="startLogos">
            <img src={starYIcon} />
            <img src={starYIcon} />
            <img src={starYIcon} />
            <img src={starYIcon} />
            <img src={starYIcon} />
          </Box>
          <Typography className='poppins' sx={{ color: "#888888" }}>4.0 (3377 Reviews)</Typography>
          <Box sx={{ paddingLeft: "15%" }} className="seeMoreBtn">
            <Typography pl={2} className='seeMoreText amenitiesSeeMoreBtn'>+ SEE MORE</Typography>
          </Box>
        </Box>

        <Box className="reviewText">
          {
            reviewCard(
              "C",
              "#10d093",
              "Danielle Alexander",
              "Standard of Excellence",
              "If for any reason you wish to cancel a service before your flight reservation or hotel booking were processed you can do so without any penalties or charges by calling us or informing us in advance. You will receive a full refund.",
              "15 October 2022 \ Off-Site \ 50 guests"
            )
          }
          {
            reviewCard(
              "A",
              "#EA4335",
              "Danielle Alexander",
              "Standard of Excellence",
              "If for any reason you wish to cancel a service before your flight reservation or hotel booking were processed you can do so without any penalties or charges by calling us or informing us in advance. You will receive a full refund.",
              "15 October 2022 \ Off-Site \ 50 guests"
            )
          }
          {
            reviewCard(
              "B",
              "#FBAA0D",
              "Danielle Alexander",
              "Standard of Excellence",
              "If for any reason you wish to cancel a service before your flight reservation or hotel booking were processed you can do so without any penalties or charges by calling us or informing us in advance. You will receive a full refund.",
              "15 October 2022 \ Off-Site \ 50 guests"
            )
          }

        </Box>

      </Box>
    </>
  )
}
