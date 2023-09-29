import React, { useEffect, useState } from 'react'
import { Box, TextField, Typography } from '@mui/material'

import "./nav.css";

import companyLogo from "../../Assets/images/companyNavlogo.png";
import SearchIcon from '../../Assets/images/search-normal.svg';
import bail from "../../Assets/images/red bail.png"
import star from "../../Assets/images/red star.png"
import message from "../../Assets/images/red message.png";
import redHeart from "../../Assets/images/redHartLogo.png"
import upDownArrow from "../../Assets/images/UpdownArrow.svg"
import whiteCross from "../../Assets/images/whiteCross.svg"

import Avatar from "../../Assets/images/Avatarprofile.png"
import RedDot from "../../Assets/images/Notification/RedDot.svg"

import DownArrow from "../../Assets/images/downArrow.svg"
import { Link } from 'react-router-dom';

//Data
import { User } from "../../Assets/Data/UserData"

export default function NavBar() {
  const [notificationSPopUp, setNotificationSPupUp] = useState(false)
  const [notificationBPopUp, setNotificationBPupUp] = useState(false)
  const [userIndex, setUserIndex] = useState(0)
  const [showPopup, setShowPopup] = useState(false);


  const userRow = ({ avatar, name, subTitle, time, index }) => {
    return (
      <Box onClick={() => setUserIndex(index)} key={index} className="NotiUserRow pointer">
        <Box className="photoBox">
          <Box className="NotiRedDot"><img src={RedDot} /></Box>
          <Box className="userPhoto">
            <img className='NotiUserPhoto' src={avatar} />
          </Box>
        </Box>
        <Box className="notiUserInfo">
          <Typography className='notiUserName'>
            {name}
            <span> {subTitle}</span>
          </Typography>
          <Box className="userNotiDate">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M8.13787 7.05963L6.46474 5.80479V3.24865C6.46474 2.99163 6.25699 2.78388 5.99998 2.78388C5.74296 2.78388 5.53521 2.99163 5.53521 3.24865V6.0372C5.53521 6.18359 5.604 6.32163 5.72112 6.40901L7.58013 7.80328C7.66378 7.86602 7.7614 7.89623 7.85852 7.89623C8.00027 7.89623 8.1397 7.83255 8.2308 7.70986C8.38514 7.50488 8.3433 7.21348 8.13787 7.05963Z" fill="#777272" />
              <path d="M6 0C2.6914 0 0 2.6914 0 6C0 9.3086 2.6914 12 6 12C9.3086 12 12 9.3086 12 6C12 2.6914 9.3086 0 6 0ZM6 11.0705C3.20449 11.0705 0.929508 8.79551 0.929508 6C0.929508 3.20449 3.20449 0.929508 6 0.929508C8.79598 0.929508 11.0705 3.20449 11.0705 6C11.0705 8.79551 8.79551 11.0705 6 11.0705Z" fill="#777272" />
            </svg>
            <Typography ml={0.5}>{time}</Typography>
          </Box>
        </Box>
      </Box>
    )
  }


  const FirstUserRow = ({ avatar, name, subTitle, time, index }) => {
    return (
      <Box onClick={() => setUserIndex(index)} key={index} className="NotiUserRow pointer">
        <Box className="photoBox">
          <Box className="NotiRedDot"><img src={RedDot} /></Box>
          <Box className="userPhoto">
            <img className='NotiUserPhoto' src={avatar} />
          </Box>
        </Box>
        <Box className="notiUserInfo SNotiUserInfo">
          <Typography className='notiUserName'>
            {name}
            <span> {subTitle}</span>
          </Typography>
          <Box className="userNotiDate sNotiUserTime">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M8.13787 7.05963L6.46474 5.80479V3.24865C6.46474 2.99163 6.25699 2.78388 5.99998 2.78388C5.74296 2.78388 5.53521 2.99163 5.53521 3.24865V6.0372C5.53521 6.18359 5.604 6.32163 5.72112 6.40901L7.58013 7.80328C7.66378 7.86602 7.7614 7.89623 7.85852 7.89623C8.00027 7.89623 8.1397 7.83255 8.2308 7.70986C8.38514 7.50488 8.3433 7.21348 8.13787 7.05963Z" fill="#777272" />
              <path d="M6 0C2.6914 0 0 2.6914 0 6C0 9.3086 2.6914 12 6 12C9.3086 12 12 9.3086 12 6C12 2.6914 9.3086 0 6 0ZM6 11.0705C3.20449 11.0705 0.929508 8.79551 0.929508 6C0.929508 3.20449 3.20449 0.929508 6 0.929508C8.79598 0.929508 11.0705 3.20449 11.0705 6C11.0705 8.79551 8.79551 11.0705 6 11.0705Z" fill="#777272" />
            </svg>
            <Typography ml={0.5}>{time}</Typography>
          </Box>
        </Box>
      </Box>
    )
  }

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

  })

  return (
    <>
      <Box className="navBar">
        <Box className="companyLogo">
          <Link to="/">
            <img className='pointer' src={companyLogo} />
          </Link>
        </Box>

        <Box className="searchBar">
          <Box className="searchField">
            <img className='pointer' style={{ width: "22px", position: "relative", left: "44px", zIndex: "9" }} src={SearchIcon} />
            <TextField className='searchInput' sx={{ width: "100%" }} placeholder='   Enter Location' />
          </Box>
        </Box>

        <Box className="notificationIcons">
          <img
            onClick={() => {
              setNotificationSPupUp(!notificationSPopUp)
              setShowPopup(!showPopup)
              document.body.classList.add("no-scroll")
            }} src={bail} />
          <img src={message} />
          <img style={{ width: "19px", height: "17px", marginBottom: "2px" }} src={redHeart} />
        </Box>
        <Box className="top-links">
          <Box className="host NavTextVisibility">
            <Typography className='poppins pointer'>Become a Host</Typography>
          </Box>
          <Box className="booking NavTextVisibility">
            <Typography className='poppins pointer' sx={{ color: "#EA4335" }}>Bookings</Typography>
          </Box>
        </Box>
        <Box className="profile pointer">
          <Box className="profileTab">
            <Box className="avatarBox">
              <img style={{ width: "100%" }} src={Avatar} />
            </Box>
            <Typography className='profileNameVisibility' ml={2} mr={1.5}>Krish Bhasin</Typography>
            <img className='profileTabDownarrow' src={DownArrow} />

          </Box>

        </Box>
        {/* Notification PopUp */}
        <Box sx={{ display: notificationSPopUp ? "flex" : "none" }} className="notificationSPopUp">
          <Box className="notificationSHeader">
            <Typography>Notifications</Typography>
            <img onClick={() => {
              setNotificationSPupUp(false)
              document.body.classList.remove("no-scroll")
            }} className='white_CrossIcon' src={whiteCross} />
          </Box>
          <Box className="notificationSContainer">
            <Box className="top_Date">
              <Typography>TODAY</Typography>
            </Box>
            {User &&
              User?.map((user, index) => (
                FirstUserRow({
                  avatar: user.avatar,
                  name: user.name,
                  subTitle: user.subTitle,
                  time: user.time,
                  index: index
                })
              ))
            }
            <Box className="top_Date">
              <Typography>YESTERDAY</Typography>
            </Box>
            {User &&
              User?.map((user, index) => (
                FirstUserRow({
                  avatar: user.avatar,
                  name: user.name,
                  subTitle: user.subTitle,
                  time: user.time,
                  index: index
                })
              ))
            }
          </Box>
          <Box
            onClick={() => {
              setNotificationSPupUp(false)
              setNotificationBPupUp(true)
              setShowPopup(true)
            }}
            className="notificationPopUpSeeAllBtn pointer">
            <Typography>View all</Typography>
          </Box>

        </Box>
        {/* Notification Big box */}
        <Box sx={{ display: notificationBPopUp ? "flex" : "none" }} className="NotificationPupUp">
          <Box className="notificationHeader">
            <Box className="notificationHeaderBox1">
              <Box className="notiHeaderItem">
                <Typography className='notiHeaderText'>Notifications</Typography>
                <Typography className='notiSubText pointer'>Mark all as read</Typography>
              </Box>
            </Box>

            <Box className="notificationHeaderBox2">
              <Box className="notiHeaderItem">
                <Box className="search_Field">
                  <img style={{ width: "22px", position: "relative", left: "44px", zIndex: "9" }} src={SearchIcon} />
                  <TextField className='search_Input' sx={{ width: "100%" }} placeholder='Search favorites....' />
                </Box>
              </Box>
              <Box ml={3} className="notiHeaderItem">
                <Box className="storyButton pointer">
                  <Typography mr={2}>Sort by</Typography>
                  <img src={upDownArrow} />
                </Box>
              </Box>
              <img onClick={() => {
                setNotificationBPupUp(false)
                setShowPopup(false)
                document.body.classList.remove("no-scroll")
              }} className='whiteCrossIcon' src={whiteCross} />
            </Box>
          </Box>

          <Box className="notificationContainer">
            <Box className="notiLeftBox">
              <Box className="top_Date disMob">
                <Typography>TODAY</Typography>
              </Box>
              {
                User &&
                User?.map((user, index) => (
                  userRow({
                    avatar: user.avatar,
                    name: user.name,
                    subTitle: user.subTitle,
                    time: user.time,
                    index: index
                  })
                ))
              }
            </Box>
            <Box className="notiRightBox">
              <Box className="user_info">
                <Box className="userPhoto">
                  <img className='NotiUserPhoto' src={User[userIndex].avatar} />
                </Box>
                <Box className="user_infoText">
                  <Typography className='User_name'>{User[userIndex].name}</Typography>
                  <Typography className='User_date'>{User[userIndex].date} {User[userIndex].time}</Typography>
                </Box>
              </Box>

              <Box className="user_summery">
                <Typography className="user_Summary_text">{User[userIndex].summeryHeader}</Typography>
                <Typography className="user_Summary_sub_text">{User[userIndex].summery}</Typography>
              </Box>

            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
