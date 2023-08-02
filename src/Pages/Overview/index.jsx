import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import "./overview.css"
import { Box, TextField, Typography } from '@mui/material';

//venueDetails icon
import timeIcon from "../../Assets/images/venuDetailsIcon/download (2) 1.svg"
import peopleIcon from "../../Assets/images/venuDetailsIcon/Vector.svg"
import squerIcon from "../../Assets/images/venuDetailsIcon/download 1.svg"
import videoIcon from "../../Assets/images/venuDetailsIcon/download (1) 1.svg"
import bulding from "../../Assets/images/venuDetailsIcon/Vector (1).svg"
import group from "../../Assets/images/venuDetailsIcon/download (3) 1.svg"

import verifyIcon from "../../Assets/images/verifyIcon.svg"
import daimonIcon from "../../Assets/images/dimonIcon.svg"
import DiscriptionIcon from "../../Assets/images/Untitled design.png";
import animetor from "../../Assets/images/animetor.png"


import DownArrow from "../../Assets/images/GrayDownArrow.svg";
import rightArrow from "../../Assets/images/rightArrow.svg"
import Avatar from "../../Assets/images/427a1f62a2d277788a853d203733f8d5.png";
import RedCross from "../../Assets/images/RedCross.svg";



//component
import Features from '../MainMenu/Features';
import Dont from '../MainMenu/Do&Dont';
import Rules from '../MainMenu/Rules';
import CancellationPolicy from "../MainMenu/CancellationPolicy";
import OpeningTime from "../MainMenu/Opening";
import Map from "../MainMenu/Map";
import Reviews from "../MainMenu/Reviews"



export default function Overview() {
  const [seeDescription, setSeeDescription] = useState(false)
  const [seeAmenities, setSeeAmenities] = useState(false)
  const [priceDay, setPriceDay] = useState(false)

  const [bookingRequest, setBookingRequest] = useState(false)
  const [host, setHost] = useState(false)

  const Overview = useRef(null);
  const Amenities = useRef(null);
  const Feature = useRef(null);
  const DoDon = useRef(null);
  const Rule = useRef(null);
  const Cancellation = useRef(null);
  const Openinghours = useRef(null);
  const Location = useRef(null);
  const Review = useRef(null);



  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };










  return (
    <>
      <Box className="overviewContainer">
        <Box className="leftSideMenu">
          <Box className="menuBox">
            <Box onClick={() => scrollToSection(Overview)} className="menuItem ">
              <Typography >Overview</Typography>
            </Box>
            <Box onClick={() => scrollToSection(Amenities)} className="menuItem">
              <Typography>Amenities</Typography>
            </Box>
            <Box onClick={() => scrollToSection(Feature)} className="menuItem">
              <Typography>Features</Typography>
            </Box>
            <Box onClick={() => scrollToSection(DoDon)} className="menuItem ">
              <Typography>Do’s & Don’ts</Typography>
            </Box>
            <Box onClick={() => scrollToSection(Rule)} className="menuItem">
              <Typography>Rules</Typography>
            </Box>
            <Box onClick={() => scrollToSection(Cancellation)} className="menuItem">
              <Typography>Cancellation Policy</Typography>
            </Box>
            <Box onClick={() => scrollToSection(Openinghours)} className="menuItem">
              <Typography>Opening hours</Typography>
            </Box>
            <Box onClick={() => scrollToSection(Location)} className="menuItem">
              <Typography>Location</Typography>
            </Box>
            <Box onClick={() => scrollToSection(Review)} className="menuItem">
              <Typography>Reviews</Typography>
            </Box>
          </Box>
        </Box>

        <Box className="mobileViewMenu">
          <Box onClick={() => scrollToSection(Overview)} className="menuItem ">
            <Typography >Overview</Typography>
          </Box>
          <Box onClick={() => scrollToSection(Amenities)} className="menuItem">
            <Typography>Amenities</Typography>
          </Box>
          <Box onClick={() => scrollToSection(Feature)} className="menuItem">
            <Typography>Features</Typography>
          </Box>
          <Box onClick={() => scrollToSection(DoDon)} className="menuItem ">
            <Typography>Do’s & Don’ts</Typography>
          </Box>
          <Box onClick={() => scrollToSection(Rule)} className="menuItem">
            <Typography>Rules</Typography>
          </Box>
          <Box onClick={() => scrollToSection(Cancellation)} className="menuItem">
            <Typography>Cancellation Policy</Typography>
          </Box>
          <Box onClick={() => scrollToSection(Openinghours)} className="menuItem">
            <Typography>Opening hours</Typography>
          </Box>
          <Box onClick={() => scrollToSection(Location)} className="menuItem">
            <Typography>Location</Typography>
          </Box>
          <Box onClick={() => scrollToSection(Review)} className="menuItem">
            <Typography>Reviews</Typography>
          </Box>

        </Box>



        <Box ref={Overview} className="mainBox">
          <Box className="venueDetailsBox">
            <Box className="venueDetails bottomBorder venueDetailsFirst">

              <Box sx={{ width: "173px" }} className="venueDetailsItem">
                <img className='venueDetailsIcon' src={videoIcon} />
                <Typography>Film Shooting </Typography>
              </Box>
              <Box sx={{ width: "146px" }} className="venueDetailsItem">
                <img className='venueDetailsIcon' src={bulding} />
                <Typography>Corporate Event</Typography>
              </Box>
              <Box sx={{ width: "169px" }} className="venueDetailsItem">
                <img className='venueDetailsIcon' src={group} />
                <Typography>Individual Event</Typography>
              </Box>

            </Box>
            <Box className="venueDetails ">

              <Box sx={{ width: "85px" }} className="venueDetailsItem bottomVDT">
                <img className='venueDetailsIcon' src={timeIcon} />
                <Typography>8 hr min</Typography>
              </Box>
              <Box sx={{ width: "94px" }} className="venueDetailsItem bottomVDT">
                <img className='venueDetailsIcon' src={peopleIcon} />
                <Typography>60 people</Typography>
              </Box>
              <Box sx={{ width: "94px" }} className="venueDetailsItem bottomVDT">
                <img className='venueDetailsIcon' src={squerIcon} />
                <Typography>1300 sq/ft </Typography>
              </Box>
              <Box sx={{ width: "138px" }} className="venueDetailsItem bottomVDT">
                <img className='venueDetailsIcon' src={bulding} />
                <Typography>parking</Typography>
              </Box>
              <Box sx={{ width: "138px" }} className="venueDetailsItem bottomVDT">
                <img className='venueDetailsIcon' src={bulding} />
                <Typography>street parking</Typography>
              </Box>
              <Box sx={{ width: "121px" }} className="venueDetailsItem bottomVDT">
                <img className='venueDetailsIcon' src={videoIcon} />
                <Typography>cc cameras</Typography>
              </Box>

            </Box>

          </Box>

          <Box className="verified mainItemBox ">
            <Box sx={{ borderRight: "1px solid #EEE" }} className="verifyBox verifyBoxBorderBottom">
              <img style={{ width: "18px", height: "18px", position: "relative", bottom: "2px", right: "9px" }} src={verifyIcon} />
              <Box className="verifyText">
                <Typography className='verifyHeaderText'>Verified Property</Typography>
                <Typography className='verifySubText'>This property is a verified property</Typography>
              </Box>

            </Box>
            <Box className="verifyBox">
              <img style={{ width: "18px", height: "18px", position: "relative", bottom: "2px", right: "9px" }} src={daimonIcon} />
              <Box className="verifyText">
                <Typography className='verifyHeaderText'>Exclusive Property</Typography>
                <Typography className='verifySubText'>This property is a Exclusive Property</Typography>
              </Box>
            </Box>
          </Box>

          <Box className="Description mainItemBox">
            <Box className="DescriptionHeader">
              <Box ml={2} mr={2} className="descriptionIconBox">
                <img style={{ width: "100%" }} src={DiscriptionIcon} />
              </Box>
              <Typography className='descriptionHeaderText'>Description of the property</Typography>
            </Box>

            <Box sx={{ height: seeDescription ? "auto" : "155px" }} className="descriptionTextBox">
              {
                seeDescription ?
                  <Typography className='descriptionText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry s standard dummy text ever since the 1500s, when an unknown printer took a & scrambled it to make a type specimen book. It has survived not only five centuries, galley of type. ake a type specimen book. It has survived Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry s standard dummy text ever since the 1500s, when an unknown printer took a & scrambled it to make a type specimen book. It has survived not only five centuries, galley of type. ake a type specimen book. It has survived Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry s standard dummy text ever since the 1500s, when an unknown printer took a & scrambled it to make a type specimen book. It has survived not only five centuries.</Typography>
                  :
                  <Typography className='descriptionText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry s standard dummy text ever since the 1500s, when an unknown printer took a & scrambled it to make a type specimen book. It has survived <samp className='descriptionGrayText'>not only five centuries, galley of type. ake a type specimen book. It has survived Lorem Ipsum is simply dummy text of the printing and...</samp> </Typography>
              }
            </Box>
            <Box mb={1.5} className="seeMoreBtn">
              <Typography onClick={() => setSeeDescription(!seeDescription)} pl={2} className='seeMoreText'>
                {seeDescription ? "+ SEE LESS" : "+ SEE MORE"}
              </Typography>
            </Box>
          </Box>

          <Box ref={Amenities} className={seeAmenities ? "AmenitiesOpen" : "Amenities mainItemBox"}>

            <Box className="amenitiesHeader">
              <Box ml={2} mr={2} className="AmenitiesIconBox">
                <img style={{ width: "100%" }} src={animetor} />
              </Box>
              <Typography className='descriptionHeaderText'>Amenities</Typography>
            </Box>

            <Box className={seeAmenities ? "amenitiesTextBoxOpen" : "amenitiesTextBox"}>

              <Box className="amenitiesTextArya">
                <Box className="amenitiesText">
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Kitchen</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Bathrooms </Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Sink </Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Large table</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Sound System</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Wifi</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Air Conditioning</Typography>
                  </Box>
                </Box>

                <Box className="amenitiesText">
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Tableware Heat</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Heat</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Conference Phone</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Stage</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Green Screen</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Grill</Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: seeAmenities ? "flex" : "none" }} className="amenitiesTextArya">
                <Box className="amenitiesText">
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Kitchen</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Bathrooms </Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Sink </Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Large table</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Sound System</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Wifi</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Air Conditioning</Typography>
                  </Box>
                </Box>

                <Box className="amenitiesText">
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Tableware Heat</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Heat</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Conference Phone</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Stage</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Green Screen</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Grill</Typography>
                  </Box>
                </Box>

                <Box className="amenitiesText amenitiesTextVisibility ">
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Whiteboard</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Photography Lighting</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Power Tie-in</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Projector and Screen / TV</Typography>
                  </Box>
                  <Box className="amenitiesItem">
                    <img src={rightArrow} />
                    <Typography ml={1}>Private Entrance</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box mt={2} className="seeMoreBtn AmenitiesSeeMore">
              <Typography
                onClick={() => setSeeAmenities(!seeAmenities)}
                pl={2}
                className='seeMoreText amenitiesSeeMoreBtn'>{seeAmenities ? "+ SEE LESS" : "+ SEE MORE"}</Typography>
            </Box>
          </Box>



          {/* component */}

          <Features Feature={Feature} />
          <Dont DoDon={DoDon} />
          <Rules Rule={Rule} />
          <CancellationPolicy Cancellation={Cancellation} />
          <OpeningTime Openinghours={Openinghours} />
          <Map Location={Location} />
          <Reviews Review={Review} />
        </Box>

        <Box className="buyingHoverBox">
          <Box onClick={() => {
            setBookingRequest(!bookingRequest)
            setHost(false)
          }} className={bookingRequest ? "requestBookingBtn buyingHoverBtnClicked" : "requestBookingBtn"}>
            <Typography className={bookingRequest ? "buyingHoverBtnText buyingHoverBtnTextClicked" : 'buyingHoverBtnText'}>Request Booking</Typography>
          </Box>
          <Box onClick={() => {
            setHost(!host)
            setBookingRequest(false)
          }} className={host ? "messageHostButton buyingHoverBtnClicked" : "messageHostButton"}>
            <Typography className={host ? "buyingHoverBtnText buyingHoverBtnTextClicked" : 'buyingHoverBtnText'}>Message Host</Typography>
          </Box>

        </Box>



        <Box className={bookingRequest ? "buyingBox bookingPosition" : host ? "buyingBox hostPosition" : "buyingBox"}>
          <Box className={bookingRequest ? "bookingRequest DisplayBookingRequest" : "bookingRequest DisplayNoneBookingRequest"}>
            <Box className="priseBox">
              <Box className="priceText">
                <Typography className='poppins' sx={{ fontSize: "15px" }}>INR. </Typography>
                <Typography className='poppinsBold' sx={{ fontSize: "27px" }}> 1750/</Typography>
                <Typography className='poppins' sx={{ fontSize: "13px" }}>hr</Typography>
              </Box>
              <Box mt={1} className="priceSubText">
                <Typography sx={{ fontSize: "14px" }} className='po'>2 hr. minimum</Typography>
              </Box>
            </Box>
            <Box className={priceDay ? "priseInputBox priseInputBoxHeight2" : "priseInputBox priseInputBoxHeight1"}>

              <Box mb={2.5} className="priseInputItem">
                <img src={DownArrow} />
                <TextField sx={{ width: "305px" }} className='eventInput' placeholder='Select your Event' />
              </Box>

              <Box mb={2.5} className="priseInputItem">

                <Box className="DateFieldInput">

                  <Box className="priseInputItem priseDateInput">
                    <img src={DownArrow} />
                    <input
                      style={{
                        width: "101px",
                        borderRadius: "10px 0 0 10px",
                        border: "1px solid #EAEAEA",
                        padding: "0px 7px"
                      }}
                      className='eventInput pSize' placeholder='Start Date' />
                  </Box>

                  <Box className="priseInputItem priseDateInput">
                    <img src={DownArrow} />
                    <input
                      style={{
                        width: "101px",
                        border: "1px solid #EAEAEA",
                        padding: "0px 7px"
                      }}

                      className='eventInput pSize' placeholder='Start Time' />
                  </Box>

                  <Box className="priseInputItem priseDateInput">
                    <img src={DownArrow} />
                    <input
                      style={{
                        width: "101px",
                        borderRadius: "0 10px 10px 0",
                        border: "1px solid #EAEAEA",
                        padding: "0px 7px"
                      }}
                      className='eventInput pSize' placeholder='End Time' />
                  </Box>
                </Box>



                <Box sx={{ display: priceDay ? "flex" : "none" }} className="DateField_Input">
                  <img onClick={() => setPriceDay(false)} className='dayCross' src={RedCross} />

                  <Box className="priseInputItem priseDateInput">
                    <img src={DownArrow} />
                    <input
                      style={{
                        width: "101px",
                        borderRadius: "10px 0 0 10px",
                        border: "1px solid #EAEAEA",
                        padding: "0px 7px"
                      }}
                      className='eventInput pSize' placeholder='Jul 26,2023' />
                  </Box>

                  <Box className="priseInputItem priseDateInput">
                    <img src={DownArrow} />
                    <input
                      style={{
                        width: "101px",
                        border: "1px solid #EAEAEA",
                        padding: "0px 7px"
                      }}

                      className='eventInput pSize' placeholder='Start Time' />
                  </Box>

                  <Box className="priseInputItem priseDateInput">
                    <img src={DownArrow} />
                    <input
                      style={{
                        width: "101px",
                        borderRadius: "0 10px 10px 0",
                        border: "1px solid #EAEAEA",
                        padding: "0px 7px"
                      }}
                      className='eventInput pSize' placeholder='End Time' />
                  </Box>
                </Box>


              </Box>


              <Box mb={2.5} className="priseInputItem totalPriseBox">
                <Typography onClick={() => setPriceDay(true)} sx={{ color: "#EA4335" }} className='TotalPriseText'>Add a day</Typography>
                <Typography className='TotalPriseText'>Total hours: 0</Typography>
              </Box>

              <Box mb={2.5} className="priseInputItem">
                <img src={DownArrow} />
                <TextField sx={{ width: "305px" }} className='eventInput' placeholder='No. of Guests' />
              </Box>

              <Box mb={2.5} className="priseInputItem">
                <Link className='BookingBtnLink' to={"/booking"}>
                  <Box className="requestBookingBtn">
                    <Typography className='redBtnText'>Request Booking</Typography>
                  </Box>
                </Link>
              </Box>

            </Box>
          </Box>

          <Box className={host ? "hostDetails hostDetailsDisplay" : "hostDetails hostDetailsDisplayNone"}
            id={priceDay ? "hostDetails2" : "hostDetails1"}
          >
            <Box mt={1} className="hostDetailsBox">
              <Box className="avatarImage">
                <img style={{ width: "100%" }} src={Avatar} />
              </Box>
              <Box className="avatarInfo">
                <Typography mb={1.5} className='hostHeaderText'>Hosted by Mikey</Typography>
                <Box mb={1.5} className="avatarDetailsTextField">
                  <Typography className='hostDetailsLabel'>Response rating:</Typography>
                  <Typography ml={0.5} className='hostDetailsLabelText'>Excellent</Typography>
                </Box>
                <Box mb={1.5} className="avatarDetailsTextField">
                  <Typography className='hostDetailsLabel'>Response time:</Typography>
                  <Typography ml={0.5} className='hostDetailsLabelText'>A few hours</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="requestBookingBtn">
              <Typography className='redBtnText'>Message Host</Typography>
            </Box>
          </Box>
        </Box>

      </Box >
    </>
  )
}
