import React, { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material'

import "./reviews.css";
import "../../Overview/overview.css";

import starIcon from "../.././../Assets/images/Start.png"
import starYIcon from "../.././../Assets/images/star-48.png"
import starGrayIcon from "../.././../Assets/images/GrayStar.png"
import TimeIcon from "../../../Assets/images/TimeIcon.svg"
import RedCross from "../../../Assets/images/RedCross.svg"
import r10 from "../../../Assets/images/1.0redB.svg"
import r15 from "../../../Assets/images/r1.5.svg"
import r2 from "../../../Assets/images/r2.0.svg"
import r25 from "../../../Assets/images/r2.5.svg"
import r3 from "../../../Assets/images/r3.0.svg"
import SearchIcon from '../../../Assets/images/search-normal.svg';





export default function Reviews({ Review }) {
  const [review, setReview] = useState(false)


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
  const reviewOpenCard = (clientImgT, clientImgBkg, clientName, date, reviewTitle, reviewSubText) => {
    return (
      <Box className="review_open_box">
        <Box className="userInfo">
          <Box className="userImgBox">
            <Box sx={{ background: clientImgBkg }} className="userImg">
              <Typography>{clientImgT}</Typography>
            </Box>
          </Box>
          <Box className="user_NameBox">
            <Box className="Name_Box_text">
              <Typography className='reviewCard_userName '>{clientName}</Typography>
              <Typography className='reviewOpenDate'>{date}</Typography>
            </Box>
            <Box className="star_logo_box">
              <img src={starYIcon} />
              <img src={starYIcon} />
              <img src={starYIcon} />
              <img src={starYIcon} />
              <img src={starGrayIcon} />
            </Box>
          </Box>
        </Box>

        <Box className="reviewTitle">
          <Typography className='reviewTitleText'>{reviewTitle}</Typography>
        </Box>

        <Box className="review_open_Text">
          <Typography>{reviewSubText}</Typography>
        </Box>
      </Box>
    )
  }


  return (
    <>
      <Box ref={Review}
        className="reviewContainer"
        sx={{ display: review ? "none" : "block" }}
      >
        <Box className="reviewHeader">
          <Box ml={2} mr={2} className="descriptionIconBox">
            <img style={{ width: "100%" }} src={starIcon} />
          </Box>
          <Typography mr={1.5} className='descriptionHeaderText'>Reviews (7)</Typography>

          <Box className="startLogos">
            <img src={starYIcon} />
            <img src={starYIcon} />
            <img src={starYIcon} />
            <img src={starYIcon} />
            <img src={starYIcon} />
          </Box>
          <Typography className='poppins reviewHeaderRettingText' sx={{ color: "#888888" }}>4.0 (3377 Reviews)</Typography>

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
        <Box mb={2} className="seeMoreBtn display">
          <Typography onClick={() => setReview(!review)} pl={2} className='seeMoreText amenitiesSeeMoreBtn'>{review ? "+ SEE LESS" : "+ SEE MORE"}</Typography>
        </Box>
      </Box>

      {/* open box */}
      <Box className="reviewOpenContainer" sx={{ display: review ? "block" : "none" }}>
        <Box className="ratingOpenHeader">
          <img onClick={() => setReview(!review)} src={RedCross} />
        </Box>
        <Box className="ratingOpenTextBox">
          <Box className="reviewRating">
            <Box className="reviewRatingHeader">
              <Box className="reviewRatingLogo">
                <img style={{ width: "100%" }} src={starIcon} />
              </Box>
              <Box className="reviewRatingHeaderText">
                <Typography className='reviewOpenHeaderText'>Average rating</Typography>
                <Box className="reviewRatingSubHeaderText">
                  <Box className="reviewRatingStar">
                    <img src={starYIcon} />
                    <img src={starYIcon} />
                    <img src={starYIcon} />
                    <img src={starYIcon} />
                    <img className='openRatingGraStar' src={starGrayIcon} />
                  </Box>
                  <Typography className='RatingSubHeaderText'>4.0 (3377 Reviews)</Typography>

                </Box>
              </Box>
            </Box>
            <Box className="ratingOpenContent">

              <Box className="ratingItem">
                <Box className="ratingLogo">
                  <Typography className='ratingLogoText'>1.0</Typography>
                  <img className='ratingLogoBorder1' src={r10} />
                </Box>
                <Typography className='ratingItemText'>wish to cancel a service before</Typography>
              </Box>
              <Box className="ratingItem">
                <Box className="ratingLogo">
                  <Typography className='ratingLogoText'>1.5</Typography>
                  <img className='ratingLogoBorder15' src={r15} />
                </Box>
                <Typography className='ratingItemText'>wish to cancel a service before</Typography>
              </Box>
              <Box className="ratingItem">
                <Box className="ratingLogo">
                  <Typography className='ratingLogoText'>2.0</Typography>
                  <img className='ratingLogoBorder2' src={r2} />
                </Box>
                <Typography className='ratingItemText'>wish to cancel a service before</Typography>
              </Box>
              <Box className="ratingItem">
                <Box className="ratingLogo">
                  <Typography className='ratingLogoText'>2.5</Typography>
                  <img className='ratingLogoBorder25' src={r25} />
                </Box>
                <Typography className='ratingItemText'>wish to cancel a service before</Typography>
              </Box>
              <Box className="ratingItem">
                <Box className="ratingLogo">
                  <Typography className='ratingLogoText'>3.0</Typography>
                  <img className='ratingLogoBorder3' src={r3} />
                </Box>
                <Typography className='ratingItemText'>wish to cancel a service before</Typography>
              </Box>


            </Box>
          </Box>


          <Box className="reviewReview">

            <Box className="review_headerBox">
              <Typography className='review_headerBoxText'>Reviews</Typography>
              <Box className="review_searchBar">
                <Box className="search_Field">
                  <img style={{ width: "22px", position: "relative", left: "44px", zIndex: "9" }} src={SearchIcon} />
                  <TextField className='search_Input' sx={{ width: "100%" }} placeholder='Search reviews' />
                </Box>
              </Box>
              <Typography className='review_sub_header'>Guest Review</Typography>

            </Box>
            <Box className="review_Open_contentBox">
              {reviewOpenCard(
                "C",
                "#10d093",
                "Danielle Alexander",
                "15 October 2022",
                "Standard of Excellence",
                "If for any reason you wish to cancel a service before your flight reservation or hotel booking were processed you can do so without"

              )}
              {reviewOpenCard(
                "A",
                "#EA4335",
                "Danielle Alexander",
                "15 October 2022",
                "Standard of Excellence",
                "If for any reason you wish to cancel a service before your flight reservation or hotel booking were processed you can do so without"
              )}
              {reviewOpenCard(
                "A",
                "#EA4335",
                "Danielle Alexander",
                "15 October 2022",
                "Standard of Excellence",
                "If for any reason you wish to cancel a service before your flight reservation or hotel booking were processed you can do so without"
              )}
              {reviewOpenCard(
                "A",
                "#EA4335",
                "Danielle Alexander",
                "15 October 2022",
                "Standard of Excellence",
                "If for any reason you wish to cancel a service before your flight reservation or hotel booking were processed you can do so without"
              )}

            </Box>


          </Box>
        </Box>

      </Box>




    </>
  )
}
