import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Box, Input, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material'
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./booking.css"

import companyLogo from "../../Assets/images/companyNavlogo.png";
import cross from "../../Assets/images/blackCross.svg";
import person from "../../Assets/images/Booking/Vector.svg"
import MessageIcon from "../../Assets/images/Booking/MessageIcon.svg"
import cardThamnel from "../../Assets/images/BookingDetails/dfsdfsdfds.jpeg"
import locationIcon from "../../Assets/images/Booking/location.svg"
import starIcon from "../../Assets/images/star-48.png"
import EditIcon from "../../Assets/images/Booking/EditIcon.svg"
import DeleteIcon from "../../Assets/images/Booking/DeleteIcon.svg"





export default function Booking() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const IText = "This helps us cover transaction fess and provide support for your booking."


  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e?.target?.value);
  };

  return (
    <>
      <Box className="bookingContainer">
        <Box className="bookingNav">
          <Box className="logBox">
            <img className='pointer' src={companyLogo} />
          </Box>
          <Box className="CrossBox">
            <Link to={"/"}>
              <img src={cross} />
            </Link>
          </Box>
        </Box>

        <Box className="bookingContentBox">
          <Box className="bookingContent">

            <Box className="BookingHeader">
              <Typography>Request to Book</Typography>
              <Box className="BookingHeaderUnderLine"></Box>
            </Box>

            <Box className="bookingMainBox">

              <Box className="BookingInputBox">
                <Box className="BInput1">
                  <Box className="headerLabel">
                    <Box className="numberLogo">
                      <Typography className='numberText'>1</Typography>
                    </Box>
                    <Typography className='numberLabel'>Event Details</Typography>
                  </Box>

                  <Box className="BookingOneInputBox">
                    <Box className="eventInputBox">

                      <FormControl sx={{ marginBottom: "10px" }} fullWidth className='TypeEventInput'>
                        <InputLabel id="demo-simple-select-label" style={{ top: "-5px" }}>Type of Event</InputLabel>
                        <Select
                          name="years"
                          style={{ height: '48px', borderRadius: '4px', marginBottom: "9px" }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={value.years}
                          // onChange={handleChange}
                          label="Graduation year"
                        >
                          <MenuItem value={"text"}>Text</MenuItem>
                          <MenuItem value={"text"}>Text</MenuItem>
                        </Select>
                      </FormControl>

                      <TextField sx={{ marginBottom: "10px" }} className='additionalInput' id="outlined-basic" label="No. of Attendees" variant="outlined" defaultValue={" "} />
                    </Box>
                    <Box className="aboutProjectInputBox">
                      <TextField sx={{ width: "100%" }} id="outlined-basic" label="About your project" variant="outlined" defaultValue={" "} />
                    </Box>
                  </Box>
                </Box>



                <Box className="BInput2">
                  <Box className="headerLabel">
                    <Box className="numberLogo">
                      <Typography className='numberText'>2</Typography>
                    </Box>
                    <Typography className='numberLabel'>Share your information</Typography>
                  </Box>

                  <Box className="BookingOneInputBox">
                    <Box className="projectNameInputBox">
                      <TextField className='projectNameInput' id="outlined-basic" label="Name of the Project" variant="outlined" defaultValue={"Project Name"} />
                    </Box>
                    <Box className="eventInputBox">

                      <FormControl fullWidth className='stageTowTypeEvent' >
                        <InputLabel id="demo-simple-select-label" style={{ top: "-5px" }}>Type of Event</InputLabel>
                        <Select
                          name="years"
                          style={{ height: '48px', borderRadius: '4px', marginBottom: "9px" }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={value.years}
                          // onChange={handleChange}
                          label="Graduation year"
                        >
                          <MenuItem value={"text"}>Text</MenuItem>
                          <MenuItem value={"text"}>Text</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField className='contactName' id="outlined-basic" label="Contact Person Name" variant="outlined" defaultValue={"Vijay Kumar"} />
                      <img className='ContactPersonIcon' src={person} />

                    </Box>
                    <Box className="eventInputBox">
                      <Box mb={1} className=" contactBoxItem home_card_input mr">
                        <PhoneInput
                          placeholder="Enter phone number"
                          value={phoneNumber}
                          onChange={(e) => handlePhoneNumberChange(e)}
                          defaultCountry="IN"
                        />
                      </Box>
                      <TextField className='emailInput' id="outlined-basic" label="Email address" variant="outlined" defaultValue={"info@mywebsite.com"} />
                      <img className='EmailMessageIcon' src={MessageIcon} />
                    </Box>
                    <Box className="eventInputBox">

                      <TextField className='alternantContactInput' id="outlined-basic" label="Alternate Contact Person" variant="outlined" defaultValue={"JHON DOE"} placeholder='JHON DOE' />
                      <img className='AlternateContactIcon' src={person} />

                      <Box mb={1} className=" contactBoxItem home_card_input ">
                        <PhoneInput
                          placeholder="Enter phone number"
                          value={phoneNumber}
                          onChange={(e) => handlePhoneNumberChange(e)}
                          defaultCountry="IN"
                        />
                      </Box>
                    </Box>


                  </Box>

                </Box>
                <Box className="bookingCheckBox">
                  <FormControlLabel control={<Checkbox />} label="I have read and accept the Cancellation Policy & Refund Policy" />
                  <FormControlLabel control={<Checkbox />} label="I have read and accept the Terms & Conditions and Privacy Policy" />
                  <FormControlLabel control={<Checkbox />} label="By requesting the host you accept to share your information." />
                </Box>
                <Box className="BookingBtnBox">
                  <Box className="BookingRequestBtn">
                    <Typography>Request Booking</Typography>
                  </Box>
                </Box>

              </Box>

              <Box className="BookingDetailsBox">

                <Box className="BookingDetailsCard">
                  <Box className="BookingDetailsOneBox">

                    <Box className="BookingDetailsTopCard">
                      <Box className="BookingDetailsTopCardThamnal">
                        <img src={cardThamnel} />
                      </Box>
                      <Box className="BookingDetailsTopCardTextBox">
                        <Typography className='BookingDetailsTopCardHeader'>Coworking Space: Serendipity Labs</Typography>
                        <Box className="BookingDetailsTopCardLocation">
                          <img src={locationIcon} />
                          <Typography className='topCardLocationText'>Lonavala, Maharashtra, India</Typography>
                        </Box>
                        <Box className="topCardStarBox">
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
                    <Box className="redPriceBanarBox">
                      <Box className="redPriceBanar">
                        <Typography className='inrText'>INR.</Typography>
                        <Typography ml={1.5} className='redBanerPrice'>1750/</Typography>
                        <Typography mt={1} mr={1.5} className='hr'>hr</Typography>
                        <Typography className="banerLastText">2 hr. minimum</Typography>
                      </Box>
                    </Box>

                    <Box className="BookingDateBox">
                      <Box className="BookingDate">
                        <Typography>Aug 22 , 2023</Typography>
                        <Typography>09:00am</Typography>
                        <Typography>06:00pm</Typography>
                        <img className='BookingEditIcon' src={EditIcon} />
                        <img className='BookingDeleteIcon' src={DeleteIcon} />
                      </Box>
                    </Box>

                    <Box className="addDays">
                      <Box className="addDaysBtn">
                        <Typography>Add a day</Typography>
                      </Box>
                      <Typography className='totalHoursText'>Total hours: 9</Typography>
                    </Box>

                    <Box className="couponcodeBox">
                      <Typography>Coupon Codes: </Typography>
                    </Box>

                    <Box className="couponEnterField">
                      <TextField sx={{ width: "100%" }} placeholder='Enter your Coupon' />
                      <Box className="redArrowBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="10" viewBox="0 0 24 10" fill="none">
                          <path d="M23.1062 4.46337L18.8112 0.223797C18.3271 -0.254504 17.4988 0.0847786 17.4988 0.760427V4.02784H0.972156C0.434554 4.02784 0 4.46337 0 5C0 5.53663 0.434554 5.97216 0.972156 5.97216H17.4988V9.23957C17.4988 9.91522 18.3271 10.2545 18.8112 9.7762L23.1062 5.53663C23.4066 5.24012 23.4066 4.75988 23.1062 4.46337Z" fill="white" />
                        </svg>
                      </Box>


                    </Box>


                  </Box>


                  <Box className="BookingDetailsTowBox">
                    <Box className="bookingCharge">
                      <Box className="bookingPriceTextBox">
                        <Typography className='BookingChargesText'>Booking Charges :
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <title>{IText}</title>
                            <path d="M5.99975 0C2.68648 0 0 2.68648 0 5.99975C0 9.31302 2.68648 12 5.99975 12C9.31302 12 12 9.31302 12 5.99975C12 2.68648 9.31302 0 5.99975 0ZM7.24876 9.29879C6.93994 9.4207 6.6941 9.51314 6.50971 9.57714C6.32584 9.64114 6.112 9.67314 5.8687 9.67314C5.49486 9.67314 5.20381 9.58171 4.99657 9.39937C4.78933 9.21702 4.68622 8.98591 4.68622 8.70502C4.68622 8.59581 4.69384 8.48406 4.70908 8.37029C4.72483 8.25651 4.74971 8.12851 4.78375 7.98476L5.17029 6.61943C5.20432 6.48838 5.23378 6.36394 5.25714 6.24813C5.28051 6.1313 5.29168 6.02413 5.29168 5.9266C5.29168 5.75289 5.25562 5.63098 5.184 5.56241C5.11137 5.49384 4.97473 5.46032 4.77105 5.46032C4.67149 5.46032 4.56889 5.47505 4.46375 5.50603C4.35962 5.53803 4.26921 5.56698 4.19505 5.59543L4.29714 5.17486C4.5501 5.07175 4.79238 4.98337 5.02349 4.91022C5.2546 4.83606 5.47302 4.79949 5.67873 4.79949C6.05003 4.79949 6.33651 4.8899 6.53816 5.0687C6.73879 5.248 6.83987 5.48114 6.83987 5.76762C6.83987 5.82705 6.83276 5.93168 6.81905 6.08102C6.80533 6.23086 6.77943 6.36749 6.74184 6.49295L6.35733 7.85422C6.32584 7.96343 6.2979 8.08838 6.27251 8.22806C6.24762 8.36775 6.23543 8.47441 6.23543 8.54603C6.23543 8.72686 6.27556 8.85029 6.35683 8.91581C6.43708 8.98133 6.57778 9.01435 6.77689 9.01435C6.87086 9.01435 6.976 8.99759 7.09486 8.96508C7.2127 8.93257 7.29803 8.90362 7.35187 8.87873L7.24876 9.29879ZM7.1807 3.77346C7.0014 3.94006 6.78552 4.02337 6.53308 4.02337C6.28114 4.02337 6.06375 3.94006 5.88292 3.77346C5.70311 3.60686 5.61219 3.40419 5.61219 3.16749C5.61219 2.9313 5.70362 2.72813 5.88292 2.56C6.06375 2.39137 6.28114 2.30756 6.53308 2.30756C6.78552 2.30756 7.00191 2.39137 7.1807 2.56C7.36 2.72813 7.4499 2.9313 7.4499 3.16749C7.4499 3.4047 7.36 3.60686 7.1807 3.77346Z" fill="#B3B3B3" />
                          </svg>

                        </Typography>
                        <Typography className='InrText'>INR 45,000.00</Typography>
                      </Box>

                      <Box mb={4} className="bookingPriceTextBox">
                        <Typography className='BookingChargesText'>Convenience fee @ 10% :
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <title>{IText}</title>
                            <path d="M5.99975 0C2.68648 0 0 2.68648 0 5.99975C0 9.31302 2.68648 12 5.99975 12C9.31302 12 12 9.31302 12 5.99975C12 2.68648 9.31302 0 5.99975 0ZM7.24876 9.29879C6.93994 9.4207 6.6941 9.51314 6.50971 9.57714C6.32584 9.64114 6.112 9.67314 5.8687 9.67314C5.49486 9.67314 5.20381 9.58171 4.99657 9.39937C4.78933 9.21702 4.68622 8.98591 4.68622 8.70502C4.68622 8.59581 4.69384 8.48406 4.70908 8.37029C4.72483 8.25651 4.74971 8.12851 4.78375 7.98476L5.17029 6.61943C5.20432 6.48838 5.23378 6.36394 5.25714 6.24813C5.28051 6.1313 5.29168 6.02413 5.29168 5.9266C5.29168 5.75289 5.25562 5.63098 5.184 5.56241C5.11137 5.49384 4.97473 5.46032 4.77105 5.46032C4.67149 5.46032 4.56889 5.47505 4.46375 5.50603C4.35962 5.53803 4.26921 5.56698 4.19505 5.59543L4.29714 5.17486C4.5501 5.07175 4.79238 4.98337 5.02349 4.91022C5.2546 4.83606 5.47302 4.79949 5.67873 4.79949C6.05003 4.79949 6.33651 4.8899 6.53816 5.0687C6.73879 5.248 6.83987 5.48114 6.83987 5.76762C6.83987 5.82705 6.83276 5.93168 6.81905 6.08102C6.80533 6.23086 6.77943 6.36749 6.74184 6.49295L6.35733 7.85422C6.32584 7.96343 6.2979 8.08838 6.27251 8.22806C6.24762 8.36775 6.23543 8.47441 6.23543 8.54603C6.23543 8.72686 6.27556 8.85029 6.35683 8.91581C6.43708 8.98133 6.57778 9.01435 6.77689 9.01435C6.87086 9.01435 6.976 8.99759 7.09486 8.96508C7.2127 8.93257 7.29803 8.90362 7.35187 8.87873L7.24876 9.29879ZM7.1807 3.77346C7.0014 3.94006 6.78552 4.02337 6.53308 4.02337C6.28114 4.02337 6.06375 3.94006 5.88292 3.77346C5.70311 3.60686 5.61219 3.40419 5.61219 3.16749C5.61219 2.9313 5.70362 2.72813 5.88292 2.56C6.06375 2.39137 6.28114 2.30756 6.53308 2.30756C6.78552 2.30756 7.00191 2.39137 7.1807 2.56C7.36 2.72813 7.4499 2.9313 7.4499 3.16749C7.4499 3.4047 7.36 3.60686 7.1807 3.77346Z" fill="#B3B3B3" />
                          </svg>
                        </Typography>
                        <Typography className='OnlyBookingPrice'>(Only on booking price)</Typography>
                        <Typography className='InrText'>INR 50.00</Typography>
                      </Box>


                      <Box className="bookingPriceTextBox">
                        <Typography className='BookingChargesText'>Discountss :
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <title>{IText}</title>
                            <path d="M5.99975 0C2.68648 0 0 2.68648 0 5.99975C0 9.31302 2.68648 12 5.99975 12C9.31302 12 12 9.31302 12 5.99975C12 2.68648 9.31302 0 5.99975 0ZM7.24876 9.29879C6.93994 9.4207 6.6941 9.51314 6.50971 9.57714C6.32584 9.64114 6.112 9.67314 5.8687 9.67314C5.49486 9.67314 5.20381 9.58171 4.99657 9.39937C4.78933 9.21702 4.68622 8.98591 4.68622 8.70502C4.68622 8.59581 4.69384 8.48406 4.70908 8.37029C4.72483 8.25651 4.74971 8.12851 4.78375 7.98476L5.17029 6.61943C5.20432 6.48838 5.23378 6.36394 5.25714 6.24813C5.28051 6.1313 5.29168 6.02413 5.29168 5.9266C5.29168 5.75289 5.25562 5.63098 5.184 5.56241C5.11137 5.49384 4.97473 5.46032 4.77105 5.46032C4.67149 5.46032 4.56889 5.47505 4.46375 5.50603C4.35962 5.53803 4.26921 5.56698 4.19505 5.59543L4.29714 5.17486C4.5501 5.07175 4.79238 4.98337 5.02349 4.91022C5.2546 4.83606 5.47302 4.79949 5.67873 4.79949C6.05003 4.79949 6.33651 4.8899 6.53816 5.0687C6.73879 5.248 6.83987 5.48114 6.83987 5.76762C6.83987 5.82705 6.83276 5.93168 6.81905 6.08102C6.80533 6.23086 6.77943 6.36749 6.74184 6.49295L6.35733 7.85422C6.32584 7.96343 6.2979 8.08838 6.27251 8.22806C6.24762 8.36775 6.23543 8.47441 6.23543 8.54603C6.23543 8.72686 6.27556 8.85029 6.35683 8.91581C6.43708 8.98133 6.57778 9.01435 6.77689 9.01435C6.87086 9.01435 6.976 8.99759 7.09486 8.96508C7.2127 8.93257 7.29803 8.90362 7.35187 8.87873L7.24876 9.29879ZM7.1807 3.77346C7.0014 3.94006 6.78552 4.02337 6.53308 4.02337C6.28114 4.02337 6.06375 3.94006 5.88292 3.77346C5.70311 3.60686 5.61219 3.40419 5.61219 3.16749C5.61219 2.9313 5.70362 2.72813 5.88292 2.56C6.06375 2.39137 6.28114 2.30756 6.53308 2.30756C6.78552 2.30756 7.00191 2.39137 7.1807 2.56C7.36 2.72813 7.4499 2.9313 7.4499 3.16749C7.4499 3.4047 7.36 3.60686 7.1807 3.77346Z" fill="#B3B3B3" />
                          </svg>

                        </Typography>
                        <Typography className='InrText'>-INR 2800.00</Typography>
                      </Box>
                      <Box className="bookingPriceTextBox">
                        <Typography className='BookingChargesText'>Cleaning fee :
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <title>{IText}</title>
                            <path d="M5.99975 0C2.68648 0 0 2.68648 0 5.99975C0 9.31302 2.68648 12 5.99975 12C9.31302 12 12 9.31302 12 5.99975C12 2.68648 9.31302 0 5.99975 0ZM7.24876 9.29879C6.93994 9.4207 6.6941 9.51314 6.50971 9.57714C6.32584 9.64114 6.112 9.67314 5.8687 9.67314C5.49486 9.67314 5.20381 9.58171 4.99657 9.39937C4.78933 9.21702 4.68622 8.98591 4.68622 8.70502C4.68622 8.59581 4.69384 8.48406 4.70908 8.37029C4.72483 8.25651 4.74971 8.12851 4.78375 7.98476L5.17029 6.61943C5.20432 6.48838 5.23378 6.36394 5.25714 6.24813C5.28051 6.1313 5.29168 6.02413 5.29168 5.9266C5.29168 5.75289 5.25562 5.63098 5.184 5.56241C5.11137 5.49384 4.97473 5.46032 4.77105 5.46032C4.67149 5.46032 4.56889 5.47505 4.46375 5.50603C4.35962 5.53803 4.26921 5.56698 4.19505 5.59543L4.29714 5.17486C4.5501 5.07175 4.79238 4.98337 5.02349 4.91022C5.2546 4.83606 5.47302 4.79949 5.67873 4.79949C6.05003 4.79949 6.33651 4.8899 6.53816 5.0687C6.73879 5.248 6.83987 5.48114 6.83987 5.76762C6.83987 5.82705 6.83276 5.93168 6.81905 6.08102C6.80533 6.23086 6.77943 6.36749 6.74184 6.49295L6.35733 7.85422C6.32584 7.96343 6.2979 8.08838 6.27251 8.22806C6.24762 8.36775 6.23543 8.47441 6.23543 8.54603C6.23543 8.72686 6.27556 8.85029 6.35683 8.91581C6.43708 8.98133 6.57778 9.01435 6.77689 9.01435C6.87086 9.01435 6.976 8.99759 7.09486 8.96508C7.2127 8.93257 7.29803 8.90362 7.35187 8.87873L7.24876 9.29879ZM7.1807 3.77346C7.0014 3.94006 6.78552 4.02337 6.53308 4.02337C6.28114 4.02337 6.06375 3.94006 5.88292 3.77346C5.70311 3.60686 5.61219 3.40419 5.61219 3.16749C5.61219 2.9313 5.70362 2.72813 5.88292 2.56C6.06375 2.39137 6.28114 2.30756 6.53308 2.30756C6.78552 2.30756 7.00191 2.39137 7.1807 2.56C7.36 2.72813 7.4499 2.9313 7.4499 3.16749C7.4499 3.4047 7.36 3.60686 7.1807 3.77346Z" fill="#B3B3B3" />
                          </svg>

                        </Typography>
                        <Typography className='InrText'>INR 500.00</Typography>
                      </Box>
                      <Box className="bookingPriceTextBox">
                        <Typography className='BookingChargesText'>Coupon value :
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <title>{IText}</title>
                            <path d="M5.99975 0C2.68648 0 0 2.68648 0 5.99975C0 9.31302 2.68648 12 5.99975 12C9.31302 12 12 9.31302 12 5.99975C12 2.68648 9.31302 0 5.99975 0ZM7.24876 9.29879C6.93994 9.4207 6.6941 9.51314 6.50971 9.57714C6.32584 9.64114 6.112 9.67314 5.8687 9.67314C5.49486 9.67314 5.20381 9.58171 4.99657 9.39937C4.78933 9.21702 4.68622 8.98591 4.68622 8.70502C4.68622 8.59581 4.69384 8.48406 4.70908 8.37029C4.72483 8.25651 4.74971 8.12851 4.78375 7.98476L5.17029 6.61943C5.20432 6.48838 5.23378 6.36394 5.25714 6.24813C5.28051 6.1313 5.29168 6.02413 5.29168 5.9266C5.29168 5.75289 5.25562 5.63098 5.184 5.56241C5.11137 5.49384 4.97473 5.46032 4.77105 5.46032C4.67149 5.46032 4.56889 5.47505 4.46375 5.50603C4.35962 5.53803 4.26921 5.56698 4.19505 5.59543L4.29714 5.17486C4.5501 5.07175 4.79238 4.98337 5.02349 4.91022C5.2546 4.83606 5.47302 4.79949 5.67873 4.79949C6.05003 4.79949 6.33651 4.8899 6.53816 5.0687C6.73879 5.248 6.83987 5.48114 6.83987 5.76762C6.83987 5.82705 6.83276 5.93168 6.81905 6.08102C6.80533 6.23086 6.77943 6.36749 6.74184 6.49295L6.35733 7.85422C6.32584 7.96343 6.2979 8.08838 6.27251 8.22806C6.24762 8.36775 6.23543 8.47441 6.23543 8.54603C6.23543 8.72686 6.27556 8.85029 6.35683 8.91581C6.43708 8.98133 6.57778 9.01435 6.77689 9.01435C6.87086 9.01435 6.976 8.99759 7.09486 8.96508C7.2127 8.93257 7.29803 8.90362 7.35187 8.87873L7.24876 9.29879ZM7.1807 3.77346C7.0014 3.94006 6.78552 4.02337 6.53308 4.02337C6.28114 4.02337 6.06375 3.94006 5.88292 3.77346C5.70311 3.60686 5.61219 3.40419 5.61219 3.16749C5.61219 2.9313 5.70362 2.72813 5.88292 2.56C6.06375 2.39137 6.28114 2.30756 6.53308 2.30756C6.78552 2.30756 7.00191 2.39137 7.1807 2.56C7.36 2.72813 7.4499 2.9313 7.4499 3.16749C7.4499 3.4047 7.36 3.60686 7.1807 3.77346Z" fill="#B3B3B3" />
                          </svg>

                        </Typography>
                        <Typography className='InrText'>-INR 1000.00</Typography>
                      </Box>
                    </Box>


                    <Box className="bookingText">
                      <Box className="bookingTextHeader">
                        <Typography sx={{ alignItems: "center" }} pr={2}>Taxes
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginLeft: "5" }}>
                            <title>{IText}</title>
                            <path d="M5.99975 0C2.68648 0 0 2.68648 0 5.99975C0 9.31302 2.68648 12 5.99975 12C9.31302 12 12 9.31302 12 5.99975C12 2.68648 9.31302 0 5.99975 0ZM7.24876 9.29879C6.93994 9.4207 6.6941 9.51314 6.50971 9.57714C6.32584 9.64114 6.112 9.67314 5.8687 9.67314C5.49486 9.67314 5.20381 9.58171 4.99657 9.39937C4.78933 9.21702 4.68622 8.98591 4.68622 8.70502C4.68622 8.59581 4.69384 8.48406 4.70908 8.37029C4.72483 8.25651 4.74971 8.12851 4.78375 7.98476L5.17029 6.61943C5.20432 6.48838 5.23378 6.36394 5.25714 6.24813C5.28051 6.1313 5.29168 6.02413 5.29168 5.9266C5.29168 5.75289 5.25562 5.63098 5.184 5.56241C5.11137 5.49384 4.97473 5.46032 4.77105 5.46032C4.67149 5.46032 4.56889 5.47505 4.46375 5.50603C4.35962 5.53803 4.26921 5.56698 4.19505 5.59543L4.29714 5.17486C4.5501 5.07175 4.79238 4.98337 5.02349 4.91022C5.2546 4.83606 5.47302 4.79949 5.67873 4.79949C6.05003 4.79949 6.33651 4.8899 6.53816 5.0687C6.73879 5.248 6.83987 5.48114 6.83987 5.76762C6.83987 5.82705 6.83276 5.93168 6.81905 6.08102C6.80533 6.23086 6.77943 6.36749 6.74184 6.49295L6.35733 7.85422C6.32584 7.96343 6.2979 8.08838 6.27251 8.22806C6.24762 8.36775 6.23543 8.47441 6.23543 8.54603C6.23543 8.72686 6.27556 8.85029 6.35683 8.91581C6.43708 8.98133 6.57778 9.01435 6.77689 9.01435C6.87086 9.01435 6.976 8.99759 7.09486 8.96508C7.2127 8.93257 7.29803 8.90362 7.35187 8.87873L7.24876 9.29879ZM7.1807 3.77346C7.0014 3.94006 6.78552 4.02337 6.53308 4.02337C6.28114 4.02337 6.06375 3.94006 5.88292 3.77346C5.70311 3.60686 5.61219 3.40419 5.61219 3.16749C5.61219 2.9313 5.70362 2.72813 5.88292 2.56C6.06375 2.39137 6.28114 2.30756 6.53308 2.30756C6.78552 2.30756 7.00191 2.39137 7.1807 2.56C7.36 2.72813 7.4499 2.9313 7.4499 3.16749C7.4499 3.4047 7.36 3.60686 7.1807 3.77346Z" fill="#B3B3B3" />
                          </svg>
                        </Typography>
                      </Box>
                      <Box className="bookingPriceTextBox">
                        <Typography className='BookingChargesText textSpamP'>Add GST @ 18%
                          <span className='textSpam' >(taxes applicable on booking fee, convenience fee and cleaning fee)</span></Typography>
                        <Typography className='InrText'>INR 5,900.00</Typography>
                      </Box>

                    </Box>
                    <Box className="securityDeposit">
                      <Box className="bookingPriceTextBox">
                        <Box className="securityDepositSubBox">
                          <input type='checkBox' />
                          <Typography ml={1.5} className='BookingChargesText'>Security Deposit (Refundable) :
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <title>{IText}</title>
                              <path d="M5.99975 0C2.68648 0 0 2.68648 0 5.99975C0 9.31302 2.68648 12 5.99975 12C9.31302 12 12 9.31302 12 5.99975C12 2.68648 9.31302 0 5.99975 0ZM7.24876 9.29879C6.93994 9.4207 6.6941 9.51314 6.50971 9.57714C6.32584 9.64114 6.112 9.67314 5.8687 9.67314C5.49486 9.67314 5.20381 9.58171 4.99657 9.39937C4.78933 9.21702 4.68622 8.98591 4.68622 8.70502C4.68622 8.59581 4.69384 8.48406 4.70908 8.37029C4.72483 8.25651 4.74971 8.12851 4.78375 7.98476L5.17029 6.61943C5.20432 6.48838 5.23378 6.36394 5.25714 6.24813C5.28051 6.1313 5.29168 6.02413 5.29168 5.9266C5.29168 5.75289 5.25562 5.63098 5.184 5.56241C5.11137 5.49384 4.97473 5.46032 4.77105 5.46032C4.67149 5.46032 4.56889 5.47505 4.46375 5.50603C4.35962 5.53803 4.26921 5.56698 4.19505 5.59543L4.29714 5.17486C4.5501 5.07175 4.79238 4.98337 5.02349 4.91022C5.2546 4.83606 5.47302 4.79949 5.67873 4.79949C6.05003 4.79949 6.33651 4.8899 6.53816 5.0687C6.73879 5.248 6.83987 5.48114 6.83987 5.76762C6.83987 5.82705 6.83276 5.93168 6.81905 6.08102C6.80533 6.23086 6.77943 6.36749 6.74184 6.49295L6.35733 7.85422C6.32584 7.96343 6.2979 8.08838 6.27251 8.22806C6.24762 8.36775 6.23543 8.47441 6.23543 8.54603C6.23543 8.72686 6.27556 8.85029 6.35683 8.91581C6.43708 8.98133 6.57778 9.01435 6.77689 9.01435C6.87086 9.01435 6.976 8.99759 7.09486 8.96508C7.2127 8.93257 7.29803 8.90362 7.35187 8.87873L7.24876 9.29879ZM7.1807 3.77346C7.0014 3.94006 6.78552 4.02337 6.53308 4.02337C6.28114 4.02337 6.06375 3.94006 5.88292 3.77346C5.70311 3.60686 5.61219 3.40419 5.61219 3.16749C5.61219 2.9313 5.70362 2.72813 5.88292 2.56C6.06375 2.39137 6.28114 2.30756 6.53308 2.30756C6.78552 2.30756 7.00191 2.39137 7.1807 2.56C7.36 2.72813 7.4499 2.9313 7.4499 3.16749C7.4499 3.4047 7.36 3.60686 7.1807 3.77346Z" fill="#B3B3B3" />
                            </svg>

                          </Typography>
                        </Box>
                        <Typography className='InrText'>INR 350.00</Typography>
                      </Box>


                    </Box>
                    <Box className="totalPayment">
                      <Box className="totalPriceTextBox">
                        <Typography className='totalPriceLabel'>Total Payment :</Typography>
                        <Typography className='totalPriceAmount'>INR 48,000.00</Typography>
                      </Box>

                    </Box>

                  </Box>
                </Box>
              </Box>

            </Box>

          </Box>
        </Box>



      </Box >
    </>
  )
}
