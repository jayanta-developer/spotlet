import React, { useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import "./bookingDetails.css";
import NavBar from '../NavBar';
import TopTabs from '../../Component/TopTabs';
import Footer from "../Footer";

import GoogleMap from '../../Component/GoogleMap';


import coverPhoto from "../../Assets/images/BookingDetails/dfsdfsdfds - Copy.jpeg"
import starIcon from "../../Assets/images/star-48.png"
import locationIcon from "../../Assets/images/Group 54.svg";
import RightArrow from "../../Assets/images/BookingDetails/RoundEightArrow.svg"
import visaIcon from "../../Assets/images/BookingDetails/Visa.png"





export default function BookingDetails() {
  const navigate = useNavigate();
  const [propertyNameVisibility, setPropertyNameVisibility] = useState(false)


  const latitude = 28.230553471285813
  const longitude = 75.97394025062951

  return (
    <>
      <NavBar />
      <Box className="bookingDetailsContainer">
        <Box className="coverBox">
          <Box className="backButtonBox">
            <TopTabs />
            <Box onClick={() => navigate('/')} className="backButton">
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
                <path d="M6.5375 14.4479C6.37917 14.4479 6.22084 14.3896 6.09584 14.2646L0.6625 8.83125C-0.220833 7.94792 -0.220833 6.49792 0.6625 5.61458L6.09584 0.18125C6.3375 -0.0604167 6.7375 -0.0604167 6.97917 0.18125C7.22084 0.422917 7.22084 0.822917 6.97917 1.06458L1.54583 6.49792C1.14583 6.89792 1.14583 7.54792 1.54583 7.94792L6.97917 13.3812C7.22084 13.6229 7.22084 14.0229 6.97917 14.2646C6.85417 14.3812 6.69584 14.4479 6.5375 14.4479Z" fill="#1A1E25" />
              </svg>
              <Typography ml={1}>Go back</Typography>
            </Box>
          </Box>

          <Box className="coverPhotoBox">
            <Box className="coverPhoto">
              <img src={coverPhoto} />
            </Box>
          </Box>

          <Box className="venueLocation">
            <Box mb={1.5} className="locationHeader">
              <Typography className='poppinsBold' variant='h5'>Film Shooting</Typography>
              {/* <Typography sx={{ marginLeft: "10px", }} className='poppinsBold' variant='h5'>Serendipity Labs</Typography> */}
              <Box onClick={() => setPropertyNameVisibility(true)} className="ClickHereTab">
                <Typography id='clickHereText'>Click Here</Typography>
              </Box>
            </Box>
            <Typography sx={{ display: propertyNameVisibility ? "block" : "none" }} className='locationId'>
              Coworking Space: Serendipity Labs
            </Typography>
            <Box className="locationSubText">
              <Box className="locationLogo"></Box>
              <Box className="CityLocation">
                <Box className="cityLocationTextBox">
                  <img src={locationIcon} style={{ marginRight: "15px" }} />
                  <Typography className='poppins'>Lonavala, Maharashtra, India</Typography>
                </Box>
                <Divider className='divider' sx={{ margin: "0px 10px" }} orientation="vertical" flexItem />
                <Box className="cityLocationTextBox cityLocationTextBox2">
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


        <Box className="BookingDetailContinent">
          <Box className="BookingDetailBox">

            <Box className="VisitSummary BookingDetailBoxCard">
              <Box className="DetailBoxCardHeader">
                <Typography>Visit Summary</Typography>
              </Box>
              <Box className="DetailContent VisitSummaryContent">

                <Box className="DetailsCardRowBox">
                  <Box className="labelBox">
                    <Typography>Visit Date</Typography>
                    <Typography>Visit Time</Typography>
                  </Box>
                  <Box className="dataBox">
                    <Typography className='fontWeight'>24/03/2023</Typography>
                    <Typography className='fontWeight'>09:42 pm</Typography>
                  </Box>
                </Box>
                <Box className="DetailsCardRowBox">
                  <Box className="labelBox">
                    <Typography>Visitor Name</Typography>
                    <Typography>Visitor Contact number</Typography>
                  </Box>
                  <Box className="dataBox">
                    <Typography className='fontWeight'>Jhon Doe</Typography>
                    <Typography className='fontWeight'>123-456-7890</Typography>
                  </Box>
                </Box>
                <Box className="DetailsCardRowBox">
                  <Box className="labelBox">
                    <Typography>Number of persons visiting</Typography>
                    <Typography>Alternate contact name</Typography>
                  </Box>
                  <Box className="dataBox">
                    <Typography className='fontWeight'>20</Typography>
                    <Typography className='fontWeight'>Stiven Doe</Typography>
                  </Box>
                </Box>
                <Box className="DetailsCardRowBox">
                  <Box className="labelBox">
                    <Typography>Visit Status</Typography>
                    <Typography>Alternate contact number</Typography>
                  </Box>
                  <Box className="dataBox">
                    <Typography className='GreenText'>Complete</Typography>
                    <Typography className='fontWeight'>123-456-7890</Typography>
                  </Box>
                </Box>
                <Box className="DetailsCardRowBox">
                  <Typography className="SpecialRequestsText">Special requests:</Typography>
                  <Box className="SpecialRequestsBox">
                    <Box className="SpecialRequestsItem">
                      <img src={RightArrow} />
                      <Typography>If for any reason you wish to cancel a service before your flight </Typography>
                    </Box>
                    <Box className="SpecialRequestsItem">
                      <img src={RightArrow} />
                      <Typography>wish to cancel a service before your flight </Typography>
                    </Box>
                    <Box className="SpecialRequestsItem">
                      <img src={RightArrow} />
                      <Typography>If for any reason you wish to cancel a service before your flight.</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>



            <Box className="UserDetails BookingDetailBoxCard">
              <Box className="DetailBoxCardHeader">
                <Typography>User Details</Typography>
              </Box>
              <Box className="DetailContent UserDetailsContent">

                <Box className="DetailsCardRowBox">
                  <Box className="labelBox">
                    <Typography>Name of the Project</Typography>
                    <Typography>Booking Location as a</Typography>
                  </Box>
                  <Box className="dataBox">
                    <Typography className='fontWeight'>Coworking Space: Serendipity<br /> Labs</Typography>
                    <Typography className='fontWeight'>Individual Name</Typography>
                  </Box>
                </Box>
                <Box className="DetailsCardRowBox">
                  <Box className="labelBox">
                    <Typography>Contact Person Name</Typography>
                    <Typography>Contact Number</Typography>
                  </Box>
                  <Box className="dataBox">
                    <Typography className='fontWeight'>JHON STIVEN</Typography>
                    <Typography className='GreenText'>123-456-7890</Typography>
                  </Box>
                </Box>
                <Box className="DetailsCardRowBox">
                  <Box className="labelBox">
                    <Typography>Email Address</Typography>
                  </Box>
                  <Box className="dataBox">
                    <Typography className='RedText'>info@spotlet.com</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>


            <Box className="RejectedSummary BookingDetailBoxCard">
              <Box className="DetailBoxCardHeader">
                <Typography>User Details</Typography>
              </Box>
              <Box className="DetailContent RejectedSummaryContent">

                <Box className="DetailsCardRowBox">
                  <Box className="labelBox">
                    <Typography>Rejected On</Typography>
                    <Typography>No of Attendees</Typography>
                  </Box>
                  <Box className="dataBox">
                    <Typography className='fontWeight'>24/03/2023       08:45pm</Typography>
                    <Typography className='fontWeight'>100</Typography>
                  </Box>
                </Box>
                <Box className="DetailsCardRowBox">
                  <Typography className="SpecialRequestsText">Rejected Reason</Typography>
                  <Box className="RejectedReasonTextBox">
                    <Typography mb={3.5}>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </Typography>
                    <Typography>Lorem Ipsum available, but the majority  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Typography>

                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>


          <Box className="BookingDetailBox">

            <Box className="BookingSummary BookingDetailBoxCard">
              <Box className="DetailBoxCardHeader">
                <Typography>Booking Summary</Typography>
              </Box>
              <Box className="DetailContent BookingSummaryContent">

                <Box className="DetailsCardRowBox">
                  <Box className="labelBox">
                    <Typography>Booking ID</Typography>
                    <Typography>Location</Typography>
                  </Box>
                  <Box className="dataBox">
                    <Typography className='fontWeight'>BDS458IO568</Typography>
                    <Typography className='fontWeight'>Lonavala, Maharashtra, India</Typography>
                  </Box>
                </Box>
                <Box className="DetailsCardRowBox">
                  <Box className="labelBox">
                    <Typography>Booking Requested Date</Typography>
                    <Typography>Booking Status</Typography>
                  </Box>
                  <Box className="dataBox">
                    <Typography className='fontWeight'>24/03/2020    09:42</Typography>
                    <Typography className='fontWeight GreenText'>Done</Typography>
                  </Box>
                </Box>
                <Box className="DetailsCardRowBox">
                  <Box className="labelBox">
                    <Typography>Booking Amounts</Typography>
                    <Typography>Booking approved</Typography>
                  </Box>
                  <Box className="dataBox">
                    <Typography className='fontWeight RedText'>INR 45000</Typography>
                    <Typography className='fontWeight'>03/04/2023     05.30pm</Typography>
                  </Box>
                </Box>
                <Box className="DetailsCardRowBox">
                  <Box className="labelBox">
                    <Typography>Event Dates and timings</Typography>
                    <Typography>Booking Rejected Date</Typography>
                  </Box>
                  <Box className="dataBox">
                    <Typography className='fontWeight'>03/04/2023   09.00am 05.30pm</Typography>
                    <Typography className='fontWeight'>03/04/2023     05.30pm</Typography>
                  </Box>
                </Box>


              </Box>

            </Box>


            <Box className="EventSummary BookingDetailBoxCard">
              <Box className="DetailBoxCardHeader">
                <Typography>Event Summary</Typography>
              </Box>
              <Box className="DetailContent EventSummaryContent">
                <Box className="DetailsCardRowBox">
                  <Box className="labelBox">
                    <Typography>Event and activity type</Typography>
                    <Typography>No of Attendees</Typography>
                  </Box>
                  <Box className="dataBox">
                    <Typography className='fontWeight'>BDS458IO568</Typography>
                    <Typography className='fontWeight'>Lonavala, Maharashtra, India</Typography>
                  </Box>
                </Box>
                <Box className="DetailsCardRowBox">
                  <Typography className="SpecialRequestsText">About the project</Typography>
                  <Box className="RejectedReasonTextBox">
                    <Typography mb={3.5}>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>



            <Box className="Paymentsummary BookingDetailBoxCard">
              <Box className="DetailBoxCardHeader">
                <Typography>Payment summary</Typography>
              </Box>
              <Box className="DetailContent PaymentSummaryContent">
                <Box className="DetailsCardRowBox">
                  <Box className="labelBox">
                    <Typography>Paid date</Typography>
                    <Typography>Paid amount</Typography>
                  </Box>
                  <Box className="dataBox">
                    <Typography className='fontWeight'>24/03/2020    09:42pm</Typography>
                    <Typography className='fontWeight RedText'>INR 45000</Typography>
                  </Box>
                </Box>
                <Box className="DetailsCardRowBox">
                  <Box className="labelBox">
                    <Typography>Payment method</Typography>
                    <Typography>Coupon used</Typography>
                  </Box>
                  <Box className="dataBox">
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <Typography className='fontWeight'>Card</Typography>
                      <img style={{ width: "37px", height: "27px" }} src={visaIcon} />
                    </Box>
                    <Typography className='fontWeight YellowText'>INR45GFRT0025PIUYT</Typography>
                  </Box>
                </Box>
                <Box className="DetailsCardRowBox">
                  <Box className="labelBox">
                    <Typography>Payment status</Typography>
                  </Box>
                  <Box className="dataBox">
                    <Typography className='fontWeight GreenText'>Completed</Typography>
                  </Box>
                </Box>

              </Box>

            </Box>


            <Box className="HostDetails BookingDetailBoxCard">
              <Box className="DetailBoxCardHeader">
                <Typography>Host Details</Typography>
              </Box>
              <Box className="DetailContent HostDetailsContent">
                <Box className="DetailsCardRowBox">
                  <Box className="labelBox">
                    <Typography>Host Name</Typography>
                    <Typography>Host contact number</Typography>
                  </Box>
                  <Box className="dataBox">
                    <Typography className='fontWeight'>JHON STIVEN DOE</Typography>
                    <Typography className='fontWeight'>+123 456 7890</Typography>
                  </Box>
                </Box>

              </Box>

            </Box>

          </Box>

        </Box>
        <Box className="MapBox">
          <Box className="MapHeader">
            <Typography className='MapHeaderText'>
              Location Summary
            </Typography>
            <Typography className='MapSubHeaderText'>
              Postmaster, Post Office BAZARGATE (SUB OFFICE), MUMBAI, MAHARASHTRA (MH), India (IN), Pin Code:- 400001
            </Typography>
          </Box>
          <Box className="DetailContent MapBoxContent">
            <GoogleMap latitude={latitude} longitude={longitude} />
          </Box>

        </Box>
        <Box className="lastContentBox">
          <Box className="CancellationSummary lastBookingDetailBoxCard">
            <Box className="DetailBoxCardHeader">
              <Typography>Cancellation Summary</Typography>
            </Box>
            <Box className="DetailContent CancellationSummaryContent">
              <Box className="labelBox">
                <Typography className='boxWidth'>Cancellation Reason</Typography>
              </Box>
              <Box mb={1} className="dataBox">
                <Typography className='fontWeight boxWidth'>If for any reason you wish to cancel a service before your flight </Typography>
              </Box>
              <Box className="labelBox">
                <Typography className='boxWidth'>Cancellation Notes</Typography>
              </Box>
              <Box mb={1} className="dataBox">
                <Typography className='fontWeight boxWidth'>If for any reason you wish to cancel a service before your flight </Typography>
              </Box>
              <Box className="labelBox">
                <Typography className='boxWidth'>Cancelled on</Typography>
              </Box>
              <Box className="dataBox">
                <Typography className='fontWeight boxWidth'>24/03/2020    09:42pm</Typography>
              </Box>

            </Box>

          </Box>

          <Box className="RefundSummary lastBookingDetailBoxCard">
            <Box className="DetailBoxCardHeader">
              <Typography>Refund Summary</Typography>
            </Box>
            <Box className="DetailContent RefundSummaryContent">

              <Box className="DetailsCardRowBox">
                <Box className="labelBox">
                  <Typography>Refund Processed Date</Typography>
                  <Typography>Refund amount</Typography>
                </Box>
                <Box className="dataBox">
                  <Typography className='fontWeight'>Refund process will be done 1 week</Typography>
                  <Typography className='fontWeight RedText'>INR 40000</Typography>
                </Box>
              </Box>
              <Box className="DetailsCardRowBox">
                <Box className="labelBox">
                  <Typography>Refund method</Typography>
                  <Typography>Refund Status</Typography>
                </Box>
                <Box className="dataBox">
                  <Typography className='fontWeight'>Refunded to the same account</Typography>
                  <Typography className='fontWeight RedText'>processing</Typography>
                </Box>
              </Box>

            </Box>
          </Box>
        </Box>

      </Box>
      <Footer />
    </>
  )
}
