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
import cardThamnel from "../../Assets/images/Booking/luxury-sunset-poolside-relaxation-with-stunning-landscape-view-generated-by-ai 1.png"
import locationIcon from "../../Assets/images/Booking/location.svg"
import starIcon from "../../Assets/images/star-48.png"
import EditIcon from "../../Assets/images/Booking/EditIcon.svg"
import DeleteIcon from "../../Assets/images/Booking/DeleteIcon.svg"




export default function Booking() {
  const [phoneNumber, setPhoneNumber] = useState('');


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

                      <FormControl fullWidth style={{ width: "49%", marginRight: "10px" }}>
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

                      <TextField sx={{ width: "366px", marginLeft: "10px" }} id="outlined-basic" label="No. of Attendees" variant="outlined" defaultValue={" "} />
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
                      <TextField sx={{ width: "752px" }} id="outlined-basic" label="Name of the Project" variant="outlined" defaultValue={"Project Name"} />
                    </Box>
                    <Box className="eventInputBox">

                      <FormControl fullWidth style={{ width: "49%", marginRight: "10px" }}>
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
                      <TextField sx={{ width: "366px", marginLeft: "10px" }} id="outlined-basic" label="Contact Person Name" variant="outlined" defaultValue={"Vijay Kumar"} />
                      <img className='ContactPersonIcon' src={person} />

                    </Box>
                    <Box className="eventInputBox">
                      <Box sx={{ marginRight: "10px" }} mb={1} className="eventInputBox contactBoxItem home_card_input">
                        <PhoneInput
                          placeholder="Enter phone number"
                          value={phoneNumber}
                          onChange={(e) => handlePhoneNumberChange(e)}
                          defaultCountry="IN"
                        />
                      </Box>
                      <TextField sx={{ width: "366px", marginLeft: "10px" }} id="outlined-basic" label="Email address" variant="outlined" defaultValue={"info@mywebsite.com"} />
                      <img className='EmailMessageIcon' src={MessageIcon} />
                    </Box>
                    <Box className="eventInputBox">
                      <TextField sx={{ width: "366px", marginRight: "10px" }} id="outlined-basic" label="Alternate Contact Person" variant="outlined" defaultValue={"JHON DOE"} placeholder='JHON DOE' />
                      <img className='AlternateContactIcon' src={person} />
                      <Box sx={{ marginLeft: "10px" }} mb={1} className="eventInputBox contactBoxItem home_card_input">
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
                        <Typography className='BookingChargesText'>Booking Charges : </Typography>
                        <Typography className='InrText'>INR 45,000.00</Typography>
                      </Box>

                      <Box mb={4} className="bookingPriceTextBox">
                        <Typography className='BookingChargesText'>Convenience fee @ 10% : </Typography>
                        <Typography className='OnlyBookingPrice'>(Only on booking price)</Typography>
                        <Typography className='InrText'>INR 50.00</Typography>
                      </Box>


                      <Box className="bookingPriceTextBox">
                        <Typography className='BookingChargesText'>Discountss : </Typography>
                        <Typography className='InrText'>-INR 2800.00</Typography>
                      </Box>
                      <Box className="bookingPriceTextBox">
                        <Typography className='BookingChargesText'>Cleaning fee : </Typography>
                        <Typography className='InrText'>INR 500.00</Typography>
                      </Box>
                      <Box className="bookingPriceTextBox">
                        <Typography className='BookingChargesText'>Coupon value : </Typography>
                        <Typography className='InrText'>-INR 1000.00</Typography>
                      </Box>
                    </Box>


                    <Box className="bookingText">
                      <Box className="bookingTextHeader">
                        <Typography>Taxes</Typography>
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
                          <Typography ml={1.5} className='BookingChargesText'>Security Deposit (Refundable) : </Typography>
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
